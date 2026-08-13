import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import path, { resolve } from "node:path";
import { withContentCollections } from "@content-collections/next";

const rootPackageJson: { version: string } = JSON.parse(
  readFileSync(resolve(__dirname, "../../package.json"), "utf-8"),
);

const nextConfig: NextConfig = {
  output: "standalone",
  // Monorepo: without this, output file tracing only inspects apps/web and
  // misses `@app/ui` (workspace:*) and the root pnpm-lock.yaml — the traced
  // standalone server would fail to resolve its own workspace dependency.
  outputFileTracingRoot: path.join(__dirname, "../../"),
  env: {
    NEXT_PUBLIC_APP_VERSION: rootPackageJson.version,
  },
};

export default withContentCollections(nextConfig);
