import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutAlpha from './pages/AboutAlpha';
import WastoPage from './pages/WastoPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './pages/LoginPage';
import AdminLayout from './components/AdminLayout';
import { useEffect, useState } from 'react';
import { authService } from './services/auth.service';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  if (!authService.isAuthenticated()) {
    // Redirect to login page with the return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Set initial authentication state
    setIsAuthenticated(authService.isAuthenticated());

    // Listen for storage events to update auth state
    const handleStorageChange = () => {
      setIsAuthenticated(authService.isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Public Layout component
  const PublicLayout = () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route index element={<AboutAlpha />} />
          <Route path="about" element={<AboutAlpha />} />
          <Route path="echome-art" element={
            <div className="pt-24 text-center">
              <h1 className="text-4xl font-bold">Echome Art</h1>
            </div>
          } />
          <Route path="tanglaw" element={
            <div className="pt-24 text-center">
              <h1 className="text-4xl font-bold">Tanglaw Solar Light Product</h1>
            </div>
          } />
          <Route path="wasto" element={<WastoPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin routes */}
        <Route path="/login" element={
          isAuthenticated ? 
          <Navigate to="/admin" replace /> : 
          <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
        } />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/team" replace />} />
          <Route path="team" element={<div>Team Management</div>} />
          <Route path="partners" element={<div>Partners Management</div>} />
          <Route path="services" element={<div>Services Management</div>} />
          <Route path="wasto-achievements" element={<div>Wasto Achievements Management</div>} />
          <Route path="others" element={<div>Other Settings</div>} />
        </Route>

        {/* Public routes */}
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
