import { Dispatch, SetStateAction } from 'react';

export type DetailsInfoCardProps = {
  brand: string;
  name: string;
  variantsOptions: Array<string>;
  sizes: Array<string>;
  stockLow: boolean;
  stockVariant: number;
  variant: string;
  price: number;
  setOptionSelectedIndexState: Dispatch<SetStateAction<number>>;
  optionSelectedIndexState: number;
};
