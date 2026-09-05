import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Headset, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const trustPoints = [
  { icon: BadgeCheck, label: 'Verified partner portfolio' },
  { icon: Headset, label: 'Local product guidance' },
  { icon: ShieldCheck, label: 'Long-term support' },
];

export default function PartnerSpotlight() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-[clamp(3.75rem,7vw,6rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(18,55,165,0.08),transparent_27rem),radial-gradient(circle_at_88%_12%,rgba(243,91,10,0.07),transparent_24rem)]" />
      <div className="container-shell relative">
        <ScrollReveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-[1.8rem] border border-border/90 bg-card shadow-[0_28px_80px_-52px_rgba(7,17,38,.42)] lg:grid-cols-[1.05fr_.95fr] lg:gap-0">
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <Badge>Technology partners</Badge>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.45rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
                Partner products, backed by <span className="brand-gradient-text">local support.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Explore technology-partner portfolios separately from the core BV Hardwares catalog, with product information organized by brand and application.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-semibold text-foreground shadow-sm">
                    <Icon size={15} className="text-brand-orange" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/partners" className={buttonVariants({ size: 'lg', className: 'group' })}>
                  Explore Partners
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/partners/hprt" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                  View HPRT
                </Link>
              </div>
            </div>

            <Link
              href="/partners/hprt"
              className="group relative flex min-h-[300px] items-center justify-center overflow-hidden border-t border-border bg-[linear-gradient(145deg,#f8faff_0%,#fff_48%,#fff5ee_100%)] p-8 dark:bg-[linear-gradient(145deg,rgba(18,55,165,.12),rgba(7,17,38,.9)_55%,rgba(243,91,10,.08))] lg:min-h-full lg:border-l lg:border-t-0"
              aria-label="Explore HPRT partner products"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border border-brand-orange/12" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full border border-brand-blue/10" />
              <div className="relative w-full max-w-[360px] rounded-[1.5rem] border border-white/80 bg-white/80 p-7 text-center shadow-[0_24px_65px_-42px_rgba(18,55,165,.45)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">Featured partner</p>
                <div className="relative mx-auto mt-5 h-20 w-56">
                  <Image
                    src="/images/partners/hprt/hprt-logo.png"
                    alt="HPRT"
                    fill
                    sizes="224px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.035]"
                  />
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  Desktop and industrial barcode printers, RFID printing and barcode scanning solutions for the India portfolio.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue dark:text-brand-blue-light">
                  Explore HPRT products <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
