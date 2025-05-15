import { ShoppingCart, User, X } from 'lucide-react';
import { sideMenuStyles } from './styles';
import { SideMenuProps } from './types';
import Image from 'next/image';
import Logo from '../../../../assets/black-logo.png';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { Button } from '@/components/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchParamsKeysEnum } from './constants';
import { formatText } from '@/utils/format-text';
import { ButtonLink } from '@/components/ButtonLink';
import { AppRoutesEnum } from '@/constants';
import { VariantButtonEnum } from '@/components/Button/constants';
import { VariantButtonLinkEnum } from '@/components/ButtonLink/constants';

export function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const {
    container,
    contentContainer,
    filtersButtonsContainer,
    clearFilterButtonContainer,
    loginOptionsContainer,
  } = sideMenuStyles();
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
      <div className={contentContainer()}>
        <div className="flex justify-between">
          <Image src={Logo} alt="Logo da Montink Store" width={120} priority />
          <button onClick={handleClickCloseSideMenu} className="cursor-pointer">
            <X />
          </button>
        </div>
        <div className={loginOptionsContainer()}>
          <ButtonLink href={AppRoutesEnum.HOME} icon={<User />}>
            Login
          </ButtonLink>
          <ButtonLink
            href={AppRoutesEnum.HOME}
            variant={VariantButtonLinkEnum.SECONDARY}
            icon={<ShoppingCart />}
          >
            Carrinho
          </ButtonLink>
        </div>
        <div>
          <h2>Filtrar por:</h2>
          <div className={filtersButtonsContainer()}>
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
            <div className={clearFilterButtonContainer()}>
              <Button onClick={handleClearFilter}>Limpar Filtros</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
