export interface Industry {
  title: string;
  description: string;
  image: string;
  stats: string;
  tag?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  highlight?: string;
}

export const heroSlides = [
  {
    id: 'slide-1',
    tag: 'Trusted Industrial Partner Since 1983',
    headline: 'High-Uptime Hardware.',
    headline2: 'Zero Compromise.',
    subtext:
      "Bengaluru's premier enterprise infrastructure partner for Zebra, Honeywell & TSC industrial barcode printers, 2D mobile scanners, RFID automated tracking, and high-volume media supplies.",
    cta1: { label: 'Explore Hardware Catalog', href: '/products' },
    cta2: { label: 'Request Facility Quote', href: '/contact' },
    image: '/images/banner.jpg',
    specs: [
      { label: 'Uptime Reliability', value: '99.9%' },
      { label: 'Active Deployments', value: '4,000+' },
      { label: 'Bengaluru Dispatch', value: 'Same Day' },
    ],
  },
  {
    id: 'slide-2',
    tag: 'Precision Engineering & OEM Direct',
    headline: 'Thermal Printing.',
    headline2: 'Engineered for Scale.',
    subtext:
      'From 600 DPI industrial label printing engines to high-speed desktop dispatch stations, we configure, deploy, and maintain mission-critical print environments.',
    cta1: { label: 'View Industrial Printers', href: '/products/label-printer' },
    cta2: { label: 'Our 40-Year Heritage', href: '/about' },
    image: '/images/bv-banner-1.jpg',
    specs: [
      { label: 'Print Resolutions', value: 'Up to 600 DPI' },
      { label: 'Print Volume', value: '24/7 Industrial' },
      { label: 'Certified Support', value: 'OEM On-Site' },
    ],
  },
  {
    id: 'slide-3',
    tag: 'Turnkey Automatic Identification (AIDC)',
    headline: 'End-to-End Barcode',
    headline2: '& RFID Ecosystems.',
    subtext:
      'Hardware, certified ribbon formulations, specialty polyester substrates, BarTender automation suites, and field engineering maintenance under one single roof.',
    cta1: { label: 'Connect with an Engineer', href: '/contact' },
    cta2: { label: 'Full Product Portfolio', href: '/products' },
    image: '/images/products-banner.jpg',
    specs: [
      { label: 'RFID Frequencies', value: 'UHF 865–868 MHz' },
      { label: 'Ribbon Chemistry', value: 'Wax / Resin / Hybrid' },
      { label: 'BarTender Suite', value: 'Enterprise Ready' },
    ],
  },
];

export const stats = [
  { value: 40, suffix: '+', label: 'Years of Engineering Mastery', sublabel: 'Operating continuously in Bengaluru since 1983' },
  { value: 4000, suffix: '+', label: 'Enterprise Clients Powered', sublabel: 'Logistics, retail, healthcare & manufacturing' },
  { value: 200, suffix: '+', label: 'Hardware & Media SKUs', sublabel: 'Ready inventory in our Bengaluru hub' },
  { value: 30, suffix: '+', label: 'Industry & OEM Accreditations', sublabel: 'Authorized distributor and certified AMC provider' },
];

export const productHighlights = [
  {
    title: 'Industrial Label Printers',
    description:
      'Heavy-duty thermal transfer and direct thermal workhorses from Zebra, TSC, and Citizen. Built with die-cast aluminum frames for 24/7 continuous high-volume labeling.',
    image: '/images/barcode-rfid-printers.jpg',
    href: '/products/label-printer',
    category: 'Printers',
    badge: 'Heavy Industrial',
    specs: '203 / 300 / 600 DPI',
  },
  {
    title: 'Rugged Barcode Scanners',
    description:
      'Wired, Bluetooth wireless, and hands-free presentation imagers from Honeywell, Datalogic, and Zebra. Instant capture of distorted, low-contrast, or plastic-wrapped codes.',
    image: '/images/barcode-scanner.jpg',
    href: '/products/wired-scanner',
    category: 'Scanners',
    badge: '1D / 2D Imagers',
    specs: 'IP65 Ruggedized',
  },
  {
    title: 'Custom Labels & Specialty Tags',
    description:
      'Precision slitted thermal transfer, direct thermal, tamper-evident VOID, cryogenic, and high-gum tyre labels manufactured to exact mechanical specifications.',
    image: '/images/labels-and-tags.jpg',
    href: '/products/labels',
    category: 'Consumables',
    badge: 'Custom Slitting',
    specs: 'Polyester / Vinyl / Paper',
  },
  {
    title: 'Thermal Transfer Ribbons',
    description:
      'Premium Wax, Wax-Resin, and pure Resin ribbons engineered with backcoat technology to extend printhead lifespan while ensuring scratch-proof barcode readability.',
    image: '/images/thermal-ribbons.jpg',
    href: '/products/ribbon',
    category: 'Consumables',
    badge: 'High Scratch Resistance',
    specs: 'Resin / Wax-Resin / Wax',
  },
  {
    title: 'Enterprise POS Systems',
    description:
      'Ultra-compact POS thermal receipt printers, mobile Bluetooth billers, and certified thermal roll consumables for lightning-fast checkout counters and hospitality billing.',
    image: '/images/pos-systems.jpg',
    href: '/products/pos-printer',
    category: 'Point-of-Sale',
    badge: 'High Speed 250mm/s',
    specs: 'USB / LAN / Bluetooth',
  },
  {
    title: 'BarTender & Label Software',
    description:
      'Official BarTender enterprise barcode design, label automation, and database-driven serialization software suite with on-site ERP/WMS integration support.',
    image: '/images/Software-Mobile-Applications.jpg',
    href: '/products/software',
    category: 'Software & Integration',
    badge: 'Enterprise Automation',
    specs: 'ERP / SAP / WMS Ready',
  },
];

export const industries: Industry[] = [
  {
    title: 'Supply Chain & Logistics',
    description:
      'High-speed sorting labels, cross-dock dispatch marks, pallet tags, and mobile computers keeping regional hubs in continuous flow.',
    image: '/images/logistics-ware-housing.jpg',
    stats: 'Zero-drop scanner optics & weather-resistant thermal labels',
    tag: 'High Throughput',
  },
  {
    title: 'Aviation & Baggage Handling',
    description:
      'IATA-compliant baggage tags, heavy-duty tear-resistant synthetic boarding pass stocks, and airport counter printers engineered for non-stop passenger check-in.',
    image: '/images/aviation.jpg',
    stats: '100% IATA Resolution 753 Compliance',
    tag: 'Mission Critical',
  },
  {
    title: 'Omnichannel Retail & Dark Stores',
    description:
      'Rapid-checkout POS printers, price markdown labels, shelf-talker tags, and quick-fulfillment handheld barcode terminals.',
    image: '/images/retail.jpg',
    stats: 'Sub-second scan confirmation & instant thermal printing',
    tag: 'Fast Checkout',
  },
  {
    title: 'Electronics & White Goods',
    description:
      'High-temperature PCB tracking, serial number identification, tamper-evident warranty stickers, and chemical-resistant asset marking.',
    image: '/images/white-goods.jpg',
    stats: 'Flame-retardant UL-recognized polyester labels',
    tag: 'Extreme Durability',
  },
];

export const differentiators = [
  {
    title: '100% Genuine Hardware & Spares',
    description:
      'Authorized supply channel for Zebra, Honeywell, TVS, TSC, and Citizen. Every printer, printhead, and mainboard is factory-sealed and serial-verified.',
    iconName: 'ShieldCheck',
    metric: 'OEM Direct',
  },
  {
    title: 'Certified Field Engineering',
    description:
      'Our factory-trained technicians provide on-site installation, firmware optimization, printhead calibration, and preventative maintenance across Karnataka.',
    iconName: 'Wrench',
    metric: '24hr SLA',
  },
  {
    title: 'Bengaluru In-Stock Hub',
    description:
      'Our Seshadripuram facility maintains continuous inventory of high-turnover printers, barcode scanners, and ribbon rolls for rapid same-day dispatch.',
    iconName: 'Truck',
    metric: 'Immediate Stock',
  },
  {
    title: '4 Decades of Domain Mastery',
    description:
      'Founded in 1983, BV Hardwares has navigated four decades of identification technology evolution, delivering institutional reliability to over 4,000 accounts.',
    iconName: 'Award',
    metric: 'Since 1983',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ravi Shankar',
    role: 'Vice President — Logistics & Supply Chain',
    company: 'Rapid Logistics Pvt. Ltd.',
    quote:
      'BV Hardwares transformed our regional fulfillment infrastructure. The Zebra industrial printers they configured have operated across multiple shifts with zero downtime. Their Bengaluru engineering team provides unparalleled same-day turnaround.',
    rating: 5,
    highlight: 'Zero Downtime Operations',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Head of Retail Operations',
    company: 'FreshMart Supermarkets',
    quote:
      'Deploying POS receipt printers and 2D barcode imagers across our store network was completely friction-free. BV Hardwares delivered pre-configured units with custom label rolls ready for immediate counter deployment.',
    rating: 5,
    highlight: 'Flawless Multi-Store Rollout',
  },
  {
    id: 3,
    name: 'Anand Krishnamurthy',
    role: 'Principal Systems Architect',
    company: 'Precision Electronics Ltd.',
    quote:
      'Sourcing industrial printers and high-temperature polyimide barcode labels through BV Hardwares ensures our factory passes all aerospace and ISO traceability audits without exception. Highly recommended.',
    rating: 5,
    highlight: 'Audit-Grade Compliance',
  },
  {
    id: 4,
    name: 'Meera Subramanian',
    role: 'Director of Ground Operations',
    company: 'AeroLink Aviation Services',
    quote:
      'Baggage tag thermal printers cannot fail during passenger check-in peaks. BV Hardwares supplies our team with top-tier hardware and IATA-compliant consumables that keep airport operations moving seamlessly.',
    rating: 5,
    highlight: 'Aviation-Grade Reliability',
  },
  {
    id: 5,
    name: 'Suresh Patel',
    role: 'Plant General Manager',
    company: 'BharatPack Industries',
    quote:
      'The custom wax-resin ribbons and TSC industrial labelers recommended by BV Hardwares eliminated label smudging and reduced consumable waste by 22%. Outstanding technical knowledge and ethical partnership.',
    rating: 5,
    highlight: '22% Consumable Waste Reduction',
  },
];
