"use client";

import { Icon } from "@iconify/react";

export function FAQ() {
  const faqs = [
    {
      question: "Web sitem ne kadar sürede hazır olur?",
      answer:
        "Ortalama olarak, çoğu standart web sitesi tasarımı birkaç gün içinde özelleştirilir ve yayına alınır.",
    },
    {
      question: "Süreç karmaşık mı?",
      answer:
        "Kesinlikle hayır. Bir tasarım seçersiniz, işletme detaylarınızı bize iletirsiniz ve gerisini biz hallederiz. Sizin için tamamen zahmetsiz bir süreçtir.",
    },
    {
      question: "Daha sonra değişiklik istersem ne olur?",
      answer:
        "Endişelenmeyin! Web sitesi işletmenizi tam olarak yansıtana kadar metin ve düzen öğelerini memnuniyetle revize ediyoruz.",
    },
    {
      question: "Siteler hızlı ve güvenilir mi?",
      answer:
        "Kesinlikle. Performansa büyük önem veriyoruz; web sitenizin anında yüklenmesini sağlayarak potansiyel müşterilerinizin sitede kalmasını sağlıyoruz.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-">
            SSS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white">
            Sıkça Sorulanlar
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-black/5 border-t border-b border-black/5 dark:divide-white/5 dark:border-white/5">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group py-6 cursor-pointer [&::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between text-lg font-medium tracking-tight text-neutral-900 list-none outline-none dark:text-white">
                {faq.question}
                <Icon
                  icon="solar:add-circle-linear"
                  width="24"
                  height="24"
                  className="text-neutral-500 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-4 font-normal dark:text-neutral-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
