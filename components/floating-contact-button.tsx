import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function FloatingContactButton() {
  return <a href={contact.vk} target="_blank" rel="noreferrer" aria-label="Написать ЕЖЕВИКА ШОУ во ВКонтакте" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c39a61] px-5 font-bold text-[#21151c] shadow-[0_15px_40px_rgba(23,16,22,.28)] md:hidden"><MessageCircle size={20}/> Написать в VK</a>;
}
