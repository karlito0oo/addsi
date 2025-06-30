import WastoHeroSection from '../sections/wasto/WastoHeroSection';
import WastoAchievementsSection from '../sections/wasto/WastoAchievementsSection';

export default function WastoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-12">
      <WastoHeroSection />
      <WastoAchievementsSection />
      {/* Add more Wasto sections here as needed */}
    </div>
  );
} 