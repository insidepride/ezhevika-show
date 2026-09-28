import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "ЕЖЕВИКА ШОУ — поздравления, ростовые куклы и шоу в Архангельске",
  description: "Яркие поздравления, зеркальные персонажи и ростовые куклы в Архангельске, Северодвинске и Новодвинске. День рождения, выписка из роддома, встречи и необычные сюрпризы от ЕЖЕВИКА ШОУ.",
  openGraph: { title: "ЕЖЕВИКА ШОУ — праздник, который запомнят", description: "Поздравления, зеркальные персонажи и ростовые куклы в Архангельске и области.", locale: "ru_RU", type: "website" },
  icons: { icon: assetPath("/favicon.svg"), shortcut: assetPath("/favicon.svg") },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
