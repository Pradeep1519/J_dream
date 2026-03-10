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

  // Check if current page is homepage (dark background)
  const isHomePage = location.pathname === '/';

  // Text color based on page and scroll
  const getTextColor = () => {
    if (scrolled) return 'text-[#F5F5F5]'; // Dark background when scrolled
    if (isHomePage) return 'text-[#F5F5F5]'; // Homepage has dark background
    return 'text-[#0A0A0A]'; // Other pages have white background
  };

  // Logo color based on page
  const getLogoColor = () => {
    if (scrolled) return 'text-[#F5F5F5]';
    if (isHomePage) return 'text-[#F5F5F5]';
    return 'text-[#0A0A0A]';
  };

  // Background color based on page and scroll
  const getBackgroundColor = () => {
    if (scrolled) return 'bg-[#0A0A0A] border-b border-[#B8860B]/30 backdrop-blur-lg';
    if (isHomePage) return 'bg-transparent';
    return 'bg-white shadow-md'; // White background for other pages
  };

  // Mobile menu background
  const getMobileMenuBg = () => {
    if (isHomePage || scrolled) return 'bg-[#0A0A0A]/95';
    return 'bg-white/95';
  };

  // Mobile menu text color
  const getMobileMenuTextColor = () => {
    if (isHomePage || scrolled) return 'text-[#F5F5F5]';
    return 'text-[#0A0A0A]';
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      } ${getBackgroundColor()}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Color changes based on page */}
          <Link to="/" className="relative group">
            <span className={`font-heading text-2xl font-black tracking-wider transition-colors duration-300 ${getLogoColor()}`}>
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
                className={`relative group font-paragraph text-sm transition-colors duration-300 ${
                  isActive(item.path) 
                    ? 'text-[#B8860B]' 
                    : `${getTextColor()} hover:text-[#B8860B]`
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
              className={`px-6 py-3 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 font-paragraph text-sm rounded-lg`}
            >
              {'=> Contact'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isHomePage || scrolled ? 'text-[#F5F5F5] hover:text-[#B8860B]' : 'text-[#0A0A0A] hover:text-[#B8860B]'
            }`}
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
            className={`lg:hidden py-6 mt-4 border-t ${
              isHomePage || scrolled ? 'border-[#B8860B]/20' : 'border-gray-200'
            } ${getMobileMenuBg()} backdrop-blur-lg rounded-b-2xl`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-paragraph text-sm py-2 px-4 transition-colors duration-300 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-[#B8860B] bg-[#B8860B]/10' 
                      : `${getMobileMenuTextColor()} hover:text-[#B8860B] hover:bg-[#B8860B]/10`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/partnerships#contact"
                className="font-paragraph text-sm bg-[#B8860B] text-white px-6 py-3 hover:bg-[#D4AF37] transition-colors inline-block text-center rounded-lg mx-4 mt-2"
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