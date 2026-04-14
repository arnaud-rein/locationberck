import { addDays, format, startOfMonth, startOfWeek } from "date-fns";
import { fr } from "date-fns/locale";
import SectionTitle from "./SectionTitle";

type Props = { bookedDates: string[] };

export default function AvailabilityCalendar({ bookedDates }: Props) {
  const monthStart = startOfMonth(new Date());
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const days = Array.from({ length: 35 }, (_, i) => addDays(calendarStart, i));

  return (
    <section id="disponibilites" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionTitle eyebrow="Planning" title="Calendrier des disponibilites" subtitle="Vert = disponible, rouge = reserve." />
      <div className="rounded-3xl border border-sky-100 bg-white p-4 shadow-soft md:p-6">
        <p className="mb-4 text-sm font-semibold text-slate-600">{format(monthStart, "MMMM yyyy", { locale: fr })}</p>
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase text-slate-500">
          {"lun mar mer jeu ven sam dim".split(" ").map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {days.map((day) => {
            const key = format(day, "yyyy-MM-dd");
            const isBooked = bookedDates.includes(key);
            const sameMonth = day.getMonth() === monthStart.getMonth();

            return (
              <div
                key={key}
                className={`rounded-xl p-2 text-center text-sm ${
                  sameMonth
                    ? isBooked
                      ? "bg-rose-100 text-rose-700"
                      : "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}