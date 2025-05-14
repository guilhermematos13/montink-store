import { buttonStyles } from './styles';
import { ButtonProps, VariantButtonEnum } from './types';

export function Button({
  variant = VariantButtonEnum.PRIMARY,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant: variant, className })} {...props}>
      {icon ? icon : null}
      {children}
    </button>
  );
}
