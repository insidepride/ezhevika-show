import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function Programs() {
  return <section id="programs" className="reveal py-24 md:py-32">
    <div className="site-container">
      <SectionHeading eyebrow="Программы" title="Какой праздник устроим?" description="Выберите повод — а мы поможем сделать его незабываемым." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((item, index) => <article key={item.title} className={`group relative min-h-[440px] overflow-hidden rounded-[1.25rem] ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}>
          <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 34vw" className="object-cover transition duration-700 group-hover:scale-105"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#171016] via-[#241820]/38 to-transparent"/>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-white/16 backdrop-blur"><item.icon size={21}/></span>
            <h3 className="font-display text-3xl leading-tight">{item.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/76">{item.text}</p>
            <a href="#request" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d9b67d]">{item.cta}<ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
