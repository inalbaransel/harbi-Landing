"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";

const COMMUNITY_FEATURES = [
  {
    icon: "solar:chat-round-dots-linear",
    title: "Discussion Forum",
    desc: "Ask questions, share ideas, and get feedback from fellow Harbi clients and our team.",
    stat: "2.4k+ threads",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: "solar:star-fall-minimalistic-linear",
    title: "Showcase Gallery",
    desc: "Browse websites built with Harbi. Get inspired by real businesses using our designs.",
    stat: "150+ showcases",
    gradient: "from-sky-600 to-cyan-600",
  },
  {
    icon: "solar:video-frame-linear",
    title: "Weekly Workshops",
    desc: "Live sessions on design, conversion optimization, and getting the most from your website.",
    stat: "Every Thursday",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: "solar:gift-linear",
    title: "Exclusive Resources",
    desc: "Templates, checklists, and guides available only to community members.",
    stat: "40+ resources",
    gradient: "from-amber-600 to-orange-600",
  },
];

const MEMBERS = [
  { name: "Sarah K.", role: "E-Commerce Owner", quote: "The community helped me optimize my product pages and double my conversion rate." },
  { name: "Marcus T.", role: "SaaS Founder", quote: "Weekly workshops are gold. Learned more about landing pages in 2 hours than months of googling." },
  { name: "Priya N.", role: "Agency Director", quote: "Love the showcase gallery. It gave me the confidence to try a completely different design direction." },
];

export default function CommunityPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="text-center mb-20">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">COMMUNITY</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
            Build together.<br />Grow together.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join 3,000+ business owners, designers, and makers who use Harbi to build their digital presence.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { num: "3,200+", label: "Members" },
              { num: "150+", label: "Websites Shipped" },
              { num: "48", label: "Weekly Sessions" },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">{stat.num}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {COMMUNITY_FEATURES.map(feature => (
            <div key={feature.title} className="group relative bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-8 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden">
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5`}>
                <Icon icon={feature.icon} width="22" className="text-white" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">{feature.desc}</p>
              <span className="text-xs font-medium text-purple-700 dark:text-purple-400">{feature.stat}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white text-center mb-12">What members say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBERS.map(m => (
              <div key={m.name} className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6">
                <Icon icon="solar:chat-square-like-linear" width="24" className="text-purple-600/30 mb-4" />
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 italic">&ldquo;{m.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{m.name}</p>
                    <p className="text-xs text-neutral-400">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center border border-black/5 dark:border-white/5 rounded-3xl p-12 lg:p-16 bg-white/50 dark:bg-white/[0.02]">
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">Ready to join?</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-lg mx-auto">Every Harbi client gets automatic community access. Not a client yet? Start with a design.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink href="/designs" className="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]">
              Browse Designs <Icon icon="solar:arrow-right-linear" width="18" />
            </TransitionLink>
            <TransitionLink href="/contact" className="inline-flex items-center justify-center gap-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 px-8 py-4 rounded-full text-base font-medium transition">
              Contact Us
            </TransitionLink>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
 