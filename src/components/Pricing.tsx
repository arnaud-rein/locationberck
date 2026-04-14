import type { Apartment } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { apartments: Apartment[] };

export default function Pricing({ apartments }: Props) {
  return (
    <section id="prix" className="bg-slate-900 px-4 py-16 text-white md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Tarifs" title="Prix transparents" subtitle="A la semaine ou a la nuit, sans frais caches." />
        <div className="grid gap-6 md:grid-cols-2">
          {apartments.map((apt) => (
            <article key={apt.id} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <h3 className="font-display text-2xl font-bold">{apt.name}</h3>
              <p className="mt-1 text-sky-100">{apt.nightlyPricing}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {apt.weeklyPricing.map((item) => (
                  <li key={item.duration} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>{item.duration}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-2xl bg-emerald-400/20 px-3 py-2 text-sm text-emerald-100">-10% des 2 semaines sur certaines periodes</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}