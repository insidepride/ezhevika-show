import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Heart, Sparkles, Zap } from "lucide-react";

export function EmotionalSection() {
  return <section className="reveal bg-[#1b1118] py-8 text-white md:py-14">
    <div className="site-container grid overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#32202c] lg:grid-cols-[1.08fr_.92fr]">
      <div className="relative min-h-[440px] lg:min-h-[650px]"><Image src={assetPath("/images/gold-rabbit-live.webp")} alt="Золотой зеркальный заяц встречает гостей праздника" fill sizes="(max-width:1024px) 100vw, 54vw" className="object-cover"/></div>
      <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#d6b37d]">Тот самый момент</p>
        <h2 className="font-display mt-5 text-[clamp(2.7rem,4.7vw,4.8rem)] leading-[1.04] tracking-[-.035em]">Не просто поздравление. <em className="font-normal not-italic text-[#d6b37d]">Настоящий вау-момент.</em></h2>
        <p className="mt-7 text-lg leading-relaxed text-white/72">Представьте: именинник открывает дверь, а там его любимый персонаж. Или близкий человек выходит из поезда — и его встречает настоящее шоу. Именно ради таких эмоций мы создаем наши программы.</p>
        <div className="mt-9 grid gap-3 sm:grid-cols-3">{[[Zap,"Ярко"],[Sparkles,"Неожиданно"],[Heart,"С любовью к деталям"]].map(([Icon,label]) => <div key={String(label)} className="rounded-xl border border-white/10 bg-white/5 p-4"><Icon size={20} className="mb-3 text-[#d6b37d]"/><p className="text-sm font-semibold">{String(label)}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
