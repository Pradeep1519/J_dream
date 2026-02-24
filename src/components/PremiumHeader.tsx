import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'About', path: '/about' },
    { name: 'Partnerships', path: '/partnerships' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A0A0A] border-b border-[#B8860B]/30 py-2 backdrop-blur-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with gold glow */}
          <Link to="/" className="relative group">
            <span className="font-heading text-2xl font-black text-[#F5F5F5] tracking-wider">
              {'{ Junior Dream }'}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group font-paragraph text-sm transition-colors ${
                  isActive(item.path) 
                    ? 'text-[#B8860B]' 
                    : 'text-[#F5F5F5] hover:text-[#B8860B]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-[#B8860B] group-hover:w-full transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            <Link
              to="/partnerships#contact"
              className="px-6 py-3 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#0A0A0A] transition-all duration-300 font-paragraph text-sm"
            >
              {'=> Contact'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F5F5F5] hover:text-[#B8860B] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden py-6 mt-4 border-t border-[#B8860B]/20 bg-[#0A0A0A]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-paragraph text-sm py-2 transition-colors ${
                    isActive(item.path) 
                      ? 'text-[#B8860B]' 
                      : 'text-[#F5F5F5] hover:text-[#B8860B]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/partnerships#contact"
                className="font-paragraph text-sm bg-[#B8860B] text-[#0A0A0A] px-6 py-3 hover:bg-[#D4AF37] transition-colors inline-block text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {'=> Contact'}
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}