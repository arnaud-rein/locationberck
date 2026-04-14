import { Star } from "lucide-react";
import type { Testimonial } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { testimonials: Testimonial[] };

export default function Testimonials({ testimonials }: Props) {
  const average = (testimonials.reduce((acc, item) => acc + item.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Avis" title="Ce que disent nos voyageurs" subtitle={`Note moyenne: ${average} / 5`} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft">
              <div className="mb-3 flex text-amber-400">
                {Array.from({ length: item.rating }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-slate-700">"{item.text}"</p>
              <p className="mt-4 text-sm font-bold">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
