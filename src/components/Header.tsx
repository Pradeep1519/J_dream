import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-textprimary/10 sticky top-0 z-50">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-paragraph text-xl font-bold text-textprimary hover:text-primary transition-colors">
            {'{ Junior Dream }'}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/programs" className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors">
              Programs
            </Link>
            <Link to="/mentorship" className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors">
              Mentorship
            </Link>
            <Link to="/about" className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/partnerships" className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors">
              Partnerships
            </Link>
            <Link 
              to="/partnerships#contact" 
              className="font-paragraph text-sm bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              {'=> Contact'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-textprimary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-textprimary/10">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/programs" 
                className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/mentorship" 
                className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mentorship
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/partnerships" 
                className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partnerships
              </Link>
              <Link 
                to="/partnerships#contact" 
                className="font-paragraph text-sm bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {'=> Contact'}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
