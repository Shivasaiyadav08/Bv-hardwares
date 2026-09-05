import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/product', destination: '/products', permanent: true },
      { source: '/product/labels', destination: '/products/labels', permanent: true },
      { source: '/product/pos-rolls', destination: '/products/pos-rolls', permanent: true },
      { source: '/product/ribbon', destination: '/products/ribbon', permanent: true },
      { source: '/product/packaging-material', destination: '/products/packaging-material', permanent: true },
      { source: '/product/label-printer', destination: '/products/label-printer', permanent: true },
      { source: '/product/pos-printer', destination: '/products/pos-printer', permanent: true },
      { source: '/product/rfid-printer', destination: '/products/rfid-printer', permanent: true },
      { source: '/product/bluetooth-printer', destination: '/products/bluetooth-printer', permanent: true },
      { source: '/product/printer-accessories', destination: '/products/accessories', permanent: true },
      { source: '/product/wired-scanner', destination: '/products/wired-scanner', permanent: true },
      { source: '/product/wireless-and-bluetooth-scanner', destination: '/products/wireless-scanner', permanent: true },
      { source: '/product/tabletop-scanner', destination: '/products/tabletop-scanner', permanent: true },
      { source: '/product/hht-mobile-device', destination: '/products/hht-mobile', permanent: true },
      { source: '/product/rfid-device', destination: '/products/rfid-device', permanent: true },
      { source: '/product/software', destination: '/products/software', permanent: true },
      { source: '/product/service', destination: '/products/service', permanent: true },
    ];
  },
};

export default nextConfig;
