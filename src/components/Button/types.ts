import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantButtonEnum;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

export enum VariantButtonEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost',
}
