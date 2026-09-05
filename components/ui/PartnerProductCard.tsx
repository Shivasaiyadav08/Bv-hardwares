import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PartnerProduct } from '@/lib/data/partners';
import { pricingRequestHref } from '@/lib/site';

interface PartnerProductCardProps {
  product: PartnerProduct;
}

export default function PartnerProductCard({ product }: PartnerProductCardProps) {
  const detailHref = `/partners/hprt/products/${product.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-border/90 bg-card shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#f58220]/35 hover:shadow-[0_28px_70px_-38px_rgba(7,17,38,0.42)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#f58220]/55 to-brand-blue/35 opacity-70" />

      <Link href={detailHref} className="relative block aspect-[4/3] overflow-hidden border-b border-border/80 bg-[linear-gradient(145deg,#ffffff_0%,#f7f9fd_100%)] dark:bg-slate-50">
        <Image
          src={product.image}
          alt={`${product.name} HPRT product`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.045] sm:p-7"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#d86c0e] dark:text-orange-300">
          HPRT · {product.category}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug tracking-[-0.025em] text-foreground">
          <Link href={detailHref} className="transition-colors hover:text-brand-blue dark:hover:text-brand-blue-light">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.summary}</p>

        {product.specs.length > 0 && (
          <dl className="mt-4 grid gap-2 text-xs">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={`${product.id}-${spec.label}`} className="flex items-start justify-between gap-4 border-t border-border/70 pt-2">
                <dt className="font-semibold text-muted-foreground">{spec.label}</dt>
                <dd className="text-right font-semibold text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm font-bold">
          <Link href={detailHref} className="inline-flex items-center gap-1.5 text-brand-blue transition-colors hover:text-brand-blue-strong dark:text-brand-blue-light">
            View details <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link href={pricingRequestHref} className="inline-flex items-center gap-1.5 text-brand-orange transition-colors hover:text-brand-orange-strong">
            Get pricing <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
