import { motion } from 'framer-motion';

const FluteSheetSection = () => {
  const benefits = [
    "Durable",
    "UV Protected",
    "Light-weight",
    "Water-resistant",
    "100% Recyclable",
    "Eco-friendly"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            RECYCLABLE FLUTE SHEETS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A revolutionary solution for indoor and outdoor printing materials, these flute sheets are designed to be eco-friendly.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlike traditional options that often end up in oceans and landfills, these sheets can be easily repurposed, offering a sustainable alternative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6">BENEFITS</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">SIZE: 4 FT X 8 FT</h3>
              <p className="text-gray-700">Thickness are available in:</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>5mm</li>
                <li>4mm</li>
                <li>3mm</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/wasto/rfs.png" 
              alt="Recyclable Flute Sheets" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FluteSheetSection; 