/** @type {import('semantic-release').GlobalConfig} */
module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "perf", release: "patch" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "pnpm-lock.yaml"],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],
  ],
};
