import Image from 'next/image';
import { ProductCardProps } from './types';
import { useState } from 'react';
import { formatCurrency } from '@/utils/format-currency';
import { productCardStyles } from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ButtonLink } from '../ButtonLink';
import { AppRoutesEnum } from '@/constants';
import { Button } from '../Button';

export function ProductCard({ galleries, label, price, brand, onClick }: ProductCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useIsMobile();

  const {
    buttonContainer,
    galleryContainer,
    mainImageContainer,
    miniatureImage,
    miniatureImageContainer,
  } = productCardStyles();

  const { images } = galleries;

  const content = (
    <>
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
      <p className="h-[1.5rem] max-w-[15rem] truncate text-center text-sm">{label}</p>
      <p className="text-center text-lg font-bold">{formatCurrency(price)}</p>
    </>
  );

  return isMobile ? (
    <div className={buttonContainer()}>
      {content}

      <Button className="flex w-full justify-center" onClick={onClick}>
        Ver detalhes
      </Button>
    </div>
  ) : (
    <button onClick={onClick} className={buttonContainer()}>
      {content}
    </button>
  );
}
