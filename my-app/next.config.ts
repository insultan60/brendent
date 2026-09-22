import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The parent folder still holds the old Vite app's package-lock.json, so Next
  // would otherwise infer the workspace root as `bredent/` and warn on every build.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
