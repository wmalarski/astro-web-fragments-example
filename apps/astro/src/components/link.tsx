import { isFragmentClient } from "@integrations/web-fragments/is-fragment-client";
import { sendRoutingMessage } from "@integrations/web-fragments/send-routing-message";
import { pathsPrefix } from "@paths";
import { type Component, type ComponentProps, createMemo } from "solid-js";

type LinkProps = ComponentProps<"a"> & {
  href: string;
};

export const Link: Component<LinkProps> = (props) => {
  const href = createMemo(() => props.href.replaceAll(pathsPrefix, ""));

  const onClick: LinkProps["onClick"] = (event) => {
    event.preventDefault();

    if (isFragmentClient()) {
      sendRoutingMessage(href());
    } else {
      window.location.href = props.href;
    }
  };

  return <a {...props} href={href()} onClick={onClick} />;
};
