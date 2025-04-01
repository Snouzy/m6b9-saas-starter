/**
 * Global script to enhance browser escape
 */

// Add to _app.js or via a script tag
export function initBrowserEscape() {
  // Override window.open to force external browser
  const originalOpen = window.open;
  window.open = function (url, target, features) {
    // If this is called by our ExternalLink component, let it pass
    if (url && url.toString().includes("//")) {
      // Try to force external opening
      try {
        // For iOS Safari
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          iframe.src = "about:blank";
          document.body.appendChild(iframe);

          // Try to change location in a controlled iframe
          setTimeout(() => {
            try {
              iframe.contentWindow.location.href = url;
            } catch (e) {
              // Fallback
              originalOpen.call(window, url, "_system", features);
            }

            setTimeout(() => {
              document.body.removeChild(iframe);
            }, 1000);
          }, 100);

          return null;
        }
      } catch (e) {
        console.error("Failed browser escape:", e);
      }
    }

    // Default behavior if our tricks fail
    return originalOpen.call(window, url, target, features);
  };

  // Capture all link clicks to potentially force external opening
  document.addEventListener(
    "click",
    function (e) {
      // Only process if it's a link with data-force-external
      const link = e.target.closest('a[data-force-external="true"]');
      if (!link) return;

      // Our ExternalLink component will handle this
      // This is just a backup for normal links with the attribute
      if (!e.defaultPrevented) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Import dynamically to avoid circular references
        import("./externalLinkOpener").then((module) => {
          module.openExternalLink(href);
        });
      }
    },
    false,
  );
}
