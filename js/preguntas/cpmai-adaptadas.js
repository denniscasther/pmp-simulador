/**
 * Banco CPMAI adaptado de material de terceros.
 *
 * ⚠️ ORIGEN DISTINTO AL DE `js/cpmai-preguntas.js`, que es material propio. Estas
 *    119 preguntas se adaptaron al español a partir de un simulador comercial de
 *    terceros, en tres lotes: las preguntas 81 a 120 de una prueba de práctica,
 *    luego las 5 a 80, y por último las 4 del inicio. De las 120 solo falta la 119,
 *    que nunca se capturó. Escenarios y opciones son traducción adaptada del
 *    original; las explicaciones están reescritas.
 *
 *    Se publica por decisión explícita del autor del repositorio (2026-08-31), como
 *    excepción declarada a la regla de `js/cpmai-preguntas.js`. Si alguna vez hay
 *    que retirarlo, basta con borrar este archivo: `cpmai.html` lo carga solo si
 *    existe y sigue funcionando sin él, con las 38 preguntas propias.
 *
 * Etiquetado: se respeta el dominio y la tarea que declaraba la fuente, mapeados al
 * ECO CPMAI 2025 de `js/cpmai-eco.js` (Domain I→responsable, 2→negocio, 3→datos,
 * 4→modelos, 5→operacion; «Task N» → índice N-1). Las dos preguntas que la fuente
 * etiquetaba solo con el dominio, sin tarea, se ubicaron por su contenido.
 *
 * Reparto resultante: negocio 32 · datos 31 · operacion 20 · modelos 18 · responsable 18.
 */

const PREGUNTAS_CPMAI_EXTRA = [

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpx-neg-001', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de topografía desarrolla una capacidad de IA que analiza imágenes aéreas. El equipo interno puede encargarse del trabajo con datos y de toda la operación posterior, pero una fase temprana exige una habilidad poco común de diseño de visión por computadora que nadie en la planilla tiene y que no volverá a necesitarse. ¿Cómo debe cubrir esa fase el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Retrasar la fase mientras los desarrolladores internos completan un programa de formación extendido.' },
      { id: 'b', texto: 'Quitar el componente especializado del alcance del proyecto.' },
      { id: 'c', texto: 'Crear un puesto permanente de especialista para ese diseño puntual.' },
      { id: 'd', texto: 'Contratar especialistas externos para el tramo corto y mantener dentro el trabajo que perdura.' }
    ],
    correctas: ['d'],
    explicacion: 'Una habilidad rara, breve y que no se repite es exactamente el hueco que cubre un contratista, mientras el personal interno se queda con el trabajo que acompañará a la solución durante toda su vida. (a) cambia cronograma por una capacidad que la empresa no volverá a usar. (c) compromete salario permanente para una necesidad temporal. (b) sacrifica la capacidad central del proyecto para esquivar un problema de dotación que sí tiene solución.'
  },
  {
    id: 'cpx-neg-002', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una consultora de selección de personal quiere usar una herramienta de IA para preseleccionar candidatos antes de las entrevistas con el cliente. El área legal confirma que la herramienta es lícita en todas las regiones donde opera. El director del programa de IA está cerrando la evaluación temprana de riesgos. ¿Qué debe examinar todavía?',
    opciones: [
      { id: 'a', texto: 'Si el proveedor de la herramienta ofrece descuento por contratos plurianuales.' },
      { id: 'b', texto: 'Cómo las decisiones automáticas de descarte podrían afectar injustamente a determinados grupos de postulantes.' },
      { id: 'c', texto: 'Si la velocidad de preselección cumplirá las expectativas del cliente.' },
      { id: 'd', texto: 'A cuántos reclutadores podría llegar a reemplazar la herramienta.' }
    ],
    correctas: ['b'],
    explicacion: 'Que un abogado confirme la legalidad no agota el riesgo: las implicaciones éticas de una decisión automatizada siguen siendo riesgo del proyecto y son un elemento explícito de la evaluación, separado del cumplimiento normativo. (c) es una expectativa de desempeño, no una exposición ética. (a) pertenece a la negociación con el proveedor y no dice nada del daño que la herramienta puede causar. (d) es una proyección de dotación que esquiva la pregunta de si las decisiones son defendibles.'
  },
  {
    id: 'cpx-neg-003', dominio: 'negocio', tarea: 7, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una cadena hotelera encarga un proyecto de IA para reducir los costosos incidentes de sobreventa. El equipo de ciencia de datos propone juzgar el proyecto únicamente por si la precisión del pronóstico alcanza un objetivo técnico acordado. El director del proyecto de IA advierte que el modelo puede cumplir ese objetivo mientras los incidentes de sobreventa siguen igual. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Aceptar el objetivo técnico, ya que la precisión es lo único que el equipo controla.' },
      { id: 'b', texto: 'Definir medidas emparejadas que cubran tanto el desempeño técnico como el cambio en los incidentes de sobreventa.' },
      { id: 'c', texto: 'Sustituir el objetivo técnico por una meta de crecimiento de ingresos para la cadena.' },
      { id: 'd', texto: 'Posponer la definición de medidas hasta poder observar el comportamiento real del modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'El éxito se define en dos niveles: una medida técnica que muestre que el modelo funciona y una medida de negocio que muestre que los incidentes bajan de verdad. Un modelo técnicamente excelente que no cambia nada en la operación es una inversión fallida. (a) deja al proyecto ciego respecto al resultado por el que existe. (c) mide algo que depende del precio, la demanda y la estacionalidad, muy por encima de este sistema: el proyecto no puede aislar su aporte. (d) construye y lanza sin un estándar acordado de lo que hay que lograr.'
  },
  {
    id: 'cpx-neg-004', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de ropa outdoor necesita experiencia profunda en visión por computadora durante aproximadamente el primer trimestre de su proyecto de monitoreo de estanterías; después el trabajo pasa a tareas de integración que sus propios desarrolladores manejan bien. Hoy nadie en la planilla tiene esa experiencia. ¿Cómo debe conseguirla el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Descartar el componente de visión y rediseñar la solución alrededor de las habilidades existentes.' },
      { id: 'b', texto: 'Encargar a los desarrolladores de integración que aprendan visión por computadora sobre la marcha.' },
      { id: 'c', texto: 'Incorporar un especialista externo durante el periodo en que se necesita esa experiencia.' },
      { id: 'd', texto: 'Contratar un especialista permanente en visión por computadora que ancle al equipo.' }
    ],
    correctas: ['c'],
    explicacion: 'Identificar los huecos que requieren contratistas o consultores externos es parte de identificar los recursos del proyecto, y un hueco de habilidad acotado en el tiempo pide justamente un recurso temporal. (d) compromete salario permanente para una necesidad que el proyecto supera en meses. (b) pone el trabajo temprano más difícil en manos sin entrenar. (a) abandona la capacidad central en vez de resolver una cuestión de dotación que tiene salida.'
  },
  {
    id: 'cpx-neg-005', dominio: 'negocio', tarea: 7, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una empresa de alquiler de vehículos define cómo juzgará un nuevo asistente de IA que redacta respuestas para los agentes de reservas. Los criterios en borrador cubren la exactitud de las respuestas y la disponibilidad del sistema. El director del proyecto de IA nota que nada revelará si los agentes realmente se apoyan en el asistente o lo encuentran útil. ¿Qué debe agregar?',
    opciones: [
      { id: 'a', texto: 'Medidas de satisfacción y adopción por parte de los agentes.' },
      { id: 'b', texto: 'Una revisión ejecutiva trimestral del desempeño del asistente.' },
      { id: 'c', texto: 'Un umbral de exactitud más estricto para dar confianza a los agentes.' },
      { id: 'd', texto: 'Una política de alertas de disponibilidad con contactos de escalamiento.' }
    ],
    correctas: ['a'],
    explicacion: 'Los criterios de éxito deben incluir satisfacción y adopción, porque un asistente técnicamente sólido que los agentes ignoran no entrega ningún valor de negocio. (c) aprieta una medida que ya está cubierta y sigue sin decir si la herramienta se usa. (b) es una rutina de gobernanza, no una medición del uso en primera línea. (d) mejora el monitoreo operativo pero duplica la dimensión de fiabilidad que el borrador ya atiende.'
  },
  {
    id: 'cpx-neg-006', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una marca deportiva lanza en tres semanas su herramienta de pronóstico de demanda a los planificadores de mercadería. El modelo está validado y la integración terminada, pero los planificadores solo han sabido de la herramienta por rumores y un único correo. ¿Qué vacío debe cerrar el director del proyecto de IA antes del lanzamiento?',
    opciones: [
      { id: 'a', texto: 'La falta de un tablero ejecutivo que resuma la exactitud del pronóstico.' },
      { id: 'b', texto: 'La ausencia de un modelo de respaldo por si el principal se degrada.' },
      { id: 'c', texto: 'La ausencia de un plan para preparar e informar a los planificadores que deberán usarla.' },
      { id: 'd', texto: 'La revisión de seguridad pendiente sobre las conexiones de datos de la herramienta.' }
    ],
    correctas: ['c'],
    explicacion: 'Una herramienta validada e integrada fracasa igual si sus usuarios no entienden qué hace ni cómo trabajar con ella: desarrollar estrategias de capacitación y comunicación es parte explícita de gestionar el riesgo de adopción. (a) sirve a la visibilidad de la dirección, no a la habilitación del usuario. (b) atiende la resiliencia técnica, que no es la debilidad descrita. (d) importa, pero el escenario dice que la integración está terminada y señala la preparación de los usuarios como el problema abierto.'
  },
  {
    id: 'cpx-neg-007', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un laboratorio propone un sistema de IA que apruebe o rechace de forma autónoma las enmiendas a protocolos de ensayos clínicos, sin revisión humana, y el patrocinador sostiene que el sistema nunca debe tomar una decisión incorrecta. El director del proyecto de IA conduce la revisión temprana de viabilidad. ¿Qué debe concluir?',
    opciones: [
      { id: 'a', texto: 'La propuesta es viable porque el análisis de documentos es una aplicación madura de la IA.' },
      { id: 'b', texto: 'La certeza exigida excede lo que un sistema basado en aprendizaje puede prometer, así que el concepto debe reformularse hacia la supervisión humana.' },
      { id: 'c', texto: 'La viabilidad no se puede juzgar hasta construir y probar el sistema completo.' },
      { id: 'd', texto: 'La propuesta es viable si el equipo adquiere el modelo comercial más preciso disponible.' }
    ],
    correctas: ['b'],
    explicacion: 'Los sistemas de aprendizaje son probabilísticos y a veces se equivocan: exigir cero decisiones autónomas incorrectas en un dominio crítico para la seguridad no pasa la prueba de viabilidad técnica tal como está planteada, y lo honesto es reformular el concepto, por ejemplo recomendando decisiones que revisores calificados confirmen. (a) confunde una categoría de tarea madura con una garantía de perfección. (d) mejora la tasa de error, no la elimina. (c) gasta el presupuesto para averiguar lo que el análisis puede establecer ahora.'
  },
  {
    id: 'cpx-neg-008', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una destilería puso en marcha hace dos meses un asistente de IA para calificación de calidad, con buen entusiasmo inicial. El director del proyecto de IA sospecha que el uso está decayendo en el turno noche, pero no tiene evidencia en ningún sentido. ¿Qué debe implantar?',
    opciones: [
      { id: 'a', texto: 'Una política obligatoria que exija a cada calificador consultar el asistente.' },
      { id: 'b', texto: 'Seguimiento de los patrones de uso por turno, con indagación sobre las caídas que aparezcan.' },
      { id: 'c', texto: 'Un segundo anuncio de despliegue que repita el mensaje del lanzamiento.' },
      { id: 'd', texto: 'Una interfaz mejorada que renueve el interés en todos los turnos.' }
    ],
    correctas: ['b'],
    explicacion: 'Medir la adopción y atacar los obstáculos de implementación es parte explícita de esta tarea: el seguimiento por turno da evidencia de dónde se está perdiendo el uso y un camino para atacar las causas. (a) fuerza actividad sin revelar ni corregir por qué el turno noche se desengancha. (d) asume que el problema es el atractivo visual antes de que ningún dato lo confirme. (c) transmite a todos un mensaje que no diagnostica el turno concreto donde el uso se cae.'
  },
  {
    id: 'cpx-neg-009', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una residencia para adultos mayores, el área de TI redactó el enunciado del problema para un proyecto de pronóstico de personal, describiendo las dificultades de programación de turnos tal como ellos las entienden. El director del proyecto de IA está por llevar ese enunciado al trabajo de viabilidad. ¿Qué debe ocurrir primero con el enunciado?',
    opciones: [
      { id: 'a', texto: 'Seguir adelante con él, ya que TI es el dueño del sistema de programación.' },
      { id: 'b', texto: 'Hacer que un comité ejecutivo lo ratifique para darle autoridad.' },
      { id: 'c', texto: 'Convertirlo directamente en un backlog formal de requisitos.' },
      { id: 'd', texto: 'Confirmarlo con el personal asistencial que vive el problema de programación.' }
    ],
    correctas: ['d'],
    explicacion: 'El enunciado del problema se valida con quienes tienen el conocimiento del dominio, y el personal asistencial que sufre la programación a diario es quien puede confirmar o corregir lo que escribió TI. (a) confunde ser dueño del software con entender el dolor operativo. (b) agrega autoridad pero no exactitud: la dirección está aún más lejos del piso que TI. (c) endurece una descripción no verificada convirtiéndola en compromisos, y multiplica el costo de cualquier malentendido.'
  },
  {
    id: 'cpx-neg-010', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa láctea planea un sistema de IA que decida qué pequeños proveedores agrícolas obtienen la renovación de su contrato, puntuándolos por rendimiento histórico y registros de calidad. El director del programa de IA nota que las granjas familiares más nuevas tienen historiales de datos mucho más delgados que los proveedores grandes ya establecidos. ¿Qué preocupación merece más atención en la evaluación de riesgos?',
    opciones: [
      { id: 'a', texto: 'Si las renovaciones automáticas podrían perjudicar sistemáticamente a ciertos grupos de proveedores.' },
      { id: 'b', texto: 'Si el tablero de puntuación presenta los resultados con claridad a los gerentes.' },
      { id: 'c', texto: 'Si los costos de cómputo de la puntuación se mantienen dentro del presupuesto operativo.' },
      { id: 'd', texto: 'Si las decisiones de renovación se procesarán más rápido que con el enfoque manual.' }
    ],
    correctas: ['a'],
    explicacion: 'Una decisión automatizada que afecta el sustento de los proveedores obliga a la evaluación de riesgos a mirar sus implicaciones éticas, y los historiales delgados de las granjas nuevas crean una posibilidad real de que el sistema las puntúe injustamente frente a las establecidas. (d) es una medida de beneficio, no un riesgo para las personas afectadas. (b) es un asunto de usabilidad que no cambia si las decisiones de fondo son justas. (c) pertenece al análisis financiero, no a la evaluación de las consecuencias de decidir.'
  },
  {
    id: 'cpx-neg-011', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de especias evalúa un concepto de IA que predeciría el grado de sabor de cada lote cosechado. El director del proyecto de IA descubre que los resultados históricos de calificación se registraron solo como comentarios libres e inconsistentes de los catadores, y únicamente para los lotes que fueron rechazados. ¿Qué debe concluir en la revisión de viabilidad?',
    opciones: [
      { id: 'a', texto: 'Aprobar la construcción, porque la pericia de cata puede sustituir a los registros.' },
      { id: 'b', texto: 'Tratar las notas de texto libre como etiquetas listas para el entrenamiento.' },
      { id: 'c', texto: 'Solicitar un presupuesto mayor para compensar la condición de los datos.' },
      { id: 'd', texto: 'Señalar que los registros históricos podrían no sostener el entrenamiento del modelo.' }
    ],
    correctas: ['d'],
    explicacion: 'La viabilidad inicial se juega en la disponibilidad y la calidad de los datos, y unos registros inconsistentes, no estructurados y capturados solo para los lotes rechazados no le dan al modelo ejemplos confiables de todo el rango de resultados: eso es un hallazgo que la revisión debe hacer visible. (a) ignora que un modelo aprende de ejemplos registrados, no de la destreza que vive en la cabeza de las personas. (b) sobrestima la calidad de esos comentarios y omite por completo el vacío de los lotes aceptados. (c) responde con dinero a un obstáculo que es la condición del registro histórico.'
  },
  {
    id: 'cpx-neg-012', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un banco lanzó hace tres meses una herramienta de IA que preevalúa solicitudes de crédito de consumo. Los reportes de sucursal muestran que la mayoría de los oficiales sigue procesando las solicitudes a la manera antigua y abre la herramienta solo ocasionalmente. El patrocinador pide al director del proyecto de IA que responda ante el déficit. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Informar que el despliegue fue exitoso porque la herramienta está disponible en todas las sucursales.' },
      { id: 'b', texto: 'Deshabilitar la vía de procesamiento manual para que los oficiales tengan que usar la herramienta.' },
      { id: 'c', texto: 'Programar una capacitación de refuerzo que recorra otra vez todas las funciones.' },
      { id: 'd', texto: 'Examinar los datos de uso y recoger la opinión de los oficiales para hallar qué bloquea la adopción.' }
    ],
    correctas: ['d'],
    explicacion: 'El uso bajo es un síntoma con muchas causas posibles —desconfianza en las recomendaciones, fricción con el flujo de trabajo, incentivos de la sucursal—, así que el primer movimiento es estudiar los patrones de uso y preguntar directamente, para después apuntar la corrección al obstáculo real. (b) puede empujar hacia decisiones críticas de crédito una herramienta que aún no está lista o en la que no se confía. (c) asume que la causa es el desconocimiento antes de que exista evidencia. (a) declara éxito por disponibilidad cuando el valor del proyecto depende del uso.'
  },
  {
    id: 'cpx-neg-013', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera construyó un modelo de IA que predice el desgaste de herramientas de maquinado, y las pruebas muestran que supera la meta de exactitud fijada por el equipo de datos. En la revisión de preparación, el director de operaciones pregunta cómo sabrá la empresa si el proyecto ayudó al negocio y no solo si rinde bien en pruebas. ¿Qué debe establecer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Una meta de exactitud más alta para que el modelo demuestre progreso técnico continuo.' },
      { id: 'b', texto: 'Medidas de impacto en el negocio con umbrales acordados, como la reducción de merma y de paradas no planificadas.' },
      { id: 'c', texto: 'El compromiso de revisar trimestralmente los resultados de prueba junto al equipo de datos.' },
      { id: 'd', texto: 'Un tablero que muestre a la dirección el volumen diario de predicciones del modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'La exactitud técnica prueba que el modelo funciona en el laboratorio; el proyecto se juzga por su impacto en el negocio, así que corresponde definir medidas como merma reducida y paradas evitadas, cada una con un umbral que los interesados acuerden como éxito. (a) sube la misma vara técnica sin conectarla nunca con el valor. (c) reexamina el desempeño de laboratorio con una periodicidad, en vez de medir resultados. (d) muestra que el sistema está ocupado, no que sus predicciones cambiaron algo en la planta.'
  },
  {
    id: 'cpx-neg-014', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una textilera quiere una herramienta de IA que lea contratos de proveedores y extraiga las condiciones de renovación: una construcción única con mantenimiento ligero después. El director del proyecto de IA confirma que nadie en la planilla tiene experiencia en modelos de lenguaje y que el plazo es corto. La dirección pregunta cómo cubrir el vacío de capacidad. ¿Qué debe recomendar?',
    opciones: [
      { id: 'a', texto: 'Traer especialistas externos durante la construcción.' },
      { id: 'b', texto: 'Formar un grupo interno permanente de modelado de lenguaje.' },
      { id: 'c', texto: 'Reducir el alcance de la herramienta para que calce con las habilidades ya disponibles.' },
      { id: 'd', texto: 'Posponer el proyecto hasta que el personal interno complete su capacitación.' }
    ],
    correctas: ['a'],
    explicacion: 'Cuando el vacío de habilidad está confirmado y el esfuerzo es corto y acotado, identificar contratistas o consultores externos que lo cubran calza con la necesidad de recursos sin sobrecomprometer a la organización. (d) cambia el plazo corto por una capacidad que la empresa quizá no vuelva a usar. (c) modifica el resultado de negocio para que quepa en el equipo, en lugar de conseguir el equipo que el resultado necesita. (b) es una inversión permanente pesada para una construcción única con mantenimiento ligero.'
  },
  {
    id: 'cpx-neg-015', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera de transbordadores cierra los documentos de planificación de un predictor de mantenimiento de motores con IA. El plan presupone que el área de operaciones entregará historiales de incidentes etiquetados, pero eso existe solo como un entendimiento verbal entre dos gerentes. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Construir el cronograma sin hacer referencia a los historiales de incidentes.' },
      { id: 'b', texto: 'Registrar la dependencia como un supuesto documentado dentro del plan.' },
      { id: 'c', texto: 'Dar por zanjada la entrega, ya que ambos gerentes se pusieron de acuerdo.' },
      { id: 'd', texto: 'Exigir un compromiso contractual de operaciones antes de continuar con la planificación.' }
    ],
    correctas: ['b'],
    explicacion: 'Documentar supuestos y restricciones es parte de elaborar la línea base de planificación, y registrar la entrega de datos como supuesto explícito vuelve la dependencia visible y rastreable. (c) deja al proyecto expuesto si cambian las personas o las prioridades. (d) es desproporcionado entre áreas internas y frena la planificación por una dependencia que la documentación y el seguimiento pueden gestionar. (a) finge que la dependencia no existe mientras el trabajo sigue apoyándose en ella.'
  },
  {
    id: 'cpx-neg-016', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cristalería planifica un sistema de IA que detecte fallas en imágenes de artículos de vidrio. El plan de recursos cubre científicos de datos, infraestructura y software, pero antes hay que etiquetar falla por falla miles de imágenes históricas, y solo los inspectores experimentados reconocen los tipos sutiles de defecto. El plan no asigna a nadie a ese trabajo. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Diferir las decisiones de etiquetado hasta que el enfoque de modelado esté cerrado.' },
      { id: 'b', texto: 'Planificar la capacidad de los inspectores para el etiquetado como un recurso explícito del proyecto.' },
      { id: 'c', texto: 'Comprar una biblioteca genérica de imágenes preetiquetadas en lugar de usar las de la empresa.' },
      { id: 'd', texto: 'Asumir que el equipo de ciencia de datos etiquetará las imágenes entre tareas de modelado.' }
    ],
    correctas: ['b'],
    explicacion: 'Preparar ejemplos etiquetados suele ser el mayor esfuerzo humano de un proyecto de visión, y como solo los inspectores experimentados reconocen los defectos, su capacidad de etiquetado hay que planificarla, programarla y cubrirla como cualquier recurso crítico. (d) entrega el trabajo a quienes no tienen la pericia sobre el defecto y cuyo tiempo hace falta en otra parte. (c) no contiene el vidrio de esta empresa ni sus tipos de falla, así que un modelo entrenado sobre eso no transfiere. (a) ignora que el etiquetado está en la ruta crítica gane el enfoque de modelado que gane.'
  },

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpx-dat-001', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'La dirección de una cementera se entera recién en la revisión trimestral de que la preparación de datos del proyecto de optimización del horno lleva un retraso severo, y queda descolocada. Se pide al director del proyecto de IA que la dirección nunca vuelva a llevarse una sorpresa así. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Un informe único e integral en la presentación final de preparación.' },
      { id: 'b', texto: 'El escalamiento inmediato de cada incidencia operativa al equipo directivo.' },
      { id: 'c', texto: 'Reportes disparados solo por la finalización de los hitos mayores.' },
      { id: 'd', texto: 'Un ritmo regular de actualizaciones que cubra el avance de la preparación y las dificultades que van apareciendo.' }
    ],
    correctas: ['d'],
    explicacion: 'Comunicar el avance y las dificultades de la preparación de datos es el deber de comunicación definido para esta tarea, y una cadencia estable saca a la luz el retraso cuando la dirección todavía puede actuar. (c) reproduce la falla original, porque los problemas entre hitos siguen invisibles. (b) inunda a la dirección de ruido y la entrena para ignorar el canal. (a) es el silencio más largo posible y garantiza la siguiente sorpresa.'
  },
  {
    id: 'cpx-dat-002', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de programa de IA en una acería planifica un proyecto de detección de defectos que podría alimentarse de un historiador de sensores, de los registros de inspección de calidad y de un sistema de mantenimiento. El equipo necesita saber qué sistemas de planta registran los reprocesos de manera confiable y qué particularidades arrastra cada fuente antes de comprometerse con alguna. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Elegir como fuente principal el sistema con el mayor volumen de registros históricos.' },
      { id: 'b', texto: 'Revisar la documentación del proveedor de cada sistema para determinar su comportamiento de registro.' },
      { id: 'c', texto: 'Extraer muestras de todos los sistemas y dejar que los primeros resultados del modelo indiquen cuál fuente es confiable.' },
      { id: 'd', texto: 'Ubicar y consultar al personal de planta que conoce a fondo cómo captura los eventos cada sistema candidato.' }
    ],
    correctas: ['d'],
    explicacion: 'Los expertos que conocen los sistemas de origen explican fiabilidad de registro, particularidades conocidas y vacíos que ningún inventario deja ver, que es justo lo que el equipo necesita antes de comprometerse. (a) confunde cantidad con fidelidad: el volumen no dice nada sobre si los reprocesos quedan bien capturados. (c) gasta esfuerzo en fuentes que un experto descartaría en una conversación, y un modelo no puede explicar por qué una fuente registra mal. (b) describe el comportamiento previsto, no cómo usa el personal cada sistema en la práctica.'
  },
  {
    id: 'cpx-dat-003', dominio: 'datos', tarea: 6, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una fabricante de dispositivos médicos recibe los registros de reclamos para un proyecto de predicción de calidad. Los registros llegaron como narrativas de texto libre con adjuntos anidados, mientras que el plan de modelado supone variables prolijamente estructuradas. Los científicos de datos quieren lanzarse de inmediato a construir variables a partir del texto. ¿Qué debe indicar primero el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Pedir al área de reclamos un volumen mayor de registros.' },
      { id: 'b', texto: 'Cambiar a otro algoritmo antes de examinar más los datos.' },
      { id: 'c', texto: 'Revisar el esquema y la estructura de los datos frente al enfoque de modelado planificado.' },
      { id: 'd', texto: 'Un arranque inmediato de la ingeniería de variables para no frenar el cronograma.' }
    ],
    correctas: ['c'],
    explicacion: 'Revisar esquema y estructura para ver si son compatibles con el modelado es parte de supervisar la evaluación de los datos, y el desajuste entre narrativas libres y un plan que supone variables estructuradas hay que entenderlo antes de que alguien construya encima. (d) levanta trabajo sobre una estructura que nadie ha confirmado que el plan pueda usar. (a) multiplica el mismo problema estructural en vez de resolverlo. (b) cambia de algoritmo antes de examinar los datos, invirtiendo la secuencia de una metodología que empieza por los datos.'
  },
  {
    id: 'cpx-dat-004', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de alimentos prepara los historiales de compra de su programa de fidelidad para un modelo de personalización. Muchos registros pertenecen a compradores en jurisdicciones cubiertas por el RGPD y la CCPA. El asesor legal pide al director del proyecto de IA demostrar, antes de que empiece la recolección, que el proyecto examinó sistemáticamente cómo el uso de esos datos personales podría afectar a las personas involucradas. ¿Qué debe disponer?',
    opciones: [
      { id: 'a', texto: 'Un perfil de calidad de datos que mida la completitud y la consistencia de los historiales de compra.' },
      { id: 'b', texto: 'Una evaluación estructurada de los riesgos de privacidad que el uso previsto de los datos crea para los compradores.' },
      { id: 'c', texto: 'Una revisión de arquitectura sobre cómo se integrará el modelo de personalización con la plataforma de fidelidad.' },
      { id: 'd', texto: 'Una prueba de penetración de la base de datos de fidelidad para exponer debilidades de seguridad.' }
    ],
    correctas: ['b'],
    explicacion: 'Una evaluación de impacto en privacidad es justamente el mecanismo que examina de forma sistemática cómo el tratamiento de historiales personales puede afectar a los compradores, que es lo que el asesor pide ver antes de recolectar. (d) sondea debilidades técnicas de seguridad, pero no dice si el uso previsto es apropiado ni qué riesgos crea para las personas. (a) mide completitud y consistencia, lo que informa la preparación para modelar, no el riesgo de privacidad. (c) atiende el diseño de integración y no documenta el efecto del tratamiento sobre las personas cuyos datos se usan.'
  },
  {
    id: 'cpx-dat-005', dominio: 'datos', tarea: 6, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una marina evalúa cinco años de registros de alquiler de amarraderos para un modelo de precios. El director del proyecto de IA pide a los analistas mirar más allá de la exactitud campo por campo y estudiar cómo se distribuyen los valores de alquiler entre temporadas, tamaños de embarcación y segmentos de cliente antes de empezar a modelar. ¿Cuál es el propósito principal de ese pedido?',
    opciones: [
      { id: 'a', texto: 'Sacar a la luz sesgos y vacíos en los datos que podrían distorsionar el modelo.' },
      { id: 'b', texto: 'Comprimir el conjunto de datos para que el entrenamiento corra en infraestructura más barata.' },
      { id: 'c', texto: 'Cerrar qué algoritmo de precios deben implementar los científicos de datos.' },
      { id: 'd', texto: 'Producir los gráficos que requerirá la presentación a la dirección.' }
    ],
    correctas: ['a'],
    explicacion: 'Analizar las distribuciones para identificar sesgos o vacíos es exactamente el sentido de estudiar cómo se reparten los alquileres entre temporadas, tamaños y segmentos: un conjunto dominado por embarcaciones grandes en temporada alta le enseñaría al modelo una visión distorsionada de los precios. (b) es una preocupación de infraestructura ajena al análisis de distribución. (d) puede reutilizar parte de este trabajo después, pero producir visuales no es la razón del encargo. (c) pertenece al desarrollo del modelo y depende de este análisis, en lugar de ser su propósito.'
  },
  {
    id: 'cpx-dat-006', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una avícola inicia la fase de datos de un proyecto de predicción de salud de las parvadas. El equipo encontró cinco conjuntos de datos de monitoreo de galpones, pero no puede distinguir cuáles reflejan cómo operan hoy las granjas y cuáles son ensayos abandonados. ¿Cómo debe resolverlo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Elegir el conjunto con el historial más largo, porque la madurez implica uso operativo.' },
      { id: 'b', texto: 'Ubicar a los expertos en operaciones de granja que saben qué fuentes de monitoreo están realmente en uso.' },
      { id: 'c', texto: 'Apoyarse en la documentación escrita que acompaña a cada conjunto para decidir.' },
      { id: 'd', texto: 'Perfilar estadísticamente los cinco conjuntos y quedarse con los que tengan menos valores faltantes.' }
    ],
    correctas: ['b'],
    explicacion: 'Ubicar a los expertos en operaciones que conocen las fuentes de monitoreo da conocimiento autorizado sobre qué conjuntos reflejan la operación viva, y ninguna inspección interna lo sustituye. (d) revela características de calidad, pero no distingue un ensayo abandonado y prolijo de un flujo de producción desordenado. (a) puede corresponder a un piloto descontinuado: la antigüedad no prueba nada sobre la relevancia operativa actual. (c) suele estar desactualizada y no recoge qué fuentes dejaron de usarse en silencio.'
  },
  {
    id: 'cpx-dat-007', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios de aviación necesita los registros de programación de tripulaciones para un modelo de riesgo de fatiga. Las solicitudes de acceso del equipo llevan tres semanas rebotando entre TI y Recursos Humanos porque nadie parece facultado para certificar las definiciones de los campos ni autorizar el uso de los registros. ¿Qué acción debe tomar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Escalar al patrocinador del proyecto para forzar el acceso mediante presión ejecutiva.' },
      { id: 'b', texto: 'Pedir a TI que copie los registros al espacio de trabajo del proyecto mientras se ponen al día las aprobaciones.' },
      { id: 'c', texto: 'Acotar el proyecto a datos de personal disponibles públicamente.' },
      { id: 'd', texto: 'Contactar a los custodios de datos y al equipo de gobernanza responsables del dominio de datos de Recursos Humanos.' }
    ],
    correctas: ['d'],
    explicacion: 'Cuando nadie parece facultado para certificar definiciones ni autorizar el uso, la respuesta está en los custodios de datos y la función de gobernanza: esos roles existen precisamente para ser dueños de un dominio de datos. (a) puede abrir la puerta a la fuerza, pero sigue sin dejar a nadie certificando qué significan los campos. (b) crea un uso no autorizado de datos sensibles de empleados. (c) renuncia justamente a los registros que el modelo de fatiga necesita.'
  },
  {
    id: 'cpx-dat-008', dominio: 'datos', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una juguetera quiere un modelo que pronostique los picos de demanda de la temporada navideña. El responsable de datos propone entrenar con una muestra aleatoria de pedidos tomada de manera uniforme a lo largo del año calendario. El director del proyecto de IA objeta, señalando que la pregunta de negocio vive en semanas concretas del año. ¿Qué requisito está presionando por definir?',
    opciones: [
      { id: 'a', texto: 'La región de nube donde deben alojarse los datos de entrenamiento.' },
      { id: 'b', texto: 'El estándar de cifrado que deben cumplir los datos de pedidos en almacenamiento.' },
      { id: 'c', texto: 'La cobertura temporal y la granularidad que deben satisfacer los datos recolectados.' },
      { id: 'd', texto: 'Las convenciones de nombres para los conjuntos de entrenamiento del proyecto.' }
    ],
    correctas: ['c'],
    explicacion: 'La objeción trata de los requisitos temporales y de granularidad de la recolección: un modelo de picos de demanda necesita cobertura densa de las semanas navideñas con resolución temporal fina, y una muestra uniforme del año la diluye. (b) es un requisito de seguridad ajeno a qué semanas enfatiza la muestra. (d) es orden interno sin relación con la señal estacional. (a) trata de dónde se ubica la infraestructura y de residencia de datos, no de si los datos capturan los patrones temporales de los que depende la pregunta de negocio.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpx-mod-001', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una energética, el diseño del modelo de pronóstico de carga lo produjo íntegramente un solo científico de datos. El diseño luce razonable, pero al director del proyecto de IA le inquieta que ningún segundo par de ojos expertos lo haya examinado antes de que la fase de construcción consuma un presupuesto importante. ¿Qué debe coordinar?',
    opciones: [
      { id: 'a', texto: 'Una revisión por pares donde colegas calificados validen técnicamente el diseño del modelo.' },
      { id: 'b', texto: 'Una presentación del diseño al comité ejecutivo de dirección.' },
      { id: 'c', texto: 'Una fase de pruebas extendida una vez construido el modelo.' },
      { id: 'd', texto: 'Una pausa hasta poder contratar a un segundo científico de datos.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar revisiones por pares y la validación técnica de los diseños es una responsabilidad de aseguramiento de calidad, y una revisión estructurada por colegas calificados detecta las fallas de diseño ahora, antes de que la construcción consuma el presupuesto. (b) da visibilidad, pero los ejecutivos no pueden validar técnicamente un diseño de modelado. (c) detecta los problemas en el punto más caro, justo lo que evita una revisión temprana. (d) asume que la revisión exige nueva contratación cuando revisores internos o de un socio suelen poder involucrarse de inmediato.'
  },
  {
    id: 'cpx-mod-002', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una juguetera necesita tener su modelo de demanda estacional entrenado y validado antes de que arranque el ciclo de planificación navideña. El cómputo de entrenamiento se comparte con otros dos equipos de proyecto, y los científicos de datos vienen lanzando trabajos grandes cada vez que ven máquinas libres. ¿Cómo debe gestionarlo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Pedir a los otros equipos que cedan las máquinas compartidas hasta que salga el modelo navideño.' },
      { id: 'b', texto: 'Crear un plan de entrenamiento que programe trabajos y recursos contra la fecha límite y haga seguimiento de la utilización.' },
      { id: 'c', texto: 'Indicar al equipo que corra los trabajos de noche, cuando hay menos contención.' },
      { id: 'd', texto: 'Solicitar hardware dedicado para que el equipo nunca compita por cómputo.' }
    ],
    correctas: ['b'],
    explicacion: 'Planificar los calendarios de entrenamiento y la asignación de recursos, y luego monitorear avance y utilización, es exactamente como un director protege una fecha dura sobre infraestructura compartida: convierte lanzamientos oportunistas en un plan gestionado y visible. (c) es un apaño informal que ni garantiza capacidad ni le da un calendario a la fecha límite. (d) puede tardar más de lo que permite el ciclo de planificación y agrega costo antes de haber gestionado deliberadamente el pool compartido. (a) terceriza el problema a la buena voluntad ajena y crea un conflicto del que el cronograma no debería depender.'
  },
  {
    id: 'cpx-mod-003', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa evalúa dos enfoques candidatos para un modelo de predicción del valor de vida del cliente. Uno usa un ensamble basado en árboles que logra alta exactitud pero es difícil de explicar a los interesados del negocio. El otro usa un modelo lineal de menor exactitud que los interesados pueden interpretar directamente. El director del proyecto de IA debe guiar la discusión de selección. ¿Qué factor debe asegurar que el equipo sopese explícitamente?',
    opciones: [
      { id: 'a', texto: 'El costo de licenciamiento de las bibliotecas de software que implementan cada enfoque.' },
      { id: 'b', texto: 'La preferencia del científico de datos más senior del equipo por una familia de algoritmos.' },
      { id: 'c', texto: 'La cantidad de líneas de código que requiere implementar cada enfoque.' },
      { id: 'd', texto: 'El compromiso entre complejidad del modelo e interpretabilidad frente al requisito de transparencia hacia los interesados.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar los compromisos entre complejidad, desempeño e interpretabilidad es responsabilidad central al supervisar la selección del algoritmo, y cuando los interesados del negocio requieren transparencia, la interpretabilidad es un criterio legítimo que debe pesarse explícitamente contra la exactitud. (a) es un factor de compras, no el compromiso técnico y de negocio que está en el centro de esta decisión. (b) no es un criterio documentado de selección y no debería dirigir la elección del algoritmo. (c) es una aproximación al esfuerzo de desarrollo que no captura el compromiso que al negocio le importa.'
  },
  {
    id: 'cpx-mod-004', dominio: 'modelos', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una constructora desarrolló un modelo que predice qué licitaciones ganará. Tras varias iteraciones de mejora, el modelo sigue por debajo del nivel de precisión que el negocio acordó como necesario para confiar en la herramienta. En el punto de control de despliegue, ¿qué debe decidir el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Desplegar el modelo con la aclaración de que las predicciones son solo referenciales.' },
      { id: 'b', texto: 'Cancelar la iniciativa, ya que el enfoque de modelado tuvo varias oportunidades.' },
      { id: 'c', texto: 'Bajar el requisito de precisión acordado para que coincida con lo que el modelo logra.' },
      { id: 'd', texto: 'Decidir no desplegar y volver a una fase anterior para atacar las causas raíz.' }
    ],
    correctas: ['d'],
    explicacion: 'La metodología trata este punto de control como una decisión de verdad, y un modelo que no alcanza los criterios de éxito acordados justifica un «no avanzar» con iteración hacia una fase anterior —mejores datos o una técnica distinta—, porque el enfoque es iterativo y centrado en los datos por diseño. (a) mete igual en las decisiones de licitación una herramienta que el negocio definió como no confiable. (c) invierte la relación entre la necesidad de negocio y la solución. (b) se salta el diagnóstico y descarta la inversión cuando la causa raíz puede ser corregible aguas arriba.'
  },
  {
    id: 'cpx-mod-005', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una analítica produjo hace dos semanas un resultado de modelo impresionante, pero nadie logra reproducirlo. El equipo no puede determinar qué versión del código, qué configuración de parámetros ni qué variante del modelo generaron esa corrida. El director del proyecto de IA quiere eliminar este modo de falla. ¿Qué debe implementar?',
    opciones: [
      { id: 'a', texto: 'Gestión de configuración que registre la versión y los parámetros detrás de cada corrida del modelo.' },
      { id: 'b', texto: 'Una política por la cual el científico de datos líder apruebe personalmente cada corrida.' },
      { id: 'c', texto: 'Una reunión semanal donde el equipo repase los resultados destacados.' },
      { id: 'd', texto: 'Retención más prolongada de los archivos de salida del modelo en almacenamiento compartido.' }
    ],
    correctas: ['a'],
    explicacion: 'La gestión de configuración de versiones y parámetros captura exactamente qué produjo cada corrida y vuelve reproducible cualquier resultado a demanda, que es el control cuya ausencia deja al descubierto esta falla. (b) agrega un paso de visto bueno pero no registra nada sobre versiones de código ni configuraciones. (c) se apoya en la memoria y produce anécdotas en lugar de especificaciones que puedan volver a ejecutarse. (d) conserva los resultados en sí, dejando igual de desconocidas las entradas y configuraciones que los crearon.'
  },
  {
    id: 'cpx-mod-006', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud terminó el desarrollo de un modelo de riesgo de reingreso de pacientes. El director clínico presiona al director del proyecto de IA para acelerar el despliegue. La lista de verificación revela que aún no se ha obtenido una firma de aprobación que exige la política de gobernanza de IA de la organización. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Eximir el requisito de firma, porque el modelo superó todas las evaluaciones técnicas.' },
      { id: 'b', texto: 'Pedir al director clínico que otorgue la aprobación en nombre del interesado ausente.' },
      { id: 'c', texto: 'Obtener la aprobación requerida antes de emitir la decisión final de despliegue.' },
      { id: 'd', texto: 'Avanzar con el despliegue y enviar en paralelo la solicitud de firma, documentando que la aprobación está pendiente.' }
    ],
    correctas: ['c'],
    explicacion: 'Evaluar el desempeño del modelo contra los criterios de éxito y tomar la decisión final de aprobación incluye asegurar que se obtengan las aprobaciones requeridas como parte del proceso de gobernanza de IA: una firma faltante no es un tecnicismo burocrático, es un control documentado que protege la seguridad del paciente y la rendición de cuentas. (d) esquiva la compuerta de gobernanza que la política existe para hacer cumplir. (b) tergiversa quién otorgó la autorización. (a) ignora que los controles de gobernanza existen con independencia del desempeño técnico.'
  },
  {
    id: 'cpx-mod-007', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de calzado construye un motor de recomendación. El equipo de ciencia de datos redactó un documento de selección de algoritmo que recomienda un enfoque de aprendizaje profundo, pero no contiene ninguna justificación escrita de por qué se eligió ese camino frente a los otros métodos candidatos que se consideraron. El director del proyecto de IA está por circular el documento a los interesados. ¿Qué debe asegurarse de agregar antes de distribuirlo?',
    opciones: [
      { id: 'a', texto: 'Un resumen de los recursos computacionales que consumirá el enfoque elegido durante el entrenamiento.' },
      { id: 'b', texto: 'Criterios documentados de selección del modelo y la justificación que explique por qué se prefirió el enfoque elegido sobre las alternativas.' },
      { id: 'c', texto: 'Un enlace a la documentación del proveedor de la biblioteca que implementa el algoritmo elegido.' },
      { id: 'd', texto: 'Una sección con los nombres y niveles de seniority de todos los científicos de datos que participaron en la discusión.' }
    ],
    correctas: ['b'],
    explicacion: 'Documentar los criterios de selección y la justificación de la decisión es una práctica de transparencia obligada al supervisar la elección del algoritmo: sin ella los interesados no pueden evaluar si la elección fue sólida y la organización no conserva registro auditable de la decisión. (d) es información de personas, no la justificación técnica que los interesados necesitan para valorar la selección. (a) es un insumo de planificación que no explica la lógica de la elección. (c) describe un detalle de implementación, no los criterios que guiaron la selección entre los enfoques candidatos.'
  },

  // ── IA responsable y confiable ────────────────────────────────────────────

  {
    id: 'cpx-res-001', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios en la nube opera en producción un modelo de evaluación crediticia. Un equipo de auditoría interna pide evidencia de que cada decisión automática de crédito puede reconstruirse y revisarse después de ocurrida. El director del proyecto de IA debe implantar un mecanismo de gobernanza. ¿Cuál satisface mejor este requisito?',
    opciones: [
      { id: 'a', texto: 'Un informe semanal de desempeño que compare las tasas de aprobación entre líneas de producto.' },
      { id: 'b', texto: 'Un registro inmutable que capture las variables de entrada, la versión del modelo, la salida y la marca de tiempo de cada decisión.' },
      { id: 'c', texto: 'Un repositorio versionado del código fuente del modelo y de los scripts de entrenamiento.' },
      { id: 'd', texto: 'Un proceso que derive todas las decisiones limítrofes a un revisor humano antes de cerrarlas.' }
    ],
    correctas: ['b'],
    explicacion: 'Un registro inmutable con entradas, versión del modelo, salida y marca de tiempo por decisión es el rastro de auditoría que permite reconstruir y revisar después cada decisión de crédito, que es exactamente lo que pide auditoría. (a) muestra tendencias agregadas, no registros de decisiones individuales. (d) afecta las decisiones futuras, pero no crea rastro retroactivo de las automáticas ya tomadas. (c) permite reproducir el entrenamiento, pero no deja constancia de lo que el modelo desplegado decidió en cada caso concreto.'
  },
  {
    id: 'cpx-res-002', dominio: 'responsable', tarea: 3, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un grupo minorista pilotea un modelo de precios con IA en su plataforma de comercio electrónico. El director del proyecto se entera de que varios países donde opera la plataforma han introducido, o planean introducir, regulaciones que exigen transparencia algorítmica en los sistemas de precios automatizados. Quiere establecer una forma sistemática de mantenerse al día conforme esos cambios ocurran. ¿Qué mecanismo sirve mejor a este propósito?',
    opciones: [
      { id: 'a', texto: 'Realizar una revisión regulatoria única en el arranque del proyecto y documentarla en el acta de constitución.' },
      { id: 'b', texto: 'Suscribirse a las actualizaciones del asesor legal y designar un rol del equipo responsable de rastrear la regulación de IA y reportar los cambios.' },
      { id: 'c', texto: 'Asignar a un científico de datos el escaneo semanal de fuentes de noticias sobre IA y la difusión de los artículos relevantes.' },
      { id: 'd', texto: 'Confiar en que el dueño de producto señale cualquier regulación nueva durante las retrospectivas.' }
    ],
    correctas: ['b'],
    explicacion: 'Un mecanismo sistemático de seguimiento, apoyado en el asesor legal y con un rol designado que monitorea y reporta, asegura actualizaciones oportunas y con autoridad de manera recurrente. (a) captura solo las reglas vigentes en ese momento y no contempla las que aparezcan durante el proyecto. (d) es informal y reactivo: los cambios pueden perderse entre retrospectivas. (c) carece de autoridad y rigor legal, y la pericia principal de un científico de datos es técnica, no regulatoria.'
  },
  {
    id: 'cpx-res-003', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de logística construye un modelo de optimización de rutas con telemetría de conductores, incluidas trazas GPS precisas que permiten reidentificar a conductores individuales. El director del proyecto de IA diseña la capa de control de acceso al conjunto de entrenamiento. ¿Qué enfoque limita mejor el riesgo de reidentificación manteniendo los datos utilizables para modelar?',
    opciones: [
      { id: 'a', texto: 'Guardar la telemetría cruda en un esquema aparte y permitir que quienes entrenan modelos la crucen a demanda.' },
      { id: 'b', texto: 'Dar acceso de lectura a todos los científicos de datos del proyecto mediante una cuenta de servicio compartida.' },
      { id: 'c', texto: 'Sustituir las trazas GPS por agregados a nivel de ciudad en todas las copias del conjunto de entrenamiento.' },
      { id: 'd', texto: 'Aplicar controles de acceso basados en roles que restrinjan los campos identificables solo a los miembros del equipo cuyas tareas los requieren.' }
    ],
    correctas: ['d'],
    explicacion: 'Los controles basados en roles que restringen los campos identificables a quienes los necesitan implementan el principio de mínimo privilegio y limitan directamente quién puede acceder a datos reidentificantes en cada momento. (b) concede acceso indiscriminado y elimina la rendición de cuentas individual. (a) sigue permitiendo acceso amplio si los permisos de cruce no están restringidos. (c) puede eliminar variables que el modelo necesita para optimizar bien, y además es una decisión de transformación de datos, no un control de acceso.'
  },
  {
    id: 'cpx-res-004', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una red de salud evalúa un modelo de prioridad de triaje antes de desplegarlo en una red de clínicas de atención urgente. El modelo se entrenó con tres años de registros históricos de triaje. Una responsable de equidad clínica pregunta si el modelo asigna puntajes de prioridad equivalentes a pacientes con síntomas idénticos, con independencia de su tipo de seguro. ¿Cómo debe responder a esa inquietud?',
    opciones: [
      { id: 'a', texto: 'Asegurarle que el modelo no usa el tipo de seguro como variable de entrada y por lo tanto no puede producir disparidades ligadas al seguro.' },
      { id: 'b', texto: 'Encargar al equipo de ciencia de datos ejecutar el modelo sobre casos de prueba que mantengan los síntomas constantes variando el tipo de seguro, y comparar los puntajes resultantes.' },
      { id: 'c', texto: 'Quitar el campo de tipo de seguro del esquema de entrada en producción después del despliegue y vigilar si aparecen reclamos.' },
      { id: 'd', texto: 'Pedir al proveedor del modelo base que certifique que no se usaron atributos protegidos durante el entrenamiento.' }
    ],
    correctas: ['b'],
    explicacion: 'Ejecutar casos de prueba estructurados que mantienen los síntomas constantes y varían el tipo de seguro es lo correcto porque prueba empíricamente si la salida del modelo difiere entre grupos, que es la definición de una prueba de equidad entre poblaciones. (a) es incorrecta porque variables proxy pueden correlacionarse con los atributos excluidos: no tener el seguro como entrada directa no garantiza ausencia de sesgo ligado a él. (d) traslada la responsabilidad sin verificación independiente, insuficiente para una revisión de equidad clínica. (c) no aborda si el sesgo ya existe en el modelo y tampoco impide los efectos proxy.'
  },
  {
    id: 'cpx-res-005', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa médica se prepara para una auditoría regulatoria de su modelo diagnóstico con IA. El comité de auditoría solicitó documentación que demuestre que el desarrollo del modelo se condujo conforme a las regulaciones aplicables de datos de salud. El director del programa de IA debe preparar el paquete correspondiente. ¿Cuál debe ser su contenido principal?',
    opciones: [
      { id: 'a', texto: 'Las especificaciones técnicas de la infraestructura usada para entrenar y alojar el modelo diagnóstico.' },
      { id: 'b', texto: 'Los registros de decisiones de gobernanza de datos, aprobaciones de tratamiento y actividades de cumplimiento mantenidos a lo largo del desarrollo.' },
      { id: 'c', texto: 'Las actas de las retrospectivas del equipo de ciencia de datos durante el periodo de desarrollo.' },
      { id: 'd', texto: 'Un resumen de los resultados de validación clínica del modelo y comparaciones con la literatura médica publicada.' }
    ],
    correctas: ['b'],
    explicacion: 'Mantener documentación para auditorías y revisiones regulatorias exige registros que cubran las decisiones de gobernanza de datos, cómo se atendieron los requisitos normativos y las aprobaciones obtenidas durante el desarrollo: eso es lo que el comité está examinando. (d) demuestra la calidad del modelo, no el cumplimiento regulatorio. (a) describe el entorno de despliegue, no las actividades de cumplimiento. (c) recoge reflexiones del equipo sobre su proceso, no decisiones de cumplimiento.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpx-ope-001', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de cadena de suministro completó un proyecto de nueve meses de detección de demanda con IA. El director del proyecto prepara la sesión de lecciones aprendidas. Un problema clave fue que el plan de despliegue original no consideró un periodo estacional pico, lo que hizo coincidir la puesta en marcha con las semanas de mayor volumen de despachos de la empresa. ¿Cuál es la lección más accionable que registrar?',
    opciones: [
      { id: 'a', texto: 'Los despliegues de IA deberían programarse siempre para el primer trimestre del año fiscal.' },
      { id: 'b', texto: 'El área de operaciones debió comunicar mejor el calendario estacional.' },
      { id: 'c', texto: 'Los modelos de detección de demanda deberían construirse tomando los periodos pico como escenario principal de entrenamiento.' },
      { id: 'd', texto: 'Los planes de despliegue futuros deben incluir una revisión del calendario del negocio para evitar programar puestas en marcha durante picos operativos.' }
    ],
    correctas: ['d'],
    explicacion: 'Registrar que los planes futuros deben revisar el calendario del negocio para evitar los picos es accionable, específico y orientado al proceso, que es el estándar que vuelve útil la documentación de lecciones aprendidas para los equipos que vienen. (a) es una simplificación excesiva que puede chocar con otros impulsores del negocio. (c) es una decisión de modelado, no una lección de planificación del despliegue. (b) atribuye el problema a la comunicación de un área, un encuadre personal que no produce mejora de proceso y desvía la responsabilidad del proceso de planificación donde se originó el vacío.'
  },
  {
    id: 'cpx-ope-002', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una panificadora descubre que un científico de datos parchó directamente el modelo de pronóstico de demanda en producción para corregir un defecto urgente. Meses después, revisores internos piden al director del proyecto de IA reproducir los pronósticos que motivaron una decisión de compra importante, y nadie puede determinar exactamente qué modelo los produjo. ¿Qué debe implementar para evitar que la situación se repita?',
    opciones: [
      { id: 'a', texto: 'Un conjunto de retención más grande para validar los futuros reentrenamientos.' },
      { id: 'b', texto: 'Versiones de modelo publicadas con un paso de aprobación documentado para los cambios en producción.' },
      { id: 'c', texto: 'Acceso de solo lectura a los reportes para el equipo de revisión interna.' },
      { id: 'd', texto: 'Un pipeline automatizado más rápido para que las correcciones urgentes lleguen antes a producción.' }
    ],
    correctas: ['b'],
    explicacion: 'El control de versiones sobre los modelos desplegados, combinado con un paso de aprobación de cambios, asegura que cada estado del modelo en producción quede registrado y sea rastreable, de modo que cualquier salida pasada pueda ligarse a la versión exacta que la produjo. (a) mejora el rigor de la evaluación pero no registra qué modelo estuvo vivo en cada fecha. (c) ayuda a los revisores a ver los reportes actuales, pero no permite reconstruir un estado histórico no documentado. (d) facilitaría todavía más los parches sin rastro, agravando la brecha de trazabilidad en lugar de cerrarla.'
  },
  {
    id: 'cpx-ope-003', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud tiene desplegado un modelo de IA para agendar citas que deriva a los pacientes al entorno de atención más adecuado. El plan de respaldo de ese modelo se completó en el despliegue y no se ha revisado desde entonces. El equipo de operaciones informa que se han incorporado dos nuevos tipos de entorno de atención a la red desde la puesta en marcha. El director del proyecto de IA conduce la revisión trimestral de gobernanza. ¿Qué debe hacer respecto del plan de respuesta a incidentes?',
    opciones: [
      { id: 'a', texto: 'Dejar el plan de contingencia sin cambios, ya que cubría el estado del sistema al desplegarlo y sigue siendo la línea base autorizada.' },
      { id: 'b', texto: 'Transferir la propiedad del plan de contingencia al equipo de operaciones de TI sin revisarlo.' },
      { id: 'c', texto: 'Archivar el plan original y redactar uno nuevo desde cero que refleje el sistema actual.' },
      { id: 'd', texto: 'Actualizar el plan de contingencia para reflejar los dos nuevos entornos de atención y validar que los procedimientos de respuesta a incidentes siguen siendo adecuados.' }
    ],
    correctas: ['d'],
    explicacion: 'Supervisar el plan de contingencia exige que los planes se mantengan vigentes conforme cambia el entorno operativo, y los nuevos entornos de atención son un cambio de alcance que los procedimientos existentes podrían no cubrir. (a) trata un documento operativo vivo como un artefacto estático y abre vacíos de respuesta para los nuevos tipos de atención. (c) es innecesario cuando basta una actualización acotada, y exige más esfuerzo sin beneficio adicional. (b) saca al director del proyecto de un punto de control de gobernanza que está expresamente programado.'
  },

  // ══ Segundo lote ══════════════════════════════════════════════════════════
  // Preguntas 5 a 80 de la misma prueba de práctica. Las cuatro primeras y las
  // repetidas no estaban entre las capturas.

  // ── IA responsable y confiable ────────────────────────────────────────────

  {
    id: 'cpx-res-006', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa global de alimentos y bebidas construye una IA de pronóstico de demanda con datos de punto de venta de diecisiete países. El equipo de ciencia de datos probó tres arquitecturas de modelo distintas y seleccionó la de mejor desempeño. Tres meses después del cierre del proyecto, un vicepresidente regional pregunta por qué se eligió esa arquitectura frente a las alternativas, y los registros del proyecto no contienen una respuesta clara. ¿Qué proceso debió implantar el director del proyecto de IA para evitar este vacío?',
    opciones: [
      { id: 'a', texto: 'Exigir al equipo de ciencia de datos publicar su código en un repositorio interno para cualquier revisión futura.' },
      { id: 'b', texto: 'Almacenar los pesos entrenados de las tres arquitecturas en la nube para poder reevaluarlas más adelante.' },
      { id: 'c', texto: 'Agendar una reunión de cierre con el vicepresidente regional para explicar las decisiones de arquitectura después del despliegue.' },
      { id: 'd', texto: 'Documentar los criterios de selección, los resultados de evaluación y la justificación de la elección en el momento en que se tomó la decisión.' }
    ],
    correctas: ['d'],
    explicacion: 'La transparencia en la gestión de IA exige dejar registrado por qué se eligió un modelo, no solo cuál se eligió, y ese registro se levanta cuando la decisión se toma. (b) preserva artefactos pero no captura el razonamiento detrás de la selección. (a) permite reproducir, no explica la evaluación comparativa ni los criterios que llevaron a preferir una arquitectura. (c) no crea un registro contemporáneo: apoyarse en la memoria meses después arriesga un recuento incompleto o inexacto.'
  },
  {
    id: 'cpx-res-007', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera opera en tres países, cada uno con sus propios requisitos de gobernanza de IA. El director del proyecto descubre que un modelo de inspección de calidad recién desplegado se diseñó y aprobó en el país sede, pero nunca se revisó contra los requisitos de cumplimiento de los dos mercados internacionales donde también está corriendo. Hay una auditoría programada en seis meses. ¿Qué debe hacer de inmediato?',
    opciones: [
      { id: 'a', texto: 'Asegurar la adherencia a los requisitos de cumplimiento sectoriales de cada país operativo, coordinando con las áreas legal y de cumplimiento una revisión transmercado del modelo desplegado.' },
      { id: 'b', texto: 'Pedir al equipo de ciencia de datos reentrenar el modelo usando solo datos de los mercados internacionales, para crear versiones separadas por país.' },
      { id: 'c', texto: 'Suspender el modelo en los tres mercados hasta desarrollar un estándar único de cumplimiento para toda la empresa.' },
      { id: 'd', texto: 'Notificar a los auditores por anticipado que el modelo fue aprobado localmente y solicitar una exención para los mercados internacionales.' }
    ],
    correctas: ['a'],
    explicacion: 'Una revisión coordinada con legal y cumplimiento ataca el vacío de frente y deja al proyecto en posición de pasar la auditoría. (d) no resuelve el riesgo de cumplimiento de fondo y difícilmente se conceda para un sistema ya desplegado. (c) provoca una interrupción operativa desproporcionada antes de haber completado siquiera la revisión transmercado. (b) atiende la representación de datos por país, pero no cierra el vacío de revisión de cumplimiento que existe hoy.'
  },
  {
    id: 'cpx-res-008', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de software viene construyendo un modelo de lenguaje natural que clasifica tickets de soporte. A mitad del proyecto, el equipo reemplazó el corpus de entrenamiento original por una versión más nueva proveniente de otro sistema interno. Un auditor pide al director del programa mostrar la procedencia de los datos que alimentaron el modelo actual. ¿Qué registro debe poder presentar?',
    opciones: [
      { id: 'a', texto: 'Una bitácora de cambios con las decisiones de ingeniería de variables aplicadas al corpus de tickets.' },
      { id: 'b', texto: 'Una comparación de desempeño entre el modelo entrenado con el corpus original y el entrenado con el más nuevo.' },
      { id: 'c', texto: 'Registros de cadena de custodia que muestren la fuente, la fecha de ingesta y el custodio de cada versión del corpus de entrenamiento.' },
      { id: 'd', texto: 'El diccionario de datos que describe la taxonomía de tickets usada en el corpus actual.' }
    ],
    correctas: ['c'],
    explicacion: 'La cadena de custodia de los datos de entrenamiento y prueba captura fuente, fecha de ingesta y custodio de cada versión del conjunto, que es exactamente lo que el auditor necesita para verificar la procedencia cuando el corpus cambió durante el proyecto. (a) registra transformaciones aplicadas a los datos, no de dónde vinieron. (b) muestra diferencias de calidad entre versiones, no procedencia. (d) describe la estructura y el esquema de clasificación, no el origen ni el historial de custodia.'
  },
  {
    id: 'cpx-res-009', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de ropa outdoor construye un modelo de recomendación de productos con datos históricos de compra. Durante la preparación, el equipo de ciencia de datos nota que el conjunto de entrenamiento sobrerrepresenta a clientes del noreste del país y subrepresenta a los de zonas rurales. El director del programa de IA debe decidir qué hacer antes de que empiece el entrenamiento. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Analizar los datos de entrenamiento para determinar la magnitud del desbalance geográfico y evaluar su impacto en la equidad del modelo.' },
      { id: 'b', texto: 'Continuar con el entrenamiento y atender los desbalances regionales solo si el desempeño resulta pobre tras el lanzamiento.' },
      { id: 'c', texto: 'Eliminar todas las variables geográficas del conjunto de entrenamiento para prevenir el sesgo regional.' },
      { id: 'd', texto: 'Limitar el uso del modelo a los clientes del noreste hasta contar con un conjunto de datos equilibrado.' }
    ],
    correctas: ['a'],
    explicacion: 'Analizar los datos para determinar la magnitud del desbalance de representación es el primer paso correcto de una verificación de sesgo: establece el alcance del problema antes de elegir ninguna técnica de mitigación. (b) permite que patrones potencialmente discriminatorios lleguen a los clientes y difiere el análisis hasta después del lanzamiento. (c) puede dañar la utilidad legítima del modelo y no atiende otras fuentes de desbalance ya presentes en los datos. (d) esquiva el problema en vez de resolverlo.'
  },
  {
    id: 'cpx-res-010', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA gestiona un sistema de mantenimiento predictivo para turbinas industriales que marca equipos para inspección según patrones de sensores. Un representante sindical de los técnicos plantea que, si el modelo se equivoca, podrían producirse incidentes de seguridad, y pregunta qué ha hecho el equipo de IA para verificar si las salidas del modelo fallan sistemáticamente en ciertos modelos de turbina o cohortes de instalación antes del despliegue. ¿Qué exige demostrar esa preocupación?',
    opciones: [
      { id: 'a', texto: 'Un proceso para capturar la retroalimentación de los técnicos sobre las recomendaciones del modelo después del despliegue.' },
      { id: 'b', texto: 'Un documento de garantía del proveedor que confirme que el hardware de sensores cumple los estándares industriales de exactitud.' },
      { id: 'c', texto: 'Un análisis estructurado que compare las tasas de error del modelo entre distintos modelos de turbina y cohortes de instalación, realizado antes del despliegue.' },
      { id: 'd', texto: 'Una prueba de simulación que muestre el desempeño del modelo sobre un conjunto sintético que cubra todos los tipos de turbina.' }
    ],
    correctas: ['c'],
    explicacion: 'Un análisis previo al despliegue de las tasas de error por modelo de turbina y cohorte responde directamente a si el sistema produce salidas sistemáticamente peores para subgrupos de equipos, que es la sustancia de una verificación de sesgo entre grupos. (a) es valioso, pero no satisface una inquietud anterior al despliegue sobre patrones sistemáticos de falla. (b) atiende la exactitud del sensor, no el comportamiento del modelo entre cohortes de equipo. (d) puede no reflejar la variación del mundo real entre turbinas y cohortes con la fidelidad de un análisis sobre datos operativos reales.'
  },
  {
    id: 'cpx-res-011', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una consultora de talento desarrolla un modelo de IA para emparejar candidatos con vacantes. Durante una revisión de supervisión de datos, el director del proyecto descubre que el conjunto de entrenamiento incluye nombres, domicilios y números de seguridad social transferidos sin anonimizar desde un sistema heredado de Recursos Humanos. Los datos se recolectaron antes de que el proyecto comenzara y no estaban destinados a entrenar modelos. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Continuar con el entrenamiento usando el conjunto actual e instruir al equipo a no compartir las salidas del modelo con nadie fuera del proyecto.' },
      { id: 'b', texto: 'Solicitar la aprobación de cada candidato cuyos datos están en el conjunto antes de poder usarlos para entrenar.' },
      { id: 'c', texto: 'Establecer protocolos de gobernanza para la información personal identificable, trabajando con el equipo de gobernanza de datos para eliminarla o anonimizarla antes de continuar el desarrollo.' },
      { id: 'd', texto: 'Eliminar el conjunto completo y reiniciar la recolección desde cero usando solo perfiles de candidatos enviados recientemente.' }
    ],
    correctas: ['c'],
    explicacion: 'Trabajar con gobernanza de datos para eliminar o anonimizar la información personal identificable atiende la exposición inmediata y establece el protocolo que el proyecto necesita. (a) no elimina esa información del conjunto y deja a la organización expuesta a incumplimientos regulatorios y éticos. (d) es drástico y puede ser innecesario si los datos no identificables siguen siendo valiosos tras la anonimización. (b) sería complejo, lento y quizá inviable para un conjunto heredado, y no resuelve la exposición inmediata.'
  },
  {
    id: 'cpx-res-012', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora construye un modelo de detección de fraude en siniestros. Un científico de datos propone usar un ensamble de gradient boosting sin documentar por qué se eligió frente a una regresión logística más simple o a un enfoque basado en reglas. El director del proyecto de IA debe cerrar ese vacío antes de la próxima revisión de fase. ¿Qué acción corresponde?',
    opciones: [
      { id: 'a', texto: 'Postergar la revisión de fase hasta que un auditor externo pueda validar de forma independiente la elección del algoritmo.' },
      { id: 'b', texto: 'Documentar los criterios de evaluación usados para seleccionar el enfoque de gradient boosting y registrar la razón por la que se descartaron las alternativas.' },
      { id: 'c', texto: 'Exigir al equipo cambiar a regresión logística para que la elección sea defendible ante los auditores.' },
      { id: 'd', texto: 'Agregar una herramienta de interpretabilidad del modelo para compensar la falta de documentación.' }
    ],
    correctas: ['b'],
    explicacion: 'Documentar los criterios de selección y la justificación de haber preferido un enfoque sobre otros es la práctica de transparencia que corresponde exigir aquí. (c) sustituye el criterio del director por el análisis del equipo y sigue sin atender el vacío documental. (d) mejora la explicabilidad, pero no registra retroactivamente por qué se seleccionó ese algoritmo. (a) es prematuro y no resuelve una carencia de documentación interna antes de la revisión de fase.'
  },
  {
    id: 'cpx-res-013', dominio: 'responsable', tarea: 2, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una fabricante de componentes usa un modelo de aprendizaje automático para puntuar postulantes a puestos de manufactura. Tras el lanzamiento, un gerente de contrataciones plantea que el modelo puntúa consistentemente más bajo a los candidatos de un programa vocacional específico que a los de instituciones tradicionales de cuatro años. El director del proyecto de IA debe investigar antes del próximo ciclo de contratación. ¿Qué debe indicar al equipo que examine?',
    opciones: [
      { id: 'a', texto: 'Las métricas globales de precisión y exhaustividad del modelo sobre el conjunto de prueba reservado.' },
      { id: 'b', texto: 'Si las salidas de puntuación del modelo muestran patrones sistemáticos que desfavorecen a un grupo específico de candidatos.' },
      { id: 'c', texto: 'La correlación entre el promedio académico declarado por los postulantes y los puntajes del modelo en toda la población.' },
      { id: 'd', texto: 'La distribución de las etiquetas de entrenamiento aportadas por los gerentes de contratación en ciclos anteriores.' }
    ],
    correctas: ['b'],
    explicacion: 'Revisar si la distribución de puntajes desfavorece sistemáticamente a un grupo concreto es la evidencia directa que se necesita para determinar si existe sesgo discriminatorio. (a) agrega el desempeño sobre todos los candidatos y enmascara justamente las disparidades por subgrupo. (c) explica una relación de entrada, pero no revela si la puntuación discrimina entre grupos de postulantes. (d) es un seguimiento valioso, pero no responde directamente si las salidas del modelo desplegado son discriminatorias.'
  },
  {
    id: 'cpx-res-014', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística construye un modelo de IA para preseleccionar postulantes a puestos de almacén. La directora de Recursos Humanos pide al director del proyecto confirmar que la herramienta no favorecerá ni perjudicará sistemáticamente a postulantes por características ajenas al desempeño laboral. El equipo terminó el desarrollo inicial del modelo, pero aún no ha realizado ninguna evaluación estructurada de disparidades entre grupos. ¿Qué debe hacer a continuación?',
    opciones: [
      { id: 'a', texto: 'Limitar los campos que usa el modelo a las variables que la directora de Recursos Humanos confirmó manualmente como relacionadas con el puesto.' },
      { id: 'b', texto: 'Ampliar el conjunto de postulantes recolectando más datos antes de realizar cualquier evaluación de equidad.' },
      { id: 'c', texto: 'Implementar métricas de detección de sesgo y sistemas de monitoreo, y realizar pruebas de equidad entre distintos grupos poblacionales antes de avanzar con el modelo.' },
      { id: 'd', texto: 'Pedir a la directora de Recursos Humanos que apruebe el modelo con base en el puntaje de exactitud global que reporta el equipo de desarrollo.' }
    ],
    correctas: ['c'],
    explicacion: 'Implantar métricas de detección de sesgo y realizar pruebas de equidad entre grupos poblacionales evalúa directamente si el modelo produce resultados dispares antes de que se use en decisiones de contratación. (d) no aborda la equidad a nivel de grupo y expone a la organización a resultados discriminatorios. (a) reduce algo de riesgo, pero no sustituye una detección sistemática de sesgo ni las pruebas de equidad. (b) demora la evaluación sin atender las disparidades potenciales del modelo actual.'
  },
  {
    id: 'cpx-res-015', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una marca de ropa outdoor expande su modelo de precios con IA a mercados de un estado cuyas regulaciones de privacidad del consumidor imponen restricciones específicas al perfilado automatizado. El director del proyecto de IA necesita asegurar que el despliegue ampliado cumpla los requisitos relevantes del sector. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Pausar toda la actividad en ese mercado hasta que se promulgue una regulación federal de IA.' },
      { id: 'b', texto: 'Rastrear las regulaciones de privacidad aplicables en ese estado y evaluar qué requisitos aplican al sistema de precios automatizado.' },
      { id: 'c', texto: 'Implementar pruebas adicionales de exactitud del modelo para el segmento de ese mercado.' },
      { id: 'd', texto: 'Solicitar que el área legal revise todos los contratos con proveedores asociados al modelo de precios.' }
    ],
    correctas: ['b'],
    explicacion: 'Rastrear las regulaciones de IA vigentes y evaluar cuáles aplican al sistema concreto es el paso fundacional de cumplimiento antes de entrar a un entorno regulatorio nuevo. (d) es un control contractual, no una evaluación de cumplimiento regulatorio. (a) es innecesariamente conservador e ignora los requisitos estatales que ya aplican de inmediato. (c) atiende la calidad del modelo, no el cumplimiento normativo del perfilado automatizado.'
  },
  {
    id: 'cpx-res-016', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa solar despliega un modelo de IA que puntúa hogares para ofertas de financiamiento de eficiencia energética. El director del programa identifica que el conjunto de entrenamiento refleja patrones históricos de crédito de una época en que el préstamo estaba restringido en ciertas comunidades, y que el modelo reproduce esas disparidades geográficas. El equipo recomienda una estrategia de remuestreo. ¿Cuál es el papel del director del programa en esta etapa?',
    opciones: [
      { id: 'a', texto: 'Delegar por completo la decisión de mitigación del sesgo al equipo de ciencia de datos, por tratarse de un asunto técnico.' },
      { id: 'b', texto: 'Exigir que el área legal apruebe la estrategia de remuestreo antes de que el equipo de ciencia de datos proceda.' },
      { id: 'c', texto: 'Aprobar la estrategia de remuestreo solo si mantiene la exactitud del modelo en su nivel actual.' },
      { id: 'd', texto: 'Supervisar la aplicación del remuestreo y de cualquier técnica de mitigación complementaria, para asegurar que el vacío de representación quede efectivamente atendido.' }
    ],
    correctas: ['d'],
    explicacion: 'El papel del director es supervisar la aplicación de las técnicas de mitigación de sesgo durante el desarrollo, guiando activamente el uso del remuestreo y de métodos complementarios hasta cerrar el vacío de representación. (c) impone una restricción que puede no ser apropiada: las mejoras de equidad a veces implican concesiones modestas de exactitud, que el director debe balancear y no vetar de plano. (a) renuncia a la supervisión de gobernanza. (b) puede corresponder para ciertas decisiones, pero no sustituye el rol activo de supervisión.'
  },
  {
    id: 'cpx-res-017', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una fintech tiene desplegado un modelo de aprobación de créditos y debe prepararse para un examen de un regulador financiero federal. El regulador espera evidencia de que las decisiones del modelo se monitorean de forma continua respecto al cumplimiento. El director del programa de IA debe implantar el mecanismo adecuado antes del examen. ¿Qué debe implementar?',
    opciones: [
      { id: 'a', texto: 'Una bitácora de cambios del modelo que registre cada actualización desde el despliegue inicial.' },
      { id: 'b', texto: 'Un paquete de auditoría preparado por el equipo de cumplimiento en las cuatro semanas previas al examen.' },
      { id: 'c', texto: 'Mecanismos continuos de monitoreo y reporte de cumplimiento que rastreen los patrones de decisión del modelo frente a los requisitos regulatorios.' },
      { id: 'd', texto: 'Un proceso de revisión manual en el que oficiales de cumplimiento aprueben todas las decisiones de crédito por encima de cierto monto.' }
    ],
    correctas: ['c'],
    explicacion: 'El monitoreo y reporte continuos permiten demostrar supervisión permanente de los patrones de decisión del modelo, que es justo lo que el regulador espera. (b) captura una fotografía, no evidencia de monitoreo continuo. (d) es un control de supervisión humana, no un mecanismo sistémico de monitoreo de cumplimiento. (a) documenta los cambios del modelo, pero no vigila si sus decisiones en producción cumplen los requisitos regulatorios.'
  },
  {
    id: 'cpx-res-018', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una administradora de propiedades gestiona un sistema de cribado de solicitudes de alquiler que lleva ocho meses en producción. El equipo de cumplimiento de vivienda justa pide demostrar cómo detectarán si el modelo empieza a producir patrones discriminatorios con el tiempo, conforme nuevos solicitantes pasan por el sistema. ¿Qué mecanismo debe confirmar que está activo?',
    opciones: [
      { id: 'a', texto: 'Un proceso de revisión manual en el que un oficial de vivienda justa apruebe o revierta el diez por ciento superior de los rechazos cada semana.' },
      { id: 'b', texto: 'Un calendario de reentrenamiento del modelo cada seis meses con los datos de solicitantes más recientes.' },
      { id: 'c', texto: 'Un sistema permanente que evalúe las salidas del modelo entre grupos demográficos de solicitantes y alerte al equipo cuando se superen los umbrales de disparidad.' },
      { id: 'd', texto: 'Un conjunto reservado de solicitudes etiquetadas, actualizado anualmente y usado para recalcular la exactitud global del modelo.' }
    ],
    correctas: ['c'],
    explicacion: 'Un sistema de monitoreo permanente que evalúa salidas entre grupos demográficos y dispara alertas al superarse umbrales de disparidad implementa detección continua de sesgo, no una prueba puntual. (b) mejora la vigencia del modelo pero no detecta el sesgo que emerge entre ciclos de reentrenamiento: la pregunta del área de cumplimiento es de detección, no de actualización. (a) atiende casos individuales sin medir sistemáticamente si los patrones de decisión producen disparidades de grupo. (d) evalúa la exactitud global y se pierde justamente las dimensiones de equidad por grupo que exige el cumplimiento de vivienda justa.'
  },

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpx-neg-017', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una administradora de propiedades tiene un diseño preliminar para un motor de precios de alquiler con IA que cubre arquitectura, movimiento de datos y decisiones de modelado. El líder técnico lo declara completo. Al revisarlo, el director del proyecto de IA nota que nada describe cómo se operará, vigilará ni actualizará el motor una vez en producción. ¿Qué debe exigir?',
    opciones: [
      { id: 'a', texto: 'Un proyecto separado, constituido más adelante, para estudiar las cuestiones operativas.' },
      { id: 'b', texto: 'Una sección añadida que describa cómo se desplegará, monitoreará y mantendrá actualizada la solución.' },
      { id: 'c', texto: 'Un compromiso del proveedor de hacerse cargo de todas las inquietudes posteriores al lanzamiento.' },
      { id: 'd', texto: 'Una exención firmada por el líder técnico aceptando los problemas operativos futuros.' }
    ],
    correctas: ['b'],
    explicacion: 'Un borrador de solución no está completo hasta que aborda cómo operará el sistema en el mundo real: describir despliegue, monitoreo y actualización es un elemento nombrado del diseño de la solución de IA. (d) reparte culpas por problemas futuros en lugar de prevenirlos. (a) separa un pensamiento de diseño esencial del documento que debería contenerlo. (c) terceriza la rendición de cuentas sin definir qué requiere realmente la operación.'
  },
  {
    id: 'cpx-neg-018', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de clínicas debe decidir si financia un optimizador de agenda con IA. La propuesta detalla los costos con precisión, pero describe las ganancias solo como mayor eficiencia y personal más contento. El comité ejecutivo responde que no puede sopesar la decisión tal como está redactada. ¿Qué debe hacer el director del proyecto de IA para dejar la propuesta lista para decidir?',
    opciones: [
      { id: 'a', texto: 'Encuestar al personal de las clínicas sobre su satisfacción anticipada con la herramienta.' },
      { id: 'b', texto: 'Cuantificar las ganancias esperadas para poder contrastarlas con los costos.' },
      { id: 'c', texto: 'Reforzar la narrativa para que las ganancias cualitativas se sientan concretas.' },
      { id: 'd', texto: 'Comprometerse a medir las ganancias una vez que el sistema esté desplegado.' }
    ],
    correctas: ['b'],
    explicacion: 'Una decisión de financiamiento necesita las ganancias esperadas en términos medibles para que la comparación costo-beneficio sea posible: ese es el núcleo de determinar el retorno de la inversión. (c) viste afirmaciones cualitativas sin darle al comité nada que sopesar. (d) pide financiamiento antes de que exista la justificación. (a) recoge percepciones que pueden servir para planificar la adopción, pero no se pueden contrastar con los costos precisos de la propuesta.'
  },
  {
    id: 'cpx-neg-019', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera de cruceros redacta el diseño de un motor de recomendaciones de venta adicional con IA. El motor debe leer las reservas desde la plataforma de reservaciones y escribir ofertas en el sistema de mensajería a huéspedes, ambos mantenidos por equipos internos distintos a los que no se ha consultado. ¿Qué debe asegurar el director del proyecto de IA que especifique el diseño preliminar?',
    opciones: [
      { id: 'a', texto: 'Los puntos de conexión donde el motor intercambiará datos con cada sistema existente.' },
      { id: 'b', texto: 'Los cambios de organigrama necesarios una vez que el motor esté operativo.' },
      { id: 'c', texto: 'La conferencia donde podría presentarse el diseño de forma externa.' },
      { id: 'd', texto: 'El estilo de redacción publicitaria que deben seguir las ofertas generadas.' }
    ],
    correctas: ['a'],
    explicacion: 'Especificar los puntos de conexión con la plataforma de reservas y el sistema de mensajería documenta los puntos de integración, algo esencial precisamente porque equipos distintos son dueños de esos sistemas y hay que planificar los puntos de contacto. (d) es una guía de contenido que no configura el diseño del sistema. (b) es una consideración operativa muy posterior al diseño preliminar. (c) no tiene relación con hacer construible el diseño.'
  },
  {
    id: 'cpx-neg-020', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una operadora turística invierte en un asistente de IA que atenderá las consultas rutinarias de reserva para que los agentes se concentren en itinerarios complejos. El patrocinador pregunta al director del proyecto cómo sabrá la empresa, un año después del lanzamiento, si la inversión realmente rindió. ¿Qué debe proponer?',
    opciones: [
      { id: 'a', texto: 'Definir ahora las medidas de línea base más los indicadores poslanzamiento que cuantificarán los beneficios realizados.' },
      { id: 'b', texto: 'Hacer seguimiento de la disponibilidad del sistema como evidencia principal del retorno.' },
      { id: 'c', texto: 'Esperar al lanzamiento para ver qué estadísticas de uso reporta la plataforma.' },
      { id: 'd', texto: 'Citar los promedios de ahorro publicados por analistas del sector como retorno esperado.' }
    ],
    correctas: ['a'],
    explicacion: 'Demostrar el retorno exige capturar la línea base de hoy —tiempo de atención por agente, costo por consulta— y definir durante la planificación los indicadores contra los que se comparará. (c) pierde la línea base y deja que los datos disponibles dicten qué cuenta como éxito. (d) describe a otras empresas y no prueba nada sobre esta inversión. (b) muestra que el sistema está encendido, no que esté devolviendo valor.'
  },
  {
    id: 'cpx-neg-021', dominio: 'negocio', tarea: 7, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una distribuidora de material sanitario planifica una funcionalidad de recomendación de productos con IA para su portal de pedidos de contratistas. El plan de medición preliminar cubre en detalle la calidad de las predicciones y la velocidad de respuesta del sistema, pero nada más. ¿Qué debe agregar el director del proyecto de IA al plan?',
    opciones: [
      { id: 'a', texto: 'Un segundo revisor técnico que confirme las cifras de calidad de predicción.' },
      { id: 'b', texto: 'Medidas de si los contratistas encuentran útiles las recomendaciones y siguen interactuando con ellas.' },
      { id: 'c', texto: 'Una tabla mensual que ordene a los contratistas por volumen de pedidos.' },
      { id: 'd', texto: 'Una línea presupuestal para herramientas adicionales de prueba de calidad de predicción.' }
    ],
    correctas: ['b'],
    explicacion: 'Medir si los contratistas encuentran útiles las recomendaciones y siguen usándolas agrega la dimensión de satisfacción y adopción de la que vive o muere una funcionalidad de recomendación: sugerencias técnicamente sólidas que los usuarios ignoran no entregan nada. (c) gamifica la compra sin revelar cómo experimentan los usuarios la funcionalidad. (a) refuerza la confianza en cifras que el plan ya cubre bien. (d) profundiza el foco técnico existente en vez de ampliar la mirada.'
  },
  {
    id: 'cpx-neg-022', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de clínicas dentales pone en marcha un asistente de IA que responde preguntas de pacientes y agenda citas. El equipo corporativo de seguridad completó su prueba de penetración de red estándar, no encontró incidencias y declaró segura la solución. El director del proyecto de IA revisa la parte de seguridad de la evaluación de riesgos antes de firmar. ¿Qué debe hacer a continuación?',
    opciones: [
      { id: 'a', texto: 'Aceptar el visto bueno de seguridad, porque la prueba de penetración cubrió la red de producción.' },
      { id: 'b', texto: 'Limitar cualquier trabajo adicional de endurecimiento a firewalls y configuración de servidores.' },
      { id: 'c', texto: 'Repetir la misma prueba de penetración de red con una periodicidad recurrente.' },
      { id: 'd', texto: 'Examinar las superficies de ataque propias de la IA, como las entradas manipuladas y los datos de entrenamiento corrompidos.' }
    ],
    correctas: ['d'],
    explicacion: 'Los sistemas de IA introducen vulnerabilidades que una prueba de red convencional nunca sondea —entradas adversarias que manipulan el comportamiento del modelo y envenenamiento de los datos de los que aprende—, así que la evaluación debe extenderse a esas amenazas de nivel modelo. (a) equipara seguridad de red con seguridad de IA y deja sin examinar las superficies de ataque nuevas. (b) protege infraestructura ignorando cómo puede explotarse el modelo mismo. (c) solo vuelve a verificar lo que ya pasó.'
  },
  {
    id: 'cpx-neg-023', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de supermercados evalúa un modelo de precios dinámicos que ajustaría los precios de góndola por tienda según señales de demanda local. El director del proyecto de IA advierte que el modelo podría terminar fijando precios sistemáticamente más altos en barrios con menos alternativas de compra, muchos de ellos de menores ingresos. ¿Qué debe iniciar?',
    opciones: [
      { id: 'a', texto: 'Una auditoría de exactitud de las señales de demanda que alimentan el modelo.' },
      { id: 'b', texto: 'Una simulación de ingresos que compare estrategias de precios por región.' },
      { id: 'c', texto: 'Una evaluación de las implicaciones éticas de las decisiones de precio.' },
      { id: 'd', texto: 'Una revisión legal que confirme que el precio dinámico está permitido.' }
    ],
    correctas: ['c'],
    explicacion: 'Un modelo que puede perjudicar a barrios vulnerables plantea implicaciones éticas de la decisión automatizada, y evaluarlas es parte de la evaluación de riesgos antes de que avance el diseño. (b) mide resultados financieros y no revela quién soporta el daño. (d) responde si la práctica está permitida, pero un precio lícito puede ser igualmente corrosivo en lo ético y peligroso en lo reputacional. (a) comprueba si el modelo ve el mundo correctamente, no si actuar sobre esa visión trata a las comunidades con justicia.'
  },
  {
    id: 'cpx-neg-024', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora costea un proyecto de triaje de siniestros con IA. La estimación cubre licenciamiento de software, alojamiento en la nube y trabajo de integración. Durante la revisión, los analistas informan que una década de registros históricos de siniestros exigirá meses de limpieza y etiquetado por parte de especialistas antes de que pueda comenzar cualquier entrenamiento, y que ese esfuerzo no aparece por ningún lado en las cifras. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Reducir el presupuesto de modelado para compensar el esfuerzo recién descubierto.' },
      { id: 'b', texto: 'Anotar el esfuerzo como un riesgo y revisar las cifras si llega a materializarse.' },
      { id: 'c', texto: 'Agregar el esfuerzo de limpieza y etiquetado a la proyección total de costos del proyecto.' },
      { id: 'd', texto: 'Tratar el trabajo de limpieza como operación rutinaria absorbida por el área de siniestros.' }
    ],
    correctas: ['c'],
    explicacion: 'Preparar los datos para el entrenamiento es un costo real y a menudo dominante de una iniciativa de IA, así que esos meses de limpieza y etiquetado pertenecen a la proyección total junto al licenciamiento, el alojamiento y la integración. (d) esconde un costo mayor a quienes deciden y subestima lo que la iniciativa consume de verdad. (b) presenta como posibilidad un costo ya conocido y cierto. (a) no cambia los recursos totales requeridos: solo desfinancia otra parte del mismo proyecto.'
  },
  {
    id: 'cpx-neg-025', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un centro de contacto desplegó un asistente de IA que sugiere respuestas a los agentes de soporte, pero las sugerencias aparecen en una aplicación independiente, lo que obliga a los agentes a saltar entre dos sistemas mientras el cliente espera. Las quejas aumentan y el uso cae. ¿Qué debe priorizar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Reconocer públicamente a los agentes que más usan el asistente.' },
      { id: 'b', texto: 'Integrar el asistente dentro de la pantalla principal de atención de llamadas de los agentes.' },
      { id: 'c', texto: 'Acortar las sugerencias para que puedan leerse más rápido.' },
      { id: 'd', texto: 'Capacitar a los agentes para manejar las dos aplicaciones con eficiencia.' }
    ],
    correctas: ['b'],
    explicacion: 'La adopción depende de la integración con los sistemas existentes y con la forma real en que fluye el trabajo, así que llevar el asistente a la pantalla que los agentes ya usan elimina el salto que está generando las quejas. (d) entrena a las personas para tolerar un defecto de diseño en vez de corregirlo. (c) acelera la lectura, pero el salto disruptivo entre sistemas sigue ahí. (a) premia la persistencia ante una mala experiencia en lugar de reparar la experiencia misma.'
  },
  {
    id: 'cpx-neg-026', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una editorial prepara la justificación financiera de un sistema de IA que recomienda contenido de archivo para acuerdos de licenciamiento. El borrador del patrocinador asigna cifras elevadas en dinero al prestigio de marca y a la moral editorial, valores que el socio financiero califica en privado de inventados. El director del proyecto de IA debe cerrar la sección de beneficios antes de que se reúna el comité de revisión. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Conservar los valores asignados, porque los ejecutivos responden mejor a totales de beneficio más grandes.' },
      { id: 'b', texto: 'Cuantificar los beneficios que cuentan con evidencia de respaldo y presentar las ganancias intangibles por separado, sin cifras en dinero.' },
      { id: 'c', texto: 'Eliminar de la justificación todo beneficio que no pueda expresarse en dinero.' },
      { id: 'd', texto: 'Promediar las cifras del patrocinador con las estimaciones más bajas del socio financiero.' }
    ],
    correctas: ['b'],
    explicacion: 'Una justificación financiera creíble cuantifica solo lo que la evidencia sostiene —por ejemplo, los ingresos proyectados por licenciamiento— y describe cualitativamente las ganancias reales pero no medibles, para que el comité las vea sin tratarlas como dinero. (a) infla el caso y derrumba su credibilidad la primera vez que finanzas audite los números. (c) esconde valor estratégico legítimo que quienes deciden deberían sopesar. (d) promedia cifras fabricadas con estimaciones menores y solo produce una fabricación más pequeña.'
  },
  {
    id: 'cpx-neg-027', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de supermercados pierde ingresos cuando las tiendas calculan mal los cambios de demanda que se avecinan, y las góndolas quedan vacías o sobrecargadas de perecederos. El director del proyecto de IA debe caracterizar qué tipo de capacidad cognitiva exige el problema, para que el equipo planifique datos y habilidades en consecuencia. ¿Qué categoría de capacidad corresponde?',
    opciones: [
      { id: 'a', texto: 'Una capacidad de detección de anomalías que marque transacciones inusuales después de ocurridas.' },
      { id: 'b', texto: 'Una capacidad conversacional que responda preguntas de inventario en lenguaje natural.' },
      { id: 'c', texto: 'Una capacidad de pronóstico que proyecte resultados futuros a partir de datos históricos y contextuales.' },
      { id: 'd', texto: 'Una capacidad de personalización que adapte las promociones a cada comprador.' }
    ],
    correctas: ['c'],
    explicacion: 'El problema es anticipar la demanda futura para mejorar las decisiones de pedido, lo que corresponde al patrón de analítica predictiva: proyectar lo que viene a partir de ventas históricas y señales de contexto como la estacionalidad. (a) identifica desviaciones después de que ocurren, útil para fraude o fallas de sensor, no para anticipar la demanda de la próxima semana. (d) cambia lo que compra cada persona, no ayuda a que la tienda se abastezca bien. (b) facilita el acceso a información que ya debe existir y no genera ningún pronóstico por sí misma.'
  },
  {
    id: 'cpx-neg-028', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una procesadora de alimentos despliega un sistema de visión que marca defectos de empaque en sus líneas de producción. El diseño actual envía los artículos marcados a un portal de revisión separado, y luego los inspectores de calidad deben volver a digitar cada defecto confirmado en los registros de calidad existentes de la planta. El director del proyecto de IA revisa el plan de despliegue en clave de riesgo de adopción. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Aceptar la doble digitación, porque los inspectores ya conocen bien los registros de calidad existentes.' },
      { id: 'b', texto: 'Reemplazar los registros de calidad de la planta por el nuevo portal de revisión en la misma entrega.' },
      { id: 'c', texto: 'Programar horas extra adicionales para absorber la carga durante la primera etapa de operación.' },
      { id: 'd', texto: 'Planificar la integración para que los defectos confirmados fluyan automáticamente a los registros de calidad existentes.' }
    ],
    correctas: ['d'],
    explicacion: 'Un diseño que obliga a retipear resultados entre sistemas agrega fricción diaria, invita a errores de transcripción y es uno de los predictores más confiables de que el personal abandonará en silencio la herramienta nueva: el plan debe conectar el portal directamente con los registros existentes. (c) paga por hacer el trabajo redundante en vez de eliminarlo. (a) toma la familiaridad como sustituto del encaje con el flujo de trabajo. (b) multiplica la carga de cambio y acopla el despliegue de IA a una segunda migración riesgosa.'
  },
  {
    id: 'cpx-neg-029', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de farmacias desarrolla un modelo de IA para pronosticar la demanda de recetas recurrentes. Los científicos de datos proponen declarar exitoso el proyecto si el modelo supera por cualquier margen al pronóstico manual actual una vez terminada la evaluación. El director del proyecto de IA revisa esa propuesta durante la planificación. ¿Qué debe exigir en su lugar?',
    opciones: [
      { id: 'a', texto: 'Un periodo de evaluación el doble de largo, para que cualquier mejora quede estadísticamente confirmada.' },
      { id: 'b', texto: 'Un taller posterior a la evaluación donde los interesados decidan si el margen observado les parece suficiente.' },
      { id: 'c', texto: 'Umbrales de desempeño explícitos acordados con los interesados ahora, antes de que comience cualquier evaluación.' },
      { id: 'd', texto: 'El compromiso de adoptar el modelo solo si supera al pronóstico manual en todas las líneas de producto.' }
    ],
    correctas: ['c'],
    explicacion: 'Fijar la vara antes de evaluar mantiene objetiva la decisión: los interesados acuerdan por anticipado qué nivel de mejora justifica la inversión, y el juicio posterior se vuelve una medición en lugar de una negociación. (a) refuerza la confianza en la estimación, pero sigue sin definir un objetivo contra el cual compararla. (b) decide después de ver los resultados, lo que invita a mover la portería en la dirección que convenga políticamente. (d) exige superioridad en cada línea de producto, una vara distinta que nadie ha justificado y que puede rechazar un modelo con gran valor agregado.'
  },
  {
    id: 'cpx-neg-030', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de confitería arma la justificación de financiamiento de una plataforma de programación de producción con IA. El material de marketing de un proveedor promete reducciones de costo espectaculares, y el patrocinador quiere que esas cifras se peguen directamente en la sección de beneficios. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Probar las afirmaciones contra las operaciones propias de la empresa antes de que ninguna cifra entre al documento.' },
      { id: 'b', texto: 'Incluir las cifras del proveedor con una nota al pie que cite el material de marketing.' },
      { id: 'c', texto: 'Promediar las cifras del proveedor con estimaciones internas para moderarlas.' },
      { id: 'd', texto: 'Excluir toda cifra de beneficio, porque las proyecciones son inherentemente poco confiables.' }
    ],
    correctas: ['a'],
    explicacion: 'Apoyar la elaboración del caso de negocio incluye validar las afirmaciones: las promesas de un proveedor deben contrastarse con el contexto productivo propio, con referencias de otros clientes o con resultados de prueba antes de convertirse en la base de una decisión de financiamiento. (b) blanquea afirmaciones promocionales convirtiéndolas en proyecciones financieras, porque una cita no las vuelve ciertas para esta empresa. (c) mezcla dos cifras sin sustento en una sola que parece rigurosa y no lo es. (d) deja a los ejecutivos sin base alguna para juzgar la inversión.'
  },
  {
    id: 'cpx-neg-031', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo financiero de una empresa frutícola redactó la justificación de financiamiento de un sistema de clasificación de cosecha con IA. Su modelo de beneficios supone que el sistema entrega su calidad plena de clasificación desde la primera semana de operación. El director del proyecto de IA sabe que la calidad partirá más baja y mejorará a lo largo de sucesivos ciclos de reentrenamiento. ¿Cómo debe apoyar el documento?',
    opciones: [
      { id: 'a', texto: 'Eliminar del modelo todo detalle de tiempos para evitar debates sobre la velocidad de maduración.' },
      { id: 'b', texto: 'Dejar el supuesto como está, porque el modelo financiero es propiedad del área de finanzas.' },
      { id: 'c', texto: 'Mover la fecha de lanzamiento más adelante en el modelo, para que los beneficios plenos coincidan con ella.' },
      { id: 'd', texto: 'Corregir el supuesto para que los beneficios proyectados se acumulen conforme el sistema madura.' }
    ],
    correctas: ['d'],
    explicacion: 'El aporte del director a la justificación es el realismo técnico, y una curva de beneficios que crece gradualmente conforme los ciclos de reentrenamiento mejoran el sistema es materialmente distinta del valor pleno instantáneo: el supuesto debe corregirse. (b) se remite por completo a finanzas y retiene justamente el conocimiento técnico que el documento necesita para ser creíble. (a) esconde el problema en vez de representarlo con honestidad ante quienes deciden. (c) desliza la fecha de lanzamiento para que los beneficios plenos parezcan inmediatos: manipula el cronograma en lugar de arreglar el supuesto.'
  },

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpx-dat-009', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un distrito escolar recolectó datos de asistencia y calificaciones de doce sedes para un modelo de intervención temprana. Cada sede guarda los registros de sus estudiantes con distinta disposición de tablas, distintos nombres de columna y distintos catálogos de códigos. Antes de que los científicos de datos empiecen, el director del proyecto de IA agenda la revisión de una cuestión específica de compatibilidad. ¿Qué debe examinar esa revisión?',
    opciones: [
      { id: 'a', texto: 'Si cada sede firmó el memorando estándar de intercambio de datos del distrito.' },
      { id: 'b', texto: 'Si el sindicato de docentes respaldó la iniciativa de intervención temprana.' },
      { id: 'c', texto: 'Si el esquema y la estructura del conjunto de datos de cada sede pueden alinearse para el modelado.' },
      { id: 'd', texto: 'Si la red del distrito puede transferir los archivos de las sedes con suficiente rapidez.' }
    ],
    correctas: ['c'],
    explicacion: 'Revisar esquema y estructura para verificar compatibilidad con el modelado es exactamente la cuestión que plantean doce sedes con disposiciones, nombres de columna y catálogos divergentes: el modelo necesita todo eso reconciliado en una estructura consistente antes de poder entrenar. (d) es un detalle de infraestructura que no resuelve los desajustes estructurales. (b) es un asunto de interesados y adopción que se maneja fuera de la evaluación de datos. (a) gobierna el permiso para usar los registros, lo que es una verificación de cumplimiento, no la revisión de compatibilidad estructural que los científicos necesitan.'
  },
  {
    id: 'cpx-dat-010', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa eléctrica construye un modelo de mantenimiento predictivo para sus subestaciones. El director del proyecto de IA descubre que el mapa de fuentes del equipo solo lista el almacén de datos moderno, mientras que los registros antiguos de interrupciones están en un mainframe retirado que nunca se migró. El modelo necesita un historial de fallas de varios años para aprender los patrones de avería poco frecuentes. ¿Qué debe hacer a continuación?',
    opciones: [
      { id: 'a', texto: 'Comenzar a limpiar los extractos del almacén de datos para que el modelado empiece antes.' },
      { id: 'b', texto: 'Licenciar un conjunto de datos externo de interrupciones que sustituya a los registros antiguos.' },
      { id: 'c', texto: 'Continuar con los datos del almacén y enriquecer el modelo con registros nuevos con el tiempo.' },
      { id: 'd', texto: 'Inventariar el sistema heredado para evaluar si sus registros archivados son utilizables.' }
    ],
    correctas: ['d'],
    explicacion: 'La identificación de fuentes debe cubrir toda ubicación que contenga registros relevantes, y los patrones de avería poco frecuentes exigen justamente el historial profundo que guarda el mainframe. (c) deja al modelo sin los eventos raros que más necesita aprender. (b) describiría el comportamiento de falla de otros operadores, no el de esta cooperativa. (a) es prematuro: el trabajo de preparación debe empezar solo después de conocer el conjunto completo de fuentes.'
  },
  {
    id: 'cpx-dat-011', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo de ciencia de datos de una aerolínea quiere desarrollar un modelo de programación de tripulaciones sobre un servicio de aprendizaje automático en la nube recién contratado. Los registros de tripulación incluyen detalles personales sensibles y la aerolínea opera bajo políticas internas estrictas. Antes de aprobar cualquier transferencia de datos al servicio, ¿qué debe confirmar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Que los científicos de datos ya están familiarizados con las herramientas del servicio.' },
      { id: 'b', texto: 'Que el servicio puede escalar a cargas de producción después del piloto.' },
      { id: 'c', texto: 'Que el servicio satisface los requisitos de seguridad y gobernanza de la aerolínea.' },
      { id: 'd', texto: 'Que el costo de suscripción cabe en el presupuesto restante del proyecto.' }
    ],
    correctas: ['c'],
    explicacion: 'Coordinar el entorno de trabajo obliga a examinar cualquier ambiente antes de que datos sensibles aterricen en él. (b) importa más adelante, pero no decide si los registros de tripulación pueden colocarse ahí en primer lugar. (d) es una preocupación presupuestaria que no compensa un entorno no conforme. (a) facilita la adopción, pero no dice nada sobre si la plataforma protege los datos personales sensibles.'
  },
  {
    id: 'cpx-dat-012', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director del proyecto de IA de una cervecería debe mostrar al equipo directivo cómo varía la calidad de los datos de ventas de sus salones entre las regiones de la empresa, antes de que aprueben un modelo de demanda. Los hallazgos involucran patrones en decenas de locales y varias medidas de calidad. La dirección dispone de treinta minutos y poco contexto técnico. ¿Cómo deben comunicarse los hallazgos?',
    opciones: [
      { id: 'a', texto: 'Enviar por correo el diccionario de datos para que los directivos estudien de antemano las definiciones de campo.' },
      { id: 'b', texto: 'Distribuir los resultados crudos de las consultas de verificación de calidad para que inspeccionen la evidencia directamente.' },
      { id: 'c', texto: 'Presentar visualizaciones que hagan visibles de un vistazo los patrones regionales de calidad.' },
      { id: 'd', texto: 'Leer los puntajes de calidad local por local para que ninguna región quede sin cubrir verbalmente.' }
    ],
    correctas: ['c'],
    explicacion: 'Crear visualizaciones y reportes para comunicar los hallazgos sobre los datos es el enfoque correcto para mostrar variación entre decenas de locales a una audiencia no técnica en media hora: un mapa de calor regional o un gráfico comparativo vuelve el patrón inmediatamente visible. (b) exige capacidades de interpretación que la audiencia no tiene y quema la reunión en descifrar. (d) es exhaustivo, pero no deja ninguna imagen comprensible del patrón general. (a) define campos en vez de transmitir hallazgos.'
  },
  {
    id: 'cpx-dat-013', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de abarrotes quiere un modelo de pronóstico de demanda que cubra toda su red de tiendas. El director del proyecto de IA se entera de que el historial de ventas reunido proviene abrumadoramente de locales urbanos, mientras que las tiendas suburbanas y rurales aportaron poco. Por lo demás, el conjunto es grande y está limpio. ¿Qué debe indicar al equipo antes de empezar el entrenamiento?',
    opciones: [
      { id: 'a', texto: 'Planificar el ajuste manual de las predicciones rurales y suburbanas después de desplegar el modelo.' },
      { id: 'b', texto: 'Encargar la recolección de más datos urbanos, ya que esas tiendas generan la mayor parte de los ingresos.' },
      { id: 'c', texto: 'Analizar la distribución de registros por tipo de tienda para cuantificar los vacíos de representación y su impacto probable.' },
      { id: 'd', texto: 'Avanzar al entrenamiento, porque el volumen total es más que suficiente para un modelo robusto.' }
    ],
    correctas: ['c'],
    explicacion: 'Analizar cómo se distribuyen los registros entre tipos de tienda cuantifica el vacío de representación y dice si los datos pueden sostener un modelo para toda la red: eso es justamente el análisis de sesgos y vacíos que corresponde a la evaluación de datos. (d) confunde cantidad con representatividad, y un conjunto grande y sesgado sigue produciendo pronósticos sesgados. (a) trata un defecto conocido de los datos como un parche operativo en lugar de resolverlo antes de entrenar. (b) profundiza el desbalance en vez de corregirlo.'
  },
  {
    id: 'cpx-dat-014', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera opera historiadores de sensores en varias plantas, algunos alojados en la nube y otros en sitio. El director del proyecto de IA acaba de terminar el listado de fuentes candidatas para un proyecto de predicción de calidad. La planificación de la extracción está por comenzar. ¿Qué debe completar antes de que empiece esa planificación?',
    opciones: [
      { id: 'a', texto: 'Iniciar la extracción en la planta más grande para validar el pipeline cuanto antes.' },
      { id: 'b', texto: 'Estandarizar los datos de sensores de cada planta en un esquema único.' },
      { id: 'c', texto: 'Registrar quién es dueño de cada fuente y qué permisos exigirá la extracción.' },
      { id: 'd', texto: 'Ordenar las fuentes candidatas por costo de almacenamiento y periodo de retención.' }
    ],
    correctas: ['c'],
    explicacion: 'Un mapa de fuentes no es accionable hasta que el equipo sabe quién controla cada sistema y qué aprobaciones necesitará el acceso; descubrirlo durante la extracción genera demoras evitables. (d) atiende el presupuesto, no los bloqueos de acceso que frenan la recolección. (b) es trabajo de preparación posterior a confirmar que las fuentes existen y son accesibles. (a) invita a rehacer trabajo si más tarde se niega o restringe el permiso sobre ese sistema.'
  },
  {
    id: 'cpx-dat-015', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo de IA de una viñedo encontró historiales meteorológicos detallados de un proveedor comercial al que el área de marketing ya está suscrita, y quiere entrenar con ellos un modelo de rendimiento de cosecha. Los archivos son técnicamente fáciles de obtener desde la cuenta de marketing. ¿Qué debe hacer primero el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Confirmar que los términos del proveedor permiten usar los datos para entrenar modelos.' },
      { id: 'b', texto: 'Hacer que marketing reexporte los archivos, para que el equipo de IA no figure como suscriptor.' },
      { id: 'c', texto: 'Proceder, ya que la empresa paga por el acceso a esos datos.' },
      { id: 'd', texto: 'Tratar los datos como públicos, porque describen condiciones meteorológicas.' }
    ],
    correctas: ['a'],
    explicacion: 'Verificar los derechos de uso y los acuerdos de licencia antecede a cualquier uso de datos de terceros, porque una suscripción comprada para analítica de marketing puede no extenderse a entrenar un modelo. (c) confunde pagar el acceso con tener permitido todo uso interno bajo el acuerdo. (b) no cambia nada en lo legal y agrega mala fe. (d) confunde el fenómeno con el producto: la licencia gobierna el conjunto curado del proveedor, no el clima que describe.'
  },
  {
    id: 'cpx-dat-016', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una mutual de seguros acaba de recibir los extractos de registros de pólizas solicitados al sistema de administración, y los científicos de datos quieren empezar el análisis de inmediato. El equipo de la fuente solo ha informado que el trabajo de extracción terminó. ¿Qué debe indicar el director que se haga primero?',
    opciones: [
      { id: 'a', texto: 'Comenzar el análisis de inmediato, ya que el perfilado posterior revelará cualquier problema de extracción.' },
      { id: 'b', texto: 'Ejecutar una segunda extracción y comparar ambas copias para detectar diferencias.' },
      { id: 'c', texto: 'Aceptar los archivos tal como llegaron, porque el equipo de la fuente confirmó que el trabajo terminó con éxito.' },
      { id: 'd', texto: 'Reconciliar los archivos extraídos contra los registros de origen en completitud y exactitud antes de comenzar el análisis.' }
    ],
    correctas: ['d'],
    explicacion: 'Validar completitud y exactitud durante la recolección significa reconciliar lo que llegó contra la fuente antes de que ningún análisis dependa de ello, para atrapar archivos truncados, segmentos perdidos o conteos que no cuadran en el punto más barato de corregirlos. (a) deja que el perfilado descubra fallas de extracción más tarde, cuando las conclusiones formadas mientras tanto ya se apoyan en datos defectuosos. (c) confunde que el proceso corrió con que el contenido esté completo y fiel al origen. (b) solo confirma consistencia y reproduciría cualquier falla sistemática en ambas copias.'
  },
  {
    id: 'cpx-dat-017', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una empresa química, el conjunto de datos de rotación de personal del proyecto de IA contiene detalles de salario y desempeño. El director del proyecto descubre que todo el departamento de analítica puede leerlo, aunque solo un pequeño equipo trabaja en el modelo. Todavía no ha ocurrido ningún mal uso. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Convertir el conjunto a solo lectura para todo el departamento.' },
      { id: 'b', texto: 'Pedir al jefe del departamento que recuerde al personal las expectativas de confidencialidad.' },
      { id: 'c', texto: 'Limitar el acceso a los integrantes del equipo cuyo trabajo en el proyecto lo requiere.' },
      { id: 'd', texto: 'Mantener el acceso departamental, ya que fomenta la colaboración y la reutilización.' }
    ],
    correctas: ['c'],
    explicacion: 'Los permisos sobre datos sensibles del proyecto deben corresponder a la necesidad real, y exponer detalles de salario y desempeño a un departamento entero es un riesgo permanente haya ocurrido o no un mal uso. (d) cambia un beneficio difuso por exposición continua de registros personales. (b) apela al comportamiento mientras la exposición técnica sigue intacta. (a) todavía deja a decenas de personas viendo detalles sensibles que no tienen razón de ver.'
  },
  {
    id: 'cpx-dat-018', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En un astillero, un director de proyecto de IA está por solicitar extractos de telemetría de motores a tres talleres para un modelo de eficiencia de combustible. Un integrante del equipo pregunta cómo sabrán si los extractos que lleguen son lo bastante buenos para usarse. ¿Qué debe establecer el director antes de solicitar los extractos?',
    opciones: [
      { id: 'a', texto: 'Un esquema de penalidades para los talleres que entreguen los extractos con retraso.' },
      { id: 'b', texto: 'Estándares de calidad definidos y criterios de aceptación que los extractos deben cumplir al llegar.' },
      { id: 'c', texto: 'Un acuerdo de que el equipo de modelado juzgará cada extracto una vez iniciado el entrenamiento.' },
      { id: 'd', texto: 'Una preferencia por el taller que históricamente entrega los datos más limpios.' }
    ],
    correctas: ['b'],
    explicacion: 'Definir estándares de calidad y criterios de aceptación antes de pedir los extractos le da al equipo una base objetiva para juzgar cada entrega en el momento en que llega, y eso es parte de definir los datos requeridos. (a) atiende los tiempos de entrega, no si el contenido es utilizable. (d) ignora que se necesitan las tres fuentes y sigue sin ofrecer un estándar contra el cual juzgarlas. (c) descubre los problemas en el punto más caro, cuando el retrabajo empuja el proyecto hacia atrás.'
  },
  {
    id: 'cpx-dat-019', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una operadora ferroviaria trabaja en un sector regulado, y su oficina de cumplimiento advierte que los examinadores podrían exigir una relación completa de los orígenes y el manejo de los datos de entrenamiento del modelo de seguridad. La recolección está por comenzar desde varios sistemas operativos. ¿Qué debe implantar el director del proyecto de IA durante la recolección?',
    opciones: [
      { id: 'a', texto: 'Registros que trazan de dónde vino cada conjunto de datos y cómo se usa.' },
      { id: 'b', texto: 'La retención únicamente de los conjuntos de entrenamiento finales, descartando las copias intermedias.' },
      { id: 'c', texto: 'La confianza en el conocimiento institucional que el equipo del almacén tiene de los sistemas.' },
      { id: 'd', texto: 'Un resumen de las fuentes previstas, escrito una sola vez en el acta de constitución.' }
    ],
    correctas: ['a'],
    explicacion: 'Mantener registros que trazan el origen y el uso de cada conjunto es lo que permite responder después, con credibilidad, las preguntas de los examinadores: documentar los flujos conforme ocurren. (d) captura la intención al arranque, no lo que efectivamente pasó durante la recolección y el manejo. (c) se va por la puerta con el personal y no puede presentarse como evidencia. (b) destruye el rastro que muestra cómo las entradas crudas se convirtieron en los datos de los que aprendió el modelo.'
  },
  {
    id: 'cpx-dat-020', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de dotación de personal evalúa su historial de colocaciones para un modelo de emparejamiento de candidatos. El director del proyecto de IA revisa el plan de evaluación y ve que el equipo pretende verificar los formatos de los campos y los valores faltantes, y con eso dar el visto bueno. Las recomendaciones del modelo afectarán a personas que buscan empleo en muchos sectores y perfiles demográficos. ¿Qué debe agregar al plan?',
    opciones: [
      { id: 'a', texto: 'La repetición de las verificaciones de valores faltantes en cada extracto futuro.' },
      { id: 'b', texto: 'Un análisis de distribuciones que revele los desbalances entre grupos.' },
      { id: 'c', texto: 'Un paso de compresión para que los entrenamientos posteriores terminen más rápido.' },
      { id: 'd', texto: 'Un experimento temprano de ajuste que confirme que el modelo puede aprender de los datos.' }
    ],
    correctas: ['b'],
    explicacion: 'La evaluación debe ir más allá del formato y la completitud para exponer desbalances y vacíos, algo que importa muchísimo cuando las salidas afectan a personas de distintos perfiles demográficos y sectores. (a) agrega redundancia sin ampliar lo que la evaluación puede ver. (d) se adelanta al desarrollo del modelo antes de entender las debilidades de los datos. (c) es una optimización de rendimiento que no aporta nada a la comprensión de los datos.'
  },
  {
    id: 'cpx-dat-021', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa de ahorro y crédito planea un modelo de detección de fraude que debe aprender de las transacciones nuevas conforme cambia el comportamiento de los socios. El líder de ingeniería de datos programó un único extracto de transacciones históricas y da por terminado el trabajo de recolección. El director del proyecto de IA revisa el plan contra el diseño de la solución, que exige reentrenar el modelo con actividad reciente después del lanzamiento. ¿Qué vacío debe señalar?',
    opciones: [
      { id: 'a', texto: 'Al plan le falta un proceso de recolección para el flujo continuo de transacciones que la solución requiere.' },
      { id: 'b', texto: 'El extracto histórico debió muestrearse en lugar de extraerse completo.' },
      { id: 'c', texto: 'El extracto debió provenir del almacén de datos y no del sistema transaccional.' },
      { id: 'd', texto: 'El plan no anonimiza los nombres de los socios antes de que los datos lleguen al equipo.' }
    ],
    correctas: ['a'],
    explicacion: 'Implementar procesos de recolección para los flujos continuos es parte de reunir los datos requeridos, y un modelo de fraude que debe reentrenarse con actividad reciente no puede sobrevivir con un extracto histórico de una sola vez. (b) es una decisión de volumen que no atiende la necesidad de transacciones frescas tras el lanzamiento. (c) es un detalle de origen que puede o no importar, y nada en el plan indica que la fuente sea equivocada. (d) es un control de privacidad que se maneja en las verificaciones de cumplimiento y que no arreglaría el flujo continuo ausente.'
  },
  {
    id: 'cpx-dat-022', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera conserva décadas de registros de manejo de contenedores y quiere un modelo de predicción de daños a la carga. Procesar el archivo completo sería costoso y lento, pero al equipo le preocupa que un subconjunto arbitrario pueda inducir a error al modelo. ¿Cómo debe indicar el director del proyecto de IA que se proceda?',
    opciones: [
      { id: 'a', texto: 'Determinar el volumen que el modelo necesita y diseñar un enfoque de muestreo que preserve la representatividad.' },
      { id: 'b', texto: 'Cargar el archivo completo, ya que más datos mejoran de forma confiable los resultados del modelo.' },
      { id: 'c', texto: 'Permitir que los ingenieros de extracción elijan el subconjunto que les resulte más cómodo extraer.' },
      { id: 'd', texto: 'Usar solo el trimestre más reciente de registros para mantener rápido el procesamiento.' }
    ],
    correctas: ['a'],
    explicacion: 'Determinar el volumen necesario y diseñar un muestreo que preserve la representatividad equilibra costo y validez estadística, que es exactamente cómo deben fijarse los requisitos de volumen al definir los datos requeridos. (b) supone que más siempre es mejor e ignora el costo de procesamiento que el equipo ya señaló. (d) cambia por velocidad la variedad estacional y operativa del archivo, y arriesga un modelo ciego a patrones recurrentes. (c) produce justamente la muestra arbitraria y potencialmente engañosa que el equipo teme.'
  },
  {
    id: 'cpx-dat-023', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de artículos deportivos alimenta las transacciones de punto de venta hacia su entorno de desarrollo de IA para un modelo de inventario. Tras una actualización del sistema de tienda, el flujo dejó de cargar en silencio y el equipo entrenó durante semanas con datos que habían dejado de actualizarse. El director del proyecto de IA quiere que la recolección resista futuros cambios aguas arriba. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Procedimientos de actualización con verificaciones que saquen a la luz los flujos interrumpidos o alterados.' },
      { id: 'b', texto: 'Un cambio de los flujos automatizados a exportaciones manuales después de cada actualización.' },
      { id: 'c', texto: 'Un congelamiento de cambios en los sistemas de tienda por lo que resta del proyecto.' },
      { id: 'd', texto: 'La solicitud de que los modeladores confirmen la vigencia de los datos antes de cada entrenamiento.' }
    ],
    correctas: ['a'],
    explicacion: 'Reunir los datos incluye mantener procesos de refresco que fallen de forma ruidosa cuando los sistemas aguas arriba cambian. (d) traslada un deber de infraestructura a los consumidores y depende de la vigilancia manual. (c) queda fuera de la autoridad del proyecto y no sobreviviría a las prioridades operativas. (b) cambia un modo de falla silencioso por otro más lento y propenso a errores.'
  },
  {
    id: 'cpx-dat-024', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una empresa de cosméticos ya identificó a los expertos en mercadería y a los jefes de almacén cuyo conocimiento necesita el equipo de datos. Hoy las preguntas se responden en conversaciones de pasillo y mensajes de chat dispersos, y varias respuestas ya se perdieron o se contradijeron. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Reemplazar la consulta a expertos por solicitudes de documentación escrita a cada departamento.' },
      { id: 'b', texto: 'Pedir al equipo de datos que agrupe todas las preguntas en una única sesión al final de la fase.' },
      { id: 'c', texto: 'Establecer canales acordados y sesiones de trabajo a través de los cuales se capture el aporte de los expertos.' },
      { id: 'd', texto: 'Asignar un científico de datos para acompañar a cada experto y tomar notas informales.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer canales acordados y sesiones de trabajo asegura una comunicación confiable con los expertos ya identificados y que su aporte quede capturado en vez de perderse: es el paso que sigue a identificarlos. (b) demora respuestas que el equipo necesita de forma continua y garantiza retrabajo mientras tanto. (a) produce respuestas estáticas que no pueden atender repreguntas ni contradicciones. (d) recrea el mismo problema de captura no estructurada que el proyecto ya padece.'
  },
  {
    id: 'cpx-dat-025', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de cines evalúa datos para un modelo de pronóstico de asistencia y encuentra que el sistema de boletería y la aplicación móvil reportan ventas notoriamente distintas para las mismas funciones. Ambos sistemas alimentan el conjunto de entrenamiento previsto. El equipo quiere resolver el asunto rápido y seguir adelante. ¿Qué debe indicar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Promediar las cifras de ambos sistemas para cada función.' },
      { id: 'b', texto: 'Investigar por qué las fuentes discrepan antes de usar los datos.' },
      { id: 'c', texto: 'Preferir los números de la plataforma móvil por ser la fuente más moderna.' },
      { id: 'd', texto: 'Excluir por completo las ventas por función de las entradas del modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'La consistencia es una dimensión central de la calidad, y una divergencia inexplicada suele señalar una diferencia de definición o de proceso que promediar solo taparía. (a) fabrica números que no coinciden con ningún sistema y entierra el defecto de fondo. (c) es una suposición, no un hallazgo: el sistema más antiguo puede ser el libro autoritativo. (d) elimina la señal central que un modelo de asistencia necesita.'
  },
  {
    id: 'cpx-dat-026', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un hospital construye un modelo de riesgo de reingreso. Los clínicos insisten en que el contexto socioeconómico impulsa fuertemente los reingresos, pero los registros internos del hospital no contienen ningún atributo de ese tipo. Los criterios de éxito del proyecto exigen capturar ese factor. ¿Cómo debe abordar el director del proyecto de IA la dimensión faltante?',
    opciones: [
      { id: 'a', texto: 'Extender el extracto interno más atrás en el tiempo para capturar más variedad.' },
      { id: 'b', texto: 'Continuar solo con los registros internos y aceptar un poder predictivo reducido.' },
      { id: 'c', texto: 'Pedir a los clínicos que anoten cada registro con su estimación socioeconómica.' },
      { id: 'd', texto: 'Explorar proveedores externos que puedan licenciar los datos contextuales faltantes.' }
    ],
    correctas: ['d'],
    explicacion: 'Explorar fuentes externas y proveedores de terceros es el movimiento prescrito cuando los sistemas internos no pueden suministrar una dimensión requerida, y los datos contextuales licenciados pueden llenar el vacío que exigen los criterios de éxito. (b) abandona a sabiendas un factor que el proyecto se comprometió a capturar. (c) sustituye atributos reales por conjeturas subjetivas y no escala a toda la población de pacientes. (a) suma más de los mismos campos internos y sigue sin contener información socioeconómica.'
  },
  {
    id: 'cpx-dat-027', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una telecomunicaciones, un ingeniero sobrescribió por accidente un conjunto de datos completamente depurado para el modelo de fallas de red, y una semana de trabajo de preparación resultó irrecuperable. El equipo reconstruyó el conjunto a mano. El director del proyecto de IA quiere asegurar que un incidente similar no vuelva a costarle al proyecto. ¿Qué debe implantar?',
    opciones: [
      { id: 'a', texto: 'Una entrada de lecciones aprendidas que registre la pérdida como un hecho aislado aceptado.' },
      { id: 'b', texto: 'Almacenamiento del proyecto configurado con respaldos y procedimientos de recuperación probados.' },
      { id: 'c', texto: 'Una política que restrinja la edición de conjuntos de datos únicamente al director del proyecto.' },
      { id: 'd', texto: 'Una regla que obligue a los ingenieros a guardar copias personales de cada conjunto que tocan.' }
    ],
    correctas: ['b'],
    explicacion: 'Configurar el almacenamiento y los sistemas de respaldo según las necesidades del proyecto es el remedio de infraestructura, y unos procedimientos de recuperación probados convierten una futura sobrescritura en una restauración menor en vez de una semana perdida. (d) dispersa versiones sin control entre máquinas e invita a la confusión sobre cuál copia es la autoritativa. (c) crea un cuello de botella y coloca una salvaguarda técnica sobre un rol de coordinación. (a) documenta la falla sin impedir que se repita.'
  },
  {
    id: 'cpx-dat-028', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En un laboratorio clínico, un director de proyecto de IA supervisa la recolección para un modelo que, tras el lanzamiento, puntuará a diario a los pacientes que ingresan. Los datos de resultados de laboratorio cambian de forma continua, pero el plan de recolección del equipo consiste en un único extracto puntual para sostener el entrenamiento. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Ampliar el plan de recolección para incluir flujos recurrentes y procedimientos de refresco, junto al extracto de entrenamiento.' },
      { id: 'b', texto: 'Entregar el diseño de los flujos de datos de producción al equipo de despliegue una vez construido el modelo.' },
      { id: 'c', texto: 'Aprobar el plan, ya que el entrenamiento del modelo es la única actividad que necesita los datos ahora.' },
      { id: 'd', texto: 'Agrandar el extracto puntual para capturar un tramo más largo de resultados históricos de laboratorio.' }
    ],
    correctas: ['a'],
    explicacion: 'Una solución que puntúa pacientes a diario necesita procesos de recolección permanentes y procedimientos de refresco, así que el plan debe cubrir desde ahora los flujos recurrentes y no solo la fotografía de entrenamiento. (c) trata el entrenamiento como el final de la historia de los datos cuando la puntuación diaria depende de resultados actualizados de forma continua. (d) agrega profundidad al entrenamiento pero deja a la solución en producción sin fuente de registros frescos. (b) empuja un requisito de datos ya conocido hacia el despliegue, donde descubrir tarde los obstáculos del flujo sale mucho más caro.'
  },
  {
    id: 'cpx-dat-029', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una telecomunicaciones creció mediante varias adquisiciones, y los registros de clientes siguen dispersos en los repositorios en la nube separados de cada empresa adquirida. El director del programa de IA está identificando fuentes para un modelo de predicción de abandono que debe cubrir toda la base de suscriptores. ¿Qué debe indicar al equipo que haga primero?',
    opciones: [
      { id: 'a', texto: 'Limitar el alcance de fuentes a los sistemas de la casa matriz para mantener el proyecto en marcha.' },
      { id: 'b', texto: 'Migrar todos los datos adquiridos a un único almacén antes de cualquier evaluación.' },
      { id: 'c', texto: 'Muestrear un repositorio adquirido y suponer que los demás son similares.' },
      { id: 'd', texto: 'Catalogar cada repositorio adquirido y los registros de clientes que contiene.' }
    ],
    correctas: ['d'],
    explicacion: 'Los almacenes distribuidos y alojados en la nube deben evaluarse uno por uno para que el equipo sepa dónde vive cada registro relevante antes de planificar la recolección. (a) excluiría a los suscriptores adquiridos y echaría abajo el requisito de cubrir toda la base. (b) es una decisión de consolidación costosa que debe seguir a la evaluación, no precederla. (c) es riesgoso porque las empresas adquiridas suelen diferir en sistemas, formatos y completitud.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpx-mod-008', dominio: 'modelos', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una minorista de artículos para exteriores desarrolla un modelo que predice las necesidades de reposición de inventario. El equipo de ciencia de datos propone un enfoque de aprendizaje en el que el modelo es penalizado por decisiones incorrectas y recompensado por decisiones que mejoran los resultados de inventario a lo largo del tiempo, dentro de un entorno simulado de cadena de suministro. El director del proyecto de IA debe decidir si aprueba ese enfoque para el caso de uso. ¿Qué debe guiar la decisión?',
    opciones: [
      { id: 'a', texto: 'Rechazar el enfoque porque requiere datos históricos etiquetados que la propuesta no menciona.' },
      { id: 'b', texto: 'Evaluar si el entorno simulado representa adecuadamente la dinámica real de la cadena de suministro antes de aprobar el enfoque.' },
      { id: 'c', texto: 'Exigir al equipo cambiar a un enfoque supervisado usando registros históricos de reposición antes de evaluar alternativas.' },
      { id: 'd', texto: 'Aprobar el enfoque de inmediato, porque la optimización secuencial de decisiones siempre es superior a los métodos basados en predicción.' }
    ],
    correctas: ['b'],
    explicacion: 'Evaluar los compromisos y coordinar con los científicos de datos las decisiones de arquitectura es responsabilidad del director, y en una técnica de decisión secuencial con señales de recompensa dentro de un simulador la pregunta crítica es si esa simulación representa con suficiente fidelidad la cadena real para que la política aprendida transfiera. (a) malinterpreta cómo aprende esta técnica. (d) ignora el riesgo de que una simulación mal diseñada produzca políticas que fracasen en producción. (c) descarta preventivamente un enfoque potencialmente adecuado sin evaluarlo.'
  },
  {
    id: 'cpx-mod-009', dominio: 'modelos', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una naviera portuaria quiere optimizar cómo se apilan y secuencian los contenedores en su terminal. El equipo construyó un simulador de terminal de alta fidelidad, y las buenas estrategias de apilado se reconocen por resultados como una rotación más rápida de las naves, no por ejemplos etiquetados de movimientos correctos. ¿Qué enfoque debe respaldar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Aprendizaje supervisado entrenado sobre registros de decisiones de apilado anteriores.' },
      { id: 'b', texto: 'Un modelo lineal de pronóstico que prediga los volúmenes de contenedores del próximo mes.' },
      { id: 'c', texto: 'Aprendizaje por refuerzo que refine la estrategia de apilado con retroalimentación de resultados simulados.' },
      { id: 'd', texto: 'Aprendizaje no supervisado para agrupar contenedores con perfiles de manejo similares.' }
    ],
    correctas: ['c'],
    explicacion: 'La toma de decisiones secuencial con retroalimentación basada en resultados dentro de un simulador de alta fidelidad es el escenario de manual del aprendizaje por refuerzo, que aprende una estrategia actuando y recibiendo señales de recompensa como una rotación más rápida. (a) solo puede imitar las decisiones humanas históricas, incluidas sus ineficiencias, y además no existen ejemplos etiquetados de movimientos correctos. (d) describe los datos agrupando contenedores por perfil de manejo, pero no produce ninguna estrategia operativa. (b) atiende la planificación de la demanda, un problema distinto al de decidir cómo apilar y secuenciar.'
  },
  {
    id: 'cpx-mod-010', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora prepara datos de siniestros para un modelo de predicción de severidad. El algoritmo elegido es sensible a la magnitud de las entradas, y los montos de siniestro expresados en dinero son muchísimo mayores que los valores de antigüedad medidos en días, de modo que los campos grandes dominan los cálculos de distancia del modelo. ¿Qué debió indicar el director del proyecto de IA que hiciera el equipo?',
    opciones: [
      { id: 'a', texto: 'Entrenar modelos separados para cada entrada numérica y combinar sus salidas.' },
      { id: 'b', texto: 'Convertir todas las entradas numéricas en bandas categóricas para eliminar las diferencias de escala.' },
      { id: 'c', texto: 'Reescalar las entradas numéricas a rangos comparables antes de entrenar.' },
      { id: 'd', texto: 'Eliminar los campos de mayor valor para que ninguna entrada domine.' }
    ],
    correctas: ['c'],
    explicacion: 'La normalización o estandarización lleva las entradas numéricas a rangos comparables para que los algoritmos sensibles a la escala ponderen cada variable por su información y no por su magnitud, y gestionar ese proceso es parte de la supervisión de la preparación de datos. (d) descarta los montos de siniestro, que probablemente están entre las entradas más predictivas. (a) agrega una complejidad enorme sin resolver el desbalance de escala dentro de ningún modelo multivariante. (b) destruye información de grano fino que el modelo podría aprovechar.'
  },
  {
    id: 'cpx-mod-011', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un centro de diagnóstico desarrolla un modelo para predecir reingresos hospitalarios. Los clínicos que asesoran el proyecto insisten en que las señales derivadas —como el tiempo entre ingresos y la duración de la estancia— importan mucho más que los campos crudos de ingreso y alta. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Excluir los campos de fecha crudos, porque no son directamente predictivos.' },
      { id: 'b', texto: 'Comprar un conjunto de datos externo que ya contenga variables predictivas de salud.' },
      { id: 'c', texto: 'Coordinar sesiones de trabajo donde clínicos y científicos de datos deriven nuevas entradas del modelo a partir de los campos crudos.' },
      { id: 'd', texto: 'Alimentar el modelo con todos los campos crudos y dejar que el entrenamiento descubra las señales útiles.' }
    ],
    correctas: ['c'],
    explicacion: 'Coordinar la ingeniería de variables entre expertos del dominio y científicos de datos convierte el conocimiento clínico en entradas derivadas de las que el modelo sí puede aprender, y facilitar esa colaboración es el papel del director en la transformación de datos. (d) confía en que el entrenamiento descubra señales compuestas a partir de campos crudos, ignora el saber disponible del dominio y suele fallar con datos limitados. (a) tira justamente el material del que salen las señales derivadas. (b) no captura los patrones de pacientes de este hospital y esquiva a los expertos ya involucrados.'
  },
  {
    id: 'cpx-mod-012', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora desarrolla un modelo de detección de fraude. Durante la fase de entrenamiento, el director del proyecto de IA recibe un informe: el equipo corrió múltiples experimentos de entrenamiento pero no registró la configuración de hiperparámetros, las versiones del conjunto de datos ni los puntajes de evaluación de cada corrida. El equipo quiere avanzar con la que pareció ser la mejor configuración. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Exigir al equipo re-ejecutar los experimentos con un seguimiento adecuado antes de cerrar cualquier selección de configuración.' },
      { id: 'b', texto: 'Permitir que el equipo avance con base en su criterio profesional y registrar los experimentos futuros de ahí en adelante.' },
      { id: 'c', texto: 'Aceptar el relato verbal del equipo sobre la mejor configuración y documentarlo en la bitácora del proyecto como registro suficiente.' },
      { id: 'd', texto: 'Escalar de inmediato al patrocinador y recomendar suspender el proyecto para una auditoría completa.' }
    ],
    correctas: ['a'],
    explicacion: 'Gestionar el entrenamiento incluye el versionado de los datos y el seguimiento de experimentos, lo que significa que las selecciones de configuración deben ser reproducibles y estar documentadas: sin hiperparámetros ni puntajes registrados no hay base confiable para la elección ni rastro de auditoría. (b) deja un resultado indocumentado y potencialmente irreproducible. (c) no es sustituto equivalente de registros estructurados de experimentos. (d) es desproporcionado frente a un vacío de trazabilidad que se remedia re-ejecutando con las herramientas adecuadas.'
  },
  {
    id: 'cpx-mod-013', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios públicos completó la evaluación de calidad de datos para un modelo de predicción de interrupciones. Los datos cumplen en gran medida los requisitos, con unos pocos vacíos menores conocidos, y los interesados esperan ahora una decisión sobre la preparación. ¿Cómo debe comunicar el resultado el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Diferir el reporte de calidad hasta que haya resultados del modelo disponibles.' },
      { id: 'b', texto: 'Reportar un veredicto simple de aprobado o no aprobado para mantener el mensaje limpio.' },
      { id: 'c', texto: 'Documentar los hallazgos con las limitaciones conocidas y una recomendación clara de preparación.' },
      { id: 'd', texto: 'Reenviar la salida cruda del perfilado de datos al comité de dirección.' }
    ],
    correctas: ['c'],
    explicacion: 'Documentar los hallazgos de calidad, las limitaciones conocidas y una recomendación da a quienes deciden una base completa y trazable para la decisión de preparación, que es justo lo que exige este punto de control. (b) esconde los vacíos menores que los interesados quizá necesiten sopesar frente al cronograma y el riesgo. (d) es un artefacto técnico, no comunicación, y obliga a los ejecutivos a interpretar estadísticas por su cuenta. (a) contradice el propósito de decidir la preparación de los datos antes de que empiece el entrenamiento.'
  },
  {
    id: 'cpx-mod-014', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de un proyecto de IA supervisa el desarrollo de un modelo de detección de fallas en paneles solares. En la revisión final previa al despliegue, el equipo de evaluación reporta que el modelo se desempeña bien con datos de una sola región geográfica, pero no se ha probado con datos de las otras tres regiones donde se desplegará. ¿Qué debe evaluar antes de aprobar el despliegue?',
    opciones: [
      { id: 'a', texto: 'Si el tiempo de entrenamiento del modelo se mantuvo dentro del presupuesto de cómputo aprobado.' },
      { id: 'b', texto: 'Si el modelo demuestra robustez y generalización suficientes en las regiones donde operará.' },
      { id: 'c', texto: 'Si el equipo de ciencia de datos tiene tiempo suficiente para recolectar datos de todas las regiones antes del cierre del año fiscal.' },
      { id: 'd', texto: 'Si se ha notificado a los equipos regionales la fecha de despliegue prevista.' }
    ],
    correctas: ['b'],
    explicacion: 'Evaluar la robustez y la capacidad de generalización es un elemento obligado de la revisión de preparación para el despliegue: un modelo validado en solo una de cuatro regiones no puede darse por listo para las otras tres, y el director debe cerrar ese vacío o documentarlo formalmente como riesgo aceptado antes de emitir el visto bueno. (a) es una preocupación de gestión de recursos, distinta de la preparación para desplegar. (c) es una restricción del proyecto, no la evaluación de preparación en sí. (d) es un paso de comunicación posterior a la decisión, no la base para tomarla.'
  },
  {
    id: 'cpx-mod-015', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El modelo de optimización de rutas de una naviera se acerca al lanzamiento. El líder de ciencia de datos declara terminado el modelo y el patrocinador presiona para presentarlo en un evento del sector el mes próximo. La aprobación del despliegue le corresponde al director del proyecto de IA. ¿Sobre qué base debe tomar la decisión?',
    opciones: [
      { id: 'a', texto: 'La evidencia completa de preparación, desde el desempeño del modelo hasta la infraestructura y la documentación operativa.' },
      { id: 'b', texto: 'El criterio profesional del líder de ciencia de datos de que el modelo está terminado.' },
      { id: 'c', texto: 'Un lanzamiento de compromiso con funcionalidad parcial, a tiempo para el evento.' },
      { id: 'd', texto: 'El cronograma de lanzamiento del patrocinador y la visibilidad que ofrece el evento.' }
    ],
    correctas: ['a'],
    explicacion: 'La decisión final de aprobación debe descansar en el cuerpo completo de evidencia de preparación —desempeño contra los criterios de éxito, robustez, infraestructura de despliegue y documentación operativa—, porque eso es lo que la compuerta de operacionalización existe para verificar. (b) es un insumo, pero refleja solo la perspectiva del modelado. (d) es presión de cronograma, no evidencia, y dejar que gobierne la decisión es exactamente como llegan a producción los sistemas no preparados. (c) sigue exigiendo la misma verificación de preparación para aquello que se lance, y hereda los mismos riesgos.'
  },
  {
    id: 'cpx-mod-016', dominio: 'modelos', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una empresa de medios quiere descubrir segmentos naturales de audiencia ocultos en sus datos de comportamiento de visualización. No existen categorías predefinidas y la compañía no tiene ejemplos etiquetados de cómo debería lucir un segmento. ¿Qué enfoque debe confirmar el director del proyecto de IA que está siguiendo el equipo?',
    opciones: [
      { id: 'a', texto: 'Aprendizaje supervisado entrenado sobre ejemplos de segmentos de audiencia conocidos.' },
      { id: 'b', texto: 'Una segmentación manual definida por la intuición del equipo de marketing.' },
      { id: 'c', texto: 'Aprendizaje no supervisado que haga emerger las agrupaciones inherentes a los datos de comportamiento.' },
      { id: 'd', texto: 'Aprendizaje por refuerzo que optimice la asignación de segmentos mediante retroalimentación de recompensa.' }
    ],
    correctas: ['c'],
    explicacion: 'Descubrir estructura en los datos sin categorías ni etiquetas predefinidas es el caso de uso que define al aprendizaje no supervisado, que hace emerger agrupaciones naturales directamente del comportamiento de visualización. (a) queda descartado porque no existen ejemplos etiquetados de segmentos con los cuales entrenar. (d) requiere un ciclo interactivo de retroalimentación con recompensas por acciones, que no describe un descubrimiento puntual de estructura en datos históricos. (b) recrea supuestos humanos, que es exactamente lo que la empresa quiere superar minando los datos.'
  },
  {
    id: 'cpx-mod-017', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minera tiene un modelo que predice fallas de equipos. Los resultados de prueba sobre datos históricos de la mina piloto son excelentes, y la empresa planea desplegarlo en todas sus minas, que difieren en clima, antigüedad de los equipos y patrones de uso. ¿Qué debe exigir el director del proyecto de IA antes de aprobar el despliegue?',
    opciones: [
      { id: 'a', texto: 'La aprobación con base en los sólidos resultados del conjunto reservado de la mina piloto.' },
      { id: 'b', texto: 'Un despliegue completo inmediato acompañado de monitoreo estrecho en cada mina.' },
      { id: 'c', texto: 'Una evaluación del modelo sobre datos que reflejen las condiciones de las otras minas.' },
      { id: 'd', texto: 'Un límite contractual que restrinja el uso del modelo a la mina piloto.' }
    ],
    correctas: ['c'],
    explicacion: 'Evaluar la robustez y la generalización es parte central de la verificación de preparación, y un modelo validado solo con las condiciones de una mina no ha demostrado que soporte otros climas, antigüedades de equipo y patrones de uso. (a) prueba desempeño únicamente en ese entorno. (d) abandona el objetivo de negocio multisitio en lugar de comprobar si puede alcanzarse. (b) descubre las fallas de generalización en producción, donde las averías no detectadas tienen consecuencias de seguridad y de costo.'
  },
  {
    id: 'cpx-mod-018', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una constructora desarrolla un modelo para predecir sobrecostos de proyecto. El conjunto de entrenamiento contiene una gran proporción de registros de proyectos terminados sin incidentes, pero muy pocos de proyectos que sufrieron sobrecostos mayores, que es justamente el patrón de falla que el modelo debe detectar. El director del proyecto de IA revisa el plan de preparación de datos. ¿Cuál es la acción más apropiada frente al desbalance?',
    opciones: [
      { id: 'a', texto: 'Eliminar los registros de sobrecosto del conjunto de entrenamiento para lograr una distribución uniforme de resultados.' },
      { id: 'b', texto: 'Supervisar un enfoque de aumento de datos o de generación de datos sintéticos que incremente la representación de la clase subrepresentada antes de entrenar.' },
      { id: 'c', texto: 'Continuar con el entrenamiento e indicar al equipo de evaluación que aplique un ajuste posterior al umbral de salida del modelo.' },
      { id: 'd', texto: 'Reducir el tamaño de la clase mayoritaria hasta igualar el conteo de la clase minoritaria y equilibrar así el conjunto.' }
    ],
    correctas: ['b'],
    explicacion: 'Supervisar el aumento de datos y la generación sintética es responsabilidad del director en la preparación: cuando una clase crítica está subrepresentada, el enfoque más sólido antes de entrenar es mejorar su representación para que el modelo aprenda de ejemplos suficientes. (a) elimina justamente la señal que el modelo está diseñado para detectar. (c) es un parche que no ataca la deficiencia de entrenamiento subyacente. (d) descarta innecesariamente gran parte de los datos disponibles y puede producir un modelo subajustado.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpx-ope-004', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una editorial cierra un proyecto de IA que recomienda temas de artículos a los editores. El patrocinador pide al director del proyecto un informe final sobre la iniciativa. El equipo de ciencia de datos propone entregar como ese informe el cuaderno de evaluación técnica del modelo. ¿Qué debe entregar el director del proyecto para servir mejor al patrocinador?',
    opciones: [
      { id: 'a', texto: 'Un resumen únicamente de los resultados que superaron las expectativas, para sostener la confianza del patrocinador.' },
      { id: 'b', texto: 'El conjunto completo de configuraciones de algoritmo y parámetros de entrenamiento detrás del modelo final.' },
      { id: 'c', texto: 'Los resultados del proyecto medidos contra los criterios de éxito definidos al inicio.' },
      { id: 'd', texto: 'Una reformulación del documento de alcance original con las fechas de entrega actualizadas.' }
    ],
    correctas: ['c'],
    explicacion: 'Un informe final documenta los resultados del proyecto frente a los objetivos y criterios de éxito acordados al principio, que es lo que un patrocinador necesita para juzgar si la inversión entregó. (b) pertenece a la documentación técnica del equipo que mantendrá el modelo, no a un informe ejecutivo de cierre. (d) describe lo prometido en lugar de lo logrado. (a) tergiversa el desempeño y socava la confianza cuando los vacíos afloren más adelante.'
  },
  {
    id: 'cpx-ope-005', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un estudio jurídico desplegó un modelo de IA para revisión de contratos que extrae cláusulas clave y marca posibles problemas. Tres meses después de estar en producción, el equipo de cumplimiento descubre que el modelo viene produciendo salidas sin ningún registro de las cláusulas marcadas ni del fundamento de cada marca. El director del proyecto de IA debe cerrar ese vacío. ¿Qué acción corresponde?',
    opciones: [
      { id: 'a', texto: 'Reemplazar el modelo actual por uno con funciones de explicabilidad incorporadas, para eliminar la necesidad de registro.' },
      { id: 'b', texto: 'Implementar el registro de las salidas del modelo y de las entradas de datos que motivaron cada marca, e integrarlo al marco de gobernanza del modelo.' },
      { id: 'c', texto: 'Archivar manualmente todas las salidas de los últimos tres meses y dar el vacío por remediado.' },
      { id: 'd', texto: 'Aceptar la configuración actual, porque las salidas del modelo son revisadas por abogados antes de tomar cualquier acción.' }
    ],
    correctas: ['b'],
    explicacion: 'La gobernanza del modelo exige establecer rastros de auditoría y mantener documentación de cumplimiento, y un sistema de IA que produce decisiones sin registro viola eso. (d) no atiende el requisito de rastro de auditoría, que es necesario con independencia de la revisión posterior. (a) es un cambio arquitectónico desproporcionado: el registro puede implementarse como capa operativa sin reentrenar. (c) no establece una solución permanente ni cierra el vacío sistémico hacia adelante.'
  },
  {
    id: 'cpx-ope-006', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una fábrica de piezas de precisión depende de un sistema de inspección visual con IA en la planta. Se pide al director del programa desarrollar un plan de respaldo por si el sistema queda fuera de servicio durante una corrida de producción. El plan actual solo indica que el personal debe volver a la inspección manual, sin procedimiento para notificar a la dirección ni para rastrear los lotes afectados. ¿Qué vacío debe atender primero?',
    opciones: [
      { id: 'a', texto: 'Agregar procedimientos de escalamiento y pasos de trazabilidad de lotes al plan de contingencia, para poder identificar el producto afectado y que la dirección pueda responder.' },
      { id: 'b', texto: 'Reemplazar el respaldo de inspección manual por un segundo sistema de inspección con IA.' },
      { id: 'c', texto: 'Exigir que el área de operaciones certifique que la inspección manual iguala la exactitud de la IA antes de aprobar el plan.' },
      { id: 'd', texto: 'Reducir el volumen de producción durante los periodos de contingencia para bajar el riesgo de defectos no detectados.' }
    ],
    correctas: ['a'],
    explicacion: 'Agregar escalamiento y trazabilidad de lotes cierra los vacíos identificados: la notificación a la dirección y la trazabilidad del producto afectado son elementos centrales de un procedimiento de respuesta a incidentes. (b) puede ser una mejora futura, pero no atiende los pasos ausentes en el plan existente. (d) es un apaño operativo, no una acción de planificación de contingencia. (c) confunde el desempeño de la inspección con el diseño del proceso de contingencia.'
  },
  {
    id: 'cpx-ope-007', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de transporte urbano opera un modelo de predicción de pasajeros entrenado con datos históricos de rutas. La ciudad rediseña partes de la red de buses según un calendario estacional recurrente, y después de cada rediseño la utilidad del modelo cae visiblemente hasta que se lo actualiza de manera improvisada. Como parte de la supervisión continua de la solución, ¿qué debe establecer el director del programa de IA?',
    opciones: [
      { id: 'a', texto: 'Un proceso de estimación manual por parte de los planificadores que reemplace al modelo en cada temporada.' },
      { id: 'b', texto: 'Una política de reentrenamiento activada solo cuando las quejas de los pasajeros lleguen a la mesa de operaciones.' },
      { id: 'c', texto: 'Una cadencia de actualización del modelo alineada con cada cambio planificado de la red de servicio.' },
      { id: 'd', texto: 'Una línea base congelada del modelo, para que los resultados sigan siendo comparables entre temporadas.' }
    ],
    correctas: ['c'],
    explicacion: 'Coordinar las actualizaciones del modelo con el calendario conocido de rediseños mantiene al modelo alineado con la realidad y convierte los refrescos en una actividad de gobernanza planificada en vez de una carrera improvisada. (b) implica que el modelo se degrada primero en producción y que los pasajeros absorben el costo de predicciones obsoletas. (d) preserva la comparabilidad pero fija una inexactitud creciente después de cada rediseño. (a) abandona la solución en lugar de gestionar su ciclo de vida, y sacrifica el valor que el modelo fue construido para entregar.'
  },
  {
    id: 'cpx-ope-008', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios eléctricos tiene desplegado un modelo de IA que predice fallas de transformadores. Hace poco el modelo dejó de producir predicciones durante un tramo prolongado, y las cuadrillas de campo se enteraron por una conversación casual. La mesa de ayuda general de TI no supo qué hacer cuando finalmente se reportó el problema. ¿Qué debe implantar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Procedimientos de respuesta documentados que definan quién actúa y cómo se manejan las fallas de la IA.' },
      { id: 'b', texto: 'Una reunión mensual de revisión donde se discutan los problemas recientes del modelo.' },
      { id: 'c', texto: 'Una solicitud a las cuadrillas de campo para que reporten cualquier predicción faltante que noten.' },
      { id: 'd', texto: 'Una instrucción permanente para que la mesa de ayuda derive todos los problemas de IA al proveedor.' }
    ],
    correctas: ['a'],
    explicacion: 'Procedimientos de respuesta documentados con responsabilidades definidas dan a la organización una forma repetible de detectar, clasificar y resolver las fallas del sistema de IA, en vez de depender de la suerte. (d) abdica de la responsabilidad interna y no sirve para problemas originados en los propios flujos de datos o integraciones de la empresa. (b) es demasiado lento para fallas que interrumpen predicciones operativas. (c) convierte en mecanismo de detección a la audiencia menos equipada y repite el hallazgo casual que causó el problema.'
  },
  {
    id: 'cpx-ope-009', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica usa un modelo de IA de cribado de compuestos en su proceso temprano de descubrimiento de fármacos. El director del proyecto de IA está configurando el tablero de indicadores operativos. El equipo de ciencia de datos sugiere seguir únicamente la exactitud del modelo contra un conjunto de validación reservado. El área de desarrollo de negocio quiere ver las tasas de acierto de candidatos y el tiempo hasta completar el cribado. ¿Qué enfoque debe implementar?',
    opciones: [
      { id: 'a', texto: 'Seguir únicamente la métrica de exactitud del modelo, por ser el indicador técnicamente más riguroso.' },
      { id: 'b', texto: 'Delegar el diseño del tablero al equipo de inteligencia de negocio sin participación del director del proyecto.' },
      { id: 'c', texto: 'Seguir únicamente las métricas de resultado de negocio, porque son las que le importan a la dirección.' },
      { id: 'd', texto: 'Implementar un tablero que siga tanto métricas de desempeño del modelo como métricas de resultado de negocio.' }
    ],
    correctas: ['d'],
    explicacion: 'Supervisar las métricas de la solución de IA exige monitorear indicadores tanto de impacto de negocio como de desempeño técnico, porque cada uno captura una dimensión distinta de la salud de la solución. (a) se pierde señales de impacto que pueden revelar vacíos de valor aunque el modelo esté técnicamente sano. (c) se pierde señales de degradación técnica que quizá no afloren en las métricas de negocio hasta que el daño ya esté hecho. (b) saca al director de una responsabilidad central de operacionalización que debe gestionarse activamente.'
  },
  {
    id: 'cpx-ope-010', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera escribió los procedimientos de recuperación de su IA de enrutamiento de contenedores cuando el sistema se lanzó. Desde entonces el modelo se ha reentrenado varias veces y se agregaron dos flujos de datos nuevos, pero los procedimientos siguen describiendo la configuración original de lanzamiento. ¿Qué debe indicar el director del proyecto de IA al equipo?',
    opciones: [
      { id: 'a', texto: 'Reescribir los procedimientos solo después de que la próxima interrupción revele qué cambió.' },
      { id: 'b', texto: 'Restaurar el sistema a la configuración de lanzamiento que describen los procedimientos.' },
      { id: 'c', texto: 'Revisar y revalidar los procedimientos de recuperación cada vez que la solución cambia.' },
      { id: 'd', texto: 'Reemplazar los procedimientos escritos por el criterio de los ingenieros de guardia.' }
    ],
    correctas: ['c'],
    explicacion: 'Los procedimientos de recuperación solo protegen a la organización si corresponden al sistema tal como existe hoy, de modo que revisarlos y revalidarlos cada vez que la solución cambia los mantiene ejecutables. (b) sacrifica las mejoras del reentrenamiento y los flujos nuevos solo para calzar con un papel desactualizado. (a) implica descubrir procedimientos rotos en el peor momento posible. (d) elimina los pasos probados y repetibles que hacen confiable la recuperación cuando cambia el personal.'
  },
  {
    id: 'cpx-ope-011', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud despliega un modelo de IA que predice el riesgo de complicaciones quirúrgicas. El director del programa coordina el despliegue con tres departamentos clínicos y el área central de TI. Cada departamento quiere que sus accesos se habiliten simultáneamente el día de la puesta en marcha. TI estima que el aprovisionamiento simultáneo tomará cuatro horas, durante las cuales el sistema estará parcialmente disponible. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Aprobar el aprovisionamiento simultáneo para cumplir la expectativa de que todos los departamentos entren en operación a la vez.' },
      { id: 'b', texto: 'Secuenciar el aprovisionamiento de accesos para que cada departamento entre en operación en un orden controlado, con validación completada antes de habilitar al siguiente.' },
      { id: 'c', texto: 'Retrasar la puesta en marcha hasta que TI desarrolle un proceso que elimine por completo la ventana de disponibilidad parcial.' },
      { id: 'd', texto: 'Permitir que cada departamento se autoaprovisione accesos con credenciales genéricas de administrador hasta completar el aprovisionamiento formal.' }
    ],
    correctas: ['b'],
    explicacion: 'Secuenciar el aprovisionamiento con validación entre departamentos es el enfoque estructurado de despliegue que gestiona los accesos de usuario y la configuración de seguridad, controlando además el riesgo de disponibilidad parcial. (a) prioriza el cronograma sobre una puesta en marcha controlada y verificable. (c) es desproporcionado cuando existe un enfoque secuenciado disponible. (d) es una falla grave de control de seguridad que el director debe prevenir.'
  },
  {
    id: 'cpx-ope-012', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un municipio tiene desplegado un modelo de IA que recomienda prioridades de mantenimiento para su red de distribución de agua. Durante una prueba nocturna de los procedimientos de contingencia, el equipo descubre que nadie ha documentado qué debe hacer el personal municipal si el modelo queda no disponible por un periodo prolongado. Se pide al director del proyecto de IA cerrar ese vacío. ¿Qué debe asegurarse de que se desarrolle?',
    opciones: [
      { id: 'a', texto: 'Una cláusula de penalidad contractual que el municipio pueda invocar contra su proveedor de alojamiento.' },
      { id: 'b', texto: 'Un memorando de entendimiento con el proveedor de nube que garantice cero tiempo fuera de servicio.' },
      { id: 'c', texto: 'Un procedimiento de continuidad del negocio que permita a operaciones seguir funcionando con un proceso manual o de respaldo definido mientras el modelo no esté disponible.' },
      { id: 'd', texto: 'Un plan para migrar el modelo a otra región de nube dentro de las cuatro horas de cualquier caída.' }
    ],
    correctas: ['c'],
    explicacion: 'Un procedimiento de continuidad da al personal municipal una alternativa definida y probada para priorizar el mantenimiento cuando el sistema está caído, de modo que las decisiones de infraestructura no se detienen durante una interrupción. (b) es un compromiso comercial que no resuelve qué hace el personal mientras el servicio está interrumpido. (a) puede recuperar costos después de la caída, pero no ofrece ninguna guía operativa durante ella. (d) atiende la recuperación de infraestructura y no dice a las cuadrillas cómo funcionar en la ventana previa a que esa recuperación se complete.'
  },
  {
    id: 'cpx-ope-013', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una analítica minorista completó un proyecto de doce meses de predicción de abandono de clientes. El modelo está estable en producción y el equipo de proyecto transfiere responsabilidades al grupo de operaciones de datos. El director del proyecto de IA redactó un plan de traspaso. La gerente de operaciones plantea que su equipo todavía no entiende cómo interpretar los puntajes de confianza del modelo para las decisiones de negocio. ¿Qué debe priorizar el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Escalar a la dirección que el equipo de operaciones no está listo para recibir el modelo.' },
      { id: 'b', texto: 'Documentar guías de interpretación de los puntajes de confianza y entregar capacitación de transferencia de conocimiento al grupo de operaciones antes del cierre del proyecto.' },
      { id: 'c', texto: 'Agregar la interpretación de los puntajes de confianza al backlog del equipo de operaciones para que la investiguen por su cuenta.' },
      { id: 'd', texto: 'Simplificar la salida del modelo eliminando los puntajes de confianza antes del traspaso, para reducir la complejidad operativa.' }
    ],
    correctas: ['b'],
    explicacion: 'Gestionar el plan de transición incluye coordinar la transferencia de conocimiento a los equipos de soporte en producción y crear documentación y materiales de capacitación de traspaso. (c) deja el vacío para que operaciones lo resuelva sola y anula el propósito de una transición gestionada. (d) cambia la funcionalidad de la solución y elimina una capacidad valiosa de apoyo a la decisión para evitar hacer el trabajo de transferencia. (a) es desproporcionado cuando el vacío se puede cerrar con documentación y capacitación, que es responsabilidad del director.'
  },
  {
    id: 'cpx-ope-014', dominio: 'operacion', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una telefónica planea lanzar un asistente de IA que atenderá consultas de facturación de toda su base de clientes. El modelo se desempeñó bien en pruebas, pero al director del proyecto de IA le preocupa exponer a todos los clientes de golpe a un sistema no probado en producción. ¿Qué enfoque de despliegue debe incluir en el plan?',
    opciones: [
      { id: 'a', texto: 'Correr el asistente en segundo plano de forma indefinida, sin exponerlo a los clientes.' },
      { id: 'b', texto: 'Liberar primero a un segmento limitado de clientes y expandir según los resultados observados.' },
      { id: 'c', texto: 'Retener el lanzamiento hasta que las pruebas demuestren que el asistente ya no puede fallar.' },
      { id: 'd', texto: 'Liberar a todos los clientes simultáneamente para maximizar temprano el beneficio de negocio.' }
    ],
    correctas: ['b'],
    explicacion: 'Una liberación escalonada a un segmento limitado contiene el impacto de un comportamiento inesperado mientras genera evidencia real de producción que informa cada decisión de expansión: así gestiona el riesgo de lanzamiento una estrategia de despliegue. (d) maximiza la exposición justo el día en que el sistema está menos probado. (a) produce datos de comparación pero nunca entrega valor ni tiene una salida definida. (c) fija una vara imposible, porque ningún programa de pruebas puede demostrar que un sistema de IA no pueda fallar.'
  },
  {
    id: 'cpx-ope-015', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una administradora de propiedades transfiere su herramienta de predicción de renovación de contratos del equipo de proyecto a la división de gestión de activos. Al revisar el plan de transición preliminar, la directora del proyecto encuentra que lista los contactos de operaciones pero no especifica quién es responsable de decidir si el modelo debe reentrenarse cuando sus predicciones empiecen a degradarse. ¿Qué debe agregar?',
    opciones: [
      { id: 'a', texto: 'Un glosario de términos estadísticos para que el equipo de gestión de activos pueda evaluar por su cuenta las métricas del modelo.' },
      { id: 'b', texto: 'Una declaración de que el equipo original del proyecto conserva a perpetuidad la responsabilidad del reentrenamiento.' },
      { id: 'c', texto: 'Roles definidos y autoridad de decisión para el mantenimiento del modelo y la decisión de reentrenamiento.' },
      { id: 'd', texto: 'Un cronograma para que la división de gestión de activos contrate a un ingeniero de aprendizaje automático dedicado.' }
    ],
    correctas: ['c'],
    explicacion: 'Asignar responsabilidad explícita sobre las decisiones de mantenimiento, incluida la autoridad para determinar cuándo procede reentrenar, cierra el vacío de gobernanza y evita que el modelo se degrade sin que nadie sea dueño de la respuesta. (a) ayuda al equipo a leer tableros, pero no le dice quién decide cuando hace falta actuar. (b) contradice el propósito de un plan de transición, que es transferir la propiedad de forma limpia. (d) atiende la composición del equipo y deja sin responder la cuestión de la autoridad hasta que ocurra la contratación, que puede tardar meses.'
  },
  {
    id: 'cpx-ope-016', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un grupo minorista opera un motor de promociones personalizadas con IA que lleva cinco meses en funcionamiento. El director del proyecto de IA recibe un informe que muestra que el valor promedio de pedido, un indicador clave primario, se ha mantenido estable, mientras que la tasa de clics de los clientes ha caído significativamente en las últimas seis semanas. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Investigar la caída de la tasa de clics como posible indicador adelantado de una futura degradación de la métrica de negocio.' },
      { id: 'b', texto: 'Declarar exitoso el despliegue, porque el indicador primario de negocio sigue en su objetivo.' },
      { id: 'c', texto: 'Reentrenar de inmediato el modelo con los datos de interacción de las últimas seis semanas.' },
      { id: 'd', texto: 'Expandir el motor de promociones a segmentos adicionales de clientes para compensar la caída del involucramiento.' }
    ],
    correctas: ['a'],
    explicacion: 'Supervisar las métricas de la solución exige analizar tendencias tanto de negocio como técnicas, reconociendo que una señal de involucramiento que se degrada puede anticipar el impacto de negocio antes de que aparezca en el indicador primario. (b) es incompleto: se apoya en una métrica estable ignorando otra en descenso, y arriesga una respuesta tardía a un problema en desarrollo. (c) confunde el síntoma con la causa raíz al reentrenar sin diagnosticar. (d) agrava el riesgo expandiendo el alcance mientras el involucramiento central cae, sin atender el problema de fondo.'
  },
  {
    id: 'cpx-ope-017', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una operadora ferroviaria despliega una herramienta de IA que predice necesidades de mantenimiento de vías. Durante el despliegue, el líder de la implantación propone habilitar la herramienta para todas las cuentas de empleado, de modo que la adopción se difunda rápido. Las predicciones incluyen detalles sobre vulnerabilidades de la infraestructura. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Permitir que los empleados soliciten acceso individualmente una vez completada la implantación.' },
      { id: 'b', texto: 'Aprovisionar el acceso por rol, de modo que solo el personal autorizado vea la salida sensible.' },
      { id: 'c', texto: 'Postergar todas las decisiones de acceso hasta la primera auditoría de seguridad posterior al lanzamiento.' },
      { id: 'd', texto: 'Aprobar la habilitación amplia, porque la visibilidad extendida acelera la adopción organizacional.' }
    ],
    correctas: ['b'],
    explicacion: 'Gestionar el aprovisionamiento de accesos y la configuración de seguridad es parte del despliegue mismo, y el acceso basado en roles asegura que los detalles de vulnerabilidad de infraestructura lleguen solo al personal autorizado para actuar sobre ellos. (d) expone información sensible mucho más allá de cualquier necesidad operativa, en busca de adopción. (c) deja el sistema desprotegido justo en el periodo de menor escrutinio. (a) produce decisiones de acceso inconsistentes, sin un estándar definido de quién debe ser aprobado.'
  },
  {
    id: 'cpx-ope-018', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de logística monitorea su modelo de predicción de tiempos de entrega con un resumen mensual de desempeño. El último resumen muestra una caída, y un director exige reentrenar de inmediato. El director del proyecto de IA recuerda que las cifras de un solo mes han oscilado en ambas direcciones anteriormente. ¿Qué debe hacer antes de comprometerse a reentrenar?',
    opciones: [
      { id: 'a', texto: 'Dejar de distribuir el resumen mensual hasta que el desempeño se recupere.' },
      { id: 'b', texto: 'Reentrenar de inmediato, porque cualquier caída arriesga deteriorar el servicio al cliente.' },
      { id: 'c', texto: 'Cambiar el resumen a otra métrica que muestre resultados más estables.' },
      { id: 'd', texto: 'Analizar la tendencia en el tiempo para separar un declive real de la variación normal.' }
    ],
    correctas: ['d'],
    explicacion: 'Analizar las tendencias de desempeño en el tiempo distingue un patrón genuino de degradación de la variación mensual ordinaria, que es como la supervisión de métricas debe informar una decisión de reentrenamiento. (b) gasta esfuerzo e introduce riesgo de cambio en respuesta a lo que puede ser ruido. (c) elige una métrica por lucir más estable y esconde la señal en lugar de entenderla. (a) retira la visibilidad de los interesados justo cuando el escrutinio está justificado.'
  },
  {
    id: 'cpx-ope-019', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista despliega un motor de recomendación de productos con IA en su plataforma de comercio electrónico. El plan de despliegue identifica tres puntos de integración con los sistemas existentes de inventario, precios y perfil de cliente. Dos días antes de la puesta en marcha, la prueba de integración con el sistema de precios falla. El director del proyecto de IA debe decidir cómo proceder. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Escalar al proveedor del sistema de precios y pausar el proyecto completo hasta que responda.' },
      { id: 'b', texto: 'Anular el resultado de la prueba fallida, ya que dos de tres integraciones pasaron.' },
      { id: 'c', texto: 'Desplegar el motor usando solo las integraciones de inventario y perfil de cliente, y agregar precios más adelante.' },
      { id: 'd', texto: 'Resolver el problema de integración de precios, re-ejecutar la validación y ajustar el cronograma de despliegue si hace falta.' }
    ],
    correctas: ['d'],
    explicacion: 'Gestionar el despliegue incluye validar la funcionalidad y el desempeño del sistema antes de la liberación a producción, y una prueba de integración fallida es un bloqueador que debe resolverse, no sortearse. (c) desplegaría con una integración rota conocida y produciría recomendaciones incorrectas dondequiera que se necesiten datos de precios. (b) contradice el propósito mismo de la validación previa al despliegue. (a) es desproporcionado si el problema puede atenderse mediante coordinación interna; el ajuste de cronograma es la palanca adecuada.'
  },

  // ══ Tercer lote ═══════════════════════════════════════════════════════════
  // Preguntas 1 a 4, las que faltaban del inicio de la prueba.

  {
    // ⚠️ La captura de esta pregunta quedó cortada: faltaban la cuarta opción,
    //    la explicación y la etiqueta de dominio/tarea de la fuente. La opción (d)
    //    es propia, la ubicación en datos:5 está inferida del contenido, y la
    //    explicación es propia como en todas las demás. Enunciado, respuesta
    //    correcta y los otros dos distractores sí vienen del original.
    id: 'cpx-dat-030', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una panificadora copió los datos de su programa de fidelidad al entorno de desarrollo de IA para un modelo de segmentación de promociones. Los clientes de una jurisdicción con derecho al borrado ejercen con regularidad su derecho a que se elimine su información, y esas solicitudes se procesan en el sistema de origen. El director del proyecto de IA advierte que la copia del proyecto no forma parte de ese proceso. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Continuar honrando los borrados en el sistema de origen, donde llegan las solicitudes.' },
      { id: 'b', texto: 'Asegurar que las solicitudes de borrado se propaguen a las copias de datos del proyecto.' },
      { id: 'c', texto: 'Tratar la copia del proyecto como exenta, porque es anterior a esas solicitudes.' },
      { id: 'd', texto: 'Posponer la decisión hasta que el modelo esté entrenado y la copia deje de necesitarse.' }
    ],
    correctas: ['b'],
    explicacion: 'El derecho al borrado alcanza a todos los lugares donde vive el dato, y una copia del proyecto que queda fuera del proceso convierte cada solicitud atendida en un incumplimiento silencioso. (a) honra la solicitud solo donde llega y deja intactos los registros duplicados. (c) confunde el momento de la copia con una exención: la obligación se aplica a los datos que se conservan hoy, no a los que se recolectaron después de pedir el borrado. (d) mantiene la exposición durante todo el entrenamiento y apuesta a que nadie audite mientras tanto.'
  },
  {
    id: 'cpx-ope-020', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una transportista de carga despliega un asistente de despacho con IA en sus diez terminales regionales a lo largo de dos meses. A mitad del camino, el director del programa advierte que el plan del proyecto identifica hitos de infraestructura pero no especifica qué equipo es responsable de coordinar día a día las actividades de despliegue entre terminales. Los supervisores de despacho no tienen claro a quién contactar cuando surgen problemas. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Una videollamada semanal entre los diez jefes de terminal para que se autoorganicen el trabajo restante.' },
      { id: 'b', texto: 'Un rol o equipo central de coordinación del despliegue, con responsabilidad clara sobre el avance entre terminales y la resolución de incidencias.' },
      { id: 'c', texto: 'Una directiva para que cada terminal gestione su propio despliegue de forma independiente usando la lista de verificación estándar.' },
      { id: 'd', texto: 'Un bot de software que derive los tickets de soporte de las terminales a cualquier ingeniero que esté conectado en ese momento.' }
    ],
    correctas: ['b'],
    explicacion: 'Designar un coordinador de despliegue con responsabilidad explícita da a los supervisores un contacto claro, asegura que las incidencias escalen por un canal consistente y le da al director un único punto de coordinación entre todas las terminales. (a) crea un foro pero no asigna capacidad de decisión ni responsabilidad sobre la resolución. (c) elimina la consistencia y el aprendizaje entre sitios que aporta la coordinación, y arriesga que cada terminal resuelva los mismos problemas por separado. (d) atiende tickets individuales pero no llena el vacío de coordinación estratégica que el director identificó.'
  },
  {
    id: 'cpx-neg-032', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una operadora de estacionamientos realizó un taller de levantamiento que produjo este enunciado del problema: el reporte de ocupación de las cocheras es lento porque fallan los sensores de conteo. El director del proyecto de IA advierte que el enunciado lo redactó íntegramente el área de TI, y que las personas que operan las cocheras todos los días no estuvieron en la sala. Antes de dimensionar ninguna solución, ¿qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Continuar, porque el enunciado surgió de un taller formal de levantamiento.' },
      { id: 'b', texto: 'Encargar un prototipo funcional para probar si existe demanda.' },
      { id: 'c', texto: 'Confirmar el enunciado con el personal que opera las cocheras a diario.' },
      { id: 'd', texto: 'Reescribir personalmente el enunciado aplicando su criterio de dirección de proyectos.' }
    ],
    correctas: ['c'],
    explicacion: 'Los enunciados del problema se validan con los expertos más cercanos al trabajo, y aquí el personal de operación de las cocheras es quien puede confirmar si la falla de sensores es el dolor real o solo la lectura que TI tiene de él. (a) confunde formalidad del proceso con exactitud del contenido: el taller fue formal, pero faltaron las voces correctas. (d) sustituye una opinión no validada por otra. (b) gasta esfuerzo de construcción antes de que nadie sepa si el problema está bien planteado.'
  },
  {
    id: 'cpx-dat-031', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El patrocinador de una mueblería quiere que un modelo de predicción de retrasos de entrega esté operativo antes de la temporada alta, y pide al director del proyecto de IA saltarse el punto de control de preparación de datos programado, con el argumento de que los datos se veían bien durante la exploración inicial. Los resultados de la evaluación formal todavía no se han revisado. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Mantener el punto de control y basar la decisión en la evidencia de la evaluación.' },
      { id: 'b', texto: 'Saltarse el punto de control y recuperar cronograma, ya que la exploración no encendió ninguna alarma.' },
      { id: 'c', texto: 'Dejar que la fecha de lanzamiento del patrocinador determine si el proyecto avanza.' },
      { id: 'd', texto: 'Comprimir el desarrollo del modelo aguas abajo para absorber cualquier riesgo de datos.' }
    ],
    correctas: ['a'],
    explicacion: 'La compuerta de preparación existe precisamente para comprobar si los datos sostienen la solución antes de que el desarrollo gaste dinero real, y las impresiones tempranas no sustituyen los resultados formales. (b) apuesta la temporada alta a la evidencia menos rigurosa disponible. (c) reemplaza una compuerta basada en evidencia por presión de calendario. (d) empuja un riesgo conocido hacia la fase más cara donde corregirlo.'
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA: PREGUNTAS_CPMAI_EXTRA };
