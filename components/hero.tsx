import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, Phone, Sparkles } from "lucide-react";
import { contact } from "@/data/site";

const heroBenefits = ["Яркие персонажи", "Индивидуальный сценарий", "Выезд по области"] as const;

export function Hero() {
  return (
    <section className="hero-stage relative overflow-hidden pb-14 pt-[112px] text-white md:pb-20 md:pt-[132px]">
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="site-container relative grid min-w-0 items-center gap-11 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
        <div className="relative z-10 min-w-0 max-w-[610px]">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-[#f8d792] sm:text-xs">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#f8d792]/40 bg-white/8">
              <Sparkles size={14} aria-hidden="true" />
            </span>
            {contact.cities}
          </div>

          <h1 className="hero-title">
            <span className="block">Дарим эмоции,</span>
            <em className="hero-title-accent block">которые</em>
            <em className="hero-title-accent block">запоминаются</em>
          </h1>

          <p className="mt-7 max-w-[570px] text-[17px] font-medium leading-[1.6] text-white/88 md:text-[19px]">
            Яркие поздравления, зеркальные персонажи и ростовые куклы в Архангельске, Северодвинске и Новодвинске.
          </p>
          <p className="mt-3 max-w-[570px] text-[15px] leading-[1.65] text-white/64 md:text-base">
            День рождения, выписка из роддома, встреча с поезда или ваш собственный необычный повод — придумаем праздник вместе.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#request" className="hero-primary-button inline-flex min-h-14 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 font-semibold text-[#651244] transition hover:-translate-y-1 hover:shadow-2xl">
              Заказать поздравление <ArrowUpRight size={19} />
            </a>
            <a href="#programs" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/8 px-6 font-medium backdrop-blur-md transition hover:bg-white/15">
              Смотреть программы <ArrowDown size={18} />
            </a>
          </div>

          <ul className="mt-8 grid gap-x-4 gap-y-3 text-[13px] font-medium text-white/76 sm:grid-cols-3">
            {heroBenefits.map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f4c977] text-[#51103d]"><Check size={12} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[460px] min-w-0 sm:min-h-[560px] lg:min-h-[650px]">
          <div className="absolute -right-3 top-8 hidden h-[78%] w-[86%] rounded-[3rem] border border-[#f5ce82]/35 lg:block" aria-hidden="true" />
          <div className="hero-photo soft-shadow absolute inset-0 overflow-hidden rounded-[2rem] bg-[#2f0927] sm:rounded-[3rem]">
            <Image
              src="/images/hero-mirror-rabbits.webp"
              alt="Зеркальные персонажи ЕЖЕВИКА ШОУ на выездном празднике"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26031f]/80 via-transparent to-[#25051f]/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#2b0924]/58 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/90 backdrop-blur-md sm:left-7 sm:top-7 sm:text-[11px]">
              ЕЖЕВИКА ШОУ · зеркальные персонажи
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/15 bg-[#25051f]/76 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[.14em] text-[#f5ce82]">Настоящие персонажи</p>
                <p className="mt-1 text-sm font-medium leading-snug text-white/92 sm:text-base">Живые эмоции.</p>
              </div>
              <a href={contact.phoneHref} aria-label="Позвонить" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ef397c] transition hover:scale-105 hover:bg-[#ff4b8b]"><Phone size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
