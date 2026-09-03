import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import ProductsGrid from '@/components/sections/ProductsGrid';
import StatsCounter from '@/components/sections/StatsCounter';
import IndustriesServed from '@/components/sections/IndustriesServed';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Products We Offer */}
      <ProductsGrid />

      {/* 4. Animated Stat Counters */}
      <StatsCounter />

      {/* 5. Industries We Serve */}
      <IndustriesServed />

      {/* 6. What Makes Us Different */}
      <WhyChooseUs />

      {/* 7. Testimonials Carousel */}
      <Testimonials />

      {/* 8. Brand & Client Logo Marquee */}
      <LogoMarquee />

      {/* 9. CTA Footer Banner */}
      <CTASection />
    </>
  );
}
