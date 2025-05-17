import { IHttpResponse } from '../../IHttpResponse';
import { IGetCepResponseDTO } from './dtos/IGetCepResponseDTO';
import { IGetCepRequestDTO } from './dtos/IGetCepRequestDTO';
import { ROUTES } from './constants';
import { apiCep } from '@/api/axios';

export function useCepService() {
  const getCepData = async ({
    cep,
  }: IGetCepRequestDTO): Promise<IHttpResponse<IGetCepResponseDTO>> => {
    const cepRoute = ROUTES.CEP;

    const response = await apiCep.get(cepRoute.replace(':cep', cep));

    return {
      statusCode: response.status,
      body: response.data,
    };
  };

  return { getCepData };
}
