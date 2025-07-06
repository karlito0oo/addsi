import { motion } from 'framer-motion';
import { usePublicData } from '../contexts/PublicDataContext';
import { STORAGE_URL } from '../config/index';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  order: number;
}

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
  const { data, loading: isLoading, error } = usePublicData();
  const teamMembers = data.teamMembers || [];

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  const leadershipTeam = teamMembers
    .filter(member => member.category === 'leadership')
    .sort((a, b) => a.order - b.order);

  const supportTeam = teamMembers
    .filter(member => member.category === 'support')
    .sort((a, b) => a.order - b.order);

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
          {leadershipTeam.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-green-700"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={`${STORAGE_URL}/${member.image}`}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200"
              />
              <div className="text-green-700 font-bold text-lg text-center leading-tight">{member.name}</div>
              <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">{member.position}</div>
              <p className="text-gray-700 text-sm text-center">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        {supportTeam.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-t-md w-full text-center mb-2">
              OUR ENVIRONMENT, SCIENCE AND TECHNICAL SUPPORT
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-b-md p-4 shadow">
              {supportTeam.map((member) => (
                <motion.div 
                  key={member.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                >
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-xs text-gray-600">{member.position}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 