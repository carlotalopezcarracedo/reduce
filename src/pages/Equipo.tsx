import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CTABand } from '../components/ui/CTABand';

const TEAM = [
  {
    num: '01',
    name: 'Bruno Rodríguez',
    initial: 'B',
    role: 'Dirección del proyecto',
    years: '+25',
    yearsLabel: 'años en el sector',
    bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior del servicio y relación principal con clientes.',
    glow: 'radial-gradient(ellipse 70% 60% at 15% 85%, rgba(163,230,53,0.14) 0%, transparent 55%)',
  },
  {
    num: '02',
    name: 'Manuel Castro',
    initial: 'M',
    role: 'Plataforma y control energético',
    years: '11',
    yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, especialidad Energía. Lidera el control de facturación, contratos y reporting financiero para estructuras multisede. 11 años en control presupuestario y compra técnica de energía.',
    glow: 'radial-gradient(ellipse 60% 55% at 80% 20%, rgba(163,230,53,0.12) 0%, transparent 55%)',
  },
  {
    num: '03',
    name: 'Jordi Amodeo',
    initial: 'J',
    role: 'Operativa de altas',
    years: '6',
    yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Responsable de la tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia. Especialista en suministros de retail de alta complejidad.',
    glow: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(163,230,53,0.10) 0%, transparent 60%)',
  },
  {
    num: '04',
    name: 'Pedro Maceira',
    initial: 'P',
    role: 'Desarrollo y tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Responsable del desarrollo y mantenimiento de la plataforma propia: ingesta de datos, base de datos, integración con Datadis y entornos de gestión y reporting.',
    glow: 'radial-gradient(ellipse 60% 55% at 10% 25%, rgba(163,230,53,0.11) 0%, transparent 55%)',
  },
  {
    num: '05',
    name: 'Carlota López Carracedo',
    initial: 'C',
    role: 'Marketing y desarrollo web',
    years: null,
    yearsLabel: null,
    bio: 'Responsable de la estrategia de comunicación, identidad de marca y desarrollo web. Impulsa la presencia digital de REDUCE y la coherencia de marca en todos los canales.',
    glow: 'radial-gradient(ellipse 65% 55% at 85% 80%, rgba(163,230,53,0.12) 0%, transparent 55%)',
  },
];

const AUTO_INTERVAL = 6000;

export function Equipo() {
  const [active, setActive] = useState(0);
  const person = TEAM[active];

  // Auto-advance
  useEffect(() => {
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % TEAM.length);
    }, AUTO_INTERVAL);
    return () => clearTimeout(id);
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + TEAM.length) % TEAM.length);
  const next = () => setActive((a) => (a + 1) % TEAM.length);

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

      {/* ── BILLBOARD ────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden" style={{ minHeight: '86vh' }}>

        {/* Background glow — transitions per person */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{ background: person.glow }} />

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none grain-dark" />

        {/* ── Tab navigation ─────────────────────────────────────────────── */}
        <div className="absolute top-0 left-0 right-0 z-20 flex border-b border-white/[0.07]">
          {TEAM.map((p, i) => (
            <button
              key={p.num}
              onClick={() => setActive(i)}
              className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors duration-300
                          border-r border-white/[0.06] last:border-0
                          ${active === i ? 'bg-brand-green/[0.06]' : 'hover:bg-white/[0.02]'}`}
            >
              <span className={`text-[11px] font-black tracking-[0.2em] transition-colors duration-300
                               ${active === i ? 'text-brand-green' : 'text-white/25 group-hover:text-white/40'}`}>
                {p.num}
              </span>
              <span className={`hidden sm:block text-[9px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 truncate max-w-[100px] text-center
                               ${active === i ? 'text-white/50' : 'text-white/15'}`}>
                {p.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* ── Progress bar ───────────────────────────────────────────────── */}
        <div className="absolute top-[57px] sm:top-[65px] left-0 right-0 z-20 h-[2px] bg-white/[0.04]">
          <div
            key={active}
            className="h-full bg-brand-green/60 rounded-full"
            style={{ animation: `progress-fill ${AUTO_INTERVAL}ms linear forwards` }}
          />
        </div>

        {/* ── Main content ───────────────────────────────────────────────── */}
        <div
          key={active}
          className="relative z-10 flex items-center px-6 lg:px-20 pt-28 pb-20"
          style={{
            minHeight: '86vh',
            animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both',
          }}
        >
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-0 items-center">

            {/* Left: content */}
            <div className="relative z-10">
              {/* Role badge */}
              <span className="inline-flex items-center gap-2 text-brand-green text-[10px] font-bold uppercase tracking-[0.22em] border border-brand-green/25 rounded-full px-4 py-1.5 bg-brand-green/[0.07] mb-8">
                <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green" />
                </span>
                {person.role}
              </span>

              {/* Name — fluid size */}
              <h2
                className="font-black text-white tracking-tighter leading-[0.85] mb-10"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 8.5rem)' }}
              >
                {person.name}
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[2px] bg-brand-green/50 rounded-full" />
                <span className="text-white/15 text-[10px] uppercase tracking-[0.25em] font-bold">{person.num} / 05</span>
              </div>

              {/* Bio */}
              <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-12 font-medium">
                {person.bio}
              </p>

              {/* Stat or tag */}
              {person.years ? (
                <div className="flex items-baseline gap-4">
                  <span className="font-black text-brand-green tracking-tighter leading-none"
                    style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
                    {person.years}
                  </span>
                  <span className="text-white/30 text-base">{person.yearsLabel}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/[0.09] rounded-2xl px-5 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="text-white/50 text-sm font-semibold">REDUCE · 2026</span>
                </div>
              )}
            </div>

            {/* Right: giant initial — desktop only */}
            <div className="hidden lg:flex items-center justify-end select-none pointer-events-none pl-10">
              <span
                className="font-black text-white/[0.05] leading-none"
                style={{ fontSize: 'clamp(12rem, 22vw, 24rem)', lineHeight: 1 }}
              >
                {person.initial}
              </span>
            </div>

          </div>
        </div>

        {/* ── Arrow navigation ───────────────────────────────────────────── */}
        <button
          onClick={prev}
          className="absolute left-4 lg:left-8 bottom-8 z-20 w-12 h-12 rounded-full border border-white/[0.12] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute left-20 lg:left-24 bottom-8 z-20 w-12 h-12 rounded-full border border-white/[0.12] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── Dot indicators ─────────────────────────────────────────────── */}
        <div className="absolute right-6 lg:right-10 bottom-10 z-20 flex gap-2 items-center">
          {TEAM.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-500
                          ${i === active ? 'w-8 h-2 bg-brand-green' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
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
