import { LegalPage, LegalSection, LegalList, LegalTable } from './LegalPage';

export function PoliticaCookies() {
  return (
    <LegalPage
      title="Política de Cookies"
      subtitle="Información sobre el uso de cookies y tecnologías similares en este sitio web."
      metaDesc="Política de cookies de REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L. Información sobre cookies utilizadas en www.planreduce.com."
      updated="junio de 2026"
    >
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que los sitios web instalan en el dispositivo del usuario
          (ordenador, tablet, teléfono móvil) cuando este los visita. Las cookies permiten al sitio web recordar
          información sobre la visita, como el idioma preferido, la sesión iniciada u otras preferencias, lo que
          facilita y mejora su experiencia en próximas visitas.
        </p>
        <p>
          Existen también tecnologías similares, como el almacenamiento local del navegador (<em>localStorage</em> o
          <em> sessionStorage</em>), que funcionan de manera análoga pero sin enviar datos al servidor.
        </p>
      </LegalSection>

      <LegalSection title="2. Marco normativo">
        <p>
          Esta Política de Cookies se elabora en cumplimiento de:
        </p>
        <LegalList items={[
          'Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), en particular su artículo 22.2.',
          'Reglamento (UE) 2016/679, de 27 de abril, General de Protección de Datos (RGPD).',
          'Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
          'Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos (AEPD), en su versión más reciente.',
        ]} />
      </LegalSection>

      <LegalSection title="3. Tipos de cookies según su finalidad">
        <div className="space-y-3">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Cookies técnicas o estrictamente necesarias</p>
            <p>
              Permiten al usuario la navegación a través del Sitio y la utilización de las diferentes opciones o
              servicios que en él existen. Son esenciales para el correcto funcionamiento del Sitio. No requieren el
              consentimiento del usuario y no pueden desactivarse.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Cookies de preferencias o personalización</p>
            <p>
              Permiten recordar información para que el usuario acceda al servicio con determinadas características
              (idioma, tipo de navegador, configuración regional…). Requieren consentimiento salvo que las haya solicitado
              expresamente el usuario.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Cookies analíticas o de medición</p>
            <p>
              Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización
              del servicio. Requieren consentimiento del usuario.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Cookies de publicidad comportamental</p>
            <p>
              Almacenan información del comportamiento del usuario para elaborar perfiles de preferencias y mostrar
              publicidad personalizada. Requieren consentimiento explícito del usuario.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Cookies utilizadas en este Sitio">
        <p>
          El presente Sitio web (<strong className="text-brand-dark">www.planreduce.com</strong>) es un sitio de
          contenido informativo. En su configuración actual, <strong className="text-brand-dark">no instala cookies
          propias de analítica ni de publicidad</strong> en el dispositivo del usuario. Las únicas conexiones con
          servicios de terceros derivan de la carga de tipografías mediante Google Fonts.
        </p>

        <LegalTable
          headers={['Cookie / Tecnología', 'Titular', 'Finalidad', 'Tipo', 'Duración']}
          rows={[
            [
              'Tipografías web (Google Fonts API)',
              'Google LLC',
              'Carga de fuentes tipográficas alojadas en servidores de Google. No instala cookies en el dispositivo del usuario, pero sí transmite la dirección IP del usuario a Google en cada carga de página.',
              'Técnica / conexión a tercero',
              'Sesión (no persiste)',
            ],
          ]}
        />

        <p className="text-xs bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4">
          <strong>Nota:</strong> La conexión a Google Fonts implica una transferencia de la dirección IP del usuario a
          Google LLC (EE. UU.), legitimada al amparo del Marco de Privacidad de Datos UE-EE. UU. Para más información,
          consulte la{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            Política de Privacidad de Google
          </a>.
        </p>

        <p>
          Si en el futuro se implementaran cookies de analítica, publicidad u otros servicios de terceros, esta Política
          de Cookies se actualizará previamente y se solicitará el consentimiento del usuario mediante un mecanismo
          adecuado.
        </p>
      </LegalSection>

      <LegalSection title="5. Gestión y configuración de cookies">
        <p>
          Puede configurar su navegador para aceptar o rechazar cookies, o para ser informado cuando se instale una
          cookie. A continuación se facilitan los enlaces a las instrucciones de gestión de cookies de los principales
          navegadores:
        </p>
        <LegalList items={[
          'Google Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.',
          'Mozilla Firefox: Menú → Configuración → Privacidad y seguridad → Cookies y datos del sitio.',
          'Microsoft Edge: Configuración → Cookies y permisos de sitio → Cookies y datos del sitio.',
          'Apple Safari: Preferencias → Privacidad → Cookies y datos de sitios web.',
          'Opera: Configuración → Avanzado → Privacidad y seguridad → Cookies.',
        ]} />
        <p>
          Tenga en cuenta que la desactivación de determinadas cookies puede afectar al funcionamiento del Sitio.
        </p>
      </LegalSection>

      <LegalSection title="6. Consentimiento y revocación">
        <p>
          Dado que el Sitio no instala cookies que requieran consentimiento en su configuración actual, no se presenta
          un banner de cookies al usuario en la primera visita. Si esta situación cambiase, se implementaría un mecanismo
          de consentimiento previo e informado, conforme a los requisitos de la AEPD y el RGPD, que permitiría al
          usuario aceptar, rechazar o personalizar las cookies de forma granular y revocar el consentimiento prestado en
          cualquier momento con la misma facilidad con que se otorgó.
        </p>
      </LegalSection>

      <LegalSection title="7. Más información">
        <p>
          Para cualquier consulta relacionada con el uso de cookies, puede contactar con nosotros en{' '}
          <strong className="text-brand-dark">administracion@planreduce.com</strong>.
        </p>
        <p>
          Para más información sobre el uso de cookies y sus derechos, puede consultar la web de la Agencia Española de
          Protección de Datos:{' '}
          <span className="font-semibold text-brand-dark">www.aepd.es</span>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
