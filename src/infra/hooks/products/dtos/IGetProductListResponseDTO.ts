import { CategoryEnumNames } from '../constants';

export interface IGetProductListResponseDTO extends Array<product> {}

export interface product {
  id: number;
  name: string;
  category: CategoryEnumNames;
  galleries: Array<galleries>;
  brand: string;
  price: number;
  size: Array<string>;
  colors: Array<string>;
  flavors: Array<string>;
  stock: Array<stock>;
}

export interface galleries {
  images: Array<string>;
  variant: string;
  isMain: boolean;
}

export interface stock {
  variant: string;
  stock: number;
}
