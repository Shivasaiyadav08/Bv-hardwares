import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Boxes, Handshake } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { buttonVariants } from '@/components/ui/Button';
import { hprtProducts, partners } from '@/lib/data/partners';
import { pricingRequestHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Technology Partners',
  description:
    'Explore technology partner brands represented by Bhagyashree Ventures, including HPRT barcode printers, industrial printers and barcode scanners.',
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  const hprt = partners.find((partner) => partner.slug === 'hprt')!;

  return (
    <>
      <PageHero
        eyebrow="Technology partners"
        title="Partner solutions backed by our local product expertise."
        subtitle="Explore partner portfolios separately from the core BV Hardwares catalog, with product information organized by brand and application."
        breadcrumbs={[{ label: 'Partners' }]}
      />

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell">
          <ScrollReveal>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-border/90 bg-card shadow-card lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden border-b border-border/80 bg-[radial-gradient(circle_at_20%_15%,rgba(245,130,32,0.16),transparent_42%),linear-gradient(145deg,#fff_0%,#f7f9fd_100%)] p-10 dark:bg-slate-50 lg:border-b-0 lg:border-r">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#f58220]" />
                <Image
                  src={hprt.logo}
                  alt="HPRT"
                  width={454}
                  height={98}
                  className="h-auto w-[210px] object-contain sm:w-[250px]"
                />
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f58220]/20 bg-[#f58220]/[0.08] px-3 py-1.5 text-xs font-bold text-[#c96512] dark:text-orange-300">
                  <Handshake size={15} /> Partner brand
                </div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-foreground">
                  {hprt.name}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{hprt.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {hprt.sectors.map((sector) => (
                    <span key={sector} className="rounded-full border border-border bg-muted/55 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      {sector}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/35 p-4">
                    <Boxes size={20} className="text-brand-blue dark:text-brand-blue-light" />
                    <div>
                      <p className="text-lg font-bold text-foreground">{hprtProducts.length}</p>
                      <p className="text-xs text-muted-foreground">catalogued HPRT product families</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/35 p-4">
                    <BadgeCheck size={20} className="text-[#f58220]" />
                    <div>
                      <p className="font-bold text-foreground">India portfolio</p>
                      <p className="text-xs text-muted-foreground">structured from the supplied HPRT catalogue</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/partners/hprt" className={buttonVariants({ variant: 'secondary' })}>
                    Explore HPRT <ArrowRight size={16} />
                  </Link>
                  <Link href={pricingRequestHref} className={buttonVariants({ variant: 'outline' })}>
                    Get Pricing
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
