import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const DIRECTOR = {
  num: '01',
  name: 'Bruno Rodríguez',
  role: 'Dirección del proyecto',
  years: '+25',
  yearsLabel: 'años en el sector energético',
  bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Responsable de la relación con Druni y de la supervisión sénior del servicio.',
};

const ROSTER = [
  {
    num: '02',
    name: 'Manuel Castro',
    role: 'Plataforma y control energético',
    years: '11',
    yearsLabel: 'años',
    bio: 'Ingeniero de Minas, especialidad Energía. Con 11 años de experiencia en control presupuestario, compra técnica de energía y seguimiento de suministros energéticos. Lidera el control de facturación, contratos y reporting financiero.',
  },
  {
    num: '03',
    name: 'Jordi Amodeo',
    role: 'Operativa de altas',
    years: '6',
    yearsLabel: 'años',
    bio: 'Licenciado en Empresariales. Responsable de la tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia.',
  },
  {
    num: '04',
    name: 'Pedro Maceira',
    role: 'Desarrollo y tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Responsable del desarrollo y mantenimiento de la plataforma propia: ingesta de datos, base de datos, integración con Datadis y entornos de gestión y reporting.',
  },
  {
    num: '05',
    name: 'Carlota López Carracedo',
    role: 'Marketing y desarrollo web',
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
      <section className="bg-brand-dark min-h-[56vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
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
            Ingeniería energética, tecnología y operativa de suministros. Perfil técnico senior, sin vínculo comercial con ninguna comercializadora.
          </p>
        </div>
      </section>

      {/* ── TEAM SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 pt-0 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* ── Director strip ─────────────────────────────────────────── */}
          <div className="relative overflow-hidden bg-brand-dark rounded-b-[3rem] px-8 lg:px-16 pt-16 pb-14 mb-0">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent" />
            {/* Ghost number */}
            <span className="absolute right-0 top-0 bottom-0 flex items-center text-[22rem] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-6">01</span>
            {/* Glow */}
            <div className="absolute left-0 bottom-0 w-[600px] h-[300px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
              {/* Left: meta + name + bio */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-white/20 text-xs font-bold tracking-[0.3em]">01</span>
                  <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.22em] border border-brand-green/25 rounded-full px-3 py-1.5 bg-brand-green/[0.08]">
                    {DIRECTOR.role}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.9] mb-8">
                  {DIRECTOR.name}
                </h2>
                <p className="text-white/45 text-base leading-relaxed max-w-xl">{DIRECTOR.bio}</p>
              </div>

              {/* Right: stat */}
              <div className="lg:text-right">
                <p className="text-[5.5rem] lg:text-[7rem] font-black text-brand-green tracking-tighter leading-none">{DIRECTOR.years}</p>
                <p className="text-white/25 text-sm mt-2 tracking-wide">{DIRECTOR.yearsLabel}</p>
              </div>
            </div>
          </div>

          {/* ── Section label ──────────────────────────────────────────── */}
          <div className="flex items-center gap-6 py-10 border-b border-border">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/40 flex-shrink-0">El equipo</span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/40 flex-shrink-0">05 personas</span>
          </div>

          {/* ── Roster ─────────────────────────────────────────────────── */}
          <div>
            {ROSTER.map((person) => (
              <div key={person.name}
                className="grid grid-cols-[2.5rem_1fr] lg:grid-cols-[2.5rem_1fr_auto] gap-x-6 lg:gap-x-12 gap-y-0 py-9 border-b border-border group hover:bg-brand-dark/[0.02] transition-colors duration-200 -mx-6 px-6 lg:-mx-0 lg:px-0">

                {/* Number */}
                <span className="text-muted/25 text-xs font-bold tracking-[0.2em] tabular-nums pt-2 flex-shrink-0">{person.num}</span>

                {/* Name + role + bio */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-brand-dark tracking-tighter leading-none">
                      {person.name}
                    </h2>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50 flex-shrink-0">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">{person.bio}</p>
                </div>

                {/* Years — desktop only */}
                {person.years ? (
                  <div className="hidden lg:flex flex-col items-end justify-start pt-1 flex-shrink-0">
                    <p className="text-3xl font-black text-brand-dark/70 tracking-tighter leading-none group-hover:text-brand-green transition-colors duration-300">
                      {person.years}
                    </p>
                    <p className="text-muted/40 text-[10px] mt-1 tracking-wide">{person.yearsLabel}</p>
                  </div>
                ) : (
                  <div className="hidden lg:block" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Closing statement ────────────────────────────────────────────── */}
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
