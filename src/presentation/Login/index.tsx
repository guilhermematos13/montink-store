import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import LoginContainer from './LoginContainer';

export default function LoginPage() {
  return (
    <ErrorBoundary errorComponent={undefined}>
      <Suspense fallback={undefined}>
        <LoginContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
