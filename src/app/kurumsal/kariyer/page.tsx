import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Harbi Ajans ekibine katılın.",
};

export default function Kariyer() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Kariyer</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Sen de Harbi bir ekibin parçası olmak ister misin? Açık pozisyonlarımızı incele.
      </p>
    </div>
  );
}
