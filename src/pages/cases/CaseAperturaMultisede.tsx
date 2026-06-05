import { Helmet } from 'react-helmet-async';
import { CheckCircle2, AlertTriangle, Clock, Users, Zap, FileText, Shield, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTABand } from '../../components/ui/CTABand';

const TIMELINE = [
  {
    phase: '01',
    label: 'Diagnóstico inicial',
    date: 'Semana 1',
    status: 'critical' as const,
    items: [
      'Expediente heredado parcialmente ejecutado y sin trazabilidad clara',
      'Infraestructura eléctrica incompleta en el local',
      'Dimensionado original en baja tensión insuficiente para los requerimientos reales',
      'Cinco actores activos sin coordinación central',
    ],
  },
  {
    phase: '02',
    label: 'Análisis técnico y mapa de bloqueos',
    date: 'Semanas 1–2',
    status: 'warning' as const,
    items: [
      'Revisión completa del expediente regulatorio y documentación técnica',
      'Identificación de inconsistencias entre proyecto y realidad de obra',
      'Detección de bloqueos documentales con la administración',
      'Evaluación de plazos regulatorios reales frente a fecha de apertura',
    ],
  },
  {
    phase: '03',
    label: 'Redefinición de estrategia de activación',
    date: 'Semana 2',
    status: 'active' as const,
    items: [
      'Rediseño completo de la estrategia de activación energética',
      'Diseño de suministro de socorro como vía de contingencia operativa',
      'Protocolo de coordinación multidisciplinar con hitos diarios',
      'Definición de ruta crítica con plazos no negociables',
    ],
  },
  {
    phase: '04',
    label: 'Ejecución y coordinación multidisciplinar',
    date: 'Semanas 2–5',
    status: 'active' as const,
    items: [
      'Gestión directa y diaria con la distribuidora',
      'Coordinación de ingeniería e instaladores en obra',
      'Trazabilidad documental de cada acción y validación',
      'Gestión paralela de suministro principal y de socorro',
    ],
  },
  {
    phase: '05',
    label: 'Desbloqueo regulatorio y validaciones',
    date: 'Semanas 5–6',
    status: 'resolved' as const,
    items: [
      'Resolución de bloqueos documentales con administración',
      'Coordinación y aceleración de visita OCA',
      'Cierre del expediente técnico y regulatorio',
      'Activación y prueba del suministro de socorro',
    ],
  },
  {
    phase: '06',
    label: 'Apertura en fecha',
    date: 'Semana 6',
    status: 'done' as const,
    items: [
      'Apertura realizada en la fecha comprometida',
      'Infraestructura energética 100% operativa',
      'Riesgo comercial completamente mitigado',
      'Expediente cerrado y documentación entregada',
    ],
  },
];

const STATUS_STYLES = {
  critical: { dot: 'bg-red-500', badge: 'bg-red-500/15 border-red-500/30 text-red-400', label: 'Riesgo crítico' },
  warning:  { dot: 'bg-amber-400', badge: 'bg-amber-400/15 border-amber-400/30 text-amber-400', label: 'En análisis' },
  active:   { dot: 'bg-brand-green', badge: 'bg-brand-green/15 border-brand-green/30 text-brand-green', label: 'En ejecución' },
  resolved: { dot: 'bg-brand-green', badge: 'bg-brand-green/15 border-brand-green/30 text-brand-green', label: 'Resuelto' },
  done:     { dot: 'bg-brand-green shadow-[0_0_10px_rgba(163,230,53,0.8)]', badge: 'bg-brand-green/20 border-brand-green/40 text-brand-green', label: 'Completado' },
};

const ACTORS = [
  { name: 'Distribuidora', role: 'Infraestructura de red', Icon: Zap },
  { name: 'Ingeniería', role: 'Proyecto técnico', Icon: FileText },
  { name: 'Instaladores', role: 'Ejecución en obra', Icon: Shield },
  { name: 'OCA', role: 'Validación y certificación', Icon: CheckCircle2 },
  { name: 'Comercializadora', role: 'Contrato de suministro', Icon: Building2 },
];

const RISKS = [
  { label: 'Pérdidas de campaña de Navidad', level: 'critical' as const },
  { label: 'Costes operativos sin actividad', level: 'high' as const },
  { label: 'Alquiler premium por días sin apertura', level: 'high' as const },
  { label: 'Personal contratado sin activar', level: 'medium' as const },
  { label: 'Impacto reputacional de la marca', level: 'high' as const },
];

const RISK_STYLES = {
  critical: 'bg-red-500/10 border-red-500/25 text-red-400',
  high:     'bg-amber-500/10 border-amber-500/25 text-amber-400',
  medium:   'bg-orange-500/10 border-orange-500/20 text-orange-400',
};

const LAYERS = [
  { num: '01', label: 'Operación', desc: 'Coordinación integral del proyecto. Seguimiento diario de todos los actores. Control de ruta crítica.' },
  { num: '02', label: 'Regulación', desc: 'Gestión de expediente administrativo. Resolución de bloqueos documentales. Aceleración de validaciones.' },
  { num: '03', label: 'Ingeniería', desc: 'Revisión técnica completa. Redefinición de dimensionado. Estrategia de activación alternativa.' },
  { num: '04', label: 'Comercialización', desc: 'Gestión simultánea de suministro principal y suministro de socorro como contingencia operativa.' },
  { num: '05', label: 'Activación', desc: 'Coordinación de OCA, cierres técnicos y puesta en servicio garantizada en fecha comprometida.' },
];

const RESULTS = [
  { num: '6', unit: 'sem', label: 'intervención total' },
  { num: '5', unit: '', label: 'actores coordinados' },
  { num: '0', unit: 'd', label: 'días de retraso' },
  { num: '2', unit: '', label: 'suministros gestionados' },
];

export function CaseAperturaMultisede() {
  return (
    <>
      <Helmet>
        <title>Caso Real: Apertura Energética Multisede | REDUCE</title>
        <meta name="description" content="Gestión integral de apertura energética de flagship store en campaña de Navidad. Expediente desbloqueado, infraestructura resuelta, apertura en fecha." />
        <link rel="canonical" href="https://reduce.es/casos/apertura-multisede" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="bg-brand-dark min-h-[50vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/12 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/8 text-brand-green text-xs font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Caso Real
            </span>
            <span className="text-xs font-bold text-white/25 tracking-widest uppercase border border-white/10 rounded-full px-3 py-1.5">
              Operativa retail · Madrid
            </span>
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase border border-amber-400/25 bg-amber-400/8 rounded-full px-3 py-1.5">
              Riesgo crítico resuelto
            </span>
          </div>

          <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] font-black text-white tracking-tighter leading-[0.92] mb-8">
            Gestión integral de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              apertura energética
            </span>
            {' '}multisede en campaña crítica.
          </h1>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Cliente', value: 'Gran cadena retail nacional' },
              { label: 'Ubicación', value: 'Flagship store · Madrid' },
              { label: 'Contexto', value: 'Campaña de Navidad' },
            ].map((item) => (
              <div key={item.label} className="border border-white/[0.07] rounded-2xl px-5 py-4 bg-white/[0.03]">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RIESGO ── */}
      <section className="relative z-10 -mt-10 rounded-[3rem] bg-white shadow-[0_0_60px_rgba(0,0,0,0.22)] px-5 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-4 block">El contexto</span>
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark tracking-tight leading-tight mb-5">
              Cada día de retraso tenía un coste real e inmediato.
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              La apertura no era solo un hito operativo. Era el punto de entrada a la campaña comercial más importante del año. El expediente heredado, incompleto y mal dimensionado, ponía en riesgo toda la operación.
            </p>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-black px-4 py-2.5 rounded-full">
              <AlertTriangle className="w-3.5 h-3.5" />
              Fecha límite inamovible: campaña de Navidad
            </div>
          </div>

          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Vectores de riesgo activos</p>
            {RISKS.map((r) => (
              <div key={r.label} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${RISK_STYLES[r.level]}`}>
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-sm font-semibold">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative z-0 -mt-12 pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Cronología de la intervención</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Seis fases. Seis semanas. Cero margen.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-red-400 via-brand-green to-brand-green opacity-30" />

            <div className="space-y-4">
              {TIMELINE.map((phase) => {
                const s = STATUS_STYLES[phase.status];
                return (
                  <div key={phase.phase} className="flex gap-6">
                    {/* Dot */}
                    <div className="flex-shrink-0 flex flex-col items-center" style={{width: 56}}>
                      <div className={`w-4 h-4 rounded-full mt-5 ${s.dot} z-10 relative`} />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white border border-border rounded-2xl px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white/0 select-none text-xs">·</span>
                            <span className="text-brand-dark font-black text-xs tracking-widest opacity-30">FASE {phase.phase}</span>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${s.badge}`}>{s.label}</span>
                          </div>
                          <h3 className="text-brand-dark font-black text-lg tracking-tight">{phase.label}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0 text-muted bg-brand-light border border-border rounded-full px-3 py-1">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs font-semibold">{phase.date}</span>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                            <span className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTORES ── */}
      <section className="py-16 lg:py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(163,230,53,0.06) 0%, transparent 70%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Mapa de actores</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
              Cinco actores descoordinados. Un centro de control.
            </h2>
          </div>

          {/* REDUCE hub */}
          <div className="flex justify-center mb-8">
            <div className="bg-brand-green text-brand-dark rounded-3xl px-10 py-6 text-center shadow-[0_0_40px_rgba(163,230,53,0.3)]">
              <p className="font-black text-2xl tracking-tighter">REDUCE</p>
              <p className="text-brand-dark/70 text-xs font-bold uppercase tracking-widest mt-1">Coordinación integral</p>
            </div>
          </div>

          {/* Connector line */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-brand-green/30" />
          </div>

          {/* Actors grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {ACTORS.map(({ name, role, Icon }) => (
              <div key={name} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 text-center hover:border-brand-green/25 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-green/10 transition-colors">
                  <Icon className="w-4 h-4 text-brand-green/70" />
                </div>
                <p className="text-white font-black text-sm tracking-tight mb-1">{name}</p>
                <p className="text-white/35 text-xs">{role}</p>
                <div className="mt-3 text-[10px] font-bold text-brand-green/60 uppercase tracking-widest">
                  Gestionado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPAS DE INTERVENCIÓN ── */}
      <section className="py-16 lg:py-24 px-6 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Capas de intervención</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              No una disciplina. Las cinco a la vez.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LAYERS.map((layer, i) => (
              <div key={layer.label} className={`rounded-2xl p-6 flex flex-col gap-4 ${i === 0 ? 'bg-brand-dark' : 'bg-brand-light border border-border'}`}>
                <span className={`text-3xl font-black tracking-tighter leading-none ${i === 0 ? 'text-brand-green' : 'text-brand-dark/15'}`}>{layer.num}</span>
                <div>
                  <p className={`font-black text-sm tracking-tight mb-2 ${i === 0 ? 'text-white' : 'text-brand-dark'}`}>{layer.label}</p>
                  <p className={`text-xs leading-relaxed ${i === 0 ? 'text-white/45' : 'text-muted'}`}>{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="py-16 lg:py-28 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(163,230,53,0.08) 0%, transparent 65%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Resultado</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
              Apertura en fecha. Sin excepciones.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl px-6 py-8 text-center">
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-5xl font-black text-brand-green tracking-tighter leading-none">{r.num}</span>
                  {r.unit && <span className="text-brand-green/60 font-bold text-lg mb-1">{r.unit}</span>}
                </div>
                <p className="text-white/40 text-sm font-semibold">{r.label}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="max-w-3xl mx-auto text-center border-t border-white/[0.07] pt-16">
            <p className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug mb-4">
              "La energía retail no se gestiona únicamente con precios.
            </p>
            <p className="text-2xl lg:text-3xl font-black tracking-tight leading-snug">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                Se gestiona garantizando continuidad operativa."
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <section className="py-10 px-6 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/sectores" className="text-white/40 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2">
            ← Volver a sectores
          </Link>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-brand-green text-brand-dark text-sm font-black px-6 py-3 rounded-full hover:brightness-105 transition-[filter,transform] duration-150 active:scale-[0.97] shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            Analizar mi situación <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
