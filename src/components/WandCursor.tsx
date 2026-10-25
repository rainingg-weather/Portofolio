import React, { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
}

export const WandCursor: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice, not touchscreens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointerFine(hasFinePointer);
    if (!hasFinePointer) return;

    let sparkIdCounter = 0;
    const sparkColors = ['#f5e6be', '#d4af37', '#38bdf8', '#00e5ff', '#fff4d1'];

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      // Occasionally emit micro-sparks when cursor moves
      if (Math.random() < 0.6) {
        const newSpark: Spark = {
          id: ++sparkIdCounter,
          x,
          y,
          vx: (Math.random() - 0.5) * 1.6,
          vy: Math.random() * 1.2 - 0.4,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.9,
        };
        setSparks((prev) => [...prev.slice(-18), newSpark]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fade and animate sparks
    const interval = setInterval(() => {
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            alpha: s.alpha - 0.08,
            size: Math.max(0.2, s.size - 0.08),
          }))
          .filter((s) => s.alpha > 0.05)
      );
    }, 28);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (!isPointerFine || !pos) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Subtle wand glow following cursor */}
      <div
        className="fixed w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4af37]/60 bg-[#38bdf8]/30 blur-[1px] transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div
        className="fixed w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff4d1] shadow-[0_0_8px_rgba(212,175,55,0.9)]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Trailing micro-sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            opacity: s.alpha,
            boxShadow: `0 0 6px ${s.color}`,
          }}
        />
      ))}
    </div>
  );
};
