import { benefits } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function Benefits() {
  return <section className="reveal py-24 md:py-32"><div className="site-container">
    <SectionHeading eyebrow="Почему мы" title="Праздник начинается с эмоций" />
    <div className="mt-12 grid border-l border-t border-[#dfcad4] md:grid-cols-2 lg:grid-cols-4">
      {benefits.map(item => <article key={item.number} className="min-h-[280px] border-b border-r border-[#dfcad4] p-7 transition hover:bg-white md:p-8"><span className="font-display text-4xl text-[#d83b78]">{item.number}</span><h3 className="mt-14 text-xl font-black leading-tight">{item.title}</h3><p className="mt-4 leading-relaxed text-[#745f6c]">{item.text}</p></article>)}
    </div>
  </div></section>;
}
