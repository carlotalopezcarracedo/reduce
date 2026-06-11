import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Layers, Mail, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const QUICK_LINKS = [
  { label: 'Modelo 5 capas', to: '/modelo', icon: Layers },
  { label: 'Productos', to: '/productos', icon: ArrowRight },
  { label: 'Contacto', to: '/contacto', icon: Mail },
];

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Página no encontrada | REDUCE</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="La página solicitada no existe o ha cambiado de ubicación. Vuelve a REDUCE o explora el modelo de control energético multisede."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:py-28 grain-dark">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(163,230,53,0.22) 0%, transparent 58%)',
              'radial-gradient(ellipse 55% 65% at 90% 10%, rgba(163,230,53,0.10) 0%, transparent 52%)',
            ].join(', '),
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[58vh] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-green/25 bg-brand-green/[0.07] px-4 py-2 text-xs font-bold tracking-wide text-brand-green">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(163,230,53,0.9)]" />
              Error 404 · Ruta no localizada
            </div>

            <h1 className="mb-6 text-[3.4rem] font-black leading-[0.9] tracking-tighter text-white sm:text-[5rem] lg:text-[7rem]">
              404
              <span className="block text-[2.35rem] text-transparent bg-clip-text sm:text-[3.7rem] lg:text-[5rem]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #a3e635, #86efac, #34d399, #a3e635)',
                  backgroundSize: '250% 100%',
                  animation: 'gradient-x 5s ease infinite',
                }}
              >
                fuera de lectura.
              </span>
            </h1>

            <p className="mb-9 max-w-xl text-base font-medium leading-relaxed text-white/50 sm:text-lg">
              Esta dirección no está dentro del mapa operativo de REDUCE. Puede que el enlace haya cambiado o que la página ya no exista.
            </p>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button to="/" size="lg" arrow className="w-full sm:w-auto shadow-[0_0_35px_rgba(163,230,53,0.30)]">
                Volver al inicio
              </Button>
              <Button to="/contacto" variant="outline-light" size="lg" className="w-full sm:w-auto">
                Hablar con REDUCE
              </Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/[0.09] bg-white/[0.035] p-5 shadow-[0_0_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6 lg:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-brand-dark">
                  <SearchX className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-black text-white">Auditoría de ruta</p>
                  <p className="text-xs font-semibold text-white/35">Resultado: enlace no disponible</p>
                </div>
              </div>
              <span className="text-[11px] font-black tracking-[0.2em] text-brand-green">404</span>
            </div>

            <div className="space-y-3">
              {QUICK_LINKS.map(({ label, to, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors hover:border-brand-green/40 hover:bg-brand-green/10"
                >
                  <span className="flex items-center gap-3 text-sm font-bold text-white">
                    <Icon className="h-4 w-4 text-brand-green" />
                    {label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-brand-green" />
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-green px-4 py-4 text-brand-dark">
              <div className="flex items-start gap-3">
                <Home className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-sm font-bold leading-relaxed">
                  Si venías desde un enlace externo, el inicio es el punto más seguro para retomar la navegación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
