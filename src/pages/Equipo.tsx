import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const TEAM = [
  {
    num: '01',
    name: 'Bruno Rodríguez',
    initial: 'B',
    role: 'Dirección del proyecto',
    years: '+25',
    yearsLabel: 'años en el sector energético',
    bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior del servicio y relación principal con clientes.',
    tag: 'Director',
  },
  {
    num: '02',
    name: 'Manuel Castro',
    initial: 'M',
    role: 'Plataforma y control energético',
    years: '11',
    yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, especialidad Energía. Lidera el control de facturación, contratos y reporting financiero para estructuras multisede. Con 11 años de experiencia en control presupuestario y compra técnica de energía.',
    tag: 'Control',
  },
  {
    num: '03',
    name: 'Jordi Amodeo',
    initial: 'J',
    role: 'Operativa de altas',
    years: '6',
    yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Responsable de la tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia. Especialista en suministros de retail de alta complejidad.',
    tag: 'Operativa',
  },
  {
    num: '04',
    name: 'Pedro Maceira',
    initial: 'P',
    role: 'Desarrollo y tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Responsable del desarrollo y mantenimiento de la plataforma propia: ingesta de datos, base de datos, integración con Datadis y entornos de gestión y reporting.',
    tag: 'Tecnología',
  },
  {
    num: '05',
    name: 'Carlota López Carracedo',
    initial: 'C',
    role: 'Marketing y desarrollo web',
    years: null,
    yearsLabel: null,
    bio: 'Responsable de la estrategia de comunicación, identidad de marca y desarrollo web. Impulsa la presencia digital de REDUCE y la coherencia de marca en todos los canales.',
    tag: 'Marketing',
  },
];

export function Equipo() {
  const [active, setActive] = useState(0);
  const person = TEAM[active];

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

      {/* ── INTERACTIVE SPLIT PANEL ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row" style={{ minHeight: '640px' }}>

          {/* ── LEFT: clickable name list ────────────────────────────────── */}
          <div className="lg:w-[44%] bg-brand-dark flex flex-col px-8 lg:px-14 py-14 lg:py-20">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.32em] mb-12">
              El equipo · {TEAM.length} personas
            </p>

            <div className="flex flex-col flex-1 justify-center gap-0 divide-y divide-white/[0.05]">
              {TEAM.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={`group text-left py-5 lg:py-6 flex items-center gap-5 relative
                              transition-[padding,color] duration-300 outline-none
                              ${active === i ? 'pl-5' : 'pl-0 hover:pl-2'}`}
                >
                  {/* Active left bar */}
                  <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-brand-green
                                  transition-[opacity,transform] duration-300
                                  ${active === i ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />

                  {/* Number */}
                  <span className={`text-[11px] font-bold tabular-nums flex-shrink-0 w-5 transition-colors duration-300
                                    ${active === i ? 'text-brand-green/70' : 'text-white/20 group-hover:text-white/35'}`}>
                    {p.num}
                  </span>

                  {/* Name + role */}
                  <div className="min-w-0 flex-1">
                    <p className={`font-black tracking-tighter leading-tight transition-colors duration-300
                                   text-xl sm:text-2xl lg:text-[1.6rem]
                                   ${active === i ? 'text-white' : 'text-white/45 group-hover:text-white/75'}`}>
                      {p.name}
                    </p>
                    <p className={`text-[10px] font-bold uppercase tracking-[0.18em] mt-1 transition-colors duration-300
                                   ${active === i ? 'text-brand-green/60' : 'text-white/15 group-hover:text-white/25'}`}>
                      {p.role}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`flex-shrink-0 transition-[opacity,transform] duration-300
                                   ${active === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-white/12 text-[10px] font-bold tracking-widest uppercase mt-12 hidden lg:block">
              REDUCE · 2026
            </p>
          </div>

          {/* ── RIGHT: animated detail panel ─────────────────────────────── */}
          <div className="lg:flex-1 relative overflow-hidden bg-brand-light flex items-center px-8 lg:px-16 py-14 lg:py-20">

            {/* Giant ghost initial — repositions per person */}
            <span
              key={`initial-${active}`}
              className="absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-brand-dark/[0.055]"
              style={{
                fontSize: 'clamp(10rem, 28vw, 22rem)',
                lineHeight: 1,
                transform: 'translate(12%, 10%)',
                animation: 'fade-up 0.5s cubic-bezier(0.23,1,0.32,1) both',
              }}
            >
              {person.initial}
            </span>

            {/* Subtle green glow accent */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-green/6 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Content — key forces re-animation on selection change */}
            <div key={active} className="relative z-10 w-full max-w-lg"
              style={{ animation: 'fade-up 0.45s cubic-bezier(0.23,1,0.32,1) both' }}>

              {/* Role badge */}
              <span className="inline-flex items-center gap-2 text-brand-green text-[10px] font-bold uppercase tracking-[0.22em] border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/[0.07] mb-8">
                <span className="w-1 h-1 rounded-full bg-brand-green" />
                {person.role}
              </span>

              {/* Name */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-brand-dark tracking-tighter leading-[0.92] mb-6">
                {person.name}
              </h2>

              {/* Bio */}
              <p className="text-muted text-base lg:text-[1.05rem] leading-relaxed mb-10 max-w-md">
                {person.bio}
              </p>

              {/* Stat or tag */}
              {person.years ? (
                <div className="flex items-baseline gap-3 pt-8 border-t border-brand-dark/[0.08]">
                  <span className="text-[4rem] lg:text-[5rem] font-black text-brand-dark tracking-tighter leading-none">{person.years}</span>
                  <span className="text-muted text-sm font-medium">{person.yearsLabel}</span>
                </div>
              ) : (
                <div className="pt-8 border-t border-brand-dark/[0.08]">
                  <span className="inline-flex items-center gap-2 bg-brand-dark text-brand-green text-[10px] font-black uppercase tracking-[0.22em] px-4 py-2 rounded-full">
                    {person.tag}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Mobile: dot selector */}
        <div className="lg:hidden flex justify-center gap-2 py-5 bg-brand-dark">
          {TEAM.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-brand-green' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
          ))}
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
