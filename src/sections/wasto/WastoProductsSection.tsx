import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';

const WastoProductsSection = () => {
  
    const products = [
        {
          category: "Typhoon Disaster Response",
          image: "/images/wasto/p1.png",
          description: ""
        },
        {
          category: "Eco-Coolers",
          image: "/images/wasto/p2.png",
          description: ""
        },
        {
          category: "Drop Box",
          image: "/images/wasto/p3.png",
          description: ""
        },
        {
          category: "Salvabida",
          image: "/images/wasto/p4.png",
          description: ""
        },
        {
          category: "Street Furniture",
          image: "/images/wasto/p5.png",
          description: ""
        },
        {
          category: "Signage",
          image: "/images/wasto/p6.png",
          description: ""
        },
        {
          category: "Chairs and Table",
          image: "/images/wasto/p7.png",
          description: ""
        },
        {
          category: "Trash Bins",
          image: "/images/wasto/p8.png",
          description: ""
        }
      ];

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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.category}
              description={product.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WastoProductsSection; 