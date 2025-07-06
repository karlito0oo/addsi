import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';
import { adminService } from '../../services/admin.service';

interface WastoProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  type: string;
  order: number;
}

const BasicEssentialsSection = () => {
  const [products, setProducts] = useState<WastoProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await adminService.getWastoProducts('essential');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            WASTO Basic Essentials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            We are promoting the use of upcycled materials since we use plastics as basics in our daily lives.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each purchase contributes to Conservation of Ocean Resources & Aquatic Life (CORAL) and Women on Waste (WOW) program.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={`${product.image}`}
              title={product.category}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicEssentialsSection; 