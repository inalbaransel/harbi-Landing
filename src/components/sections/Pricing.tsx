"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  } as any;

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as any;

  const cardRightVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 },
    },
  } as any;

  const itemVariants = {
    hover: { x: 4, transition: { duration: 0.2, ease: "easeOut" } },
  } as any;

  return (
    <section
      id="pricing"
      className="w-full relative py-24 md:py-32 border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      {/* Subtle background blur highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
              Diğerleri ile kıyaslanamaz.
            </span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Pazarlama hizmeti sunmuyoruz; işletmenizin tüm dinamiklerine entegre bir pazarlama ekibi olmayı vadediyoruz.
          </p>
        </motion.div>

        {/* Comparison Cards Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-5xl mx-auto relative px-2"
        >
          {/* Ordinary Agencies Card (Left) */}
          <motion.div
            variants={cardLeftVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="w-full lg:w-1/2 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 lg:translate-x-4 transition-all duration-300"
          >
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-[10px] font-bold text-red-500/80 tracking-widest uppercase">ALTERNATİFLER</span>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Sıradan Ajanslar
              </h3>
            </div>
            
            <ul className="flex flex-col gap-5 text-neutral-500 dark:text-neutral-400 font-medium">
              {[
                "Zor ulaşılabilirlik ve yavaş iletişim",
                "Kısa vadeli çözümler",
                "Belirsiz ve ölçülemeyen sonuçlar",
                "Genel, herkese aynı stratejiler",
                "Kalıplaşmış ve sıradan yaklaşımlar"
              ].map((text, idx) => (
                <motion.li 
                  key={idx}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex items-start gap-3.5 text-sm md:text-base leading-snug cursor-default"
                >
                  <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400/90 bg-red-400/10 rounded-full mt-0.5 shadow-sm">
                    <Icon icon="solar:close-circle-bold" width="16" />
                  </div>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Harbi Premium Card (Right) */}
          <motion.div
            variants={cardRightVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-full lg:w-[54%] bg-neutral-950 dark:bg-black border border-purple-500/40 rounded-[2.8rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(75,49,240,0.15)] dark:shadow-[0_30px_70px_rgba(75,49,240,0.25)] relative z-20 mt-4 lg:mt-0 lg:-translate-x-4 transition-all duration-300 overflow-hidden"
          >
            {/* Inner background radial glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Glowing Live/Active dot */}
            <div className="absolute top-8 right-8 flex items-center justify-center">
              <span className="absolute w-3.5 h-3.5 rounded-full bg-purple-400/30 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(75,49,240,0.8)]" />
            </div>

            <div className="flex flex-col gap-1.5 mb-8">
              <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">DOĞRU YAKLAŞIM</span>
              <h3 className="text-4xl font-extrabold tracking-tight text-purple-500 dark:text-purple-400 flex items-center gap-1.5 drop-shadow-[0_0_15px_rgba(75,49,240,0.2)]">
                harbi
              </h3>
            </div>

            <ul className="flex flex-col gap-5 text-neutral-200 dark:text-neutral-300 font-medium">
              {[
                "Her zaman hızlı iletişim",
                "Sürdürülebilir büyüme rotası",
                "Ölçülebilir net sonuçlar",
                "Markaya özel strateji",
                "Yaratıcı ve esnek çözümler"
              ].map((text, idx) => (
                <motion.li 
                  key={idx}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex items-start gap-3.5 text-sm md:text-base leading-snug cursor-default group"
                >
                  <div className="min-w-6 min-h-6 flex items-center justify-center text-white bg-purple-600 rounded-full mt-0.5 shadow-[0_0_10px_rgba(75,49,240,0.4)] group-hover:scale-105 transition-transform duration-300">
                    <Icon icon="solar:check-circle-bold" width="16" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-200">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
