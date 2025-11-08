import { WebFragment } from "../../../../integrations/web-fragments/web-fragment";

type GenreTvPageProps = {
  params: Promise<{ genreId: string }>;
};

export default async function GenreTvPage({ params }: GenreTvPageProps) {
  const { genreId } = await params;

  return <WebFragment fragmentId="genre-tv" src={`/genre/${genreId}/tv`} />;
}
