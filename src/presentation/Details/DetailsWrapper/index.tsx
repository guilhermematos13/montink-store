'use client';
import { DetailsWrapperProps } from './types';
import { Button } from '@/components/Button';
import { VariantButtonEnum } from '@/components/Button/constants';
import { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { formatText } from '@/utils/format-text';
import { useSearchParams } from 'next/navigation';
import { orderSize } from '@/utils/order-size';
import { Gallery } from './components/Gallery';
import { SearchParamsKeysEnum } from '@/constants';
import { useCart } from '@/context/CartContext';
import { productContext } from '@/context/CartContext/types';
import { CepForm } from './components/CepForm';
import { DetailsInfoCard } from './components/DetailsInfoCard';

export function DetailsWrapper({ product }: DetailsWrapperProps) {
  const searchParams = useSearchParams();
  const { addProduct, products } = useCart();
  const isClothes = product.category === formatText(CategoryEnumNames.CLOTHES);
  const variant = searchParams.get(SearchParamsKeysEnum.VARIANT) as string;
  const [optionSelectedIndexState, setOptionSelectedIndexState] = useState(0);

  const galleriesFiltered =
    product.galleries.find((gallery) => gallery.variant === variant)?.images ?? [];

  const hasColors = product.colors?.length > 0;

  const optionsProductList = hasColors ? product.colors : product.flavors;

  const stockVariant =
    product.stock.find((productStock) => productStock.variant === variant)?.stock ?? 0;

  const selectedSize = orderSize(product.size)[optionSelectedIndexState];
  const selectedVariant = variant ?? '';

  const productAdded = products.some(
    (productInCart) =>
      productInCart.id === `${product.id} - ${variant} - ${selectedSize}` &&
      productInCart.size === selectedSize &&
      (productInCart.color === selectedVariant || productInCart.flavor === selectedVariant),
  );

  const stockLow = stockVariant <= 4;

  const handleClickAddCart = (product: productContext) => {
    addProduct(product);
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:px-10">
      <div className="flex h-[70vh] flex-1 flex-col-reverse gap-4 rounded-lg bg-white p-4 md:flex-row">
        <Gallery isClothes={isClothes} pictures={galleriesFiltered} />
      </div>
      <div className="flex w-full flex-col justify-between rounded-lg bg-white p-4 md:max-w-[23rem] md:min-w-[12rem]">
        <div className="flex flex-col gap-2">
          <DetailsInfoCard
            brand={product.brand}
            name={product.name}
            price={product.price}
            sizes={product.size}
            stockLow={stockLow}
            stockVariant={stockVariant}
            variant={variant}
            variantsOptions={optionsProductList}
            optionSelectedIndexState={optionSelectedIndexState}
            setOptionSelectedIndexState={setOptionSelectedIndexState}
          />
          <CepForm />
        </div>
        <Button
          icon={productAdded ? <Check /> : <ShoppingCart />}
          variant={VariantButtonEnum.SECONDARY}
          className={`mt-4 flex items-center justify-center ${productAdded ? 'bg-green-500 text-white hover:bg-green-500' : ''}`}
          onClick={() => {
            handleClickAddCart({
              id: `${product.id} - ${variant} - ${selectedSize}`,
              name: product.name,
              mainPicture: galleriesFiltered[0],
              brand: product.brand,
              price: product.price,
              size: orderSize(product.size)[optionSelectedIndexState],
              color: hasColors ? (variant ?? '') : '',
              flavor: !hasColors ? (variant ?? '') : '',
              quantity: 1,
            });
          }}
        >
          {productAdded ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
        </Button>
      </div>
    </div>
  );
}
