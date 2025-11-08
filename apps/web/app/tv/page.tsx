import { WebFragment } from "../../integrations/web-fragments/web-fragment";

export default async function TvsPage() {
  return <WebFragment fragmentId="tvs" src="/tv" />;
}
