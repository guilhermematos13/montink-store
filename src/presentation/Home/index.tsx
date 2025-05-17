import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import HomeContainer from './HomeContainer';
import { HomeLoading } from './HomeLoading';
import { HomeError } from './HomeError';

export default function HomePage() {
  return (
    <ErrorBoundary errorComponent={HomeError}>
      <Suspense fallback={<HomeLoading />}>
        <HomeContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
