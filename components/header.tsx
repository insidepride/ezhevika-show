"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/data/site";

const links = [["Главная", "#top"], ["Программы", "#programs"], ["Галерея", "#gallery"], ["Как заказать", "#how"], ["Контакты", "#contacts"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#310828]/90 text-white backdrop-blur-xl">
    <div className="site-container flex h-[76px] items-center justify-between gap-4">
      <a href="#top" className="shrink-0 leading-none" aria-label="ЕЖЕВИКА ШОУ — на главную">
        <span className="block text-[18px] font-black tracking-[.14em]">ЕЖЕВИКА</span><span className="mt-1 block text-[9px] font-bold tracking-[.38em] text-[#f4c977]">ШОУ</span>
      </a>
      <nav aria-label="Основная навигация" className="hidden items-center gap-7 text-sm font-semibold lg:flex">{links.map(([name, href]) => <a key={href} className="transition hover:text-[#f4c977]" href={href}>{name}</a>)}</nav>
      <div className="flex items-center gap-3">
        <a href={contact.phoneHref} className="hidden text-sm font-bold transition hover:text-[#f4c977] xl:block">{contact.phoneDisplay}</a>
        <a href="#request" className="hidden rounded-full bg-[#ef397c] px-5 py-3 text-sm font-extrabold shadow-lg shadow-pink-950/25 transition hover:-translate-y-0.5 hover:bg-[#ff4b8b] sm:block">Заказать праздник</a>
        <button type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    {open && <nav aria-label="Мобильная навигация" className="border-t border-white/10 bg-[#310828] px-4 pb-5 pt-3 lg:hidden"><div className="site-container flex flex-col">{links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg font-bold">{name}</a>)}<a href="#request" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-[#ef397c] px-5 py-4 text-center font-extrabold">Заказать праздник</a></div></nav>}
  </header>;
}
