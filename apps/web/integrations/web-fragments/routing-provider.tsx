"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const RoutingProvider = () => {
  const { push } = useRouter();

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const { type, href } = event.data;

      if (type === "navigate") {
        push(href);
      }
    };

    const abortController = new AbortController();
    const broadcastChannel = new BroadcastChannel("/routing");
    broadcastChannel.addEventListener("message", onMessage, {
      signal: abortController.signal,
    });

    return () => abortController.abort();
  }, [push]);

  return null;
};
