import React, { useEffect, useRef } from 'react';

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      twinkleSpeed: number;
      driftSpeed: number;
    }

    // Crisp, performance-tuned star count
    const starCount = Math.min(90, Math.floor((width * height) / 9000));
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const baseAlpha = 0.2 + Math.random() * 0.65;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.85 ? Math.random() * 1.3 + 0.5 : Math.random() * 2.0 + 1.2,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: 0.012 + Math.random() * 0.02,
        driftSpeed: 0.08 + Math.random() * 0.15
      };
    });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animationId) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let tick = 0;
    const render = () => {
      if (!isVisible) {
        animationId = 0;
        return;
      }

      tick++;
      ctx.clearRect(0, 0, width, height);

      // Fast single batch pass for all stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha = star.baseAlpha + Math.sin(tick * star.twinkleSpeed + i) * 0.2;
        star.y -= star.driftSpeed;
        if (star.y < -5) {
          star.y = height + 5;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${Math.max(0.08, Math.min(0.9, star.alpha)).toFixed(2)})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-65 gpu-accelerated"
      aria-hidden="true"
    />
  );
};

