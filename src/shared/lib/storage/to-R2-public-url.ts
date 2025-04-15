export function toR2PublicUrl(s3Url: string, publicBaseUrl: string): string {
  try {
    const url = new URL(s3Url);
    return `${publicBaseUrl}${url.pathname}`;
  } catch {
    return s3Url;
  }
}
