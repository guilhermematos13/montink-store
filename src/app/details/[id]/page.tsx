import DetailsPage from '@/presentation/Details';

type DetailsProps = {
  params: {
    id: string;
  };
};

export default async function Details({ params }: DetailsProps) {
  const { id } = await params;

  return <DetailsPage id={id} />;
}
