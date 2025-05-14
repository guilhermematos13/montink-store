import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        'https://http2.mlstatic.com/D_NQ_NP_2X_660753-MLB82421329202_022025-F-camiseta-masc-essentials-3-stripes-single-jersey-tee-adidas.webp',
      ),
      new URL(
        'https://http2.mlstatic.com/D_NQ_NP_2X_695036-MLB82421538282_022025-F-camiseta-masc-essentials-3-stripes-single-jersey-tee-adidas.webp',
      ),
      new URL(
        'https://http2.mlstatic.com/D_NQ_NP_2X_930251-MLB82706698967_022025-F-camiseta-masc-essentials-3-stripes-single-jersey-tee-adidas.webp',
      ),
      new URL(
        'https://http2.mlstatic.com/D_NQ_NP_2X_743292-MLB82421458914_022025-F-camiseta-masc-essentials-3-stripes-single-jersey-tee-adidas.webp',
      ),
    ],
  },
};

export default nextConfig;
