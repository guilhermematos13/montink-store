import { useProductsService } from '@/infra/hooks/products/useProductsService';
import { HomeWrapper } from '../HomeWrapper';
import useProducts from '@/controllers/server/products/useProducts';

export default async function HomeContainer() {
  const { getProductList } = useProducts();

  const { products } = await getProductList();

  return <HomeWrapper products={products} />;
}
