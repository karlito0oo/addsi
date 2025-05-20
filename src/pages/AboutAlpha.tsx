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
    <div className="bg-white pt-0 w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <div className="bg-green-800 w-full py-6 flex justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide uppercase text-center">Company Profile</h1>
        </div>
        <div className="flex flex-col items-center justify-center py-12 mx-auto max-w-2xl">
          <img src="/shortLogo.png" alt="Alpha Logo" className="h-40 w-auto mb-6 mx-auto" />
          <h2 className="text-4xl font-extrabold text-red-500 uppercase mb-2 text-center">ALPHA</h2>
          <div className="text-red-500 font-semibold text-lg tracking-wide uppercase mb-8 text-center">Distinct Development Solutions Inc.</div>
          <div className="w-full flex flex-col items-center mt-12">
            <div className="border-t border-green-800 w-40 mb-4" />
            <div className="text-center text-black font-bold text-base leading-tight">
              100% Filipino-owned<br />est. 2007
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-white px-4 sm:px-0">
        <div className="max-w-4xl mx-auto pt-12 pb-0 flex flex-col items-center">
          <div className="flex flex-col items-center text-center relative w-full">
            <div className="w-full flex items-center mb-6 relative">
              <div className="flex-1 border-t border-gray-400" />
              <h2 className="mx-6 text-5xl sm:text-6xl font-serif italic font-bold text-gray-800 whitespace-nowrap relative text-center">
                Who We Are
                <span className="absolute -right-12 bottom-0 text-3xl">&rarr;</span>
              </h2>
              <div className="flex-1 border-t border-gray-400" />
            </div>
            <div className="text-lg sm:text-xl text-gray-800 mb-4 font-medium text-center">100% Filipino-owned corporation established in the year 2007</div>
            <div className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl text-center">
              We create and implement innovative cause-oriented projects, products, and programs that highlight the Filipino spirit of creativity, ingenuity, and values through synergies with the public and private sector, NGOs and other social & civic organizations
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto mt-4 mb-0 flex justify-center">
          <img src="/who-we-are-image.png" alt="Who We Are" className="w-full object-cover rounded-none shadow-md" style={{minHeight:'220px', maxHeight:'320px'}} />
          <img src="/shortLogo.png" alt="Alpha Logo" className="absolute bottom-4 right-4 h-12 w-auto opacity-80" />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full bg-white px-4 sm:px-0 relative pb-16">
        <div className="max-w-5xl mx-auto pt-12 pb-0 flex flex-col items-center">
          <div className="flex flex-col items-center text-center relative w-full">
            <div className="w-full flex items-center mb-6 relative">
              <div className="flex-1 border-t border-gray-400" />
              <h2 className="mx-6 text-5xl sm:text-6xl font-serif italic font-bold text-gray-800 whitespace-nowrap relative text-center">
                Mission and Vision
                <span className="absolute -right-12 bottom-0 text-3xl">&rarr;</span>
              </h2>
              <div className="flex-1 border-t border-gray-400" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-8 text-center md:text-left w-full justify-center">
            <img src="/mission-vision-img.png" alt="Mission and Vision" className="w-full md:w-80 h-64 object-cover rounded shadow-md mx-auto" />
            <div className="flex-1 text-gray-800 text-lg space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <div>
                Our mission is to be a leader in creating <span className="font-bold">"PRO-POORTUNITIES"</span> — opportunities that uplift and support underprivileged and marginalized communities
              </div>
              <div>
                ADDSI strive to make a lasting and positive impact on the lives of our people, fostering a culture of inclusivity, growth, and social responsibility. Together, we aim to build a brighter future for all, driven by innovation, compassion, and the shared values that define us as a nation
              </div>
            </div>
          </div>
        </div>
        <img src="/shortLogo.png" alt="Alpha Logo" className="absolute bottom-4 right-4 h-12 w-auto opacity-80" />
      </section>

      
    </div>
  );
} 