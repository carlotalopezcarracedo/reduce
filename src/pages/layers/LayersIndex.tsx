import { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CTABand } from '../../components/ui/CTABand';
import { LAYERS } from '../../data/content';

export function LayersIndex() {
  const [activeId, setActiveId] = useState<string>(LAYERS[0].id);

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
      <section className="bg-brand-dark min-h-[50vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/12 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            Metodología
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-6 lg:mb-8">
            El modelo<br />de las{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              5 capas.
            </span>
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            La gestión energética no es una sola disciplina. Son cinco capas que deben funcionar coordinadas. REDUCE opera en todas ellas.
          </p>
        </div>
      </section>

      {/* Statement */}
      <section className="relative z-10 -mt-10 rounded-[3rem] py-12 px-6 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.12)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            La energía no se gestiona solo comprando mejor. Se controla, se audita, se opera y se hace trazable.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            La mayoría de consultoras solo actúan en la capa A. REDUCE cubre las cinco, que es donde reside el control real.
          </p>
        </div>
      </section>

      {/* Layer accordion */}
      <section className="relative z-0 -mt-12 pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto space-y-2">
          {LAYERS.map((layer) => {
            const isActive = layer.id === activeId;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveId(layer.id)}
                className={`cursor-pointer rounded-[1.75rem] overflow-hidden transition-[background-color,box-shadow,border-color] duration-200 relative ${
                  isActive
                    ? 'bg-brand-dark shadow-[0_24px_80px_rgba(12,26,46,0.4)]'
                    : 'bg-white border border-border hover:border-brand-dark/30 hover:shadow-md'
                }`}
              >
                {/* Active: green accent line on top */}
                {isActive && (
                  <div className="h-[3px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent" />
                )}

                {/* Active: large decorative background letter */}
                {isActive && (
                  <div className="absolute right-8 bottom-0 text-[14rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter translate-y-4">
                    {layer.id}
                  </div>
                )}

                {/* Header row */}
                <div className="flex items-center gap-5 px-8 py-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl transition-[background-color,box-shadow,color] duration-200 ${
                    isActive
                      ? 'bg-brand-green text-brand-dark shadow-[0_0_24px_rgba(163,230,53,0.45)]'
                      : 'bg-brand-light border border-border text-brand-dark'
                  }`}>
                    {layer.id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-white/30' : 'text-muted'}`}>
                        Capa {layer.id}
                      </span>
                      {layer.id === 'A' && (
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isActive ? 'bg-brand-green text-brand-dark' : 'bg-brand-dark text-brand-green'}`}>
                          Core
                        </span>
                      )}
                      {layer.honestNote && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${isActive ? 'bg-white/8 border-white/10 text-white/40' : 'bg-brand-light border-border text-muted'}`}>
                          Con partners
                        </span>
                      )}
                    </div>
                    <h2 className={`text-xl font-black tracking-tight leading-tight ${isActive ? 'text-white' : 'text-brand-dark'}`}>
                      {layer.title}
                    </h2>
                    {!isActive && (
                      <p className="text-sm italic text-muted mt-0.5 truncate">"{layer.tagline}"</p>
                    )}
                  </div>

                  {!isActive && (
                    <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                      {layer.topics.slice(0, 2).map((t) => (
                        <span key={t} className="text-xs bg-brand-light border border-border text-muted px-3 py-1.5 rounded-full whitespace-nowrap">
                          {t}
                        </span>
                      ))}
                      {layer.topics.length > 2 && (
                        <span className="text-xs text-muted font-medium">+{layer.topics.length - 2}</span>
                      )}
                    </div>
                  )}

                  <ChevronRight className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'rotate-90 text-brand-green' : 'text-muted'
                  }`} />
                </div>

                {/* Expanded content */}
                {isActive && (
                  <div className="px-5 sm:px-8 pb-8 sm:pb-10 border-t border-white/[0.07] relative z-10">
                    <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 pt-6 sm:pt-8">

                      {/* Left: tagline + description + CTA */}
                      <div className="space-y-5">
                        <div className="border-l-[3px] border-brand-green pl-5">
                          <p className="text-brand-green font-bold italic text-xl leading-snug">
                            "{layer.tagline}"
                          </p>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{layer.intro}</p>
                        {layer.honestNote && (
                          <p className="text-white/25 text-xs italic border-l-2 border-white/10 pl-3">{layer.honestNote}</p>
                        )}
                        <Link
                          to={`/modelo/${layer.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-brand-green font-bold text-sm hover:gap-3 transition-[gap,opacity] duration-200"
                        >
                          Ver capa completa <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right: topics as mini-cards grid */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/25 mb-4">Áreas de trabajo</p>
                        <div className="grid grid-cols-2 gap-2">
                          {layer.topics.map((t) => (
                            <div key={t} className="flex items-start gap-2.5 bg-white/[0.06] border border-white/[0.08] rounded-xl px-3.5 py-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1" />
                              <span className="text-white/65 text-xs font-medium leading-snug">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
