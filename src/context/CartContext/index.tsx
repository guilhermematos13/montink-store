'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { CartContextProps, CartProviderProps, productContext } from './types';
import { CookiesKeyEnum } from '@/constants';
import toast from 'react-hot-toast';
const COOKIE_EXPIRES_MINUTES = 15;

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<productContext[]>([]);
  useEffect(() => {
    const stored = Cookies.get(CookiesKeyEnum.CART_PRODUCTS);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as {
          products: productContext[];
          expiresAt: number;
        };

        const now = Date.now();
        if (parsed.expiresAt > now) {
          setProducts(parsed.products);
        } else {
          Cookies.remove(CookiesKeyEnum.CART_PRODUCTS);
        }
      } catch (err) {
        toast.error('Algo deu errado');
        Cookies.remove(CookiesKeyEnum.CART_PRODUCTS);
      }
    }
  }, []);

  useEffect(() => {
    const expiresAt = Date.now() + COOKIE_EXPIRES_MINUTES * 60 * 1000;

    const value = JSON.stringify({ products, expiresAt });
    Cookies.set(CookiesKeyEnum.CART_PRODUCTS, value, {
      expires: COOKIE_EXPIRES_MINUTES / (60 * 24),
    });
  }, [products]);

  const addProduct = (newProduct: productContext) => {
    return setProducts((prev) => [...prev, newProduct]);
  };

  const updateQuantity = (id: string, amount: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((prev) =>
        prev.id === id
          ? {
              ...prev,
              quantity: Math.max(1, prev.quantity ? prev.quantity + amount : amount),
            }
          : prev,
      ),
    );
  };

  const removeProduct = (id: string) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  const getTotalItems = () => {
    return products.reduce((acc, product) => {
      return product.quantity ? acc + product.quantity : acc;
    }, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((acc, product) => {
      return acc + product.price * (product.quantity ?? 1);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
}
