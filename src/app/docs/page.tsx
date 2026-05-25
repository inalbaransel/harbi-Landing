"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState } from "react";

const SECTIONS = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "solar:rocket-linear",
    articles: [
      { 
        title: "Choosing Your Design", 
        desc: "Browse the library, compare templates, and pick the perfect starting point for your project.", 
        time: "3 min",
        content: `Selecting the right template is the most crucial step of the Harbi Agency process. Our Design Library is categorized by industry (Local, SaaS, E-commerce, Portfolio, etc.), but the true power lies in the layout.\n\nWhen choosing a design, **ignore the colors and placeholder images**. Look at the underlying structure. Does the hero section match your value proposition? Are there enough service highlight blocks? Does the navigation style suit your brand?\n\nIf you're unsure, select "All Categories" and focus purely on the structural flow. Once selected, our team will inject your brand guidelines to completely transform the aesthetic.`
      },
      { 
        title: "Submitting Your Brand Assets", 
        desc: "What to prepare: logos, brand colors, fonts, copy, and imagery for a smooth handoff.", 
        time: "5 min",
        content: `After purchasing your package, you will receive a secure onboarding form. To ensure our 48-hour delivery timeline, please prepare:\n\n1. **High-Resolution Logo:** SVG format is strongly preferred, but a high-quality PNG with a transparent background works.\n2. **Brand Guidelines (Optional):** If you have specific brand hex codes (e.g., #3419e0) or Google Fonts you require, list them.\n3. **Website Copy:** This is critical. Prepare your H1 (Main Header), service descriptions, and About Us text in a Google Doc.\n4. **Imagery:** Drop a Google Drive or Dropbox link containing your professional team photos or product shots.\n\nIf you don't have photography, simply let us know, and we will source high-quality premium stock imagery that fits your industry.`
      },
      { 
        title: "Understanding the Timeline", 
        desc: "From selection to launch — a detailed breakdown of each phase and what to expect.", 
        time: "4 min",
        content: `At Harbi Agency, we pride ourselves on extreme speed without sacrificing quality.\n\n• **Hour 0:** You purchase a plan and submit your onboarding form.\n• **Hour 1-12:** Our designers review your assets and begin custom CSS variable overrides to perfectly match your brand colors and typography.\n• **Hour 12-24:** We inject your copy. This includes resizing elements to fit your text length and ensuring the layout remains balanced.\n• **Hour 24-36:** Mobile QA. We test your site across iOS Safari, Android Chrome, and multiple viewport breakpoints to ensure perfection.\n• **Hour 48:** The staging link is sent to you for final approval. Upon approval, we instantly map your custom domain.`
      },
    ],
  },
  {
    id: "customization",
    title: "Customization Guide",
    icon: "solar:pen-new-round-linear",
    articles: [
      { 
        title: "Content Replacement", 
        desc: "How we swap placeholder content with your messaging, images, and media.", 
        time: "4 min",
        content: `Our templates use dynamic placeholder values. When we apply your copy, our team goes a step further than just "copy and pasting".\n\nWe strictly follow typographic hierarchy. If your headline is too long and breaks the grid, we will manually adjust the font-size clamp values in Tailwind to ensure it renders beautifully on both desktop and mobile. All your submitted images are automatically converted to modern WebP formats and optimized via Next.js <Image> components to guarantee lightning-fast load times.`
      },
      { 
        title: "Conversion Optimization", 
        desc: "How we structure CTAs, forms, and navigation to maximize lead generation.", 
        time: "5 min",
        content: `A website is mathematically useless if it doesn't convert. \n\nEvery template in our library is built using heat-mapped eye-tracking principles (the F-Pattern layout). When customizing your site, we ensure your Primary CTA (Call to Action) holds the highest contrast ratio on the page. We neutralize risk objections right next to your purchase buttons, and we make sure your contact forms are stripped of unnecessary fields to maximize completion rates.`
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Hosting",
    icon: "solar:server-linear",
    articles: [
      { 
        title: "Vercel Edge Network", 
        desc: "How your site gets deployed to Vercel's edge network for instant loading.", 
        time: "4 min",
        content: `Harbi Agency does not use cheap shared cPanel hosting. Every client site is statically compiled as a Next.js application and pushed to Vercel's global Edge Network.\n\nThis means your website doesn't live on a single server in Ohio. It is cached and distributed across dozens of servers globally. If a customer in London visits your site, they are served a pre-compiled version of your website from a data center nearby, resulting in page loads of roughly 30-50 milliseconds. This extreme speed heavily boosts your Google search ranking.`
      },
      { 
        title: "Custom Domains", 
        desc: "Connecting your domain, configuring DNS records, and going live.", 
        time: "3 min",
        content: `We make going live incredibly simple. You do not need to transfer your domain to us.\n\nWhether you bought your domain on GoDaddy, Namecheap, or Google Domains, you will simply log in to your registrar and add two standard DNS records (typically an A Record and a CNAME). Our team provides a specialized, 2-step screenshot instruction sheet for your specific registrar. SSL Certificates (HTTPS) are automatically provisioned and renewed by us for free permanently.`
      },
    ],
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [activeArticleTitle, setActiveArticleTitle] = useState<string | null>(null);

  const currentSection = SECTIONS.find(s => s.id === activeSection)!;
  const activeArticle = currentSection.articles.find(a => a.title === activeArticleTitle);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">DOCUMENTATION</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Everything you need<br />to know.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Guides, references, and walkthroughs to help you get the most out of Harbi Agency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1">
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar lg:sticky lg:top-32">
              {SECTIONS.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveArticleTitle(null); // Reset detail view when changing sections
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 shrink-0 ${
                    activeSection === section.id
                      ? "bg-purple-600/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400"
                      : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <Icon icon={section.icon} width="18" />
                  <span className="text-sm font-medium whitespace-nowrap">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Detailed Article View */}
            {activeArticle ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button 
                  onClick={() => setActiveArticleTitle(null)}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-purple-600 transition mb-6"
                >
                  <Icon icon="solar:arrow-left-linear" width="16" /> Back to {currentSection.title}
                </button>
                <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-8 lg:p-12 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
                      <Icon icon={currentSection.icon} width="22" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
                      {currentSection.title}
                    </span>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-10 text-sm text-neutral-400">
                    <Icon icon="solar:clock-circle-linear" width="16" />
                    {activeArticle.time} read
                  </div>
                  <div className="prose prose-purple dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300 whitespace-pre-line text-lg">
                    {activeArticle.content.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-neutral-900 dark:text-neutral-100 font-bold">{part}</strong> : part
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* List of Articles View */
              <div className="animate-in fade-in duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
                    <Icon icon={currentSection.icon} width="22" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">{currentSection.title}</h2>
                </div>

                <div className="flex flex-col gap-4">
                  {currentSection.articles.map(article => (
                    <div
                      key={article.title}
                      onClick={() => setActiveArticleTitle(article.title)}
                      className="group bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">{article.title}</h3>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{article.desc}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-neutral-400">{article.time}</span>
                          <Icon icon="solar:arrow-right-linear" width="16" className="text-neutral-300 dark:text-neutral-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition group-hover:translate-x-1 transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center border border-black/5 dark:border-white/5 rounded-3xl p-12 bg-white/50 dark:bg-white/[0.02]">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">Can&apos;t find what you need?</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-lg mx-auto">Our team is here to help. Reach out and we&apos;ll get you sorted.</p>
          <TransitionLink href="/contact" className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]">
            Contact Support <Icon icon="solar:arrow-right-linear" width="18" />
          </TransitionLink>
        </div>
      </main>

      <Footer />
    </>
  );
}
