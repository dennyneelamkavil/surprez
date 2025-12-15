import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mystery Box",
    price: 1999,
    category: "Surprise Assortment",
    emoji: "🎁",
    bgColor: "bg-orange-100",
    description: "A curated selection of our finest small gifts."
  },
  {
    id: 2,
    name: "Plushie Bear",
    price: 1199,
    category: "Soft & Cuddly",
    emoji: "🧸",
    bgColor: "bg-amber-100",
    description: "The perfect companion for cozy nights."
  },
  {
    id: 3,
    name: "Scented Candle Set",
    price: 2499,
    category: "Vanilla & Lavender",
    emoji: "🕯️",
    bgColor: "bg-rose-100",
    description: "Fill your room with calming aromas."
  },
  {
    id: 4,
    name: "Gourmet Chocolates",
    price: 999,
    category: "Dark & Milk Blend",
    emoji: "🍫",
    bgColor: "bg-blue-100",
    description: "Handcrafted sweets for the sweet tooth."
  },
  {
    id: 5,
    name: "Succulent Trio",
    price: 1499,
    category: "Live Plants",
    emoji: "🪴",
    bgColor: "bg-green-100",
    description: "Low maintenance greenery for any space."
  },
  {
    id: 6,
    name: "Cozy Socks",
    price: 699,
    category: "Winter Warmth",
    emoji: "🧦",
    bgColor: "bg-purple-100",
    description: "Keep your toes toasty with premium wool."
  },
  {
    id: 7,
    name: "Instant Camera",
    price: 6999,
    category: "Electronics",
    emoji: "📸",
    bgColor: "bg-yellow-100",
    description: "Capture memories instantly with retro flair."
  },
  {
    id: 8,
    name: "Tea Collection",
    price: 1799,
    category: "Beverages",
    emoji: "🫖",
    bgColor: "bg-teal-100",
    description: "A soothing assortment of herbal teas."
  }
];

const Home: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="px-4 pt-6 md:pt-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-secondary shadow-xl shadow-secondary/20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20 mb-2 animate-fade-in-up">
              <span className="text-xl">✨</span>
              <span className="text-sm font-bold tracking-wide uppercase">New Arrivals In Stock</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-sm max-w-3xl">
              Unwrap Happiness
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg font-medium leading-relaxed">
              Find the perfect gift for everyone on your list. Curated surprises that bring joy to every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-white text-base font-bold hover:bg-[#46367a] hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Header */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Trending Gifts</h2>
            <p className="text-gray-500 mt-1">Handpicked favorites loved by everyone</p>
          </div>
          <button className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden ${product.bgColor} mb-4 flex items-center justify-center group-hover:bg-opacity-80 transition-colors`}>
                <span className="text-7xl drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                  {product.emoji}
                </span>
                <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-colors backdrop-blur-sm">
                  <span className="text-xl">♥</span>
                </button>
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium mb-4">
                  {product.category}
                </p>
                
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="text-gray-900 text-xl font-bold">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center h-10 w-10 md:w-auto md:px-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-[#46367a] transition-colors active:scale-95"
                  >
                    <Plus className="w-5 h-5 md:hidden" />
                    <span className="hidden md:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;