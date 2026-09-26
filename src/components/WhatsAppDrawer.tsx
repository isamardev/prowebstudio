import React, { useState } from 'react';
import { X, Send, Sparkles, MessageCircle } from 'lucide-react';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedPreset, setSelectedPreset] = useState(
    "Hi Prowebstudio Agency! I'd like to discuss a custom web development project for my company."
  );
  const [customMsg, setCustomMsg] = useState('');

  if (!isOpen) return null;

  const presets = [
    "Hi Prowebstudio Agency! I'd like to discuss a custom web development project for my company.",
    "Interested in building a high-converting e-commerce store with modern stack.",
    "Need full-stack SaaS architecture and interactive web app development."
  ];

  const handleSend = () => {
    const text = encodeURIComponent(customMsg.trim() || selectedPreset);
    // WhatsApp direct API trigger for +923206030416
    const waUrl = `https://wa.me/923206030416?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#10141b] border border-white/15 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-2xl animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-md">
              <MessageCircle className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                <span>Direct WhatsApp</span>
                <span className="text-xs font-mono text-[#25d366] font-normal">+92 320 6030416</span>
              </h3>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Online & available for briefs</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Prompts */}
        <div className="mt-4">
          <label className="text-[11px] uppercase tracking-wider text-white/60 font-semibold block mb-2">
            Quick Message Starters
          </label>
          <div className="space-y-2">
            {presets.map((msg, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelectedPreset(msg);
                  setCustomMsg(msg);
                }}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition-all cursor-pointer ${
                  selectedPreset === msg
                    ? 'bg-white/15 border border-[#35d8ff] text-white'
                    : 'bg-white/5 border border-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {msg}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input */}
        <div className="mt-3">
          <textarea
            rows={2}
            value={customMsg || selectedPreset}
            onChange={(e) => setCustomMsg(e.target.value)}
            placeholder="Type custom note..."
            className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#25d366] resize-none"
          />
        </div>

        {/* WhatsApp Launch CTA */}
        <button
          onClick={handleSend}
          type="button"
          className="mt-4 w-full py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-[#052912] font-poppins font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#25d366]/20"
        >
          <Send className="w-4 h-4" />
          <span>Launch WhatsApp Chat</span>
        </button>
      </div>
    </div>
  );
};
