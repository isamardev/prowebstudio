import React from 'react';
import { ArrowUp, Sparkles, Globe, Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08080a] text-white/70 border-t border-white/10 px-4 sm:px-8 md:px-12 py-12 sm:py-16 relative z-30">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Top Tier: Big Brand Callout & Quick Inquire */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#35d8ff] animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#35d8ff]">
                Prowebstudio Agency · Accepting New Client Projects
              </span>
            </div>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
              Ready to build your next web application?
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              type="button"
              className="btn-primary px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider"
            >
              <span>Initiate Project</span>
            </button>

            <button
              onClick={scrollToTop}
              type="button"
              title="Return to top"
              aria-label="Scroll back to top"
              className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Direct Channels Bar: Email & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:prowebstudio.agency@gmail.com"
            className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#35d8ff]/50 hover:bg-white/[0.06] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#35d8ff]/15 text-[#35d8ff] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-white/50 block">Official Inquiries Email</span>
                <span className="text-white font-mono text-xs sm:text-sm font-semibold group-hover:text-[#35d8ff] transition-colors">
                  prowebstudio.agency@gmail.com
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#35d8ff] transition-colors" />
          </a>

          <a
            href="https://wa.me/923206030416?text=Hi%20Prowebstudio%20Agency!%20I'd%20like%20to%20discuss%20a%20web%20development%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/[0.06] border border-[#25d366]/20 hover:border-[#25d366]/60 hover:bg-[#25d366]/[0.1] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25d366]/20 text-[#25d366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-[#25d366]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#25d366]/80 block">Direct WhatsApp Chat</span>
                <span className="text-white font-mono text-xs sm:text-sm font-semibold group-hover:text-[#25d366] transition-colors">
                  +92 320 6030416
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#25d366]/70 group-hover:text-[#25d366] transition-colors" />
          </a>
        </div>

        {/* Bottom Tier: Copyright, Studio Time & Clean Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-jakarta text-white/50">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/80 font-medium">
              Prowebstudio Agency — Full-Stack Web Development
            </span>
            <span>·</span>
            <span>All Rights Reserved © {new Date().getFullYear()}</span>
            <span>·</span>
            <span className="flex items-center gap-1 font-mono text-[11px] text-[#8ef4ff]">
              <Globe className="w-3 h-3" />
              <span>Agency Hours: 09:00 - 18:00 EST</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ArtStation
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
