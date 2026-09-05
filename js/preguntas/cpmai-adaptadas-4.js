/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 4.
 *
 * Escenarios y opciones son traducción adaptada de las 120 capturas aportadas
 * por el autor del repositorio el 2026-09-05. Las explicaciones se conservan
 * traducidas para el repaso. Se mantiene separado del banco propio.
 */

const PREGUNTAS_CPMAI_EXTRA4 = [
  {
    id: 'cp4-001', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics está desarrollando un modelo de riesgo de lesiones para los atletas. El director del proyecto de IA está revisando el plan de preprocesamiento de datos y descubre que el plan exige eliminar todos los registros de los atletas menores de cierta edad porque esos registros contienen más valores faltantes. Un experto en el campo advierte que los atletas más jóvenes tienen un perfil de riesgo de lesiones distinto y que eliminar sus registros haría que el modelo no fuera confiable para ese grupo. ¿Qué preocupación sobre la calidad de los datos debe garantizar el director del proyecto que se evalúe en la revisión de avance o detención?",
    opciones: [
      { id: 'a', texto: "Si los registros eliminados exceden un umbral de almacenamiento que afectaría los costos de licencia de la base de datos" },
      { id: 'b', texto: "Si el equipo de ciencia de datos tiene la habilidad técnica para imputar valores faltantes para los récords de los atletas más jóvenes." },
      { id: 'c', texto: "Si la exclusión de los atletas más jóvenes crea una brecha de representatividad que hace que el modelo no pueda atender de manera confiable a la población de usuarios prevista." },
      { id: 'd', texto: "Si la advertencia del experto en el dominio se ha documentado en el acta de la reunión como referencia" }
    ],
    correctas: ['c'],
    explicacion: "Evaluar la representatividad de los datos para los casos de uso objetivo es un elemento central de la revisión de avance o detención de la preparación de los datos; excluir una subpoblación con un perfil de riesgo distinto crea una brecha que significa que el modelo no puede usarse de manera confiable para ese grupo, lo cual es una condición descalificante de ir o no si el modelo está destinado a servir a todos los atletas. Los umbrales de almacenamiento y los costos de licencia son factores operativos no relacionados con la preocupación por la representatividad. Si el equipo puede imputar valores faltantes es un \"enfoque de posible remediación\", la responsabilidad inmediata del gerente de proyecto de IA es evaluar la brecha de representatividad en sí antes de decidir si la imputación es el camino correcto. Documentar la advertencia del experto en las actas de la reunión es una buena práctica, pero no constituye la evaluación de representatividad requerida para la decisión de avance o detención."
  },
  {
    id: 'cp4-002', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor está operando un modelo de previsión de la demanda de la cadena de suministro. Una propuesta regulatoria reciente en un mercado clave requeriría que las empresas que utilizan pronósticos automatizados en las decisiones de la cadena de suministro documenten que sus modelos han sido probados para detectar impactos discriminatorios en los proveedores. Se solicita al director del programa de IA que responda al borrador de la propuesta durante un período de comentarios públicos. ¿Qué acción refleja la respuesta adecuada del director del programa?",
    opciones: [
      { id: 'a', texto: "Envíe un comentario oponiéndose a la regulación porque los modelos de cadena de suministro no toman decisiones sobre personas protegidas." },
      { id: 'b', texto: "Esperar a que se finalice el reglamento antes de tomar cualquier medida para evitar actuar sobre un borrador que pueda cambiar." },
      { id: 'c', texto: "Realice un seguimiento del requisito propuesto, evalúe cómo se aplica al modelo de pronóstico y asegúrese de que el programa pueda demostrar su cumplimiento si se finaliza la regulación." },
      { id: 'd', texto: "Solicitar al equipo legal que busque una exención para la IA de la cadena de suministro del requisito propuesto" }
    ],
    correctas: ['c'],
    explicacion: "Seguir la evolución de las regulaciones de IA y los estándares de la industria, y evaluar cómo se aplican al sistema de IA específico, es responsabilidad del gerente del programa incluso durante el período de comentarios, de modo que el programa esté preparado para cumplir si la regulación entra en vigencia. Oponerse a la regulación sobre la base de una caracterización que puede no ser válida es una postura legal y de defensa, no una acción de gestión de cumplimiento. Esperar la finalización antes de evaluar el impacto puede no dejar suficiente tiempo para implementar los cambios requeridos. Buscar una exención es una estrategia legal que puede ser apropiada en algunos casos, pero no cumple con los requisitos. Es responsabilidad del director del programa evaluar y prepararse para el cumplimiento."
  },
  {
    id: 'cp4-003', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Kilnford Pottery financió un sistema de inteligencia artificial para predecir defectos de encendido del horno, lo que justificó ante los ejecutivos la reducción de los gastos de retrabajo. El líder de ciencia de datos propone informar el rendimiento del proyecto simplemente como ganancias en la precisión del modelo, ya que la precisión es objetiva y fácil de rastrear. El patrocinador pregunta al director del proyecto de IA cómo sabrá realmente la empresa que la inversión ha dado sus frutos. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Aplazar cualquier medición de retorno hasta que el sistema haya estado funcionando en producción por un tiempo" },
      { id: 'b', texto: "Informe los hitos de entrega, como la finalización a tiempo, como prueba de devolución." },
      { id: 'c', texto: "Adoptar mejoras en la precisión como principal medida de retorno porque son objetivas." },
      { id: 'd', texto: "Definir medidas que traduzcan el efecto del sistema en resultados financieros, como gastos de retrabajo evitados." }
    ],
    correctas: ['d'],
    explicacion: "La inversión se justificó por la reducción de los gastos de retrabajo, por lo que el rendimiento debe medirse en resultados financieros en los que se basó la decisión de financiación, como el costo de retrabajo evitado atribuible al sistema. Las ganancias en precisión son un indicador técnico que puede mejorar sin producir ningún beneficio financiero, por lo que no pueden considerarse por sí solas como medida de retorno. Esperar hasta que el sistema haya funcionado en producción deja al proyecto sin un enfoque de medición acordado e invita a disputas sobre lo que se considera éxito. Los hitos de entrega muestran que el proyecto finalizó a tiempo, no que generó valor comercial."
  },
  {
    id: 'cp4-004', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Holloway Transit Authority está diseñando un sistema de IA para predecir la llegada de autobuses. Los registros de acceso de los pasajeros están en una plataforma, las ubicaciones de los vehículos llegan desde otra y las predicciones deben alcanzar la aplicación pública instantes después de cada registro. Hasta ahora, el documento de diseño solo menciona el concepto del modelo. ¿Qué debería añadir a continuación el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Un resumen de las quejas de los usuarios sobre los autobuses abarrotados" },
      { id: 'b', texto: "Cómo se mueven los datos desde cada fuente a través del procesamiento hacia la aplicación" },
      { id: 'c', texto: "Un cuadro de personal para el futuro equipo de operaciones" },
      { id: 'd', texto: "Un glosario de terminología de IA para lectores ejecutivos" }
    ],
    correctas: ['b'],
    explicacion: "Describir cómo se mueven los datos desde cada fuente a través del procesamiento hacia la aplicación define el flujo de datos y los requisitos de procesamiento, que este diseño necesita con urgencia dadas dos plataformas de origen separadas y una expectativa de entrega casi inmediata. Un cuadro de personal para operaciones pertenece a la planificación de recursos posterior, no al borrador de la solución. Un glosario ayuda a la legibilidad pero no añade sustancia al diseño. Un resumen de queja reafirma el problema que el proyecto ya aceptó en lugar de avanzar en la solución. La definición de los requisitos de procesamiento y flujo de datos es un elemento específico en la redacción de la solución de IA."
  },
  {
    id: 'cp4-005', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El gerente de proyectos de inteligencia artificial de Vanguard Financial Services está preparando un modelo de detección de fraude para una cartera de tarjetas de crédito. El modelo procesará datos de transacciones con tarjetas que incluyen la ubicación del cliente, la categoría del comerciante y la velocidad de gasto. Un regulador ha solicitado evidencia de que los datos personales utilizados para la capacitación están protegidos en tránsito y en reposo. ¿Cuál es el siguiente paso más apropiado para el director de proyectos de IA?",
    opciones: [
      { id: 'a', texto: "Documentar los estándares de cifrado y las políticas de acceso aplicadas al conjunto de datos de capacitación y presentarlos al regulador." },
      { id: 'b', texto: "Solicite al equipo de infraestructura que parchee todos los servidores antes de programar la reunión de revisión regulatoria." },
      { id: 'c', texto: "Limite el acceso al modelo únicamente al equipo de análisis de fraude después de la implementación." },
      { id: 'd', texto: "Reemplace los datos de transacciones reales con registros totalmente sintéticos para que no se incluyan datos personales en la capacitación." }
    ],
    correctas: ['a'],
    explicacion: "Documentar los estándares de cifrado y las políticas de acceso aplicadas a los datos de capacitación responde directamente a la solicitud del regulador al proporcionar evidencia de controles protectores sobre los datos personales en tránsito y en reposo. Reemplazar datos reales con registros sintéticos es una decisión estratégica de datos, no una respuesta a una solicitud de evidencia de controles, y puede no reflejar el proceso de capacitación real. Aplicar parches a los servidores es una acción de infraestructura que no está relacionada con la demostración del cumplimiento de la protección de datos. Restringir el acceso al modelo posterior a la implementación aborda el acceso en el tiempo de inferencia, pero no aborda la preocupación del regulador sobre la protección de los datos de capacitación."
  },
  {
    id: 'cp4-006', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "La evaluación de datos de Penhallow Bank para un modelo de incumplimiento de préstamos está completa. Los hallazgos respaldan el procedimiento, pero solo si banco primero corrige los registros de verificación de ingresos inconsistentes en dos productos crediticios. El gerente del proyecto de IA está preparando la presentación de liderazgo. ¿En qué debería centrarse la presentación?",
    opciones: [
      { id: 'a', texto: "El estado de preparación de los datos y una recomendación que vincula la corrección con la decisión de proceder." },
      { id: 'b', texto: "Una comparación de bancos competidores que ya han implementado modelos de incumplimiento" },
      { id: 'c', texto: "La metodología técnica que utilizaron los analistas para detectar los registros inconsistentes" },
      { id: 'd', texto: "La hoja de ruta de las actividades de desarrollo del modelo planificadas después de la preparación de los datos." }
    ],
    correctas: ['a'],
    explicacion: "El propósito de esta sesión es presentar el estado de preparación de los datos y las recomendaciones a las partes interesadas, por lo que el centro de la presentación es el veredicto de preparación y la recomendación de que el procedimiento depende de la corrección de los registros de verificación de ingresos. La metodología de detección respalda los detalles de un apéndice, no las decisiones que necesita el liderazgo del contenido. Las comparaciones con la competencia hablan de estrategia, pero no dicen nada sobre si se leen los datos de banco%. La hoja de ruta de desarrollo del modelo supone la decisión de proceder que esta misma presentación pretende informar."
  },
  {
    id: 'cp4-007', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sablecrest Apparel está describiendo una solución de inteligencia artificial propuesta que predice las devoluciones relacionadas con el tamaño antes de enviar los pedidos. El esquema nombra el enfoque de modelado y los objetivos de predicción, pero los revisores no pueden decir dónde se originan los datos de entrada, cómo se procesan o cómo llegan las predicciones al equipo de cumplimiento. ¿Qué debería añadir el director del proyecto de IA al esquema?",
    opciones: [
      { id: 'a', texto: "Una nota que indica que los detalles del manejo de datos se resolverán durante el desarrollo." },
      { id: 'b', texto: "Una definición de cómo los datos se mueven desde los sistemas de origen a través del procesamiento hasta los equipos consumidores." },
      { id: 'c', texto: "Una lista de los científicos de datos que construirán el modelo." },
      { id: 'd', texto: "Una comparación de proveedores de hosting para la carga de trabajo de predicción" }
    ],
    correctas: ['b'],
    explicacion: "Un esquema de solución tiene que mostrar el movimiento de datos de un extremo a otro, desde los sistemas de pedidos y devoluciones que los suministran, pasando por el procesamiento que necesita el modelo, hasta las pantallas de cumplimiento donde llegan las predicciones, porque ese flujo es lo que los revisores deben validar para determinar su viabilidad. Una comparación de proveedores de alojamiento es un ejercicio de adquisiciones que solo se puede juzgar después de que se conocen el flujo y las demandas de procesamiento. Nombrar a los científicos de datos describe la dotación de personal en lugar de la solución. Aplazar el manejo de datos al desarrollo deja sin examinar la brecha que los revisores señalaron exactamente cuándo es más barato solucionarla."
  },
  {
    id: 'cp4-008', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tarrow Mills se está preparando para introducir la inspección de calidad mediante IA en su planta de producción. Circulan rumores de que el sistema es un primer paso hacia la eliminación de puestos de trabajo de inspectores, y varios inspectores experimentados han contratado personal para postularse en otros lugares. Aún faltan meses para el lanzamiento. ¿Qué debería hacer ahora el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Iniciar una comunicación abierta y preparar a los inspectores para su función en evolución." },
      { id: 'b', texto: "Acelerar el lanzamiento para acortar el período de incertidumbre" },
      { id: 'c', texto: "Ofrecer traslados internos a los inspectores que se opongan al sistema." },
      { id: 'd', texto: "Limitar la información del proyecto hasta que la fecha de implementación sea firme" }
    ],
    correctas: ['a'],
    explicacion: "Desarrollar estrategias de comunicación y capacitación para los usuarios finales es la forma en que se gestiona el riesgo de adopción, y abordar los problemas abiertamente mientras se prepara a los inspectores sobre cómo cambiará su trabajo puede frenar la pérdida de personal experimentado. Acelerar la implementación comprime el cronograma mientras no se aborda el miedo que impulsa las salidas. Limitar la información del proyecto alimenta los rumores, ya que el silencio se lee como una confirmación. Ofrecer transferencias a los objetores trata la preocupación de la fuerza laboral como un desacuerdo individual y agota la experiencia en inspección que el nuevo proceso aún necesita."
  },
  {
    id: 'cp4-009', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics está desarrollando un motor de recomendación para planes de entrenamiento personalizados. El director del proyecto de IA está coordinando una verificación final de la calidad de los datos antes de que el equipo se comprometa a iniciar el modelo. La evaluación revela que aproximadamente a una quinta parte de los registros de los atletas les faltan valores para una métrica de acondicionamiento clave, y la distribución de los valores disponibles se inclina fuertemente hacia los atletas de élite en lugar de los usuarios recreativos que son la población objetivo. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Emitir una decisión de no ir, documentar la brecha de representatividad y dirigir al equipo para abordar la deficiencia de datos antes de que comience la capacitación." },
      { id: 'b', texto: "Continúe con la capacitación con los registros disponibles y planifique volver a capacitarse después de que se recopilen más datos después del lanzamiento." },
      { id: 'c', texto: "Aprobar una decisión de ir y permitir que el equipo de ciencia de datos impute los valores faltantes durante el entrenamiento." },
      { id: 'd', texto: "Escalar directamente al patrocinador ejecutivo para solicitar un presupuesto de recopilación de datos mayor sin mayor evaluación" }
    ],
    correctas: ['a'],
    explicacion: "Verificar la calidad de los datos para una decisión de avance o detención antes de la preparación de los datos requiere específicamente evaluar la representatividad de los datos y el \"sesgo de identificación\", y luego tomar una decisión documentada sobre la preparación de los datos. Un sesgo significativo hacia los atletas de élite cuando la población objetivo son usuarios recreativos es una falla de representatividad que justifica no ir hasta que se solucione. Aprobar un ir y confiar en la imputación no resuelve el problema de representatividad, que la imputación no puede solucionar. Proceder y planificar el reentrenamiento posterior al lanzamiento envía un modelo entrenado en fecha no representativa que corre el riesgo de un desempeño deficiente para los usuarios previstos. Escalar al patrocinador ejecutivo para obtener el presupuesto antes de completar la evaluación omite la responsabilidad del gerente del proyecto de documentar primero los hallazgos e identificar las opciones de remediación."
  },
  {
    id: 'cp4-010', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Frostvale Dairy aprobó un proyecto de inteligencia artificial específicamente para reducir el deterioro de los productos en toda su cadena de frío. A medida que comienza la planificación de la medición, finanzas quiere la medida principal del costo de logística, operaciones quiere velocidad de entrega y calidad quiere puntuaciones de auditoría, y cada departamento presiona al gerente de proyectos de IA por separado. ¿Cómo debe el director del proyecto establecer el conjunto de medidas?",
    opciones: [
      { id: 'a', texto: "Permitir que el departamento que financia la mayor parte del presupuesto elija la medida principal" },
      { id: 'b', texto: "Anclar las medidas principales al objetivo de reducción del deterioro para el que se aprobó el proyecto." },
      { id: 'c', texto: "Adoptar las tres medidas departamentales con igual peso para preservar la armonía" },
      { id: 'd', texto: "Seleccione la velocidad de entrega porque es la más fácil de capturar de las tres." }
    ],
    correctas: ['b'],
    explicacion: "Existen medidas para mostrar si el proyecto logra el objetivo que lo justificó, por lo que la reducción del deterioro debe anclar el conjunto de mediciones primarias, con medidas departamentales incluidas sólo cuando se relacionan genuinamente con ese resultado. Ponderar las tres por igual diluye el enfoque y puede declarar éxito, mientras que el deterioro nunca mejora. Vender la medida principal al mayor contribuyente al presupuesto convierte la medición en política. Elegir la velocidad de entrega para facilitar la captura optimiza la conveniencia, y un proyecto puede acelerar las entregas mientras el producto estropeado aún llega a los estantes"
  },
  {
    id: 'cp4-011', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Summitline Airlines está ajustando un modelo de retraso de vuelos. Durante semanas, los científicos de datos han estado ajustando la configuración del modelo uno a la vez basándose en corazonadas, sin un plan compartido, sin un registro de las combinaciones ya probadas y sin un punto de parada acordado. ¿Cómo debería el director del proyecto de IA poner orden en este trabajo?",
    opciones: [
      { id: 'a', texto: "Subcontrate el esfuerzo de ajuste a un proveedor de optimización especializado." },
      { id: 'b', texto: "Coordinar un proceso de ajuste sistemático con una estrategia de búsqueda definida y ensayos rastreados dentro" },
      { id: 'c', texto: "Pídale a cada científico de datos que realice ajustes de forma independiente y adopte el mejor resultado" },
      { id: 'd', texto: "Bloquear la configuración actual y pasar directamente a la evaluación" }
    ],
    correctas: ['b'],
    explicacion: "Coordinar las actividades de optimización y ajuste de hiperparámetros es el papel del director del proyecto aquí, y un proceso sistemático con una estrategia de búsqueda definida, pruebas registradas y un presupuesto de esfuerzo acordado convierte la experimentación errante en trabajo administrado. Al bloquear la configuración actual se abandonan posibles mejoras de rendimiento sin evidencia de que se haya agotado el ajuste. El ajuste paralelo independiente multiplica las pruebas duplicadas y aún no registra nada para referencia futura. La subcontratación a un proveedor de optimización transfiere la actividad sin corregir la estrategia y el seguimiento faltantes, y una parte externa aporta menos contexto sobre el modelo y los datos."
  },
  {
    id: 'cp4-012', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestlake Medical está creando una herramienta de apoyo a las decisiones clínicas. El director del proyecto de IA está supervisando la transformación de los datos antes de que comience la capacitación. El equipo de ciencia de datos ha aplicado varios pasos de normalización y ha creado funciones derivadas a partir de registros de pacientes sin procesar. El director del proyecto observa que la lógica de transformación se almacena solo en los scripts locales de los miembros del equipo, sin repositorio compartido ni seguimiento de versiones. ¿Qué debería coordinar el director del proyecto de IA para abordar esta brecha?",
    opciones: [
      { id: 'a', texto: "Delegar la propiedad de los scripts por completo al líder de ingeniería de datos y eliminarlos de la documentación del proyecto." },
      { id: 'b', texto: "Solicite a cada miembro del equipo que envíe por correo electrónico la última versión del script al director del proyecto semanalmente para su archivo manual." },
      { id: 'c', texto: "Detener el trabajo de transformación hasta que se repita una auditoría completa de las fuentes de datos sin procesar." },
      { id: 'd', texto: "Establecer un repositorio compartido controlado por versiones para todos los scripts y configuraciones de transformación para que los cambios sean rastreados y reproducibles." }
    ],
    correctas: ['d'],
    explicacion: "El establecimiento de un repositorio compartido controlado por versiones garantiza la reproducibilidad y la documentación de la transformación de datos, un elemento central en la gestión de la transformación de datos para la preparación de datos. La recopilación de scripts por correo electrónico crea archivos informales sin trazabilidad ni resolución de conflictos. Detener el trabajo para una auditoría de datos sin procesar reinicia el trabajo inicial que ya pasó los controles de calidad, lo cual es desproporcionado con respecto a la brecha en el seguimiento de versiones. Delegar la propiedad sin documentación elimina por completo el adifact del registro del proyecto, sin dejar rastro de auditoría."
  },
  {
    id: 'cp4-013', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de IA en Ironvale Mining está obteniendo datos para un modelo de predicción de fallas de equipos. El equipo asumió que todas las lecturas de los sensores se encuentran en la plataforma de nube moderna, pero un ingeniero veterano menciona que años de lecturas más antiguas se encuentran en un sistema in situ retirado que nunca se migró. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Pida a los científicos de datos que generen lecturas sintéticas que se aproximen al período anterior faltante." },
      { id: 'b', texto: "Dirigir una migración completa inmediata del archivo del sistema retirado al entorno de capacitación." },
      { id: 'c', texto: "Agregue el sistema retirado al inventario de origen y evalúe sus lecturas archivadas para determinar su relevancia y acceso." },
      { id: 'd', texto: "Mantenga el alcance en la plataforma en la nube ya que el sistema retirado ya no es compatible" }
    ],
    correctas: ['c'],
    explicacion: "Los sistemas heredados y los archivos históricos pertenecen al inventario de origen, y la predicción de fallas en particular se beneficia de largos historiales que capturan eventos de fallas raros, por lo que se debe evaluar la relevancia y accesibilidad del archivo. Limitar el alcance a la plataforma en la nube porque el sistema antiguo no es compatible descarta \"el historial de fallas potencialmente críticas sin evaluación\". Las lecturas sintéticas fabrican un pasado que la organización realmente posee y no puede reproducir firmas de fallas reales."
  },
  {
    id: 'cp4-014', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ardenvale Publishing está construyendo un modelo de suscripción en rotación. Los registros internos cubren bien el comportamiento de los suscriptores, pero el equipo cree que la deserción está impulsada en gran medida por los precios de la competencia y los cambios económicos regionales, que ningún sistema interno captura. ¿Qué debería hacer el director del proyecto de IA con el equipo?",
    opciones: [
      { id: 'a', texto: "Derivar indicadores proxy de las condiciones del mercado a partir del comportamiento interno de los suscriptores" },
      { id: 'b', texto: "Encuesta a los suscriptores actuales sobre su sensibilidad a los precios de la competencia." },
      { id: 'c', texto: "Proceda únicamente con datos internos y tenga en cuenta los factores del mercado como limitación del modelo." },
      { id: 'd', texto: "O Explorar proveedores externos y fuentes externas que proporcionen señales del mercado." }
    ],
    correctas: ['d'],
    explicacion: "Explorar proveedores externos y fuentes externas es la forma directa de obtener señales de mercado que la organización no genera por sí misma, e identificar dichas fuentes es parte de localizar dónde residen los datos requeridos. Derivar indicadores del comportamiento interno intenta fabricar información externa a partir de datos que no la contienen. Proceder únicamente con datos internos admite un factor conocido de abandono sin siquiera investigar si los datos externos son accesibles. La encuesta a los suscriptores captura las actitudes autoinformadas de los clientes actuales, lo que es un sustituto débil y sesgado de los indicadores económicos y de precios reales de la competencia."
  },
  {
    id: 'cp4-015', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Orchidlane Cosmetics elaboró ​​la lista del equipo para un proyecto de combinación de tonos de IA: cuatro científicos de datos y nada más. La solución debe aprender de los registros de formulación que solo los químicos de laboratorio entienden, ejecutarse dentro de la plataforma de pedidos minoristas y mantenerse después del lanzamiento. El director del proyecto de IA está revisando al maestro antes de que comience el reclutamiento. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Adda quinto científico de datos para proporcionar capacidad para el trabajo de integración" },
      { id: 'b', texto: "Cambie dos científicos de datos por desarrolladores de software generales para equilibrar el equipo" },
      { id: 'c', texto: "Aprobar la lista porque la construcción de modelos es el corazón de cualquier proyecto de IA." },
      { id: 'd', texto: "Reevaluar la combinación de habilidades para incluir roles de dominio, ingeniería y operaciones que requiere la entrega." }
    ],
    correctas: ['d'],
    explicacion: "Evaluar la composición del equipo significa mapear cada habilidad que requiere la entrega, y este proyecto claramente necesita experiencia en el dominio químico para interpretar los datos de formulación, habilidades de ingeniería para integrar la solución en la plataforma de pedidos y capacidad de operaciones para mantenerla en funcionamiento, junto con los modeladores. Al aprobar una lista exclusiva de modeladores se confunde un flujo de trabajo para todo el proyecto. Agregar un quinto científico de datos profundiza la habilidad que el equipo ya tiene mientras las brechas permanecen abiertas. Intercambiar miembros conjeturas aritméticas de recuento de la mezcla en lugar de derivarla del trabajo"
  },
  {
    id: 'cp4-016', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tldesmark Aquaculture está trasladando su modelo de optimización de piensos del equipo del proyecto a un grupo de apoyo permanente. El grupo de soporte está capacitado pero nunca ha manejado el sistema durante un problema en vivo. El patrocinador del proyecto quiere que el equipo del proyecto sea liberado lo antes posible. ¿Cómo debería el director del proyecto de IA estructurar el traspaso?",
    opciones: [
      { id: 'a', texto: "Liberar al equipo del proyecto en la fecha límite desde que se completa la capacitación." },
      { id: 'b', texto: "Dividir el sistema permanentemente para que cada grupo sea propietario de los componentes que mejor conoce." },
      { id: 'c', texto: "Haga que el grupo de apoyo ejecute el sistema junto con el equipo del proyecto durante un período de estabilización." },
      { id: 'd', texto: "Mantener la propiedad con el equipo del proyecto hasta que el modelo funcione durante una temporada completa sin problemas." }
    ],
    correctas: ['c'],
    explicacion: "Un período de estabilización en el que el grupo de apoyo opera el sistema mientras el equipo del proyecto permanece disponible permite a los nuevos propietarios crear una experiencia real de incidentes con una red de seguridad, equilibrando la presión de liberación del patrocinador con el riesgo operativo. Una liberación abrupta en la fecha límite deja solo a un grupo no probado la primera vez que algo se rompe. Mantener la propiedad hasta una temporada completa impecable retrasa la transición indefinidamente porque los sistemas en vivo rara vez funcionan sin problemas durante tanto tiempo. Dividir la propiedad entre dos grupos fragmenta permanentemente la rendición de cuentas y nunca fue el modelo operativo que la transición pretendía alcanzar."
  },
  {
    id: 'cp4-017', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Davenmoor Credit Union está definiendo las necesidades de datos para un modelo que detecte transacciones fraudulentas con tarjetas, que son una pequeña fracción de la actividad general. Un miembro del equipo sugiere simplemente extraer un gran mes aleatorio de transacciones, razonando que volumen por sí solo cubrirá todo lo que necesita el modelo. ¿Cómo debería responder el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "De acuerdo, porque una gran atracción aleatoria siempre representa adecuadamente un comportamiento raro" },
      { id: 'b', texto: "Solicite solo los casos de fraude confirmados para que el modelo se centre en lo que importa" },
      { id: 'c', texto: "Posponer las decisiones sobre el volumen hasta que el modelo tenga un rendimiento inferior y se justifiquen más datos" },
      { id: 'd', texto: "Planificar el volumen y el enfoque de muestreo para que los casos de fraude confirmados estén suficientemente representados." }
    ],
    correctas: ['d'],
    explicacion: "La planificación de los requisitos de volumen junto con un enfoque de muestreo que garantice que los casos de fraude confirmados estén bien representados aborda el desafío central del aprendizaje de eventos poco comunes en la etapa de requisitos. Una extracción aleatoria grande aún puede contener tan pocos ejemplos de fraude que el modelo no aprende casi nada sobre ellos, por lo que el volumen por sí solo no es una garantía. Solicitar solo casos de fraude elimina las transacciones legítimas que el modelo debe aprender a distinguir del fraude. Posponer la decisión hasta que el modelo tenga un rendimiento inferior convierte un problema de requisitos previsible en una costosa reelaboración posterior."
  },
  {
    id: 'cp4-018', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El comité directivo de Castlewood Hotels se quejó de que era imposible seguir el último informe sobre el estado de los datos porque se centraba en métricas de calidad técnica y terminología de modelado. El comité deberá decidir pronto si financiará la siguiente fase del proyecto de personalización. ¿Cómo debería cambiar el director del proyecto de IA la próxima sesión informativa?",
    opciones: [
      { id: 'a', texto: "Traiga a los científicos de datos para que analicen las métricas con mayor profundidad." },
      { id: 'b', texto: "Reducir la frecuencia de las sesiones informativas para que el comité absorba menos contenido técnico." },
      { id: 'c', texto: "Reformular los hallazgos en términos comerciales vinculados a la decisión que enfrenta el comité" },
      { id: 'd', texto: "Adjunte un apéndice de glosario que defina cada término técnico utilizado." }
    ],
    correctas: ['c'],
    explicacion: "Reformular los hallazgos en términos comerciales vinculados a la decisión de financiación es correcto porque el trabajo del director del proyecto de IA es traducir los conceptos de datos técnicos a un lenguaje en el que los líderes puedan actuar. Un apéndice del glosario todavía obliga a los ejecutivos a decodificar el vocabulario especializado en lugar de recibir el significado. Hacer que los científicos de datos profundicen en las métricas aumenta la densidad misma de la que se quejó el comité. Reducir la frecuencia de las sesiones informativas reduce la exposición sin corregir la comprensión y deja la decisión de financiación menos informada."
  },
  {
    id: 'cp4-019', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northwind Logistics está ultimando un modelo de predicción de tiempos de entrega. El equipo de ciencia de datos informa que el modelo funciona de manera consistente en todos los conjuntos de desarrollo y reserva y cumple con todos los umbrales de rendimiento definidos. Se solicita al gerente del proyecto de IA que confirme que el modelo está listo para su puesta en funcionamiento. Antes de emitir la confirmación, ¿qué debe verificar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Que todos los científicos de datos involucrados en el desarrollo del modelo hayan aprobado formalmente los resultados de la evaluación." },
      { id: 'b', texto: "Que el modelo se haya comparado con todas las demás arquitecturas candidatas para confirmar que es la mejor opción posible." },
      { id: 'c', texto: "El rendimiento del modelo y las aprobaciones requeridas se han evaluado según los criterios de preparación establecidos." },
      { id: 'd', texto: "Que el modelo fue construido utilizando la arquitectura computacional más avanzada disponible." }
    ],
    correctas: ['c'],
    explicacion: "La decisión de aprobar o no la operacionalización requiere que el gerente del proyecto de IA evalúe el desempeño del modelo en función de los criterios de éxito, evalúe la solidez y la generalización, revise los requisitos de infraestructura, valide la documentación y los procedimientos operativos, y tome la decisión de aprobación final. Confirmar que se han evaluado todas estas dimensiones es lo que implica una verificación integral de preparación. Verificar que se utilizó la arquitectura computacional más avanzada no es un criterio de preparación; el criterio es si el modelo cumple con los objetivos de rendimiento definidos. Exigir que todos los científicos de datos aprueben crea un paso de aprobación redundante no especificado en el marco de preparación. La comparación con cada arquitectura candidata es una actividad de selección de modelos que pertenece a una etapa anterior del proceso de desarrollo, no a la puerta de implementación."
  },
  {
    id: 'cp4-020', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El proyecto de IA de previsión de la demanda de Foxglove Apparel está a la deriva. Un equipo está creando un optimizador de rebajas, una herramienta de transferencia de tiendas ancnhera, y el patrocinador pensó que el proyecto se trataba solo de pronósticos de compras estacionales. Nadie puede decir qué aportará realmente el proyecto al final. ¿Qué debería establecer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Una congelación de requisitos que detiene permanentemente más adiciones" },
      { id: 'b', texto: "Una junta de gobierno que aprueba el trabajo destacado de cada equipo." },
      { id: 'c', texto: "Un programa dividido para que cada plantilla se convierta en su propio proyecto" },
      { id: 'd', texto: "O Un conjunto definido de límites del proyecto y entregables comprometidos." }
    ],
    correctas: ['d'],
    explicacion: "Definir los límites y los resultados del proyecto le dice a cada equipo y al patrocinador qué producirá y qué no producirá esta iniciativa, que es exactamente lo que falta. Una junta de gobierno para la aprobación de funciones agrega gastos generales de decisión sin establecer primero la línea de base en la que se juzgarían esas decisiones. La división en proyectos separados formaliza la expansión en lugar de resolver si alguna vez se pretendieron las herramientas adicionales. Una congelación permanente de los requisitos es rígida e innecesaria una vez que los resultados del proyecto están claramente definidos y el cambio se puede gestionar deliberadamente%"
  },
  {
    id: 'cp4-021', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Universal Containers está desarrollando un modelo de puntuación de clientes potenciales 32B. Antes de comenzar el entrenamiento del modelo, el gerente del proyecto de IA revisa el conjunto de datos preparado y descubre que la característica de región geográfica contiene etiquetas que agrupan regiones con características de mercado muy diferentes debido a un error de entrada de datos ascendente. El equipo de preparación de datos dice que corregir las etiquetas llevaría dos días adicionales. ¿Qué debería decidir el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Continúe con la capacitación y planifique una corrección de características en la siguiente iteración después de revisar los resultados iniciales." },
      { id: 'b', texto: "Retener la aprobación de ir o no para la capacitación y ordenar al equipo que corrija las etiquetas geográficas, documentando el hallazgo y la resolución de la calidad de los datos." },
      { id: 'c', texto: "Escalar inmediatamente al patrocinador ejecutivo porque un error de entrada de datos invalida todo el conjunto de datos." },
      { id: 'd', texto: "Apruebe la capacitación utilizando el conjunto de datos sin la característica geográfica para evitar el problema de etiquetado." }
    ],
    correctas: ['b'],
    explicacion: "Tomar decisiones de ir o no basadas en la evaluación de la preparación de los datos y documentar los hallazgos de la calidad de los datos son responsabilidades centrales del gerente de proyectos de IA en la puerta de preparación de datos. La capacitación sobre datos geográficos mal etiquetados incorporará el error en los patrones aprendidos del modelo, lo que producirá puntuaciones de clientes potenciales poco confiables para las regiones afectadas. La acción correcta es retener la aprobación durante dos días mientras se corrige el error conocido. Proceder y corregir en la siguiente iteración permite desarrollar y potencialmente evaluar un modelo defectuoso, desperdiciando recursos de capacitación. Eliminar la función ayuda al problema, pero sacrifica un predictor \"potencialmente importante sin investigar alternativas\". Escalar al patrocinador ejecutivo es desproporcionado para un problema de calidad de datos sólido y resoluble"
  },
  {
    id: 'cp4-022', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Clearwater Municipal Utilities está iniciando un proyecto de predicción de fallas en las tuberías principales de agua. El equipo de IA conoce bien el registro de activos, pero el personal veterano insinúa que las notas de inspección, los registros de reparación y las lecturas de presión se encuentran en sistemas repartidos por los departamentos. Las solicitudes de extracción vencen pronto. ¿Qué debería hacer el director del proyecto de IA antes de que se envíen esas solicitudes?",
    opciones: [
      { id: 'a', texto: "Pídale a TI que copie todas las bases de datos departamentales en el espacio del proyecto." },
      { id: 'b', texto: "Mapee los sistemas internos en todos los departamentos que mantienen registros relevantes." },
      { id: 'c', texto: "Encueste a proveedores externos para obtener un conjunto de datos de infraestructura empaquetada" },
      { id: 'd', texto: "Comience solo con el registro de activos y agregue otras fuentes si la precisión no es la adecuada." }
    ],
    correctas: ['b'],
    explicacion: "Mapear los sistemas internos que contienen información relevante es el paso definido antes de la extracción y convierte las sugerencias de los veteranos en un inventario concreto de fuentes de inspección, reparación y presión. Comenzar con el registro por sí solo pospone las fuentes relevantes conocidas y obliga a volver a trabajar después del primer resultado decepcionante. Los datos empaquetados de terceros no pueden reemplazar el historial de inspección y reparación cnvn de la empresa de servicios públicos. Copiar todas las bases de datos departamentales se apodera indiscriminadamente, multiplicando el costo y la exposición sin identificar lo que es realmente relevante."
  },
  {
    id: 'cp4-023', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harvest Plains Agriculture quiere una capacidad de IA que examine fotografías de campos con drones e identifique qué enfermedad de los cultivos aparece en cada imagen para que los agrónomos puedan responder. El director del proyecto de IA debe asignar esta necesidad a la clase más adecuada de capacidad de IA antes de continuar con el alcance. ¿Cuál encaja mejor?",
    opciones: [
      { id: 'a', texto: "Hiperpersonalización" },
      { id: 'b', texto: "Reconocimiento" },
      { id: 'c', texto: "Sistemas impulsados ​​por objetivos" },
      { id: 'd', texto: "Patrones y anomalías" }
    ],
    correctas: ['b'],
    explicacion: "Identificar lo que aparece en una imagen, como qué enfermedad está presente en una fotografía de un dron, es el patrón de reconocimiento, que clasifica entradas no estructuradas como imágenes en etiquetas significativas. Patrones y anomalías encuentra valores atípicos y desviaciones en los flujos de datos en lugar de etiquetar el contenido de la imagen. La hiperpersonalización adapta las experiencias a personas individuales, lo que no tiene ningún papel en la identificación de enfermedades. Los sistemas basados ​​en objetivos aprenden mediante prueba y error a optimizar hacia un objetivo, una mala coincidencia para clasificar fotografías"
  },
  {
    id: 'cp4-024', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestlake Medical está finalizando un modelo de clasificación de imágenes radiológicas. En la reunión de revisión de avance o detención, el equipo de informática clínica presenta resultados de evaluación que muestran una alta precisión en el conjunto de pruebas internas, pero señala que el modelo no ha sido evaluado con respecto al estándar de oro clínico utilizado por los radiólogos de en el departamento de destino. El director del proyecto de IA debe decidir si emitir una recomendación de ir. ¿Cuál es la base correcta para la decisión?",
    opciones: [
      { id: 'a', texto: "Si el equipo de informática clínica puede comprometerse a completar la evaluación estándar dentro de las dos semanas posteriores a la implementación." },
      { id: 'b', texto: "La prueba interna estableció la precisión por sí sola, ya que era la métrica definida en el estatuto del proyecto." },
      { id: 'c', texto: "Si el presupuesto del proyecto permite tiempo para una evaluación adicional antes de que cierre el trimestre fiscal" },
      { id: 'd', texto: "Si el modelo ha sido validado según los criterios de éxito establecidos y el estándar de oro clínico." }
    ],
    correctas: ['d'],
    explicacion: "La decisión de avance o detención en la operacionalización requiere evaluar el modelo frente a los criterios de éxito establecidos; si el estándar de oro clínico era parte de esos criterios, no se puede emitir una recomendación de implementación hasta que se complete la evaluación. Depender únicamente de la precisión del conjunto de pruebas internas es insuficiente si el estándar de oro era un desempeño definido indicador para la implementación clínica. Comprometerse a completar la evaluación del estándar de oro después de la implementación significa implementar un modelo que no ha sido validado según un criterio requerido, que es exactamente la liberación prematura que la decisión de avance o detención está diseñada para evitar. Las restricciones presupuestarias afectan la planificación del proyecto, pero no son la base técnica o clínica para la decisión de implementación."
  },
  {
    id: 'cp4-025', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Falwodh Bank, el equipo de ciencia de datos ha elaborado una larga lista de deseos de elementos de datos para un modelo de incumplimiento de préstamos. El patrocinador cuestiona el costo de adquirirlo todo y le pide al gerente del proyecto de IA que justifique la lista. ¿Cuál es la forma más efectiva para que responda el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Aprobar la lista completa ahora para evitar tener que volver a trabajar si se necesitan elementos más adelante" },
      { id: 'b', texto: "Respæstacorrecta Rastree cada elemento solicitado hasta el resultado comercial que respalda y recorte los elementos sin" },
      { id: 'c', texto: "Clasifica los elementos por coste de extracción y elimina los más caros." },
      { id: 'd', texto: "Aplazar la pregunta hasta que la evaluación del modelo muestre qué elementos importaron" }
    ],
    correctas: ['b'],
    explicacion: "Mapear los requisitos de datos con los objetivos comerciales es la forma en que un gerente de proyecto valida una lista de deseos de datos, y rastrear cada elemento hasta el resultado que respalda le brinda al patrocinador un alcance defendible mientras elimina costos injustificados. Acercar todo a una reelaboración de Ed gasta el presupuesto de adquisición en elementos que ningún objetivo requiere. Esperar la evaluación del modelo significa pagar por la lista completa antes de descubrir lo que era innecesario. Reducir el costo de extracción puramente de puede eliminar elementos de apariencia económica que impulsan el resultado o mantener los baratos que agregan"
  },
  {
    id: 'cp4-026', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Una evaluación de datos de Tallowmere Insurance encontró que los registros de reclamaciones necesarios para un modelo de predicción del tiempo de liquidación contienen graves inconsistencias que retrasarán el proyecto en una cuarta parte. El director del proyecto de IA está redactando el resumen para el comité ejecutivo. ¿Cómo debe estructurarse el resumen?",
    opciones: [
      { id: 'a', texto: "Enfatice las fortalezas de los datos y coloque las inconsistencias en un apéndice." },
      { id: 'b', texto: "Liderar con evidencia estadística para que los ejecutivos puedan sacar sus propias conclusiones." },
      { id: 'c', texto: "Describa primero la metodología de evaluación para que los hallazgos tengan credibilidad técnica." },
      { id: 'd', texto: "Liderar con las implicaciones comerciales de los hallazgos y la respuesta recomendada." }
    ],
    correctas: ['d'],
    explicacion: "Liderar con implicaciones comerciales y una respuesta recomendada brinda a los ejecutivos lo que necesitan para decidir, cuyo propósito es un resumen ejecutivo de los hallazgos de la evaluación de datos. Liderar con evidencia estadística solicita a un comité no técnico que realice la interpretación que debería haber hecho el gerente del proyecto. Enfatizar las fortalezas y relegar las inconsistencias a un apéndice oscurece un hallazgo que cambia materialmente la línea de tiempo. Abrir con metodología retrasa el mensaje que los ejecutivos realmente necesitan y se lee como un preámbulo técnico en lugar de un apoyo a las decisiones."
  },
  {
    id: 'cp4-027', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harborline Outfitters está preparando una revisión posterior al proyecto para completar un modelo de valor de vida del cliente basado en Al. Como parte del cierre del proyecto, el director del programa de IA debe garantizar que exista un registro de cada decisión importante y de quién la autorizó durante todo el ciclo de vida del proyecto. Se hará referencia a este registro si alguna vez se cuestionan los resultados del modelo. ¿Qué documento debe asegurarse de que exista el director del programa?",
    opciones: [
      { id: 'a', texto: "Un informe sobre el estado del proyecto que cubra los dos últimos meses de desarrollo." },
      { id: 'b', texto: "Un informe de referencia de rendimiento que muestra la precisión del modelo antes y después de cada evento importante de reentrenamiento." },
      { id: 'c', texto: "Un registro cronológico de las decisiones clave de desarrollo, el fundamento de cada una y el nombre de la parte que las aprueba." },
      { id: 'd', texto: "Un documento de lecciones aprendidas que captura lo que el equipo haría diferente en el próximo proyecto." }
    ],
    correctas: ['c'],
    explicacion: "Un registro cronológico de las decisiones clave de desarrollo, sus fundamentos y las partes que las autorizan es el registro integral de rendición de cuentas que respalda la resolución de desafíos, las consultas de auditoría y la referencia de gobernanza futura. Un informe de estado de los dos últimos meses cubre sólo una parte del proyecto y omite decisiones tomadas en fases anteriores. Un informe de referencia de desempeño documenta la calidad del modelo a lo largo del tiempo, no decisiones de gobernanza. Un documento de lecciones aprendidas es valioso para la mejora de procesos, pero no es el registro de responsabilidad que documenta quién autorizó qué y"
  },
  {
    id: 'cp4-028', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Bellcastle Auctions elige entre dos enfoques de valoración de IA. Uno es barato de construir pero necesita atención especializada constante y reentrenamiento frecuente. El otro cuesta más por adelantado pero funciona con poca intervención. Finanzas sólo ha comparado las cotizaciones de construcción. ¿Qué debería añadir el director del proyecto de IA a la comparación?",
    opciones: [
      { id: 'a', texto: "El aumento de reputación de ser el primero en comercializar la opción más barata" },
      { id: 'b', texto: "Un calendario de pagos más rápido negociado con el proveedor preferido." },
      { id: 'c', texto: "El número de casas de subastas que utilizan cada método en la actualidad" },
      { id: 'd', texto: "Los costos totales de por vida de operación, mantenimiento y reentrenamiento de cada opción." }
    ],
    correctas: ['d'],
    explicacion: "Los costos totales de operación, mantenimiento y reentrenamiento de cada opción completan el cuadro que las cotizaciones de construcción por sí solas distorsionan, ya que el enfoque de construcción barata conlleva grandes gastos continuos de especialistas y reentrenamiento. El aumento de la reputación por moverse primero es especulativo y no está relacionado con qué opción realmente cuesta menos a lo largo de su vida. Un cronograma de pagos más rápido cambia el momento del efectivo, no la economía subyacente. Contar a quienes adoptan cada enfoque mide la popularidad más que el costo. Estimar el costo total de propiedad, incluida la infraestructura y el mantenimiento, es un elemento explícito para determinar el retorno de la inversión."
  },
  {
    id: 'cp4-029', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Thackwood Furniture justifica un proyecto de optimización de inventario de IA. El borrador del análisis financiero atribuye al proyecto grandes ahorros de almacenamiento, pero el director del proyecto de IA observa que la mayoría de esos ahorros provienen de una consolidación de almacén que la comparación aprobó el año pasado y que se completará independientemente de la iniciativa de IA. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Mantener los ahorros en el análisis porque fortalecen la solicitud de financiamiento" },
      { id: 'b', texto: "Mueva los ahorros de consolidación a una sección separada de beneficios intangibles" },
      { id: 'c', texto: "Solicitar a finanzas que reclasifique la consolidación como un costo del proyecto de IA" },
      { id: 'd', texto: "O Cuente sólo los beneficios que produce esta iniciativa más allá de lo que sucedería de todos modos" }
    ],
    correctas: ['d'],
    explicacion: "Los beneficios esperados en una justificación financiera deben ser incrementales, es decir, ganancias que se producen sólo gracias a la iniciativa de IA, por lo que los ahorros de una consolidación ya aprobada no se le pueden atribuir. Mantener los ahorros inflados hace que la solicitud sea más persuasiva, pero prepara el proyecto para ser juzgado en función de beneficios que nunca podrá generar. Los ahorros de consolidación no son intangibles, son reales y cuantificables, simplemente pertenecen a una decisión diferente. Reclasificar la consolidación como un costo del proyecto distorsiona el análisis en la dirección opuesta y tergiversa ambas iniciativas."
  },
  {
    id: 'cp4-030', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Silver-thatch Realty está a medio camino de implementar un modelo de valoración de propiedades. El grupo de base de datos, el equipo web y un contratista de integración externo están enfrentando problemas separados y cada uno está solucionando problemas por su cuenta sin avisar a los demás. Dos correcciones ya han entrado en conflicto y han roto un componente que funciona. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Asigne todo el trabajo de implementación restante al grupo que tenga menos problemas" },
      { id: 'b', texto: "Coordinar los flujos de trabajo de forma centralizada para que los problemas se realicen un seguimiento y se resuelvan juntos." },
      { id: 'c', texto: "Escalar cada nuevo conflicto al patrocinador del proyecto para que tome una decisión." },
      { id: 'd', texto: "Pausar la implementación hasta que cada grupo informe cero problemas abiertos" }
    ],
    correctas: ['b'],
    explicacion: "Coordinar las actividades de implementación entre los equipos técnicos con un seguimiento compartido de problemas es la responsabilidad principal del director del proyecto durante la implementación y previene directamente las soluciones conflictivas que los equipos están produciendo de forma aislada. Hacer una pausa hasta que cada grupo informe cero problemas detiene el despliegue en una condición que los equipos descoordinados tal vez nunca alcancen. Concentrar el trabajo en un grupo ignora que cada equipo puede tener experiencia de la que carecen los demás. Llevar cada conflicto al patrocinador obliga a que alguien sin el contexto para resolverlo lleve la coordinación técnica de rutina y retrasa cada solución."
  },
  {
    id: 'cp4-031', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Roanfield Equestrian Supply, el director del proyecto de IA redactó una descripción del problema para un proyecto de inventario basándose principalmente en las aportaciones de un director regional. Los jefes de almacén le dicen en voz baja al director del proyecto que la descripción no incluye cómo se mueve realmente el stock entre los sitios. ¿Qué debe hacer el director del proyecto a continuación?",
    opciones: [
      { id: 'a', texto: "Proceder según lo previsto ya que el director regional es el principal interesado" },
      { id: 'b', texto: "Escalar el desacuerdo al patrocinador ejecutivo para que se pronuncie" },
      { id: 'c', texto: "Vuelva a escribir la descripción personalmente utilizando extractos de datos del almacén." },
      { id: 'd', texto: "Ata O Revisa el borrador con expertos que conocen de primera mano las operaciones de inventario" }
    ],
    correctas: ['d'],
    explicacion: "Revisar el borrador con expertos que conocen de primera mano las operaciones de inventario valida el planteamiento del problema frente al conocimiento operativo real, que es precisamente lo que las señales de retroalimentación del almacén necesitan. Proceder porque el director privilegia la jerarquía sobre la precisión y añade una premisa errónea al proyecto. Reescribir la descripción únicamente a partir de extractos de datos sustituye la interpretación del director del proyecto por una experiencia genuina en el dominio. La escalada hacia el patrocinador convierte una brecha en la investigación de los hechos en una contienda política incluso antes de que se hayan reunido los hechos."
  },
  {
    id: 'cp4-032', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de programas de inteligencia artificial en Pinnacle Retail Solutions está implementando un modelo de puntuación de la opinión del cliente que procesa el historial de compras y reseñas de productos de texto libre. Antes de la implementación, el equipo de ægal señala que los campos de texto libre pueden contener divulgaciones relacionadas con la salud que los clientes incluyeron de manera informal. ¿Qué debería hacer el director del programa de IA para abordar esta preocupación?",
    opciones: [
      { id: 'a', texto: "Elimine todos los campos de texto libre del conjunto de datos de capacitación y confíe únicamente en datos de compra estructurados." },
      { id: 'b', texto: "Continúe con la implementación y aborde cualquier queja a través del canal de atención al cliente después del lanzamiento." },
      { id: 'c', texto: "Lleve a cabo una evaluación específica de cómo m Odel procesa y almacena información personal confidencial antes de su implementación." },
      { id: 'd', texto: "Pídale al equipo de ciencia de datos que anonimice los campos de texto libre truncando las entradas de más de cincuenta palabras." }
    ],
    correctas: ['c'],
    explicacion: "Realizar una evaluación específica de cómo se procesan y almacenan las divulgaciones personales sensibles es la acción correcta porque identifica la exposición a la privacidad antes de que el modelo entre en funcionamiento, lo que permite una remediación en lugar de una respuesta reactiva. Simplemente eliminar los campos de texto libre elimina los datos que el modelo puede necesitar y no evalúa si existe riesgo residual en otros lugares. Continuar con la implementación y manejar las quejas posteriormente viola el principio de protección proactiva de la privacidad y puede violar las obligaciones de protección de datos. Truncar el recuento de palabras del texto es una acción mecánica arbitraria que no evalúa ni mitiga la sensibilidad real del contenido."
  },
  {
    id: 'cp4-033', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascadia Health Network está preparando datos de entrenamiento para un modelo de predicción de resultados del paciente. El equipo de ingeniería de datos propone utilizar una técnica de muestreo que sobrerepresente una categoría de condición específica para compensar su baja prevalencia en el conjunto de datos sin procesar. El director del proyecto debe coordinar esta decisión. ¿Cuál es la acción apropiada del director de proyecto?",
    opciones: [
      { id: 'a', texto: "Aprobar la técnica de muestreo sin revisión ya que el sobremuestreo es un método ampliamente utilizado." },
      { id: 'b', texto: "Coordinar una evaluación documentada de cómo el enfoque de muestreo propuesto afecta la representatividad de los datos y el posible sesgo, luego aprobar o redirigir según los hallazgos." },
      { id: 'c', texto: "Rechazar la técnica porque cualquier modificación en la distribución natural de los datos es inadmisible." },
      { id: 'd', texto: "Pídale al equipo que aplique la técnica solo a un conjunto de validación separado y deje el conjunto de entrenamiento sin modificar." }
    ],
    correctas: ['b'],
    explicacion: "La gestión de la transformación de datos para la preparación de datos incluye supervisar los flujos de trabajo de limpieza y preprocesamiento de datos y garantizar la documentación. La gestión de la capacitación de modelos también requiere supervisar los procesos de validación cruzada y selección de modelos que dependen de la composición de los datos de capacitación. Las decisiones de muestreo que alteran deliberadamente las distribuciones de clases afectan la representatividad y el posible sesgo y deben ser evaluadas y documentadas. Coordinar esa evaluación antes de aprobar o redirigir es la acción correcta del director de proyecto. Aprobar sin revisión evita la documentación y la evaluación de sesgos que requiere la metodología. Rechazar cualquier modificación de la distribución natural es una generalización excesiva; Un sobremuestreo informado y documentado puede ser apropiado. Aplicar la técnica sólo al conjunto de validación contaminaría las métricas de evaluación, lo cual es un error técnico que el director del proyecto debería reconocer como problemático."
  },
  {
    id: 'cp4-034', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de inteligencia artificial en Clearwater Agriculture Solutions está implementando un modelo de predicción del rendimiento de los cultivos basado en imágenes satelitales y datos de sensores del suelo. Durante una auditoría interna, el auditor le pide al director del proyecto de IA que confirme el origen de cada conjunto de datos de imágenes utilizado en la capacitación, quién tuvo acceso a él y si se modificó antes de su uso. El director del proyecto de IA no puede responder estas preguntas a partir de los registros del proyecto disponibles. ¿Qué práctica de mantenimiento de registros debería haberse implementado desde el inicio del proyecto?",
    opciones: [
      { id: 'a', texto: "Un contrato con el proveedor de imágenes satelitales que especifica los usos permitidos de los datos." },
      { id: 'b', texto: "Un informe de calidad de los datos preparado por el equipo de ingeniería de datos antes de que comenzara el entrenamiento del modelo." },
      { id: 'c', texto: "Un programa de respaldo que garantiza que todos los conjuntos de datos de entrenamiento se almacenen en ubicaciones geográficamente redundantes." },
      { id: 'd', texto: "Un registro de activos de datos que documenta el origen y cualquier transformación de preprocesamiento aplicada a cada fuente de datos de entrenamiento." }
    ],
    correctas: ['d'],
    explicacion: "Un registro de activos de datos que documente el origen, el custodio, los permisos de acceso y el historial de preprocesamiento para cada fuente es la práctica correcta porque mantener registros de la cadena de custodia para los datos de capacitación y prueba es el requisito de responsabilidad definido. Un informe de calidad de los datos evalúa la idoneidad de los datos para el modelado, pero no crea documentación de custodia que capture quién los tenía y qué se hizo con ellos. Un contrato con el proveedor de imágenes rige los derechos de uso, pero no rastrea el acceso interno ni las modificaciones previas al procesamiento. Los cronogramas de respaldo abordan la resiliencia de los datos, pero no registran la procedencia, el acceso o el historial de transformación."
  },
  {
    id: 'cp4-035', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Atlas Logistics está utilizando un modelo de aprendizaje automático para priorizar qué envíos reciben un manejo acelerado. Los altos líderes de operaciones se preguntan por qué ciertos envíos constantemente no tienen prioridad y quieren una explicación clara antes de la próxima reunión de la junta directiva. El director del proyecto de IA debe preparar al equipo para abordar esta solicitud. ¿Qué debería establecer el director del proyecto para satisfacer esta necesidad recurrente?",
    opciones: [
      { id: 'a', texto: "Requisitos formales de explicabilidad que definen el nivel de explicación que el modelo debe proporcionar para las comunicaciones con las partes interesadas." },
      { id: 'b', texto: "Un panel en tiempo real que muestra las características de entrada del modelo y su correlación con los resultados de la despriorización." },
      { id: 'c', texto: "Una plantilla de comunicación que describe el modelo como una herramienta de caja negra cuyos resultados deben aceptarse por motivos estadísticos." },
      { id: 'd', texto: "Un proceso para volver a entrenar el modelo cada vez que el liderazgo cuestiona una decisión específica." }
    ],
    correctas: ['a'],
    explicacion: "El establecimiento de requisitos de explicabilidad para la comunicación con las partes interesadas define qué nivel de explicación debe producir el modelo, garantizando que el equipo esté preparado para abordar las preguntas de liderazgo de una manera estructurada y repetible. Un panel de correlación es una herramienta técnica, no un estándar de comunicación con las partes interesadas, y puede no ser interpretable por líderes no técnicos. Reentrenar el modelo en respuesta a cada pregunta de liderazgo confunde la gobernanza del modelo con la planificación de la comunicación. Enmarcar el modelo como Slack Sox contradice las expectativas de transparencia de las que es responsable el gerente del programa."
  },
  {
    id: 'cp4-036', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Bricklane Auto Group cerrará su proyecto de modelo de fijación de precios de vehículos usados ​​al final del trimestre. El modelo necesitará un reentrenamiento periódico y una atención rutinaria mientras esté en funcionamiento. Una parte interesada sostiene que estas actividades se pueden resolver cuando aparece el primer problema. ¿Cómo debería responder el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Establecer los procedimientos continuos de mantenimiento y soporte antes de que el equipo se disuelva." },
      { id: 'b', texto: "De acuerdo, porque definir ahora las actividades futuras sólo sería especular sobre cuestiones desconocidas." },
      { id: 'c', texto: "Proponer congelar el modelo después del lanzamiento para que no se requiera atención continua." },
      { id: 'd', texto: "Programe que el equipo del proyecto original se reúna cada vez que el modelo necesite trabajo." }
    ],
    correctas: ['a'],
    explicacion: "Establecer procedimientos de mantenimiento y soporte antes de que el equipo del proyecto se disuelva garantiza que la solución haya definido responsables, cronogramas y métodos para la atención continua que requiere un sistema de IA. Aplazar hasta que aparezca el primer problema garantiza que la organización improvise durante un incidente sin un procedimiento preparado y sin dueño asignado. Congelar el modelo no elimina la necesidad de prestar atención porque los datos y las condiciones comerciales siguen cambiando alrededor del mismo. Volver a convocar al equipo original supone que esas personas siguen disponibles, algo que un proyecto cerrado no puede prometer."
  },
  {
    id: 'cp4-037', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harrowdale Security está desarrollando un modelo de clasificación de alarmas mediante IA. El equipo de ciencia de datos considera que sus últimos resultados son excelentes, mientras que el director del centro de monitoreo considera que los mismos resultados son inutilizables. Cada lado cita diferentes números de diferentes informes. ¿Cómo debería el director del proyecto de IA evitar que esta disputa se repita?",
    opciones: [
      { id: 'a', texto: "Encargar a un auditor externo para resolver cada desacuerdo a medida que surja" },
      { id: 'b', texto: "Autoridad de decisión alternativa entre los dos grupos cada trimestre." },
      { id: 'c', texto: "Designar al equipo de ciencia de datos como la autoridad final en la calidad del modelo." },
      { id: 'd', texto: "O Hacer que ambas partes acuerden de antemano los puntos de referencia técnicos que debe cumplir el modelo." }
    ],
    correctas: ['d'],
    explicacion: "Acordar de antemano los indicadores técnicos que debe cumplir el modelo reemplaza cifras contradictorias por un estándar compartido y evita disputas de aceptación. Dar autoridad final solo al equipo de datos ignoraría a quienes usarán el sistema; alternar la autoridad mantendría el desacuerdo y recurrir siempre a un auditor externo añadiría costo sin resolver la falta de criterios comunes."
  },
  {
    id: 'cp4-038', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Saltmarsh Seafood ha terminado de preparar años de datos meteorológicos y de ventas para un modelo de previsión de la demanda. El equipo de ciencia de datos está ansioso por comenzar a capacitarse de inmediato para cumplir con un plazo ajustado. ¿Qué debe hacer el director del proyecto de IA antes de autorizar la formación?",
    opciones: [
      { id: 'a', texto: "Pídale al patrocinador del proyecto que apruebe personalmente el conjunto de datos." },
      { id: 'b', texto: "Autorice la capacitación ahora y resuelva cualquier problema de datos a medida que surja" },
      { id: 'c', texto: "Ejecute un piloto de producción limitada para probar la idoneidad de los datos." },
      { id: 'd', texto: "O Verificar los datos preparados con los criterios de aceptación de calidad acordados." }
    ],
    correctas: ['d'],
    explicacion: "Una evaluación final de la calidad de los datos en comparación con los criterios de aceptación definidos anteriormente en el proyecto es la verificación de entrada que protege la fase de capacitación de entradas defectuosas, y realizarla antes de la aprobación es responsabilidad del gerente del proyecto. Autorizar la capacitación y solucionar problemas más tarde significa que los defectos emergen como un comportamiento confuso del modelo que es mucho más costoso de diagnosticar. El patrocinador carece del contexto técnico para certificar la calidad de los datos, y la aprobación sin evaluación es un teatro. Un piloto de producción pertenece después de que existe un modelo y está muy por debajo de esta decisión de preparación."
  },
  {
    id: 'cp4-039', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Quartzline Manufacturing utiliza un modelo de detección de defectos en sus líneas de montaje. El director del programa de IA descubre que los científicos de datos han estado enviando versiones de modelos actualizadas directamente a producción cada vez que terminan una mejora, y nadie puede decir qué versión produjo los informes de calidad del mes pasado. ¿Qué debería implementar el director del programa?",
    opciones: [
      { id: 'a', texto: "Un requisito de que los ejecutivos aprueben personalmente cada ajuste de parámetros." },
      { id: 'b', texto: "Seguimiento de versiones con un proceso de cambio controlado para actualizaciones del modelo de producción." },
      { id: 'c', texto: "Una restricción de que sólo el desarrollador del modelo original puede modificar la producción." },
      { id: 'd', texto: "Un congelamiento permanente del modelo que ahora se está ejecutando en producción." }
    ],
    correctas: ['b'],
    explicacion: "El control de versiones del modelo con procesos de cambio controlados restaura la trazabilidad entre los resultados de la producción y el modelo exacto que los produjo, lo cual es un control de gobernanza del modelo fundamental. Restringir los cambios al desarrollador original limita quién puede enviar actualizaciones sin registrar qué cambió o cuándo. Congelar permanentemente el modelo detiene la mejora legítima y aún deja los informes del mes pasado sin atribuir. La aprobación ejecutiva personal de cada ajuste de parámetros dirige los detalles técnicos al nivel incorrecto y agrega demoras sin crear el historial de versiones que falta en la comparación."
  },
  {
    id: 'cp4-040', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Veldspar Mining implementó un modelo de predicción de fallas de equipos con el objetivo declarado de reducir el tiempo de inactividad no planificado y los gastos de mantenimiento. Seis meses después, el equipo de ciencia de datos celebra avances constantes en la precisión del modelo, pero el presupuesto de mantenimiento y las horas de inactividad no han cambiado. ¿Qué debería hacer el director del proyecto de IA al equipo?",
    opciones: [
      { id: 'a', texto: "Aumentar aún más el objetivo de precisión hasta que las medidas financieras respondan" },
      { id: 'b', texto: "Publicitar las mejoras de precisión para generar confianza organizacional en el modelo." },
      { id: 'c', texto: "Realice un seguimiento del tiempo de inactividad y el gasto en mantenimiento en comparación con los objetivos originales e investigue por qué las predicciones son" },
      { id: 'd', texto: "Reclasificar la iniciativa como un éxito técnico en los registros del proyecto." }
    ],
    correctas: ['c'],
    explicacion: "Medir los resultados de negocios para los que se financió el proyecto y evaluar la brecha entre las predicciones precisas y los resultados sin cambios, revela dónde se está escapando el valor, a menudo porque los equipos de mantenimiento no están actuando según las predicciones. Impulsar la precisión aún más optimiza una medida técnica que ya es sólida mientras el problema de negocios persiste. Publicitar las ganancias en precisión promueve una métrica que no se ha traducido en valor, lo que corre el riesgo de engañar a las partes interesadas. Registrar la iniciativa como un éxito técnico abandona los objetivos de tiempo de inactividad y costos que justificaron la inversión en primer lugar."
  },
  {
    id: 'cp4-041', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Duskmere Studios completó la revisión inicial de la viabilidad de una herramienta de inteligencia artificial que resume los comentarios de los jugadores para los diseñadores de juegos. La revisión no encontró ejemplos etiquetados de los cuales aprender, ningún acuerdo sobre qué equipo posee el beneficio y un planteamiento del problema que cambia en cada reunión. El patrocinador insta a avanzar hacia el desarrollo de todos modos para mantener el impulso. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Avance al desarrollo pero marque los hallazgos como riesgos en el registro del proyecto" },
      { id: 'b', texto: "Avanzar hacia el desarrollo ya que un entusiasmo tan fuerte es raro y valioso." },
      { id: 'c', texto: "Cancelar la iniciativa de forma permanente dada la cantidad de lagunas encontradas" },
      { id: 'd', texto: "Presentar los hallazgos y recomendar resolver las brechas antes de comprometer recursos para el desarrollo." }
    ],
    correctas: ['d'],
    explicacion: "La revisión de viabilidad existe para informar exactamente esta decisión, por lo que el director del proyecto debe presentar los hallazgos al patrocinador y recomendar cerrar las brechas fundamentales, una declaración clara del problema, un propietario de beneficios y un plan de datos, antes de que el desarrollo gaste dinero real. Avanzar con entusiasmo anula la revisión con impulso, el patrón detrás de la mayoría de las iniciativas fallidas de IA. Registrar los hallazgos como riesgos mientras se procede registra el problema sin actuar en consecuencia, y estos no son riesgos para monitorear sino requisitos previos no cumplidos La cancelación permanente sobrecorrige, ya que cada brecha encontrada se puede solucionar con un trabajo enfocado."
  },
  {
    id: 'cp4-042', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Marrowgate Health acaba de terminar de instalar un modelo de soporte de clasificación de IA en su sistema de admisión de pacientes de producción. El equipo de integración informa todos los componentes implementados sin errores y el patrocinador pregunta si se puede declarar que la implementación se completó. ¿Qué debe hacer primero el gerente del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Programe la revisión de cierre del proyecto con las partes interesadas y el liderazgo" },
      { id: 'b', texto: "Declarar la finalización desde que finalizó la instalación sin ningún error." },
      { id: 'c', texto: "Comenzar a planificar el primer ciclo de reentrenamiento programado para el modelo." },
      { id: 'd', texto: "Verificar que la solución funcione y se desempeñe correctamente en el entorno de producción." }
    ],
    correctas: ['d'],
    explicacion: "Una instalación sin errores solo demuestra que se colocaron los componentes, por lo que el director del proyecto debe verificar la funcionalidad y el rendimiento en el entorno de producción antes de declarar completa la implementación, especialmente para un sistema que admite la clasificación de pacientes. Declarar la finalización solo en el estado de la instalación corre el riesgo de descubrir un comportamiento incorrecto a través de pacientes vivos. La planificación del ciclo de reentrenamiento es una actividad operativa que importa más adelante y no dice nada sobre si la implementación de hoy funciona. Una revisión del cierre es prematura mientras la cuestión central de si la solución funciona correctamente sigue sin respuesta."
  },
  {
    id: 'cp4-043', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cordova Staffing Solutions opera una plataforma de economía colaborativa en la que un modelo de inteligencia artificial asigna oportunidades de turnos a los trabajadores en función de las calificaciones de desempeño anteriores, la ubicación y la disponibilidad. Una organización de defensa de los trabajadores alega que el modelo asigna sistemáticamente menos oportunidades a los trabajadores en determinadas zonas geográficas. Se pide al director del proyecto de IA que dirija la investigación. ¿Cuál es la primera acción más adecuada?",
    opciones: [
      { id: 'a', texto: "escmcta Analizar datos de capacitación para detectar desequilibrios demográficos y de representación en las zonas geográficas marcadas por la organización de defensa y revisar los resultados del modelo para detectar patrones discriminatorios." },
      { id: 'b', texto: "Suspender la asignación de turnos para todos los trabajadores y volver a un proceso de despachador completamente manual hasta que se complete la investigación." },
      { id: 'c', texto: "Emitir una declaración pública a la organización de defensa explicando el diseño previsto del modelo y la justificación comercial para la priorización geográfica." },
      { id: 'd', texto: "Encargar a un proveedor externo que reconstruya el modelo desde cero utilizando un algoritmo patentado centrado en la equidad." }
    ],
    correctas: ['a'],
    explicacion: "Analizar los datos de entrenamiento para detectar desequilibrios de representación en las zonas geográficas marcadas y revisar los resultados del modelo en busca de patrones discriminatorios es la primera acción de investigación correcta porque establece si la acusación está respaldada por datos e identifica el mecanismo si existe una disparidad. Encargar una reconstrucción externa supone que el modelo tiene fallas antes de que se complete la investigación y puede ser innecesario. La suspensión de todas las asignaciones de turnos causa una interrupción operativa grave que es desproporcionada como primera respuesta antes de que la investigación haya determinado si existe un problema. Emitir una declaración pública explicando la intención del diseño es una acción de comunicación que no constituye una investigación y debe seguir al análisis, en lugar de precederlo."
  },
  {
    id: 'cp4-044', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de inteligencia artificial en Kestrel Point Airlines ha identificado expertos en la materia en tres departamentos para un esfuerzo de datos de programación de tripulaciones. Los científicos de datos envían correos electrónicos a estos expertos ad hoc, a menudo repitiendo preguntas que un colega ya hizo, y los expertos se sienten frustrados y tardan en responder. ¿Qué debe hacer el director del proyecto para solucionar la situación?",
    opciones: [
      { id: 'a', texto: "Pídale al gerente de cada experto que responda oportunamente a las preguntas del proyecto y establezca una expectativa de desempeño." },
      { id: 'b', texto: "Establezca un canal estructurado y una cadencia que dirija las preguntas sobre datos al experto adecuado una vez" },
      { id: 'c', texto: "Recopile las respuestas ya dadas en un documento de referencia y finalice la divulgación adicional de expertos." },
      { id: 'd', texto: "Dígales a los científicos de datos que procedan con sus propias interpretaciones para reducir la carga de los expertos." }
    ],
    correctas: ['b'],
    explicacion: "Configurar un canal de comunicación organizado con los expertos identificados elimina las preguntas duplicadas que causaron la frustración y al mismo tiempo mantiene el flujo de conocimientos hacia el equipo. La escalada a través de los gerentes presiona a las personas sin solucionar la duplicación que creó el problema y corre el riesgo de dañar las relaciones de las que depende el proyecto. Un documento de referencia estático conserva respuestas anteriores, pero seguirán surgiendo nuevas preguntas sobre datos a lo largo del trabajo, por lo que cortar al personal de extensión le quita al equipo el contexto necesario. Dejar que los científicos de datos confíen en sus propias interpretaciones propicia los malentendidos exactos que la participación de los expertos pretende evitar."
  },
  {
    id: 'cp4-045', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Fernwood Pharmaceuticals está creando un modelo para señalar informes de eventos adversos poco comunes. La evaluación muestra que los registros internos contienen muy pocos ejemplos de los eventos raros que el modelo debe detectar, aunque los eventos comunes están bien cubiertos. El director del programa de IA debe trazar el camino a seguir. ¿Qué debe hacer el director del programa?",
    opciones: [
      { id: 'a', texto: "Pausar la recopilación hasta que se acumulen de forma natural suficientes eventos raros en los sistemas internos" },
      { id: 'b', texto: "Eliminar eventos raros del alcance del modelo sin revisar el requisito con las partes interesadas." },
      { id: 'c', texto: "Desarrollar una estrategia de deficiencia, como otorgar licencias de datos de eventos de terceros o aplicar técnicas de aumento." },
      { id: 'd', texto: "Continuar con la capacitación ya que los eventos raros representan, por definición, una proporción insignificante de los casos." }
    ],
    correctas: ['c'],
    explicacion: "Desarrollar una estrategia explícita para la deficiencia, ya sea otorgando licencias para datos de eventos externos o aumentando las clases raras, aborda directamente la brecha entre los datos disponibles y las necesidades de la solución. Proceder porque los eventos raros son una pequeña parte malinterpreta el problema, ya que el propósito del modelo es detectar exactamente esos casos raros. Eliminar eventos raros del alcance sin la revisión de las partes interesadas abandona silenciosamente el requisito central para el que se financió el proyecto. Esperar a que los eventos se acumulen de forma natural podría llevar años en un ámbito crítico para la seguridad donde se necesita esa capacidad ahora."
  },
  {
    id: 'cp4-046', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El director del programa de IA de Harborline Outfitters está dirigiendo una revisión final del modelo para un sistema de previsión de la demanda de productos. El modelo cumple con todos los objetivos de precisión, pero una parte interesada plantea la preocupación de que el liderazgo no puede entender cómo llega el modelo a sus pronósticos, lo que puede afectar la confianza y la revisión regulatoria. El director del proyecto debe evaluar si el modelo está listo para su puesta en funcionamiento. ¿Qué factor adicional debería evaluar el director del proyecto antes de tomar una decisión?",
    opciones: [
      { id: 'a', texto: "Si la documentación modelo y los procedimientos operativos, incluidas las disposiciones de explicabilidad para la comunicación con las partes interesadas, han sido validados." },
      { id: 'b', texto: "Si el equipo de ciencia de datos está dispuesto a explicar el modelo de manera informal al liderazgo si lo solicita." },
      { id: 'c', texto: "Si se puede persuadir al patrocinador del proyecto para que renuncie a la preocupación por la explicabilidad antes de que cierre la revisión." },
      { id: 'd', texto: "Si el modelo se puede reemplazar con un modelo más simple que sea más fácil de explicar, independientemente del impacto en la precisión." }
    ],
    correctas: ['a'],
    explicacion: "La documentación del modelo y los procedimientos operativos, incluidas las disposiciones para explicar los resultados del modelo a las partes interesadas, son parte de la preparación para la implementación que el gerente del proyecto debe validar antes de emitir una decisión. La preocupación por la confianza del liderazgo y la revisión regulatoria significa que la explicabilidad es un requisito operativo documentado, no un complemento opcional. La disposición informal a dar explicaciones previa solicitud no constituye un procedimiento documentado y no puede verificarse ni auditarse. Reemplazar el modelo por uno más simple antes de evaluar si se pueden agregar disposiciones de explicabilidad al modelo actual es prematuro y puede sacrificar la precisión innecesariamente Persuadir al patrocinador para que renuncie al requisito pasa por alto una preocupación legítima de las partes interesadas y una posible obligación regulatoria."
  },
  {
    id: 'cp4-047', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Bluharbor Insurance lanzó un modelo de enrutamiento de reclamos. El equipo de ciencia de datos revisa las métricas técnicas en privado cada semana, mientras que los líderes empresariales se quejan de que no tienen visibilidad sobre si el modelo realmente está mejorando el manejo de reclamos. ¿Qué debería implementar el director de proyectos de IA?",
    opciones: [
      { id: 'a', texto: "Entrevistas trimestrales con supervisores de reclamaciones sobre sus impresiones sobre el modelo" },
      { id: 'b', texto: "Un panel de monitoreo que rastrea los indicadores comerciales junto con el desempeño del modelo." },
      { id: 'c', texto: "Un punto permanente de la agenda donde los líderes pueden hacer preguntas al equipo de ciencia de datos." },
      { id: 'd', texto: "Un correo electrónico semanal del equipo de ciencia de datos que resume los resultados técnicos." }
    ],
    correctas: ['b'],
    explicacion: "Un panel de monitoreo que combina indicadores comerciales con el desempeño del modelo brinda a los líderes una visibilidad continua sobre si el comportamiento técnico se está traduciendo en un mejor manejo de reclamos, que es el propósito de supervisar las métricas de las soluciones de IA. Un correo electrónico técnico semanal reafirma la visión de la ciencia de datos sin conectarla con los resultados comerciales. Las entrevistas de impresiones externas son poco frecuentes y subjetivas cuando se dispone de indicadores medidos. Un tema de agenda de preguntas y respuestas hace que la visibilidad dependa de que los líderes sepan qué preguntar y no de las métricas mismas."
  },
  {
    id: 'cp4-048', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Skylark Publishing está evaluando datos para un modelo de renovación de suscripción que debe atender a ambos segmentos de clientes. La revisión de la distribución muestra que casi todos los ejemplos provienen de suscriptores exclusivamente digitales, mientras que los clientes impresos y digitales, que generan la mayor cantidad de ingresos, son escasos en el conjunto de datos. ¿Qué debería hacer el director del proyecto de IA al equipo a hacer a continuación?",
    opciones: [
      { id: 'a', texto: "Documentar el desequilibrio y evaluar su efecto en los segmentos que el modelo debe atender." },
      { id: 'b', texto: "Proceder al desarrollo del modelo ya que el volumen general de registros es alto" },
      { id: 'c', texto: "Ecualice los segmentos inmediatamente eliminando registros solo digitales" },
      { id: 'd', texto: "Diferir la preocupación a la evaluación del modelo donde aparecería sesgo en las métricas." }
    ],
    correctas: ['a'],
    explicacion: "Analizar las distribuciones e identificar posibles sesgos o brechas es el propósito de la evaluación de datos, por lo que se debe documentar el desequilibrio y evaluar su impacto en el segmento crítico para los ingresos subrepresentado antes de modelar. Un volumen general elevado no ayuda a un segmento que apenas contiene datos. Eliminar registros exclusivamente digitales es una solución prematura que descarta información antes de que se comprenda el impacto. Aplazar la evaluación del modelo permite que un problema de representación conocido fluya hacia el desarrollo y surja en la etapa más costosa."
  },
  {
    id: 'cp4-049', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Rowanvale Media está iniciando un proyecto de IA para predecir qué publicaciones impulsarán la suscripción. Antes de que alguien busque conjuntos de datos, el gerente del proyecto de IA analiza de qué debe aprender el modelo: eventos de comportamiento del lector, metadatos de artículos y resultados de suscripción, incluido cómo se debe formatear cada uno para la capacitación. ¿Qué está produciendo el equipo en este taller?",
    opciones: [
      { id: 'a', texto: "Un plan de dotación de personal para los ingenieros de datos que construirán las tuberías." },
      { id: 'b', texto: "Una especificación de los tipos de datos y formatos que requerirá la capacitación del modelo." },
      { id: 'c', texto: "Un punto de referencia de precisión de predicción de suscripciones en editores comparables" },
      { id: 'd', texto: "Un inventario de los sistemas donde residen actualmente los datos del comportamiento del lector." }
    ],
    correctas: ['b'],
    explicacion: "Lo que produce el taller es especificar los tipos de datos y formatos necesarios para la capacitación del modelo, ya que la definición de eventos de lectura, metadatos de artículos y etiquetas de resultados con sus formatos requeridos ocurre antes de que comience la búsqueda de fuentes. Un inventario de sistemas que contienen datos de comportamiento es la actividad posterior de identificación de fuentes, que depende de saber primero qué se necesita. Un plan de dotación de personal aborda los recursos en lugar de la definición de datos. Los puntos de referencia de precisión en editores comparables informan los criterios de éxito en el marco empresarial, no la especificación de qué datos debe aprender el modelo."
  },
  {
    id: 'cp4-050', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyecto de IA en Grandview Retail Analytics está supervisando un modelo de IA que analiza el comportamiento de compra para personalizar las promociones en la tienda. La revisión de privacidad del proyecto identificó que algunas señales de compra se correlacionan con condiciones de salud sensibles. El equipo de seguridad recomienda implementar controles de acceso basados ​​en roles para que solo los miembros autorizados del equipo puedan ver los datos sin procesar. El director del proyecto de IA debe decidir la amplitud del alcance del acceso. ¿Qué principio guía esta decisión?",
    opciones: [
      { id: 'a', texto: "Permita el acceso completo a los datos dentro del entorno de desarrollo de IA, pero restrinja el acceso únicamente en el sistema de producción." },
      { id: 'b', texto: "Restringir el acceso a los datos por completo hasta que la revisión de privacidad esté formalmente cerrada y aprobada." },
      { id: 'c', texto: "Limite el acceso a los datos sin procesar solo a aquellos miembros del equipo cuyas funciones específicas lo requieran para tareas definidas del proyecto." },
      { id: 'd', texto: "Otorgue acceso a todos los miembros del equipo de ciencia de datos para maximizar la velocidad de colaboración durante el desarrollo del modelo." }
    ],
    correctas: ['c'],
    explicacion: "Limitar el acceso solo a aquellos miembros del equipo cuyos roles específicos lo requieren para tareas definidas del proyecto es el principio correcto porque implementar controles de acceso para los datos de entrenamiento de IA requiere permisos de alcance al mínimo necesario para cada rol, lo cual es un principio fundamental de seguridad de datos. Otorgar acceso amplio a todos los miembros del equipo de ciencia de datos prioriza la velocidad sobre la seguridad y es inconsistente con la sensibilidad específica identificada en la revisión de privacidad. Restringir el acceso por completo hasta que se cierre una revisión detiene el progreso del proyecto; los controles innecesarios basados ​​en roles pueden permitir que el trabajo autorizado se lleve a cabo de manera segura. Permitir el acceso total en el entorno de desarrollo y restringirlo en producción crea un sistema de dos estándares donde los datos confidenciales están menos protegidos precisamente durante la fase en la que se procesan más intensamente."
  },
  {
    id: 'cp4-051', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Avalon Biffech está estudiando el alcance de un proyecto de IA para la clasificación de variantes genómicas. Las primeras conversaciones con científicos de datos revelan dos enfoques candidatos para el volumen de datos: una modesta cohorte específica de estudios clínicos existentes y un conjunto de datos mucho más grande que requeriría una nueva infraestructura significativa. El director del proyecto de IA debe formular la pregunta sobre el volumen en términos del objetivo del modelado antes de elegir un enfoque de recopilación. ¿Qué debería impulsar ese encuadre?",
    opciones: [
      { id: 'a', texto: "Qué tan bien satisface cada opción de volumen los requisitos de volumen de datos y la estrategia de muestreo definida para la solución" },
      { id: 'b', texto: "Si el conjunto de datos más grande haría que el proyecto fuera elegible para un nivel de gobernanza más alto" },
      { id: 'c', texto: "La cantidad de ingenieros de datos disponibles para ejecutar el proceso de recopilación." },
      { id: 'd', texto: "Los costos de licencia de la herramienta de modelado asociados con cada enfoque de volumen." }
    ],
    correctas: ['a'],
    explicacion: "Determinar los requisitos de volumen de datos y las estrategias de muestreo para satisfacer el objetivo de modelado es cómo se formula la pregunta sobre el volumen, por lo que la decisión recae en qué enfoque da al modelo de clasificación una señal adecuada en lugar de en el costo, la conveniencia del personal o el nivel de gobierno. Los costos de licencia para las herramientas informan el presupuesto, pero no deben determinar si el modelo tiene suficientes datos para aprender. El tamaño del equipo limita la planificación de la ejecución, pero no define lo que requiere la ciencia. Un nivel de gobernanza más alto puede ser consecuencia de un conjunto de datos más grande, pero la elegibilidad no es una razón para elegirlo."
  },
  {
    id: 'cp4-052', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El modelo de enrutamiento de llamadas de Stratus Telecom ha cumplido todos los objetivos de precisión. Durante la revisión de preparación, el gerente del proyecto de IA descubre que no se ha confirmado que el entorno de producción devuelva predicciones dentro del tiempo de respuesta que necesita la plataforma de llamadas y que no se han realizado pruebas de integración con esa plataforma. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Retener la aprobación hasta que se validen la capacidad de la infraestructura y los requisitos de integración." },
      { id: 'b', texto: "Transfiera los elementos de infraestructura abierta al equipo de operaciones para resolverlos después del lanzamiento." },
      { id: 'c', texto: "Aprobar la implementación con el trabajo de tiempo de respuesta programado como un seguimiento rápido" },
      { id: 'd', texto: "Aprobar la implementación ya que el modelo en sí ha cumplido todos los objetivos de precisión." }
    ],
    correctas: ['a'],
    explicacion: "Revisar la preparación de la implementación, incluidos los requisitos de infraestructura, es parte de la puerta de puesta en funcionamiento, y un tiempo de respuesta no verificado más una integración no probada significa que la solución en su conjunto no está lista aunque el modelo sí lo esté. Aprobar únicamente basándose en la precisión confunde la calidad del modelo con la preparación de la solución y corre el riesgo de que el lanzamiento se agote en la llamada real de volumen. Programar el trabajo del tiempo de respuesta como seguimiento todavía coloca un sistema no probado frente a las personas que llaman en vivo. Entregar las partidas abiertas a operaciones después del lanzamiento transfiere un riesgo absoluto en lugar de cerrarlas antes de la decisión."
  },
  {
    id: 'cp4-053', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Mossvale Landscaping creó una herramienta de IA para la programación de equipos que funciona bien en las pruebas, pero los equipos deben dejar lo que están haciendo e iniciar sesión en una aplicación separada para ver sus recomendaciones. Los supervisores federales predicen que nadie se molestará. ¿Qué debería priorizar el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Recompensar a los equipos que inician sesión en la aplicación independiente con más frecuencia" },
      { id: 'b', texto: "Imprimir las recomendaciones y publicarlas en el depósito cada mañana." },
      { id: 'c', texto: "Mejorar la precisión del modelo para que las recomendaciones justifiquen el paso adicional" },
      { id: 'd', texto: "O Incorporar las recomendaciones en el sistema de despacho que los equipos ya utilizan." }
    ],
    correctas: ['d'],
    explicacion: "Incorporar las recomendaciones en el sistema de despacho que los equipos de despacho ya usan elimina la interrupción del flujo de trabajo que los supervisores predicen que acabará con el uso, que es el corazón de la planificación de la integración. La impresión de recomendaciones en el depósito crea una solución alternativa de papel obsoleto que pierde la puntualidad que la herramienta ofrece. Recompensar los inicios de sesión frecuentes soborna a las personas para que toleren la fricción en lugar de eliminarla. Mejorar la precisión no ayuda si las recomendaciones nunca se ven porque se omite el paso adicional. La planificación de la integración con sistemas y flujos de trabajo existentes es un elemento nombrado en la gestión de los riesgos de adopción e integración."
  },
  {
    id: 'cp4-054', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Redwood Logistics concluyó un proyecto de enrutamiento de carga mediante IA de tres años de duración que redujo sustancialmente los costos operativos. El director del programa está compilando el informe final y señala que tres equipos separados utilizaron diferentes enfoques de registro de ejecución durante la construcción del modelo, lo que dificulta reconstruir qué configuraciones de modelo se probaron. ¿Qué debería documentar el director del programa para ayudar a que proyectos futuros eviten esta situación?",
    opciones: [
      { id: 'a', texto: "Capte la inconsistencia del seguimiento de experimentos como una lección de proceso y recomiende estandarizar las prácticas de seguimiento de experimentos antes de que comience el desarrollo del modelo." },
      { id: 'b', texto: "Solicite al equipo de ciencia de datos que unifique retroactivamente los registros del experimento antes de finalizar el informe." },
      { id: 'c', texto: "Omita el experimento que rastrea la inconsistencia del informe porque el proyecto tuvo éxito a pesar de ello." },
      { id: 'd', texto: "Describa sólo las configuraciones exitosas que se probaron, ya que las demás no se utilizaron en producción." }
    ],
    correctas: ['a'],
    explicacion: "Captar la inconsistencia del seguimiento como una lección del proceso y recomendar la estandarización cumple con la responsabilidad del PM de IA de documentar lo que funcionó bien y lo que necesita mejorar, produciendo una guía práctica para proyectos futuros. Omitir el hallazgo porque el proyecto tuvo éxito pierde la oportunidad de prevenir un problema de reproducibilidad en un proyecto futuro, menos indulgente. Documentar sólo las configuraciones exitosas proporciona un registro incompleto que engañará a los futuros profesionales. Unificar retroactivamente los registros de experimentos puede ser inviable e introduce una interpretación retrospectiva en el registro histórico."
  },
  {
    id: 'cp4-055', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor está desarrollando un motor de recomendación para sugerir equipos de senderismo a los clientes. El director del proyecto de IA está revisando una propuesta del equipo de ciencia de datos que sugiere utilizar un enfoque de agrupación en clústeres no supervisado. Una parte interesada de senior argumenta que la empresa ya cuenta con abundantes datos históricos de compras con resultados conocidos y quiere predicciones vinculadas directamente con el comportamiento de compra pasado. ¿Qué debería hacer primero el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Solicite al equipo de ciencia de datos que evalúe si un enfoque de aprendizaje supervisado se ajusta mejor a los datos históricos etiquetados y al objetivo de predicción." },
      { id: 'b', texto: "Encargar un nuevo esfuerzo de recopilación de datos para construir un conjunto de datos sin etiquetar más grande antes de seleccionar cualquier enfoque." },
      { id: 'c', texto: "Aprobar el enfoque de agrupación en clústeres no supervisados ​​porque no requiere datos etiquetados y es más rápido de implementar." },
      { id: 'd', texto: "Escalar el desacuerdo al patrocinador ejecutivo y diferir la decisión del algoritmo hasta que se celebre una reunión de consenso." }
    ],
    correctas: ['a'],
    explicacion: "Cuando se dispone de datos históricos etiquetados con resultados conocidos y el objetivo es la predicción vinculada al comportamiento pasado, un enfoque de aprendizaje supervisado es la opción adecuada. La función del director de proyectos de IA es garantizar que la selección del algoritmo se alinee con la estructura de datos disponible y el objetivo comercial, por lo que facilitar la evaluación de un enfoque supervisado es el primer paso correcto. Aprobar la agrupación no supervisada sin evaluar alternativas Lonores el activo de datos etiquetado que identificó la parte interesada. Encargar una nueva recopilación de datos antes de evaluar los datos existentes desperdicia recursos y retrasa el proyecto. Aplazar hasta una reunión de consenso ejecutivo es prematuro cuando el equipo de ciencia de datos puede realizar una evaluación técnica para resolver la pregunta_"
  },
  {
    id: 'cp4-056', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Wexbridge Credit Union está evaluando si un modelo de inteligencia artificial podría predecir la morosidad temprana de los préstamos. El patrocinador declara resuelta la cuestión de los datos porque el sistema central contiene una década de registros de préstamos. El director del proyecto de IA descubre que las sucursales registraron los resultados de los pagos de forma diferente durante años y que los registros más antiguos carecen de campos clave. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Inicie el desarrollo del modelo y deje que los resultados del entrenamiento revelen cualquier debilidad de los datos." },
      { id: 'b', texto: "Examinar la coherencia, integridad y etiquetado de los registros antes de juzgar que los datos son adecuados." },
      { id: 'c', texto: "Planee comprar un conjunto de datos externo para que los registros internos se vuelvan irrelevantes" },
      { id: 'd', texto: "Acepte la conclusión del patrocinador porque una década de registros es un volumen sustancial." }
    ],
    correctas: ['b'],
    explicacion: "La existencia de datos no significa que los datos sean adecuados, por lo que la evaluación debe examinar si los resultados están etiquetados de manera consistente en todas las ramas, si los campos clave están completos y si los registros realmente respaldan la tarea de predicción, antes de declarar la viabilidad. Aceptar la conclusión sobre volumen por sí solo confunde cantidad con calidad, y las etiquetas inconsistentes envenenan cualquier volumen existente. El volcado a un conjunto de datos externo abandona los datos internos antes de evaluarlos e importa problemas de relevancia desconocidos. Dejar que los resultados de la capacitación expongan las debilidades descubre en la fase más costosa lo que una revisión enfocada podría establecer ahora."
  },
  {
    id: 'cp4-057', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Beacon Health está implementando un modelo de clasificación clínica para priorizar los casos de pacientes. El equipo de ciencia de datos ha documentado su proceso de selección de algoritmos de manera informal en un hilo de chat compartido. Un oficial de cumplimiento señala que la política de gobernanza de la IA de la organización requiere documentación formal del fundamento de la selección del modelo antes de que pueda continuar con la implementación. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Continúe con la implementación y solicite al equipo de ciencia de datos que rellene la documentación después de la puesta en marcha." },
      { id: 'b', texto: "Reemplace el hilo de chat informal con una cadena de correo electrónico formal para cumplir con el estándar de documentación." },
      { id: 'c', texto: "Trabaje con el equipo de ciencia de datos para producir criterios formales de selección de algoritmos y documentación de decisiones para satisfacer el requisito de gobernanza." },
      { id: 'd', texto: "Solicitar que el oficial de cumplimiento renuncie al requisito de documentación dada la urgencia del caso de uso clínico." }
    ],
    correctas: ['c'],
    explicacion: "Revisar los criterios de selección de algoritmos y la documentación de decisiones es una responsabilidad fundamental del director del proyecto de IA en la supervisión de la técnica del modelo. Cuando la política de gobernanza requiere documentación formal antes del despliegue, la acción correcta es presentar esa documentación, no posponerla ni solicitar una exención. Proceder primero a la implementación y completar la documentación de después viola la política de gobernanza y crea un riesgo de auditoría. Solicitar una exención socava el marco de cumplimiento sin justificación. Reemplazar un hilo de chat con una cadena de correo electrónico no equivale a una justificación formal documentada y alineada con los criterios de selección."
  },
  {
    id: 'cp4-058', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los ejecutivos de Bluewater Hospitality Group han ordenado que la IA se aplique en algún lugar de los servicios para huéspedes, pero no están de acuerdo sobre qué problema debería resolver. Se le pide al director del proyecto de IA que consolide la iniciativa. ¿Qué debe hacer primero el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Haga un inventario de los datos que la empresa ya recopila sobre los huéspedes." },
      { id: 'b', texto: "Entreviste a las partes interesadas para descubrir puntos débiles operativos específicos" },
      { id: 'c', texto: "Seleccione un caso de uso de IA probado de la industria hotelera" },
      { id: 'd', texto: "Realice una pequeña prueba de chatbot para generar impulso" }
    ],
    correctas: ['b'],
    explicacion: "La identificación del problema a resolver comienza con entrevistas a las partes interesadas que descubren puntos débiles operativos concretos, convirtiendo una directiva vaga en una necesidad empresarial definida. Seleccionar un caso de uso probado de la industria importa el problema de otra persona y puede no coincidir con lo que perjudica a esta empresa. Realizar una prueba de chatbot elige una solución antes de que se haya elegido cualquier problema, el clásico error de priorizar la tecnología. Hacer un inventario de los datos de los huéspedes es valioso más adelante, una vez que existe un problema para evaluar los datos."
  },
  {
    id: 'cp4-059', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor está entrenando un modelo de recomendación de equipo personalizado. A mitad de la capacitación, el director del proyecto de IA observa que la utilización de recursos computacionales ha aumentado inesperadamente, lo que ha provocado que las ejecuciones de entrenamiento excedan el cronograma planificado. El equipo de ciencia de datos sospecha que la arquitectura del modelo puede necesitar ajustes, pero no existe un seguimiento sistemático del progreso de la capacitación. ¿Qué debe hacer primero el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Establecer un seguimiento del progreso de la capacitación y la utilización de recursos computacionales para diagnosticar la causa antes de decidir sobre cambios arquitectónicos." },
      { id: 'b', texto: "Aprobar un cambio arquitectónico basado en las sospechas del equipo y reiniciar el entrenamiento." },
      { id: 'c', texto: "Ampliar el cronograma del proyecto duplicando la estimación original y continuar sin realizar más investigaciones." },
      { id: 'd', texto: "Detener inmediatamente la capacitación y pasar al liderazgo ejecutivo para la aprobación del presupuesto de emergencia." }
    ],
    correctas: ['a'],
    explicacion: "La gestión del entrenamiento del modelo de IA incluye monitorear el progreso del entrenamiento y la utilización de recursos computacionales. Sin un monitoreo sistemático, se desconoce la causa raíz del aumento de recursos, lo que hace que las decisiones arquitectónicas prematuras o los aumentos presupuestarios sean injustificados. Establecer primero el monitoreo proporciona los datos necesarios para diagnosticar si el problema es arquitectónico, relacionado con los datos o de infraestructura. Detenerlo inmediatamente y escalarlo para un presupuesto de emergencia omite el paso de diagnóstico y puede ser innecesario si la causa es un problema de configuración. Aprobar un cambio de arquitectura bajo sospecha sin monitorear los datos corre el riesgo de un diagnóstico incorrecto y un reinicio en vano. Duplicar el cronograma sin investigar evita el problema sin comprenderlo ni resolverlo."
  },
  {
    id: 'cp4-060', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cedarline Grocers implementó un modelo que predice la demanda semanal de productos. El rendimiento fue sólido en el lanzamiento, pero a lo largo de varios meses la calidad de las predicciones ha disminuido a medida que los hábitos de compra cambiaron hacia los pedidos en línea. Actualmente, el equipo no tiene forma de saber cuándo el modelo se ha quedado demasiado atrás. ¿Qué debería establecer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Una regla para reconstruir el modelo en un calendario fijo independientemente del comportamiento" },
      { id: 'b', texto: "Un canal para que los gerentes de tienda informen sobre predicciones que parecen incorrectas" },
      { id: 'c', texto: "Monitoreo continuo que detecta la disminución del desempeño y desencadena el reentrenamiento" },
      { id: 'd', texto: "Un conjunto de características más grande para que el modelo capture más comportamiento de compra." }
    ],
    correctas: ['c'],
    explicacion: "El monitoreo continuo con detección de deriva vincula el reentrenamiento con la evidencia de deterioro, que es la práctica de gobernanza del modelo para mantener un modelo implementado alineado con las condiciones cambiantes. Reconstruir en un calendario fijo desperdicia esfuerzo cuando el modelo está en buen estado o reacciona demasiado tarde cuando el comportamiento cambia entre reconstrucciones. Agregar más funciones es un cambio de desarrollo que no crea la capacidad faltante para detectar una disminución en la producción. Los informes del gerente sobre predicciones extrañas son anecdóticos y llegan solo después de que los malos pronósticos ya hayan afectado los pedidos."
  },
  {
    id: 'cp4-061', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Lantage Mills Textiles está preparando una lectura ejecutiva sobre la preparación de datos para un modelo de predicción de defectos. Al revisar la plataforma, el gerente del proyecto de IA ve un cuadro resumen que presenta la cobertura general como fuerte y oculta que una línea importante de telas casi no tiene registros utilizables. La presentación es mañana ¿Qué debe hacer el director de proyectos de IA?",
    opciones: [
      { id: 'a', texto: "Mueva el cuadro a un apéndice y comience con puntos destacados verbales." },
      { id: 'b', texto: "Mencione verbalmente la brecha entre la línea de tejido y deje el gráfico sin cambios." },
      { id: 'c', texto: "Revise la imagen para que la brecha entre la línea de tela se muestre honestamente." },
      { id: 'd', texto: "Conserve el gráfico ya que sus cifras agregadas son técnicamente precisas." }
    ],
    correctas: ['c'],
    explicacion: "Revisar la imagen para mostrar la brecha honestamente es correcto porque los informes y visualizaciones para el liderazgo deben representar fielmente los hallazgos, y los ejecutivos se basan en lo que muestran los gráficos más que en las advertencias habladas. Mantener el gráfico porque los agregados son técnicamente precisos utiliza números verdaderos para crear una impresión falsa de preparación uniforme. Una mención verbal junto a un gráfico engañoso deja al artefacto duradero contando la historia equivocada una vez finalizada la reunión. Mover el gráfico a un apéndice oculta la distorsión en lugar de corregirla."
  },
  {
    id: 'cp4-062', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Juniper Realty Group obtuvo la licencia de un conjunto de datos demográficos de vecindarios hace años para análisis de marketing. El equipo de IA ahora quiere incorporar el mismo conjunto de datos en la capacitación para un modelo de valoración de viviendas. Los datos ya están dentro de los sistemas de la empresa y el equipo no ve ningún obstáculo. ¿Qué debería hacer el director del proyecto de IA antes de permitir que t entre en el proyecto?",
    opciones: [
      { id: 'a', texto: "Restringir el conjunto de datos a pruebas de modelos en lugar de entrenamiento" },
      { id: 'b', texto: "Aprobar la reutilización ya que la organización ya pagó por los datos." },
      { id: 'c', texto: "Anonimizar los registros para que las condiciones de la licencia ya no se apliquen" },
      { id: 'd', texto: "O Verificar que los términos de la licencia permitan el uso de los datos para la capacitación del modelo." }
    ],
    correctas: ['d'],
    explicacion: "Verificar que la licencia permite el uso de capacitación es correcto porque se requieren verificar los derechos de uso cada vez que los datos se aplican a un propósito según su acuerdo original, y muchas licencias restringen el uso derivado o de aprendizaje automático. La reutilización aproximada porque los datos se pagaron confunde posesión con autorización. La anonimización de los registros aborda la exposición de los datos personales, pero no libera a la organización de los términos contractuales de la licencia. Restringir el conjunto de datos a pruebas es un límite arbitrario que aún constituye un uso que la licencia puede no permitir."
  },
  {
    id: 'cp4-063', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Westbrook Telecom está implementando un sistema de inteligencia artificial que enruta las llamadas de servicio al cliente a agentes especializados en función de la complejidad prevista de la llamada. El proyecto se acerca a su hito de puesta en marcha. El director del proyecto de IA debe asegurarse de que exista un registro formal que demuestre que las partes interesadas técnicas y comerciales clave revisaron y aprobaron el sistema antes de su implementación, y que se documentaron todas las condiciones que adjuntaron para la aprobación. ¿Qué artefacto satisface este requisito?",
    opciones: [
      { id: 'a', texto: "Una grabación de demostración del sistema en acción enviada a todas las partes interesadas por correo electrónico de forma asincrónica." },
      { id: 'b', texto: "Un informe del estado del proyecto presentado al director del programa que resume el progreso con respecto al cronograma original del proyecto." },
      { id: 'c', texto: "Un registro de aprobación de las partes interesadas que documenta el punto de decisión de avance o detención, identifica quién aprobó la implementación y registra cualquier condición o acciones de seguimiento requeridas." },
      { id: 'd', texto: "Un registro de riesgos que enumera todos los riesgos identificados durante el proyecto junto con sus estrategias de mitigación y su estado actual." }
    ],
    correctas: ['c'],
    explicacion: "Un registro de aprobación de las partes interesadas que documenta el punto de decisión de avance o detención, identificar a los aprobadores y registrar cualquier condición es el elemento que crea el registro de gobernanza formal que el director del proyecto necesita antes de la puesta en marcha. Una grabación de demostración compartida por correo electrónico de puede informar a las partes interesadas, pero no constituye una aprobación formal documentada ni captura ninguna de las condiciones adjuntas por las partes interesadas. Un registro de riesgos documenta los riesgos y las mitigaciones, pero no registra quién aprobó el despliegue o la decisión de proceder en una puerta específica. Un informe de estado del proyecto muestra el progreso del cronograma pero no documenta la decisión de aprobación formal ni las condiciones en el hito de puesta en marcha."
  },
  {
    id: 'cp4-064', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Thornquay Fisheries tiene presupuesto solo para una iniciativa A\" este año y dos candidatos fuertes: un modelo de pronóstico de capturas y un modelo de o$mización de combustible. El equipo de liderazgo se reunirá el próximo mes para elegir. ¿Qué debería aportar el director del programa de IA a esa reunión?",
    opciones: [
      { id: 'a', texto: "Una demostración del modelo de pronóstico creado por el proveedor." },
      { id: 'b', texto: "Un análisis en paralelo de los costos y beneficios esperados de cada proyecto." },
      { id: 'c', texto: "Una propuesta para financiar ambos proyectos a media intensidad" },
      { id: 'd', texto: "Una recomendación para financiar el proyecto que prefieran los capitanes de flota" }
    ],
    correctas: ['b'],
    explicacion: "Un análisis paralelo de los costos y beneficios esperados de cada proyecto brinda al liderazgo el panorama financiero comparativo que requiere la decisión de financiamiento. Ceder a la preferencia del capitán de flota sustituye el análisis por la popularidad y puede favorecer la inversión más débil. Financiar ambos a la mitad de intensidad evita la decisión y corre el riesgo de dos esfuerzos sin potencia en lugar de uno exitoso. Una demostración de un proveedor muestra solo un candidato y presenta capacidad en lugar de economía. La creación de un análisis de costo-beneficio para la toma de decisiones de las partes interesadas es un elemento explícito para determinar el retorno de la inversión."
  },
  {
    id: 'cp4-065', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El gerente de proyectos de inteligencia artificial de Yarrowbank Credit Union está preparando la presentación final de un proyecto completo de procesamiento de documentos de préstamos para el comité ejecutivo. El borrador está lleno de curvas de evaluación de modelos, opciones de umbral y diagramas de canalización, y un revisor piloto del equipo de finanzas dijo que no podía decir si el proyecto había ayudado al negocio. ¿Cómo debería el director del proyecto revisar la presentación?",
    opciones: [
      { id: 'a', texto: "Replantear el contenido en torno a los resultados comerciales, como el tiempo y el costo de procesamiento, trasladando los detalles técnicos a un apéndice." },
      { id: 'b', texto: "Mantenga la profundidad técnica y agregue un glosario para que los ejecutivos puedan decodificar la terminología." },
      { id: 'c', texto: "Pídale al científico de datos principal que presente, ya que el material es técnico." },
      { id: 'd', texto: "Acorte la plataforma eliminando los resultados de evaluación más débiles" }
    ],
    correctas: ['a'],
    explicacion: "Al traducir los resultados en resultados comerciales, el comité se preocupa con la evidencia técnica disponible en un apéndice, comunica el valor del proyecto en el lenguaje de la audiencia, que es el deber principal al presentar los resultados finales al liderazgo. Agregar un glosario todavía obliga a los ejecutivos a hacer la traducción ellos mismos y deja la historia de valor enterrada. Intercambiar al científico de datos principal cambia al presentador sin corregir la discrepancia de la audiencia en el contenido. Eliminar los resultados de evaluación más débiles es un informe selectivo que tergiversa el proyecto en lugar de aclararlo."
  },
  {
    id: 'cp4-066', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Riverbend Utilities está iniciando un proyecto de inteligencia artificial para predecir fallas en los transformadores. En las sesiones de planificación, los ingenieros siguen debatiendo qué tan buenas deben ser las predicciones antes de que se pueda confiar en la herramienta en el campo, y el debate está estancando el cronograma. ¿Cuál es la mejor acción para el director de proyectos de IA?",
    opciones: [
      { id: 'a', texto: "Adoptar como estándar la mejor precisión alcanzada durante el entrenamiento" },
      { id: 'b', texto: "Establecer objetivos de rendimiento técnico acordados antes de que comience el desarrollo." },
      { id: 'c', texto: "Deje que la fase de evaluación revele qué desempeño se puede lograr" },
      { id: 'd', texto: "Pida a los equipos de campo que juzguen la confiabilidad después del lanzamiento." }
    ],
    correctas: ['b'],
    explicacion: "Definir desde el inicio los indicadores y objetivos de rendimiento técnico proporciona al desarrollo una meta verificable. Esperar a que la evaluación determine qué rendimiento aceptar invierte la lógica: el proyecto terminaría juzgado por lo que obtuvo y no por lo que necesita el negocio. La mejor precisión de entrenamiento tampoco garantiza resultados con datos nuevos ni refleja necesariamente los requisitos de campo."
  },
  {
    id: 'cp4-067', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Dunmore Textiles, el conjunto de datos sobre defectos de producción ha agotado sus controles de integridad. Los científicos de datos piden tiempo para trazar distribuciones de valores, examinar valores atípicos y estudiar relaciones entre variables antes de redactar un plan de preparación. El patrocinador considera que esto es un retraso innecesario. ¿Cómo debería responder el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Apoyar el análisis exploratorio porque revela características que dan forma a fases posteriores." },
      { id: 'b', texto: "Posponer la investigación hasta que la evaluación del modelo proporcione sus propias métricas." },
      { id: 'c', texto: "Limitar a los científicos a producir solo las métricas que solicita el patrocinador." },
      { id: 'd', texto: "Pasar directamente a la preparación ya que las comprobaciones de integridad ya pasaron" }
    ],
    correctas: ['a'],
    explicacion: "Realizar un análisis exploratorio para comprender las características de los datos es una parte explícita de la supervisión de la evaluación de datos, y lo que revela sobre distribuciones, valores atípicos y relaciones da forma directamente al plan de preparación que el equipo está a punto de escribir. Las comprobaciones de integridad confirman que los datos llegaron, no que el equipo comprenda su comportamiento. Restringir a los científicos a métricas solicitadas por el patrocinador filtra el descubrimiento a través de alguien que no ha visto los datos. Esperar la evaluación del modelo significa diseñar la preparación a ciegas y encontrar las sorpresas en el punto más caro."
  },
  {
    id: 'cp4-068', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Helix Biotech está ejecutando un programa de investigación de IA de varios años que se cruza con regulaciones farmacéuticas, estándares de datos clínicos y marcos nacionales de gobernanza de IA emergentes. El administrador del programa de IA debe garantizar que no surja ninguna brecha de cumplimiento a medida que estas regulaciones ¿Qué papel debe desempeñar el administrador del programa de manera continua?",
    opciones: [
      { id: 'a', texto: "Delegar todo el seguimiento normativo al equipo de cumplimiento y centrar la función del director del programa en los hitos técnicos." },
      { id: 'b', texto: "Construir una base de datos regulatoria integral al inicio del proyecto y tratarla como una referencia estable durante todo el programa." },
      { id: 'c', texto: "Realizar una revisión legal anual al comienzo de cada año fiscal y aplicar los hallazgos una vez al año." },
      { id: 'd', texto: "Coordinarse periódicamente con los equipos legales y de cumplimiento para monitorear los cambios regulatorios e incorporarlos en los procesos de gobernanza de la IA." }
    ],
    correctas: ['d'],
    explicacion: "La coordinación continua con los equipos legales y de cumplimiento para monitorear los cambios regulatorios es responsabilidad del gerente del programa para el gobierno de la IA. Una revisión anual crea una brecha durante la cual nuevos requisitos regulatorios pueden entrar en vigor sin ser abordados. Delegar todo el seguimiento regulatorio al equipo de cumplimiento elimina la función de supervisión del gerente del programa y crea el riesgo de que los cambios regulatorios que afectan el diseño del modelo o el uso de datos no se traduzcan en acciones del proyecto. Una base de datos regulatoria creada al inicio del proyecto se vuelve obsoleta a medida que las regulaciones evolucionan y no puede servir como referencia estable durante un programa de varios años"
  },
  {
    id: 'cp4-069', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pepperhill Catering quiere señalar las facturas de los proveedores que difieren del historial de facturación establecido de cada proveedor a medida que llegan, de modo que los posibles cargos duplicados o inflados se revisen antes del pago. El director del proyecto de IA está asignando este problema empresarial a la categoría más adecuada de capacidad de IA. ¿Qué categoría encaja mejor?",
    opciones: [
      { id: 'a', texto: "Detección de patrones y anomalías." },
      { id: 'b', texto: "Hiperpersonalización de las experiencias de los proveedores." },
      { id: 'c', texto: "Interacción humana conversacional" },
      { id: 'd', texto: "Reconocimiento de imágenes de documentos." }
    ],
    correctas: ['a'],
    explicacion: "Detectar transacciones que se desvían de las normas establecidas es exactamente lo que aborda la detección de patrones y anomalías, aprender cómo es la facturación normal y sacar a la luz las desviaciones de ella para su revisión. La hiperpersonalización de las experiencias de los proveedores adapta las interacciones a personas individuales, lo cual no es necesario aquí. El reconocimiento de imágenes de documentos convierte entradas no estructuradas en etiquetas identificadas, y el problema se refiere a la desviación en el comportamiento de las transacciones en lugar de identificar el contenido. La interacción humana conversacional maneja el diálogo en lenguaje natural, lo que resuelve una necesidad de comunicación en lugar de una necesidad de detección de desviaciones."
  },
  {
    id: 'cp4-070', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Larchdale Hospital introducirá una herramienta de inteligencia artificial que sugiere prioridades de clasificación a las enfermeras de emergencia. Los primeros comentarios muestran que las enfermeras experimentadas dudan de que el software pueda sopesar los matices clínicos, y varias han dicho que lo ignorarán. Faltan tres meses para su lanzamiento. ¿Qué acción debería tomar el director del programa de IA para generar aceptación?",
    opciones: [
      { id: 'a', texto: "Retrasar la implementación hasta que las enfermeras escépticas se transfieran o se jubilen" },
      { id: 'b', texto: "Hacer uso obligatorio de la herramienta y auditar el cumplimiento desde el primer turno" },
      { id: 'c', texto: "Limitar la implementación a enfermeras recién contratadas que no tengan hábitos establecidos." },
      { id: 'd', texto: "O Involucrar a enfermeras senior respetadas como primeras usuarias que ayuden a dar forma y dar fe de la herramienta." }
    ],
    correctas: ['d'],
    explicacion: "Reclutar a médicos experimentados y respetados como primeros usuarios aborda directamente la barrera de la credibilidad, porque el respaldo de las personas que probaron e influyeron en la herramienta es mucho más persuasivo para los profesionales escépticos que cualquier directiva. Exigir su uso en auditorías de cumplimiento produce resentimiento y clics superficiales en lugar de una confianza genuina en las sugerencias. Esperar a que los escépticos se vayan abandona el problema de la ado*on en lugar de gestionarlo y paraliza el proyecto indefinidamente. Restringir la implementación a las nuevas contrataciones concede a la mayoría experimentada, el mismo grupo cuyas decisiones de clasificación debe respaldar la herramienta."
  },
  {
    id: 'cp4-071', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "GaleharSor Ports se está preparando para entregar su modelo de programación de atraques a un grupo de operaciones de infraestructura que nunca ha respaldado un sistema de aprendizaje automático. La fecha límite se acerca y al gerente de operaciones le preocupa que el grupo no sepa cómo responder cuando el modelo se comporte mal. ¿Qué debería organizar el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Otorgar al grupo de operaciones acceso de lectura al repositorio de código del proyecto." },
      { id: 'b', texto: "Ofrecer sesiones de capacitación y materiales de referencia al grupo antes de que asuma el control." },
      { id: 'c', texto: "Configure la solución para que el grupo de operaciones nunca necesite modificarla" },
      { id: 'd', texto: "Recomendar contratar personal de reemplazo que ya tenga experiencia en aprendizaje automático." }
    ],
    correctas: ['b'],
    explicacion: "Impartir capacitación y entregar materiales de referencia antes del traspaso permite que el grupo de operaciones reconozca y atienda comportamientos anómalos del modelo. Dar acceso al repositorio no transfiere por sí solo ese conocimiento, contratar reemplazos desperdicia la experiencia operativa existente y ninguna configuración puede asegurar que un sistema de aprendizaje automático jamás necesite intervención."
  },
  {
    id: 'cp4-072', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Waverly Consumer Goods está ejecutando un proyecto de inteligencia artificial para predecir las tasas de devolución de productos antes del lanzamiento. Tres meses después de iniciado el proyecto, un ingeniero de datos senior deja la empresa. El director del proyecto se da cuenta de que este ingeniero era la única persona que sabía qué versión específica del conjunto de datos de entrenamiento se utilizó en la creación del modelo más reciente y qué transformaciones se aplicaron. El director del proyecto debe evitar que esta brecha de conocimiento vuelva a ocurrir. ¿Qué debería establecer el director del proyecto en el futuro?",
    opciones: [
      { id: 'a', texto: "Un catálogo de datos mantenido por el gerente de ingeniería de datos que enumera todos los conjuntos de datos utilizados en los proyectos de inteligencia artificial de la empresa." },
      { id: 'b', texto: "Un requisito de que todas las decisiones técnicas sean aprobadas por al menos dos miembros del equipo para evitar puntos únicos de falla." },
      { id: 'c', texto: "Control de versiones para modelos, datos y procesos de capacitación que registra las versiones de los conjuntos de datos y los pasos de transformación como parte de la documentación de responsabilidad del proyecto." },
      { id: 'd', texto: "Una política que exige que los empleados salientes realicen una sesión de transferencia de conocimientos de dos horas antes de su último día." }
    ],
    correctas: ['c'],
    explicacion: "Establecer un control de versiones para modelos, datos y procesos de capacitación que capture las versiones de los conjuntos de datos y los pasos de transformación como parte de la documentación de rendición de cuentas elimina la dependencia del conocimiento de una sola persona. hace que la información sea institucional y rastreable. Una sesión de transferencia de conocimientos de dos horas al salir es mejor que nada, pero es informal, depende del retiro del empleado que sale y no crea un registro persistente. Exigir doble aprobación para las decisiones técnicas mejora la gobernanza, pero no garantiza que las decisiones y sus artefactos estén documentados de manera recuperable. Un catálogo de datos de toda la empresa es útil para el descubrimiento, pero generalmente es un índice de nivel superior y no registra la versión del conjunto de datos a nivel de modelo ni los detalles de transformación."
  },
  {
    id: 'cp4-073', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Amberfield Agriculture opera varios modelos de rendimiento de cultivos que fueron implementados en diferentes momentos por diferentes equipos. Algunos no han sido revisados ​​desde su lanzamiento, otros se modifican constantemente y nadie puede decir cuándo se debe actualizar o retirar un modelo determinado. ¿Qué debería establecer el director del programa de IA?",
    opciones: [
      { id: 'a', texto: "Una política de ejecutar cada modelo sin cambios hasta que falle visiblemente" },
      { id: 'b', texto: "Una instrucción permanente para volver a entrenar cada modelo cada vez que lleguen nuevos datos." },
      { id: 'c', texto: "Un esfuerzo de consolidación que fusiona todos los modelos en un único sistema" },
      { id: 'd', texto: "Procedimientos del ciclo de vida que rigen cuándo se revisan, actualizan o retiran los modelos." }
    ],
    correctas: ['d'],
    explicacion: "Los procedimientos de gestión del ciclo de vida del modelo otorgan a cada modelo implementado puntos definidos para revisión, actualización y retiro, lo que reemplaza el tratamiento inconsistente que los equipos han estado aplicando. Ejecutar modelos hasta que una falla visible signifique daño a las decisiones de plantación es el detonante de la acción. El reentrenamiento con cada nueva llegada de datos oscila hacia el extremo opuesto, consumiendo esfuerzo continuamente sin evidencia de que se necesite algún cambio. Fusionar todo en un solo sistema es un proyecto de arquitectura que no responde a la pregunta subyacente de cómo se debe gestionar la vida de cualquier modelo."
  },
  {
    id: 'cp4-074', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Fairhaven Credit Union está analizando el alcance de un modelo de predicción de incumplimiento de préstamos. El director del proyecto de IA confirma que ningún sistema interno captura las condiciones económicas regionales que los científicos de datos dicen que requiere el modelo. Por lo demás, el mapa de fuentes interno está completo. ¿Qué debería hacer el director del proyecto de IA para cerrar esta brecha?",
    opciones: [
      { id: 'a', texto: "Haga que el equipo obtenga indicadores sustitutos de los patrones de transacciones de los miembros." },
      { id: 'b', texto: "Aplazar los indicadores económicos a una iteración posterior del modelo." },
      { id: 'c', texto: "Volver a encuestar los sistemas internos en caso de que se hayan pasado por alto los indicadores." },
      { id: 'd', texto: "O Evaluar proveedores externos con licencia que publican los indicadores económicos faltantes." }
    ],
    correctas: ['d'],
    explicacion: "Evaluar proveedores externos es correcto porque explorar fuentes externas es la respuesta estándar cuando los datos requeridos no existen dentro de la organización. Volver a inspeccionar los sistemas internos desperdicia esfuerzos, ya que el equipo ya ha confirmado que los indicadores no se capturan en ninguna parte internamente. Aplazar los indicadores debilita el modelo frente a un requisito que los científicos de datos ya han validado como necesario. Derivar sustitutos de las transacciones de los miembros corre el riesgo de tener características circulares y no reflejaría las verdaderas condiciones regionales fuera de la base de miembros."
  },
  {
    id: 'cp4-075', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sablewood Hotels está ultimando el plan para poner en producción un modelo dinámico de precios de habitaciones. Un crítico señala que el plan describe los pasos de instalación en detalle, pero no dice nada sobre lo que sucede si el nuevo modelo causa errores graves de precios después del lanzamiento. ¿Qué debería agregar el director del proyecto de IA al plano?",
    opciones: [
      { id: 'a', texto: "Un compromiso de monitorear de cerca los resultados de los precios durante las primeras semanas." },
      { id: 'b', texto: "Un cronograma de comunicaciones que anuncia la nueva capacidad de fijación de precios al personal del hotel." },
      { id: 'c', texto: "Un procedimiento para volver al enfoque de fijación de precios anterior si el modelo se comporta mal" },
      { id: 'd', texto: "Una fase de pruebas ampliada para que los errores graves no lleguen a producción" }
    ],
    correctas: ['c'],
    explicacion: "Un plan de implementación necesita una forma documentada de volver al enfoque de precios anterior para que la empresa pueda recuperarse rápidamente si el modelo se comporta mal en producción, y esta es exactamente la brecha que encontró el revisor. Un cronograma de comunicaciones respalda la adopción pero no ofrece protección contra errores de precios. El monitoreo detecta problemas pero deja al equipo sin una acción preparada una vez que se detecta un problema. Ninguna cantidad de pruebas adicionales puede garantizar que los errores graves nunca lleguen a producción, por lo que las pruebas por sí solas no pueden sustituir una ruta de recuperación preparada."
  },
  {
    id: 'cp4-076', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Glacier Point Outfitters quiere entrenar un modelo de recomendación de productos en base a su historial completo de compras de clientes, que incluye muchos clientes en Europa. Los registros se recopilaron originalmente bajo un lenguaje de consentimiento que cubre únicamente las comunicaciones de marketing. El equipo de datos no ve ninguna barrera técnica para utilizarlo todo. ¿Qué debe hacer el responsable del proyecto de IA antes de aprobar los registros europeos de formación?",
    opciones: [
      { id: 'a', texto: "Eliminar los nombres de los clientes para que los registros queden fuera de la regulación" },
      { id: 'b', texto: "Continuar porque los clientes ya dieron su consentimiento para las comunicaciones de marketing." },
      { id: 'c', texto: "Maneje los registros europeos de la misma manera que los nacionales para mantener la coherencia." },
      { id: 'd', texto: "O Confirmar que una base legal según el RGPD cubre este nuevo propósito de procesamiento" }
    ],
    correctas: ['d'],
    explicacion: "Confirmar una base legal según el RGPD para el nuevo propósito es correcto porque la verificación de cumplimiento debe verificar que cada uso previsto de los datos personales esté permitido, y el consentimiento recopilado para marketing no se extiende automáticamente a la capacitación de modelos. Proceder con el antiguo consentimiento de comercialización ignora la limitación del propósito, un principio regulatorio fundamental. Eliminar los nombres no desregula los registros, ya que los datos que aún pueden vincularse a individuos siguen siendo datos personales. Tratar los registros europeos como si fueran nacionales aplica el estándar más débil a los clientes con las protecciones más fuertes."
  },
  {
    id: 'cp4-077', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El gerente del programa de inteligencia artificial de Colton Insurance Group está supervisando un modelo de predicción de la gravedad de las reclamaciones. Los revisores internos señalan que el modelo produce puntuaciones de gravedad diferentes para las reclamaciones presentadas desde códigos postales rurales en comparación con las reclamaciones urbanas demográficamente similares, incluso cuando el daño declarado es equivalente. El proyecto aún se encuentra en fase de desarrollo. ¿Qué debería el director del programa de IA ordenar al equipo que investigue primero?",
    opciones: [
      { id: 'a', texto: "Si los hiperparámetros del modelo se han ajustado específicamente para datos urbanos." },
      { id: 'b', texto: "Si los peritos que etiquetaron los datos de capacitación se encuentran ubicados en oficinas urbanas." },
      { id: 'c', texto: "Si la arquitectura del modelo es lo suficientemente compleja como para capturar la variación geográfica con precisión." },
      { id: 'd', texto: "Si el conjunto de datos de capacitación contiene una proporción desequilibrada de registros de reclamaciones urbanas versus rurales." }
    ],
    correctas: ['d'],
    explicacion: "Investigar si el conjunto de datos de entrenamiento contiene una proporción desequilibrada de registros urbanos versus rurales es el primer paso correcto porque las diferencias sistemáticas de puntuación entre grupos geográficos comúnmente se originan en una representación desigual en los datos de entrenamiento, lo que lleva al modelo a aprender patrones que reflejan el volumen de datos en lugar del riesgo real. La complejidad del modelo no es el problema cuando la disparidad sigue un límite demográfico claro en lugar de un patrón de ruido. El ajuste de hiperparámetros afecta el rendimiento general del modelo, pero *no introduce un sesgo geográfico; La investigación de la causa raíz debe preceder a cualquier ajuste de sintonización. La ubicación del ajustador puede afectar la consistencia de la etiqueta, pero es una hipótesis secundaria; La investigación principal se centra en la composición de los datos de entrenamiento."
  },
  {
    id: 'cp4-078', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Wrenfield Apparel, un equipo de proyecto de IA que construye un modelo de reducción de devoluciones ubica un conjunto de datos prometedores sobre el comportamiento del cliente en una unidad de red compartida. Nadie en el equipo sabe quién mantiene el conjunto de datos o si el proyecto puede usarlo. Los científicos de datos están ansiosos por incluirlo. ¿Qué debería hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Tureswestaescorrecta Rastree al propietario del conjunto de datos y confirme el permiso de uso antes de agregarlo al plan de datos" },
      { id: 'b', texto: "Copie el conjunto de datos en el espacio de trabajo del proyecto para que el original no pueda modificarse" },
      { id: 'c', texto: "Excluya el conjunto de datos del proyecto para evitar plantear dudas sobre la propiedad." },
      { id: 'd', texto: "Aprobar su uso ya que el conjunto de datos ya es accesible en una unidad interna compartida" }
    ],
    correctas: ['a'],
    explicacion: "Se requiere documentar la propiedad de los datos y confirmar el permiso de acceso antes de que un conjunto de datos no atribuido ingrese al plan, ya que el propietario puede confirmar qué contiene t, qué tan actual está y si el proyecto puede usarlo. La accesibilidad interna no es autorización, y el uso de datos de procedencia desconocida crea riesgos de cumplimiento y calidad. Excluir el conjunto de datos sin investigación arroja una señal potencialmente valiosa de que un breve rastro de propiedad podría autorizarse para su uso. Copiarlo en el espacio de trabajo conserva una instantánea pero no resuelve nada sobre la autorización o la procedencia."
  },
  {
    id: 'cp4-079', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Rosewood Cargo implementó un modelo de eficiencia de rutas de IA hace meses. El equipo del proyecto cerró formalmente, pero el grupo de operaciones que heredó el modelo no tiene orientación sobre cómo manejar un escenario en el que el modelo produce planes de enrutamiento que violan los límites de peso en cruces de puentes específicos, una situación que el entorno de prueba nunca cubrió. ¿Quién debería haber garantizado que se abordara este escenario y cómo?",
    opciones: [
      { id: 'a', texto: "El proveedor de alojamiento en la nube debería haber aprovechado la brecha de restricción durante la infraestructura." },
      { id: 'b', texto: "Los científicos de datos deberían haber agregado más ejemplos de capacitación de casos de ruta con sobrepeso" },
      { id: 'c', texto: "El director del proyecto de IA debería haberse asegurado de que el plan de transición abordara los escenarios de fallas extremas y las respuestas operativas antes de la entrega." },
      { id: 'd', texto: "El grupo de operaciones debe enviar una solicitud de cambio y esperar a que el equipo del proyecto original se vuelva a reunir." }
    ],
    correctas: ['c'],
    explicacion: "El director del proyecto de IA es responsable de garantizar que el plan de transición cubra cómo debe responder el equipo operativo a los escenarios de falla, incluidos aquellos fuera del alcance de la prueba, antes de que se transfiera la propiedad. Descubrir esta brecha después de que se cierra el proyecto representa una transferencia incompleta. Enriquecer los datos de capacitación con ejemplos de rutas con sobrepeso aborda la cobertura del modelo, pero no puede reemplazar la guía de procedimientos para el equipo de operaciones sobre qué hacer cuando surgen resultados inesperados en la producción. Pedirle al equipo del proyecto que se recupere después del cierre formal es disruptivo y viable, ya que el aprovisionamiento de la infraestructura de transición por parte del proveedor de la nube no tiene dudas sobre si el modelo respeta las restricciones de peso del puente, lo cual es una preocupación de lógica de negocios."
  },
  {
    id: 'cp4-080', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor Equipment se está preparando para implementar un modelo de pronóstico de demanda impulsado por IA que fue validado recientemente por el equipo de ciencia de datos. El director del proyecto de IA debe garantizar que la implementación esté estructurada, documentada y reversible en caso de fallas inesperadas. ¿Qué artefacto debería desarrollar primero el director del proyecto para guiar este esfuerzo?",
    opciones: [
      { id: 'a', texto: "Un calendario modelo de reciclaje adaptado a las fluctuaciones estacionales de la demanda" },
      { id: 'b', texto: "Una estrategia de implementación integral con cronograma, requisitos de infraestructura y procedimientos de reversión." },
      { id: 'c', texto: "Una matriz de escalamiento que enumera los contactos de las partes interesadas para cuestiones posteriores a la implementación" },
      { id: 'd', texto: "Un documento de procedimiento de reversión que especifica las condiciones de activación y los pasos para volver al sistema anterior." }
    ],
    correctas: ['b'],
    explicacion: "Desarrollar una estrategia de implementación integral con cronograma, requisitos de infraestructura y procedimientos de reversión es el artefacto fundamental que el gerente de proyectos de IA debe crear primero; une la programación, la coordinación de recursos y la planificación de contingencias en un solo documento rector.* El documento del procedimiento de reversión es valioso pero es un componente dentro del plan de implementación más amplio, no el punto de partida. Un cronograma de reentrenamiento aborda la gobernanza continua después de que la implementación sea estable, no la implementación inicial en sí. Una matriz de escalamiento respalda la respuesta a incidentes, pero no proporciona la estructura estratégica necesaria para guiar el despliegue."
  },
  {
    id: 'cp4-081', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Roanvale Clinics está definiendo datos para un modelo de predicción de pacientes que no se presentan. El borrador de la especificación solo solicita una instantánea actual de las próximas citas, pero el modelo debe aprender cómo el comportamiento de no presentarse se desarrolla a lo largo de visitas repetidas y cómo el riesgo cambia a medida que se acerca el día de la cita. ¿Qué debería agregar el director del proyecto de IA al equipo a la especificación?",
    opciones: [
      { id: 'a', texto: "Una solicitud de todo el historial disponible almacenado con el máximo detalle" },
      { id: 'b', texto: "La profundidad histórica y el detalle temporal que requiere el problema de predicción." },
      { id: 'c', texto: "Un plan para liquidar la cobertura temporal tras explorar lo que llega" },
      { id: 'd', texto: "Cualquiera que sea el período de retención que los sistemas de origen mantienen de forma predeterminada" }
    ],
    correctas: ['b'],
    explicacion: "Especificar la profundidad del historial y el detalle temporal que requiere la predicción es correcto porque la cobertura temporal y la granularidad son parte de la definición de los datos requeridos, y un modelo de comportamiento a lo largo del tiempo no puede aprender de una sola instantánea. Solicitar toda la historia con el más mínimo detalle evita la cuestión analítica e infla el esfuerzo de recopilación y almacenamiento sin una justificación. Aceptar los valores predeterminados de retención del sistema fuente permite que configuraciones administrativas no relacionadas decidan qué puede aprender el modelo. La cobertura del tiempo de establecimiento después de que llegan los datos garantiza una segunda ronda de recopilación cuando la instantánea resulta insuficiente."
  },
  {
    id: 'cp4-082', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Inland Valley Hospital está desarrollando un modelo de IA para estratificar a los pacientes y la probabilidad de infecciones adquiridas en el hospital. El director de cumplimiento del hospital informa al gerente del proyecto de IA que el departamento de salud estatal requiere que los hospitales informen sobre cómo se diseñaron, probaron y validaron las herramientas de IA utilizadas en entornos clínicos antes de su implementación. El director del proyecto se da cuenta de que los registros actuales del proyecto están fragmentados en los discos personales de los miembros individuales del equipo y no están consolidados ni recuperables. ¿Qué debe hacer el director del proyecto inmediatamente?",
    opciones: [
      { id: 'a', texto: "Contratar a una empresa de auditoría externa para reconstruir los registros del proyecto a partir de los recuerdos de los miembros del equipo antes de la próxima fecha límite de presentación de informes." },
      { id: 'b', texto: "Consolidar los registros de desarrollo del modelo de IA en un sistema de documentación de rendición de cuentas centralizado que capture las decisiones de desarrollo, los resultados de la validación y las aprobaciones de las partes interesadas en un formato recuperable para los informes regulatorios." },
      { id: 'c', texto: "Solicitar una exención de informes regulatorios del departamento de salud estatal con el argumento de que el proyecto se encuentra en una etapa inicial." },
      { id: 'd', texto: "Indique a cada miembro del equipo que organice sus carpetas de unidades personales y comparta enlaces con el director del proyecto antes del final de la semana." }
    ],
    correctas: ['b'],
    explicacion: "Consolidar los registros de desarrollo en un sistema de documentación de rendición de cuentas centralizado y recuperable es la acción inmediata correcta porque resuelve el problema de fragmentación y crea el registro estructurado que requiere el departamento de salud estatal. Instruir a los miembros del equipo para que compartan enlaces desde unidades personales es una solución alternativa informal que no consolida los registros ni garantiza que estén completos, sean completamente consistentes o tengan el formato adecuado para uso regulatorio. Es poco probable que se solicite una exención regulatoria porque el proyecto se encuentra en una etapa inicial para una herramienta clínica de IA que ya está avanzando hacia su implementación. Contratar a una firma de auditoría externa para reconstruir los registros de"
  },
  {
    id: 'cp4-083', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Marlinton Aerospace está desarrollando un modelo de inteligencia artificial para evaluar el riesgo de los proveedores utilizando registros financieros, historiales de contratos y datos de la empresa disponibles públicamente. Una evaluación de riesgos revela que los datos de capacitación contienen información financiera confidencial de los proveedores que, si se expone, podría brindar a los competidores información sobre las relaciones y los precios de los proveedores. El director del proyecto debe garantizar que existan protecciones adecuadas durante el desarrollo del modelo. ¿Qué debe implementar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Un acuerdo de confidencialidad firmado por todos los miembros del equipo que confirme que no discutirán los datos de los proveedores fuera de la oficina." },
      { id: 'b', texto: "Una política que exige que todos los miembros del equipo trabajen únicamente en dispositivos proporcionados por la empresa al acceder a los datos de los proveedores." },
      { id: 'c', texto: "Anonimización de todos los nombres de proveedores en los datos de capacitación para que los resultados del modelo hagan referencia a códigos de proveedores anónimos en lugar de nombres de empresas." },
      { id: 'd', texto: "Controles de cifrado y acceso a los datos de entrenamiento de IA, lo que limita el acceso a los miembros autorizados del equipo y protege los datos en tránsito y en reposo." }
    ],
    correctas: ['d'],
    explicacion: "La implementación de controles de cifrado y acceso a los datos de capacitación de IA garantiza que la información confidencial de los proveedores esté protegida del acceso no autorizado en tránsito y en reposo, que es la protección técnica directa para este tipo de riesgo. Los acuerdos de confidencialidad son un control legal que complementa las protecciones técnicas pero no afectan por sí solos los datos provenientes del acceso no autorizado. Una política que requiera dispositivos proporcionados por la empresa es una práctica de seguridad razonable, pero aborda el punto final en lugar de los datos de capacitación en sí. Anonimizar los nombres de los proveedores reduce la identificabilidad de los resultados, pero no afecta el archivo de datos subyacente frente al acceso no autorizado durante el desarrollo."
  },
  {
    id: 'cp4-084', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightford Insurance está implementando un modelo de suscripción de IA que asigna puntuaciones de riesgo a los solicitantes. Después de una revisión interna, el director del proyecto descubre que el conjunto de datos de capacitación extraído de diez años de solicitudes históricas está sesgado hacia los solicitantes de grandes áreas metropolitanas y no representa a los solicitantes rurales. El director del proyecto debe decidir cómo abordar esto antes. ¿Cuál es el siguiente paso más apropiado?",
    opciones: [
      { id: 'a', texto: "Reemplazar completamente el conjunto de datos históricos con datos sintéticos generados para simular una combinación equitativa de solicitantes urbanos y rurales." },
      { id: 'b', texto: "Analizar los datos de entrenamiento para detectar desequilibrios demográficos y de representación y aplicar técnicas de mitigación de sesgos antes de continuar con el desarrollo del modelo." },
      { id: 'c', texto: "Limitar la implementación inicial del modelo solo a los mercados metropolitanos, donde los datos sean representativos, y excluir los mercados rurales indefinidamente." },
      { id: 'd', texto: "Continuar con la implementación y recopilar datos de los solicitantes rurales durante los primeros seis meses de uso en producción para abordar la brecha de forma retrospectiva." }
    ],
    correctas: ['b'],
    explicacion: "Analizar los datos de capacitación para detectar desequilibrios demográficos y de representación y aplicar técnicas de mitigación de sesgos es el paso apropiado porque aborda la causa raíz directamente durante el desarrollo, antes de que el modelo afecte a los solicitantes reales. Proceder al despliegue y recopilar datos retrospectivamente expone a los solicitantes rurales a un modelo sesgado durante el período de brecha. Limitar el despliegue a los mercados metropolitanos evita el problema del sesgo, pero no lo resuelve y crea una inequidad en el servicio. Reemplazar el conjunto de datos por completo con datos sintéticos elimina la señal histórica e introduce sus propios riesgos; la respuesta más proporcionada es analizar y corregir los datos existentes."
  },
  {
    id: 'cp4-085', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ursa Major Energy completó el despliegue de un modelo de inspección de tuberías con IA después de un proyecto de dieciocho meses. El director del proyecto de IA está cerrando el proyecto. Los miembros del equipo se están preparando para pasar a otras asignaciones. ¿Qué debe completar el director del proyecto antes de cerrar formalmente el proyecto?",
    opciones: [
      { id: 'a', texto: "Llevar a cabo un ciclo final de reentrenamiento del modelo para garantizar que el modelo esté actualizado antes de que el equipo se disuelva." },
      { id: 'b', texto: "Archive todos los archivos del proyecto y desmantele al equipo del proyecto inmediatamente." },
      { id: 'c', texto: "Entregar todas las tareas de documentación restantes al equipo de operaciones que mantendrá el modelo." },
      { id: 'd', texto: "Documentar los resultados del proyecto, capturar las lecciones aprendidas y presentar los resultados finales a las partes interesadas y al liderazgo." }
    ],
    correctas: ['d'],
    explicacion: "Documentar los resultados del proyecto, capturar las lecciones aprendidas y presentar los resultados a las partes interesadas es la actividad correcta de cierre del proyecto porque preparar un informe final y las lecciones aprendidas es una tarea de operacionalización explícita, y la presentación formal de las partes interesadas garantiza la rendición de cuentas y el aprendizaje organizacional. Archivar expedientes y disolver el equipo sin documentación descarta el conocimiento institucional. Entregar las tareas de documentación al equipo de operaciones libera al director del proyecto de una responsabilidad que pertenece al proceso de cierre del proyecto. Llevar a cabo un ciclo final de reentrenamiento después del cierre del proyecto es una actividad de gobernanza operativa, no un entregable del cierre del proyecto."
  },
  {
    id: 'cp4-086', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de inteligencia artificial en Larkspur Consumer Goods está supervisando un modelo de predicción de devolución de productos que se utiliza para señalar pedidos de alto riesgo para su revisión manual antes de su envío. Luego de una serie de quejas de clientes sobre pedidos bloqueados erróneamente, el liderazgo cuestiona si el modelo está aplicando umbrales más estrictos a ciertos segmentos de clientes. Antes de la próxima revisión del sprint, el gerente del proyecto de IA debe asesorar al equipo sobre qué técnica correctiva aplicar a los datos de entrenamiento para abordar los desequilibrios demográficos documentados. ¿Cuál es el consejo apropiado?",
    opciones: [
      { id: 'a', texto: "Reduzca el umbral de confianza del modelo para todos los segmentos de clientes de manera uniforme para reducir la tasa de bloqueo general." },
      { id: 'b', texto: "Aplique técnicas que ajusten la representación de segmentos de clientes subrepresentados en los datos de entrenamiento antes de volver a entrenar el modelo." },
      { id: 'c', texto: "Elimine los campos demográficos del conjunto de datos de capacitación y conserve solo las señales de transacción a nivel de pedido." },
      { id: 'd', texto: "Aumente el tamaño general del conjunto de datos de capacitación eliminando registros de transacciones de comercio electrónico públicos adicionales." }
    ],
    correctas: ['b'],
    explicacion: "La aplicación de técnicas que ajusten la representación de segmentos subrepresentados antes del reentrenamiento es la orientación correcta porque implementa directamente la mitigación del sesgo durante el desarrollo del modelo y aborda la causa raíz identificada en el análisis del desequilibrio demográfico. La eliminación de registros de transacciones públicas adicionales aumenta el volumen de datos, pero no aborda los desequilibrios proporcionales entre los segmentos de clientes específicos que el modelo clasifica erróneamente. La reducción del umbral de confianza afecta uniformemente a todos los segmentos por igual y no apunta al desequilibrio; También aumentaría los falsos negativos en todos los segmentos. La eliminación de campos demográficos evita el uso directo de atributos confidenciales, pero no elimina los efectos de representación de otras características correlacionadas y no aborda la representación."
  },
  {
    id: 'cp4-087', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Marbleton Civic Bank quiere una puntuación instantánea del fraude en las transacciones con tarjeta, pero la política de banco exige que todo el procesamiento de datos de los clientes permanezca en su propia y modesta sala de servidores. El director del proyecto de IA está completando la revisión inicial de la viabilidad. ¿Qué debería evaluar a continuación el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Si la potencia de procesamiento requerida se ajusta a los límites locales del banco" },
      { id: 'b', texto: "El valor comercial de anunciar una característica de seguridad impulsada por Al" },
      { id: 'c', texto: "El apetito del equipo antifraude por revisar las transacciones marcadas" },
      { id: 'd', texto: "Si los reguladores han aprobado la puntuación de IA en otros bancos" }
    ],
    correctas: ['a'],
    explicacion: "Evaluar si la potencia de procesamiento requerida se ajusta a los límites locales del banco pone a prueba los requisitos de recursos computacionales frente a una restricción estricta, ya que la puntuación instantánea exige capacidad que la pequeña sala de servidores puede no proporcionar. El apetito del equipo antifraude por revisar indicadores es una cuestión de diseño de flujo de trabajo que surge una vez que el sistema es técnicamente viable. El valor de marketing no influye en si la solución puede ejecutarse o no. Vale la pena conocer la aceptación regulatoria en otros bancos, pero no resuelve la restricción de infraestructura específica de Marbleton. Sopesar los requisitos y las limitaciones de recursos es un elemento específico de la evaluación de viabilidad inicial."
  },
  {
    id: 'cp4-088', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El director de proyectos de IA de Cascade Outdoor está configurando el control de calidad para un motor de recomendación. El equipo de ciencia de datos ha completado las compilaciones iniciales del modelo y el director del proyecto quiere asegurarse de que cada versión del modelo sea rastreable hasta sus ajustes de configuración, instantáneas de datos de entrenamiento y resultados de evaluación. ¿Qué debería establecer primero el director del proyecto para respaldar este requisito de trazabilidad?",
    opciones: [
      { id: 'a', texto: "Una hoja de cálculo compartida donde los científicos de datos registran manualmente las puntuaciones de precisión del modelo semanalmente." },
      { id: 'b', texto: "Un canal de implementación automatizado que promueve modelos directamente a producción después del entrenamiento." },
      { id: 'c', texto: "Un sistema de gestión de configuración que vincula cada versión del modelo con sus parámetros, instantánea de datos." },
      { id: 'd', texto: "Una lista de verificación de revisión por pares que los científicos de datos completan antes de cada reunión del equipo." }
    ],
    correctas: ['c'],
    explicacion: "Un sistema de gestión de configuración vincula cada versión del modelo con sus parámetros específicos, instantáneas de datos de entrenamiento y resultados de evaluación, creando el registro rastreable que requiere el gerente del proyecto. Una lista de verificación de revisión por pares respalda la calidad del código, pero no proporciona trazabilidad vinculada a la versión entre los datos, la configuración y los resultados. Una hoja de cálculo de precisión manual captura una única métrica sin vincularla al contexto de configuración completo. Un proceso de implementación automatizado traslada los modelos a producción, pero no establece la infraestructura de trazabilidad necesaria antes de tomar decisiones de implementación."
  },
  {
    id: 'cp4-089', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Wren Haven Toys creó un modelo de previsión de rendimiento que el equipo de datos celebra por sus sólidas puntuaciones técnicas. En la revisión trimestral, el director ejecutivo pregunta qué ha hecho el modelo por la empresa y solo recibe estadísticas del modelo en respuesta. ¿Qué debería haber definido el director del programa de IA desde el principio?",
    opciones: [
      { id: 'a', texto: "Un modelo más simple cuyas estadísticas los ejecutivos podrían seguir" },
      { id: 'b', texto: "Medidas que vinculan los resultados del modelo con los resultados que el negocio valora" },
      { id: 'c', texto: "Una política que excluye a los ejecutivos de las reuniones de revisión técnica." },
      { id: 'd', texto: "Umbrales de puntuación técnicos más estrictos para el equipo de datos" }
    ],
    correctas: ['b'],
    explicacion: "Las medidas que vinculen los resultados del modelo con los resultados que el negocio valora permitirían al equipo responder al director ejecutivo en términos de ahorro de inventario o margen en lugar de estadísticas del modelo. Umbrales técnicos más estrictos profundizan la misma visión unilateral que causó el problema. La elección de un modelo más simple para hacer que las estadísticas sean legibles sacrifica la capacidad para evitar definir medidas comerciales. Excluir a los ejecutivos de las revisiones oculta la brecha en lugar de cerrarla Definir los indicadores de impacto empresarial junto con los técnicos: alineados con los objetivos organizacionales, es un elemento nombrado para definir el éxito de una iniciativa de IA"
  },
  {
    id: 'cp4-090', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El director del programa de IA de Cascade Outdoor Equipment está preparando el plan de implementación para una recomendación que se ejecutará en la plataforma de comercio electrónico de la empresa. El equipo de infraestructura estima que necesitarán semanas para aprovisionar el entorno de nube, pero la fecha de entrada en funcionamiento está fijada. El administrador del programa descubre que la lista de verificación de implementación carece de una sección para desencadenantes de reversión. ¿Qué debería hacer primero el director del programa?",
    opciones: [
      { id: 'a', texto: "Delegar la planificación de reversión al equipo de infraestructura una vez que el entorno esté listo." },
      { id: 'b', texto: "Solicite una fecha de entrada en funcionamiento revisada al patrocinador del proyecto para permitir una preparación adecuada." },
      { id: 'c', texto: "Acelerar el cronograma de aprovisionamiento de infraestructura para recuperar la brecha de dos semanas." },
      { id: 'd', texto: "Agregue criterios explícitos de activación de reversión a la lista de verificación de implementación antes de que comience el aprovisionamiento de la infraestructura." }
    ],
    correctas: ['d'],
    explicacion: "Agregar criterios explícitos de activación de reversión a la lista de verificación de implementación antes de que comience el aprovisionamiento garantiza que la contingencia se incluya en el plan mientras el cambio aún es de bajo costo. Acelerar el cronograma de aprovisionamiento no aborda la brecha en la lista de verificación. Eventualmente puede justificarse solicitar una revisión de la fecha, pero la acción inmediata es cerrar la deficiencia identificada en el plan. Delegar la planificación de reversión después del aprovisionamiento transfiere una responsabilidad de planificación crítica fuera de la ventana de supervisión del AI PM y aumenta el riesgo"
  },
  {
    id: 'cp4-091', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harborline Outfitters está desarrollando un modelo de previsión de la demanda. El equipo de ciencia de datos ha estado trabajando sin un estándar de codificación formal y el director del proyecto de IA está revisando la práctica de desarrollo antes de transferirlo a un nuevo miembro del equipo. El director del proyecto descubre que los pasos de revisión del código se omitían con frecuencia durante los primeros sprints. ¿Cuál es la acción correctiva más adecuada?",
    opciones: [
      { id: 'a', texto: "Pedir a los miembros salientes del equipo que anoten su código con comentarios en línea antes de marcharse." },
      { id: 'b', texto: "Establecer una lista de verificación de revisión de código formal alineada con los estándares de calidad del proyecto y exigir su cumplimiento para todo el desarrollo futuro." },
      { id: 'c', texto: "Contrate a un auditor externo para revisar todo el código existente antes de que comience el nuevo miembro del equipo." },
      { id: 'd', texto: "Retrasar el proyecto hasta que se pueda realizar una reescritura completa del código siguiendo un estándar adecuado." }
    ],
    correctas: ['b'],
    explicacion: "Garantizar el cumplimiento de los estándares y las mejores prácticas de codificación es una responsabilidad directa de control y aseguramiento de calidad del gerente de proyectos de IA. Establecer una lista de verificación de revisión de código formal y exigir su cumplimiento en el futuro corrige la brecha y protege la calidad para el trabajo futuro. Los comentarios en línea mejoran la legibilidad, pero no crean un proceso de control de calidad ni imponen estándares en el código futuro. Una auditoría externa es una intervención única que no establece la disciplina continua que necesita el proyecto. Retrasar una reescritura completa es desproporcionado y desperdicia trabajo que puede ser funcionalmente sólido."
  },
  {
    id: 'cp4-092', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sablewood Hotels planea un motor de precios de IA que aprende continuamente de los datos de las reservas, incluido un feed comprado a un agregador externo. Durante la revisión inicial, el director del proyecto de IA considera qué podría salir mal con este diseño. ¿Qué exposición merece la atención del director del proyecto en primer lugar?",
    opciones: [
      { id: 'a', texto: "Los huéspedes notan que los precios de las habitaciones cambian con más frecuencia que antes" },
      { id: 'b', texto: "Los directores de hoteles prefieren su propio criterio a los precios del motor" },
      { id: 'c', texto: "El motor que requiere actualizaciones más frecuentes que el sistema de reservas" },
      { id: 'd', texto: "O Personas externas que manipulan el feed comprado para dirigir el comportamiento de fijación de precios del motor." }
    ],
    correctas: ['d'],
    explicacion: "La manipulación de la información comprada por parte de personas externas es una exposición de seguridad exclusiva de los sistemas de aprendizaje, porque un motor de aprendizaje continuo puede manejarse a través de entradas envenenadas de una fuente que el hotel no controla. Que los huéspedes noten cambios de precios más frecuentes es una consideración de la experiencia del cliente, no un sistema. Que los gerentes prefieran su propio criterio es una preocupación de adopción que se maneja a través del compromiso y la capacitación en lugar de una revisión de seguridad. La frecuencia de actualización es una cuestión de programación operativa sin dimensión conflictiva. La evaluación de las vulnerabilidades de ciberseguridad específicas de los sistemas de IA es un elemento destacado del trabajo de evaluación de riesgos en este ámbito."
  },
  {
    id: 'cp4-093', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sunsail Components utiliza un modelo de inspección de calidad de IA en su línea de fabricación. El director del proyecto de IA ha establecido un marco de gobernanza del modelo, pero aún no ha definido cronogramas de reentrenamiento. Las tasas de fuga de defectos se han mantenido estables durante cuatro meses. Un supervisor de producción pregunta cuándo se volverá a entrenar el modelo. ¿Cuál es la respuesta más adecuada del director del proyecto?",
    opciones: [
      { id: 'a', texto: "Vuelva a entrenar el modelo inmediatamente porque cuatro meses sin volver a entrenar siempre es demasiado tiempo" },
      { id: 'b', texto: "Transferir la responsabilidad del programa de reentrenamiento al equipo de ciencia de datos sin la supervisión del gerente del proyecto." },
      { id: 'c', texto: "Establecer un cronograma de reentrenamiento basado en indicadores de desempeño monitoreados y señales de deriva de datos en lugar de solo el tiempo transcurrido." },
      { id: 'd', texto: "Confirmar que no es necesario volver a capacitarse porque las tasas de escape de defectos se han mantenido estables" }
    ],
    correctas: ['c'],
    explicacion: "Establecer un programa de reentrenamiento basado en indicadores de desempeño y señales de deriva es correcto porque la gobernanza del modelo requiere criterios basados ​​en evidencia para el reentrenamiento, no intervalos de tiempo arbitrarios o suposiciones de estabilidad. El reentrenamiento inmediato sin evidencia de degradación desperdicia recursos y podría introducir inestabilidad. Confirmar que no se necesita reentrenamiento basándose únicamente en tasas estables de escape de defectos ignora otras señales, como cambios en la distribución de datos de entrada que pueden no haber afectado aún las métricas de salida. Transferir el cronograma por completo sin supervisión elimina al gerente del proyecto de una responsabilidad central de gobernanza que pertenece al plan operativo."
  },
  {
    id: 'cp4-094', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El patrocinador de Brackenford Tyres le pide al director del proyecto de IA que cree personalmente el modelo financiero completo para un sistema de inspección de bandas de rodadura propuesto por IA, incluido el costo del tratamiento de capital y la depreciación, porque el director del proyecto es quien mejor conoce el proyecto. ¿Cómo debe proceder el director de proyectos de IA?",
    opciones: [
      { id: 'a', texto: "Asóciese con el equipo de finanzas en el modelo mientras contribuye con los costos y beneficios del proyecto." },
      { id: 'b', texto: "Entregue todo el modelo a las finanzas y aléjese del contenido financiero." },
      { id: 'c', texto: "Contratar una consultoría externa para producir un modelo financiero independiente" },
      { id: 'd', texto: "Construya el modelo usted solo para demostrar la propiedad de la iniciativa." }
    ],
    correctas: ['a'],
    explicacion: "Las justificaciones financieras se construyen en colaboración: Finanzas aplica los estándares y tratamientos de costos de la empresa, mientras que el gerente del proyecto proporciona los factores técnicos de los costos, la lógica de los beneficios y los tiempos que sólo el proyecto conoce, por lo que la asociación es la división correcta del esfuerzo. La construcción del modelo por sí sola produce cifras financieras que nunca han sido sancionadas y tratamientos que el gerente del proyecto no está calificado para aplicar. Al retirarse, se despoja por completo al modelo del conocimiento del proyecto que hace que sus insumos sean realistas. La subcontratación a una consultoría agrega costos y distancia cuando la experiencia necesaria ya existe internamente en ambas partes."
  },
  {
    id: 'cp4-095', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Mortar-field Construction monitorea su solución de predicción del éxito de las ofertas a través de un panel ejecutivo que muestra solo resultados comerciales, como la tasa de victorias y los ingresos por oferta. Cuando la tasa de ganancias cayó el último trimestre, los líderes no pudieron decir si el modelo se había degradado o las condiciones del mercado habían cambiado, y el debate se estancó durante semanas. ¿Qué debería cambiar el director del proyecto de IA sobre el enfoque de seguimiento?",
    opciones: [
      { id: 'a', texto: "Reemplazar las medidas comerciales con indicadores de precisión del modelo que se actualizan diariamente" },
      { id: 'b', texto: "Agregue indicadores de salud del modelo junto con las medidas comerciales para que se puedan separar las causas." },
      { id: 'c', texto: "Informe a los ejecutivos que las fluctuaciones trimestrales son normales y no necesitan ninguna acción." },
      { id: 'd', texto: "Encargar un estudio de mercado externo cada vez que cambie la tasa de ganancias." }
    ],
    correctas: ['b'],
    explicacion: "Mostrar métricas de salud del modelo técnico junto a los resultados comerciales permite a la organización distinguir un modelo degradante de las condiciones cambiantes del mercado, que es exactamente el diagnóstico que le faltaba al debate estancado. Reemplazar las medidas comerciales con indicadores de precisión cambia un punto ciego por otro, ya que el liderazgo vería la salud del modelo pero perdería de vista el impacto comercial. Encargar un estudio de mercado externo para cada movimiento es lento y costoso, y aun así no revelaría si el modelo en sí se ha desviado. Descartar la caída como una fluctuación normal renuncia por completo a la investigación y corre el riesgo de permitir que la degradación genuina continúe sin ser examinada."
  },
  {
    id: 'cp4-096', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightmoor Veterinary Group pierde ingresos cuando los dueños de mascotas faltan a las citas reservadas sin previo aviso. El director del programa de IA debe recomendar qué familia de capacidades de IA se adapta a la necesidad de la cadena de clínicas de señalar, con antelación, qué citas próximas es más probable que se pierdan. ¿A qué enfoque debería el director del programa asignar este problema?",
    opciones: [
      { id: 'a', texto: "Una capacidad que conversa con los clientes en lenguaje natural." },
      { id: 'b', texto: "Una capacidad que opera equipos clínicos físicos sin intervención humana." },
      { id: 'c', texto: "Una capacidad que pronostica resultados probables para respaldar las decisiones del personal." },
      { id: 'd', texto: "Una capacidad que adapta la experiencia de cada cliente a sus preferencias individuales." }
    ],
    correctas: ['c'],
    explicacion: "Pronosticar resultados probables para respaldar las decisiones del personal coincide con el análisis predictivo y el patrón de respaldo de decisiones, que es exactamente lo que requiere señalar con anticipación las probables ausencias. Adaptar la experiencia de cada cliente describe la hiperpersonalización, que personaliza el contenido en lugar de predecir eventos futuros. Conversar en lenguaje natural describe el patrón conversacional, útil para responder las preguntas de los clientes pero no para clasificar el riesgo de una cita. El funcionamiento de equipos sin intervención humana describe sistemas autónomos, que no tienen conexión con la asistencia a citas. Mapear el problema empresarial con el patrón de IA apropiado es un paso fundamental en la identificación del problema."
  },
  {
    id: 'cp4-097', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "La evaluación de datos de Castellan Security encontró que los informes de incidentes tienen altas tasas de nulos en campos clave y una codificación de gravedad inconsistente entre turnos. El gerente del proyecto de IA está redactando el informe para el patrocinador ejecutivo, que no tiene experiencia en datos pero controla el presupuesto para la remediación. ¿Cómo deben redactarse los hallazgos?",
    opciones: [
      { id: 'a', texto: "Traducir cada hallazgo a sus consecuencias comerciales, como qué decisiones podría tomar el modelo incorrectamente." },
      { id: 'b', texto: "Aplazar la sesión informativa hasta que finalice la remediación para que el patrocinador solo vea una evaluación limpia." },
      { id: 'c', texto: "Resumir solo los hallazgos positivos y dirigir los problemas técnicos al trabajo pendiente de ingeniería." },
      { id: 'd', texto: "Mantenga exacta la terminología estadística para que no se pierda nada y adjunte un glosario como referencia." }
    ],
    correctas: ['a'],
    explicacion: "Traducir los conceptos de datos técnicos a un lenguaje relevante para el negocio es lo que hace que el informe sea procesable, por lo que las tasas nulas y la codificación de gravedad inconsistente se convierten en declaraciones sobre qué predicciones de incidentes se equivoca el modelo y qué remediación compra. La terminología estadística exacta con un glosario mantiene la carga sobre el patrocinador e invita a una mala interpretación por parte de quien toma decisiones no técnicas. Informar solo los aspectos positivos mientras se entierran los problemas en un trabajo pendiente retiene exactamente la información que la decisión presupuestaria de remediación necesita. Aplazar hasta que se realice la remediación le pide al patrocinador que financie un trabajo que nunca ha considerado justificado."
  },
  {
    id: 'cp4-098', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Sablepoint Hctels, el director del proyecto de IA ha terminado de catalogar los sistemas de reserva, fidelización y limpieza que alimentarán un modelo de ocupación. Antes de entregar el catálogo a los planificadores de la colección, el director del proyecto quiere evitar las disputas de acceso que paralizaron un proyecto anterior. ¿Qué debe registrar el catálogo para cada fuente?",
    opciones: [
      { id: 'a', texto: "Quién es el propietario de cada fuente y qué permisos requiere su uso" },
      { id: 'b', texto: "El costo de almacenamiento estimado de replicar cada fuente." },
      { id: 'c', texto: "La precisión predictiva que se espera que aporte cada fuente." },
      { id: 'd', texto: "La lógica de transformación que cada campo requerirá durante la preparación." }
    ],
    correctas: ['a'],
    explicacion: "Documentar la propiedad y los permisos de acceso es parte de la identificación de fuentes y ubicaciones, y es exactamente lo que evita que la recopilación se detenga en disputas sobre quién puede autorizar el uso. La lógica de transformación pertenece a la preparación de datos posterior y no se puede conocer hasta que se examinan los datos. La contribución esperada a la precisión es desconocida antes de la evaluación y el modelado. Las estimaciones de los costos de almacenamiento informan la planificación de la infraestructura, pero no hacen nada para resolver las cuestiones de autorización cuando la extracción requiere terreno."
  },
  {
    id: 'cp4-099', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Pickett Valley Farms, la preparación para un modelo de salud del ganado está completa. Los ingenieros informan que el conjunto de datos parece completo y proponen declararlo listo para que pueda comenzar el desarrollo. No se ha realizado ningún control estructurado. ¿Qué debería exigir el director del proyecto de IA antes de cualquier declaración de preparación?",
    opciones: [
      { id: 'a', texto: "Una extensión de la recopilación para agregar fuentes adicionales como medida de precaución." },
      { id: 'b', texto: "Aceptación del criterio profesional de los ingenieros dada su experiencia" },
      { id: 'c', texto: "co\"ecta Una comparación sistemática del conjunto de datos con los requisitos de datos documentados." },
      { id: 'd', texto: "Una votación de las partes interesadas sobre si el conjunto de datos se considera suficiente" }
    ],
    correctas: ['c'],
    explicacion: "Determinar si los datos satisfacen las necesidades de la solución comienza comparando lo que se recopiló con los requisitos y especificaciones definidos, lo que convierte una sensación de amplitud en una cobertura demostrada. El juicio profesional es un aporte valioso, pero no puede sustituir la verificación de cada requisito, ya que las impresiones pasan por alto lagunas específicas. El voto de las partes interesadas agrega opiniones sobre una pregunta que el documento de requisitos responde objetivamente. Extender la reunión como medida de precaución agrega costos sin saber primero si realmente falta algo."
  },
  {
    id: 'cp4-100', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor ha completado la capacitación y evaluación de un modelo de previsión de la demanda. El modelo cumple con todos los umbrales de precisión definidos y el equipo técnico informa que está listo para su implementación. Se solicita al director del proyecto de IA que emita una aprobación final de implementación. Antes de emitir la aprobación, el director del proyecto revisa la lista de verificación y descubre que el runbook operativo, el procedimiento de reversión y el plan de seguimiento aún no se han documentado. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Emitir aprobación condicional y exigir que la documentación operativa se complete dentro de las dos semanas posteriores a la entrada en funcionamiento." },
      { id: 'b', texto: "Emita la aprobación de la implementación porque el modelo ha cumplido todos los umbrales de precisión, que es el criterio principal." },
      { id: 'c', texto: "Solicite al equipo de infraestructura que documente los procedimientos operativos de forma independiente y continúe con la implementación." },
      { id: 'd', texto: "Retener la aprobación hasta que la documentación del modelo y los procedimientos operativos se validen como parte de la evaluación de la preparación para la implementación." }
    ],
    correctas: ['d'],
    explicacion: "Validar la documentación del modelo y los procedimientos operativos como parte de la evaluación de la preparación para la implementación es responsabilidad del gerente de proyectos de IA en la decisión de avance o detención para la operacionalización. La preparación para la implementación abarca más que métricas de precisión; Se requieren runbooks operativos, procedimientos de reversión y planes de monitoreo para operar de manera segura el modelo en producción. Emitir una aprobación basada únicamente en la precisión ignora las brechas críticas de preparación operativa. Emitir una aprobación condicional permite que el modelo entre en producción antes de que esté disponible la documentación que los equipos de operaciones necesitan para responder a los incidentes. Pedirle al equipo de infraestructura que documente de forma independiente puede producir procedimientos incompletos o desalineados sin la supervisión del director del proyecto."
  },
  {
    id: 'cp4-101', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de inteligencia artificial en Silverstone Publishing supervisa un motor de recomendación de contenido que utiliza datos de participación de los lectores. Después de una prueba piloto exitosa, el patrocinador del proyecto le pide al gerente del proyecto de IA que presente un informe técnico que explique qué señales impulsan las recomendaciones y cómo el sistema pondera el comportamiento de los lectores. La audiencia incluye líderes editoriales no técnicos. ¿Qué debería priorizar el director del proyecto de IA para cumplir con este requisito?",
    opciones: [
      { id: 'a', texto: "Prepare una demostración en vivo del resultado del modelo para varios lectores de muestra y deje que la audiencia saque sus propias conclusiones." },
      { id: 'b', texto: "Defina el nivel de explicación que necesita la audiencia y seleccione formatos de comunicación que hagan que el comportamiento del modelo sea comprensible para las partes interesadas no técnicas." },
      { id: 'c', texto: "Pídale a un científico de datos que presente la arquitectura técnica directamente para que el equipo editorial la escuche de la mano de un experto en la materia." },
      { id: 'd', texto: "Proporcione el registro completo de capacitación del modelo y los coeficientes de importancia de las características al equipo de liderazgo editorial." }
    ],
    correctas: ['b'],
    explicacion: "Definir el nivel requerido de explicación y seleccionar formatos de comunicación apropiados para la audiencia es la acción correcta porque hacer que el comportamiento de la IA sea comprensible para las partes interesadas no técnicas es el objetivo explícito de establecer requisitos de explicabilidad para la comunicación con las partes interesadas. Proporcionar registros de capacitación sin procesar y coeficientes de características brinda detalles técnicos que la audiencia no puede interpretar, lo que no logra el objetivo de comunicación. Delegar la presentación a un científico de datos no aborda la responsabilidad del director del programa de garantizar la comprensión de las partes interesadas; Sin un encuadre apropiado para la audiencia, es posible que incluso los presentadores expertos no satisfagan necesidades no técnicas. Una demostración en vivo sin una explicación que la acompañe puede entretener, pero no genera una comprensión sistemática de lo que impulsa las recomendaciones"
  },
  {
    id: 'cp4-102', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harborline Outfitters está construyendo un modelo de pronóstico de la demanda. El director del proyecto de IA quiere asegurarse de que el equipo siga un proceso estructurado para decidir qué enfoque de modelado usar. Dos científicos de datos favorecen diferentes familias de algoritmos, uno cita ventajas de interpretabilidad y el otro cita el rendimiento bruto en el conjunto de entrenamiento. El director del proyecto debe facilitar una resolución estructurada. ¿Qué debería hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Haga que el equipo documente las compensaciones entre la complejidad del modelo y luego revise la selección alineada con los criterios." },
      { id: 'b', texto: "Asigne la decisión por completo al científico de datos de mayor rango en función de sus años de experiencia." },
      { id: 'c', texto: "Aplazar la decisión a una votación del comité directivo sin proporcionar ningún marco técnico." },
      { id: 'd', texto: "Dirige al equipo para que implemente ambos enfoques en paralelo y elija el que finalice primero." }
    ],
    correctas: ['a'],
    explicacion: "La supervisión de la selección de técnicas del modelo de IA incluye evaluar las compensaciones entre la complejidad, el rendimiento y la interpretabilidad del modelo, y revisar los criterios de selección de algoritmos y la documentación de decisiones. Facilitar un análisis estructurado de compensaciones frente a los propios criterios de éxito del proyecto es la acción correcta del director de proyecto. Aplazar la votación a una votación del comité directivo sin un marco técnico abdica de la responsabilidad de facilitación del director del proyecto y puede resultar en una decisión con fundamento político más que técnico. Ejecutar dos enfoques en paralelo hasta que uno termina no es un proceso de selección basado en principios y desperdicia recursos. Asignar la decisión únicamente por antigüedad evita la evaluación estructurada de compensaciones que requiere la metodología."
  },
  {
    id: 'cp4-103', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Hollowbrand Foods está implementando un modelo de pronóstico de la demanda en sus centros de distribución por etapas. Durante la segunda etapa, el equipo descubre que el flujo de datos está eliminando silenciosamente una fracción de los pedidos entrantes en los nuevos sitios. El cronograma exige comenzar la tercera etapa la próxima semana. ¿Qué debe hacer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Transferir el problema de la tubería al grupo de operaciones que será propietario del sistema." },
      { id: 'b', texto: "Mantenga la siguiente etapa hasta que se diagnostique y resuelva el problema de la tubería." },
      { id: 'c', texto: "Continúe con la tercera etapa y corrija la canalización una vez que finalice la implementación." },
      { id: 'd', texto: "Reinicie toda la implementación desde la primera etapa con una canalización reconstruida" }
    ],
    correctas: ['b'],
    explicacion: "Monitorear el progreso de la implementación y resolver los problemas de implementación antes de expandirse es el objetivo de una implementación por etapas, por lo que la siguiente etapa debe esperar hasta que se diagnostique y solucione el problema de los pedidos abandonados. Continuar según lo programado propaga un defecto de datos conocido a más sitios y permite que el modelo pronostique a partir de datos de pedidos incompletos. Reiniciar toda la implementación descarta los sitios que funcionan en la primera etapa por un problema localizado en los nuevos. Entregar el problema al grupo de operaciones futuras transfiere un defecto de implementación activa a un equipo que aún no ha tomado posesión del sistema."
  },
  {
    id: 'cp4-104', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Nether-field Paper está redactando su diseño de optimización de energía de IA. Un ingeniero sostiene que el documento debería guardar silencio sobre la técnica de modelado para que los científicos de datos tengan total libertad más adelante. El director del proyecto de IA no está de acuerdo. ¿Por qué el borrador debería nombrar enfoques de modelado candidatos?",
    opciones: [
      { id: 'a', texto: "Porque los ejecutivos esperan vocabulario técnico en los documentos de diseño." },
      { id: 'b', texto: "Porque los enfoques de denominación bloquean al equipo en una única técnica desde el principio." },
      { id: 'c', texto: "Porque no se puede confiar en que los científicos de datos elijan bien por sí solos" },
      { id: 'd', texto: "Porque las necesidades de recursos y la viabilidad no se pueden comprobar sin conocer el enfoque previsto." }
    ],
    correctas: ['d'],
    explicacion: "Las necesidades de recursos y la viabilidad no pueden comprobarse sin conocer el enfoque previsto, por lo que el borrador debe especificar los tipos de modelos candidatos, aunque la selección detallada se realice más adelante. Incluir un vocabulario técnico para satisfacer a los ejecutivos es una decoración, no una justificación del diseño. Enmarcar el problema como desconfianza hacia los científicos de datos malinterpreta el propósito, que es planificación compartida en lugar de control. Nombrar enfoques candidatos no bloquea al equipo, ya que un borrador registra la intención que la evidencia posterior puede revisar. Especificar los tipos de modelos de IA y los enfoques algorítmicos es un elemento específico al redactar la solución de IA."
  },
  {
    id: 'cp4-105', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crosswind Couriers almacena la telemática de los vehículos en repositorios regionales separados en la nube administrados por diferentes equipos, cada uno configurado según sus convenciones cnvn. El director del proyecto de IA está reuniendo la imagen fuente de un modelo de optimización de rutas y debe decidir cómo tratar estos repositorios. ¿Cuál es el enfoque apropiado?",
    opciones: [
      { id: 'a', texto: "Evaluar qué contiene cada repositorio regional y cómo está organizado antes de planificar la extracción." },
      { id: 'b', texto: "Aplazar los datos almacenados en la nube hasta que se hayan reubicado en el almacenamiento local" },
      { id: 'c', texto: "Trate los repositorios como idénticos ya que se ejecutan en la misma plataforma." },
      { id: 'd', texto: "Consolidar todos los repositorios regionales en una tienda global antes de cualquier revisión" }
    ],
    correctas: ['a'],
    explicacion: "Evaluar individualmente los repositorios distribuidos y en la nube es parte de la identificación de fuentes y ubicaciones, porque los almacenes administrados por separado difieren en contenido, estructura y condición incluso en una plataforma compartida. Consolidar todo primero compromete el esfuerzo de migración antes de que nadie sepa qué contiene cada tienda. Suponer que los repositorios son idénticos porque las coincidencias de plataforma ignoran las diferentes convenciones de equipo que describe el escenario. Reubicar los datos en las instalaciones antes de su revisión agrega demoras y costos sin mejorar la comprensión de las fuentes por parte del equipo."
  },
  {
    id: 'cp4-106', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Marlowe Fitness Clubs acaba de recopilar datos de actividad de los miembros para un modelo de abandono, y los científicos de datos quieren comenzar a entrenar de inmediato ya que el cronograma es apretado. Nadie ha examinado aún cómo se ven realmente los datos recopilados. ¿Qué debería hacer primero el gerente del proyecto de IA al equipo?",
    opciones: [
      { id: 'a', texto: "escorrecta Realizar un pase exploratorio para perfilar las características de los datos." },
      { id: 'b', texto: "Recopile datos adicionales de los miembros para crear un margen de seguridad." },
      { id: 'c', texto: "Obtener la certificación del conjunto de datos del proveedor del sistema." },
      { id: 'd', texto: "Comience a entrenar y deje que las métricas del modelo expongan cualquier problema de datos." }
    ],
    correctas: ['a'],
    explicacion: "Un pase exploratorio para perfilar los datos es correcto porque la evaluación debe establecer qué contienen los datos ensamblados, cómo se distribuyen y dónde son débiles antes de comenzar cualquier entrenamiento. Iniciar la capacitación y confiar en las métricas del modelo convierte las costosas ejecuciones de capacitación en una herramienta de descubrimiento de datos lenta y ambigua. Recopilar datos adicionales antes de comprender el conjunto actual puede duplicar lo que ya existe o pasar por alto las lagunas reales. La certificación del proveedor habla de cómo funciona el sistema fuente y lema si este conjunto de datos extraído se adapta a este propósito de modelado."
  },
  {
    id: 'cp4-107', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics está preparando un modelo de análisis del rendimiento físico para que lo utilicen los entrenadores universitarios de Sy. El director del programa de IA descubre que una biblioteca de detección de sesgos de terceros que el equipo planeaba utilizar marca subgrupos demográficos según la raza y el género. El equipo no está seguro de qué métricas son más relevantes para su caso de uso. ¿Qué debe hacer el director del programa?",
    opciones: [
      { id: 'a', texto: "Evite el uso de métricas de subgrupos demográficos para evitar cualquier apariencia de monitoreo de características protegidas." },
      { id: 'b', texto: "Aplazar la selección de métricas hasta después de la implementación, una vez que los datos de rendimiento reales estén disponibles" },
      { id: 'c', texto: "Implementar todas las métricas de sesgo disponibles proporcionadas por la biblioteca para maximizar la cobertura." },
      { id: 'd', texto: "Seleccionar e implementar métricas de detección de sesgos que sean apropiadas para los objetivos y riesgos de equidad." }
    ],
    correctas: ['d'],
    explicacion: "La implementación de métricas de detección de sesgos y sistemas de monitoreo requiere seleccionar métricas que sean apropiadas para los objetivos de equidad y los riesgos del caso de uso específico, no aplicar todas las métricas disponibles de manera indiscriminada. La aplicación de todas las métricas disponibles sin evaluar su relevancia produce ruido de medición en lugar de inteligencia de sesgo procesable. La modificación de métricas de subgrupos demográficos elimina la capacidad de detectar problemas de equidad; El monitoreo legítimo de la equidad utiliza tales métricas. Aplazar la selección de métricas hasta después de su implementación significa que el sesgo puede afectar a los atletas y entrenadores antes de que se implemente cualquier monitoreo."
  },
  {
    id: 'cp4-108', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "A Thornfield Credit Partners le falta un mes para poner en marcha su asistente de suscripción de préstamos de IA. El equipo de infraestructura quiere aprovisionar solo los recursos necesarios para el volumen inicial, asumiendo que la capacidad se puede ampliar después del lanzamiento si es necesario. El director del proyecto de IA está revisando el plan de implementación. ¿Qué riesgo debería plantear el director del proyecto?",
    opciones: [
      { id: 'a', texto: "El modelo puede adaptarse excesivamente a los perfiles de préstamos de los usuarios iniciales y tener un rendimiento inferior para los solicitantes posteriores." },
      { id: 'b', texto: "El lanzamiento sin capacidad validada para la carga máxima podría provocar fallas de rendimiento que socaven la confianza del usuario en una adopción crítica." },
      { id: 'c', texto: "Es posible que sea necesario volver a revisar la política de gobernanza de datos una vez que comience el tráfico de producción." },
      { id: 'd', texto: "El asistente de suscripción puede generar resultados que difieran de las preferencias del equipo de revisión manual." }
    ],
    correctas: ['b'],
    explicacion: "La implementación sin capacidad confirmada para el pico de transacciones de volumen corre el riesgo de degradación del servicio o fallas precisamente cuando el sistema es más visible para sus nuevos usuarios, dañando la confianza en la solución durante el período en el que la confianza es más difícil de reconstruir. Las diferencias de preferencia entre el asistente y los revisores manuales son una preocupación de gestión de cambios y calibración, no un riesgo de capacidad. Revisar la política de gobernanza de datos después de que comienza el tráfico es una consideración operativa independiente de si la infraestructura puede manejar la carga de lanzamiento. El sobreajuste de los primeros usuarios es un problema de calidad del modelo que pertenece a la fase de evaluación, no al plan de infraestructura de implementación."
  },
  {
    id: 'cp4-109', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Seabreeze Cruises extrajo su historial de reservas con anticipación para eliminar el riesgo de un proyecto de pronóstico de demanda, pero la capacitación del modelo ahora se ha retrasado mucho más allá de la fecha de inicio original. Las reservas cambian drásticamente con las temporadas y las promociones, y el extracto refleja las condiciones de cuando se retiró. ¿Qué debería establecer el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Un programa de entrenamiento acelerado que se adapta a la edad del extracto." },
      { id: 'b', texto: "Una política de archivo que preserve el extracto original sin cambios." },
      { id: 'c', texto: "Un procedimiento de actualización que mantiene actualizados los datos recopilados hasta el entrenamiento." },
      { id: 'd', texto: "Un alcance de modelo reducido limitado al período que cubre el extracto." }
    ],
    correctas: ['c'],
    explicacion: "Establecer un procedimiento de actualización es correcto porque los datos recopilados deben mantenerse actualizados cuando una fuente cambia rápidamente y el cronograma del proyecto se mueve; de ​​lo contrario, el modelo aprende un mercado desactualizado. Acelerar la capacitación para que coincida con la antigüedad del extracto permite que un problema de datos dicte la calidad de la entrega y acelere el desarrollo. Reducir el alcance al período del extracto redefine el objetivo empresarial en torno a los datos obsoletos en lugar de corregirlos. Archivar el extracto original preserva el historial para la reproducibilidad, pero no hace nada para satisfacer las necesidades de capacitación de los patrones actuales."
  },
  {
    id: 'cp4-110', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un gerente de proyectos de IA en Roanfield Tractor Works está preparando un comité directivo que se reúne en una iniciativa de predicción de fallas de piezas. El equipo de datos entregó un informe de perfil de cuarenta páginas lleno de terminología estadística, y los miembros del comité son líderes de operaciones de alto nivel sin experiencia en análisis. ¿Cómo debe preparar el director del proyecto la sesión informativa?",
    opciones: [
      { id: 'a', texto: "Posponer la sesión informativa hasta que finalice la elaboración del perfil y se resuelvan todas las preguntas abiertas." },
      { id: 'b', texto: "Envíe el informe de perfil completo para que el comité vea la evidencia técnica completa." },
      { id: 'c', texto: "Haga que el científico de datos principal guíe al comité a través de la metodología estadística en detalle." },
      { id: 'd', texto: "Replantear los hallazgos en términos de impacto empresarial y la decisión que el comité debe tomar." }
    ],
    correctas: ['d'],
    explicacion: "Replantear los hallazgos en términos de impacto empresarial vinculados a la decisión en cuestión traduce los conceptos de datos técnicos a un lenguaje en el que los líderes de operaciones pueden actuar, que es exactamente lo que requiere transmitir la comprensión de los datos al liderazgo. Reenviar el informe de perfil completo entierra el mensaje en terminología que la audiencia no puede interpretar y les transfiere la carga de la traducción. Un recorrido detallado por la metodología estadística sirve para una revisión técnica por pares, no para una sesión informativa sobre decisiones ejecutivas. Posponer hasta que se resuelvan todas las preguntas impide que las personas que financian el trabajo reciban un estatus oportuno, y las actualizaciones de liderazgo no deben esperar a recibir información perfecta."
  },
  {
    id: 'cp4-111', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Fynite Analytics está entrenando un modelo de detección de anomalías financieras. El equipo de ciencia de datos ha estado ejecutando experimentos de capacitación durante varias semanas, pero los registros de utilización de recursos muestran que la capacidad de la GPU se consume las 24 horas del día sin ventanas planificadas para otras cargas de trabajo. El director del proyecto de IA debe controlar el uso de recursos sin detener el desarrollo del modelo. ¿Qué debe hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Permitir que el equipo continúe usando los recursos sin límites y abordar los conflictos solo si surgen." },
      { id: 'b', texto: "Requerir que el equipo de ciencia de datos reduzca la cantidad de experimentos a la configuración de modelo más prometedora." },
      { id: 'c', texto: "Introducir cronogramas de capacitación planificados y acuerdos de asignación de recursos para que los experimentos se ejecuten en ventanas coordinadas que compartan capacidad con otras necesidades del proyecto." },
      { id: 'd', texto: "Suspender todos los experimentos de capacitación hasta que el patrocinador del proyecto apruebe una nueva compra de hardware." }
    ],
    correctas: ['c'],
    explicacion: "La introducción de cronogramas de capacitación planificados y acuerdos de asignación de recursos coordina las ventanas de experimentos para que la capacidad de GPL se comparta de manera predecible con otras cargas de trabajo, resolviendo la disputa sin detener el desarrollo. Suspender toda la capacitación hasta que se apruebe el nuevo hardware detiene el progreso innecesariamente si la programación puede resolver el conflicto. Permitir el uso ilimitado de recursos sin coordinación garantiza la continuidad del conflicto y puede bloquear otras actividades del proyecto. Restringir el equipo a una única configuración de modelo elimina la experimentación que requiere el desarrollo del modelo y puede impedir que el equipo encuentre el enfoque de mejor rendimiento."
  },
  {
    id: 'cp4-112', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tornwick Saddlery planea permitir que un sistema de inteligencia artificial generativa escriba descripciones de productos publicadas directamente en su catálogo público sin revisión. Durante el trabajo de riesgo del proyecto, el gerente del proyecto de IA considera qué podría suceder si el sistema produce afirmaciones inexactas o frases ofensivas bajo la marca de la empresa. ¿Cómo se debe manejar esta exposición?",
    opciones: [
      { id: 'a', texto: "Evaluar el impacto de la marca y la confianza del cliente y exigir controles de revisión antes de la publicación." },
      { id: 'b', texto: "Trátelo como una posibilidad remota que no vale la pena analizar, ya que el proveedor prueba sus modelos." },
      { id: 'c', texto: "Restringir el sistema a descripciones breves basándose en la teoría de que menos texto significa menos riesgo." },
      { id: 'd', texto: "Planifique una plantilla de disculpa que el equipo de soporte pueda enviar si los clientes se quejan" }
    ],
    correctas: ['a'],
    explicacion: "La publicación de texto generado por máquina bajo la marca sin revisión crea una exposición a la reputación que la evaluación de riesgos debe evaluar, lo que lleva a controles como la revisión humana o la publicación por etapas antes de que el contenido se haga público. Al descartar la posibilidad porque un proveedor prueba sus modelos, subcontrata el juicio sobre el Srand de esta empresa a una parte que no asume ningún daño. Una disculpa preestablecida acepta el daño y gestiona sólo las consecuencias. Acortar las descripciones reduce el recuento de palabras, no la posibilidad de que una afirmación falsa o una frase ofensiva llegue a los clientes."
  },
  {
    id: 'cp4-113', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Wrenfield Auto Pads está recibiendo extractos de inventario de sus almacenes regionales para un modelo de predicción de desabastecimiento. El equipo de datos quiere comenzar a limpiar de inmediato y verificar si hay lagunas más adelante durante la preparación. Se concedió acceso al sistema de almacén durante un período de participación limitado. ¿En qué debería insistir el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Una verificación de la integridad del extracto de una región con resultados extrapolados al resto" },
      { id: 'b', texto: "Verificación de cada extracto con su fuente mientras el acceso a la colección permanece abierto" },
      { id: 'c', texto: "Limpieza inmediata con espacios registrados a medida que salen a la superficie durante la preparación." },
      { id: 'd', texto: "Aceptación de las confirmaciones por correo electrónico de los equipos del almacén de que los extractos están completos." }
    ],
    correctas: ['b'],
    explicacion: "Validar la integridad y la precisión durante la recopilación es la salvaguardia definida, porque las brechas encontradas mientras el acceso a la fuente aún está abierta pueden volver a eliminarse de manera económica. Limpiar primero y registrar las brechas después significa descubrir los registros faltantes después de que se haya cerrado la ventana de acceso. Las confirmaciones por correo electrónico dan fe de buenas intenciones pero no verifican nada sobre los archivos reales recibidos. Verificar una región y extrapolar supone uniformidad entre los almacenes que extraen de forma independiente, que es exactamente donde se esconden las discrepancias."
  },
  {
    id: 'cp4-114', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Driftwood Marine está diseñando una solución de inteligencia artificial para pronosticar la demanda de repuestos. El borrador cubre opciones de arquitectura, flujo de datos y modelado, pero no dice nada sobre cómo se lanzará el sistema o cómo se mantendrá funcionando una vez que esté activo. El equipo sostiene que esas preguntas pertenecen a una fase posterior. ¿Cómo debería responder el director del proyecto de IA?",
    opciones: [
      { id: 'a', texto: "Asigne tareas de soporte de producción al equipo de ciencia de datos ahora" },
      { id: 'b', texto: "Describir el despliegue y las consideraciones operativas en el borrador." },
      { id: 'c', texto: "Acepte y revise las preguntas de lanzamiento después de crear el modelo." },
      { id: 'd', texto: "Trasladar la planificación del lanzamiento a un proyecto independiente posterior al lanzamiento" }
    ],
    correctas: ['b'],
    explicacion: "Un borrador completo de la solución describe las consideraciones operativas y de implementación desde el principio, de modo que el diseño tenga en cuenta cómo se lanzará y mantendrá el sistema. Esperar hasta que se construya el modelo corre el riesgo de diseñar algo que no pueda operarse o liberarse limpiamente. Asignar tareas de soporte de producción al equipo de ciencia de datos es una decisión de personal que no llena el vacío en el diseño en sí. Trasladar la planificación del lanzamiento a un proyecto posterior al lanzamiento separado separa el pensamiento operativo de las opciones de diseño que dependen de él."
  },
  {
    id: 'cp4-115', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Quarry Ridge Mining ha terminado de evaluar los datos de los sensores para un proyecto de mantenimiento predictivo. El liderazgo está presionando para comenzar a construir modelos porque el ciclo del presupuesto de mantenimiento cierra pronto. El gerente del proyecto de IA tiene los resultados de la evaluación en la mano. ¿Cómo debería manejar el director del proyecto la transición a la siguiente fase?",
    opciones: [
      { id: 'a', texto: "Deje que los científicos de datos decidan informalmente si se sienten cómodos iniciando el trabajo con el modelo." },
      { id: 'b', texto: "Avanzar inmediatamente ya que la presión del cronograma supera las preocupaciones sobre los datos restantes" },
      { id: 'c', texto: "Respæstacorrecta Comparar los hallazgos con los requisitos de datos definidos y tomar una decisión formal de proceder o detener" },
      { id: 'd', texto: "Solicite otra ronda de recopilación de datos para estar seguro independientemente de lo que muestren los hallazgos." }
    ],
    correctas: ['c'],
    explicacion: "Comparar los hallazgos de la evaluación con los requisitos definidos y tomar una decisión formal de ir o no es la puerta disciplinada que requiere la metodología antes de que comience el trabajo del modelo, y le da al liderazgo una base defendible para la elección. Avanzar debido a la presión del cronograma sustituye la evidencia por urgencia e invita a un costoso retrabajo si los datos son inadecuados. Dejar la decisión en manos de la comodidad informal de los científicos de datos elimina la responsabilidad y evita el punto de control documentado en el que confían las partes interesadas. Solicitar más recopilación independientemente de los hallazgos ignora la evidencia ya reunida y retrasa el proyecto sin justificación."
  },
  {
    id: 'cp4-116', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Vermilion Bindery recibe una avalancha constante de mensajes de clientes, la mayoría preguntando en el lenguaje cotidiano dónde está un pedido, cuándo finalizará la nueva encuadernación o cómo cambiar una dirección de entrega. El personal responde las mismas preguntas repetidamente mientras esperan consultas complejas sobre restauración. El director del proyecto de IA está asignando esta situación a un enfoque de IA candidato. ¿Qué caracterización del problema debería impulsar el mapeo?",
    opciones: [
      { id: 'a', texto: "Necesidad de detectar órdenes inusuales que se desvían de los patrones normales" },
      { id: 'b', texto: "Grandes volúmenes de solicitudes rutinarias en lenguaje natural que siguen intenciones reconocibles" },
      { id: 'c', texto: "La necesidad de pronosticar los volúmenes de pedidos futuros a partir del historial estacional" },
      { id: 'd', texto: "Necesidad de adaptar las ofertas de productos a las preferencias de cada cliente." }
    ],
    correctas: ['b'],
    explicacion: "Las características definitorias aquí son la interacción del lenguaje natural y un alto número de solicitudes rutinarias con intenciones reconocibles, que es la forma del problema que apunta hacia enfoques de interacción conversacional y libera al personal para consultas complejas. Pronosticar volúmenes de pedidos futuros describe un problema de predicción, pero lo difícil es responder preguntas repetitivas, no anticipar la demanda. La detección de pedidos desviados describe un problema de anomalía que nada en la situación requiere. La adaptación de ofertas a preferencias individuales describe un problema de personalización, mientras que estos clientes quieren respuestas de estado, no recomendaciones."
  },
  {
    id: 'cp4-117', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightwater Utilities está creando un modelo de pronóstico de consumo que debe aprender de las lecturas de medidores que continúan llegando todos los días. El equipo completó un único extracto masivo para comenzar la exploración, pero la capacitación del modelo y la evaluación continua necesitarán datos que sigan el ritmo de los medidores. ¿Qué debería implementar el director del proyecto de IA al equipo?",
    opciones: [
      { id: 'a', texto: "Copias ad hoc de lecturas siempre que los modeladores las soliciten" },
      { id: 'b', texto: "Capacitación sobre la instantánea existente con una actualización después de la implementación." },
      { id: 'c', texto: "Una repetición manual programada del extracto masivo por parte de un analista" },
      { id: 'd', texto: "Un proceso de recolección repetible que captura la alimentación continua del medidor." }
    ],
    correctas: ['d'],
    explicacion: "Un proceso de recopilación repetible para la fuente en curso es correcto porque recopilar datos para una fuente generada continuamente significa diseñar una canalización, no repetir extracciones únicas. Las copias ad hoc a pedido dejan silencios en la cobertura y hacen que los experimentos sean imposibles de reproducir. Una repetición manual programada depende de la disponibilidad del analista e invita a perder ciclos y extraer extractos inconsistentes. La capacitación solo en la instantánea existente permite que los datos envejezcan a lo largo del desarrollo y empuja el problema de recopilación real más allá del punto en que bloquea la evaluación."
  },
  {
    id: 'cp4-118', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Trelling Glassworks quiere un sistema de visión para detectar defectos de fabricación en su línea de producción. El director del proyecto de IA descubre que los defectos son raros y que la planta sólo ha fotografiado un pequeño conjunto de ejemplos confirmados a lo largo de los años. ¿Qué debería evaluar primero el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Los objetivos de precisión que el equipo de calidad espera del sistema." },
      { id: 'b', texto: "La voluntad de los supervisores de planta de actuar ante alertas automatizadas" },
      { id: 'c', texto: "Si existen o pueden obtenerse suficientes ejemplos de defectos representativos para la formación" },
      { id: 'd', texto: "El hardware de la cámara necesario para capturar imágenes a velocidad de línea." }
    ],
    correctas: ['c'],
    explicacion: "La evaluación de si existen o se pueden obtener suficientes ejemplos de defectos representativos aborda la disponibilidad de datos, el factor con más probabilidades de hacer o deshacer esta iniciativa dado lo raros que son los defectos. El hardware de la cámara es importante para la calidad de la captura, pero el equipo se puede adquirir, mientras que la escasez de ejemplos de aprendizaje no se puede resolver sólo con la compra. La voluntad del supervisor de actuar según las alertas es una preocupación que se vuelve relevante una vez que un sistema viable es plausible. Es importante definir objetivos de precisión, pero no tienen sentido si no hay datos necesarios para alcanzar cualquier objetivo."
  },
  {
    id: 'cp4-119', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Quillbrook Veterinary Group está preparando la justificación de la financiación para un asistente de IA que clasifica las llamadas clínicas entrantes. El director del proyecto de IA ve que todas las cifras de beneficios y costos del borrador provienen del equipo de ciencia de datos, mientras que el departamento de finanzas de la empresa mantiene sus propios modelos de costos y estándares de proyección. ¿Qué debe hacer el director del proyecto antes de que el documento llegue a los ejecutivos?",
    opciones: [
      { id: 'a', texto: "Presentar las proyecciones propias del equipo técnico a los ejecutivos sin cambios" },
      { id: 'b', texto: "Validar las estimaciones de costos y beneficios con los modelos del departamento financiero." },
      { id: 'c', texto: "Reduzca cada cifra de beneficios proyectados hasta que la estimación parezca conservadora." },
      { id: 'd', texto: "Posponer todas las proyecciones financieras hasta que exista un modelo que funcione." }
    ],
    correctas: ['b'],
    explicacion: "Apoyar la creación de casos de negocios significa colaborar con el equipo de finanzas para que las estimaciones de costos y los beneficios proyectados sigan los estándares financieros aceptados por la organización, lo que da credibilidad a la justificación ante los tomadores de decisiones. La presentación de proyecciones no revisadas del equipo técnico invita a cifras optimistas que las finanzas luego disputarán. Reducir arbitrariamente cada cifra de beneficios es una conjetura más que un análisis y debilita el argumento en la dirección opuesta. Posponer todas las proyecciones hasta que exista un modelo elimina la evidencia financiera que el liderazgo necesita para aprobar el trabajo en primer lugar."
  },
  {
    id: 'cp4-120', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Ferncliff Labs, el líder de datos redactó un informe ejecutivo sobre la evaluación de datos de ensayo que está lleno de tasas nulas, recuentos de cardinalidad y terminolog% del esquema. El comité ejecutivo utilizará el informe para decidir si financiar la siguiente fase. ¿Qué debería hacer el director del proyecto de IA con el borrador?",
    opciones: [
      { id: 'a', texto: "Omita los materiales preparados y haga que los ejecutivos cuestionen directamente al líder de datos" },
      { id: 'b', texto: "Replantear los hallazgos en torno al impacto empresarial y la decisión de financiación en cuestión." },
      { id: 'c', texto: "Reemplace la sesión informativa con un recorrido en vivo del conjunto de datos sin procesar." },
      { id: 'd', texto: "Envíe el borrador técnico sin cambios, ya que la precisión es lo más importante para los ejecutivos." }
    ],
    correctas: ['b'],
    explicacion: "Traducir conceptos de datos técnicos a un lenguaje relevante para el negocio es el deber del gerente de proyecto al transmitir la comprensión de los datos al liderazgo, y una decisión de financiamiento necesita hallazgos enmarcados como impacto e implicaciones. El envío del borrador, lleno de jerga, preserva la precisión sobre la cual el comité no puede actuar. Un recorrido en vivo de datos sin procesar muestra artefactos en lugar de significado y desperdicia la escasa atención ejecutiva. Las preguntas directas no preparadas producen una sesión no estructurada que tal vez nunca alcance la información que requiere la decisión"
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA4: PREGUNTAS_CPMAI_EXTRA4 };
