import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
  'ECO-ACTIVATION',
  'INTERIOR/EXTERIOR DESIGN & DECOR',
  'ADVOCACY PROGRAM CONSULTANCY',
  'GREENOVATIONS',
  'GREEN CLEANING',
  'HAZARDOUS WASTE MANAGEMENT',
  'GLASS WASTE HAULING AND UPCYCLING',
];

export default function ServicesAndWastoSection() {
  const navigate = useNavigate();
  return (
    <section
      className="w-full py-12 px-2 sm:px-0 relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(/images/background1.jpg)`,
        }}
      />
      <div className="w-[90%] max-w-7xl mx-auto bg-white/80 rounded-lg shadow p-4 sm:p-10 relative overflow-hidden flex flex-col gap-12">
        {/* Our Services */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-4"
        >
          <div className="bg-green-700 text-white text-2xl sm:text-3xl font-extrabold px-8 py-2 rounded-full shadow text-center tracking-wide mb-6">
            OUR SERVICES
          </div>
          <div className="relative flex flex-col items-center w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-stretch md:items-end gap-4 md:gap-0 z-10">
              {services.map((service, idx) => (
                <div key={service} className="flex flex-col items-center flex-1">
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
        </motion.div>
        {/* Wasto Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto flex flex-col items-center relative"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold italic text-center mb-8">We begin with our newest brand<br />in addressing Plastic Waste</h2>
          <div className="text-lg text-center mb-4">Philippines is currently the 3rd Plastic Polluter of the ocean, worldwide.</div>
          <div className="text-base text-center mb-4">Due to lack of information, and education, insufficient recycling systems and scarcity of funds available, Plastic Waste Pollution continue to damage our ecosystem.</div>
          <div className="text-base text-center mb-8">As such, we have developed <b>WASTO Waste Solutions</b> to make use of single-use plastics infused in our product line for schools, homes, offices, parks, farms & markets, SMSEs to be used in various sectors.</div>
          <button
            className="mt-4 bg-green-700 text-white px-6 py-3 rounded-md font-medium shadow-sm hover:bg-green-800 transition-colors duration-300"
            onClick={() => navigate('/wasto')}
          >
            View more details about Wasto
          </button>
        </motion.div>
      </div>
    </section>
  );
} 