import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-green-50 px-4 sm:px-0">
      <div className="max-w-4xl mx-auto pt-16 pb-0 flex flex-col items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center text-center relative w-full"
        >
          <div className="flex flex-col items-center text-center relative w-full">
            <div className="w-full flex items-center mb-6 relative">
              <div className="flex-1 border-t border-gray-400" />
              <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-gray-800 relative text-center">
                Who We Are
              </h2>
              <div className="flex-1 border-t border-gray-400" />
            </div>
          </div>
          <div className="text-lg sm:text-xl text-gray-800 mb-4 font-medium text-center">100% Filipino-owned corporation established in the year 2007</div>
          <div className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl text-center">
            We create and implement innovative cause-oriented projects, products, and programs that highlight the Filipino spirit of creativity, ingenuity, and values through synergies with the public and private sector, NGOs and other social & civic organizations
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-6xl mx-auto mt-4 mb-0 flex justify-center"
      >
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <img src="/who-we-are-image.png" alt="Who We Are" className="w-full object-cover hover:scale-105 transition-transform duration-3000" style={{minHeight:'220px', maxHeight:'320px'}} />
        </div>
        <img src="/shortLogo.png" alt="Alpha Logo" className="absolute bottom-4 right-4 h-12 w-auto opacity-80" />
      </motion.div>
    </section>
  );
} 