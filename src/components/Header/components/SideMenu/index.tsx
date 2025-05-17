import { LogOut, User } from 'lucide-react';
import { sideMenuStyles } from './styles';
import { SideMenuProps } from './types';
import { CategoryEnumNames } from '@/infra/hooks/products/constants';
import { Button } from '@/components/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatText } from '@/utils/format-text';
import { ButtonLink } from '@/components/ButtonLink';
import { AppRoutesEnum, SearchParamsKeysEnum } from '@/constants';
import { VariantButtonEnum } from '@/components/Button/constants';
import { Drawer } from '@/components/Drawer';
import { useAuth } from '@/context/AuthContext';

export function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const { filtersButtonsContainer, clearFilterButtonContainer, loginOptionsContainer } =
    sideMenuStyles();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const hasFilterSelected = Boolean(searchParams.get(SearchParamsKeysEnum.FILTER));
  const selectedFilter = searchParams.get(SearchParamsKeysEnum.FILTER);

  const categoryValues = Object.values(CategoryEnumNames);

  const handleSelectedFilter = (category: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(SearchParamsKeysEnum.FILTER, category);

    const url = `${AppRoutesEnum.HOME}?${params.toString()}`;

    router.push(url);
    setIsOpen(false);
  };

  const handleClearFilter = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.delete(SearchParamsKeysEnum.FILTER);

    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={loginOptionsContainer()}>
        {isLoggedIn ? (
          <div className="flex flex-col items-end">
            <Button
              onClick={handleLogout}
              icon={<LogOut />}
              className="flex w-full items-center justify-center"
            >
              Sair
            </Button>
          </div>
        ) : (
          <ButtonLink
            className="flex w-full items-center justify-center"
            href={AppRoutesEnum.LOGIN}
            onClick={() => setIsOpen(false)}
            icon={<User />}
          >
            Login
          </ButtonLink>
        )}
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
    </Drawer>
  );
}
