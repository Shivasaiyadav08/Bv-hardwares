import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Headphones,
  Info,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { productDetails } from '@/lib/data/product-details';
import { productCategories } from '@/lib/data/products';
import { siteConfig } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const categoryApplications: Record<string, string[]> = {
  labels: ['Product identification', 'Inventory and tracking', 'Retail and branding', 'Application-specific labeling'],
  'pos-rolls': ['Retail billing', 'POS receipt printing', 'Hospitality counters', 'Daily transaction records'],
  ribbon: ['Barcode label printing', 'Durable product labels', 'Wash-care labels', 'Synthetic-media printing'],
  packaging: ['Packing and dispatch', 'Transit protection', 'Courier operations', 'Warehouse handling'],
  'label-printer': ['Barcode labels', 'Shipping labels', 'Inventory identification', 'Retail and industrial tags'],
  'pos-printer': ['Retail billing', 'POS receipts', 'Hospitality', 'Counter printing'],
  'rfid-printer': ['RFID tag encoding', 'Asset tracking', 'Inventory automation', 'Supply-chain identification'],
  'bluetooth-printer': ['Mobile printing', 'Field operations', 'Delivery workflows', 'Portable label printing'],
  accessories: ['Printer maintenance', 'Media handling', 'Printhead care', 'Operational uptime'],
  'wired-scanner': ['Retail checkout', 'Warehouse scanning', 'Inventory entry', 'Fixed workstation capture'],
  'wireless-scanner': ['Cordless scanning', 'Warehouse mobility', 'Retail operations', 'Inventory workflows'],
  'tabletop-scanner': ['Hands-free checkout', 'Presentation scanning', 'Retail counters', 'High-throughput capture'],
  'hht-mobile': ['Mobile inventory', 'Warehouse data entry', 'Logistics', 'Field barcode scanning'],
  'rfid-device': ['RFID inventory', 'Asset tracking', 'Tag capture', 'Automated data collection'],
  software: ['Label design', 'Mobile workflows', 'Print integration', 'Barcode automation'],
  service: ['Installation support', 'Preventive maintenance', 'Repair and troubleshooting', 'Operational support'],
};

const categorySelectionChecks: Record<string, string[]> = {
  'label-printer': ['Print method and resolution', 'Label size and material', 'Daily print volume', 'USB / LAN / wireless connectivity'],
  'pos-printer': ['Receipt width', 'Interface and POS compatibility', 'Print volume', 'Cutter and cash-drawer requirements'],
  'rfid-printer': ['RFID tag type and pitch', 'Encoding standard', 'Print volume', 'Host software and connectivity'],
  'bluetooth-printer': ['Mobile OS compatibility', 'Battery runtime', 'Media size', 'Bluetooth / wireless workflow'],
  'wired-scanner': ['1D / 2D barcode requirement', 'Interface', 'Scan distance', 'Barcode condition and density'],
  'wireless-scanner': ['1D / 2D barcode requirement', 'Wireless range', 'Charging workflow', 'Host-device compatibility'],
  'tabletop-scanner': ['Barcode type', 'Presentation distance', 'Counter footprint', 'USB / serial integration'],
  'hht-mobile': ['Barcode engine', 'Android / application requirement', 'Ruggedness', 'Wi-Fi / cellular connectivity'],
  'rfid-device': ['RFID frequency and tag type', 'Read range', 'Fixed / mobile deployment', 'Software integration'],
  labels: ['Label dimensions', 'Face material', 'Adhesive type', 'Printer and application environment'],
  ribbon: ['Printer model', 'Ribbon width / length', 'Label material', 'Wax / wax-resin / resin requirement'],
  'pos-rolls': ['Roll width / diameter', 'Printer model', 'Plain / pre-printed requirement', 'Quantity'],
  packaging: ['Material type', 'Dimensions', 'Strength / protection requirement', 'Order quantity'],
};

export function generateStaticParams() {
  return Object.values(productCategories).flatMap((category) =>
    category.products.map((product) => ({ slug: category.slug, productId: product.id }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, productId } = await params;
  const category = productCategories[slug];
  const product = category?.products.find((item) => item.id === productId);
  if (!category || !product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | ${category.title}`,
    description: product.description ?? category.description,
    alternates: { canonical: `/products/${slug}/${productId}` },
    openGraph: {
      title: `${product.name} | Bhagyashree Ventures`,
      description: product.description ?? category.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug, productId } = await params;
  const category = productCategories[slug];
  const product = category?.products.find((item) => item.id === productId);
  if (!category || !product) notFound();

  const details = productDetails[product.id];
  const applications = details?.applications ?? categoryApplications[category.slug] ?? ['Business operations', 'Identification workflows'];
  const selectionChecks = categorySelectionChecks[category.slug] ?? [
    'Application and operating environment',
    'Required configuration or compatibility',
    'Expected volume',
    'Delivery location and support requirement',
  ];
  const overview = details?.overview ?? product.description ?? category.description;
  const relatedProducts = category.products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <main className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_18%_0%,rgba(18,55,165,0.08),transparent_42%),radial-gradient(circle_at_86%_8%,rgba(243,91,10,0.07),transparent_34%)]" />
        <div className="container-shell relative py-8 sm:py-10 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <Link href="/" className="hover:text-foreground">Home</Link><ChevronRight size={14} />
            <Link href="/products" className="hover:text-foreground">Products</Link><ChevronRight size={14} />
            <Link href={`/products/${category.slug}`} className="hover:text-foreground">{category.title}</Link><ChevronRight size={14} />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-7 grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] border border-border bg-[linear-gradient(145deg,#fff,#f5f7fb)] shadow-[0_30px_80px_-48px_rgba(7,17,38,.45)] dark:bg-slate-50">
                <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain p-7 sm:p-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.04}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue dark:text-brand-blue-light">{category.title}</p>
                <h1 className="mt-3 text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-foreground">{product.name}</h1>
                {details?.sourceModel && details.sourceModel !== product.name && (
                  <p className="mt-2 text-xs font-semibold text-muted-foreground">Technical reference: {details.sourceModel}</p>
                )}
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{overview}</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <Tag size={18} className="text-brand-blue dark:text-brand-blue-light" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Product class</p>
                    <p className="mt-1 font-bold text-foreground">{category.title}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <Headphones size={18} className="text-brand-orange" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">BV support</p>
                    <p className="mt-1 font-bold text-foreground">Selection, pricing & compatibility</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/contact?product=${encodeURIComponent(product.name)}#pricing-request`} className={buttonVariants({ size: 'lg' })}>Get Pricing <ArrowRight size={17} /></Link>
                  <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Contact Us</Link>
                  <Link href={`/products/${category.slug}`} className={buttonVariants({ variant: 'ghost', size: 'lg' })}><ArrowLeft size={17} /> Back</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <section className="section-space border-b border-border bg-muted/25">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-10">
          <ScrollReveal>
            <div className="rounded-[1.6rem] border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-blue/8 text-brand-blue dark:bg-brand-blue-light/10 dark:text-brand-blue-light"><Settings2 size={20} /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue dark:text-brand-blue-light">Product information</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-foreground">{details ? 'Verified specifications' : 'Configuration guidance'}</h2>
                </div>
              </div>

              {details ? (
                <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {details.specifications.map((spec) => (
                    <div key={spec.label} className="border-b border-border/80 py-4 first:pt-0 sm:[&:nth-child(2)]:pt-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.09em] text-muted-foreground">{spec.label}</p>
                      <p className="mt-1.5 text-sm font-bold leading-6 text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-brand-orange/15 bg-brand-orange/[0.045] p-5">
                  <div className="flex gap-3">
                    <Info size={20} className="mt-0.5 shrink-0 text-brand-orange" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      The original BV catalogue does not publish a complete model-level specification sheet for this item. We have intentionally not invented technical values. Share your application and model requirement and our team can confirm the current configuration.
                    </p>
                  </div>
                </div>
              )}

              {details && (
                <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-muted/35 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Technical source</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{details.sourceLabel}</p>
                  </div>
                  <a href={details.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-orange dark:text-brand-blue-light">
                    View source <ExternalLink size={15} />
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={0.04}>
              <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3"><PackageCheck size={20} className="text-brand-orange" /><h2 className="text-xl font-bold text-foreground">Typical applications</h2></div>
                <div className="mt-5 grid gap-3">
                  {applications.map((application) => (
                    <div key={application} className="flex items-center gap-2.5 text-sm text-muted-foreground"><CheckCircle2 size={17} className="shrink-0 text-emerald-500" /><span>{application}</span></div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3"><ShieldCheck size={20} className="text-brand-blue dark:text-brand-blue-light" /><h2 className="text-xl font-bold text-foreground">Confirm before quotation</h2></div>
                <div className="mt-5 grid gap-3">
                  {selectionChecks.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-orange" />{item}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {details?.highlights && details.highlights.length > 0 && (
        <section className="border-b border-border bg-background py-10 sm:py-12">
          <div className="container-shell">
            <ScrollReveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {details.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-blue dark:text-brand-blue-light" />
                    <p className="text-sm font-semibold leading-6 text-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="section-space bg-muted/25">
          <div className="container-shell">
            <ScrollReveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue dark:text-brand-blue-light">Related models</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">More from {category.title}</h2>
                </div>
                <Link href={`/products/${category.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-orange dark:text-brand-blue-light">View all <ArrowRight size={16} /></Link>
              </div>
            </ScrollReveal>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => <ProductCard key={item.id} product={item} categorySlug={category.slug} />)}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: overview,
            image: `${siteConfig.url}${product.image}`,
            brand: { '@type': 'Organization', name: siteConfig.name },
          }),
        }}
      />
    </>
  );
}
