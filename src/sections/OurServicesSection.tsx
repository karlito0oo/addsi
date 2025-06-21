import { motion } from 'framer-motion';

const services = [
  'ECO-ACTIVATION',
  'INTERIOR/EXTERIOR DESIGN & DECOR',
  'ADVOCACY PROGRAM CONSULTANCY',
  'GREENOVATIONS',
  'GREEN CLEANING',
  'HAZARDOUS WASTE MANAGEMENT',
  'GLASS WASTE HAULING AND UPCYCLING',
];

export default function OurServicesSection() {
  return (
    <section
      className="w-full py-12 px-2 sm:px-0 relative"
      style={{
        backgroundImage: 'url(/background1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[90%] max-w-7xl mx-auto bg-white/80 rounded-lg shadow p-4 sm:p-10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="bg-green-700 text-white text-2xl sm:text-3xl font-extrabold px-8 py-2 rounded-full shadow text-center tracking-wide mb-6">
            OUR SERVICES
          </div>
        </motion.div>
        {/* Desktop: horizontal, Mobile: stacked */}
        <div className="relative flex flex-col items-center w-full">
          {/* Horizontal line for desktop */}
     
          {/* Cards */}
          <div className="w-full flex flex-col md:flex-row justify-between items-stretch md:items-end gap-4 md:gap-0 z-10">
            {services.map((service, idx) => (
              <div key={service} className="flex flex-col items-center flex-1">
                {/* Vertical line for desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border-2 border-gray-300 rounded-2xl px-4 py-5 w-full max-w-full md:min-w-[120px] md:max-w-[150px] flex items-center justify-center shadow-md text-center font-bold text-green-800 text-base md:text-xs lg:text-sm relative"
                  style={{ marginTop: '8px' }}
                >
                  {service}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* Alpha logo bottom right */}
        <img src="/shortLogo.png" alt="Alpha Logo" className="w-12 h-12 absolute bottom-4 right-4 opacity-80" />
      </div>
    </section>
  );
} 