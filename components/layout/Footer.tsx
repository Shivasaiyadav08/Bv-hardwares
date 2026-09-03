'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Soft Glow Accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand & Legacy — full width mobile, 4 cols lg */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block" aria-label="BV Hardwares Home">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 inline-block">
                <Image
                  src="/images/bvhardwares-logo-footer.png"
                  alt="BV Hardwares"
                  width={200}
                  height={50}
                  className="h-9 sm:h-10 w-auto object-contain brightness-110"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Innovating Solutions. Enhancing Productivity. Earning Trust. Founded in 1983, BV Hardwares is Bengaluru&apos;s foremost authority on industrial thermal barcode printing, mobile data capture, RFID automation, and high-spec label consumables.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
              <span>SESHADRIPURAM CENTRAL HUB &bull; BENGALURU</span>
            </div>
          </div>

          {/* Quick Links — 2 cols lg */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home Portal', href: '/' },
                { label: 'About Our Legacy', href: '/about' },
                { label: 'Hardware Catalog', href: '/products' },
                { label: 'Engineering Desk', href: '/contact' },
                { label: 'Request Quotation', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Systems — 3 cols lg */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Systems
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Industrial Label Printers', href: '/products/label-printer' },
                { label: 'POS Thermal Receipt Printers', href: '/products/pos-printer' },
                { label: 'Rugged Barcode Scanners', href: '/products/wired-scanner' },
                { label: 'Custom Die-Cut Thermal Labels', href: '/products/labels' },
                { label: 'Thermal Transfer Ribbons', href: '/products/ribbon' },
                { label: 'BarTender Automation Suites', href: '/products/software' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — 3 cols lg */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Headquarters
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  No 17, Ground Floor, 1st Cross, Anjaneya Temple Street, Seshadripuram, Bengaluru – 560020
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+919923311090" className="hover:text-white transition-colors">
                  +91 99233 11090
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@bvhardwares.in" className="hover:text-white transition-colors break-all">
                  info@bvhardwares.in
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-slate-600 flex-shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group"
            >
              <span>Schedule a Live Printer Demo</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500 font-mono">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} BV Hardwares. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span>Bengaluru Hub</span>
            <span>&bull;</span>
            <span>ISO Compliant</span>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-slate-300">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
