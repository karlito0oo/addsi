import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhoWeAreSection() {
  return (
    <section className="w-full relative px-4 sm:px-0 overflow-hidden">
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center text-center relative w-full"
        >
          <div className="flex flex-col items-center text-center relative w-full">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-emerald-900 mb-4 font-medium text-center"
          >
            100% Filipino-owned corporation established in the year 2007
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-emerald-800 mb-8 max-w-3xl text-center"
          >
            We create and implement innovative cause-oriented projects, products, and programs that highlight the Filipino spirit of creativity, ingenuity, and values through synergies with the public and private sector, NGOs and other social & civic organizations
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-6xl mx-auto mt-4 mb-0 flex justify-center px-4 sm:px-6"
      >
        <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white p-2">
          <motion.img 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            src="/images/who-we-are-image.png" 
            alt="Who We Are" 
            className="w-full object-cover rounded-xl" 
            style={{minHeight:'220px', maxHeight:'320px'}} 
          />
        </div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          src="/images/shortLogo.png" 
          alt="Alpha Logo" 
          className="absolute bottom-4 right-4 h-12 w-auto" 
        />
      </motion.div>
    </section>
  );
} 