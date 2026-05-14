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
      <section className="bg-brand-dark min-h-[62vh] flex items-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-green/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[32rem] font-black text-white/[0.022] select-none pointer-events-none leading-none tracking-tighter pr-8">5</div>
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            Metodología
          </span>
          <h1 className="text-6xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-8">
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

      {/* Layer accordion */}
      <section className="relative z-0 -mt-12 pt-36 pb-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto space-y-2">
          {LAYERS.map((layer) => {
            const isActive = layer.id === activeId;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveId(layer.id)}
                className={`cursor-pointer rounded-[1.75rem] overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-dark shadow-[0_20px_60px_rgba(12,26,46,0.3)]'
                    : 'bg-white border border-border hover:border-brand-dark/30 hover:shadow-md'
                }`}
              >
                {/* Header row — always visible */}
                <div className="flex items-center gap-5 px-8 py-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-300 ${
                    isActive ? 'bg-brand-green text-brand-dark' : 'bg-brand-light border border-border text-brand-dark'
                  }`}>
                    {layer.id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
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
                  <div className="px-8 pb-8 border-t border-white/8">
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                      <div className="space-y-4">
                        <p className="text-brand-green font-semibold italic text-lg leading-snug">
                          "{layer.tagline}"
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed">{layer.intro}</p>
                        {layer.honestNote && (
                          <p className="text-white/25 text-xs italic border-l-2 border-white/10 pl-3">{layer.honestNote}</p>
                        )}
                      </div>
                      <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/25">Áreas de trabajo</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.topics.map((t) => (
                            <span key={t} className="text-xs bg-white/8 border border-white/12 text-white/60 px-3 py-1.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/modelo/${layer.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-brand-green font-bold text-sm hover:gap-3 transition-all mt-2"
                        >
                          Ver capa completa <ArrowRight className="w-4 h-4" />
                        </Link>
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
