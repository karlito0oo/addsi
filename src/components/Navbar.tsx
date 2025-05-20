import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'ABOUT ALPHA', href: '/about' },
  { name: 'ECHOME ART', href: '/echome-art' },
  { name: 'TANGLAW SOLAR LIGHT PRODUCT', href: '/tanglaw' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-3">
            <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
              <span className="sr-only">Alpha Distinct Development Solutions Inc.</span>
              <img className="h-12 w-auto" src="/shortLogo.png" alt="Alpha Logo" />
              <span className="hidden sm:block text-lg font-semibold text-gray-900">
                Alpha Distinct Development Solutions Inc.
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* Mobile menu overlay and panel rendered at root level for full screen coverage */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-full h-full overflow-y-auto bg-white px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                  <span className="sr-only">Alpha Distinct Development Solutions Inc.</span>
                  <img className="h-10 w-auto" src="/shortLogo.png" alt="Alpha Logo" />
                  <span className="text-base font-semibold text-gray-900 truncate max-w-[120px] sm:max-w-none hidden xs:inline-block">
                    Alpha Distinct Development Solutions Inc.
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 