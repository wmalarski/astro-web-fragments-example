import { WebFragment } from "../integrations/web-fragments/web-fragment";

export default function Home() {
  return (
    <div>
      <main>
        <WebFragment fragmentId="homepage-2" src="/" />
      </main>
    </div>
  );
}
