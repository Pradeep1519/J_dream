import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function PremiumFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#000000] text-[#F5F5F5] border-t border-[#B8860B]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-black text-[#F5F5F5] mb-6 tracking-wider">
              {'{ Junior Dream }'}
            </h3>
            <p className="font-paragraph text-sm text-[#F5F5F5]/60 mb-4 leading-relaxed">
              Executive grade edtech solutions connecting students with professionals practicing their target careers.
            </p>
            <p className="font-paragraph text-xs text-[#F5F5F5]/40">
              Founded 2025
            </p>
          </div>

          {/* Quick Links - with gold hover */}
          <div>
            <h4 className="font-paragraph text-sm font-bold text-[#B8860B] mb-6 tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'Programs', 'Mentorship', 'About', 'Partnerships'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="font-paragraph text-sm text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-paragraph text-sm font-bold text-[#B8860B] mb-6 tracking-wider">Our Programs</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/programs" className="font-paragraph text-sm text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                Engineering Excellence
              </Link>
              <Link to="/programs" className="font-paragraph text-sm text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                Medical Foundations
              </Link>
              <Link to="/programs" className="font-paragraph text-sm text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                Civil Services Leadership
              </Link>
            </nav>
          </div>

          {/* Contact - with glowing input */}
          <div>
            <h4 className="font-paragraph text-sm font-bold text-[#B8860B] mb-6 tracking-wider">Contact</h4>
            <div className="space-y-4">
              <p className="font-paragraph text-sm text-[#F5F5F5]/60 flex items-center gap-3">
                <MapPin size={16} className="text-[#B8860B]" />
                Gurugram, Haryana
              </p>
              <p className="font-paragraph text-sm text-[#F5F5F5]/60 flex items-center gap-3">
                <Mail size={16} className="text-[#B8860B]" />
                info@juniordream.com
              </p>
              <p className="font-paragraph text-sm text-[#F5F5F5]/60 flex items-center gap-3">
                <Phone size={16} className="text-[#B8860B]" />
                +91 12345 67890
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-[#F5F5F5]/60 hover:text-[#B8860B] transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="border-t border-[#B8860B]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-[#F5F5F5]/40">
              © 2025 Junior Dream Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/partnerships" className="font-paragraph text-xs text-[#F5F5F5]/40 hover:text-[#B8860B] transition-colors">
                Privacy
              </Link>
              <Link to="/partnerships" className="font-paragraph text-xs text-[#F5F5F5]/40 hover:text-[#B8860B] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}