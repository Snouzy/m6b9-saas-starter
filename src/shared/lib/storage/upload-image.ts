import path from "path";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";

// Cette version stocke localement dans /public/uploads (à adapter pour S3)
export async function uploadProfileImage(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.type === "image/png" ? "png" : "jpg";
  const filename = `${randomUUID()}.${ext}`;
  const uploadPath = path.join(process.cwd(), "public", "uploads", filename);

  await writeFile(uploadPath, buffer);

  // Retourne l’URL publique
  return `/uploads/${filename}`;
}
