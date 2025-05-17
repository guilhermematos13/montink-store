import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/context/AuthContext';
import { CartContextProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

const fontSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Montink Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <AuthProvider>
          <CartContextProvider>
            <Toaster />
            <Header />
            {children}
          </CartContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
