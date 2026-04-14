import { MapPin } from "lucide-react";
import type { Apartment } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { apartments: Apartment[] };

export default function LocationSection({ apartments }: Props) {
  return (
    <section id="localisation" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionTitle eyebrow="Localisation" title="Berck-sur-Mer, tout a pied" subtitle="Plage, commerces et promenade a quelques minutes." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-sky-100 bg-white p-6 shadow-soft">
          {apartments.map((apt) => (
            <div key={apt.id} className="rounded-2xl bg-slate-50 p-4">
              <h3 className="font-display text-xl font-bold">{apt.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-slate-600"><MapPin size={16} className="mt-0.5" />{apt.address}</p>
              <p className="mt-1 text-sm font-semibold text-sky-700">Distance plage: {apt.distanceToBeach}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-3xl border border-sky-100 shadow-soft">
          <iframe
            title="Carte Berck-sur-Mer"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.5525%2C50.4015%2C1.5925%2C50.4165&layer=mapnik"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}