type Props = { eyebrow: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return <div className="max-w-3xl">
    <p className={`mb-4 text-xs font-bold uppercase tracking-[.2em] ${light ? "text-[#f4c977]" : "text-[#b61f66]"}`}>{eyebrow}</p>
    <h2 className={`font-display text-[clamp(2.7rem,5.5vw,5.5rem)] leading-[.98] tracking-[-.025em] ${light ? "text-white" : "text-[#35102f]"}`}>{title}</h2>
    {description && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? "text-white/68" : "text-[#6f5667]"}`}>{description}</p>}
  </div>;
}
