import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, Layers3 } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { buttonVariants } from '@/components/ui/Button';
import { productCategories, allCategorySlugs } from '@/lib/data/products';
import { pricingRequestHref, siteConfig } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allCategorySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories[slug];
  if (!category) return { title: 'Product Category Not Found' };

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: {
      title: `${category.title} | Bhagyashree Ventures`,
      description: category.description,
      images: [{ url: category.coverImage }],
    },
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = productCategories[slug];
  if (!category) notFound();

  const hasGroups = category.products.some((product) => product.group);
  const groups = category.products.reduce<Record<string, typeof category.products>>((result, product) => {
    const key = product.group ?? 'Products';
    result[key] ??= [];
    result[key].push(product);
    return result;
  }, {});

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.url}/products` },
      { '@type': 'ListItem', position: 3, name: category.title, item: `${siteConfig.url}/products/${category.slug}` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.title,
    itemListElement: category.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
    })),
  };

  return (
    <>
      <main className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_20%_0%,rgba(18,55,165,0.09),transparent_42%),radial-gradient(circle_at_82%_4%,rgba(243,91,10,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(111,145,255,0.10),transparent_42%),radial-gradient(circle_at_82%_4%,rgba(243,91,10,0.08),transparent_34%)]" />

        <div className="container-shell relative py-8 sm:py-10 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-foreground">{category.title}</span>
          </nav>

          <ScrollReveal className="mt-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-[clamp(2.15rem,5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.045em] text-foreground">
                  {category.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {category.subtitle}
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/[0.055] px-3.5 py-2 text-xs font-bold text-brand-blue dark:border-brand-blue-light/20 dark:bg-brand-blue-light/[0.08] dark:text-brand-blue-light">
                <Layers3 size={15} aria-hidden="true" />
                {category.products.length} {category.products.length === 1 ? 'product' : 'products'}
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-9 space-y-11 lg:mt-11">
            {Object.entries(groups).map(([groupName, products]) => (
              <section key={groupName} aria-labelledby={hasGroups ? `group-${groupName.replace(/\W+/g, '-').toLowerCase()}` : undefined}>
                {hasGroups && (
                  <div className="mb-4 flex items-center gap-3">
                    <h2
                      id={`group-${groupName.replace(/\W+/g, '-').toLowerCase()}`}
                      className="text-lg font-bold tracking-[-0.02em] text-foreground sm:text-xl"
                    >
                      {groupName}
                    </h2>
                    <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    <span className="text-xs font-semibold text-muted-foreground">
                      {products.length} {products.length === 1 ? 'model' : 'models'}
                    </span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-muted/25 py-10 sm:py-12">
        <div className="container-shell">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-blue/15 bg-card p-6 shadow-card sm:p-7">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-blue/[0.055] to-transparent dark:from-brand-blue-light/[0.055]" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-[-0.025em] text-foreground sm:text-2xl">
                    Need help selecting the right {category.title.toLowerCase()}?
                  </h2>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    Share your application and our team will help narrow the suitable options.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2.5">
                  <Link href={pricingRequestHref} className={buttonVariants()}>
                    Get Pricing <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className={buttonVariants({ variant: 'outline' })}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}
