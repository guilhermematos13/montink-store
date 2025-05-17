'use client';
import { ErrorComponentProps } from '@/@types/error-boundary';
import { Error } from '@/components/Error';
import useResetErrorBoundary from '@/hooks/useResetErrorBoundary';
import { DetailsLoading } from '../DetailsLoading';

export function DetailsError({ reset }: ErrorComponentProps) {
  const { handleReset, isPending } = useResetErrorBoundary({ reset });

  if (isPending) return <DetailsLoading />;

  return (
    <div>
      <Error onRetry={handleReset} />
    </div>
  );
}
