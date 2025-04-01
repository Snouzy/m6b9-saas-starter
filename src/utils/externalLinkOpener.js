/**
 * Utilitaire pour ouvrir des liens en dehors des in-app browsers
 */

// Détecte le système d'exploitation et le navigateur
const detectBrowser = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // Détection des plateformes
  const isAndroid = /android/i.test(ua);
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isFacebook = /FBAN|FBAV/.test(ua);
  const isTwitter = /Twitter/i.test(ua);
  const isInstagram = /Instagram/i.test(ua);
  const isLinkedIn = /LinkedInApp/i.test(ua);
  const isTikTok = /musical_ly|tiktok/i.test(ua);

  return {
    isAndroid,
    isIOS,
    isFacebook,
    isTwitter,
    isInstagram,
    isLinkedIn,
    isTikTok,
    isInAppBrowser:
      isFacebook ||
      isTwitter ||
      isInstagram ||
      isLinkedIn ||
      isTikTok ||
      /GSA\/|WebView|wv/.test(ua) ||
      (isIOS && !(/Safari/i.test(ua) && !/CriOS|FxiOS|OPiOS|mercury/i.test(ua))),
  };
};

// Force le lien à ouvrir dans le navigateur externe
export const openExternalLink = (url) => {
  const browser = detectBrowser();
  const encodedUrl = encodeURIComponent(url);

  // Créer un élément invisible pour stocker et cliquer
  const clickableLink = document.createElement("a");

  // Différentes stratégies selon la plateforme détectée
  if (browser.isAndroid) {
    // Android intent pour ouvrir dans le navigateur par défaut
    clickableLink.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;

    // Fallbacks
    setTimeout(() => {
      // Si l'intent ne fonctionne pas, essayer chrome direct
      window.location.href = `googlechrome://navigate?url=${url}`;

      // Dernier recours - rediriger directement
      setTimeout(() => {
        window.location.href = url;
      }, 250);
    }, 100);
  } else if (browser.isIOS) {
    // Pour iOS, essayer plusieurs approches
    if (browser.isFacebook) {
      // Facebook spécifique
      clickableLink.href = `fb://browser?url=${encodedUrl}`;
    } else if (browser.isTwitter) {
      // Twitter spécifique
      clickableLink.href = `twitter://open-safari?url=${encodedUrl}`;
    } else {
      // iOS: essayer d'ouvrir d'abord dans Safari
      clickableLink.href = url;
      clickableLink.target = "_blank";
      clickableLink.rel = "noopener noreferrer";

      // iOS Safari peut nécessiter un protocole spécifique
      setTimeout(() => {
        window.location.href = `x-web-search://?${url}`;

        // Dernier recours
        setTimeout(() => {
          window.location.href = url;
        }, 250);
      }, 100);
    }
  } else {
    // Navigation standard pour desktop ou autres cas
    clickableLink.href = url;
    clickableLink.target = "_blank";
    clickableLink.rel = "noopener noreferrer";
  }

  // Styles pour le rendre invisible
  clickableLink.style.display = "none";
  document.body.appendChild(clickableLink);

  // Simuler un clic utilisateur
  clickableLink.click();

  // Nettoyer
  setTimeout(() => {
    document.body.removeChild(clickableLink);
  }, 1000);

  return false; // Empêcher la navigation par défaut
};
