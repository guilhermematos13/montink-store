'use client';

import { formatCurrency } from '@/utils/format-currency';
import { DetailsWrapperProps } from './types';
import { Button } from '@/components/Button';
import { VariantButtonEnum } from '@/components/Button/constants';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { formatText } from '@/utils/format-text';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchParamsKeysEnum } from '@/components/Header/components/SideMenu/constants';
import { orderSize } from '@/utils/order-size';

export function DetailsWrapper({ product }: DetailsWrapperProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [optionSelectedIndexState, setOptionSelectedIndexState] = useState(0);
  const [imageSelectedIndexState, setImageSelectedIndexState] = useState(0);
  const isClothes = product.category === formatText(CategoryEnumNames.CLOTHES);
  const variant = searchParams.get(SearchParamsKeysEnum.VARIANT) as string;

  const galleriesFiltered =
    product.galleries.find((gallery) => gallery.variant === variant)?.images ?? [];

  const hasColors = product.colors?.length > 0;

  const optionsProductList = hasColors ? product.colors : product.flavors;

  const handleClickChangeOption = (variant: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.VARIANT, variant);
    router.push(`?${params.toString()}`);
  };

  const stockVariant =
    product.stock.find((productStock) => productStock.variant === variant)?.stock ?? 0;

  const stockLow = stockVariant <= 4;

  return (
    <div className="flex h-[80vh] flex-col gap-4 px-4 py-6 md:flex-row md:px-10">
      <div className="flex flex-1 flex-col-reverse gap-4 rounded-lg bg-white p-4 md:flex-row">
        <div className="flex justify-center gap-4 md:flex-col md:justify-start">
          {galleriesFiltered.map((img, index) => (
            <div
              key={img}
              className={`relative h-[5rem] w-[5rem] cursor-pointer overflow-hidden rounded-md hover:opacity-60`}
              onMouseEnter={() => setImageSelectedIndexState(index)}
            >
              <Image src={img} alt={`Miniatura ${index + 1}`} fill />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Image
            src={galleriesFiltered[imageSelectedIndexState]}
            alt={`Imagem ${imageSelectedIndexState + 1}`}
            height={isClothes ? 200 : 150}
            width={isClothes ? 350 : 400}
            priority
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between rounded-lg bg-white p-4 md:max-w-[23rem] md:min-w-[12rem]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">{product.brand}</h2>
          <p>{product.name}</p>
          <div className="flex gap-2">
            {optionsProductList.map((option) => {
              const isSelected = formatText(option) === variant;

              return (
                <Button
                  key={option}
                  variant={isSelected ? VariantButtonEnum.PRIMARY : VariantButtonEnum.SECONDARY}
                  onClick={() => handleClickChangeOption(formatText(option))}
                >
                  {option}
                </Button>
              );
            })}
          </div>
          <p>Tamanho</p>
          <div className="flex gap-2">
            {orderSize(product.size).map((option, index) => {
              const isSelected = index === optionSelectedIndexState;

              return (
                <Button
                  key={option}
                  variant={isSelected ? VariantButtonEnum.PRIMARY : VariantButtonEnum.SECONDARY}
                  className="w-fit"
                  onClick={() => setOptionSelectedIndexState(index)}
                >
                  {option}
                </Button>
              );
            })}
          </div>
          <p className={`${stockLow ? 'text-red-500' : ''} font-bold`}>
            {stockLow
              ? `Corre! Apenas ${stockVariant} unidades restantes!`
              : `Temos ${stockVariant} unidades prontas para envio`}
          </p>
          <p className="text-end text-lg font-bold">{formatCurrency(product.price)}</p>
        </div>
        <Button
          icon={<ShoppingCart />}
          variant={VariantButtonEnum.SECONDARY}
          className="flex items-center justify-center"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}
