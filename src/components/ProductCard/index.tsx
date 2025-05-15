import Image from 'next/image';
import { ProductCardProps } from './types';
import { useState } from 'react';
import { formatCurrency } from '@/utils/format-currency';

export function ProductCard({ galleries, label, price, brand, onClick }: ProductCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { images } = galleries;

  return (
    <button
      onClick={onClick}
      className="flex max-w-[18rem] cursor-pointer flex-col gap-4 rounded-md border border-black bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="relative h-[12rem] w-[12rem] overflow-hidden rounded-lg">
          <Image
            src={images[selectedIndex]}
            alt={`Imagem ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex gap-4">
          {images.slice(0, 4).map((img, index) => (
            <div
              key={img}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`relative h-[6rem] w-[3rem] cursor-pointer overflow-hidden rounded-md hover:opacity-60 ${
                index === selectedIndex ? 'opacity-60' : ''
              }`}
            >
              <Image src={img} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-lg font-bold">{brand}</h2>
      <p className="h-[1.5rem] truncate text-center text-sm">{label}</p>
      <p className="text-center text-lg font-bold">{formatCurrency(price)}</p>
    </button>
  );
}
