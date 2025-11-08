import type { Component } from "solid-js";

type WebFragmentId = "homepage" | "homepage-2";

type WebFragmentProps = {
  fragmentId: WebFragmentId;
};

export const WebFragment: Component<WebFragmentProps> = (props) => {
  return <web-fragment fragment-id={props.fragmentId} />;
};

type WebFragmentElementProps = {
  "fragment-id": WebFragmentId;
};

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "web-fragment": WebFragmentElementProps;
    }
  }
}
