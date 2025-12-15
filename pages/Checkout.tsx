import React, { useState } from 'react';
import { ArrowLeft, Lock, CreditCard, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = 0; // Free shipping logic
  const tax = cartTotal * 0.08;
  const grandTotal = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-12 h-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Thank you for your purchase. We've sent a confirmation email to your inbox. Your happiness is on its way! 🎁
        </p>
        <Link 
          to="/"
          className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-[#46367a] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link to="/" className="text-primary font-bold hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              Secure Checkout
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Shipping Details</h2>
            <p className="text-gray-500">Where should we send your surprise?</p>
          </div>

          <form id="checkout-form" onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">First Name</label>
                <input required type="text" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">Last Name</label>
                <input required type="text" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 ml-1">Email Address</label>
              <input required type="email" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 ml-1">Street Address</label>
              <input required type="text" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="123 Surprise Lane" />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">City</label>
                <input required type="text" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="City" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">Zip Code</label>
                <input required type="text" className="w-full h-12 px-4 rounded-xl border-gray-200 bg-gray-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="10001" />
              </div>
            </div>
          </form>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Payment</h3>
              <div className="flex gap-2 text-gray-400">
                <CreditCard className="w-6 h-6" />
                <Lock className="w-6 h-6" />
              </div>
            </div>
            {/* Mock Payment Fields */}
            <div className="space-y-4 opacity-50 pointer-events-none select-none filter grayscale">
               <div className="w-full h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center px-4 text-gray-400">Card number</div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center px-4 text-gray-400">MM / YY</div>
                  <div className="w-full h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center px-4 text-gray-400">CVC</div>
               </div>
            </div>
            <p className="text-xs text-center text-gray-400 italic">* Payment fields disabled for demo</p>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-white">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center text-2xl shrink-0`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-gray-200 my-6"></div>

            <div className="space-y-3">
               <div className="flex justify-between text-sm text-gray-500">
                 <span>Subtotal</span>
                 <span className="font-bold text-gray-900">₹{cartTotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-sm text-gray-500">
                 <span>Shipping estimate</span>
                 <span className="font-bold text-secondary">Free</span>
               </div>
               <div className="flex justify-between text-sm text-gray-500">
                 <span>Tax estimate</span>
                 <span className="font-bold text-gray-900">₹{tax.toFixed(2)}</span>
               </div>
               <div className="flex justify-between items-end pt-4 border-t border-gray-100">
                 <span className="text-lg font-bold text-gray-900">Total</span>
                 <span className="text-3xl font-black text-primary">₹{grandTotal.toFixed(2)}</span>
               </div>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className="w-full mt-8 bg-primary hover:bg-[#46367a] text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Pay ₹{grandTotal.toFixed(2)} & Send Gift</>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-xs font-bold text-gray-400">
              <Lock className="w-3 h-3" /> Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;