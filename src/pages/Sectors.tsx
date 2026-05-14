import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CTABand } from '../components/ui/CTABand';
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
      <section className="bg-brand-dark min-h-[62vh] flex items-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-green/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[28rem] font-black text-white/[0.022] select-none pointer-events-none leading-none tracking-tighter pr-4">8</div>
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            A quién servimos
          </span>
          <h1 className="text-6xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-8">
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
      <section className="relative z-10 -mt-10 rounded-[3rem] pt-24 pb-14 px-6 bg-white shadow-[0_0_60px_rgba(0,0,0,0.22)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            El problema no es el precio de la energía. Es controlar, auditar y operar cientos de suministros sin perder el hilo.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="relative z-0 -mt-12 pt-36 pb-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Sectores</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Dónde tenemos experiencia acumulada.
            </h2>
          </div>
          {/* Bento: row 1 = featured (2/3) + card (1/3) · row 2 = 3 equal */}
          <div className="grid lg:grid-cols-3 gap-5">

            {/* Featured — col-span-2, split interior */}
            <div className="lg:col-span-2 rounded-[2rem] p-10 bg-brand-dark relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-[0_30px_80px_rgba(12,26,46,0.3)] flex flex-col gap-6">
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-brand-green/12 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-green/6 rounded-full blur-[60px] pointer-events-none" />
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-2xl font-black tracking-tight text-white">{SECTORS[0].name}</h3>
                {SECTORS[0].ref && (
                  <span className="text-xs text-white/25 bg-white/8 border border-white/10 rounded-full px-3 py-1 flex-shrink-0 mt-1">
                    {SECTORS[0].ref}
                  </span>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-6 relative z-10 flex-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white/35">El problema</p>
                  <p className="text-sm leading-relaxed text-white/55">{SECTORS[0].problem}</p>
                </div>
                <div className="pt-6 sm:pt-0 sm:pl-6 sm:border-l border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-brand-green/70">Qué aportamos</p>
                  <p className="text-sm font-semibold leading-relaxed text-white/85">{SECTORS[0].value}</p>
                </div>
              </div>
            </div>

            {/* Row 1, card 2 */}
            <div className="rounded-[2rem] p-8 bg-white border border-border hover:border-brand-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
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
              <div key={sector.name} className="rounded-[2rem] p-8 bg-white border border-border hover:border-brand-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
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
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Clientes</span>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
              Grandes clientes retail que confían en REDUCE.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-3 font-medium">
              Llevamos desde 2012 gestionando la energía de estructuras multisede. Estos clientes han confiado en nosotros año tras año.
            </p>
            <p className="text-white/30 text-sm italic">
              Logos sujetos a autorización expresa de cada cliente.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {CLIENTS.map((c) => (
              <div key={c.name} className="glass-dark border border-white/10 rounded-2xl p-5 flex items-center justify-center hover:border-white/25 transition-colors">
                <img src={c.logo} alt={c.name} className="h-9 w-auto object-contain opacity-40 grayscale brightness-200 hover:opacity-70 transition-opacity" />
              </div>
            ))}
            <div className="glass-dark border border-dashed border-white/15 rounded-2xl p-5 flex items-center justify-center">
              <p className="text-white/30 text-xs text-center font-medium">STL, Bico de Xeado y otros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit check */}
      <section className="py-24 px-6 bg-brand-light">
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
                className={`flex items-start gap-4 rounded-2xl px-6 py-5 hover:-translate-y-0.5 transition-all ${
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
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-mid hover:shadow-lg transition-all"
          >
            Hablar de mi caso <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
