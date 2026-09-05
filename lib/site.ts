export const siteConfig = {
  name: 'Bhagyashree Ventures',
  legacyName: 'BV Hardwares',
  domain: 'bvhardwares.in',
  url: 'https://bvhardwares.in',
  email: 'info@bvhardwares.in',
  phone: {
    primaryDisplay: '+91 99643 43445',
    primaryE164: '+919964343445',
  },
  address: {
    company: 'Bhagyashree Ventures',
    line1: 'No. 35/B, 3rd Floor, Kalpavrusha Building',
    line2: 'No. 12 Race Course Road, Madhavnagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560001',
    country: 'India',
  },
  description:
    'Barcode, labeling, POS, RFID and automatic identification solutions for retail, logistics, healthcare, manufacturing and other business operations.',
  shortDescription:
    'Reliable barcode, labeling, POS, RFID, software and support solutions for business operations.',
  logo: '/images/bhagyashree-ventures-logo.png',
  mark: '/images/bhagyashree-ventures-mark.png',
  icon: '/images/bhagyashree-ventures-icon.png',
} as const;

export const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.company}, ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city} ${siteConfig.address.postalCode}`
)}`;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${siteConfig.phone.primaryE164.replace('+', '')}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

export const pricingRequestHref = '/contact#pricing-request';
