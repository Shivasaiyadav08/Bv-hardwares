'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Wrench, Truck, Award, Zap } from 'lucide-react';
import { differentiators } from '@/lib/data/home';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={20} />,
  Wrench: <Wrench size={20} />,
  Truck: <Truck size={20} />,
  Award: <Award size={20} />,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
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
            WHY BV HARDWARES
          </span>
          <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight font-display max-w-2xl mx-auto mb-3 sm:mb-4">
            The Standard Others Benchmark Against
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Four decades of engineering excellence, OEM-direct supply chains, and an unmatched post-sale commitment.
          </p>
        </motion.div>

        {/* Cards — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentiators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-all duration-300 card-elevated"
            >
              {/* Icon badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
                {iconMap[item.iconName] ?? <Zap size={20} />}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>

              {item.metric && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 text-xs font-mono font-bold text-amber-700 max-w-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="truncate">{item.metric}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 sm:mt-14"
        >
          <Link href="/about" className="btn-primary w-full sm:w-auto justify-center">
            <span>Explore Our Advantage</span>
            <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto justify-center">
            <span>Talk to an Expert</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
