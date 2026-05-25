"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

type FlowType = "quick" | "project" | null;
type ProjectOwner = "company" | "personal" | null;

export default function IletisimPage() {
  const [step, setStep] = useState(0);
  const [flow, setFlow] = useState<FlowType>(null);
  const [owner, setOwner] = useState<ProjectOwner>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    web: {
      title: "Web Hizmetleri",
      icon: "solar:code-square-linear",
      items: ["Web Tasarım", "UI / UX", "Web Yazılım", "Mobil Uygulama", "E-Ticaret"]
    },
    graphic: {
      title: "Grafik Tasarım",
      icon: "solar:pen-2-linear",
      items: ["Logo Tasarım", "Kurumsal Kimlik", "Katalog Tasarımı", "Video Prodüksiyon", "Fotoğrafçılık"]
    },
    marketing: {
      title: "Dijital Pazarlama",
      icon: "solar:graph-up-linear",
      items: ["Google Reklamları", "SEO Optimizasyonu", "Sosyal Medya", "E-Mail Pazarlama"]
    },
    other: {
      title: "Diğer",
      icon: "solar:rocket-linear",
      items: ["Teknik Destek", "Hosting / Sunucu", "İçerik Hizmeti"]
    }
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const reset = () => { setStep(0); setFlow(null); setOwner(null); setSelectedServices([]); };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <Background />
      <Navbar />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: FORM SYSTEM */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative min-h-[500px]">
              {submitted ? (
                <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-12 rounded-[48px] text-center animate-in zoom-in fade-in duration-500 shadow-2xl">
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Icon icon="solar:check-circle-bold" width="48" />
                  </div>
                  <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Harbi Mesajın Alındı!</h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10 max-w-md mx-auto">Ekibimiz projeni incelemeye başladı. En kısa sürede seninle iletişime geçeceğiz.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-purple-500/30">Başa Dön</button>
                </div>
              ) : (
                <div className="transition-all duration-500">
                  {/* STEP 0 */}
                  {step === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                      <div className="mb-12">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Fikrin Var mı?<br/><span className="text-purple-600">Bize Anlat.</span></h1>
                        <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-xl font-light">Hangi yolla ilerlemek istersin? Senin için en uygun süreci seçelim.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button onClick={() => { setFlow("quick"); setStep(1); }} className="group bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[40px] p-10 text-left hover:bg-purple-600 dark:hover:bg-purple-600 transition-all duration-500 hover:scale-[1.02] shadow-xl">
                          <div className="w-16 h-16 bg-black/10 dark:bg-white/10 group-hover:bg-white rounded-2xl flex items-center justify-center mb-8 transition-colors">
                            <Icon icon="solar:bolt-circle-bold" width="32" className="text-neutral-900 dark:text-white group-hover:text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Hızlı Teklif Al</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 group-hover:text-purple-100 italic">Sadece 30 saniyeni alır.</p>
                        </button>
                        <button onClick={() => { setFlow("project"); setStep(1); }} className="group bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[40px] p-10 text-left hover:bg-purple-600 dark:hover:bg-purple-600 transition-all duration-500 hover:scale-[1.02] shadow-xl">
                          <div className="w-16 h-16 bg-black/10 dark:bg-white/10 group-hover:bg-white rounded-2xl flex items-center justify-center mb-8 transition-colors">
                            <Icon icon="solar:chat-round-dots-bold" width="32" className="text-neutral-900 dark:text-white group-hover:text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Bir Projem Var</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 group-hover:text-purple-100 italic">Detaylı bir planlama yapalım.</p>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 1: QUICK FORM / PROJECT TYPE */}
                  {step === 1 && (
                    <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[48px] p-8 md:p-12 animate-in fade-in slide-in-from-right-8 duration-500 shadow-2xl">
                      <button onClick={reset} className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-purple-600 transition-colors font-medium">
                        <Icon icon="solar:arrow-left-linear" width="20" /> Geri Dön
                      </button>

                      {flow === "quick" ? (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-10 text-center md:text-left">Hızlı Teklif</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Ad Soyad" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none w-full shadow-sm" required />
                            <input type="email" placeholder="E-Posta" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none w-full shadow-sm" required />
                            <input type="tel" placeholder="Telefon" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none w-full shadow-sm" required />
                            <input type="text" placeholder="Şirket / Web Sitesi" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none w-full shadow-sm" />
                          </div>
                          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-purple-600/20">Hemen Teklif Al</button>
                        </form>
                      ) : (
                        <div className="text-center md:text-left">
                          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-10">Kimin için çalışacağız?</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => { setOwner("company"); setStep(2); }} className="flex flex-col items-center justify-center bg-white dark:bg-black/20 border-2 border-transparent hover:border-purple-600 rounded-3xl p-10 transition-all shadow-sm group">
                              <Icon icon="solar:buildings-bold" width="48" className="text-neutral-300 dark:text-neutral-600 group-hover:text-purple-600 mb-4 transition-colors" />
                              <span className="text-xl font-bold text-neutral-900 dark:text-white">Şirketim İçin</span>
                            </button>
                            <button onClick={() => { setOwner("personal"); setStep(2); }} className="flex flex-col items-center justify-center bg-white dark:bg-black/20 border-2 border-transparent hover:border-purple-600 rounded-3xl p-10 transition-all shadow-sm group">
                              <Icon icon="solar:user-bold" width="48" className="text-neutral-300 dark:text-neutral-600 group-hover:text-purple-600 mb-4 transition-colors" />
                              <span className="text-xl font-bold text-neutral-900 dark:text-white">Kişisel Proje</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 2: SERVICES */}
                  {step === 2 && (
                    <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[48px] p-8 md:p-12 animate-in fade-in slide-in-from-right-8 duration-500 shadow-2xl">
                      <button onClick={() => setStep(1)} className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-purple-600 transition-colors font-medium">
                        <Icon icon="solar:arrow-left-linear" width="20" /> Geri
                      </button>
                      <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-10">Neye ihtiyacın var?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {Object.entries(services).map(([key, cat]) => (
                          <div key={key} className="bg-white dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-3xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <Icon icon={cat.icon} width="24" className="text-purple-600" />
                              <span className="font-bold text-neutral-900 dark:text-white">{cat.title}</span>
                            </div>
                            <div className="space-y-2">
                              {cat.items.map(item => (
                                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" checked={selectedServices.includes(item)} onChange={() => toggleService(item)} className="w-5 h-5 rounded-lg border-black/10 dark:border-white/20 accent-purple-600" />
                                  <span className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-purple-600 transition-colors">{item}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => setStep(3)} disabled={selectedServices.length === 0} className="w-full bg-purple-600 text-white py-5 rounded-2xl font-bold text-lg disabled:opacity-50 transition-all shadow-xl shadow-purple-600/20">İleri</button>
                    </div>
                  )}

                  {/* STEP 3: FINAL FORM */}
                  {step === 3 && (
                    <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[48px] p-8 md:p-12 animate-in fade-in slide-in-from-right-8 duration-500 shadow-2xl">
                      <button onClick={() => setStep(2)} className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-purple-600 transition-colors font-medium">
                        <Icon icon="solar:arrow-left-linear" width="20" /> Geri
                      </button>
                      <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Harika! Son bir adım.</h2>
                      <p className="text-neutral-500 dark:text-neutral-400 mb-10">Detayları ver, projeni başlatalım.</p>
                      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                        {owner === "company" && <input type="text" placeholder="Şirket Adı" className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-600" required />}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" placeholder="Ad Soyad" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-600" required />
                          <input type="email" placeholder="E-Posta" className="bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-600" required />
                        </div>
                        <textarea placeholder="Proje detaylarını buraya yazabilirsin..." className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-600 h-32 resize-none" required />
                        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-600/20 transition-all">Gönder Gitsin</button>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT INFO & MAP */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
            
            {/* Location Card Revamped */}
            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[48px] p-8 relative overflow-hidden group shadow-2xl transition-colors duration-500">
              {/* High-Tech Radar/Grid Background */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none select-none overflow-hidden flex items-center justify-center">
                <div className="w-[200%] h-[200%] border-[1px] border-black/10 dark:border-white/10 rounded-full absolute animate-[spin_60s_linear_infinite]" />
                <div className="w-[150%] h-[150%] border-[1px] border-black/10 dark:border-white/10 rounded-full absolute animate-[spin_45s_linear_infinite_reverse]" />
                <div className="w-[100%] h-[100%] border-[1px] border-black/20 dark:border-white/20 rounded-full absolute animate-[spin_30s_linear_infinite]" />
                <div className="w-[50%] h-[50%] border-[1px] border-purple-500/30 rounded-full absolute" />
                <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 absolute top-1/2 -translate-y-1/2" />
                <div className="h-full w-[1px] bg-black/5 dark:bg-white/10 absolute left-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl p-3 shadow-lg shadow-black/5">
                    <Icon icon="solar:radar-bold" width="32" className="text-purple-600 dark:text-purple-400 animate-pulse" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 text-neutral-500 dark:text-white/80 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Müsaitiz</span>
                    </div>
                    <div className="text-3xl font-mono font-bold text-neutral-900 dark:text-white tracking-tighter drop-shadow-sm">{currentTime}</div>
                  </div>
                </div>

                <div className="space-y-1 mb-10 text-center mt-16">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-8 h-6 rounded-sm bg-red-600 relative overflow-hidden flex items-center justify-center shadow-lg">
                      <div className="text-white text-[10px] absolute left-1.5 top-1/2 -translate-y-1/2">☪</div>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">İstanbul, Türkiye</h2>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-bold uppercase tracking-widest drop-shadow-sm">Global Vizyon, Harbi Yaklaşım</p>
                </div>

                <div className="relative h-20 flex items-center justify-center mt-12">
                  <div className="absolute inset-0 bg-purple-600/20 dark:bg-purple-600/30 blur-[50px] rounded-full animate-pulse" />
                  <Icon icon="solar:map-point-wave-bold" width="56" className="text-purple-600 dark:text-white relative z-10 drop-shadow-xl" />
                </div>

                <p className="text-neutral-500 dark:text-white/60 text-sm leading-relaxed text-center italic mt-8 font-medium">
                  "Sınırları aşan projeler için İstanbul kalbindeyiz."
                </p>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-1 gap-4">
              <a href="mailto:selam@harbi.agency" className="flex items-center gap-5 bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-[32px] hover:border-purple-600 transition-all group shadow-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <Icon icon="solar:letter-bold" width="24" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-0.5">E-Posta</div>
                  <div className="text-lg font-bold text-neutral-900 dark:text-white">selam@harbi.agency</div>
                </div>
              </a>

              <a href="tel:+905555555555" className="flex items-center gap-5 bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-[32px] hover:border-purple-600 transition-all group shadow-sm">
                <div className="w-12 h-12 bg-neutral-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-black transition-transform group-hover:scale-110">
                  <Icon icon="solar:phone-bold" width="24" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-0.5">Telefon</div>
                  <div className="text-lg font-bold text-neutral-900 dark:text-white">+90 (555) 555 55 55</div>
                </div>
              </a>
            </div>

            {/* Socials & Location Small */}
            <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-[32px] shadow-sm">
               <div className="flex items-center gap-4 mb-6 text-neutral-500 dark:text-neutral-400">
                  <Icon icon="solar:map-point-bold" width="20" className="text-purple-600" />
                  <span className="text-sm font-medium">Beşiktaş, İstanbul / Türkiye</span>
               </div>
               <div className="grid grid-cols-3 gap-2">
                {['Instagram', 'LinkedIn', 'Twitter'].map((s) => (
                  <button key={s} className="py-3 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-purple-600 dark:hover:text-white transition-all">{s}</button>
                ))}
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
