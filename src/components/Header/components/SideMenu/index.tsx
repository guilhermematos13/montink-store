import { X } from 'lucide-react';
import { sideMenuStyles } from './styles';
import { SideMenuProps } from './types';
import Image from 'next/image';
import Logo from '../../../../assets/black-logo.png';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { Button } from '@/components/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchParamsKeysEnum } from './constants';
import { formatText } from '@/utils/format-text';
import { VariantButtonEnum } from '@/components/Button/types';

export function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const { container } = sideMenuStyles();
  const searchParams = useSearchParams();
  const router = useRouter();

  const hasFilterSelected = Boolean(searchParams.get(SearchParamsKeysEnum.FILTER));
  const selectedFilter = searchParams.get(SearchParamsKeysEnum.FILTER);

  const handleClickCloseSideMenu = () => {
    setIsOpen(false);
  };

  const categoryValues = Object.values(CategoryEnumNames);

  const handleSelectedFilter = (category: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.FILTER, category);
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  const handleClearFilter = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.delete(SearchParamsKeysEnum.FILTER);

    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className={container({ isOpen })}>
      <div className="flex w-full flex-col gap-8 p-4">
        <div className="flex justify-between">
          <Image src={Logo} alt="Logo da Montink Store" width={120} priority />
          <button onClick={handleClickCloseSideMenu} className="cursor-pointer">
            <X />
          </button>
        </div>
        <div>
          <h2>Filtrar por:</h2>
          <div className="mt-2 flex flex-col gap-3">
            {categoryValues.map((category) => {
              const formatted = formatText(category);
              const isSelected = formatted === selectedFilter;

              return (
                <Button
                  key={category}
                  className="w-full"
                  variant={isSelected ? VariantButtonEnum.SECONDARY : VariantButtonEnum.PRIMARY}
                  onClick={() => handleSelectedFilter(formatted)}
                  disabled={isSelected}
                >
                  {category}
                </Button>
              );
            })}
          </div>
          {hasFilterSelected ? (
            <div className="mt-4 flex w-full justify-end">
              <Button onClick={handleClearFilter}>Limpar Filtros</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
