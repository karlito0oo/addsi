import WastoHeroSection from '../sections/wasto/WastoHeroSection';
import WastoAchievementsSection from '../sections/wasto/WastoAchievementsSection';
import WastoProductsSection from '../sections/wasto/WastoProductsSection';
import FluteSheetSection from '../sections/wasto/FluteSheetSection';
import BasicEssentialsSection from '../sections/wasto/BasicEssentialsSection';

export default function WastoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-12">
      <WastoHeroSection />
      <WastoAchievementsSection />
      <WastoProductsSection />
      <FluteSheetSection />
      <BasicEssentialsSection />
      {/* Add more Wasto sections here as needed */}
    </div>
  );
} 