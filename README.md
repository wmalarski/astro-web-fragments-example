# Astro + Next.js Web Fragments Example

This Turborepo application that showcase Astro + Next.js integration.

## Using this example

Environment file `./apps/astro/.env` https://www.themoviedb.org

```
TMDB_API_KEY=
```

Run the following command:

```sh
pnpm i
pnpm preview
```

## Web Fragments

- Next.js app router as a host application using cloudflare workers and open-next. App implements app basic layout.
- Astro app implements content of the pages.
- Web Fragments gateway [setup](/apps/web/integrations/web-fragments/middleware.ts)
  - Astro page is using `_astro` base to avoid conflicts when navigating [link](/apps/astro/astro.config.mjs).
- Web Fragments middleware [setup](/apps/web/worker.ts). Using `opennext` for deployment configuration.
- Astro Web Components [setup](/apps/web/integrations/astro/astro-scripts.tsx). Web Fragments does not currenly support Web Components registration in the reframed context https://github.com/web-fragments/web-fragments/issues/72
- Client side routing:
  - Every astro [link](/apps/astro/src/components/link.tsx) is an island.
  - Links send event to the nextjs host app to trigger client side navigation
  - Events are watched [here](/apps/web/integrations/web-fragments/routing-provider.tsx).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@awfe/astro`: a [Astro](https://astro.build/) app
- `@awfe/web`: a [Next.js](https://nextjs.org/) host app
- `@awfe/tailwind-config`: `tailwind` configurations
- `@awfe/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
