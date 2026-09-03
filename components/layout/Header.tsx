'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenuColumns } from '@/lib/data/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menus when the route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products', hasMega: true },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar — hidden on very small screens */}
      <div className="bg-[#0f172a] text-slate-300 text-xs border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono min-w-0">
            <span className="flex items-center gap-1.5 text-amber-400 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>EST. 1983</span>
            </span>
            <span className="text-slate-600 flex-shrink-0">&bull;</span>
            <span className="text-slate-400 truncate hidden md:block">
              Industrial Barcode, Labeling & Automation Hardware — Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs flex-shrink-0">
            <a href="tel:+919923311090" className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap">
              <Phone size={12} className="text-amber-400" />
              <span>+91 99233 11090</span>
            </a>
            <a href="mailto:info@bvhardwares.in" className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap">
              <Mail size={12} className="text-cyan-400" />
              <span>info@bvhardwares.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-xl border-b border-slate-200 shadow-md py-2'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group focus:outline-none" aria-label="BV Hardwares Home">
              <div className="p-1 sm:p-1.5 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:border-amber-500/40 transition-colors">
                <Image
                  src="/images/bvhardwares-logo-top.png"
                  alt="BV Hardwares"
                  width={160}
                  height={44}
                  className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                if (link.hasMega) {
                  return (
                    <div key={link.label} className="relative" onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
                      <button
                        type="button"
                        className={`relative px-3 xl:px-4 py-2 text-sm font-display font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                          isActive ? 'text-amber-600' : 'text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                        {isActive && (
                          <motion.span layoutId="navIndicator" className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-500 rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                        )}
                      </button>

                      <AnimatePresence>
                        {megaOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] xl:w-[880px] bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl grid grid-cols-4 gap-5"
                          >
                            {megaMenuColumns.map((col) => (
                              <div key={col.heading} className="space-y-2">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-amber-600 font-bold border-b border-slate-100 pb-1.5">
                                  {col.heading}
                                </h4>
                                <ul className="space-y-0.5">
                                  {col.items.map((item) => (
                                    <li key={item.href}>
                                      <Link href={item.href} onClick={() => setMegaOpen(false)}
                                        className="block px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-50 text-xs font-medium transition-all">
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <div className="col-span-4 mt-1 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                                <ShieldCheck size={14} className="text-amber-500" />
                                <span>Authorized Zebra, Honeywell & TSC Direct Supply</span>
                              </div>
                              <Link href="/products" onClick={() => setMegaOpen(false)}
                                className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 group">
                                <span>View Full Directory</span>
                                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={link.label} href={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-display font-semibold rounded-lg transition-colors ${
                      isActive ? 'text-amber-600' : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span layoutId="navIndicator" className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a href="tel:+919923311090" className="text-xs font-mono text-slate-600 hover:text-amber-600 transition-colors whitespace-nowrap">
                +91 99233 11090
              </a>
              <Link href="/contact" className="btn-primary py-2 px-4 text-xs">
                <span>Get Quote</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
              <Link href="/contact"
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-white font-bold text-xs font-display whitespace-nowrap shadow-sm">
                Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer flex-shrink-0"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 py-5 space-y-1">
                {/* Quick contact on mobile */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100 mb-3">
                  <Phone size={14} className="text-amber-600 flex-shrink-0" />
                  <a href="tel:+919923311090" className="text-sm font-mono font-bold text-amber-700">+91 99233 11090</a>
                </div>

                <Link href="/" onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-display font-bold hover:bg-slate-50 ${pathname === '/' ? 'text-amber-600' : 'text-slate-900'}`}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-display font-bold hover:bg-slate-50 ${pathname.startsWith('/about') ? 'text-amber-600' : 'text-slate-900'}`}>
                  About Us
                </Link>

                {/* Products Accordion */}
                <div>
                  <button type="button" onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-display font-bold text-slate-900 hover:bg-slate-50 cursor-pointer">
                    <span>Products Catalog</span>
                    <ChevronDown size={16} className={`transition-transform text-slate-400 ${mobileProductsOpen ? 'rotate-180 text-amber-600' : ''}`} />
                  </button>
                  {mobileProductsOpen && (
                    <div className="pl-4 pr-2 pb-2 space-y-0.5 border-l-2 border-amber-200 ml-4 mt-1">
                      <Link href="/products" onClick={() => setMobileOpen(false)}
                        className="block text-sm text-amber-600 font-bold py-2 px-2">
                        All Categories →
                      </Link>
                      {megaMenuColumns.flatMap((c) => c.items).map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                          className="block text-xs text-slate-600 hover:text-slate-900 py-1.5 px-2 rounded-lg hover:bg-slate-50">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-display font-bold hover:bg-slate-50 ${pathname.startsWith('/contact') ? 'text-amber-600' : 'text-slate-900'}`}>
                  Contact Us
                </Link>

                <div className="pt-3 mt-3 border-t border-slate-100">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full py-3 text-sm justify-center">
                    <span>Request Hardware Quote</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
                <p className="text-center text-[10px] font-mono text-slate-400 pb-2">
                  Seshadripuram, Bengaluru · Mon–Sat 9:30AM–7PM
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
