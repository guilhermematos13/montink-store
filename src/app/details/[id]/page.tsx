import DetailsPage from '@/presentation/Details';

type DetailsProps = {
  params: {
    id: string;
  };
};

export default function Details({ params }: DetailsProps) {
  return <DetailsPage id={params.id} />;
}
