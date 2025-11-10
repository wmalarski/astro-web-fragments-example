import { isFragmentClient } from "@integrations/web-fragments/is-fragment-client";
import { sendRoutingMessage } from "@integrations/web-fragments/send-routing-message";
import type { Component, ComponentProps } from "solid-js";

type LinkProps = ComponentProps<"a"> & {
  href: string;
};

export const Link: Component<LinkProps> = (props) => {
  const onClick: LinkProps["onClick"] = (event) => {
    if (isFragmentClient()) {
      event.preventDefault();
      sendRoutingMessage(props.href);
    }
  };

  // biome-ignore lint/a11y/useValidAnchor: I need to override native handling
  return <a {...props} onClick={onClick} />;
};
