"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Keşif ve Analiz",
    description: "Markanızı, hedeflerinizi ve pazar dinamiklerini derinlemesine inceliyoruz. Sizi dinliyor, anlamlandırıyor ve ihtiyaç haritanızı çıkarıyoruz.",
    icon: "solar:radar-bold",
    color: "text-purple-600",
    bg: "bg-purple-600/10",
    border: "border-purple-600/20"
  },
  {
    id: "02",
    title: "Strateji ve Planlama",
    description: "Verilere dayalı, hedefe yönelik ve tamamen size özel bir dijital yol haritası çiziyoruz. Hangi kanallarda, nasıl var olacağınızı belirliyoruz.",
    icon: "solar:map-arrow-up-bold",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    border: "border-blue-600/20"
  },
  {
    id: "03",
    title: "Kreatif Üretim",
    description: "Tasarım ekibimiz, stratejiyi görsel bir şölene dönüştürüyor. Sadece güzel değil, dönüşüm getirecek kullanıcı deneyimi (UX) tasarımları yapıyoruz.",
    icon: "solar:pallete-2-bold",
    color: "text-pink-600",
    bg: "bg-pink-600/10",
    border: "border-pink-600/20"
  },
  {
    id: "04",
    title: "Teknoloji ve Uygulama",
    description: "Modern, hızlı ve ölçeklenebilir yazılım mimarileriyle tasarımları kusursuz şekilde kodluyoruz. Performans her şeydir.",
    icon: "solar:code-square-bold",
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
    border: "border-emerald-600/20"
  },
  {
    id: "05",
    title: "Büyüme ve Optimizasyon",
    description: "Proje canlıya alındığında işimiz bitmiyor, yeni başlıyor. Verileri anlık izliyor, analiz ediyor ve sürekli daha iyisi için optimize ediyoruz.",
    icon: "solar:chart-square-bold",
    color: "text-amber-600",
    bg: "bg-amber-600/10",
    border: "border-amber-600/20"
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !progressLineRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Çizginin tam olarak ne zaman başlayıp biteceğini hesapla
      // Ekranın %70'ine geldiğinde başlasın, %30'una geldiğinde bitsin
      const startTrigger = windowHeight * 0.7;
      const endTrigger = windowHeight * 0.3;
      
      const progressStart = rect.top - startTrigger;
      const totalScrollableHeight = rect.height;
      
      let progress = 0;
      if (progressStart < 0) {
        progress = Math.abs(progressStart) / totalScrollableHeight * 100;
        progress = Math.min(Math.max(progress * 1.2, 0), 100); // 1.2 çarpanı ile biraz daha çevik yapıyoruz
      }

      // State yerine doğrudan DOM müdahalesi (SIFIR LAG)
      progressLineRef.current.style.height = `${progress}%`;
      
      // Adımların yanma durumu için state'i sadece gerekli olduğunda güncelle
      const currentStep = Math.floor(progress / 20);
      if (currentStep !== activeStep) {
        setActiveStep(currentStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep]);

  return (
    <section id="process" className="w-full relative py-24 lg:py-40 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative" ref={containerRef}>
          
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.3em]">
                  İŞ SÜRECİMİZ
                </span>
                <div className="flex-grow h-px bg-purple-600/20" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] dark:text-white mb-6">
                Fikirden <br />
                <span className="text-neutral-400 dark:text-neutral-500">Büyümeye</span>
              </h2>
              <p className="text-neutral-600 text-lg font-medium leading-relaxed dark:text-neutral-400">
                Hiçbir başarı tesadüf değildir. Markanızı dijitalde zirveye taşımak için kanıtlanmış, stratejik ve adım adım ilerleyen harbi bir yöntem izliyoruz.
              </p>
            </div>
          </div>

          {/* Right: Vertical Timeline */}
          <div className="lg:w-2/3 relative pl-8 md:pl-16">
            
            {/* Base Pale Line (Thicker & Simpler) */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-black/[0.03] dark:bg-white/[0.03] rounded-full" />
            
            {/* Glowing Animated Line (Thicker & More Glow) */}
            <div 
              ref={progressLineRef}
              className="absolute left-0 top-8 w-[3px] bg-purple-600 shadow-[0_0_25px_rgba(147,51,234,1)] z-10 will-change-[height] rounded-full"
              style={{ height: '0%' }} 
            />
            
            <div className="space-y-16">
              {PROCESS_STEPS.map((step, index) => {
                // isActive kontrolünü basitleştiriyoruz
                const isActive = index <= activeStep;

                return (
                <div key={step.id} className="relative group">
                  
                  {/* Larger & Premium Glowing Stop (Dot) */}
                  <div className="absolute -left-8 md:-left-16 top-6 w-px h-px z-20">
                     <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ${
                       isActive 
                         ? "w-7 h-7 bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.6)]" 
                         : "w-5 h-5 bg-neutral-200 dark:bg-neutral-800"
                     }`}>
                        {/* Inner Dot for Premium Look */}
                        <div className={`absolute inset-1.5 rounded-full bg-white dark:bg-[#050505] transition-transform duration-500 ${isActive ? "scale-100" : "scale-0"}`} />
                     </div>
                  </div>

                  {/* Glass Timeline Card */}
                  <div className={`bg-white/40 dark:bg-black/10 backdrop-blur-xl border rounded-[40px] p-8 md:p-12 shadow-xl transition-all duration-700 hover:bg-white/70 dark:hover:bg-black/30 hover:-translate-y-1 ${
                    isActive ? "border-purple-600/30 dark:border-purple-600/30 shadow-purple-600/5" : "border-black/5 dark:border-white/5"
                  }`}>
                    
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                      
                      {/* Number & Icon (Simplified - No Rotation) */}
                      <div className="shrink-0 flex flex-col items-center gap-4">
                        <span className={`text-6xl font-black tracking-tighter transition-colors duration-700 ${isActive ? "text-purple-600/40 dark:text-purple-500/40" : "text-black/10 dark:text-white/10"}`}>
                          {step.id}
                        </span>
                        <div className={`w-20 h-20 rounded-[28px] ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shadow-lg transition-all duration-700 ${isActive ? "scale-110" : "grayscale opacity-30"}`}>
                           <Icon icon={step.icon} width="36" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="pt-4">
                        <h3 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight transition-colors duration-700 ${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-700"}`}>
                          {step.title}
                        </h3>
                        <p className={`text-lg md:text-xl leading-relaxed font-medium transition-colors duration-700 ${isActive ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-700"}`}>
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>
                  
                </div>
              )})}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
