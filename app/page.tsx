import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import ProductsGrid from '@/components/sections/ProductsGrid';
import IndustriesServed from '@/components/sections/IndustriesServed';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ProductsGrid />
      <IndustriesServed />
      <WhyChooseUs />
      <LogoMarquee />
      <CTASection />
    </>
  );
}
