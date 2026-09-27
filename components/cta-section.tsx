import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function CTASection() {
  return <section className="reveal px-4 py-8 md:px-8 md:py-14"><div className="berry-gradient mx-auto max-w-[1320px] overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-white md:px-12 md:py-24">
    <p className="text-xs font-black uppercase tracking-[.22em] text-[#f4c977]">Начнем с идеи</p><h2 className="font-display mx-auto mt-5 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] leading-[.92] tracking-[-.045em]">Есть повод для сюрприза? <em className="font-normal text-[#f7c4d6]">Давайте устроим шоу!</em></h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/72">Расскажите нам, кого хотите поздравить, — предложим подходящий вариант.</p>
    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href={contact.vk} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 font-extrabold text-[#651244]">Написать в VK <ArrowUpRight size={19}/></a><a href={contact.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 font-extrabold backdrop-blur"><Phone size={18}/> Позвонить</a></div>
  </div></section>;
}
