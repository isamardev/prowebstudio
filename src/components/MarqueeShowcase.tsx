import React, { useState, useEffect, useRef } from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';
import { MarqueeItem } from '../types';
import { Eye } from 'lucide-react';

interface MarqueeShowcaseProps {
  onSelectItem: (item: MarqueeItem) => void;
}

export const MarqueeShowcase: React.FC<MarqueeShowcaseProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const categories = ['All', 'Full-Stack Apps', 'E-Commerce Stores', 'SaaS Platforms', 'Headless & 3D Web'];

  // Pause offscreen marquees to eliminate background GPU decoding load
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredItems =
    selectedCategory === 'All'
      ? MARQUEE_ITEMS
      : MARQUEE_ITEMS.filter((item) => item.category === selectedCategory);

  const half = Math.ceil(filteredItems.length / 2);
  const row1 = filteredItems.slice(0, half);
  const row2 = filteredItems.slice(half);

  // 2x loop with -50% translateX matches seamless infinite loop with half the DOM overhead
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  const animationRunning = isInView && !isHovered;

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-8 sm:pt-10 md:pt-14 pb-14 sm:pb-20 overflow-hidden flex flex-col gap-6 sm:gap-8 relative z-10"
    >
      {/* Header and Filter Controls */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#35d8ff] font-semibold">
            Prowebstudio Agency Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins uppercase text-white tracking-tight mt-1">
            Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-jakarta mt-1 max-w-md">
            Production web platforms, high-converting e-commerce stores, and cloud SaaS apps.
          </p>
        </div>

        {/* Filter Tabs - Native Mobile Horizontal Swipe */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 p-1.5 rounded-xl overflow-x-auto no-scrollbar w-full sm:w-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all shrink-0 whitespace-nowrap cursor-pointer active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-white text-[#0C0C0C] font-semibold shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Rows with hover pause */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-3 sm:gap-4 overflow-hidden py-2"
      >
        {/* Row 1 (Moves Left) */}
        <div
          style={{
            animationPlayState: animationRunning ? 'running' : 'paused'
          }}
          className="flex gap-3 sm:gap-4 min-w-max animate-[marquee_38s_linear_infinite] gpu-accelerated"
        >
          {row1Items.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              onClick={() => onSelectItem(item)}
              className="relative w-[260px] sm:w-[340px] md:w-[400px] h-[170px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#35d8ff] transition-all duration-300 group cursor-pointer shadow-lg shrink-0 gpu-accelerated"
            >
              <img
                src={item.gifUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#35d8ff]">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base font-poppins">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80">
                  <Eye className="w-3.5 h-3.5 text-[#35d8ff]" />
                  <span>Click to inspect preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Moves Right) */}
        <div
          style={{
            animationPlayState: animationRunning ? 'running' : 'paused'
          }}
          className="flex gap-3 sm:gap-4 min-w-max animate-[marquee-reverse_40s_linear_infinite] gpu-accelerated"
        >
          {row2Items.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              onClick={() => onSelectItem(item)}
              className="relative w-[260px] sm:w-[340px] md:w-[400px] h-[170px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#35d8ff] transition-all duration-300 group cursor-pointer shadow-lg shrink-0 gpu-accelerated"
            >
              <img
                src={item.gifUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#35d8ff]">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base font-poppins">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80">
                  <Eye className="w-3.5 h-3.5 text-[#35d8ff]" />
                  <span>Click to inspect preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

