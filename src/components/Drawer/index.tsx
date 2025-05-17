'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClickCloseSideMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className={container({ isOpen, openTo, size })}>
      <div className={contentContainer()} ref={drawerRef}>
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
