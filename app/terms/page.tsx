import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Website Terms',
  description: `Website terms and product-information notice for ${siteConfig.name}.`,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Website Terms"
        subtitle="Important information about website content, product details and quotations."
        breadcrumbs={[{ label: 'Website Terms' }]}
      />
      <section className="section-space bg-background">
        <article className="container-shell max-w-4xl">
          <div className="premium-card space-y-8 p-6 sm:p-9">
            <section>
              <h2 className="text-xl font-bold text-foreground">Website information</h2>
              <p className="prose-copy mt-3">
                This website provides general information about product categories and services represented by {siteConfig.name}. Content is intended to help customers identify potentially suitable options and should not be treated as a final technical specification or commercial offer.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Product specifications and availability</h2>
              <p className="prose-copy mt-3">
                Manufacturers may change specifications, accessories, model availability, compatibility and packaging without notice. Before ordering, confirm the exact model, configuration, current manufacturer datasheet, price, taxes, lead time, warranty and availability in the quotation provided to you.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Brand references</h2>
              <p className="prose-copy mt-3">
                Product names, trademarks and logos belong to their respective owners. Displaying a brand or product on this website identifies the relevant product family or catalog coverage and does not, by itself, state or imply an authorized-distributor, exclusive-partner or endorsement relationship.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Quotations and orders</h2>
              <p className="prose-copy mt-3">
                Commercial terms are governed by the applicable quotation, invoice, purchase order acceptance or other written agreement. Website text does not override those documents.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground">Contact</h2>
              <p className="prose-copy mt-3">
                Questions about a model, specification or quotation can be sent to <a className="font-semibold text-brand-blue dark:text-brand-blue-light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or discussed by phone at <a className="font-semibold text-brand-blue dark:text-brand-blue-light" href={`tel:${siteConfig.phone.primaryE164}`}>{siteConfig.phone.primaryDisplay}</a>.
              </p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
