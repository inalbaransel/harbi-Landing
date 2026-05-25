import React from "react";
import { Icon } from "@iconify/react";

export interface BlogPost {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  coverImage: string;
  featured: boolean;
  author: {
    name: string;
    role: string;
    avatar: string; // just an initial for now
  };
  Content: React.FC;
}

// Reusable styling components for the lessons

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-6 font-sans">
    {children}
  </p>
);

const DropCapP = ({ letter, children }: { letter: string; children: React.ReactNode }) => (
  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-6 font-sans">
    <span className="float-left text-6xl leading-[0.8] pr-3 pt-1 font-serif text-purple-700 dark:text-purple-400 font-bold">
      {letter}
    </span>
    {children}
  </p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white mt-16 mb-6">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mt-10 mb-4">
    {children}
  </h3>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-12 py-4 border-l-4 border-purple-600 pl-6 lg:pl-10">
    <p className="text-2xl lg:text-3xl font-serif italic text-neutral-800 dark:text-neutral-200 leading-snug">
      &ldquo;{children}&rdquo;
    </p>
  </blockquote>
);

const AlertCard = ({ title, children, icon = "solar:lightbulb-bolt-linear" }: { title: string, children: React.ReactNode, icon?: string }) => (
  <div className="my-10 bg-purple-600/5 dark:bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 lg:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
        <Icon icon={icon} width="24" />
      </div>
      <span className="font-bold text-neutral-900 dark:text-white">{title}</span>
    </div>
    <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
      {children}
    </div>
  </div>
);

// Individual Post Contents

const StrategyContent = () => (
  <>
    <DropCapP letter="Y">
      ıllardır web tasarım sektöründeki anlatı ikili bir yapıdaydı: Ya Wix gibi ucuz bir sürükle-bırak oluşturucu kullanırsınız ya da bir ajansa "özel" bir web sitesi için 30.000 TL+ ödersiniz. Ancak küçük ve orta ölçekli işletmelerin %95'i için bu, boşa harcanan zaman ve para ile sonuçlanan yanlış bir ikilemdir.
    </DropCapP>
    <P>
      "Özel" bir web sitesi genellikle sadece bir tasarımcının Figma'da pikselleri yerinden oynatması ve bir yazılımcının bu pikselleri koda dönüştürmek için haftalar harcaması anlamına gelir. Ancak yerel bir çatı kapma şirketinin veya yeni ölçeklenen bir SaaS'ın gerçekten bir navigasyon çubuğunu görüntülemek için tamamen yeni bir yola ihtiyacı var mı? Hayır.
    </P>
    
    <PullQuote>
      Web sitenizin işi tekerleği yeniden icat etmek değildir. İşi güven inşa etmek, soruları yanıtlamak ve trafiği gelire dönüştürmektir.
    </PullQuote>

    <H2>Ajans İllüzyonu</H2>
    <P>
      Geleneksel bir ajansla anlaştığınızda, öncelikle "süreç" için ödeme yaparsınız. Keşif aramaları, tel kafes revizyonları, ruh hali panoları ve ısmarlama kod. Bu zaman alır; genellikle 8 ila 12 hafta.
    </P>
    
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-6">
        <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
          <Icon icon="solar:close-circle-linear" width="20" /> Geleneksel Özel Yapım
        </h4>
        <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li className="flex justify-between"><span>Süre:</span> <strong>8–12 hafta</strong></li>
          <li className="flex justify-between"><span>Maliyet:</span> <strong>30.000 ₺+</strong></li>
          <li className="flex justify-between"><span>Odak:</span> <strong>Yenilik ve Estetik</strong></li>
          <li className="flex justify-between"><span>Risk:</span> <strong>Kanıtlanmamış UX</strong></li>
        </ul>
      </div>
      <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-2xl p-6">
        <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
          <Icon icon="solar:check-circle-linear" width="20" /> Ürünleştirilmiş Çerçeve
        </h4>
        <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li className="flex justify-between"><span>Süre:</span> <strong>48 saat</strong></li>
          <li className="flex justify-between"><span>Maliyet:</span> <strong>Sabit Paket Fiyatlandırması</strong></li>
          <li className="flex justify-between"><span>Odak:</span> <strong>Dönüşüm Metrikleri</strong></li>
          <li className="flex justify-between"><span>Risk:</span> <strong>Sıfır (Kanıtlanmış yapılar)</strong></li>
        </ul>
      </div>
    </div>

    <H2>Kısıtlamalar Neden Dönüşümü Artırır?</H2>
    <P>
      Yüksek düzeyde optimize edilmiş, önceden oluşturulmuş bir şablon kullanarak kaliteden ödün vermezsiniz. Değişkenliği ortadan kaldırırsınız. Harbi Ajans'taki şablonlar titizlikle test edilmiştir. "Şimdi Rezervasyon Yap" butonunun tam olarak nereye gitmesi gerektiğini, mobil okunabilirlik için gereken hassas tipografik ölçeği ve mükemmel bir Google Core Web Vitals skoru için DOM'un nasıl yapılandırılacağını tam olarak biliyoruz.
    </P>
    <P>
      Logonun *nereye* gideceğine karar verme yükünü ortadan kaldırdığımızda, tüm enerjimizi gerçekten önemli olan şeye harcayabiliriz: **Marka mesajınız, görselleriniz ve teklifiniz.**
    </P>

    <AlertCard title="Önemli Çıkarım">
      Gerçekten ihtiyacınız olan şey özel bir *marka deneyimi* iken, özel kod için ödeme yapmayı bırakın. Fotoğraflarınız, renkleriniz ve etkileyici metinlerinizle özelleştirilmiş, kanıtlanmış bir çerçeve; hatalı, test edilmemiş bir özel yapımdan her zaman daha iyi performans gösterecektir.
    </AlertCard>
  </>
);

const DesignContent = () => (
  <>
    <DropCapP letter="D">
      üzinelerce sektörde 200'den fazla müşteri web sitesini analiz ettikten sonra net bir model ortaya çıktı. Potansiyel müşteri yaratan siteler, en gösterişli animasyonlara veya en karmaşık düzenlere sahip olanlar değildi. Dönüşüm psikolojisinin beş temel öğesine sıkı sıkıya bağlıydılar.
    </DropCapP>
    
    <H2>1. Bölünmüş Hero Düzeni (F-Metodu)</H2>
    <P>
      Göz izleme çalışmaları, kullanıcıların web'i F şeklinde bir modelde okuduğunu tutarlı bir şekilde göstermektedir. Sol üst köşe en değerli alandır.
    </P>
    
    <div className="my-10 bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-3xl p-6 lg:p-10 flex flex-col items-center">
      <div className="w-full max-w-sm aspect-[4/3] bg-white dark:bg-black rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 p-4 flex gap-4 relative overflow-hidden">
        <div className="flex-1 flex flex-col gap-3 z-10">
          <div className="w-3/4 h-6 bg-purple-200 dark:bg-purple-900/40 rounded" />
          <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="w-5/6 h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="w-24 h-10 mt-2 bg-purple-600 rounded-full" />
        </div>
        <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center relative overflow-hidden">
           <Icon icon="solar:camera-minimalistic-linear" width="32" className="text-neutral-400" />
           {/* Eye tracking heat map overlay */}
           <div className="absolute top-2 left-[-20%] w-32 h-32 bg-red-500/40 blur-3xl rounded-full" />
        </div>
      </div>
      <p className="text-xs text-neutral-500 mt-6 text-center font-mono">Şekil 1: Standart yüksek dönüşümlü hero mimarisi.</p>
    </div>

    <P>
      Değer öneriniz H1 metni olmalı, sola hizalanmalı ve hemen ardından riski nötralize eden bir alt başlık ve yüksek kontrastlı bir birincil CTA gelmelidir. Sağ taraf ise iddiayı görsel olarak doğrulamak için ayrılmıştır (ürün arayüzü, sosyal kanıt veya etkileyici görsel).
    </P>

    <H2>2. "Arzu/Korku" Alt Başlığı</H2>
    <P>
      H1 metniniz *ne* yaptığınızı söylemelidir. Alt başlığınız ise *neden umursamaları gerektiğini* söylemelidir. Birincil itirazlarını nötralize ederken aynı zamanda arzuladıkları sonuca hitap etmelidir.
    </P>
    
    <PullQuote>
      Kötü: "Bulut barındırma çözümleri sunuyoruz."<br/><br/>
      İyi: "Sıfır yapılandırma ile daha hızlı dağıtın. Çünkü sunucuları yapılandırmakla değil, kod yazmakla uğraşmalısınız."
    </PullQuote>

    <H2>3. Sürtünmesiz Sosyal Kanıt</H2>
    <P>
      Müşteri yorumlarını özel bir `/yorumlar` sayfasına gömmeyin. Kimse oraya tıklamaz. Ham, otantik sosyal kanıtı doğrudan sürtünmenin en yüksek olduğu noktaların yanına yerleştirin (genellikle fiyatlandırma veya son CTA formunun yakınına). Güven, kaydırma yolculuğu boyunca aktif olarak korunmalıdır.
    </P>
  </>
);

const GrowthContent = () => (
  <>
    <DropCapP letter="H">
      ız bir özelliktir. Modern iş dünyasında bir fırsat Pazartesi günü ortaya çıkabilir ve Çarşamba gününe kadar tam bir dijital iniş platformu gerektirebilir. Geleneksel web geliştirme bunu imkansız kılar. Harbi'nin ürünleştirilmiş modeli ise bunu standart hale getirir.
    </DropCapP>
    
    <P>
      Geçen ay yerel bir butik fitness stüdyosu bize ulaştı. Fiziksel mekanları tam 5 gün içinde açılıyordu. Çevrimiçi rezervasyon sistemleri, web varlıkları yoktu ve ellerinde sadece birkaç promosyon fotoğrafı ve bir logo vardı.
    </P>

    <H2>48 Saatlik Zaman Çizelgesi</H2>
    
    <div className="my-12 relative border-l-2 border-purple-200 dark:border-purple-900/50 ml-4 py-2 space-y-12">
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Saat 0: Şablon Seçimi</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Müşteri, yaya trafiğini ve yerel rezervasyonları artırmak için özel olarak tasarlanmış "Locale" tasarım şablonunu seçti.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Saat 12: İçerik Aktarımı ve Temalandırma</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Marka paletlerini (Adaçayı Yeşili ve Obsidyen) CSS değişkenlerine enjekte ettik. Yer tutucu metinler, özel ders programlarıyla değiştirildi.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Saat 24: Entegrasyon Bağlantıları</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Birincil CTA'ları Mindbody rezervasyon hesaplarına bağlayarak, özel arka uç kodu olmadan kesintisiz planlama sağladık.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-emerald-500 left-[-9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Saat 48: Vercel Dağıtımı</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Site derlendi, uç ağa dağıtıldı, alan adı bağlandı. Dünyaya açıldı.</p>
      </div>
    </div>

    <P>
      Hamburger menüsünün nereye gideceği konusunda tartışmadığımız için, tamamen rezervasyon sistemlerini düzgün bir şekilde entegre etmeye ve marka fotoğraflarının karanlık mod arka planında muhteşem görünmesini sağlamaya odaklanabildik. Daha fiziksel kapılarını açmadan 40'tan fazla rezervasyon aldılar.
    </P>
  </>
);

const TechContent = () => (
  <>
    <DropCapP letter="D">
      oğru teknoloji yığınını seçmek sadece yazılım mühendislerinin endişesi değildir. Doğrudan kâr hanenizi etkiler. Sayfanızın ne kadar hızlı yüklendiği hemen çıkma oranınızı etkiler. Sayfanızın nasıl işlendiği ise Google sıralamanızı etkiler.
    </DropCapP>
    <P>
      Harbi Ajans'ta özel olarak **Next.js 15**, App Router ve React kullanıyoruz. İşte bunun teknik terimlerden arındırılmış olarak işletmeniz için ne anlama geldiği.
    </P>

    <H2>Statik Üretim ve Sunucu Tarafı İşleme</H2>
    <P>
      Web siteniz geleneksel bir WordPress sunucusunda çalışıyorsa, bir kullanıcı her "Ana Sayfa"ya tıkladığında sunucunun uyanması, bir veritabanını sorgulaması, HTML'i bir araya getirmesi ve geri göndermesi gerekir. Bu yüzlerce milisaniye, hatta saniyeler sürer.
    </P>
    <P>
      Next.js, **Statik Site Üretimi (SSG)** kullanmamıza olanak tanır. Sitenizi inşa ettiğimizde, her sayfayı önceden ham, optimize edilmiş HTML ve CSS olarak hazırlar.
    </P>

    <div className="my-12 flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-3">
          <Icon icon="solar:server-square-linear" width="40" />
        </div>
        <p className="font-bold text-neutral-900 dark:text-white">WordPress</p>
        <p className="text-xs text-neutral-500">Veritabanı Sorgulama<br/>(Yavaş, 800ms+ yük)</p>
      </div>
      
      <div className="flex flex-col items-center">
        <Icon icon="solar:arrow-right-linear" width="24" className="text-neutral-400 hidden md:block" />
        <Icon icon="solar:arrow-down-linear" width="24" className="text-neutral-400 md:hidden" />
        <span className="text-xs font-mono text-neutral-500 mt-2">VS</span>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 mb-3 relative">
          <Icon icon="solar:bolt-circle-linear" width="40" />
          <div className="absolute -right-2 -top-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">EDGE</div>
        </div>
        <p className="font-bold text-neutral-900 dark:text-white">Next.js SSG</p>
        <p className="text-xs text-neutral-500">Önceden Derlenmiş HTML<br/>(Anında, 30ms yük)</p>
      </div>
    </div>

    <AlertCard title="SEO Avantajı" icon="solar:magnifer-bug-linear">
      Google, "İlk Bayta Kadar Geçen Süre" (TTFB) ve "En Büyük İçerikli Boyama" (LCP) metriklerini ölçer. Next.js siteleri küresel bir edge CDN (İçerik Dağıtım Ağı) üzerinden sunulduğu için, kullanıcı ister İstanbul'da ister Tokyo'da olsun siteniz anında yüklenir. Google bu hızı daha yüksek arama sıralamalarıyla ödüllendirir.
    </AlertCard>
  </>
);

const MathContent = () => (
  <>
    <DropCapP letter="B">
      ir işletme sahibi geçenlerde eski, hantal web sitesini "teknik olarak hala çalıştığı" için tutarak tasarruf ettiğini söyledi. Bu, dijital birim ekonomisinin temelden yanlış anlaşılmasıdır.
    </DropCapP>
    <P>
      Bir web sitesi dijital bir broşür değildir; matematiksel bir hunidir. Kötü optimize edilmiş bir düzenin gerçek maliyetine birlikte bakalım.
    </P>

    <H2>Sürtünmenin Matematiği</H2>
    
    <div className="my-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
      <div className="grid grid-cols-3 bg-neutral-100 dark:bg-neutral-900 font-bold text-sm tracking-wider uppercase text-neutral-600 dark:text-neutral-300 p-4 border-b border-black/10 dark:border-white/10">
        <div>Metrik</div>
        <div>Eski Web Sitesi</div>
        <div>Optimize Harbi Ajans</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Aylık Trafik</div>
        <div>5.000 ziyaretçi</div>
        <div className="text-purple-600 dark:text-purple-400">5.000 ziyaretçi</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Dönüşüm Oranı</div>
        <div className="text-red-500">%0.8</div>
        <div className="text-emerald-500 font-bold">%2.4</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Aylık Potansiyel Müşteri</div>
        <div>40 müşteri</div>
        <div className="text-emerald-500 font-bold">120 müşteri</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Ort. Müşteri Değeri</div>
        <div>500 ₺</div>
        <div>500 ₺</div>
      </div>
      <div className="grid grid-cols-3 p-6 text-lg border-t-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 border-b-0">
        <div className="font-bold text-neutral-900 dark:text-white">Aylık Gelir</div>
        <div className="font-medium text-neutral-500">20.000 ₺</div>
        <div className="font-black text-emerald-600 dark:text-emerald-400">60.000 ₺</div>
      </div>
    </div>

    <PullQuote>
      3.000 TL tasarruf etmek için kötü bir web sitesini tutmak, bu işletmeye her ay 40.000 TL gelir kaybına mal oluyor.
    </PullQuote>

    <P>
      Bir kullanıcının mobil sitenizin yüklenmesini beklediği her saniye, dönüşüm %7 oranında düşer. İletişim formunuzdaki her ekstra alan, gönderim oranlarını azaltır. Kanıtlanmış UI/UX prensiplerini uygulayarak, reklam bütçenizi artırmanıza gerek kalmadan, şu anda huninizden sızan geliri yakalarız.
    </P>
  </>
);

const DarkmodeContent = () => (
  <>
    <DropCapP letter="B">
      ody etiketinize `invert(1)` atmak bir karanlık mod stratejisi değildir. Birçok tema sadece beyaz arka planları siyahla ve siyah metinleri beyazla değiştirirken, gerçek çift temalandırma; kontrast fizyolojisi ve mekansal derinliğin anlaşılmasını gerektirir.
    </DropCapP>
    <P>
      Harbi Ajans'ta her şablon `next-themes` ve titizlikle hazırlanmış bir Tailwind konfigürasyonu ile inşa edilir. İşte kusursuz karanlık arayüzler oluşturma tasarım felsefemiz.
    </P>

    <H2>1. Saf Siyah Düşmandır</H2>
    <P>
      Saf `#000000`, yüksek halasyon (açık renkli metnin koyu arka plana sızıyormuş gibi göründüğü görsel etki) nedeniyle beyaz metinle kontrast oluşturduğunda ciddi göz yorgunluğuna neden olur. Bunun yerine, karanlık mod temelimiz `#050505` veya çok derin bir gri/mavi tondur.
    </P>

    <H2>2. Sadece Gölgelerle Değil, Aydınlıkla Yükseklik</H2>
    <P>
      Açık modda, yüzen bir kartın kullanıcıya daha yakın olduğunu göstermek için alt gölgeler (örneğin `shadow-lg`) kullanırız. Karanlık modda ise gölgeler neredeyse görünmezdir.
    </P>
    <P>
      Gölgelere güvenmek yerine, elemanları aydınlıklarını artırarak yükseltiriz. Arka plan `#050505`, bir kart `#111111` ve üzerine gelinen bir kart `#1a1a1a` olur. Bunu kenarları mükemmel bir şekilde belirlemek için ince `/5` veya `/10` opaklıkta kenarlıklarla (`border-white/5`) birleştiririz.
    </P>

    <div className="my-10 p-8 bg-[#050505] rounded-3xl border border-white/5 relative overflow-hidden group">
      {/* Abstract light beam */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />
      
      <p className="text-white/40 text-xs font-mono mb-6 pb-4 border-b border-white/10 uppercase tracking-widest">Karanlık Mod Yükseklik Örneği</p>
      
      <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full justify-center items-center py-6">
        {/* Layer 0 */}
        <div className="text-white/40 text-sm">Arka Plan (Temel)</div>
        
        {/* Card Layer */}
        <div className="w-48 h-32 bg-white/[0.03] border border-white-5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/[0.06] group-hover:border-purple-500/30">
           <span className="text-white text-sm font-medium">Yükseltilmiş Kart</span>
        </div>
      </div>
    </div>

    <AlertCard title="Sonuç" icon="solar:moon-fog-linear">
      Sonuç, geceleri kullanıcının retinasını yakmadan lüks, derin ve son derece okunaklı hissettiren bir arayüzdür. Bu, doğası gereği markanızın premium hissettirmesini sağlar.
    </AlertCard>
  </>
);


// Master Export
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "custom-website-strategy",
    tag: "Strateji",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "Çoğu Küçük İşletmenin Neden Özel Bir Web Sitesine İhtiyacı Yoktur",
    excerpt: "Geleneksel ajans modeli artık işlevsel değil. Kanıtlanmış bir şablonla başlamanın ve onu özelleştirmenin her seferinde neden sıfırdan yapmaktan daha iyi olduğunu açıklıyoruz.",
    date: "14 Nisan 2026",
    readTime: "7 dk okuma",
    gradient: "from-purple-700 to-indigo-600",
    coverImage: "/blog/blog_cover_strategy_1776606891486.png",
    featured: true,
    author: { name: "Jason W.", role: "Baş Tasarımcı", avatar: "J" },
    Content: StrategyContent,
  },
  {
    slug: "5-elements-landing-page",
    tag: "Tasarım",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "Her Yüksek Dönüşümlü Açılış Sayfasının İhtiyaç Duyduğu 5 Öğe",
    excerpt: "200'den fazla müşteri sitesini analiz ettikten sonra, her şeyden daha iyi performans gösteren dönüşüm faktörlerini belirledik.",
    date: "8 Nisan 2026",
    readTime: "5 dk okuma",
    gradient: "from-sky-600 to-cyan-600",
    coverImage: "/blog/blog_cover_design_1776606909657.png",
    featured: false,
    author: { name: "Sarah M.", role: "Dönüşüm Analisti", avatar: "S" },
    Content: DesignContent,
  },
  {
    slug: "zero-to-live-48-hours",
    tag: "Büyüme",
    tagColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    title: "Sıfırdan Yayına 48 Saatte: Gerçek Bir Müşteri Hikayesi",
    excerpt: "Yerel bir restoranın, iki gün içinde hiçbir dijital varlığı yokken nasıl tam optimize edilmiş ve rezervasyon özellikli bir siteye sahip olduğunu keşfedin.",
    date: "29 Mart 2026",
    readTime: "6 dk okuma",
    gradient: "from-emerald-600 to-teal-600",
    coverImage: "/blog/blog_cover_growth_1776606925664.png",
    featured: false,
    author: { name: "Michael R.", role: "Operasyon Yöneticisi", avatar: "M" },
    Content: GrowthContent,
  },
  {
    slug: "why-we-build-on-nextjs",
    tag: "Teknik",
    tagColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    title: "Neden Next.js ile İnşa Ediyoruz (Ve Bu Hızınız İçin Ne Anlama Geliyor)",
    excerpt: "Teknoloji yığınımızın neden WordPress veya Wix'ten daha hızlı yükleme süreleri ve daha iyi SEO sunduğuna dair teknik olmayan bir açıklama.",
    date: "21 Mart 2026",
    readTime: "4 dk okuma",
    gradient: "from-amber-600 to-orange-600",
    coverImage: "/blog/blog_cover_tech_1776606956094.png",
    featured: false,
    author: { name: "David L.", role: "Teknik Direktör", avatar: "D" },
    Content: TechContent,
  },
  {
    slug: "real-cost-bad-website",
    tag: "Strateji",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "Kötü Bir Web Sitesinin Gerçek Maliyeti (Ve Nasıl Düzeltilir)",
    excerpt: "Yavaş siteler, kafa karıştırıcı navigasyon ve zayıf CTA'lar işletmelere binlerce liraya mal oluyor. İşte işin matematiği.",
    date: "14 Mart 2026",
    readTime: "8 dk okuma",
    gradient: "from-rose-600 to-pink-600",
    coverImage: "/blog/blog_cover_math_1776606978869.png",
    featured: false,
    author: { name: "Jason W.", role: "Baş Tasarımcı", avatar: "J" },
    Content: MathContent,
  },
  {
    slug: "dark-mode-done-right",
    tag: "Tasarım",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "Doğru Yapılmış Karanlık Mod: Çift Tema İçin Tasarım İlkeleri",
    excerpt: "Sadece renkleri tersine çevirmek yetmez. Hem açık hem de karanlık temada doğal hissettiren arayüzler oluşturma yaklaşımımız.",
    date: "6 Mart 2026",
    readTime: "5 dk okuma",
    gradient: "from-neutral-800 to-neutral-600",
    coverImage: "/blog/blog_cover_darkmode_1776606996365.png",
    featured: false,
    author: { name: "Elena C.", role: "UI/UX Uzmanı", avatar: "E" },
    Content: DarkmodeContent,
  },
];
