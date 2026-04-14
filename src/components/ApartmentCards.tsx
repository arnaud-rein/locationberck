import { BedDouble, CookingPot, Wifi } from "lucide-react";
import type { Apartment } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { apartments: Apartment[] };

export default function ApartmentCards({ apartments }: Props) {
  return (
    <section id="appartements" className="pattern-bg bg-noise bg-[length:16px_16px] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Comparer & reserver"
          title="Deux residences, une section simple"
          subtitle="Comparez en un coup d'oeil puis reservez directement."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {apartments.map((apt) => (
            <article key={apt.id} className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft">
              <img src={apt.image} alt={apt.name} className="h-56 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">{apt.distanceToBeach} plage</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">4 personnes</span>
                  {apt.badge ? <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">{apt.badge}</span> : null}
                </div>
                <h3 className="font-display text-2xl font-bold">{apt.name}</h3>
                <p className="mt-1 text-sm text-slate-600">A partir de {apt.weeklyPricing[0].price} / semaine</p>
                <ul className="mt-4 flex gap-4 text-sm text-slate-600">
                  <li className="flex items-center gap-1"><Wifi size={16} /> Wifi</li>
                  <li className="flex items-center gap-1"><CookingPot size={16} /> Cuisine</li>
                  <li className="flex items-center gap-1"><BedDouble size={16} /> Balcon</li>
                </ul>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-500">Surface</dt>
                    <dd>{apt.size}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Pieces</dt>
                    <dd>{apt.rooms}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Etage</dt>
                    <dd>{apt.floor}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Acces</dt>
                    <dd>{apt.elevator}</dd>
                  </div>
                </dl>
                <a href="#reservation" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-slate-700">
                  Voir details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
