import type { Component } from "solid-js";

type WebFragmentId = "homepage" | "homepage-2";

type WebFragmentProps = {
  fragmentId: WebFragmentId;
  src?: string;
};

export const WebFragment: Component<WebFragmentProps> = (props) => {
  return (
    <web-fragment attr:fragment-id={props.fragmentId} attr:src={props.src} />
  );
};

type WebFragmentElementProps = {
  "attr:fragment-id": WebFragmentId;
  "attr:src"?: string;
};

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "web-fragment": WebFragmentElementProps;
    }
  }
}
