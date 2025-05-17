import { formatText } from '@/utils/format-text';
import { DetailsInfoCardProps } from './types';
import { VariantButtonEnum } from '@/components/Button/constants';
import { Button } from '@/components/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchParamsKeysEnum } from '@/constants';
import { orderSize } from '@/utils/order-size';
import { formatCurrency } from '@/utils/format-currency';

export function DetailsInfoCard({
  brand,
  name,
  sizes,
  stockLow,
  stockVariant,
  variantsOptions,
  variant,
  optionSelectedIndexState,
  setOptionSelectedIndexState,
  price,
}: DetailsInfoCardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClickChangeOption = (variant: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.VARIANT, variant);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <h2 className="text-lg font-bold">{brand}</h2>
      <p>{name}</p>
      <div className="flex gap-2">
        {variantsOptions.map((option) => {
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
        {orderSize(sizes).map((option, index) => {
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
      <p className="text-end text-lg font-bold">{formatCurrency(price)}</p>
    </>
  );
}
