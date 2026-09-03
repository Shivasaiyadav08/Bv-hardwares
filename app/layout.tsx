import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import SmoothScroll from '@/components/layout/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bvhardwares.in'),
  title: {
    default: 'BV Hardwares | Industrial Barcode, Labeling & Automation Hardware',
    template: '%s | BV Hardwares',
  },
  description:
    'Powering high-uptime industrial operations since 1983. Bengaluru leading provider of Zebra, Honeywell, Citizen & TSC thermal barcode printers, 2D wireless scanners, RFID encoders, custom label media, and BarTender integration.',
  keywords: [
    'Barcode Printers Bengaluru',
    'Zebra Printer Dealer Bangalore',
    'TSC Industrial Label Printer',
    '2D Barcode Scanner',
    'RFID Printers India',
    'Thermal POS Receipt Rolls',
    'Thermal Transfer Ribbon Wax Resin',
    'BarTender Enterprise Software Bangalore',
    'Industrial Labeling Solutions Karnataka',
    'BV Hardwares Seshadripuram',
  ],
  authors: [{ name: 'BV Hardwares' }],
  creator: 'BV Hardwares',
  publisher: 'BV Hardwares',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BV Hardwares | Industrial Barcode, Labeling & Automation Systems',
    description:
      'Authorized supply and certified engineering partner for Zebra, Honeywell, Citizen, TVS, and TSC in Bengaluru, Karnataka.',
    url: 'https://bvhardwares.in',
    siteName: 'BV Hardwares',
    images: [
      {
        url: '/images/bv-banner-1.jpg',
        width: 1200,
        height: 630,
        alt: 'BV Hardwares Industrial Automation Hardware',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BV Hardwares | Industrial Barcode & Labeling Hardware',
    description:
      'Premier enterprise barcode, RFID, and automated printing hardware provider based in Seshadripuram, Bengaluru.',
    images: ['/images/bv-banner-1.jpg'],
  },
  icons: {
    icon: '/images/cropped-bvhardware-favicon.jpg',
    apple: '/images/cropped-bvhardware-favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased min-h-screen flex flex-col bg-[#fafafc] text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
