export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductDetailContent {
  sourceModel?: string;
  overview?: string;
  specifications: ProductSpecification[];
  applications?: string[];
  highlights?: string[];
  sourceLabel: string;
  sourceUrl: string;
}

/**
 * Verified product-level details used on BV product detail pages.
 *
 * Keep this intentionally selective: only add technical values when they can be
 * traced to the original BV catalogue, a manufacturer datasheet, or an official
 * manufacturer product page. Category-level fallback content is rendered for
 * products that do not yet have a verified specification record here.
 */
export const productDetails: Record<string, ProductDetailContent> = {
  'tsc-da310': {
    overview:
      'A compact desktop direct-thermal label printer intended for everyday barcode, shipping and product-identification work where ribbon-free printing is preferred.',
    specifications: [
      { label: 'Print method', value: 'Direct thermal' },
      { label: 'Resolution', value: '300 dpi (12 dots/mm)' },
      { label: 'Max. print speed', value: 'Up to 4 ips (102 mm/s)' },
      { label: 'Max. print width', value: '105.7 mm (4.16 in)' },
      { label: 'Max. print length', value: '1,016 mm (40 in)' },
      { label: 'Connectivity', value: 'USB; optional Bluetooth / Bluetooth MFi' },
      { label: 'Memory', value: '16 MB SDRAM / 8 MB Flash' },
      { label: 'Media', value: 'Continuous, black mark, fan-fold and notched media' },
    ],
    applications: ['Shipping labels', 'Retail marking', 'Product identification', 'Small-office barcode printing'],
    highlights: ['Compact desktop format', 'Ribbon-free direct thermal printing', 'Optional guillotine cutter'],
    sourceLabel: 'TSC DA310 official product comparison',
    sourceUrl: 'https://emea.tscprinters.com/en/product-comparison?skus=DA310',
  },
  'tsc-te244': {
    overview:
      'A 4-inch desktop barcode label printer supporting both thermal-transfer and direct-thermal workflows for general-purpose labels and tags.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi (8 dots/mm)' },
      { label: 'Max. print speed', value: 'Up to 6 ips (152.4 mm/s)' },
      { label: 'Max. print width', value: '108 mm (4.25 in)' },
      { label: 'Max. print length', value: '2,794 mm (110 in)' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Ribbon capacity', value: 'Up to 300 m' },
      { label: 'Label roll capacity', value: '127 mm (5 in) OD' },
    ],
    applications: ['Retail labels', 'Warehouse labels', 'Shipping labels', 'Inventory tags'],
    highlights: ['Desktop footprint', 'Thermal-transfer or direct-thermal operation', 'TSPL-EZ printer language'],
    sourceLabel: 'TSC TE244 documentation',
    sourceUrl: 'https://fs.tscprinters.com/system/files/31-0650003-00_te200_user_manual_en_c.pdf',
  },
  'tsc-tl240': {
    overview:
      'A 4-inch desktop barcode printer designed for straightforward daily media and ribbon loading, with support for thermal-transfer and direct-thermal printing.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '6 ips (152 mm/s)' },
      { label: 'Max. print width', value: '108 mm (4.25 in)' },
      { label: 'Max. print length', value: 'Up to 25,400 mm (1,000 in)' },
      { label: 'Dimensions', value: '211 × 164 × 279 mm' },
      { label: 'Weight', value: 'Approx. 2.0 kg' },
    ],
    applications: ['Retail', 'Inventory', 'Shipping', 'General barcode labels'],
    highlights: ['Easy media loading', 'Media window', 'TSC Console monitoring support'],
    sourceLabel: 'TSC TL Series official datasheet',
    sourceUrl: 'https://fs.tscprinters.com/system/files/tl_dl_series_en_web_20240509_0.pdf',
  },
  'tsc-ml240': {
    overview:
      'A compact industrial thermal printer with a metal enclosure, positioned for higher-duty barcode and label printing than typical desktop models.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '6 ips (152 mm/s)' },
      { label: 'Max. print width', value: '108 mm (4.25 in)' },
      { label: 'Max. print length', value: '2,794 mm (110 in)' },
      { label: 'Ribbon capacity', value: 'Up to 450 m' },
      { label: 'Construction', value: 'Die-cast print mechanism / metal cover' },
      { label: 'Connectivity', value: 'USB 2.0; optional Bluetooth on ML240' },
    ],
    applications: ['Manufacturing labels', 'Warehouse labels', 'Logistics', 'Product identification'],
    highlights: ['Compact industrial chassis', 'Large media window', 'Long ribbon support'],
    sourceLabel: 'TSC ML240 Series official datasheet',
    sourceUrl: 'https://fs.tscprinters.com/en/dl/6/3037',
  },
  cp2140: {
    sourceModel: 'Argox CP-2140',
    overview:
      'A compact desktop barcode printer supporting direct-thermal and thermal-transfer printing with flexible roll, tag and fan-fold media handling.',
    specifications: [
      { label: 'Print method', value: 'Direct thermal / thermal transfer' },
      { label: 'Resolution', value: '203 dpi (8 dots/mm)' },
      { label: 'Print speed', value: '2–5 ips (50.8–127 mm/s)' },
      { label: 'Max. print width', value: '104 mm (4.1 in)' },
      { label: 'Max. print length', value: '2,540 mm (100 in)' },
      { label: 'Connectivity', value: 'Parallel, USB, RS-232' },
      { label: 'Ribbon capacity', value: 'Up to 300 m' },
      { label: 'Media', value: 'Roll-feed, die-cut, continuous, fan-fold, tags and tickets' },
    ],
    applications: ['Inventory labels', 'Shipping', 'Retail', 'General barcode printing'],
    highlights: ['Compact desktop design', 'Movable reflective media sensor', 'Optional cutter'],
    sourceLabel: 'Argox CP Series official brochure',
    sourceUrl: 'https://www.argox.com/docfile/brochure/CP-Series-brochure-v1.3-en.pdf',
  },
  'zebra-zd230': {
    overview:
      'A compact Zebra desktop label printer offered in direct-thermal and thermal-transfer configurations for essential barcode-label printing.',
    specifications: [
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: 'Up to 6 ips (152 mm/s)' },
      { label: 'Connectivity options', value: 'USB; Ethernet, Bluetooth or Wi-Fi/Bluetooth configurations' },
      { label: 'Media handling', value: 'Optional peeler or cutter' },
      { label: 'Ribbon support', value: '74 m or 300 m on thermal-transfer model' },
      { label: 'Printer languages', value: 'ZPL and EPL' },
    ],
    applications: ['Retail', 'Shipping labels', 'Inventory', 'Product identification'],
    highlights: ['Compact 4-inch desktop platform', 'Multiple factory connectivity configurations', 'Supports 1D and 2D barcode symbologies'],
    sourceLabel: 'Zebra ZD230 official technical specifications',
    sourceUrl: 'https://www.zebra.com/content/dam/zebra_dam/en/tech-specs/zd230-tech-specs-en-us.pdf',
  },
  'ht800-ht830': {
    sourceModel: 'HPRT HT800 / HT830',
    overview:
      'A 4-inch thermal-transfer desktop barcode-printer family with long ribbon capacity, multiple printer-language emulations and optional wireless connectivity.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer' },
      { label: 'Resolution', value: 'HT800: 203 dpi / HT830: 300 dpi' },
      { label: 'Max. print speed', value: 'HT800: 152 mm/s / HT830: 100 mm/s' },
      { label: 'Max. print width', value: '108 mm / 106 mm' },
      { label: 'Ribbon capacity', value: '300 m' },
      { label: 'Standard interfaces', value: 'USB, Serial, Ethernet' },
      { label: 'Optional connectivity', value: 'Bluetooth 4.0/BLE, Wi-Fi' },
      { label: 'Printer languages', value: 'ZPL, TSPL, EPL, DPL' },
    ],
    applications: ['Warehouse labels', 'Asset labels', 'Office barcode printing', 'Product identification'],
    highlights: ['Dual-wall frame', 'Optional cutter / peeler', 'External label-roll holder option'],
    sourceLabel: 'HPRT HT800 / HT830 official product page',
    sourceUrl: 'https://www.hprt.com/Product/4-inch-Thermal-Transfer-Barcode-Printer-HT800.html',
  },
  'citizen-cl631': {
    sourceModel: 'Citizen CL-S631 / CL-S631II family',
    overview:
      'A 300 dpi industrial-desktop label printer designed for crisp logos, pictures and barcode labels, with a robust metal mechanism and flexible media handling.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer + direct thermal' },
      { label: 'Resolution', value: '300 dpi' },
      { label: 'Max. print speed', value: '4 ips (100 mm/s)' },
      { label: 'Max. print width', value: '104 mm (4 in)' },
      { label: 'Media width', value: '12.5–118 mm' },
      { label: 'Ribbon', value: 'Up to 360 m' },
      { label: 'Main interfaces', value: 'USB and Serial; optional Ethernet / Wi-Fi / Parallel' },
    ],
    applications: ['Healthcare', 'Manufacturing', 'Retail', 'High-resolution barcode labels'],
    highlights: ['All-metal mechanism', 'ARCP ribbon control', 'Cross-Emulation for Zebra / Datamax languages'],
    sourceLabel: 'Citizen CL-S631 official product page',
    sourceUrl: 'https://www.citizen-systems.com/us/products/printer/label/cl-s631',
  },
  'zebra-zt411': {
    overview:
      'A 4-inch industrial Zebra printer platform for demanding barcode-label workflows, with multiple print resolutions and extensive connectivity and media-handling options.',
    specifications: [
      { label: 'Print resolutions', value: '203 / 300 / 600 dpi' },
      { label: 'Max. print width', value: '104 mm (4.09 in)' },
      { label: 'Max. print speed', value: 'Up to 14 ips at 203 dpi' },
      { label: 'Media', value: 'Continuous, die-cut, notch and black-mark; optional linerless' },
      { label: 'Connectivity options', value: 'Ethernet, Wi-Fi/Bluetooth, parallel and applicator interface options' },
      { label: 'Media handling options', value: 'Rewind, peel and cutter configurations' },
    ],
    applications: ['Manufacturing', 'Logistics', 'Warehouse labeling', 'High-volume product identification'],
    highlights: ['Industrial 4-inch platform', 'Optional RFID configuration', 'Multiple print-resolution options'],
    sourceLabel: 'Zebra ZT411 official technical specifications',
    sourceUrl: 'https://www.zebra.com/content/dam/zebra_dam/en/tech-specs/zt411-tech-specs-en-us.pdf',
  },
  'tsc-mb241t': {
    overview:
      'A compact industrial thermal printer with touch display and flexible wired/wireless connectivity for manufacturing, logistics, retail and healthcare labeling.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '12 ips (304.8 mm/s)' },
      { label: 'Max. print width', value: '107 mm (4.21 in)' },
      { label: 'Ribbon capacity', value: '450 m' },
      { label: 'Memory', value: '256 MB Flash / 256 MB SDRAM' },
      { label: 'Connectivity', value: 'RS-232, USB, Ethernet, USB Host; wireless options available' },
      { label: 'Display', value: 'Color touch LCD' },
    ],
    applications: ['Manufacturing', 'Retail', 'Healthcare', 'Transportation & logistics'],
    highlights: ['Industrial metal mechanism', 'Large internal media capacity', 'Remote printer-management support'],
    sourceLabel: 'TSC MB241T Series official datasheet',
    sourceUrl: 'https://fs.tscprinters.com/system/files/tsc-auto-id-tscaa-mb241t-series-datasheet-en-20250909.pdf',
  },
  'mh241-341-641': {
    sourceModel: 'TSC MH241 / MH341 / MH641 family',
    overview:
      'TSC industrial barcode-printer family with 203, 300 and 600 dpi configurations designed for high-quality, high-volume label production.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 / 300 / 600 dpi' },
      { label: 'Max. print speed', value: '14 / 12 / 6 ips by resolution' },
      { label: 'Max. print width', value: '104 mm (4.09 in)' },
      { label: 'Ribbon capacity', value: '600 m' },
      { label: 'Media roll', value: 'Up to 203.2 mm (8 in) OD' },
      { label: 'Connectivity', value: 'RS-232, USB 2.0, Ethernet, USB Host; optional wireless' },
    ],
    applications: ['High-volume manufacturing', 'Logistics', 'Product identification', 'Industrial barcode labels'],
    highlights: ['Die-cast industrial mechanism', 'Multiple resolution options', 'Enterprise management support'],
    sourceLabel: 'TSC MH241 / MH261 Series official datasheet',
    sourceUrl: 'https://fs.tscprinters.com/system/files/mh241-mh261_en-emea-23122020_0.pdf',
  },
  'tsc-mx241p': {
    overview:
      'A high-performance industrial thermal printer built for fast, high-volume label production in manufacturing, logistics, shipping and product identification.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '18 ips (457 mm/s)' },
      { label: 'Max. print width', value: '104 mm (4.09 in)' },
      { label: 'Ribbon capacity', value: '600 m' },
      { label: 'Memory', value: '512 MB SDRAM / 512 MB Flash' },
      { label: 'Connectivity', value: 'RS-232, USB, Ethernet, USB Host, Parallel; wireless options available' },
    ],
    applications: ['Manufacturing', 'Logistics', 'Shipping', 'Product identification'],
    highlights: ['Very high print speed', 'Rugged die-cast construction', 'Touch display and enterprise management options'],
    sourceLabel: 'TSC MX241P Series official datasheet',
    sourceUrl: 'https://fs.tscprinters.com/en/dl/1/6991',
  },
  'tsc-mh261t': {
    overview:
      'A 6-inch industrial thermal printer intended for wide labels and demanding production environments where larger media widths are required.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '12 ips' },
      { label: 'Max. print width', value: '6.61 in' },
      { label: 'Media width', value: 'Up to 6.8 in' },
      { label: 'Connectivity', value: 'Ethernet, USB, Serial, USB Host; optional Wi-Fi/Bluetooth' },
    ],
    applications: ['Wide-format industrial labels', 'Manufacturing', 'Logistics', 'Pallet and product identification'],
    highlights: ['6-inch industrial print class', 'Die-cast aluminum design', 'Easy printhead and platen replacement'],
    sourceLabel: 'TSC MH Series 6-inch official product page',
    sourceUrl: 'https://in.tscprinters.com/en/products/mh-series-6-inch-performance-industrial-printers',
  },
  'tsc-ttp-286mt': {
    overview:
      'An 8-inch wide-format industrial thermal printer designed for compliance labels, drum labels, inventory control, warning signage and other large-format labeling.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi' },
      { label: 'Max. print speed', value: '6 ips (152 mm/s)' },
      { label: 'Max. print width', value: '8.5 in' },
      { label: 'Max. media width', value: 'Up to 9.5 in' },
      { label: 'Ribbon capacity', value: 'Up to 600 m' },
      { label: 'Memory', value: '512 MB Flash / 256 MB SDRAM' },
      { label: 'Connectivity', value: 'Ethernet, USB, USB Host, Parallel and Serial' },
    ],
    applications: ['GHS chemical labels', 'Drum labels', 'Pallet labels', 'Custom signage', 'Shipping & logistics'],
    highlights: ['Wide-format 8-inch print class', '4.3-inch color touch display', 'Rigid die-cast aluminum frame'],
    sourceLabel: 'TSC TTP-286MT Series official product page',
    sourceUrl: 'https://usca.tscprinters.com/en/products/ttp-series-8-inch-performance-industrial-printers',
  },
  'citizn-cl700': {
    sourceModel: 'Citizen CL-S700 series',
    overview:
      'An industrial label-printer platform with front-access media loading, cross-emulation and high-volume thermal-transfer capability.',
    specifications: [
      { label: 'Print method', value: 'Thermal transfer & direct thermal' },
      { label: 'Resolution', value: '203 dpi (CL-S700)' },
      { label: 'Max. print speed', value: '10 ips (254 mm/s)' },
      { label: 'Max. print width', value: '104.1 mm (4.10 in)' },
      { label: 'Media width', value: '25.4–118.1 mm' },
      { label: 'Media roll', value: 'Up to 200 mm (8 in) OD' },
      { label: 'Options', value: 'Wireless LAN / Ethernet, cutter and peeler configurations' },
    ],
    applications: ['Industrial labels', 'Warehouse labels', 'Manufacturing', 'High-volume barcode printing'],
    highlights: ['Hi-Lift media mechanism', 'Front-access operation', 'Automatic Zebra / Datamax emulation selection'],
    sourceLabel: 'Citizen CL-S700 Series official datasheet',
    sourceUrl: 'https://www.citizen-systems.com/resource/support/Label/CL-S700R/Datasheets/CL-S700_Series_Datasheet_ENG.pdf',
  },
};
