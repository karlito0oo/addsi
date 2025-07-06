import { motion } from 'framer-motion';
import { usePublicData } from '../contexts/PublicDataContext';
import { STORAGE_URL } from '../config';

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: 'government' | 'nongovernment' | 'private';
  order: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

export default function PartnersAffiliationsSection() {
  const { data, loading: isLoading, error } = usePublicData();
  const partners = data.partners || [];

  return (
    <section
      className="w-full relative py-12 px-2 sm:px-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{
          backgroundImage: 'url(/images/background1.jpg)',
      }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 sm:p-8 min-h-[400px] relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-700 text-white text-xl sm:text-2xl font-bold py-3 px-2 rounded-t-md text-center mb-8 tracking-wide"
        >
          PARTNERS AND AFFILIATIONS
        </motion.div>

        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-green-200 rounded-full animate-spin border-t-green-700"></div>
                <div className="w-16 h-16 border-4 border-transparent rounded-full absolute top-0 animate-ping border-t-green-700 opacity-20"></div>
              </div>
              <p className="text-green-700 font-medium animate-pulse">Loading partners...</p>
            </div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-red-600 bg-red-50 px-4 py-2 rounded-lg shadow flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        ) : (
          <>
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          {/* Alpha Logo and Name */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/shortLogo.png" 
              alt="Alpha Logo" 
              className="w-28 h-28 object-contain mb-2" 
            />
            <div className="text-green-800 font-extrabold text-2xl mt-2">ALPHA</div>
            <div className="text-xs font-semibold tracking-wide text-green-800 text-center">DISTINCT DEVELOPMENT SOLUTIONS INC.</div>
          </motion.div>

          {/* Government and Non-Government Logos */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="font-semibold text-gray-700 text-sm mb-2">Government</div>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {partners
                        .filter(partner => partner.category === 'government')
                        .sort((a, b) => a.order - b.order)
                        .map((partner) => (
                    <motion.img 
                            key={partner.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                            src={`${STORAGE_URL}/${partner.logo}`} 
                            alt={partner.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" 
                            title={partner.name}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col items-center"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="/images/PORMs.png" 
                  alt="Main Partner" 
                  className="w-40 max-w-full object-contain mb-2" 
                />
                <div className="text-blue-900 font-bold text-lg text-center leading-tight">PHILIPPINE ALLIANCE FOR RECYCLING<br className="hidden sm:block"/> AND MATERIALS SUSTAINABILITY</div>
                <div className="text-green-700 font-bold text-base text-center">WASTE DIVERTER</div>
              </motion.div>
            </div>

                {/* Non-Government Partners */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6"
            >
              <div className="font-semibold text-gray-700 text-sm mb-2">Non-Government</div>
              <div className="flex flex-wrap gap-2 justify-center">
                    {partners
                      .filter(partner => partner.category === 'nongovernment')
                      .sort((a, b) => a.order - b.order)
                      .map((partner) => (
                  <motion.img 
                          key={partner.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                          src={`${STORAGE_URL}/${partner.logo}`} 
                          alt={partner.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Powered by */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6"
        >
          <div className="text-xs text-gray-700 font-semibold text-right">POWERED BY:</div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 flex-wrap justify-center sm:justify-start"
          >
            <img src="/images/pb_1.png" alt="Powered by 1" className="w-12 h-12 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" />
          </motion.div>
        </motion.div>

            {/* Private Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-t-md w-full text-center mb-2">Private and Circularity Affiliates</div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 bg-white rounded-b-md p-4 shadow-md justify-center items-center"
          >
                {partners
                  .filter(partner => partner.category === 'private')
                  .sort((a, b) => a.order - b.order)
                  .map((partner) => (
              <motion.img 
                      key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                      src={`${STORAGE_URL}/${partner.logo}`} 
                      alt={partner.name} 
                className="w-16 h-10 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" 
              />
            ))}
          </motion.div>
        </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
} 