import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

import { env } from "@/env";

const r2 = new S3Client({
  region: "auto",
  endpoint: env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
});

interface DeleteImageFromR2Params {
  fileName: string;
  bucket: string;
}

export async function deleteImageFromR2({ fileName, bucket }: DeleteImageFromR2Params): Promise<void> {
  await r2.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: fileName,
    }),
  );
}
