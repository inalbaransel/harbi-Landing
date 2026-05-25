"use client";

import { Icon } from "@iconify/react";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full relative py-32 border-t border-black/5"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
            Diğerleri ile kıyaslanamaz.
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pazarlama hizmeti sunmuyoruz işletmenizin tüm dinamiklerine entegre bir pazarlama ekibi olmayı vaadediyoruz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-4xl mx-auto">
          {/* Ordinary Agencies Card */}
          <div className="w-full lg:w-1/2 bg-white border border-neutral-200 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5 relative z-10 lg:translate-x-6">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
              Sıradan Ajanslar
            </h3>
            <ul className="flex flex-col gap-6 text-neutral-500 font-medium">
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400">
                   <Icon icon="solar:close-circle-linear" width="24" />
                </div>
                Zor ulaşılabilirlik ve yavaş iletişim
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400">
                   <Icon icon="solar:close-circle-linear" width="24" />
                </div>
                Kısa vadeli çözümler
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400">
                   <Icon icon="solar:close-circle-linear" width="24" />
                </div>
                Belirsiz ve ölçülemeyen sonuçlar
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400">
                   <Icon icon="solar:close-circle-linear" width="24" />
                </div>
                Genel, herkese aynı stratejiler
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-red-400">
                   <Icon icon="solar:close-circle-linear" width="24" />
                </div>
                Kalıplaşmış ve sıradan yaklaşımlar
              </li>
            </ul>
          </div>

          {/* Harbi Card */}
          <div className="w-full lg:w-[55%] bg-[#0a0a0a] border-[3px] border-[#a3e635] rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_60px_rgba(163,230,53,0.15)] relative z-20 mt-8 lg:mt-0 lg:-translate-x-6">
             {/* Small green dot */}
             <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635]" />
            <h3 className="text-4xl font-bold tracking-tight text-[#a3e635] mb-8">
              harbi
            </h3>
            <ul className="flex flex-col gap-6 text-neutral-300 font-medium">
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-[#a3e635]">
                   <Icon icon="solar:check-circle-linear" width="24" />
                </div>
                Her zaman hızlı iletişim
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-[#a3e635]">
                   <Icon icon="solar:check-circle-linear" width="24" />
                </div>
                Sürdürülebilir büyüme rotası
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-[#a3e635]">
                   <Icon icon="solar:check-circle-linear" width="24" />
                </div>
                Ölçülebilir net sonuçlar
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-[#a3e635]">
                   <Icon icon="solar:check-circle-linear" width="24" />
                </div>
                Markaya özel strateji
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-6 min-h-6 flex items-center justify-center text-[#a3e635]">
                   <Icon icon="solar:check-circle-linear" width="24" />
                </div>
                Yaratıcı ve esnek çözümler
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
