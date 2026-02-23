import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const rootPackageJson: { version: string } = JSON.parse(
  readFileSync(resolve(__dirname, "../../package.json"), "utf-8")
);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_APP_VERSION: rootPackageJson.version,
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
