import { Dispatch, ReactNode, SetStateAction } from 'react';
import { DrawerOpenToEnum, DrawerSizeEnum } from './constants';

export type DrawerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openTo?: DrawerOpenToEnum;
  children: ReactNode;
  size?: DrawerSizeEnum;
};
