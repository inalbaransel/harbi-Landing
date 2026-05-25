import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kültürümüz",
  description: "Harbi Ajans çalışma kültürü ve değerleri.",
};

export default function Kulturumuz() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Kültürümüz</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Hız, kalite ve samimiyet Harbi Ajans kültürünün temel taşlarıdır.
      </p>
    </div>
  );
}
