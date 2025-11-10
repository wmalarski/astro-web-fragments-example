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

- Next.js app router as a host application
- Astro app implements content of the pages
- Web Fragments gateway [setup](/apps/web/integrations/web-fragments/middleware.ts)
- Web Fragments middleware [setup](/apps/web/worker.ts). Using `opennext` for deployment configuration.
- Astro Web Components [setup](/apps/web/integrations/astro/astro-scripts.tsx). Web Fragments does not currenly support Web Components registration in the reframed context https://github.com/web-fragments/web-fragments/issues/72
- Client side routing is triggered by sending navigation events from astro to host.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@awfe/astro`: a [Astro](https://astro.build/) app
- `@awfe/web`: a [Next.js](https://nextjs.org/) host app
- `@awfe/paths`: a shared paths configuration
- `@awfe/tailwind-config`: `tailwind` configurations
- `@awfe/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
