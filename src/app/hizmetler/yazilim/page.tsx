import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yazılım Hizmetlerimiz",
  description: "Harbi Ajans yazılım geliştirme çözümleri.",
};

export default function YazilimHizmetleri() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Yazılım Hizmetlerimiz</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        İşletmeniz için özel yazılım çözümleri, mobil uygulamalar ve web platformları geliştiriyoruz.
      </p>
    </div>
  );
}
