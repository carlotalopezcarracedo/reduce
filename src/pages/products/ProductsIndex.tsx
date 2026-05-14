import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CTABand } from '../../components/ui/CTABand';
import { PRODUCTS } from '../../data/content';

export function ProductsIndex() {
  return (
    <>
      <Helmet>
        <title>Productos | REDUCE</title>
        <meta name="description" content="Auditoría de contratos indexados, concursos energéticos, control multisede y operativa retail internacional. Lo que hace REDUCE." />
        <link rel="canonical" href="https://reduce.es/productos" />
        <meta property="og:title" content="Productos | REDUCE" />
        <meta property="og:description" content="Auditoría de contratos indexados, concursos energéticos, control multisede y operativa retail internacional. Lo que hace REDUCE." />
        <meta property="og:url" content="https://reduce.es/productos" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark min-h-[62vh] flex items-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-green/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/4 rounded-full blur-[200px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/4 rounded-full blur-[160px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            Lo que hacemos
          </span>
          <h1 className="text-6xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-8">
            Cuatro formas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              de intervenir.
            </span>
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Cada producto responde a un problema concreto. Sin promesas de ahorro sin base. Sin porcentajes inventados.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 -mt-10 rounded-t-[3rem] pt-[8.5rem] pb-24 px-6 bg-brand-light shadow-[0_-2px_40px_rgba(0,0,0,0.18)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/productos/${p.slug}`}
              className={`group rounded-[2rem] p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                p.star
                  ? 'bg-brand-dark shadow-2xl hover:shadow-[0_30px_80px_rgba(12,26,46,0.3)]'
                  : 'bg-white border border-border hover:border-brand-dark hover:shadow-xl'
              }`}
            >
              {p.star && (
                <>
                  <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                  <div className="absolute -right-4 -bottom-8 text-[220px] font-black text-white/[0.02] select-none pointer-events-none leading-none">★</div>
                </>
              )}

              <div className="flex items-start justify-between relative z-10">
                {p.star ? (
                  <span className="inline-flex items-center gap-1.5 bg-brand-green text-brand-dark text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                    Producto estrella
                  </span>
                ) : (
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-green">
                    Producto {String(i).padStart(2, '0')}
                  </span>
                )}
                <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${p.star ? 'text-brand-green' : 'text-brand-dark'}`} />
              </div>

              <div className="relative z-10">
                <h2 className={`text-3xl font-black tracking-tight mb-3 ${p.star ? 'text-white' : 'text-brand-dark'}`}>
                  {p.name}
                </h2>
                <p className={`text-sm font-semibold italic mb-4 ${p.star ? 'text-brand-green' : 'text-muted'}`}>
                  "{p.tagline}"
                </p>
                <p className={`text-sm leading-relaxed ${p.star ? 'text-white/55' : 'text-muted'}`}>
                  {p.description}
                </p>
              </div>

              <div className={`pt-4 border-t relative z-10 ${p.star ? 'border-white/10' : 'border-border'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${p.star ? 'text-white/25' : 'text-muted/50'}`}>No es</p>
                <p className={`text-xs ${p.star ? 'text-white/35' : 'text-muted/80'}`}>{p.isNot}</p>
              </div>

              <div className={`flex items-center gap-2 text-sm font-bold relative z-10 transition-colors ${
                p.star ? 'text-brand-green' : 'text-brand-dark group-hover:text-brand-green'
              }`}>
                {p.cta} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
