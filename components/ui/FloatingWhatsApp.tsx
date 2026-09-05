'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/site';

export default function FloatingWhatsApp() {
  const url = whatsappUrl(
    `Hello ${siteConfig.name}, I would like help with a barcode, labeling, RFID or POS requirement.`
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 hidden size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:inline-flex lg:size-14"
    >
      <MessageCircle size={23} strokeWidth={2.1} />
    </a>
  );
}
