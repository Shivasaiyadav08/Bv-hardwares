'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { pricingRequestHref } from '@/lib/site';

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const detailsHref = `/products/${categorySlug}/${product.id}`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-brand-blue/25 hover:shadow-[0_18px_45px_-30px_rgba(18,55,165,.45)]"
    >
      <Link href={detailsHref} aria-label={`View details for ${product.name}`} className="absolute inset-0 z-10 rounded-xl" />

      <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.035] sm:p-6"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-xl">{product.name}</h2>
        <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
          {product.description ?? 'Product details and suitability information are available on request.'}
        </p>

        <div className="relative z-20 mt-auto flex flex-wrap gap-2 pt-5">
          <Link
            href={detailsHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-blue/25 hover:text-brand-blue dark:hover:text-brand-blue-light"
          >
            <Info size={15} /> View details
          </Link>
          <Link
            href={pricingRequestHref}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-3.5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-orange-strong"
          >
            Get pricing <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
