import { WebFragment } from "../../integrations/web-fragments/web-fragment";

export default async function MoviesPage() {
  return <WebFragment fragmentId="movies" src="/movie" />;
}
