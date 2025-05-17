import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:transition-colors hover:duration-300',
  variants: {
    variant: {
      primary: 'bg-black text-white hover:bg-white hover:border-black hover:text-black',
      secondary: 'bg-white text-black hover:bg-black hover:border-white hover:text-white',
      selected: 'bg-black text-white',
    },
  },
});
