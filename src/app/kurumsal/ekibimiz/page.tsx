import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description: "Harbi Ajans'ın arkasındaki yetenekli ekip.",
};

export default function Ekibimiz() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Ekibimiz</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Alanında uzman, yaratıcı ve enerjik profesyonellerden oluşan çekirdek kadromuz.
      </p>
    </div>
  );
}
