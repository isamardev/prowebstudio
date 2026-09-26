import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefillService?: string) => void;
  onOpenStoreTheme?: (themeId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Origin', href: '#hero-vertex' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 justify-center bg-transparent pointer-events-none transition-all duration-300">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between glass-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 pointer-events-auto transition-all duration-300">
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#hero-vertex"
            onClick={(e) => handleLinkClick(e, '#hero-vertex')}
            className="flex items-center gap-2.5 text-white font-poppins font-black text-base sm:text-lg tracking-tight hover:opacity-90 transition-opacity shrink-0"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-[#0284c7] via-[#38bdf8] to-[#818cf8] flex items-center justify-center shadow-[0_0_14px_rgba(56,189,248,0.5)] border border-white/20">
              <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#061125] stroke-[2.75]" />
            </span>
            <span className="tracking-wide font-extrabold uppercase">
              PROWEB<span className="text-[#38bdf8]">STUDIO</span> <span className="text-white/50 text-xs font-mono ml-0.5">AGENCY</span>
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#38bdf8] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenContact()}
              type="button"
              className="btn-primary hidden sm:inline-flex px-5 py-2 text-xs sm:text-sm"
            >
              <span>Start Project</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8 transition-all animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4 text-left border-b border-white/10 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-medium text-white/90 hover:text-white py-2 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              type="button"
              className="btn-primary w-full py-3.5 text-center text-sm"
            >
              <span>Start Project</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Web Development Consultation');
              }}
              type="button"
              className="btn-secondary w-full py-3 text-center text-sm"
            >
              Book Strategy Consultation
            </button>
          </div>

          <div className="mt-auto pt-6 text-xs text-white/40 text-center">
            Prowebstudio Agency — Full-Stack Web Engineering © {new Date().getFullYear()}
          </div>
        </div>
      )}
    </>
  );
};
