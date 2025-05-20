import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutAlpha from './pages/AboutAlpha';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="pt-24 text-center">
                <h1 className="text-4xl font-bold">Welcome to Alpha</h1>
              </div>
            } />
            <Route path="/about" element={<AboutAlpha />} />
            <Route path="/echome-art" element={
              <div className="pt-24 text-center">
                <h1 className="text-4xl font-bold">Echome Art</h1>
              </div>
            } />
            <Route path="/tanglaw" element={
              <div className="pt-24 text-center">
                <h1 className="text-4xl font-bold">Tanglaw Solar Light Product</h1>
              </div>
            } />
            <Route path="/contact" element={
              <div className="pt-24 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
