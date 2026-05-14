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
      <section className="py-14 px-6 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            La energía no se gestiona solo comprando mejor. Se controla, se audita, se opera y se hace trazable.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            La mayoría de consultoras solo actúan en la capa A. REDUCE cubre las cinco, que es donde reside el control real.
          </p>
        </div>
      </section>

      {/* Layer list */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto space-y-4">
          {LAYERS.map((layer, index) => (
            <Link
              key={layer.id}
              to={`/modelo/${layer.slug}`}
              className={`group flex flex-col md:flex-row md:items-center gap-6 rounded-[2rem] p-8 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden ${
                index === 0
                  ? 'bg-brand-dark hover:shadow-[0_20px_60px_rgba(12,26,46,0.25)]'
                  : 'bg-white border border-border hover:border-brand-dark hover:shadow-xl'
              }`}
            >
              {index === 0 && (
                <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              )}

              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                index === 0
                  ? 'bg-brand-green group-hover:scale-110'
                  : 'bg-brand-dark group-hover:bg-brand-green'
              }`}>
                <span className={`text-2xl font-black transition-colors ${
                  index === 0 ? 'text-brand-dark' : 'text-brand-green group-hover:text-brand-dark'
                }`}>
                  {layer.id}
                </span>
              </div>

              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-widest ${index === 0 ? 'text-white/40' : 'text-muted'}`}>
                    Capa {layer.id}
                  </span>
                  {index === 0 && (
                    <span className="text-xs font-bold bg-brand-green text-brand-dark px-2 py-0.5 rounded-full">
                      Principal especialización
                    </span>
                  )}
                  {layer.honestNote && (
                    <span className="text-xs font-bold bg-white/10 text-white/50 px-2 py-0.5 rounded-full">Con partners</span>
                  )}
                </div>
                <h2 className={`text-2xl font-black tracking-tight ${index === 0 ? 'text-white' : 'text-brand-dark'}`}>
                  {layer.title}
                </h2>
                <p className={`text-sm mt-1 italic font-medium ${index === 0 ? 'text-white/50' : 'text-muted'}`}>
                  "{layer.tagline}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-xs relative z-10">
                {layer.topics.slice(0, 3).map((t) => (
                  <span key={t} className={`text-xs px-3 py-1 rounded-full ${
                    index === 0
                      ? 'bg-white/10 text-white/60 border border-white/15'
                      : 'bg-brand-light border border-border text-muted'
                  }`}>
                    {t}
                  </span>
                ))}
                {layer.topics.length > 3 && (
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    index === 0 ? 'bg-white/10 text-white/60 border border-white/15' : 'bg-brand-light border border-border text-muted'
                  }`}>
                    +{layer.topics.length - 3} más
                  </span>
                )}
              </div>

              <ArrowRight className={`w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-all relative z-10 ${
                index === 0 ? 'text-brand-green' : 'text-muted group-hover:text-brand-dark'
              }`} />
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
