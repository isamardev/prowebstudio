import React from 'react';
import { StarfieldCanvas } from './StarfieldCanvas';
import { ArrowRight } from 'lucide-react';

interface HeroVertexProps {
  onOpenContact: (prefill?: string) => void;
  onOpenCardLightbox?: (card: any) => void;
  onOpenWhatsApp: () => void;
}

export const HeroVertex: React.FC<HeroVertexProps> = ({
  onOpenContact,
  onOpenWhatsApp
}) => {
  return (
    <section
      id="hero-vertex"
      className="relative w-full bg-[#07080B] overflow-hidden pt-20 sm:pt-24 md:pt-26 pb-8 sm:pb-12 flex flex-col items-center justify-center"
    >
      {/* Background Starfield and Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(14,165,233,0.18),rgba(7,8,11,0.98))] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#38bdf8]/10 via-[#818cf8]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <StarfieldCanvas />

      {/* Hero Content Lockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <span className="font-medium tracking-wide">
            Prowebstudio Agency · Full-Stack Web Engineering
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
          <span className="hidden sm:inline-block text-[#38bdf8] font-mono text-[11px]">
            Accepting Q2/Q3 Projects
          </span>
        </div>

        {/* H1 Main Heading */}
        <h1 className="font-poppins font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05] drop-shadow-[0_0_35px_rgba(130,180,255,0.25)] max-w-4xl text-balance">
          Engineering Modern <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Web Applications</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed text-balance font-jakarta">
          <strong className="text-white font-medium">Prowebstudio Agency</strong> builds bespoke full-stack web applications, high-converting e-commerce platforms, scalable SaaS architectures, and interactive digital flagships engineered for growth.
        </p>

        {/* Modern Button Group */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onOpenContact()}
            type="button"
            className="btn-primary px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={() => {
              const el = document.querySelector('#services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            type="button"
            className="btn-secondary px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium"
          >
            <span>Explore services & stack</span>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Quick Action Button on Desktop (On mobile, integrated into native bottom dock) */}
      <a
        href="https://wa.me/923206030416?text=Hi%20Prowebstudio%20Agency!%20I'd%20like%20to%20discuss%20a%20web%20development%20project."
        target="_blank"
        rel="noopener noreferrer"
        title="Direct WhatsApp: +92 320 6030416"
        aria-label="Direct message via WhatsApp (+92 320 6030416)"
        className="hidden md:flex fixed right-6 bottom-6 w-14 h-14 rounded-full bg-[#25d366] text-white items-center justify-center z-40 shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/25 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] group"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 fill-white group-hover:scale-105 transition-transform">
          <path d="M16 2.5a13.5 13.5 0 0 0-11.4 20.8l-1.9 5.8 6-1.9A13.5 13.5 0 1 0 16 2.5zm7.3 19.3c-.3.8-1.7 1.5-2.4 1.6-.6.1-1.4.3-2.3 0-1.8-.6-4.5-2.7-6.2-4.9-.3-.5-1.5-2-1.5-3.8s.9-2.7 1.2-3.1c.3-.3.7-.4 1-.4h.4c.2 0 .5-.1.7.5.3.7.9 2.2 1 2.4s.2.5 0 .8c-.1.3-.2.5-.4.7l-.4.5c-.2.2-.4.4-.1.8.3.5 1.2 1.9 2 2.6.7.6 1.4.9 1.7 1 .3.1.5.1.8-.1.2-.2.8-1 1-1.3.2-.3.5-.2.8-.1l2.5 1.2c.3.1.5.2.6.4.1.3.1 1.2-.2 1.9z" />
        </svg>
      </a>
    </section>
  );
};
