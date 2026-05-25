"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";

const RELEASES = [
  {
    version: "2.4.0",
    date: "April 2026",
    tag: "Latest",
    tagColor: "bg-purple-600 text-white",
    title: "Multi-Page Builder & Page Transitions",
    changes: [
      { type: "added", text: "Cinematic page transition loader with theme-aware animations" },
      { type: "added", text: "4 new dedicated pages: Design Library, How It Works, Pricing, Contact" },
      { type: "added", text: "Custom purple-themed scrollbar for Webkit and Firefox" },
      { type: "improved", text: "Navbar upgraded to route-based navigation with active state highlighting" },
      { type: "improved", text: "Interactive dashboard expanded to 5 tabs with live chat" },
    ],
  },
  {
    version: "2.3.0",
    date: "March 2026",
    tag: "",
    tagColor: "",
    title: "Interactive Dashboard & Brand Unification",
    changes: [
      { type: "added", text: "Fully interactive Services dashboard with Dashboard, Projects, and Feedback tabs" },
      { type: "added", text: "Mobile slide-over navigation drawer with staggered animations" },
      { type: "improved", text: "Unified entire palette to deep purple #3419e0" },
      { type: "fixed", text: "Light theme inconsistencies resolved across all components" },
    ],
  },
  {
    version: "2.2.0",
    date: "February 2026",
    tag: "",
    tagColor: "",
    title: "Next.js Migration & Dark Mode",
    changes: [
      { type: "added", text: "Migrated from static HTML to Next.js 15 App Router with TypeScript" },
      { type: "added", text: "next-themes integration for system-aware dark mode" },
      { type: "added", text: "Steamy glass physics ported to custom React hook" },
      { type: "improved", text: "All sections modularized into reusable components" },
    ],
  },
  {
    version: "2.1.0",
    date: "January 2026",
    tag: "",
    tagColor: "",
    title: "Design System Foundation",
    changes: [
      { type: "added", text: "Premium About section with hover-zoom brand imagery" },
      { type: "added", text: "Conversion-focused pricing cards with feature comparison" },
      { type: "added", text: "Expandable FAQ accordion section" },
      { type: "improved", text: "Hero section with phone mockup and chat preview" },
    ],
  },
  {
    version: "2.0.0",
    date: "December 2025",
    tag: "Major",
    tagColor: "bg-neutral-900 dark:bg-white text-white dark:text-black",
    title: "Complete Rebrand to Harbi Agency",
    changes: [
      { type: "added", text: "Full visual rebrand from portfolio to productized agency" },
      { type: "added", text: "New copy, messaging, and value proposition throughout" },
      { type: "added", text: "Interactive raindrop physics footer" },
      { type: "improved", text: "Performance optimizations and asset cleanup" },
    ],
  },
];

const TYPE_CONFIG = {
  added: { icon: "solar:add-circle-linear", color: "text-emerald-600", bg: "bg-emerald-500/10", label: "Added" },
  improved: { icon: "solar:refresh-circle-linear", color: "text-sky-600", bg: "bg-sky-500/10", label: "Improved" },
  fixed: { icon: "solar:bug-linear", color: "text-amber-600", bg: "bg-amber-500/10", label: "Fixed" },
};

export default function ChangelogPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">CHANGELOG</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
              What&apos;s new
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Every update, improvement, and fix — documented in detail.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />

            <div className="flex flex-col gap-16">
              {RELEASES.map((release) => (
                <div key={release.version} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-[31px] h-[31px] rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-purple-600 flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                  </div>

                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">v{release.version}</span>
                    <span className="text-xs text-neutral-400">{release.date}</span>
                    {release.tag && (
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${release.tagColor}`}>{release.tag}</span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-5">{release.title}</h3>

                  <div className="flex flex-col gap-3">
                    {release.changes.map((change, i) => {
                      const cfg = TYPE_CONFIG[change.type as keyof typeof TYPE_CONFIG];
                      return (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className={`w-6 h-6 rounded-md ${cfg.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Icon icon={cfg.icon} width="14" className={cfg.color} />
                          </div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{change.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
