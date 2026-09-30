"use client";
import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { gallery } from "@/data/site";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);
  return <section id="gallery" className="reveal py-24 md:py-32">
    <div className="site-container">
      <SectionHeading eyebrow="Галерея" title="Посмотрите, как это выглядит" description="Настоящие персонажи, живые встречи и эмоции, которые невозможно сыграть." />
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {gallery.map((item, index) => <button type="button" onClick={() => setSelected(item)} key={item.src} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.1rem] bg-[#2c1c26] text-left" aria-label={`Открыть фото: ${item.label}`}>
          <div className={index % 3 === 1 ? "relative aspect-[4/5]" : index % 3 === 2 ? "relative aspect-[5/4]" : "relative aspect-[3/2]"}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171016]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100"/>
            <span className="absolute bottom-5 left-5 text-lg font-semibold text-white">{item.label}</span>
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[#f4ede4]/90 text-[#2b1a24] opacity-0 transition group-hover:opacity-100"><Expand size={17}/></span>
          </div>
        </button>)}
      </div>
    </div>
    <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
      <DialogContent className="max-h-[92vh] max-w-[min(1100px,calc(100%-24px))] overflow-hidden border-white/20 bg-[#171016] p-2 text-white sm:max-w-[min(1100px,calc(100%-32px))]" showCloseButton>
        <DialogTitle className="sr-only">{selected?.label}</DialogTitle><DialogDescription className="sr-only">{selected?.alt}</DialogDescription>
        {selected && <div className="relative min-h-[72vh] overflow-hidden rounded-[1rem]"><Image src={selected.src} alt={selected.alt} fill sizes="100vw" className="object-contain"/></div>}
      </DialogContent>
    </Dialog>
  </section>;
}
