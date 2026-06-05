import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CTABand } from '../components/ui/CTABand';
import { LogoReel } from '../components/ui/LogoReel';
import { SECTORS, CLIENTS } from '../data/content';

export function Sectors() {
  return (
    <>
      <Helmet>
        <title>Sectores | REDUCE</title>
        <meta name="description" content="Empresas retail, perfumerías y superficies con operaciones multisede. Control energético centralizado desde 2012." />
        <link rel="canonical" href="https://reduce.es/sectores" />
        <meta property="og:title" content="Sectores | REDUCE" />
        <meta property="og:description" content="Empresas retail, perfumerías y superficies con operaciones multisede. Control energético centralizado desde 2012." />
        <meta property="og:url" content="https://reduce.es/sectores" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark min-h-[50vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
        {/* Cross-hatch pattern — distinct from other pages */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-green/16 rounded-full blur-[130px] translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            A quién servimos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-6 lg:mb-8">
            Sectores con<br />operaciones{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              multisede.
            </span>
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-10">
            No trabajamos con todo tipo de cliente. Solo con empresas que tienen decenas o cientos de suministros y necesidad real de control energético.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[{ num: '+12', label: 'años operando' }, { num: '8', label: 'territorios' }, { num: '5', label: 'sectores activos' }].map((s) => (
              <div key={s.num} className="text-center">
                <p className="text-3xl font-black text-brand-green tracking-tighter">{s.num}</p>
                <p className="text-white/35 text-xs font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="relative z-10 -mt-10 rounded-[3rem] py-12 px-6 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.12)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            El problema no es el precio de la energía. Es controlar, auditar y operar cientos de suministros sin perder el hilo.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="relative z-0 -mt-12 pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Sectores</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Dónde tenemos experiencia acumulada.
            </h2>
          </div>
          {/* Bento: row 1 = featured (2/3) + card (1/3) · row 2 = 3 equal */}
          <div className="grid lg:grid-cols-3 gap-5">

            {/* Featured — col-span-2, dramatic dark treatment */}
            <div className="lg:col-span-2 rounded-[2rem] p-8 lg:p-12 bg-brand-dark relative overflow-hidden lift hover:shadow-[0_30px_80px_rgba(12,26,46,0.5)] flex flex-col gap-8">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent rounded-t-[2rem]" />
              <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white leading-tight">{SECTORS[0].name}</h3>
                {SECTORS[0].ref && (
                  <span className="text-[11px] text-white/20 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1.5 flex-shrink-0 font-medium">
                    {SECTORS[0].ref}
                  </span>
                )}
              </div>

              {/* Problem / Value split */}
              <div className="grid sm:grid-cols-2 gap-0 relative z-10 flex-1">
                <div className="pr-6 sm:border-r border-white/[0.08]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3 text-white/25">El problema</p>
                  <p className="text-sm leading-relaxed text-white/50">{SECTORS[0].problem}</p>
                </div>
                <div className="pt-6 sm:pt-0 sm:pl-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3 text-brand-green/60">Qué aportamos</p>
                  <p className="text-sm font-semibold leading-relaxed text-white/80">{SECTORS[0].value}</p>
                </div>
              </div>
            </div>

            {/* Row 1, card 2 */}
            <div className="rounded-[2rem] p-8 bg-white border border-border shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:border-brand-dark/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] lift flex flex-col gap-5">
              <h3 className="text-xl font-black tracking-tight text-brand-dark">{SECTORS[1].name}</h3>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-muted/60">El problema</p>
                <p className="text-sm leading-relaxed text-muted">{SECTORS[1].problem}</p>
              </div>
              <div className="pt-5 border-t border-border mt-auto">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-brand-green/80">Qué aportamos</p>
                <p className="text-sm font-semibold leading-relaxed text-brand-dark">{SECTORS[1].value}</p>
              </div>
            </div>

            {/* Row 2 — 3 equal cards */}
            {SECTORS.slice(2).map((sector) => (
              <div key={sector.name} className="rounded-[2rem] p-8 bg-white border border-border hover:border-brand-dark hover:shadow-xl lift flex flex-col gap-5">
                <h3 className="text-xl font-black tracking-tight text-brand-dark">{sector.name}</h3>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-muted/60">El problema</p>
                  <p className="text-sm leading-relaxed text-muted">{sector.problem}</p>
                </div>
                <div className="pt-5 border-t border-border mt-auto">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-brand-green/80">Qué aportamos</p>
                  <p className="text-sm font-semibold leading-relaxed text-brand-dark">{sector.value}</p>
                  {sector.ref && (
                    <p className="text-xs text-muted/50 mt-3">Ref: {sector.ref}</p>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 lg:py-32 px-6 bg-brand-dark grain-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(163,230,53,0.09) 0%, transparent 55%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-green/60 font-semibold tracking-[0.2em] uppercase text-[11px] mb-5 block">Clientes</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter leading-tight mb-4">
              Grandes clientes retail que confían en REDUCE.
            </h2>
            <p className="text-white/35 text-base leading-relaxed">
              Llevamos desde 2012 gestionando la energía de estructuras multisede. Estos clientes han confiado en nosotros año tras año.
            </p>
          </div>

          {/* Logo reel in a premium container */}
          <div className="max-w-lg mx-auto rounded-[2rem] overflow-hidden border border-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]" style={{background: 'rgba(255,255,255,0.03)'}}>
            <LogoReel logos={CLIENTS} bgColor="rgba(12,26,46,0)" />
          </div>

          <p className="text-center text-white/20 text-xs mt-6 italic">
            Logos sujetos a autorización expresa de cada cliente.
          </p>
        </div>
      </section>

      {/* Fit check */}
      <section className="py-16 lg:py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">¿Encajamos?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              REDUCE es para ti si…
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'Tienes 20 o más puntos de suministro activos',
              'Operas en más de una localización o territorio',
              'Tienes contratos indexados que nadie en tu equipo puede explicarte del todo',
              'Necesitas control centralizado de tu energía, no solo facturas',
              'Tu expansión retail pasa por múltiples países o territorios',
              'Recibes facturas y no puedes verificar si son correctas',
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-4 rounded-2xl px-6 py-5 hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 ${
                  i === 0
                    ? 'bg-brand-dark border border-brand-dark shadow-lg'
                    : 'bg-white border border-border hover:border-brand-dark hover:shadow-md'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                <p className={`text-sm font-semibold ${i === 0 ? 'text-white' : 'text-brand-dark'}`}>{item}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-mid hover:shadow-lg transition-[background-color,box-shadow] duration-200 active:scale-[0.97]"
          >
            Hablar de mi caso <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
