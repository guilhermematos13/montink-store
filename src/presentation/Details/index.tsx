import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import DetailsContainer from './DetailsContainer';
import { DetailsPageProps } from './types';

export default function DetailsPage({ id }: DetailsPageProps) {
  return (
    <ErrorBoundary errorComponent={undefined}>
      <Suspense fallback={undefined}>
        <DetailsContainer id={id} />
      </Suspense>
    </ErrorBoundary>
  );
}
