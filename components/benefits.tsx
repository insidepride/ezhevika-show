import { benefits } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function Benefits() {
  return <section className="reveal py-24 md:py-32"><div className="site-container">
    <SectionHeading eyebrow="Почему мы" title="Праздник начинается с эмоций" />
    <div className="mt-12 grid border-l border-t border-[#d6cbc2] md:grid-cols-2 lg:grid-cols-4">
      {benefits.map(item => <article key={item.number} className="min-h-[280px] border-b border-r border-[#d6cbc2] p-7 transition hover:bg-[#fffdf9] md:p-8"><span className="font-display text-4xl text-[#a77b43]">{item.number}</span><h3 className="mt-14 text-xl font-semibold leading-snug">{item.title}</h3><p className="mt-4 leading-relaxed text-[#70636a]">{item.text}</p></article>)}
    </div>
  </div></section>;
}
