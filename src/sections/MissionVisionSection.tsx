import { motion } from 'framer-motion';
import { usePublicData } from '../contexts/PublicDataContext';
import { STORAGE_URL } from '../config';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function MissionVisionSection() {
  const { data, loading, error } = usePublicData();
  const missionVisionSettings = data.settings.mission_vision || {};

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500"></div>
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
    <section className="w-full relative px-4 sm:px-0 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #92400e 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-5xl mx-auto pt-12 pb-0 flex flex-col items-center relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center text-center relative w-full"
        >
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex items-center mb-6 relative"
          >
            <div className="flex-1 border-t-2 border-amber-600/30" />
            <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-amber-900 relative text-center">
              Mission and Vision
            </h2>
            <div className="flex-1 border-t-2 border-amber-600/30" />
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-8 text-center md:text-left w-full justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-80 h-64 overflow-hidden rounded-2xl shadow-xl bg-white p-2"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={`${STORAGE_URL}/${missionVisionSettings.mission_vision_image}`}
              alt="Mission and Vision" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-gray-800 text-lg space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100"
            >
              <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: missionVisionSettings.mission_vision_description }} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.img 
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.9, rotate: 0 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src="/images/shortLogo.png" 
        alt="Alpha Logo" 
        className="absolute bottom-4 right-4 h-12 w-auto"
      />
    </section>
  );
} 