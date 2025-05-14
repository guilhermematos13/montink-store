import { tv } from 'tailwind-variants';

export const sideMenuStyles = tv({
  slots: {
    container:
      'fixed top-0 left-0 z-50 bg-indigo-100 transition-transform transition-opacity duration-300 ease-in-out h-screen w-screen md:w-[20rem] md:translate-x-0',
    contentContainer: '',
  },
  variants: {
    isOpen: {
      true: {
        container: 'flex opacity-100 translate-x-0 pointer-events-auto',
      },
      false: {
        container: 'opacity-0 -translate-x-full pointer-events-none',
      },
    },
  },
});
