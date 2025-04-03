/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = withPlausibleProxy()({});

module.exports = nextConfig;
