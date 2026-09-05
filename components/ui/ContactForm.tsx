'use client';

import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, MailCheck, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productInterest: 'Barcode / Label Printers',
  volume: '',
  message: '',
  website: '',
};

const fieldClass =
  'w-full rounded-xl border border-input bg-background/90 px-3.5 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground/65 focus:border-brand-blue focus:bg-background focus:ring-4 focus:ring-brand-blue/10 dark:focus:border-brand-blue-light';

export default function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [openedMailApp, setOpenedMailApp] = useState(false);

  useEffect(() => {
    const requestedProduct = new URLSearchParams(window.location.search).get('product');
    if (!requestedProduct) return;
    setForm((current) => ({
      ...current,
      productInterest: 'Other',
      message: current.message || `I would like pricing and availability for ${requestedProduct}.`,
    }));
  }, []);

  const update = (name: keyof typeof form, value: string) => {
    setOpenedMailApp(false);
    setForm((current) => ({ ...current, [name]: value }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.website) return;

    const subject = `BV Hardwares enquiry - ${form.productInterest}`;
    const body = [
      'Hello Bhagyashree Ventures,',
      '',
      'I would like to enquire about the following requirement:',
      '',
      `Name: ${form.name}`,
      `Company: ${form.company || 'Not provided'}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Product / Requirement: ${form.productInterest}`,
      `Quantity / Timeline: ${form.volume || 'Not provided'}`,
      '',
      'Requirement details:',
      form.message,
      '',
      'Please share suitable options, availability and pricing.',
    ].join('\n');

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpenedMailApp(true);
    window.location.href = mailto;
  }

  return (
    <div
      id="pricing-request"
      className="relative scroll-mt-28 overflow-hidden rounded-[1.6rem] border border-border/90 bg-card p-5 shadow-[0_26px_70px_-44px_rgba(7,17,38,0.35)] sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/60 via-brand-blue/20 to-brand-orange/65" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-brand-blue/[0.06] blur-3xl dark:bg-brand-blue-light/[0.07]" />

      <div className="relative max-w-2xl">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
          <MailCheck size={21} aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">Product pricing</p>
        <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
          Prepare your enquiry for our team.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Fill in the requirement and we will open your email app with everything pre-filled to {siteConfig.email}. Review the message there and press Send. No website email credentials are required.
        </p>
      </div>

      <form className="relative mt-7 space-y-5" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            suppressHydrationWarning
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-foreground">
            Name <span className="text-brand-orange">*</span>
            <input suppressHydrationWarning className={`${fieldClass} mt-2`} required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
          </label>
          <label className="text-sm font-semibold text-foreground">
            Company
            <input suppressHydrationWarning className={`${fieldClass} mt-2`} autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Company name" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-foreground">
            Email <span className="text-brand-orange">*</span>
            <input suppressHydrationWarning className={`${fieldClass} mt-2`} type="email" required autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" />
          </label>
          <label className="text-sm font-semibold text-foreground">
            Phone / WhatsApp <span className="text-brand-orange">*</span>
            <input suppressHydrationWarning className={`${fieldClass} mt-2`} type="tel" required autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 ..." />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-foreground">
            Product / requirement <span className="text-brand-orange">*</span>
            <select suppressHydrationWarning className={`${fieldClass} mt-2`} value={form.productInterest} onChange={(e) => update('productInterest', e.target.value)}>
              <option>Barcode / Label Printers</option>
              <option>Barcode Scanners</option>
              <option>Labels & Tags</option>
              <option>Thermal Transfer Ribbons</option>
              <option>RFID Printers / Devices</option>
              <option>HHT / Mobile Computers</option>
              <option>POS Printers / Rolls</option>
              <option>Software / Integration</option>
              <option>Service / Maintenance</option>
              <option>HPRT Partner Products</option>
              <option>Other</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-foreground">
            Quantity / timeline
            <input suppressHydrationWarning className={`${fieldClass} mt-2`} value={form.volume} onChange={(e) => update('volume', e.target.value)} placeholder="e.g. 10 units / this month" />
          </label>
        </div>

        <label className="block text-sm font-semibold text-foreground">
          Requirement details <span className="text-brand-orange">*</span>
          <textarea suppressHydrationWarning className={`${fieldClass} mt-2 min-h-32 resize-y`} required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Model (if known), application, label size/material, daily volume, connectivity, delivery location, or the issue you need solved..." />
        </label>

        <AnimatePresence mode="wait">
          {openedMailApp && (
            <motion.div
              key="mail-opened"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              aria-live="polite"
              className="flex items-start gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-700 dark:text-emerald-300"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              Your email app should open with the enquiry pre-filled. Review it and press Send to deliver it to {siteConfig.email}.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" suppressHydrationWarning className="w-full sm:w-auto">
            <Send size={17} /> Open enquiry in email
          </Button>
          <p className="text-xs leading-5 text-muted-foreground">
            The website does not send the email silently; your own email app sends it after you confirm.
          </p>
        </div>
      </form>
    </div>
  );
}
