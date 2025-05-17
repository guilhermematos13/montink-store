import { useTransition } from 'react';
import { ResetErrorBoundaryProps } from './types';
import { useRouter } from 'next/navigation';

function useResetErrorBoundary({ reset }: ResetErrorBoundaryProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return { isPending, handleReset };
}

export default useResetErrorBoundary;
