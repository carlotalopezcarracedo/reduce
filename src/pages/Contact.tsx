import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { FormField, SelectField, TextareaField } from '../components/ui/FormField';
import { CONTACT_INFO } from '../data/content';

const MOTIVOS = [
  'Analizar mi contrato indexado (Destripa tu Indexado)',
  'Revisar un concurso energético',
  'Control energético multisede',
  'Operativa retail multipaís',
  'Información general',
  'Otro',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Helmet>
        <title>Contacto | REDUCE</title>
        <meta name="description" content="Contacta con REDUCE para analizar tu estructura energética multisede. Auditoría independiente, control y operativa desde 2012." />
        <link rel="canonical" href="https://reduce.es/contacto" />
        <meta property="og:title" content="Contacto | REDUCE" />
        <meta property="og:description" content="Contacta con REDUCE para analizar tu estructura energética multisede. Auditoría independiente, control y operativa desde 2012." />
        <meta property="og:url" content="https://reduce.es/contacto" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/8 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-green font-bold tracking-widest uppercase text-xs mb-6 border border-brand-green/30 rounded-full px-4 py-1.5 bg-brand-green/8">
              Contacto
            </span>
            <h1 className="text-5xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.95] mb-6">
              Hablemos de tu situación{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                energética.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-lg font-medium">
              No hacemos propuestas estándar. Primero escuchamos, luego analizamos y luego decidimos si podemos ayudarte.
            </p>
          </div>

          {/* Trust stats */}
          <div className="hidden lg:flex flex-col gap-3">
            {[
              { num: '12+', label: 'años de experiencia', sub: 'Operando desde 2012' },
              { num: '8', label: 'territorios cubiertos', sub: 'España, Portugal, Italia y Andorra' },
              { num: '100%', label: 'independencia comercial', sub: 'No vendemos energía' },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-5 bg-white/[0.04] border border-white/[0.07] rounded-2xl px-6 py-5">
                <span className="text-4xl font-black text-brand-green leading-none flex-shrink-0 w-20">{item.num}</span>
                <div>
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-white/35 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content: dark left + form right */}
      <section className="relative z-10 -mt-10 rounded-t-[3rem] bg-brand-light py-0 px-0 shadow-[0_-2px_40px_rgba(0,0,0,0.18)]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-border overflow-hidden flex flex-col lg:flex-row">

            {/* Left dark panel */}
            <div className="lg:w-5/12 bg-brand-dark text-white p-12 lg:p-14 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/15 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green text-brand-dark text-xs font-black tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                  Solicitar reunión
                </span>
                <h2 className="text-4xl font-black tracking-tighter mb-4 leading-tight">
                  Hablamos.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                    Sin compromiso.
                  </span>
                </h2>
                <p className="text-white/55 text-lg font-medium leading-relaxed mb-10">
                  Te respondemos en menos de 24 horas con una propuesta concreta para tu situación.
                </p>

                <div className="space-y-6 mb-10">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                      <Mail className="w-5 h-5 text-brand-green group-hover:text-brand-dark transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs font-bold uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-white font-semibold text-sm group-hover:text-brand-green transition-colors">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </a>
                  <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`} className="flex items-start gap-5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                      <Phone className="w-5 h-5 text-brand-green group-hover:text-brand-dark transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs font-bold uppercase tracking-widest mb-0.5">Teléfono</p>
                      <p className="text-white font-semibold text-sm">{CONTACT_INFO.phone1}</p>
                      <p className="text-white/50 text-sm">{CONTACT_INFO.phone2}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs font-bold uppercase tracking-widest mb-0.5">Dirección</p>
                      <p className="text-white font-semibold text-sm">{CONTACT_INFO.address}</p>
                      <p className="text-white/50 text-sm">{CONTACT_INFO.city}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-dark border border-white/10 rounded-2xl p-5 space-y-3">
                  {[
                    'No vendemos energía. Somos independientes.',
                    'No prometemos ahorros sin análisis previo.',
                    'Solo trabajamos con empresas multisede.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <p className="text-white/50 text-xs font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="relative z-10 text-white/20 text-xs font-semibold mt-8">
                Operando desde 2012 · 8 territorios
              </p>
            </div>

            {/* Right form */}
            <div className="lg:w-7/12 p-12 lg:p-14 bg-white">
              <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-2">
                Formulario de solicitud
              </h3>
              <p className="text-muted mb-8">
                Indica tu situación y el motivo de contacto.
              </p>

              {submitted ? (
                <div className="rounded-[2rem] border border-border bg-brand-light p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-2">Mensaje recibido</h3>
                  <p className="text-muted max-w-sm mx-auto">
                    Revisaremos tu consulta y nos pondremos en contacto en las próximas 24-48 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Nombre" id="nombre" required />
                    <FormField label="Apellidos" id="apellidos" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Email corporativo" id="email" type="email" required />
                    <FormField label="Teléfono" id="telefono" type="tel" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Empresa" id="empresa" required />
                    <FormField label="Cargo" id="cargo" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Nº suministros / CUPS aprox." id="cups" type="number" />
                    <SelectField label="Motivo del contacto" id="motivo" options={MOTIVOS} />
                  </div>
                  <TextareaField
                    label="Cuéntanos tu situación"
                    id="mensaje"
                    rows={5}
                    placeholder="¿Qué problema quieres resolver? ¿En cuántos territorios operas? ¿Tienes contratos indexados?"
                  />
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      arrow
                      className="w-full justify-center shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:shadow-[0_0_40px_rgba(163,230,53,0.35)]"
                    >
                      Enviar solicitud
                    </Button>
                    <p className="text-xs text-center text-muted mt-3">
                      Datos tratados conforme a nuestra{' '}
                      <a href="#" className="underline hover:text-brand-dark">política de privacidad</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
