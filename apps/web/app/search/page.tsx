import { WebFragment } from "../../integrations/web-fragments/web-fragment";

export default async function SearchPage() {
  return <WebFragment fragmentId="search" src="/search" />;
}
