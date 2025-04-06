"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";
import { useTheme } from "next-themes";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return <Sonner className="toaster group" position="top-center" theme={theme as ToasterProps["theme"]} {...props} />;
};

export { Toaster };
