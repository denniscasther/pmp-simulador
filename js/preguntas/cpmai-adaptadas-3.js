/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 3.
 *
 * ⚠️ MISMO ORIGEN Y MISMAS CONDICIONES que `cpmai-adaptadas.js` y `-2.js`, pero de
 *    la tercera prueba de práctica. Por ahora son 12 preguntas: de la 109 a la 120.
 *    Faltan las 108 primeras. Escenarios y opciones son traducción adaptada del
 *    original; las explicaciones están reescritas.
 *
 *    Se publica por decisión explícita del autor del repositorio (2026-08-31).
 *    Borrar este archivo retira la prueba 3 sin tocar nada más: `cpmai.html` lo
 *    carga solo si existe.
 *
 * Etiquetado contra el ECO CPMAI 2025 de `js/cpmai-eco.js`, respetando el dominio
 * y la tarea que declaraba la fuente (Domain I→responsable, 2→negocio, 3→datos,
 * 4→modelos, 5→operacion; «Task N» → índice N-1).
 *
 * Reparto: datos 7 · negocio 2 · modelos 2 · operacion 1.
 */

const PREGUNTAS_CPMAI_EXTRA3 = [

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpz-dat-001', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera construyó su conjunto de datos de daños en contenedores enteramente con reclamos presentados en sus tres puertos más grandes. El modelo debe puntuar el riesgo de daño en los cuarenta puertos que la empresa atiende, incluidos pequeños puertos tropicales con un manejo de carga muy distinto. Antes de declarar los datos listos, ¿qué debe hacer verificar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Que el área legal haya aprobado el calendario de retención de los datos de reclamos.' },
      { id: 'b', texto: 'Que los registros de reclamos estén cifrados mientras esperan el entrenamiento del modelo.' },
      { id: 'c', texto: 'Que los tres puertos grandes hayan enviado sus reclamos en un formato de archivo consistente.' },
      { id: 'd', texto: 'Que los datos provenientes de los puertos grandes representen adecuadamente las condiciones de todos los puertos en alcance.' }
    ],
    correctas: ['d'],
    explicacion: 'Validar la representatividad de los datos frente al caso de uso objetivo es la verificación que hace falta, porque un conjunto construido con tres puertos grandes puede no reflejar el manejo de carga, el clima ni los patrones de daño de los pequeños puertos tropicales que el modelo también deberá puntuar. (c) es una preocupación mecánica que no hace nada por los treinta y siete puertos ausentes. (b) es un control de seguridad, ajeno a si los datos cubren todo el rango operativo. (a) es un asunto de gobernanza que no aborda si la muestra corresponde al caso de uso.'
  },
  {
    id: 'cpz-dat-002', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una constructora evalúa telemetría para un modelo de utilización de equipos. Las metas de volumen se cumplen con holgura, pero un tercio de los registros proviene de tipos de máquina que la empresa retiró el año pasado y que ya no opera. El equipo está listo para dar por completa la evaluación. ¿Qué debe exigir el director del proyecto de IA antes de firmar?',
    opciones: [
      { id: 'a', texto: 'La eliminación de toda la telemetría más antigua, sin examinarla más a fondo.' },
      { id: 'b', texto: 'Una evaluación de si los registros de la flota retirada siguen siendo relevantes para la flota actual.' },
      { id: 'c', texto: 'El reemplazo de los registros de la flota retirada por telemetría sintética.' },
      { id: 'd', texto: 'La aceptación del conjunto de datos, ya que las metas de volumen se han cumplido.' }
    ],
    correctas: ['b'],
    explicacion: 'Evaluar vigencia y relevancia es una dimensión obligada de la evaluación de datos, así que el equipo debe determinar si los registros de máquinas retiradas todavía informan predicciones sobre la flota que la solución realmente atenderá. (d) confunde volumen con adecuación: cumplir metas de cantidad no dice nada sobre que un tercio de los datos describa equipos que ya no existen. (a) puede descartar patrones que sí transfieren entre tipos de máquina. (c) fabrica registros antes de que nadie haya determinado que los reales son inutilizables.'
  },
  {
    id: 'cpz-dat-003', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica planea entrenar un modelo de predicción de rendimiento con registros de lotes almacenados en un sistema de laboratorio instalado hace décadas. Los registros usan estructuras de tabla propietarias, y los primeros intentos de extracción devolvieron salidas ilegibles. ¿La experiencia de quién debe asegurar primero el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Un oficial de cumplimiento que pueda confirmar que los registros son utilizables para modelar.' },
      { id: 'b', texto: 'Científicos de laboratorio que puedan explicar qué representa cada medición de lote.' },
      { id: 'c', texto: 'Expertos técnicos que conozcan las estructuras internas y los formatos de almacenamiento del sistema de laboratorio.' },
      { id: 'd', texto: 'Científicos de datos que puedan diseñar variables una vez que los registros estén disponibles.' }
    ],
    correctas: ['c'],
    explicacion: 'Los expertos técnicos familiarizados con las estructuras internas y los formatos de almacenamiento del sistema antiguo son quienes pueden obtener datos utilizables de él, y esa extracción ilegible es el bloqueo inmediato. (b) explican qué significan las mediciones, algo que importa después pero no arregla una extracción que devuelve texto corrupto. (a) es una necesidad real, pero no atiende la falla técnica que impide el acceso en primer lugar. (d) no tienen con qué trabajar hasta que el problema de extracción esté resuelto.'
  },
  {
    id: 'cpz-dat-004', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de clínicas aprobó datos de visitas de pacientes para un modelo de reingreso. El director del proyecto de IA descubre que todos los participantes del proyecto —incluidos dos contratistas que solo construyen tableros— pueden abrir los archivos crudos de pacientes en el espacio de trabajo compartido. Los datos en sí son exactos y están correctamente licenciados. ¿Qué debe indicar al equipo que implemente?',
    opciones: [
      { id: 'a', texto: 'Una mejora del cifrado en los enlaces de red entre las clínicas y el espacio de trabajo.' },
      { id: 'b', texto: 'Una segunda copia de los archivos crudos en una carpeta separada para los contratistas.' },
      { id: 'c', texto: 'Permisos que restrinjan cada rol únicamente a los datos que su trabajo requiere.' },
      { id: 'd', texto: 'Un ciclo de revisión más rápido para que los contratistas terminen antes su trabajo de tableros.' }
    ],
    correctas: ['c'],
    explicacion: 'Implementar controles de acceso y permisos de usuario sobre los recursos de datos es la responsabilidad de cumplimiento en juego, y acotar cada rol al mínimo necesario significa que los contratistas de tableros deberían ver salidas agregadas y no archivos crudos de pacientes. (d) acorta el tiempo de exposición, pero deja intacto el acceso indebido. (b) duplica datos sensibles y multiplica la superficie del problema. (a) protege los datos en tránsito, mientras que aquí la cuestión es quién puede abrir los archivos una vez que llegan, no su interceptación en el camino.'
  },
  {
    id: 'cpz-dat-005', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una agrícola explora registros de recepción de grano para un modelo de precios y encuentra un campo de estado lleno de códigos crípticos que nadie del equipo de IA puede interpretar. Los códigos aparecen en la mayoría de los registros e influyen claramente en los montos liquidados. El equipo está tentado de rodear el campo. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Eliminar el campo codificado para quitar el riesgo de malinterpretarlo.' },
      { id: 'b', texto: 'Buscar el manual original del sistema, del proveedor ya retirado.' },
      { id: 'c', texto: 'Hacer que los científicos de datos infieran el significado de los códigos a partir de patrones estadísticos.' },
      { id: 'd', texto: 'Consultar a los usuarios de negocio que aplican esos códigos en la operación diaria.' }
    ],
    correctas: ['d'],
    explicacion: 'Consultar a los usuarios de negocio que aplican los códigos a diario es lo correcto, porque quienes entienden el contexto y el significado de los datos son la fuente autorizada para interpretar campos operativos. (c) produce conjeturas que pueden codificar errores con apariencia de certeza dentro del modelo. (a) descarta una señal central para un modelo de precios, en un campo que claramente influye en los montos liquidados. (b) puede documentar el diseño original, pero años de personalización y práctica local hacen de los usuarios actuales la guía más confiable.'
  },
  {
    id: 'cpz-dat-006', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una empresa de servicios públicos supervisa una iniciativa de predicción de interrupciones. Los científicos de datos pueden consultar las tablas de eventos de medidores, pero siguen malinterpretando códigos de evento clave, ya que una lectura en cero puede indicar tanto una interrupción como una retención rutinaria de facturación. Las malas lecturas están sesgando el análisis temprano. ¿Qué debe hacer para resolver la ambigüedad?',
    opciones: [
      { id: 'a', texto: 'Hacer que los ingenieros de datos redacten un diccionario de datos a partir del esquema de tablas y los nombres de columna.' },
      { id: 'b', texto: 'Perfilar estadísticamente las tablas de eventos, para que las distribuciones de valores revelen qué representa cada código.' },
      { id: 'c', texto: 'Involucrar al personal de operaciones que trabaja a diario con los códigos de evento, para que explique su contexto y significado.' },
      { id: 'd', texto: 'Reemplazar los códigos de evento ambiguos por valores estandarizados de un conjunto de referencia del sector.' }
    ],
    correctas: ['c'],
    explicacion: 'Los usuarios de negocio que manejan los datos todos los días poseen el contexto operativo que explica qué significa realmente cada código, que es justo la brecha de conocimiento que causa las malas lecturas. (b) puede describir distribuciones, pero no revela semántica de negocio como la diferencia entre una interrupción y una retención de facturación. (a) construido solo desde esquema y nombres de columna captura estructura, no el significado operativo detrás de valores concretos. (d) descarta la señal interna que el modelo necesita y esquiva el malentendido en lugar de resolverlo.'
  },
  {
    id: 'cpz-dat-007', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora está definiendo el alcance de un modelo de pronóstico de volumen de siniestros. El equipo de datos debate si el historial de siniestros debe capturarse por día o por mes, y hasta qué punto hacia atrás debe llegar. La discusión lleva una semana estancada. ¿Cómo debe resolver el debate el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Recolectar el historial al nivel más fino disponible, para que todas las opciones queden abiertas.' },
      { id: 'b', texto: 'Derivar el lapso temporal y el nivel de detalle a partir de las decisiones que el pronóstico va a apoyar.' },
      { id: 'c', texto: 'Igualar el periodo de retención que el sistema de origen conserva por defecto.' },
      { id: 'd', texto: 'Diferir la decisión hasta que el equipo de modelado haya seleccionado un algoritmo.' }
    ],
    correctas: ['b'],
    explicacion: 'Los requisitos temporales y de granularidad se definen a partir del caso de uso de negocio, así que la cadencia y el horizonte de las decisiones que el pronóstico apoya deben dictar cuán fino y cuán atrás llegan los datos. (a) mantiene opciones abiertas pero impone costos de almacenamiento y procesamiento sin un requisito que los justifique. (d) invierte la metodología, porque los requisitos de datos preceden al desarrollo del modelo. (c) deja que un accidente técnico defina la solución en lugar de la necesidad de negocio.'
  },

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpz-neg-001', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Una cadena de librerías prepara la introducción de un asistente de pedidos con IA para sus gerentes de tienda. En conversaciones de pasillo, varios gerentes con muchos años de antigüedad comentan que la herramienta es el primer paso para eliminar sus puestos, aunque ninguno lo ha planteado formalmente. ¿Qué debe hacer el director del proyecto de IA ante esa señal?',
    opciones: [
      { id: 'a', texto: 'Acelerar el despliegue para que la herramienta demuestre rápidamente su valor.' },
      { id: 'b', texto: 'Esperar a que la preocupación aparezca por los canales oficiales de retroalimentación.' },
      { id: 'c', texto: 'Involucrar directamente a los gerentes para sacar a la luz y entender la resistencia antes del despliegue.' },
      { id: 'd', texto: 'Agregar al plan de despliegue una cláusula que reserve el derecho a exigir el uso de la herramienta.' }
    ],
    correctas: ['c'],
    explicacion: 'Involucrar directamente a los gerentes hace visibles la resistencia y sus causas mientras todavía hay tiempo de atenderlas, que es como se gestionan las barreras de adopción en lugar de descubrirlas después del lanzamiento: identificar la resistencia potencial de los usuarios es un elemento explícito de gestionar los riesgos de adopción. (b) ignora una señal viva y deja que el miedo se endurezca en rechazo silencioso. (a) empuja la herramienta sobre personas que ya desconfían de ella y profundiza la resistencia. (d) sustituye confianza por obligación y suele producir cumplimiento mínimo antes que adopción genuina.'
  },
  {
    id: 'cpz-neg-002', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una óptica quiere inspección visual con IA para reducir los defectos que se escapan. Su objetivo declarado apunta a la línea de lentes con la peor tasa de escapes, pero un director de planta presiona para cubrir las seis líneas de producción a la vez. El proyecto cuenta con un solo equipo de anotación de imágenes y un presupuesto de cómputo modesto. ¿Cómo debe fijar el director del proyecto de IA los límites del proyecto?',
    opciones: [
      { id: 'a', texto: 'Comprometerse con las seis líneas de producción, para que todos los interesados vean el beneficio de inmediato.' },
      { id: 'b', texto: 'Dejar que el equipo de ciencia de datos decida la cobertura de líneas una vez que empiece el trabajo del modelo.' },
      { id: 'c', texto: 'Acotar la entrega inicial a la línea de peor desempeño y ajustarla a los recursos disponibles.' },
      { id: 'd', texto: 'Pedir a la dirección que triplique el personal de anotación antes de definir ningún límite.' }
    ],
    correctas: ['c'],
    explicacion: 'Los límites del proyecto deben alinearse con el objetivo de negocio declarado —la línea con peor tasa de escapes— y con los recursos realmente disponibles, un equipo de anotación y cómputo limitado, lo que apunta a una entrega inicial estrechamente acotada. (a) reparte una capacidad de anotación escasa tan fina que ninguna línea obtendría un modelo confiable. (b) empuja hacia la ejecución un límite sin resolver. (d) invierte la secuencia de planificación, porque la disponibilidad de recursos es un insumo que da forma al alcance.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpz-mod-001', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa solar construye un modelo de idoneidad de emplazamientos para identificar ubicaciones óptimas de instalación. El equipo de ciencia de datos preparó un conjunto de datos, pero el director del proyecto de IA se entera de que distintos ingenieros aplicaron distintos métodos de normalización a las columnas numéricas antes de fusionar los datos, lo que dejó rangos de valores inconsistentes entre variables. El entrenamiento del modelo está agendado para la semana siguiente. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Permitir que el entrenamiento proceda y anotar la inconsistencia de normalización como un problema conocido a resolver después del despliegue.' },
      { id: 'b', texto: 'Pedir al equipo de ciencia de datos que agregue una capa de normalización dentro de la arquitectura del modelo para compensar las entradas inconsistentes.' },
      { id: 'c', texto: 'Reemplazar el conjunto fusionado por los datos crudos de cada fuente y reiniciar el pipeline de datos desde el principio.' },
      { id: 'd', texto: 'Pausar el entrenamiento e indicar al equipo que aplique un proceso consistente de normalización y estandarización a todas las variables antes de reanudar.' }
    ],
    correctas: ['d'],
    explicacion: 'Gestionar los procesos de normalización y estandarización es una responsabilidad del director en la transformación de datos, y una normalización inconsistente entre variables puede degradar gravemente la calidad del modelo e introducir ponderaciones no deseadas: corresponde pausar y resolverlo antes de usar los datos. (a) arriesga producir un modelo poco confiable y empuja a producción un problema de calidad conocido. (b) compensa parcialmente dentro del modelo, pero no corrige el problema de datos aguas arriba. (c) es desproporcionado si el pipeline de transformación puede corregirse sin descartar todo el trabajo previo.'
  },
  {
    id: 'cpz-mod-002', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios en la nube construye un modelo de predicción de abandono de clientes. El director del proyecto de IA realiza la revisión final antes de que empiece el entrenamiento. El equipo de datos limpió y transformó el conjunto, pero una auditoría reciente reveló que una porción de los registros tiene valores de antigüedad del cliente inconsistentes entre dos sistemas de origen. Debe decidir si procede con el entrenamiento. ¿Cuál es la base principal de esa decisión?',
    opciones: [
      { id: 'a', texto: 'Si el patrocinador del proyecto ha aceptado verbalmente cierto nivel de inconsistencia en los datos.' },
      { id: 'b', texto: 'Si el líder de ciencia de datos aprueba personalmente el conjunto de datos, sin una revisión documentada.' },
      { id: 'c', texto: 'Si los datos superan una evaluación final de calidad que confirme que cumplen los requisitos definidos para el entrenamiento.' },
      { id: 'd', texto: 'Si al equipo de desarrollo le queda presupuesto suficiente para corregir la inconsistencia antes de la fecha límite.' }
    ],
    correctas: ['c'],
    explicacion: 'La decisión de proceder debe fundarse en una evaluación final de calidad que valide los datos contra los requisitos definidos, incluidos los estándares de consistencia, y no en restricciones de presupuesto, aprobaciones informales ni aceptación verbal de defectos conocidos. La inconsistencia de antigüedad es un problema de calidad que, sin resolver ni documentar, podría sesgar el modelo. (d) se salta la compuerta de calidad y arriesga entrenar sobre entradas defectuosas. (b) no constituye una decisión verificable de avance o detención. (a) deja al proyecto sin un registro responsable de la decisión.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpz-ope-001', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una operadora turística cierra un proyecto de IA en el que el modelo de demanda de reservas cumplió algunos de sus objetivos acordados, pero no todos. Un integrante del equipo sugiere que el informe de cierre se concentre solo en los objetivos alcanzados. ¿Cómo debe manejar el informe final el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Retrasar el informe hasta que un ajuste adicional lleve todos los objetivos al nivel comprometido.' },
      { id: 'b', texto: 'Documentar tanto los objetivos alcanzados como los déficits, con un análisis de mejora.' },
      { id: 'c', texto: 'Publicar los resultados favorables y registrar los déficits en un archivo privado.' },
      { id: 'd', texto: 'Ajustar los umbrales de éxito en el informe para que todos los objetivos figuren como cumplidos.' }
    ],
    correctas: ['b'],
    explicacion: 'Documentar logros y déficits junto con un análisis de mejora da a los interesados un recuento honesto del cumplimiento de objetivos y convierte las brechas en lecciones utilizables para el trabajo futuro. (a) extiende el proyecto sin autorización y puede no converger nunca. (d) reescribir los umbrales de éxito después del hecho destruye la integridad de los criterios que el patrocinador aprobó. (c) partir el registro para que solo lo favorable sea visible esconde información material a quienes financiaron el trabajo.'
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA3: PREGUNTAS_CPMAI_EXTRA3 };
