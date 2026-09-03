import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PackageCheck, Sparkles } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { productCategories } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Hardware Directory | Barcode Printers, Scanners & Media',
  description:
    'Complete catalog of industrial thermal barcode printers, 2D wireless scanners, RFID readers, custom thermal labels, wax-resin ribbons, and POS equipment in Bengaluru.',
};

export default function ProductsPage() {
  const categoriesList = Object.values(productCategories);

  return (
    <>
      <PageHero
        title="Industrial Hardware & Consumables Directory"
        subtitle="Explore mission-critical barcode printers, handheld imagers, automated RFID systems, and certified media formulations engineered for high-throughput enterprises."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Main Categories Catalog */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#fafafc] relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 laser-grid opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 sm:mb-4">
                <Sparkles size={12} />
                <span>16 Structured Hardware Categories</span>
              </div>
              <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight leading-tight font-display">
                Browse Complete Portfolio
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Select any hardware division below to inspect individual machine models, technical specifications, and OEM datasheets.
              </p>
            </ScrollReveal>
          </div>

          {/* 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
            {categoriesList.map((category, idx) => (
              <ScrollReveal key={category.slug} delay={idx * 0.04}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Category Cover */}
                  <div className="relative h-44 sm:h-52 lg:h-56 w-full bg-slate-50 overflow-hidden">
                    <Image
                      src={category.coverImage}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono bg-white/95 shadow-sm px-2.5 py-1 rounded-full border border-slate-200 max-w-full">
                        <PackageCheck size={12} className="text-amber-600 flex-shrink-0" />
                        <span className="font-bold text-[11px] sm:text-xs truncate">{category.products.length} Models In Stock</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 lg:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5 flex items-start justify-between gap-2 font-display">
                        <span className="leading-tight">{category.title}</span>
                        <ArrowRight
                          size={18}
                          className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
                        />
                      </h3>
                      <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold mb-2">
                        {category.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-mono text-amber-700 font-bold">
                      <span>View Specifications &amp; Models</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
