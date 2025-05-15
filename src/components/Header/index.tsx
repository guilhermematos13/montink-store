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
import { VariantButtonLinkEnum } from '../ButtonLink/constants';

export function Header() {
  const { buttonMenuStyles, headerContainer, leftContainer, rightContainer } = headerStyles();
  const [openSideMenuState, setOpenSideMenuState] = useState(false);

  const handleClickMenuButton = () => {
    setOpenSideMenuState(true);
  };

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
      </header>
      <SideMenu isOpen={openSideMenuState} setIsOpen={setOpenSideMenuState} />
    </>
  );
}
