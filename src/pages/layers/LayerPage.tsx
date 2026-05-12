import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { CTABand } from '../../components/ui/CTABand';
import { LAYERS } from '../../data/content';

export function LayerPage() {
  const { slug } = useParams<{ slug: string }>();
  const layer = LAYERS.find((l) => l.slug === slug);

  if (!layer) return <Navigate to="/modelo" replace />;

  const currentIndex = LAYERS.findIndex((l) => l.slug === slug);
  const prev = currentIndex > 0 ? LAYERS[currentIndex - 1] : null;
  const next = currentIndex < LAYERS.length - 1 ? LAYERS[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/10 rounded-full blur-[130px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/modelo"
            className="inline-flex items-center gap-2 text-white/35 hover:text-white/70 text-sm font-semibold mb-10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Modelo de las 5 capas
          </Link>

          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.3)]">
              <span className="text-2xl font-black text-brand-dark">{layer.id}</span>
            </div>
            <div>
              <p className="text-white/35 text-xs font-bold uppercase tracking-widest">Capa {layer.id} · Modelo de trabajo</p>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.02] mb-4 max-w-4xl">
            {layer.title}
          </h1>
          <p className="text-brand-green text-xl font-semibold italic mb-6">"{layer.tagline}"</p>
          <p className="text-white/55 text-xl leading-relaxed max-w-2xl font-medium">{layer.intro}</p>
        </div>
      </section>

      {/* Honest note */}
      {layer.honestNote && (
        <section className="py-8 px-6 bg-brand-mid border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/55 text-sm leading-relaxed max-w-3xl">
              <span className="text-brand-green font-bold">Nota de honestidad: </span>
              {layer.honestNote}
            </p>
          </div>
        </section>
      )}

      {/* Key messages */}
      {layer.messages.length > 0 && (
        <section className="py-20 px-6 bg-white border-b border-border">
          <div className="max-w-3xl mx-auto space-y-5">
            {layer.messages.map((msg) => (
              <div key={msg} className="border-l-4 border-brand-green pl-8">
                <p className="text-2xl font-bold text-brand-dark leading-snug">{msg}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Topics grid */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Qué cubrimos</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Áreas de intervención en capa {layer.id}.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {layer.topics.map((topic, i) => (
              <div
                key={topic}
                className={`rounded-2xl px-5 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  i === 0
                    ? 'bg-brand-dark text-brand-green border border-brand-dark'
                    : 'bg-white border border-border text-brand-dark hover:border-brand-dark hover:shadow-md'
                }`}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other layers */}
      <section className="py-20 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-mid pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-8">Otras capas del modelo</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LAYERS.filter((l) => l.slug !== slug).map((l) => (
              <Link
                key={l.id}
                to={`/modelo/${l.slug}`}
                className="glass-dark border border-white/10 rounded-2xl px-5 py-5 hover:border-white/25 hover:-translate-y-0.5 transition-all group flex items-center gap-4"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                  {l.id}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{l.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-8 px-6 bg-brand-light border-t border-border">
        <div className="max-w-7xl mx-auto flex justify-between gap-4">
          {prev ? (
            <Link to={`/modelo/${prev.slug}`} className="flex items-center gap-3 text-muted hover:text-brand-dark font-semibold text-sm transition-colors">
              <ChevronLeft className="w-4 h-4" /> Capa {prev.id}: {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/modelo/${next.slug}`} className="flex items-center gap-3 text-muted hover:text-brand-dark font-semibold text-sm transition-colors">
              Capa {next.id}: {next.title} <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Button to="/productos" size="sm" arrow>Ver productos</Button>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
