import { LegalPage, LegalSection, LegalList } from './LegalPage';

export function Accesibilidad() {
  return (
    <LegalPage
      title="Declaración de Accesibilidad"
      subtitle="Compromiso de REDUCE con la accesibilidad digital conforme a la normativa vigente."
      metaDesc="Declaración de accesibilidad de www.planreduce.com conforme a la Directiva (UE) 2019/882 y las pautas WCAG 2.1."
      updated="junio de 2026"
    >
      <LegalSection title="1. Compromiso con la accesibilidad">
        <p>
          REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L. está comprometida con hacer accesible su sitio web{' '}
          <strong className="text-brand-dark">www.planreduce.com</strong> conforme a las exigencias de la{' '}
          Directiva (UE) 2019/882 del Parlamento Europeo y del Consejo, relativa a los requisitos de accesibilidad de
          los productos y servicios (Acta Europea de Accesibilidad), que resulta plenamente aplicable a partir del{' '}
          28 de junio de 2025, así como a las Pautas de Accesibilidad para el Contenido Web{' '}
          <strong className="text-brand-dark">(WCAG) 2.1, nivel AA</strong>, elaboradas por el W3C, y a la norma
          técnica <strong className="text-brand-dark">UNE-EN 301 549:2022</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Estado de conformidad">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="font-semibold text-amber-800 mb-1">Conformidad parcial</p>
          <p className="text-amber-700 text-xs">
            El sitio web <strong>www.planreduce.com</strong> es <strong>parcialmente conforme</strong> con las WCAG 2.1
            nivel AA debido a las excepciones y al contenido no accesible que se enumeran a continuación.
          </p>
        </div>
        <p className="mt-3">
          Se entiende por conformidad parcial que parte del contenido no cumple aún con todos los criterios de éxito de
          las WCAG 2.1, nivel AA. Estamos trabajando activamente para subsanar estas carencias.
        </p>
      </LegalSection>

      <LegalSection title="3. Contenido no accesible">
        <p>El contenido que se detalla a continuación no es accesible por los siguientes motivos:</p>

        <div className="space-y-3">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark text-xs uppercase tracking-widest mb-2">
              Incumplimiento de la normativa de accesibilidad
            </p>
            <LegalList items={[
              'Algunas imágenes decorativas pueden carecer de atributo alt vacío (alt="") que las identifique explícitamente como decorativas para tecnologías de apoyo. Criterio WCAG 2.1: 1.1.1 (Nivel A).',
              'Determinadas animaciones de la interfaz no disponen de mecanismo para detenerlas o pausarlas. Criterio WCAG 2.1: 2.2.2 (Nivel A).',
              'El contraste de color de algunos textos sobre fondos con degradado puede no alcanzar la ratio mínima de 4,5:1 en todos los contextos de visualización. Criterio WCAG 2.1: 1.4.3 (Nivel AA).',
            ]} />
          </div>

          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark text-xs uppercase tracking-widest mb-2">
              Carga desproporcionada
            </p>
            <p>
              No se ha invocado la excepción de carga desproporcionada en ningún contenido del Sitio.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark text-xs uppercase tracking-widest mb-2">
              El contenido no entra dentro del ámbito de la legislación aplicable
            </p>
            <p>
              No aplica en la configuración actual del Sitio.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Preparación de la presente declaración">
        <p>
          La presente declaración fue preparada el <strong className="text-brand-dark">1 de junio de 2026</strong>{' '}
          mediante una autoevaluación realizada por el propio titular del sitio web, utilizando herramientas automáticas
          de verificación de accesibilidad y revisión manual conforme a las WCAG 2.1.
        </p>
        <p>
          La última revisión de esta declaración se realizó el <strong className="text-brand-dark">1 de junio de 2026</strong>.
        </p>
      </LegalSection>

      <LegalSection title="5. Plan de acción y mejoras previstas">
        <p>
          REDUCE está trabajando en las siguientes acciones para mejorar la accesibilidad del Sitio:
        </p>
        <LegalList items={[
          'Revisión y corrección de los atributos alt de todas las imágenes.',
          'Implementación de controles de pausa/detención para las animaciones de interfaz.',
          'Auditoría completa de contraste de color y corrección de los elementos que no alcancen los ratios mínimos exigidos.',
          'Evaluación de accesibilidad con usuarios con discapacidad para detectar barreras adicionales.',
        ]} />
      </LegalSection>

      <LegalSection title="6. Procedimiento de reclamación">
        <p>
          Si experimenta dificultades para acceder a cualquier contenido del Sitio o desea comunicar cualquier problema
          de accesibilidad, puede ponerse en contacto con nosotros mediante los siguientes canales:
        </p>
        <div className="bg-brand-light rounded-xl p-5 space-y-2 text-sm">
          <p><span className="font-semibold text-brand-dark">Correo electrónico:</span> administracion@planreduce.com</p>
          <p><span className="font-semibold text-brand-dark">Dirección postal:</span> C/ Serafín Pazo 28, 2ºB, 36.680 A Estrada (Pontevedra)</p>
        </div>
        <p>
          REDUCE se compromete a responder a las comunicaciones recibidas en un plazo máximo de{' '}
          <strong className="text-brand-dark">20 días hábiles</strong> desde su recepción, indicando las acciones
          tomadas o previstas.
        </p>
        <p>
          Si considera que su solicitud no ha sido atendida de forma satisfactoria, puede presentar una reclamación ante
          la autoridad competente en materia de accesibilidad digital conforme a la normativa nacional aplicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Tecnologías de apoyo compatibles">
        <p>
          El Sitio ha sido diseñado para ser compatible con las siguientes tecnologías de apoyo y combinaciones de
          navegador:
        </p>
        <LegalList items={[
          'Lectores de pantalla: NVDA con Mozilla Firefox (Windows), VoiceOver con Safari (macOS/iOS).',
          'Navegación exclusiva por teclado en los navegadores principales (Chrome, Firefox, Edge, Safari).',
          'Zoom del navegador hasta el 200% sin pérdida significativa de contenido o funcionalidad.',
          'Modo de alto contraste del sistema operativo.',
        ]} />
      </LegalSection>

      <LegalSection title="8. Referencias y normativa aplicable">
        <LegalList items={[
          'Directiva (UE) 2019/882 del Parlamento Europeo y del Consejo, de 17 de abril de 2019 (Acta Europea de Accesibilidad).',
          'Web Content Accessibility Guidelines (WCAG) 2.1 — W3C Recommendation, 5 de junio de 2018.',
          'UNE-EN 301 549:2022 — Requisitos de accesibilidad para productos y servicios TIC.',
          'Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.',
        ]} />
      </LegalSection>
    </LegalPage>
  );
}
