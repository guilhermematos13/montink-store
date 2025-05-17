import { z } from 'zod';

export const cepSchema = z.object({
  cep: z.string().min(8, 'CEP inválido').max(9, 'CEP inválido'),
});

export type CepSchemaType = z.infer<typeof cepSchema>;
