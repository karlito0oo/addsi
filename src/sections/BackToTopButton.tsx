import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BackToTopButton({ show, onClick }: { show: boolean, onClick: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
} 