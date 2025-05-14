import Link from 'next/link';
import { buttonStyles } from './styles';
import { ButtonLinkProps, VariantButtonEnum } from './types';

export function ButtonLink({
  variant = VariantButtonEnum.PRIMARY,
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
