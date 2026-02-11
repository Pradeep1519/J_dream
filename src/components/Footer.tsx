import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-paragraph text-lg font-bold mb-6">{'{ Junior Dream }'}</h3>
            <p className="font-paragraph text-sm text-secondary-foreground/80 mb-4">
              Executive grade edtech solutions connecting students with professionals practicing their target careers.
            </p>
            <p className="font-paragraph text-xs text-secondary-foreground/60">
              Founded 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-paragraph text-base font-semibold mb-6 text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/programs" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Programs
              </Link>
              <Link to="/mentorship" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Mentorship
              </Link>
              <Link to="/about" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/partnerships" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Partnerships
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-paragraph text-base font-semibold mb-6 text-primary">Our Programs</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/programs" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Engineering Excellence
              </Link>
              <Link to="/programs" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Civil Services Leadership
              </Link>
              <Link to="/programs" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Medical Foundations
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-paragraph text-base font-semibold mb-6 text-primary">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-paragraph text-sm text-secondary-foreground/80">
                  Gurugram, Haryana, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@juniordream.com" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@juniordream.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-secondary-foreground/60">
              © 2025 Junior Dream Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/partnerships" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/partnerships" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
