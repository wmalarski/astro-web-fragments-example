import { WebFragment } from "../integrations/web-fragments/web-fragment";

export default function Home() {
  return (
    <div>
      <main>
        <span className="font-bold text-3xl underline">Hello</span>
        <WebFragment fragmentId="homepage-2" src="/" />
      </main>
    </div>
  );
}
