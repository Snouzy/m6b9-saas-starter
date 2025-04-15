import path from "path";
import fs from "fs";

export async function cleanupTusFiles(uploadId: string) {
  const uploadDir = "public/uploads";
  // Fichier binaire
  const binPath = path.join(uploadDir, uploadId);
  // Fichier JSON de métadonnées
  const metaPath = path.join(uploadDir, `${uploadId}.json`);
  // D’autres fichiers éventuels (selon l’implémentation)
  try {
    if (fs.existsSync(binPath)) fs.unlinkSync(binPath);
    if (fs.existsSync(metaPath)) fs.unlinkSync(metaPath);
  } catch (e) {
    console.warn("Erreur lors du nettoyage des fichiers TUS:", e);
  }
}
