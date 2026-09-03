export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  specs?: string[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  products: Product[];
}

export const productCategories: Record<string, ProductCategory> = {
  labels: {
    slug: 'labels',
    title: 'Labels & Tags',
    subtitle: 'Premium adhesive labels for every industrial and retail application',
    description:
      'BV Hardwares supplies an extensive range of barcode labels and tags — from standard direct thermal shipping labels to specialised RFID tags, tamper-evident security labels, and high-gum tyre labels. All labels can be manufactured to your custom size, adhesive strength, and substrate specifications.',
    coverImage: '/images/barcode-labels-cover.jpg',
    products: [
      {
        id: 'direct-thermal-ecommerce',
        name: 'Direct Thermal Shipping Labels',
        image: '/images/DIRECT-THERMAL-LABELS-FOR-ECOMMERCE.jpg',
        description:
          'High-contrast direct thermal shipping labels formulated for fast logistics, dispatch notes, and e-commerce box labeling without ink ribbons.',
        specs: ['Standard Sizes: 4" x 6", 3" x 2", 2" x 1"', 'Core: 1" / 3" options', 'Compatible with Zebra, TSC, Citizen, TVS', 'Strong permanent adhesive'],
      },
      {
        id: 'polyester-labels',
        name: 'Polyester (PET) Synthetic Labels',
        image: '/images/POLYSTER-LABELS.jpg',
        description:
          'Heavy-duty polyester labels designed for industrial environments requiring resistance against moisture, solvent exposure, abrasion, and high heat.',
        specs: ['Finish: Matte / Gloss White / Silver', 'Temp Resistance: -40°C to +150°C', 'Adhesive: Heavy-duty acrylic', 'Ribbon Requirement: Full Resin'],
      },
      {
        id: 'hologram-labels',
        name: 'Hologram Security & Authentication Tags',
        image: '/images/HOLOGRAM-LABELS-TAGS-PLAIN-AND-PRE-PRINTED.jpg',
        description:
          'High-security tamper-evident holographic labels and pre-printed tags preventing counterfeit and unauthorized product tampering.',
        specs: ['Security: 2D/3D holographic effects', 'Tamper evidence: Destructible substrate', 'Custom branding and numbering available', 'Plain or pre-printed'],
      },
      {
        id: 'void-labels',
        name: 'VOID Tamper-Evident Labels',
        image: '/images/VOID-LABELS-TEMPER-EVIDENTS-LABELS.jpg',
        description:
          'Security labels that reveal an irreversible "VOID" pattern on removal, ensuring clear visual proof of any warranty violation or opening.',
        specs: ['Substrate: Silver or white polyester', 'Residue: High-tack pattern release', 'Ideal for IT hardware, electronics, warranty seals', 'Sequential numbering compatible'],
      },
      {
        id: 'high-gum-tyre-labels',
        name: 'High-Gum Tyre & Rubber Labels',
        image: '/images/HIGH-GUM-LABELS-TYRE-LABELS.jpg',
        description:
          'Specialised vulcanized-grade high-gum labels engineered to stick securely to porous, curved, and oily rubber tyre treads.',
        specs: ['Adhesive: Ultra-high tack rubber based', 'Surface: Porous, vulcanized, uneven surfaces', 'High tensile barrier film to prevent oil bleeding', 'Custom cut sizes'],
      },
      {
        id: 'jewellery-labels',
        name: 'Jewellery & Optical Dumbbell Tags',
        image: '/images/JEWELLARY-LABELS.jpg',
        description:
          'Tear-resistant non-adhesive tail dumbbell and barbell tags designed for rings, necklaces, watches, and spectacle frames.',
        specs: ['Material: Synthetic non-tearable film', 'Tail: Adhesive-free section protects jewellery', 'Clean barcode & price printing', 'Resistant to ultrasonic cleaning'],
      },
      {
        id: 'rfid-tags',
        name: 'RFID UHF Smart Tags & Inlays',
        image: '/images/RFID-TAG-AND-LABELS-FOR-GARMENT.jpg',
        description:
          'High-sensitivity UHF RFID labels for automated apparel inventory, pallet tracking, and warehouse asset management.',
        specs: ['Protocol: EPC Gen 2 / ISO 18000-6C', 'Frequency: 860–960 MHz UHF', 'Read Range: Up to 10 metres', 'Thermal transfer printable & encodable'],
      },
      {
        id: 'wash-care-labels',
        name: 'Wash Care Satin & Taffeta Labels',
        image: '/images/Wash-Care-Satin-and-Taffeta.jpg',
        description:
          'Garment wash-care ribbons and tags made of satin or nylon taffeta, retaining legibility through repeated laundry cycles.',
        specs: ['Material: Soft polyester satin / nylon taffeta', 'Ribbon: Wash-care resin ribbon compatible', 'Wash Resistance: Up to 95°C water and dry cleaning', 'Single / Double sided weave'],
      },
      {
        id: 'chemical-drum-labels',
        name: 'GHS Chemical Drum Labels',
        image: '/images/CHEMICAL-INDUSTRIES-DRUMS-LABELS.jpg',
        description:
          'BS5609 certified chemical drum labeling materials resistant to marine immersion, harsh chemicals, acids, and UV sunlight.',
        specs: ['Standard: BS5609 Section 2 & 3 compliant', 'Substrate: Top-coated synthetic film', 'UV & Weather resistant', 'Compatible with thermal transfer & inkjet'],
      },
      {
        id: 'airline-baggage-labels',
        name: 'Airline Baggage Tags & Boarding Passes',
        image: '/images/AIRLINE-BAGGAGE-DT-LABELS-BOARDING-PASS.jpg',
        description:
          'IATA compliant direct thermal baggage tags and continuous boarding card stocks for airports, airlines, and transport hubs.',
        specs: ['Compliance: IATA Resolution 740', 'Technology: Direct Thermal high-sensitivity', 'High tear resistance with reinforced core', 'Cross-airline printer compatibility'],
      },
      {
        id: 'paper-board-tags',
        name: 'Paper Board & Synthetic Hang Tags',
        image: '/images/PAPER-BOARD-AND-SYNTHETIC-NON-TEARABLE-TAGS.jpg',
        description:
          'Custom die-cut retail swing tags, price tags, and inventory cards supplied in heavy cardstock or non-tear synthetic sheets.',
        specs: ['Caliper: 150 GSM to 350 GSM', 'Hole punching: Eyelet & string options', 'Finish: Matte, Gloss, Spot UV', 'Full CMYK offset & digital pre-printing'],
      },
      {
        id: 'temperature-resistant-labels',
        name: 'Cryogenic & High-Heat Labels',
        image: '/images/TEMPERATURE-RESISTANT-LABELS.jpg',
        description:
          'Engineered polyimide and cryogenic labels withstanding deep freeze conditions (-196°C liquid nitrogen) up to reflow solder oven temperatures (+300°C).',
        specs: ['Low temp rating: -196°C', 'High temp rating: Up to +300°C', 'Substrate: Polyimide / Specialty film', 'Applications: PCB labeling, cryogenic labs'],
      },
    ],
  },

  'pos-rolls': {
    slug: 'pos-rolls',
    title: 'POS Rolls',
    subtitle: 'BPA-free high sensitivity thermal receipt rolls',
    description:
      'We manufacture and convert premium thermal paper rolls for point-of-sale systems, billing terminals, ATM machines, and card swipe terminals. Engineered with pure virgin pulp for lint-free operation that protects thermal printheads.',
    coverImage: '/images/pos-rolls.jpg',
    products: [
      {
        id: 'pos-rolls-plain',
        name: 'Plain Thermal Billing Rolls',
        image: '/images/POS-ROLLS-PLAIN-AND-PRE-PRINTED.jpg',
        description:
          'Ultra-smooth 55 GSM to 70 GSM thermal paper rolls delivering crisp black prints on all standard 2-inch and 3-inch POS printers.',
        specs: ['Widths: 79mm (3"), 57mm (2")', 'Lengths: 15m to 75m', 'Core: 12mm plastic / coreless', 'BPA-free premium grade coating'],
      },
      {
        id: 'pos-rolls-preprinted',
        name: 'Custom Pre-Printed Receipt Rolls',
        image: '/images/pos-rolls-products.jpg',
        description:
          'Turn customer receipts into promotional media. Custom pre-printed backside or watermark logos for retailers, banks, and restaurant chains.',
        specs: ['Colors: 1 to 4 colour flexographic print', 'Applications: Terms & conditions, refund policy, promotional vouchers', 'Water-based non-toxic inks', 'Minimum batch conversion available'],
      },
    ],
  },

  ribbon: {
    slug: 'ribbon',
    title: 'Thermal Transfer Ribbons',
    subtitle: 'Wax, Wax-Resin, and Full Resin barcode ribbons',
    description:
      'The right thermal transfer ribbon is vital for achieving scan-reliable barcodes and durable prints. BV Hardwares supplies premium grade ribbons in all formulations, slit to custom widths and lengths to match Zebra, TSC, Sato, Citizen, and Datamax printers.',
    coverImage: '/images/ribbon-products.jpg',
    products: [
      {
        id: 'wax-ribbon',
        name: 'Standard & Premium Wax Ribbon',
        image: '/images/WAX.jpg',
        description:
          'Cost-effective ribbon formulation for standard paper labels, carton box barcodes, and general indoor retail tagging with exceptional dark print density.',
        specs: ['Substrates: Chromo paper, coated paper, tag stock', 'Print Speed: Up to 12 IPS', 'Anti-static back-coating for printhead protection', 'Cores: 0.5" & 1" notched / un-notched'],
      },
      {
        id: 'wax-resin-ribbon',
        name: 'Wax-Resin Smear-Resistant Ribbon',
        image: '/images/WAX-RESIN.jpg',
        description:
          'Hybrid ribbon offering exceptional smear and scratch resistance on semi-gloss paper, synthetic polypropylene, and coated warehouse shipping tags.',
        specs: ['Substrates: Coated paper, synthetic, PP, PE film', 'Resistance: Scratch, moderate chemicals, moisture', 'Crisp 90° rotated barcode printing', 'Wide printer heat latitude'],
      },
      {
        id: 'resin-ribbon',
        name: 'Full Resin Industrial Ribbon',
        image: '/images/RESIN.jpg',
        description:
          'Heavy-duty resin formulation engineered for polyester, vinyl, and polyimide labels requiring extreme resistance to harsh industrial solvents, alcohol, and outdoor weathering.',
        specs: ['Substrates: PET, PVC, Polyimide, Vinyl', 'Resistance: IPA, engine oil, xylene, extreme friction', 'Outdoor life: Multi-year durability', 'UL / CSA recognized print durability'],
      },
      {
        id: 'colour-ribbon',
        name: 'Color Thermal Transfer Ribbons',
        image: '/images/COLOUR-RIBBION.jpg',
        description:
          'Vibrant red, blue, green, and white ribbons for color-coded warehouse identification, brand highlights, and visual quality sorting.',
        specs: ['Colors: Red, Blue, Green, White, Silver, Gold', 'Formulation: Wax and Wax-Resin', 'Clean edge sharpness', 'Custom slitting available'],
      },
      {
        id: 'wash-care-resin',
        name: 'Wash-Care Textile Resin Ribbon',
        image: '/images/WASH-CARE-RESIN.jpg',
        description:
          'Specially formulated resin ink designed exclusively for satin and nylon care labels, resisting industrial laundry chemicals, steam, and ironing heat.',
        specs: ['Substrates: Satin, Nylon, Taffeta, Polyester fabrics', 'Wash Resistance: Resists detergent, dry cleaning, bleaches', 'Heat Resistance: Safe for hot iron contact', 'Deep matte black density'],
      },
    ],
  },

  'packaging-material': {
    slug: 'packaging-material',
    title: 'Packaging Material',
    subtitle: 'Industrial packaging consumables for e-commerce and logistics',
    description:
      'Protect your valuable merchandise during transit. BV Hardwares supplies industrial-grade bubble rolls, manual and machine stretch film, courier tamper bags, and BOPP packing tapes directly to warehouses, 3PL hubs, and fulfillment centres.',
    coverImage: '/images/Packaging-Materials.jpg',
    products: [
      {
        id: 'bubble-rolls',
        name: 'Air Bubble Cushioning Rolls',
        image: '/images/bubble-rolls.jpg',
        description:
          'Virgin polymer air bubble rolls offering high impact cushioning and shock absorption for electronics, glassware, and consumer parcels.',
        specs: ['Bubble Size: 10mm standard / 25mm jumbo', 'Roll Widths: 0.5m, 1m, 1.2m, 1.5m', 'Roll Length: 50m & 100m', 'Anti-static pink variant for circuit boards'],
      },
      {
        id: 'stretch-films',
        name: 'Manual & Machine Stretch Film',
        image: '/images/streach-films.jpg',
        description:
          'High-elongation cast LLDPE stretch wrap designed for pallet stabilization, carton bundling, and dust protection during transport.',
        specs: ['Thickness: 17, 23, 29 micron', 'Elongation: Up to 300% yield', 'Core: 3" heavy-duty paper core', 'Puncture resistant with high clarity'],
      },
      {
        id: 'courier-bags',
        name: 'Tamper-Proof Courier Flyer Bags',
        image: '/images/courrier-bags.jpg',
        description:
          'Co-extruded opaque courier bags with hot-melt permanent destruction adhesive strip and transparent pod jacket for shipping waybills.',
        specs: ['Material: Multi-layer LDPE grey/white opaque', 'Closure: Irreversible adhesive strip', 'Feature: Document POD pouch included', 'Custom branding print options'],
      },
      {
        id: 'paper-bags',
        name: 'Eco-Friendly Kraft Packaging Bags',
        image: '/images/paper-bags.jpg',
        description:
          'Biodegradable brown kraft paper shopping and packaging bags equipped with sturdy twisted handles for sustainable retail operations.',
        specs: ['GSM: 80 to 140 GSM virgin kraft', 'Handles: Twisted paper or flat tape handles', 'Load capacity: 3kg to 10kg', 'Water-based flexo printing support'],
      },
      {
        id: 'tapes',
        name: 'BOPP Packaging Tapes & Custom Logo Tapes',
        image: '/images/tapes.jpg',
        description:
          'Pressure-sensitive BOPP acrylic packaging tapes in brown and transparent shades, along with custom printed security tape with your brand logo.',
        specs: ['Widths: 24mm, 48mm (2"), 72mm (3")', 'Thickness: 40, 45, 50 micron', 'Adhesion: High tack water acrylic adhesive', 'Custom logo printing up to 3 colors'],
      },
    ],
  },

  'label-printer': {
    slug: 'label-printer',
    title: 'Label Printers',
    subtitle: 'Industrial and desktop thermal barcode label printers',
    description:
      'As authorized suppliers of Zebra, TSC, Citizen, and Sato printers, BV Hardwares equips businesses with rugged desktop and 24/7 industrial label printing machines with full installation, driver integration, and warranty support.',
    coverImage: '/images/barcode-printers-cover.jpg',
    products: [
      {
        id: 'zebra-zd230',
        name: 'Zebra ZD230 Desktop Label Printer',
        image: '/images/Zebra-ZD230.jpg',
        description:
          'The dependable 4-inch desktop printer engineered with Zebra quality. Ideal for retail pricing, warehouse shipping, and healthcare sample tags.',
        specs: ['Resolution: 203 dpi (8 dots/mm)', 'Print Speed: 152 mm/sec (6 ips)', 'Media Width: Up to 104 mm (4.09")', 'Interfaces: USB, Ethernet, Bluetooth optional'],
      },
      {
        id: 'zebra-zt411',
        name: 'Zebra ZT411 Industrial Label Printer',
        image: '/images/ZEBRA-ZT411.jpg',
        description:
          'Heavy-duty all-metal industrial label printer with 4.3-inch full-color touch display, engineered for continuous manufacturing and logistics dispatch.',
        specs: ['Resolution: 203, 300, or 600 dpi', 'Print Speed: Up to 356 mm/sec (14 ips)', 'Display: 4.3" color touch LCD', 'Connectivity: Dual USB, Ethernet, Serial, BT 4.1, optional WiFi'],
      },
      {
        id: 'tsc-te244',
        name: 'TSC TE244 4-Inch Desktop Printer',
        image: '/images/TSC-TE244.jpg',
        description:
          'One of India’s most popular budget-friendly dual-motor desktop barcode printers, accommodating up to 300m ribbons for non-stop productivity.',
        specs: ['Resolution: 203 dpi', 'Print Speed: 127 mm/sec (5 ips)', 'Ribbon Capacity: 300 metre ribbon on 1" core', 'Processor: 400 MHz 32-bit RISC processor'],
      },
      {
        id: 'tsc-ml240',
        name: 'TSC ML240 Compact Industrial Printer',
        image: '/images/TSC-ML240.jpg',
        description:
          'Light industrial printer with streamlined footprint, whisper-quiet operation, and self-diagnostic TPH Care mechanism.',
        specs: ['Resolution: 203 dpi', 'Print Speed: 152 mm/sec (6 ips)', 'Footprint: Space-saving clamshell design', 'Memory: 64 MB SDRAM, 128 MB Flash'],
      },
      {
        id: 'tsc-mb241t',
        name: 'TSC MB241T Industrial Barcode Printer',
        image: '/images/TSC-MB241T.jpg',
        description:
          'Robust mid-range industrial printer featuring color touch screen panel and heavy-duty die-cast aluminum print mechanism.',
        specs: ['Resolution: 203 dpi', 'Speed: 203 mm/sec (8 ips)', 'Chassis: Die-cast aluminum mechanism', 'Display: 3.5" color LCD with buttons'],
      },
      {
        id: 'tsc-mh261t',
        name: 'TSC MH261T 6-Inch Wide Industrial Printer',
        image: '/images/TSC-MH261T.jpg',
        description:
          'High-performance 6-inch wide industrial printer for chemical drum labeling, pallet signs, and oversized shipping compliance labels.',
        specs: ['Print Width: 168 mm (6.61")', 'Speed: Up to 305 mm/sec (12 ips)', 'Resolution: 203 or 300 dpi', 'TPH Care and smart printhead management'],
      },
      {
        id: 'citizen-cl631',
        name: 'Citizen CL-S631 High-Resolution Printer',
        image: '/images/CITIZEN-CL631.jpg',
        description:
          'Precision 300 dpi desktop label printer with Citizen Hi-Lift metal mechanism for effortless ribbon and label roll loading.',
        specs: ['Resolution: 300 dpi for sharp barcodes & micro-text', 'Mechanism: Citizen Hi-Lift vertical clamshell', 'Emulation: Zebra ZPL and Datamax cross-compatible', 'Speed: 100 mm/sec'],
      },
      {
        id: 'citizen-s4000',
        name: 'Citizen CL-S4000 Industrial Workhorse',
        image: '/images/CITIZEN-S-4000.jpg',
        description:
          'Heavy-capacity steel industrial barcode printer built for harsh shop-floor environments with high ribbon efficiency.',
        specs: ['Heavy steel cabinet for industrial defense', 'Hi-Open vertical opening mechanism', 'Internal Ethernet 10/100 option', 'High thermal output head'],
      },
      {
        id: 'citizen-cl700',
        name: 'Citizen CL-700 Auto-Cutter Series',
        image: '/images/CITIZN-CL700.jpg',
        description:
          'Compact label and receipt printer equipped with precision rotary auto-cutter for ticket kiosks, receipts, and garment tags.',
        specs: ['Integrated rotary auto-cutter (full / partial)', 'Speed: 150 mm/sec', 'Drop-in paper loading', 'Dual interface standard'],
      },
    ],
  },

  'pos-printer': {
    slug: 'pos-printer',
    title: 'POS Receipt Printers',
    subtitle: 'High-speed thermal billing printers for retail & hospitality',
    description:
      'Fast, jam-resistant point-of-sale receipt printers from Epson, Restol, and TVS. Designed for rapid checkout counters, kitchen token printing, restaurants, supermarkets, and billing kiosks.',
    coverImage: '/images/pos-printer.jpg',
    products: [
      {
        id: 'epson-tm-m30',
        name: 'Epson TM-m30III Compact POS Printer',
        image: '/images/Epson-TM-m30III.jpg',
        description:
          'Sleek, modern 3-inch receipt printer with Bluetooth, Ethernet, and USB-C connectivity. Ideal for tablet POS and cloud billing setups.',
        specs: ['Print Speed: Up to 300 mm/sec', 'Form Factor: 3" ultra-compact cube', 'Connectivity: USB-C, Ethernet, Bluetooth, Lightning', 'Multi-OS: iOS, Android, Windows support'],
      },
      {
        id: 'epson-tm-t83',
        name: 'Epson TM-T83III Thermal Receipt Printer',
        image: '/images/Epson-TM-T83III-561.jpg',
        description:
          'The industry gold standard for retail checkout lines. Unrivalled reliability with automatic paper reduction to slash receipt paper costs.',
        specs: ['Print Speed: 200 mm/sec', 'MCBF: 60 million lines reliability', 'Auto-cutter life: 1.5 million cuts', 'Paper saving feature cuts margin waste by 30%'],
      },
      {
        id: 'restol-rtp',
        name: 'Restol RTP-82UE High-Speed Thermal Printer',
        image: '/images/RESTOL-RTP-82UE.jpg',
        description:
          'Value-oriented 80mm billing printer with dual USB + Ethernet interface, drop-in roll loading, and durable auto-cutter for busy counters.',
        specs: ['Paper Width: 80 mm', 'Print Speed: 260 mm/sec', 'Interface: USB + LAN (Ethernet)', 'Built-in buzzer for kitchen ticket alert'],
      },
      {
        id: 'restol-ls450',
        name: 'Restol LS450 Desktop POS Printer',
        image: '/images/RESTOL-LS450.jpg',
        description:
          'Compact, low-noise thermal printer for small stores, cafes, pathology labs, and parking ticket booths.',
        specs: ['Resolution: 203 dpi', 'Speed: 200 mm/sec', 'Interface: USB + Serial', 'Compatible with ESC/POS command sets'],
      },
    ],
  },

  'rfid-printer': {
    slug: 'rfid-printer',
    title: 'RFID Printers & Encoders',
    subtitle: 'Simultaneous printing and UHF RFID inlay encoding',
    description:
      'Next-generation RFID thermal printers from Zebra and TSC that print human-readable text and 2D barcodes while encoding UHF RFID smart chips in one seamless pass.',
    coverImage: '/images/rfid-printer.jpg',
    products: [
      {
        id: 'zebra-zd621r',
        name: 'Zebra ZD621R RFID Desktop Printer',
        image: '/images/ZEBRA-ZD621R.jpg',
        description:
          'Premium desktop UHF RFID printer/encoder delivering industry-leading read/write accuracy with full-color LCD touch screen.',
        specs: ['RFID: UHF EPC Gen 2 V2 / ISO 18000-6C', 'Encoding: Adaptive encoding technology eliminates pitch limits', 'Resolution: 203 or 300 dpi', 'Display: 4.3" full-color touch UI'],
      },
      {
        id: 'tsc-alpha-30r',
        name: 'TSC Alpha-30R Mobile RFID Printer',
        image: '/images/TSC-ALPHA-30R.jpg',
        description:
          'Ultra-rugged 3-inch mobile RFID printer with IP54 rating, allowing floor staff to encode and print tags directly in warehouse aisles.',
        specs: ['Form: Rugged wearable mobile printer', 'RFID: UHF inlay encoding on the go', 'Drop spec: 2.1m drop test rating', 'Battery: 3080 mAh high-capacity smart battery'],
      },
    ],
  },

  'bluetooth-printer': {
    slug: 'bluetooth-printer',
    title: 'Bluetooth Mobile Printers',
    subtitle: 'Cordless on-the-go printing for field teams and delivery',
    description:
      'Lightweight, battery-powered Bluetooth thermal printers for delivery agents, spot billing, traffic enforcement, healthcare samples, and mobile field auditing.',
    coverImage: '/images/bluetooth-printer.jpg',
    products: [
      {
        id: 'tsc-alpha-40l',
        name: 'TSC Alpha-40L Rugged Mobile Printer',
        image: '/images/TSC-ALPHA-40L.jpg',
        description:
          'Heavy-duty 4-inch mobile printer with Bluetooth 5.0 and WiFi, engineered for pallet cross-docking and direct store delivery.',
        specs: ['Media Width: 104 mm (4")', 'Drop rating: 1.8 metre MIL-STD-810G drop resistance', 'Battery: 6200 mAh swappable Li-ion', 'Pairing: NFC tap-to-pair with Android devices'],
      },
      {
        id: 'bluetooth-apps',
        name: 'Enterprise Mobile Print Solutions',
        image: '/images/BLUETOOTH-ENABLE-PRINTER-APPLICATIONS.jpg',
        description:
          'Turnkey mobile printing integration for Android and iOS enterprise apps, integrating wireless receipt and barcode printing directly from smartphone apps.',
        specs: ['Protocol: Bluetooth MFi certified, BLE', 'SDKs: Android Java/Kotlin, iOS Swift, Flutter, React Native', 'Custom template designers', 'Supports Bluetooth spot billing'],
      },
    ],
  },

  accessories: {
    slug: 'accessories',
    title: 'Printer Spare Parts & Accessories',
    subtitle: 'Original printheads, platen rollers, and rewinder motors',
    description:
      'Maximize printer uptime with genuine OEM replacement parts. BV Hardwares stocks authentic printheads, rubber platen rollers, motorized label rewinders, external roll unwinders, and printhead cleaning alcohol kits.',
    coverImage: '/images/accessories-cover.jpg',
    products: [
      {
        id: 'printhead-spares',
        name: 'Original Replacement Thermal Printheads',
        image: '/images/PRINTER-HEADER-SPARES.jpg',
        description:
          'Genuine replacement printheads for Zebra, TSC, Citizen, Sato, and Datamax thermal printers in 203 dpi, 300 dpi, and 600 dpi resolutions.',
        specs: ['100% genuine OEM quality', 'Resolutions: 203, 300, 600 dpi', 'Models: Zebra ZT411, ZD230, TSC TE244, Citizen CL-S631', 'Includes installation guidance and warranty'],
      },
      {
        id: 'external-stand',
        name: 'Heavy-Duty External Label Roll Stand',
        image: '/images/EXTERNAL-STAND.jpg',
        description:
          'External roll dispenser for desktop printers, allowing the use of large 8-inch outer diameter industrial label rolls to save roll changeover time.',
        specs: ['Material: Steel / Reinforced polymer', 'Max Roll Diameter: 250 mm (10")', 'Cores: Fits 1" and 3" cores', 'Reduces per-label purchase costs with jumbo rolls'],
      },
      {
        id: 'rewinder-motor',
        name: 'Motorized Automatic Label Rewinder',
        image: '/images/REWINDER-MOTOR.jpg',
        description:
          'Synchronized motorized batch rewinder that rolls printed labels back onto a neat spool as they exit the printer.',
        specs: ['Speed: Automatic synchronization with printer feed', 'Direction: Forward and reverse winding', 'Max Width: 120 mm', 'Universal compatibility with all printers'],
      },
      {
        id: 'cleaning-supplies',
        name: 'Cleanhead 99% Isopropyl Printhead Cleaning Solution',
        image: '/images/Cleanhead-99-Pure-Isopropyl-Rubbing-Alcohol-for-Printhead-Cleaning.jpg',
        description:
          'Ultra-pure 99% isopropyl rubbing alcohol and lint-free cleaning swabs to dissolve burnt ribbon adhesive and dust from delicate printhead micro-heaters.',
        specs: ['Purity: 99.9% Electronic Grade IPA', 'Swabs: Fiber-free lintless polyester swabs', 'Extends thermal head life by up to 40%', 'Safe on platen rollers and optical sensors'],
      },
    ],
  },

  'wired-scanner': {
    slug: 'wired-scanner',
    title: 'Wired Barcode Scanners',
    subtitle: 'High-speed 1D and 2D handheld USB scanners',
    description:
      'Reliable handheld barcode scanners for cashier desks, pharmacy billing counters, receiving docks, and production assembly lines from Honeywell, Zebra, and Datalogic.',
    coverImage: '/images/bar-code-scanner-cover.jpg',
    products: [
      {
        id: 'datalogic-qw2120',
        name: 'Datalogic QuickScan QW2120 1D Linear Imager',
        image: '/images/DATALOGIC-QW2120.jpg',
        description:
          'Ergonomic linear imager scanner with wide scan angle and sharp aiming line, excelling at capturing wide utility bills and distorted barcodes.',
        specs: ['Scan Technology: Linear Imager (1D)', 'Aiming: Sharp green/red aiming line', 'Feedback: Datalogic patented Green Spot good-read confirmation', 'Interface: USB plug & play'],
      },
      {
        id: 'honeywell-5145',
        name: 'Honeywell Eclipse MK5145 Laser Scanner',
        image: '/images/HONEYWELL-5145.jpg',
        description:
          'Proven single-line laser barcode scanner with patented CodeGate trigger technology for menu-scanning and precise individual barcode targeting.',
        specs: ['Optical Engine: 650 nm visible laser diode', 'Scan Rate: 72 scan lines per second', 'Trigger: CodeGate button targeting', 'Cable: 1.5m durable USB cable'],
      },
      {
        id: 'ds2208',
        name: 'Zebra DS2208 2D Handheld Area Imager',
        image: '/images/DS2208.jpg',
        description:
          'Affordable 1D/2D barcode imager from Zebra that effortlessly scans digital barcodes on mobile phone screens, coupons, and damaged paper labels.',
        specs: ['Decodes: 1D, 2D, QR Code, Data Matrix, PDF417', 'Screen Scanning: Yes, smartphone screens and tablets', 'Drop Spec: Designed to endure 1.5m drops to concrete', 'Stand: Hands-free Intellistand included'],
      },
      {
        id: 'ls2208',
        name: 'Zebra LS2208 Best-Selling Laser Scanner',
        image: '/images/LS2208.jpg',
        description:
          'The world’s most trusted retail 1D laser scanner, engineered for continuous all-day checkout scanning with legendary drop durability.',
        specs: ['Scan Engine: Laser 1D bi-directional', 'Scan Rate: 100 scans per second', 'Working Range: Contact up to 43 cm on 100% UPC/EAN', 'Warranty: 5-year manufacturer warranty'],
      },
      {
        id: 'cp2140',
        name: 'Cipher CP2140 2D Imager',
        image: '/images/CP2140.jpg',
        description:
          'Economic 2D scanner engineered for general retail pos, library circulation, and warehouse dispatch verification.',
        specs: ['Scan Type: 2D Imager', 'Interface: USB HID / Virtual COM', 'Barcodes: All standard 1D & 2D symbologies', 'Ergonomic lightweight grip'],
      },
    ],
  },

  'wireless-scanner': {
    slug: 'wireless-scanner',
    title: 'Wireless & Bluetooth Scanners',
    subtitle: 'Cordless freedom with extended transmission range',
    description:
      'Eliminate cable clutter and boost warehouse operator mobility. Our cordless scanners use industrial Bluetooth 4.2/5.0 to transmit scanned barcodes up to 100 metres back to base stations, computers, or tablets.',
    coverImage: '/images/wireless-and-bluetooth-scanner.jpg',
    products: [
      {
        id: 'honeywell-1472g',
        name: 'Honeywell Voyager 1472g 2D Cordless Scanner',
        image: '/images/Honeywell-1472g-2D-Wireless-Barcode-Scanner-Bluetooth-USB.jpg',
        description:
          'High-precision cordless 2D scanner designed for in-store retail environments, easily decoding poor quality and mobile coupons.',
        specs: ['Wireless: 2.4 GHz Bluetooth v4.2 with up to 30m line-of-sight', 'Battery: 2400 mAh Li-ion (Up to 50,000 scans per charge)', 'Toughness: 30 drops from 1.8m to concrete', 'Drop-in charging cradle included'],
      },
      {
        id: 'datalogic-qbt2131',
        name: 'Datalogic QuickScan QBT2131 Bluetooth Scanner',
        image: '/images/Datalogic-QBT2131-BT-2D-Wireless-Scanner.jpg',
        description:
          'Long-range cordless linear imager scanner capable of connecting directly to iOS and Android tablets without requiring a separate base cradle.',
        specs: ['Radio: Bluetooth Wireless 3.0 certified Class 2', 'Range: Up to 25m from base or tablet', 'Battery: User-replaceable Li-ion battery', 'Datalogic Green Spot projection on target'],
      },
      {
        id: 'bluetooth-scanner',
        name: 'Pocket Bluetooth Mini 2D Barcode Scanner',
        image: '/images/blueetooth-scanner-1.jpg',
        description:
          'Ultra-compact pocket scanner designed for field stock-taking, library indexing, and delivery logistics, syncing directly to smartphones.',
        specs: ['Dimensions: Fits inside pocket', 'Pairing: iOS, Android, Windows via Bluetooth HID/SPP', 'Memory: Offline storage for up to 10,000 barcodes', 'Rechargeable USB-C port'],
      },
      {
        id: 'zebra-li4278',
        name: 'Zebra LI4278 Cordless General-Purpose Scanner',
        image: '/images/ZEBRA-LI4278.jpg',
        description:
          'High-speed cordless 1D scanner that lets workers scan faster and farther, tolerating dusty warehouse environments and harsh drops.',
        specs: ['Bluetooth: Class 1 v2.1 with EDR (Up to 100m range)', 'Scans per charge: Up to 57,000 scans', 'Industrial durability: Survives 1.8m drops', 'Superior motion tolerance'],
      },
      {
        id: 'zebra-ds6878',
        name: 'Zebra DS6878-SR Handheld Cordless Imager',
        image: '/images/Zebra-DS6878-SR-Symbol-Handheld-Wireless.jpg',
        description:
          'Comprehensive 2D imager capturing barcodes, signatures, and photographic documents with enterprise data security.',
        specs: ['Wireless Range: Up to 100m from base', 'Symbologies: 1D, 2D, PDF417, Postal codes', 'Charging: Contactless inductive charging cradle option', 'IP43 sealing'],
      },
    ],
  },

  'tabletop-scanner': {
    slug: 'tabletop-scanner',
    title: 'Tabletop Presentation Scanners',
    subtitle: 'Hands-free omnidirectional scanning for busy cash counters',
    description:
      'Hands-free presentation barcode scanners designed for high-density supermarket checkout lines, airport boarding gates, and pharmacy counters. Cashiers simply swipe items across the wide window.',
    coverImage: '/images/bar-code-scanner-cover.jpg',
    products: [
      {
        id: 'honeywell-orbit',
        name: 'Honeywell Orbit HF680 2D Hands-Free Scanner',
        image: '/images/Honeywell-Orbit-HF680-2D-Wired-Hands-Free-Area-Imaging-Barcode-Scanner-USBRS232.jpg',
        description:
          'Modern hybrid area-imaging scanner engineered with revolutionary white illumination to minimize eye glare while reading complex digital codes quickly.',
        specs: ['Optical: Area Imager (1280 x 800 pixels)', 'Motion Tolerance: Up to 2.5 m/s for rapid item sweep', 'Tilt Angle: Adjustable head ±30°', 'Interface: USB and RS-232 dual interface'],
      },
      {
        id: 'tabletop-scanner-1',
        name: 'Omnidirectional Desktop Cashier Scanner',
        image: '/images/Tabletop-Scanner.jpg',
        description:
          'High-speed presentation 2D imager with wide reading zone for rapid grocery checkout without item orientation alignment.',
        specs: ['Swipe Speed: Over 2 metres/second sweep rate', 'Reading Window: Scratch-resistant hardened glass', 'Automatic IR sleep and wake-up sensor', 'Beep and LED indication'],
      },
      {
        id: 'restol-table-top',
        name: 'Restol Fixed Presentation Barcode Scanner',
        image: '/images/table-top-scanner-1.jpg',
        description:
          'Cost-effective desktop barcode scanner designed for retail boutique billing desks, library checkout, and courier drop stations.',
        specs: ['Field of view: Wide omnidirectional grid', 'Fast screen reading for digital payment QR codes', 'Interface: USB interface plug-and-play', 'Compact footprint'],
      },
    ],
  },

  'hht-mobile': {
    slug: 'hht-mobile',
    title: 'Handheld Mobile Terminals (HHT)',
    subtitle: 'Rugged Android enterprise computers for warehouse management',
    description:
      'Industrial Android mobile computers from Zebra, Urovo, Bluebird, Chainway, and Newland equipped with integrated 2D barcode scan engines, 4G LTE, robust battery packs, and IP67 dust/water resistance for 3PL warehouses and distribution hubs.',
    coverImage: '/images/hht-mobile-device.jpg',
    products: [
      {
        id: 'zebra-tc21',
        name: 'Zebra TC21 Touch Mobile Computer',
        image: '/images/Zebra-TC21.jpg',
        description:
          'Cost-effective Android enterprise touch computer built for small and mid-sized field operations, inventory counts, and order dispatch.',
        specs: ['OS: Android with Zebra Mobility DNA', 'Display: 5.0" HD (1280 x 720) capacitive touch', 'Scanner: SE4710 1D/2D enterprise imager', 'Connectivity: WiFi, Bluetooth 5.0, NFC'],
      },
      {
        id: 'urovo-dt50s',
        name: 'Urovo DT50S Enterprise Mobile Computer',
        image: '/images/Urovo-DT50S.jpg',
        description:
          'High-speed Octa-core rugged mobile computer with bezel-less 5.7-inch display and rapid quick-charge battery architecture.',
        specs: ['Processor: Octa-core 2.45 GHz high-speed CPU', 'Display: 5.7" IPS bezel-less touch screen', 'Drop & Ingress: IP67 waterproof & 1.5m drop proof', 'Battery: 4300 mAh with 3-hour fast charge'],
      },
      {
        id: 'bluebird-s10-s20',
        name: 'Bluebird S10 / S20 Industrial Handheld',
        image: '/images/Bluebird-S10-S20.jpg',
        description:
          'Ultra-rugged industrial computer with physical numeric keypad option, designed for cold storage warehouses and heavy industrial plants.',
        specs: ['Keypad: Touch screen plus physical tactile numeric keypad', 'Battery: Removable hot-swappable 5000 mAh battery', 'Industrial grade drop and vibration resistance', 'Long-range barcode scanning option'],
      },
      {
        id: 'chainway-c66',
        name: 'Chainway C66 Rugged Handheld Terminal',
        image: '/images/Chainway-C66-Mobile-Computer-Android-11-13.jpg',
        description:
          'Powerful Android 11/13 terminal with optional trigger handle grip, high-sensitivity 2D scanner, and integrated UHF RFID capabilities.',
        specs: ['OS: Android 11 / Android 13', 'Processor: Qualcomm 2.0 GHz Octa-core', 'Pistol Grip: Ergonomic quick-release scan handle', 'Sealing: IP65 and MIL-STD-810G certified'],
      },
      {
        id: 'newland-mt90',
        name: 'Newland MT90 Orca Mobile Computer',
        image: '/images/Newland-MT90.jpg',
        description:
          'User-friendly consumer smartphone styling combined with enterprise-grade scanning reliability and all-shift battery endurance.',
        specs: ['Display: 5" Gorilla Glass touchscreen', 'Weight: Lightweight 260g ergonomic design', 'Battery: 4500 mAh battery for 10+ hour shifts', '4G LTE dual SIM capability'],
      },
    ],
  },

  'rfid-device': {
    slug: 'rfid-device',
    title: 'RFID Readers & Devices',
    subtitle: 'Fixed UHF readers, portal antennas, and RFID sleds',
    description:
      'Automate tracking across warehouse dock doors, toll points, and retail store exits. We provide high-gain fixed UHF RFID readers, circular polarized antennas, and snap-on sleds that transform standard mobile devices into ultra-fast RFID counters.',
    coverImage: '/images/rfid-device.jpg',
    products: [
      {
        id: 'ura4-fixed-rfid',
        name: 'Chainway URA4 4-Port Fixed RFID Reader',
        image: '/images/URA4-Fixed-RFID-Reader-Android-9.jpg',
        description:
          'Android 9.0 powered 4-port fixed UHF RFID reader built on the Impinj Indy R2000 chip for dock door portals and assembly line conveyors.',
        specs: ['Chipset: Impinj Indy R2000 / E710', 'Antenna Ports: 4 TNC antenna ports', 'Read Rate: Over 900 tags / second', 'OS & Comm: Android 9.0, Ethernet, RS-232, GPIO relay ports'],
      },
      {
        id: 'rfid-antenna',
        name: 'ANS960 Circular Polarized RFID Panel Antenna',
        image: '/images/RFID-Antenna-ANS960.jpg',
        description:
          '9 dBi high-gain circular polarized UHF antenna providing uniform tag detection regardless of RFID tag orientation.',
        specs: ['Frequency: 865–868 MHz (India & EU) / 902–928 MHz', 'Gain: 9.0 dBi circular polarized', 'Ingress: IP67 weatherproof outdoor radome', 'Mounting: Heavy-duty adjustable bracket included'],
      },
      {
        id: 'chainway-sr160',
        name: 'Chainway SR160 UHF RFID & 2D Sled Scanner',
        image: '/images/CHAINWAY-SR160-UHF-RFID-1D-2D-Scanner.jpg',
        description:
          'Versatile pistol-grip scanner that reads both UHF RFID tags from up to 8m distance and standard 1D/2D optical barcodes simultaneously.',
        specs: ['RFID Read Distance: 5m to 8m range', 'Barcode: Zebra 2D optical imager built-in', 'Connectivity: Bluetooth BLE & USB Type-C', 'Battery: 6000 mAh internal power reserve'],
      },
      {
        id: 'bluebird-rfr901',
        name: 'Bluebird RFR901 Enterprise RFID Sled',
        image: '/images/Bluebird-The-RFR901-for-S50.jpg',
        description:
          'Ultra-fast UHF RFID sled that snaps directly onto Bluebird EF550 and S50 mobile computers, reading more than 1300 tags per second.',
        specs: ['Tag Read Speed: 1300+ tags/sec scan capability', 'Range: Up to 10 metres read distance', 'Drop resistance: 1.5m drops to concrete', 'Physical Smart connector interface'],
      },
    ],
  },

  software: {
    slug: 'software',
    title: 'Barcode & Label Design Software',
    subtitle: 'Authorized reseller of BarTender and NiceLabel software suites',
    description:
      'Hardware is only half the equation. BV Hardwares provides certified licenses, template development, ERP integration, and staff training for industry standard barcode design and printing automation platforms.',
    coverImage: '/images/software-and-apps-cover.jpg',
    products: [
      {
        id: 'bartender',
        name: 'Seagull Scientific BarTender Suite',
        image: '/images/Bartender-Professional-Barcode-Software.jpg',
        description:
          'The world’s most trusted label design and printing automation software. Connect your SAP, Oracle, SQL database or Excel spreadsheets directly to label printers.',
        specs: ['Editions: Starter, Professional, Automation, Enterprise', 'Database Connectors: Excel, Access, SQL Server, Oracle, CSV', 'Security: Centralized user permissions and audit trail', 'RFID: Full EPC Gen 2 encoding template design'],
      },
      {
        id: 'nicelabel',
        name: 'Loftware NiceLabel Label Management System',
        image: '/images/Software-Mobile-Applications.jpg',
        description:
          'Modern cloud and on-premise label management platform that standardizes labeling across multiple factory branches and vendor ecosystems.',
        specs: ['Compliance: FDA 21 CFR Part 11, GS1 standard formats', 'Browser-based web printing client without local installation', 'Built-in graphical label design studio with dynamic forms', 'Cloud LMS edition available'],
      },
      {
        id: 'mobile-apps',
        name: 'Custom Warehouse APK & Mobile Software',
        image: '/images/CUSTOMISE-APK-MOBILE-SOLUTIONS.jpg',
        description:
          'Custom Android applications developed by BV Hardwares for barcode stock auditing, physical asset verification, courier dispatch, and pallet tagging.',
        specs: ['Customized to your exact business workflow', 'Live sync with Tally, SAP, Marg, Busy, custom ERPs', 'Offline data caching with auto-upload', 'User-friendly interface for floor operators'],
      },
    ],
  },

  service: {
    slug: 'service',
    title: 'Repair & Maintenance Services (AMC)',
    subtitle: 'Fast on-site repairs, Annual Maintenance Contracts, and calibration',
    description:
      'Prevent costly production downtime. BV Hardwares maintains a dedicated service centre in Bengaluru staffed by certified hardware technicians providing on-site repair, Annual Maintenance Contracts (AMC), and genuine spare part replacements.',
    coverImage: '/images/maintenance-cover.jpg',
    products: [
      {
        id: 'printer-service',
        name: 'On-Site Barcode Printer Repair & Tuning',
        image: '/images/PRINTER-SCANNER-job-work.jpg',
        description:
          'Rapid diagnostics, printhead alignment, timing belt replacement, sensor calibration, and motherboard repair for all major barcode printer models.',
        specs: ['Response Time: Same-day / 4-hour SLA in Bengaluru', 'Genuine OEM spares with 90-day warranty', 'Brands: Zebra, TSC, Citizen, Honeywell, Sato, TVS', 'Standby standby printer support for urgent operations'],
      },
      {
        id: 'amc',
        name: 'Annual Maintenance Contracts (Comprehensive & Non-Comprehensive AMC)',
        image: '/images/service-and-maintenance.jpg',
        description:
          'Tailored annual service agreements offering scheduled preventive maintenance visits, priority breakdown response, and discounted spare parts.',
        specs: ['Coverage: Barcode printers, scanners, HHT mobile computers', 'Periodic visits: Quarterly preventive cleaning and calibration', 'Unlimited breakdown repair visits', 'Detailed monthly equipment health reports'],
      },
    ],
  },
};

export const allCategorySlugs = Object.keys(productCategories);
