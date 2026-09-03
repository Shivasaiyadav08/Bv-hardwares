export interface BrandItem {
  name: string;
  image: string;
  category?: string;
}

export const brandLogos: BrandItem[] = [
  { name: 'Zebra Technologies', image: '/images/zebra.png', category: 'OEM Partner' },
  { name: 'Honeywell', image: '/images/honeywell.png', category: 'OEM Partner' },
  { name: 'SATO', image: '/images/sato-logo.png', category: 'OEM Partner' },
  { name: 'TVS Electronics', image: '/images/tvs-logo.png', category: 'OEM Partner' },
  { name: 'Urovo', image: '/images/urovo.png', category: 'OEM Partner' },
  { name: 'Seuic Auto-ID', image: '/images/seuic-logo.png', category: 'OEM Partner' },
  { name: 'SMI Coated Products', image: '/images/smi-logo.png', category: 'OEM Partner' },
  { name: 'Zenpert Printers', image: '/images/zenpert.png', category: 'OEM Partner' },
  { name: 'UPM Raflatac', image: '/images/upm.png', category: 'OEM Partner' },
  { name: 'Datalogic', image: '/images/DATALOGNIC.jpg', category: 'OEM Partner' },
];

export const clientLogos: BrandItem[] = [
  { name: 'Flipkart', image: '/images/c1.jpg', category: 'E-Commerce Logistics' },
  { name: 'Zepto', image: '/images/c2.jpg', category: 'Quick Commerce' },
  { name: 'Swiggy', image: '/images/c3.jpg', category: 'Food Delivery & POS' },
  { name: 'DTDC Express', image: '/images/c4.jpg', category: 'Courier & Warehousing' },
  { name: 'India Post', image: '/images/c5.jpg', category: 'Postal & Parcel Network' },
  { name: 'Govt. of Karnataka', image: '/images/c6.png', category: 'Government & Public Sector' },
  { name: 'Hansol Paper', image: '/images/client1.png', category: 'Thermal Media Manufacturing' },
  { name: 'Avery Dennison', image: '/images/client2.png', category: 'Materials & Label Science' },
  { name: 'Mitsubishi HiTec Paper', image: '/images/client3.png', category: 'Specialty Thermal Substrates' },
];
