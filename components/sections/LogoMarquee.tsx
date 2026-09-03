'use client';

import Image from 'next/image';
import { brandLogos, clientLogos } from '@/lib/data/brands';

function MarqueeRow({ items, reverse = false }: { items: typeof brandLogos; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* Edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className={reverse ? 'animate-marquee-right' : 'animate-marquee-left'}>
        {doubled.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="inline-flex items-center justify-center h-14 sm:h-16 px-5 sm:px-8 mx-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex-shrink-0"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={100}
              height={40}
              className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
            AUTHORIZED BRANDS
          </p>
          <h2 className="text-h3 font-bold text-slate-950 font-display">
            OEM-Direct Hardware Supply
          </h2>
        </div>

        {/* Brand logos */}
        <div className="mb-8 sm:mb-10">
          <MarqueeRow items={brandLogos} />
        </div>

        {/* Divider with label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex-1 h-px bg-slate-200" />
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 whitespace-nowrap">Trusted By</p>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Client logos */}
        <MarqueeRow items={clientLogos} reverse />
      </div>
    </section>
  );
}
