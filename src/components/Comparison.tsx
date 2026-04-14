import type { Apartment } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { apartments: Apartment[] };

export default function Comparison({ apartments }: Props) {
  return (
    <section id="comparaison" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionTitle
        eyebrow="Comparer"
        title="Choisissez l'appartement ideal"
        subtitle="Une vue claire des differences pour reserver rapidement."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {apartments.map((apt) => (
          <article key={apt.id} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1">
            <p className="text-sm font-bold uppercase tracking-wide text-sky-600">{apt.distanceToBeach} de la mer</p>
            <h3 className="mt-1 font-display text-2xl font-bold">{apt.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{apt.subtitle}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div><dt className="font-semibold text-slate-500">Surface</dt><dd>{apt.size}</dd></div>
              <div><dt className="font-semibold text-slate-500">Chambres</dt><dd>{apt.rooms}</dd></div>
              <div><dt className="font-semibold text-slate-500">Balcon</dt><dd>{apt.balcony}</dd></div>
              <div><dt className="font-semibold text-slate-500">Internet</dt><dd>{apt.internet}</dd></div>
              <div><dt className="font-semibold text-slate-500">Prix semaine</dt><dd>{apt.weeklyPricing[0].price}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}