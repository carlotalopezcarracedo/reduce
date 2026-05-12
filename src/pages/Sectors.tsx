import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTABand } from '../components/ui/CTABand';
import { SECTORS, CLIENTS } from '../data/content';

export function Sectors() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[130px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">A quién servimos</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.02] mb-6 max-w-4xl">
            Sectores con operaciones{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              multisede complejas.
            </span>
          </h1>
          <p className="text-white/55 text-xl leading-relaxed max-w-2xl font-medium">
            No trabajamos con todo tipo de cliente. Trabajamos con empresas que tienen decenas o cientos de suministros y necesidad real de control energético.
          </p>
        </div>
      </section>

      {/* Statement */}
      <section className="py-14 px-6 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
            El problema no es el precio de la energía. Es controlar, auditar y operar cientos de suministros sin perder el hilo.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Sectores</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              Dónde tenemos experiencia acumulada.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((sector, index) => (
              <div
                key={sector.name}
                className={`rounded-[2rem] p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                  index === 0
                    ? 'bg-brand-dark shadow-2xl hover:shadow-[0_30px_80px_rgba(12,26,46,0.3)] md:col-span-2 lg:col-span-1'
                    : 'bg-white border border-border hover:border-brand-dark hover:shadow-xl'
                }`}
              >
                {index === 0 && (
                  <div className="absolute right-0 top-0 w-[250px] h-[250px] bg-brand-green/12 rounded-full blur-[70px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                )}
                <h3 className={`text-xl font-black tracking-tight relative z-10 ${index === 0 ? 'text-white' : 'text-brand-dark'}`}>
                  {sector.name}
                </h3>
                <div className="relative z-10">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${index === 0 ? 'text-white/35' : 'text-muted/60'}`}>
                    El problema
                  </p>
                  <p className={`text-sm leading-relaxed ${index === 0 ? 'text-white/55' : 'text-muted'}`}>
                    {sector.problem}
                  </p>
                </div>
                <div className={`pt-5 border-t relative z-10 ${index === 0 ? 'border-white/10' : 'border-border'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${index === 0 ? 'text-brand-green/70' : 'text-brand-green/80'}`}>
                    Qué aportamos
                  </p>
                  <p className={`text-sm font-semibold leading-relaxed ${index === 0 ? 'text-white/80' : 'text-brand-dark'}`}>
                    {sector.value}
                  </p>
                </div>
                {sector.ref && (
                  <p className={`text-xs relative z-10 ${index === 0 ? 'text-white/25' : 'text-muted/50'}`}>
                    Ref: {sector.ref}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Clientes</span>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
              Grandes clientes retail que confían en REDUCE.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-3 font-medium">
              Llevamos desde 2012 gestionando la energía de estructuras multisede. Estos clientes han confiado en nosotros año tras año.
            </p>
            <p className="text-white/30 text-sm italic">
              Logos sujetos a autorización expresa de cada cliente.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {CLIENTS.map((c) => (
              <div key={c.name} className="glass-dark border border-white/10 rounded-2xl p-5 flex items-center justify-center hover:border-white/25 transition-colors">
                <img src={c.logo} alt={c.name} className="h-9 w-auto object-contain opacity-40 grayscale brightness-200 hover:opacity-70 transition-opacity" />
              </div>
            ))}
            <div className="glass-dark border border-dashed border-white/15 rounded-2xl p-5 flex items-center justify-center">
              <p className="text-white/30 text-xs text-center font-medium">STL, Bico de Xeado y otros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit check */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">¿Encajamos?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
              REDUCE es para ti si…
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'Tienes 20 o más puntos de suministro activos',
              'Operas en más de una localización o territorio',
              'Tienes contratos indexados que nadie en tu equipo puede explicarte del todo',
              'Necesitas control centralizado de tu energía, no solo facturas',
              'Tu expansión retail pasa por múltiples países o territorios',
              'Recibes facturas y no puedes verificar si son correctas',
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-4 rounded-2xl px-6 py-5 hover:-translate-y-0.5 transition-all ${
                  i === 0
                    ? 'bg-brand-dark border border-brand-dark shadow-lg'
                    : 'bg-white border border-border hover:border-brand-dark hover:shadow-md'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                <p className={`text-sm font-semibold ${i === 0 ? 'text-white' : 'text-brand-dark'}`}>{item}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-mid hover:shadow-lg transition-all"
          >
            Hablar de mi caso <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
