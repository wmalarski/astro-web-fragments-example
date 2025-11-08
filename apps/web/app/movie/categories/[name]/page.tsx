import { WebFragment } from "../../../../integrations/web-fragments/web-fragment";

type MovieCategoryPageProps = {
  params: Promise<{ name: string }>;
};

export default async function MovieCategoryPage({
  params,
}: MovieCategoryPageProps) {
  const { name } = await params;

  return (
    <WebFragment
      fragmentId="movies-category"
      src={`/movie/categories/${name}`}
    />
  );
}
