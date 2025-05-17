import { tv } from 'tailwind-variants';

export const drawerStyles = tv({
  slots: {
    container:
      'fixed top-0 z-50 h-screen overflow-auto w-screen bg-white transition-transform transition-opacity duration-300 ease-in-out border-black',
    contentContainer: 'flex w-full flex-col gap-8 p-2',
  },
  variants: {
    isOpen: {
      true: {
        container: 'opacity-100 pointer-events-auto',
      },
      false: {
        container: 'opacity-0 pointer-events-none',
      },
    },
    openTo: {
      left: {
        container: 'left-0 translate-x-0 border-r',
        isOpen: {
          false: {
            container: '-translate-x-full',
          },
        },
      },
      right: {
        container: 'right-0 translate-x-0 border-l',
        isOpen: {
          false: {
            container: 'translate-x-full',
          },
        },
      },
    },
    size: {
      sm: {
        container: 'md:w-[20rem]',
      },
      md: {
        container: 'md:w-[30rem]',
      },
      lg: {
        container: 'md:w-[40rem]',
      },
    },
  },
  compoundVariants: [
    {
      isOpen: false,
      openTo: 'left',
      class: {
        container: '-translate-x-full',
      },
    },
    {
      isOpen: false,
      openTo: 'right',
      class: {
        container: 'translate-x-full',
      },
    },
  ],
});
