import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe2,
  LineChart,
  MapPin,
  TrendingDown,
  Zap,
  Factory,
  BatteryCharging,
  Activity,
  Sun,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import React from 'react';

const HERO_BG =
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=2000&auto=format&fit=crop&q=80';

const DATA_CENTER_IMG =
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80';
const INDUSTRIAL_IMG =
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80';
const GLOBAL_IMG =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-green selection:text-brand-dark font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="absolute top-0 w-full z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel-dark rounded-full px-6 py-3 border border-white/10 shadow-2xl">
          <a href="#" className="flex items-center group">
            <img src="/logo.png" alt="PlanReduce Logo" className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
          </a>
          <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5">
            <a href="#soluciones" className="text-white/80 hover:text-white font-medium text-sm transition-colors">
              Soluciones
            </a>
            <a href="#metodologia" className="text-white/80 hover:text-white font-medium text-sm transition-colors">
              Metodología
            </a>
            <a href="#contacto" className="text-white/80 hover:text-white font-medium text-sm transition-colors">
              Contacto
            </a>
          </nav>
          <a
            href="#contacto"
            className="hidden md:inline-flex bg-brand-green text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] hover:bg-white hover:text-brand-dark transition-all hover:scale-105"
          >
            Quiero mi estudio
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-center pt-32 pb-20 2xl:pt-40 bg-brand-dark overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Solar panels hero" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark/95 mix-blend-multiply"></div>
          {/* Subtle green glow behind hero text */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-dark border-brand-green/30 text-brand-green text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              Optimización Energética Avanzada
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6 drop-shadow-lg">
              ¿Quieres el máximo control de tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-200 indent-0">suministros</span> de electricidad y gas?
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-medium">
              El 98,5 % de las empresas que analizamos no llevan un control adecuado sobre sus facturas de energía. Hemos creado para ti el Plan Reduce diseñado para ahorrar en la factura energética de tu organización.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-brand-dark px-8 py-4.5 rounded-full font-extrabold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(163,230,53,0.4)] group"
              >
                Quiero un estudio gratis de mi factura
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <span>¡Ahorrarás tiempo, energía y dinero!</span>
              </div>
            </div>
          </div>

          {/* Glass Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 pb-10 mt-10 lg:mt-0">
            <div className="glass-panel-dark rounded-[2rem] p-6 md:p-8 text-white hover:-translate-y-2 transition-all duration-300 border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-bl-full blur-2xl group-hover:bg-brand-green/30 transition-all"></div>
              <div className="w-14 h-14 bg-brand-green text-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingDown className="w-7 h-7" />
              </div>
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">+34%</div>
              <div className="text-sm font-bold text-brand-green uppercase tracking-widest leading-snug">
                ROI Proyectado
              </div>
              <p className="mt-2 text-white/60 text-sm font-medium">Eficiencia Energética real comprobada</p>
            </div>
            
            <div className="glass-panel-dark rounded-[2rem] p-6 md:p-8 text-white hover:-translate-y-2 transition-all duration-300 border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              <div className="w-14 h-14 bg-white text-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div className="text-5xl md:text-6xl font-black mb-3 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">18%</div>
              <div className="text-sm font-bold text-white uppercase tracking-widest leading-snug">
                Recuperación
              </div>
              <p className="mt-2 text-white/60 text-sm font-medium">De sobrecargos en facturación</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS SECTION */}
      <section className="py-12 bg-white flex flex-col justify-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 w-full relative">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
            Empresas que ya han reducido su factura con nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 transition-all duration-500">
            <img src="/issga.png" alt="ISSGA" className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/digamel.png" alt="DIGAMEL" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/arenal.png" alt="Arenal" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/primor.png" alt="Primor" className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/hierros-diego.png" alt="Hierros Diego" className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* METHODOLOGY (BENTO GRID) */}
      <section id="metodologia" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-end mb-16">
          <div className="flex-1">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Plan Reduce</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-0 text-slate-900 leading-[1.05]">
              Te presentamos las tres etapas <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">del Plan Reduce.</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Tus suministros de energía gestionados por profesionales. Nada escapa a nuestro control, por fin podrás tener el control de tu factura de la luz.
            </p>
          </div>
        </div>

        {/* Feature Visual Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Left Image */}
          <div className="md:col-span-7 rounded-[2rem] overflow-hidden h-[400px] md:h-[600px] relative group shadow-2xl">
            <img src={DATA_CENTER_IMG} alt="Data Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="inline-block px-4 py-1.5 bg-brand-green text-brand-dark font-black text-xs rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-brand-green/20">Fase 01</span>
              <h3 className="text-white font-bold text-3xl md:text-4xl mb-3 tracking-tight">Optimizamos tus suministros</h3>
              <p className="text-white/80 text-lg font-medium max-w-md">Establecemos la potencia óptima, damos soluciones para reactiva y tu tarifa correcta.</p>
            </div>
          </div>
          
          {/* Two Stacked Right Images */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="rounded-[2rem] overflow-hidden flex-1 relative group shadow-2xl min-h-[250px] md:min-h-0">
              <img src={INDUSTRIAL_IMG} alt="Industrial Scale" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-black/30 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block px-4 py-1.5 bg-white text-brand-dark font-black text-xs rounded-full uppercase tracking-widest mb-4 shadow-lg">Fase 02</span>
                <h3 className="font-bold text-2xl md:text-3xl mb-1 tracking-tight">Revisamos tus facturas</h3>
                <p className="text-white/80 text-sm font-medium">Analizamos los datos de la Distribuidora y vigilancia de contratos.</p>
              </div>
            </div>
            
            <div className="rounded-[2rem] overflow-hidden flex-1 relative group shadow-2xl min-h-[250px] md:min-h-0">
              <img src={GLOBAL_IMG} alt="Global Operations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-1.5 glass-panel-dark text-white font-black text-xs rounded-full border border-white/20 uppercase tracking-widest mb-4">Fase 03</span>
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-1 tracking-tight">Compramos al mejor precio</h3>
                <p className="text-white/80 text-sm font-medium">OMIE, OMIP, MIBGAS, TTF y contratos PPA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS DETAILS */}
      <section id="soluciones" className="py-32 bg-slate-50 relative z-10 border-y border-slate-200/60 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">Soluciones Estructurales</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Nuestro enfoque primario se divide en tres pilares fundamentales que maximizan tu eficiencia y blindan tu rentabilidad.</p>
          </div>

          {/* Card 1 */}
          <div className="bg-white border border-slate-100/60 shadow-[0_20px_60px_rgba(0,0,0,0.03)] rounded-[2rem] p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -top-12 text-[200px] font-black text-slate-50 select-none group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 pointer-events-none z-0">01</div>
            
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center shadow-inner shrink-0 text-slate-800 relative z-10">
              <LineChart className="w-8 h-8 text-brand-dark" />
            </div>
            
            <div className="flex-1 relative z-10 pl-0 md:pl-4 border-l-0 md:border-l-2 border-slate-100">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">MÁXIMO AHORRO</span>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-6">
                OPTIMIZAMOS TUS SUMINISTROS
              </h3>
              <ul className="text-slate-600 text-base space-y-4 font-semibold grid grid-cols-1 sm:grid-cols-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Analizamos tu consumo</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Establecemos la potencia óptima</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Damos soluciones para reactiva</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Establecemos tu tarifa correcta</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Conseguimos para ti el mejor precio</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100/60 shadow-[0_20px_60px_rgba(0,0,0,0.03)] rounded-[2rem] p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -top-12 text-[200px] font-black text-slate-50 select-none group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 pointer-events-none z-0">02</div>
            
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center shadow-inner shrink-0 text-slate-800 relative z-10">
              <FileText className="w-8 h-8 text-brand-dark" />
            </div>
            
            <div className="flex-1 relative z-10 pl-0 md:pl-4 border-l-0 md:border-l-2 border-slate-100">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">MÁXIMO CONTROL</span>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-6">
                REVISAMOS TODAS TUS FACTURAS
              </h3>
              <ul className="text-slate-600 text-base space-y-4 font-semibold grid grid-cols-1 sm:grid-cols-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Analizamos los datos de la Distribuidora</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Vigilamos que se cumpla el contrato</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Accedemos a la telemedida</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Trazabilidad de todas las revisiones</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Tramitaremos las reclamaciones</li>
              </ul>
            </div>
          </div>

          {/* Card 3 (Highlight) */}
          <div className="bg-brand-dark rounded-[2rem] p-10 flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden group hover:shadow-[0_30px_80px_rgba(163,230,53,0.2)] hover:-translate-y-1 transition-all duration-300">
            {/* Decor element */}
            <div className="absolute -right-6 -top-12 text-[200px] font-black text-white/[0.04] select-none group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 pointer-events-none z-0">03</div>
            <div className="absolute right-0 top-0 w-80 h-80 bg-brand-green/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
            
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg shrink-0 relative z-10">
              <Globe2 className="w-8 h-8 text-brand-dark" />
            </div>

            <div className="flex-1 relative z-10 pl-0 md:pl-4 border-l-0 md:border-l-2 border-white/20">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">COMPRA AL MEJOR PRECIO TU ENERGIA</span>
              <h3 className="text-2xl font-black tracking-tight text-white mb-6">
                ANALIZAMOS LOS MERCADOS
              </h3>
              <ul className="text-white/80 text-base space-y-4 font-semibold grid grid-cols-1 sm:grid-cols-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> OMIE, OMIP, MIBGAS</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> TTF y otros</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Garantías de origen 100% renovable</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> PPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PROCESS */}
      <section className="py-32 bg-brand-dark text-white rounded-t-[4rem] px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Más Servicios</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-2xl leading-[1.05]">
                Además te <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-200">ofrecemos.</span>
              </h2>
            </div>
            <p className="text-white/60 max-w-sm text-xl font-medium">
              Te brindamos todas las herramientas y metodologías para el control exhaustivo de tus costes energéticos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Consumidor Directo A Mercado (CDM)', active: false, icon: <Factory className="w-8 h-8" /> },
              { title: 'Sistemas de carga para Vehículo Eléctrico', active: true, icon: <BatteryCharging className="w-8 h-8" /> },
              { title: 'Telemedida', active: false, icon: <Activity className="w-8 h-8" /> },
              { title: 'Autoconsumo solar', active: true, icon: <Sun className="w-8 h-8" /> },
              { title: 'Power Perfector', active: false, icon: <Cpu className="w-8 h-8" /> },
              { title: 'Soluciones para corrección de reactiva', active: true, icon: <Zap className="w-8 h-8" /> },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`rounded-[2rem] p-8 flex flex-col justify-between h-[260px] transition-all duration-300 hover:-translate-y-2 border relative overflow-hidden group ${
                  item.active 
                    ? 'bg-brand-green text-brand-dark border-brand-green shadow-[0_20px_40px_rgba(163,230,53,0.2)]' 
                    : 'glass-panel-dark text-white border-white/10 hover:border-white/30'
                }`}
              >
                {/* Subtle Icon watermark in background */}
                <div className={`absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none ${item.active ? 'text-brand-dark' : 'text-white'}`}>
                  {React.cloneElement(item.icon, { className: 'w-full h-full' })}
                </div>

                <div className={`${item.active ? 'text-brand-dark' : 'text-brand-green'}`}>
                  {item.icon}
                </div>
                
                <div>
                  <h4 className="text-2xl font-black leading-tight tracking-tight pr-8">{item.title}</h4>
                  <div className={`mt-6 w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-2 ${item.active ? 'bg-brand-dark text-brand-green' : 'bg-white/10 text-white'}`}>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION / CONVERSION MAGNET */}
      <section id="contacto" className="py-32 bg-brand-light px-6 relative -mt-6 rounded-t-[4rem] z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left side / Info Banner */}
            <div className="lg:w-5/12 bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green text-brand-dark text-xs font-black tracking-widest uppercase">
                    Paso Inicial
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                  Quiero un estudio <br/><span className="text-brand-green">gratis de mi factura.</span>
                </h2>
                <p className="text-white/70 mb-10 text-lg font-medium leading-relaxed">
                  Cubre, por favor, el formulario. Te respondemos en menos de 24 horas. Toma el control de tu energía.
                </p>

                <div className="space-y-8 pb-10 border-b border-white/10">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-white">Sede Central</h4>
                      <p className="text-white/60 font-medium mb-1">Calle Serafin Pazo nº 28 – 2ºB</p>
                      <p className="text-white/60 font-medium mb-2">36680 A Estrada - Pontevedra</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-white">Contacto</h4>
                      <p className="text-brand-green font-bold mb-1">986 57 01 98 / 649 870 579</p>
                      <p className="text-white/60 font-medium font-mono text-sm">info@reducenergia.es</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side / Form */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white relative">
              <div className="w-16 h-16 bg-brand-light rounded-full absolute top-10 right-10 flex items-center justify-center text-slate-300">
                <FileText className="w-8 h-8"/>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Estudio de Factura</h3>
              <p className="text-slate-500 font-medium mb-12">Completa los datos y recibe tu análisis en menos de 48 horas.</p>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="name" className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                      Nombre o Empresa
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ej. Acme Corp"
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-brand-green transition-all font-semibold text-lg"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="expense" className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                      Gasto Mensual Estimado
                    </label>
                    <input
                      type="text"
                      id="expense"
                      placeholder="Ej. 1.500€"
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-brand-green transition-all font-semibold text-lg"
                    />
                  </div>
                </div>

                <div className="relative border-t border-slate-100 pt-6">
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                    Correo Corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="contacto@empresa.com"
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-brand-green transition-all font-semibold text-lg"
                  />
                </div>

                <div className="relative border-t border-slate-100 pt-6">
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                    Detalles Relevantes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Describe tu tarifa actual o posibles ineficiencias..."
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-brand-green transition-all font-semibold text-lg resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-green text-brand-dark font-black text-xl py-5 rounded-2xl hover:bg-brand-green-hover shadow-[0_15px_30px_rgba(163,230,53,0.3)] hover:shadow-[0_20px_40px_rgba(163,230,53,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Generar Estudio Totalmente Gratis
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-dark" />Tus datos están encriptados y 100% seguros
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark pt-20 pb-10 px-6 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8">
            <Zap className="w-6 h-6 text-brand-green fill-brand-green" />
          </div>
          <p className="text-white/40 text-sm font-semibold tracking-wider">
            © {new Date().getFullYear()} PLANREDUCE. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </footer>
    </div>
  );
}
