import Image from 'next/image';
import { drawerStyles } from './styles';
import { DrawerProps } from './types';
import Logo from '../../assets/black-logo.png';
import { X } from 'lucide-react';
import { DrawerOpenToEnum, DrawerSizeEnum } from './constants';

export function Drawer({
  isOpen,
  setIsOpen,
  children,
  openTo = DrawerOpenToEnum.LEFT,
  size = DrawerSizeEnum.SMALL,
}: DrawerProps) {
  const { container, contentContainer } = drawerStyles();

  const handleClickCloseSideMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={container({ isOpen, openTo, size })}>
      <div className={contentContainer()}>
        <div className="flex justify-between">
          <Image src={Logo} alt="Logo da Montink Store" width={120} priority />
          <button onClick={handleClickCloseSideMenu} className="cursor-pointer">
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
