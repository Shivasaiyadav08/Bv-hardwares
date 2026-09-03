'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall, Activity } from 'lucide-react';
import { heroSlides } from '@/lib/data/home';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#fafafc] to-slate-100/60 overflow-hidden border-b border-slate-200/70">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-0 laser-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center py-12 sm:py-16 lg:py-20">
          
          {/* Left Column (full width mobile, 7 cols desktop) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] sm:text-xs font-mono text-amber-700 font-bold mb-4 sm:mb-6 max-w-full">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
                  <span className="truncate">{slide.tag}</span>
                </div>

                {/* Headline */}
                <h1 className="text-hero font-extrabold text-slate-950 tracking-tight mb-4 sm:mb-6 font-display">
                  <span className="block">{slide.headline}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 mt-1">
                    {slide.headline2}
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-sm sm:text-base lg:text-lead text-slate-600 leading-relaxed max-w-xl mb-6 sm:mb-8 font-sans">
                  {slide.subtext}
                </p>

                {/* Spec Telemetry Pills — 3 cols but wraps cleanly */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-10 pt-4 border-t border-slate-200 max-w-md">
                  {slide.specs.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-2 sm:p-3 border border-slate-200/90 shadow-sm overflow-hidden">
                      <p className="text-[9px] sm:text-[11px] text-slate-500 font-mono uppercase tracking-wide truncate">{item.label}</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5 truncate">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Action Triggers */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <Link href={slide.cta1.href} className="btn-primary group w-full sm:w-auto justify-center">
                    <span>{slide.cta1.label}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                  <Link href={slide.cta2.href} className="btn-secondary w-full sm:w-auto justify-center flex items-center gap-2">
                    <PhoneCall size={15} className="text-amber-600 flex-shrink-0" />
                    <span>{slide.cta2.label}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column — Hardware Stage (hidden on mobile, shown tablet+) */}
          <div className="lg:col-span-5 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white/90 border border-slate-200/90 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-amber-500/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-cyan-500/40 rounded-br-2xl pointer-events-none" />

              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono mb-4">
                <div className="flex items-center gap-1.5 text-cyan-600 font-bold">
                  <Activity size={13} className="animate-pulse" />
                  <span>HARDWARE TELEMETRY</span>
                </div>
                <span className="text-slate-400 text-[10px]">BENGALURU LAB</span>
              </div>

              {/* Dynamic Hardware Image */}
              <div className="relative h-52 sm:h-64 lg:h-72 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100 group mb-4">
                <Image
                  src={
                    current === 0
                      ? '/images/barcode-rfid-printers.jpg'
                      : current === 1
                      ? '/images/barcode-scanner.jpg'
                      : '/images/labels-and-tags.jpg'
                  }
                  alt="Industrial Hardware System"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/95 shadow-sm text-amber-700 font-mono font-bold border border-amber-500/30">
                    OEM Certified
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/95 shadow-sm text-slate-800 font-mono font-medium">
                    Zero Downtime
                  </span>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500">Authorized Lineup:</span>
                  <span className="text-slate-900 font-bold">Zebra &bull; Honeywell &bull; TSC</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500">Dispatch:</span>
                  <span className="text-amber-600 font-bold">Same-Day Local Stock</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Slide Ticker & Navigation */}
        <div className="pb-8 sm:pb-10 pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1 w-full sm:w-auto">
            {heroSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => { setAutoPlay(false); setCurrent(idx); }}
                aria-label={`Slide ${idx + 1}`}
                className="group flex flex-col py-1 text-left cursor-pointer flex-shrink-0"
              >
                <div className="flex items-center gap-1.5 mb-1 text-[10px] sm:text-[11px] font-mono">
                  <span className={`${current === idx ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-slate-500 hidden sm:inline text-xs">
                    {idx === 0 ? 'Enterprise' : idx === 1 ? 'Thermal Print' : 'AIDC Systems'}
                  </span>
                </div>
                <div className="h-1 w-14 sm:w-24 bg-slate-200 rounded-full overflow-hidden">
                  {current === idx ? (
                    <motion.div layoutId="slideProgress" className="h-full bg-amber-500 w-full" />
                  ) : (
                    <div className="h-full w-0 group-hover:w-full bg-slate-300 transition-all" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => { setAutoPlay(false); setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length); }}
              aria-label="Previous slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => { setAutoPlay(false); setCurrent((prev) => (prev + 1) % heroSlides.length); }}
              aria-label="Next slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
