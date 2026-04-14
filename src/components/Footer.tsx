import type { Owner } from "../data/siteData";

type Props = { owner: Owner };

export default function Footer({ owner }: Props) {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-slate-200 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-bold">Location Berck-sur-Mer</h3>
          <p className="mt-2 text-sm text-slate-400">La Vedette (50m) et l'Odyssee (350m), location saisonniere 4 personnes.</p>
        </div>
        <div className="text-sm">
          <p><strong>Contact:</strong> {owner.name}</p>
          <p><strong>Telephone:</strong> {owner.phone}</p>
          <p><strong>Email:</strong> {owner.email}</p>
          <p className="mt-3 text-slate-400">Mentions legales - Conditions generales de vente</p>
        </div>
      </div>
    </footer>
  );
}