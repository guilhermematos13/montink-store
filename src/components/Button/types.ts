import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantButtonEnum } from './constants';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantButtonEnum;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};
