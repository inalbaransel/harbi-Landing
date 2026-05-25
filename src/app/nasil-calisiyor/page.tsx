"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import Image from "next/image";

const PHASES = [
  {
    step: "01",
    title: "Tasarımını Seç",
    subtitle: "Kütüphanemize göz at ve karar ver",
    icon: "solar:layers-minimalistic-linear",
    color: "from-purple-600 to-indigo-600",
    glowColor: "shadow-[0_0_30px_rgba(52,25,224,0.25)]",
    description: "İşletmen için özel olarak optimize edilmiş, yüksek dönüşüm oranlı tasarım kütüphanemizi incele. Her şablon belirli sektörler için test edildi ve onaylandı. Sana en uygun olanı seç, gerisini bize bırak.",
    image: "/process/process_select_1776777931934.png",
    details: [
      "Farklı sektörler için 12+ kanıtlanmış şablon",
      "Mobil ve masaüstü için tam uyumlu tasarımlar",
      "Karar vermeden önce canlı önizleme imkanı",
      "Trendlere değil, satış verilerine dayalı tasarım",
    ],
  },
  {
    step: "02",
    title: "Markanı Giydirelim",
    subtitle: "Senin kimliğini siteye işleyelim",
    icon: "solar:pen-new-round-linear",
    color: "from-sky-600 to-cyan-600",
    glowColor: "shadow-[0_0_30px_rgba(14,165,233,0.25)]",
    description: "Tasarımını seçtikten sonra marka varlıklarını ve hedeflerini bizimle paylaş. Ekibimiz, yer tutucu içerikleri senin mesajlarınla değiştirir, görselleri markana göre ayarlar ve dönüşümü artıracak şekilde yapıyı optimize eder.",
    image: "/process/process_customize_1776777949620.png",
    details: [
      "Marka renklerin, fontların ve logonun uygulanması",
      "İçeriklerin senin metin ve görsellerinle değişimi",
      "Önceliklerine göre sayfa yapısının düzenlenmesi",
      "Hedef kitlene özel dönüşüm elemanlarının ayarı",
    ],
  },
  {
    step: "03",
    title: "Uçuşa Geç",
    subtitle: "Aylar değil, günler içinde yayında ol",
    icon: "solar:rocket-linear",
    color: "from-emerald-600 to-teal-600",
    glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    description: "Tamamen özelleştirilmiş web siteni canlıya alıyoruz. Siten hızlı hosting, responsive tasarım ve performans optimizasyonu ile uçuşa hazır. Seçimden lansmana kadar geçen süre ortalama 48 saat — haftalarca beklemek yok.",
    image: "/process/process_launch_1776777973007.png",
    details: [
      "Ortalama teslimat süresi: 48 Saat",
      "Mobil uyumluluk ve performans testleri",
      "Temel SEO ayarları yapılandırılmış",
      "Lansman sonrası teknik destek dahil",
    ],
  },
];

export default function NasilCalisiyorPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Page Header */}
        <div className="text-center mb-20 lg:mb-28">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            NASIL ÇALIŞIYORUZ?
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
            Üç Adım.<br />Sıfır Karmaşa.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Geleneksel web geliştirme kaosunu bir sistemle değiştirdik.
            Tasarımını seç, markanı ver ve günler içinde uçuşa geç.
          </p>
        </div>

        {/* Phases */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {PHASES.map((phase, idx) => (
            <div
              key={phase.step}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Text Side */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl lg:text-6xl font-bold text-neutral-100 dark:text-neutral-800 tracking-tighter select-none">
                    {phase.step}
                  </span>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                      {phase.title}
                    </h2>
                    <p className="text-sm text-purple-700 dark:text-purple-400 font-medium">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-base lg:text-lg leading-relaxed mb-8">
                  {phase.description}
                </p>

                <div className="flex flex-col gap-3">
                  {phase.details.map(detail => (
                    <div key={detail} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon icon="solar:check-read-linear" width="12" className="text-white" />
                      </div>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`relative w-full aspect-[4/3] rounded-3xl ${phase.glowColor} overflow-hidden group border border-black/5 dark:border-white/5`}>
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay gradient to blend with the page */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Icon badge */}
                  <div className={`absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg border border-white/20`}>
                    <Icon icon={phase.icon} width="28" className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector (visual only on larger screens) */}
        <div className="hidden lg:flex justify-center mt-20">
          <div className="flex items-center gap-4">
            {["Seç", "Düzenle", "Yayına Al"].map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(52,25,224,0.4)]">
                  {i + 1}
                </div>
                {i < 2 && <div className="w-24 h-px bg-purple-600/30" />}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
            Başlamaya hazır mısın?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink
              href="/hizmetler/yazilim"
              className="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]"
            >
              Tasarımları İncele <Icon icon="solar:arrow-right-linear" width="18" />
            </TransitionLink>
            <TransitionLink
              href="/iletisim"
              className="inline-flex items-center justify-center gap-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 px-8 py-4 rounded-full text-base font-medium transition"
            >
              Bize Ulaşın
            </TransitionLink>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
