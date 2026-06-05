import { Button } from './Button';

interface CTAItem {
  label: string;
  to: string;
  primary?: boolean;
}

interface CTABandProps {
  title?: string;
  items?: CTAItem[];
}

const DEFAULT_ITEMS: CTAItem[] = [
  { label: 'Destripa tu Indexado', to: '/productos/destripa-tu-indexado', primary: true },
  { label: 'Revisar concurso energético', to: '/productos/concurso-energetico' },
  { label: 'Solicitar auditoría energética', to: '/contacto' },
  { label: 'Solicitar reunión', to: '/contacto' },
];

export function CTABand({ title = '¿Por dónde empezamos?', items = DEFAULT_ITEMS }: CTABandProps) {
  return (
    <section className="py-16 lg:py-24 px-6 bg-brand-dark relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.07)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-white/25 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">{title}</p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) =>
            item.primary ? (
              <Button
                key={item.label}
                to={item.to}
                size="lg"
                arrow
                className="shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)] hover:scale-105"
              >
                {item.label}
              </Button>
            ) : (
              <Button key={item.label} to={item.to} variant="outline-light" size="lg">
                {item.label}
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
