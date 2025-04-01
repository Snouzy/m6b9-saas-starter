import { FaExternalLinkAlt } from "react-icons/fa";
import React, { useState } from "react";

import { openExternalLink } from "@/utils/externalLinkOpener";

const ExternalLink = ({ href, children, className = "" }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpening(true);

    // Visual feedback for user
    openExternalLink(href);

    // Reset state after animation
    setTimeout(() => {
      setIsOpening(false);
    }, 2000);
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
