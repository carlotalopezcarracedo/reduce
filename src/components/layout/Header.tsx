import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Modelo 5 capas', to: '/modelo' },
  { label: 'Productos', to: '/productos' },
  { label: 'Tecnología', to: '/tecnologia' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Contacto', to: '/contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-2">
      {/* Pill container */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-dark rounded-full px-6 h-[60px] flex items-center justify-between gap-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] border border-white/[0.07]">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="REDUCE" className="h-8 w-auto object-contain" />
          </Link>

          {/* Nav — desktop */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-brand-green'
                      : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contacto"
              className="hidden lg:inline-flex items-center bg-brand-green text-brand-dark text-sm font-black px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:shadow-[0_0_35px_rgba(163,230,53,0.55)] hover:brightness-105 transition-all"
            >
              Solicitar reunión
            </Link>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 bg-brand-dark rounded-[2rem] px-4 py-4 space-y-0.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/[0.07]">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-green bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 px-1">
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="block text-center bg-brand-green text-brand-dark text-sm font-black px-5 py-3 rounded-2xl shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:brightness-105 transition-all"
              >
                Solicitar reunión
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
