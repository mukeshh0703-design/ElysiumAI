import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showGlow, setShowGlow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setShowGlow(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          showGlow
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* LOGO - Left side on all screens */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/elysium_ai_logo.png"
              alt="Elysium AI Logo"
              className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 object-contain"
            />
            <span className="text-xl font-bold text-white hidden sm:block">
              Elysium AI
            </span>
          </button>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white
                         rounded-lg font-semibold text-sm
                         shadow-[0_0_20px_rgba(59,130,246,0.4)]
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                         transition-all duration-300 hover:scale-105 inline-block"
            >
              Free Automation Audit
            </a>
          </div>

          {/* MOBILE MENU TOGGLE - Right side on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* MOBILE CTA */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white
                           rounded-lg font-semibold text-sm
                           shadow-[0_0_20px_rgba(59,130,246,0.4)]
                           hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                           transition-all duration-300 hover:scale-105
                           w-full text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Automation Audit
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
