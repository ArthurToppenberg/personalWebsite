# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS base
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
WORKDIR /app

# ---- install + build (full monorepo context) ----
FROM base AS builder
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# ---- runtime ----
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# `output: "standalone"` mirrors the monorepo path under the output dir, so
# apps/web/.next/standalone/ already contains apps/web/server.js, node_modules,
# etc. Copying it straight to /app puts the entrypoint at /app/apps/web/server.js.
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

# next/image's runtime optimizer writes here; standalone output doesn't
# include it, so it has to be created and owned by the runtime user up front.
RUN mkdir -p apps/web/.next/cache/images && chown -R nextjs:nodejs apps/web/.next/cache

USER nextjs
EXPOSE 3000

CMD ["node", "apps/web/server.js"]
