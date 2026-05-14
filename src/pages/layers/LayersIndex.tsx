import { ChevronRight, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CTABand } from '../../components/ui/CTABand';
import { LAYERS } from '../../data/content';

export function LayersIndex() {
  return (
    <>
      <Helmet>
        <title>Modelo de 5 Capas | REDUCE</title>
        <meta name="description" content="El modelo estructural de REDUCE: compra, control de facturación, operativa retail, eficiencia y reporting. Cinco capas para gestionar la energía multisede." />
        <link rel="canonical" href="https://reduce.es/modelo" />
        <meta property="og:title" content="Modelo de 5 Capas | REDUCE" />
        <meta property="og:description" content="El modelo estructural de REDUCE: compra, control de facturación, operativa retail, eficiencia y reporting. Cinco capas para gestionar la energía multisede." />
        <meta property="og:url" content="https://reduce.es/modelo" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark min-h-[72vh] flex items-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-green/8 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-6 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
              Metodología
            </span>
            <h1 className="text-5xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.95] mb-6">
              El modelo<br />de las{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                5 capas.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-lg font-medium">
              La gestión energética no es una sola disciplina. Son cinco capas que deben funcionar coordinadas. REDUCE opera en todas ellas.
            </p>
          </div>

          {/* Visual: layer stack */}
          <div className="hidden lg:flex flex-col gap-2">
            {LAYERS.map((layer, i) => (
              <div key={layer.id} className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all ${
                i === 0
                  ? 'bg-brand-green/12 border-brand-green/35 shadow-[0_0_30px_rgba(163,230,53,0.08)]'
                  : 'bg-white/[0.025] border-white/[0.05]'
              }`}>
                <span className={`text-xl font-black w-7 text-center flex-shrink-0 ${i === 0 ? 'text-brand-green' : 'text-white/20'}`}>
                  {layer.id}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`font-bold text-sm leading-tight ${i === 0 ? 'text-white' : 'text-white/35'}`}>{layer.title}</p>
                  <p className={`text-xs mt-0.5 truncate ${i === 0 ? 'text-white/45' : 'text-white/18'}`}>{layer.tagline}</p>
                </div>
                {i === 0 && (
                  <span className="text-[10px] bg-brand-green text-brand-dark font-black px-2 py-0.5 rounded-full flex-shrink-0 tracking-wide">CORE</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="relative z-10 -mt-10 rounded-[3rem] pt-24 pb-14 px-6 bg-white shadow-[0_0_60px_rgba(0,0,0,0.22)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            La energía no se gestiona solo comprando mejor. Se controla, se audita, se opera y se hace trazable.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            La mayoría de consultoras solo actúan en la capa A. REDUCE cubre las cinco, que es donde reside el control real.
          </p>
        </div>
      </section>

      {/* Layer bento grid */}
      <section className="relative z-0 -mt-12 pt-36 pb-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5">

          {/* Card A — featured col-span-2 */}
          <Link to={`/modelo/${LAYERS[0].slug}`} className="group lg:col-span-2 rounded-[2rem] p-10 bg-brand-dark relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-[0_30px_80px_rgba(12,26,46,0.35)] flex flex-col gap-8">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute -right-4 -bottom-6 text-[220px] font-black text-white/[0.03] select-none pointer-events-none leading-none">A</div>

            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-white/35">Capa A</span>
                <span className="text-xs font-black bg-brand-green text-brand-dark px-3 py-1 rounded-full">Principal especialización</span>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>

            <div className="grid sm:grid-cols-2 gap-8 relative z-10 flex-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-black tracking-tighter text-white leading-tight">{LAYERS[0].title}</h2>
                <p className="text-brand-green/80 text-sm font-semibold italic leading-relaxed">"{LAYERS[0].tagline}"</p>
                <p className="text-white/45 text-sm leading-relaxed">{LAYERS[0].intro.slice(0, 120)}…</p>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-white/25">Áreas de trabajo</p>
                <div className="flex flex-wrap gap-2">
                  {LAYERS[0].topics.map((t) => (
                    <span key={t} className="text-xs bg-white/8 border border-white/12 text-white/55 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Card B */}
          <Link to={`/modelo/${LAYERS[1].slug}`} className="group rounded-[2rem] p-8 bg-white border border-border hover:border-brand-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col gap-5">
            <div className="absolute -right-2 -bottom-4 text-[130px] font-black text-brand-dark/[0.04] select-none pointer-events-none leading-none">B</div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-muted">Capa B</span>
              <ArrowRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col gap-3">
              <h2 className="text-2xl font-black tracking-tighter text-brand-dark">{LAYERS[1].title}</h2>
              <p className="text-sm italic font-medium text-muted">"{LAYERS[1].tagline}"</p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {LAYERS[1].topics.slice(0, 3).map((t) => (
                <span key={t} className="text-xs bg-brand-light border border-border text-muted px-3 py-1.5 rounded-full">{t}</span>
              ))}
              {LAYERS[1].topics.length > 3 && (
                <span className="text-xs bg-brand-light border border-border text-muted px-3 py-1.5 rounded-full">+{LAYERS[1].topics.length - 3} más</span>
              )}
            </div>
          </Link>

          {/* Cards C, D, E */}
          {LAYERS.slice(2).map((layer) => (
            <Link key={layer.id} to={`/modelo/${layer.slug}`} className="group rounded-[2rem] p-8 bg-white border border-border hover:border-brand-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col gap-5">
              <div className="absolute -right-2 -bottom-4 text-[130px] font-black text-brand-dark/[0.04] select-none pointer-events-none leading-none">{layer.id}</div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted">Capa {layer.id}</span>
                  {layer.honestNote && (
                    <span className="text-[10px] font-bold bg-brand-light border border-border text-muted px-2 py-0.5 rounded-full">Con partners</span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="relative z-10 flex-1 flex flex-col gap-3">
                <h2 className="text-2xl font-black tracking-tighter text-brand-dark">{layer.title}</h2>
                <p className="text-sm italic font-medium text-muted">"{layer.tagline}"</p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {layer.topics.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs bg-brand-light border border-border text-muted px-3 py-1.5 rounded-full">{t}</span>
                ))}
                {layer.topics.length > 3 && (
                  <span className="text-xs bg-brand-light border border-border text-muted px-3 py-1.5 rounded-full">+{layer.topics.length - 3} más</span>
                )}
              </div>
            </Link>
          ))}

        </div>
      </section>

      <CTABand />
    </>
  );
}
