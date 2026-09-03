'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { mission, vision, values } from '@/lib/data/about';

export default function WhoWeAre() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] sm:text-xs font-mono text-amber-700 font-bold mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
            WHO WE ARE
          </span>
          <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight font-display max-w-2xl mx-auto">
            Four Decades of Industrial Hardware Mastery
          </h2>
        </motion.div>

        {/* Mission / Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-6 sm:p-8 bg-slate-950 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Our Mission</span>
            <p className="mt-3 text-base sm:text-lg font-display font-semibold leading-relaxed text-white/90">
              {mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-amber-100/40 border border-amber-200/60 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Our Vision</span>
            <p className="mt-3 text-base sm:text-lg font-display font-semibold leading-relaxed text-slate-900">
              {vision}
            </p>
          </motion.div>
        </div>

        {/* Image + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-h3 font-bold text-slate-950 font-display mb-6 sm:mb-8">
              What Drives Every Deployment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="flex gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all"
                >
                  <CheckCircle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">{val.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-3">{val.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/3]">
              <Image
                src="/images/showroom.jpg"
                alt="BV Hardwares Showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            {/* Floating Badge — positioned so it doesn't overflow */}
            <div className="absolute -bottom-4 -right-0 sm:-right-4 bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-xl max-w-[140px] sm:max-w-none">
              <p className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wide">Established</p>
              <p className="text-xl sm:text-2xl font-extrabold text-amber-600 font-display">1983</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium">Bengaluru, KA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
