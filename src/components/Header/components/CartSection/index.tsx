import { CartSectionProps } from './types';
import { Drawer } from '@/components/Drawer';
import { Button } from '@/components/Button';
import { DrawerOpenToEnum, DrawerSizeEnum } from '@/components/Drawer/constants';
import { useCart } from '@/context/CartContext';
import { CartCard } from '@/components/CartCard';
import { ShoppingCart } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { AppRoutesEnum, CookiesKeyEnum } from '@/constants';
import { formatCurrency } from '@/utils/format-currency';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export function CartSection({ isOpen, setIsOpen }: CartSectionProps) {
  const router = useRouter();
  const { products, getTotalPrice, setProducts } = useCart();
  const { isLoggedIn } = useAuth();

  const handleFinishOrder = () => {
    if (isLoggedIn) {
      setIsOpen(false);
      router.push(AppRoutesEnum.SUCCESS);
      setProducts([]);
      Cookies.remove(CookiesKeyEnum.CART_PRODUCTS);
    } else {
      setIsOpen(false);
      router.push(AppRoutesEnum.LOGIN);
    }
  };

  const hasProducts = products.length > 0;

  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      openTo={DrawerOpenToEnum.RIGHT}
      size={DrawerSizeEnum.MEDIUM}
    >
      {hasProducts ? (
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-lg font-bold">Seu Carrinho</h2>
          <div className="flex flex-col gap-4">
            {products.map((product) => {
              return <CartCard key={product.id} {...product} />;
            })}
          </div>
          <div className="flex w-full justify-end">
            <p className="text-sm font-semibold">Total: {formatCurrency(getTotalPrice())}</p>
          </div>
          <Button className="mt-4 w-full" onClick={handleFinishOrder}>
            Finalizar Compra
          </Button>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
          <h2 className="text-lg font-semibold">Seu carrinho está vazio</h2>
          <p className="text-sm text-gray-500">Explore os produtos e adicione ao carrinho.</p>
          <ButtonLink
            icon={<ShoppingCart />}
            href={AppRoutesEnum.HOME}
            onClick={() => setIsOpen(false)}
          >
            Ver produtos
          </ButtonLink>
        </div>
      )}
    </Drawer>
  );
}
