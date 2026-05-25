"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const CATEGORIES = ["Tümü", "Girişim", "Hizmet", "E-Ticaret", "Portfolyo", "Yerel"] as const;

type Design = {
  name: string;
  category: string;
  image: string;
  desc: string;
  detailedDesc: string;
};

const DESIGNS: Design[] = [
  { 
    name: "Velocity", category: "Girişim", image: "/mockups/mockup_velocity_1776801528906.png", 
    desc: "Yüksek dönüşümlü SaaS açılış sayfası.",
    detailedDesc: "Velocity, özellikle SaaS lansmanları ve ürün tanıtımları için oluşturulmuş yüksek dönüşümlü bir açılış sayfasıdır. Renk paleti, teknoloji meraklısı bir kitleye doğrudan hitap eden modern, enerjik ve son derece teknik bir estetik oluşturan derin morlar ve çivit mavileri etrafında döner. Tasarım, derinlik ve ileri teknoloji hissi uyandıran cam morfizması kaplamalarına sahip sürükleyici bir hero bölümüne sahiptir. Tüm akış, ürünün ne olduğu, nasıl çalıştığı ve kullanıcının neden şu anda buna ihtiyacı olduğu sorularını anında yanıtlamak üzere inşa edilmiştir."
  },
  { 
    name: "Trustmark", category: "Hizmet", image: "/mockups/mockup_trustmark_1776801548773.png", 
    desc: "Otoriter danışmanlık ajansı düzeni.",
    detailedDesc: "Trustmark, anında otorite kurmanın çok önemli olduğu danışmanlar ve geleneksel ajanslar için özel olarak tasarlanmış profesyonel bir düzendir. Ana renk paleti, derin arduvazdan yumuşak grilere kadar uzanan ağırbaşlı renkler kullanır. Bu kasıtlı olarak sade palet, dikkat dağıtıcı unsurları ortadan kaldırarak metnin öne çıkmasını sağlarken müthiş bir istikrar ve yetkinlik aurası yansıtır."
  },
  { 
    name: "Storefront", category: "E-Ticaret", image: "/mockups/mockup_storefront_1776801570456.png", 
    desc: "Temiz ve sorunsuz alışveriş deneyimi.",
    detailedDesc: "Storefront, hızlı katalog taraması ve sorunsuz çevrimiçi satın alma için optimize edilmiş ürün odaklı bir mağaza tasarımıdır. Zümrüt yeşili ve yumuşak deniz mavisi tonlarından oluşan organik bir palet üzerine inşa edilen site, tüketiciler için anında davetkar ve güvenilir hissettirir. Düzen, satın alma yolculuğundaki psikolojik veya teknik engelleri kaldırmaya odaklanır."
  },
  { 
    name: "Canvas", category: "Portfolyo", image: "/mockups/mockup_canvas_1776801595613.png", 
    desc: "Avangart editoryal yaratıcı portfolyo.",
    detailedDesc: "Canvas, yaratıcılar, tasarımcılar ve görsel sanatçılar için titizlikle hazırlanmış deneysel ve minimal bir düzendir. Renk paleti, sıcak gül ve şeftali tonlarından beslenerek canlı bir atmosfer oluşturur. Estetik, avangart editoryal dergi düzenlerinden ve üst düzey moda kataloglarından ilham alır."
  },
  { 
    name: "Locale", category: "Yerel", image: "/mockups/mockup_locale_1776801614259.png", 
    desc: "Mobil öncelikli hizmet ve perakende arayüzü.",
    detailedDesc: "Locale, fiziksel restoranlar, klinikler ve yerel perakende mağazaları için geliştirilmiş hiper-fonksiyonel bir tasarımdır. İştahı, enerjiyi ve cana yakınlığı artırdığı kanıtlanmış kehribar ve toprak tonlarından oluşan sıcak bir palete sahiptir. Tasarım mimarisi, yerel SEO temellerini ve mobil kullanım kolaylığını her şeyin üzerinde tutar."
  },
  { 
    name: "Launchpad", category: "Girişim", image: "/mockups/mockup_launchpad_1776801632660.png", 
    desc: "Yüksek enerjili MVP bekleme listesi kaydı.",
    detailedDesc: "Launchpad, henüz piyasaya sürülmemiş ürünler için e-posta toplamak ve sosyal kanıt oluşturmak üzere tasarlanmış agresif bir MVP sayfasıdır. Neon mor ve derin uzay grisi gradyanları kullanan Launchpad, anında inovasyon hissi verir."
  },
  { 
    name: "Authority", category: "Hizmet", image: "/mockups/mockup_authority_1776801655608.png", 
    desc: "Prestijli kurumsal ve hukuki mimari.",
    detailedDesc: "Authority, sarsılmaz bir güvenilirlik yansıtması gereken hukuk büroları ve finansal kuruluşlar için tasarlanmış premium bir düzendir. Renk paleti, nötr taş renkleri ve derin mimari siyahlar üzerine kuruludur."
  },
  { 
    name: "Bloom", category: "Portfolyo", image: "/mockups/mockup_bloom_1776801678531.png", 
    desc: "Sinematik tam ekran görsel hikaye anlatımı.",
    detailedDesc: "Bloom, düğün fotoğrafçıları ve görsel hikaye anlatıcıları için tam ekran bir resim galerisidir. Canlı mercan pembelerinden fuşyaya uzanan bir renk şemasına sahiptir."
  },
  { 
    name: "Merchant", category: "E-Ticaret", image: "/mockups/mockup_merchant_1776801697260.png", 
    desc: "Endüstriyel güçte katalog düzeni.",
    detailedDesc: "Merchant, yüzlerce ürün yöneten büyük e-ticaret operasyonları için gelişmiş filtreleme mekanizmalarına sahip bir katalog düzenidir. Gökyüzü mavisi ve saf beyaz tonlarıyla kusursuz bir düzen hissi verir."
  },
  { 
    name: "Beacon", category: "Yerel", image: "/mockups/mockup_beacon_1776801722562.png", 
    desc: "Sıcak, topluluk odaklı kafe merkezi.",
    detailedDesc: "Beacon, butik kafeler ve yerel mekanlar için sıcak ve topluluk odaklı bir tasarım çerçevesi sunar. Organik yeşil tonları tazelik hissi uyandırır."
  },
  { 
    name: "Nexus", category: "Girişim", image: "/mockups/mockup_nexus_1776801738299.png", 
    desc: "Teknik geliştirici araçları dokümantasyon motoru.",
    detailedDesc: "Nexus, API'ler ve geliştirici araçları için optimize edilmiş, kod blokları ve entegrasyon önizlemeleri içeren teknik bir açılış sayfasıdır."
  },
  { 
    name: "Prestige", category: "Hizmet", image: "/mockups/mockup_prestige_1776801756098.png", 
    desc: "Ultra lüks emlak arayüzü.",
    detailedDesc: "Prestige, ultra lüks emlak hizmetleri için tasarlanmış, sofistike ve özel bir açılış sayfasıdır. Koyu taş renkleri ve altın detaylarla seçkinlik yayar."
  },
];

export default function DesignsPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Design | null>(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  const filtered = filter === "All" ? DESIGNS : DESIGNS.filter(d => d.category === filter);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            TASARIM KÜTÜPHANESİ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Kanıtlanmış mimarileri inceleyin.<br />Temelinizi seçin.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Kütüphanemizdeki her şablon, trafiği gelire dönüştürmek için titizlikle tasarlanmıştır. Psikolojik mimarisini keşfetmek için aşağıdan bir arayüz seçin.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(52,25,224,0.3)]"
                  : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Massive Image Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((design) => (
            <div
              key={design.name}
              onClick={() => setSelectedProject(design)}
              className="group relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900 shadow-sm hover:shadow-2xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              {/* High-Res Image Preview */}
              <div className="w-full h-64 relative overflow-hidden bg-neutral-200 dark:bg-black">
                <Image 
                  src={design.image} 
                  alt={design.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                  {design.category}
                </span>

                {/* Hover UI Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Icon icon="solar:eye-bold" width="24" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white dark:bg-neutral-900 border-t border-black/5 dark:border-white/5 flex-grow">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {design.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                  {design.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />

      {/* --- EXPANSIVE MODAL OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-[fadeIn_0.3s_ease-out]">
          {/* Backdrop Blur Clik-away */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform animate-[slideUp_0.4s_ease-out]">
            
            {/* Left: Massive Image Viewer */}
            <div className="w-full md:w-1/2 lg:w-3/5 h-64 md:h-auto relative bg-neutral-100 dark:bg-black border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 shrink-0">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                fill 
                className="object-cover md:object-contain drop-shadow-2xl md:p-8"
              />
            </div>

            {/* Right: Detailed Architecture Explanation */}
            <div className="w-full md:w-1/2 lg:w-2/5 p-8 lg:p-12 overflow-y-auto h-full max-h-[90vh]">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-neutral-600 dark:text-neutral-300 z-10"
              >
                <Icon icon="solar:close-circle-linear" width="24" />
              </button>

              <div className="inline-block bg-purple-600/10 text-purple-700 dark:text-purple-400 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-purple-600/20">
                {selectedProject.category} Sistemi
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 font-medium">
                {selectedProject.desc}
              </p>

              <div className="prose prose-sm dark:prose-invert prose-p:leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                <p>{selectedProject.detailedDesc}</p>
              </div>

              <div className="border border-black/10 dark:border-white/10 rounded-2xl p-6 bg-neutral-50 dark:bg-white/[0.02] mb-8">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white mb-4">Temel Mimari Özellikleri</h4>
                <ul className="space-y-3">
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:rocket-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Potansiyel Müşteri Edinimi için Optimize Edildi</li>
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:bolt-circle-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Mikro Etkileşim Animasyonları</li>
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:shield-check-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Premium Türkiye Pazarı Uyumu</li>
                </ul>
              </div>

              <TransitionLink 
                href="/pricing"
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold transition shadow-[0_0_20px_rgba(52,25,224,0.3)] sticky bottom-0"
              >
                Bu Sistem İçin Maliyet Hesapla <Icon icon="solar:calculator-linear" width="20" />
              </TransitionLink>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
