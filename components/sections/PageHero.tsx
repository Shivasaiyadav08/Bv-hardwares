'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, eyebrow, breadcrumbs }: PageHeroProps) {
  const defaultBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: title },
  ];

  const crumbs = breadcrumbs ?? defaultBreadcrumbs;

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-100/80 border-b border-slate-200 overflow-hidden">
      {/* Laser Grid */}
      <div className="absolute inset-0 laser-grid opacity-20 pointer-events-none" />
      {/* Glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-40 bg-amber-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-slate-400 mb-4 sm:mb-6 flex-wrap">
          {crumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-1 min-w-0">
              {idx > 0 && <ChevronRight size={10} className="text-slate-300 flex-shrink-0" />}
              {crumb.href && idx < crumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-amber-600 transition-colors truncate">
                  {crumb.label}
                </Link>
              ) : (
                <span className={`${idx === crumbs.length - 1 ? 'text-amber-600 font-bold' : ''} truncate`}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] sm:text-xs font-mono text-amber-700 font-bold mb-3 sm:mb-4 max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
            <span className="truncate">{eyebrow}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h1 font-extrabold text-slate-950 tracking-tight font-display max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-sans"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
