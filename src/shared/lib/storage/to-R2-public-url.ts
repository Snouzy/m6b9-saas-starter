export function toR2PublicUrl(s3Url: string, publicBaseUrl: string): string {
  try {
    const url = new URL(s3Url);
    return `${publicBaseUrl}${url.pathname}`;
  } catch {
    // Si déjà une URL publique ou mal formée, retourne tel quel
    return s3Url;
  }
}
