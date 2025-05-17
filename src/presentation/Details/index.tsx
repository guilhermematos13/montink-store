import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import DetailsContainer from './DetailsContainer';
import { DetailsPageProps } from './types';
import { DetailsLoading } from './DetailsLoading';
import { DetailsError } from './DetailsError';

export default function DetailsPage({ id }: DetailsPageProps) {
  return (
    <ErrorBoundary errorComponent={DetailsError}>
      <Suspense fallback={<DetailsLoading />}>
        <DetailsContainer id={id} />
      </Suspense>
    </ErrorBoundary>
  );
}
