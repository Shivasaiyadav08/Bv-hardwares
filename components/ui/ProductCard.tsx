'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { pricingRequestHref } from '@/lib/site';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-border/90 bg-card shadow-card transition-[border-color,box-shadow] duration-300 hover:border-brand-blue/20 hover:shadow-[0_28px_70px_-38px_rgba(18,55,165,0.42)] dark:hover:border-brand-blue-light/25"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-blue/35 to-brand-orange/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative aspect-[4/3] overflow-hidden border-b border-border/80 bg-[linear-gradient(145deg,#ffffff_0%,#f7f9fd_100%)] dark:bg-slate-50">
        {product.group && (
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[11px] font-bold text-brand-blue shadow-sm backdrop-blur">
            <Sparkles size={12} aria-hidden="true" />
            {product.group}
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.045] sm:p-6"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-5">
        <h2 className="text-lg font-bold leading-snug tracking-[-0.025em] text-foreground sm:text-xl">
          {product.name}
        </h2>

        {product.description && (
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-5">
          <Link
            href={pricingRequestHref}
            className="inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-brand-orange transition-[color,transform] hover:text-brand-orange-strong"
          >
            Get pricing
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
