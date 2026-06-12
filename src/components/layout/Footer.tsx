import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../data/content';

const PRODUCTS_LINKS = [
  { label: 'Destripa tu Indexado', to: '/destripa-tu-indexado' },
  { label: 'Concurso energético asistido', to: '/productos/concurso-energetico' },
  { label: 'Control energético multisede', to: '/productos/control-multisede' },
  { label: 'Operativa retail internacional', to: '/productos/operativa-retail' },
];

const SECTION_LINKS = [
  { label: 'Modelo de las 5 capas', to: '/modelo' },
  { label: 'Tecnología y trazabilidad', to: '/tecnologia' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Contacto', to: '/contacto' },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">

        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand column — wider */}
          <div>
            <img src={`${import.meta.env.BASE_URL}logo-reduce.png`} alt="REDUCE" className="h-10 w-auto max-w-[200px] object-contain mb-6" />
            <p className="text-white/40 text-sm leading-relaxed max-w-[260px] mb-6">
              Estructura independiente de control, auditoría y gestión energética multisede. Sin vínculos con comercializadoras.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_6px_rgba(163,230,53,0.8)]" />
              <span className="text-brand-green text-[11px] font-bold uppercase tracking-[0.18em]">Operando desde 2012</span>
            </div>
          </div>

          <div>
            <p className="text-white/20 text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">Productos</p>
            <ul className="space-y-3">
              {PRODUCTS_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/45 text-sm hover:text-white transition-colors font-medium leading-snug block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/20 text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">Empresa</p>
            <ul className="space-y-3">
              {SECTION_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/45 text-sm hover:text-white transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/20 text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">Contacto</p>
            <ul className="space-y-3 text-white/45 text-sm font-medium">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone2}
                </a>
              </li>
              <li className="pt-1 text-white/25 text-xs leading-relaxed">
                {CONTACT_INFO.address}<br />{CONTACT_INFO.city}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} REDUCE Soluciones de Ahorro Energético. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { label: 'Aviso legal', to: '/aviso-legal' },
              { label: 'Privacidad', to: '/privacidad' },
              { label: 'Cookies', to: '/cookies' },
              { label: 'Accesibilidad', to: '/accesibilidad' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-white/20 text-xs hover:text-white/50 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Brand strip — full bleed green line at very bottom */}
        <div className="h-[3px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent -mx-6 mt-0" />
      </div>
    </footer>
  );
}
