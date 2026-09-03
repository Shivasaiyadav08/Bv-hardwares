'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#fafafc] to-white py-14 sm:py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] sm:text-xs font-mono text-amber-700 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
            READY TO DEPLOY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h2 font-extrabold text-slate-950 font-display tracking-tight mb-4 sm:mb-6"
        >
          Ready to Build Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 mt-1">
            Automation Stack?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10"
        >
          From single-printer pilots to enterprise-wide RFID deployments — our engineers assess your workflow and recommend exactly the right stack. No pushy sales, just precision consulting.
        </motion.p>

        {/* CTAs — stack on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center group text-sm">
            <span>Request Free Consultation</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
          <a href="tel:+919923311090" className="btn-secondary w-full sm:w-auto justify-center text-sm">
            <PhoneCall size={15} className="text-amber-600 flex-shrink-0" />
            <span>Call +91 99233 11090</span>
          </a>
        </motion.div>

        {/* Footnote chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 font-mono"
        >
          {['Same-Day Local Delivery', 'OEM Certified Stock', 'Free Pre-Sales Consulting', 'Mon–Sat Support'].map((chip) => (
            <span key={chip} className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="whitespace-nowrap">{chip}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
