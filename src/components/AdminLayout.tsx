import React, { useState } from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

const AdminLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await authService.logout();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const menuItems = [
    { label: 'Administrators', path: '/admin/admins', icon: '👤' },
    { label: 'Our Team', path: '/admin/team', icon: '👥' },
    { label: 'Partners and Affiliations', path: '/admin/partners', icon: '🤝' },
    //{ label: 'Our Services', path: '/admin/services', icon: '⚡' },
    { label: 'Wasto Achievements', path: '/admin/wasto-achievements', icon: '🏆' },
    { label: 'Wasto Products', path: '/admin/wasto-products', icon: '🛍️' },
    { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className={`font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Admin Panel</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            {isSidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full p-4 flex items-center hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full p-4 flex items-center hover:bg-red-600 transition-colors text-left"
          >
            <span className="text-xl">🚪</span>
            {isSidebarOpen && (
              <span className="ml-3 flex items-center">
                {isLoading && (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isLoading ? 'Logging out...' : 'Logout'}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white shadow">
          <div className="px-4 py-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {menuItems.find(item => item.path === window.location.pathname)?.label || 'Dashboard'}
            </h1>
          </div>
        </header>
        <main className="p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 