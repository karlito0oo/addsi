import HeroSection from '../sections/HeroSection';
import WhoWeAreSection from '../sections/WhoWeAreSection';
import MissionVisionSection from '../sections/MissionVisionSection';
import OurTeamSection from '../sections/OurTeamSection';
import PartnersAffiliationsSection from '../sections/PartnersAffiliationsSection';
import CallToActionSection from '../sections/CallToActionSection';
import BackToTopButton from '../sections/BackToTopButton';
import SectionDivider from '../sections/SectionDivider';
import AlphaDDSINewNormSection from '../sections/AlphaDDSINewNormSection';
import OurServicesSection from '../sections/OurServicesSection';
import { useState, useEffect } from 'react';

export default function AboutAlpha() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <HeroSection />
      <SectionDivider />
      <WhoWeAreSection />
      <SectionDivider />
      <MissionVisionSection />
      <SectionDivider />
      <OurTeamSection />
      <SectionDivider />
      <PartnersAffiliationsSection />
      <SectionDivider />
      <AlphaDDSINewNormSection />
      <OurServicesSection />
      <CallToActionSection />
      <BackToTopButton show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
} 