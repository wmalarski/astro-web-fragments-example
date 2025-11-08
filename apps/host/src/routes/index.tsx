import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { WebFragment } from "~/integrations/web-fragments/web-fragment";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <WebFragment fragmentId="homepage-2" src="/" />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" rel="noopener" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
