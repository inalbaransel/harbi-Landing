"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

const SERVICES: NavItem[] = [
  {
    title: "Yazılım Hizmetlerimiz",
    href: "/hizmetler/yazilim",
    description: "Özel web ve mobil uygulamalar.",
    icon: "solar:code-square-linear",
  },
  {
    title: "Sosyal Medya Ve Kreatif",
    href: "/hizmetler/sosyal-medya",
    description: "Yaratıcı içerik ve yönetim.",
    icon: "solar:clapperboard-edit-linear",
  },
  {
    title: "Dijital Pazarlama",
    href: "/hizmetler/dijital-pazarlama",
    description: "Veri odaklı büyüme stratejileri.",
    icon: "solar:graph-up-linear",
  },
  {
    title: "Diğer Hizmetler",
    href: "/hizmetler/diger",
    description: "Butik dijital çözümler.",
    icon: "solar:star-fall-minimalistic-linear",
  },
];

const CORPORATE: NavItem[] = [
  {
    title: "Biz Kimiz?",
    href: "/kurumsal/biz-kimiz",
    description: "Hikayemiz ve vizyonumuz.",
    icon: "solar:users-group-rounded-linear",
  },
  {
    title: "Kültürümüz",
    href: "/kurumsal/kulturumuz",
    description: "Değerlerimiz ve yaklaşımımız.",
    icon: "solar:heart-angle-linear",
  },
  {
    title: "Ekibimiz",
    href: "/kurumsal/ekibimiz",
    description: "Yaratıcı profesyonellerimiz.",
    icon: "solar:medal-star-linear",
  },
  {
    title: "Kariyer",
    href: "/kurumsal/kariyer",
    description: "Aramıza katılmak ister misin?",
    icon: "solar:case-linear",
  },
];

const NAV_LINKS = [
  { href: "/nasil-calisiyor", label: "Nasıl Çalışıyor" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopExpanded(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);



  return (
    <>
      <header className="flex z-40 w-full pt-8 pr-6 pl-6 relative justify-center sticky top-0">
        <div className="flex w-full max-w-[1400px] items-center justify-between relative">
          {/* Logo */}
          <TransitionLink
            href="/"
            className="w-12 h-12 flex items-center justify-center relative z-50"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-x-4 translate-y-4">
              <Image src="/logo.png" alt="Harbi Agency Logo" width={128} height={128} className="object-contain w-32 h-32 max-w-none" />
            </div>
          </TransitionLink>

          {/* Center Nav Pill (Desktop) */}
          {/* Center Nav Pill (Desktop) */}
          <div 
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 z-50"
            onMouseEnter={() => setIsDesktopExpanded(true)}
            onMouseLeave={() => setIsDesktopExpanded(false)}
          >
            <nav className={`flex flex-col bg-white/60 backdrop-blur-xl border border-black/10 text-base font-normal text-neutral-600 shadow-xl shadow-black/5 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 dark:shadow-black/50 overflow-hidden transition-all duration-400 ease-out ${isDesktopExpanded ? "rounded-[2rem] max-h-[700px]" : "rounded-full max-h-[56px] delay-100"}`}>
              <div className="flex items-center px-8 py-3.5 gap-2 relative z-10 w-max">
                <TransitionLink 
                  href="/hizmetler"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition duration-200 ${pathname.startsWith("/hizmetler") ? "text-purple-700 dark:text-purple-400 font-medium" : "hover:text-neutral-900 dark:hover:text-white"}`}
                >
                  Hizmetlerimiz
                  <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-300 ${isDesktopExpanded ? "rotate-180" : ""}`} width="16" />
                </TransitionLink>

                <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600 mx-1" />

                <TransitionLink 
                  href="/kurumsal"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition duration-200 ${pathname.startsWith("/kurumsal") ? "text-purple-700 dark:text-purple-400 font-medium" : "hover:text-neutral-900 dark:hover:text-white"}`}
                >
                  Kurumsal
                  <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-300 ${isDesktopExpanded ? "rotate-180" : ""}`} width="16" />
                </TransitionLink>

                <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600 mx-1" />

                {NAV_LINKS.map((link, idx) => (
                  <div key={link.href} className="flex items-center gap-2">
                    <TransitionLink
                      href={link.href}
                      className={`px-4 py-2 rounded-full transition duration-200 ${
                        pathname === link.href
                          ? "text-purple-700 dark:text-purple-400 font-medium"
                          : "hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                    </TransitionLink>
                    {idx < NAV_LINKS.length - 1 && (
                      <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600 mx-1" />
                    )}
                  </div>
                ))}
              </div>

              {/* Expanded Panel */}
              <div className={`transition-opacity duration-300 w-full ${isDesktopExpanded ? "opacity-100 delay-150" : "opacity-0"}`}>
                <div className="px-8 pb-8 pt-4 flex gap-12 border-t border-black/5 dark:border-white/5 mx-4 mt-2">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 mb-4 px-4 uppercase tracking-wider">Hizmetlerimiz</div>
                    <div className="flex flex-col gap-1">
                      {SERVICES.map(item => (
                        <TransitionLink
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsDesktopExpanded(false)}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover/item:scale-110 transition-transform">
                            <Icon icon={item.icon || "solar:link-linear"} width="22" />
                          </div>
                          <div>
                            <div className="font-medium text-neutral-900 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400">
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </TransitionLink>
                      ))}
                    </div>
                  </div>

                  <div className="w-px bg-black/5 dark:bg-white/5" />

                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 mb-4 px-4 uppercase tracking-wider">Kurumsal</div>
                    <div className="flex flex-col gap-1">
                      {CORPORATE.map(item => (
                        <TransitionLink
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsDesktopExpanded(false)}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover/item:scale-110 transition-transform">
                            <Icon icon={item.icon || "solar:link-linear"} width="22" />
                          </div>
                          <div>
                            <div className="font-medium text-neutral-900 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400">
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </TransitionLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-50">
            <TransitionLink
              href="/iletisim"
              className="hidden md:flex text-base font-medium text-neutral-700 hover:text-neutral-900 bg-black/5 hover:bg-black/10 border border-black/10 backdrop-blur-md rounded-full px-7 py-3 transition duration-300 dark:text-neutral-300 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
            >
              TEKLİF ALIN
            </TransitionLink>
            
            <button
              className="lg:hidden w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10 dark:bg-white/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute`}>
                <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
              </div>
              <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute`}>
                <Icon icon="solar:close-circle-linear" width="24" height="24" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-neutral-900/40 dark:bg-black/50 backdrop-blur-[4px] z-40 lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[350px] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-black/5 dark:border-white/5 z-50 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-[-20px_0_40px_rgba(0,0,0,0.05)] dark:shadow-[-20px_0_40px_rgba(0,0,0,0.3)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Close Area */}
        <div className="flex justify-between items-center p-6 pb-2 border-b border-black/5 dark:border-white/5">
          <span className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">Menü</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
          >
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </button>
        </div>

        {/* Links */}
        <div className="px-8 py-10 flex-1 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col gap-6">
            <TransitionLink
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-medium transition-all duration-500 ${pathname === "/" ? "text-purple-700 dark:text-purple-400" : "text-neutral-900 dark:text-white"} ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Ana Sayfa
            </TransitionLink>

            <div className={`w-full h-px bg-black/5 dark:bg-white/5 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />

            {/* Mobile Dropdowns (Reusable Logic) */}
            {[
              { id: "services", label: "Hizmetlerimiz", items: SERVICES },
              { id: "corporate", label: "Kurumsal", items: CORPORATE }
            ].map((dropdown, dIdx) => (
              <div key={dropdown.id} className={`flex flex-col gap-4 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: `${(dIdx + 1) * 80}ms` }}>
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === dropdown.id ? null : dropdown.id)}
                  className="flex items-center justify-between text-2xl font-medium text-neutral-900 dark:text-white"
                >
                  {dropdown.label}
                  <Icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`transition-transform duration-300 ${mobileExpanded === dropdown.id ? "rotate-180" : ""}`} 
                    width="24" 
                  />
                </button>
                
                <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${mobileExpanded === dropdown.id ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  {dropdown.items.map((item) => (
                    <TransitionLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-lg text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 pl-4 border-l-2 border-black/5 dark:border-white/5"
                    >
                      <Icon icon={item.icon || "solar:link-linear"} width="20" />
                      {item.title}
                    </TransitionLink>
                  ))}
                </div>
              </div>
            ))}

            {NAV_LINKS.map((link, idx) => (
              <div key={link.href}>
                <div className={`w-full h-px bg-black/5 dark:bg-white/5 mb-6 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
                <TransitionLink
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium transition-all duration-500 block ${
                    pathname === link.href ? "text-purple-700 dark:text-purple-400" : "text-neutral-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-500"
                  } ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: `${(idx + 3) * 80}ms` } as React.CSSProperties}
                >
                  {link.label}
                </TransitionLink>
              </div>
            ))}
          </nav>
        </div>

        {/* Glowing Contact Bottom */}
        <div className={`p-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-black/50 transform transition-all duration-500 delay-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <TransitionLink
            href="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-4 rounded-xl text-lg font-medium text-purple-700 dark:text-purple-500 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500 dark:border-purple-500 shadow-[0_0_20px_rgba(52,25,224,0.2)] dark:shadow-[0_0_20px_rgba(52,25,224,0.2)] hover:bg-purple-500/20 dark:hover:bg-purple-500/20 transition duration-300"
          >
            Teklif Alın
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
