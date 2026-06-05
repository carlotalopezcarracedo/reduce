import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../data/content';

const PRODUCTS_LINKS = [
  { label: 'Destripa tu Indexado', to: '/productos/destripa-tu-indexado' },
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
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="lg:col-span-1">
            <img src={`${import.meta.env.BASE_URL}logo-reduce.png`} alt="REDUCE" className="h-12 w-auto max-w-[220px] object-contain mb-5" />
            <p className="text-white/50 text-sm leading-relaxed">
              Estructura independiente de control, auditoría y gestión energética multisede. Sin vínculos con comercializadoras.
            </p>
            <p className="text-brand-green text-xs font-bold uppercase tracking-widest mt-4">
              Operando desde 2012
            </p>
          </div>

          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Productos</p>
            <ul className="space-y-3">
              {PRODUCTS_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/55 text-sm hover:text-white transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Empresa</p>
            <ul className="space-y-3">
              {SECTION_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/55 text-sm hover:text-white transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Contacto</p>
            <ul className="space-y-3 text-white/55 text-sm font-medium">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
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
              <li className="pt-2 text-white/35">
                {CONTACT_INFO.address}<br />{CONTACT_INFO.city}
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} REDUCE Soluciones de Ahorro Energético. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Aviso legal', to: '/aviso-legal' },
              { label: 'Privacidad', to: '/privacidad' },
              { label: 'Cookies', to: '/cookies' },
              { label: 'Accesibilidad', to: '/accesibilidad' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
