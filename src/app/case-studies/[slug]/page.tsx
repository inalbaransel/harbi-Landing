import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Icon } from "@iconify/react";
import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1200px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        
        {/* Back Link */}
        <TransitionLink 
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors mb-12"
        >
          <Icon icon="solar:arrow-left-linear" width="16" /> Back to Financial Reports
        </TransitionLink>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-black/5 dark:border-white/5">
              {study.client}
            </span>
            <span className="bg-purple-600/10 text-purple-700 dark:text-purple-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-600/20">
              {study.industry}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8 leading-[1.1]">
            {study.title}
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {study.summary}
          </p>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Conversion Delta</span>
            <span className="text-5xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-2">+{study.metrics.conversionIncrease}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Increase in total leads</span>
          </div>
          <div className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Performance Delta</span>
            <span className="text-5xl font-bold text-emerald-600 tracking-tighter mb-2">-{study.metrics.loadTimeDrop}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Decrease in page load speed</span>
          </div>
          <div className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Return on Investment</span>
            <span className="text-5xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-2">{study.metrics.roi}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Generated within 12 months</span>
          </div>
        </div>

        {/* Visual Proof / Before After Slider */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">Architectural Transformation</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Drag the slider to physically compare the old framework against the new Harbi engine.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-600/10 px-4 py-2 rounded-full">
              <Icon icon="solar:slider-minimalistic-horizontal-bold" width="16" /> Interactive
            </div>
          </div>
          
          <BeforeAfterSlider beforeImage={study.images.before} afterImage={study.images.after} />
        </div>

        {/* Deep Dive Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="w-12 h-12 bg-red-500/10 text-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Icon icon="solar:danger-triangle-linear" width="24" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">The Challenge</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {study.challenge}
            </p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Icon icon="solar:check-circle-linear" width="24" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">The Harbi Solution</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 bg-purple-600 rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.3)]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to architect similar results for your business?
            </h2>
            <p className="text-purple-200 text-lg mb-10">
              Stop losing revenue to outdated digital infrastructure. Let us build your conversion engine.
            </p>
            <TransitionLink 
              href="/pricing"
              className="inline-flex items-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-100 transition shadow-xl"
            >
              Get an Estimate <Icon icon="solar:arrow-right-linear" width="20" />
            </TransitionLink>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
