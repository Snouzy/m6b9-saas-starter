import React from "react";
import { openExternalLink } from "@/utils/externalLinkOpener";

const ExternalLink = ({ href, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    openExternalLink(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`external-link ${className}`} rel="noopener noreferrer" data-force-external="true">
      {children}
    </a>
  );
};

export default ExternalLink;
