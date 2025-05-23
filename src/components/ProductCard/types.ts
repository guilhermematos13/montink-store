import { galleries } from '@/infra/hooks/products/dtos/IGetProductListResponseDTO';

export type ProductCardProps = {
  galleries: galleries;
  label: string;
  price: number;
  brand: string;
  onClick: () => void;
};
