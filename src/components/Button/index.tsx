import { Loader } from 'lucide-react';
import { VariantButtonEnum } from './constants';
import { buttonStyles } from './styles';
import { ButtonProps } from './types';

export function Button({
  variant = VariantButtonEnum.PRIMARY,
  icon,
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant: variant, className })} {...props}>
      {isLoading ? (
        <>
          <Loader className="animate-spin" size={18} />
        </>
      ) : (
        <>
          {icon ? icon : null}
          {children}
        </>
      )}
    </button>
  );
}
