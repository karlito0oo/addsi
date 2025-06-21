import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-amber-50 px-4 sm:px-0 relative pb-16">
      <div className="max-w-5xl mx-auto pt-12 pb-0 flex flex-col items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center text-center relative w-full"
        >
          <div className="w-full flex items-center mb-6 relative">
            <div className="flex-1 border-t border-gray-400" />
            <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-gray-800 relative text-center">
              Mission and Vision
            </h2>
            <div className="flex-1 border-t border-gray-400" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-8 text-center md:text-left w-full justify-center"
        >
          <div className="w-full md:w-80 h-64 overflow-hidden rounded-lg shadow-md">
            <img src="/mission-vision-img.png" alt="Mission and Vision" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="flex-1 text-gray-800 text-lg space-y-6 flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-lg shadow-sm">
            <div>
              Our mission is to be a leader in creating <span className="font-bold text-green-700">"PRO-POORTUNITIES"</span> — opportunities that uplift and support underprivileged and marginalized communities
            </div>
            <div>
              ADDSI strive to make a lasting and positive impact on the lives of our people, fostering a culture of inclusivity, growth, and social responsibility. Together, we aim to build a brighter future for all, driven by innovation, compassion, and the shared values that define us as a nation
            </div>
          </div>
        </motion.div>
      </div>
      <motion.img 
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.8, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src="/shortLogo.png" 
        alt="Alpha Logo" 
        className="absolute bottom-4 right-4 h-12 w-auto"
      />
    </section>
  );
} 