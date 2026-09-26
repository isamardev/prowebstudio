import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ChevronDown, ChevronUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { StarfieldCanvas } from './StarfieldCanvas';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="w-full relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 overflow-hidden bg-[#07080B] text-[#D7E2EA] z-20"
    >
      {/* Background Starfield and Atmospheric Radial Glow (Matches Hero & About) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(14,165,233,0.18),rgba(7,8,11,0.98))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#38bdf8]/15 via-[#818cf8]/12 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <StarfieldCanvas />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#35d8ff] font-semibold mb-2">
            Full-Stack Web Engineering
          </span>
          <h2 className="font-poppins font-black uppercase text-white text-[clamp(2.5rem,8vw,110px)] leading-none tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl font-jakarta">
            Comprehensive web engineering from custom responsive frontends to cloud-native backends, SaaS architectures, and high-converting storefronts.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="py-6 sm:py-8 md:py-10 transition-colors hover:bg-white/[0.02]"
              >
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 cursor-pointer select-none group"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-poppins font-black text-3xl sm:text-5xl md:text-6xl text-white/40 group-hover:text-[#35d8ff] transition-colors tabular-nums">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-poppins font-bold uppercase text-xl sm:text-2xl md:text-3xl text-white tracking-tight group-hover:text-[#35d8ff] transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-jakarta text-xs sm:text-sm text-white/65 max-w-xl mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand Toggle */}
                  <div className="self-end sm:self-center shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white">
                    <span className="hidden sm:inline">
                      {isExpanded ? 'Hide Specs' : 'View Specs'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center bg-white/5 shadow-sm group-hover:border-[#35d8ff]/50 transition-all">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200 bg-white/[0.02] p-5 sm:p-6 rounded-2xl border border-white/10">
                    {/* Deliverables */}
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-[#35d8ff] block mb-2 font-mono">
                        Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm font-jakarta text-white/85">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#35d8ff] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & Stack */}
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-white/50 block mb-2 font-mono">
                        Software & Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="bg-white/5 text-white/90 border border-white/10 text-xs px-2.5 py-1 rounded-md font-medium font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action & Starting Price */}
                    <div className="flex flex-col justify-between items-start md:items-end">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-white/50 block font-mono">
                          Typical Engagement
                        </span>
                        <span className="font-poppins font-black text-xl sm:text-2xl text-[#35d8ff]">
                          from {service.startingPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectService(service.title)}
                        type="button"
                        className="btn-primary mt-4 px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
                      >
                        <span>Inquire this service</span>
                        <ArrowUpRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
