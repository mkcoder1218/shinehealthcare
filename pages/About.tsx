import React from 'react';
import { Target, Eye, Award, Users, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Page Header */}
      <div className="relative bg-slate-900 text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About Shine Health</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light leading-relaxed">Dedicated to excellence in patient care, education, and research.</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 border border-blue-100">Since 1998</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">Our History & Legacy</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Founded in 1998, Shine Health Care began as a small community clinic with a vision to provide accessible healthcare to all. Over the last two decades, we have grown into a premier multi-specialty hospital, renowned for our commitment to clinical excellence and compassionate care.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Today, we serve over 100,000 patients annually with a team of over 200 specialized doctors and 500 support staff. Our facilities have expanded to include state-of-the-art diagnostic centers, advanced surgical suites, and a dedicated cancer research institute.
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">25+</span>
                    <span className="text-sm text-slate-500">Years</span>
                 </div>
                 <div className="w-px bg-slate-200"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">100k+</span>
                    <span className="text-sm text-slate-500">Patients/Year</span>
                 </div>
                 <div className="w-px bg-slate-200"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">50+</span>
                    <span className="text-sm text-slate-500">Awards</span>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in delay-200 relative">
               <div className="absolute inset-0 bg-blue-600/5 rounded-[2rem] transform rotate-6 z-0"></div>
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Hospital building" className="relative z-10 rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-12 hover:-translate-y-2 transition-transform duration-500" />
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Medical team" className="relative z-10 rounded-2xl shadow-xl w-full h-64 object-cover transform -translate-y-4 hover:-translate-y-8 transition-transform duration-500" />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-[2.5rem] border border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 animate-fade-in-up delay-100 group">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform"><Target size={32} /></div>
                <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">To improve the health and well-being of the communities we serve by providing exceptional, compassionate, and accessible healthcare services.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-10 rounded-[2.5rem] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.1)] transition-all duration-300 animate-fade-in-up delay-200 group">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-teal-500 text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform"><Eye size={32} /></div>
                <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">To be the most trusted healthcare partner, setting the standard for quality and innovation in medical care globally.</p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-16 animate-fade-in-up">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Our Culture</h4>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">The principles that guide our work every single day.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-fade-in-up delay-100 group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Award size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Excellence</h4>
                <p className="text-slate-600">We strive for the highest quality in clinical care and service.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-fade-in-up delay-200 group">
                <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <Users size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-rose-600 transition-colors">Compassion</h4>
                <p className="text-slate-600">We treat every patient with dignity, kindness, and empathy.</p>
              </div>
               <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-fade-in-up delay-300 group">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Integrity</h4>
                <p className="text-slate-600">We adhere to high moral principles and professional standards.</p>
              </div>
               <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-fade-in-up delay-400 group">
                <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Activity size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Innovation</h4>
                <p className="text-slate-600">We embrace change and continuously improve medical practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-8">Join our growing family</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
               Contact Us Today <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default About;