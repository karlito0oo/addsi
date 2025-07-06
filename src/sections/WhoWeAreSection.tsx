import { motion } from 'framer-motion';
import { usePublicData } from '../contexts/PublicDataContext';
import { STORAGE_URL } from '../config';

export default function WhoWeAreSection() {
  const { data, loading, error } = usePublicData();
  const whoWeAreSettings = data.settings.who_we_are || {};

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
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full relative px-4 sm:px-0 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto pt-16 pb-0 flex flex-col items-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center text-center relative w-full"
        >
          <div className="flex flex-col items-center text-center relative w-full">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full flex items-center mb-6 relative"
            >
              <div className="flex-1 border-t-2 border-emerald-600/30" />
              <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-emerald-900 relative text-center">
                Who We Are
              </h2>
              <div className="flex-1 border-t-2 border-emerald-600/30" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-emerald-900 mb-4 font-medium text-center"
          >
            {whoWeAreSettings.who_we_are_subtitle}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg text-emerald-800 mb-8 max-w-3xl text-center"
          >
            {whoWeAreSettings.who_we_are_description}
          </motion.div>
        </motion.div>
      </div>
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
            src={`${STORAGE_URL}/${whoWeAreSettings.who_we_are_image}`}
            alt="Who We Are" 
            className="w-full object-cover rounded-xl" 
            style={{minHeight:'220px', maxHeight:'320px'}} 
          />
        </div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          src="/images/shortLogo.png" 
          alt="Alpha Logo" 
          className="absolute bottom-4 right-4 h-12 w-auto" 
        />
      </motion.div>
    </motion.section>
  );
} 