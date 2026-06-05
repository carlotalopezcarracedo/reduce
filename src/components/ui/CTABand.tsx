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
    <section className="py-14 px-6 bg-brand-dark grain-dark relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(163,230,53,0.09)_0%,transparent_55%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">

        {/* Left: label + green accent line */}
        <div className="flex-shrink-0 lg:min-w-[180px]">
          <p className="text-white/20 text-[11px] font-semibold uppercase tracking-[0.22em] mb-3">{title}</p>
          <div className="h-[2px] w-10 bg-brand-green rounded-full" />
        </div>

        {/* Vertical divider — desktop only */}
        <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-white/[0.08] to-transparent flex-shrink-0" />

        {/* Right: buttons */}
        <div className="flex flex-wrap gap-3">
          {items.map((item) =>
            item.primary ? (
              <Button
                key={item.label}
                to={item.to}
                size="lg"
                arrow
                className="shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)]"
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
