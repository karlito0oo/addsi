import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'ABOUT ALPHA', href: '/about' },
  { name: 'ECHOME ART', href: '/echome-art' },
  { name: 'TANGLAW SOLAR LIGHT', href: '/tanglaw' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-600 via-green-500 to-red-500"></div>
        <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-3">
            <Link to="/" className="flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <span className="sr-only">Alpha Distinct Development Solutions Inc.</span>
              <img className="h-12 w-auto" src="/shortLogo.png" alt="Alpha Logo" />
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-gray-900">
                  Alpha
                </span>
                <span className="text-xs text-red-500 font-medium leading-none">
                  Distinct Development Solutions Inc.
              </span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
              <Link
                key={item.name}
                to={item.href}
                  className={`group relative px-3 py-2 text-sm font-medium leading-6 transition-all duration-300 rounded-md ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-green-600 to-green-700' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {item.name}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-500 to-red-500 transition-all duration-300 group-hover:w-full" />
                  )}
              </Link>
              );
            })}
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
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-full h-full overflow-y-auto bg-white px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                  <span className="sr-only">Alpha Distinct Development Solutions Inc.</span>
                  <img className="h-10 w-auto" src="/shortLogo.png" alt="Alpha Logo" />
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-gray-900">Alpha</span>
                    <span className="text-xs text-red-500 font-medium leading-none">
                      Distinct Development Solutions Inc.
                  </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                      <Link
                        key={item.name}
                        to={item.href}
                          className={`block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-all duration-300 ${
                            isActive 
                              ? 'text-white bg-gradient-to-r from-green-600 to-green-700' 
                              : 'text-gray-900 hover:bg-gray-50'
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      );
                    })}
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