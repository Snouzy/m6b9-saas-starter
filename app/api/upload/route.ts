import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

import { uploadImageToR2 } from "@/shared/lib/storage/upload-image-to-R2";
import { prisma } from "@/shared/lib/prisma";
import { logger } from "@/shared/lib/logger";
import { ERROR_MESSAGES } from "@/shared/constants/errors";
import { serverRequiredUser } from "@/entities/user/model/get-server-session-user";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file");
  const user = await serverRequiredUser();

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: ERROR_MESSAGES.NO_FILE_UPLOADED }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  if (buffer.length > MAX_SIZE) {
    return NextResponse.json({ error: ERROR_MESSAGES.FILE_TOO_LARGE }, { status: 413 });
  }

  const allowedTypes = ["image/png", "image/jpeg"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: ERROR_MESSAGES.INVALID_FILE_TYPE }, { status: 415 });
  }

  // --- process image to compress and resize ---
  let optimizedBuffer: Buffer;
  try {
    optimizedBuffer = await sharp(buffer)
      .resize(512, 512, { fit: "inside" }) // max 512x512px
      .toFormat("jpeg", { quality: 80 }) // compresse en JPEG qualité 80
      .toBuffer();
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ error: ERROR_MESSAGES.IMAGE_PROCESSING_ERROR }, { status: 500 });
  }
  // ----------------------------------------------

  const fileName = `profile-images/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;

  try {
    const { url } = await uploadImageToR2({
      fileBuffer: optimizedBuffer,
      fileName,
      mimeType: "image/jpeg",
      bucket: "public",
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { image: url },
      });
    }

    return NextResponse.json({ url });
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ error: ERROR_MESSAGES.UPLOAD_FAILED }, { status: 500 });
  }
};
