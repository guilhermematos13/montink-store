import Image from 'next/image';
import { ProductCardProps } from './types';
import { useState } from 'react';
import { formatCurrency } from '@/utils/format-currency';
import { Button } from '../Button';

export function ProductCard({ galleries, label, price, brand }: ProductCardProps) {
  const mainGallery = galleries.find((gallery) => gallery.isMain);

  if (!mainGallery) {
    return null;
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  const { images } = mainGallery;

  return (
    <div className="flex max-w-[20rem] flex-col gap-4 rounded-md border border-black bg-white p-4">
      <div className="flex flex-col items-center gap-1">
        <div className="relative h-[12rem] w-[7rem] overflow-hidden rounded-lg">
          <Image
            src={images[selectedIndex]}
            alt={`Imagem ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex gap-4">
          {images.slice(0, 4).map((img, idx) => (
            <div
              key={img}
              onClick={() => setSelectedIndex(idx)}
              className={`relative h-[6rem] w-[3rem] cursor-pointer overflow-hidden rounded-md hover:opacity-60 ${
                idx === selectedIndex ? 'opacity-60' : ''
              }`}
            >
              <Image src={img} alt={`Miniatura ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-lg font-bold">{brand}</h2>
      <p className="text-center">{label}</p>
      <p className="text-center text-lg font-bold">{formatCurrency(price)}</p>
      <Button className="flex justify-center">Ver detalhes</Button>
    </div>
  );
}
