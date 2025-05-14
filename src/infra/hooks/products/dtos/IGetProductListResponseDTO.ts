import { CategoryEnumNames } from '../constants';

export interface IGetProductListResponseDTO {
  products: Array<product>;
}

export interface product {
  id: string;
  name: string;
  category: CategoryEnumNames;
  galleries: Array<galleries>;
  price: number;
  size: Array<String>;
  colors: Array<String>;
  stock: number;
}

export interface galleries {
  images: Array<String>;
  color: string;
  isMain: boolean;
}
