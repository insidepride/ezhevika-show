type Props = { eyebrow: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return <div className="max-w-3xl">
    <p className={`mb-4 text-xs font-semibold uppercase tracking-[.24em] ${light ? "text-[#d6b37d]" : "text-[#8d6339]"}`}>{eyebrow}</p>
    <h2 className={`font-display text-[clamp(2.6rem,5.1vw,5.1rem)] leading-[1.04] tracking-[-.035em] ${light ? "text-white" : "text-[#291c24]"}`}>{title}</h2>
    {description && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? "text-white/68" : "text-[#6d6268]"}`}>{description}</p>}
  </div>;
}
