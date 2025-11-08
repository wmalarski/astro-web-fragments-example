export function Code(props: { children: any; className?: string }) {
  return <code class={props.className}>{props.children}</code>;
}
