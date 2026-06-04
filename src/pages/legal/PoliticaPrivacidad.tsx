import { LegalPage, LegalSection, LegalList } from './LegalPage';

export function PoliticaPrivacidad() {
  return (
    <LegalPage
      title="Política de Privacidad"
      subtitle="Información sobre el tratamiento de sus datos personales conforme al RGPD y la LOPDGDD."
      metaDesc="Política de privacidad de REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L. Información sobre tratamiento de datos personales."
      updated="junio de 2026"
    >
      <LegalSection title="1. Responsable del tratamiento">
        <div className="bg-brand-light rounded-xl p-5 space-y-2 text-sm">
          <div className="grid grid-cols-[160px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Identidad:</span>
            <span>REDUCE SOLUCIONES DE AHORRO ENERGÉTICO S.L.</span>
          </div>
          <div className="grid grid-cols-[160px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">CIF:</span>
            <span>B 94.063.823</span>
          </div>
          <div className="grid grid-cols-[160px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Domicilio:</span>
            <span>C/ Serafín Pazo 28, 2ºB, 36.680 A Estrada (Pontevedra)</span>
          </div>
          <div className="grid grid-cols-[160px_1fr] gap-2">
            <span className="font-semibold text-brand-dark">Correo electrónico:</span>
            <span>administracion@planreduce.com</span>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="2. Finalidades del tratamiento y base jurídica">
        <p>
          REDUCE trata los datos personales que usted nos facilita con las siguientes finalidades y bases de
          legitimación:
        </p>

        <div className="space-y-4 mt-2">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Atención de consultas y solicitudes de información</p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Datos:</span> nombre, correo electrónico, teléfono, empresa y contenido del mensaje.
            </p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Base jurídica:</span> consentimiento del interesado (art. 6.1.a RGPD).
            </p>
            <p className="text-xs">
              <span className="font-semibold">Conservación:</span> durante el tiempo necesario para tramitar la solicitud y, en su caso, hasta que se extingan las responsabilidades derivadas de la relación, con un máximo de 3 años desde la última interacción.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Ejecución de la relación contractual</p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Datos:</span> datos identificativos, de contacto y los necesarios para la prestación del servicio.
            </p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Base jurídica:</span> ejecución de un contrato en el que el interesado es parte (art. 6.1.b RGPD).
            </p>
            <p className="text-xs">
              <span className="font-semibold">Conservación:</span> durante la vigencia del contrato y, una vez concluido, por el tiempo necesario para el cumplimiento de obligaciones legales (en general, 6 años conforme a la legislación mercantil y tributaria).
            </p>
          </div>

          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-brand-dark mb-1">Cumplimiento de obligaciones legales</p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Datos:</span> los exigidos por la normativa fiscal, contable y laboral aplicable.
            </p>
            <p className="text-xs mb-1">
              <span className="font-semibold">Base jurídica:</span> cumplimiento de una obligación legal (art. 6.1.c RGPD).
            </p>
            <p className="text-xs">
              <span className="font-semibold">Conservación:</span> durante los plazos establecidos en la normativa específica aplicable.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="3. Destinatarios de los datos">
        <p>
          Con carácter general, REDUCE no cede ni comunica datos personales a terceros, salvo:
        </p>
        <LegalList items={[
          'Encargados del tratamiento: proveedores de servicios tecnológicos (hosting, correo electrónico, herramientas de gestión interna) que actúan bajo contrato de encargo del tratamiento conforme al art. 28 RGPD.',
          'Administraciones públicas, organismos reguladores y órganos jurisdiccionales, cuando sea requerido por ley.',
          'Terceros cuando el interesado haya prestado su consentimiento expreso o cuando sea necesario para la ejecución del contrato.',
        ]} />
        <p>
          En ningún caso se venderán datos personales a terceros ni se cederán con fines publicitarios sin consentimiento
          previo.
        </p>
      </LegalSection>

      <LegalSection title="4. Transferencias internacionales de datos">
        <p>
          Como norma general, REDUCE no realiza transferencias de datos a países fuera del Espacio Económico Europeo
          (EEE). No obstante, algunos proveedores tecnológicos de los que REDUCE hace uso pueden procesar datos en países
          terceros. En estos casos, dichas transferencias se realizan con las garantías adecuadas exigidas por el RGPD
          (decisiones de adecuación, cláusulas contractuales tipo u otros mecanismos equivalentes).
        </p>
        <p>
          En particular, el Sitio utiliza Google Fonts cargadas desde servidores de Google (EE. UU.), lo que puede implicar
          la transmisión de la dirección IP del usuario a Google LLC. Esta transferencia se realiza al amparo del Marco
          de Privacidad de Datos UE-EE. UU. (Data Privacy Framework), adoptado por Decisión de Adecuación de la
          Comisión Europea en julio de 2023.
        </p>
      </LegalSection>

      <LegalSection title="5. Derechos de los interesados">
        <p>
          De conformidad con el RGPD y la LOPDGDD, usted tiene derecho a:
        </p>
        <LegalList items={[
          'Acceso: conocer qué datos personales suyos tratamos.',
          'Rectificación: solicitar la corrección de datos inexactos o incompletos.',
          'Supresión («derecho al olvido»): solicitar la eliminación de sus datos cuando, entre otros casos, ya no sean necesarios para los fines para los que fueron recogidos.',
          'Limitación del tratamiento: solicitar que se restrinja el tratamiento de sus datos en determinadas circunstancias.',
          'Portabilidad: recibir sus datos en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.',
          'Oposición: oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.',
          'No ser objeto de decisiones automatizadas: no ser objeto de decisiones basadas únicamente en el tratamiento automatizado que produzcan efectos jurídicos sobre usted.',
          'Retirada del consentimiento: cuando el tratamiento se base en el consentimiento, retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo.',
        ]} />
      </LegalSection>

      <LegalSection title="6. Cómo ejercer sus derechos">
        <p>
          Puede ejercer sus derechos enviando una solicitud escrita, acompañada de copia de su DNI u otro documento
          identificativo, a:
        </p>
        <div className="bg-brand-light rounded-xl p-5 space-y-1 text-sm">
          <p><span className="font-semibold text-brand-dark">Por correo electrónico:</span> administracion@planreduce.com</p>
          <p><span className="font-semibold text-brand-dark">Por correo postal:</span> C/ Serafín Pazo 28, 2ºB, 36.680 A Estrada (Pontevedra)</p>
        </div>
        <p>
          REDUCE responderá a su solicitud en el plazo máximo de un mes desde su recepción, prorrogable otros dos meses
          adicionales en casos de especial complejidad, en cuyo caso se le informará del motivo de la prórroga.
        </p>
        <p>
          Si considera que sus derechos no han sido atendidos correctamente, tiene derecho a presentar una reclamación
          ante la Agencia Española de Protección de Datos (AEPD), a través de su sede electrónica{' '}
          <span className="font-semibold text-brand-dark">www.aepd.es</span>.
        </p>
      </LegalSection>

      <LegalSection title="7. Medidas de seguridad">
        <p>
          REDUCE ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos
          personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la
          tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
        </p>
      </LegalSection>

      <LegalSection title="8. Actualización de la presente política">
        <p>
          REDUCE se reserva el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas,
          jurisprudenciales o de práctica empresarial. Los cambios entrarán en vigor desde su publicación en el Sitio.
          Se recomienda consultar esta página periódicamente.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
