import { CategoryEnumNames } from '../constants';

export interface IGetProductListResponseDTO {
  products: Array<product>;
}

export interface product {
  id: string;
  name: string;
  category: CategoryEnumNames;
  galleries: Array<galleries>;
  brand: string;
  price: number;
  size: Array<string>;
  colors?: Array<string>;
  flavors?: Array<string>;
  stock: number;
}

export interface galleries {
  images: Array<string>;
  color: string;
  isMain: boolean;
}

export interface stock {
  color?: string;
  flavor?: string;
  stock: number;
}
