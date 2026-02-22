import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const rootPackageJson: { version: string } = JSON.parse(
  readFileSync(resolve(__dirname, "../../package.json"), "utf-8")
);

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: rootPackageJson.version,
  },
};

export default nextConfig;
