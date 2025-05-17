'use client';

import { ButtonLink } from '@/components/ButtonLink';
import { AppRoutesEnum } from '@/constants';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
      <p className="mt-2 text-gray-500">
        A página que você está tentando acessar não existe ou foi removida.
      </p>
      <ButtonLink
        href={AppRoutesEnum.HOME}
        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Voltar para o início
      </ButtonLink>
    </main>
  );
}
