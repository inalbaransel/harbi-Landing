"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CATEGORIES = ["All", "CMS", "Analytics", "E-Commerce", "Marketing", "Dev Tools"] as const;

const INTEGRATIONS = [
  { name: "WordPress",    category: "CMS",         icon: "solar:document-text-linear",  gradient: "from-blue-700 to-blue-500",    desc: "Migrate or connect existing WordPress content seamlessly." },
  { name: "Shopify",      category: "E-Commerce",  icon: "solar:bag-heart-linear",      gradient: "from-green-700 to-emerald-500", desc: "Sync products, inventory, and checkout with Shopify stores." },
  { name: "Google Analytics", category: "Analytics", icon: "solar:chart-2-linear",       gradient: "from-amber-600 to-yellow-500", desc: "Track visitors, conversions, and behavior with GA4." },
  { name: "Stripe",       category: "E-Commerce",  icon: "solar:card-linear",           gradient: "from-violet-700 to-purple-500", desc: "Accept payments securely with Stripe integration." },
  { name: "Mailchimp",    category: "Marketing",   icon: "solar:letter-linear",         gradient: "from-yellow-600 to-amber-500", desc: "Capture leads and automate email marketing campaigns." },
  { name: "Vercel",       category: "Dev Tools",   icon: "solar:rocket-linear",         gradient: "from-neutral-800 to-neutral-600", desc: "Deploy to the edge with zero-config Vercel hosting." },
  { name: "Sanity",       category: "CMS",         icon: "solar:layers-minimalistic-linear", gradient: "from-red-600 to-rose-500", desc: "Headless CMS for structured, real-time content management." },
  { name: "Hotjar",       category: "Analytics",   icon: "solar:fire-linear",            gradient: "from-orange-600 to-red-500",   desc: "Heatmaps and session recordings to understand user behavior." },
  { name: "Notion",       category: "Dev Tools",   icon: "solar:notebook-linear",       gradient: "from-neutral-700 to-neutral-500", desc: "Project documentation and handoff via Notion workspace." },
  { name: "HubSpot",      category: "Marketing",   icon: "solar:users-group-rounded-linear", gradient: "from-orange-700 to-orange-500", desc: "CRM and marketing automation for lead management." },
  { name: "Figma",        category: "Dev Tools",   icon: "solar:figma-linear",          gradient: "from-pink-600 to-fuchsia-500", desc: "Design handoff and prototype review directly from Figma." },
  { name: "Plausible",    category: "Analytics",   icon: "solar:shield-check-linear",   gradient: "from-indigo-600 to-blue-500",  desc: "Privacy-first analytics with no cookies required." },
];

export default function IntegrationsPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  const filtered = filter === "All" ? INTEGRATIONS : INTEGRATIONS.filter(i => i.category === filter);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">INTEGRATIONS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Works with your<br />favorite tools.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Connect your website to the platforms you already use. Every integration is configured and tested before launch.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(52,25,224,0.3)]" : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(integration => (
            <div key={integration.name} className="group bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={integration.icon} width="22" className="text-white" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{integration.name}</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 rounded-full">{integration.category}</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{integration.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">Need a custom integration?</p>
          <TransitionLink href="/contact" className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]">
            Let&apos;s Talk <Icon icon="solar:arrow-right-linear" width="18" />
          </TransitionLink>
        </div>
      </main>

      <Footer />
    </>
  );
}
