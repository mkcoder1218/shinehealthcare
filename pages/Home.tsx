import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Clock, ShieldCheck, Star, CheckCircle, Heart, UserPlus } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../LanguageContext';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content: "The level of care I received at Shine Health Care was absolutely outstanding. The staff made me feel comfortable and safe throughout my entire stay.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    content: "Professional, clean, and efficient. Dr. Reynolds explained everything clearly and the follow-up care was exceptional. Highly recommended.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Mother",
    content: "The pediatric department is wonderful. They are so patient with my children and make doctor visits stress-free. We love Shine Health Care!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse-slow delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm hover:shadow-md transition-all">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {t.home.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {t.home.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.home.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                  {t.common.bookNow} <Clock size={18} />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all text-center flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1">
                  {t.common.viewServices} <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500 animate-fade-in delay-300">
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg border border-slate-100 shadow-sm">
                  <div className="p-1 bg-green-100 rounded-full text-green-600"><CheckCircle size={14} /></div> {t.home.features.availability.title}
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg border border-slate-100 shadow-sm">
                  <div className="p-1 bg-blue-100 rounded-full text-blue-600"><CheckCircle size={14} /></div> {t.home.features.specialists.title}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in delay-200 perspective-1000">
              {/* Main Hero Image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] opacity-10 blur-2xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Friendly doctor"
                className="relative rounded-[2.5rem] shadow-2xl object-cover h-[650px] w-full z-10 border-[6px] border-white animate-float"
              />

              {/* Floating Stat Card - Left Bottom */}
              <div className="absolute bottom-20 -left-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xs z-20 border border-white/60 animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-50 p-3 rounded-xl text-green-600 shadow-inner">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">99.8%</div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{t.home.hero.statSuccess}</div>
                  </div>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[99%] rounded-full"></div>
                </div>
              </div>

              {/* Floating Icon - Top Right */}
              <div className="absolute top-10 -right-8 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float delay-700 border border-slate-50">
                <div className="bg-rose-50 p-3 rounded-xl">
                  <Heart className="text-rose-500 fill-rose-500" size={28} />
                </div>
              </div>

              {/* Floating Card - Right Center */}
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-10 border border-white flex items-center gap-3 animate-float delay-1000">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64" alt="User" />
                </div>
                <div className="text-xs font-bold text-slate-700 whitespace-pre-line">
                  {t.home.hero.statPatients}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-30">
            <div className="group p-8 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100 border border-slate-50">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t.home.features.availability.title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.home.features.availability.description}</p>
            </div>

            <div className="group p-8 bg-blue-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
                <Activity size={100} />
              </div>
              <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm relative z-10 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">{t.home.features.specialists.title}</h3>
              <p className="text-blue-100 leading-relaxed relative z-10">{t.home.features.specialists.description}</p>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300 border border-slate-50">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{t.home.features.quality.title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.home.features.quality.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-in-left group">
              <div className="absolute -inset-4 bg-teal-200 rounded-[2.5rem] opacity-30 transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
              <div className="absolute -inset-4 bg-blue-200 rounded-[2.5rem] opacity-30 transform -rotate-3 transition-transform group-hover:-rotate-6 duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Hospital facility"
                className="relative rounded-3xl shadow-xl w-full object-cover h-[500px] z-10"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center shadow-2xl border border-white/50 z-20 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-2">1+</div>
                <div className="text-slate-800 font-bold text-lg uppercase tracking-wide">{t.home.about.yearsExperience}</div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in delay-200">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span> {t.home.about.subtitle}
              </h4>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{t.home.about.title}</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {t.home.about.description}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><ArrowRight size={16} /></div>
                  <span className="text-slate-700 font-medium text-lg">{t.home.about.list1}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><ArrowRight size={16} /></div>
                  <span className="text-slate-700 font-medium text-lg">{t.home.about.list2}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><ArrowRight size={16} /></div>
                  <span className="text-slate-700 font-medium text-lg">{t.home.about.list3}</span>
                </li>
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t.common.learnMore} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 transform origin-top-right z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span> {t.home.testimonials.subtitle} <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            </h4>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">{t.home.testimonials.title}</h2>
            <p className="text-slate-600 text-lg">{t.home.testimonials.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-slate-50 relative" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <div className="absolute -top-6 right-8 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                  <Star size={20} fill="currentColor" />
                </div>
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-blue-50" />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-50 animate-pulse-slow delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/20 backdrop-blur-md">
            <UserPlus size={16} /> {t.home.cta.newPatients}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">{t.home.cta.title}</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">{t.home.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              {t.common.bookAppointment}
            </Link>
            <Link to="/doctors" className="px-10 py-5 bg-blue-700/50 backdrop-blur-sm border border-blue-400 text-white rounded-xl font-bold hover:bg-blue-700 hover:border-blue-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              {t.home.cta.findDoctor}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;