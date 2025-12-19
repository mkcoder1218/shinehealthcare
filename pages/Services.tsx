import React from 'react';
import { Stethoscope, Apple, Plane, Home, Brain, Link as LinkIcon } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: ServiceItem[] = [
    {
      id: 1,
      title: t.services.items.generalMedical.title,
      description: t.services.items.generalMedical.description,
      icon: Stethoscope
    },
    {
      id: 2,
      title: t.services.items.nutrition.title,
      description: t.services.items.nutrition.description,
      icon: Apple
    },
    {
      id: 3,
      title: t.services.items.medicalTravel.title,
      description: t.services.items.medicalTravel.description,
      icon: Plane
    },
    {
      id: 4,
      title: t.services.items.homeCare.title,
      description: t.services.items.homeCare.description,
      icon: Home
    },
    {
      id: 5,
      title: t.services.items.mentalHealth.title,
      description: t.services.items.mentalHealth.description,
      icon: Brain
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-4">{t.services.subtitle}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-blue-50 text-lg max-w-2xl mx-auto">{t.services.description}</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4 flex-grow">{service.description}</p>

                  <div className="mt-auto">
                    <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-sm gap-2">
                      {t.common.bookNow} <LinkIcon size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.cta.title}</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{t.services.cta.description}</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
            {t.common.bookAppointment}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;