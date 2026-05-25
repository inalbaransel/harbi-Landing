"use client";

import { Icon } from "@iconify/react";

export function Features() {
  const featureItems = [
    {
      title: "Marka Etkisi",
      description:
        "Anında güven oluşturun. İşletmenize müşterilerinizi rahatlatan profesyonel bir görünüm kazandırıyoruz.",
      icon: "solar:star-fall-minimalistic-linear",
    },
    {
      title: "Kanıtlanmış Tasarımlar",
      description:
        "Ziyaretçileri zahmetsizce müşteriye dönüştürmek için tasarlanmış basit ve temiz düzenler.",
      icon: "solar:smartphone-update-linear",
    },
    {
      title: "Hızlı Uygulama",
      description:
        "Sağlam teknoloji ile inşa edilmiş, hızlı yükleme süreleri ve kesintisiz çalışma garantisi sunan web siteleri.",
      icon: "solar:bolt-circle-linear",
    },
    {
      title: "Etkileyici Arayüzler",
      description:
        "Sitenizde gezinmeyi bir keyif haline getiren akıcı etkileşimler ve kullanıcı dostu arayüzler.",
      icon: "solar:video-frame-linear",
    },
    {
      title: "Dönüşüm Odaklı Yapı",
      description:
        "Satışları en üst düzeye çıkardığı kanıtlanmış, titizlikle test edilmiş sayfa yapıları.",
      icon: "solar:layers-linear",
    },
    {
      title: "Uzman Rehberliği",
      description:
        "Web sitenizin gerçek sonuçlar elde etmesine yardımcı olacak, hedeflerinize özel rehberlik.",
      icon: "solar:lightbulb-bolt-linear",
    },
  ];

  return (
    <section
      id="features"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            HİZMETLER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
            Öne çıkmanız için gereken her şey
          </h2>
          <p className="text-neutral-600 text-lg mx-auto max-w-2xl dark:text-neutral-400">
            Dijital marka oluşturmanın karmaşıklığını, dağınıklık olmadan çözen kapsamlı tasarım çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/5 hover:border-black/10 hover:bg-neutral-50 transition duration-300 rounded-2xl p-8 group shadow-sm dark:bg-white/[0.03] dark:border-white/5 dark:hover:border-white/10 dark:hover:bg-white/[0.05]"
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl border border-black/10 flex items-center justify-center mb-6 text-neutral-900 group-hover:text-purple-700 transition dark:bg-white/5 dark:border-white/10 dark:text-white dark:group-hover:text-purple-500">
                <Icon
                  icon={feature.icon}
                  width="24"
                  height="24"
                  style={{ strokeWidth: 1.5 }}
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed dark:text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
