
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Lumina<span className="text-indigo-600">AI</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-slate-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#demo" className="hover:text-indigo-600 transition-colors">Try Demo</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="px-5 py-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
            onClick={() => alert('Login flow would start here.')}
          >
            Log In
          </button>
          <button 
            className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
            onClick={() => alert('Sign up flow would start here.')}
          >
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
