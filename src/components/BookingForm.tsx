import type { FormEvent } from "react";
import type { Owner } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { owner: Owner };

export default function BookingForm({ owner }: Props) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Demande envoyee. Le contrat sera transmis automatiquement par email apres validation.");
  };

  return (
    <section id="reservation" className="bg-sand px-4 py-16 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Reservation"
            title="Reservez en moins de 2 minutes"
            subtitle="Paiement 50% a la reservation (virement ou en ligne). Attestation d'assurance demandee."
          />
          <div className="space-y-2 rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-sm"><strong>Proprietaire:</strong> {owner.name}</p>
            <p className="text-sm"><strong>Telephone:</strong> {owner.phone}</p>
            <p className="text-sm"><strong>Email:</strong> {owner.email}</p>
            <a
              href="https://wa.me/33629891114"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600"
            >
              Contacter sur WhatsApp
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="grid gap-4">
            <label className="text-sm font-semibold">Nom<input required className="mt-1 w-full rounded-xl border border-slate-200 p-3" /></label>
            <label className="text-sm font-semibold">Email<input required type="email" className="mt-1 w-full rounded-xl border border-slate-200 p-3" /></label>
            <label className="text-sm font-semibold">Telephone<input required className="mt-1 w-full rounded-xl border border-slate-200 p-3" /></label>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm font-semibold">Arrivee<input required type="date" className="mt-1 w-full rounded-xl border border-slate-200 p-3" /></label>
              <label className="text-sm font-semibold">Depart<input required type="date" className="mt-1 w-full rounded-xl border border-slate-200 p-3" /></label>
            </div>
            <label className="text-sm font-semibold">Residence
              <select className="mt-1 w-full rounded-xl border border-slate-200 p-3">
                <option>Residence La Vedette</option>
                <option>Residence l'Odyssee</option>
              </select>
            </label>
            <button type="submit" className="rounded-full bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700">Reserver</button>
          </div>
        </form>
      </div>
    </section>
  );
}
