import { WebFragment } from "../../../integrations/web-fragments/web-fragment";

type PersonPageProps = {
  params: Promise<{ personId: string }>;
};

export default async function PersonPage({ params }: PersonPageProps) {
  const { personId } = await params;

  return <WebFragment fragmentId="person" src={`/person/${personId}`} />;
}
