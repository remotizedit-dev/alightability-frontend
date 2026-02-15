import AboutHighlight from '@/components/home/about-highlight';
import HeroSection from '@/components/home/hero-section';
import MissionSection from '@/components/home/mission-section';
import ServicesHighlight from '@/components/home/services-highlight';
import OurValues from '@/components/home/our-values';
import CoverageArea from '@/components/home/coverage-area';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <AboutHighlight />
      <OurValues />
      <ServicesHighlight />
      <CoverageArea />
    </>
  );
}
