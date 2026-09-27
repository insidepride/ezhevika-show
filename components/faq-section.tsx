"use client";
import { faq } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";

export function FAQSection() {
  return <section className="reveal py-24 md:py-32"><div className="site-container grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
    <SectionHeading eyebrow="FAQ" title="Остались вопросы?" description="Собрали ответы на то, о чем чаще всего спрашивают перед заказом." />
    <Accordion type="single" collapsible className="rounded-[2rem] bg-white px-6 soft-shadow md:px-9">
      {faq.map((item, index) => <AccordionItem value={`item-${index}`} key={item.question} className="border-[#ead9df]">
        <AccordionTrigger className="py-6 text-left text-lg font-black hover:no-underline md:text-xl">{item.question}</AccordionTrigger>
        <AccordionContent className="pb-7 pr-8 text-base leading-relaxed text-[#705b68]">{item.answer}</AccordionContent>
      </AccordionItem>)}
    </Accordion>
  </div></section>;
}
