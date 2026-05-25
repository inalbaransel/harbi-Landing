import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Harbi Ajans hakkında kurumsal bilgiler.",
};

export default function Kurumsal() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Kurumsal</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Harbi Ajans olarak, dijital dünyada dürüst, hızlı ve etkili çözümler üretiyoruz.
      </p>
    </div>
  );
}
