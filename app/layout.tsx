import type { Metadata } from "next";
import { Manrope, Prata } from "next/font/google";
import "./globals.css";
import { assetPath } from "@/lib/asset-path";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

const prata = Prata({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЕЖЕВИКА ШОУ — поздравления, ростовые куклы и шоу в Архангельске",
  description: "Яркие поздравления, зеркальные персонажи и ростовые куклы в Архангельске, Северодвинске и Новодвинске. День рождения, выписка из роддома, встречи и необычные сюрпризы от ЕЖЕВИКА ШОУ.",
  openGraph: { title: "ЕЖЕВИКА ШОУ — праздник, который запомнят", description: "Поздравления, зеркальные персонажи и ростовые куклы в Архангельске и области.", locale: "ru_RU", type: "website" },
  icons: { icon: assetPath("/favicon.svg"), shortcut: assetPath("/favicon.svg") },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru" className={`${manrope.variable} ${prata.variable}`}><body>{children}</body></html>; }
