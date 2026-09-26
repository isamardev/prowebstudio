import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { StarfieldCanvas } from './StarfieldCanvas';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastProgress = 0;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Only calculate if near viewport
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
              const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height * 0.5)));
              if (Math.abs(progress - lastProgress) > 0.01) {
                lastProgress = progress;
                setScrollProgress(progress);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textToAnimate =
    "At Prowebstudio Agency, we engineer modern full-stack web applications, scalable SaaS platforms, and high-converting e-commerce systems. With deep expertise across Next.js, React, Node.js, and cloud architecture, we build lightning-fast digital solutions that empower businesses to scale rapidly.";

  const words = textToAnimate.split(' ');

  const stats = [
    { value: '150+', label: 'Websites & Apps', detail: 'Production Shipped' },
    { value: '99.9%', label: 'Uptime Reliability', detail: 'Cloud Architecture' },
    { value: '3.4x', label: 'Conversion Uplift', detail: 'Optimized Funnels' },
    { value: '100%', label: 'On-Time Delivery', detail: 'Agile Engineering' }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 overflow-hidden bg-[#07080B]"
    >
      {/* Background Starfield and Atmospheric Radial Glow (Matches Hero Section) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(14,165,233,0.18),rgba(7,8,11,0.98))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#38bdf8]/15 via-[#818cf8]/12 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <StarfieldCanvas />

      {/* Decorative 3D Float Assets (Responsive & Non-overlapping) */}
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        alt="Moon"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute top-6 sm:top-12 left-2 sm:left-6 md:left-12 w-20 sm:w-32 md:w-44 lg:w-52 object-contain pointer-events-none opacity-40 sm:opacity-80 transition-transform duration-700 animate-[bounce_6s_ease-in-out_infinite]"
        style={{ transform: `translateY(${scrollProgress * 20}px) rotate(${scrollProgress * 15}deg)` }}
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        alt="3D Obj"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute bottom-10 sm:bottom-16 left-4 sm:left-8 md:left-16 w-16 sm:w-28 md:w-36 lg:w-44 object-contain pointer-events-none opacity-40 sm:opacity-80 transition-transform duration-700 animate-[pulse_5s_ease-in-out_infinite]"
        style={{ transform: `translateY(${-scrollProgress * 25}px)` }}
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        alt="Lego"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute top-8 sm:top-14 right-2 sm:right-6 md:right-12 w-20 sm:w-32 md:w-44 lg:w-52 object-contain pointer-events-none opacity-40 sm:opacity-80 transition-transform duration-700"
        style={{ transform: `translateY(${scrollProgress * 25}px) rotate(${-scrollProgress * 20}deg)` }}
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        alt="Group 3D"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute bottom-12 sm:bottom-20 right-4 sm:right-8 md:right-16 w-20 sm:w-32 md:w-40 lg:w-48 object-contain pointer-events-none opacity-40 sm:opacity-80 transition-transform duration-700"
        style={{ transform: `translateY(${-scrollProgress * 20}px)` }}
      />

      {/* Main About Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-[#35d8ff] font-semibold mb-2">
          Agency Origin & Engineering Ethos
        </span>

        <h2 className="hero-heading font-black font-poppins uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,10vw,120px)]">
          About Us
        </h2>

        {/* Dynamic word-reveal paragraph */}
        <div className="mt-8 sm:mt-12 md:mt-14 w-full flex justify-center px-4">
          <p className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-2xl text-base sm:text-lg md:text-xl font-jakarta">
            {words.map((word, index) => {
              const wordThreshold = (index + 1) / words.length;
              const isLit = scrollProgress >= wordThreshold * 0.65;
              return (
                <span
                  key={index}
                  className={`inline-block mr-[0.28em] transition-opacity duration-300 ${
                    isLit ? 'opacity-100 text-white font-semibold' : 'opacity-25 text-white/50'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* Quantitative Rigor Stats Row */}
        <div className="mt-12 sm:mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center backdrop-blur-sm hover:border-[#35d8ff]/40 transition-colors"
            >
              <span className="font-poppins font-black text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90 mt-1">
                {stat.label}
              </span>
              <span className="text-[10px] text-white/50 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-14">
          <button
            onClick={onOpenContact}
            type="button"
            className="btn-primary px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 group"
          >
            <span>Work With Our Agency</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
