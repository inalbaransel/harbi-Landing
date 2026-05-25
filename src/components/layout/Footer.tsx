"use client";

import { Icon } from "@iconify/react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useRef } from "react";
import { useSteamyPhysics } from "@/hooks/useSteamyPhysics";
import Image from "next/image";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);

  // Bind the vanilla JS physics logic strictly to this component's DOM lifecycle
  useSteamyPhysics(footerRef, maskGroupRef);

  return (
    <footer
      id="steamy-footer"
      ref={footerRef}
      className="max-w-[1400px] mx-auto w-[calc(100%-2rem)] rounded-3xl relative overflow-hidden pt-20 pb-10 mb-8 mt-12 z-20 shadow-2xl bg-white/5 border border-black/5 dark:border-white/5 dark:bg-white/5 dark:shadow-black/50"
    >
      {/* SVG Definitions for Masks */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="soft-edge" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <mask id="fog-mask">
            {/* Base white fills the entire area, keeping the blur */}
            <rect width="100%" height="100%" fill="white" />
            <g id="steam-wipes" ref={maskGroupRef} filter="url(#soft-edge)" />
          </mask>
        </defs>
      </svg>

      {/* Steamy Glass Layer */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-white/10 dark:bg-black/40"
        style={{
          backdropFilter: "blur(24px) contrast(0.85) brightness(1.1)",
          WebkitBackdropFilter: "blur(24px) contrast(0.85) brightness(1.1)",
          boxShadow: "inset 0 0 60px rgba(255, 255, 255, 0.4)",
          maskImage: "url(#fog-mask)",
          WebkitMaskImage: "url(#fog-mask)",
        }}
      />

      {/* Droplets Container */}
      <div
        id="drops-container"
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-10">
            <TransitionLink
              href="/"
              className="mb-8 flex items-center justify-center relative z-50 w-12 h-12"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-x-4 translate-y-1">
                <Image src="/logo.png" alt="Harbi Agency Logo" width={128} height={128} className="object-contain w-32 h-32 max-w-none" />
              </div>
            </TransitionLink>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-relaxed mb-6">
              Stratejik tasarım yoluyla markaları yükseltiyoruz. Daha iyi ürünler inşa edin, 
              hedef kitlenizle bağ kurun ve öne çıkın.
            </p>
            <div className="flex gap-4">
              <TransitionLink
                href="/designs"
                className="text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <Icon
                  icon="solar:pallete-2-linear"
                  width="20"
                  height="20"
                  style={{ strokeWidth: 1.5 }}
                />
              </TransitionLink>
              <TransitionLink
                href="/docs"
                className="text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <Icon
                  icon="solar:programming-linear"
                  width="20"
                  height="20"
                  style={{ strokeWidth: 1.5 }}
                />
              </TransitionLink>
            </div>
          </div>

          {/* Links 1 — Product */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Ürün
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <TransitionLink
                  href="/designs"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Özellikler
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/pricing"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Fiyatlandırma
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/changelog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Değişim Günlüğü
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/integrations"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Entegrasyonlar
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Links 2 — Resources */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Kaynaklar
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <TransitionLink
                  href="/audit"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 text-sm transition"
                >
                  Ücretsiz Site Denetimi
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/docs"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Dokümantasyon
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/process"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Yardım Merkezi
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Blog
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/community"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Topluluk
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Links 3 — Company */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Şirket
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <TransitionLink
                  href="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Hakkımızda
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/contact"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  İletişim
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/terms"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Kullanım Koşulları
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/privacy"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Gizlilik Politikası
                </TransitionLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-neutral-500 dark:text-white/60 text-xs">
            © 2026 Harbi Agency. Tüm hakları saklıdır.
          </span>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-500 dark:text-white/60">
              Bir ürünüdür:{" "}
              <a
                href="https://harbi.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 dark:hover:text-purple-400 font-medium transition"
              >
                Harbi Agency
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
