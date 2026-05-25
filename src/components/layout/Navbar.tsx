"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

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
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Watch scroll to add tighter padding / shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredTab(null);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Desktop Hover Helper
  const handleTabHover = (tabId: string | null) => {
    setHoveredTab(tabId);
    setActiveDropdown(tabId);
  };

  return (
    <>
      {/* HEADER WRAPPER - Floating at top of screen */}
      <header
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 w-full flex justify-center pointer-events-none"
        onMouseLeave={() => {
          setHoveredTab(null);
          setActiveDropdown(null);
        }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`flex items-center justify-between w-full max-w-[1300px] bg-white/70 dark:bg-black/75 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] pointer-events-auto transition-all duration-300 ${
            scrolled ? "h-14 md:h-16 px-6 py-2" : "h-16 md:h-20 px-8 py-3"
          }`}
        >
          {/* LOGO */}
          <TransitionLink
            href="/"
            className="flex items-center gap-2 group relative z-50"
          >
            <div className="w-10 h-10 relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Harbi Agency Logo"
                width={80}
                height={80}
                className="object-contain w-14 h-14 max-w-none"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
              Harbi
            </span>
          </TransitionLink>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-neutral-100/50 dark:bg-neutral-900/40 p-1.5 rounded-full border border-black/5 dark:border-white/5">
            {/* Services (with dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleTabHover("services")}
            >
              <button
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer outline-none z-10 ${
                  pathname.startsWith("/hizmetler") || activeDropdown === "services"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Hizmetlerimiz
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180 text-purple-600 dark:text-purple-400" : ""
                  }`}
                  width="14"
                />
              </button>
              {hoveredTab === "services" && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>

            {/* Corporate (with dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleTabHover("corporate")}
            >
              <button
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer outline-none z-10 ${
                  pathname.startsWith("/kurumsal") || activeDropdown === "corporate"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Kurumsal
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`transition-transform duration-300 ${
                    activeDropdown === "corporate" ? "rotate-180 text-purple-600 dark:text-purple-400" : ""
                  }`}
                  width="14"
                />
              </button>
              {hoveredTab === "corporate" && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>

            {/* Simple links */}
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleTabHover(link.href)}
              >
                <TransitionLink
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 block z-10 ${
                    pathname === link.href
                      ? "text-purple-600 dark:text-purple-400 font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </TransitionLink>
                {hoveredTab === link.href && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT ACTIONS & MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-3 relative z-50">
            <TransitionLink
              href="/iletisim"
              className="hidden md:flex text-sm font-semibold tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/10 hover:shadow-purple-700/20 rounded-full px-6 py-2.5 transition-all duration-300 dark:bg-purple-600 dark:hover:bg-purple-700 cursor-pointer"
            >
              TEKLİF ALIN
            </TransitionLink>

            {/* Premium Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 md:w-11 md:h-11 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center border border-black/5 dark:border-white/5 text-neutral-900 dark:text-white transition duration-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" className="fill-none stroke-current stroke-[2] stroke-linecap-round">
                <motion.line
                  x1="3"
                  y1="5"
                  x2="17"
                  y2="5"
                  animate={isMobileMenuOpen ? { x1: 5, y1: 5, x2: 15, y2: 15 } : { x1: 3, y1: 5, x2: 17, y2: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
                <motion.line
                  x1="3"
                  y1="10"
                  x2="17"
                  y2="10"
                  animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.line
                  x1="3"
                  y1="15"
                  x2="17"
                  y2="15"
                  animate={isMobileMenuOpen ? { x1: 5, y1: 15, x2: 15, y2: 5 } : { x1: 3, y1: 15, x2: 17, y2: 15 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* DESKTOP MEGA DROPDOWN POPUPS */}
        <AnimatePresence>
          {activeDropdown === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onMouseEnter={() => handleTabHover("services")}
              className="absolute top-[calc(100%-8px)] w-[calc(100%-32px)] max-w-[700px] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl p-6 shadow-2xl z-40 pointer-events-auto mt-4 overflow-hidden"
            >
              <div className="flex flex-col">
                <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-4 tracking-widest uppercase">
                  Hizmetlerimiz
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {SERVICES.map((item) => (
                    <TransitionLink
                      key={item.href}
                      href={item.href}
                      className="flex gap-4 p-3.5 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon icon={item.icon || "solar:link-linear"} width="22" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </TransitionLink>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeDropdown === "corporate" && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onMouseEnter={() => handleTabHover("corporate")}
              className="absolute top-[calc(100%-8px)] w-[calc(100%-32px)] max-w-[700px] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl p-6 shadow-2xl z-40 pointer-events-auto mt-4 overflow-hidden"
            >
              <div className="flex flex-col">
                <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-4 tracking-widest uppercase">
                  Kurumsal
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {CORPORATE.map((item) => (
                    <TransitionLink
                      key={item.href}
                      href={item.href}
                      className="flex gap-4 p-3.5 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon icon={item.icon || "solar:link-linear"} width="22" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </TransitionLink>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE FULL-SCREEN MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl z-40 flex flex-col pt-24 pb-8 px-6 overflow-y-auto no-scrollbar justify-between shadow-2xl"
          >
            {/* Nav container */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col gap-5 mt-6"
            >
              {/* Home */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, y: 20 }
                }}
              >
                <TransitionLink
                  href="/"
                  className={`text-3xl font-bold tracking-tight block ${
                    pathname === "/" ? "text-purple-600 dark:text-purple-400" : "text-neutral-900 dark:text-white"
                  }`}
                >
                  Ana Sayfa
                </TransitionLink>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, y: 20 }
                }}
                className="h-px bg-neutral-200 dark:bg-neutral-800 w-full my-1"
              />

              {/* Hizmetlerimiz (Accordion) */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, y: 20 }
                }}
                className="flex flex-col"
              >
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  className="flex items-center justify-between text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-left outline-none"
                >
                  Hizmetlerimiz
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`transition-transform duration-300 text-neutral-400 ${
                      mobileExpanded === "services" ? "rotate-180 text-purple-600 dark:text-purple-400" : ""
                    }`}
                    width="26"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileExpanded === "services" && (
                    <motion.div
                      key="services-content"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-neutral-200 dark:border-neutral-800"
                    >
                      {SERVICES.map((item) => (
                        <TransitionLink
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 py-1 transition-colors"
                        >
                          <Icon icon={item.icon || "solar:link-linear"} width="20" className="text-purple-500" />
                          {item.title}
                        </TransitionLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, y: 20 }
                }}
                className="h-px bg-neutral-200 dark:bg-neutral-800 w-full my-1"
              />

              {/* Kurumsal (Accordion) */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, y: 20 }
                }}
                className="flex flex-col"
              >
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "corporate" ? null : "corporate")}
                  className="flex items-center justify-between text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-left outline-none"
                >
                  Kurumsal
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`transition-transform duration-300 text-neutral-400 ${
                      mobileExpanded === "corporate" ? "rotate-180 text-purple-600 dark:text-purple-400" : ""
                    }`}
                    width="26"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileExpanded === "corporate" && (
                    <motion.div
                      key="corporate-content"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-neutral-200 dark:border-neutral-800"
                    >
                      {CORPORATE.map((item) => (
                        <TransitionLink
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 py-1 transition-colors"
                        >
                          <Icon icon={item.icon || "solar:link-linear"} width="20" className="text-purple-500" />
                          {item.title}
                        </TransitionLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {NAV_LINKS.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                      closed: { opacity: 0, y: 20 }
                    }}
                    className="h-px bg-neutral-200 dark:bg-neutral-800 w-full my-1"
                  />
                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <TransitionLink
                      href={link.href}
                      className={`text-3xl font-bold tracking-tight block ${
                        pathname === link.href ? "text-purple-600 dark:text-purple-400" : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {link.label}
                    </TransitionLink>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Immersive Mobile Footer Call-To-Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
                İletişime Geçin
              </div>
              <TransitionLink
                href="/iletisim"
                className="w-full flex items-center justify-center py-4 rounded-full text-base font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/10 hover:shadow-purple-700/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                TEKLİF ALIN
              </TransitionLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
