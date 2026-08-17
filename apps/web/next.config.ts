import { readFileSync } from "node:fs";
import path, { resolve } from "node:path";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const rootPackageJson: { version: string } = JSON.parse(
  readFileSync(resolve(__dirname, "../../package.json"), "utf-8"),
);

const nextConfig: NextConfig = {
  output: "standalone",
  // Monorepo: without this, output file tracing only inspects apps/web and
  // misses `@app/ui` (workspace:*) and the root pnpm-lock.yaml — the traced
  // standalone server would fail to resolve its own workspace dependency.
  outputFileTracingRoot: path.join(__dirname, "../../"),
  images: {
    // AVIF isn't served by default (costlier to encode) — opt in since the
    // runtime optimizer already caches its output.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.arthurtoppenberg.dk",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: rootPackageJson.version,
  },
};

export default withContentCollections(nextConfig);
