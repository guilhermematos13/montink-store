import { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { VariantButtonLinkEnum } from './constants';

export type ButtonLinkProps = LinkProps & {
  variant?: VariantButtonLinkEnum;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};
