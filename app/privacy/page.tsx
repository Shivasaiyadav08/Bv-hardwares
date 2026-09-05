import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy information for enquiries submitted to ${siteConfig.name}.`,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How information submitted through this website is used when you contact Bhagyashree Ventures."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="section-space bg-background">
        <article className="container-shell max-w-4xl">
          <div className="premium-card space-y-8 p-6 sm:p-9">
            <section>
              <h2 className="text-xl font-bold text-foreground">Information we receive</h2>
              <p className="prose-copy mt-3">
                When you submit an enquiry, we may receive the details you choose to provide, such as your name, company, email address, phone number, product interest, estimated volume and message.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">How we use it</h2>
              <p className="prose-copy mt-3">
                We use enquiry information to understand your requirement, respond to you, prepare quotations, discuss products or services and maintain normal business correspondence. We do not ask for payment-card details through the website enquiry form.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Service providers</h2>
              <p className="prose-copy mt-3">
                Website hosting and email-delivery providers may process technical or enquiry data only as needed to operate the website and deliver messages. Their handling of information is subject to their own terms and privacy practices.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Retention and requests</h2>
              <p className="prose-copy mt-3">
                Business enquiries may be retained for a reasonable period for follow-up, quotations, support and record keeping. To ask about information you submitted, contact us at{' '}
                <a className="font-semibold text-brand-blue dark:text-brand-blue-light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Updates</h2>
              <p className="prose-copy mt-3">
                This policy may be updated as the website, service providers or business processes change. Material changes should be reflected on this page.
              </p>
            </section>
            <p className="text-sm text-muted-foreground">
              For general business enquiries, visit the <Link href="/contact" className="font-semibold text-foreground underline underline-offset-4">contact page</Link>.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
