// pages/redirect/[shortId].jsx
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Pour Next.js 13; pour Next.js 12, utilisez useRouter
import Image from "next/image";

// Composant de spinner pour l'affichage pendant la redirection
function Spinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="loading-spinner-image">
          <Image src="/logo_black.svg" alt="Cliikme Logo" width={400} height={400} priority className="loading-spinner-logo" />
        </div>
      </div>
    </div>
  );
}

// Fonction de détection minimale d'in‑app browser basée sur le user agent
function detectInApp() {
  const ua = typeof window !== "undefined" ? navigator.userAgent : "";
  // On détecte quelques cas classiques (Facebook, Instagram, Messenger, etc.)
  const isInApp = /(FB_IAB|FBAN|Instagram|Twitter|LinkedIn|Snapchat|TelegramWebview|GSA)/i.test(ua);
  return { isInApp, ua, skipped: false };
}

// Fonction de deep linking minimaliste pour quelques domaines (exemple : Spotify)
function getDeepLinkInfo(url) {
  try {
    const parsedUrl = new URL(url);
    // Exemple pour Spotify
    if (parsedUrl.hostname.includes("spotify.com")) {
      const parts = parsedUrl.pathname.split("/");
      if (parts.length >= 3) {
        const type = parts[1];
        const id = parts[2];
        if (["track", "album", "artist", "playlist", "show", "episode"].includes(type)) {
          return {
            scheme: "spotify://",
            packageName: "com.spotify.music",
            formatUrl: (url) => `spotify://${type}/${id}`,
          };
        }
      }
    }
    // Vous pouvez ajouter ici d'autres cas (YouTube, Instagram, etc.)
    return null;
  } catch (error) {
    return null;
  }
}

export default function RedirectPage() {
  // Récupération du paramètre "shortId" de l'URL
  const params = useParams();
  const shortId = params?.shortId;
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";

  // États internes
  const [ua, setUA] = useState("");
  const [browserInfo, setBrowserInfo] = useState(undefined);
  const [isInApp, setIsInApp] = useState(false);
  const [phoneType, setPhoneType] = useState(undefined); // "android" ou "ios"
  const [hasRedirected, setHasRedirected] = useState(false);

  // Première initialisation : détection du user agent et de l'environnement
  useEffect(() => {
    const { isInApp, ua } = detectInApp();
    setIsInApp(isInApp);
    setUA(ua);
    if (isInApp) {
      // Détection simplifiée de l'OS en se basant sur le UA
      if (/Android/i.test(ua)) {
        setPhoneType("android");
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        setPhoneType("ios");
      }
    }
    // Si l'URL contient le paramètre "redirected", on le supprime pour éviter une boucle
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get("redirected") === "true") {
      setHasRedirected(true);
      currentUrl.searchParams.delete("redirected");
      window.history.replaceState({}, "", currentUrl.toString());
    }
  }, []);

  // Effet de redirection : interroge l'API puis redirige selon le contexte
  useEffect(() => {
    (async () => {
      if (shortId) {
        try {
          // Récupération de l'URL d'origine depuis l'API
          const response = await fetch(`/api/redirect/${shortId}?hostname=${hostname}&t=${Date.now()}`);
          const data = await response.json();
          if (!response.ok) throw Error(`API error: ${response.status}`);

          // Si le user agent contient "YouTube", on redirige directement
          if (/\bYouTube\b/.test(navigator.userAgent)) {
            window.location.replace(data.originalUrl);
            return;
          }
          console.log("[Page] Processing redirect", {
            originalUrl: data.originalUrl,
            isInApp,
            phoneType,
            hasRedirected,
          });

          // Tracking du clic (non bloquant)
          try {
            await fetch(`/api/links/${shortId}/clicks`, {
              method: "PUT",
              headers: {
                "Cache-Control": "no-store",
                Pragma: "no-cache",
              },
            });
          } catch (error) {
            console.warn("[Page] Click tracking failed:", error);
          }

          // Tentative de deep linking via le module de transformation d'URL
          const deepLinkInfo = getDeepLinkInfo(data.originalUrl);
          if (deepLinkInfo && !isInApp) {
            const formattedUrl = deepLinkInfo.formatUrl(data.originalUrl);
            if (formattedUrl !== data.originalUrl) {
              window.location.href = formattedUrl;
              setTimeout(() => {
                if (!document.hidden) window.location.replace(data.originalUrl);
              }, 2500);
              return;
            }
          }

          // Cas in‑app browser avec détection du type d'appareil
          if (isInApp && phoneType) {
            const deepLinkInfo2 = getDeepLinkInfo(data.originalUrl);
            if (deepLinkInfo2) {
              const formattedUrl = deepLinkInfo2.formatUrl
                ? deepLinkInfo2.formatUrl(data.originalUrl)
                : `${deepLinkInfo2.scheme}${data.originalUrl.replace(/^https?:\/\//, "")}`;
              if (phoneType === "android") {
                // Utilisation du schéma intent si disponible
                if (deepLinkInfo2.intentFormat) {
                  const intentUrl = deepLinkInfo2.intentFormat(data.originalUrl, deepLinkInfo2.packageName, deepLinkInfo2.scheme);
                  window.location.href = intentUrl;
                } else {
                  const intentUrl = `intent://${formattedUrl.replace(
                    /^[^:]+:\/\//,
                    "",
                  )}#Intent;package=${deepLinkInfo2.packageName};scheme=${deepLinkInfo2.scheme.replace("://", "")};end`;
                  window.location.href = intentUrl;
                }
              } else {
                window.location.href = formattedUrl;
              }
              setTimeout(() => {
                if (!document.hidden) window.location.replace(data.originalUrl);
              }, 250);
              return;
            }
            // Cas de fallback si aucun deep link n'est défini pour l'in‑app browser
            if (phoneType === "android") {
              const t = data.originalUrl.replace(/^https?:\/\//, "");
              window.location.href = `intent://${t}#Intent;scheme=https;package=com.android.chrome;end`;
            } else if (phoneType === "ios") {
              window.location.href = `x-safari-${data.originalUrl}`;
            }
            setTimeout(() => {
              if (!document.hidden) window.location.replace(data.originalUrl);
            }, 500);
            return;
          }

          // Par défaut, redirige vers l'URL d'origine
          window.location.replace(data.originalUrl);
        } catch (error) {
          console.error("[Page] Redirect error:", error);
          try {
            const response2 = await fetch(`/api/redirect/${shortId}`);
            const data2 = await response2.json();
            if (data2.originalUrl) {
              window.location.replace(data2.originalUrl);
              return;
            }
          } catch (error) {
            window.location.href = "/error";
          }
        }
      }
    })();
  }, [shortId, isInApp, phoneType, hostname, hasRedirected]);

  return <Spinner />;
}
