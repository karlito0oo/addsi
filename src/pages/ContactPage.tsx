import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { usePublicData } from '../contexts/PublicDataContext';
import { api } from '../services/api';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const { data, loading, error } = usePublicData();
  const companyDetails = data.settings.company_details || {};

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await api.post('/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.error || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h2>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a href={`mailto:${companyDetails.company_email}`} className="text-base text-gray-600 hover:text-green-600 transition-colors">
                    {companyDetails.company_email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a href={`tel:${companyDetails.company_phone}`} className="text-base text-gray-600 hover:text-green-600 transition-colors">
                    {companyDetails.company_phone}
                    </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-base text-gray-600 whitespace-pre-wrap">
                    {companyDetails.company_address}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: companyDetails.google_maps_iframe }} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors text-gray-900"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors text-gray-900"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="block w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors text-gray-900 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 rounded-md text-base font-medium text-white transition-colors
                    ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 rounded-md p-4">
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-800 rounded-md p-4">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 