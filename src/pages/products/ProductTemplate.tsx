import { CheckCircle2, XCircle, ChevronLeft, ArrowRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { FormField, TextareaField } from '../../components/ui/FormField';
import { CTABand } from '../../components/ui/CTABand';
import { PRODUCTS } from '../../data/content';

export function ProductTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [submitted, setSubmitted] = useState(false);

  if (!product || product.slug === 'destripa-tu-indexado') {
    return <Navigate to="/productos" replace />;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | REDUCE</title>
        <meta name="description" content={product.tagline} />
        <link rel="canonical" href={`https://reduce.es/productos/${product.slug}`} />
        <meta property="og:title" content={`${product.name} | REDUCE`} />
        <meta property="og:description" content={product.tagline} />
        <meta property="og:url" content={`https://reduce.es/productos/${product.slug}`} />
      </Helmet>
      {/* Hero */}
      <section className="bg-brand-dark py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 text-white/35 hover:text-white/70 text-sm font-semibold mb-10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Todos los productos
          </Link>
          <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.02] mb-4 max-w-3xl">
            {product.name}
          </h1>
          <p className="text-brand-green text-xl font-semibold italic mb-6">"{product.tagline}"</p>
          <p className="text-white/55 text-xl leading-relaxed max-w-2xl font-medium">{product.description}</p>
        </div>
      </section>

      {/* Is / Is not */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="rounded-[2rem] p-8 border border-red-100 bg-red-50/50">
            <div className="flex items-center gap-3 mb-5">
              <XCircle className="w-5 h-5 text-red-400" />
              <p className="text-xs font-bold uppercase tracking-widest text-red-400">No es</p>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">{product.isNot}</p>
          </div>
          <div className="rounded-[2rem] p-8 border border-emerald-100 bg-emerald-50/50">
            <div className="flex items-center gap-3 mb-5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sí es</p>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">{product.is}</p>
          </div>
        </div>
      </section>

      {/* Key message */}
      <section className="py-14 px-6 bg-brand-light border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-brand-green pl-8">
            <p className="text-2xl font-bold text-brand-dark leading-snug">{product.message}</p>
          </div>
        </div>
      </section>

      {/* Includes */}
      {product.includes && product.includes.length > 0 && (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Qué incluye</span>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tighter">
                Qué cubre este servicio.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.includes.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 rounded-2xl px-5 py-4 hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 ${
                    i === 0
                      ? 'bg-brand-dark border border-brand-dark'
                      : 'bg-brand-light border border-border hover:border-brand-dark hover:shadow-md'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 ? 'text-brand-green' : 'text-brand-green'}`} />
                  <p className={`text-sm font-semibold ${i === 0 ? 'text-white' : 'text-brand-dark'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Form */}
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden" id="contacto">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/8 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Solicitar información</span>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4">Hablemos de tu caso.</h2>
            <p className="text-white/55 text-lg leading-relaxed font-medium">
              Cuéntanos tu situación y valoramos si este servicio encaja con lo que necesitas.
            </p>
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
                <TextareaField
                  label="Cuéntanos tu situación"
                  id="mensaje"
                  rows={5}
                  placeholder="¿Cuántas sedes? ¿Qué problema quieres resolver?"
                />
                <Button type="submit" size="lg" arrow className="w-full justify-center shadow-[0_0_25px_rgba(163,230,53,0.25)]">
                  {product.cta}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="También puede interesarte"
        items={[
          { label: 'Destripa tu Indexado', to: '/destripa-tu-indexado', primary: true },
          { label: 'Ver todos los productos', to: '/productos' },
          { label: 'Modelo de las 5 capas', to: '/modelo' },
        ]}
      />
    </>
  );
}
