'use client';

import { Button } from '@/components/Button';
import { HomeWrapperProps } from './types';
import { ProductCard } from '@/components/ProductCard';

export function HomeWrapper({ products }: HomeWrapperProps) {
  return (
    <div className="px-10 py-6">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            galleries={product.galleries}
            label={product.name}
            price={product.price}
            brand={product.brand}
          />
        );
      })}
    </div>
  );
}
