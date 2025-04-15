import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

import { uploadImageToR2 } from "@/shared/lib/storage/upload-image";
import { deleteImageFromR2 } from "@/shared/lib/storage/delete-image";
import { logger } from "@/shared/lib/logger";
import { ERROR_MESSAGES } from "@/shared/constants/errors";
import { env } from "@/env";
import { updateProfileImage } from "@/entities/user/model/update-profile-image";
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

  const fileName = `profile-images/u-${user?.id}.jpg`;

  try {
    const { url } = await updateProfileImage({
      userId: user.id,
      oldImageUrl: user.image,
      optimizedBuffer,
      fileName,
      uploader: uploadImageToR2,
      deleter: deleteImageFromR2,
      bucket: "public",
      endpoint: env.CLOUDFLARE_R2_ENDPOINT,
    });

    return NextResponse.json({ url });
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ error: ERROR_MESSAGES.UPLOAD_FAILED }, { status: 500 });
  }
};
