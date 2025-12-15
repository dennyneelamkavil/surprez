import React from 'react';
import { ShoppingBag, Menu, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary';

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors"> */}
              <img src="/logo.png" alt="Surprez Logo" className="h-20 w-20" />
            {/* </div> */}
            {/* <span className="text-2xl font-extrabold tracking-tight text-primary font-handwriting">
              Surprez
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
            {/* <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/shop')}`}>Shop</Link> */}
            <Link to="/privacy" className={`text-sm font-medium transition-colors ${isActive('/privacy')}`}>Privacy</Link>
            <Link to="/terms" className={`text-sm font-medium transition-colors ${isActive('/terms')}`}>Terms</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-primary" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;