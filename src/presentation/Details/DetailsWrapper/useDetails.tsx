import { SearchParamsKeysEnum } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';

export function useDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClickChangeOption = (variant: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.VARIANT, variant);
    router.push(`?${params.toString()}`);
  };

  return { handleClickChangeOption };
}
