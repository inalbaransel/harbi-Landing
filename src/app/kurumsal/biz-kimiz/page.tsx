import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Kimiz?",
  description: "Harbi Ajans'ın hikayesi ve vizyonu.",
};

export default function BizKimiz() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Biz Kimiz?</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        Dijitalin geleceğini dürüstlük ve yaratıcılıkla inşa eden bir ekibiz.
      </p>
    </div>
  );
}
