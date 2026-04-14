import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        alt="Plage de Berck-sur-Mer"
        className="h-[80vh] w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/75 via-sky-800/45 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4 md:px-6"
      >
        <p className="mb-4 w-fit rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Berck-sur-Mer • Location saisonniere
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Sejournez a Berck-sur-Mer a 50m de la plage
        </h1>
        <p className="mt-4 max-w-xl text-base text-sky-50 md:text-lg">2 appartements tout confort pour 4 personnes, a reserver en 2 clics.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#disponibilites" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-sky-700 transition hover:bg-sky-50">
            Voir les disponibilites
          </a>
          <a href="#reservation" className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Reserver maintenant
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-6 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-soft md:right-8">
        2 personnes regardent ce bien
      </div>
    </section>
  );
}