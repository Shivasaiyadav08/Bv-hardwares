import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { pricingRequestHref } from '@/lib/site';

const capabilityItems = [
  'Barcode printers & scanners',
  'Labels, tags & thermal ribbons',
  'RFID, mobile devices & POS',
  'Software, service & maintenance',
];

export default function Hero() {
  return (
    <section className="brand-surface relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/35 via-transparent to-brand-orange/45" />

      <div className="container-shell relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:py-16 xl:gap-14 xl:py-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge className="mb-4">Barcode · Labeling · RFID · POS</Badge>
            <h1 className="max-w-3xl text-[clamp(2.55rem,5vw,4.95rem)] font-bold leading-[1.01] tracking-[-0.05em] text-foreground">
              Smart labeling.
              <span className="block brand-gradient-text">Seamless operations.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Bhagyashree Ventures helps businesses source and implement barcode, labeling, RFID and POS solutions with the hardware, consumables, software and support needed for practical operations.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {capabilityItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/85">
                  <CheckCircle2 size={17} className="shrink-0 text-brand-orange" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className={buttonVariants({ size: 'lg', className: 'group' })}>
                Explore Products
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href={pricingRequestHref} className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Get Pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.08}>
          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem] border border-border/90 bg-card shadow-[0_30px_80px_-46px_rgba(18,55,165,0.5)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-brand-blue/65 via-brand-blue/15 to-brand-orange/65" />
              <Image
                src="/images/home/solution-portfolio-hero.webp"
                alt="Barcode, labeling, RFID and POS solutions portfolio"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
