'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/lib/data/home';
import type { Industry } from '@/lib/data/home';

export default function IndustriesServed() {
  return (
    <section className="bg-[#fafafc] py-14 sm:py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] sm:text-xs font-mono text-amber-700 font-bold mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
            SECTORS WE SERVE
          </span>
          <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight font-display max-w-2xl mx-auto mb-3">
            Powering Every Industry Segment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            From pharma cold-chain to e-commerce fulfillment — our hardware is field-tested across India&apos;s most demanding verticals.
          </p>
        </motion.div>

        {/* Grid — 2 cols mobile, 3 tablet, 4 lg, 5 xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {(industries as Industry[]).map((industry, idx) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white card-elevated shadow-sm hover:shadow-lg aspect-square sm:aspect-auto sm:h-48"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              {/* Name Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                <p className="text-white text-xs sm:text-sm font-bold font-display leading-tight line-clamp-2">
                  {industry.title}
                </p>
                {industry.tag && (
                  <span className="inline-block mt-1 px-1.5 py-0.5 rounded-full bg-amber-500/90 text-white text-[9px] sm:text-[10px] font-mono font-bold">
                    {industry.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary inline-flex w-full sm:w-auto justify-center">
            <span>Discuss Your Industry Requirements</span>
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
