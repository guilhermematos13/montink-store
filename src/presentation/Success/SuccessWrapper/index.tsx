'use client';

import { CheckCircle } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { AppRoutesEnum } from '@/constants';
import { Header } from '@/components/Header';

export function SuccessWrapper() {
  const protocol = `#${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-md space-y-5 rounded-2xl bg-white p-6 text-center shadow-md">
          <CheckCircle size={48} className="mx-auto text-green-500" />
          <h1 className="text-2xl font-bold text-gray-800">Compra realizada com sucesso!</h1>
          <p className="text-sm text-gray-600">
            Obrigado por sua compra. Seu pedido foi processado com sucesso.
          </p>
          <div className="rounded-lg bg-gray-100 p-4 text-gray-700">
            <p className="text-sm">Protocolo do pedido:</p>
            <p className="text-lg font-semibold">{protocol}</p>
          </div>
          <p className="text-xs text-gray-400">
            Você receberá um e-mail com mais detalhes em breve.
          </p>

          <ButtonLink href={AppRoutesEnum.HOME} className="flex justify-center">
            Voltar para a loja
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
