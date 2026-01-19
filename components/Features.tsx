
import React from 'react';

const FeatureCard = ({ title, description, icon, color }: { title: string, description: string, icon: React.ReactNode, color: string }) => (
  <div className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-indigo-100 transition-all hover:shadow-xl group">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Why Lumina?</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Designed for the curious, built for the achievers.</p>
          <p className="text-lg text-slate-500">Traditional tutoring is expensive and limited. We've democratized elite education with AI that understands you better than any human can.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Adaptive Learning"
            description="Lumina analyzes your learning style and adjusts its explanations, difficulty, and pace to match your unique needs."
            color="bg-indigo-100 text-indigo-600"
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
          <FeatureCard 
            title="Multi-Subject Mastery"
            description="From Calculus to Creative Writing, Lumina is trained on millions of educational resources across every major academic field."
            color="bg-purple-100 text-purple-600"
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
          />
          <FeatureCard 
            title="Interactive Solving"
            description="Don't just get the answer. Work through problems step-by-step with hints that nudge you in the right direction."
            color="bg-pink-100 text-pink-600"
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
