import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function Footer() {
  return <footer id="contacts" className="bg-[#23051e] pb-24 pt-20 text-white md:pb-10">
    <div className="site-container">
      <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c977]">Контакты</p><h2 className="font-display mt-5 text-[clamp(3rem,6vw,6.5rem)] leading-[.98] tracking-[-.025em]">Давайте устроим <em className="font-normal text-[#f6bad1]">праздник</em></h2><p className="mt-6 text-lg text-white/62">{contact.cities}</p></div>
        <div className="flex flex-col items-start gap-4 lg:items-end"><a href={contact.phoneHref} className="text-2xl font-bold sm:text-3xl">{contact.phoneDisplay}</a><a href={contact.vk} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center gap-2 rounded-full bg-[#ef397c] px-7 font-semibold">Написать нам <ArrowUpRight size={19}/></a></div>
      </div>
      <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-lg font-black tracking-[.13em]">ЕЖЕВИКА ШОУ</p><p className="mt-2 text-sm text-white/48">Яркие поздравления и шоу-программы</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/58"><a href="#privacy-note" className="hover:text-white">Политика конфиденциальности</a><a href="#privacy-note" className="hover:text-white">Согласие на обработку персональных данных</a></div></div>
      <div id="privacy-note" className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/36 sm:flex-row sm:items-center sm:justify-between"><p>© ЕЖЕВИКА ШОУ</p><p>Тексты юридических документов будут добавлены после утверждения.</p></div>
    </div>
  </footer>;
}
