import { CalendarHeart, MessageCircleMore, PartyPopper } from "lucide-react";
import { SectionHeading } from "./section-heading";

const steps = [
  { num: "01", icon: MessageCircleMore, title: "Расскажите нам о поводе", text: "Напишите дату, город и кого хотите поздравить." },
  { num: "02", icon: CalendarHeart, title: "Выберем программу", text: "Подскажем подходящего персонажа и формат поздравления." },
  { num: "03", icon: PartyPopper, title: "Дарим эмоции", text: "В назначенное время наши персонажи приезжают — и начинается шоу." },
] as const;

export function HowItWorks() {
  return <section id="how" className="reveal bg-[#f9e8ed] py-24 md:py-32"><div className="site-container">
    <SectionHeading eyebrow="Легко заказать" title="Всего 3 шага до праздника" />
    <div className="mt-12 grid gap-5 lg:grid-cols-3">{steps.map(step => <article key={step.num} className="relative overflow-hidden rounded-[2rem] bg-white p-7 soft-shadow md:p-9"><span className="absolute right-5 top-3 font-display text-7xl text-[#f4e3ea]">{step.num}</span><step.icon size={30} className="relative text-[#bd2167]"/><h3 className="relative mt-16 text-2xl font-black">{step.title}</h3><p className="relative mt-4 text-lg leading-relaxed text-[#745f6c]">{step.text}</p></article>)}</div>
  </div></section>;
}
