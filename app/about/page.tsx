import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Handshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Workflow,
  PackageSearch,
  LifeBuoy,
} from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CTASection from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { buttonVariants } from '@/components/ui/Button';
import { mission, values, vision } from '@/lib/data/about';
import { googleMapsSearchUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Bhagyashree Ventures',
  description:
    'Learn how Bhagyashree Ventures supports barcode, labeling, RFID, POS and automatic-identification requirements from Bengaluru.',
  alternates: { canonical: '/about' },
};

const valueIcons = { Compass, ShieldCheck, Handshake, Lightbulb };

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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Practical barcode and labeling solutions for everyday business operations."
        subtitle="Bhagyashree Ventures provides hardware, consumables, software and support across barcode printing, scanning, RFID, POS and related automatic-identification workflows."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>What we do</Badge>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.04em] text-foreground">
              Hardware, media and software selected as one system.
            </h2>
            <p className="prose-copy mt-5">
              Businesses often need more than a printer or scanner. Label material, ribbon formulation, connectivity, software and the operating environment all affect whether the final solution works well.
            </p>
            <p className="prose-copy mt-4">
              Our role is to help bring those pieces together and provide a clearer path from requirement to product selection and support.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className={buttonVariants()}>Explore products</Link>
              <a href={googleMapsSearchUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'outline' })}>
                <MapPin size={16} /> Bengaluru office
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-soft">
            <Image
              src="/images/our-commitment.jpg"
              alt="Business technology and labeling solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border bg-muted/35">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">Mission</p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-foreground">Make solution selection simpler.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{mission}</p>
            </Card>
            <Card className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue dark:text-brand-blue-light">Vision</p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-foreground">Be a dependable operating partner.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{vision}</p>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = valueIcons[value.iconName as keyof typeof valueIcons] ?? Compass;
              return (
                <Card key={value.title} className="p-5 sm:p-6">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border bg-background">
        <div className="container-shell">
          <div className="max-w-3xl">
            <Badge>Our approach</Badge>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.04em] text-foreground">
              Start with the application, not the model number.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, copy }, index) => (
              <Card key={title} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue dark:bg-brand-blue-light/10 dark:text-brand-blue-light">
                    <Icon size={21} />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/20">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-muted/45 p-5 text-sm leading-6 text-muted-foreground">
            <strong className="text-foreground">Current business address:</strong> {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} – {siteConfig.address.postalCode}, {siteConfig.address.state}.
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTASection />
    </>
  );
}
