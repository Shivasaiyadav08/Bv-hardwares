'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { productHighlights } from '@/lib/data/home';

export default function ProductsGrid() {
  return (
    <section className="bg-[#fafafc] py-14 sm:py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] sm:text-xs font-mono text-cyan-700 font-bold mb-3 sm:mb-4 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
            <span>HARDWARE CATALOG</span>
          </span>
          <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight font-display mb-3 sm:mb-4">
            Industrial-Grade Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Precision hardware for barcode printing, label production, and automated data capture — engineered for zero-downtime operations.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {productHighlights.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <Link
                href={product.href}
                className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden card-elevated shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 w-full bg-slate-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/90 text-white text-[10px] font-mono font-bold">
                      <Shield size={9} />
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 border-t border-slate-100">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-1.5 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-600 font-semibold bg-cyan-50 px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:gap-2 transition-all">
                      View <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14"
        >
          <Link href="/products" className="btn-primary w-full sm:w-auto justify-center">
            <span>Browse Full Catalog</span>
            <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto justify-center">
            <span>Request Custom Quote</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
