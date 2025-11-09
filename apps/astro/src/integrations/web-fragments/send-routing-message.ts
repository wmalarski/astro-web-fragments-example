export const sendRoutingMessage = (href: string) => {
  console.log("[sendRoutingMessage]", href);
  const broadcastChannel = new BroadcastChannel("/routing");
  broadcastChannel.postMessage({ href, type: "navigate" });
  broadcastChannel.close();
};
