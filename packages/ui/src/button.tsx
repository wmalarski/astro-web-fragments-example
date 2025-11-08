import type { Component, ParentProps } from "solid-js";

type ButtonProps = ParentProps<{
  class?: string;
  appName: string;
}>;

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={props.class}
      onClick={() => alert(`Hello from your ${props.appName} app!`)}
      type="button"
    >
      {props.children}
    </button>
  );
};
