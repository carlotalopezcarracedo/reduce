import { LegalPage, LegalSection, LegalList } from './LegalPage';

export function AvisoLegal() {
  return (
    <LegalPage
      title="Aviso Legal"
      subtitle="Información legal sobre el titular del sitio web y las condiciones de uso."
      metaDesc="Aviso legal de REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L., titular de www.planreduce.com."
      updated="junio de 2026"
    >
      <LegalSection title="1. Datos identificativos del titular">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos:
        </p>
        <div className="bg-brand-light rounded-xl p-5 space-y-2 text-sm">
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Razón social:</span>
            <span>REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L.</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">CIF:</span>
            <span>B 94.063.823</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Domicilio:</span>
            <span>C/ Serafín Pazo 28, 2ºB, 36.680 A Estrada (Pontevedra)</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Correo electrónico:</span>
            <span>administracion@planreduce.com</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Sitio web:</span>
            <span>www.planreduce.com</span>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="2. Objeto y ámbito de aplicación">
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web <strong className="text-brand-dark">www.planreduce.com</strong> (en
          adelante, «el Sitio»), titularidad de REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L. (en adelante, «REDUCE»).
        </p>
        <p>
          El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones. REDUCE se reserva
          el derecho a modificar este Aviso Legal en cualquier momento, siendo responsabilidad del usuario consultarlo
          periódicamente.
        </p>
      </LegalSection>

      <LegalSection title="3. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del Sitio —incluyendo, sin carácter limitativo, textos, gráficos, logotipos, iconos,
          imágenes, archivos de audio y vídeo, descargas digitales y recopilaciones de datos— son propiedad de REDUCE o
          de sus licenciantes y están protegidos por la legislación española e internacional sobre propiedad intelectual
          e industrial.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier elemento del
          Sitio sin autorización expresa y por escrito de REDUCE, salvo que dicha reproducción sea exclusivamente para uso
          personal y privado.
        </p>
      </LegalSection>

      <LegalSection title="4. Condiciones de uso">
        <p>El usuario se compromete a utilizar el Sitio de conformidad con la ley y el presente Aviso Legal, y en
        particular se obliga a:</p>
        <LegalList items={[
          'No utilizar el Sitio con fines ilícitos o contrarios a las presentes condiciones.',
          'No introducir, almacenar o difundir mediante el Sitio contenidos que sean difamatorios, obscenos, amenazantes, xenófobos o que atenten contra los derechos fundamentales.',
          'No dañar, inutilizar, sobrecargar o deteriorar el Sitio o impedir el normal uso por parte de otros usuarios.',
          'No obtener o intentar obtener información, mensajes o documentos de forma no autorizada.',
        ]} />
      </LegalSection>

      <LegalSection title="5. Exclusión de garantías y responsabilidad">
        <p>
          REDUCE no garantiza la disponibilidad continua del Sitio, ni que esté libre de errores o virus. El acceso y
          uso del Sitio se realizan bajo la exclusiva responsabilidad del usuario.
        </p>
        <p>
          REDUCE no será responsable de los daños o perjuicios de cualquier naturaleza que pudieran derivarse del acceso
          al Sitio o del uso de la información contenida en él, incluyendo los causados por errores u omisiones en los
          contenidos, la falta de disponibilidad del Sitio o la transmisión de virus informáticos.
        </p>
        <p>
          Los contenidos del Sitio tienen finalidad informativa y no constituyen asesoramiento técnico, jurídico,
          financiero ni de ningún otro tipo.
        </p>
      </LegalSection>

      <LegalSection title="6. Política de enlaces">
        <p>
          El Sitio puede contener enlaces a sitios web de terceros. REDUCE no tiene control sobre dichos sitios ni
          asume responsabilidad alguna por sus contenidos, políticas de privacidad o prácticas. La inclusión de un enlace
          no implica respaldo o recomendación por parte de REDUCE.
        </p>
        <p>
          Queda prohibido establecer hipervínculos desde sitios de terceros al Sitio de REDUCE sin autorización previa y
          expresa de REDUCE. En ningún caso podrá el Sitio de REDUCE aparecer enmarcado (frame) dentro de otro sitio web.
        </p>
      </LegalSection>

      <LegalSection title="7. Legislación aplicable y jurisdicción">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia
          que pudiera surgir en relación con el acceso o uso del Sitio, las partes se someten a los Juzgados y Tribunales
          competentes según la legislación aplicable, sin perjuicio de los derechos que pudieran corresponder al usuario
          en su condición de consumidor.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
