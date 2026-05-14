import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CTABand } from '../components/ui/CTABand';
import { LogoReel } from '../components/ui/LogoReel';
import { LAYERS, PRODUCTS, CLIENTS, TERRITORIES, KEY_MESSAGES } from '../data/content';

export function Home() {
  const [activeId, setActiveId] = useState(LAYERS[0].id);
  const active = LAYERS.find((l) => l.id === activeId)!;

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
      <section className="relative min-h-[78vh] flex items-center py-20 px-6 bg-brand-dark overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '44px 44px'}} />
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 70% 80% at 75% 50%, rgba(163,230,53,0.13) 0%, transparent 65%)'}} />
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 50% 60% at 10% 80%, rgba(163,230,53,0.08) 0%, transparent 60%)'}} />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-center">

          {/* ── Left ── */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-green/25 bg-brand-green/[0.07] text-brand-green text-xs font-bold tracking-wide mb-8">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green" />
              </span>
              Estructura independiente · Operando desde 2012
            </div>

            <h1 className="text-[2.6rem] sm:text-[3.6rem] lg:text-[4.8rem] font-black text-white tracking-tighter leading-[0.9] mb-6">
              La energía multisede,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                bajo control total.
              </span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-md font-medium mb-10">
              Auditamos, operamos y hacemos trazable la energía de empresas retail con decenas o cientos de suministros. Sin vender ni un kWh.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button to="/contacto" size="lg" arrow className="shadow-[0_0_35px_rgba(163,230,53,0.35)] hover:shadow-[0_0_55px_rgba(163,230,53,0.55)] hover:scale-[1.02]">
                Analizar mi situación
              </Button>
              <Button to="/modelo" variant="outline-light" size="lg">
                El modelo de las 5 capas <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2 items-center pt-7 border-t border-white/[0.07]">
              {[
                { num: '+12', label: 'años' },
                { num: '8', label: 'territorios' },
                { num: '5', label: 'capas de gestión' },
                { num: '100%', label: 'independencia' },
              ].map((s) => (
                <div key={s.num} className="flex items-baseline gap-1.5">
                  <span className="text-brand-green font-black text-xl tracking-tighter">{s.num}</span>
                  <span className="text-white/30 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="hidden lg:flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5),0_0_40px_rgba(163,230,53,0.06)]" style={{background: 'rgba(255,255,255,0.04)'}}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]" style={{background: 'rgba(255,255,255,0.02)'}}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(163,230,53,0.9)]" />
                <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase">Auditoría activa</span>
              </div>
              <span className="text-white/15 text-xs font-semibold">REDUCE</span>
            </div>

            {/* Main metric */}
            <div className="px-6 pt-5 pb-4 border-b border-white/[0.07]">
              <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Suministros bajo control</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-[2.8rem] font-black text-white tracking-tighter leading-none">247</span>
                <span className="text-brand-green font-bold text-sm mb-1.5">CUPS</span>
              </div>
              <p className="text-white/20 text-xs">ES · PT · IT · AD</p>
            </div>

            {/* Audit checks */}
            <div className="px-6 py-4 space-y-0 flex-1">
              {[
                { label: 'Contratos indexados', ok: true },
                { label: 'Control de facturación', ok: true },
                { label: 'Perfilado y REE', ok: false },
                { label: 'Energía reactiva', ok: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.ok ? 'bg-brand-green' : 'bg-amber-400'}`} />
                    <span className="text-white/55 text-sm">{item.label}</span>
                  </div>
                  <span className={`text-xs font-black ${item.ok ? 'text-brand-green' : 'text-amber-400'}`}>
                    {item.ok ? '✓' : '⚠'}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 border-t border-brand-green/20" style={{background: 'rgba(163,230,53,0.06)'}}>
              <p className="text-brand-green/80 text-xs font-bold">Próxima revisión en 7 días</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── POSICIONAMIENTO ───────────────────────────────────────────────── */}
      <section className="relative z-10 -mt-10 rounded-[3rem] pt-16 pb-16 px-8 lg:px-16 bg-white shadow-[0_0_60px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: statement */}
          <div>
            <p className="text-[1.7rem] lg:text-[2.2rem] font-black text-brand-dark leading-[1.1] tracking-tight">
              Somos la capa técnica independiente entre la energía y la operación del cliente.
            </p>
            <div className="mt-6 h-1 w-12 bg-brand-green rounded-full" />
          </div>
          {/* Right: 3 puntos */}
          <div className="space-y-4">
            {[
              'No vendemos energía: somos independientes de cualquier comercializadora.',
              'Controlamos, auditamos y hacemos trazable la energía de estructuras multisede.',
              'Infraestructura técnica propia para reproducir y validar cada factura.',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-brand-green font-black text-sm flex-shrink-0 mt-0.5 w-6">0{i + 1}</span>
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELO 5 CAPAS ────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-10 items-end mb-14">
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
                    className={`group w-full flex items-center gap-5 px-7 py-5 rounded-[1.5rem] text-left transition-all duration-300 cursor-pointer ${
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
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
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
              className="lg:col-span-3 bg-white rounded-[2rem] p-12 relative overflow-hidden flex flex-col"
              style={{ animation: 'layer-fadein 0.35s ease-out', minHeight: 480 }}
            >
              {/* Giant decorative letter */}
              <span className="absolute -right-4 -bottom-8 text-[260px] font-black text-slate-100 leading-none select-none pointer-events-none">
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
                    className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
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
      <section className="py-32 px-6 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Productos</span>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter mb-4">
              Cuatro formas de intervenir.
            </h2>
            <p className="text-muted text-lg font-medium max-w-2xl mx-auto">
              Cada producto responde a un problema energético concreto. Sin promesas de ahorro sin base.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.slug}
                to={`/productos/${p.slug}`}
                className={`group rounded-[2rem] p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                  p.star
                    ? 'bg-brand-green shadow-[0_20px_60px_rgba(163,230,53,0.25)] hover:shadow-[0_30px_80px_rgba(163,230,53,0.4)]'
                    : 'bg-white border border-border shadow-sm hover:shadow-xl hover:border-brand-dark/15'
                }`}
              >
                {/* Oversized background number */}
                <div className={`absolute -right-3 -bottom-6 text-[160px] font-black select-none pointer-events-none leading-none ${
                  p.star ? 'text-brand-dark/[0.07]' : 'text-brand-dark/[0.04]'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  {p.star ? (
                    <span className="inline-flex items-center gap-1.5 bg-brand-dark text-brand-green text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Producto estrella
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-brand-green/15 text-brand-green text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-green/25">
                      Producto
                    </span>
                  )}
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className={`text-2xl font-black tracking-tight mb-2 leading-snug ${p.star ? 'text-brand-dark' : 'text-brand-dark'}`}>
                    {p.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${p.star ? 'text-brand-dark/65' : 'text-muted'}`}>
                    {p.description.slice(0, 110)}…
                  </p>
                </div>

                <div className={`flex items-center gap-2 text-sm font-bold relative z-10 mt-auto transition-all ${
                  p.star ? 'text-brand-dark' : 'text-brand-green group-hover:gap-3'
                }`}>
                  {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETAIL MULTIPAÍS ──────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-brand-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Pilar 2 · Operativa multipaís</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
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
            {TERRITORIES.map((t, i) => (
              <div
                key={t}
                className={`rounded-[2rem] px-6 py-5 flex flex-col justify-between h-[110px] hover:-translate-y-1 transition-all duration-300 border ${
                  (i + Math.floor(i / 4)) % 2 === 0
                    ? 'bg-brand-green border-brand-green text-brand-dark shadow-[0_10px_30px_rgba(163,230,53,0.2)]'
                    : 'glass-dark border-white/10 text-white hover:border-white/25'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${(i + Math.floor(i / 4)) % 2 === 0 ? 'bg-brand-dark/40' : 'bg-brand-green'}`} />
                <p className="font-bold text-sm leading-snug">{t}</p>
              </div>
            ))}
          </div>

          <div className="glass-dark border border-white/10 rounded-[2rem] p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
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
      <section className="py-32 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Pilar 1 · Track record</span>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
                Desde 2012 operando,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                  sin pivotes.
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                No somos un proyecto nuevo: somos la opción consolidada en control energético multisede.
              </p>
              <p className="text-muted text-sm leading-relaxed italic">
                "Llevamos desde 2012 haciendo esto. No es un pivote, no es una moda: es nuestra única especialidad."
              </p>
              <div className="flex gap-12 mt-10">
                <div>
                  <p className="text-6xl font-black text-brand-dark tracking-tighter">+12</p>
                  <p className="text-muted text-xs font-bold uppercase tracking-widest mt-1">años operando</p>
                </div>
                <div>
                  <p className="text-6xl font-black text-brand-dark tracking-tighter">8</p>
                  <p className="text-muted text-xs font-bold uppercase tracking-widest mt-1">territorios</p>
                </div>
              </div>
            </div>
            <LogoReel logos={CLIENTS} bgColor="#f8fafc" />
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA ─────────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-12 block text-center">
            Filosofía REDUCE
          </span>
          <div className="space-y-5">
            {KEY_MESSAGES.map((msg) => (
              <div key={msg} className="border-l-2 border-brand-green/30 pl-8 hover:border-brand-green transition-colors duration-300 group">
                <p className="text-2xl lg:text-3xl font-bold text-white/85 leading-snug group-hover:text-white transition-colors">
                  {msg}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <CTABand />
    </>
  );
}
