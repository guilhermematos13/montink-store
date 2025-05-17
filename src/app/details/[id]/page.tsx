import DetailsPage from '@/presentation/Details';

type Params = { id: string };

interface DetailsPageProps {
  params: Promise<Params>;
}

export default async function Page({ params }: DetailsPageProps) {
  const { id } = await params;

  return <DetailsPage id={id} />;
}
