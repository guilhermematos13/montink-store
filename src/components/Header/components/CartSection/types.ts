import { Dispatch, SetStateAction } from 'react';

export type CartSectionProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
