import { formatCurrency } from '@/utils/format-currency';
import { FreightCardProps } from './types';

export function FreightCard({ address, city, neighborhood, state }: FreightCardProps) {
  return (
    <div className="space-y-1 rounded-lg border border-black bg-gray-50 p-4 text-sm">
      <h2 className="text-lg font-bold">Frete:</h2>
      <p>
        <span className="font-semibold">Endereço:</span> {address}
      </p>
      <p>
        <span className="font-semibold">Bairro:</span> {neighborhood}
      </p>
      <p>
        <span className="font-semibold">Cidade:</span> {city} - {state}
      </p>
      <p>
        <span className="font-semibold">Valor:</span> {formatCurrency(9.99)} - 3 a 4 dias úteis
      </p>
    </div>
  );
}
