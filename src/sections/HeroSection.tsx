import { motion } from 'framer-motion';
import { usePublicData } from '../contexts/PublicDataContext';
import { STORAGE_URL } from '../config';

export default function HeroSection() {
  const { data, loading, error } = usePublicData();
  const heroSettings = data.settings.hero || {};

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="w-full relative px-4 sm:px-0 overflow-hidden pt-12">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto pt-16 pb-0 flex flex-col items-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img src="/images/shortLogo.png" alt="Alpha Logo" className="h-40 w-auto mb-6 mx-auto drop-shadow-md" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-green-800 uppercase mb-2 text-center"
        >
          ALPHA
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-green-800 font-semibold text-lg tracking-wide uppercase mb-8 text-center"
        >
          Distinct Development Solutions Inc.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full flex flex-col items-center mt-12"
        >
          <div className="border-t border-green-800 w-40 mb-4" />
          <div className="text-center text-black font-bold text-base leading-tight">
            {heroSettings.hero_tagline || 'Your Regenerative Sustainability Partner'}
          </div>
        </motion.div>
      </div>

      {/* Image Container - Separate from content container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative w-full max-w-6xl mx-auto mt-4 mb-0 flex justify-center px-4 sm:px-6"
      >
        <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white p-2">
          <motion.img 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            src={`${STORAGE_URL}/${heroSettings.hero_image || 'settings/hero-section-image.webp'}`}
            alt="Hero Section" 
            className="w-full object-cover rounded-xl" 
            style={{height:'280px'}} 
          />
        </div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          src="/images/shortLogo.png" 
          alt="Alpha Logo" 
          className="absolute bottom-8 right-12 h-12 w-auto" 
        />
      </motion.div>
    </section>
  );
} 