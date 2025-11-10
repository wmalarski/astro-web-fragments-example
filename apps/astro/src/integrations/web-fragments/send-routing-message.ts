export const sendRoutingMessage = (href: string) => {
  const broadcastChannel = new BroadcastChannel("/routing");
  broadcastChannel.postMessage({ href, type: "navigate" });
  broadcastChannel.close();
};
