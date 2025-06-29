import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Years of Experience', value: '25+' },
  { id: 2, name: 'Products Launched', value: '100+' },
  { id: 3, name: 'Happy Customers', value: '10,000+' },
  { id: 4, name: 'Global Presence', value: '15+ Countries' },
];

const features = [
  {
    name: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in sustainable lighting solutions.',
    icon: '💡',
  },
  {
    name: 'Sustainability',
    description: 'Our commitment to eco-friendly practices drives every product we create.',
    icon: '🌱',
  },
  {
    name: 'Quality',
    description: 'We maintain the highest standards in manufacturing and product development.',
    icon: '⭐',
  },
  {
    name: 'Customer Focus',
    description: 'Your satisfaction is our top priority, and we work tirelessly to exceed expectations.',
    icon: '🤝',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function AboutAlpha() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-20">
        <div className="bg-gradient-to-r from-green-800 to-green-700 w-full py-8 flex justify-center items-center shadow-md">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide uppercase text-center"
          >
            Company Profile
          </motion.h1>
        </div>
        <div className="flex flex-col items-center justify-center py-12 mx-auto max-w-2xl px-4 sm:px-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/shortLogo.png" alt="Alpha Logo" className="h-40 w-auto mb-6 mx-auto drop-shadow-md" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-extrabold text-red-500 uppercase mb-2 text-center"
          >
            ALPHA
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-red-500 font-semibold text-lg tracking-wide uppercase mb-8 text-center"
          >
            Distinct Development Solutions Inc.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full flex flex-col items-center mt-12"
          >
            <div className="border-t border-green-800 w-40 mb-4" />
            <div className="text-center text-black font-bold text-base leading-tight">
              100% Filipino-owned<br />est. 2007
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white rounded-lg shadow-sm p-6 text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <dt className="text-base font-medium text-gray-600">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-extrabold text-green-700">{stat.value}</dd>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-white px-4 sm:px-0">
        <div className="max-w-4xl mx-auto pt-16 pb-0 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-center text-center relative w-full"
          >
            <div className="flex flex-col items-center text-center relative w-full">
              <div className="w-full flex items-center mb-6 relative">
                <div className="flex-1 border-t border-gray-400" />
                <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-gray-800 relative text-center">
                  Who We Are
                  <span className="hidden sm:inline absolute -right-12 bottom-0 text-3xl">&rarr;</span>
                </h2>
                <div className="flex-1 border-t border-gray-400" />
              </div>
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-4 font-medium text-center">100% Filipino-owned corporation established in the year 2007</div>
            <div className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl text-center">
              We create and implement innovative cause-oriented projects, products, and programs that highlight the Filipino spirit of creativity, ingenuity, and values through synergies with the public and private sector, NGOs and other social & civic organizations
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-6xl mx-auto mt-4 mb-0 flex justify-center"
        >
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <img src="/who-we-are-image.png" alt="Who We Are" className="w-full object-cover hover:scale-105 transition-transform duration-3000" style={{minHeight:'220px', maxHeight:'320px'}} />
          </div>
          <img src="/shortLogo.png" alt="Alpha Logo" className="absolute bottom-4 right-4 h-12 w-auto opacity-80" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">What sets us apart and drives our mission forward</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-4 hover:border-green-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full bg-white px-4 sm:px-0 relative pb-16">
        <div className="max-w-5xl mx-auto pt-12 pb-0 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-center text-center relative w-full"
          >
            <div className="w-full flex items-center mb-6 relative">
              <div className="flex-1 border-t border-gray-400" />
              <h2 className="mx-2 sm:mx-6 text-3xl sm:text-5xl md:text-6xl font-serif italic font-bold text-gray-800 relative text-center">
                Mission and Vision
                <span className="hidden sm:inline absolute -right-12 bottom-0 text-3xl">&rarr;</span>
              </h2>
              <div className="flex-1 border-t border-gray-400" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-8 text-center md:text-left w-full justify-center"
          >
            <div className="w-full md:w-80 h-64 overflow-hidden rounded-lg shadow-md">
              <img src="/mission-vision-img.png" alt="Mission and Vision" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex-1 text-gray-800 text-lg space-y-6 flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-lg shadow-sm">
              <div>
                Our mission is to be a leader in creating <span className="font-bold text-green-700">"PRO-POORTUNITIES"</span> — opportunities that uplift and support underprivileged and marginalized communities
              </div>
              <div>
                ADDSI strive to make a lasting and positive impact on the lives of our people, fostering a culture of inclusivity, growth, and social responsibility. Together, we aim to build a brighter future for all, driven by innovation, compassion, and the shared values that define us as a nation
              </div>
            </div>
          </motion.div>
        </div>
        <motion.img 
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 0.8, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src="/shortLogo.png" 
          alt="Alpha Logo" 
          className="absolute bottom-4 right-4 h-12 w-auto"
        />
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-12 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Together, we can make a difference. Partner with us to create innovative solutions for a sustainable future.
          </p>
          <button className="bg-white text-green-700 px-6 py-3 rounded-md font-medium shadow-sm hover:bg-gray-100 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </section>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
} 