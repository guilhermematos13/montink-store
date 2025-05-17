'use client';
import { ErrorComponentProps } from '@/@types/error-boundary';
import { Error } from '@/components/Error';
import useResetErrorBoundary from '@/hooks/useResetErrorBoundary';
import { HomeLoading } from '../HomeLoading';

export function HomeError({ reset }: ErrorComponentProps) {
  const { handleReset, isPending } = useResetErrorBoundary({ reset });

  if (isPending) return <HomeLoading />;

  return (
    <div>
      <Error onRetry={handleReset} />
    </div>
  );
}
