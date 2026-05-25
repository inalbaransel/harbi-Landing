import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | Harbi Agency",
  description: "Explore data-driven case studies detailing how Harbi Agency scales businesses.",
};

export default function CaseStudiesHub() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-purple-700 font-bold text-xs uppercase tracking-widest mb-4 block dark:text-purple-500">
            PROVEN RESULTS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            We build systems that <br /> multiply revenue.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            Read our financial reports detailing exactly how we rip out outdated architectures and replace them with high-conversion web engines.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <TransitionLink 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group block bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Massive Metric Hero */}
              <div className="bg-neutral-900 dark:bg-black p-10 flex flex-col items-center justify-center relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {study.industry}
                </div>
                
                <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-2 z-10 group-hover:scale-105 transition-transform duration-500">
                  +{study.metrics.conversionIncrease}
                </span>
                <span className="text-purple-300 font-semibold tracking-wide uppercase text-sm z-10">
                  Conversion Increase
                </span>
              </div>

              {/* Data Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
                  Client: <span className="text-neutral-900 dark:text-white">{study.client}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                  {study.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">ROI</div>
                      <div className="text-lg font-bold text-neutral-900 dark:text-white">{study.metrics.roi}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Speed</div>
                      <div className="text-lg font-bold text-emerald-600">-{study.metrics.loadTimeDrop}</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon icon="solar:arrow-right-linear" width="20" />
                  </div>
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
