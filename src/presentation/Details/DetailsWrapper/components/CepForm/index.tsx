import { zodResolver } from '@hookform/resolvers/zod';
import { cepSchema, CepSchemaType } from '../../schema';
import { useForm } from 'react-hook-form';
import { useCepRequestData } from '@/controllers/client/cep/useCepRequest';
import { Button } from '@/components/Button';
import { Search } from 'lucide-react';
import { Input } from '@/components/Input';
import { FreightCard } from '../FreightCard';
import { useEffect } from 'react';

export function CepForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CepSchemaType>({
    resolver: zodResolver(cepSchema),
  });
  const { createCepRequest, cepDataRequest } = useCepRequestData();

  const { data, isLoading } = cepDataRequest;

  const onSubmitCep = async (data: CepSchemaType) => {
    await createCepRequest({ cep: data.cep });
  };

  useEffect(() => {
    if (data?.erro) {
      setError('cep', { message: 'CEP inválido' });
    }
  }, [data?.erro]);

  return (
    <>
      {cepDataRequest.data && !cepDataRequest.data.erro && (
        <FreightCard
          address={`${cepDataRequest.data.logradouro}`}
          city={cepDataRequest.data.localidade}
          state={cepDataRequest.data.uf}
          neighborhood={cepDataRequest.data.bairro}
        />
      )}

      <form onSubmit={handleSubmit(onSubmitCep)}>
        <div className="flex flex-col">
          <Input
            type="cep"
            placeholder="Digite seu CEP"
            {...register('cep')}
            errorMessage={errors.cep?.message}
          />
        </div>
        <Button type="submit" icon={<Search />} isLoading={isLoading} className="mt-2">
          Buscar
        </Button>
      </form>
    </>
  );
}
