import Image from 'next/image';
import { Button } from '../Button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/utils/format-currency';
import { VariantButtonEnum } from '../Button/constants';
import { CartCardProps } from './types';
import { useCart } from '@/context/CartContext';
import { cartCardStyles } from './styles';

export function CartCard({
  color,
  mainPicture,
  name,
  price,
  size,
  brand,
  quantity,
  id,
}: CartCardProps) {
  const { updateQuantity, removeProduct } = useCart();

  const { container, contentContainer, imageContainer, dataContainer } = cartCardStyles();

  return (
    <div className={container()}>
      <div className={contentContainer()}>
        <div className={imageContainer()}>
          <Image
            src={mainPicture}
            alt={`Imagem do produto ${name}`}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className={dataContainer()}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-bold">{brand}</p>
              <p className="text-sm">{name}</p>
            </div>
            <Button
              className="h-8 w-8 p-1"
              variant={VariantButtonEnum.SECONDARY}
              onClick={() => removeProduct(id)}
            >
              <Trash2 />
            </Button>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <p>Cor: {color}</p>
            <p>Tam: {size}</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button onClick={() => updateQuantity(id, -1)}>
                <Minus size={14} />
              </Button>
              <span className="w-4 text-center text-sm">{quantity}</span>
              <Button onClick={() => updateQuantity(id, 1)}>
                <Plus size={14} />
              </Button>
            </div>

            <p className="text-sm font-semibold">{formatCurrency(price * quantity)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
