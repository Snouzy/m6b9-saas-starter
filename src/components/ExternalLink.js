import { FaExternalLinkAlt } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/router";

const ExternalLink = ({ href, children, className = "" }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpening(true);

    // Incrémenter le compteur de clics
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // Générer un code aléatoire (dans une production réelle, vous le créeriez et le stockeriez)
    const randomCode = generateRandomCode(6);

    // Stocker la correspondance dans localStorage (en production, ce serait dans votre base de données)
    try {
      const urlMap = JSON.parse(localStorage.getItem("url_map") || "{}");
      urlMap[randomCode] = href;
      localStorage.setItem("url_map", JSON.stringify(urlMap));

      // Stocker également dans sessionStorage pour la récupération immédiate
      sessionStorage.setItem("last_external_url", href);
      sessionStorage.setItem("last_code", randomCode);
    } catch (e) {
      console.error("Failed to store URL mapping");
    }

    // Si c'est un deuxième clic ou plus, utiliser une approche encore plus agressive
    if (newClickCount > 1) {
      // Tentative ultra-agressive directe
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

      if (isIOS) {
        // Tentative iOS directe
        window.location.href = "googlechrome://navigate?url=" + encodeURIComponent(href);
        setTimeout(() => {
          window.location.href = "x-web-search://" + encodeURIComponent(href);
        }, 100);
      } else {
        // Tentative Android directe
        const intentUrl = "intent://" + href.replace(/^https?:\/\//, "") + "#Intent;scheme=https;package=com.android.chrome;end";
        window.location.href = intentUrl;
      }

      // Après une courte pause, naviguer vers notre page d'évasion
      setTimeout(() => {
        router.push(`/${randomCode}`);
      }, 300);
    } else {
      // Premier clic - utiliser notre page d'évasion standard
      router.push(`/${randomCode}`);
    }

    // Réinitialiser l'état après l'animation
    setTimeout(() => {
      setIsOpening(false);
    }, 2000);
  };

  // Générer un code aléatoire comme celui utilisé par taap.it
  const generateRandomCode = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  return (
    <a
      className={`external-link ${className} ${isOpening ? "opening" : ""}`}
      data-force-external="true"
      href={href}
      onClick={handleClick}
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        position: "relative",
        transition: "all 0.3s ease",
      }}
    >
      <span>{children}</span>
      <FaExternalLinkAlt size={12} />

      {isOpening && (
        <span
          className="opening-indicator"
          style={{
            position: "absolute",
            right: "-20px",
            fontSize: "12px",
            opacity: "0.7",
          }}
        >
          Opening...
        </span>
      )}
    </a>
  );
};

export default ExternalLink;
