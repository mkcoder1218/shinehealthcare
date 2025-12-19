import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NavItem } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.doctors, path: '/doctors' },
    { label: t.nav.contact, path: '/contact' },
  ];

  /* Updated service list for footer to match the actual services */
  const footerServices = [
    t.services.items.generalMedical.title,
    t.services.items.nutrition.title,
    t.services.items.medicalTravel.title,
    t.services.items.homeCare.title,
    t.services.items.mentalHealth.title
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2.5 text-sm border-b border-slate-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-blue-500" />
              <span>{t.contact.info.phoneNumber || '+251 972 717112'}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} className="text-blue-500" />
              <span>{t.contact.info.emailAddress || 'shinehealthcare12@gmail.com'}</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-blue-400 cursor-pointer transition-colors font-medium">{t.common.emergency}</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors font-medium">{t.common.patientPortal}</span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group" onClick={closeMenu}>
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                <HeartPulse size={28} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">Shine<span className="text-blue-600">Health</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${isActive(item.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Switcher & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200 transform hover:-translate-y-0.5"
              >
                {t.nav.bookAppointment}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl animate-fade-in-up">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-colors ${isActive(item.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              {/* Language Switcher for Mobile */}
              <div className="py-2 px-4">
                <LanguageSwitcher />
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-5 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors"
                  onClick={closeMenu}
                >
                  {t.nav.bookAppointment}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-white">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <HeartPulse size={24} />
                </div>
                <span className="text-2xl font-bold">Shine<span className="text-blue-400">Health</span></span>
              </div>
              <p className="leading-relaxed text-slate-400">
                {t.footer.description}
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all transform hover:scale-110">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all transform hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {[t.nav.about, t.nav.services, t.nav.doctors, t.nav.bookAppointment, t.common.patientPortal].map((link, i) => (
                  <li key={i}>
                    <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6">{t.footer.departments}</h3>
              <ul className="space-y-3">
                {footerServices.map((dept, i) => (
                  <li key={i}>
                    <Link to={`/contact?service=${encodeURIComponent(dept)}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                      {dept}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6">{t.footer.contactUs}</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4 group">
                  <div className="bg-slate-800 p-2 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={18} className="mt-0.5" />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors whitespace-pre-line">{t.footer.location}</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="bg-slate-800 p-2 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors">+251 972 717112</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="bg-slate-800 p-2 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors">shinehealthcare12@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Shine Health Care. {t.common.rightsReserved}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">{t.common.privacyPolicy}</a>
              <a href="#" className="hover:text-blue-400 transition-colors">{t.common.termsOfService}</a>
              <a href="#" className="hover:text-blue-400 transition-colors">{t.common.sitemap}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;