export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    conversionIncrease: string;
    loadTimeDrop: string;
    roi: string;
  };
  images: {
    before: string;
    after: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-velocity-rebuild",
    client: "TechFlow Systems",
    industry: "SaaS / B2B",
    title: "Yüksek Hızlı Dönüşüm Motoru ile TechFlow'un MRR'ını Ölçeklendirme",
    summary: "TechFlow güçlü bir ürüne sahipti ancak değer önerisini iletmeyen 2010'lardan kalma hantal bir web sitesine sahipti. Eski mimariyi söküp attık ve 'Velocity' çerçevemizle değiştirdik.",
    challenge: "Müşteri, açılış sayfasının jenerik stok fotoğraflar, kötü tipografi ve bunaltıcı metin bloklarıyla dolu olması nedeniyle %82'nin üzerinde devasa hemen çıkma oranlarından muzdaripti. Müşteri yakalama formları sayfanın en altında gömülüydü.",
    solution: "Son derece teknik ve modern bir estetik oluşturmak için glassmorphism kullanan koyu modlu, derin mor ve indigo temalı bir yapı kurduk. Okunabilirliği optimize etmek için F-metodu düzenini kullandık ve dikkat çekici CTA'ları sayfanın üst kısmına agresif bir şekilde yerleştirdik.",
    metrics: {
      conversionIncrease: "%210",
      loadTimeDrop: "4.2sn",
      roi: "15x",
    },
    images: {
      before: "/mockups/mockup_old_saas_1776971788765.png",
      after: "/mockups/mockup_velocity_1776801528906.png",
    }
  },
  {
    slug: "merchant-industrial-scale",
    client: "Horizon Supply Co.",
    industry: "E-Ticaret",
    title: "Milyonlarca Liralık Gelir İçin Devasa Bir E-Ticaret Kataloğunu Düzenleme",
    summary: "Horizon Supply, 2000'lerin başındaki mağaza şablonunu aşmıştı. Dağınık ızgaralar ve gürültülü afişler, tüketicilerde yoğun karar yorgunluğuna neden oluyor ve ödeme oranlarını düşürüyordu.",
    challenge: "800'den fazla stok kodu (SKU) ile eski web sitesi içinde gezinmek imkansızdı. Kırmızı afişler kullanıcıya bağırıyor ve kategoriler arasında sıralama yapmak acı verici derecede yavaş sayfa yenilemeleri gerektiriyordu. Sepeti terk etme oranı %75'e yaklaşmıştı.",
    solution: "Ağır hizmet tipi 'Merchant' düzenimizi uyguladık. Saf beyaz ve camgöbeği renginden oluşan klinik bir palete dayanarak, sayfa yenilemesi gerektirmeden anında sıralama yapmaya olanak tanıyan yapışkan, sürekli görünür bir yan menü filtre sistemi sunduk.",
    metrics: {
      conversionIncrease: "%340",
      loadTimeDrop: "6.8sn",
      roi: "22x",
    },
    images: {
      before: "/mockups/mockup_old_ecom_1776971949980.png",
      after: "/mockups/mockup_merchant_1776801697260.png",
    }
  }
];
