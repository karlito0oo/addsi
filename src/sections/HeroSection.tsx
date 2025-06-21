import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full pt-20">
      <div className="bg-gradient-to-r from-green-800 to-green-700 w-full py-8 flex justify-center items-center shadow-md">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide uppercase text-center"
        >
          Company Profile
        </motion.h1>
      </div>
      <div className="flex flex-col items-center justify-center py-12 mx-auto max-w-2xl px-4 sm:px-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/shortLogo.png" alt="Alpha Logo" className="h-40 w-auto mb-6 mx-auto drop-shadow-md" />
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
            100% Filipino-owned<br />est. 2007
          </div>
        </motion.div>
      </div>
    </section>
  );
} 