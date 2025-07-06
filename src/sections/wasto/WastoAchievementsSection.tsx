import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePublicData } from '../../contexts/PublicDataContext';
import { STORAGE_URL } from '../../config';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  achievement_date: string | null;
  order: number;
}

interface WastoAchievementsSettings {
  wasto_achievements_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-6xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AchievementCardProps {
  image: string;
  title: string;
  description: string;
  date?: string;
  onImageClick: () => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ image, title, description, date, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <div 
        className="aspect-[4/3] overflow-hidden cursor-pointer relative"
        onClick={onImageClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 mb-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" 
                />
              </svg>
              <p className="text-sm font-medium">Click to view full image</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {date && (
          <p className="text-sm text-gray-500 italic">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default function WastoAchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const { data, loading, error } = usePublicData();
  const wastoAchievementsSettings = data.settings.wasto_achievements || {};

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 rounded-full animate-spin border-t-green-700"></div>
            <div className="w-16 h-16 border-4 border-transparent rounded-full absolute top-0 animate-ping border-t-green-700 opacity-20"></div>
          </div>
          <p className="text-green-700 font-medium animate-pulse">Loading achievements...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">{error}</div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative min-h-[400px]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: wastoAchievementsSettings.wasto_achievements_description }} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.wastoAchievements
            .sort((a, b) => a.order - b.order)
            .map((achievement) => (
              <AchievementCard
                key={achievement.id}
                image={`${STORAGE_URL}/${achievement.image}`}
                title={achievement.title}
                description={achievement.description}
                date={achievement.achievement_date || undefined}
                onImageClick={() => setSelectedImage({
                  image: `${STORAGE_URL}/${achievement.image}`,
                  title: achievement.title
                })}
              />
            ))}
        </motion.div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.image || ''}
        title={selectedImage?.title || ''}
      />
    </motion.section>
  );
} 