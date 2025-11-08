import type { PagesFunction } from "@cloudflare/workers-types";
import { FragmentGateway, getWebMiddleware } from "web-fragments/gateway";

// Initialize the FragmentGateway
const gateway = new FragmentGateway({
  piercingStyles: `<style id="fragment-piercing-styles" type="text/css">
    web-fragment-host[data-piercing="true"] {
      position: absolute;
      z-index: 9999999999999999999999999999999;
    }
  </style>`,
});

// Register fragments
// gateway.registerFragment({
//   endpoint: "http://localhost:3000",
//   fragmentId: "remix",
//   onSsrFetchError: () => ({
//     response: new Response("<p>Remix fragment not found</p>", {
//       headers: { "content-type": "text/html" },
//     }),
//   }),
//   piercingClassNames: ["remix"],
//   routePatterns: ["/remix-page/:_*", "/_fragment/remix/:_*"],
// });

gateway.registerFragment({
  endpoint: "http://localhost:3001",
  forwardFragmentHeaders: ["x-fragment-name"],
  fragmentId: "homepage",
  onSsrFetchError: () => ({
    response: new Response("<p>Qwik fragment not found</p>", {
      headers: { "content-type": "text/html" },
    }),
  }),
  piercingClassNames: ["homepage"],
  routePatterns: ["/homepage/:_*", "/_fragment/homepage/:_*"],
});

gateway.registerFragment({
  endpoint: "http://localhost:3001",
  forwardFragmentHeaders: ["x-fragment-name"],
  fragmentId: "homepage-2",
  onSsrFetchError: (req, error) => {
    console.log("[req, error]", { error, req });
    return {
      response: new Response("<p>Qwik fragment not found</p>", {
        headers: { "content-type": "text/html" },
      }),
    };
  },
  piercingClassNames: ["homepage"],
  routePatterns: ["/", "/_fragment/homepage/:_*"],
});

const middleware = getWebMiddleware(gateway, { mode: "development" });

// CF Pages specific handler
export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  console.log("Incoming request", request.url);

  // biome-ignore lint/suspicious/noExplicitAny: needed
  const unsafeMiddleware = middleware as unknown as any;

  // run the standard middleware function

  return await unsafeMiddleware(request, next);
};
