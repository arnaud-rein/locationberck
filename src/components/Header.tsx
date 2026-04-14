import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#appartements", label: "Appartements" },
  { href: "#prix", label: "Prix" },
  { href: "#disponibilites", label: "Disponibilites" },
  { href: "#reservation", label: "Reservation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="font-display text-lg font-extrabold text-slate-900">
          Berck<span className="text-sky-600">Booking</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-sky-600">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:0629891114"
          className="hidden items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 md:flex"
        >
          <Phone size={16} /> 06 29 89 11 14
        </a>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-sky-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-semibold text-slate-700">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}