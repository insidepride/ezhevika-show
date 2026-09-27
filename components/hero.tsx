import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, Phone, Sparkles } from "lucide-react";
import { contact } from "@/data/site";

export function Hero() {
  return <section className="berry-gradient relative min-h-[760px] overflow-hidden pb-16 pt-[120px] text-white md:pt-[132px]">
    <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#ea3c88]/30 blur-3xl"/><div className="absolute right-[8%] top-24 h-64 w-64 rounded-full bg-[#f6c76f]/20 blur-3xl"/>
    <Sparkles className="float-slow absolute left-[7%] top-[24%] hidden text-[#f4c977] md:block" aria-hidden="true"/><Sparkles className="float-slow absolute right-[4%] top-[18%] text-[#ffdca0]" size={20} aria-hidden="true"/>
    <div className="site-container relative grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
      <div className="relative z-10 max-w-[650px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[.12em] text-[#ffe5ac] backdrop-blur-md"><Sparkles size={15} aria-hidden="true"/> АРХАНГЕЛЬСК · СЕВЕРОДВИНСК · НОВОДВИНСК</div>
        <h1 className="font-display text-[clamp(3.3rem,7vw,6.8rem)] font-normal leading-[.88] tracking-[-.055em]">Дарим эмоции,<br/><em className="gold-text font-normal">которые запоминаются</em></h1>
        <p className="mt-7 max-w-[590px] text-lg font-medium leading-relaxed text-white/86 md:text-xl">Яркие поздравления, зеркальные персонажи и ростовые куклы в Архангельске, Северодвинске и Новодвинске.</p>
        <p className="mt-3 max-w-[590px] text-base leading-relaxed text-white/66">День рождения, выписка из роддома, встреча с поезда или ваш собственный необычный повод — придумаем праздник вместе.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#request" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 font-extrabold text-[#651244] transition hover:-translate-y-1 hover:shadow-2xl">Заказать поздравление <ArrowUpRight size={19}/></a><a href="#programs" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 font-bold backdrop-blur-md transition hover:bg-white/18">Смотреть программы <ArrowDown size={18}/></a></div>
        <ul className="mt-9 grid gap-3 text-sm font-semibold text-white/82 sm:grid-cols-3">{["Яркие персонажи","Индивидуальный сценарий","Выезд по области"].map(item=><li key={item} className="flex items-center gap-2"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f4c977] text-[#51103d]"><Check size={14}/></span>{item}</li>)}</ul>
      </div>
      <div className="relative min-h-[440px] lg:min-h-[610px]"><div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.8rem] border border-[#f5ce82]/35"/><div className="soft-shadow absolute inset-0 overflow-hidden rounded-[2.8rem] bg-[#2f0927]"><Image src="/images/hero-mirror-rabbits.webp" alt="Зеркальные персонажи ЕЖЕВИКА ШОУ на выездном празднике" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#310828]/75 via-transparent to-transparent"/><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 rounded-[1.5rem] border border-white/15 bg-[#25051f]/70 p-5 backdrop-blur-lg"><p className="max-w-xs text-sm font-semibold leading-snug text-white/86">Настоящие персонажи.<br/>Живые эмоции.</p><a href={contact.phoneHref} aria-label="Позвонить" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ef397c] transition hover:scale-105"><Phone size={21}/></a></div></div></div>
    </div>
  </section>;
}
