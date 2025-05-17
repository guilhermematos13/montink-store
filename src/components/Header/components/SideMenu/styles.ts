import { tv } from 'tailwind-variants';

export const sideMenuStyles = tv({
  slots: {
    loginOptionsContainer: 'flex flex-col gap-2 sm:hidden',
    filtersButtonsContainer: 'mt-2 flex flex-col gap-3',
    clearFilterButtonContainer: 'mt-4 flex w-full justify-end',
  },
});
