'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const orbitDots = [
  { className: 'left-[8%] top-[48%] size-3 bg-[#2563eb]', delay: 0 },
  { className: 'left-[25%] top-[14%] size-2.5 bg-[#f58220]', delay: 0.2 },
  { className: 'right-[15%] top-[20%] size-3.5 bg-[#2563eb]', delay: 0.4 },
  { className: 'right-[8%] bottom-[27%] size-3 bg-[#f58220]', delay: 0.6 },
  { className: 'left-[31%] bottom-[8%] size-2.5 bg-[#2563eb]', delay: 0.8 },
];

export default function PartnersHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[760px] overflow-visible py-4 sm:py-8 lg:py-2">
      <div className="pointer-events-none absolute inset-[8%] rounded-[48%] bg-[radial-gradient(circle_at_50%_48%,rgba(37,99,235,.13),rgba(37,99,235,.055)_38%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-[2%] top-[8%] size-44 rounded-full bg-orange-200/25 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute left-[3%] top-[16%] size-48 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-[50%] border border-dashed border-blue-400/30"
      >
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-[-6px] size-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,.12),0_0_20px_rgba(37,99,235,.32)]" />
          <span className="absolute bottom-[-6px] left-1/2 size-3 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_0_6px_rgba(245,130,32,.12),0_0_20px_rgba(245,130,32,.30)]" />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[15%_4%_9%_13%] rounded-[50%] border border-blue-300/20"
      >
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 19, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-[-5px] size-2.5 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_0_5px_rgba(245,130,32,.10)]" />
          <span className="absolute bottom-[-5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_0_5px_rgba(59,130,246,.10)]" />
        </motion.div>
      </div>

      {orbitDots.map((dot, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-full shadow-[0_0_0_6px_rgba(255,255,255,.66)] dark:shadow-[0_0_0_6px_rgba(15,23,42,.35)] ${dot.className}`}
          animate={reduceMotion ? undefined : { y: [0, -7, 0], x: [0, index % 2 ? 4 : -4, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 4.8 + index * 0.45, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="relative z-10 mx-auto aspect-[1.33/1] w-full"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/images/partners/partner-solutions-composition-v2.webp"
          alt="Barcode printers, scanners, labels, RFID and POS solutions supported through technology partners"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-contain drop-shadow-[0_30px_45px_rgba(15,23,42,.12)]"
        />
      </motion.div>
    </div>
  );
}
