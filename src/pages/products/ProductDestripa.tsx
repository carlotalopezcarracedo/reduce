import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { FormField, SelectField, TextareaField } from '../../components/ui/FormField';
import { FileUpload } from '../../components/ui/FileUpload';
import { CTABand } from '../../components/ui/CTABand';
import { PRODUCTS } from '../../data/content';

const product = PRODUCTS.find((p) => p.slug === 'destripa-tu-indexado')!;

const COMERCIALIZADORAS = [
  'Endesa', 'Iberdrola', 'Naturgy', 'Repsol', 'EDP',
  'Holaluz', 'Plenitude', 'Otra (especificar en mensaje)',
];

export function ProductDestripa() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/TU_ID_FORMSPREE', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Destripa tu Indexado | REDUCE</title>
        <meta name="description" content="Análisis técnico independiente de contratos de energía indexada. Coste efectivo real, fórmulas auditables y detección de fees ocultos." />
        <link rel="canonical" href="https://reduce.es/productos/destripa-tu-indexado" />
        <meta property="og:title" content="Destripa tu Indexado | REDUCE" />
        <meta property="og:description" content="Análisis técnico independiente de contratos de energía indexada. Coste efectivo real, fórmulas auditables y detección de fees ocultos." />
        <meta property="og:url" content="https://reduce.es/productos/destripa-tu-indexado" />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/12 rounded-full blur-[130px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-green text-brand-dark text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_25px_rgba(163,230,53,0.35)]">
              Producto estrella
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.02] mb-4">
              {product.name}
            </h1>
            <p className="text-brand-green text-xl font-semibold italic mb-6">"{product.tagline}"</p>
            <p className="text-white/55 text-lg leading-relaxed font-medium">{product.description}</p>
            <Button
              href="#formulario"
              size="lg"
              arrow
              className="mt-8 shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)]"
            >
              Analizar mi indexado
            </Button>
          </div>

          <div className="space-y-4">
            <div className="glass-dark border border-white/10 rounded-[2rem] p-7">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
                <p className="text-white/35 text-xs font-bold uppercase tracking-widest">No es</p>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{product.isNot}</p>
            </div>
            <div className="glass-dark border border-brand-green/20 rounded-[2rem] p-7">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-brand-green" />
                <p className="text-brand-green text-xs font-bold uppercase tracking-widest">Sí es</p>
              </div>
              <div className="space-y-2">
                {product.is.split('. ').filter(Boolean).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                    <p className="text-white/65 text-sm">{item.replace('.', '')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key message */}
      <section className="py-14 px-6 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">{product.message}</p>
        </div>
      </section>

      {/* Problems */}
      {product.problems && (
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Qué analizamos</span>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
                Problemas que detectamos.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.problems.map((prob, i) => (
                <div
                  key={prob}
                  className={`rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ${
                    i === 0
                      ? 'bg-brand-dark border border-brand-dark shadow-lg'
                      : 'bg-white border border-border hover:border-brand-dark hover:shadow-md'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${i === 0 ? 'bg-brand-green' : 'bg-brand-green'}`} />
                  <p className={`text-sm font-semibold leading-snug ${i === 0 ? 'text-white' : 'text-brand-dark'}`}>{prob}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Form */}
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden" id="formulario">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/8 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Empezar el análisis</span>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
              Mándanos tu contrato. Lo analizamos.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8 font-medium">
              Necesitamos el contrato o fórmula de indexación y las últimas facturas. Con eso calculamos tu coste efectivo real.
            </p>
            <div className="space-y-4">
              {[
                'Análisis independiente, sin vinculación comercial',
                'Más de una década auditando contratos de todas las grandes comercializadoras',
                'Resultado: informe técnico con coste efectivo real y valoración del contrato',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="glass-dark border border-white/10 rounded-[2rem] p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Solicitud recibida</h3>
                <p className="text-white/50">Nos pondremos en contacto en las próximas 24-48 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-dark border border-white/10 rounded-[2rem] p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Nombre" id="nombre" required />
                  <FormField label="Apellidos" id="apellidos" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Email corporativo" id="email" type="email" required />
                  <FormField label="Teléfono" id="telefono" type="tel" />
                </div>
                <FormField label="Empresa" id="empresa" required />
                <FormField label="Cargo" id="cargo" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Nº de CUPS / suministros" id="cups" type="number" />
                  <SelectField label="Comercializadora actual" id="comercializadora" options={COMERCIALIZADORAS} />
                </div>
                <TextareaField
                  label="Describe brevemente tu situación"
                  id="mensaje"
                  rows={4}
                  placeholder="¿Tipo de contrato? ¿Dudas sobre tu fórmula o factura?"
                />
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                    Contrato y/o últimas facturas <span className="normal-case font-normal text-white/25">(recomendado)</span>
                  </p>
                  <FileUpload accept=".pdf,.xls,.xlsx,.csv,.doc,.docx" multiple />
                  <p className="text-xs text-white/30 mt-2">PDF, Excel, Word. Máximo 20 MB por archivo.</p>
                </div>
                <Button type="submit" size="lg" arrow={!loading} disabled={loading} className="w-full justify-center shadow-[0_0_25px_rgba(163,230,53,0.25)]">
                  {loading ? 'Enviando…' : 'Enviar solicitud de análisis'}
                </Button>
                {error && (
                  <p className="text-xs text-center text-red-400 mt-2 font-semibold">
                    Error al enviar. Escríbenos directamente a{' '}
                    <a href="mailto:info@reducenergia.es" className="underline">info@reducenergia.es</a>.
                  </p>
                )}
                <p className="text-xs text-center text-white/30">
                  Datos tratados conforme a nuestra{' '}
                  <Link to="/privacidad" className="underline hover:text-white/60">política de privacidad</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="También puede interesarte"
        items={[
          { label: 'Concurso energético asistido', to: '/productos/concurso-energetico', primary: true },
          { label: 'Control energético multisede', to: '/productos/control-multisede' },
          { label: 'Ver el modelo de las 5 capas', to: '/modelo' },
        ]}
      />
    </>
  );
}
