import { CheckCircle2, Database, FileSearch, BarChart3, Link2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/ui/CTABand';

const PILLARS = [
  {
    icon: Database,
    title: 'Base de datos energética propia',
    body: 'Histórico consolidado de CUPS, facturas, consumos y tarifas. No dependemos de plataformas de terceros para almacenar ni consultar los datos de nuestros clientes.',
  },
  {
    icon: FileSearch,
    title: 'Ingestión automática de facturas',
    body: 'Procesamiento automatizado de facturas en múltiples formatos. La información entra, se valida y se convierte en datos auditables sin intervención manual.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards de control',
    body: 'Cuadros de mando adaptados a cada cliente: KPIs energéticos, control presupuestario, alertas de incidencias y evolución histórica. Presentables directamente a dirección.',
  },
  {
    icon: Link2,
    title: 'Trazabilidad punto a punto',
    body: 'Cada dato de consumo, cada partida de factura, cada incidencia queda registrada y es reproducible. La auditoría no es posible sin trazabilidad completa.',
  },
];

const CAPABILITIES = [
  'Reproducción técnica de fórmulas indexadas',
  'Validación de partidas de factura contra datos de distribuidora',
  'Control de desvíos de perfilado',
  'Detección de energía reactiva fuera de parámetros',
  'Consolidación multisede y multipaís',
  'Alertas automáticas de incidencias económicas',
  'Reporting ejecutivo personalizable',
  'Histórico comparativo inter-anual',
  'Control de CUPS activos en tiempo real',
  'Exportación auditable para revisión externa',
];

export function Technology() {
  return (
    <>
      <Helmet>
        <title>Tecnología | REDUCE</title>
        <meta name="description" content="Infraestructura técnica propia para auditoría energética: base de datos, ingestión automática de facturas y dashboards de control multisede." />
        <link rel="canonical" href="https://reduce.es/tecnologia" />
        <meta property="og:title" content="Tecnología | REDUCE" />
        <meta property="og:description" content="Infraestructura técnica propia para auditoría energética: base de datos, ingestión automática de facturas y dashboards de control multisede." />
        <meta property="og:url" content="https://reduce.es/tecnologia" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark min-h-[50vh] flex items-center py-16 lg:py-24 px-6 relative overflow-hidden grain-dark">
        {/* Diagonal line grid — distinct from other pages */}
        <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px'}} />
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-brand-green/18 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
          <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-8 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
            Infraestructura técnica
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.88] mb-6 lg:mb-8">
            Tecnología y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              trazabilidad.
            </span>
          </h1>
          <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            La energía solo se controla si existe una infraestructura técnica que la haga auditable. No es suficiente tener datos: hay que poder reproducirlos y validarlos.
          </p>
        </div>
      </section>

      {/* Statement */}
      <section className="relative z-10 -mt-10 rounded-[3rem] py-16 px-6 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.12)]">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-brand-green pl-8">
            <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
              La auditabilidad y la trazabilidad son tan importantes como el precio.
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              Una factura no se audita mirándola: se reproduce técnicamente, partida por partida, con los datos de la distribuidora. Eso requiere infraestructura, no solo voluntad.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-0 -mt-12 pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Pilares técnicos</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Infraestructura construida para el control energético multisede.
            </h2>
          </div>
          <div className="space-y-5">

            {/* First pillar — full width horizontal */}
            {(() => { const { icon: Icon, title, body } = PILLARS[0]; return (
              <div className="rounded-[2rem] p-8 lg:p-12 bg-brand-dark relative overflow-hidden group lift hover:shadow-[0_30px_80px_rgba(12,26,46,0.5)]">
                <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-transparent rounded-t-[2rem]" />
                <div className="relative z-10 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(163,230,53,0.4)]">
                    <Icon className="w-7 h-7 text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-3">{title}</h3>
                    <p className="text-white/55 leading-relaxed max-w-2xl">{body}</p>
                  </div>
                </div>
              </div>
            ); })()}

            {/* Other pillars — 3-col */}
            <div className="grid md:grid-cols-3 gap-5">
              {PILLARS.slice(1).map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-[2rem] p-7 bg-white border border-border group lift hover:border-brand-dark/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-green transition-[background-color] duration-200">
                    <Icon className="w-5 h-5 text-brand-green group-hover:text-brand-dark transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-brand-dark tracking-tight mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 px-6 bg-brand-dark grain-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 60% 70% at 75% 30%, rgba(163,230,53,0.07) 0%, transparent 55%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-12">
            <div className="flex-1">
              <span className="text-brand-green/70 font-semibold tracking-[0.2em] uppercase text-[11px] mb-4 block">Capacidades</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                Qué hacemos técnicamente.
              </h2>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">10 capacidades técnicas activas en proyectos reales de control energético multisede.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap}
                className={`flex items-start gap-3 rounded-xl px-5 py-4 border transition-[background-color,border-color] duration-200 cursor-default ${
                  i % 3 === 0
                    ? 'bg-brand-green/[0.09] border-brand-green/[0.18] hover:bg-brand-green/[0.15] hover:border-brand-green/[0.30]'
                    : 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.14]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-green" />
                <p className={`text-sm font-medium leading-snug ${i % 3 === 0 ? 'text-white/85' : 'text-white/55'}`}>{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 lg:py-28 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
            No vendemos software.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              Vendemos control.
            </span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed font-medium">
            La tecnología es el medio, no el producto. Lo que construimos sirve para que nuestros clientes puedan controlar, auditar y operar su energía con información real, trazable y reproducible.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
