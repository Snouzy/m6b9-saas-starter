import { withPlausibleProxy } from "next-plausible";

import { env } from "@/env";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL.replace("https://", "")],
  },
};

export default withPlausibleProxy()(nextConfig);
