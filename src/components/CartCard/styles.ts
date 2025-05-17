import { tv } from 'tailwind-variants';

export const cartCardStyles = tv({
  slots: {
    container: 'flex flex-col gap-4',
    contentContainer: 'flex gap-4 rounded-lg border border-black p-4',
    imageContainer: 'relative h-[5rem] w-[5rem] flex-shrink-0',
    dataContainer: 'flex flex-1 flex-col justify-between',
  },
});
