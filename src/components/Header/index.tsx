'use client';

import { Menu, ShoppingCart, User } from 'lucide-react';
import { AppRoutesEnum, CookiesKeyEnum } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/black-logo.png';
import { ButtonLink } from '../ButtonLink';
import { SideMenu } from './components/SideMenu';
import { useState } from 'react';
import { headerStyles } from './styles';
import { VariantButtonLinkEnum } from '../ButtonLink/constants';
import { usePathname } from 'next/navigation';
import { Button } from '../Button';
import { useAuth } from '@/context/AuthContext';

export function Header() {
  const pathname = usePathname();
  const { buttonMenuStyles, headerContainer, leftContainer, rightContainer } = headerStyles();
  const [openSideMenuState, setOpenSideMenuState] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleClickMenuButton = () => {
    setOpenSideMenuState(true);
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
            <div className="flex flex-col items-end">
              <Button onClick={handleLogout}>Sair</Button>
            </div>
          ) : (
            <ButtonLink href={AppRoutesEnum.LOGIN} icon={<User />}>
              Login
            </ButtonLink>
          )}
          <ButtonLink
            href={AppRoutesEnum.HOME}
            variant={VariantButtonLinkEnum.SECONDARY}
            icon={<ShoppingCart />}
          >
            Carrinho
          </ButtonLink>
        </div>
      </header>
      <SideMenu isOpen={openSideMenuState} setIsOpen={setOpenSideMenuState} />
    </>
  );
}
