"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

// --- Pricing Base Constants (ZAR) ---
const PRICES = {
  landing: 15000,
  website: 25000,
  ecom: 45000,
  app: 150000,
  page: 1500,
  features: {
    seo: 7500,
    crm: 10000,
    perf: 12000,
    webgl: 25000,
    wa: 5000
  },
  rush: 1.5,
  hosting: {
    none: 0,
    maintenance: 2500,
    growth: 7500,
    partner: 25000
  }
};

const SYSTEM_BUILDS = [
  {
    name: "Başlangıç Paketi",
    tagline: "Temel çevrimiçi varlık.",
    price: "₺15.000+",
    highlighted: false,
    features: ["1-3 Sayfa Tasarımı", "Mobil Uyumlu", "Temel SEO Kurulumu", "WhatsApp Entegrasyonu", "Hızlı Teslimat"],
  },
  {
    name: "Büyüme Sistemi",
    tagline: "Profesyonel UX/UI yapılandırması.",
    price: "₺25.000+",
    highlighted: true,
    features: ["4-8 Özel Sayfa Tasarımı", "Müşteri Yakalama Formları", "Google Analytics Kurulumu", "Gelişmiş Meta Veri Kurulumu", "Revizyon Hakları"],
  },
  {
    name: "Dönüşüm Ekosistemi",
    tagline: "Reklam trafiği için tasarlandı.",
    price: "₺65.000+",
    highlighted: false,
    features: ["Özel Kullanıcı Yolculukları", "Özel Açılış Sayfaları", "Otomatik E-posta Akışları", "CRM Entegrasyonları", "Performans Panelleri"],
  },
  {
    name: "Amiral Gemisi Deneyimi",
    tagline: "Tam kapsamlı dijital ortaklık.",
    price: "₺150.000+",
    highlighted: false,
    features: ["Özel Mobil Uygulama Geliştirme", "Gelişmiş WebGL/3D Arayüz", "Ödeme Geçidi Mimarisi", "Derinlemesine Keşif Aşamaları", "Lansman Sonrası Optimizasyon"],
  }
];

const RETAINER_PLANS = [
  {
    id: "maintenance",
    name: "Bakım Protokolü",
    price: "₺2.500",
    desc: "Sisteminizi güncel ve güvenli tutun.",
    features: ["Premium Yönetilen Hosting", "Günlük Güvenlik Yedeklemeleri", "Teknik Sorun Çözümü", "SSL ve Çekirdek Güncellemeleri"],
  },
  {
    id: "growth",
    name: "Büyüme Motoru",
    price: "₺7.500",
    desc: "Pazarda yükselmeniz için aktif optimizasyon.",
    features: ["Bakım Paketindeki Her Şey", "Sürekli Yerel SEO Mantığı", "Küçük Sayfa/İçerik Güncellemeleri", "Hız ve Performans Ayarları"],
  },
  {
    id: "partner",
    name: "Dijital İş Ortağı",
    price: "₺25.000+",
    desc: "Sürekli stratejik girdi ve tam teknik özerklik.",
    features: ["Büyüme Paketindeki Her Şey", "Yeni Açılış Sayfası Oluşturma", "Derin Analiz/Dönüşüm Denetimleri", "Öncelikli Geliştirme Saatleri"],
  }
];

export default function PricingPage() {
  // Estimator State
  const [projectType, setProjectType] = useState<"landing" | "website" | "ecom" | "app">("website");
  const [pages, setPages] = useState<number>(4);
  const [hostingPlan, setHostingPlan] = useState<"none" | "maintenance" | "growth" | "partner">("none");
  
  // Toggles
  const [opts, setOpts] = useState({
    seo: false,
    crm: false,
    perf: false,
    webgl: false,
    wa: false,
    rush: false
  });

  // Computed Price State
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);
  const [monthlyTotal, setMonthlyTotal] = useState<number>(0);

  useEffect(() => {
    let total = PRICES[projectType];
    
    if (pages > 1) {
      total += (pages - 1) * PRICES.page;
    }

    if (opts.seo) total += PRICES.features.seo;
    if (opts.crm) total += PRICES.features.crm;
    if (opts.perf) total += PRICES.features.perf;
    if (opts.webgl) total += PRICES.features.webgl;
    if (opts.wa) total += PRICES.features.wa;

    if (opts.rush) total = Math.round(total * PRICES.rush);

    setEstimatedTotal(total);
    setMonthlyTotal(PRICES.hosting[hostingPlan]);
  }, [projectType, pages, opts, hostingPlan]);

  const toggleOpt = (key: keyof typeof opts) => {
    setOpts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const formatTRY = (value: number) => {
    return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  };

  const currentDate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body > *:not(#print-area) { display: none !important; }
          body { background: white !important; color: black !important; }
          #print-area { display: block !important; position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}} />

      {/* --- A4 PDF PRINT INVOICE COMPONENT (Strictly Hidden from UI) --- */}
      <div id="print-area" className="hidden print:block bg-white text-black p-10 font-sans w-full max-w-4xl mx-auto min-h-screen">
        <div className="flex justify-between items-start mb-12 border-b-2 border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter text-purple-700 mb-1">HARBİ AJANS</h1>
            <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">İnteraktif Sistem Tahmini</p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p className="font-semibold text-black">Oluşturulma Tarihi:</p>
            <p>{currentDate}</p>
            <p className="mt-4 font-semibold text-black">Teklif Geçerliliği:</p>
            <p>14 Gün</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2 mb-4">Proje Mimarisi</h2>
          <table className="w-full text-left text-sm mb-6">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2">Bileşen</th>
                <th className="py-2 text-right">Maliyet (TL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 border-b border-slate-100 font-medium capitalize">Platform Temeli: {projectType}</td>
                <td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES[projectType])}</td>
              </tr>
              <tr>
                <td className="py-3 border-b border-slate-100 font-medium capitalize">Kapsam: {pages} Ekran/Sayfa</td>
                <td className="py-3 border-b border-slate-100 text-right">{pages === 1 ? 'Dahil' : formatTRY((pages - 1) * PRICES.page)}</td>
              </tr>
              {opts.seo && <tr><td className="py-3 border-b border-slate-100">Gelişmiş SEO Yapılandırması</td><td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES.features.seo)}</td></tr>}
              {opts.crm && <tr><td className="py-3 border-b border-slate-100">CRM Müşteri Yakalama Motoru</td><td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES.features.crm)}</td></tr>}
              {opts.perf && <tr><td className="py-3 border-b border-slate-100">Performans Ayarları (LCP Garantisi)</td><td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES.features.perf)}</td></tr>}
              {opts.webgl && <tr><td className="py-3 border-b border-slate-100">İnteraktif 3D / WebGL Varlıkları</td><td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES.features.webgl)}</td></tr>}
              {opts.wa && <tr><td className="py-3 border-b border-slate-100">WhatsApp Kurumsal Entegrasyonu</td><td className="py-3 border-b border-slate-100 text-right">{formatTRY(PRICES.features.wa)}</td></tr>}
              {opts.rush && <tr><td className="py-3 border-b border-slate-100 text-purple-700 font-bold">Hızlı Teslimat Farkı (+%50)</td><td className="py-3 border-b border-slate-100 text-right text-purple-700 font-bold">{formatTRY(estimatedTotal - (estimatedTotal / PRICES.rush))}</td></tr>}
            </tbody>
          </table>
          <div className="flex justify-between items-end bg-slate-50 p-6 rounded-lg border border-slate-200">
            <span className="text-slate-500 font-medium uppercase tracking-wider text-sm">Toplam Öngörülen Kurulum Maliyeti</span>
            <span className="text-4xl font-bold tracking-tight text-black">{formatTRY(estimatedTotal)}</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2 mb-4">Sürekli Altyapı Desteği</h2>
          <div className="flex justify-between items-center py-3 font-medium">
            <span className="capitalize">Seçilen Destek: {hostingPlan === "none" ? "Kendi Yönetiminizde (Abonelik Yok)" : hostingPlan}</span>
            <span>{formatTRY(monthlyTotal)} / aylık</span>
          </div>
        </div>

        <div className="text-xs text-slate-400 border-t border-slate-200 pt-8 mt-auto">
          <p className="mb-2"><strong>Tahmin Şartları:</strong> Bu belge planlama amaçlı oluşturulmuştur ve yasal olarak bağlayıcı bir hizmet sözleşmesi teşkil etmez. Dijital sistem mimarisinin son derece özelleştirilmiş doğası nedeniyle, nihai uygulama maliyetleri keşif aşamasından sonra değişiklik gösterebilir. Standart ödeme koşulları, kuruluma başlamak için %50 peşin ve son onayda %50 şeklindedir.</p>
          <p>Harbi Ajans | www.harbi.agency</p>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}


      <div className="print:hidden">
        <Background />
        <Navbar />

        <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
          
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">DİJİTAL YATIRIM</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
              Dönüşüm sistemleri tasarlıyoruz.<br />Sadece web sitesi değil.
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Türkiye pazarı için optimize edilmiş, projeniz için gerçek zamanlı bir maliyet tahmini görmek için gereksinimlerinizi aşağıdan belirleyin.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-32">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Inputs */}
              <div className="xl:col-span-8 flex flex-col gap-8">
                
                {/* 1. Category Selection */}
                <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">1. Platform Temeli</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "landing", icon: "solar:rocket-linear", title: "Açılış Sayfası", desc: "Tek sayfalık dönüşüm hunisi", base: PRICES.landing },
                      { id: "website", icon: "solar:window-frame-linear", title: "Pro Web Sitesi", desc: "Çok sayfalı kurumsal varlık", base: PRICES.website },
                      { id: "ecom", icon: "solar:cart-large-linear", title: "E-Ticaret", desc: "Online Mağaza ve Ödemeler", base: PRICES.ecom },
                      { id: "app", icon: "solar:smartphone-linear", title: "Mobil Uygulama", desc: "iOS/Android uygulaması", base: PRICES.app }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setProjectType(cat.id as any)}
                        className={`flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-300 ${projectType === cat.id ? "border-purple-600 bg-purple-600/5 shadow-[0_0_20px_rgba(52,25,224,0.15)]" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/50"}`}
                      >
                        <div className="flex items-start justify-between w-full mb-4">
                          <Icon icon={cat.icon} width="28" className={`${projectType === cat.id ? "text-purple-600" : "text-neutral-500"}`} />
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${projectType === cat.id ? "bg-purple-600/10 text-purple-700 dark:text-purple-400" : "bg-black/5 dark:bg-white/5 text-neutral-500"}`}>{formatTRY(cat.base)}'den</span>
                        </div>
                        <span className={`font-semibold mb-1 ${projectType === cat.id ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>{cat.title}</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{cat.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Page Count Slider */}
                <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">2. Kapsam (Ekran/Sayfa Sayısı)</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Projenin yapısal boyutunu tahmin edin.</p>
                    </div>
                    <div className="bg-purple-600/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-xl border border-purple-600/20 font-bold text-xl">
                      {pages} {pages === 1 ? "sayfa" : "sayfa"}
                    </div>
                  </div>
                  <div className="relative pt-2 pb-6">
                    <input type="range" min="1" max="30" value={pages} onChange={(e) => setPages(parseInt(e.target.value))} className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-600/20" />
                    <div className="flex justify-between text-xs text-neutral-400 mt-4 px-1 font-medium"><span>1</span><span>15</span><span>30+</span></div>
                  </div>
                </div>

                {/* 3. Conversion Features Toggle */}
                <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">3. Sistem Yetenekleri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "seo", icon: "solar:magnifer-linear", title: "Gelişmiş SEO Yapılandırması", desc: "Schema, hızlı dizine ekleme, sayfa içi optimizasyon.", price: PRICES.features.seo },
                      { id: "crm", icon: "solar:users-group-rounded-linear", title: "CRM Müşteri Yakalama", desc: "HubSpot/Zoho entegrasyonları + E-posta akışları.", price: PRICES.features.crm },
                      { id: "perf", icon: "solar:bolt-circle-linear", title: "Performans Motoru", desc: "100 Lighthouse skoru ve LCP < 1.5s garantisi.", price: PRICES.features.perf },
                      { id: "wa", icon: "solar:chat-line-linear", title: "WhatsApp Kurulumu", desc: "Tıkla-sohbet kurumsal entegrasyonu.", price: PRICES.features.wa },
                      { id: "webgl", icon: "solar:magic-stick-3-linear", title: "İnteraktif 3D Arayüz", desc: "Sürükleyici WebGL ve Fizik tabanlı kaydırma.", price: PRICES.features.webgl },
                      { id: "rush", icon: "solar:clock-circle-linear", title: "Hızlı Teslimat (48 Saat)", desc: "Öncelikli teslimat ve yoğun çalışma (+%50).", price: "Multi" }
                    ].map((feat) => (
                      <label key={feat.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${opts[feat.id as keyof typeof opts] ? "border-purple-600 bg-purple-600/5" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/30"}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon icon={feat.icon} width="16" className={opts[feat.id as keyof typeof opts] ? "text-purple-600" : "text-neutral-500"} />
                            <span className={`text-sm font-semibold ${opts[feat.id as keyof typeof opts] ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>{feat.title}</span>
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-2">{feat.desc}</p>
                          <span className="text-[10px] uppercase font-bold text-neutral-400">{feat.price === "Multi" ? "+%50 Toplam" : `+${formatTRY(feat.price as number)}`}</span>
                        </div>
                        <div className={`w-10 h-5 mt-1 shrink-0 rounded-full relative flex items-center p-1 transition-colors ${opts[feat.id as keyof typeof opts] ? "bg-purple-600" : "bg-neutral-200 dark:bg-neutral-800"}`}>
                          <input type="checkbox" className="hidden" checked={opts[feat.id as keyof typeof opts]} onChange={() => toggleOpt(feat.id as keyof typeof opts)} />
                          <div className={`w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 ${opts[feat.id as keyof typeof opts] ? "translate-x-5" : "translate-x-0"}`} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 4. Hosting & Retainers Plan */}
                <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">4. Sürekli Altyapı (Aylık)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "none", title: "Kendi Yönetiminizde", desc: "Kendi sunucu ve güvenlik bakımlarınızı kendiniz halledersiniz.", price: 0 },
                      { id: "maintenance", title: "Bakım Protokolü", desc: "Yönetilen hosting, günlük yedeklemeler ve SSL güncellemeleri.", price: PRICES.hosting.maintenance },
                      { id: "growth", title: "Büyüme Motoru", desc: "Tam bakım + sürekli SEO mantığı ve yapısal güncellemeler.", price: PRICES.hosting.growth },
                      { id: "partner", title: "Dijital İş Ortağı", desc: "Sürekli stratejik girdi, CRO denetimleri ve öncelikli geliştirme.", price: PRICES.hosting.partner }
                    ].map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setHostingPlan(plan.id as any)}
                        className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all duration-300 ${hostingPlan === plan.id ? "border-purple-600 bg-purple-600/5 shadow-sm" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/50"}`}
                      >
                        <div className="flex items-start justify-between w-full mb-2">
                          <span className={`font-semibold ${hostingPlan === plan.id ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>{plan.title}</span>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${hostingPlan === plan.id ? "bg-purple-600 text-white" : "bg-black/5 dark:bg-white/5 text-neutral-500"}`}>
                            {plan.price === 0 ? "Dahil" : `+${formatTRY(plan.price)}/ay`}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{plan.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Summary Panel */}
              <div className="xl:col-span-4 relative">
                <div className="sticky top-32 rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-2xl">
                  
                  {/* Panel Header */}
                  <div className="bg-gradient-to-br from-purple-800 to-black p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10">
                      <h3 className="text-xs font-semibold tracking-wider uppercase text-purple-300 mb-1">Tek Seferlik Kurulum Toplamı</h3>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl lg:text-5xl font-bold tracking-tight">{formatTRY(estimatedTotal)}</span>
                      </div>
                      
                      <div className="h-px bg-white/20 w-full my-4"></div>

                      <h3 className="text-xs font-semibold tracking-wider uppercase text-purple-300 mb-1">Aylık Abonelikler</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold tracking-tight">{formatTRY(monthlyTotal)}</span>
                        {monthlyTotal > 0 && <span className="text-sm opacity-80">/ ay</span>}
                      </div>
                    </div>
                  </div>

                  {/* Breakdown List */}
                  <div className="p-8">                    
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-xl font-bold transition hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md mb-3"
                    >
                      Resmi Teklif Al <Icon icon="solar:arrow-right-linear" width="20" />
                    </button>
                    
                    <button
                      onClick={() => window.print()}
                      className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 py-3.5 rounded-xl font-semibold transition hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      <Icon icon="solar:printer-linear" width="18" /> PDF Teklifini İndir
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>


          {/* ONE-OFF SYSTEMS */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent my-24 border-none"></div>
          
          <div className="text-center mb-16">
            <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">PAKETLER</span>
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">Kanıtlanmış dönüşüm mimarileri.</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Hemen yayına alınmaya hazır, test edilmiş ve yüksek performanslı bir sistem isteyen işletmeler için.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
            {SYSTEM_BUILDS.map(tier => (
              <div key={tier.name} className={`rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${tier.highlighted ? "bg-white dark:bg-black border-2 border-purple-600 shadow-[0_0_40px_rgba(52,25,224,0.15)] lg:-translate-y-2" : "bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm"}`}>
                {tier.highlighted && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">EN POPÜLER</div>}
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">{tier.tagline}</p>
                <div className="mb-8 items-end flex gap-1">
                  <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{tier.price}</span>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                      <Icon icon="solar:check-circle-bold" width="16" className="text-purple-600 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <TransitionLink href="/contact" className={`w-full py-3.5 rounded-full text-sm font-semibold text-center mt-auto block transition ${tier.highlighted ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white"}`}>Planı Seç</TransitionLink>
              </div>
            ))}
          </div>

        </main>
        <Footer />
      </div>

    </>
  );
}
