import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function CTASection() {
  return <section className="reveal px-4 py-8 md:px-8 md:py-14"><div className="berry-gradient mx-auto max-w-[1320px] overflow-hidden rounded-[1.5rem] border border-[#d6b37d]/18 px-6 py-16 text-center text-white md:px-12 md:py-24">
    <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#d6b37d]">Начнем с идеи</p><h2 className="font-display mx-auto mt-5 max-w-4xl text-[clamp(2.7rem,5.6vw,5.6rem)] leading-[1.04] tracking-[-.035em]">Есть повод для сюрприза? <em className="font-normal not-italic text-[#d6b37d]">Давайте устроим шоу!</em></h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/72">Расскажите нам, кого хотите поздравить, — предложим подходящий вариант.</p>
    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href={contact.vk} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#f3ece3] px-7 font-semibold text-[#2b1a24]">Написать в VK <ArrowUpRight size={19}/></a><a href={contact.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/7 px-7 font-semibold backdrop-blur"><Phone size={18}/> Позвонить</a></div>
  </div></section>;
}
