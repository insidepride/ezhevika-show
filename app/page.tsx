import { Benefits } from "@/components/benefits";
import { CTASection } from "@/components/cta-section";
import { EmotionalSection } from "@/components/emotional-section";
import { FAQSection } from "@/components/faq-section";
import { FloatingContactButton } from "@/components/floating-contact-button";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Programs } from "@/components/programs";
import { RequestSection } from "@/components/request-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: "ЕЖЕВИКА ШОУ",
  description: "Яркие поздравления, зеркальные персонажи, ростовые куклы и шоу-программы.",
  telephone: "+79643017671",
  url: "https://vk.ru/ezhevika_show29",
  areaServed: [
    { "@type": "City", name: "Архангельск" },
    { "@type": "City", name: "Северодвинск" },
    { "@type": "City", name: "Новодвинск" },
  ],
};

export default function Home() {
  return <>
    <Header />
    <main id="top">
      <Hero />
      <Programs />
      <EmotionalSection />
      <Benefits />
      <Gallery />
      <HowItWorks />
      <RequestSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingContactButton />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
