import { ImageUploader, ImageDeleter } from "@/shared/types/storage";
import { prisma } from "@/shared/lib/prisma";

interface UpdateProfileImageParams {
  userId: string;
  oldImageUrl?: string | null;
  optimizedBuffer: Buffer;
  fileName: string;
  uploader: ImageUploader;
  deleter: ImageDeleter;
  bucket: string;
  endpoint: string;
}

export async function updateProfileImage({
  userId,
  oldImageUrl,
  optimizedBuffer,
  fileName,
  uploader,
  deleter,
  bucket,
  endpoint,
}: UpdateProfileImageParams): Promise<{ url: string }> {
  // Delete the old image if it exists and is in the bucket
  if (oldImageUrl && oldImageUrl.includes(endpoint)) {
    const oldFileName = oldImageUrl.replace(`${endpoint}/`, "");
    await deleter({ fileName: oldFileName, bucket });
  }

  // Upload the new image
  const { url } = await uploader({
    fileBuffer: optimizedBuffer,
    fileName,
    mimeType: "image/jpeg",
    bucket,
  });

  // Update the user
  await prisma.user.update({
    where: { id: userId },
    data: { image: url },
  });

  return { url };
}
