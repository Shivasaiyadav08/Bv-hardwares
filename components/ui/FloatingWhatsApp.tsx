'use client';

import { siteConfig, whatsappUrl } from '@/lib/site';

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.021 2.91 9.82 9.82 0 012.889 6.99 9.803 9.803 0 01-2.895 6.984 9.84 9.84 0 01-6.99 2.9m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.448h.005c6.557 0 11.892-5.335 11.895-11.893a11.821 11.821 0 00-3.488-8.413Z" />
    </svg>
  );
}

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
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_16px_34px_rgba(37,211,102,.3)] focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:inline-flex lg:size-14"
    >
      <WhatsAppIcon size={25} />
    </a>
  );
}
