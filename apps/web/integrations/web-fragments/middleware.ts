import { FragmentGateway, getWebMiddleware } from "web-fragments/gateway";
import type { FragmentId } from "./types";

// Initialize the FragmentGateway
const gateway = new FragmentGateway({
  piercingStyles: `<style id="fragment-piercing-styles" type="text/css">
    web-fragment-host[data-piercing="true"] {
      position: absolute;
      z-index: 9999999999999999999999999999999;
    }
  </style>`,
});

type RegistrationEntry = {
  fragmentId: FragmentId;
  routePattern: string;
};

const entries: RegistrationEntry[] = [
  { fragmentId: "genre-movie", routePattern: "/genre/:genreId/movie" },
  { fragmentId: "genre-tv", routePattern: "/genre/:genreId/tv" },
  { fragmentId: "movie", routePattern: "/movie/:movieId" },
  { fragmentId: "movies-category", routePattern: "/movie/categories/:name" },
  { fragmentId: "movies", routePattern: "/movie" },
  { fragmentId: "person", routePattern: "/person/:personId" },
  { fragmentId: "search", routePattern: "/search" },
  { fragmentId: "tv", routePattern: "/tv/:tvId" },
  { fragmentId: "tvs-category", routePattern: "/tv/categories/:name" },
  { fragmentId: "tvs", routePattern: "/tv" },
  { fragmentId: "homepage", routePattern: "/" },
];

entries.forEach((entry) => {
  gateway.registerFragment({
    endpoint: "http://localhost:3001",
    fragmentId: entry.fragmentId,
    onSsrFetchError() {
      const body = `<p>${entry.fragmentId} fragment not found</p>`;
      return {
        response: new Response(body, {
          headers: { "content-type": "text/html" },
        }),
      };
    },
    piercingClassNames: ["homepage"],
    routePatterns: [
      entry.routePattern,
      "/_fragment/astro/:_*",
      "/_actions/:_*",
    ],
  });
});

export const webFragmentsMiddleware = getWebMiddleware(gateway, {
  mode: "development",
});
