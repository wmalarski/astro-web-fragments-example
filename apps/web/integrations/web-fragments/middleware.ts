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

export const webFragmentsMiddleware = getWebMiddleware(gateway, {
  mode: "development",
});
