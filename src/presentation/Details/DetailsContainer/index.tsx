import useProducts from '@/controllers/server/products/useProducts';
import { DetailsWrapper } from '../DetailsWrapper';
import { DetailsContainerProps } from './types';

export default async function DetailsContainer({ id }: DetailsContainerProps) {
  const { getProductData } = useProducts();

  const { productData } = await getProductData(id);

  return <DetailsWrapper product={productData} />;
}
