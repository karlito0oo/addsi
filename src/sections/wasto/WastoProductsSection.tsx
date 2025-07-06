import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';
import { usePublicData } from '../../contexts/PublicDataContext';
import { STORAGE_URL } from '../../config';

export default function WastoProductsSection() {
  const { data, loading, error } = usePublicData();
  const products = data.wastoProducts?.filter(p => p.type === 'product') || [];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            WASTO PRODUCTS
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products
            .sort((a, b) => a.order - b.order)
            .map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.category}
                description={product.description}
              />
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 