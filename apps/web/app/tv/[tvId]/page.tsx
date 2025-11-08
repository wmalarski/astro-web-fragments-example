import { WebFragment } from "../../../integrations/web-fragments/web-fragment";

type TvPageProps = {
  params: Promise<{ tvId: string }>;
};

export default async function TvPage({ params }: TvPageProps) {
  const { tvId } = await params;

  return <WebFragment fragmentId="tv" src={`/tv/${tvId}`} />;
}
