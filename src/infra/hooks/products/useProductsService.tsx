import { ROUTES } from './constants';
import { IGetProductListResponseDTO } from './dtos/IGetProductListResponseDTO';
import { IGetProductDataResponseDTO } from './dtos/IGetProductDataResponseDTO';
import { IGetProductDataRequestDTO } from './dtos/IGetProductDataRequestDTO';
import { api } from '@/api/axios';
import { IHttpResponse } from '@/infra/types';

export function useProductsService() {
  const getProductsList = async (): Promise<IHttpResponse<IGetProductListResponseDTO>> => {
    const productsRoute = ROUTES.PRODUCTS;

    const response = await api.get(productsRoute);

    return {
      statusCode: response.status,
      body: response.data,
    };
  };

  const getProductData = async ({
    id,
  }: IGetProductDataRequestDTO): Promise<IHttpResponse<IGetProductDataResponseDTO>> => {
    const productsRoute = ROUTES.PRODUCT_DATA;

    const response = await api.get<IGetProductDataResponseDTO>(productsRoute.replace(':id', id));

    return {
      statusCode: response.status,
      body: response.data,
    };
  };

  return { getProductsList, getProductData };
}
