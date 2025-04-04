import localFont from "next/font/local";

export const barna = localFont({
  src: [
    {
      path: "../../public/fonts/Barna-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Barna-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/Barna-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/Barna-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-barna",
});

export const gdSherpa = localFont({
  src: [
    {
      path: "../../public/fonts/GD Sherpa Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/GD Sherpa Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-gd-sherpa",
});
