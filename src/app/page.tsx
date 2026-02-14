import AboutHighlight from '@/components/home/about-highlight';
import HeroSection from '@/components/home/hero-section';
import MissionSection from '@/components/home/mission-section';
import ServicesHighlight from '@/components/home/services-highlight';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <AboutHighlight />
      <ServicesHighlight />
      <Testimonials />
    </>
  );
}
