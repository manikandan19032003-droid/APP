
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Social Proof */}
        <div className="py-12 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale filter">
            <div className="font-bold text-2xl">STANFORD</div>
            <div className="font-bold text-2xl">MIT</div>
            <div className="font-bold text-2xl">HARVARD</div>
            <div className="font-bold text-2xl">OXFORD</div>
            <div className="font-bold text-2xl">CALTECH</div>
          </div>
        </div>

        <Features />
        <DemoSection />

        {/* Testimonial Section */}
        <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="mb-10 flex justify-center">
               <div className="flex space-x-1">
                 {[1, 2, 3, 4, 5].map(i => (
                   <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
               </div>
            </div>
            <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-10 max-w-4xl mx-auto">
              "Lumina transformed my GPA from a 2.8 to a 3.9 in just one semester. The way it explains physics is like magic. I wish I had this years ago!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img src="https://picsum.photos/seed/sarah/100/100" className="w-16 h-16 rounded-full border-4 border-white/20 shadow-xl" alt="Student" />
              <div className="text-left">
                <p className="font-bold text-xl">Sarah Johnson</p>
                <p className="text-indigo-200">Pre-Med Student, UCLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.3),transparent)]"></div>
               <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 relative z-10">Ready to unlock your <br /> full potential?</h2>
               <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">Start your 7-day free trial today. No credit card required. Cancel anytime.</p>
               <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                 <button className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 transition-all active:scale-95">
                   Get Started Now
                 </button>
                 <button className="px-10 py-5 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all active:scale-95">
                   View Pricing
                 </button>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
