import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CTABand } from '../components/ui/CTABand';
import { LogoMarquee, LogoReel } from '../components/ui/LogoReel';
import { LAYERS, PRODUCTS, CLIENTS, TERRITORIES, KEY_MESSAGES } from '../data/content';

export function Home() {
  const [activeId, setActiveId] = useState(LAYERS[0].id);
  const active = LAYERS.find((l) => l.id === activeId)!;

  const [counts, setCounts] = useState({ years: 0, terr: 0, layers: 0 });
  useEffect(() => {
    const targets = [12, 8, 5];
    const total = 50;
    let step = 0;
    const id = setInterval(() => {
      step++;
      const t = step / total;
      const e = 1 - Math.pow(1 - t, 3);
      setCounts({ years: Math.round(targets[0] * e), terr: Math.round(targets[1] * e), layers: Math.round(targets[2] * e) });
      if (step >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, []);;

  return (
    <>
      <Helmet>
        <title>REDUCE | Control, Auditoría y Gestión Energética Multisede</title>
        <meta name="description" content="Estructura independiente de control, auditoría y gestión energética para operaciones multisede. Operando desde 2012 en España, Portugal, Italia y Andorra." />
        <link rel="canonical" href="https://reduce.es/" />
        <meta property="og:title" content="REDUCE | Control, Auditoría y Gestión Energética Multisede" />
        <meta property="og:description" content="Estructura independiente de control, auditoría y gestión energética para operaciones multisede. Operando desde 2012 en España, Portugal, Italia y Andorra." />
        <meta property="og:url" content="https://reduce.es/" />
      </Helmet>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-0 px-6 bg-brand-dark overflow-hidden">
        {/* Gradient mesh — multi-point, no rotation, more premium than spinning orb */}
        <div className="absolute inset-0 pointer-events-none" style={{background: [
          'radial-gradient(ellipse 70% 60% at 8% 80%, rgba(163,230,53,0.24) 0%, transparent 58%)',
          'radial-gradient(ellipse 50% 65% at 92% 10%, rgba(163,230,53,0.10) 0%, transparent 52%)',
          'radial-gradient(ellipse 35% 30% at 55% 100%, rgba(163,230,53,0.06) 0%, transparent 55%)',
        ].join(', ')}} />
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[55fr_45fr] gap-10 xl:gap-16 items-center lg:py-24">

          {/* ── Left ── */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-green/25 bg-brand-green/[0.07] text-brand-green text-xs font-bold tracking-wide mb-8"
              style={{animation: 'fade-up 0.5s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.1s'}}>
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green" />
              </span>
              Estructura independiente · Operando desde 2012
            </div>

            <h1 className="text-[2.6rem] sm:text-[3.8rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white tracking-tighter leading-[0.87] mb-8"
              style={{animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.2s'}}>
              La energía multisede,{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #a3e635, #86efac, #34d399, #a3e635)',
                  backgroundSize: '250% 100%',
                  animation: 'gradient-x 5s ease infinite',
                }}
              >
                bajo control total.
              </span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-md font-medium mb-10"
              style={{animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.35s'}}>
              Auditamos, operamos y hacemos trazable la energía de empresas retail con decenas o cientos de suministros. Sin vender ni un kWh.
            </p>

            <div className="flex flex-wrap gap-3 mb-12"
              style={{animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.48s'}}>
              <Button to="/contacto" size="lg" arrow className="shadow-[0_0_35px_rgba(163,230,53,0.35)] hover:shadow-[0_0_55px_rgba(163,230,53,0.55)] hover:scale-[1.02]">
                Analizar mi situación
              </Button>
              <Button to="/modelo" variant="outline-light" size="lg">
                El modelo de las 5 capas <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2 items-center pt-7 border-t border-white/[0.07]"
              style={{animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.62s'}}>
              {[
                { num: `+${counts.years}`, label: 'años' },
                { num: String(counts.terr), label: 'territorios' },
                { num: String(counts.layers), label: 'capas de gestión' },
                { num: '100%', label: 'independencia' },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-brand-green font-black text-xl tracking-tighter">{s.num}</span>
                  <span className="text-white/30 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="hidden lg:flex flex-col rounded-[2rem] overflow-hidden border border-white/[0.09] min-h-[480px] shadow-[0_0_120px_rgba(0,0,0,0.6),0_0_60px_rgba(163,230,53,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]"
            style={{background: 'rgba(255,255,255,0.035)', animation: 'fade-up 0.55s cubic-bezier(0.23,1,0.32,1) both', animationDelay: '0.5s'}}>
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]" style={{background: 'rgba(255,255,255,0.02)'}}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_rgba(163,230,53,1)]" />
                <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase">Auditoría activa</span>
              </div>
              <span className="text-white/15 text-[10px] font-bold tracking-widest">REDUCE</span>
            </div>

            {/* Main metric + sparkline */}
            <div className="px-6 pt-6 pb-5 border-b border-white/[0.07]">
              <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] mb-3">Suministros bajo control</p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-end gap-2">
                    <span className="text-[3.5rem] font-black text-white tracking-tighter leading-none">247</span>
                    <span className="text-brand-green font-bold text-base mb-1.5">CUPS</span>
                  </div>
                  <p className="text-white/20 text-xs mt-1 tracking-widest">ES · PT · IT · AD</p>
                </div>
                {/* Sparkline bars — decorative */}
                <div className="flex items-end gap-[3px] pb-1">
                  {[40, 55, 45, 70, 60, 80, 65, 85, 75, 92].map((h, i) => (
                    <div key={i} className="w-[5px] rounded-t-[2px] transition-all"
                      style={{
                        height: `${h * 0.45}px`,
                        background: i === 9 ? '#a3e635' : `rgba(163,230,53,${0.12 + i * 0.03})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Audit checks */}
            <div className="px-6 py-2 flex-1">
              {[
                { label: 'Contratos indexados', ok: true },
                { label: 'Control de facturación', ok: true },
                { label: 'Perfilado y REE', ok: false },
                { label: 'Energía reactiva', ok: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3.5 border-b border-white/[0.05] last:border-0">
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.ok ? 'bg-brand-green shadow-[0_0_6px_rgba(163,230,53,0.7)]' : 'bg-amber-400'}`} />
                    <span className="text-white/55 text-sm">{item.label}</span>
                  </div>
                  <span className={`text-[11px] font-black tracking-wide ${item.ok ? 'text-brand-green' : 'text-amber-400'}`}>
                    {item.ok ? 'OK' : 'REV'}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-brand-green/15 flex items-center justify-between" style={{background: 'rgba(163,230,53,0.05)'}}>
              <p className="text-brand-green/70 text-xs font-semibold">Próxima revisión en 7 días</p>
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-brand-green/40" />)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="relative z-0 bg-brand-dark px-0 pb-14 pt-0 sm:pb-16">
        <LogoMarquee logos={CLIENTS} />
      </section>

      {/* ── POSICIONAMIENTO ───────────────────────────────────────────────── */}
      <section className="relative z-10 -mt-10 rounded-[3rem] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.14)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: statement — big editorial */}
          <div>
            <div className="w-8 h-[3px] bg-brand-green rounded-full mb-8" />
            <p className="text-[1.9rem] lg:text-[2.4rem] font-black text-brand-dark leading-[1.08] tracking-tight">
              Somos la capa técnica independiente entre la energía y la operación del cliente.
            </p>
          </div>
          {/* Right: 3 puntos — as numbered list with more weight */}
          <div className="space-y-0 divide-y divide-border">
            {[
              'No vendemos energía: somos independientes de cualquier comercializadora.',
              'Controlamos, auditamos y hacemos trazable la energía de estructuras multisede.',
              'Infraestructura técnica propia para reproducir y validar cada factura.',
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start py-5">
                <span className="text-brand-green font-black text-base flex-shrink-0 mt-0.5 w-6 leading-none">0{i + 1}</span>
                <p className="text-brand-dark/65 text-[15px] leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELO 5 CAPAS ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-32 px-6 grain-dark" style={{background: 'linear-gradient(160deg, #0c1a2e 0%, #152741 50%, #0c1a2e 100%)'}}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-end mb-10 lg:mb-14">
            <div className="flex-1">
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Modelo de trabajo</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white leading-[1.05]">
                Las{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                  5 capas
                </span>{' '}
                del control energético.
              </h2>
            </div>
            <p className="flex-1 max-w-md text-white/45 text-lg leading-relaxed">
              La gestión energética no es una sola disciplina. Son cinco capas coordinadas. REDUCE opera en todas ellas.
            </p>
          </div>

          {/* Interactive panel */}
          <div className="grid lg:grid-cols-5 gap-4 items-stretch">

            {/* Left: layer tabs */}
            <div className="lg:col-span-2 flex flex-col gap-2">
              {LAYERS.map((layer) => {
                const isActive = activeId === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveId(layer.id)}
                    className={`group w-full flex items-center gap-5 px-7 py-5 rounded-[1.5rem] text-left transition-[transform,background-color,box-shadow,border-color] duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-brand-green shadow-[0_8px_40px_rgba(163,230,53,0.3)]'
                        : 'bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <span className={`text-4xl font-black leading-none w-10 transition-colors ${
                      isActive ? 'text-brand-dark' : 'text-brand-green'
                    }`}>
                      {layer.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${
                        isActive ? 'text-brand-dark/50' : 'text-white/30'
                      }`}>
                        Capa {layer.id}
                      </p>
                      <p className={`font-black text-base leading-snug truncate ${
                        isActive ? 'text-brand-dark' : 'text-white'
                      }`}>
                        {layer.title}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-[transform,opacity,color] duration-200 ${
                      isActive
                        ? 'text-brand-dark'
                        : 'text-white/20 -translate-x-1 group-hover:translate-x-0 group-hover:text-white/50'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: detail card */}
            <div
              key={activeId}
              className="lg:col-span-3 bg-gradient-to-br from-white to-slate-50/70 rounded-[2rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
              style={{ animation: 'layer-fadein 0.28s cubic-bezier(0.23,1,0.32,1) both', minHeight: 400 }}
            >
              {/* Accent strip at top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent rounded-full" />
              {/* Giant decorative letter */}
              <span className="absolute -right-4 -bottom-8 text-[120px] sm:text-[180px] lg:text-[260px] font-black text-slate-100 leading-none select-none pointer-events-none">
                {active.id}
              </span>

              <div className="relative z-10 flex flex-col flex-1">
                <span className="inline-flex items-center gap-2 text-brand-green font-black text-xs uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
                  Capa {active.id}
                </span>

                <h3 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tight leading-tight mb-3">
                  {active.title}
                </h3>

                <p className="text-brand-dark/45 text-lg italic font-medium mb-6 leading-relaxed">
                  "{active.tagline}"
                </p>

                <p className="text-muted text-[15px] leading-relaxed mb-8">
                  {active.intro}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {active.topics.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-brand-light border border-border rounded-full text-xs font-semibold text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <Link
                    to={`/modelo/${active.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-brand-green hover:text-brand-dark transition-[background-color,color] duration-200 active:scale-[0.97]"
                  >
                    Ver capa {active.id} en detalle <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/modelo" className="inline-flex items-center gap-2 text-white/35 hover:text-brand-green transition-colors text-sm font-semibold">
              Ver modelo completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-32 px-6 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 lg:mb-16">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Productos</span>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter mb-4">
              Cuatro formas de intervenir.
            </h2>
            <p className="text-muted text-lg font-medium max-w-2xl mx-auto">
              Cada producto responde a un problema energético concreto. Sin promesas de ahorro sin base.
            </p>
          </div>

          <div className="space-y-5">

            {/* Star product — full width, horizontal layout */}
            {PRODUCTS.filter((p) => p.star).map((p) => (
              <Link
                key={p.slug}
                to={`/productos/${p.slug}`}
                className="group lift block rounded-[2rem] p-8 lg:p-12 bg-brand-green shadow-[0_20px_60px_rgba(163,230,53,0.25)] hover:shadow-[0_30px_80px_rgba(163,230,53,0.4)] relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-10 text-[240px] font-black select-none pointer-events-none leading-none text-brand-dark/[0.07]">01</div>
                <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-dark/6 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
                  <div className="flex flex-col gap-5">
                    <span className="inline-flex items-center gap-1.5 bg-brand-dark text-brand-green text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                      Producto estrella
                    </span>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3 leading-tight text-brand-dark">
                        {p.name}
                      </h3>
                      <p className="text-brand-dark/65 text-base leading-relaxed max-w-xl">
                        {p.description.slice(0, 150)}…
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-dark group-hover:gap-3 transition-[gap] duration-200">
                      {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  {p.problems && (
                    <div className="hidden lg:grid grid-cols-1 gap-2 min-w-[280px]">
                      {p.problems.slice(0, 4).map((prob) => (
                        <div key={prob} className="bg-brand-dark/[0.08] rounded-xl px-4 py-3 text-xs font-semibold text-brand-dark/70 leading-snug">
                          {prob}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}

            {/* Other products — 3-col row */}
            <div className="grid sm:grid-cols-3 gap-5">
              {PRODUCTS.filter((p) => !p.star).map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/productos/${p.slug}`}
                  className="group lift rounded-[2rem] p-6 sm:p-8 flex flex-col gap-5 bg-white border border-border shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:border-brand-dark/20 relative overflow-hidden"
                >
                  <div className="absolute -right-3 -bottom-5 text-[130px] font-black select-none pointer-events-none leading-none text-brand-dark/[0.04]">
                    {String(i + 2).padStart(2, '0')}
                  </div>
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 bg-brand-green/12 text-brand-green text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-green/20">
                      Producto
                    </span>
                  </div>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-black tracking-tight mb-2 leading-snug text-brand-dark">
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted line-clamp-3">
                      {p.description.slice(0, 100)}…
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-green relative z-10 mt-auto group-hover:gap-3 transition-[gap] duration-200">
                    {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── RETAIL MULTIPAÍS ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-32 px-6 bg-brand-mid relative overflow-hidden grain-dark">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 lg:mb-16 gap-6 lg:gap-8">
            <div>
              <span className="text-white/30 font-semibold tracking-widest uppercase text-xs mb-4 block">Pilar 2 · Operativa multipaís</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                Ocho territorios.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                  Una sola interlocución.
                </span>
              </h2>
            </div>
            <p className="text-white/55 text-xl font-medium max-w-sm leading-relaxed">
              Conocemos las distribuidoras locales y sus tiempos reales. El cliente tiene un único interlocutor.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {TERRITORIES.map((t, i) => {
              // Mobile (2-col): alternate per row → green if (floor(i/2)+i) % 2 === 0 → {0,3,4,7}
              // Desktop (4-col): checkerboard   → green if (floor(i/4)+i) % 2 === 0 → {0,2,5,7}
              const mg = (Math.floor(i / 2) + i) % 2 === 0;
              const dg = (Math.floor(i / 4) + i) % 2 === 0;
              const greenCls = 'bg-brand-green border-brand-green text-brand-dark shadow-[0_10px_30px_rgba(163,230,53,0.2)]';
              const darkCls  = 'bg-white/[0.04] backdrop-blur-md border-white/10 text-white hover:border-white/25';
              const cardCls  = mg === dg
                ? (mg ? greenCls : darkCls)
                : mg
                  ? `${greenCls} md:bg-white/[0.04] md:backdrop-blur-md md:border-white/10 md:text-white md:shadow-none`
                  : `${darkCls} md:bg-brand-green md:border-brand-green md:text-brand-dark md:shadow-[0_10px_30px_rgba(163,230,53,0.2)]`;
              const dotCls   = mg === dg
                ? (mg ? 'bg-brand-dark/40' : 'bg-brand-green')
                : mg
                  ? 'bg-brand-dark/40 md:bg-brand-green'
                  : 'bg-brand-green md:bg-brand-dark/40';
              return (
                <div key={t} className={`stagger lift rounded-[2rem] px-6 py-6 flex flex-col justify-between h-[140px] border ${cardCls}`}
                  style={{ animationDelay: `${i * 55}ms` }}>
                  <span className={`w-1.5 h-1.5 rounded-full ${dotCls}`} />
                  <p className="font-bold text-sm leading-snug">{t}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-dark border border-white/10 rounded-[2rem] p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
            <p className="text-white/60 italic text-lg font-medium flex-1 leading-relaxed">
              "No abrir una tienda en fecha por un problema de energía no es un retraso: es lucro cesante, alquiler pagado en vano y plantilla sin operar."
            </p>
            <Button to="/productos/operativa-retail" variant="outline-light" size="lg" arrow className="flex-shrink-0">
              Ver operativa retail
            </Button>
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-32 px-6 bg-white relative overflow-hidden">
        {/* Decorative large number behind content */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[22rem] font-black text-brand-dark/[0.03] select-none pointer-events-none leading-none tracking-tighter hidden lg:block">
          12
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            <div>
              <span className="text-muted/50 font-semibold tracking-[0.2em] uppercase text-[11px] mb-8 block">Pilar 1 · Track record</span>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
                Desde 2012 operando,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                  sin pivotes.
                </span>
              </h2>
              <p className="text-muted text-base leading-relaxed mb-3">
                No somos un proyecto nuevo: somos la opción consolidada en control energético multisede.
              </p>
              <p className="text-muted/70 text-sm leading-relaxed italic border-l-2 border-brand-green/30 pl-4">
                "Llevamos desde 2012 haciendo esto. No es un pivote, no es una moda: es nuestra única especialidad."
              </p>

              {/* Large typographic stats */}
              <div className="flex items-end gap-0 mt-12 border-t border-brand-dark/8 pt-10">
                <div className="pr-10 border-r border-brand-dark/10">
                  <p className="text-[5.5rem] lg:text-[7rem] font-black text-brand-dark tracking-tighter leading-[0.85]">+12</p>
                  <p className="text-muted text-xs font-bold uppercase tracking-[0.18em] mt-2">años operando</p>
                </div>
                <div className="pl-10">
                  <p className="text-[5.5rem] lg:text-[7rem] font-black text-brand-dark tracking-tighter leading-[0.85]">8</p>
                  <p className="text-muted text-xs font-bold uppercase tracking-[0.18em] mt-2">territorios</p>
                </div>
              </div>
            </div>

            {/* Logo reel — elevated container */}
            <div className="rounded-[2rem] overflow-hidden bg-white border border-border shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <LogoReel logos={CLIENTS} bgColor="#ffffff" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ─────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 px-6 bg-brand-dark grain-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(163,230,53,0.1) 0%, transparent 65%)'}} />
        {/* Horizontal line accents */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-green/15 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.0]">
            No vendemos energía.{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #a3e635, #86efac, #34d399, #a3e635)',
                backgroundSize: '250% 100%',
                animation: 'gradient-x 5s ease infinite',
              }}
            >
              La auditamos y la operamos.
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-brand-green/30" />
            <span className="text-white/20 text-xs font-bold tracking-[0.25em] uppercase">Operando desde 2012</span>
            <div className="h-px w-16 bg-brand-green/30" />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <CTABand />
    </>
  );
}
