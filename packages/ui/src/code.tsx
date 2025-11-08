import type { Component, ParentProps } from "solid-js";

type CodeProps = ParentProps<{
  class?: string;
}>;

export const Code: Component<CodeProps> = (props) => {
  return <code class={props.class}>{props.children}</code>;
};
