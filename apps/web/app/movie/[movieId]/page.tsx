import { WebFragment } from "../../../integrations/web-fragments/web-fragment";

type MoviePageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { movieId } = await params;

  return <WebFragment fragmentId="movie" src={`/movie/${movieId}`} />;
}
