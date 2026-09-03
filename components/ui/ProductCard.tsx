import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappEnquiry = `https://wa.me/919923311090?text=${encodeURIComponent(
    `Hello BV Hardwares team, I would like to inquire about specifications and pricing for the ${product.name}.`
  )}`;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 hover:border-amber-500/50 overflow-hidden shadow-sm hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex-1">
      {/* Product Image Canvas */}
      <div className="relative h-64 sm:h-72 w-full bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        <div className="absolute top-3 right-3 bg-white shadow-sm border border-amber-500/30 text-amber-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
          <ShieldCheck size={12} className="text-amber-500" />
          <span>OEM Verified</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 sm:p-7 justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors leading-snug mb-2.5">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
            {product.description}
          </p>

          {/* Specs List */}
          {product.specs && product.specs.length > 0 && (
            <div className="mb-6 pt-4 border-t border-slate-100 space-y-2">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Technical Highlights
              </p>
              {product.specs.slice(0, 3).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 size={13} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{spec}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Triggers */}
        <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 px-3 py-3 rounded-xl transition-all shadow-sm font-display"
          >
            <span>Request Quote</span>
            <ArrowRight size={13} />
          </Link>
          <a
            href={whatsappEnquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-3 rounded-xl transition-all font-display"
          >
            <MessageSquare size={13} className="text-cyan-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
