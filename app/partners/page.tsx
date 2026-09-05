import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Boxes, ChevronRight, Handshake, Headphones, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PartnersHeroVisual from '@/components/sections/PartnersHeroVisual';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import { hprtProducts, partners } from '@/lib/data/partners';


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

          <div className="grid items-center gap-8 lg:grid-cols-[.88fr_1.12fr] lg:gap-10 xl:gap-14">
            <ScrollReveal>
              <div>
                <Badge className="mb-4">Technology partnerships</Badge>
                <h1 className="text-[clamp(2.55rem,5vw,4.55rem)] font-bold leading-[1.01] tracking-[-0.05em] text-foreground">
                  Proven technology.
                  <span className="block brand-gradient-text">Real business impact.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  We work with technology brands whose printing and AIDC products complement the solutions we support locally, helping customers move from product selection to deployment with clearer guidance.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {partnershipBenefits.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-xl bg-background/72 px-3.5 py-3 text-sm font-semibold text-foreground shadow-[0_8px_24px_-18px_rgba(15,23,42,.32)] ring-1 ring-border/70 backdrop-blur-sm">
                      <Icon size={17} className="text-brand-orange" /> {label}
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <Link href="#partner-portfolio" className={buttonVariants({ className: 'min-w-[180px]' })}>
                    Meet Our Partners <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.05}>
              <PartnersHeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </main>

      <section id="partner-portfolio" className="section-space scroll-mt-24 border-b border-border bg-background">
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
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-border/80 bg-[radial-gradient(circle_at_30%_20%,rgba(245,130,32,.14),transparent_42%),linear-gradient(145deg,#fff,#f5f7fb)] p-10 dark:bg-slate-50 lg:border-b-0 lg:border-r">
                <Image src={hprt.logo} alt="HPRT" width={454} height={98} className="h-auto w-[225px] -translate-y-5 object-contain sm:w-[270px] lg:-translate-y-7" />
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                <div className="flex justify-end">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f58220]/20 bg-[#f58220]/[0.08] px-3 py-1.5 text-xs font-bold text-[#c96512] dark:text-orange-300">
                    <Handshake size={15} /> Partner brand
                  </div>
                </div>
                <h3 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-foreground">{hprt.name}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{hprt.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><Boxes size={20} className="text-brand-blue" /><p className="mt-2 text-lg font-bold text-foreground">{hprtProducts.length}</p><p className="text-xs text-muted-foreground">catalogued product families</p></div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><ShieldCheck size={20} className="text-[#f58220]" /><p className="mt-2 font-bold text-foreground">India portfolio</p><p className="text-xs text-muted-foreground">structured from supplied catalogue</p></div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-4"><Headphones size={20} className="text-brand-blue" /><p className="mt-2 font-bold text-foreground">Local enquiry</p><p className="text-xs text-muted-foreground">pricing and product guidance</p></div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/partners/hprt" className={buttonVariants({ variant: 'secondary' })}>Explore HPRT <ArrowRight size={16} /></Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
