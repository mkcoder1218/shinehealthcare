import React from 'react';
import { Heart, Brain, Bone, Baby, Stethoscope, Eye, Activity, Scissors, Link as LinkIcon, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Comprehensive care for your heart, ranging from routine checkups to complex surgeries.',
    icon: Heart
  },
  {
    id: 2,
    title: 'Neurology',
    description: 'Advanced diagnosis and treatment for disorders of the nervous system, brain, and spine.',
    icon: Brain
  },
  {
    id: 3,
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.',
    icon: Bone
  },
  {
    id: 4,
    title: 'Pediatrics',
    description: 'Dedicated healthcare for infants, children, and adolescents in a child-friendly environment.',
    icon: Baby
  },
  {
    id: 5,
    title: 'General Medicine',
    description: 'Primary care services for acute and chronic illnesses for patients of all ages.',
    icon: Stethoscope
  },
  {
    id: 6,
    title: 'Ophthalmology',
    description: 'Complete eye care services including vision testing, surgery, and disease management.',
    icon: Eye
  },
  {
    id: 7,
    title: 'Emergency Care',
    description: '24/7 rapid response for critical and life-threatening medical conditions.',
    icon: Activity
  },
  {
    id: 8,
    title: 'Surgery',
    description: 'State-of-the-art surgical procedures utilizing minimally invasive techniques.',
    icon: Scissors
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-blue-600 text-white py-24 lg:py-40 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow delay-500"></div>
         
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-blue-500/50 backdrop-blur rounded-full text-sm font-semibold mb-4 border border-blue-400">World-Class Facilities</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Medical Services</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-light leading-relaxed">We offer a wide range of specialized medical services to cater to your every health need.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-slate-100 hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110 transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">{service.description}</p>
                  
                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <ul className="text-sm text-slate-500 space-y-2 mb-6">
                      <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Specialist Consultation</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Advanced Diagnostics</li>
                    </ul>
                    <Link to="/contact" className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-all font-semibold text-sm group-hover:shadow-md">
                      Book Now <LinkIcon size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="background" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-105 hover:scale-100" />
            <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need a Specialist?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">Our team of experts is ready to help you back to full health. Book an appointment today and take the first step towards recovery.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/50 border border-blue-500">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;