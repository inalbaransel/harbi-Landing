import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sosyal Medya ve Kreatif",
  description: "Harbi Ajans sosyal medya yönetimi ve kreatif tasarım çözümleri.",
};

export default function SosyalMedyaHizmetleri() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Sosyal Medya ve Kreatif</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Markanızın dijital dünyadaki yüzünü şekillendiriyor, yaratıcı içeriklerle etkileşimi artırıyoruz.
      </p>
    </div>
  );
}
