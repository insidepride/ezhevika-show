import Image from "next/image";
import { Heart, Sparkles, Zap } from "lucide-react";

export function EmotionalSection() {
  return <section className="reveal bg-[#35102f] py-8 text-white md:py-14">
    <div className="site-container grid overflow-hidden rounded-[2.5rem] bg-[#4b123d] lg:grid-cols-[1.08fr_.92fr]">
      <div className="relative min-h-[440px] lg:min-h-[650px]"><Image src="/images/gold-rabbit-live.webp" alt="Золотой зеркальный заяц встречает гостей праздника" fill sizes="(max-width:1024px) 100vw, 54vw" className="object-cover"/></div>
      <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
        <p className="text-xs font-black uppercase tracking-[.22em] text-[#f4c977]">Тот самый момент</p>
        <h2 className="font-display mt-5 text-[clamp(2.8rem,5vw,5rem)] leading-[.93] tracking-[-.04em]">Не просто поздравление. <em className="font-normal text-[#f5bdcf]">Настоящий вау-момент.</em></h2>
        <p className="mt-7 text-lg leading-relaxed text-white/72">Представьте: именинник открывает дверь, а там его любимый персонаж. Или близкий человек выходит из поезда — и его встречает настоящее шоу. Именно ради таких эмоций мы создаем наши программы.</p>
        <div className="mt-9 grid gap-3 sm:grid-cols-3">{[[Zap,"Ярко"],[Sparkles,"Неожиданно"],[Heart,"С любовью к деталям"]].map(([Icon,label]) => <div key={String(label)} className="rounded-2xl border border-white/12 bg-white/7 p-4"><Icon size={20} className="mb-3 text-[#f4c977]"/><p className="text-sm font-bold">{String(label)}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
