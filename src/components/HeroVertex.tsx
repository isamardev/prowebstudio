import React from 'react';
import { StarfieldCanvas } from './StarfieldCanvas';
import { ArrowRight, Sparkles, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

interface HeroVertexProps {
  onOpenContact: (prefill?: string) => void;
  onOpenCardLightbox?: (card: any) => void;
  onOpenWhatsApp: () => void;
}

export const HeroVertex: React.FC<HeroVertexProps> = ({
  onOpenContact,
  onOpenWhatsApp
}) => {
  const techRow1 = [
    { name: 'Next.js', tag: 'Full-Stack React', color: '#ffffff' },
    { name: 'Node.js', tag: 'High-Performance APIs', color: '#22c55e' },
    { name: 'Tailwind', tag: 'Speed & Design', color: '#38bdf8' },
    { name: 'SaaS', tag: 'Cloud Scalable', color: '#818cf8' },
    { name: 'E-Commerce', tag: 'High-Converting', color: '#f59e0b' },
    { name: 'React 19', tag: 'Modern Frontend', color: '#38bdf8' },
    { name: 'TypeScript', tag: 'Type-Safe', color: '#60a5fa' },
  ];

  const techRow2 = [
    { name: 'SaaS Platforms', tag: 'Multi-Tenant Systems', color: '#818cf8' },
    { name: 'E-Commerce Stores', tag: 'Shopify & Custom', color: '#f59e0b' },
    { name: 'Next.js App Router', tag: 'Server Components', color: '#ffffff' },
    { name: 'Tailwind CSS', tag: 'Design Systems', color: '#38bdf8' },
    { name: 'Node.js Backends', tag: 'Microservices', color: '#22c55e' },
    { name: 'Cloud Architecture', tag: 'AWS & Vercel', color: '#38bdf8' },
    { name: 'REST & GraphQL', tag: 'API Engine', color: '#ec4899' },
  ];

  return (
    <section
      id="hero-vertex"
      className="relative w-full bg-[#07080B] overflow-hidden pt-3 sm:pt-16 md:pt-28 pb-8 sm:pb-12 flex flex-col items-center justify-center"
    >
      {/* Background Starfield and Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(14,165,233,0.18),rgba(7,8,11,0.98))] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#38bdf8]/10 via-[#818cf8]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <StarfieldCanvas />

      {/* NATIVE MOBILE APP TOP BAR (Visible only on mobile devices) */}
      <div className="md:hidden w-full px-4 mb-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-black font-black text-sm shadow-[0_0_12px_rgba(56,189,248,0.4)]">
            P
          </div>
          <div className="flex flex-col text-left">
            <span className="font-poppins font-bold text-sm tracking-tight text-white leading-none">
              ProWebStudio
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-mono font-medium leading-none">
                Available for Q2/Q3
              </span>
            </div>
          </div>
        </div>

        {/* Quick WhatsApp Action Button */}
        <a
          href="https://wa.me/923206030416?text=Hi%20Prowebstudio%20Agency!%20I'd%20like%20to%20discuss%20a%20web%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Contact"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>Chat</span>
        </a>
      </div>

      {/* Hero Content Lockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Availability Badge (Desktop view) */}
        <div className="hidden md:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs sm:text-sm text-slate-300 mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <span className="font-medium tracking-wide">
            Prowebstudio Agency · Full-Stack Web Engineering
          </span>
          <span className="inline-block w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[#38bdf8] font-mono text-[11px]">
            Accepting Q2/Q3 Projects
          </span>
        </div>

        {/* Mobile Mini Badge */}
        <div className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-[11px] text-slate-300 mb-3">
          <Zap className="w-3 h-3 text-[#38bdf8]" />
          <span className="font-medium">Full-Stack Digital Agency</span>
        </div>

        {/* H1 Main Heading */}
        <h1 className="font-poppins font-black text-[26px] sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.1] sm:leading-[1.05] drop-shadow-[0_0_35px_rgba(130,180,255,0.25)] max-w-4xl text-balance">
          Engineering Modern <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Web Applications</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed text-balance font-jakarta">
          <strong className="text-white font-medium">Prowebstudio Agency</strong> builds bespoke full-stack web applications, high-converting e-commerce platforms, and scalable SaaS architectures engineered for growth.
        </p>

        {/* Modern Button Group - Strictly 1 Row Side-by-Side */}
        <div className="mt-4 sm:mt-7 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-sm sm:max-w-md px-1">
          <button
            onClick={() => onOpenContact()}
            type="button"
            className="btn-primary flex-1 py-3 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform"
          >
            <span>Start Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-black shrink-0" />
          </button>

          <button
            onClick={() => {
              const el = document.querySelector('#services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            type="button"
            className="btn-secondary flex-1 py-3 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-sm font-medium flex items-center justify-center whitespace-nowrap active:scale-95 transition-transform"
          >
            <span>Our Services</span>
          </button>
        </div>

        {/* Animated Tech Stack Marquee (Next.js, Node.js, Tailwind, SaaS, E-Commerce) Moving Left & Right */}
        <div className="relative w-full max-w-4xl mx-auto mt-6 sm:mt-8 overflow-hidden py-1">
          {/* Side Fading Masks for Seamless Flow */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#07080B] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#07080B] to-transparent z-10" />

          <div className="flex flex-col gap-2 sm:gap-2.5 overflow-hidden">
            {/* Row 1 - Glides Left */}
            <div className="flex gap-2 sm:gap-2.5 min-w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] gpu-accelerated">
              {[...techRow1, ...techRow1].map((tech, idx) => (
                <div
                  key={`hero-row1-${tech.name}-${idx}`}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/60 backdrop-blur-md transition-all duration-200 select-none shadow-sm shrink-0"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="font-poppins font-semibold text-xs sm:text-sm text-white tracking-wide">
                    {tech.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/40 font-mono">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2 - Glides Right */}
            <div className="flex gap-2 sm:gap-2.5 min-w-max animate-[marquee-reverse_24s_linear_infinite] hover:[animation-play-state:paused] gpu-accelerated">
              {[...techRow2, ...techRow2].map((tech, idx) => (
                <div
                  key={`hero-row2-${tech.name}-${idx}`}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#818cf8]/60 backdrop-blur-md transition-all duration-200 select-none shadow-sm shrink-0"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="font-poppins font-semibold text-xs sm:text-sm text-white tracking-wide">
                    {tech.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/40 font-mono">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Quick Stats Strip (Native App Dashboard Style) */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-sm mt-4 pt-3 border-t border-white/10 md:hidden">
          <div className="flex flex-col items-center bg-white/[0.03] border border-white/5 rounded-xl py-2 px-1">
            <span className="font-poppins font-black text-sm text-[#38bdf8] leading-none">
              150+
            </span>
            <span className="text-[9px] text-white/60 font-jakarta mt-1">
              Apps Shipped
            </span>
          </div>
          <div className="flex flex-col items-center bg-white/[0.03] border border-white/5 rounded-xl py-2 px-1">
            <span className="font-poppins font-black text-sm text-emerald-400 leading-none">
              99.9%
            </span>
            <span className="text-[9px] text-white/60 font-jakarta mt-1">
              Cloud Uptime
            </span>
          </div>
          <div className="flex flex-col items-center bg-white/[0.03] border border-white/5 rounded-xl py-2 px-1">
            <span className="font-poppins font-black text-sm text-amber-300 leading-none">
              5.0 ★
            </span>
            <span className="text-[9px] text-white/60 font-jakarta mt-1">
              Client Rating
            </span>
          </div>
        </div>

        {/* Trust Footprint */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/50 font-jakarta">
          <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Verified Production Agency · Global Delivery</span>
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
