import { tv } from 'tailwind-variants';

export const sideMenuStyles = tv({
  slots: {
    container:
      'fixed top-0 left-0 z-50 bg-white  h-screen w-screen md:w-[20rem] md:translate-x-0 border-r border-black',
    contentContainer: 'flex w-full flex-col gap-8 p-4',
    loginOptionsContainer: 'flex flex-col gap-2 sm:hidden',
    filtersButtonsContainer: 'mt-2 flex flex-col gap-3',
    clearFilterButtonContainer: 'mt-4 flex w-full justify-end',
  },
  variants: {
    isOpen: {
      true: {
        container:
          'flex opacity-100 translate-x-0 pointer-events-auto transition-transform transition-opacity duration-300 ease-in-out',
      },
      false: {
        container: 'opacity-0 -translate-x-full pointer-events-none',
      },
    },
  },
});
