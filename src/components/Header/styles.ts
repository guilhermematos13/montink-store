import { tv } from 'tailwind-variants';

export const headerStyles = tv({
  slots: {
    headerContainer: 'flex items-center justify-between bg-white border-b px-10 py-6',
    leftContainer: 'flex items-center gap-6',
    rightContainer: 'gap-2 flex items-center',
    buttonMenuStyles: 'cursor-pointer',
  },
});
