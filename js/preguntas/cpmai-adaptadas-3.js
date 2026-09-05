/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 3.
 *
 * ⚠️ MISMO ORIGEN Y MISMAS CONDICIONES que `cpmai-adaptadas.js` y `-2.js`, pero de
 *    la tercera prueba de práctica. Están las 120 preguntas completas, sin huecos.
 *    Escenarios y opciones son traducción adaptada del original; las explicaciones
 *    están reescritas.
 *
 *    Se publica por decisión explícita del autor del repositorio (2026-08-31).
 *    Borrar este archivo retira la prueba 3 sin tocar nada más: `cpmai.html` lo
 *    carga solo si existe.
 *
 * Etiquetado contra el ECO CPMAI 2025 de `js/cpmai-eco.js`, respetando el dominio
 * y la tarea que declaraba la fuente (Domain I→responsable, 2→negocio, 3→datos,
 * 4→modelos, 5→operacion; «Task N» → índice N-1).
 *
 * Reparto: datos 31 · negocio 31 · operacion 21 · modelos 19 · responsable 18.
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
  },

  // ══ Segundo lote ══════════════════════════════════════════════════════════
  // Preguntas 1 a 108: la prueba 3 queda completa.

  // ── IA responsable y confiable ────────────────────────────────────────────

  {
    id: 'cpz-res-002', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de artículos para exteriores opera un modelo de precios dinámicos en su plataforma de comercio electrónico. El director del programa se entera de que un competidor fue sancionado hace poco por prácticas de precios algorítmicos que violaban las normas de protección al consumidor, y quiere verificar que el sistema propio no tenga una exposición parecida. ¿Qué debe implantar?',
    opciones: [
      { id: 'a', texto: 'Un informe semanal por correo del equipo de ciencia de datos resumiendo las salidas del modelo de precios.' },
      { id: 'b', texto: 'Una opinión legal que confirme que el precio algorítmico está permitido en los mercados de la empresa.' },
      { id: 'c', texto: 'Un tope al ajuste máximo de precio que el modelo puede recomendar sin revisión humana.' },
      { id: 'd', texto: 'Un mecanismo de monitoreo de cumplimiento que evalúe continuamente las salidas del modelo de precios frente a los estándares de protección al consumidor.' }
    ],
    correctas: ['d'],
    explicacion: 'Un mecanismo de monitoreo y reporte que evalúa continuamente las salidas contra los estándares aplicables da visibilidad permanente sobre si el comportamiento del modelo cumple las expectativas regulatorias. (a) es informal y no está estructurado alrededor de requisitos de cumplimiento. (b) establece permisibilidad en términos generales, pero no vigila las salidas reales del modelo. (c) introduce un umbral de revisión humana, pero no evalúa sistemáticamente las salidas contra los estándares de protección al consumidor.'
  },
  {
    id: 'cpz-res-003', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un despacho jurídico usa una herramienta de revisión de contratos asistida por IA. Opera en cinco estados y sigue un proyecto de ley federal que impondría nuevos requisitos de divulgación a las herramientas de IA usadas en servicios legales; se espera que se apruebe dentro de seis meses. Preguntan al director del proyecto cómo debe tratar el equipo esa novedad regulatoria. ¿Cuál es el enfoque más apropiado?',
    opciones: [
      { id: 'a', texto: 'Preparar una objeción formal a los requisitos propuestos, con el argumento de que alterarían la arquitectura actual de la herramienta.' },
      { id: 'b', texto: 'Pedir a los socios directores que sigan el proyecto de ley y avisen al equipo de IA cuando se apruebe.' },
      { id: 'c', texto: 'Esperar a que el proyecto se convierta en ley y luego solicitar presupuesto para un proyecto de remediación de cumplimiento.' },
      { id: 'd', texto: 'Monitorear el avance del proyecto de ley y comenzar a evaluar su impacto sobre las capacidades y la documentación actuales de la herramienta, para que el despacho pueda adaptarse con rapidez si se aprueba.' }
    ],
    correctas: ['d'],
    explicacion: 'Monitorear el avance y evaluar proactivamente su impacto sobre capacidades y documentación es lo correcto, porque rastrear la regulación en evolución y prepararse para su posible efecto es parte de la responsabilidad permanente de monitoreo normativo. (c) desperdicia la ventana de preparación y puede volver imposible cumplir dentro de los plazos exigidos si hacen falta cambios arquitectónicos. (b) delega en observadores no técnicos una responsabilidad central de gobernanza. (a) queda fuera del rol del director y no atiende la necesidad de estar listo si la norma se aprueba.'
  },
  {
    id: 'cpz-res-004', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística despliega un modelo de programación de personal que asigna turnos semanales a los operarios de almacén. Antes de la liberación a producción, el director del programa de IA debe verificar que el modelo trata equitativamente a todos los grupos de trabajadores. ¿Qué actividad debe indicar que se complete?',
    opciones: [
      { id: 'a', texto: 'Comparar el desempeño global del modelo contra el proceso manual de programación anterior.' },
      { id: 'b', texto: 'Probar las salidas del modelo entre subgrupos demográficos para verificar que las asignaciones de turno se distribuyen sin patrones discriminatorios.' },
      { id: 'c', texto: 'Encuestar a los jefes de almacén sobre si confían en las decisiones de programación del modelo.' },
      { id: 'd', texto: 'Correr el modelo sobre un conjunto de prueba reservado y reportar la exactitud media de programación sobre todos los trabajadores.' }
    ],
    correctas: ['b'],
    explicacion: 'Las pruebas de equidad entre grupos poblacionales exigen pasar las salidas del modelo por análisis de subgrupos para detectar si algún grupo demográfico recibe resultados sistemáticamente peores o mejores. (d) la exactitud media sobre todos los trabajadores enmascara justamente las disparidades por subgrupo. (c) mide aceptación de usuario, no equidad algorítmica. (a) evalúa eficiencia frente al método anterior, no si el modelo distribuye los resultados con equidad entre grupos.'
  },
  {
    id: 'cpz-res-005', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa solar corre experimentos iterativos sobre un modelo de predicción de rendimiento, con actualizaciones frecuentes de los datos de entrenamiento y de los hiperparámetros. Al director del programa de IA le preocupa que el equipo no pueda reproducir ningún experimento dado ni identificar qué versión del modelo produjo una salida concreta en producción. ¿Qué debe exigir que se implemente?',
    opciones: [
      { id: 'a', texto: 'Optimización automática de hiperparámetros, para reducir la cantidad de iteraciones experimentales manuales.' },
      { id: 'b', texto: 'Un respaldo semanal de los pesos del modelo en producción hacia un servidor de archivos compartido.' },
      { id: 'c', texto: 'Control de versiones para modelos, datos y procesos de entrenamiento, de modo que cualquier experimento pueda reproducirse y rastrearse.' },
      { id: 'd', texto: 'Una convención de nombres para los archivos de modelo que incluya la fecha y las iniciales del científico de datos responsable.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer control de versiones sobre modelos, datos y procesos de entrenamiento crea la trazabilidad necesaria para reproducir cualquier experimento y asociar una salida de producción con la versión exacta de modelo y de datos que la generó. (b) captura el estado del modelo una vez por semana, pero no registra qué versión estuvo activa entre respaldos ni vincula los datos de entrenamiento a cada versión. (d) da una trazabilidad mínima, fácil de eludir o aplicar de forma inconsistente. (a) reduce el número de experimentos manuales, pero no atiende el vacío de trazabilidad.'
  },
  {
    id: 'cpz-res-006', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un centro médico entrena un modelo de apoyo diagnóstico sobre registros de pacientes desidentificados. El director del programa de IA descubre que el proceso de desidentificación elimina nombres y fechas, pero conserva códigos de enfermedades raras y códigos postales que podrían permitir la reidentificación. Debe decidir cómo proceder antes de que empiece el entrenamiento. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Pausar el entrenamiento y exigir al equipo de ingeniería de datos que revise el método de desidentificación para cerrar la vía de reidentificación.' },
      { id: 'b', texto: 'Notificar proactivamente a los reguladores y solicitar una carta de no acción antes de continuar.' },
      { id: 'c', texto: 'Continuar con el entrenamiento y aplicar filtrado de salidas para evitar que el modelo exponga códigos de enfermedades raras en sus predicciones.' },
      { id: 'd', texto: 'Aceptar el riesgo, porque los datos desidentificados están legalmente exentos de las obligaciones de protección de datos.' }
    ],
    correctas: ['a'],
    explicacion: 'Cuando el director identifica que el método de desidentificación deja una vía plausible de reidentificación, corresponde pausar el entrenamiento y remediar el procedimiento de manejo seguro antes de que los datos entren al pipeline de IA. (c) el filtrado de salidas no elimina el riesgo, porque el modelo ya aprendió de patrones reidentificables. (d) es incorrecto: una desidentificación imperfecta no satisface los estándares regulatorios de anonimización real. (b) es un paso reactivo que no elimina la vulnerabilidad de manejo de datos subyacente.'
  },
  {
    id: 'cpz-res-007', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de equipamiento outdoor usa un modelo de aprendizaje automático para recomendar niveles de descuento promocional a sus clientes. La oficial de cumplimiento de marketing pregunta al director del programa cómo puede demostrar el programa que ninguna característica protegida del consumidor influyó en las recomendaciones de descuento. ¿Qué debe implementarse?',
    opciones: [
      { id: 'a', texto: 'Un catálogo de datos que liste todas las variables usadas en el conjunto de entrenamiento.' },
      { id: 'b', texto: 'Una herramienta de interpretabilidad del modelo que muestre qué variables de entrada impulsaron cada recomendación individual de descuento.' },
      { id: 'c', texto: 'Un tablero que siga el gasto promocional total por segmento de cliente a lo largo del tiempo.' },
      { id: 'd', texto: 'Un informe poscampaña que compare los valores medios de descuento entre grupos demográficos.' }
    ],
    correctas: ['b'],
    explicacion: 'Una herramienta de interpretabilidad que muestre las variables determinantes de cada recomendación permite demostrar qué factores influyeron en cada nivel de descuento, que es el mecanismo que responde la pregunta de la oficial de cumplimiento. (c) sigue resultados de negocio, no el razonamiento del modelo. (a) lista qué variables existen, pero no cuánto peso tuvo cada una en una decisión concreta. (d) puede revelar resultados dispares, pero no explica la lógica interna del modelo.'
  },
  {
    id: 'cpz-res-008', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una consultora de dotación de personal opera una IA de emparejamiento de candidatos usada por clientes corporativos: filtra currículos y ordena candidatos para las vacantes. Tras observar que los candidatos de ciertas instituciones educativas reciben consistentemente peores posiciones que candidatos con experiencia equivalente de otras instituciones, el director del proyecto sospecha que los datos de entrenamiento reflejan sesgos históricos de contratación. ¿Cuál es la acción inmediata más apropiada?',
    opciones: [
      { id: 'a', texto: 'Examinar la composición de los registros históricos de contratación usados para entrenar el modelo, para determinar si el sesgo ligado a la institución está incrustado en el entrenamiento.' },
      { id: 'b', texto: 'Pedir a las empresas clientes que revisen y ajusten manualmente las posiciones de los candidatos de las instituciones afectadas.' },
      { id: 'c', texto: 'Agregar un piso mínimo de posición para los candidatos de esas instituciones como corrección de posprocesamiento.' },
      { id: 'd', texto: 'Reentrenar el modelo de inmediato con un conjunto más amplio tomado de bolsas de empleo públicas para diluir el sesgo institucional.' }
    ],
    correctas: ['a'],
    explicacion: 'Examinar la composición de los registros históricos para determinar si el sesgo institucional está incrustado en las etiquetas de entrenamiento es lo correcto, porque analizar los datos en busca de desbalances de representación es el primer paso antes de cualquier remediación. (c) un piso de posición es un parche que no ataca la causa raíz y puede introducir nuevas inconsistencias. (b) traslada la carga de gestionar el sesgo al cliente y no corrige el comportamiento de fondo del modelo. (d) reentrenar de inmediato puede diluir el sesgo, pero omite el diagnóstico, así que quizá no apunte a la fuente real de la disparidad.'
  },
  {
    id: 'cpz-res-009', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de movilidad gestiona una IA de administración de flotas que recomienda rutas de despacho según patrones de tráfico y disponibilidad de conductores. Una autoridad de transporte de la ciudad pide demostrar que, cuando el sistema emite una recomendación que un conductor disputa y un supervisor humano anula, tanto la recomendación original de la IA como la anulación quedan registradas para revisión posterior. ¿Qué capacidad debe confirmar el director del proyecto que está incorporada?',
    opciones: [
      { id: 'a', texto: 'Un pipeline de reentrenamiento que incorpore los datos de anulación de los supervisores para mejorar las recomendaciones futuras.' },
      { id: 'b', texto: 'Un tablero de reporte que muestre el porcentaje de recomendaciones de IA aceptadas frente a anuladas cada semana.' },
      { id: 'c', texto: 'Un formulario de retroalimentación que los conductores completen tras resolverse cada recomendación disputada.' },
      { id: 'd', texto: 'Un registro de auditoría que capture cada recomendación de IA junto con las identidades y marcas de tiempo de todas las partes involucradas.' }
    ],
    correctas: ['d'],
    explicacion: 'Un registro de auditoría que capture cada recomendación, la disputa, la decisión de anulación del supervisor y las identidades y marcas de tiempo asociadas es la capacidad correcta, porque mantiene el rastro de los procesos algorítmicos de decisión incluyendo los eventos de revisión humana. (a) mejora el modelo con el tiempo, pero no crea el registro contemporáneo de decisiones individuales. (b) da estadísticas agregadas y carece del detalle por decisión que exige la rendición de cuentas. (c) captura la experiencia subjetiva del conductor tras la resolución, no el registro estructurado de la recomendación y la anulación formal.'
  },
  {
    id: 'cpz-res-010', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una financiera de consumo usa un modelo de IA para ofrecer planes personalizados de pago a clientes en dificultades financieras. El director del proyecto se entera de que el modelo se entrenó principalmente con historiales de pago de clientes que aceptaron las condiciones estándar, y que los clientes que solicitaron acomodos por dificultades fueron excluidos del conjunto de entrenamiento. ¿Cuál es la preocupación más significativa?',
    opciones: [
      { id: 'a', texto: 'Excluir a los clientes en dificultades del entrenamiento reduce el riesgo de que el modelo sobreajuste patrones de pago atípicos.' },
      { id: 'b', texto: 'El modelo tiene un desbalance de representación porque se excluyó justamente a los clientes con más probabilidad de necesitar planes por dificultades, lo que puede producir recomendaciones mal ajustadas.' },
      { id: 'c', texto: 'Los datos de entrenamiento no incluyen suficiente diversidad de productos como para generalizar a todos los tipos de préstamo que ofrece la empresa.' },
      { id: 'd', texto: 'El volumen de datos de entrenamiento puede ser insuficiente para alcanzar los objetivos de exactitud declarados en los criterios de éxito del proyecto.' }
    ],
    correctas: ['b'],
    explicacion: 'La preocupación más significativa es el desbalance de representación: la población con más probabilidad de usar la funcionalidad —clientes en dificultades financieras— fue excluida del entrenamiento, de modo que el modelo aprendió de una población distinta y puede producir recomendaciones mal ajustadas a sus usuarios previstos. (d) el volumen es una preocupación válida, pero secundaria frente al sesgo de representación cuando el grupo excluido es el caso de uso principal. (c) la diversidad de productos es un asunto de generalización distinto. (a) afirmar que la exclusión reduce el sobreajuste malinterpreta el concepto: excluir a la población objetivo crea sesgo, no protección contra el sobreajuste.'
  },
  {
    id: 'cpz-res-011', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora prepara un modelo de detección de fraude en siniestros para presentarlo a revisión del departamento estatal de seguros. El departamento exige que la organización demuestre que el comportamiento del modelo es transparente y auditable, y pide información sobre qué datos se usaron, cómo se preprocesaron y qué transformaciones produjeron las variables finales de entrenamiento. ¿Qué debe compilar el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Las métricas de desempeño del modelo sobre el conjunto de prueba reservado y el área bajo la curva.' },
      { id: 'b', texto: 'Una atestación del proveedor confirmando que la plataforma de procesamiento cumple los estándares de seguridad del sector.' },
      { id: 'c', texto: 'Una comparación entre el modelo de detección de fraude y el sistema basado en reglas al que reemplazó, mostrando las mejoras de exactitud.' },
      { id: 'd', texto: 'Un relato transparente de las fuentes de datos y la justificación de cada decisión del pipeline de datos.' }
    ],
    correctas: ['d'],
    explicacion: 'Compilar un relato transparente de las fuentes, los pasos de preprocesamiento, las transformaciones de variables y su justificación es lo que el departamento pide, y es el requisito de transparencia definido para una revisión regulatoria de IA. (a) las métricas sobre el conjunto reservado abordan la calidad del modelo, no la transparencia sobre cómo se construyeron las entradas. (c) una comparación con el sistema anterior demuestra mejora, pero no explica cómo se armaron ni transformaron los datos de entrenamiento. (b) una atestación de seguridad del proveedor atiende el cumplimiento de la plataforma, no la transparencia a nivel de modelo.'
  },
  {
    id: 'cpz-res-012', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística global es responsable de un sistema de IA que clasifica documentos aduaneros en doce países. El equipo legal alerta al director del programa de que dos de esos países adoptaron nuevos requisitos de documentación para sistemas de IA que toman decisiones consecuentes en procesamiento aduanero, con vigencia en noventa días. El equipo está a mitad de sprint en otra funcionalidad. ¿Cuál es la respuesta más apropiada?',
    opciones: [
      { id: 'a', texto: 'Solicitar una exención regulatoria a las autoridades aduaneras de ambos países para que el sistema actual siga operando más allá de la fecha de vigencia.' },
      { id: 'b', texto: 'Señalar los cambios regulatorios a la dirección, evaluar su impacto sobre el sistema actual e incorporar las tareas de cumplimiento al cronograma del proyecto antes de la fecha de vigencia.' },
      { id: 'c', texto: 'Pausar todo el desarrollo activo y esperar a que el equipo legal entregue un memorando de cumplimiento detallado antes de reanudar el trabajo.' },
      { id: 'd', texto: 'Completar el sprint actual según lo planeado y comenzar la revisión de cumplimiento después de la retrospectiva.' }
    ],
    correctas: ['b'],
    explicacion: 'Señalar los cambios a la dirección, evaluar su impacto y programar las tareas de cumplimiento antes de la fecha de vigencia es la respuesta correcta, porque rastrear la regulación en evolución y asegurar la adherencia oportuna es responsabilidad central del director. (d) completar el sprint primero arriesga quedarse sin tiempo para remediar, sobre todo si hacen falta cambios arquitectónicos o de manejo de datos. (a) solicitar una exención no está en su autoridad y presupone que los reguladores concederán prórrogas. (c) pausar todo el desarrollo es una sobrerreacción que ignora la ventana de noventa días.'
  },
  {
    id: 'cpz-res-013', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un centro médico usa un modelo de IA para predecir el riesgo de reingreso de pacientes. Durante una revisión, un científico de datos muestra al director del proyecto que la tasa de recuperación del modelo para pacientes mayores de 75 años es significativamente menor que para los grupos de menor edad, lo que significa que se omite sistemáticamente a pacientes mayores en riesgo de reingreso. ¿Qué acción debe indicar al equipo antes de que el modelo entre en operación?',
    opciones: [
      { id: 'a', texto: 'Realizar pruebas de equidad entre los distintos grupos etarios de pacientes y revisar las salidas del modelo en busca de patrones discriminatorios, y luego aplicar medidas correctivas.' },
      { id: 'b', texto: 'Cambiar a un protocolo clínico basado en reglas para todos los pacientes mayores de 75 años y usar el modelo de IA solo en los segmentos más jóvenes.' },
      { id: 'c', texto: 'Aceptar el diferencial de desempeño, porque los pacientes mayores representan una porción menor de los ingresos totales y la métrica de exactitud global sigue siendo aceptable.' },
      { id: 'd', texto: 'Desplegar el modelo según lo planeado y monitorear las tasas de reingreso del grupo de más de 75 años durante el primer trimestre de producción.' }
    ],
    correctas: ['a'],
    explicacion: 'Realizar pruebas de equidad entre grupos etarios y revisar las salidas en busca de patrones discriminatorios es la respuesta correcta, porque atiende sistemáticamente la disparidad identificada antes de que el modelo afecte la atención de pacientes. (c) aceptar el diferencial porque los mayores son una porción menor prioriza la exactitud agregada sobre la equidad y expone a la organización a riesgo clínico y ético. (d) desplegar y monitorear en producción demora la acción y significa que pacientes reales reciben un cribado de riesgo inferior durante el periodo de monitoreo. (b) cambiar a protocolos basados en reglas para los mayores evita el problema de sesgo en lugar de resolverlo, y crea un modelo de atención fragmentado.'
  },
  {
    id: 'cpz-res-014', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de movilidad urbana gestiona un sistema de optimización de tiempos de semáforos. A mitad del desarrollo del modelo, el comisionado de transporte de la ciudad solicita prueba de que el equipo recibió autorización formal antes de cambiar de un enfoque de entrenamiento a otro, y de que ese cambio quedó documentado. El director del proyecto no logra ubicar registros de aprobación de esa decisión. ¿Qué debió asegurarse de que quedara capturado en el momento de la decisión?',
    opciones: [
      { id: 'a', texto: 'Un informe de comparación técnica preparado por el equipo de ciencia de datos evaluando ambos enfoques.' },
      { id: 'b', texto: 'Un cronograma de proyecto actualizado que reflejara la nueva línea de tiempo de desarrollo resultante del cambio de enfoque.' },
      { id: 'c', texto: 'Un registro formal de solicitud de cambio que documentara la decisión, su justificación y el interesado que la autorizó antes de aplicarla.' },
      { id: 'd', texto: 'Un punto en la agenda de retrospectiva señalando que el cambio de enfoque se discutió y acordó en equipo.' }
    ],
    correctas: ['c'],
    explicacion: 'Un registro formal de solicitud de cambio que documente la decisión, la justificación y el interesado autorizante es el artefacto correcto, porque documentar aprobaciones y puntos de decisión de avance o detención es un requisito de rendición de cuentas, sobre todo cuando decisiones técnicas consecuentes alteran el alcance o el enfoque. (b) el cronograma registra el impacto temporal pero no la autorización: responde cuándo, no quién ni por qué. (a) el informe de comparación es un insumo informativo para la decisión, no un registro de aprobación. (d) un punto de retrospectiva es una referencia posterior a una discusión, no un registro de autorización contemporáneo.'
  },
  {
    id: 'cpz-res-015', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de software prepara un modelo de evaluación preempleo que puntúa candidatos con datos de simulación conductual. El equipo de ciencia de datos descubre que los escenarios conductuales usados en la recolección fueron diseñados por un panel demográficamente homogéneo. Antes de cualquier reentrenamiento, el director del programa debe determinar qué tan serio es el problema. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Analizar los datos de entrenamiento para evaluar cómo el diseño homogéneo de los escenarios pudo haber introducido desbalances demográficos en las conductas puntuadas.' },
      { id: 'b', texto: 'Retirar el modelo actual y encargar un nuevo esfuerzo de recolección con un panel diverso de diseño de escenarios.' },
      { id: 'c', texto: 'Exigir al equipo de ciencia de datos que agregue variables de balance demográfico al conjunto de variables como medida correctiva.' },
      { id: 'd', texto: 'Monitorear el modelo en producción e investigar solo si las tasas de reclamo de grupos protegidos superan un umbral definido.' }
    ],
    correctas: ['a'],
    explicacion: 'Analizar los datos de entrenamiento para evaluar cómo la homogeneidad del panel pudo introducir desbalances demográficos es el primer paso correcto antes de cualquier acción correctiva: sin ese análisis, el director no puede determinar la magnitud del problema ni qué mitigación corresponde. (b) retirar el modelo de inmediato puede ser innecesario si el análisis muestra un impacto limitado. (d) monitorear reclamos en producción fija un umbral reactivo que permite el daño antes de investigar. (c) agregar variables de balance demográfico es una técnica de modelado que no aborda si los propios datos de escenarios conductuales codifican sesgo.'
  },
  {
    id: 'cpz-res-016', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de equipamiento outdoor construye un motor de recomendación de IA para personalizar sugerencias de productos. El director del proyecto necesita asegurar que los interesados clave de marketing, legal y producto entiendan cómo el modelo selecciona sus recomendaciones. Antes de la próxima revisión de fase, debe producir documentación que muestre qué fuentes de datos se usaron y por qué se eligieron determinados enfoques algorítmicos. ¿Qué debe priorizar crear primero?',
    opciones: [
      { id: 'a', texto: 'Un documento de justificación de la selección del modelo que registre los criterios usados para evaluar y elegir el algoritmo, acompañado de un resumen de las fuentes de datos y los pasos de preprocesamiento.' },
      { id: 'b', texto: 'Un informe de volumen de datos de entrenamiento que compare la cantidad de registros procesados en cada iteración del desarrollo.' },
      { id: 'c', texto: 'Un brief de marketing que describa las mejoras de experiencia de cliente esperadas del motor de recomendación.' },
      { id: 'd', texto: 'Un diagrama de arquitectura técnica que muestre los componentes de infraestructura y los puntos de API que usa el modelo.' }
    ],
    correctas: ['a'],
    explicacion: 'Documentar los criterios de selección del modelo y la justificación de la decisión, combinados con un reporte transparente de fuentes y preprocesamiento, cumple directamente los requisitos de transparencia que el director necesita para comunicarse con los interesados. (c) un brief de marketing atiende la comunicación de negocio pero no satisface el requisito de transparencia algorítmica. (d) un diagrama de arquitectura explica la infraestructura, pero no documenta por qué se seleccionó el algoritmo ni cómo se manejaron los datos. (b) un informe de volumen aborda la cantidad, no las fuentes, las decisiones de preprocesamiento ni la justificación de la selección.'
  },
  {
    id: 'cpz-res-017', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa deportiva opera en producción un modelo de pronóstico de demanda que alimenta las decisiones de compra de inventario, y esas decisiones afectan qué líneas de producto se abastecen en tiendas que atienden barrios distintos. El director del proyecto quiere asegurar que el sesgo no emerja ni empeore con el tiempo, conforme el modelo sigue recibiendo datos nuevos. ¿Qué debe implantar el director del programa?',
    opciones: [
      { id: 'a', texto: 'Realizar una auditoría de equidad única a los seis meses del despliegue.' },
      { id: 'b', texto: 'Programar un reentrenamiento completo del modelo cada trimestre fiscal para refrescar sus parámetros.' },
      { id: 'c', texto: 'Implementar métricas de detección de sesgo y sistemas de monitoreo continuos para identificar patrones discriminatorios conforme emergen en producción.' },
      { id: 'd', texto: 'Exigir que todas las decisiones de inventario sean aprobadas por un comprador humano antes de emitir las órdenes de compra.' }
    ],
    correctas: ['c'],
    explicacion: 'Implementar métricas de detección de sesgo y sistemas de monitoreo continuos en producción asegura que los patrones discriminatorios se detecten conforme emergen con datos nuevos, en lugar de esperar a una revisión programada. (b) el reentrenamiento trimestral actualiza los parámetros, pero no vigila específicamente los patrones de sesgo entre ciclos. (d) la aprobación humana introduce supervisión, pero no detecta ni mide sistemáticamente el sesgo en las salidas del modelo. (a) una auditoría única a los seis meses ofrece una fotografía puntual y no captura el sesgo que se desarrolla antes o después de esa ventana.'
  },
  {
    id: 'cpz-res-018', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios públicos construye un modelo de IA para detectar anomalías en las lecturas de medidores eléctricos e identificar posible fraude o fallas del equipo. El modelo se entrena con datos históricos que incluyen identificadores de cuenta de cliente. Una revisión de cumplimiento del RGPD revela que la empresa actúa como encargada del tratamiento para los clientes residenciales de la distribuidora. El director del proyecto debe asegurar que el manejo de los datos de entrenamiento cumpla el RGPD. ¿Qué debe establecer como mecanismo principal de supervisión de datos?',
    opciones: [
      { id: 'a', texto: 'Protocolos de gobernanza de datos para la información personal identificable, que definan cómo se manejan, retienen y protegen los identificadores de cuenta en los datos de entrenamiento conforme a los requisitos del RGPD.' },
      { id: 'b', texto: 'Un mecanismo de exclusión voluntaria en el sitio web de la empresa que permita a los clientes residenciales retirar sus datos de medidor del conjunto de entrenamiento cuando lo soliciten.' },
      { id: 'c', texto: 'Una enmienda contractual con la distribuidora que le exija obtener consentimiento explícito de cada cliente residencial antes de usar sus datos de medidor para entrenar.' },
      { id: 'd', texto: 'Una prueba de penetración del sistema de datos de medidores que confirme que ninguna parte externa puede acceder a los registros de clientes.' }
    ],
    correctas: ['a'],
    explicacion: 'Establecer protocolos de gobernanza para la información personal identificable que rijan cómo se manejan, retienen y protegen los identificadores en los datos de entrenamiento es el mecanismo principal de cumplimiento del RGPD, porque crea el enfoque estructurado que la regulación exige a un encargado del tratamiento. (b) un mecanismo de exclusión es una funcionalidad de gestión de derechos que puede ser necesaria, pero no es el protocolo principal de gobernanza sobre manejo y retención. (d) una prueba de penetración evalúa la seguridad externa, no el marco interno de gobernanza que el RGPD requiere. (c) enmendar el contrato con la distribuidora atiende el consentimiento entre las partes, pero no constituye protocolos de manejo de datos para el entorno de desarrollo de IA.'
  },

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpz-neg-003', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera de transbordadores planea un sistema de IA para pronosticar retrasos de travesía. Los pronósticos deben llegar a los despachadores a través de la plataforma de venta y despacho de la empresa, que tiene décadas de antigüedad y solo intercambia datos mediante una exportación nocturna de archivos. El equipo de desarrollo sugiere construir el modelo primero y resolver después la conexión con la plataforma. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Planificar que los despachadores lean los pronósticos en un visor independiente, para evitar la plataforma.' },
      { id: 'b', texto: 'Encargar un reemplazo de la plataforma de venta antes de que empiece el trabajo de IA.' },
      { id: 'c', texto: 'Evaluar ahora las restricciones de conexión de la plataforma, para que el plan de la solución las refleje.' },
      { id: 'd', texto: 'Aprobar la secuencia del equipo, ya que el modelado es el mayor riesgo técnico.' }
    ],
    correctas: ['c'],
    explicacion: 'Cómo se conectará la solución con los sistemas existentes es un riesgo de adopción e integración que debe evaluarse durante la planificación, porque una plataforma limitada al intercambio nocturno de archivos podría ser incapaz de entregar pronósticos a tiempo, lo que cambia el diseño mismo de la solución. (d) construir el modelo primero difiere la restricción que puede invalidar todo el enfoque, y se descubre solo después de gastar el presupuesto. (b) reemplazar la plataforma es una iniciativa mayor que el proyecto de pronóstico no puede encargar. (a) un visor independiente saca a los despachadores de su herramienta de trabajo, lo que históricamente hunde el uso de los sistemas nuevos.'
  },
  {
    id: 'cpz-neg-004', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de iluminación dota un proyecto de IA que predecirá fallas de garantía en sus luminarias. El plan lista científicos de datos e ingenieros, y supone que los tres diseñadores de producto senior responderán consultas cuando se les pida, además de su carga completa de diseño. El conocimiento de esos diseñadores es esencial para interpretar los registros de falla. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Reemplazar el aporte de los diseñadores por documentación del archivo de producto.' },
      { id: 'b', texto: 'Agendar todas las consultas a los diseñadores en un único taller al arranque del proyecto.' },
      { id: 'c', texto: 'Negociar una porción comprometida del tiempo de los diseñadores como recurso planificado del proyecto.' },
      { id: 'd', texto: 'Proceder, ya que las consultas ocasionales no cargarán notoriamente a los diseñadores.' }
    ],
    correctas: ['c'],
    explicacion: 'Los expertos del dominio de cuyo conocimiento depende el proyecto son un recurso genuino, así que su tiempo debe planificarse y comprometerse como cualquier otra asignación, negociado con sus jefes en vez de darse por gratuito. (d) tratar el aporte experto como ocasional y sin costo es exactamente como se estancan los proyectos cuando la carga real de los expertos toma prioridad. (a) el archivo de producto registra especificaciones, no el juicio interpretativo sobre los registros de falla que hace esenciales a los diseñadores. (b) un único taller inicial no puede anticipar las preguntas de interpretación que irán surgiendo conforme avance el trabajo con datos.'
  },
  {
    id: 'cpz-neg-005', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de spas evalúa los riesgos de un asistente conversacional de IA que agenda tratamientos y responde consultas usando fichas de clientes, incluidas notas de salud que los clientes revelan por su propia seguridad. Un ingeniero de seguridad advierte que solicitudes hábilmente redactadas podrían inducir al asistente a revelar los datos de un cliente a otro. ¿Qué debe hacer el director del proyecto de IA con esa advertencia?',
    opciones: [
      { id: 'a', texto: 'Eliminar todas las notas de salud de las fichas, para que no exista nada sensible que revelar.' },
      { id: 'b', texto: 'Descartarla, ya que el asistente fue construido por un socio de desarrollo reputado.' },
      { id: 'c', texto: 'Evaluar la exposición y exigir salvaguardas y pruebas contra entradas manipuladoras antes del lanzamiento.' },
      { id: 'd', texto: 'Aceptar el riesgo, dado que en la empresa nunca ha ocurrido un incidente así.' }
    ],
    correctas: ['c'],
    explicacion: 'Un sistema conversacional con acceso a fichas sensibles crea una vía de divulgación nueva que los controles tradicionales no cubren, así que la evaluación debe medir esa exposición y exigir salvaguardas —acotamiento estricto de datos por sesión, pruebas adversarias— antes de cualquier lanzamiento. (b) un socio de desarrollo reputado no vuelve inmune a entradas manipuladoras a un sistema que la empresa nunca ha operado. (d) la ausencia de incidentes previos no prueba nada sobre una capacidad recién introducida. (a) borrar las notas de salud descarta información que los clientes entregaron para su propia seguridad, y degrada el servicio para esquivar el trabajo de ingeniería.'
  },
  {
    id: 'cpz-neg-006', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa energética planifica los recursos de un proyecto de IA que pronosticará la producción de sus parques eólicos. El equipo dimensionó el cómputo necesario para entrenar los modelos, pero no ha considerado qué necesitará el sistema una vez que sirva pronósticos a los despachadores las veinticuatro horas. ¿Qué debe indicar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Evaluar las necesidades de infraestructura tanto para el desarrollo como para la operación en vivo.' },
      { id: 'b', texto: 'Reutilizar los servidores de reportes existentes para mantener bajos los costos iniciales.' },
      { id: 'c', texto: 'Diferir todas las decisiones de infraestructura hasta que comience el desarrollo del modelo.' },
      { id: 'd', texto: 'Adquirir ahora un clúster grande de entrenamiento y dimensionar después la capacidad de servicio.' }
    ],
    correctas: ['a'],
    explicacion: 'La identificación de recursos cubre hardware e infraestructura tanto para el desarrollo como para el despliegue, así que evaluar juntas las necesidades de entrenamiento y de servicio continuo evita una sorpresa tardía. (d) adquirir el clúster ahora y dimensionar el servicio después gasta dinero en una mitad del problema mientras deja la otra sin examinar. (b) reutilizar los servidores de reportes presume una capacidad y adecuación que nadie verificó contra cargas de pronóstico continuas. (c) diferir todas las decisiones renuncia al plazo que la compra y el aprovisionamiento suelen requerir.'
  },
  {
    id: 'cpz-neg-007', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa eléctrica autorizó un proyecto de IA para reducir el tiempo de respuesta ante interrupciones en una línea rural, con un equipo pequeño y dedicado. El arquitecto líder propone expandir el diseño para cubrir todas las líneas a la vez, argumentando que la construcción mayor es más elegante. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Adoptar la expansión, ya que una cobertura más amplia aumenta el beneficio total.' },
      { id: 'b', texto: 'Pedir al arquitecto que prototipe el diseño expandido antes de decidir.' },
      { id: 'c', texto: 'Dividir el equipo en dos para que ambos diseños avancen en paralelo.' },
      { id: 'd', texto: 'Mantener el trabajo acotado al objetivo autorizado y a la capacidad real del equipo.' }
    ],
    correctas: ['d'],
    explicacion: 'Mantener el trabajo dentro del objetivo autorizado y de la capacidad real preserva la alineación entre lo aprobado, por qué se aprobó y lo que el equipo pequeño puede entregar. (a) adoptar la expansión por el beneficio total ignora que la autorización apuntaba a una línea y que los recursos se dimensionaron para eso. (b) prototipar el diseño expandido gasta el esfuerzo limitado del equipo explorando una opción fuera del límite aprobado y sirve a la elegancia antes que a la necesidad de negocio. (c) dividir el equipo debilita ambos esfuerzos.'
  },
  {
    id: 'cpz-neg-008', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'La dirección de una acuícola pidió al director del programa de IA llevar la inteligencia artificial al cumplimiento de pedidos, pero sin decir dónde. El equipo está tentado de empezar por un caso de uso que genera entusiasmo en toda la industria minorista. ¿Qué debe hacer el director del programa en su lugar?',
    opciones: [
      { id: 'a', texto: 'Pilotear la capacidad que sea más rápida de demostrar ante la dirección.' },
      { id: 'b', texto: 'Apuntar al paso del flujo de trabajo que tenga la mayor cantidad de datos.' },
      { id: 'c', texto: 'Estudiar el proceso de cumplimiento para encontrar pasos donde la automatización alivie cuellos de botella reales.' },
      { id: 'd', texto: 'Adoptar el caso de uso de IA más publicitado en la industria minorista.' }
    ],
    correctas: ['c'],
    explicacion: 'Identificar el problema empieza por analizar el proceso existente de punta a punta para localizar los pasos donde la automatización inteligente aliviaría un dolor genuino, lo que ancla la iniciativa en la operación real de esta empresa y no en la moda del sector. (d) adoptar el caso de uso más publicitado importa el problema de otra organización. (a) pilotear lo más rápido de demostrar optimiza la óptica en lugar del valor operativo. (b) apuntar al paso con más datos confunde abundancia de datos con necesidad de negocio, porque un dato copioso puede estar en un paso que no es la restricción.'
  },
  {
    id: 'cpz-neg-009', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El grupo de ingeniería de una editorial construyó en una hackathon un motor de etiquetado de artículos que impresionó a todos, y ahora quiere financiamiento para expandirlo. Cuando el director del proyecto de IA pregunta quién usará la salida y para qué decisiones, la sala queda en silencio. ¿Qué debe hacer antes de respaldar la solicitud de financiamiento?',
    opciones: [
      { id: 'a', texto: 'Solicitar una auditoría técnica de la arquitectura del motor de etiquetado.' },
      { id: 'b', texto: 'Expandir el motor a más categorías de contenido para atraer un interés más amplio.' },
      { id: 'c', texto: 'Encuestar a editoriales competidoras para ver si usan motores similares.' },
      { id: 'd', texto: 'Definir los usuarios objetivo y cuándo se apoyarían en la salida.' }
    ],
    correctas: ['d'],
    explicacion: 'Definir los usuarios objetivo y los casos de uso concretos establece las personas y las situaciones que justifican cualquier inversión en IA, y el silencio de la sala muestra que ese trabajo fundacional se saltó. (a) una auditoría técnica evalúa qué tan bien está construido el motor, no si alguien lo necesita. (b) expandir a más categorías hace crecer una capacidad no validada y multiplica el esfuerzo sin confirmar la demanda. (c) encuestar competidores describe el comportamiento del mercado, pero no establece quién dentro de la editorial se apoyaría en la salida ni por qué.'
  },
  {
    id: 'cpz-neg-010', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica esboza una solución de IA para marcar reportes de eventos adversos que requieren revisión. El borrador describe el objetivo de negocio y las fuentes de datos, pero el comité de revisión pregunta qué tipo de enfoque de modelado piensa usar el equipo y por qué. ¿Qué debe agregar el director del proyecto de IA al borrador de la solución?',
    opciones: [
      { id: 'a', texto: 'Los tipos de modelo candidatos y los enfoques algorítmicos considerados.' },
      { id: 'b', texto: 'Una comparación de proveedores comerciales de plataformas de aprendizaje automático automatizado.' },
      { id: 'c', texto: 'Los resultados de una ronda temprana de optimización de hiperparámetros.' },
      { id: 'd', texto: 'Un compromiso de diferir las decisiones de modelado hasta que termine el trabajo con datos.' }
    ],
    correctas: ['a'],
    explicacion: 'Un borrador de solución debe especificar los tipos de modelo candidatos y los enfoques algorítmicos para que los revisores vean la dirección técnica prevista y su justificación. (c) los resultados de optimización provienen del desarrollo real del modelo, que aún no ha comenzado. (d) diferir todas las decisiones de modelado deja sin responder la pregunta del comité y debilita el borrador. (b) una comparación de plataformas atiende la compra de herramientas, no el enfoque de modelado por el que preguntó el comité: la selección de plataforma sigue al diseño, no lo sustituye.'
  },
  {
    id: 'cpz-neg-011', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un distrito de agua está entusiasmado con una iniciativa de IA para predecir fugas, pero no tiene personal con experiencia en sistemas de aprendizaje, ni prácticas de monitoreo para herramientas automatizadas, y una dirección que nunca ha patrocinado un esfuerzo analítico. ¿Qué debe examinar el director del proyecto de IA como parte de la evaluación inicial?',
    opciones: [
      { id: 'a', texto: 'Si la organización está preparada para construir, operar y gobernar un sistema así.' },
      { id: 'b', texto: 'Si un distrito vecino más pequeño ha intentado una iniciativa similar.' },
      { id: 'c', texto: 'Si conviene renombrar la iniciativa para atraer más apoyo interno.' },
      { id: 'd', texto: 'Si la red de sensores de tuberías puede transmitir lecturas a un almacén central.' }
    ],
    correctas: ['a'],
    explicacion: 'Examinar si la organización está preparada para construir, operar y gobernar el sistema aborda la preparación organizacional, y las habilidades faltantes, la ausencia de prácticas de monitoreo y la dirección inexperta apuntan todas a esa brecha. (d) la capacidad de transmisión de los sensores es una pregunta técnica real, pero más estrecha que el cuadro de preparación que describe el escenario. (b) la experiencia de un distrito vecino es contexto anecdótico que no sustituye evaluar la capacidad propia. (c) renombrar la iniciativa es una táctica de comunicación que no cierra ninguna brecha de capacidad.'
  },
  {
    id: 'cpz-neg-012', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una carpintería completó una evaluación de habilidades para su proyecto de cotización con IA. La evaluación muestra que sus analistas de negocio ya manejan bien la preparación de datos y están cerca de las habilidades que el proyecto necesita, mientras que la experiencia profunda en modelado está ausente y también hará falta para iniciativas futuras. ¿Cómo debe dotar el equipo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Capacitar a los analistas en modelado profundo y retrasar el proyecto hasta que estén listos.' },
      { id: 'b', texto: 'Tercerizar el proyecto completo para que las habilidades internas nunca sean una restricción.' },
      { id: 'c', texto: 'Contratar un equipo externo completo de ciencia de datos y mantener a los analistas en sus tareas actuales.' },
      { id: 'd', texto: 'Desarrollar a los analistas hacia las habilidades cercanas e incorporar experiencia de modelado que la empresa pueda retener.' }
    ],
    correctas: ['d'],
    explicacion: 'Una decisión de dotación debe seguir a la evaluación de brechas: desarrollar a las personas internas donde la brecha es pequeña y adquirir experiencia duradera donde la brecha es profunda y la necesidad recurre, lo que hace crecer a los analistas mientras la empresa incorpora una capacidad de modelado que conserva. (b) tercerizar todo compra el proyecto pero no construye nada para las iniciativas futuras ya identificadas. (c) contratar un equipo entero mientras se margina a analistas capaces desperdicia las habilidades más cercanas que la empresa posee. (a) formar analistas desde cero en modelado profundo retrasa el proyecto por el camino más lento hacia la habilidad más escasa.'
  },
  {
    id: 'cpz-neg-013', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El borrador de justificación financiera de una empresa de paquetería para un servicio de corrección de direcciones con IA muestra un retorno atractivo, porque el cálculo solo contabiliza el gasto de desarrollo inicial. El director del proyecto de IA sabe que el servicio también necesitará infraestructura de servicio, reentrenamiento periódico y personal de monitoreo durante años. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Repartir el gasto de desarrollo entre más años fiscales.' },
      { id: 'b', texto: 'Comparar las cifras contra promedios publicados del sector.' },
      { id: 'c', texto: 'Aprobar las cifras, ya que el desarrollo es el costo directo del proyecto.' },
      { id: 'd', texto: 'Recalcular el retorno usando los costos de ciclo de vida completo de la solución.' }
    ],
    correctas: ['d'],
    explicacion: 'Determinar el retorno de la inversión exige estimar el costo total de propiedad —infraestructura, reentrenamiento y operación continua—, así que el cálculo debe rehacerse con los costos de vida completa antes de que nadie se apoye en él. (c) aprobar cifras solo de desarrollo presenta un retorno inflado que no sobrevivirá al contacto con la realidad operativa. (a) repartir el gasto entre años fiscales cambia la presentación contable sin agregar las categorías de costo ausentes. (b) comparar contra promedios del sector contrasta un número defectuoso en vez de corregir la omisión que lo hace defectuoso.'
  },
  {
    id: 'cpz-neg-014', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista lanza un proyecto de IA para reducir los quiebres de stock. Cuando el director del proyecto pregunta al patrocinador cómo juzgará la empresa el proyecto, este responde que el éxito significa que el modelo funcione bien. ¿Qué debe hacer el director a continuación?',
    opciones: [
      { id: 'a', texto: 'Aceptar el encuadre del patrocinador y pasar a la recolección de datos.' },
      { id: 'b', texto: 'Pedir al equipo de ciencia de datos que maximice la exactitud del modelo.' },
      { id: 'c', texto: 'Definir métricas medibles de impacto en el negocio con umbrales acordados.' },
      { id: 'd', texto: 'Comparar los despliegues de IA de la competencia para fijar expectativas.' }
    ],
    correctas: ['c'],
    explicacion: 'Un lenguaje vago de éxito debe convertirse en métricas medibles de impacto con umbrales acordados; de lo contrario nadie podrá juzgar después si la inversión rindió. (a) aceptar el encuadre y avanzar a la recolección fija la ambigüedad que reaparecerá en el momento de la evaluación. (b) maximizar la exactitud es un objetivo técnico que puede no traducirse en menos quiebres de stock, que es el resultado que el negocio realmente quiere. (d) comparar con la competencia puede informar los objetivos, pero no establece qué aceptará este patrocinador como éxito.'
  },
  {
    id: 'cpz-neg-015', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una tienda de artículos para exteriores planifica una capacidad de recomendación de productos con IA. Los compradores en línea navegan por su cuenta y quieren sugerencias en el momento, mientras que los asesores de tienda quieren argumentos de venta para guiar a los clientes en el mostrador. El proyecto solo puede entregar para uno de los dos grupos en su primera versión. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Caracterizar la situación y las necesidades de cada grupo de usuarios por separado, y luego elegir deliberadamente el primer objetivo.' },
      { id: 'b', texto: 'Dejar que el equipo de desarrollo elija el grupo que sea técnicamente más simple de atender.' },
      { id: 'c', texto: 'Empezar por los asesores de tienda, porque a los empleados es más fácil capacitarlos.' },
      { id: 'd', texto: 'Construir un único feed genérico de recomendaciones y dejar que ambos grupos se adapten a él.' }
    ],
    correctas: ['a'],
    explicacion: 'Compradores en línea y asesores de mostrador usan las recomendaciones en situaciones distintas y con necesidades distintas, así que cada grupo debe caracterizarse por separado y la primera versión debe apuntar mediante una decisión de negocio deliberada sobre valor y encaje. (d) un feed genérico no sirve bien a ninguna situación, porque navegar en el momento y conversar guiado en el mostrador exigen experiencias diferentes. (c) elegir a los asesores porque son capacitables selecciona por conveniencia y no por necesidad o valor. (b) delegar la elección a la simplicidad técnica deja que la facilidad de implementación decida quién importa primero.'
  },
  {
    id: 'cpz-neg-016', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de kayaks busca financiamiento para un sistema de IA que pronostique picos estacionales de demanda. En una reunión previa, un ejecutivo pregunta por qué la empresa no contrata simplemente a dos planificadores más. El documento de justificación actual describe solo la opción de IA. ¿Qué debe agregar el director del proyecto de IA antes de la presentación de financiamiento?',
    opciones: [
      { id: 'a', texto: 'Un aviso de confidencialidad que restrinja el documento al comité ejecutivo.' },
      { id: 'b', texto: 'Citas de respaldo de planificadores que probaron un prototipo temprano.' },
      { id: 'c', texto: 'Una evaluación que compare la propuesta contra opciones creíbles, incluida la contratación adicional.' },
      { id: 'd', texto: 'Un énfasis más fuerte en la importancia estratégica de adoptar IA.' }
    ],
    correctas: ['c'],
    explicacion: 'Una justificación de financiamiento es un documento de decisión, y quienes deciden necesitan ver la propuesta contrastada honestamente con las alternativas creíbles —incluida la opción de dotación más simple que el ejecutivo ya planteó—, con costos, beneficios y riesgos comparados. (d) apoyarse más en la importancia estratégica responde con retórica a una pregunta comparativa. (b) los respaldos de planificadores hablan de usabilidad, no de si una opción convencional más barata serviría igual. (a) un aviso de confidencialidad cambia quién lee el documento sin atender el vacío de su análisis.'
  },
  {
    id: 'cpz-neg-017', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una institución educativa construye un modelo de IA para identificar estudiantes en riesgo de abandonar un curso. Los científicos de datos reportan semanalmente cifras de precisión y exhaustividad, pero los responsables académicos dicen que no logran saber si el proyecto ayudará a las metas de retención. ¿Qué debe hacer el director del proyecto de IA para cerrar esa brecha?',
    opciones: [
      { id: 'a', texto: 'Pedir a los responsables que asistan a un taller sobre medidas de evaluación de modelos.' },
      { id: 'b', texto: 'Vincular los indicadores técnicos con las métricas de retención que los responsables ya siguen.' },
      { id: 'c', texto: 'Reducir la frecuencia de reporte para que los responsables vean solo resultados de hito.' },
      { id: 'd', texto: 'Reemplazar el reporte técnico por encuestas de satisfacción estudiantil.' }
    ],
    correctas: ['b'],
    explicacion: 'Los criterios de éxito deben alinear los indicadores técnicos de desempeño con las métricas de impacto que la organización valora, así que conectar las cifras del modelo con los resultados de retención permite a los responsables ver qué significan los números para sus metas. (d) reemplazar el reporte técnico por encuestas de satisfacción descarta medidas que el equipo sigue necesitando para la calidad del modelo. (a) capacitar a los responsables en métricas de evaluación traslada la carga de traducción a la audiencia en vez de arreglar los criterios. (c) reducir la frecuencia cambia cada cuánto se confunden los responsables sin volver significativas las medidas.'
  },
  {
    id: 'cpz-neg-018', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de mensajería sopesa un sistema de IA que predice fallas de entrega de paquetes. Los ahorros proyectados dependen fuertemente de supuestos sobre tasas de falla y respuesta de los conductores, y las estimaciones del equipo van de modestas a espectaculares según qué supuestos se sostengan. El director financiero pide una única cifra definitiva de ahorro para llevar al directorio. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Retener el análisis financiero hasta que los datos de producción eliminen la incertidumbre.' },
      { id: 'b', texto: 'Presentar el punto medio de las estimaciones como la cifra más defendible.' },
      { id: 'c', texto: 'Presentar la estimación más conservadora, para que el directorio nunca quede decepcionado.' },
      { id: 'd', texto: 'Presentar el análisis como un rango que muestre cómo cambian los resultados bajo supuestos conservadores y optimistas.' }
    ],
    correctas: ['d'],
    explicacion: 'Cuando los beneficios proyectados dependen de supuestos inciertos, el análisis debe mostrar el rango de resultados y qué supuestos impulsan las diferencias, para que el directorio juzgue la inversión con la incertidumbre a la vista. (c) presentar solo la cifra más conservadora esconde un potencial genuino y puede matar una iniciativa que vale la pena. (b) un punto medio presentado como definitivo fabrica una precisión falsa que las estimaciones subyacentes no sostienen. (a) retener el análisis hasta tener datos de producción es circular, porque la decisión de financiamiento debe tomarse antes de que exista producción alguna.'
  },
  {
    id: 'cpz-neg-019', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una transportista de carga planifica un asistente de IA pensado, en palabras del patrocinador, para ayudar a todos en la empresa a trabajar más rápido. La lista de deseos ya abarca despachadores, contadores, reclutadores y conductores, y el equipo de diseño no logra acordar qué construir primero. ¿Cómo debe enfocar el esfuerzo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Construir primero las funciones de los contadores, porque finanzas aprueba el financiamiento.' },
      { id: 'b', texto: 'Dejar que el equipo de diseño vote qué funciones le resultan técnicamente más interesantes.' },
      { id: 'c', texto: 'Definir los grupos de usuarios específicos y las tareas que la solución debe soportar para cada uno.' },
      { id: 'd', texto: 'Implementar la función más simple de la lista de cada área en la primera versión.' }
    ],
    correctas: ['c'],
    explicacion: 'Una solución dirigida a todos no sirve bien a nadie, así que el director debe definir los grupos de usuarios distintos y las tareas y situaciones concretas que cada uno necesita, lo que da al equipo una base para priorizar y diseñar. (a) secuenciar por qué área controla el financiamiento optimiza la política interna antes que la necesidad. (d) tomar el ítem más simple de cada lista produce una dispersión superficial de capacidades sin valor coherente para ningún usuario. (b) votar por interés técnico selecciona el trabajo que entusiasma a quienes construyen en vez del que los usuarios requieren.'
  },
  {
    id: 'cpz-neg-020', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El taller de riesgos de una techadora para un proyecto de inspección con drones de IA produjo una lista larga: desde lecturas cosméticas erróneas menores hasta que el sistema pase por alto un daño estructural que después hiera a los ocupantes. El equipo tiene tiempo y presupuesto limitados para las respuestas a riesgos. ¿Cómo debe dirigir el director del proyecto de IA el esfuerzo de mitigación?',
    opciones: [
      { id: 'a', texto: 'Ordenar los riesgos por consecuencia y probabilidad, y concentrar las respuestas en los más severos.' },
      { id: 'b', texto: 'Atender los riesgos en el orden en que el taller los fue registrando.' },
      { id: 'c', texto: 'Repartir el presupuesto de respuesta en partes iguales, para que cada riesgo listado reciba algo.' },
      { id: 'd', texto: 'Manejar solo los riesgos con soluciones baratas y revisar el resto el año próximo.' }
    ],
    correctas: ['a'],
    explicacion: 'Las respuestas a riesgos deben priorizarse ordenando cada riesgo por consecuencia y probabilidad, de modo que un presupuesto escaso se concentre en exposiciones severas como un daño estructural no detectado que amenaza la seguridad, y no en lecturas cosméticas erróneas. (b) trabajar la lista en orden de registro trata la secuencia como si fuera severidad. (c) repartir el presupuesto por igual desfinancia los riesgos catastróficos para sobrefinanciar los triviales. (d) arreglar solo lo barato optimiza la facilidad de cierre mientras las exposiciones más peligrosas quedan sin atender durante un año.'
  },
  {
    id: 'cpz-neg-021', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera aprobó un proyecto de IA para detectar defectos de superficie a partir de imágenes de cámara en su línea de producción. Los desarrolladores de aplicaciones en planilla son sólidos, pero nunca han construido ni mantenido sistemas de aprendizaje. El patrocinador pide al director del proyecto de IA resolver rápido la cuestión de dotación. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Contratar una consultora externa de aprendizaje automático para la construcción.' },
      { id: 'b', texto: 'Evaluar los requisitos de habilidades para la composición del equipo del proyecto.' },
      { id: 'c', texto: 'Inscribir a los desarrolladores de aplicaciones en un curso intensivo de modelado.' },
      { id: 'd', texto: 'Reclutar una contratación permanente de ciencia de datos que ancle al equipo.' }
    ],
    correctas: ['b'],
    explicacion: 'Identificar los recursos del proyecto empieza por evaluar qué habilidades exige realmente el trabajo, lo que revela después si contratar, capacitar o incorporar personal es la respuesta correcta. (a) contratar una consultora compromete presupuesto antes de que nadie haya definido qué capacidades faltan. (c) inscribir a los desarrolladores en un curso de modelado asume que la capacitación puede cerrar la brecha y acepta una rampa larga sin comprobar el cronograma del proyecto. (d) reclutar una contratación permanente presume una necesidad duradera que un solo esfuerzo de detección de defectos quizá no justifique.'
  },
  {
    id: 'cpz-neg-022', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera está redotando un proyecto de IA para clasificar fotos de daños de carga. El equipo necesita software especializado de anotación, y el director del proyecto se entera de que los ingenieros han empezado a descargar herramientas gratuitas variadas en las máquinas de la empresa sin ninguna revisión. ¿Cuál es la respuesta más apropiada?',
    opciones: [
      { id: 'a', texto: 'Permitir las descargas, ya que las herramientas gratuitas evitan las aprobaciones de presupuesto.' },
      { id: 'b', texto: 'Coordinar con compras la adquisición de herramientas especializadas verificadas.' },
      { id: 'c', texto: 'Construir internamente la capacidad de anotación para evitar terceros.' },
      { id: 'd', texto: 'Pedir a los ingenieros que se estandaricen en la herramienta que prefiera la mayoría.' }
    ],
    correctas: ['b'],
    explicacion: 'La identificación de recursos incluye coordinar con compras las herramientas especializadas, lo que incorpora revisión de seguridad, claridad de licenciamiento y soporte a la adquisición en lugar de dejarlos al azar. (a) permitir descargas sin revisión expone a la empresa a violaciones de licencia y a software no verificado manipulando imágenes de carga. (d) estandarizar en la herramienta preferida zanja la cuestión de popularidad pero igual se salta la verificación que protege a la organización. (c) construir la herramienta de anotación internamente desvía al equipo hacia la construcción de software cuando ya existen productos adecuados.'
  },
  {
    id: 'cpz-neg-023', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un astillero de yates agrega una funcionalidad de asistencia con IA que ayuda a los capitanes a maniobrar dentro de puertos deportivos concurridos. El director del proyecto de IA convoca el primer taller de riesgos del proyecto. ¿Qué debe hacer enumerar primero al grupo?',
    opciones: [
      { id: 'a', texto: 'Los escenarios de sobrecosto presupuestario que podrían amenazar el financiamiento.' },
      { id: 'b', texto: 'Los retrasos de cronograma que podrían demorar la ventana de lanzamiento estacional.' },
      { id: 'c', texto: 'Los términos contractuales que podrían atar a la empresa a un solo proveedor.' },
      { id: 'd', texto: 'Las formas en que la funcionalidad podría fallar y el daño que cada falla podría causar.' }
    ],
    correctas: ['d'],
    explicacion: 'Para un sistema que maniobra físicamente embarcaciones cerca de personas y propiedad, la evaluación de riesgos debe empezar por los modos de falla y sus implicaciones de seguridad, porque esos hallazgos moldean las salvaguardas de diseño, la profundidad de las pruebas e incluso si la funcionalidad debe seguir adelante. (a) los sobrecostos importan, pero la exposición monetaria es recuperable de maneras en que el daño a personas no lo es. (c) el amarre a un proveedor es un riesgo comercial que no amenaza la seguridad de nadie. (b) los retrasos afectan la ventana de lanzamiento, pero una funcionalidad demorada es muy preferible a una insegura.'
  },
  {
    id: 'cpz-neg-024', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El dueño de una empresa de catering quiere que la IA mejore la cotización y ha pedido al director del proyecto que empiece el desarrollo de inmediato. Nadie ha dicho qué significa mejorar ni cómo se verificaría. ¿Qué debe establecer el director del proyecto antes de que comience el desarrollo?',
    opciones: [
      { id: 'a', texto: 'Objetivos medibles específicos que definan qué significa mejora para la cotización.' },
      { id: 'b', texto: 'Un sprint corto de descubrimiento para explorar qué modelos de cotización están de moda.' },
      { id: 'c', texto: 'Una reunión semanal fija donde el dueño revise el avance del desarrollo.' },
      { id: 'd', texto: 'Un contrato con penalidades si el equipo de desarrollo incumple los plazos.' }
    ],
    correctas: ['a'],
    explicacion: 'Unos objetivos medibles que definan qué significa mejora dan al proyecto una definición verificable de terminado, sin la cual el equipo no puede saber qué construir ni si funcionó: establecer indicadores medibles de desempeño antes de construir es la esencia de definir el éxito de una iniciativa de IA. (b) un sprint de descubrimiento sobre modelos de moda explora técnica mientras la meta sigue indefinida. (c) una revisión semanal crea supervisión del avance hacia un destino no declarado. (d) las penalidades por plazos imponen velocidad, y la velocidad hacia una meta vaga solo produce lo equivocado más rápido.'
  },
  {
    id: 'cpz-neg-025', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una óptica planifica un proyecto de recomendación de lentes con IA. Una ley nacional exige que los datos de prescripción de los clientes nunca salgan del país, lo que descarta el arreglo de procesamiento en el extranjero que la empresa prefiere. ¿Cómo debe tratar el director del proyecto de IA esa restricción en los documentos de planificación?',
    opciones: [
      { id: 'a', texto: 'Listarla como un riesgo que quizá pueda negociarse más adelante.' },
      { id: 'b', texto: 'Tratarla como un bloqueador temporal a revisar después de construir el modelo.' },
      { id: 'c', texto: 'Omitirla, ya que las restricciones legales las sigue el departamento de cumplimiento.' },
      { id: 'd', texto: 'Registrarla como una limitación vinculante que todas las decisiones de diseño deben respetar.' }
    ],
    correctas: ['d'],
    explicacion: 'Registrar la restricción como una limitación vinculante la convierte en una condición documentada, de modo que cada decisión de arquitectura y de proveedor se tome teniéndola presente; documentar restricciones junto a los supuestos es parte explícita de elaborar el alcance. (c) omitirla porque cumplimiento sigue la ley por separado esconde un hecho que moldea el diseño justo al equipo que más lo necesita. (a) listarla como riesgo negociable clasifica mal un requisito legal como incertidumbre e invita a diseños que no podrán operar. (b) diferirla hasta después de construir garantiza un retrabajo costoso si la construcción asume procesamiento en el extranjero.'
  },
  {
    id: 'cpz-neg-026', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una óptica aprobó una iniciativa de detección de defectos en lentes con IA y el equipo está produciendo el esquema inicial de la solución. Un ingeniero de plataforma presiona para cerrar en ese documento las especificaciones de servidores, los niveles de almacenamiento y una cadena de herramientas comercial concreta, para que compras pueda empezar de inmediato. ¿Qué debe indicar el director del proyecto de IA que produzca el equipo en esta etapa?',
    opciones: [
      { id: 'a', texto: 'Una lista de cadenas de herramientas comerciales candidatas ordenadas por costo de licenciamiento.' },
      { id: 'b', texto: 'Un aplazamiento de todo el trabajo de diseño hasta que los datos de entrenamiento estén completamente reunidos.' },
      { id: 'c', texto: 'Una representación de los componentes mayores y el movimiento de datos, dejando el dimensionamiento detallado para fases posteriores.' },
      { id: 'd', texto: 'Una especificación de infraestructura terminada y lista para la firma de compras.' }
    ],
    correctas: ['c'],
    explicacion: 'En esta etapa el equipo esboza la solución a alto nivel, mostrando los componentes mayores, cómo se mueven los datos entre ellos y dónde el sistema toca las plataformas existentes, lo que da a las fases posteriores un marco estable sin fijar detalles prematuros. (d) una especificación de infraestructura terminada no puede producirse responsablemente antes de conocer los volúmenes de datos y las decisiones de modelado, y una firma temprana de compras endurecería conjeturas en compromisos. (a) ordenar cadenas de herramientas por licenciamiento es un ejercicio de comparación de proveedores, no una descripción de la solución. (b) diferir todo el diseño deja al proyecto sin una imagen compartida contra la cual evaluar las necesidades de datos.'
  },
  {
    id: 'cpz-neg-027', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de cines lanza un sistema de precios dinámicos de entradas que aprende continuamente de las transacciones de compra que llegan por un canal web público. La lista de verificación corporativa estándar de seguridad ya se completó. Durante la evaluación de riesgos, ¿qué exposición adicional debe asegurar el director del proyecto de IA que el equipo examine?',
    opciones: [
      { id: 'a', texto: 'Verificar las reglas de firewall que protegen los servidores web de venta de entradas.' },
      { id: 'b', texto: 'Confirmar que los empleados completen la capacitación anual de concientización en seguridad.' },
      { id: 'c', texto: 'Evaluar cómo transacciones deliberadamente manipuladas podrían corromper lo que el sistema aprende.' },
      { id: 'd', texto: 'Cifrar los registros de ventas archivados que se conservan en almacenamiento en frío.' }
    ],
    correctas: ['c'],
    explicacion: 'Los sistemas que aprenden continuamente de entradas públicas cargan una vulnerabilidad propia de la IA: alguien externo puede alimentar deliberadamente transacciones manipuladas para sesgar el comportamiento de precios aprendido, y la evaluación de riesgos debe examinar esa exposición porque las listas convencionales la pasan por alto. (a) verificar el firewall es higiene de red estándar que la lista completada ya cubre. (b) la capacitación en concientización atiende el error humano, no la manipulación adversaria de las entradas de entrenamiento. (d) cifrar los registros archivados protege datos en reposo mientras la vía de aprendizaje en vivo sigue siendo la superficie de ataque abierta.'
  },
  {
    id: 'cpz-neg-028', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de concesionarios de automóviles define un asistente de servicio con IA. En cada reunión de revisión, los interesados proponen añadidos: más idiomas, más canales de chat, integración con el sistema de vehículos de cortesía. El equipo no logra distinguir qué solicitudes se comprometió realmente a entregar el proyecto. ¿Qué debe producir el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Un registro de qué funciones están incluidas y cuáles están excluidas.' },
      { id: 'b', texto: 'Un cronograma revisado que absorba las solicitudes acumuladas.' },
      { id: 'c', texto: 'Una regla de aprobación permanente para los añadidos que reutilicen el mismo modelo.' },
      { id: 'd', texto: 'Una lista de espera que difiera cada solicitud nueva hasta después del lanzamiento.' }
    ],
    correctas: ['a'],
    explicacion: 'Documentar la funcionalidad dentro y fuera del alcance da a los interesados un registro definitivo de los compromisos y frena la acumulación constante de funciones asumidas. (b) revisar el cronograma para absorber las solicitudes trata cada añadido como aceptado, que es justamente la ambigüedad que daña al equipo. (c) una regla de aprobación permanente para añadidos que reutilizan el modelo crea un canal automático de expansión sin evaluación de negocio. (d) diferir cada solicitud hasta después del lanzamiento evita decidir en lugar de decidir, y algunas solicitudes pueden pertenecer legítimamente a la primera versión.'
  },
  {
    id: 'cpz-neg-029', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un complejo turístico revisa el registro de riesgos de un sistema de IA de pronóstico de reservas del que su equipo comercial dependerá a diario. Cada entrada trata sobre la exactitud del modelo o la calidad de los datos. El director del proyecto de IA observa que nada describe qué ocurre con las operaciones comerciales si el sistema queda no disponible durante la temporada alta. ¿Qué debe agregar a la evaluación?',
    opciones: [
      { id: 'a', texto: 'Un arreglo de tercerización del alojamiento que transfiera el riesgo.' },
      { id: 'b', texto: 'Un análisis de los riesgos de continuidad del negocio junto a los riesgos técnicos.' },
      { id: 'c', texto: 'Infraestructura de servicio redundante para el sistema de pronóstico.' },
      { id: 'd', texto: 'Objetivos de exactitud más altos, para que las fallas sean menos probables.' }
    ],
    correctas: ['b'],
    explicacion: 'La evaluación de riesgos debe analizar la exposición de continuidad del negocio y no solo la calidad técnica, así que agregar un análisis de cómo sobreviven las operaciones a una interrupción del sistema llena el punto ciego del registro. (d) subir los objetivos de exactitud atiende cuán seguido se equivoca el modelo, algo ajeno a si el servicio permanece disponible. (a) tercerizar el alojamiento mueve la carga operativa, pero la consecuencia de negocio de una caída en temporada alta sigue siendo del complejo. (c) la infraestructura redundante es una mitigación que vale la pena considerar después de analizar y dimensionar el riesgo de continuidad, no un sustituto del análisis.'
  },
  {
    id: 'cpz-neg-030', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios públicos finaliza la propuesta de financiamiento de una iniciativa de predicción de interrupciones. Al revisar el documento, el director del proyecto de IA nota que los ahorros de personal reclamados en la sección de beneficios también aparecen en la propuesta aprobada de un programa de eficiencia distinto, de modo que ambas iniciativas contabilizan el mismo ahorro. ¿Qué debe hacer antes de la presentación?',
    opciones: [
      { id: 'a', texto: 'Poner una nota al pie sobre el solapamiento y dejar que el comité de inversiones decida cómo tratarlo.' },
      { id: 'b', texto: 'Conciliar el solapamiento con el otro programa para que cada ahorro se reclame una sola vez.' },
      { id: 'c', texto: 'Quitar todos los ahorros de personal de ambos programas para ser conservadores.' },
      { id: 'd', texto: 'Presentar la propuesta sin cambios, ya que cada documento se preparó de forma independiente.' }
    ],
    correctas: ['b'],
    explicacion: 'Revisar y refinar la propuesta incluye detectar el doble conteo, así que el director debe trabajar con el otro programa para atribuir el ahorro compartido a una iniciativa o repartirlo sobre una base defendible antes de que el comité lo vea. (d) presentar sin cambios sobrestima a sabiendas el retorno combinado del portafolio. (c) quitar los ahorros de ambos programas subestima el valor real y castiga la exactitud en nombre de la cautela. (a) una nota al pie que delega la conciliación entrega al comité un defecto analítico sin resolver disfrazado de transparencia.'
  },
  {
    id: 'cpz-neg-031', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de seguridad realizó un taller que produjo el registro de riesgos de su optimizador de rutas de patrulla con IA, incluida una entrada de alto impacto: el modelo podría desviar a los guardias de una zona poco antes de que ocurra un incidente. El registro documenta cada riesgo y se detiene ahí. ¿Qué debe exigir a continuación el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Reclasificar los riesgos con puntajes más bajos para que el proyecto pueda superar su revisión.' },
      { id: 'b', texto: 'Aceptar los riesgos como inherentes a cualquier sistema que aprende de datos.' },
      { id: 'c', texto: 'Contratar una cobertura de responsabilidad civil y considerar atendida la exposición.' },
      { id: 'd', texto: 'Definir medidas de reducción y una respuesta planificada para cada riesgo mayor.' }
    ],
    correctas: ['d'],
    explicacion: 'Un registro que solo lista riesgos está incompleto: el paso siguiente es desarrollar estrategias de mitigación que reduzcan cada riesgo mayor y respuestas de contingencia que digan qué hacer si aun así se materializa, como reglas de cobertura mínima que el optimizador no pueda anular. (b) aceptar todo riesgo como inherente abandona el deber del proyecto de reducir el daño previsible. (c) la cobertura de responsabilidad transfiere consecuencias financieras sin hacer más seguro a nadie. (a) reclasificar los riesgos a la baja para pasar la revisión falsifica la evaluación en lugar de atenderla.'
  },

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpz-dat-008', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minera quiere un modelo de falla de equipos entrenado con al menos una década de historial de mantenimiento, pero su sistema empresarial actual solo llega cuatro años atrás. Existen registros más antiguos en alguna parte, ya que la empresa usaba otro software antes de la migración. ¿Qué debe indicar el director del proyecto de IA al equipo?',
    opciones: [
      { id: 'a', texto: 'Pedir a los proveedores de equipos que reconstruyan el historial faltante desde sus fichas de servicio.' },
      { id: 'b', texto: 'Inventariar los sistemas retirados y los archivos históricos para localizar los registros anteriores a la migración.' },
      { id: 'c', texto: 'Restringir el modelo a los cuatro años de historial que ya tiene el sistema actual.' },
      { id: 'd', texto: 'Generar registros antiguos artificiales extrapolando los patrones de los últimos cuatro años.' }
    ],
    correctas: ['b'],
    explicacion: 'Inventariar los sistemas retirados y los archivos históricos es la forma sistemática de localizar registros anteriores a la plataforma actual, y las migraciones suelen dejar datos antiguos exactamente en esos lugares. (c) restringir el modelo a cuatro años abandona el requisito antes de comprobar si los registros más antiguos son recuperables. (d) extrapolar registros artificiales fabrica historia y enseñaría al modelo patrones que quizá nunca existieron. (a) las fichas de servicio de los proveedores cubren solo los equipos que cada uno tocó y nunca fueron el registro operativo de la empresa.'
  },
  {
    id: 'cpz-dat-009', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena de farmacias terminó de evaluar los datos de recetas recurrentes para un modelo de predicción de quiebres de stock. La evaluación muestra buena calidad general, pero revela que los registros de las tiendas rurales cubren solo una fracción del periodo que especificaban los requisitos. El comité directivo espera una recomendación sobre si avanzar a la preparación de datos. ¿Qué debe presentar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Una solicitud de relajar los requisitos para que los registros rurales dejen de quedarse cortos.' },
      { id: 'b', texto: 'Una recomendación de detener, ya que cualquier incumplimiento de requisitos invalida el conjunto de datos.' },
      { id: 'c', texto: 'Una recomendación de avanzar, ya que la calidad general es fuerte y las tiendas rurales son una minoría.' },
      { id: 'd', texto: 'Una comparación de los datos evaluados contra los requisitos documentados, con el déficit rural señalado explícitamente.' }
    ],
    correctas: ['d'],
    explicacion: 'Comparar los datos disponibles contra los requisitos definidos es como se encuadra la decisión de avanzar, así que el comité debe ver exactamente dónde la cobertura rural se queda corta respecto de lo especificado y qué significa eso para la solución. (c) recomendar avanzar por la fortaleza general entierra una brecha que podría volver al modelo poco confiable para las tiendas rurales, un segmento que los requisitos incluían deliberadamente. (a) relajar los requisitos para que calcen con los datos invierte la lógica y solo debería ocurrir por una decisión de negocio deliberada. (b) detener de plano es prematuro, porque el comité podría aceptar un lanzamiento acotado o encargar recolección rural adicional una vez visible la brecha.'
  },
  {
    id: 'cpz-dat-010', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de un proyecto de IA en una aseguradora descubre que un conjunto de datos de siniestros con detalles de salud se cargó en el espacio de trabajo del proyecto, y que cualquier integrante del programa ampliado —incluidos contratistas sin responsabilidades sobre datos— puede abrirlo. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Mantener el acceso amplio, pero habilitar el registro de quién abre el conjunto de datos.' },
      { id: 'b', texto: 'Enmascarar los campos de salud para todos los usuarios del espacio de trabajo, incluido el equipo de modelado.' },
      { id: 'c', texto: 'Restringir el acceso para que solo los roles que necesitan los datos para el trabajo del proyecto puedan alcanzarlos.' },
      { id: 'd', texto: 'Apoyarse en las cláusulas de confidencialidad ya presentes en los acuerdos de los contratistas.' }
    ],
    correctas: ['c'],
    explicacion: 'Implementar controles de acceso que limiten los datos sensibles de salud a los roles cuyo trabajo los requiere cierra la exposición de forma directa y refleja el permisionamiento basado en necesidad. (d) las cláusulas de confidencialidad son promesas contractuales, no controles técnicos, y no impiden el acceso de personas sin razón para ver datos de siniestros. (b) enmascarar los campos para todos, incluido el equipo de modelado, bloquea el uso legítimo para el que se reunieron los datos. (a) el registro de accesos es una medida detectiva que documenta la exposición después de ocurrida en lugar de prevenirla.'
  },
  {
    id: 'cpz-dat-011', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red hospitalaria planea entrenar un modelo de predicción de reingresos con registros de pacientes extraídos de varios sistemas clínicos. El equipo de datos está listo para comenzar la recolección, y la dirección quiere evidencia de que se consideraron los intereses de los pacientes antes de que ningún registro se mueva. ¿Qué debe encargar el director del proyecto de IA en este punto?',
    opciones: [
      { id: 'a', texto: 'Un benchmark de algoritmos candidatos sobre conjuntos de datos de salud disponibles públicamente.' },
      { id: 'b', texto: 'Una encuesta que mida la satisfacción de los pacientes con los servicios digitales de la red.' },
      { id: 'c', texto: 'Una evaluación de los riesgos de privacidad que crea el uso previsto de los datos.' },
      { id: 'd', texto: 'Una revisión de capacidad de almacenamiento del entorno de desarrollo del modelo.' }
    ],
    correctas: ['c'],
    explicacion: 'Una evaluación de los riesgos de privacidad para el uso previsto es lo correcto, porque valorar cómo la recolección y el tratamiento afectan a las personas debe ocurrir antes de reunir registros sensibles, que es exactamente la evidencia que pide la dirección. (a) hacer benchmark de algoritmos sobre datos públicos informa la elección de técnica, pero no dice nada sobre el impacto en los pacientes. (d) una revisión de almacenamiento es una verificación de infraestructura ajena a los intereses de los pacientes. (b) una encuesta de satisfacción mide la percepción sobre servicios digitales, no los riesgos que crea usar registros clínicos para entrenar un modelo.'
  },
  {
    id: 'cpz-dat-012', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de clínicas planifica un modelo para predecir inasistencias a citas. Durante el trabajo de requisitos, el equipo de datos propone exportar todos los campos del sistema de agendamiento, incluidas notas libres del personal y formularios de consentimiento escaneados, para evitar una segunda solicitud más adelante. ¿Qué debe indicar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Limitar la exportación a campos numéricos, ya que los modelos no pueden usar texto ni imágenes.' },
      { id: 'b', texto: 'Especificar los tipos de dato y formatos que necesita el caso de uso de inasistencias antes de cualquier exportación.' },
      { id: 'c', texto: 'Exportar solo campos que no contengan información de pacientes, para simplificar el cumplimiento.' },
      { id: 'd', texto: 'Exportar todo ahora y filtrar hasta los campos útiles durante la preparación.' }
    ],
    correctas: ['b'],
    explicacion: 'Especificar los tipos y formatos que el caso de uso necesita mantiene la exportación alineada con el objetivo de predicción y evita arrastrar material sensible sin propósito de modelado. (d) exportar todo y filtrar después infla el esfuerzo de manejo y amplía la exposición de privacidad en un entorno clínico para campos que nadie justificó. (a) limitar a campos numéricos parte de una premisa falsa, porque texto e imágenes sí pueden modelarse cuando el caso de uso lo amerita. (c) excluir toda información de pacientes despojaría justamente los atributos de los que depende un modelo de inasistencias.'
  },
  {
    id: 'cpz-dat-013', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una electrónica completó la evaluación de preparación de datos para un modelo de fraude en garantías. Los resultados de cobertura, calidad y representatividad están documentados, con dos brechas moderadas y soluciones alternativas propuestas. La metodología que sigue el proyecto exige un punto de control formal antes de que empiece cualquier gasto de preparación de datos. ¿Qué debe convocar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Una retrospectiva de sprint para que el equipo reflexione sobre el trabajo de evaluación.' },
      { id: 'b', texto: 'Una sesión de capacitación de usuarios para que los liquidadores entiendan el modelo que viene.' },
      { id: 'c', texto: 'Una demostración del proveedor de las herramientas de preparación de datos bajo consideración.' },
      { id: 'd', texto: 'Una revisión de decisión donde los interesados sopesen la evaluación y resuelvan si avanzar o detener.' }
    ],
    correctas: ['d'],
    explicacion: 'Tomar una decisión de avanzar o detener basada en la evaluación de preparación es el punto de control formal que la metodología exige, así que el director convoca una revisión donde los interesados sopesen la cobertura, la calidad, las brechas y las soluciones documentadas y resuelvan explícitamente sobre el avance. (a) una retrospectiva mejora el proceso del equipo, pero no tiene autoridad sobre el avance del proyecto. (c) una demostración de herramientas informa una compra, no el dictamen de preparación. (b) la capacitación de liquidadores corresponde mucho más adelante, cuando un modelo se acerca al despliegue.'
  },
  {
    id: 'cpz-dat-014', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de indumentaria quiere un modelo que pronostique la demanda de líneas de ropa estacionales en tiendas individuales. Al especificar los datos históricos de ventas a solicitar, el equipo sugiere un año reciente de totales mensuales de toda la empresa, porque es lo más fácil de extraer. ¿Qué debe exigir en su lugar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Totales semanales de toda la empresa del año más reciente, para agregar detalle de forma barata.' },
      { id: 'b', texto: 'Historial por tienda que abarque varios ciclos estacionales completos, con la granularidad que el pronóstico requiere.' },
      { id: 'c', texto: 'El extracto que el equipo del almacén pueda producir más rápido, para que el modelado empiece antes.' },
      { id: 'd', texto: 'Totales mensuales recientes enriquecidos con sentimiento de redes sociales sobre cada línea de ropa.' }
    ],
    correctas: ['b'],
    explicacion: 'El historial por tienda a lo largo de varios ciclos estacionales completos, con la granularidad del pronóstico, atiende los requisitos temporales y de granularidad que impone este caso de uso, porque los patrones estacionales no se aprenden de un solo año y los pronósticos por tienda no salen de agregados de toda la empresa. (a) los totales semanales corporativos son más finos en el tiempo, pero igual borran la dimensión de tienda que el pronóstico necesita. (d) agregar sentimiento social introduce una fuente nueva antes de que el historial de ventas central sea siquiera adecuado. (c) tomar el extracto más rápido optimiza la conveniencia sobre la adecuación.'
  },
  {
    id: 'cpz-dat-015', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística perdió semanas de trabajo cuando la falla de un servidor de desarrollo destruyó conjuntos de datos intermedios de su modelo de rutas, y el equipo descubrió que no existían copias en ningún otro lado. El director del proyecto de IA revisa la configuración del entorno para evitar que se repita. ¿Qué debe implantar?',
    opciones: [
      { id: 'a', texto: 'Conjuntos de datos de experimentación más pequeños, para que cualquier pérdida sea más barata de reconstruir.' },
      { id: 'b', texto: 'Un requisito de que cada integrante duplique los archivos en una unidad local.' },
      { id: 'c', texto: 'Almacenamiento del proyecto con respaldos configurados para los datos de trabajo y los conjuntos de datos.' },
      { id: 'd', texto: 'Una entrada de lecciones aprendidas que documente la pérdida para proyectos futuros.' }
    ],
    correctas: ['c'],
    explicacion: 'Configurar el almacenamiento del proyecto con respaldos es la respuesta correcta, porque coordinar el espacio de trabajo incluye montar sistemas de almacenamiento y respaldo que protejan los datos de trabajo frente a fallas del entorno. (b) exigir duplicados locales dispersa archivos sensibles en unidades no gestionadas y depende del hábito individual en lugar de la infraestructura. (a) achicar los conjuntos de experimentación reduce el costo de reconstrucción pero degrada los experimentos y sigue aceptando pérdidas repetidas. (d) una entrada de lecciones aprendidas registra la falla sin corregir la condición que la causó en este proyecto.'
  },
  {
    id: 'cpz-dat-016', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa láctea reúne historial de producción desde los sistemas de las granjas socias para un modelo de predicción de rendimiento. Las primeras extracciones corrieron en horario laboral y ralentizaron las operaciones de varios socios, y dos transferencias se detuvieron a mitad de camino sin que nadie lo notara. El director del proyecto de IA quiere que la recolección restante transcurra sin sobresaltos. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Coordinar transferencias programadas con cada dueño de la fuente hacia el entorno de desarrollo.' },
      { id: 'b', texto: 'Dejar que los modeladores consulten directamente los sistemas de los socios cuando el entrenamiento necesite datos.' },
      { id: 'c', texto: 'Pedir a los socios que envíen los archivos cuando sus horarios lo permitan.' },
      { id: 'd', texto: 'Partir los archivos en fragmentos pequeños y moverlos por correo electrónico.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar transferencias programadas con cada dueño de la fuente es lo correcto, porque reunir los datos incluye gestionar deliberadamente las transferencias y migraciones para que los sistemas de origen sigan sanos y las cargas incompletas se detecten. (b) dejar que los modeladores consulten los sistemas de los socios repite directamente la disrupción en horario laboral y acopla el entrenamiento a conexiones frágiles. (c) esperar a que los socios envíen archivos cuando les convenga produce llegadas impredecibles y cobertura despareja entre granjas. (d) mover archivos en fragmentos por correo no se gestiona, es difícil de verificar y es inapropiado para datos operativos.'
  },
  {
    id: 'cpz-dat-017', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios públicos prepara lecturas de medidores inteligentes para un modelo de anomalías de consumo. Las lecturas llegan como estructuras de eventos profundamente anidadas, mientras que el equipo de modelado espera entradas tabulares planas. El director del proyecto de IA quiere evitar sorpresas más adelante. Durante la evaluación de datos, ¿qué debe asegurar que ocurra?',
    opciones: [
      { id: 'a', texto: 'Diferir las cuestiones estructurales hasta el despliegue, cuando se defina el pipeline de producción.' },
      { id: 'b', texto: 'Revisar el esquema y la estructura de los datos ahora, para confirmar la compatibilidad con el enfoque de modelado planificado.' },
      { id: 'c', texto: 'Convertir todas las lecturas a texto plano para que cualquier tipo de modelo pueda consumirlas.' },
      { id: 'd', texto: 'Hacer que el equipo de modelado se adapte a las estructuras anidadas durante el entrenamiento, para ahorrar tiempo de preparación.' }
    ],
    correctas: ['b'],
    explicacion: 'Revisar esquema y estructura durante la evaluación confirma si los eventos anidados pueden reconvertirse a la forma tabular que el enfoque de modelado necesita, y expone el esfuerzo de transformación mientras aún hay tiempo de planificarlo. (d) pedir al equipo de modelado que se adapte durante el entrenamiento empuja un desajuste estructural conocido hacia la fase más cara para descubrir problemas. (c) convertir las lecturas a texto plano destruye la señal tipada y estructurada de la que depende el modelado de consumo. (a) diferir las cuestiones estructurales al despliegue garantiza que el desajuste se encuentre después de construir modelos sobre supuestos equivocados.'
  },
  {
    id: 'cpz-dat-018', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de seguridad recolecta reportes de incidentes de sus oficinas sucursales para un modelo de predicción de dotación. Semanas después de iniciado el modelado, el equipo descubre que muchos envíos llegaron con los campos de incidente vacíos, y ahora hay que rastrear y volver a solicitar los lotes afectados. ¿Qué práctica debe agregar el director del proyecto de IA al proceso de recolección para prevenirlo?',
    opciones: [
      { id: 'a', texto: 'Diferir las verificaciones de calidad a la fase de preparación, donde ocurre la limpieza.' },
      { id: 'b', texto: 'Hacer que los modeladores descarten los registros incompletos al armar los conjuntos de entrenamiento.' },
      { id: 'c', texto: 'Revisar la completitud de cada lote entrante a medida que se recolecta.' },
      { id: 'd', texto: 'Suspender los envíos de las sucursales hasta que cada oficina certifique su propia calidad.' }
    ],
    correctas: ['c'],
    explicacion: 'Revisar cada lote entrante mientras se recolecta es lo correcto, porque validar la completitud durante la recolección detecta los defectos cuando la fuente todavía puede consultarse y volver a extraer sale barato. (b) descartar registros incompletos al entrenar encoge y sesga el conjunto en silencio en lugar de arreglar la entrada. (d) suspender los envíos hasta que las oficinas se autocertifiquen detiene el pipeline y se apoya en las mismas sucursales que produjeron las brechas. (a) diferir todas las verificaciones a la preparación es exactamente el patrón que permitió que pasaran semanas antes de que alguien notara los campos vacíos.'
  },
  {
    id: 'cpz-dat-019', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una telecomunicaciones, el científico de datos líder informó a los ejecutivos sobre la evaluación de datos de clientes usando tasas de nulos, conteos de cardinalidad y estadísticas de asimetría. Los patrocinadores quedaron confundidos y la discusión de financiamiento se estancó. El director del proyecto de IA debe arreglar la próxima sesión informativa. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Enviar a los ejecutivos un glosario estadístico por adelantado, para que el mismo material aterrice mejor.' },
      { id: 'b', texto: 'Reformular los hallazgos en términos de negocio que conecten las condiciones de los datos con resultados y riesgos del proyecto.' },
      { id: 'c', texto: 'Reducir la sesión a un único veredicto de listo o no listo, sin detalle de respaldo.' },
      { id: 'd', texto: 'Inscribir al equipo ejecutivo en un curso de alfabetización de datos antes de la próxima presentación.' }
    ],
    correctas: ['b'],
    explicacion: 'Traducir los hallazgos técnicos a un lenguaje de negocio que ligue las condiciones de los datos con resultados y riesgos es la responsabilidad del director al comunicar la comprensión de los datos a la dirección, y permite a los patrocinadores decidir con información. (a) enviar un glosario deja la carga de traducción en la audiencia y repite el fracaso. (d) inscribir a los ejecutivos en un curso es lento, presuntuoso y aun así deja la sesión construida para la audiencia equivocada. (c) reducir todo a un veredicto escueto elimina el contexto que los líderes necesitan para sopesar compromisos y aprobar los siguientes pasos.'
  },
  {
    id: 'cpz-dat-020', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud quiere predecir inasistencias de pacientes. Existen años de registros de citas, y extraer el historial completo sobrecargaría al equipo del almacén durante meses. El cronograma del proyecto no puede absorber esa demora, pero el modelo aun así necesita aprender patrones estacionales y a nivel de clínica. ¿Qué debe indicar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Solicitar el historial completo de todos modos, porque más datos siempre mejora la exactitud.' },
      { id: 'b', texto: 'Definir un enfoque de muestreo que preserve patrones de citas representativos a un volumen manejable.' },
      { id: 'c', texto: 'Limitar la recolección al trimestre más reciente para mantener los datos frescos.' },
      { id: 'd', texto: 'Dejar que el equipo del almacén envíe el extracto que le resulte más fácil de producir.' }
    ],
    correctas: ['b'],
    explicacion: 'Determinar los requisitos de volumen y una estrategia de muestreo es parte de definir los datos requeridos, y una muestra representativa protege la señal estacional y de clínica mientras mantiene factible el esfuerzo de extracción. (a) solicitar el historial completo ignora la restricción de capacidad declarada y estanca el proyecto por una ganancia marginal. (c) un solo trimestre reciente es manejable, pero destruye los patrones estacionales que el modelo debe aprender. (d) dejar que el almacén elija el extracto más fácil entrega el requisito a la conveniencia en lugar de al caso de uso.'
  },
  {
    id: 'cpz-dat-021', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística necesita identificar quién dentro de la organización conoce a fondo cómo se calculan y registran las calificaciones de desempeño de los transportistas. El director del proyecto de IA construye un modelo que predice retrasos de transportistas, y los científicos de datos reportan que las columnas de calificación están inesperadamente dispersas. Antes de explorar más los datos, debe encontrar los contactos internos correctos. ¿Por dónde debe empezar la búsqueda?',
    opciones: [
      { id: 'a', texto: 'Los integrantes del equipo de IA que trabajaron antes en empresas de logística.' },
      { id: 'b', texto: 'El proveedor que vendió a la empresa la plataforma de gestión de transportistas.' },
      { id: 'c', texto: 'Consultores externos con experiencia general en modelado de cadena de suministro.' },
      { id: 'd', texto: 'Los custodios de datos y los equipos de gobernanza responsables del conjunto de datos de desempeño de transportistas.' }
    ],
    correctas: ['d'],
    explicacion: 'Conectar con los custodios y los equipos de gobernanza es la vía directa para encontrar a los responsables de las definiciones, la calidad y el significado de un conjunto de datos, lo que los vuelve el punto de partida correcto cuando la dispersión de un campo no se explica solo con la documentación. (b) el proveedor de la plataforma conoce el esquema de la aplicación, pero no cómo el personal de esta empresa pobló las columnas de calificación ni por qué están dispersas. (a) los integrantes con experiencia en logística aportan intuición de dominio útil, pero no conocen las prácticas de captura de esta empresa. (c) los consultores externos traen conocimiento general de modelado y no pueden explicar un historial interno de recolección.'
  },
  {
    id: 'cpz-dat-022', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una logística está obteniendo registros de despacho para un modelo de retrasos de ruta. Los registros están llenos de códigos de estado crípticos y campos cargados de abreviaturas, y los científicos de datos siguen adivinando qué significan los valores. ¿A quién debe convocar para resolverlo?',
    opciones: [
      { id: 'a', texto: 'Usuarios de negocio que trabajan a diario con los registros de despacho y saben qué significan los valores.' },
      { id: 'b', texto: 'El proveedor de software que construyó originalmente la aplicación de despacho.' },
      { id: 'c', texto: 'Un estadístico que pueda inferir el significado de cada código a partir de las frecuencias de los valores.' },
      { id: 'd', texto: 'Un consultor logístico externo que pueda comparar los códigos contra normas del sector.' }
    ],
    correctas: ['a'],
    explicacion: 'Los usuarios de negocio que manejan los registros de despacho todos los días entienden el contexto y el significado detrás de los códigos, que es precisamente la experiencia necesaria para que los científicos de datos dejen de adivinar. (d) un consultor externo puede describir normas del sector, pero no las convenciones que esta empresa incrustó realmente en sus campos. (b) el proveedor original conoce el diseño de la aplicación, pero los equipos operativos suelen reutilizar campos de maneras que el proveedor nunca documentó. (c) inferir el significado a partir de frecuencias es conjetura estadística disfrazada de análisis y puede incrustar interpretaciones erróneas en el modelo.'
  },
  {
    id: 'cpz-dat-023', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En un grupo de medios, un equipo de IA quiere entrenar un modelo de segmentación de audiencia sobre un conjunto de datos de terceros que otra área compró hace varios años para reportes de campañas. Los datos ya residen en los sistemas de la empresa. ¿Qué debe hacer el director del proyecto de IA antes de usar el conjunto?',
    opciones: [
      { id: 'a', texto: 'Proceder con el entrenamiento y atender el licenciamiento solo si el proveedor plantea una objeción.' },
      { id: 'b', texto: 'Revisar el acuerdo de licencia para confirmar que el conjunto puede usarse para entrenar modelos.' },
      { id: 'c', texto: 'Tratar el conjunto como dato interno, ya que ahora reside dentro de los sistemas de la empresa.' },
      { id: 'd', texto: 'Recomprar el conjunto con el presupuesto del proyecto para establecer una propiedad clara.' }
    ],
    correctas: ['b'],
    explicacion: 'Verificar los derechos de uso y los acuerdos de licencia es obligado antes de que datos comprados alimenten un modelo, porque las licencias suelen restringir el uso a fines específicos como el reporte y pueden no cubrir el entrenamiento en absoluto. (c) la residencia física en los sistemas de la empresa no convierte datos licenciados de terceros en datos internos irrestrictos. (a) esperar a que el proveedor objete trata una obligación de cumplimiento como opcional y expone a la organización a reclamos una vez construido el modelo. (d) recomprar gasta presupuesto sin averiguar primero si la licencia existente ya lo permite o qué condiciones necesitaría una compra nueva.'
  },
  {
    id: 'cpz-dat-024', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista construye un modelo de elasticidad de precios que consumirá grandes volúmenes de datos transaccionales. El director del proyecto de IA revisa el plan de infraestructura del equipo y encuentra que la configuración propuesta de almacenamiento y cómputo no puede manejar el volumen que el modelo requiere. La dirección del proyecto quiere avanzar rápido. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Aprovisionar recursos de cómputo y configurar almacenamiento que puedan manejar la carga real de procesamiento y entrenamiento.' },
      { id: 'b', texto: 'Indicar al equipo que empiece a trabajar sobre la infraestructura disponible y actualizarla después si el desempeño se resiente.' },
      { id: 'c', texto: 'Transferir la responsabilidad por la adecuación de la infraestructura al líder de ingeniería de datos y continuar con la programación.' },
      { id: 'd', texto: 'Reducir el conjunto de entrenamiento para que quepa en la infraestructura actual, en lugar de solicitar recursos adicionales.' }
    ],
    correctas: ['a'],
    explicacion: 'Aprovisionar recursos de cómputo y almacenamiento para el procesamiento de datos y el entrenamiento es una responsabilidad explícita de espacio de trabajo e infraestructura, así que el director debe asegurar que la configuración soporte la carga real antes de que empiece el trabajo. (b) arrancar sobre infraestructura inadecuada y actualizar después crea retrabajo cuando los trabajos fallan o producen resultados poco confiables a mitad de proyecto. (d) encoger los datos de entrenamiento para calzar con la infraestructura existente cambia calidad de modelado por conveniencia sin ninguna justificación de negocio. (c) transferir la responsabilidad no elimina el deber del director de coordinar una infraestructura adecuada.'
  },
  {
    id: 'cpz-dat-025', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora inicia un modelo de severidad de siniestros. El equipo de datos propone traer todos los datos de siniestros que existan y corregir los problemas conforme aparezcan durante la limpieza posterior. Al director del proyecto de IA le preocupa que el proyecto no tenga forma de distinguir datos aceptables de inaceptables. ¿Qué debe exigir ahora?',
    opciones: [
      { id: 'a', texto: 'La adopción sin cambios de la política genérica de calidad del equipo del almacén.' },
      { id: 'b', texto: 'Estándares de calidad que los datos de siniestros deben cumplir, definidos antes de la recolección.' },
      { id: 'c', texto: 'Un benchmark de prácticas publicadas por una aseguradora competidora.' },
      { id: 'd', texto: 'Un compromiso de limpieza exhaustiva durante la fase de preparación.' }
    ],
    correctas: ['b'],
    explicacion: 'Definir estándares de calidad antes de la recolección es lo correcto, porque los datos requeridos deben venir con estándares y umbrales explícitos que den al proyecto una base objetiva para juzgar lo que reúne. (c) las prácticas publicadas de un competidor reflejan el perfil de datos y riesgo de otra organización, no las necesidades de este modelo. (d) comprometerse a una limpieza exhaustiva más adelante acepta retrabajo ilimitado, porque nada define cuándo los datos son suficientemente buenos. (a) la política genérica del almacén se escribió para reportes generales y no codifica las tolerancias específicas del modelo de severidad.'
  },
  {
    id: 'cpz-dat-026', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una editorial, el director del proyecto de IA descubre que los analistas vienen procesando datos de suscriptores en cuentas de nube personales, porque el entorno oficial del proyecto carece de las herramientas que necesitan. El proyecto del motor de recomendación está a mitad de camino y los analistas dicen que ese apaño es la única forma de seguir siendo productivos. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Registrar el apaño en el registro de riesgos y revisarlo después de la liberación.' },
      { id: 'b', texto: 'Reembolsar las cuentas personales y documentarlas como herramientas aprobadas.' },
      { id: 'c', texto: 'Bloquear todos los servicios externos y restringir al equipo a herramientas locales.' },
      { id: 'd', texto: 'Aprovisionar un entorno sancionado con las herramientas necesarias y acceso controlado.' }
    ],
    correctas: ['d'],
    explicacion: 'Aprovisionar un entorno sancionado con las herramientas necesarias es lo correcto, porque elimina la causa del apaño y devuelve los datos de suscriptores a un acceso controlado. (b) reembolsar cuentas personales legitima un almacenamiento que la organización no puede asegurar, monitorear ni borrar. (a) registrar el apaño como riesgo deja los datos sensibles expuestos durante el resto del proyecto. (c) bloquear los servicios externos sin proveer las herramientas faltantes castiga al equipo por una brecha de infraestructura y probablemente empuje el apaño aún más a la clandestinidad.'
  },
  {
    id: 'cpz-dat-027', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'La revisión de preparación de datos de una cooperativa de crédito encontró que los campos críticos de ingreso no son confiables para la mitad de los socios. El patrocinador quiere que el desarrollo del modelo comience de todos modos, porque la fecha de arranque se anunció públicamente. El director del proyecto de IA preside el punto de control de preparación. ¿Qué debe recomendar?',
    opciones: [
      { id: 'a', texto: 'Proceder solo con la mitad de los socios cuyos campos son confiables.' },
      { id: 'b', texto: 'Bajar los criterios de éxito del proyecto para que coincidan con los datos disponibles.' },
      { id: 'c', texto: 'Comenzar el desarrollo según lo anunciado y reparar los campos de ingreso en paralelo.' },
      { id: 'd', texto: 'Un no avanzar en el punto de control hasta que la deficiencia se resuelva o se ajuste el alcance.' }
    ],
    correctas: ['d'],
    explicacion: 'Tomar la decisión de preparación sobre la evidencia es el sentido mismo del punto de control, y unos campos críticos no confiables para la mitad de los socios son una base clara para detener hasta resolver la deficiencia o ajustar formalmente el alcance. (c) empezar el desarrollo mientras se reparan los datos en paralelo construye modelos sobre entradas que se saben erróneas y desperdicia el trabajo cuando los datos cambien. (b) bajar los criterios de éxito mueve la portería en lugar de arreglar el problema que la revisión sacó a la luz. (a) proceder solo con la mitad confiable excluye en silencio a la otra mitad sin la decisión de alcance que legitimaría ese cambio.'
  },
  {
    id: 'cpz-dat-028', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios públicos evalúa datos de medidores inteligentes para un modelo de predicción de interrupciones. Los registros son limpios y están bien documentados, pero las interrupciones son eventos raros, y los científicos de datos advierten que tan pocos ejemplos podrían no sostener un modelo robusto. El director del proyecto de IA debe determinar a qué se refiere esa advertencia. ¿Qué se está cuestionando?',
    opciones: [
      { id: 'a', texto: 'La documentación de linaje de los registros de medidores.' },
      { id: 'b', texto: 'Los términos de licenciamiento bajo los cuales se adquirieron los datos de medidores.' },
      { id: 'c', texto: 'La seguridad del entorno donde se almacenan los datos de medidores.' },
      { id: 'd', texto: 'La suficiencia de los datos para entrenar un modelo confiable.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar la suficiencia de los datos para entrenar modelos robustos es la preocupación cuando los ejemplos de interrupción son escasos, porque unos datos limpios y bien documentados pueden aun así ser demasiado delgados en el evento objetivo como para que el modelo aprenda patrones confiables. (a) la documentación de linaje describe de dónde vinieron los registros, y el escenario ya dice que está en buena forma. (c) la seguridad del almacenamiento es un asunto de infraestructura y cumplimiento, ajeno a cuántos ejemplos de interrupción existen. (b) los términos de licenciamiento rigen el derecho a usar los datos, y la advertencia trata de la cantidad de eventos raros, no de derechos de uso.'
  },
  {
    id: 'cpz-dat-029', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de un programa de IA en una cadena hotelera debe mostrar a los ejecutivos que los registros de reservas están fuertemente concentrados en dos propiedades vacacionales, lo que amenaza un modelo de pronóstico de ocupación. Los ejecutivos han pasado por alto repetidamente las tablas numéricas densas en presentaciones anteriores. ¿Cuál es la forma más efectiva de comunicar el hallazgo?',
    opciones: [
      { id: 'a', texto: 'Adjuntar las estadísticas resumen por propiedad como un anexo de hoja de cálculo.' },
      { id: 'b', texto: 'Incluir la documentación completa del esquema de tablas para que los ejecutivos entiendan los campos subyacentes.' },
      { id: 'c', texto: 'Presentar una visualización simple que haga inmediatamente visible la concentración entre propiedades.' },
      { id: 'd', texto: 'Compartir las consultas de base de datos usadas, para que los ejecutivos puedan reproducir el análisis por su cuenta.' }
    ],
    correctas: ['c'],
    explicacion: 'Una visualización simple convierte el patrón de concentración en algo que los ejecutivos captan de un vistazo, y crear visualizaciones y reportes para comunicar hallazgos sobre los datos es el movimiento correcto para esta audiencia. (a) un anexo de estadísticas resumen repite el formato numérico denso que esta audiencia ya ignora. (d) compartir las consultas pide a los ejecutivos hacer trabajo analítico que corresponde al equipo del proyecto. (b) la documentación completa del esquema describe cómo están estructurados los campos, no qué significa el desbalance para el objetivo de pronóstico, así que no transmite el hallazgo en absoluto.'
  },
  {
    id: 'cpz-dat-030', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una empresa de autopartes, los científicos de datos de un proyecto de pronóstico de demanda vienen enviándose por correo conjuntos de datos y archivos de cuadernos. Dos analistas acaban de pasar días trabajando sobre copias en conflicto del mismo conjunto de entrenamiento. El director del proyecto de IA quiere frenar esta clase de problema para el resto del proyecto. ¿Qué debe disponer?',
    opciones: [
      { id: 'a', texto: 'Una regla de que solo un ingeniero pueda editar los conjuntos de datos a la vez.' },
      { id: 'b', texto: 'Un espacio de trabajo compartido con control de versiones para código y conjuntos de datos.' },
      { id: 'c', texto: 'Almacenamiento local adicional para que cada analista conserve copias completas.' },
      { id: 'd', texto: 'Una convención de nombres para que los archivos enviados por correo identifiquen claramente su revisión.' }
    ],
    correctas: ['b'],
    explicacion: 'Un espacio de trabajo compartido con control de versiones es lo correcto, porque coordinar el entorno de IA incluye montar herramientas de colaboración que den al equipo una única copia autoritativa de código y datos con los cambios registrados. (d) una convención de nombres sigue dejando archivos viajando por correo y depende de la disciplina de cada remitente. (a) restringir las ediciones a un ingeniero crea un cuello de botella sin impedir que circulen copias obsoletas. (c) más almacenamiento local empeora el problema de duplicación al alentar aún más copias privadas.'
  },
  {
    id: 'cpz-dat-031', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Se pide al director de un proyecto de IA en una cooperativa de crédito reutilizar datos de transacciones de socios para un nuevo modelo de personalización de marketing. Los datos se recolectaron originalmente para monitoreo de fraude bajo condiciones de consentimiento específicas que los socios aceptaron. El equipo de marketing quiere empezar a entrenar de inmediato. ¿Qué debe hacer el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Proceder con el entrenamiento, ya que los socios consintieron la recolección de los datos de transacciones.' },
      { id: 'b', texto: 'Verificar los derechos de uso para el nuevo propósito y evaluar el impacto en privacidad antes de que los datos entren al proyecto.' },
      { id: 'c', texto: 'Anonimizar las transacciones y proceder sobre la base de que los datos anonimizados no cargan restricciones.' },
      { id: 'd', texto: 'Obtener la firma de la directora de marketing, que es dueña de la campaña de personalización.' }
    ],
    correctas: ['b'],
    explicacion: 'El consentimiento otorgado para monitoreo de fraude no se extiende automáticamente a la personalización de marketing, así que el director debe verificar que el nuevo uso esté permitido y evaluar sus implicaciones de privacidad antes de que empiece cualquier entrenamiento. (a) tratar el consentimiento original como permiso general ignora que las obligaciones de protección de datos se atan al propósito, no solo a la posesión. (c) la anonimización puede ayudar, pero afirmar que los datos anonimizados no cargan restricción alguna es excesivo, y la decisión igual requiere una revisión deliberada de privacidad. (d) la directora de marketing es dueña de la campaña, no de la autoridad para zanjar una cuestión de uso de datos que corresponde a privacidad y cumplimiento.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpz-mod-003', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica desarrolla un modelo de predicción de interacciones farmacológicas. El director del proyecto de IA revisa el plan de aseguramiento de calidad del equipo y nota que la evaluación del modelo está programada una sola vez, al final del desarrollo. Un científico de datos senior advierte que ese enfoque podría pasar por alto problemas que se acumulan entre iteraciones. ¿Qué debe hacer el director para atender esa preocupación?',
    opciones: [
      { id: 'a', texto: 'Contratar un auditor externo para que evalúe el modelo una vez entregada la versión final.' },
      { id: 'b', texto: 'Pedir a los científicos de datos que escriban comentarios más detallados en su código para documentar el avance.' },
      { id: 'c', texto: 'Introducir monitoreo periódico del desempeño del modelo en puntos de control definidos a lo largo del ciclo de desarrollo.' },
      { id: 'd', texto: 'Mover todo el trabajo de evaluación al final del proyecto, para no interrumpir el flujo del equipo de ciencia de datos.' }
    ],
    correctas: ['c'],
    explicacion: 'Introducir monitoreo periódico en puntos de control a lo largo del desarrollo permite al equipo detectar temprano los problemas que se componen y corregir el rumbo antes de que salgan caros. (d) diferir toda la evaluación al final significa que las incidencias se acumulan sin detectarse, que es exactamente el riesgo que describió el científico senior. (a) contratar un auditor externo al final es un complemento útil, pero no cierra la brecha de monitoreo dentro del desarrollo. (b) los comentarios detallados mejoran la documentación, pero no constituyen el monitoreo de desempeño necesario para detectar problemas de calidad durante la iteración.'
  },
  {
    id: 'cpz-mod-004', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa láctea tiene un conjunto de datos modesto para predecir caídas en la producción de leche. El equipo compara modelos candidatos usando una única división fija de registros de entrenamiento y prueba, pero el orden de los candidatos cambia cada vez que alguien vuelve a dividir los datos. ¿Qué debe hacer adoptar al equipo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Una regla de que la división original es definitiva, para que los órdenes dejen de cambiar.' },
      { id: 'b', texto: 'Un acuerdo de seleccionar el candidato que gane la mayoría de las redivisiones informales.' },
      { id: 'c', texto: 'Una porción mayor de registros asignada a la parte de prueba.' },
      { id: 'd', texto: 'Validación cruzada que evalúe cada candidato sobre múltiples particiones rotadas de los datos.' }
    ],
    correctas: ['d'],
    explicacion: 'La validación cruzada rota qué registros sirven como datos de entrenamiento y de evaluación entre varias particiones y promedia los resultados, lo que produce comparaciones estables sobre conjuntos modestos, y supervisar ese proceso de selección es parte de gestionar el entrenamiento. (a) declarar definitiva la división original esconde la inestabilidad sin eliminarla, porque el orden congelado refleja una partición arbitraria. (c) agrandar la porción de prueba reduce aún más los datos de entrenamiento, lo que suele volver más volátiles los resultados en un conjunto pequeño. (b) elegir al ganador de redivisiones informales aproxima la idea correcta sin la estructura, la repetibilidad ni la documentación de un procedimiento gestionado.'
  },
  {
    id: 'cpz-mod-005', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística prepara su modelo de predicción de retrasos de embarque para la evaluación final previa a la operacionalización. El director del proyecto convoca una revisión de preparación y encuentra que el modelo cumple sus objetivos de desempeño, pero quedan dos pendientes: el modelo no se ha evaluado con datos del trimestre más reciente, y el equipo operativo aún no ha recibido la documentación de supuestos y limitaciones. ¿Cómo debe manejar la decisión de preparación?',
    opciones: [
      { id: 'a', texto: 'Emitir una decisión condicional de avance que permita un despliegue limitado mientras se resuelven los pendientes.' },
      { id: 'b', texto: 'Emitir una decisión de no avanzar y exigir evaluación sobre datos actuales y entrega de la documentación de supuestos antes de aprobar.' },
      { id: 'c', texto: 'Diferir la decisión indefinidamente hasta que el modelo se reentrene con todos los datos históricos.' },
      { id: 'd', texto: 'Aprobar la operacionalización de inmediato, ya que los objetivos centrales de desempeño están cumplidos.' }
    ],
    correctas: ['b'],
    explicacion: 'Verificar la preparación del modelo para una decisión de avance o detención exige evaluar la robustez y la generalización y validar la documentación y los procedimientos operativos: la generalización no probada sobre datos recientes es una brecha de robustez, y la documentación faltante incumple la validación de procedimientos, así que ambas justifican un no avanzar. (a) un avance condicional igual pone en producción, aunque limitada, un modelo de vigencia no verificada. (d) aprobar solo por objetivos de desempeño ignora el requisito explícito de validar documentación y generalización. (c) diferir indefinidamente a la espera de un reentrenamiento histórico completo es desproporcionado: las brechas son puntuales y resolubles.'
  },
  {
    id: 'cpz-mod-006', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo de un modelo de abandono en una editorial ha producido decenas de corridas de entrenamiento. Los resultados viven en hojas de cálculo personales dispersas y nadie puede decir qué versión del conjunto de datos produjo qué modelo. Un auditor pregunta ahora cómo se construyó el modelo campeón actual. ¿Qué capacidad debe implantar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Seguimiento de experimentos que vincule cada corrida con su versión de conjunto de datos, configuraciones y resultados.' },
      { id: 'b', texto: 'Una hoja de cálculo consolidada donde todos los integrantes registren resultados de ahora en adelante.' },
      { id: 'c', texto: 'Una serie de entrevistas retrospectivas para reconstruir la historia del modelo campeón.' },
      { id: 'd', texto: 'Una política de borrar los modelos superados para reducir la confusión.' }
    ],
    correctas: ['a'],
    explicacion: 'Gestionar el versionado de los datos de entrenamiento y el seguimiento de experimentos crea un registro sistemático que liga cada corrida con la versión exacta del conjunto, la configuración y los resultados, lo que responde al auditor hoy y previene la misma brecha mañana. (b) una hoja consolidada centraliza entradas manuales pero sigue dependiendo de la disciplina y omite el linaje del conjunto de datos. (d) borrar los modelos superados destruye historia, lo contrario de lo que exige una auditoría. (c) las entrevistas pueden reconstruir parcialmente la historia del campeón desde la memoria, pero producen respuestas no verificables y ninguna capacidad permanente.'
  },
  {
    id: 'cpz-mod-007', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica usa aprendizaje supervisado para predecir riesgos de interacción farmacológica. El director del proyecto de IA revisa el proceso de selección del algoritmo y nota que el equipo de ciencia de datos eligió su algoritmo preferido sin evaluar alternativas ni documentar por qué se consideraron y descartaron otros enfoques. Los criterios de éxito del proyecto incluyen un alto grado de interpretabilidad, porque los reguladores revisarán las salidas. ¿Qué debe exigir el director?',
    opciones: [
      { id: 'a', texto: 'Indicar al equipo que cambie al algoritmo más complejo disponible para maximizar el desempeño predictivo bruto.' },
      { id: 'b', texto: 'Exigir que el equipo documente la evaluación de los algoritmos candidatos frente al requisito de interpretabilidad del proyecto y produzca una justificación de la decisión antes de continuar.' },
      { id: 'c', texto: 'Agendar una presentación de un proveedor de servicios algorítmicos comerciales y decidir la selección según el costo de licenciamiento.' },
      { id: 'd', texto: 'Aceptar la elección del equipo, ya que son los expertos técnicos y la interpretabilidad puede agregarse como paso posterior.' }
    ],
    correctas: ['b'],
    explicacion: 'Supervisar la selección de técnica incluye revisar los criterios de selección y la documentación de la decisión, y cuando la interpretabilidad es un criterio de éxito explícito ligado a la revisión regulatoria, el proceso debe evaluar a los candidatos contra ese criterio y dejar registrada la justificación. (d) aceptar una elección sin documentar difiere un requisito de rendición de cuentas del proyecto hacia una preferencia informal del equipo. (a) maximizar el desempeño bruto eligiendo el algoritmo más complejo choca de frente con el requisito de interpretabilidad y es un compromiso no evaluado. (c) seleccionar por costo de licenciamiento ignora los criterios técnicos y regulatorios propios de la definición de éxito de este proyecto.'
  },
  {
    id: 'cpz-mod-008', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una transportista construye un modelo para predecir retrasos de embarque. El director del proyecto de IA descubre que cada científico de datos limpia los datos crudos de seguimiento de forma distinta en cuadernos personales, de modo que los resultados cambian según quién preparó los datos esa semana. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Recolectar datos crudos adicionales, para que la limpieza inconsistente influya menos en los resultados.' },
      { id: 'b', texto: 'Establecer un flujo de preprocesamiento documentado que cada integrante ejecute bajo control de versiones.' },
      { id: 'c', texto: 'Asignar toda la limpieza de datos a un único científico de datos para mantener consistentes los métodos.' },
      { id: 'd', texto: 'Posponer las decisiones de limpieza hasta que los errores del modelo revelen qué pasos importan.' }
    ],
    correctas: ['b'],
    explicacion: 'Un flujo de preprocesamiento compartido y bajo control de versiones vuelve consistente y reproducible cada transformación, que es exactamente lo que el director debe asegurar al supervisar la limpieza de datos. (c) centralizar toda la limpieza en una persona crea un cuello de botella y un punto único de falla, y sigue dejando los pasos sin documentar. (d) esperar a que los errores del modelo revelen los problemas deja que defectos de calidad evitables contaminen el entrenamiento y sale caro deshacerlos. (a) agregar más datos crudos no arregla transformaciones inconsistentes: solo empuja más volumen a través de ellas.'
  },
  {
    id: 'cpz-mod-009', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una alimentaria quiere predecir qué embarques de productos frescos se echarán a perder en tránsito. La empresa conserva varios años de registros de embarque en los que cada incidente de deterioro fue marcado por los inspectores a la llegada. El equipo pregunta al director del proyecto de IA qué enfoque de aprendizaje calza con este problema. ¿Hacia qué debe guiarlos?',
    opciones: [
      { id: 'a', texto: 'Un motor de reglas que codifique la lista de verificación de deterioro de los inspectores.' },
      { id: 'b', texto: 'Aprendizaje por refuerzo que mejore por ensayo y error durante el tránsito.' },
      { id: 'c', texto: 'Aprendizaje no supervisado que agrupe los embarques por similitud.' },
      { id: 'd', texto: 'Aprendizaje supervisado entrenado sobre los resultados de deterioro marcados históricamente.' }
    ],
    correctas: ['d'],
    explicacion: 'Años de embarques con resultados de deterioro marcados por inspectores son ejemplos etiquetados, que es precisamente el escenario donde el aprendizaje supervisado destaca para predecir un objetivo conocido. (c) el agrupamiento no supervisado encuentra estructura sin usar las banderas de resultado, y desperdicia la señal más valiosa que la empresa posee. (b) el aprendizaje por refuerzo aprende de retroalimentación interactiva sobre acciones, y dejar que los embarques se echen a perder como ensayo y error no es ni práctico ni necesario cuando ya existe el historial. (a) un motor de reglas codifica juicio humano fijo y no puede descubrir los patrones estadísticos más sutiles que contiene el historial etiquetado.'
  },
  {
    id: 'cpz-mod-010', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una robótica entrena un modelo de visión para detectar defectos de manufactura. Un tipo de defecto crítico para la seguridad aparece en muy pocas fotografías, y capturar más ejemplos reales tomaría meses en la línea de producción. El director del proyecto de IA debe mantener el proyecto en marcha sin debilitar la cobertura de ese defecto. ¿Qué debe supervisar?',
    opciones: [
      { id: 'a', texto: 'Bajar el umbral de reporte del modelo para el tipo de defecto raro.' },
      { id: 'b', texto: 'Duplicar las imágenes raras existentes hasta que todas las clases tengan el mismo tamaño.' },
      { id: 'c', texto: 'Sacar la clase de defecto raro del alcance hasta acumular más fotografías.' },
      { id: 'd', texto: 'Generar ejemplos de entrenamiento variados transformando sistemáticamente las imágenes existentes del defecto raro.' }
    ],
    correctas: ['d'],
    explicacion: 'El aumento de datos crea versiones sistemáticamente variadas de las imágenes escasas —rotaciones, recortes, cambios de iluminación—, lo que expande la clase rara con diversidad realista para que el modelo pueda aprenderla, y supervisar ese aumento es una responsabilidad explícita de preparación. (c) sacar del alcance la clase crítica para la seguridad abandona el requisito de negocio en lugar de atender la brecha de datos. (b) duplicar imágenes idénticas no agrega información nueva y estimula al modelo a memorizar esas fotos exactas. (a) bajar el umbral de reporte cambia el comportamiento de alerta después del entrenamiento y no ayuda en nada a que el modelo aprenda la apariencia del defecto.'
  },
  {
    id: 'cpz-mod-011', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una fabricante de componentes desarrolla un modelo de inspección de calidad con datos de imagen de una línea de producción. Durante una revisión de proyecto, el director del proyecto de IA se entera de que el equipo de ingeniería de datos viene ejecutando pasos de extracción de variables que no están documentados y varían levemente en cada corrida por ajustes manuales. Por eso el entrenamiento posterior no puede reproducirse de forma confiable. ¿Qué debe hacer el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Indicar al equipo de ingeniería de datos que estandarice y documente los pasos de extracción de variables, para que el pipeline produzca salidas consistentes y reproducibles.' },
      { id: 'b', texto: 'Aceptar la variación como una forma de aumento de datos que mejora la robustez del modelo.' },
      { id: 'c', texto: 'Pedir al equipo de modelado que reentrene desde los datos crudos cada vez, para evitar la dependencia de un pipeline fijo.' },
      { id: 'd', texto: 'Reasignar el trabajo de ingeniería de variables al equipo de modelado, para que controle ambos pasos.' }
    ],
    correctas: ['a'],
    explicacion: 'Gestionar la transformación de datos incluye asegurar la reproducibilidad y la documentación, y estandarizar y documentar el pipeline de extracción resuelve directamente el problema de reproducibilidad. (c) reentrenar desde datos crudos cada vez no corrige los pasos de extracción inconsistentes y aumenta el costo computacional sin atender la causa raíz. (b) tratar una variación manual no documentada como aumento intencional caracteriza mal una inconsistencia aleatoria como técnica deliberada y oscurece el comportamiento del pipeline. (d) reasignar el trabajo cambia la propiedad, pero no garantiza que los pasos queden documentados ni consistentes.'
  },
  {
    id: 'cpz-mod-012', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica entrena un modelo para clasificar secuencias de proteínas. El equipo de ciencia de datos lleva varias semanas iterando y ahora tiene cuatro arquitecturas candidatas, cada una con perfiles distintos de precisión, exhaustividad y velocidad de inferencia. El equipo pide al director del proyecto de IA ayuda para priorizar qué arquitectura seguir. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Pedir al equipo de ciencia de datos que presente el análisis documentado de compromisos frente a los criterios de éxito definidos del proyecto, antes de tomar una selección.' },
      { id: 'b', texto: 'Elegir la arquitectura con la velocidad de inferencia más rápida para asegurar el desempeño en producción.' },
      { id: 'c', texto: 'Delegar la decisión por completo al científico de datos líder, porque las elecciones de arquitectura quedan fuera del alcance del director.' },
      { id: 'd', texto: 'Seleccionar la arquitectura con el mayor puntaje de exactitud global, por ser la medida más objetiva.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar con los científicos de datos las decisiones de arquitectura y revisar los criterios de selección contra los criterios de éxito documentados es una responsabilidad clave del director: antes de elegir, el equipo debe evaluar cada candidato frente a las métricas de desempeño predefinidas y a las prioridades de compromiso. (d) seleccionar por exactitud global ignora los compromisos de precisión, exhaustividad y velocidad de inferencia que pueden ser críticos para el caso de uso. (c) delegar por completo al científico líder abdica del rol de supervisión. (b) elegir la inferencia más rápida sin evaluarla contra los criterios de éxito puede sacrificar exactitud necesaria para una aplicación biotecnológica.'
  },
  {
    id: 'cpz-mod-013', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística construye un modelo de pronóstico de demanda de carga. Tras varias corridas de entrenamiento, el equipo de ciencia de datos reporta que el modelo se desempeña muy bien sobre los datos de entrenamiento pero pobremente sobre el conjunto de validación. El director del programa de IA sospecha que el modelo aprendió patrones específicos de los datos de entrenamiento que no se sostienen en general. ¿Qué acción de gestión del entrenamiento debe coordinar primero?',
    opciones: [
      { id: 'a', texto: 'Pedir a los científicos de datos que revisen manualmente cada registro de entrenamiento en busca de errores.' },
      { id: 'b', texto: 'Aumentar el tamaño del conjunto de entrenamiento agregando todos los registros históricos disponibles sin filtrar.' },
      { id: 'c', texto: 'Reemplazar de inmediato la arquitectura completa del modelo antes de hacer ningún análisis adicional.' },
      { id: 'd', texto: 'Coordinar actividades de ajuste y optimización de hiperparámetros para atacar la brecha entre el desempeño de entrenamiento y el de validación.' }
    ],
    correctas: ['d'],
    explicacion: 'Coordinar el ajuste y la optimización de hiperparámetros es la respuesta de gestión apropiada cuando el desempeño de entrenamiento es alto y el de validación bajo, porque ajustar parámetros como la fuerza de regularización ataca directamente la brecha de generalización. (b) agregar todos los registros históricos sin filtrar puede empeorar el problema si los datos extra contienen ruido o patrones irrelevantes. (c) reemplazar la arquitectura completa antes de analizar la configuración actual se salta el paso de optimización e introduce riesgo innecesario. (a) revisar manualmente cada registro es una actividad de calidad de datos, no la respuesta de gestión del entrenamiento ante un problema de generalización causado por una configuración sobreajustada.'
  },
  {
    id: 'cpz-mod-014', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística entrena un modelo de predicción de retrasos de embarque. El equipo de ciencia de datos informa que las corridas de entrenamiento están tomando mucho más de lo planeado y que algunas se han abandonado a mitad de camino por contención de recursos con otros equipos que comparten el mismo entorno de cómputo. El director del proyecto de IA necesita resolver la situación para mantener el proyecto en marcha. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Pedir al equipo de ciencia de datos que reduzca la complejidad del modelo para que el entrenamiento termine dentro de los recursos disponibles.' },
      { id: 'b', texto: 'Planificar los calendarios de entrenamiento y la asignación de recursos para asegurar capacidad de cómputo dedicada a las corridas de desarrollo.' },
      { id: 'c', texto: 'Indicar al equipo que entrene solo en horas de baja demanda y documentar todas las corridas abandonadas.' },
      { id: 'd', texto: 'Solicitar que la dirección adquiera hardware adicional antes de intentar nuevas corridas de entrenamiento.' }
    ],
    correctas: ['b'],
    explicacion: 'Planificar los calendarios de entrenamiento y la asignación de recursos es una responsabilidad central del director al gestionar el entrenamiento, y establecer un plan que reserve capacidad dedicada resuelve la contención a nivel de programación sin obligar al equipo a comprometer la arquitectura ni a esperar un ciclo de compras. (a) reducir la complejidad para caber en recursos disputados puede degradar la calidad del modelo y no ataca la causa raíz de programación. (c) restringir las corridas a horas de baja demanda es un apaño parcial que deja al equipo dependiente de capacidad compartida. (d) pedir hardware nuevo antes de cualquier entrenamiento introduce una demora de adquisición injustificada si la programación puede resolver la contención.'
  },
  {
    id: 'cpz-mod-015', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa de crédito selecciona un enfoque de modelado para decisiones de préstamo. Los reguladores exigen que la cooperativa explique a cada solicitante rechazado las razones detrás de la decisión. Un ensamble complejo puntúa levemente mejor en pruebas que un modelo más simple cuyas decisiones son fáciles de rastrear. ¿Cómo debe guiar la selección el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Delegar la elección a los científicos de datos como un asunto puramente técnico.' },
      { id: 'b', texto: 'Correr ambos modelos y reportar la salida que beneficie al solicitante.' },
      { id: 'c', texto: 'Favorecer el modelo cuyas decisiones pueden explicarse con claridad, pese a la modesta brecha de desempeño.' },
      { id: 'd', texto: 'Elegir el ensamble, porque el desempeño es el criterio principal de selección.' }
    ],
    correctas: ['c'],
    explicacion: 'Sopesar los compromisos entre complejidad, desempeño e interpretabilidad es responsabilidad del director en la selección de técnica, y un deber regulatorio de explicar cada rechazo convierte la interpretabilidad en la restricción vinculante que una pequeña ventaja de desempeño no puede superar. (d) elegir el ensamble solo por desempeño deja a la cooperativa sin poder dar las explicaciones que exigen los reguladores. (b) correr ambos modelos y elegir salidas caso por caso crea un proceso de decisión inconsistente y no auditable. (a) delegar por completo a los científicos de datos trata como preferencia técnica lo que es un compromiso de negocio impulsado por el cumplimiento.'
  },
  {
    id: 'cpz-mod-016', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de análisis desarrolla un modelo de predicción de abandono para un servicio por suscripción. El director del proyecto de IA supervisa la etapa de preparación de datos y nota que el equipo planea usar la edad del cliente como variable entera cruda junto a variables de ingreso ya normalizadas. No se ha aplicado ninguna estandarización a la variable de edad. El equipo de modelado advierte que esa inconsistencia podría afectar la convergencia. ¿Qué debe coordinar el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Reemplazar la variable de edad por una etiqueta categórica por rangos sin consultar al equipo de ciencia de datos.' },
      { id: 'b', texto: 'Eliminar por completo la variable de edad del modelo para evitar el problema.' },
      { id: 'c', texto: 'Coordinar un paso de normalización o estandarización para la variable de edad, de modo que todas las variables queden en una escala consistente antes del entrenamiento.' },
      { id: 'd', texto: 'Indicar al equipo que proceda y corrija el problema de escala después de la primera corrida si la exactitud queda por debajo del objetivo.' }
    ],
    correctas: ['c'],
    explicacion: 'Gestionar los procesos de normalización y estandarización es parte de la transformación de datos, y coordinar un paso de estandarización para la edad atiende la inconsistencia de escala que el equipo señaló como riesgo de convergencia. (b) eliminar la variable por completo sacrifica señal potencialmente útil sin evaluar si la normalización resuelve la preocupación. (d) proceder y corregir después de una corrida fallida desperdicia cómputo y demora un problema evitable. (a) reemplazar la variable por rangos categóricos es una decisión de ingeniería de variables que cambia la estructura de la información y debe tomarse por un proceso coordinado y documentado, no por directiva unilateral.'
  },
  {
    id: 'cpz-mod-017', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El modelo de recomendación de una minorista se desarrolla en iteraciones de un mes, y las métricas de evaluación se calculan solo al final de cada iteración. Dos veces ya el equipo descubrió tarde que un cambio a mitad de iteración degradó silenciosamente los resultados, lo que forzó retrabajo doloroso. ¿Qué debe cambiar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Monitorear las métricas de evaluación de forma continua, para que el efecto de cada cambio sea visible en cuanto ocurre.' },
      { id: 'b', texto: 'Restringir los cambios a mitad de iteración a los aprobados por el director del proyecto.' },
      { id: 'c', texto: 'Agregar una semana de revisión en busca de regresiones al final de cada iteración.' },
      { id: 'd', texto: 'Acortar las iteraciones, para que la evaluación de fin de iteración ocurra más seguido.' }
    ],
    correctas: ['a'],
    explicacion: 'Monitorear el desempeño del modelo a lo largo del desarrollo significa medir después de cada cambio, lo que vuelve inmediatamente visible el cambio culpable y elimina el punto ciego de un mes. (d) acortar las iteraciones estrecha la ventana, pero conserva el mismo patrón de descubrir la degradación solo en una frontera. (b) encauzar los cambios por aprobación del director agrega control de acceso sin medición, y el director no puede prever por inspección el impacto de un cambio sobre las métricas. (c) una semana dedicada a revisión institucionaliza el descubrimiento tardío y agrega costo de cronograma en lugar de eliminar la demora.'
  },
  {
    id: 'cpz-mod-018', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un distrito escolar tiene un modelo de buen desempeño que marca estudiantes en riesgo de rezagarse. En la revisión de preparación, el director del proyecto de IA encuentra que no hay manual operativo para el personal que operará el sistema, ninguna descripción de cómo funciona el modelo y ningún procedimiento para manejar salidas cuestionables. ¿Qué debe concluir el director?',
    opciones: [
      { id: 'a', texto: 'La decisión debe pasar al equipo de operaciones, ya que las brechas son suyas para cerrar.' },
      { id: 'b', texto: 'Las brechas son aceptables, porque los materiales operativos pueden escribirse una vez que el sistema esté en vivo.' },
      { id: 'c', texto: 'El modelo no está listo, porque la documentación y los procedimientos operativos deben validarse antes de aprobar.' },
      { id: 'd', texto: 'El modelo está listo, porque el desempeño es el factor decisivo en este punto de control.' }
    ],
    correctas: ['c'],
    explicacion: 'Validar la documentación del modelo y los procedimientos operativos es un elemento explícito de la verificación de preparación, así que la ausencia de manuales, descripciones del modelo y procedimientos de excepción significa que la solución todavía no puede aprobarse. (b) escribir los materiales operativos después de la puesta en marcha deja al personal operando un sistema que afecta a estudiantes sin ninguna guía en su periodo más riesgoso. (d) tratar el desempeño como único factor decisivo ignora que este punto de control examina el cuadro operativo completo. (a) pasar la decisión al equipo de operaciones abdica de la responsabilidad de aprobación que corresponde al proyecto en esta compuerta.'
  },
  {
    id: 'cpz-mod-019', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de un proyecto de IA en una red de salud supervisa un proyecto de resumen de notas clínicas. El equipo de ciencia de datos propone crear ejemplos de entrenamiento adicionales aplicando paráfrasis y retrotraducción a las notas etiquetadas existentes, porque el conjunto etiquetado original es pequeño. El director debe asegurar que ese enfoque se supervise correctamente y que sus salidas queden documentadas. ¿Qué actividad representa esto?',
    opciones: [
      { id: 'a', texto: 'Virtualización de datos, que abstrae el acceso a datos almacenados en múltiples sistemas fuente.' },
      { id: 'b', texto: 'Normalización de datos, que estandariza rangos numéricos para mejorar la convergencia del modelo.' },
      { id: 'c', texto: 'Aumento de datos, que expande el conjunto de entrenamiento generando variaciones de ejemplos etiquetados existentes.' },
      { id: 'd', texto: 'Ingeniería de variables, que extrae nuevas señales predictivas de los campos crudos existentes.' }
    ],
    correctas: ['c'],
    explicacion: 'El aumento de datos expande un conjunto de entrenamiento generando variaciones de ejemplos etiquetados existentes —como texto parafraseado o retrotraducido— para atender un conjunto etiquetado pequeño, y el papel del director es supervisar que el proceso sea reproducible y quede documentado. (d) la ingeniería de variables extrae variables predictivas nuevas de campos crudos, no crea instancias de entrenamiento nuevas. (b) la normalización estandariza rangos numéricos y no es relevante para generar ejemplos de texto. (a) la virtualización abstrae el acceso a fuentes distribuidas y es una actividad de infraestructura, no una técnica de expansión de datos de entrenamiento.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpz-ope-002', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una energética despliega un modelo de mantenimiento predictivo en su red de activos de campo. A mitad del despliegue, el equipo de seguridad informática advierte que el punto de acceso del modelo es alcanzable sin autenticación, lo que significa que las tabletas de los técnicos podrían ser suplantadas por cualquier dispositivo de la red de planta. Al cronograma de despliegue le quedan dos semanas. ¿Cómo debe manejarlo el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Transferir la propiedad del problema de seguridad al área de TI y reanudar el cronograma de despliegue.' },
      { id: 'b', texto: 'Continuar el despliegue y agregar autenticación en el próximo ciclo de liberación planificado.' },
      { id: 'c', texto: 'Aceptar el riesgo por escrito y señalar que la red de planta ya está protegida por firewall.' },
      { id: 'd', texto: 'Detener toda activación adicional, remediar la brecha de control de acceso y revalidar antes de continuar.' }
    ],
    correctas: ['d'],
    explicacion: 'Detener la activación y cerrar la brecha de autenticación antes de desplegar más activos evita que una exposición conocida quede incrustada en una huella mayor, lo que volvería la remediación mucho más compleja y cara. (b) diferir la corrección al próximo ciclo arrastra el riesgo sobre los activos ya activados y suma otros nuevos en el mismo estado desprotegido. (c) aceptar el riesgo argumentando el firewall confunde controles de red con autenticación a nivel de aplicación, que son protecciones independientes. (a) asignar el hallazgo a TI mientras el despliegue continúa separa la rendición de cuentas de la toma de decisiones y deja al director sin visibilidad sobre si la brecha se cerró.'
  },
  {
    id: 'cpz-ope-003', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de software transfiere un modelo de triaje de mesa de ayuda a su equipo de operaciones de TI. El director del proyecto de IA nota que ninguno de los tres integrantes asignados a mantener el modelo ha trabajado antes con sistemas de IA. La transición está programada para la próxima semana. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Proceder con la transición según lo agendado y que el personal de operaciones aprenda sobre la marcha.' },
      { id: 'b', texto: 'Desarrollar y entregar capacitación dirigida sobre los procedimientos operativos del modelo antes de completar la transición.' },
      { id: 'c', texto: 'Reasignar el mantenimiento del modelo al equipo de ciencia de datos en lugar de completar el traspaso.' },
      { id: 'd', texto: 'Posponer la transición indefinidamente hasta que el equipo de operaciones contrate personal con experiencia en IA.' }
    ],
    correctas: ['b'],
    explicacion: 'Desarrollar y entregar capacitación dirigida antes de completar la transición es correcto porque crear documentación de traspaso y materiales de capacitación es un componente explícito de gestionar el plan de transición, y proceder sin eso dejaría al equipo de operaciones incapaz de soportar el modelo. (a) avanzar según el calendario sin capacitación transfiere riesgo al equipo de operaciones y al negocio. (d) posponer indefinidamente no es necesario cuando la brecha es de capacitación y puede cerrarse antes o durante la transición. (c) reasignar a ciencia de datos anula el propósito de un traspaso a producción y mantiene la operación del modelo dentro de un equipo diseñado para desarrollar, no para operar.'
  },
  {
    id: 'cpz-ope-004', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un banco usa un modelo de IA para puntuar solicitudes de crédito de consumo en tiempo real. El director de operaciones pregunta al director del proyecto de IA qué ocurrirá con el procesamiento de préstamos si el servicio de puntuación queda no disponible por un periodo prolongado. Hoy no hay nada documentado. ¿Qué debe establecer el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Un proceso de respaldo documentado para que las decisiones de crédito continúen durante una interrupción del servicio.' },
      { id: 'b', texto: 'Un objetivo de disponibilidad más alto en el acuerdo con el proveedor de alojamiento.' },
      { id: 'c', texto: 'Monitoreo adicional para que las caídas del servicio de puntuación se detecten antes.' },
      { id: 'd', texto: 'Una segunda copia del modelo desplegada en el mismo entorno de producción.' }
    ],
    correctas: ['a'],
    explicacion: 'Un proceso de respaldo documentado mantiene el negocio crediticio funcionando cuando el servicio de IA está caído, que es el corazón de la planificación de continuidad para una solución operativa. (b) un objetivo de disponibilidad más exigente traslada el riesgo contractual, pero no dice a los oficiales de crédito qué hacer durante una interrupción real. (c) detectar antes las caídas acorta el tiempo hasta enterarse, pero sigue sin dejar forma de procesar solicitudes. (d) un modelo duplicado en el mismo entorno comparte los mismos modos de falla, así que una disrupción de nivel de entorno tumba ambas copias a la vez.'
  },
  {
    id: 'cpz-ope-005', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una constructora transfiere un modelo de estimación de costos de proyecto recién desplegado desde el equipo de implementación al departamento de operaciones. El director del proyecto de IA finaliza el plan de transición. El líder de operaciones pregunta quién será responsable de aprobar las actualizaciones del modelo una vez cerrado el proyecto. ¿Qué debe definir el director antes de completar la transición?',
    opciones: [
      { id: 'a', texto: 'Exigir que todas las actualizaciones futuras del modelo pasen por el comité directivo original del proyecto.' },
      { id: 'b', texto: 'Transferir permanentemente todas las responsabilidades de actualización al equipo de ciencia de datos.' },
      { id: 'c', texto: 'Diferir la cuestión de la autoridad de aprobación hasta que se necesite la primera actualización en producción.' },
      { id: 'd', texto: 'Definir roles y responsabilidades para la fase operativa, incluido quién es dueño de las aprobaciones de actualización del modelo.' }
    ],
    correctas: ['d'],
    explicacion: 'Definir roles y responsabilidades para la fase operativa, incluida la autoridad de aprobación de actualizaciones, es un elemento requerido del plan de transición, porque una propiedad ambigua crea vacíos de gobernanza que derivan en cambios no autorizados o actualizaciones omitidas. (c) diferir hasta que haga falta la primera actualización deja un vacío de gobernanza durante el periodo operativo temprano, que es el más crítico. (b) transferir toda la responsabilidad a ciencia de datos sin una estructura formal saca la supervisión de negocio y de gestión de proyectos de los cambios del modelo. (a) exigir que todas las actualizaciones pasen por el comité directivo original es impracticable una vez cerrado el proyecto y disuelto ese órgano.'
  },
  {
    id: 'cpz-ope-006', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una pesquera opera un servicio de pronóstico de demanda cuyo monitoreo de disponibilidad muestra verde incluso cuando un feed de volumen de captura aguas arriba queda obsoleto. Durante el último incidente el servicio siguió devolviendo números plausibles construidos sobre entradas desactualizadas, y los compradores actuaron sobre ellos durante días. ¿Qué debe agregar el director del proyecto de IA al régimen de monitoreo?',
    opciones: [
      { id: 'a', texto: 'Un arreglo de alojamiento redundante para que el servicio sobreviva a caídas de infraestructura.' },
      { id: 'b', texto: 'Una reunión semanal donde los compradores confirmen que los pronósticos les parecen razonables.' },
      { id: 'c', texto: 'Verificaciones automáticas de frescura y validez de los feeds de datos entrantes, con alertas.' },
      { id: 'd', texto: 'Un objetivo de disponibilidad ampliado para el propio servicio de pronóstico.' }
    ],
    correctas: ['c'],
    explicacion: 'Las verificaciones automáticas de frescura y validez sobre los feeds de entrada, con alertas, capturan el modo de falla silencioso en el que el servicio permanece técnicamente arriba mientras consume datos rancios, que es lo que perjudicó a los compradores. (a) el alojamiento redundante atiende caídas de infraestructura, pero el servicio nunca se cayó en este incidente. (b) una revisión intuitiva semanal es subjetiva y demasiado lenta cuando números erróneos circulan durante días. (d) subir el objetivo de disponibilidad refuerza una métrica que estuvo en verde durante toda la falla, así que mide exactamente lo equivocado.'
  },
  {
    id: 'cpz-ope-007', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una naviera de cruceros cierra un proyecto de personalización de itinerarios. El primer borrador de la sección de mejoras del documento de cierre contiene entradas como comunicar mejor y empezar antes el trabajo con datos. Al director del proyecto de IA le preocupa que esas frases no ayuden al próximo equipo de IA. ¿Cómo debe revisarse la sección de mejoras?',
    opciones: [
      { id: 'a', texto: 'Reescribir cada entrada como un hallazgo específico con contexto, causa y una práctica recomendada concreta.' },
      { id: 'b', texto: 'Reemplazar las entradas por un enlace a una encuesta, para que los equipos futuros pregunten directamente.' },
      { id: 'c', texto: 'Eliminar la sección, ya que el proyecto terminó siendo exitoso en general.' },
      { id: 'd', texto: 'Mover las entradas a un archivo confidencial revisado solo por la oficina de proyectos.' }
    ],
    correctas: ['a'],
    explicacion: 'Los aprendizajes solo se transfieren cuando son lo bastante específicos para actuar sobre ellos, así que cada entrada debe describir qué pasó, por qué pasó y qué debería hacer distinto un equipo futuro, convirtiendo consignas vagas en guía utilizable. (c) borrar la sección porque el proyecto tuvo éxito descarta justamente la experiencia que lo hizo funcionar y la fricción que otros podrían evitar. (b) un enlace a encuesta asume que los integrantes que ya se fueron seguirán disponibles y recordarán los detalles, cosa que rara vez ocurre. (d) restringir los hallazgos a un archivo confidencial de la oficina de proyectos bloquea a los profesionales que más los necesitan.'
  },
  {
    id: 'cpz-ope-008', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera usa un modelo de mantenimiento predictivo sobre sus equipos de producción. El director del proyecto de IA diseña el enfoque de monitoreo operativo. El equipo de ciencia de datos recomienda revisar el desempeño del modelo trimestralmente. El gerente de operaciones prefiere alertas en tiempo real ante cualquier anomalía de predicción. ¿Qué enfoque debe implementar el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Monitorear solo cuando ocurran eventos de mantenimiento y comparar retrospectivamente las predicciones con los resultados reales.' },
      { id: 'b', texto: 'Implementar alertas en tiempo real ante superación de umbrales junto con análisis periódico de tendencias de desempeño.' },
      { id: 'c', texto: 'Delegar el diseño del monitoreo por completo al gerente de operaciones, ya que es dueño del equipamiento.' },
      { id: 'd', texto: 'Seguir la recomendación del equipo de ciencia de datos y programar únicamente revisiones trimestrales de desempeño.' }
    ],
    correctas: ['b'],
    explicacion: 'Implementar alertas en tiempo real ante superación de umbrales junto con análisis periódico de tendencias combina las fortalezas de ambos aportes: las alertas capturan de inmediato las fallas agudas, mientras el análisis periódico sigue la degradación gradual y la deriva del modelo a lo largo del tiempo. (d) apoyarse solo en revisiones trimestrales pierde anomalías rápidas que podrían provocar fallas costosas de equipo. (c) delegar el diseño completo al gerente de operaciones saca al director de una responsabilidad central de operacionalización. (a) monitorear solo cuando ocurren eventos de mantenimiento es reactivo y no cumple el requisito de gobernanza de supervisión proactiva del desempeño.'
  },
  {
    id: 'cpz-ope-009', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minera opera un sistema de IA que guía camiones de acarreo autónomos. Durante una falla reciente, los ingenieros de sitio debatieron durante horas quién tenía autoridad para detener el sistema mientras los camiones seguían operando con una guía defectuosa. La producción se reanudó con seguridad, pero el director del programa de IA debe evitar que se repita. ¿Qué debe definir?',
    opciones: [
      { id: 'a', texto: 'Una ruta de escalamiento que nombre quién decide y actúa cuando surgen incidencias críticas.' },
      { id: 'b', texto: 'Un apagado automático que se dispare cada vez que alguna salida del modelo luzca inusual.' },
      { id: 'c', texto: 'Una regla de que cualquier ingeniero pueda detener el sistema a criterio personal.' },
      { id: 'd', texto: 'Una reunión semanal de operaciones donde se planteen las preocupaciones no resueltas del sistema.' }
    ],
    correctas: ['a'],
    explicacion: 'Una ruta de escalamiento que nombre la autoridad de decisión para incidencias críticas elimina la vacilación que mantuvo activa la guía defectuosa, y ese es el propósito de definir procedimientos de escalamiento dentro de un marco de contingencia de IA. (c) dejar que cualquier ingeniero detenga el sistema a discreción invita a intervenciones inconsistentes y contradictorias en una operación crítica para la seguridad. (d) una reunión semanal opera en una escala de tiempo por completo equivocada para una falla activa. (b) un apagado automático ante cualquier salida inusual detendría la producción constantemente por anomalías benignas y aun así no resolvería quién decide en los casos ambiguos.'
  },
  {
    id: 'cpz-ope-010', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena hotelera completó un proyecto de IA que pronostica necesidades estacionales de personal en sus complejos. El director del proyecto prepara la presentación de cierre para el equipo ejecutivo, cuya mayoría no tiene formación en ciencia de datos. ¿Cómo debe presentar los resultados del proyecto?',
    opciones: [
      { id: 'a', texto: 'Limitar la presentación a una única cifra destacada de exactitud, para mantenerla simple.' },
      { id: 'b', texto: 'Recorrer las métricas de evaluación técnica en el orden en que se midieron.' },
      { id: 'c', texto: 'Traducir el desempeño del modelo en resultados de negocio ligados a los objetivos originales.' },
      { id: 'd', texto: 'Hacer que el científico de datos líder explique en detalle la arquitectura del modelo.' }
    ],
    correctas: ['c'],
    explicacion: 'Traducir el desempeño del modelo en resultados de negocio conectados con los objetivos originales permite a una audiencia ejecutiva no técnica juzgar el valor que el proyecto entregó, que es el propósito de una presentación de cierre. (b) recorrer métricas técnicas en orden de medición entierra la historia de negocio en un detalle sobre el que la audiencia no puede actuar. (d) una explicación profunda de arquitectura sirve a pares de ingeniería, no a ejecutivos que deciden inversiones futuras. (a) reducir todo a una cifra de exactitud elimina el impacto operativo y financiero que la dirección realmente necesita ver.'
  },
  {
    id: 'cpz-ope-011', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de medios desplegó un modelo de etiquetado de contenido que un grupo interno de operaciones pasará a operar día a día. Durante el cierre del proyecto, el líder de operaciones se queja de que la única documentación disponible es una presentación de la exposición ejecutiva. ¿Qué debe producir el director del proyecto de IA antes de liberar al equipo del proyecto?',
    opciones: [
      { id: 'a', texto: 'Un archivo de los registros crudos de experimentos exportados del entorno de desarrollo.' },
      { id: 'b', texto: 'Documentación operativa que explique cómo ejecutar y mantener la solución.' },
      { id: 'c', texto: 'Una versión más larga de la presentación ejecutiva con anexos técnicos agregados.' },
      { id: 'd', texto: 'Una lista de contactos de exintegrantes del equipo del proyecto a quienes llamar cuando surjan dudas.' }
    ],
    correctas: ['b'],
    explicacion: 'Producir documentación operativa que explique cómo ejecutar y mantener la solución equipa al grupo receptor para sostener el sistema por su cuenta, que es el propósito de la transferencia de conocimiento en el cierre. (a) los registros crudos de experimentos recogen la historia del desarrollo, pero no le dicen a un operador qué hacer en producción. (c) ampliar la presentación ejecutiva sigue encuadrando el contenido para la dirección y no para quienes operan el sistema. (d) una lista de contactos crea dependencia de personas que ya se movieron a otro trabajo y que pueden dejar la empresa.'
  },
  {
    id: 'cpz-ope-012', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa deportiva lanza un sistema de pronóstico de inventario con IA. El director del programa completó el plan de despliegue y coordina la puesta en marcha con tres equipos de TI distintos. El día del despliegue, un equipo informa que un servicio de integración del que se depende no está disponible. El director debe decidir cómo proceder. ¿Qué acción refleja mejor una gestión de despliegue sólida?',
    opciones: [
      { id: 'a', texto: 'Revertir de inmediato sin consultar al patrocinador del proyecto ni a los dueños de negocio afectados.' },
      { id: 'b', texto: 'Reprogramar el despliegue completo al trimestre siguiente para permitir que el problema de integración se resuelva por completo.' },
      { id: 'c', texto: 'Detener el despliegue, invocar la ruta de escalamiento documentada y evaluar si un despliegue parcial sin la integración es aceptable.' },
      { id: 'd', texto: 'Proceder con el despliegue completo y documentar la brecha de integración como un defecto posterior al lanzamiento.' }
    ],
    correctas: ['c'],
    explicacion: 'Detener el despliegue e invocar la ruta de escalamiento permite una decisión estructurada y documentada sobre si un despliegue parcial es seguro, que es el rol de coordinación del director. (d) proceder con el despliegue completo pese a una falla de integración conocida expone al negocio a defectos de producción sin consentimiento de los interesados. (a) revertir de inmediato sin consultar sortea el proceso de gobernanza. (b) reprogramar al trimestre siguiente es una respuesta desproporcionada antes de que se entienda el alcance del problema.'
  },
  {
    id: 'cpz-ope-013', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una financiera construye su primer plan de despliegue de una solución de IA para un modelo de puntuación de riesgo crediticio. El equipo de infraestructura quiere pasar a producción plena en todas las oficinas regionales durante un solo fin de semana, para minimizar la ventana de transición. El director del proyecto de IA revisa el plan. ¿Qué debe recomendar en su lugar?',
    opciones: [
      { id: 'a', texto: 'Reemplazar el despliegue por un lanzamiento controlado a un entorno limitado primero, y expandir tras la validación.' },
      { id: 'b', texto: 'Correr el nuevo modelo en paralelo con la planilla de puntuación existente durante una tarde.' },
      { id: 'c', texto: 'Aceptar el plan de un solo fin de semana, ya que reduce el periodo total de transición.' },
      { id: 'd', texto: 'Retrasar el despliegue indefinidamente hasta contratar un equipo de plataforma separado.' }
    ],
    correctas: ['a'],
    explicacion: 'Un lanzamiento controlado a un entorno limitado antes de la expansión plena da al equipo la oportunidad de sacar a la luz defectos, brechas de desempeño e incidencias de integración sin exponer simultáneamente a todas las oficinas regionales a un problema. (c) aceptar el barrido de un fin de semana trata un despliegue de producción novedoso como de bajo riesgo antes de que ninguna evidencia sostenga ese supuesto. (d) contratar un equipo separado antes de proceder introduce demora sin atender el riesgo técnico del lanzamiento. (b) una sola tarde de operación paralela es demasiado breve para observar comportamiento significativo de producción a través de escenarios crediticios variados.'
  },
  {
    id: 'cpz-ope-014', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un grupo de medios opera un sistema de moderación de contenido con IA construido y operado inicialmente por un proveedor externo especializado. El contrato termina en cuatro meses, y el director del programa debe planificar la transición a un equipo interno de operaciones que nunca ha gestionado un sistema de IA. Identifica que el equipo interno carece de procedimientos documentados y de claridad de roles. ¿Qué elemento del plan de transición debe priorizar?',
    opciones: [
      { id: 'a', texto: 'Reemplazar el modelo externo por un sistema más simple basado en reglas que el equipo interno pueda gestionar sin conocimiento especializado de IA.' },
      { id: 'b', texto: 'Reclutar un especialista en operaciones de IA antes de finalizar los roles y responsabilidades del plan de transición.' },
      { id: 'c', texto: 'Negociar una extensión del contrato con el proveedor para obtener seis meses adicionales de soporte.' },
      { id: 'd', texto: 'Definir roles y responsabilidades claros para el equipo interno, cubriendo la operación diaria, el escalamiento y la coordinación de actualizaciones del modelo.' }
    ],
    correctas: ['d'],
    explicacion: 'Definir roles y responsabilidades claros para el equipo interno es el paso fundacional de la planificación de transición, porque establece quién es dueño de cada función operativa antes de que termine la relación con el proveedor; sin claridad de roles, otros elementos como capacitación y documentación no pueden asignarse con eficacia. (c) negociar una extensión es un paliativo que demora en lugar de resolver la brecha de capacidad. (a) reemplazar el modelo por un sistema de reglas es una decisión arquitectónica mayor muy fuera del mandato de planificar la transición. (b) esperar a completar los roles hasta después de reclutar arriesga que el plan quede incompleto cuando venza el contrato.'
  },
  {
    id: 'cpz-ope-015', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una financiera desplegó un modelo de puntuación de riesgo crediticio hace ocho meses. El director del proyecto debe producir un informe trimestral de desempeño para el comité ejecutivo. Las métricas de exactitud del modelo están dentro de límites aceptables, pero el equipo ha observado un estrechamiento gradual de las distribuciones de puntaje a lo largo del tiempo. ¿Qué debe incluir el informe además del resumen estándar de exactitud?',
    opciones: [
      { id: 'a', texto: 'Un análisis de las tendencias de distribución de puntajes y sus potenciales implicaciones de negocio, junto al resumen de exactitud.' },
      { id: 'b', texto: 'Una recomendación de reemplazar el modelo por una arquitectura más nueva antes de que la tendencia empeore.' },
      { id: 'c', texto: 'Una comparación del desempeño de este modelo contra los benchmarks publicados por instituciones competidoras.' },
      { id: 'd', texto: 'Solo las métricas de exactitud, ya que están dentro de los límites y los ejecutivos no necesitan detalle técnico.' }
    ],
    correctas: ['a'],
    explicacion: 'Incluir un análisis de las tendencias de distribución de puntajes y sus implicaciones de negocio da a los ejecutivos el cuadro completo para decisiones de gobernanza informadas, porque un estrechamiento de las distribuciones puede indicar deriva del modelo o cambio en los datos aun cuando la exactitud agregada siga siendo aceptable. (d) reportar solo las métricas de exactitud cuando se ha observado una tendencia estructural incumple el requisito de transparencia de una supervisión responsable de IA. (b) recomendar el reemplazo antes de diagnosticar convierte una observación de monitoreo en una decisión de negocio prematura. (c) comparar contra benchmarks de competidores no es relevante para el informe interno de gobernanza y puede no ser factible ni significativo dados contextos de datos distintos.'
  },
  {
    id: 'cpz-ope-016', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica desplegó un asistente de revisión de literatura con IA que resume documentos de ensayos clínicos. El equipo de cumplimiento solicita al director del proyecto documentación que muestre qué versión del modelo está actualmente en producción, cuándo se desplegó y qué cambios se hicieron desde la versión anterior. ¿A qué debe recurrir el director del proyecto para satisfacer esa solicitud?',
    opciones: [
      { id: 'a', texto: 'Las notas internas de seguimiento de experimentos del equipo de ciencia de datos durante la fase de entrenamiento.' },
      { id: 'b', texto: 'El informe de pruebas de aceptación de usuario producido antes de la puesta en marcha.' },
      { id: 'c', texto: 'El documento original de caso de negocio presentado antes de que el proyecto comenzara.' },
      { id: 'd', texto: 'Los registros de versionado del modelo y el log de control de cambios mantenidos desde el despliegue.' }
    ],
    correctas: ['d'],
    explicacion: 'Los registros de versionado y el log de control de cambios son la fuente autorizada para solicitudes de cumplimiento sobre qué versión está en producción, sus fechas de despliegue y el historial de cambios, porque la gobernanza del modelo exige mantener esos registros como parte de la gestión del ciclo de vida. (c) el caso de negocio original antecede al despliegue y no refleja el historial de versiones ni los cambios posteriores a la puesta en marcha. (a) las notas internas de experimentos del entrenamiento son artefactos de desarrollo, no registros de gobernanza operativa. (b) el informe de pruebas de aceptación cubre la validación previa al despliegue, no el historial continuo de versiones y cambios que solicita cumplimiento.'
  },
  {
    id: 'cpz-ope-017', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una energética usa un modelo de IA para pronosticar la demanda eléctrica del día siguiente. La calidad del pronóstico afecta directamente decisiones costosas de compra, y el director del proyecto de IA se entera de que un pronóstico degradado podría no notarse hasta que un analista compile el informe mensual. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Un informe mensual más detallado, con desgloses adicionales de desempeño.' },
      { id: 'b', texto: 'Una tasa de refresco más rápida para los tableros de desempeño existentes.' },
      { id: 'c', texto: 'Una solicitud de que los analistas revisen el tablero cuando tengan tiempo.' },
      { id: 'd', texto: 'Alertas automáticas que se disparen cuando el desempeño cruce umbrales definidos.' }
    ],
    correctas: ['d'],
    explicacion: 'Las alertas automáticas ante superación de umbrales sacan a la luz la degradación en cuanto ocurre, en sintonía con la cadencia diaria de las decisiones de compra que el pronóstico impulsa. (a) un informe mensual más detallado mejora la profundidad pero conserva la misma demora de detección de un mes. (c) pedir a los analistas que revisen el tablero cuando puedan hace depender la detección de la carga de trabajo y del azar. (b) refrescar los tableros más rápido actualiza la pantalla, pero alguien tiene que estar mirando en el momento justo para que el problema se note.'
  },
  {
    id: 'cpz-ope-018', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística opera desde hace seis meses una herramienta de optimización de rutas con IA. El director del programa recibe un tablero semanal con la eficiencia media de rutas y el ahorro de combustible, pero el patrocinador ejecutivo pide evidencia de que el sistema sigue rindiendo al nivel proyectado en la justificación económica. El tablero no incluye datos de tendencia ni alertas de umbral. ¿Qué debe hacer el director del programa para atender la preocupación del patrocinador?',
    opciones: [
      { id: 'a', texto: 'Solicitar que el equipo de ciencia de datos reentrene el modelo para restaurar los niveles de desempeño del caso de negocio.' },
      { id: 'b', texto: 'Mejorar la configuración de monitoreo para incluir análisis de tendencias y alertas ligadas a los umbrales de éxito del caso de negocio.' },
      { id: 'c', texto: 'Enviar al patrocinador los registros crudos de desempeño del modelo de los últimos seis meses.' },
      { id: 'd', texto: 'Realizar una revisión manual única de rutas y presentar los hallazgos en el próximo comité directivo.' }
    ],
    correctas: ['b'],
    explicacion: 'Mejorar el monitoreo con análisis de tendencias y alertas de umbral atiende directamente la brecha de supervisión que el patrocinador identificó y se alinea con la responsabilidad del director de implementar sistemas de alerta ante superación de umbrales de desempeño. (c) enviar registros crudos no traduce la salida técnica en evidencia relevante para el negocio. (d) una revisión manual única no es sostenible ni produce la visibilidad continua que el patrocinador necesita. (a) solicitar un reentrenamiento presume degradación antes de que se haya hecho ningún análisis de tendencia.'
  },
  {
    id: 'cpz-ope-019', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica planifica el despliegue de un modelo de selección de sitios para ensayos clínicos. El equipo de ciencia de datos construyó todo en un entorno aislado de investigación, y el director del proyecto de IA se entera de que el entorno de producción corre controles de seguridad e interfaces de integración distintos. El despliegue está agendado para el trimestre siguiente. ¿Qué debe hacer ahora el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Involucrar ahora a los equipos de TI para planificar las necesidades de infraestructura y el trabajo de integración.' },
      { id: 'b', texto: 'Indicar que producción se reconstruya para replicar exactamente el entorno de investigación.' },
      { id: 'c', texto: 'Proceder según lo agendado y atender las diferencias de entorno después de la liberación.' },
      { id: 'd', texto: 'Hacer que el equipo de ciencia de datos gestione por sí mismo el entorno de producción.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar con TI durante la planificación del despliegue saca a la luz los requisitos de infraestructura y el trabajo de integración con tiempo suficiente para resolverlos antes de la liberación agendada, que es precisamente para lo que existe un plan de despliegue. (d) entregar la responsabilidad de producción al equipo de ciencia de datos pone al personal de investigación a cargo de la seguridad y las operaciones empresariales que no está equipado para manejar. (b) reconstruir producción a imagen de un entorno de investigación debilitaría controles que existen por buenas razones en una industria regulada. (c) desplegar primero y conciliar las diferencias después invita a fallas de integración y brechas de seguridad en un sistema en vivo.'
  },
  {
    id: 'cpz-ope-020', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una agrícola usa un modelo de pronóstico de rendimiento de cultivos para guiar las decisiones de siembra de sus productores contratados. Durante una revisión anual, el director del proyecto de IA advierte que el plan de respuesta a incidentes del modelo se escribió antes de que la solución se extendiera para cubrir dos tipos de cultivo adicionales incorporados la temporada pasada, y que el plan sigue describiendo solo los dos cultivos originales. ¿Qué acción debe tomar?',
    opciones: [
      { id: 'a', texto: 'Retirar el plan de contingencia, ya que la solución es madura y los incidentes son raros.' },
      { id: 'b', texto: 'Quitar del plan los tipos de cultivo más antiguos para simplificarlo al equipo de operaciones.' },
      { id: 'c', texto: 'Actualizar el plan de contingencia para reflejar el alcance ampliado y confirmar la cobertura de los cultivos adicionales.' },
      { id: 'd', texto: 'Mantener el plan existente, ya que los pasos centrales de respuesta a incidentes son los mismos con independencia del tipo de cultivo.' }
    ],
    correctas: ['c'],
    explicacion: 'Cuando el alcance de una solución de IA se amplía, el plan de contingencia debe revisarse para cubrir las nuevas capacidades y asegurar que los procedimientos de respuesta sean exactos para cada caso de uso que el modelo soporta ahora. (d) apoyarse en que los pasos centrales son similares ignora que los dos cultivos nuevos pueden tener fuentes de datos, interesados o patrones de falla distintos que requieren acciones específicas. (b) quitar los cultivos originales reduciría la cobertura en lugar de extenderla y dejaría a esos productores sin procedimientos documentados. (a) retirar el plan porque los incidentes han sido raros elimina un mecanismo de seguridad que es más valioso precisamente porque rara vez ha hecho falta.'
  },
  {
    id: 'cpz-ope-021', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios en la nube opera un modelo de predicción de abandono de clientes en su división de software empresarial. Seis meses después del despliegue, la revisión de gobernanza del modelo revela que la versión actualmente en producción es distinta de la que superó la compuerta final de evaluación, y no existe documentación de cuándo ni por qué se hizo el cambio. ¿Cuál es la acción inmediata correcta?',
    opciones: [
      { id: 'a', texto: 'Investigar cuándo y cómo ocurrió el cambio de versión no autorizado e implementar procedimientos de control de cambios para prevenir su recurrencia.' },
      { id: 'b', texto: 'Aceptar la versión actual en producción, ya que viene operando sin incidentes reportados.' },
      { id: 'c', texto: 'Descomisionar el modelo actual de producción y reiniciar el proceso de desarrollo desde el principio.' },
      { id: 'd', texto: 'Revertir de inmediato a la versión que superó la compuerta de evaluación, sin mayor investigación.' }
    ],
    correctas: ['a'],
    explicacion: 'Investigar el cambio de versión no autorizado e implementar control de cambios es la respuesta correcta, porque la gobernanza del modelo exige tanto versionado como procesos de control de cambios, y un reemplazo de versión sin documentar es una falla de gobernanza que requiere análisis de causa raíz y corrección sistémica, no solo una reversión. (b) aceptar la versión actual sin investigar normaliza la brecha de gobernanza y deja abierto el vacío de control. (d) revertir de inmediato sin investigar puede no ser apropiado si la versión actual rinde mejor, y revertir sin entender introduce riesgo nuevo: la investigación debe preceder a esa decisión. (c) descomisionar y reiniciar el desarrollo es desproporcionado frente a lo que es fundamentalmente una falla de control de proceso, no del modelo.'
  },
  {
    id: 'cpz-res-019', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de artículos para exteriores pilotea un asistente conversacional de IA para sus representantes de ventas en campo. Durante una revisión del piloto, un líder de ventas pregunta por qué el asistente a veces da respuestas distintas a preguntas que parecen idénticas. El director del programa debe atender esa inquietud sin revelar detalles propietarios del modelo, pero de una forma que satisfaga las expectativas de transparencia de los interesados. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Escalar al proveedor que soporta el modelo y esperar un análisis técnico formal de causa raíz.' },
      { id: 'b', texto: 'Establecer un estándar de explicabilidad que defina cómo se comunicará a los interesados de negocio la variabilidad de las respuestas del asistente.' },
      { id: 'c', texto: 'Explicar al líder de ventas que la variabilidad es una propiedad normal de los modelos de lenguaje probabilísticos y recomendar descartar la inquietud.' },
      { id: 'd', texto: 'Indicar al equipo de ciencia de datos que reduzca el parámetro de temperatura del modelo para eliminar la variabilidad de las respuestas.' }
    ],
    correctas: ['b'],
    explicacion: 'Establecer requisitos de explicabilidad para la comunicación con interesados significa definir cómo se transmitirá el comportamiento del modelo, incluida su variabilidad, a usuarios de negocio en términos que entiendan. (c) descartar la inquietud como normalidad técnica incumple la expectativa de transparencia de la que el director es responsable. (d) reducir el parámetro de temperatura es un cambio de configuración técnica que restringe la creatividad, pero puede no cerrar la brecha de comprensión de los interesados, y además elude la obligación de transparencia. (a) escalar al proveedor difiere la responsabilidad de comunicación con los interesados en lugar de cumplirla.'
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA3: PREGUNTAS_CPMAI_EXTRA3 };
