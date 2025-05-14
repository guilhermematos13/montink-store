import { Dispatch, SetStateAction } from 'react';

export type SideMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
