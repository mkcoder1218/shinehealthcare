import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', department: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-slate-900 text-white py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1516574187841-693083f7e496?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center animate-scale-in"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light leading-relaxed">Get in touch with us for appointments, inquiries, or emergencies.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed">123 Medical Center Dr.<br />Wellness City, HC 90210</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600 leading-relaxed">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-5 group">
                  <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600 leading-relaxed">contact@shinehealthcare.com<br />support@shinehealthcare.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Clock size={120} />
               </div>
              <h3 className="text-2xl font-bold mb-8 border-b border-slate-700 pb-4 relative z-10">Opening Hours</h3>
              <div className="space-y-4 relative z-10">
                 <div className="flex items-center justify-between text-base">
                   <span className="text-slate-400 flex items-center gap-3"><Clock size={18}/> Mon - Fri</span>
                   <span className="font-bold">8:00 AM - 9:00 PM</span>
                 </div>
                 <div className="flex items-center justify-between text-base">
                   <span className="text-slate-400 flex items-center gap-3"><Clock size={18}/> Saturday</span>
                   <span className="font-bold">9:00 AM - 7:00 PM</span>
                 </div>
                 <div className="flex items-center justify-between text-base">
                   <span className="text-slate-400 flex items-center gap-3"><Clock size={18}/> Sunday</span>
                   <span className="font-bold">10:00 AM - 5:00 PM</span>
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                   <span className="text-red-400 font-bold block mb-2 text-lg uppercase tracking-wider animate-pulse">Emergency Service</span>
                   <span className="text-slate-300">Open 24/7 for all emergencies</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right delay-200">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Book an Appointment</h3>
              <p className="text-slate-600 mb-10 text-lg">Please fill out the form below and we will get back to you shortly.</p>

              {submitted ? (
                <div className="bg-green-50 text-green-800 p-12 rounded-3xl text-center border border-green-200 animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Thank you!</h4>
                  <p className="text-lg text-green-700 max-w-md mx-auto">Your appointment request has been submitted successfully. We will contact you soon to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
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
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
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
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
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
                      <label htmlFor="department" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Department</label>
                      <div className="relative">
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium appearance-none"
                        >
                            <option value="">Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="General Medicine">General Medicine</option>
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium resize-none placeholder-slate-400"
                      placeholder="Tell us about your symptoms or preferred appointment time..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3 group"
                  >
                    <span>Book Appointment</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
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