"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const TEXT = "Veri odaklı pazarlama sanatıyla mühendisliği harmanlayarak büyüme odaklı çözüm sunuyoruz. Tam da bu yüzden, büyüme bizim için bir motto değil, sürekli yenilenen bir yol haritasıdır.";

const PILLS = [
  { label: "İçerik Üretimi", icon: "solar:pen-new-square-bold", color: "text-orange-500", top: "22%", left: "18%", rotate: "-12deg" },
  { label: "Reklam Yönetimi", icon: "solar:megaphone-bold", color: "text-green-500", top: "18%", right: "15%", rotate: "8deg" },
  { label: "UI/UX", icon: "solar:laptop-bold", color: "text-neutral-400", top: "52%", left: "12%", rotate: "-6deg" },
  { label: "Veri Analizi", icon: "solar:chart-square-bold", color: "text-pink-500", top: "48%", right: "12%", rotate: "15deg" },
  { label: "İş Geliştirme", icon: "solar:case-bold", color: "text-blue-500", bottom: "22%", left: "25%", rotate: "10deg" },
  { label: "Strateji", icon: "solar:map-arrow-up-bold", color: "text-yellow-500", bottom: "20%", right: "22%", rotate: "-8deg" },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = (windowHeight - rect.top - 200) / (rect.height);
      progress = Math.max(0, Math.min(1, progress));
      
      const totalWords = wordsRef.current.length;
      wordsRef.current.forEach((wordElement, i) => {
        if (!wordElement) return;
        const wordProgress = i / totalWords;
        if (progress > wordProgress) {
          wordElement.style.opacity = "1";
        } else {
          wordElement.style.opacity = "0.2";
        }
      });

      pillsRef.current.forEach((pillElement, i) => {
         if (!pillElement) return;
         const pill = PILLS[i];
         const speed = i % 2 === 0 ? 120 : -90; 
         const yOffset = (0.5 - progress) * speed; 
         // Apply both parallax translation and the chaotic rotation
         pillElement.style.transform = `translateY(${yOffset}px) rotate(${pill.rotate})`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = TEXT.split(" ");

  return (
    <section id="about" className="w-full relative py-32 lg:py-64 bg-transparent overflow-hidden" ref={containerRef}>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Pills */}
      {PILLS.map((pill, i) => (
        <div 
          key={i} 
          ref={(el) => { pillsRef.current[i] = el; }}
          className="absolute hidden md:flex items-center gap-2.5 px-5 py-2.5 bg-[#0a0a0a]/90 border border-white/10 rounded-full shadow-2xl backdrop-blur-xl transition-transform duration-75"
          style={{
             top: pill.top, left: pill.left, right: pill.right, bottom: pill.bottom,
             transform: `rotate(${pill.rotate})` // Initial rotation to prevent pop-in flash
          }}
        >
          <Icon icon={pill.icon} className={`w-5 h-5 ${pill.color}`} />
          <span className="text-sm font-bold text-white">{pill.label}</span>
        </div>
      ))}

      {/* Main Text Reveal */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.3] md:leading-[1.4] tracking-tight text-neutral-900">
          {words.map((word, i) => (
             <span 
               key={i} 
               ref={(el) => { wordsRef.current[i] = el; }}
               className="transition-opacity duration-300 opacity-20"
             >
               {word}{" "}
             </span>
          ))}
        </h2>
      </div>

    </section>
  );
}
