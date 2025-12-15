import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { CartProvider } from './context/CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background font-sans text-gray-900">
          <Navbar />
          <CartDrawer />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>

          <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  {/* <div className="bg-primary/10 p-1.5 rounded-lg"> */}
                    <img src="/logo.png" alt="Surprez Logo" className="h-8 w-8" />
                  {/* </div> */}
                  <span className="text-lg font-extrabold text-primary font-handwriting">Surprez</span>
                </div>
                
                <div className="flex gap-8 text-sm font-medium text-gray-500">
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                </div>
                
                <p className="text-sm text-gray-400">© 2025 Surprez Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;