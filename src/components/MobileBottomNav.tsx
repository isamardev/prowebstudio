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

      const portfolioTop = portfolioEl ? portfolioEl.offsetTop - 200 : 800;
      const servicesTop = servicesEl ? servicesEl.offsetTop - 200 : 2000;

      if (scrollY >= servicesTop) {
        setActiveSection('services');
      } else if (scrollY >= portfolioTop) {
        setActiveSection('portfolio');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      aria-label="Mobile App Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090C12]/92 backdrop-blur-2xl border-t border-white/10 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('hero-vertex');
            setActiveSection('home');
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all active:scale-90 ${
            activeSection === 'home'
              ? 'text-[#38bdf8]'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          <Home className="w-5 h-5 transition-transform" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Home</span>
          {activeSection === 'home' && (
            <span className="w-1 h-1 rounded-full bg-[#38bdf8] mt-0.5 animate-pulse" />
          )}
        </button>

        {/* 2. Portfolio Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('portfolio');
            setActiveSection('portfolio');
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all active:scale-90 ${
            activeSection === 'portfolio'
              ? 'text-[#38bdf8]'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          <Briefcase className="w-5 h-5 transition-transform" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Work</span>
          {activeSection === 'portfolio' && (
            <span className="w-1 h-1 rounded-full bg-[#38bdf8] mt-0.5 animate-pulse" />
          )}
        </button>

        {/* 3. Center CTA: Start Project (Native Action Button) */}
        <button
          type="button"
          onClick={onOpenContact}
          className="relative -top-2 flex flex-col items-center justify-center p-3 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#38bdf8] to-[#818cf8] text-[#061125] shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-90 transition-transform"
        >
          <Send className="w-5 h-5 fill-current" />
          <span className="sr-only">Start Project</span>
        </button>

        {/* 4. Services Tab */}
        <button
          type="button"
          onClick={() => {
            scrollTo('services');
            setActiveSection('services');
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all active:scale-90 ${
            activeSection === 'services'
              ? 'text-[#38bdf8]'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          <Cpu className="w-5 h-5 transition-transform" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Services</span>
          {activeSection === 'services' && (
            <span className="w-1 h-1 rounded-full bg-[#38bdf8] mt-0.5 animate-pulse" />
          )}
        </button>

        {/* 5. Direct WhatsApp Tab */}
        <a
          href="https://wa.me/923206030416?text=Hi%20Prowebstudio%20Agency!%20I'd%20like%20to%20discuss%20a%20web%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-emerald-400/80 hover:text-emerald-400 active:scale-90 transition-all relative"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-1 text-emerald-400">Chat</span>
        </a>
      </div>
    </nav>
  );
};
