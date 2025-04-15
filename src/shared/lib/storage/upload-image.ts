import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { env } from "@/env";

const r2 = new S3Client({
  region: "auto",
  endpoint: env.CLOUDFLARE_R2_ENDPOINT, // ex: https://<accountid>.r2.cloudflarestorage.com
  credentials: {
    accessKeyId: env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
});

interface UploadImageToR2Params {
  fileBuffer: Buffer;
  fileName: string;
  mimeType: string;
  bucket: string;
}

export async function uploadImageToR2({
  fileBuffer,
  fileName,
  mimeType,
  bucket,
}: UploadImageToR2Params): Promise<{ fileName: string; url: string }> {
  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: fileName,
      Body: fileBuffer,
      ContentType: mimeType,
      ACL: "public-read",
    }),
  );
  const url = `${env.CLOUDFLARE_R2_ENDPOINT}/${fileName}`;

  return { fileName, url };
}
