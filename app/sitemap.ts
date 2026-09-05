import type { MetadataRoute } from 'next';
import { productCategories } from '@/lib/data/products';
import { hprtProductSlugs } from '@/lib/data/partners';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/about', '/products', '/partners', '/partners/hprt', '/contact', '/privacy', '/terms'];
  const categoryRoutes = Object.keys(productCategories).map((slug) => `/products/${slug}`);
  const hprtRoutes = hprtProductSlugs.map((slug) => `/partners/hprt/products/${slug}`);

  return [...staticRoutes, ...categoryRoutes, ...hprtRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith('/products') || route.startsWith('/partners') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/products' || route === '/partners' ? 0.9 : 0.7,
  }));
}
