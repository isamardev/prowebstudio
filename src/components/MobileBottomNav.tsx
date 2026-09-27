import React, { useEffect, useState } from 'react';
import { Home, Briefcase, Cpu, Send, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenContact: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState<'home' | 'portfolio' | 'services'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const portfolioEl = document.getElementById('portfolio');
      const servicesEl = document.getElementById('services');

      const portfolioTop = portfolioEl ? portfolioEl.offsetTop - 300 : 700;
      const servicesTop = servicesEl ? servicesEl.offsetTop - 300 : 1800;

      if (scrollY >= servicesTop) {
        setActiveSection('services');
      } else if (scrollY >= portfolioTop) {
        setActiveSection('portfolio');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      style={{
        position: 'fixed',
        bottom: '12px',
        left: '12px',
        right: '12px',
        zIndex: 99999,
      }}
      className="md:hidden max-w-md mx-auto bg-[#090D15]/92 backdrop-blur-2xl border border-white/20 rounded-[24px] px-2 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.22)] select-none pointer-events-auto"
    >
      {/* Top subtle highlight shimmer border */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent pointer-events-none" />

      <div className="flex items-center justify-around">
        {/* 1. Home Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('hero-vertex');
            setActiveSection('home');
          }}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer active:scale-90 ${
            activeSection === 'home'
              ? 'text-[#38bdf8]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <div className="relative">
            <Home className="w-5 h-5 transition-transform" />
            {activeSection === 'home' && (
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Home</span>
        </button>

        {/* 2. Portfolio Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('portfolio');
            setActiveSection('portfolio');
          }}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer active:scale-90 ${
            activeSection === 'portfolio'
              ? 'text-[#38bdf8]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <div className="relative">
            <Briefcase className="w-5 h-5 transition-transform" />
            {activeSection === 'portfolio' && (
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Work</span>
        </button>

        {/* 3. Center Elevated Action Button: Start Project */}
        <div className="relative -top-3.5 px-1 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onOpenContact}
            aria-label="Start Project"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#38bdf8] to-[#818cf8] text-[#061125] shadow-[0_0_24px_rgba(56,189,248,0.75),inset_0_1px_2px_rgba(255,255,255,0.7)] active:scale-90 transition-transform cursor-pointer border-2 border-[#090D15]"
          >
            <Send className="w-5 h-5 fill-current ml-0.5" />
          </button>
          <span className="text-[9px] font-bold text-[#38bdf8] tracking-wider mt-0.5 uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
            Hire Us
          </span>
        </div>

        {/* 4. Services Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('services');
            setActiveSection('services');
          }}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer active:scale-90 ${
            activeSection === 'services'
              ? 'text-[#38bdf8]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <div className="relative">
            <Cpu className="w-5 h-5 transition-transform" />
            {activeSection === 'services' && (
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Services</span>
        </button>

        {/* 5. Direct WhatsApp Chat Tab */}
        <a
          href="https://wa.me/923206030416?text=Hi%20Prowebstudio%20Agency!%20I'd%20like%20to%20discuss%20a%20web%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-emerald-400/90 hover:text-emerald-400 active:scale-90 transition-all cursor-pointer"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-emerald-400/25 text-emerald-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5 text-emerald-400">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
