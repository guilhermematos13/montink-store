'use client';

import { Menu, ShoppingCart, User } from 'lucide-react';
import { AppRoutesEnum } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/black-logo.png';
import { VariantButtonEnum } from '../Button/types';
import { ButtonLink } from '../ButtonLink';
import { SideMenu } from './components/SideMenu';
import { useState } from 'react';

export function Header() {
  const [openSideMenuState, setOpenSideMenuState] = useState(false);

  const handleClickMenuButton = () => {
    setOpenSideMenuState(true);
  };

  return (
    <>
      <header className="flex items-center justify-between bg-indigo-700 px-10 py-6">
        <div className="flex items-center gap-6">
          <button className="cursor-pointer text-indigo-100" onClick={handleClickMenuButton}>
            <Menu />
          </button>
          <Link href={AppRoutesEnum.HOME}>
            <Image src={Logo} alt="Logo da Montink Store" width={120} priority />
          </Link>
        </div>
        <div className="hidden gap-2 sm:flex">
          <ButtonLink href={AppRoutesEnum.HOME} icon={<User />}>
            Login
          </ButtonLink>
          <ButtonLink
            href={AppRoutesEnum.HOME}
            variant={VariantButtonEnum.SECONDARY}
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
