import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diğer Hizmetlerimiz",
  description: "Harbi Ajans tarafından sunulan diğer dijital çözümler.",
};

export default function DigerHizmetler() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Diğer Hizmetlerimiz</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        İhtiyacınıza özel, butik dijital çözümler ve danışmanlık hizmetleri.
      </p>
    </div>
  );
}
