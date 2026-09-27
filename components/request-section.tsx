import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

export function RequestSection() {
  return <section id="request" className="reveal bg-[#f9e8ed] py-24 md:py-32"><div className="site-container grid items-start gap-12 lg:grid-cols-[.82fr_1.18fr]">
    <div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Заявка" title="Расскажите о вашем празднике" description="Оставьте контакты и несколько деталей. Мы поможем подобрать формат и обсудим программу без лишней суеты."/><div className="mt-8 rounded-3xl border border-[#dbc5cf] p-6 text-[#644e5c]"><p className="font-bold text-[#35102f]">Что написать?</p><p className="mt-2 leading-relaxed">Дата, город, повод и для кого готовим сюрприз. Если пока есть только идея — этого уже достаточно.</p></div></div>
    <ContactForm/>
  </div></section>;
}
