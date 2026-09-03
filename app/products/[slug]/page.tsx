import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ProductCard from '@/components/ui/ProductCard';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { productCategories, allCategorySlugs } from '@/lib/data/products';
import { Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allCategorySlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories[slug];

  if (!category) {
    return {
      title: 'Product Category Not Found',
    };
  }

  return {
    title: `${category.title} | BV Hardwares Bengaluru`,
    description: category.description,
    openGraph: {
      title: `${category.title} | BV Hardwares`,
      description: category.description,
      images: [{ url: category.coverImage }],
    },
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = productCategories[slug];

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={category.title}
        subtitle={category.subtitle}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: category.title },
        ]}
      />

      {/* Category Overview */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-4 max-w-full">
                <Sparkles size={11} className="flex-shrink-0" />
                <span>Overview &amp; Applications</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 sm:mb-4 font-display leading-tight">
                {category.subtitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {category.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#fafafc] relative border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-950 tracking-tight font-display">
              Available Models &amp; Technical Formats ({category.products.length})
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-mono">
              Inquire for custom unit pricing, volume discounts, or an on-site hardware test in Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            {category.products.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.05} className="flex">
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
