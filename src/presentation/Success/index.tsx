import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import SuccessContainer from './SuccessContainer';

export default function SuccessPage() {
  return (
    <ErrorBoundary errorComponent={undefined}>
      <Suspense fallback={undefined}>
        <SuccessContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
