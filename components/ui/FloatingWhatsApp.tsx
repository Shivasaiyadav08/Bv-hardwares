'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/919923311090?text=${encodeURIComponent(
    'Hi BV Hardwares Bengaluru, I would like to consult with an engineer regarding industrial barcode printers / scanner requirements.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Dialog Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold">
                    <MessageSquare size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display">BV Hardwares WhatsApp</h4>
                  <p className="text-[11px] font-mono text-emerald-400">Application Engineers Active</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat prompt"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Content Body */}
            <div className="p-4 bg-slate-50 text-xs text-slate-700 space-y-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm leading-relaxed">
                Hello! Looking for Zebra/Honeywell barcode printers, 2D scanner fleets, or custom label quotes?
              </div>
              <p className="text-[11px] font-mono text-slate-500 text-right">
                Average reply time: &lt; 15 mins
              </p>
            </div>

            {/* Action Button */}
            <div className="p-3 bg-white border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare size={16} />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.45)] transition-all cursor-pointer relative"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
        <MessageSquare size={26} />
      </motion.button>
    </div>
  );
}
