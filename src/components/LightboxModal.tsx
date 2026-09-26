import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  tag?: string;
  imageUrl: string;
  onOpenContact: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  tag,
  imageUrl,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#11141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-[4/3] sm:aspect-video w-full bg-black overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain sm:object-cover"
          />
        </div>

        {/* Info & Action Bar */}
        <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#11141c]">
          <div>
            {tag && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#35d8ff] block mb-1">
                {tag}
              </span>
            )}
            <h3 className="font-poppins font-black text-lg sm:text-xl text-white uppercase tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-white/60 font-jakarta mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact(title);
            }}
            type="button"
            className="btn-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Inquire Work</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
