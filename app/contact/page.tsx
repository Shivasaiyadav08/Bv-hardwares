import { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/ui/ContactForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Engineering Desk | BV Hardwares Bengaluru',
  description:
    'Reach BV Hardwares at our Seshadripuram, Bengaluru facility. Phone: +91 99233 11090, Email: info@bvhardwares.in. Inquire about industrial printers, scanner fleets, and custom label slitting.',
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Bengaluru Facility',
      line1: 'No 17, Ground Floor, 1st Cross,',
      line2: 'Anjaneya Temple Street, Seshadripuram,',
      line3: 'Bengaluru – 560020, Karnataka',
      actionLabel: 'Open in Google Maps',
      actionUrl:
        'https://www.google.com/maps/search/?api=1&query=No+17+Ground+Floor+1st+Cross+Anjaneya+Temple+Street+Seshadripuram+Bengaluru+560020',
      accent: 'text-amber-600',
    },
    {
      icon: Phone,
      title: 'Telephone & Sales',
      line1: '+91 99233 11090',
      line2: 'Monday to Saturday',
      line3: '9:30 AM – 7:00 PM IST',
      actionLabel: 'Call Desk Directly',
      actionUrl: 'tel:+919923311090',
      accent: 'text-amber-600',
    },
    {
      icon: Mail,
      title: 'Corporate Email',
      line1: 'info@bvhardwares.in',
      line2: 'For RFQs, AMC contracts,',
      line3: 'and corporate billing inquiries',
      actionLabel: 'Send Email',
      actionUrl: 'mailto:info@bvhardwares.in',
      accent: 'text-cyan-700',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Desk',
      line1: '+91 99233 11090',
      line2: 'Product datasheets, sample tests',
      line3: '& rapid price estimates',
      actionLabel: 'Message on WhatsApp',
      actionUrl: 'https://wa.me/919923311090',
      accent: 'text-cyan-700',
    },
  ];

  return (
    <>
      <PageHero
        title="Connect With Our Engineering Desk"
        subtitle="Consult directly with our specialists for hardware configurations, barcode scanner testing, and custom media quotations."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-[#fafafc] relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 laser-grid opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 4 Contact Channel Cards — 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-20">
            {contactDetails.map((detail, idx) => (
              <ScrollReveal key={detail.title} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between group">
                  <div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 ${detail.accent} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <detail.icon size={20} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 font-display mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug break-all">
                      {detail.line1}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{detail.line2}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{detail.line3}</p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100">
                    <a
                      href={detail.actionUrl}
                      target={detail.actionUrl.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <span>{detail.actionLabel}</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form & Facility Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Facility Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <ScrollReveal delay={0.15}>
                <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 bg-white border border-slate-200/90 shadow-sm">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 sm:mb-4 max-w-full">
                    <Sparkles size={11} className="flex-shrink-0" />
                    <span>Hardware Demonstration Hub</span>
                  </div>

                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 font-display mb-3 sm:mb-4">
                    Visit Our Seshadripuram Facility
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    Our Bengaluru facility houses an active hardware testing lab, printer demonstration center, and custom label inventory. We welcome operations leaders and engineers for live machine trials with their actual label materials.
                  </p>

                  <div className="space-y-3 text-xs font-mono text-slate-600 pb-5 sm:pb-6 border-b border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <Clock size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Hours:</strong> Mon – Sat: 9:30 AM to 7:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Landmark:</strong> Near Anjaneya Temple, Seshadripuram</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck size={14} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Demo:</strong> Zebra, Honeywell, TSC Live Printing</span>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 h-48 sm:h-64 relative bg-slate-100">
                    <iframe
                      title="BV Hardwares Bengaluru Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.643329061482!2d77.57467617490074!3d12.994646787322971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163c467a8ec9%3A0xe54d3509b5a88c7f!2sSeshadripuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709440000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
