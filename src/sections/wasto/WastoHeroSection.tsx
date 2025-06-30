import { motion } from 'framer-motion';

export default function WastoHeroSection() {
  return (
    <section
      className="w-full pt-20 pb-8 sm:pb-16 relative"
      style={{
        backgroundImage: 'url(/images/background1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white/80 rounded-lg shadow p-6 sm:p-12 relative overflow-hidden">
        {/* Left: Logo and Title */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <motion.img
            src="/images/wastoLogo.png"
            alt="Wasto Logo"
            className="w-48 sm:w-64 h-auto mb-2 mx-auto md:mx-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="text-teal-900 font-bold text-xl sm:text-2xl tracking-widest mb-2">WASTE SOLUTIONS</div>
        </div>
        {/* Arrow and Tagline */}
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
          <motion.div
            className="hidden md:block text-4xl text-gray-700 mb-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            &rarr;
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-serif italic font-semibold text-gray-800"
          >
            <span className="block">Your one-stop shop</span>
            <span className="block">in circularity and</span>
            <span className="block">sustainability</span>
          </motion.div>
        </div>
        {/* Arrow for mobile (between logo and tagline) */}
        <motion.div
          className="block md:hidden text-3xl text-gray-700 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          &darr;
        </motion.div>
        {/* Alpha logo bottom right */}
        <img src="/images/shortLogo.png" alt="Alpha Logo" className="w-10 h-10 absolute bottom-4 right-4 opacity-80" />
      </div>
    </section>
  );
} 