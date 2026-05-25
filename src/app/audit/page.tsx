"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { useState } from "react";

type AuditState = "idle" | "analyzing" | "complete" | "error";

interface AuditResult {
  overall: number;
  performance: {
    score: number;
    fcp: string;
    lcp: string;
    cls: string;
    tbt: string;
    warnings: string[];
  };
  seo: {
    score: number;
    validTitle: boolean;
    validMetaDesc: boolean;
    validAlts: boolean;
    validStatus: boolean;
    warnings: string[];
  };
  bestPractices: {
    score: number;
    isHttps: boolean;
    noVuln: boolean;
    errorsInConsole: boolean;
    warnings: string[];
  };
}

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<AuditState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showTechnical, setShowTechnical] = useState(false);
  const [results, setResults] = useState<AuditResult | null>(null);

  const startAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Reset and start
    setState("analyzing");
    setShowTechnical(false);
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze website");
      }

      setResults(data);
      setState("complete");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred.");
      setState("error");
    }
  };

  // Helper to determine color based on score (Google Lighthouse standard)
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500 border-green-500/20 border-t-green-500";
    if (score >= 50) return "text-yellow-500 border-yellow-500/20 border-t-yellow-500";
    return "text-red-500 border-red-500/20 border-t-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500/10 text-green-600 dark:text-green-400";
    if (score >= 50) return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
    return "bg-red-500/10 text-red-600 dark:text-red-400";
  };

  const getOverallVerdict = (score: number) => {
    if (score >= 90) return "Excellent standard";
    if (score >= 50) return "Needs Improvement";
    return "Losing potential clients";
  };

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">FREE WEBSITE AUDIT</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            How much is your current site costing you?
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-10">
            Enter your website URL below to run a deep performance, SEO, and best-practices audit. Find out exactly what's slowing your growth.
          </p>

          {/* Form */}
          <form onSubmit={startAudit} className="relative max-w-2xl mx-auto flex items-center shadow-2xl rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-2">
            <div className="flex items-center pl-4 pr-2 text-neutral-400">
              <Icon icon="solar:global-linear" width="24" />
            </div>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={state === "analyzing"}
              className="flex-1 bg-transparent border-none outline-none text-neutral-900 dark:text-white placeholder-neutral-400 px-3 py-4 text-lg w-full disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={state === "analyzing" || !url}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition duration-300 disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
            >
              {state === "analyzing" ? "Analyzing API..." : "Run Free Audit"}
            </button>
          </form>

          {/* Error Message */}
          {state === "error" && (
            <div className="mt-6 text-red-500 font-medium bg-red-500/10 py-3 px-6 rounded-xl inline-block border border-red-500/20">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Loading State */}
        {state === "analyzing" && (
          <div className="max-w-2xl mx-auto mt-20 animate-in fade-in zoom-in duration-500">
            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-10 text-center shadow-xl">
              <Icon icon="solar:radar-linear" width="64" className="mx-auto text-purple-600 mb-6 animate-pulse" />
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">Scanning {new URL(url).hostname || "website"}...</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                Connecting to Google PageSpeed Insights. We are evaluating real-world performance, SEO heuristics, and structural best practices. This takes about 10-15 seconds.
              </p>
              
              <div className="w-8 h-8 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin mx-auto" />
            </div>
          </div>
        )}

        {/* Results State */}
        {state === "complete" && results && (
          <div className="max-w-5xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Results Header */}
              <div className="p-8 lg:p-12 border-b border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-500/5 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${getScoreBg(results.overall)}`}>
                         {getOverallVerdict(results.overall)}
                       </span>
                    </div>
                    <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white truncate max-w-xl">
                      Audit: {new URL(url).hostname || url}
                    </h2>
                  </div>
                  
                  {/* Overall Grade Ring */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">Overall Score</p>
                    </div>
                    <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center bg-white dark:bg-black/20 shadow-inner ${getScoreColor(results.overall)}`}>
                      <span className="text-3xl font-bold">{results.overall}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle View */}
              <div className="px-8 lg:px-12 py-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/5 dark:bg-white/5">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                  <Icon icon={showTechnical ? "solar:code-square-linear" : "solar:user-rounded-linear"} width="18" />
                  {showTechnical ? "Developer Analysis Mode" : "Business Owner Mode"}
                </span>
                <button
                  onClick={() => setShowTechnical(!showTechnical)}
                  className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 transition flex items-center gap-2 bg-white dark:bg-black/20 px-4 py-2 rounded-lg border border-purple-500/20"
                >
                  {showTechnical ? "Simplify for me" : "Show technical details"}
                  <Icon icon="solar:sort-vertical-linear" width="16" />
                </button>
              </div>

              {/* Results Grid */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Performance Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getScoreBg(results.performance.score)}`}>
                          <Icon icon="solar:bolt-circle-linear" width="24" />
                        </div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">Speed</h3>
                      </div>
                      <span className={`font-bold ${results.performance.score < 50 ? 'text-red-500' : results.performance.score < 90 ? 'text-yellow-500' : 'text-green-500'}`}>{results.performance.score}</span>
                    </div>
                    {showTechnical ? (
                      <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>FCP: <span className="text-neutral-900 dark:text-white">{results.performance.fcp}</span></li>
                        <li>LCP: <span className="text-neutral-900 dark:text-white">{results.performance.lcp}</span></li>
                        <li>CLS: <span className="text-neutral-900 dark:text-white">{results.performance.cls}</span></li>
                        <li>TBT: <span className="text-neutral-900 dark:text-white">{results.performance.tbt}</span></li>
                        <div className="h-px bg-black/5 dark:bg-white/5 my-2"></div>
                        {results.performance.warnings.map((warn, i) => (
                          <li key={i} className="text-purple-500 dark:text-purple-400 leading-snug">→ {warn}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> Evaluates how long your site takes to load and become interactive for the user.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Slow loading times drastically increase bounce rates. Mobile specifically penalizes slow painting of content, directly resulting in lost sales and traffic.</p>
                      </div>
                    )}
                  </div>

                  {/* SEO Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getScoreBg(results.seo.score)}`}>
                          <Icon icon="solar:magnifer-linear" width="24" />
                        </div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">SEO</h3>
                      </div>
                      <span className={`font-bold ${results.seo.score < 50 ? 'text-red-500' : results.seo.score < 90 ? 'text-yellow-500' : 'text-green-500'}`}>{results.seo.score}</span>
                    </div>
                    {showTechnical ? (
                      <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>Title: <span className={results.seo.validTitle ? "text-green-500" : "text-red-500"}>{results.seo.validTitle ? 'Valid' : 'Missing'}</span></li>
                        <li>Meta Desc: <span className={results.seo.validMetaDesc ? "text-green-500" : "text-red-500"}>{results.seo.validMetaDesc ? 'Valid' : 'Missing'}</span></li>
                        <li>Img Alts: <span className={results.seo.validAlts ? "text-green-500" : "text-yellow-500"}>{results.seo.validAlts ? 'Valid' : 'Failing'}</span></li>
                        <div className="h-px bg-black/5 dark:bg-white/5 my-2"></div>
                        {results.seo.warnings.map((warn, i) => (
                          <li key={i} className="text-purple-500 dark:text-purple-400 leading-snug">→ {warn}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> Google's robots scan your tags to understand exactly what your business does.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Missing crucial descriptions and hidden alt-tags means competitors with better code structure will consistently rank higher than you organically.</p>
                      </div>
                    )}
                  </div>

                  {/* Best Practices Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getScoreBg(results.bestPractices.score)}`}>
                          <Icon icon="solar:shield-check-linear" width="24" />
                        </div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">Best Practices</h3>
                      </div>
                      <span className={`font-bold ${results.bestPractices.score < 50 ? 'text-red-500' : results.bestPractices.score < 90 ? 'text-yellow-500' : 'text-green-500'}`}>{results.bestPractices.score}</span>
                    </div>
                    {showTechnical ? (
                      <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>HTTPS: <span className={results.bestPractices.isHttps ? "text-green-500" : "text-red-500"}>{results.bestPractices.isHttps ? 'Secure' : 'Insecure'}</span></li>
                        <li>Vuln Libs: <span className={results.bestPractices.noVuln ? "text-green-500" : "text-red-500"}>{results.bestPractices.noVuln ? 'None' : 'Detected'}</span></li>
                        <li>JS Errors: <span className={results.bestPractices.errorsInConsole ? "text-green-500" : "text-red-500"}>{results.bestPractices.errorsInConsole ? 'Clean' : 'Failing'}</span></li>
                        <div className="h-px bg-black/5 dark:bg-white/5 my-2"></div>
                        {results.bestPractices.warnings.map((warn, i) => (
                          <li key={i} className="text-purple-500 dark:text-purple-400 leading-snug">→ {warn}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> Ensures your code architecture doesn't have vulnerable libraries or basic script errors.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Browser console errors break tracking analytics integrations and can completely halt purchase checkouts without you ever knowing.</p>
                      </div>
                    )}
                  </div>

                </div>

                {/* Final CTA Box */}
                <div className="mt-12 p-8 bg-purple-600 rounded-2xl text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <h3 className="text-2xl font-semibold mb-3 relative z-10">We can fix all of this in 48 hours.</h3>
                  <p className="text-purple-200 mb-8 max-w-lg mx-auto relative z-10">
                    Stop losing money to bad code and poor design. Pick a template from our library and we'll launch a technically perfect, high-converting website for you immediately.
                  </p>
                  <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => window.location.href='/designs'} className="bg-white text-purple-700 hover:bg-neutral-100 font-bold px-8 py-4 rounded-xl transition shadow-xl">
                      Browse Designs
                    </button>
                    <button onClick={() => window.location.href='/pricing'} className="bg-purple-800 hover:bg-purple-900 text-white font-medium px-8 py-4 rounded-xl transition border border-purple-500">
                      View Pricing
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
