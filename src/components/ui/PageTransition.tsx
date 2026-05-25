"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type Phase = "idle" | "cover" | "show-text" | "hide-text" | "reveal";

interface TransitionContextValue {
  navigateTo: (href: string) => void;
  phase: Phase;
  label: string;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateTo: () => {},
  phase: "idle",
  label: "",
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const isAnimating = useRef(false);

  const PAGE_NAMES: Record<string, string> = {
    "/":             "Home",
    "/designs":      "Design Library",
    "/process":      "How It Works",
    "/pricing":      "Pricing",
    "/contact":      "Contact",
    "/changelog":    "Changelog",
    "/integrations": "Integrations",
    "/docs":         "Documentation",
    "/blog":         "Blog",
    "/community":    "Community",
    "/audit":        "Site Audit",
    "/terms":        "Terms of Service",
    "/privacy":      "Privacy Policy",
  };

  const navigateTo = useCallback((href: string) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let pageName = PAGE_NAMES[href] || "Harbi Agency";
    if (href.startsWith("/blog/") && href !== "/blog") {
      pageName = "Loading Lesson...";
    }
    
    setLabel(pageName);

    // Phase 1: Cover slides down (500ms)
    setPhase("cover");

    setTimeout(() => {
      // Phase 2: Text fades in — also navigate NOW while hidden
      router.push(href);
      setPhase("show-text");
    }, 500);

    setTimeout(() => {
      // Phase 3: Text fades out
      setPhase("hide-text");
    }, 1700);

    setTimeout(() => {
      // Phase 4: Panel slides out downward
      setPhase("reveal");
    }, 1950);

    setTimeout(() => {
      // Done
      setPhase("idle");
      setLabel("");
      isAnimating.current = false;
    }, 2500);
  }, [router]);

  const isDark = resolvedTheme === "dark";
  const panelBg = isDark ? "#fafafa" : "#050505";

  // Panel Y position
  let panelY: string;
  let panelTransition: string;

  switch (phase) {
    case "cover":
    case "show-text":
    case "hide-text":
      panelY = "0%";
      panelTransition = "transform 500ms cubic-bezier(0.76, 0, 0.24, 1)";
      break;
    case "reveal":
      panelY = "100%";
      panelTransition = "transform 550ms cubic-bezier(0.76, 0, 0.24, 1)";
      break;
    default:
      panelY = "-100%";
      panelTransition = "transform 500ms cubic-bezier(0.76, 0, 0.24, 1)";
  }

  const showText = phase === "show-text";

  return (
    <TransitionContext.Provider value={{ navigateTo, phase, label }}>
      {children}

      {/* Overlay — only mounted during active transitions */}
      {phase !== "idle" && (
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 99999 }}
        >
          {/* Sliding panel */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: panelBg,
              transform: `translateY(${panelY})`,
              transition: panelTransition,
              willChange: "transform",
            }}
          />

          {/* Centered page name */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: showText ? 1 : 0,
              transition: "opacity 200ms ease",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight select-none"
              style={{ color: "#3419e0" }}
            >
              {label}
            </h2>
          </div>
        </div>
      )}
    </TransitionContext.Provider>
  );
}
