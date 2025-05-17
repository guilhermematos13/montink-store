import { IGetCepResponseDTO } from '@/infra/hooks/cep/dtos/IGetCepResponseDTO';

export interface CepRequestData {
  isLoading: boolean;
  data: IGetCepResponseDTO | null;
}
