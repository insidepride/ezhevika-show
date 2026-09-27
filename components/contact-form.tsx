"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const cities = ["Архангельск", "Северодвинск", "Новодвинск", "Другой"];
const occasions = ["День рождения", "Выписка из роддома", "Встреча", "Детский праздник", "Ростовая кукла", "Зеркальные персонажи", "Другое"];

function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7") && digits.length) digits = "7" + digits;
  digits = digits.slice(0, 11);
  if (!digits.length) return "";
  const rest = digits.slice(1);
  let result = "+7";
  if (rest.length) result += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) result += ")";
  if (rest.length > 3) result += ` ${rest.slice(3, 6)}`;
  if (rest.length > 6) result += `-${rest.slice(6, 8)}`;
  if (rest.length > 8) result += `-${rest.slice(8, 10)}`;
  return result;
}

async function submitLead(_payload: Record<string, FormDataEntryValue | boolean>) {
  // Позже здесь можно подключить Telegram Bot API, email, CRM или собственный backend.
  await new Promise((resolve) => setTimeout(resolve, 450));
  return { ok: true };
}

export function ContactForm() {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (String(form.get("name") || "").trim().length < 2) next.name = "Укажите имя";
    if (phone.replace(/\D/g, "").length !== 11) next.phone = "Введите полный номер телефона";
    if (!city) next.city = "Выберите город";
    if (!occasion) next.occasion = "Выберите повод";
    if (!form.get("date")) next.date = "Выберите дату";
    if (!consent) next.consent = "Нужно согласие на обработку данных";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    const result = await submitLead({ ...Object.fromEntries(form.entries()), city, occasion, consent });
    setLoading(false);
    if (result.ok) setSent(true);
  }

  if (sent) return <div className="grid min-h-[500px] place-items-center rounded-[2rem] bg-white p-8 text-center soft-shadow"><div><CheckCircle2 className="mx-auto text-[#c6256c]" size={58}/><h3 className="font-display mt-6 text-4xl">Спасибо! Заявка отправлена 🎉</h3><p className="mx-auto mt-4 max-w-md text-lg text-[#735d6b]">Мы свяжемся с вами, чтобы обсудить повод, персонажей и детали программы.</p><button type="button" onClick={() => setSent(false)} className="mt-7 rounded-full border border-[#d8beca] px-6 py-3 font-bold">Отправить еще одну</button></div></div>;

  const fieldClass = "h-14 w-full rounded-2xl border border-[#dfccd5] bg-[#fffaf7] px-4 text-base outline-none transition focus:border-[#d62e73] focus:ring-4 focus:ring-[#ee4080]/10";
  return <form onSubmit={onSubmit} noValidate className="rounded-[2rem] bg-white p-6 soft-shadow md:p-9">
    <div className="grid gap-5 md:grid-cols-2">
      <label className="block"><span className="mb-2 block text-sm font-bold">Ваше имя</span><input name="name" autoComplete="name" className={fieldClass} placeholder="Как к вам обращаться?" aria-invalid={!!errors.name}/>{errors.name && <span className="mt-1 block text-sm text-red-600">{errors.name}</span>}</label>
      <label className="block"><span className="mb-2 block text-sm font-bold">Телефон</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} className={fieldClass} placeholder="+7 (___) ___-__-__" aria-invalid={!!errors.phone}/>{errors.phone && <span className="mt-1 block text-sm text-red-600">{errors.phone}</span>}</label>
      <div><span className="mb-2 block text-sm font-bold">Город</span><Select value={city} onValueChange={setCity}><SelectTrigger className={`${fieldClass} justify-between ${errors.city ? "border-red-500" : ""}`}><SelectValue placeholder="Выберите город"/></SelectTrigger><SelectContent>{cities.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>{errors.city && <span className="mt-1 block text-sm text-red-600">{errors.city}</span>}</div>
      <div><span className="mb-2 block text-sm font-bold">Повод</span><Select value={occasion} onValueChange={setOccasion}><SelectTrigger className={`${fieldClass} justify-between ${errors.occasion ? "border-red-500" : ""}`}><SelectValue placeholder="Выберите повод"/></SelectTrigger><SelectContent>{occasions.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>{errors.occasion && <span className="mt-1 block text-sm text-red-600">{errors.occasion}</span>}</div>
      <label className="block md:col-span-2"><span className="mb-2 block text-sm font-bold">Дата праздника</span><input name="date" type="date" className={fieldClass} aria-invalid={!!errors.date}/>{errors.date && <span className="mt-1 block text-sm text-red-600">{errors.date}</span>}</label>
      <label className="block md:col-span-2"><span className="mb-2 block text-sm font-bold">Комментарий</span><textarea name="comment" rows={4} className="w-full resize-y rounded-2xl border border-[#dfccd5] bg-[#fffaf7] p-4 text-base outline-none transition focus:border-[#d62e73] focus:ring-4 focus:ring-[#ee4080]/10" placeholder="Расскажите, кого хотите поздравить и какую идею задумали"/></label>
    </div>
    <div className="mt-5 flex items-start gap-3"><Checkbox id="consent" checked={consent} onCheckedChange={(value) => setConsent(value === true)} className="mt-1 h-5 w-5"/><label htmlFor="consent" className="text-sm leading-relaxed text-[#695560]">Я согласен(а) на обработку персональных данных</label></div>{errors.consent && <span className="mt-1 block text-sm text-red-600">{errors.consent}</span>}
    <button type="submit" disabled={loading} className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#77164f] px-7 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#9a1b5c] disabled:opacity-60">{loading ? "Отправляем…" : "Хочу устроить праздник"}<Send size={18}/></button>
  </form>;
}
