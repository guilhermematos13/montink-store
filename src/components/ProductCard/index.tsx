import Image from 'next/image';
import { ProductCardProps } from './types';
import { useState } from 'react';
import { formatCurrency } from '@/utils/format-currency';
import { productCardStyles } from './styles';

export function ProductCard({ galleries, label, price, brand, onClick }: ProductCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    buttonContainer,
    galleryContainer,
    mainImageContainer,
    miniatureImage,
    miniatureImageContainer,
  } = productCardStyles();

  const { images } = galleries;

  return (
    <button onClick={onClick} className={buttonContainer()}>
      <div className={galleryContainer()}>
        <div className={mainImageContainer()}>
          <Image
            src={images[selectedIndex]}
            alt={`Imagem ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className={miniatureImageContainer()}>
          {images.slice(0, 4).map((img, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={img}
                onMouseEnter={() => setSelectedIndex(index)}
                className={miniatureImage({ isSelected })}
              >
                <Image src={img} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
              </div>
            );
          })}
        </div>
      </div>
      <h2 className="text-lg font-bold">{brand}</h2>
      <p className="h-[1.5rem] truncate text-center text-sm">{label}</p>
      <p className="text-center text-lg font-bold">{formatCurrency(price)}</p>
    </button>
  );
}
