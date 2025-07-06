import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';
import { usePublicData } from '../../contexts/PublicDataContext';
import { STORAGE_URL } from '../../config';

export default function BasicEssentialsSection() {
  const { data, loading, error } = usePublicData();
  const basicEssentialsSettings = data.settings.basic_essentials || {};
  const products = data.wastoProducts?.filter(p => p.type === 'essential') || [];

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Basic Essentials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: basicEssentialsSettings.basic_essentials_description }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
} 