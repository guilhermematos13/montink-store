import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonLinkProps = LinkProps & {
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
