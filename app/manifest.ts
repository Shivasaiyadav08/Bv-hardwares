import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Bhagyashree Ventures',
    description: siteConfig.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1237a5',
    icons: [
      {
        src: siteConfig.icon,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
