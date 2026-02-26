import AboutHighlight from '@/components/home/about-highlight';
import HeroSection from '@/components/home/hero-section';
import MissionSection from '@/components/home/mission-section';
import ServicesHighlight from '@/components/home/services-highlight';
import OurValues from '@/components/home/our-values';
import CoverageArea from '@/components/home/coverage-area';
import WhoWeAreSection from '@/components/home/who-we-are';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WhoWeAreSection />
      <AboutHighlight />
      <OurValues />
      <ServicesHighlight />
      <CoverageArea />
    </>
  );
}
