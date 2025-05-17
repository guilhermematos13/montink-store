'use client';

import { Menu, ShoppingCart, User } from 'lucide-react';
import { AppRoutesEnum } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/black-logo.png';
import { ButtonLink } from '../ButtonLink';
import { SideMenu } from './components/SideMenu';
import { useState } from 'react';
import { headerStyles } from './styles';
import { usePathname } from 'next/navigation';
import { Button } from '../Button';
import { useAuth } from '@/context/AuthContext';
import { VariantButtonEnum } from '../Button/constants';
import { CartSection } from './components/CartSection';
import { useCart } from '@/context/CartContext';

export function Header() {
  const pathname = usePathname();
  const { getTotalItems } = useCart();
  const { buttonMenuStyles, headerContainer, leftContainer, rightContainer } = headerStyles();
  const [openSideMenuState, setOpenSideMenuState] = useState(false);
  const [openCartState, setOpenCartState] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const totalItems = getTotalItems();

  const handleClickMenuButton = () => {
    setOpenSideMenuState(true);
  };

  const handleClickCartButton = () => {
    setOpenCartState(true);
  };

  const handleLogout = () => {
    logout();
  };

  const isLoginPath = pathname.startsWith(AppRoutesEnum.LOGIN);

  if (isLoginPath) return null;

  return (
    <>
      <header className={headerContainer()}>
        <div className={leftContainer()}>
          <button className={buttonMenuStyles()} onClick={handleClickMenuButton}>
            <Menu />
          </button>
          <Link href={AppRoutesEnum.HOME}>
            <Image src={Logo} alt="Logo da Montink Store" width={120} priority />
          </Link>
        </div>
        <div className={rightContainer()}>
          {isLoggedIn ? (
            <div className="hidden flex-col items-end sm:flex">
              <Button onClick={handleLogout}>Sair</Button>
            </div>
          ) : (
            <ButtonLink href={AppRoutesEnum.LOGIN} icon={<User />} className="hidden sm:flex">
              Login
            </ButtonLink>
          )}
          <div className="relative">
            <Button
              onClick={handleClickCartButton}
              variant={VariantButtonEnum.SECONDARY}
              icon={<ShoppingCart />}
            >
              <p className="hidden sm:flex">Carrinho</p>
            </Button>

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </header>
      <SideMenu isOpen={openSideMenuState} setIsOpen={setOpenSideMenuState} />
      <CartSection isOpen={openCartState} setIsOpen={setOpenCartState} />
    </>
  );
}
