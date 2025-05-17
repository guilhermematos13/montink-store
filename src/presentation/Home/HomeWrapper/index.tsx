'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { HomeWrapperProps } from './types';
import { ProductCard } from '@/components/ProductCard';
import { AppRoutesEnum, SearchParamsKeysEnum } from '@/constants';
import { Button } from '@/components/Button';
import { AlertCircle } from 'lucide-react';
import { Header } from '@/components/Header';

export function HomeWrapper({ products }: HomeWrapperProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get(SearchParamsKeysEnum.FILTER);

  const handleClickProduct = (id: string, mainVariant: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.VARIANT, mainVariant);

    const url = `${AppRoutesEnum.DETAILS.replace(':id', id)}?${params.toString()}`;

    router.push(url);
  };

  const handleClearFilter = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.delete(SearchParamsKeysEnum.FILTER);

    router.push(`?${params.toString()}`);
  };

  const productsList = activeFilter
    ? products.filter((product) => product.category === activeFilter)
    : products;

  const hasEmptyList = productsList.length === 0;

  return (
    <>
      <Header />
      <div className="mx-auto flex w-fit flex-col gap-4 py-6 sm:px-10">
        {activeFilter && !hasEmptyList ? (
          <div className="flex justify-end">
            <Button onClick={handleClearFilter}>Limpar Filtro</Button>
          </div>
        ) : null}
        {hasEmptyList ? (
          <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-black bg-white p-4">
            <div className="flex gap-2">
              <AlertCircle />
              <h2 className="text-lg font-bold">Nenhum produto encontrado nesta categoria</h2>
            </div>
            <p>
              Não encontramos produtos que correspondam ao filtro selecionado. Tente ajustar o
              filtro ou explore outras categorias para encontrar o que procura.
            </p>
            <Button className="w-fit" onClick={handleClearFilter}>
              Limpar Filtro
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productsList.map((product) => {
              const mainGallery = product.galleries.find((gallery) => gallery.isMain);
              const mainVariant =
                product.galleries.find((gallery) => gallery.isMain)?.variant ?? '';

              if (!mainGallery) return null;

              return (
                <ProductCard
                  key={product.id}
                  galleries={mainGallery}
                  label={product.name}
                  price={product.price}
                  brand={product.brand}
                  onClick={() => handleClickProduct(String(product.id), mainVariant)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
