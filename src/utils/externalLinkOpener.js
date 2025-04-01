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
  const isTwitter = /Twitter|TwitterWebContainer/i.test(ua);
  const isInstagram = /Instagram/i.test(ua);
  const isLinkedIn = /LinkedInApp/i.test(ua);
  const isTikTok = /musical_ly|tiktok/i.test(ua);
  const isSnapchat = /Snapchat/i.test(ua);
  const isWebKit = /AppleWebKit/i.test(ua);
  const isSafari = /Safari/i.test(ua) && !/Chrome|CriOS/i.test(ua);
  const isLine = /Line\//i.test(ua);
  const isWeChat = /MicroMessenger/i.test(ua);

  return {
    isAndroid,
    isIOS,
    isFacebook,
    isTwitter,
    isInstagram,
    isLinkedIn,
    isTikTok,
    isSnapchat,
    isWebKit,
    isSafari,
    isLine,
    isWeChat,
    isInAppBrowser:
      isFacebook ||
      isTwitter ||
      isInstagram ||
      isLinkedIn ||
      isTikTok ||
      isSnapchat ||
      isLine ||
      isWeChat ||
      /GSA\/|WebView|wv/.test(ua) ||
      (isIOS && !(/Safari/i.test(ua) && !/CriOS|FxiOS|OPiOS|mercury/i.test(ua))),
  };
};

// Force le lien à ouvrir dans le navigateur externe
export const openExternalLink = (url) => {
  const browser = detectBrowser();
  const encodedUrl = encodeURIComponent(url);
  let worked = false;

  // Préparation des URLs avec différents schémas
  const chromeUrl = `googlechrome://navigate?url=${url}`;
  const intentUrl = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;
  const universalUrl = url.startsWith("http") ? url : `https://${url}`;

  // Utilisez un iframe pour minimiser les blocages
  const createHiddenIframe = (src) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.src = src;
    document.body.appendChild(iframe);
    return iframe;
  };

  // Fonction de nettoyage
  const cleanup = (elements) => {
    setTimeout(() => {
      elements.forEach((el) => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    }, 1000);
  };

  // Force l'ouverture avec la technique de double window.open
  const forceWindowOpen = (targetUrl) => {
    const newWin = window.open("about:blank");
    if (newWin) {
      newWin.opener = null;
      newWin.location.href = targetUrl;
      worked = true;
      return true;
    }
    return false;
  };

  // Appliquer une technique spécifique à l'application
  if (browser.isFacebook) {
    // Technique spécifique pour Facebook
    if (browser.isIOS) {
      const fbAppBrowserUrl = `fb://browser?url=${encodedUrl}`;

      // Essayer d'ouvrir dans le navigateur Facebook externe
      const fbLink = document.createElement("a");
      fbLink.setAttribute("href", fbAppBrowserUrl);
      fbLink.style.display = "none";
      document.body.appendChild(fbLink);
      fbLink.click();

      // Fallback: essayer Safari
      setTimeout(() => {
        if (!worked) {
          // Astuce spécifique pour iOS avec universal links
          createHiddenIframe(`safari-https://${url.replace(/^https?:\/\//, "")}`);

          // Dernier recours: utiliser la méthode standard
          setTimeout(() => forceWindowOpen(url), 500);
        }
      }, 500);

      cleanup([fbLink]);
    } else if (browser.isAndroid) {
      // Essayer intent pour Android
      const intentLink = document.createElement("a");
      intentLink.setAttribute("href", intentUrl);
      intentLink.style.display = "none";
      document.body.appendChild(intentLink);
      intentLink.click();

      // Fallback à Chrome
      setTimeout(() => {
        if (!worked) window.location.href = chromeUrl;

        // Dernier recours: redirection directe
        setTimeout(() => {
          if (!worked) window.location.href = universalUrl;
        }, 300);
      }, 300);

      cleanup([intentLink]);
    }
  } else if (browser.isTwitter) {
    // Technique pour Twitter
    if (browser.isIOS) {
      // Pour Twitter iOS
      const twitterBrowserUrl = `twitter://open-safari?url=${encodedUrl}`;
      window.location.href = twitterBrowserUrl;

      // Fallback à Safari
      setTimeout(() => {
        if (!worked) {
          const iframe = createHiddenIframe("x-web-search:///");
          setTimeout(() => {
            iframe.contentWindow.location.href = universalUrl;
          }, 100);
        }
      }, 500);
    } else {
      // Android: essayer intent
      window.location.href = intentUrl;

      // Fallbacks
      setTimeout(() => {
        if (!worked) window.location.href = chromeUrl;
        setTimeout(() => {
          if (!worked) forceWindowOpen(universalUrl);
        }, 300);
      }, 300);
    }
  } else if (browser.isIOS) {
    // Techniques iOS génériques
    // Essayer la navigation safari privée
    const safariPrivateUrl = `x-web-search://?${universalUrl}`;
    window.location.href = safariPrivateUrl;

    // Utiliser une combinaison de techniques
    setTimeout(() => {
      if (!worked) {
        // Technique avec iframe
        const iframe = createHiddenIframe("about:blank");
        setTimeout(() => {
          try {
            iframe.contentWindow.location.href = universalUrl;
            iframe.onload = () => {
              document.location = universalUrl;
            };
          } catch (e) {
            window.location = universalUrl;
          }
        }, 100);
      }
    }, 200);

    // Dernier recours: forcer window.open
    setTimeout(() => {
      if (!worked) forceWindowOpen(universalUrl);
    }, 500);
  } else if (browser.isAndroid) {
    // Techniques Android génériques
    // Intent URL est le meilleur pour Android
    const androidLink = document.createElement("a");
    androidLink.setAttribute("href", intentUrl);
    androidLink.style.display = "none";
    document.body.appendChild(androidLink);
    androidLink.click();

    // Fallbacks
    setTimeout(() => {
      if (!worked) {
        // Chrome direct
        window.location.href = chromeUrl;

        // Tentative avec registerProtocolHandler (pour browsers compatibles)
        try {
          navigator.registerProtocolHandler("web+external", universalUrl);
          window.location.href = `web+external:${universalUrl}`;
        } catch (e) {
          console.error("Protocol handler registration failed", e);
        }

        // Dernier recours
        setTimeout(() => {
          if (!worked) window.location.href = universalUrl;
        }, 300);
      }
    }, 300);

    cleanup([androidLink]);
  } else {
    // Pour desktop ou cas non-détectés
    const success = forceWindowOpen(universalUrl);
    if (!success) {
      // Si window.open échoue (ex: bloqueurs de popups)
      const desktopLink = document.createElement("a");
      desktopLink.setAttribute("href", universalUrl);
      desktopLink.setAttribute("target", "_blank");
      desktopLink.setAttribute("rel", "noopener noreferrer");
      desktopLink.click();

      cleanup([desktopLink]);
    }
  }

  // Injection dynamique de meta tags pour aider les navigateurs à interpréter correctement l'intention
  const injectMetaTags = () => {
    const metaTags = [
      { name: "apple-itunes-app", content: "app-id=305343404, app-argument=" + universalUrl },
      { property: "al:web:url", content: universalUrl },
      { property: "twitter:app:url:iphone", content: universalUrl },
      { property: "twitter:app:url:ipad", content: universalUrl },
      { property: "twitter:app:url:googleplay", content: universalUrl },
    ];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.keys(tag).forEach((key) => {
        meta.setAttribute(key, tag[key]);
      });
      document.head.appendChild(meta);

      setTimeout(() => {
        document.head.removeChild(meta);
      }, 2000);
    });
  };

  injectMetaTags();

  return false; // Empêcher la navigation par défaut
};
