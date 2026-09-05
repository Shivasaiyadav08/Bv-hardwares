import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Boxes, ChevronRight, Handshake, Headphones, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import { hprtProducts, partners } from '@/lib/data/partners';
import { pricingRequestHref } from '@/lib/site';


const partnershipBenefits = [
  { label: 'Verified portfolio', icon: BadgeCheck },
  { label: 'Local guidance', icon: Headphones },
  { label: 'Long-term support', icon: Handshake },
];

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
      <main className="brand-surface relative overflow-hidden border-b border-border">
        <div className="container-shell relative py-10 sm:py-14 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-foreground">Partners</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
            <ScrollReveal>
              <div>
                <Badge className="mb-4">Technology partnerships</Badge>
                <h1 className="text-[clamp(2.55rem,5vw,4.65rem)] font-bold leading-[1.01] tracking-[-0.05em] text-foreground">
                  Strong technology partners.
                  <span className="block brand-gradient-text">Local product expertise.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  We work with technology brands whose printing and AIDC products complement the solutions we support locally, helping customers move from product selection to deployment with clearer guidance.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {partnershipBenefits.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-xl border border-border bg-card/80 px-3.5 py-3 text-sm font-semibold text-foreground shadow-sm">
                      <Icon size={17} className="text-brand-orange" /> {label}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.05}>
              <div className="relative mx-auto w-full max-w-[660px]">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.8rem] border border-border/90 bg-white shadow-[0_35px_90px_-50px_rgba(7,17,38,.55)] dark:bg-slate-50">
                  <Image
                    src="/images/partners/partnership-handshake-premium.webp"
                    alt="Professional technology partnership handshake representing trusted BV Hardwares partners and local support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="mx-auto mt-4 flex max-w-[620px] flex-wrap items-center justify-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
                  <span className="rounded-full border border-border bg-card px-3 py-1.5">Trusted partners</span>
                  <span className="rounded-full border border-border bg-card px-3 py-1.5">Technology</span>
                  <span className="rounded-full border border-border bg-card px-3 py-1.5">Local support</span>
                  <span className="rounded-full border border-[#f58220]/20 bg-[#f58220]/[0.07] px-3 py-1.5 text-[#c96512] dark:text-orange-300">Long-term relationships</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell">
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <Badge>Current partner</Badge>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.35rem)] font-bold tracking-[-0.04em] text-foreground">Explore the HPRT India portfolio.</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">A dedicated partner catalogue for HPRT barcode printers, industrial/RFID printers and barcode scanners.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-border/90 bg-card shadow-card lg:grid-cols-[.78fr_1.22fr]">
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-border/80 bg-[radial-gradient(circle_at_30%_20%,rgba(245,130,32,.18),transparent_42%),linear-gradient(145deg,#fff,#f5f7fb)] p-10 dark:bg-slate-50 lg:border-b-0 lg:border-r">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#f58220]" />
                <Image src={hprt.logo} alt="HPRT" width={454} height={98} className="h-auto w-[225px] object-contain sm:w-[270px]" />
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f58220]/20 bg-[#f58220]/[0.08] px-3 py-1.5 text-xs font-bold text-[#c96512] dark:text-orange-300">
                  <Handshake size={15} /> Partner brand
                </div>
                <h3 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-foreground">{hprt.name}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{hprt.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><Boxes size={20} className="text-brand-blue" /><p className="mt-2 text-lg font-bold text-foreground">{hprtProducts.length}</p><p className="text-xs text-muted-foreground">catalogued product families</p></div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><ShieldCheck size={20} className="text-[#f58220]" /><p className="mt-2 font-bold text-foreground">India portfolio</p><p className="text-xs text-muted-foreground">structured from supplied catalogue</p></div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><Headphones size={20} className="text-brand-blue" /><p className="mt-2 font-bold text-foreground">Local enquiry</p><p className="text-xs text-muted-foreground">pricing and product guidance</p></div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/partners/hprt" className={buttonVariants({ variant: 'secondary' })}>Explore HPRT <ArrowRight size={16} /></Link>
                  <Link href={pricingRequestHref} className={buttonVariants({ variant: 'outline' })}>Get Pricing</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
