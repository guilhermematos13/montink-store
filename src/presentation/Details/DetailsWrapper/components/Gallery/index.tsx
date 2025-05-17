import { useState } from 'react';
import { GalleryProps } from './types';
import Image from 'next/image';

export function Gallery({ pictures, isClothes }: GalleryProps) {
  const [imageSelectedIndexState, setImageSelectedIndexState] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-4 md:flex-col md:justify-start">
        {pictures.map((img, index) => (
          <div
            key={img}
            className={`relative h-[5rem] w-[5rem] cursor-pointer overflow-hidden rounded-md hover:opacity-60`}
            onMouseEnter={() => setImageSelectedIndexState(index)}
          >
            <Image src={img} alt={`Miniatura ${index + 1}`} fill />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-auto justify-center">
          <Image
            src={pictures[imageSelectedIndexState]}
            alt={`Imagem ${imageSelectedIndexState + 1}`}
            height={isClothes ? 200 : 150}
            width={isClothes ? 350 : 400}
            priority
          />
        </div>
      </div>
    </>
  );
}
