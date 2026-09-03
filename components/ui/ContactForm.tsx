'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'Industrial Barcode Printers',
    requirement: '',
    volume: 'Immediate (1-10 units)',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        category: 'Industrial Barcode Printers',
        requirement: '',
        volume: 'Immediate (1-10 units)',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please call or WhatsApp us.');
    }
  };

  return (
    <div className="relative rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden">
      {/* Decorative Laser Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-500" />

      <div className="mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 block mb-2">
          Direct RFP / Quotation Form
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight">
          Request Technical Proposal
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Complete the form below. A senior BV Hardwares solutions architect will respond within 4 business hours with certified OEM pricing and hardware availability.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Corporate Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ramesh@company.com"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Company / Entity Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Logistics India"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Hardware Category */}
          <div>
            <label htmlFor="category" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Primary Requirement Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            >
              <option value="Industrial Barcode Printers">Industrial Barcode Printers (Zebra/TSC)</option>
              <option value="Handheld Barcode Scanners">Handheld Barcode Scanners (1D/2D)</option>
              <option value="RFID Printers & Encoders">RFID Printers & Fixed Encoders</option>
              <option value="Thermal Labels & Substrates">Custom Thermal Labels & Rolls</option>
              <option value="Thermal Transfer Ribbons">Wax / Resin / Wax-Resin Ribbons</option>
              <option value="POS Receipt Systems">POS Billing & Receipt Printers</option>
              <option value="BarTender Software & AMC">BarTender Software / AMC Support</option>
            </select>
          </div>

          {/* Deployment Volume */}
          <div>
            <label htmlFor="volume" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Estimated Volume / Timeline
            </label>
            <select
              id="volume"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans"
            >
              <option value="Immediate (1-10 units)">Immediate (1–10 units)</option>
              <option value="Medium Fleet (10-50 units)">Medium Fleet (10–50 units)</option>
              <option value="Enterprise Rollout (50+ units)">Enterprise Rollout (50+ units)</option>
              <option value="Consumables Bulk Contract">Consumables Bulk Monthly Contract</option>
              <option value="On-Site Demo in Bengaluru">On-Site Demonstration in Bengaluru</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="requirement" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
            Detailed Application Requirements *
          </label>
          <textarea
            id="requirement"
            name="requirement"
            rows={4}
            required
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Specify label dimensions, daily print volume, substrate conditions (e.g. cold storage, chemical resistance), connectivity (USB/LAN/WiFi)..."
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm font-sans resize-y"
          />
        </div>

        {/* Feedback Messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3"
            >
              <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
              <span>
                Inquiry received successfully! A BV Hardwares engineering representative will contact you shortly.
              </span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3"
            >
              <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Transmitting Inquiry to Bengaluru Sales Desk...</span>
            </>
          ) : (
            <>
              <span>Transmit Hardware RFQ</span>
              <Send size={16} />
            </>
          )}
        </button>

        <p className="text-[11px] font-mono text-center text-slate-500">
          Strict confidentiality guaranteed. We do not share RFQ technical data with third parties.
        </p>
      </form>
    </div>
  );
}
