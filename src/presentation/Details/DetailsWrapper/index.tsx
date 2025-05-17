'use client';

import { formatCurrency } from '@/utils/format-currency';
import { DetailsWrapperProps } from './types';
import { Button } from '@/components/Button';
import { VariantButtonEnum } from '@/components/Button/constants';
import { useEffect, useState } from 'react';
import { Check, Search, ShoppingCart } from 'lucide-react';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { formatText } from '@/utils/format-text';
import { useSearchParams } from 'next/navigation';
import { orderSize } from '@/utils/order-size';
import { Input } from '@/components/Input';
import { useCepRequestData } from '@/controllers/client/cep/useCepRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { cepSchema, CepSchemaType } from './schema';
import { useForm } from 'react-hook-form';
import { FreightCard } from './components/FreightCard';
import { Gallery } from './components/Gallery';
import { useDetails } from './useDetails';
import { SearchParamsKeysEnum } from '@/constants';
import { useCart } from '@/context/CartContext';
import { productContext } from '@/context/CartContext/types';

export function DetailsWrapper({ product }: DetailsWrapperProps) {
  const { handleClickChangeOption } = useDetails();
  const searchParams = useSearchParams();
  const { addProduct, products } = useCart();
  const { createCepRequest, cepDataRequest } = useCepRequestData();
  const [optionSelectedIndexState, setOptionSelectedIndexState] = useState(0);
  const isClothes = product.category === formatText(CategoryEnumNames.CLOTHES);
  const variant = searchParams.get(SearchParamsKeysEnum.VARIANT) as string;

  const { data, isLoading } = cepDataRequest;

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

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CepSchemaType>({
    resolver: zodResolver(cepSchema),
  });

  const onSubmitCep = async (data: CepSchemaType) => {
    await createCepRequest({ cep: data.cep });
  };

  const handleClickAddCart = (product: productContext) => {
    addProduct(product);
  };

  useEffect(() => {
    if (data?.erro) {
      setError('cep', { message: 'CEP inválido' });
    }
  }, [data?.erro]);

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:px-10">
      <div className="flex h-[70vh] flex-1 flex-col-reverse gap-4 rounded-lg bg-white p-4 md:flex-row">
        <Gallery isClothes={isClothes} pictures={galleriesFiltered} />
      </div>
      <div className="flex w-full flex-col justify-between rounded-lg bg-white p-4 md:max-w-[23rem] md:min-w-[12rem]">
        <div className="flex flex-col gap-2">
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
          {cepDataRequest.data && (
            <FreightCard
              address={`${cepDataRequest.data.logradouro}`}
              city={cepDataRequest.data.localidade}
              state={cepDataRequest.data.uf}
              neighborhood={cepDataRequest.data.bairro}
            />
          )}
          <form onSubmit={handleSubmit(onSubmitCep)}>
            <div className="flex flex-col">
              <Input
                type="cep"
                placeholder="Digite seu CEP"
                {...register('cep')}
                errorMessage={errors.cep?.message}
              />
            </div>
            <Button type="submit" icon={<Search />} isLoading={isLoading} className="mt-2">
              Buscar
            </Button>
          </form>
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
