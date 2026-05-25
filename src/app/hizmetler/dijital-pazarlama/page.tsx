import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Pazarlama",
  description: "Harbi Ajans dijital pazarlama ve büyüme stratejileri.",
};

export default function DijitalPazarlama() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Dijital Pazarlama</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Doğru kitleye, doğru zamanda, doğru mesajla ulaşmanızı sağlayan veri odaklı stratejiler sunuyoruz.
      </p>
    </div>
  );
}
