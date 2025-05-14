import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:transition-colors hover:duration-300',
  variants: {
    variant: {
      primary:
        'bg-indigo-700 text-indigo-100 hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700',
      secondary:
        'bg-indigo-100 text-indigo-700 hover:bg-indigo-700 hover:border-indigo-100 hover:text-indigo-100',
      ghost: '',
    },
  },
});
