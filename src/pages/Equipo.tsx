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
  pos: { left: string; top: string };
  floatDur: string;
  floatDelay: string;
}

/* ── Data ───────────────────────────────────────────────────────────────── */
const TEAM: TeamMember[] = [
  {
    name: 'Bruno Rodríguez', role: 'Dirección del proyecto', icon: Zap,
    years: '+25', yearsLabel: 'años en el sector',
    bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior y relación principal con clientes.',
    pos: { left: '50%', top: '15%' }, floatDur: '4.5s', floatDelay: '0s',
  },
  {
    name: 'Manuel Castro', role: 'Plataforma y control energético', icon: TrendingUp,
    years: '11', yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, esp. Energía. Lidera el control de facturación, contratos y reporting financiero. 11 años en control presupuestario y compra técnica.',
    pos: { left: '12%', top: '56%' }, floatDur: '5s', floatDelay: '0.8s',
  },
  {
    name: 'Jordi Amodeo', role: 'Operativa de altas', icon: Network,
    years: '6', yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia.',
    pos: { left: '88%', top: '56%' }, floatDur: '4s', floatDelay: '1.2s',
  },
  {
    name: 'Pedro Maceira', role: 'Desarrollo y tecnología', icon: Code2,
    years: null, yearsLabel: null,
    bio: 'Ingeniero informático. Desarrollo y mantenimiento de la plataforma propia: ingesta de datos, integración con Datadis y entornos de gestión.',
    pos: { left: '30%', top: '84%' }, floatDur: '5.5s', floatDelay: '0.4s',
  },
  {
    name: 'Carlota López Carracedo', role: 'Marketing y desarrollo web', icon: Globe,
    years: null, yearsLabel: null,
    bio: 'Responsable de comunicación, identidad de marca y desarrollo web. Impulsa la presencia digital de REDUCE.',
    pos: { left: '70%', top: '84%' }, floatDur: '4.8s', floatDelay: '1.6s',
  },
];

/* SVG positions (viewBox 0 0 100 100) matching TEAM pos percentages */
const NODE_PTS = [
  { cx: 50, cy: 15 },
  { cx: 12, cy: 56 },
  { cx: 88, cy: 56 },
  { cx: 30, cy: 84 },
  { cx: 70, cy: 84 },
];

const CONNECTIONS = [
  { path: 'M 50 15 C 31 36 20 46 12 56', dur: '4s',   begin: '0s',   primary: true  },
  { path: 'M 50 15 C 69 36 80 46 88 56', dur: '3.5s', begin: '0.7s', primary: true  },
  { path: 'M 50 15 C 40 49 35 67 30 84', dur: '5s',   begin: '1.4s', primary: true  },
  { path: 'M 50 15 C 60 49 65 67 70 84', dur: '4.5s', begin: '2.1s', primary: true  },
  { path: 'M 12 56 C 17 70 23 77 30 84', dur: '3s',   begin: '0.5s', primary: false },
  { path: 'M 88 56 C 83 70 77 77 70 84', dur: '3.5s', begin: '1s',   primary: false },
];

/* ── Node card ──────────────────────────────────────────────────────────── */
function NodeCard({
  person,
  active,
  onMouseEnter,
  onMouseLeave,
}: {
  person: TeamMember;
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const Icon = person.icon;
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transform: 'translate(-50%, -50%)',
        width: active ? '272px' : '192px',
        transition: 'width 500ms cubic-bezier(0.23,1,0.32,1), box-shadow 400ms ease, border-color 300ms ease',
        willChange: 'width',
      }}
      className={`relative cursor-default select-none glass-dark rounded-[1.75rem] px-5 py-5 border
                  ${active
          ? 'border-brand-green/40 shadow-[0_0_60px_rgba(163,230,53,0.22),0_8px_48px_rgba(0,0,0,0.55)]'
          : 'border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:border-white/[0.14]'
        }`}
    >
      {/* Inner glow when active */}
      {active && (
        <div className="absolute inset-0 rounded-[1.75rem] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(163,230,53,0.07) 0%, transparent 70%)' }} />
      )}

      {/* Icon + role row */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className={`flex-shrink-0 flex items-center justify-center rounded-xl border
                         transition-all duration-500
                         ${active
            ? 'w-10 h-10 bg-brand-green/12 border-brand-green/28'
            : 'w-8 h-8 bg-brand-green/7 border-brand-green/14'
          }`}>
          <Icon className={`text-brand-green transition-all duration-500 ${active ? 'w-5 h-5' : 'w-4 h-4'}`} />
        </div>
        <span className="text-brand-green/55 text-[8px] font-bold uppercase tracking-[0.22em] leading-tight">
          {person.role}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-black text-white tracking-tighter leading-tight text-[0.95rem]">
        {person.name}
      </h3>

      {/* Expandable bio + stat */}
      <div style={{
        maxHeight: active ? '260px' : '0px',
        opacity: active ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 500ms cubic-bezier(0.23,1,0.32,1), opacity 380ms ease',
      }}>
        <p className="text-white/30 text-[11px] leading-relaxed mt-3 mb-3.5">{person.bio}</p>
        <div className="pt-3 border-t border-white/[0.07]">
          {person.years ? (
            <div className="flex items-baseline gap-2">
              <span className="text-[1.9rem] font-black text-brand-green leading-none">{person.years}</span>
              <span className="text-white/20 text-[8px] uppercase tracking-widest">{person.yearsLabel}</span>
            </div>
          ) : (
            <span className="text-white/18 text-[8px] uppercase tracking-widest font-bold">incorporación reciente</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export function Equipo() {
  const [hovered, setHovered] = useState<number | null>(null);

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

      {/* ── NETWORK ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark grain-dark relative overflow-hidden">

        {/* Label strip */}
        <div className="flex items-center justify-between px-8 py-3.5 border-b border-white/[0.05]">
          <span className="text-white/18 text-[9px] font-bold uppercase tracking-[0.35em]">Estructura del equipo · 5 personas</span>
          <span className="text-white/12 text-[9px] font-bold tracking-widest">REDUCE · 2026</span>
        </div>

        {/* ── Desktop network (lg+) ── */}
        <div
          className="hidden lg:block relative mx-auto"
          style={{ height: '840px', maxWidth: '1200px', padding: '0 48px' }}
        >
          {/* Ambient radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 40%, rgba(163,230,53,0.05) 0%, transparent 70%)' }} />

          {/* ── SVG layer: connections + particles ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="ptglow" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Connection lines with flowing dash animation */}
            {CONNECTIONS.map((c, i) => (
              <g key={i}>
                <path
                  d={c.path}
                  fill="none"
                  stroke={c.primary ? 'rgba(163,230,53,0.18)' : 'rgba(163,230,53,0.09)'}
                  strokeWidth="0.22"
                  strokeDasharray="1.6 2.8"
                  strokeLinecap="round"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-9" dur={c.dur} repeatCount="indefinite" />
                </path>
                {/* Particle traveling along the path */}
                <circle r="0.85" fill="#a3e635" opacity="0.8" filter="url(#ptglow)">
                  <animateMotion dur={c.dur} repeatCount="indefinite" begin={c.begin} path={c.path} />
                </circle>
              </g>
            ))}

            {/* Pulsing node rings at each card center */}
            {NODE_PTS.map((pt, i) => (
              <circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r="3"
                fill="none"
                stroke="rgba(163,230,53,0.25)"
                strokeWidth="0.22"
              >
                <animate attributeName="r" values="2.2;4.2;2.2" dur={`${3.2 + i * 0.45}s`} repeatCount="indefinite" begin={`${i * 0.55}s`} />
                <animate attributeName="opacity" values="0.3;0.65;0.3" dur={`${3.2 + i * 0.45}s`} repeatCount="indefinite" begin={`${i * 0.55}s`} />
              </circle>
            ))}
          </svg>

          {/* ── Cards ── */}
          {TEAM.map((person, i) => (
            <div
              key={person.name}
              style={{
                position: 'absolute',
                left: person.pos.left,
                top: person.pos.top,
                zIndex: hovered === i ? 20 : 5,
              }}
            >
              {/* Float wrapper (no transform here — centering is in NodeCard) */}
              <div style={{
                animation: hovered === i
                  ? 'none'
                  : `float-y ${person.floatDur} ease-in-out ${person.floatDelay} infinite`,
              }}>
                <NodeCard
                  person={person}
                  active={hovered === i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile grid (< lg) ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 py-10">
          {TEAM.map((person) => {
            const Icon = person.icon;
            return (
              <div key={person.name} className="glass-dark border border-white/[0.08] rounded-[1.5rem] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-brand-green/55 text-[9px] font-bold uppercase tracking-[0.2em] leading-tight">{person.role}</span>
                </div>
                <h3 className="font-black text-white tracking-tighter leading-tight text-base mb-2">{person.name}</h3>
                <p className="text-white/28 text-xs leading-relaxed mb-4">{person.bio}</p>
                {person.years ? (
                  <div className="flex items-baseline gap-2 pt-3 border-t border-white/[0.07]">
                    <span className="text-2xl font-black text-brand-green">{person.years}</span>
                    <span className="text-white/20 text-[9px] uppercase tracking-widest">{person.yearsLabel}</span>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-white/[0.07]">
                    <span className="text-white/18 text-[8px] uppercase tracking-widest font-bold">incorporación reciente</span>
                  </div>
                )}
              </div>
            );
          })}
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
