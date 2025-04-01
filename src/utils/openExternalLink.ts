/**
 * Fonction pour tenter d'ouvrir un lien en dehors du navigateur in-app
 * Supporte diverses plateformes: Facebook, Instagram, Twitter, etc.
 */
const openExternalLink = (url: string): void => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // Liens spécifiques à iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    // Tenter d'ouvrir dans Safari
    window.open("x-web-search://?" + encodeURIComponent(url));

    // Facebook sur iOS
    if (userAgent.includes("FBAN") || userAgent.includes("FBAV")) {
      window.open("googlechrome://navigate?url=" + encodeURIComponent(url));
      window.open("firefox://open-url?url=" + encodeURIComponent(url));
      window.open("opera-https://open-url?url=" + encodeURIComponent(url));
      window.open("safari-https://" + url.replace(/^https?:\/\//, ""));
    }

    // Instagram sur iOS
    if (userAgent.includes("Instagram")) {
      window.open("browser://open?url=" + encodeURIComponent(url));
    }
  }
  // Android
  else if (/android/i.test(userAgent)) {
    // Intent URL pour Android
    const intentUrl = `intent://${url.replace(/^https?:\/\//i, "")}#Intent;scheme=https;package=com.android.chrome;end`;

    // Réseaux sociaux sur Android
    if (userAgent.includes("Facebook") || userAgent.includes("Instagram") || userAgent.includes("Twitter")) {
      window.location.href = intentUrl;
    } else {
      window.open(intentUrl);
    }
  }

  // Fallback général - essayer d'utiliser target _system ou _blank
  setTimeout(() => {
    // Si tout échoue, ouvrir le lien de façon standard
    const a = document.createElement("a");
    a.href = url;
    a.target = "_system";
    a.rel = "noopener noreferrer";
    a.click();
  }, 300);
};

export default openExternalLink;
