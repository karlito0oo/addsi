import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';

const BasicEssentialsSection = () => {
  const products = [
    {
      category: "Crates",
      image: "/images/wasto/es1.png",
      description: "Sustainable cooling solutions for everyday use"
    },
    {
      category: "Chairs",
      image: "/images/wasto/es2.png",
      description: "Convenient storage solutions"
    },
    {
      category: "Bench & Tables",
      image: "/images/wasto/es3.png",
      description: "Durable outdoor furniture solutions"
    },
    {
      category: "Tumblers",
      image: "/images/wasto/es4.png",
      description: "Clear and sustainable signage options"
    },
    {
      category: "Tote Boxes",
      image: "/images/wasto/es5.png",
      description: "Comfortable and eco-friendly furniture"
    }
  ];

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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
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