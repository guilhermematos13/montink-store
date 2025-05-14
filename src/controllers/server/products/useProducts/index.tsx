import { useProductsService } from '@/infra/hooks/products/useProductsService';

export default function useProducts() {
  const productsService = useProductsService();

  const getProductList = async () => {
    const data = await productsService.getProductsList();

    return {
      statusCode: data.statusCode,
      products: data.body.products,
    };
  };

  const getProductData = async (id: string) => {
    const data = await productsService.getProductData({ id });

    return {
      statusCode: data.statusCode,
      products: data.body.product,
    };
  };

  return {
    getProductList,
    getProductData,
  };
}
