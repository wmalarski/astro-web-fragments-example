import { FragmentGateway, getWebMiddleware } from "web-fragments/gateway";
// @ts-expect-error `.open-next/worker.ts` is generated at build time
import { default as handler } from "./.open-next/worker.js";

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

export default {
  fetch: async (request, env, ctx) => {
    console.log("[fetch-1]", request.url);

    const next = async () => {
      console.log("[fetch-2]", request.url);
      const result = await handler.fetch(request, env, ctx);
      console.log("[fetch-3]", result);
      return result;
    };

    const result = await middleware(request, next);
    console.log("[fetch-4]", result);

    return result;
  },
} satisfies ExportedHandler<CloudflareEnv>;
