import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Apartment } from "../data/siteData";
import SectionTitle from "./SectionTitle";

type Props = { apartments: Apartment[] };

export default function Gallery({ apartments }: Props) {
  const slides = useMemo(() => apartments.flatMap((apt) => apt.gallery), [apartments]);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionTitle eyebrow="Galerie" title="Photos et ambiance" subtitle="Decouvrez les espaces en plein ecran." />
      <div className="relative overflow-hidden rounded-3xl">
        <img src={slides[index]} alt="Interieur appartement" className="h-[440px] w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800" aria-label="Photo precedente">
          <ChevronLeft />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800" aria-label="Photo suivante">
          <ChevronRight />
        </button>
      </div>
      <div className="mt-4 text-center">
        <a href="#appartements" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
          Voir toutes les photos
        </a>
      </div>
    </section>
  );
}