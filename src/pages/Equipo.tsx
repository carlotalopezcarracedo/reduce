import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const DIRECTOR = {
  name: 'Bruno Rodríguez',
  role: 'Dirección del proyecto',
  years: '+25',
  yearsLabel: 'años en el sector',
  bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior del servicio y relación principal con clientes.',
};

const NODES = [
  {
    num: '02',
    name: 'Manuel Castro',
    role: 'Plataforma y control energético',
    tag: 'Control',
    years: '11',
    yearsLabel: 'años',
    bio: 'Ingeniero de Minas, esp. Energía. Lidera el control de facturación, contratos y reporting financiero.',
  },
  {
    num: '03',
    name: 'Jordi Amodeo',
    role: 'Operativa de altas',
    tag: 'Operativa',
    years: '6',
    yearsLabel: 'años',
    bio: 'Licenciado en Empresariales. Tramitación de altas, ampliaciones y expedientes en ES, PT, AD e IT.',
  },
  {
    num: '04',
    name: 'Pedro Maceira',
    role: 'Desarrollo y tecnología',
    tag: 'Tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Desarrollo y mantenimiento de la plataforma propia, integración con Datadis.',
  },
  {
    num: '05',
    name: 'Carlota López Carracedo',
    role: 'Marketing y desarrollo web',
    tag: 'Marketing',
    years: null,
    yearsLabel: null,
    bio: 'Responsable de la estrategia de comunicación, identidad de marca y desarrollo web.',
  },
];

export function Equipo() {
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
      <section className="bg-brand-dark min-h-[50vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-brand-green/14 rounded-full blur-[130px] translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/6 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
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

      {/* ── ORG TREE ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 px-6 relative overflow-hidden">

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-[2px] bg-brand-dark/20 rounded-full" />
            <span className="text-brand-dark/25 text-[10px] font-bold uppercase tracking-[0.3em]">Estructura del equipo — 5 personas</span>
          </div>

          {/* ── DIRECTOR ROOT NODE ─────────────────────────────────────── */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[580px] rounded-[2rem] p-8 lg:p-10 bg-brand-dark
                            border-2 border-brand-green/40
                            shadow-[0_20px_60px_rgba(12,26,46,0.18),0_0_0_1px_rgba(163,230,53,0.06)]">

              {/* Corner label */}
              <span className="absolute top-4 right-5 text-[10px] font-bold tracking-[0.25em] text-white/15 uppercase">01</span>

              {/* Green pulse dot */}
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
                </span>
                <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.25em]">
                  {DIRECTOR.role}
                </span>
              </div>

              <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight mb-4">
                    {DIRECTOR.name}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">{DIRECTOR.bio}</p>
                </div>
                <div className="flex-shrink-0 sm:text-right">
                  <p className="text-[3.5rem] font-black text-brand-green tracking-tighter leading-none">{DIRECTOR.years}</p>
                  <p className="text-white/20 text-[10px] mt-1 tracking-wide">{DIRECTOR.yearsLabel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CONNECTOR + NODES (desktop) ────────────────────────────── */}
          {/*
            Flex-1 approach: each column is flex-1, so the dot at the center
            of each item is GUARANTEED to align with its half-lines.
            Left-half line is transparent for col-0; right-half for col-3.
          */}

          {/* Vertical from root to horizontal junction */}
          <div className="hidden lg:flex justify-center">
            <div className="w-px h-8 bg-brand-green/30" />
          </div>

          {/* Flex row: connector + cards combined */}
          <div className="hidden lg:flex">
            {NODES.map((node, i) => (
              <div key={node.name} className="flex-1 flex flex-col items-center min-w-0">
                {/* Horizontal half-lines + center dot (forms the branch bar) */}
                <div className="w-full flex items-center" style={{ height: '1px' }}>
                  <div className={`flex-1 h-px ${i === 0 ? 'bg-transparent' : 'bg-brand-green/30'}`} />
                  <div className="w-3 h-3 rounded-full border-2 border-brand-green/60 bg-white flex-shrink-0
                                  shadow-[0_0_8px_rgba(163,230,53,0.35)]" />
                  <div className={`flex-1 h-px ${i === NODES.length - 1 ? 'bg-transparent' : 'bg-brand-green/30'}`} />
                </div>
                {/* Vertical drop from dot to card */}
                <div className="w-px bg-brand-green/30" style={{ height: '1.5rem' }} />
                {/* Card — px creates visual gap between siblings */}
                <div className="w-full px-2.5">
                  <DesktopNode node={node} />
                </div>
              </div>
            ))}
          </div>

          {/* ── MOBILE: vertical spine ─────────────────────────────────── */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="w-px h-8 bg-brand-green/30" />
          </div>
          <div className="lg:hidden relative pl-6 ml-4 border-l-2 border-brand-green/20 space-y-5">
            {NODES.map((node) => (
              <div key={node.name} className="relative">
                <div className="absolute -left-[1.65rem] top-4 w-3 h-3 rounded-full border-2 border-brand-green/50 bg-white shadow-[0_0_6px_rgba(163,230,53,0.3)]" />
                <div className="rounded-[1.5rem] border border-border bg-brand-light p-6">
                  <span className="text-brand-green text-[9px] font-bold uppercase tracking-[0.22em] block mb-2">{node.role}</span>
                  <h3 className="text-lg font-black text-brand-dark tracking-tighter mb-2">{node.name}</h3>
                  <p className="text-muted text-xs leading-relaxed">{node.bio}</p>
                  {node.years && (
                    <div className="mt-3 pt-3 border-t border-border flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-brand-dark tracking-tighter">{node.years}</span>
                      <span className="text-muted/60 text-[10px]">{node.yearsLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CLOSING STATEMENT ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 bg-brand-dark border-t border-white/[0.05] grain-dark relative overflow-hidden">
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

function DesktopNode({ node }: { node: typeof NODES[0] }) {
  return (
    <div className="relative flex flex-col rounded-[1.5rem] border border-border bg-white p-6 group
                    shadow-[0_1px_4px_rgba(0,0,0,0.04)]
                    transition-[border-color,box-shadow,transform] duration-300
                    hover:border-brand-dark/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1">

      {/* Num */}
      <span className="text-brand-dark/15 text-[9px] font-bold tracking-[0.3em] mb-3">{node.num}</span>

      {/* Role */}
      <span className="text-brand-green text-[9px] font-bold uppercase tracking-[0.2em] mb-3 leading-tight">
        {node.role}
      </span>

      {/* Name */}
      <h3 className="text-base lg:text-lg font-black text-brand-dark tracking-tighter leading-tight mb-3 flex-1">
        {node.name}
      </h3>

      {/* Bio */}
      <p className="text-muted text-xs leading-relaxed mb-4">{node.bio}</p>

      {/* Years */}
      {node.years ? (
        <div className="pt-3 border-t border-border flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-brand-dark tracking-tighter group-hover:text-brand-green transition-colors duration-300">{node.years}</span>
          <span className="text-muted/60 text-[10px]">{node.yearsLabel}</span>
        </div>
      ) : (
        <div className="pt-3 border-t border-border">
          <span className="text-brand-dark/20 text-[9px] tracking-widest">REDUCE · 2026</span>
        </div>
      )}
    </div>
  );
}
