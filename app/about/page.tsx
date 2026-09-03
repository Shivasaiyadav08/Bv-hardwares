import { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import StatsCounter from '@/components/sections/StatsCounter';
import AboutTimeline from '@/components/sections/AboutTimeline';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mission, vision, values } from '@/lib/data/about';
import { Shield, Star, Handshake, Lightbulb, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Heritage & Mission | BV Hardwares Bengaluru',
  description:
    'Founded in 1983 in Seshadripuram, Bengaluru. Discover BV Hardwares history, mission, leadership, and four decades of industrial automatic identification excellence.',
};

export default function AboutPage() {
  const valueIcons: Record<string, typeof Shield> = {
    Shield,
    Star,
    Handshake,
    Lightbulb,
  };

  return (
    <>
      <PageHero
        title="Engineering Precision Since 1983"
        subtitle="Four decades of automatic identification leadership, certified OEM hardware alliances, and uncompromising customer support in Bengaluru."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">

            {/* Mission */}
            <ScrollReveal direction="left">
              <div className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-50 border border-amber-500/30 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-4 sm:mb-6">
                    <Target size={24} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-amber-700 block mb-1 sm:mb-2">
                    Core Mandate
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight font-display mb-3 sm:mb-5">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                    {mission}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] sm:text-xs font-mono text-slate-500 flex items-center gap-2 flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>Authorized OEM hardware & certified post-sales uptime guarantee</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.1} direction="right">
              <div className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-50 border border-cyan-500/30 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 mb-4 sm:mb-6">
                    <Eye size={24} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 block mb-1 sm:mb-2">
                    Future Horizon
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight font-display mb-3 sm:mb-5">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                    {vision}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] sm:text-xs font-mono text-slate-500 flex items-center gap-2 flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                  <span>Empowering digital transformation through automated data capture</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#fafafc] border-b border-slate-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-amber-700 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 sm:mb-4">
                <span>Foundational Principles</span>
              </div>
              <h2 className="text-h2 font-extrabold text-slate-950 tracking-tight leading-tight font-display">
                The Values That Drive Our Operations
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Ethical standards and operational rigor guiding every interaction with our enterprise clients, brand associates, and technicians.
              </p>
            </ScrollReveal>
          </div>

          {/* 2 cols mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {values.map((val, idx) => {
              const IconComp = valueIcons[val.iconName] || Shield;
              return (
                <ScrollReveal key={val.title} delay={idx * 0.08}>
                  <div className="h-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 bg-white border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-all duration-300">
                        <IconComp size={18} />
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 font-display mb-1.5 sm:mb-2.5 group-hover:text-amber-600 transition-colors leading-tight">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                        {val.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[9px] sm:text-[11px] font-mono text-slate-400 hidden sm:block">
                      Standard Operating Procedure
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <AboutTimeline />
      <StatsCounter />
      <LogoMarquee />
      <CTASection />
    </>
  );
}
