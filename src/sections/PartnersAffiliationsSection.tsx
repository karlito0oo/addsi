import { motion } from 'framer-motion';

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
  const governmentPartners = [
    'images/g_1.png', 'images/g_2.png', 'images/g_3.png', 
    'images/g_4.png', 'images/g_5.png', 'images/g_6.png'
  ];
  const nonGovernmentPartners = [
    'images/ng_1.png', 'images/ng_2.png', 'images/ng_3.png', 'images/ng_4.png',
    'images/ng_5.png', 'images/ng_6.png', 'images/ng_7.png', 'images/ng_8.png'
  ];
  const privateAndCircularityAffiliates = [
    'images/p_1.png', 'images/p_2.png', 'images/p_3.png', 'images/p_4.png',
    'images/p_5.png', 'images/p_6.png', 'images/p_7.png', 'images/p_8.png',
    'images/p_9.png', 'images/p_10.png', 'images/p_11.png', 'images/p_12.png'
  ];

  return (
    <section
      className="w-full relative py-12 px-2 sm:px-0"
      style={{
        backgroundImage: 'url(/background1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 sm:p-8"
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
                  {governmentPartners.map((img_url, index) => (
                    <motion.img 
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      src={`/${img_url}`} 
                      alt={`Government Partner ${index}`} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" 
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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6"
            >
              <div className="font-semibold text-gray-700 text-sm mb-2">Non-Government</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {nonGovernmentPartners.map((img_url, index) => (
                  <motion.img 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    src={`/${img_url}`} 
                    alt={`Non-Government Partner ${index}`} 
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

        {/* Private and Circularity Affiliates */}
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
            {privateAndCircularityAffiliates.map((img_url, index) => (
              <motion.img 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                src={`/${img_url}`} 
                alt={`Affiliate ${index}`} 
                className="w-16 h-10 object-contain rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300" 
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 