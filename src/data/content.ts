// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  phone1: '986 57 01 98',
  phone2: '649 870 579',
  email: 'info@reducenergia.es',
  address: 'Calle Serafín Pazo nº 28 – 2ºB',
  city: '36680 A Estrada · Pontevedra',
};

// ─── Clients ─────────────────────────────────────────────────────────────────
export const CLIENTS = [
  { name: 'Primor', logo: '/primor.png' },
  { name: 'Perfumerías Arenal', logo: '/arenal.png' },
  { name: 'Digamel', logo: '/digamel.png' },
  { name: 'Inasus', logo: '/inasus.png' },
  { name: 'Bico Xeado', logo: '/bico_xeado.png' },
  { name: 'Cash Galicia', logo: '/cash_galicia.png' },
  { name: 'Cernaval', logo: '/cernaval.png' },
  { name: 'Ópticas Contalén', logo: '/opticas_contalen.png' },
  { name: 'STL', logo: '/stl.png' },
  { name: 'Yatecomere', logo: '/yatecomere.png' },
];

// ─── Territories ─────────────────────────────────────────────────────────────
export const TERRITORIES = [
  'España peninsular',
  'Baleares',
  'Canarias',
  'Ceuta',
  'Melilla',
  'Portugal',
  'Italia',
  'Andorra',
];

// ─── Key messages ────────────────────────────────────────────────────────────
export const KEY_MESSAGES = [
  'No vendemos energía. La auditamos y la operamos.',
  'El verdadero problema es controlar, auditar y operar cientos de suministros.',
];

// ─── Layers ──────────────────────────────────────────────────────────────────
export interface Layer {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  messages: string[];
  topics: string[];
  honestNote?: string;
}

export const LAYERS: Layer[] = [
  {
    id: 'A',
    slug: 'capa-a',
    title: 'Compra de energía',
    tagline: 'La factura se gana o se pierde una capa antes.',
    intro:
      'La compra de energía es una decisión financiera, no una commodity de precio. El coste que pagarás durante los próximos 12 meses se define antes de firmar. Comparar solo OMIE + fee es perder el partido antes de empezar.',
    messages: [
      'La compra de energía es una decisión financiera.',
      'La factura se gana o se pierde una capa antes.',
    ],
    topics: [
      'Fórmulas indexadas',
      'Coberturas de precio',
      'Cierres de mercado',
      'Riesgo de mercado',
      'Estrategia de compra',
      'Análisis de volatilidad',
      'PPAs',
      'Comparativa de coste efectivo',
    ],
  },
  {
    id: 'B',
    slug: 'capa-b',
    title: 'Control de facturación',
    tagline: 'La mayoría de empresas no conocen su coste efectivo real.',
    intro:
      'Validar una factura energética no es leerla: es reproducirla técnicamente, partida por partida, con los datos de la distribuidora. La diferencia entre lo que debería costar y lo que se cobra es donde está el dinero que la mayoría de empresas está dejando sobre la mesa.',
    messages: [
      'La factura solo puede auditarse si existen datos y trazabilidad.',
      'La mayoría de empresas no conocen su coste efectivo real.',
    ],
    topics: [
      'Auditoría técnica de facturas',
      'ATR (Acceso a Terceros en Red)',
      'Energía reactiva',
      'Desvíos de perfilado',
      'Validación partida a partida',
      'Fórmulas auditables',
      'Coste efectivo real',
      'Reproducción técnica de factura',
    ],
  },
  {
    id: 'C',
    slug: 'capa-c',
    title: 'Operativa retail',
    tagline: 'El problema real no es solo el precio de la energía.',
    intro:
      'La energía no es la última pieza del plan de expansión: es la que decide si las demás sirven para algo. Una apertura retrasada por un expediente energético atascado no es un retraso menor. Es lucro cesante, alquiler pagado en vano y plantilla sin operar.',
    messages: [
      'Garantizamos apertura en tiempo. El 100%.',
      'El mayor dolor del retail: la tienda preparada, el personal contratado, el género en almacén — y no poder abrir por la energía. Eso no ocurre con REDUCE.',
      'No abrir una tienda en fecha por un problema de energía no es un retraso: es lucro cesante, alquiler pagado en vano y plantilla sin operar.',
      'Damos de alta tiendas en España, Islas, Ceuta, Melilla, Portugal, Italia y Andorra. Ocho territorios. Una sola interlocución.',
    ],
    topics: [
      'Aperturas de tienda',
      'Altas de suministro',
      'Ampliaciones de potencia',
      'Coordinación con distribuidoras',
      'Seguimiento de expedientes',
      'Legalizaciones',
      'Coordinación multisede',
      'Gestión multipaís',
    ],
  },
  {
    id: 'D',
    slug: 'capa-d',
    title: 'Consumo y eficiencia',
    tagline: 'Monitorización y automatización, con partners especializados.',
    intro:
      'Esta capa no es hoy nuestra principal especialización. Lo decimos abiertamente porque la honestidad forma parte de nuestro posicionamiento. Contamos con partners especializados para dar cobertura completa al modelo.',
    messages: ['La monitorización sin contexto no es control.'],
    topics: ['HVAC', 'Monitorización de consumo', 'Automatización', 'Eficiencia energética', 'Control de instalación'],
    honestNote:
      'Esta capa se ejecuta en colaboración con partners especializados como ECOMT en automatización y monitorización internacional retail. No aparentamos capacidades que no tenemos: esta honestidad refuerza la credibilidad del resto del posicionamiento.',
  },
  {
    id: 'E',
    slug: 'capa-e',
    title: 'Reporting y control corporativo',
    tagline: 'Sin trazabilidad no existe control real.',
    intro:
      'Una estructura multisede necesita datos auditables, consolidados y presentables a dirección. El reporting energético no es un informe bonito: es la herramienta que permite tomar decisiones sobre cientos de suministros sin perder el hilo.',
    messages: [
      'Sin trazabilidad no existe control real.',
      'Una estructura multisede necesita datos auditables.',
    ],
    topics: [
      'Dashboards de control',
      'KPIs energéticos',
      'Reporting a dirección',
      'Consolidación multisede',
      'Control presupuestario',
      'Trazabilidad punto a punto',
      'Reporting ejecutivo',
      'Alertas automáticas',
    ],
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  isNot: string;
  is: string;
  problems?: string[];
  includes?: string[];
  message: string;
  cta: string;
  star?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'destripa-tu-indexado',
    name: 'Destripa tu Indexado',
    tagline: 'Si una comercializadora puede explicarlo, nosotros podemos auditarlo. Y si no puede explicarlo, también.',
    description:
      'Análisis técnico independiente de fórmulas indexadas para calcular el coste efectivo real de la energía contratada. Más de una década diseccionando contratos de todas las grandes comercializadoras.',
    isNot: 'Comparador. Captador comercial. Vendedor de energía.',
    is: 'Auditoría independiente. Análisis técnico. Interpretación económica. Validación contractual. Análisis de riesgo.',
    problems: [
      'Fórmulas opacas o difíciles de reproducir',
      'Fees ocultos o mal desglosados',
      'Servicios de ajuste (SSAA) sin explicación',
      'Perfilados que no corresponden al consumo real',
      'Coberturas cuyo coste real se desconoce',
      'Concursos mal comparados entre comercializadoras',
      'Coste efectivo real desconocido',
    ],
    message: 'La mayoría de empresas comparan solo OMIE + fee. El coste real depende de muchas más variables.',
    cta: 'Analizar mi indexado',
    star: true,
  },
  {
    slug: 'concurso-energetico',
    name: 'Concurso energético asistido',
    tagline: 'No todas las ofertas son comparables.',
    description:
      'Apoyo a clientes corporativos en la estructuración técnica y económica de concursos energéticos: redacción de pliego técnico, validación de ofertas, modelado de coste efectivo y comparativa homogénea.',
    isNot: '"Te buscamos la oferta más barata." Eso ya lo hacen muchos.',
    is: 'Validación técnica. Análisis de coste efectivo. Comparativa homogénea. Revisión de fórmulas. Modelado de riesgo. Apoyo a la decisión de compra.',
    message: 'Un concurso mal estructurado puede ocultar enormes diferencias económicas.',
    cta: 'Solicitar revisión de concurso',
  },
  {
    slug: 'control-multisede',
    name: 'Control energético multisede',
    tagline: 'No revisamos manualmente miles de facturas. Detectamos incidencias económicamente relevantes.',
    description:
      'Servicio continuo de control sobre carteras grandes de suministros. Ingestión automática de facturas, base de datos energética propia, validación, detección de incidencias y reporting periódico.',
    isNot: 'Un servicio de lectura y archivo de facturas.',
    is: 'Control activo, auditoría continua y detección sistemática de incidencias con impacto económico real.',
    includes: [
      'Ingestión automática de facturas',
      'Histórico energético consolidado',
      'Control de CUPS y altas/bajas',
      'Dashboards de control',
      'Gestión de incidencias',
      'KPIs energéticos',
      'Reporting corporativo',
      'Control presupuestario',
      'Trazabilidad completa',
      'Validación automática de facturas',
    ],
    message: 'Una cadena de 100 tiendas no se controla con Excel y buena voluntad.',
    cta: 'Analizar mi estructura energética',
  },
  {
    slug: 'operativa-retail',
    name: 'Operativa retail internacional',
    tagline: 'La energía retail es una capa crítica de la operación.',
    description:
      'Gestión de la operativa energética asociada a la expansión y mantenimiento de redes de tiendas: aperturas, altas, ampliaciones, coordinación con distribuidoras y seguimiento de expedientes en múltiples países.',
    isNot: 'Un servicio de tramitación puntual de expedientes.',
    is: 'Operativa continua, multipaís y multisede, con conocimiento real de las distribuidoras locales y sus tiempos.',
    includes: [
      'Aperturas de tienda',
      'Altas de suministro',
      'Ampliaciones de potencia',
      'Coordinación con distribuidoras locales',
      'Seguimiento de expedientes',
      'Legalizaciones',
      'Soporte multipaís',
    ],
    message:
      'Damos de alta tiendas en España, Islas, Ceuta, Melilla, Portugal, Italia y Andorra. Ocho territorios. Una sola interlocución.',
    cta: 'Solicitar reunión',
  },
];

// ─── Sectors ─────────────────────────────────────────────────────────────────
export const SECTORS = [
  {
    name: 'Retail multisede',
    problem: 'Carteras de cientos de tiendas con suministros dispersos y sin control energético centralizado.',
    value: 'Control, auditoría y gestión centralizada desde 2012.',
    ref: 'Primor, Perfumerías Arenal y otros',
  },
  {
    name: 'Perfumería y cosmética',
    problem: 'Expansión continua, aperturas frecuentes y presencia en múltiples territorios nacionales e internacionales.',
    value: 'Operativa de alta y ampliación en 8 territorios con interlocución única.',
    ref: '',
  },
  {
    name: 'Alimentación y restauración',
    problem: 'Operación intensiva, alta dependencia energética y facturas indexadas complejas.',
    value: 'Auditoría de facturación y detección sistemática de incidencias económicas.',
    ref: 'Bico de Xeado y otros',
  },
  {
    name: 'Sector servicios con red propia',
    problem: 'Estructura multisede sin equipo energético interno especializado.',
    value: 'Externalización completa del control energético sin necesidad de equipo propio.',
    ref: '',
  },
  {
    name: 'Grandes superficies',
    problem: 'Contratos indexados complejos, alto volumen de facturación y múltiples CUPS.',
    value: 'Análisis técnico de fórmulas y validación continua del coste efectivo.',
    ref: '',
  },
];
