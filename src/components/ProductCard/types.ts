import { galleries } from '@/infra/hooks/products/dtos/IGetProductListResponseDTO';

export type ProductCardProps = {
  galleries: Array<galleries>;
  label: string;
  price: number;
  brand: string;
  onClick: () => void;
};
