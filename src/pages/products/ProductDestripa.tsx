import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Euro,
  FileText,
  HelpCircle,
  Search,
  Send,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TALLY_DESTRIPA_INDEXADO_URL } from '../../config/links';

const reviewItems = [
  {
    title: 'Factura real',
    text: 'Importes, periodo, tarifa, comercializadora y datos del suministro.',
    icon: FileText,
  },
  {
    title: 'Contrato indexado',
    text: 'Condiciones visibles, estructura de precio y posibles costes asociados.',
    icon: ClipboardCheck,
  },
  {
    title: 'Curva y consumo',
    text: 'Cuando está disponible, permite analizar el comportamiento real del suministro.',
    icon: Activity,
  },
  {
    title: 'Simulación comparativa',
    text: 'Comparamos la facturación real frente a un escenario alternativo validado internamente.',
    icon: BarChart3,
  },
  {
    title: 'Resultado económico',
    text: 'Calculamos si hay ahorro estimado, si no hay diferencia relevante o si el escenario alternativo sale más caro.',
    icon: Euro,
  },
];

const processSteps = [
  {
    title: 'Solicitas el análisis',
    text: 'Rellenas el formulario y adjuntas una factura reciente para una primera revisión.',
  },
  {
    title: 'Revisamos si el caso encaja',
    text: 'Comprobamos los datos básicos y, si hace falta, te pedimos más documentación: facturas, curva cuarto-horaria o condiciones del contrato.',
  },
  {
    title: 'Recibes un informe claro',
    text: 'Si hay datos suficientes, generamos una comparativa con resultado económico, explicación y siguiente paso recomendado.',
  },
];

const neededItems = [
  'Una factura eléctrica reciente.',
  'Datos de contacto de la empresa.',
  'Comercializadora actual.',
  'Tipo de contrato, si lo conoces.',
  'Importe mensual aproximado.',
  'Curva cuarto-horaria, si la tienes.',
  'Contrato o condiciones particulares, si están disponibles.',
];

const deliverables = [
  {
    title: 'Comparativa económica',
    text: 'Facturación real frente a escenario simulado.',
  },
  {
    title: 'Lectura clara',
    text: 'Ahorro estimado, sin diferencia relevante o escenario no recomendable.',
  },
  {
    title: 'Informe entendible',
    text: 'Sin volcar tablas técnicas innecesarias. Lo importante es saber qué decisión tomar.',
  },
  {
    title: 'Siguiente paso',
    text: 'Si procede, revisión del contrato y posible derivación comercial.',
  },
];

const outcomes = [
  {
    title: 'Hay ahorro estimado',
    text: 'El escenario analizado mejora la facturación real y puede tener sentido revisar el contrato.',
    icon: CheckCircle2,
  },
  {
    title: 'No hay diferencia relevante',
    text: 'El cambio no parece suficientemente significativo con los datos disponibles.',
    icon: AlertTriangle,
  },
  {
    title: 'El escenario analizado sale más caro',
    text: 'No recomendamos plantear cambio bajo esas condiciones sin revisar una alternativa distinta.',
    icon: XCircle,
  },
];

const faqs = [
  {
    question: '¿Esto garantiza ahorro?',
    answer:
      'No. El análisis puede detectar ahorro estimado, ausencia de diferencia relevante o incluso que el escenario alternativo no compensa.',
  },
  {
    question: '¿Tengo que cambiar de comercializadora?',
    answer:
      'No. La solicitud no implica ningún cambio de contrato. Primero se analiza el caso.',
  },
  {
    question: '¿Qué documentación necesito?',
    answer:
      'Para empezar, una factura reciente. Si el caso avanza, pueden solicitarse más facturas, curva cuarto-horaria o condiciones del contrato.',
  },
  {
    question: '¿Qué hacéis con mi factura?',
    answer:
      'Se utiliza para valorar el suministro y determinar si el análisis encaja. Debe tratarse conforme a la política de privacidad vigente.',
  },
  {
    question: '¿REDUCE vende energía?',
    answer:
      'REDUCE analiza, revisa y ayuda a tomar decisiones sobre suministros. Si procede una contratación, se gestiona mediante el canal comercial correspondiente.',
  },
  {
    question: '¿Qué pasa si no hay ahorro?',
    answer:
      'Se comunica. El objetivo no es forzar un cambio, sino saber si el contrato actual compensa frente al escenario analizado.',
  },
];

function TallyButton({ children, className = '' }: { children: string; className?: string }) {
  return (
    <a
      href={TALLY_DESTRIPA_INDEXADO_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-black text-brand-dark shadow-[0_0_30px_rgba(163,230,53,0.32)] transition-[transform,box-shadow,filter] duration-150 hover:brightness-110 hover:shadow-[0_0_48px_rgba(163,230,53,0.5)] active:scale-[0.97] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="min-w-0 max-w-3xl">
      {eyebrow && (
        <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2 className={`break-words text-[1.75rem] font-black leading-[1.2] tracking-tight sm:text-4xl sm:leading-tight lg:text-5xl ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-5 break-words text-base font-medium leading-relaxed sm:text-lg ${light ? 'text-white/55' : 'text-muted'}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function ProductDestripa() {
  return (
    <>
      <Helmet>
        <title>Destripa tu Indexado | REDUCE</title>
        <meta
          name="description"
          content="Análisis comercial y técnico de contratos eléctricos indexados para saber si el contrato actual compensa frente a un escenario alternativo."
        />
        <link rel="canonical" href="https://planreduce.com/destripa-tu-indexado" />
        <meta property="og:title" content="Destripa tu Indexado | REDUCE" />
        <meta
          property="og:description"
          content="Analizamos si tu contrato eléctrico indexado está funcionando a tu favor o si puede estar costándote más de lo necesario."
        />
        <meta property="og:url" content="https://planreduce.com/destripa-tu-indexado" />
        <meta property="og:image" content="https://planreduce.com/og-image.svg" />
        <meta name="twitter:title" content="Destripa tu Indexado | REDUCE" />
        <meta
          name="twitter:description"
          content="Analizamos si tu contrato eléctrico indexado está funcionando a tu favor o si puede estar costándote más de lo necesario."
        />
        <meta name="twitter:url" content="https://planreduce.com/destripa-tu-indexado" />
        <meta name="twitter:image" content="https://planreduce.com/og-image.svg" />
      </Helmet>

      <section className="relative overflow-hidden bg-brand-dark px-4 py-8 sm:px-6 sm:py-16 lg:py-12">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,26,46,0.96)_0%,rgba(21,39,65,0.92)_48%,rgba(12,26,46,0.98)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0 w-full max-w-[358px] sm:max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-green sm:mb-8">
              <ShieldCheck className="h-4 w-4" />
              Análisis independiente
            </div>
            <h1 className="max-w-4xl text-[2.35rem] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.7rem]">
              <span className="block">Destripa tu</span>
              <span className="block">Indexado</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-white/78 sm:mt-7 sm:text-2xl">
              Analizamos si tu contrato eléctrico indexado está funcionando a tu favor o si puede estar costándote más de lo necesario.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/48 sm:mt-5 sm:text-lg">
              Revisamos tu factura, consumo y condiciones del suministro para detectar si existe margen de mejora, si no hay diferencia relevante o si no conviene cambiar bajo el escenario analizado.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <TallyButton className="w-full sm:w-auto">Solicitar análisis</TallyButton>
              <a
                href="#que-analizamos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/35 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Ver qué analizamos
                <Search className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:hidden">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/28">Informe preliminar</p>
                  <p className="mt-1 text-sm font-bold text-white">Indexado en revisión</p>
                </div>
                <BarChart3 className="h-5 w-5 flex-shrink-0 text-brand-green" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Factura', 'Consumo', 'Resultado'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-brand-dark/50 px-3 py-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-green">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] md:block sm:p-6 lg:min-h-[540px]">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/28">Informe preliminar</p>
                <p className="mt-1 text-sm font-bold text-white">Contrato indexado</p>
              </div>
              <span className="rounded-full bg-brand-green px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-brand-dark">
                Revisión
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Factura real', 'Validada'],
                ['Consumo', 'En lectura'],
                ['Escenario', 'Simulado'],
                ['Resultado', 'Pendiente'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/28">{label}</p>
                  <p className="mt-3 text-lg font-black text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-brand-green/20 bg-brand-green/[0.08] p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-green">Comparativa</p>
                <BarChart3 className="h-5 w-5 text-brand-green" />
              </div>
              <div className="space-y-4">
                {[
                  ['Facturación real', '72%'],
                  ['Escenario alternativo', '58%'],
                  ['Costes asociados', '34%'],
                ].map(([label, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-white/65">{label}</span>
                      <span className="text-xs font-bold text-white/35">{width}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-brand-green" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 xl:grid-cols-3 xl:gap-2">
              {outcomes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-dark/50 px-4 py-3 xl:items-start xl:px-3">
                    <Icon className="h-4 w-4 flex-shrink-0 text-brand-green" />
                    <span className="text-sm font-semibold leading-snug text-white/62">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="El problema"
            title="Que tu contrato sea indexado no significa que esté optimizado."
            text="Muchos contratos indexados parecen transparentes porque están ligados al mercado, pero el coste real puede depender de fees, condiciones particulares, consumo, potencia, servicios añadidos o fórmulas que no siempre son fáciles de interpretar."
          />
          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {[
              '¿Sabes cuánto estás pagando realmente por tu energía?',
              '¿Tu contrato actual compensa frente a otro escenario?',
              '¿Tienes costes que no estás revisando mes a mes?',
              '¿Sabes si cambiar de condiciones te ayudaría o te perjudicaría?',
            ].map((item) => (
              <div key={item} className="flex min-h-[116px] min-w-0 items-start gap-4 rounded-2xl border border-border bg-brand-light p-5">
                <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                <p className="min-w-0 break-words text-sm font-bold leading-relaxed text-brand-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="que-analizamos" className="bg-brand-light px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Qué analizamos" title="Qué revisamos" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {reviewItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`lift rounded-2xl p-5 ${index === 0 ? 'bg-brand-dark text-white shadow-[0_18px_50px_rgba(12,26,46,0.18)]' : 'border border-border bg-white text-brand-dark'}`}
                >
                  <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? 'bg-brand-green text-brand-dark' : 'bg-brand-green/12 text-brand-green'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight">{item.title}</h3>
                  <p className={`mt-3 text-sm font-medium leading-relaxed ${index === 0 ? 'text-white/58' : 'text-muted'}`}>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Cómo funciona" title="Cómo funciona" light />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-black text-brand-dark">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white">{step.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/55">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Para empezar"
              title="Qué necesitamos para empezar"
              text="Para la primera revisión basta con algunos datos básicos y una factura reciente. Si el caso avanza, podremos pedir documentación adicional."
            />
            <div className="mt-8 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-5">
              <p className="text-sm font-bold leading-relaxed text-brand-dark">
                Esta solicitud no implica ningún cambio de contrato ni contratación de suministro.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {neededItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-brand-light px-4 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                <p className="text-sm font-semibold leading-relaxed text-brand-dark/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Resultado" title="Qué recibirás si el caso encaja" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item.title} className="lift rounded-2xl border border-border bg-white p-6">
                <CheckCircle2 className="mb-6 h-6 w-6 text-brand-green" />
                <h3 className="text-xl font-black tracking-tight text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeading
              eyebrow="Criterio"
              title="No siempre recomendamos cambiar. Y eso es precisamente lo importante."
              text="El análisis puede llegar a tres conclusiones:"
              light
            />
            <div className="grid gap-4">
              {outcomes.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-brand-dark">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-white/55">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-border bg-brand-light p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-brand-green">Formulario</span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
              Solicita la revisión de tu indexado
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-muted">
              Rellena el formulario y adjunta una factura reciente. Revisaremos si el caso encaja y te indicaremos el siguiente paso.
            </p>
            <TallyButton className="mt-8 w-full sm:w-auto">Rellenar formulario</TallyButton>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-white p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-brand-dark">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-black text-brand-dark">Formulario Tally</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted">
                  Adjunta una factura reciente y los datos básicos del suministro. La revisión inicial no implica ningún cambio de contrato ni contratación de suministro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black text-brand-dark">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-green transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm font-medium leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-5 block text-xs font-black uppercase tracking-[0.2em] text-brand-green">Siguiente paso</span>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Quieres saber si tu indexado compensa?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-white/55 sm:text-lg">
            Solicita una primera revisión y descubre si tu contrato actual tiene margen de mejora o si ya está funcionando mejor que la alternativa analizada.
          </p>
          <TallyButton className="mt-9 w-full sm:w-auto">Solicitar análisis</TallyButton>
          <div className="mt-8 flex items-center justify-center gap-3 text-xs font-bold text-white/30">
            <ShieldCheck className="h-4 w-4 text-brand-green" />
            Sin cambio de contrato ni contratación de suministro al solicitar la revisión.
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-4 pb-12 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8 text-sm font-semibold">
          <Link to="/productos" className="text-white/35 transition-colors hover:text-white">
            Ver productos
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/18" />
          <Link to="/modelo" className="text-white/35 transition-colors hover:text-white">
            Modelo de las 5 capas
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/18" />
          <Link to="/privacidad" className="text-white/35 transition-colors hover:text-white">
            Política de privacidad
          </Link>
        </div>
      </section>
    </>
  );
}
