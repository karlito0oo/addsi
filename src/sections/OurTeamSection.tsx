import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function OurTeamSection() {
  return (
    <section className="w-full relative px-4 sm:px-0 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50">
        <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-10">Our Team</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {/* Team Leader 1 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-green-700"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/team1.jpg" 
              alt="Noel Tanada" 
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" 
            />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">NOEL IGNATIUS F. TAÑADA</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">President & CEO</div>
            <p className="text-gray-700 text-sm text-center">He has a vast experience in the field of Design and has worked with global brands such as Issey Miyake, Charles & Keith, and Triple Lumen. Contributed his expertise to the Filipino design community by mentoring through Europe as a De Saavedra scholar on Shell Traditions, member of the Chamber of Furniture Industries of the Philippines. He holds several patents for innovative and sustainable products registered in many countries, and continuously develops new concepts & technology-based design promotions.</p>
          </motion.div>

          {/* Team Leader 2 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-green-700"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/team2.jpg" 
              alt="Michelle Bautista-Tanada" 
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" 
            />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">MICHELLE BAUTISTA-TAÑADA</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">Chief Operating Officer</div>
            <p className="text-gray-700 text-sm text-center">A local and international marketing specialist with over 20 years of experience. Sits on the Board of Advisors of the Achievers Group of Companies. Led wide-ranging experiential and creative initiatives including collaborations with the Life Earth Foundation Inc. as its co-advocacy partner. Co-organizer of "Upcycling as Art." Co-Founder of Philippine Alliance for Sustainable Solutions (PASS) Foundation. She also champions women empowerment and is a member of the board of Trustees of Women of the Earth Foundation and Ladies For A Cause.</p>
          </motion.div>

          {/* Team Leader 3 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-green-700"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/team3.jpg" 
              alt="Crystal Dy" 
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" 
            />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">CRYSTAL "MIXY" B. DY</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">Chief Creative Officer</div>
            <p className="text-gray-700 text-sm text-center">Fashion Designer and Creative Entrepreneur who graduated Magna Cum Laude from Central Saint Martins London. She has advanced her technical skills in sustainable fashion and was selected for several international courses such as Redress Founder Award, Stockholm, and the H&M Foundation. As a Brand Strategist for leading multinational FMCGs, she brings creative direction to inspire the leadership effort. She also serves as Special Project Director of Balikatan Sa Kaunlaran Foundation and principal co-organizer for Life Earth Foundation, heads initiatives that harness design for sustainability, livelihood, and community empowerment.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-t-md w-full text-center mb-2">OUR ENVIRONMENT, SCIENCE AND TECHNICAL SUPPORT</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-b-md p-4 shadow">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="font-semibold">MARISSA A. PAGLICAWAN, PH.D.</div>
              <div className="text-xs text-gray-600">Science and Technology</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="font-semibold">ENCARNACION N. RARALIO, PH.D., UAP, ENP</div>
              <div className="text-xs text-gray-600">Environment and Architecture</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="font-semibold">MARICHELLE ANN F. CARREON MM, HD, PHD, PD-SML</div>
              <div className="text-xs text-gray-600">Livelihood Training</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 