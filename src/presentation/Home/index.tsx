import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import HomeContainer from './HomeContainer';

export default function HomePage() {
  return (
    <ErrorBoundary errorComponent={undefined}>
      <Suspense fallback={undefined}>
        <HomeContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
