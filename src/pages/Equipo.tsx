import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, TrendingUp, Network, Code2, Globe, type LucideIcon } from 'lucide-react';
import { CTABand } from '../components/ui/CTABand';

/* ── Types ─────────────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  years: string | null;
  yearsLabel: string | null;
  bio: string;
  animDelay: string;
}

/* ── Data ───────────────────────────────────────────────────────────────── */
const BRUNO: TeamMember = {
  name: 'Bruno Rodríguez', role: 'Dirección del proyecto', icon: Zap,
  years: '+25', yearsLabel: 'años en el sector',
  bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior y relación principal con clientes.',
  animDelay: '0.1s',
};

const TEAM: TeamMember[] = [
  {
    name: 'Manuel Castro', role: 'Plataforma y control energético', icon: TrendingUp,
    years: '11', yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, esp. Energía. Lidera el control de facturación, contratos y reporting financiero. 11 años en control presupuestario y compra técnica.',
    animDelay: '0.5s',
  },
  {
    name: 'Jordi Amodeo', role: 'Operativa de altas', icon: Network,
    years: '6', yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia.',
    animDelay: '0.65s',
  },
  {
    name: 'Pedro Maceira', role: 'Desarrollo y tecnología', icon: Code2,
    years: null, yearsLabel: null,
    bio: 'Ingeniero informático. Desarrollo y mantenimiento de la plataforma propia: ingesta de datos, integración con Datadis y entornos de gestión.',
    animDelay: '0.8s',
  },
  {
    name: 'Carlota López Carracedo', role: 'Marketing y desarrollo web', icon: Globe,
    years: null, yearsLabel: null,
    bio: 'Responsable de comunicación, identidad de marca y desarrollo web. Impulsa la presencia digital de REDUCE.',
    animDelay: '0.95s',
  },
];


/* ── Page ───────────────────────────────────────────────────────────────── */
export function Equipo() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive(prev => prev === i ? null : i);

  return (
    <>
      <Helmet>
        <title>El Equipo | REDUCE</title>
        <meta name="description" content="El equipo técnico de REDUCE: ingeniería energética, tecnología y operativa de suministros sin vínculo comercial con ninguna comercializadora." />
        <link rel="canonical" href="https://reduce.es/equipo" />
        <meta property="og:title" content="El Equipo | REDUCE" />
        <meta property="og:description" content="Ingeniería energética, tecnología y operativa de suministros. Sin vínculo comercial con ninguna comercializadora." />
        <meta property="og:url" content="https://reduce.es/equipo" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark min-h-[46vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-brand-green/14 rounded-full blur-[130px] translate-y-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            El equipo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.88] mb-8">
            Personas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">reales.</span>
            <br />
            <span className="text-white/30">Resultados</span>{' '}reales.
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl font-medium">
            Más de una década de trayectoria, con incorporaciones en tecnología y marketing
            que refuerzan cada capa del servicio. Sin vínculo comercial con ninguna comercializadora.
          </p>
        </div>
      </section>

      {/* ── TEAM SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-white">

        {/* Header strip */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-3.5 border-b border-border">
          <span className="text-brand-dark/25 text-[9px] font-bold uppercase tracking-[0.35em]">Estructura del equipo · 5 personas</span>
          <span className="text-brand-dark/20 text-[9px] font-bold tracking-widest">REDUCE · 2026</span>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-24">

          {/* ── Bruno: director card ── */}
          <div
            className="max-w-2xl mx-auto relative border border-border bg-white rounded-2xl p-7 lg:p-9 overflow-hidden"
            style={{ animation: 'fade-up 500ms cubic-bezier(0.23,1,0.32,1) 0.1s both' }}
          >
            {/* Green accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green to-emerald-400" />

            <div className="flex flex-wrap items-start gap-5 lg:gap-7">
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/22 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-brand-green" />
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className="text-brand-green text-[9px] font-bold uppercase tracking-[0.22em] block mb-1">{BRUNO.role}</span>
                <h2 className="font-black text-brand-dark tracking-tighter text-2xl lg:text-[1.8rem] mb-3">{BRUNO.name}</h2>
                <p className="text-muted text-sm leading-relaxed">{BRUNO.bio}</p>
              </div>
              {/* Stat */}
              <div className="flex-shrink-0 text-right pl-5 border-l border-border hidden sm:block self-center">
                <span className="text-[2.8rem] font-black text-brand-dark leading-none block">{BRUNO.years}</span>
                <span className="text-muted/50 text-[8px] uppercase tracking-widest">{BRUNO.yearsLabel}</span>
              </div>
            </div>
          </div>

          {/* ── Tree connector SVG ── */}
          {/* Lines align with 4-col grid centers at ~12.5%, 37.5%, 62.5%, 87.5% */}
          <svg
            viewBox="0 0 1000 64"
            preserveAspectRatio="none"
            className="w-full h-10 lg:h-14 block"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Vertical stem from Bruno */}
            <line x1="500" y1="0" x2="500" y2="32"
              stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="0 200">
              <animate attributeName="stroke-dasharray" from="0 200" to="200 0"
                dur="0.35s" begin="0.4s" fill="freeze" />
            </line>
            {/* Horizontal bar */}
            <line x1="125" y1="32" x2="875" y2="32"
              stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="0 1000">
              <animate attributeName="stroke-dasharray" from="0 1000" to="1000 0"
                dur="0.45s" begin="0.75s" fill="freeze" />
            </line>
            {/* 4 drops */}
            {[125, 375, 625, 875].map((x, i) => (
              <line key={x} x1={x} y1="32" x2={x} y2="64"
                stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="0 200">
                <animate attributeName="stroke-dasharray" from="0 200" to="200 0"
                  dur="0.25s" begin={`${1.2 + i * 0.08}s`} fill="freeze" />
              </line>
            ))}
            {/* Green junction dots */}
            <circle cx="500" cy="0" r="3.5" fill="#a3e635" opacity="0">
              <animate attributeName="opacity" from="0" to="0.65" dur="0.2s" begin="0.4s" fill="freeze" />
            </circle>
            {[125, 375, 625, 875].map((x, i) => (
              <circle key={x} cx={x} cy="32" r="2.8" fill="#a3e635" opacity="0">
                <animate attributeName="opacity" from="0" to="0.5" dur="0.2s"
                  begin={`${1.2 + i * 0.08}s`} fill="freeze" />
              </circle>
            ))}
          </svg>

          {/* ── 4-col grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((person, i) => {
              const Icon = person.icon;
              const isActive = active === i;
              return (
                <div
                  key={person.name}
                  onClick={() => toggle(i)}
                  style={{ animation: `fade-up 500ms cubic-bezier(0.23,1,0.32,1) ${person.animDelay} both` }}
                  className={`relative border rounded-2xl p-5 lg:p-6 cursor-pointer select-none
                              transition-all duration-300 ease-out
                              ${isActive
                      ? 'border-brand-green/40 bg-[#fafffe] shadow-[0_4px_20px_rgba(0,0,0,0.07)]'
                      : 'border-border bg-white hover:border-brand-green/22 hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)]'
                    }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-brand-green/50 to-emerald-400/50" />
                  )}
                  <div className="w-9 h-9 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-brand-green text-[8px] font-bold uppercase tracking-[0.22em] block mb-1.5">{person.role}</span>
                  <h3 className="font-black text-brand-dark tracking-tighter leading-tight text-[0.92rem]">{person.name}</h3>
                  <div style={{
                    maxHeight: isActive ? '260px' : '0px',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 450ms cubic-bezier(0.23,1,0.32,1), opacity 320ms ease',
                  }}>
                    <p className="text-muted text-xs leading-relaxed mt-3 mb-4">{person.bio}</p>
                    <div className="pt-3 border-t border-border">
                      {person.years ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-[1.7rem] font-black text-brand-dark leading-none">{person.years}</span>
                          <span className="text-muted/55 text-[8px] uppercase tracking-widest">{person.yearsLabel}</span>
                        </div>
                      ) : (
                        <span className="text-muted/55 text-[8px] uppercase tracking-widest font-bold">incorporación reciente</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── CLOSING STATEMENT ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 bg-brand-dark grain-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(163,230,53,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-8 h-[3px] bg-brand-green rounded-full mx-auto mb-8" />
          <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
            Desde 2012, creciendo donde el mercado lo exige. Experiencia acumulada y talento nuevo para mantenerse a la vanguardia.
          </p>
        </div>
      </section>

      <CTABand
        title="¿Hablamos?"
        items={[
          { label: 'Solicitar reunión', to: '/contacto', primary: true },
          { label: 'Ver el modelo de las 5 capas', to: '/modelo' },
          { label: 'Sectores', to: '/sectores' },
        ]}
      />
    </>
  );
}
