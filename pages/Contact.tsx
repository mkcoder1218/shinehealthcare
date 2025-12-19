import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { sendToTelegram } from '../telegramService';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Auto-select service from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, department: service }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Send to Telegram
    const success = await sendToTelegram(formData);

    if (success) {
      console.log('Form submitted and sent to Telegram:', formData);
      setSubmitted(true);
      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', department: '', message: '' });
      }, 3000);
    } else {
      console.error('Failed to send to Telegram');
      alert('Failed to submit. Please try again or contact us directly.');
    }

    setSending(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t.contact.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b">{t.contact.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.location}</h4>
                    <p className="text-slate-600 whitespace-pre-line">{t.footer.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.phone}</h4>
                    <p className="text-slate-600">+251972717112</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.email}</h4>
                    <p className="text-slate-600">shinehealthcare12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-slate-700">{t.contact.hours.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2"><Clock size={16} /> {t.contact.hours.monFri}</span>
                  <span className="font-semibold">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2"><Clock size={16} /> {t.contact.hours.sat}</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2"><Clock size={16} /> {t.contact.hours.sun}</span>
                  <span className="font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                  <span className="text-red-400 font-semibold block mb-1">{t.contact.hours.emergency}</span>
                  <span className="text-slate-300 text-sm">{t.contact.hours.emergencyDesc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.form.title}</h3>
              <p className="text-slate-600 mb-8">{t.contact.form.description}</p>

              {submitted ? (
                <div className="bg-green-50 text-green-800 p-12 rounded-3xl text-center border border-green-200 animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">{t.contact.form.successTitle}</h4>
                  <p className="text-lg text-green-700 max-w-md mx-auto">{t.contact.form.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.name}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.email}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder-slate-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.service}</label>
                      <div className="relative">
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium appearance-none"
                        >
                          <option value="">{t.contact.form.selectService}</option>
                          <option value={t.services.items.generalMedical.title}>{t.services.items.generalMedical.title}</option>
                          <option value={t.services.items.nutrition.title}>{t.services.items.nutrition.title}</option>
                          <option value={t.services.items.medicalTravel.title}>{t.services.items.medicalTravel.title}</option>
                          <option value={t.services.items.homeCare.title}>{t.services.items.homeCare.title}</option>
                          <option value={t.services.items.mentalHealth.title}>{t.services.items.mentalHealth.title}</option>
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium resize-none placeholder-slate-400"
                      placeholder={t.contact.form.message}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{sending ? t.common.sending : t.common.bookAppointment}</span>
                    {!sending && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-[500px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Map Location" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-red-50 p-4 rounded-full">
              <MapPin className="text-red-500" size={36} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xl">Shine Health Care</div>
              <div className="text-slate-600">Wellness City, HC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;