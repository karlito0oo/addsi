import { motion } from 'framer-motion';

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

export default function AboutAlpha() {
  return (
    <div className="bg-white pt-24 w-full">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-24 pt-10 sm:pb-32 lg:flex lg:py-40">
          <div className="w-full max-w-2xl lg:max-w-xl lg:flex-shrink-0 lg:pt-8 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Alpha
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Content coming soon...
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact in Numbers
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-gray-400/5 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="w-full max-w-2xl lg:text-center mx-auto">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about Alpha
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are more than just a lighting company. We are a team of innovators, environmentalists, and visionaries committed to creating a brighter, more sustainable future.
          </p>
        </div>
        <div className="w-full mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none mx-auto">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: features.indexOf(feature) * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Mission section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl lg:mx-0 mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              To revolutionize the lighting industry through sustainable innovation, creating products that not only illuminate spaces but also contribute to a greener, more energy-efficient world. We strive to be at the forefront of solar lighting technology while maintaining the highest standards of quality and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 