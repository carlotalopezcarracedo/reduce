import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const TEAM = [
  {
    num: '01',
    name: 'Bruno Rodríguez',
    initial: 'B',
    role: 'Dirección del proyecto',
    years: '+25',
    yearsLabel: 'años en el sector',
    bio: 'Ingeniero experto en energía, con más de 25 años de experiencia en redes de gas, instalaciones diversas y análisis de mercados energéticos. Supervisión sénior y relación principal con clientes.',
    dark: true,
  },
  {
    num: '02',
    name: 'Manuel Castro',
    initial: 'M',
    role: 'Plataforma y control energético',
    years: '11',
    yearsLabel: 'años en gestión energética',
    bio: 'Ingeniero de Minas, esp. Energía. Lidera el control de facturación, contratos y reporting financiero. 11 años en control presupuestario y compra técnica.',
    dark: false,
  },
  {
    num: '03',
    name: 'Jordi Amodeo',
    initial: 'J',
    role: 'Operativa de altas',
    years: '6',
    yearsLabel: 'años en suministros retail',
    bio: 'Licenciado en Empresariales. Tramitación de altas, ampliaciones y expedientes en España, Portugal, Andorra e Italia.',
    dark: false,
  },
  {
    num: '04',
    name: 'Pedro Maceira',
    initial: 'P',
    role: 'Desarrollo y tecnología',
    years: null,
    yearsLabel: null,
    bio: 'Ingeniero informático. Desarrollo y mantenimiento de la plataforma propia: ingesta de datos, integración con Datadis y entornos de gestión.',
    dark: false,
  },
  {
    num: '05',
    name: 'Carlota López Carracedo',
    initial: 'C',
    role: 'Marketing y desarrollo web',
    years: null,
    yearsLabel: null,
    bio: 'Responsable de comunicación, identidad de marca y desarrollo web. Impulsa la presencia digital de REDUCE.',
    dark: false,
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

      {/* ── 5-COLUMN TEAM GRID ───────────────────────────────────────────── */}
      <section className="bg-white">

        {/* Header strip */}
        <div className="border-b border-border px-6 lg:px-10">
          <div className="flex items-center justify-between py-4">
            <span className="text-brand-dark/30 text-[10px] font-bold uppercase tracking-[0.3em]">El equipo · 5 personas</span>
            <span className="text-brand-dark/20 text-[10px] font-bold tracking-widest">REDUCE · 2026</span>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5" style={{ minHeight: '76vh' }}>
          {TEAM.map((person, i) => (
            <div
              key={person.name}
              className={`relative flex flex-col overflow-hidden
                          border-r last:border-r-0
                          ${person.dark
                    ? 'bg-brand-dark col-span-2 lg:col-span-1 border-brand-green/20'
                    : 'bg-white border-border'
                  }`}
            >
              {/* Green accent strip — top of Bruno only */}
              {person.dark && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green to-emerald-400" />
              )}

              {/* Giant ghost initial — fills bottom-right of column */}
              <span
                className="absolute bottom-0 right-0 font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(7rem, 14vw, 13rem)',
                  lineHeight: 1,
                  transform: 'translate(15%, 12%)',
                  color: person.dark ? 'rgba(163,230,53,0.06)' : 'rgba(12,26,46,0.045)',
                }}
              >
                {person.initial}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-7 lg:p-9 pt-9 lg:pt-11">

                {/* Top: number + role */}
                <div className="mb-6">
                  <span className={`text-[9px] font-bold tracking-[0.35em] block mb-2.5 ${person.dark ? 'text-white/20' : 'text-brand-dark/20'}`}>
                    {person.num}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.18em] leading-snug ${person.dark ? 'text-brand-green/70' : 'text-brand-green'}`}>
                    {person.role}
                  </span>
                </div>

                {/* Name */}
                <h2
                  className={`font-black tracking-tighter leading-[0.9] mb-5 ${person.dark ? 'text-white' : 'text-brand-dark'}`}
                  style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}
                >
                  {person.name}
                </h2>

                {/* Bio */}
                <p className={`text-xs leading-relaxed flex-1 ${person.dark ? 'text-white/35' : 'text-muted'}`}>
                  {person.bio}
                </p>

                {/* Stat */}
                <div className={`mt-8 pt-5 ${person.dark ? 'border-t border-white/[0.08]' : 'border-t border-border'}`}>
                  {person.years ? (
                    <>
                      <p className={`font-black tracking-tighter leading-none ${person.dark ? 'text-brand-green' : 'text-brand-dark'}`}
                        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)' }}>
                        {person.years}
                      </p>
                      <p className={`text-[9px] uppercase tracking-widest mt-1 ${person.dark ? 'text-white/20' : 'text-muted/50'}`}>
                        {person.yearsLabel}
                      </p>
                    </>
                  ) : (
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${person.dark ? 'text-white/12' : 'text-brand-dark/15'}`}>
                      incorporación reciente
                    </span>
                  )}
                </div>

              </div>
            </div>
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
