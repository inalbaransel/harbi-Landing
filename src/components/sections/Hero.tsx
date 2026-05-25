"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import Image from "next/image";
import RotatingText from "@/components/ui/RotatingText";
import { motion } from "motion/react";

export function Hero() {
  return (
    <main className="w-full max-w-[1400px] mx-auto px-6 flex-grow flex flex-col items-center justify-center relative z-10 pt-36 pb-20 min-h-[90vh]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />

      {/* Social Proof Avatars */}
      <div className="flex flex-col items-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050505] bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
               {/* Placeholder for avatars, you can replace with actual Next Images */}
               <Icon icon="solar:user-bold" className="text-neutral-400 dark:text-neutral-600 w-5 h-5" />
            </div>
          ))}
        </div>
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">+50 Başarılı İşletme</div>
      </div>

      {/* Main Headline */}
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-[3rem] sm:text-[4rem] md:text-7xl lg:text-[90px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 flex flex-col items-center">
          
          {/* Line 1 */}
          <motion.div layout className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <motion.span 
              layout 
              transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.8 }}
            >
              Markanızı
            </motion.span>
            <motion.span 
              layout 
              transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.8 }}
              className="flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem] px-6 md:px-8 py-2 md:py-3 shadow-inner overflow-hidden"
            >
              <RotatingText
                texts={['Geleceğe', 'Zirveye', 'Başarıya']}
                mainClassName="text-2xl md:text-5xl lg:text-6xl text-purple-600 dark:text-purple-400"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.8 }}
                rotationInterval={2500}
                animatePresenceMode="popLayout"
              />
            </motion.span>
          </motion.div>
          
          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-2 md:mt-4">
            <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#0a0a0a] text-white border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
              <Icon icon="solar:magic-stick-3-bold" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-500" />
            </span>
            <span>Harbi Bir Dokunuşla</span>
          </div>

          {/* Line 3 */}
          <div className="mt-2 md:mt-4">
            <span>Taşıyın</span>
          </div>
          
        </h1>
      </div>

      {/* Description */}
      <p className="mt-12 mb-12 text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl text-center px-4 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        Büyüme stratejileri ile yeni müşterilere ulaşarak, satışları
        artırarak sektör liderliğine gidecek bir yolculuğa hazır mısınız?
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <TransitionLink
          href="/iletisim"
          className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a0a0a] text-white border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:border-purple-500 transition-all duration-300"
        >
          <span className="font-bold text-lg">Sizi Arayalım</span>
          <Icon icon="solar:phone-calling-linear" width="22" className="text-purple-400 group-hover:scale-110 transition-transform" />
        </TransitionLink>
        
        <TransitionLink
          href="/iletisim"
          className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a0a0a] text-white border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl shadow-black/50"
        >
          <span className="font-bold text-lg">Görüşme Planla</span>
          <Icon icon="solar:calendar-date-linear" width="22" className="text-neutral-400 group-hover:scale-110 transition-transform" />
        </TransitionLink>
      </div>

    </main>
  );
}
