import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function MissionVisionSection() {
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
              src="/images/mission-vision-img.png" 
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
              <div className="mb-4">
                Our mission is to be a leader in creating <span className="font-bold text-amber-700">"PRO-POORTUNITIES"</span> — opportunities that uplift and support underprivileged and marginalized communities
              </div>
              <div>
                ADDSI strive to make a lasting and positive impact on the lives of our people, fostering a culture of inclusivity, growth, and social responsibility. Together, we aim to build a brighter future for all, driven by innovation, compassion, and the shared values that define us as a nation
              </div>
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