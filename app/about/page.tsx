import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  Handshake,
  HeartHandshake,
  LifeBuoy,
  Lightbulb,
  MapPin,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { buttonVariants } from '@/components/ui/Button';
import { mission, values, vision } from '@/lib/data/about';
import { googleMapsSearchUrl, pricingRequestHref, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Bhagyashree Ventures',
  description:
    'Learn how Bhagyashree Ventures supports barcode, labeling, RFID, POS and automatic-identification requirements from Bengaluru.',
  alternates: { canonical: '/about' },
};

const valueIcons = {
  BadgeCheck,
  Handshake,
  HeartHandshake,
  LifeBuoy,
  Lightbulb,
  ShieldCheck,
};

const approach = [
  {
    icon: Workflow,
    title: 'Understand the workflow',
    copy: 'We start with what needs to be printed, scanned, tagged or tracked, and where the equipment will operate.',
  },
  {
    icon: PackageSearch,
    title: 'Narrow the product options',
    copy: 'We compare suitable product categories, media types, connectivity and software requirements before quotation.',
  },
  {
    icon: LifeBuoy,
    title: 'Support the deployment',
    copy: 'We can assist with setup requirements, consumable matching, software enquiries and service needs after purchase.',
  },
];

const certification = {
  number: '09115323A',
  standard: 'ISO 9001:2015',
  initialRegistration: '01 September 2026',
  recertificationDue: '31 August 2029',
  scope: 'Trading and supply of self-adhesive labels, thermal transfer ribbon, printer and scanner.',
  pdf: '/certificates/bhagyashree-ventures-iso-9001-2015.pdf',
  preview: '/images/certificates/bhagyashree-ventures-iso-9001-2015.webp',
};

export default function AboutPage() {
  return (
    <>
      <main className="brand-surface relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/40 via-transparent to-brand-orange/45" />
        <div className="container-shell relative py-10 sm:py-14 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="font-semibold text-foreground">About</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <ScrollReveal>
              <div>
                <Badge className="mb-4">About Bhagyashree Ventures</Badge>
                <h1 className="max-w-3xl text-[clamp(2.55rem,5vw,4.75rem)] font-bold leading-[1.01] tracking-[-0.05em] text-foreground">
                  Your trusted partner in
                  <span className="block brand-gradient-text">barcode, labeling & POS.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  We help businesses improve accuracy, efficiency and control with barcode printers, scanners, labels, ribbons, RFID, POS hardware, software and practical support.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                    <Boxes size={19} className="text-brand-blue dark:text-brand-blue-light" />
                    <p className="mt-2 text-sm font-bold text-foreground">Complete portfolio</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Hardware, consumables and software.</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                    <Sparkles size={19} className="text-brand-orange" />
                    <p className="mt-2 text-sm font-bold text-foreground">Practical integration</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Solutions matched to real workflows.</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                    <LifeBuoy size={19} className="text-brand-blue dark:text-brand-blue-light" />
                    <p className="mt-2 text-sm font-bold text-foreground">Ongoing support</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Selection, setup and service assistance.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/products" className={buttonVariants({ size: 'lg' })}>
                    Explore Products <ArrowRight size={17} />
                  </Link>
                  <Link href={pricingRequestHref} className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                    Get Pricing
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.06}>
              <div className="relative mx-auto w-full max-w-[660px] lg:ml-auto">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-border/90 bg-muted shadow-[0_35px_90px_-50px_rgba(7,17,38,.5)]">
                  <Image
                    src="/images/our-commitment.jpg"
                    alt="Bhagyashree Ventures barcode and labeling solutions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#071126]/70 via-transparent to-brand-orange/10" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 rounded-2xl border border-white/15 bg-[#071126]/78 p-4 text-white shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Bengaluru · India</p>
                      <p className="mt-1 text-base font-bold">Identification, labeling and automation expertise.</p>
                    </div>
                    <a href={googleMapsSearchUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white hover:text-orange-200">
                      <MapPin size={16} /> Find us
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <Badge>Who we are</Badge>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.45rem)] font-bold leading-[1.06] tracking-[-0.04em] text-foreground">
                Technology is useful only when the complete workflow works.
              </h2>
              <p className="prose-copy mt-5">
                Bhagyashree Ventures provides barcode, labeling, POS and automation solutions designed to improve operational accuracy, efficiency and control. The portfolio spans printers, scanners, labels, ribbons, RFID devices, mobile computers, POS hardware and label-design software.
              </p>
              <p className="prose-copy mt-4">
                Our focus is on bringing hardware, media and software together for the application, then supporting customers with product selection, setup requirements, consumables and service needs after deployment.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={googleMapsSearchUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'outline' })}>
                  <MapPin size={16} /> Bengaluru office
                </a>
                <Link href="/contact" className={buttonVariants({ variant: 'ghost' })}>
                  Contact us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.05}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-soft">
              <Image
                src="/images/about-workflow-solutions.webp"
                alt="Industrial barcode printer, scanner, POS terminal and RFID solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space border-b border-border bg-muted/35">
        <div className="container-shell">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Badge>Mission · Vision · Values</Badge>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.35rem)] font-bold tracking-[-0.04em] text-foreground">
                Built around reliability, service and long-term partnerships.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            <ScrollReveal delay={0.02}>
              <Card className="h-full p-6 sm:p-7">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Sparkles size={21} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">Mission</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-foreground">Improve accuracy and simplify workflows.</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{mission}</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <Card className="h-full p-6 sm:p-7">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue dark:bg-brand-blue-light/10 dark:text-brand-blue-light">
                  <BadgeCheck size={21} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand-blue dark:text-brand-blue-light">Vision</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-foreground">Be the trusted operating partner.</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{vision}</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="h-full p-6 sm:p-7">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Handshake size={21} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">Values</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-foreground">Trust that lasts beyond the sale.</h3>
                <div className="mt-4 grid gap-3">
                  {values.map((value) => {
                    const Icon = valueIcons[value.iconName as keyof typeof valueIcons] ?? ShieldCheck;
                    return (
                      <div key={value.title} className="flex gap-3">
                        <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted text-brand-blue dark:text-brand-blue-light">
                          <Icon size={15} />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">{value.title}</p>
                          <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <ScrollReveal direction="right">
            <a
              href={certification.pdf}
              target="_blank"
              rel="noreferrer"
              className="group relative mx-auto block w-full max-w-[520px] overflow-hidden rounded-[1.5rem] border border-border bg-white p-3 shadow-[0_28px_80px_-45px_rgba(7,17,38,.45)]"
              aria-label="Open Bhagyashree Ventures ISO 9001:2015 certificate"
            >
              <div className="relative aspect-[17/22] overflow-hidden rounded-[1.1rem] bg-slate-50">
                <Image
                  src={certification.preview}
                  alt="Bhagyashree Ventures ISO 9001:2015 certificate preview"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.018]"
                />
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.05}>
            <div>
              <Badge>Quality & certification</Badge>
              <h2 className="mt-4 text-[clamp(2.15rem,4vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.045em] text-foreground">
                {certification.standard} <span className="brand-gradient-text">Certified.</span>
              </h2>
              <p className="prose-copy mt-5 max-w-2xl">
                Bhagyashree Ventures operates under a certified Quality Management System covering the trading and supply of self-adhesive labels, thermal transfer ribbon, printers and scanners.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Certificate No.</p>
                  <p className="mt-1 font-bold text-foreground">{certification.number}</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Initial registration</p>
                  <p className="mt-1 font-bold text-foreground">{certification.initialRegistration}</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Certified scope</p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-foreground">{certification.scope}</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Recertification due</p>
                  <p className="mt-1 font-bold text-foreground">{certification.recertificationDue}</p>
                </div>
              </div>

              <div className="mt-7">
                <a href={certification.pdf} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'outline' })}>
                  View certificate <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space border-b border-border bg-muted/30">
        <div className="container-shell">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Badge>Our approach</Badge>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.04em] text-foreground">
                Start with the application, not the model number.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, copy }, index) => (
              <ScrollReveal key={title} delay={index * 0.04}>
                <Card className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue dark:bg-brand-blue-light/10 dark:text-brand-blue-light">
                      <Icon size={21} />
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground/20">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm leading-6 text-muted-foreground shadow-sm">
            <strong className="text-foreground">Current business address:</strong> {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} – {siteConfig.address.postalCode}, {siteConfig.address.state}.
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTASection />
    </>
  );
}
