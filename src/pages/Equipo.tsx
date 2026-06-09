import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const FEATURED = [
  {
    name: 'Bruno Rodríguez',
    initial: 'B',
    role: 'Dirección del proyecto',
    years: '+25',
    yearsLabel: 'años en el sector',
    bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Responsable de la relación con Druni y de la supervisión sénior del servicio.',
    span2: true,
  },
  {
    name: 'Carlota López Carracedo',
    initial: 'C',
    role: 'Marketing y desarrollo web',
    years: null,
    yearsLabel: null,
    bio: 'Responsable de la estrategia de comunicación, identidad de marca y desarrollo web.',
    span2: false,
  },
];

const TEAM = [
  {
    name: 'Manuel Castro',
    initial: 'M',
    role: 'Plataforma y control energético',
    years: '11',
    yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, especialidad Energía. Con 11 años de experiencia en control presupuestario, compra técnica de energía y seguimiento de suministros. Lidera el control de facturación, contratos y reporting financiero.',
  },
  {
    name: 'Jordi Amodeo',
    initial: 'J',
    role: 'Operativa de altas',
    years: '6',
    yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Responsable de la tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia.',
  },
  {
    name: 'Pedro Maceira',
    initial: 'P',
    role: 'Desarrollo y tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Responsable del desarrollo y mantenimiento de la plataforma propia: ingesta de datos, base de datos, integración con Datadis y entornos de gestión y reporting.',
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

      {/* Hero */}
      <section className="bg-brand-dark min-h-[56vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {/* Glow */}
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-brand-green/14 rounded-full blur-[130px] translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/6 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            El equipo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.88] mb-8">
            Personas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              reales.
            </span>
            <br />
            <span className="text-white/30">Resultados</span>{' '}reales.
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl font-medium">
            Ingeniería energética, tecnología y operativa de suministros. Perfil técnico senior, sin vínculo comercial con ninguna comercializadora.
          </p>
          {/* Team count chips */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { n: '5', label: 'personas' },
              { n: '4', label: 'disciplinas' },
              { n: '+25', label: 'años acumulados de experiencia' },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04]">
                <span className="text-brand-green font-black text-base tracking-tighter">{s.n}</span>
                <span className="text-white/35 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement pill */}
      <section className="relative z-10 -mt-8 rounded-[3rem] py-10 px-8 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.12)] mx-4 lg:mx-auto max-w-4xl">
        <p className="text-xl lg:text-2xl font-bold text-brand-dark leading-snug text-center">
          Un equipo técnico independiente. Sin conflicto de interés con ninguna comercializadora.
        </p>
      </section>

      {/* Team grid */}
      <section className="relative z-0 -mt-10 pt-28 pb-20 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto space-y-5">

          {/* Row 1: Featured (2/3) + Carlota (1/3) */}
          <div className="grid lg:grid-cols-3 gap-5">

            {/* Bruno — featured dark */}
            <div className="lg:col-span-2 rounded-[2rem] bg-brand-dark relative overflow-hidden p-8 lg:p-12 lift hover:shadow-[0_30px_80px_rgba(12,26,46,0.5)] flex flex-col gap-8">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent rounded-t-[2rem]" />
              {/* Glows */}
              <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              {/* Giant decorative initial */}
              <span className="absolute right-6 bottom-0 text-[16rem] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.025)', lineHeight: 1 }}>B</span>

              <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 h-full">
                {/* Left: role + name + bio */}
                <div className="flex-1 flex flex-col gap-5">
                  <span className="inline-flex items-center gap-2 text-brand-green text-[10px] font-bold uppercase tracking-[0.2em] border border-brand-green/25 rounded-full px-3 py-1.5 w-fit bg-brand-green/[0.06]">
                    {FEATURED[0].role}
                  </span>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-tight mb-4">
                      {FEATURED[0].name}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed">{FEATURED[0].bio}</p>
                  </div>
                </div>

                {/* Right: big stat */}
                <div className="sm:flex-shrink-0 sm:text-right flex sm:flex-col sm:justify-end sm:items-end">
                  <div>
                    <p className="text-[5rem] lg:text-[6rem] font-black text-brand-green tracking-tighter leading-none">{FEATURED[0].years}</p>
                    <p className="text-white/25 text-xs mt-1 tracking-wide">{FEATURED[0].yearsLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carlota — dark glass */}
            <div className="rounded-[2rem] bg-brand-mid relative overflow-hidden p-8 lift hover:shadow-[0_20px_60px_rgba(12,26,46,0.4)] flex flex-col gap-6 border border-white/[0.06]">
              {/* Different accent: subtle top line, dimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
              <div className="absolute left-0 bottom-0 w-[250px] h-[250px] bg-brand-green/6 rounded-full blur-[80px] pointer-events-none" />
              {/* Giant initial */}
              <span className="absolute right-4 bottom-0 text-[12rem] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>C</span>

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                <span className="inline-flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/[0.08] rounded-full px-3 py-1.5 w-fit">
                  {FEATURED[1].role}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl lg:text-2xl font-black text-white tracking-tighter leading-tight mb-4">
                    {FEATURED[1].name}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">{FEATURED[1].bio}</p>
                </div>
                {/* Small REDUCE tag at bottom */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06] mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">REDUCE · 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Manuel + Jordi + Pedro */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((person) => (
              <div key={person.name}
                className="rounded-[2rem] bg-white border border-border p-8 relative overflow-hidden lift hover:border-brand-dark/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] flex flex-col gap-5">
                {/* Giant initial */}
                <span className="absolute right-4 bottom-0 text-[10rem] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(12,26,46,0.04)', lineHeight: 1 }}>{person.initial}</span>

                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.2em]">
                    {person.role}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-black text-brand-dark tracking-tighter leading-tight mb-3">
                      {person.name}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">{person.bio}</p>
                  </div>
                  {person.years && (
                    <div className="flex items-baseline gap-2 pt-4 border-t border-border mt-auto">
                      <span className="text-3xl font-black text-brand-dark tracking-tighter">{person.years}</span>
                      <span className="text-muted/70 text-xs">{person.yearsLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Closing statement */}
      <section className="py-20 lg:py-28 px-6 bg-brand-dark grain-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(163,230,53,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-8 h-[3px] bg-brand-green rounded-full mx-auto mb-8" />
          <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
            Operando desde 2012 con el mismo equipo. Sin rotación. Sin subcontratas.
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
