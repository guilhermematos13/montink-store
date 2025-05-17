import { product } from '@/infra/hooks/products/dtos/IGetProductListResponseDTO';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type CartContextProps = {
  products: Array<productContext>;
  setProducts: Dispatch<SetStateAction<productContext[]>>;
  addProduct: (product: productContext) => void;
  getTotalItems: () => number;
  removeProduct: (id: string) => void;
  updateQuantity: (id: string, amount: number) => void;
  getTotalPrice: () => number;
};

export type productContext = {
  id: string;
  name: string;
  mainPicture: string;
  brand: string;
  price: number;
  size: string;
  color: string;
  flavor: string;
  quantity: number;
};

export interface CartProviderProps {
  children: ReactNode;
}
