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

interface BasicEssentialsSettings {
  basic_essentials_description: string;
  basic_essentials_subtext: string;
}

const BasicEssentialsSection = () => {
  const [products, setProducts] = useState<WastoProduct[]>([]);
  const [settings, setSettings] = useState<BasicEssentialsSettings>({
    basic_essentials_description: '',
    basic_essentials_subtext: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, settingsResponse] = await Promise.all([
          adminService.getWastoProducts('essential'),
          adminService.getSettingsByGroup('basic_essentials')
        ]);
        setProducts(productsResponse.data);
        setSettings(settingsResponse as BasicEssentialsSettings);
      } catch (err) {
        setError('Failed to load content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
          <div className="text-lg text-gray-600 max-w-3xl mx-auto mb-4" dangerouslySetInnerHTML={{ __html: settings.basic_essentials_description }} />
          <div className="text-lg text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: settings.basic_essentials_subtext }} />
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