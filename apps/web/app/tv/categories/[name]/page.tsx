import { WebFragment } from "../../../../integrations/web-fragments/web-fragment";

type TvCategoryPageProps = {
  params: Promise<{ name: string }>;
};

export default async function TvCategoryPage({ params }: TvCategoryPageProps) {
  const { name } = await params;

  return (
    <WebFragment fragmentId="tvs-category" src={`/tv/categories/${name}`} />
  );
}
