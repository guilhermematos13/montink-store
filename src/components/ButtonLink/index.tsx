import Link from 'next/link';
import { buttonStyles } from './styles';
import { ButtonLinkProps } from './types';
import { VariantButtonLinkEnum } from './constants';

export function ButtonLink({
  variant = VariantButtonLinkEnum.PRIMARY,
  icon,
  href,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonStyles({ variant: variant, className })} {...props}>
      {icon ? icon : null}
      {children}
    </Link>
  );
}
