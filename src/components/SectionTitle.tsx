type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow ? <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}