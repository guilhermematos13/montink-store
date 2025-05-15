'use client';

import { useRouter } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { AppRoutesEnum } from '@/constants';

export function DetailsWrapper() {
  const router = useRouter();

  const handleClickProduct = (id: string) => {
    router.push(AppRoutesEnum.DETAILS.replace(':id', id));
  };

  return (
    <div className="mx-auto grid w-fit grid-cols-1 gap-4 py-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
      testeee
    </div>
  );
}
