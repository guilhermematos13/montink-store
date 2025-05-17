import { tv } from 'tailwind-variants';

export const productCardStyles = tv({
  slots: {
    buttonContainer:
      'flex max-w-[18rem] cursor-pointer items-center justify-center flex-col gap-4 rounded-md border border-black bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105',
    galleryContainer: 'flex flex-col items-center gap-1',
    mainImageContainer: 'relative h-[12rem] w-[12rem] overflow-hidden rounded-lg',
    miniatureImageContainer: 'flex gap-4',
    miniatureImage:
      'relative h-[6rem] w-[3rem] cursor-pointer overflow-hidden rounded-md hover:opacity-60',
  },
  variants: {
    isSelected: {
      true: {
        miniatureImage: 'opacity-60',
      },
    },
  },
});
