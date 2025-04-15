"use client";

import { useCallback, useState } from "react";

export const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar) {
      sidebar.classList.toggle("open");
    }

    if (overlay) {
      overlay.classList.toggle("open");
    }

    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, toggleSidebar };
};
