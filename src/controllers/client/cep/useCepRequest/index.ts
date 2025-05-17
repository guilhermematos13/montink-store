import { useCallback, useState } from 'react';
import { CepRequestData } from './types';
import { useCepService } from '@/infra/hooks/cep/useProductsService';
import { IGetCepRequestDTO } from '@/infra/hooks/cep/dtos/IGetCepRequestDTO';
import toast from 'react-hot-toast';

function useCepRequestData() {
  const [cepDataRequest, setCepDataRequest] = useState<CepRequestData>({
    isLoading: false,
    data: null,
  });

  const { getCepData } = useCepService();

  const createCepRequest = useCallback(
    async ({ cep }: IGetCepRequestDTO) => {
      setCepDataRequest({
        isLoading: true,
        data: null,
      });

      try {
        const response = await getCepData({ cep });

        setCepDataRequest({
          isLoading: false,
          data: response.body,
        });
      } catch (err) {
        toast.error('Algo deu errado', { position: 'bottom-center' });
        setCepDataRequest({
          isLoading: false,
          data: null,
        });
      }
    },
    [getCepData],
  );

  return {
    createCepRequest,
    cepDataRequest,
  };
}

export { useCepRequestData };
