import { WebFragment } from "../../../../integrations/web-fragments/web-fragment";

type GenreMoviePageProps = {
  params: Promise<{ genreId: string }>;
};

export default async function GenreMoviePage({ params }: GenreMoviePageProps) {
  const { genreId } = await params;

  return (
    <WebFragment fragmentId="genre-movie" src={`/genre/${genreId}/movie`} />
  );
}
