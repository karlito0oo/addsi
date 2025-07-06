import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { adminService } from '../../services/admin.service';
import { STORAGE_URL } from '../../config';

interface FluteSheetSettings {
  flute_sheet_description: string;
  flute_sheet_subtext: string;
  flute_sheet_benefits: string;
  flute_sheet_image: string;
}

const FluteSheetSection = () => {
  const [settings, setSettings] = useState<FluteSheetSettings>({
    flute_sheet_description: '',
    flute_sheet_subtext: '',
    flute_sheet_benefits: '',
    flute_sheet_image: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminService.getSettingsByGroup('flute_sheet');
        setSettings(response as FluteSheetSettings);
      } catch (err) {
        console.error('Error fetching flute sheet settings:', err);
        setError('Failed to load content');
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

  const benefits = settings.flute_sheet_benefits.split(',').map(benefit => benefit.trim());

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
          <div className="text-lg text-gray-600 max-w-3xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: settings.flute_sheet_description }} />
          <div className="text-lg text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: settings.flute_sheet_subtext }} />
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
              src={`${STORAGE_URL}/${settings.flute_sheet_image}`}
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