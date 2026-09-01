/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 2.
 *
 * ⚠️ MISMO ORIGEN Y MISMAS CONDICIONES que `cpmai-adaptadas.js`, pero de la segunda
 *    prueba de práctica. Son 109 preguntas: de la 10 a la 120, menos la 73 y la
 *    110, que no se capturaron. Faltan también las nueve primeras. Escenarios y
 *    opciones son traducción adaptada del original; las explicaciones están
 *    reescritas.
 *
 *    Se publica por decisión explícita del autor del repositorio (2026-08-31).
 *    Borrar este archivo retira la prueba 2 sin tocar nada más: `cpmai.html` lo
 *    carga solo si existe.
 *
 * Etiquetado contra el ECO CPMAI 2025 de `js/cpmai-eco.js`, respetando el dominio
 * y la tarea que declaraba la fuente (Domain I→responsable, 2→negocio, 3→datos,
 * 4→modelos, 5→operacion; «Task N» → índice N-1).
 *
 * Reparto: negocio 30 · datos 27 · modelos 18 · operacion 18 · responsable 16.
 */

const PREGUNTAS_CPMAI_EXTRA2 = [

  // ── IA responsable y confiable ────────────────────────────────────────────

  {
    id: 'cpy-res-001', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una energética cierra un proyecto de IA que usó datos de sensores de equipos industriales para predecir fallas de componentes. Al entrar en la fase final de reporte, el patrocinador ejecutivo pide al director del proyecto producir documentación que registre todas las decisiones importantes tomadas durante el proyecto: qué enfoques de modelado se probaron, cuáles se rechazaron y por qué, y qué interesados aprobaron cada hito clave. ¿Qué tipo de documentación debe crear?',
    opciones: [
      { id: 'a', texto: 'Un diccionario de datos que liste los nombres de campo y tipos de dato del conjunto de entrenamiento de la versión final del modelo.' },
      { id: 'b', texto: 'Una ficha del modelo que resuma entradas, salidas y métricas de desempeño del modelo final para quienes interactúan con el sistema.' },
      { id: 'c', texto: 'Registros integrales de las decisiones de desarrollo del modelo de IA y de los puntos de decisión de avance o detención.' },
      { id: 'd', texto: 'Un informe post mortem centrado exclusivamente en lo que salió mal durante el proyecto y cómo se resolvieron esos problemas.' }
    ],
    correctas: ['c'],
    explicacion: 'Unos registros integrales de las decisiones de desarrollo —historial de versiones, aprobaciones de interesados y puntos de avance o detención— son la documentación de rendición de cuentas que el patrocinador está pidiendo y la que hace auditable un proyecto de IA. (b) resume el modelo final para usuarios finales, pero no recoge el historial de decisiones, los enfoques descartados ni las aprobaciones. (a) cataloga la estructura del conjunto de datos, no las decisiones del proyecto. (d) se limita a los problemas y omite el registro completo, incluidas las elecciones acertadas y las aprobaciones que el patrocinador necesita.'
  },
  {
    id: 'cpy-res-002', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica prepara el lanzamiento de un modelo de emparejamiento para ensayos clínicos que procesará historias médicas de pacientes. Antes de que el modelo entre en operación, el director del programa de IA debe evaluar los riesgos de privacidad propios de este despliegue. ¿Cuál es el propósito principal de esa evaluación?',
    opciones: [
      { id: 'a', texto: 'Confirmar que el equipo de ingeniería de datos completó la selección de variables.' },
      { id: 'b', texto: 'Identificar y documentar los riesgos de privacidad que introduce usar datos de pacientes en el sistema de IA.' },
      { id: 'c', texto: 'Establecer los umbrales técnicos de desempeño que el modelo debe cumplir al lanzarse.' },
      { id: 'd', texto: 'Determinar si la arquitectura del modelo requiere un conjunto de entrenamiento más grande.' }
    ],
    correctas: ['b'],
    explicacion: 'La evaluación que corresponde antes de desplegar es una evaluación de impacto en privacidad, y su propósito principal es identificar y documentar los riesgos que el sistema introduce, para poder diseñar las mitigaciones antes de que ocurra el daño. (d) es una actividad de preparación de datos, no una evaluación de privacidad. (c) forma parte de la evaluación del modelo. (a) es una verificación de estado del proyecto, no una actividad de riesgo de privacidad.'
  },
  {
    id: 'cpy-res-003', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de equipamiento outdoor lanza un modelo de IA para pronosticar demanda en sus centros de distribución regionales. El director del proyecto recibe un mensaje del área legal advirtiendo que nuevas regulaciones de responsabilidad en IA están bajo revisión activa en dos de las jurisdicciones donde opera la empresa, y que podrían imponer requisitos obligatorios de documentación de sesgos dentro del próximo año. ¿Qué acción es la más apropiada?',
    opciones: [
      { id: 'a', texto: 'Pausar por completo el proyecto de pronóstico hasta que el panorama regulatorio se estabilice en ambas jurisdicciones.' },
      { id: 'b', texto: 'Esperar a que las regulaciones estén finalizadas y publicadas antes de tomar cualquier acción, para no implementar requisitos que pueden cambiar.' },
      { id: 'c', texto: 'Aplicar preventivamente al nuevo proyecto los requisitos de documentación más estrictos que la empresa use hoy en cualquier jurisdicción.' },
      { id: 'd', texto: 'Rastrear la evolución de esas regulaciones y coordinar con las áreas legal y de cumplimiento para evaluar si conviene establecer desde ya prácticas tempranas de documentación.' }
    ],
    correctas: ['d'],
    explicacion: 'Rastrear la regulación en evolución y coordinar con legal y cumplimiento mantiene informado al director sobre la trayectoria normativa y permite planificar de forma proactiva sin detener el avance del proyecto. (b) arriesga que el equipo quede desprevenido cuando las reglas entren en vigor y obliga a un trabajo retroactivo caro. (a) es desproporcionado dado que las regulaciones aún están en revisión y no rigen. (c) puede generar sobrecarga innecesaria y no necesariamente coincidir con lo que las nuevas normas terminen exigiendo.'
  },
  {
    id: 'cpy-res-004', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una manufacturera es responsable de un sistema de control de calidad desplegado en una línea de producción. Un inspector gubernamental de seguridad realiza una revisión sin aviso y solicita documentación de todos los cambios hechos al modelo en los últimos dieciocho meses, incluido quién aprobó cada cambio y qué validación se realizó antes de que entrara en operación. El director no logra ubicar esa información. ¿Qué proceso de rendición de cuentas debió existir para evitar el vacío?',
    opciones: [
      { id: 'a', texto: 'Un plan de comunicación que notifique a los interesados cada vez que se hace un cambio significativo al modelo.' },
      { id: 'b', texto: 'Un sistema de control de versiones del modelo que registre cada cambio con la identidad de quien lo aprobó, los pasos de validación completados y las fechas.' },
      { id: 'c', texto: 'Una política que exija probar todos los cambios del modelo en un ambiente de preproducción antes de desplegarlos a producción.' },
      { id: 'd', texto: 'Un procedimiento de reversión que permita al equipo volver el modelo a cualquier versión anterior dentro de una ventana definida.' }
    ],
    correctas: ['b'],
    explicacion: 'Un sistema de control de versiones que registra cada cambio con aprobador, pasos de validación y fechas crea directamente los registros integrales de decisiones de desarrollo y modificación que exige una consulta regulatoria. (c) es una buena práctica de calidad que valida la preparación del modelo, pero no genera por sí misma el rastro de trazabilidad que el inspector requiere. (a) distribuye notificaciones de cambio, pero no constituye un registro auditable de aprobaciones y validaciones. (d) gestiona el riesgo de despliegue y no produce ni preserva la documentación de quién autorizó qué y qué se validó.'
  },
  {
    id: 'cpy-res-005', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director del programa de IA de una minorista prepara el lanzamiento de un modelo de optimización de precios. En la revisión final, el área legal plantea un escenario: si el modelo terminara cobrando precios más altos a clientes de códigos postales de menores ingresos por productos idénticos, la empresa podría enfrentar acusaciones de precios abusivos. Faltan dos semanas para la fecha prevista de puesta en marcha. ¿Qué acción debe tomar de inmediato?',
    opciones: [
      { id: 'a', texto: 'Pedir al equipo de precios que revise manualmente todas las recomendaciones del modelo para clientes marcados como de bajos ingresos antes de aplicar los precios.' },
      { id: 'b', texto: 'Salir en la fecha prevista y establecer una revisión poslanzamiento que verifique los patrones de precios entre códigos postales a los treinta días.' },
      { id: 'c', texto: 'Correr el modelo sobre una muestra representativa de códigos postales de clientes y comparar las recomendaciones de precio resultantes para identificar brechas sistemáticas correlacionadas con el ingreso, antes de la puesta en marcha.' },
      { id: 'd', texto: 'Quitar el código postal como variable de entrada y volver a desplegar el modelo sin ella para eliminar la variación geográfica de precios.' }
    ],
    correctas: ['c'],
    explicacion: 'Correr el modelo sobre una muestra representativa y comparar las recomendaciones antes de la puesta en marcha es lo correcto porque revisar las salidas en busca de patrones discriminatorios corresponde hacerlo antes del despliegue, no después. (b) acepta el riesgo de aplicar precios discriminatorios a clientes reales hasta por un mes, con exposición legal y reputacional. (a) crea un parche operativamente pesado y no determina si el modelo en sí produce salidas discriminatorias. (d) puede no eliminar la correlación con el ingreso, porque otras variables pueden actuar como proxy: el patrón de fondo hay que investigarlo, no sortearlo quitando un campo.'
  },
  {
    id: 'cpy-res-006', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de energía solar se prepara para una inspección de la autoridad de protección de datos sobre su modelo de predicción de consumo eléctrico residencial. La autoridad solicitó documentación de las actividades de cumplimiento normativo que el programa realizó, desde la recolección inicial de datos hasta el despliegue del modelo. El director del programa de IA debe armar el paquete. ¿Qué debe contener?',
    opciones: [
      { id: 'a', texto: 'Una descripción técnica del flujo de datos, desde la ingesta de los medidores inteligentes hasta la salida de inferencia del modelo.' },
      { id: 'b', texto: 'El historial del repositorio de código con todos los commits realizados sobre el modelo de predicción durante el desarrollo.' },
      { id: 'c', texto: 'Un resumen de la exactitud del modelo sobre datos residenciales reservados y una comparación con el método de pronóstico anterior.' },
      { id: 'd', texto: 'Registros de cada actividad de cumplimiento realizada en cada fase del proyecto y de las aprobaciones regulatorias obtenidas.' }
    ],
    correctas: ['d'],
    explicacion: 'Mantener documentación para auditorías y revisiones regulatorias exige reunir los registros de cada actividad de cumplimiento por fase —evaluaciones de privacidad, revisiones legales y aprobaciones obtenidas—, porque la autoridad está examinando si el programa siguió los pasos exigidos, no qué tan exacto es el modelo. (b) documenta cambios técnicos, no actividades de cumplimiento. (a) explica cómo funciona el sistema, no qué gobernanza se le aplicó. (c) demuestra calidad del modelo, que no es lo que la inspección evalúa.'
  },
  {
    id: 'cpy-res-007', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de transporte urbano pilotea un modelo de IA que predice horarios de llegada de buses con datos de GPS, historial de pasajeros y flujos de tráfico en tiempo real. Un responsable de producto sugiere que la transparencia mejoraría simplemente mostrando el puntaje de confianza del modelo junto a cada predicción. El director del proyecto de IA considera que hace falta un enfoque más estructurado. ¿Qué debe priorizar establecer?',
    opciones: [
      { id: 'a', texto: 'Un rediseño simplificado de la interfaz que oculte los puntajes de confianza, para no confundir a pasajeros que quizá no entiendan medidas estadísticas.' },
      { id: 'b', texto: 'Una API pública que permita a desarrolladores externos consultar el modelo y verificar sus predicciones de forma independiente.' },
      { id: 'c', texto: 'Un boletín mensual enviado a los concejales municipales con las métricas promedio de exactitud del modelo y datos de desempeño del servicio.' },
      { id: 'd', texto: 'Requisitos de explicabilidad para la comunicación con interesados, que definan qué información debe transmitirse sobre la operación del modelo y cómo se presentará a cada audiencia.' }
    ],
    correctas: ['d'],
    explicacion: 'Establecer requisitos de explicabilidad define qué significa transparencia para cada audiencia y asegura que el proyecto entregue el nivel y el formato de explicación adecuados a pasajeros, personal de operaciones y reguladores. (b) atiende la apertura técnica, que no es lo mismo que definir qué debe comunicarse a los interesados y en qué forma. (a) reduce la información disponible para los pasajeros y se aleja de la transparencia en vez de acercarse. (c) es un canal útil, pero demasiado esporádico y general como para constituir un enfoque estructurado de transparencia.'
  },
  {
    id: 'cpy-res-008', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística desarrolla una IA de optimización de rutas que ingiere telemática de conductores, incluidas coordenadas GPS precisas registradas cada treinta segundos. El director del programa se entera de que la empresa planea conservar esos datos indefinidamente, porque el equipo de ciencia de datos sostiene que más historial mejora la calidad del modelo. Un oficial de cumplimiento plantea su preocupación por retener datos granulares de localización personal más allá del propósito declarado. ¿Qué acción corresponde?',
    opciones: [
      { id: 'a', texto: 'Transferir los datos de GPS a un archivo cifrado de almacenamiento en frío, donde no se accederá salvo que se necesiten.' },
      { id: 'b', texto: 'Establecer un calendario de retención de datos alineado con el propósito declarado original y los requisitos regulatorios, y aplicarlo a los registros de telemática.' },
      { id: 'c', texto: 'Coincidir con el equipo de ciencia de datos y documentar que la retención extendida fue aprobada con fines de mejora del modelo.' },
      { id: 'd', texto: 'Indicar al equipo que elimine todos los datos de GPS con más de un año de antigüedad y reentrene el modelo de inmediato.' }
    ],
    correctas: ['b'],
    explicacion: 'Establecer un calendario de retención alineado con el propósito original y la regulación aplicable es lo correcto, porque los principios de protección de datos exigen conservar los datos personales solo mientras sean necesarios para el fin que justificó recolectarlos. (c) no atiende la preocupación de cumplimiento y puede exponer a la organización a responsabilidad regulatoria. (d) fija un corte arbitrario que salta por encima del proceso de gobernanza que debe determinar los plazos legalmente apropiados. (a) no resuelve la retención: los datos siguen existiendo y siguen sujetos a las obligaciones de privacidad, con independencia de la frecuencia de acceso.'
  },
  {
    id: 'cpy-res-009', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa solar reentrena un modelo de solvencia crediticia de clientes tras descubrir que los datos originales de entrenamiento subrepresentaban a solicitantes de códigos postales de bajos ingresos. El equipo de ciencia de datos propone dos técnicas: sobremuestrear al grupo subrepresentado y aplicar una restricción de equidad durante el entrenamiento. El director del programa de IA debe evaluar ambas opciones. ¿Cuál es su responsabilidad principal en esta etapa?',
    opciones: [
      { id: 'a', texto: 'Exigir al equipo recolectar datos enteramente nuevos en lugar de reutilizar el conjunto desbalanceado existente.' },
      { id: 'b', texto: 'Elegir la técnica con mayor exactitud global del modelo sobre el conjunto de validación.' },
      { id: 'c', texto: 'Supervisar la aplicación de técnicas de mitigación de sesgo durante el desarrollo del modelo, para reducir la brecha de representación.' },
      { id: 'd', texto: 'Aprobar la técnica que minimice el costo de cómputo de la corrida de reentrenamiento.' }
    ],
    correctas: ['c'],
    explicacion: 'La responsabilidad principal en esta etapa es supervisar la aplicación de las técnicas de mitigación, asegurando que el equipo emplee métodos apropiados para cerrar la brecha de representación. (b) puede enmascarar mejoras en equidad: el director debe balancear exactitud y objetivos de equidad, no decidir solo por la métrica global. (a) puede ser innecesariamente costoso y lento cuando el remuestreo o las restricciones de equidad ya atienden la brecha conocida. (d) es una preocupación operativa, no una responsabilidad de gobernanza de la equidad.'
  },
  {
    id: 'cpy-res-010', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un grupo de medios despliega un modelo de IA que personaliza recomendaciones de contenido para sus suscriptores. El área legal informa al director del proyecto que una nueva ley de inteligencia artificial entró en vigor y clasifica como de alto riesgo los sistemas de recomendación que influyen en el consumo de información. El equipo no tiene claro qué obligaciones específicas aplican a su despliegue. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Deshabilitar de inmediato el modelo de recomendación hasta que el área legal haya analizado íntegramente cada disposición de la regulación.' },
      { id: 'b', texto: 'Clasificar el sistema internamente como de bajo riesgo y continuar con el despliegue, con el argumento de que las recomendaciones de contenido no son críticas para la seguridad.' },
      { id: 'c', texto: 'Coordinar con las áreas legal y de cumplimiento para evaluar las obligaciones concretas que impone la regulación y determinar qué cambios se requieren en documentación, monitoreo y supervisión.' },
      { id: 'd', texto: 'Contratar a un consultor en asuntos regulatorios para que asuma por completo la determinación de cumplimiento y sacar al director del proyecto del proceso.' }
    ],
    correctas: ['c'],
    explicacion: 'Coordinar con legal y cumplimiento reúne la experiencia adecuada para determinar qué exige la norma y permite al proyecto desarrollar una respuesta específica. (a) es desproporcionado antes siquiera de conocer las obligaciones y provoca una interrupción innecesaria del negocio. (b) contradice la evaluación del área legal de que el sistema cae en la categoría de alto riesgo y expone a la organización a sanciones regulatorias. (d) delega la determinación completa y aparta al director del proyecto, lo que contradice su responsabilidad de supervisar la gobernanza de IA dentro del proyecto.'
  },

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpy-dat-001', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una pesquera, las corridas de entrenamiento de un proyecto de pronóstico de capturas se estancan porque comparten un servidor de analítica sobrecargado con los reportes rutinarios de la empresa. El equipo de ciencia de datos pierde días cada semana esperando a que terminen los trabajos. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Pedir a los equipos de reportes que pausen sus cargas de trabajo durante las semanas críticas de entrenamiento.' },
      { id: 'b', texto: 'Programar los trabajos de entrenamiento del proyecto para la noche, cuando la carga de reportes es menor.' },
      { id: 'c', texto: 'Aprovisionar capacidad de cómputo dimensionada para la carga de procesamiento y entrenamiento del proyecto.' },
      { id: 'd', texto: 'Reducir el conjunto de entrenamiento para que los trabajos quepan en la capacidad libre del servidor.' }
    ],
    correctas: ['c'],
    explicacion: 'Aprovisionar capacidad dimensionada a la carga del proyecto elimina la contención de raíz, y disponer cómputo adecuado para el procesamiento y el entrenamiento es parte central de coordinar el entorno de trabajo de IA. (b) raciona la escasez en vez de resolverla y sigue limitando al equipo a una fracción del rendimiento que necesita. (d) sacrifica la calidad del modelo para acomodarse a una restricción de infraestructura, lo que invierte la prioridad. (a) traslada el dolor a las operaciones del negocio y no es sostenible más allá de un apuro puntual.'
  },
  {
    id: 'cpy-dat-002', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una electrónica evalúa los registros de reclamos de garantía para un modelo que debe aprender patrones de falla de productos individuales. Los registros están limpios y completos, pero los evaluadores reportan que los reclamos no pueden vincularse de forma confiable con las entradas del catálogo a las que se refieren. El líder de ciencia de datos dice que la calidad del contenido luce excelente. ¿Qué preocupación debe plantear el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Riesgo de vigencia, porque siguen llegando reclamos nuevos.' },
      { id: 'b', texto: 'Formatos de campo que podrían diferir del estándar del almacén de datos.' },
      { id: 'c', texto: 'Volumen que podría exceder lo que el entorno puede procesar.' },
      { id: 'd', texto: 'El vínculo faltante, que bloquea el modelado a nivel de producto que la solución requiere.' }
    ],
    correctas: ['d'],
    explicacion: 'Plantear el vínculo faltante es lo correcto porque la evaluación incluye revisar la estructura en clave de compatibilidad con el modelado, y unos registros que no pueden asociarse a productos no pueden enseñarle al modelo patrones de falla por producto, por limpios que estén. (b) es trabajo rutinario de preparación y los evaluadores no señalaron ninguna diferencia. (a) no es el problema planteado: que los reclamos lleguen de forma continua es esperable y manejable. (c) es una cuestión de infraestructura, mientras que el defecto reportado es estructural y afecta a si la solución es viable siquiera.'
  },
  {
    id: 'cpy-dat-003', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una mutual de seguros está por comenzar un procesamiento de datos intensivo para un proyecto actuarial de IA, con el entrenamiento del modelo a continuación. El equipo comparte hoy una única estación de trabajo de analista, y el cronograma supone que el procesamiento arranca el mes próximo. ¿Qué debe disponer ahora el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Programar los trabajos de procesamiento durante la noche en la estación compartida.' },
      { id: 'b', texto: 'Esperar a que la primera corrida de entrenamiento fallida revele la verdadera necesidad de hardware.' },
      { id: 'c', texto: 'Aprovisionar capacidad de procesamiento y entrenamiento dimensionada a la carga de trabajo planificada.' },
      { id: 'd', texto: 'Adquirir el clúster de cómputo más grande disponible para eliminar cualquier riesgo de capacidad.' }
    ],
    correctas: ['c'],
    explicacion: 'Aprovisionar los recursos de cómputo para el procesamiento y el entrenamiento es un deber de coordinación del director, y dimensionar la capacidad a la carga planificada mantiene el cronograma realista sin gastar de más. (b) convierte una necesidad previsible en un retraso de cronograma. (d) elimina el riesgo sobredimensionando y paga por capacidad que la carga no justifica. (a) no permite absorber un procesamiento sostenido en una sola estación compartida y termina estrangulando a todo el equipo.'
  },
  {
    id: 'cpy-dat-004', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de ropa mueve los registros de navegación de sus clientes desde un proveedor externo de analítica web hacia su entorno de desarrollo de IA, para entrenar un modelo de recomendación de productos. El proveedor ofrece un portal de descarga autoservicio, y los archivos son grandes, llegan en un formato propietario y deben aterrizar en el espacio de trabajo seguro del proyecto. ¿Con quién debe coordinar el director del proyecto de IA para planificar ese movimiento?',
    opciones: [
      { id: 'a', texto: 'Solo con los científicos de datos, porque serán quienes consuman los archivos cuando lleguen.' },
      { id: 'b', texto: 'Con los equipos técnicos responsables de las transferencias y con el proveedor, para planificar la migración al entorno de desarrollo.' },
      { id: 'c', texto: 'Con el patrocinador ejecutivo, para que la dirección autorice cada transferencia de archivos individual.' },
      { id: 'd', texto: 'Solo con el equipo de marketing, porque es el dueño de la relación con el proveedor.' }
    ],
    correctas: ['b'],
    explicacion: 'Coordinar transferencias y migraciones hacia el entorno de desarrollo es parte de reunir los datos requeridos, y esa coordinación ocurre entre el director, el personal técnico que ejecuta transferencias seguras y el proveedor externo cuyo portal y formatos condicionan el trabajo. (c) aprueba dirección y financiamiento, pero no autoriza transferencias individuales de archivos. (d) es dueño de la relación comercial y debe mantenerse informado, pero no puede planificar la conversión de formatos ni las zonas seguras de aterrizaje. (a) describe a los consumidores de los datos: la logística de transferencia también requiere al personal de infraestructura e integración.'
  },
  {
    id: 'cpy-dat-005', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una textilera reunió datos de línea de producción para un modelo de detección de defectos. Durante la evaluación, un analista reporta que los registros más detallados provienen de telares retirados hace dieciocho meses, mientras que las máquinas actuales registran mucho menos. El director del proyecto de IA debe juzgar la preocupación específica de calidad que esto plantea. ¿Cuál es?',
    opciones: [
      { id: 'a', texto: 'Si el formato de archivo cargará correctamente en las herramientas de ingeniería de variables.' },
      { id: 'b', texto: 'Si los registros de los telares retirados contienen información personal identificable.' },
      { id: 'c', texto: 'Si los datos son lo bastante frescos y relevantes para representar el entorno de producción actual.' },
      { id: 'd', texto: 'Si los registros se extrajeron con las autorizaciones de seguridad correctas.' }
    ],
    correctas: ['c'],
    explicacion: 'Evaluar la vigencia y la relevancia de los datos para el entrenamiento es justo la preocupación que surge cuando los registros más ricos describen equipos retirados: un modelo entrenado sobre telares obsoletos puede no transferir a las máquinas que hoy están funcionando. (d) es un asunto de acceso, y nada en el hallazgo sugiere una extracción indebida. (a) es un problema mecánico de carga, ajeno a la época que describen los registros. (b) es improbable en registros de máquinas y sería, en todo caso, un tema de revisión de privacidad, no el problema de relevancia que el analista sacó a la luz.'
  },
  {
    id: 'cpy-dat-006', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa láctea construye un modelo de abandono para sus cuentas de distribuidores. El campo de estado de la cuenta lleva valores distintos en cada región de ventas, y el equipo de datos ha empezado a suponer qué significan esos valores para que la preparación pueda continuar. El director del proyecto de IA se entera de esas suposiciones en una reunión de avance. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Dividir el trabajo en un modelo separado para cada región de ventas.' },
      { id: 'b', texto: 'Eliminar el campo de estado, para que la inconsistencia no pueda afectar al modelo.' },
      { id: 'c', texto: 'Estandarizar los valores mediante una votación mayoritaria dentro del equipo de datos.' },
      { id: 'd', texto: 'Traer a los gerentes de cuenta que llenan el campo para que expliquen el uso regional.' }
    ],
    correctas: ['d'],
    explicacion: 'Los usuarios de negocio que crean y usan un campo son quienes conocen su significado real, así que involucrar a los gerentes de cuenta sustituye la adivinanza por contexto verificado en todas las regiones. (c) formaliza la adivinanza en lugar de corregirla. (b) elimina una señal probablemente valiosa para predecir el abandono sin antes verificar su valor con quienes la entienden. (a) multiplica el esfuerzo de construcción y mantenimiento para rodear una pregunta que una sola conversación puede responder.'
  },
  {
    id: 'cpy-dat-007', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una farmacéutica descubre que los científicos de datos se sobrescriben mutuamente los scripts de preprocesamiento en una carpeta compartida, y que nadie puede reproducir el conjunto de datos usado en el análisis de la semana pasada. El equipo le pide que arregle el esquema de trabajo. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Exigir un respaldo manual de la carpeta compartida de scripts al final de cada semana.' },
      { id: 'b', texto: 'Dar a cada científico de datos una copia privada de los datos y los scripts para trabajar de forma independiente.' },
      { id: 'c', texto: 'Establecer control de versiones y herramientas de colaboración compartidas para los scripts y las versiones del conjunto de datos del equipo.' },
      { id: 'd', texto: 'Designar a un solo ingeniero como la única persona autorizada a editar los scripts de preprocesamiento.' }
    ],
    correctas: ['c'],
    explicacion: 'Montar control de versiones con herramientas de colaboración compartidas es la capacidad del entorno de trabajo que frena las sobrescrituras, registra quién cambió qué y permite al equipo reproducir cualquier estado anterior del conjunto de datos. (b) evita colisiones pero hace divergir el trabajo, con lo que la reproducibilidad empeora. (a) permite recuperar solo con granularidad semanal y no hace nada por las ediciones concurrentes entre respaldos. (d) crea un cuello de botella y sigue sin ofrecer un historial de versiones desde el cual reproducir.'
  },
  {
    id: 'cpy-dat-008', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un distrito escolar reunió un extracto puntual de registros de asistencia para entrenar un modelo de riesgo de inasistencia. Una vez que la solución esté en uso, dependerá de que lleguen registros nuevos cada semana. Los ingenieros de datos consideran terminado el trabajo de recolección. ¿Qué debe indicar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Entregar la necesidad recurrente al grupo de operaciones para que la resuelva después del despliegue.' },
      { id: 'b', texto: 'Cerrar el trabajo de recolección, ya que el extracto de entrenamiento está completo.' },
      { id: 'c', texto: 'Montar un proceso repetible de recolección para los registros recurrentes, junto al extracto.' },
      { id: 'd', texto: 'Planificar re-ejecuciones manuales del extracto cada vez que alguien pida registros frescos.' }
    ],
    correctas: ['c'],
    explicacion: 'Implementar procesos de recolección para los flujos continuos es parte de reunir los datos, así que la necesidad semanal recurrente debe diseñarse ahora y no tratarse como fuera de alcance. (b) deja a la solución desplegada sin los registros de los que depende. (d) vuelve una dependencia de producción rehén de que alguien se acuerde de pedirla. (a) empuja un requisito conocido más allá del punto donde el proyecto puede validarlo.'
  },
  {
    id: 'cpy-dat-009', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un banco planea un modelo de detección de fraude con tarjetas. El conjunto de entrenamiento candidato son cinco años de historial de transacciones, pero el equipo antifraude señala que las tácticas delictivas cambiaron sustancialmente en el último año. El director del proyecto de IA debe juzgar el conjunto antes de aprobar su uso. ¿En qué debe centrarse la evaluación?',
    opciones: [
      { id: 'a', texto: 'Aceptar el conjunto, porque su volumen sostiene con holgura el entrenamiento del modelo.' },
      { id: 'b', texto: 'Aumentar el historial con ejemplos sintéticos modelados sobre los casos de fraude más antiguos.' },
      { id: 'c', texto: 'Continuar con el historial completo y apoyarse en reentrenamientos programados para capturar las tácticas nuevas.' },
      { id: 'd', texto: 'Evaluar qué tan frescos y relevantes son los registros frente al comportamiento de fraude actual.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar la vigencia y la relevancia frente al fraude actual ataca el riesgo real: un modelo entrenado mayormente sobre tácticas caducas no verá los patrones que hoy están en uso. (a) acepta por volumen e ignora que abundantes ejemplos rancios enseñan la señal equivocada. (b) genera ejemplos calcados de los casos más antiguos, lo que amplifica justamente el comportamiento obsoleto que preocupa al equipo antifraude. (c) difiere hacia operaciones un problema de relevancia ya conocido, en vez de resolverlo durante la evaluación.'
  },
  {
    id: 'cpy-dat-010', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cosmética entrena un modelo de clasificación de imágenes sobre una biblioteca muy grande de fotos de producto. Las corridas de entrenamiento en el servidor de analítica compartido del equipo ya tardan más que el sprint que las programó. El director del proyecto de IA debe mantener el desarrollo del modelo en el cronograma aprobado. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Aprovisionar capacidad de cómputo escalable dimensionada a la carga de entrenamiento.' },
      { id: 'b', texto: 'Diferir los cambios de infraestructura hasta que se elija la arquitectura final del modelo.' },
      { id: 'c', texto: 'Comprar el hardware dedicado más grande disponible para eliminar todas las restricciones.' },
      { id: 'd', texto: 'Reducir la resolución de las imágenes hasta que las corridas quepan en el servidor actual.' }
    ],
    correctas: ['a'],
    explicacion: 'Aprovisionar cómputo escalable dimensionado a la carga es lo correcto, porque coordinar la infraestructura consiste en hacer coincidir los recursos con las exigencias del procesamiento y el entrenamiento. (d) sacrifica justamente la señal de la que depende un modelo visual, solo para acomodarse a un hardware insuficiente. (b) bloquea la experimentación necesaria para tomar esa decisión de arquitectura. (c) compromete el presupuesto antes de conocer el techo real de la carga, mientras que la capacidad escalable puede crecer o encogerse con la demanda.'
  },

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpy-neg-001', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de pinturas tiene una decisión de financiamiento por delante ante su directorio ejecutivo para una iniciativa de emparejamiento de colores con IA. El borrador actual de la presentación es un recorrido denso por la mecánica del modelo que los revisores anteriores encontraron impenetrable. ¿Qué debe hacer el director del programa de IA con ese borrador?',
    opciones: [
      { id: 'a', texto: 'Agregar un anexo que defina cada término técnico usado en el recorrido.' },
      { id: 'b', texto: 'Reemplazar la presentación por una demostración en vivo del motor de emparejamiento.' },
      { id: 'c', texto: 'Reformularlo alrededor del problema de negocio y el valor en juego.' },
      { id: 'd', texto: 'Acortar el recorrido, pero mantener intacta su estructura técnica.' }
    ],
    correctas: ['c'],
    explicacion: 'Reformular el borrador en torno al problema de negocio y el valor en juego le da al directorio una narrativa sobre la que puede actuar, que es lo que requiere una presentación ejecutiva de financiamiento. (a) documenta la jerga sin quitarle al lector la carga que le impone. (d) entrega la misma historia impenetrable, solo que más rápido. (b) muestra capacidad pero deja sin argumentar la lógica de la inversión.'
  },
  {
    id: 'cpy-neg-002', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de operaciones de un astillero redacta la solicitud de financiamiento de una iniciativa de inspección de soldaduras con IA y pide ayuda al director del proyecto para hacer el documento persuasivo ante el comité de inversiones. La solicitud contiene hoy una declaración de visión y poco más. ¿Qué debe aportar primero el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Un gráfico de cronograma que muestre con qué rapidez podría lanzarse el sistema.' },
      { id: 'b', texto: 'Un glosario que distinga los tipos de defectos de soldadura.' },
      { id: 'c', texto: 'Una cita motivacional del fundador de la empresa sobre la innovación.' },
      { id: 'd', texto: 'Datos financieros compilados y beneficios proyectados a partir de las operaciones de inspección.' }
    ],
    correctas: ['d'],
    explicacion: 'Los datos financieros compilados y los beneficios proyectados dan a la declaración de visión la sustancia probatoria que convierte una aspiración en una propuesta financiable: reunir esos datos para el caso de negocio es un elemento nombrado de esta tarea. (c) agrega sentimiento sin fortalecer la solicitud. (b) educa a los lectores pero no justifica el gasto. (a) afirma velocidad mientras el valor subyacente de lanzar sigue sin demostrarse.'
  },
  {
    id: 'cpy-neg-003', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cementera contrató a un consultor externo para redactar la justificación de financiamiento de un proyecto de optimización de hornos con IA. El borrador promete que el sistema eliminará por completo las paradas no planificadas y que aprenderá sin datos históricos. El patrocinador pide al director del proyecto de IA que lo revise. ¿Cuál es su aporte clave aquí?',
    opciones: [
      { id: 'a', texto: 'Confirmar que el documento cumple los estándares de marca de la empresa.' },
      { id: 'b', texto: 'Negociar un honorario menor con el consultor para futuras revisiones.' },
      { id: 'c', texto: 'Agendar la presentación al directorio antes de que se enfríe el entusiasmo.' },
      { id: 'd', texto: 'Aplicar criterio técnico para corregir afirmaciones que la tecnología no puede sostener.' }
    ],
    correctas: ['d'],
    explicacion: 'Aplicar criterio técnico para corregir afirmaciones insostenibles es el aporte clave del director, porque promesas de eliminación total de paradas y de aprendizaje sin datos históricos se derrumbarían en la entrega y desacreditarían la decisión de inversión: aportar la experiencia técnica que valida el caso de negocio es un elemento nombrado de esta tarea. (a) es una revisión cosmética que cualquiera podría hacer. (b) es un asunto de compras, ajeno a la exactitud del documento. (c) llevaría al directorio, a las apuradas, una justificación defectuosa.'
  },
  {
    id: 'cpy-neg-004', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una lavandería industrial quiere un sistema de IA que prediga qué prendas entrantes tienen más probabilidad de dañarse durante el lavado. Al revisar la preparación, el director del proyecto de IA encuentra años de registros de órdenes y algunas notas de incidentes en texto libre, pero nunca se registró de forma sistemática si cada prenda terminó dañada o intacta. ¿Cuál es la conclusión más importante para la revisión de viabilidad?',
    opciones: [
      { id: 'a', texto: 'Las notas de texto libre pueden simplemente eliminarse para depurar los registros.' },
      { id: 'b', texto: 'Un modelo comercial listo para usar compensará lo que falte en los registros.' },
      { id: 'c', texto: 'Los registros carecen de los resultados documentados que un enfoque de aprendizaje necesita para entrenarse.' },
      { id: 'd', texto: 'El volumen de órdenes es suficiente para pasar directamente a construir el modelo.' }
    ],
    correctas: ['c'],
    explicacion: 'Aprender a predecir el daño exige ejemplos históricos donde el resultado en sí quedó registrado, de modo que la ausencia sistemática de resultados de daño es el vacío decisivo, y la revisión debe reportar que hay que establecer primero esa captura. (d) es irrelevante cuando ningún registro dice qué le pasó a cada prenda. (a) descarta una señal parcial que vale la pena minar. (b) no puede aportar resultados propios de las prendas y procesos de esta empresa que nunca se escribieron.'
  },
  {
    id: 'cpy-neg-005', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de ascensores financia un proyecto de IA de predicción de mantenimiento. El director financiero aprueba el gasto, pero pone al director del proyecto una condición: dentro de un año, la empresa debe poder decir si la inversión rindió. ¿Qué debe establecer ahora?',
    opciones: [
      { id: 'a', texto: 'Un boletín trimestral que informe el avance técnico del proyecto.' },
      { id: 'b', texto: 'Medidas financieras definidas, con las líneas base actuales contra las cuales comparar después del despliegue.' },
      { id: 'c', texto: 'Un hito de celebración por la primera predicción exitosa.' },
      { id: 'd', texto: 'Un acuerdo para que el equipo de ciencia de datos autorreporte el valor cada año.' }
    ],
    correctas: ['b'],
    explicacion: 'Unas medidas financieras definidas con líneas base actuales crean la comparación antes y después que vuelve respondible la pregunta del retorno un año más tarde, y capturar esas líneas base ahora es lo que hace significativa la comparación posterior. (c) marca actividad, no valor. (a) informa avance pero no le da al director financiero una base acordada para juzgar el retorno. (d) carece de la objetividad y de la línea base pactada que exige una medición creíble.'
  },
  {
    id: 'cpy-neg-006', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una inmobiliaria arma la justificación de financiamiento de una herramienta de valuación de propiedades con IA. El dueño de producto aportó cifras de ahorro proyectado, pero el equipo de finanzas duda de esos números y el documento debe presentarse pronto al comité de inversiones. Como la persona con el conocimiento más profundo de la solución, ¿qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Quitar los ahorros proyectados para que solo queden los costos verificados.' },
      { id: 'b', texto: 'Entregar el documento a tiempo y revisar las cifras si alguien las cuestiona.' },
      { id: 'c', texto: 'Pedir al dueño de producto que defienda las cifras directamente ante finanzas.' },
      { id: 'd', texto: 'Aplicar su experiencia técnica para validar las proyecciones junto con finanzas.' }
    ],
    correctas: ['d'],
    explicacion: 'Apoyar la elaboración del caso de negocio incluye prestar la experiencia técnica que valida las cifras, así que trabajar las proyecciones con finanzas resuelve la duda antes de que el comité vea el documento. (b) arriesga que el comité apruebe o rechace el financiamiento sobre números que nadie respalda. (a) vacía la justificación, porque los beneficios son la razón para invertir. (c) repite el desencuentro sin aportar el fundamento técnico que a finanzas le falta.'
  },
  {
    id: 'cpy-neg-007', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una importadora evalúa los riesgos de un sistema de IA que asigna códigos arancelarios a los embarques entrantes. Un analista señala que, cuando el sistema se equivoque, no va a caerse ni a alertar a nadie: simplemente emitirá un código plausible pero incorrecto que fluirá hacia las declaraciones sin que nadie lo note. ¿Qué debe asegurar el director del proyecto de IA que atienda la evaluación de riesgos?',
    opciones: [
      { id: 'a', texto: 'La posibilidad de que los servidores queden fuera de línea durante la temporada alta de embarques.' },
      { id: 'b', texto: 'Cómo se detectarán las salidas convincentes pero incorrectas antes de que causen daño.' },
      { id: 'c', texto: 'Si los competidores podrían copiar el enfoque de clasificación de la empresa.' },
      { id: 'd', texto: 'Si el personal se resistirá a usar las nuevas pantallas de clasificación.' }
    ],
    correctas: ['b'],
    explicacion: 'El modo de falla distintivo de este sistema es el error silencioso —salidas que parecen correctas y avanzan hacia declaraciones regulatorias—, así que la evaluación debe atender cómo se detectarán esos errores: por muestreo, auditorías o derivación a revisión humana según el nivel de confianza. (a) es una preocupación visible de disponibilidad que las prácticas de continuidad existentes ya cubren. (c) es una inquietud comercial, no una falla del sistema. (d) es un asunto de adopción que se maneja en la planificación del cambio, no la cuestión de seguridad que el analista planteó.'
  },
  {
    id: 'cpy-neg-008', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una ferretería aprobó un proyecto de IA para pronosticar la demanda por tienda de mercadería estacional. Durante las sesiones de planificación, los ejecutivos siguen proponiendo añadidos: un asistente de negociación con proveedores, precios automáticos en las etiquetas de góndola y programación de personal. El director del proyecto de IA quiere que la entrega se mantenga enfocada en el objetivo de pronóstico aprobado. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Asegurar verbalmente a los patrocinadores que las capacidades extra vendrán en una fase futura.' },
      { id: 'b', texto: 'Registrar las capacidades que el proyecto entregará y listar explícitamente las que excluye.' },
      { id: 'c', texto: 'Escalar cada solicitud nueva al comité directivo para su financiamiento inmediato.' },
      { id: 'd', texto: 'Agregar cada solicitud ejecutiva al backlog de desarrollo de la entrega actual.' }
    ],
    correctas: ['b'],
    explicacion: 'Documentar de forma explícita tanto la funcionalidad incluida como la excluida da a los interesados un límite revisable, y es la defensa estándar contra la expansión silenciosa del alcance durante la planificación. (d) absorbe la expansión en lugar de contenerla. (a) no queda documentado y genera expectativas contradictorias que resurgen más adelante. (c) convierte la fijación de límites en un trámite presupuestario y frena la planificación sin resolver qué va a entregar el proyecto.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpy-mod-001', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica prepara un modelo de clasificación de riesgo genómico para una revisión interna de investigación. El director del proyecto de IA agenda una revisión por pares del diseño del modelo. Durante la sesión, un revisor identifica que la lógica de selección de variables usada en el preprocesamiento contradice el método aceptado en el dominio para este tipo de datos genómicos. ¿Qué debe hacer el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Continuar con la lógica de selección actual, porque el modelo ya está construido y reconstruirlo costaría tiempo.' },
      { id: 'b', texto: 'Coordinar una validación técnica del enfoque de selección de variables frente a los estándares del dominio, antes de permitir que el entrenamiento siga con la configuración actual.' },
      { id: 'c', texto: 'Pedir al equipo de ciencia de datos que ejecute ambos enfoques de selección y se quede con el que converja más rápido.' },
      { id: 'd', texto: 'Pedir al revisor que presente una objeción escrita al patrocinador del proyecto para una decisión de financiamiento.' }
    ],
    correctas: ['b'],
    explicacion: 'Coordinar revisiones por pares y validaciones técnicas del diseño es una responsabilidad de aseguramiento de calidad: cuando un revisor detecta un enfoque que contradice los estándares del dominio, el hallazgo debe investigarse y resolverse mediante una revisión técnica documentada antes de continuar, no descartarse por razones de cronograma. (a) arriesga producir un modelo científicamente inválido pese a una violación conocida del estándar. (d) reencuadra una cuestión de validación técnica como una decisión de presupuesto. (c) optimiza por velocidad computacional en lugar de por validez científica, que es la preocupación real.'
  },
  {
    id: 'cpy-mod-002', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacia quiere construir un asistente de interacciones entre recetas, pero la política de privacidad impide al equipo de desarrollo trabajar con historias clínicas reales. El equipo aun así necesita registros realistas que se comporten como los datos de producción. ¿Qué debe disponer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Un pequeño conjunto de registros de muestra escritos a mano por analistas de negocio.' },
      { id: 'b', texto: 'Generación de registros artificiales que reflejen los patrones de los datos reales, seguida de la validación de su realismo.' },
      { id: 'c', texto: 'Una pausa en el desarrollo hasta obtener el consentimiento de cada paciente.' },
      { id: 'd', texto: 'Acceso registrado de los desarrolladores a los registros de producción mientras dure la construcción.' }
    ],
    correctas: ['b'],
    explicacion: 'La generación de datos sintéticos produce registros artificiales que preservan el comportamiento estadístico de los datos reales sin exponer identidades de pacientes, y validar la fidelidad de lo generado es parte de supervisar la técnica de forma responsable. (d) viola directamente la restricción de privacidad bajo la que el proyecto debe operar, aunque quede registrado. (a) no puede reproducir distribuciones realistas ni el volumen que el desarrollo necesita. (c) es impracticable e innecesario cuando existe una alternativa que preserva la privacidad.'
  },
  {
    id: 'cpy-mod-003', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica prepara la operacionalización de un modelo de clasificación genómica. La evaluación de desempeño muestra que el modelo cumple todos los umbrales de exactitud. El director del proyecto de IA revisa la evaluación de requisitos de infraestructura y descubre que el entorno de servicio en producción todavía no se ha validado para soportar las exigencias de memoria y latencia del modelo. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Emitir la aprobación de despliegue, porque el desempeño del modelo es el criterio primario de avance y la infraestructura puede ajustarse después.' },
      { id: 'b', texto: 'Retener la aprobación de despliegue y exigir que la preparación de la infraestructura se verifique como parte de la revisión de preparación.' },
      { id: 'c', texto: 'Indicar al equipo de ciencia de datos que reduzca el tamaño del modelo hasta que quepa en la infraestructura existente sin modificarla.' },
      { id: 'd', texto: 'Aprobar el despliegue solo al ambiente de preproducción y tratar eso como el hito de operacionalización.' }
    ],
    correctas: ['b'],
    explicacion: 'Revisar la preparación para el despliegue, incluidos los requisitos de infraestructura, forma parte de la responsabilidad de avance o detención del director: un modelo que cumple los umbrales de exactitud pero no puede servirse dentro de la infraestructura objetivo no satisface la preparación para desplegar. (a) aprueba solo por desempeño del modelo y crea riesgo operativo con cambios de emergencia posteriores. (d) confunde un ambiente de validación con la preparación para producción. (c) impone una restricción quizá innecesaria si la infraestructura puede ampliarse para cumplir los requisitos.'
  },
  {
    id: 'cpy-mod-004', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un banco preparó los datos de solicitudes de crédito para un modelo de riesgo de incumplimiento. Las verificaciones de completitud y exactitud pasan todas, pero el director del proyecto de IA nota que los solicitantes de regiones donde se abrieron sucursales recientemente aparecen solo de forma escasa en el conjunto. ¿Qué debe hacer antes de la decisión de preparación?',
    opciones: [
      { id: 'a', texto: 'Planificar atender cualquier brecha por segmento mediante monitoreo poslanzamiento.' },
      { id: 'b', texto: 'Aprobar el entrenamiento, porque las verificaciones estándar de calidad pasaron.' },
      { id: 'c', texto: 'Quitar el atributo de región para que el modelo no pueda usarlo.' },
      { id: 'd', texto: 'Evaluar si los datos preparados reflejan todos los segmentos de solicitantes a los que el modelo dará servicio.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar la representatividad y el sesgo potencial es parte obligada de la verificación de preparación de los datos, y una cobertura escasa de las regiones nuevas implica que el modelo podría desempeñarse mal o de forma injusta justo con esos solicitantes. (b) confunde pasar los controles de completitud con que los datos reflejen la población que el modelo va a puntuar. (c) esconde el campo pero deja intacta la subrepresentación en cada variable correlacionada. (a) despliega a sabiendas un modelo sesgado y descubre el daño solo cuando los clientes ya lo sufrieron.'
  },
  {
    id: 'cpy-mod-005', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de servicios en la nube desarrolla un modelo de predicción de abandono de clientes. El científico de datos líder propone ejecutar una búsqueda extensa sobre un rango amplio de configuraciones de entrenamiento para hallar la mejor. Al director del proyecto de IA le preocupa que esa actividad consuma la mayor parte del presupuesto de cómputo restante. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Coordinar la actividad de optimización fijando límites de alcance y monitoreando la utilización de recursos durante las corridas.' },
      { id: 'b', texto: 'Prohibir la actividad e indicar al equipo que use configuraciones por defecto para no salirse del presupuesto.' },
      { id: 'c', texto: 'Pedir al patrocinador ejecutivo que amplíe el presupuesto antes de permitir que empiece la búsqueda.' },
      { id: 'd', texto: 'Aprobar la actividad completa sin restricciones, porque la calidad de la optimización pesa más que las preocupaciones de costo.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar las actividades de optimización y monitorear la utilización de recursos durante el entrenamiento son responsabilidades del director: la acción correcta no es prohibir ni aprobar sin condiciones, sino acotar el alcance y vigilar activamente el consumo para que el equipo optimice dentro de las restricciones del proyecto. (b) puede impedir el ajuste necesario y degradar la calidad del modelo. (d) arriesga desbordar el presupuesto de cómputo sin supervisión. (c) es prematuro cuando el consumo puede gestionarse con coordinación y acotamiento.'
  },
  {
    id: 'cpy-mod-006', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa deportiva construye un modelo predictivo de riesgo de lesiones para atletas profesionales. El equipo de ciencia de datos propone un modelo de ensamble muy complejo, con fuerte desempeño sobre los datos de entrenamiento pero pobres resultados en los conjuntos reservados. Un modelo más simple muestra un desempeño más consistente en ambos conjuntos y es más fácil de interpretar para el cuerpo médico. El director del proyecto de IA debe sopesar los compromisos antes de que empiece la siguiente fase. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Pausar el proyecto y contratar a un proveedor externo para que proponga un enfoque algorítmico distinto.' },
      { id: 'b', texto: 'Solicitar que el equipo construya datos de entrenamiento adicionales para cerrar la brecha de desempeño del modelo complejo en el conjunto reservado.' },
      { id: 'c', texto: 'Aprobar el ensamble complejo, porque una mayor exactitud de entrenamiento indica un modelo más capaz.' },
      { id: 'd', texto: 'Indicar al equipo que prefiera el modelo más simple, citando la generalización consistente y los requisitos de interpretabilidad del cuerpo médico.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar los compromisos entre complejidad, desempeño e interpretabilidad es responsabilidad del director: cuando un modelo complejo sobreajusta los datos de entrenamiento pero uno más simple generaliza de forma consistente y satisface las necesidades de interpretación de usuarios como el cuerpo médico, el modelo simple es la opción más fuerte. (c) ignora el problema de generalización, que es una señal crítica de calidad. (b) puede reducir el sobreajuste pero no atiende los requisitos de interpretabilidad e introduce más demoras. (a) es innecesario cuando el equipo ya tiene un candidato viable.'
  },
  {
    id: 'cpy-mod-007', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera reentrena su modelo de predicción de calidad cada trimestre. El director del proyecto de IA se entera de que toda la lógica de transformación de datos existe únicamente en los scripts improvisados de un ingeniero, y que ese ingeniero ha renunciado. ¿Qué debe exigir antes de su último día?',
    opciones: [
      { id: 'a', texto: 'Reuniones extendidas de transferencia de conocimiento entre el ingeniero y el resto del equipo.' },
      { id: 'b', texto: 'Código de transformación documentado y bajo control de versiones que cualquiera pueda volver a ejecutar de forma idéntica.' },
      { id: 'c', texto: 'Un congelamiento del modelo actual, para que el pipeline no necesite volver a ejecutarse.' },
      { id: 'd', texto: 'Una reconstrucción de las transformaciones desde cero por parte del equipo restante.' }
    ],
    correctas: ['b'],
    explicacion: 'Asegurar la reproducibilidad y la documentación de las transformaciones significa que el pipeline debe vivir en código documentado y versionado que produzca resultados idénticos lo ejecute quien lo ejecute, y esa es la corrección duradera antes de que el ingeniero se vaya. (a) ayuda, pero el entendimiento verbal se degrada y no puede ejecutarse ni auditarse como el código comprometido. (d) desperdicia la disponibilidad que le queda al ingeniero y arriesga cambiar el comportamiento de las transformaciones en silencio. (c) ignora el requisito de reentrenamiento trimestral que hace necesario el pipeline en primer lugar.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpy-ope-001', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un banco opera un sistema de IA de detección de fraude que marca transacciones sospechosas casi en tiempo real. El equipo de seguridad probó la lista de verificación de respuesta a incidentes una sola vez, durante el despliegue inicial, y no ha vuelto a practicarla. El director del proyecto de IA conduce la revisión anual del programa. ¿Qué debe recomendar respecto de los procedimientos de contingencia?',
    opciones: [
      { id: 'a', texto: 'Programar pruebas periódicas de los procedimientos de contingencia para confirmar que siguen siendo exactos y ejecutables.' },
      { id: 'b', texto: 'Pedir al equipo antifraude que memorice la lista de verificación en lugar de depender de un documento escrito.' },
      { id: 'c', texto: 'Reducir la carga de la planificación de contingencia fusionándola con el informe de auditoría trimestral.' },
      { id: 'd', texto: 'Archivar la lista original como documentación histórica y construir una nueva desde cero.' }
    ],
    correctas: ['a'],
    explicacion: 'Ejercitar regularmente los procedimientos valida que siguen coincidiendo con el sistema actual, revela pasos que quedaron obsoletos conforme el sistema evolucionó y mantiene al equipo de respuesta entrenado para actuar bajo presión. (d) descarta innecesariamente conocimiento institucional ya validado. (b) se apoya en la memoria bajo estrés y elimina el documento de referencia autoritativo que el equipo necesita durante un incidente real. (c) confunde documentación de cumplimiento con ejercicios de preparación operativa, que sirven a propósitos distintos.'
  },
  {
    id: 'cpy-ope-002', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud despliega un asistente de triaje clínico con IA dentro del flujo de trabajo de su servicio de urgencias. El director del proyecto de IA redactó el plan de despliegue, pero advierte que nunca se definieron los criterios de reversión. Antes de que comience el despliegue, ¿qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Umbrales de desempeño y condiciones de disparo específicas que iniciarían una reversión al proceso anterior.' },
      { id: 'b', texto: 'Un nuevo ciclo de evaluación del modelo que confirme que el asistente de triaje cumple los estándares de exactitud clínica.' },
      { id: 'c', texto: 'Una encuesta de satisfacción posterior al despliegue para recoger la opinión del personal de urgencias.' },
      { id: 'd', texto: 'Un contrato con un proveedor de un sistema de IA de respaldo que sustituya al principal durante cualquier interrupción.' }
    ],
    correctas: ['a'],
    explicacion: 'Definir umbrales de desempeño y condiciones de disparo para la reversión asegura que el equipo sepa exactamente cuándo y cómo volver atrás si el despliegue en producción falla, y ese es un elemento requerido en el plan de despliegue de cualquier sistema de IA de alto riesgo. (b) retrasaría el despliegue y duplicaría trabajo ya hecho durante la evaluación del modelo. (d) es un enfoque de contingencia de más largo plazo que no sustituye a unos criterios claros de reversión dentro del plan actual. (c) es una herramienta de gobernanza valiosa, pero no es el vacío previo al lanzamiento que hay que cerrar.'
  },
  {
    id: 'cpy-ope-003', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una química depende de un sistema de IA para programar la producción por lotes en tres plantas. El comité de riesgos pregunta al director del programa de IA cómo seguirían produciendo las plantas si el sistema de programación quedara interrumpido durante un periodo prolongado. ¿Qué debe desarrollar?',
    opciones: [
      { id: 'a', texto: 'Una póliza de seguro que compense a la empresa por las pérdidas de producción.' },
      { id: 'b', texto: 'Un duplicado del modelo de programación mantenido por el mismo equipo de ingeniería.' },
      { id: 'c', texto: 'Un plan que describa cómo continúa la producción con capacidad reducida durante una interrupción.' },
      { id: 'd', texto: 'Una política que detenga toda la producción hasta que el sistema de programación se restablezca.' }
    ],
    correctas: ['c'],
    explicacion: 'Un plan de continuidad que define cómo operan las plantas con capacidad reducida mantiene el negocio funcionando durante una interrupción del servicio de IA, que es exactamente lo que el comité de riesgos está preguntando. (b) ayuda ante algunas fallas técnicas, pero no cubre interrupciones que afecten al equipo, los datos o el entorno compartidos. (a) transfiere la pérdida financiera después del hecho, sin mantener ninguna producción en marcha. (d) convierte una interrupción del sistema en una parada total del negocio, justo el desenlace que la planificación de continuidad existe para evitar.'
  },
  {
    id: 'cpy-ope-004', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística desplegó hace seis semanas un modelo de IA de emparejamiento de cargas. La lista de verificación posterior al despliegue incluía funcionalidad del sistema, integración con la plataforma de despacho y pruebas iniciales de carga. Al revisarla, el director del proyecto de IA encuentra que un ítem —la confirmación de que los umbrales de alerta para predicciones anómalas están activos— fue marcado como completo sin evidencia. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Quitar el ítem de umbrales de alerta de la lista y llevarlo a un backlog de mejoras futuras.' },
      { id: 'b', texto: 'Exigir evidencia documentada de que los umbrales de alerta se configuraron y probaron, antes de cerrar el ítem.' },
      { id: 'c', texto: 'Aceptar la lista como completa, porque el sistema lleva funcionando sin incidentes.' },
      { id: 'd', texto: 'Pedir al equipo de soporte de guardia que habilite las alertas de manera informal y dejar nota en la bitácora.' }
    ],
    correctas: ['b'],
    explicacion: 'Exigir evidencia documentada asegura que la verificación posterior al despliegue sea sustantiva y no un trámite, lo que es esencial para la gobernanza y la rendición de cuentas en despliegues de IA. (c) introduce riesgo operativo, porque unas alertas sin configurar permitirían que la degradación del modelo pase inadvertida. (a) difiere sin autorización un requisito de preparación para producción. (d) sortea el proceso formal de verificación y deja un vacío sin resolver en el registro del proyecto.'
  },
  {
    id: 'cpy-ope-005', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora despliega un modelo de triaje de siniestros en catorce oficinas regionales a lo largo de tres semanas. Después de que la tercera oficina entra en operación, el supervisor local informa que los liquidadores no han recibido ninguna capacitación sobre cómo interpretar las recomendaciones del modelo y actuar en consecuencia. El director del proyecto de IA gestiona el despliegue. ¿Qué debe atender de inmediato?',
    opciones: [
      { id: 'a', texto: 'Reemplazar la vista de recomendaciones del modelo por una insignia de color más simple que no requiera explicación.' },
      { id: 'b', texto: 'Pedir al equipo de ciencia de datos que reentrene el modelo para que sus salidas necesiten menos interpretación.' },
      { id: 'c', texto: 'Continuar con todas las oficinas restantes y programar una sesión de capacitación para el grupo completo cuando termine el despliegue.' },
      { id: 'd', texto: 'Pausar la activación en las oficinas restantes hasta que los liquidadores afectados reciban capacitación y confirmen estar preparados.' }
    ],
    correctas: ['d'],
    explicacion: 'Pausar las activaciones restantes hasta que haya liquidadores capacitados evita que el mismo vacío se propague a las otras once oficinas y asegura que el modelo opere con usuarios capaces de actuar apropiadamente sobre sus salidas. (c) implica que el modelo funciona durante semanas sin usuarios informados, con riesgo de malas decisiones sobre siniestros reales. (a) modifica la solución en vez de atender que los usuarios no fueron preparados para usar ninguna versión de ella. (b) traslada al algoritmo la responsabilidad por la preparación de los usuarios, en lugar de resolver la brecha humana que el supervisor identificó.'
  },

  // ══ Segundo lote ══════════════════════════════════════════════════════════
  // Preguntas 10 a 79 de la misma prueba. Faltan las nueve primeras y la 73,
  // que no se capturaron.

  // ── IA responsable y confiable ────────────────────────────────────────────

  {
    id: 'cpy-res-011', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora opera un sistema de triaje de siniestros con IA en un sector fuertemente regulado. Una comisión estatal de seguros publica un boletín con nuevos lineamientos sobre la toma automatizada de decisiones en siniestros, y el director del programa de IA debe responder. ¿Qué acción demuestra mejor la adherencia a los requisitos de cumplimiento del sector?',
    opciones: [
      { id: 'a', texto: 'Notificar al equipo de ciencia de datos que inicie una reconstrucción completa del modelo para asegurar que el sistema esté al día con todos los lineamientos.' },
      { id: 'b', texto: 'Revisar el boletín para determinar qué aspectos del sistema de triaje requieren ajuste, e implementar los cambios necesarios antes de la fecha de entrada en vigor.' },
      { id: 'c', texto: 'Remitir el boletín al área legal y esperar su interpretación escrita antes de tomar cualquier acción.' },
      { id: 'd', texto: 'Suspender el sistema de triaje hasta que la comisión estatal confirme que cumple todos los nuevos requisitos.' }
    ],
    correctas: ['b'],
    explicacion: 'Asegurar la adherencia a los requisitos sectoriales significa que el director revise activamente los lineamientos nuevos, determine qué ajustes hacen falta y los implemente antes de la fecha efectiva. (c) demora la acción y puede abrir un vacío de cumplimiento si esa fecha pasa mientras se espera. (d) es una respuesta desproporcionada si bastan ajustes acotados. (a) es innecesario cuando cambios puntuales en la lógica de triaje pueden satisfacer el requisito.'
  },
  {
    id: 'cpy-res-012', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una editorial construye un sistema de recomendación de contenidos que procesa datos de comportamiento de lectores: historial de navegación, tiempo en página e información demográfica recogida en los perfiles de cuenta. El director del proyecto debe asegurar que el proyecto incluya una evaluación formal de riesgos de privacidad antes de que el modelo se despliegue al público, y el asesor legal indica que esa evaluación debe documentarse y revisitarse en cada cambio mayor de despliegue. ¿Qué debe programar dentro del plan de gobernanza del proyecto?',
    opciones: [
      { id: 'a', texto: 'Una revisión legal única de la política de privacidad que rige los términos de servicio del sitio web de la empresa.' },
      { id: 'b', texto: 'Evaluaciones de impacto en privacidad realizadas antes del despliegue del modelo y repetidas cada vez que el modelo o las prácticas de manejo de datos cambien significativamente.' },
      { id: 'c', texto: 'Un informe ejecutivo sobre las leyes de protección de datos aplicables, entregado al equipo directivo en el arranque del proyecto.' },
      { id: 'd', texto: 'Una prueba de penetración del gestor de contenidos de la empresa que verifique que los datos de lectores están protegidos frente a atacantes externos.' }
    ],
    correctas: ['b'],
    explicacion: 'Programar evaluaciones de impacto en privacidad antes del despliegue y en cada punto de cambio mayor crea la evaluación formal y recurrente de riesgos ligada al modelo y a su manejo de datos, que es justamente lo que el asesor legal indicó. (a) atiende la política general, no los riesgos de privacidad específicos del modelo de IA. (d) evalúa vulnerabilidades de seguridad externas, no cómo se recogen, usan y protegen los datos personales. (c) instruye a la dirección, pero no constituye una evaluación de los riesgos propios del proyecto.'
  },
  {
    id: 'cpy-res-013', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una financiera despliega un modelo de puntuación crediticia para evaluar la elegibilidad de préstamos. El oficial de cumplimiento informa al director del proyecto de IA que el regulador de servicios financieros de su mercado principal emitió nuevos lineamientos que exigen a las instituciones documentar y reportar cómo los modelos de IA toman decisiones de crédito. ¿Qué enfoque atiende mejor la situación?',
    opciones: [
      { id: 'a', texto: 'Implementar mecanismos de monitoreo y reporte de cumplimiento que documenten cómo el modelo de puntuación toma sus decisiones y produzcan los informes que el regulador exige.' },
      { id: 'b', texto: 'Postergar el trabajo de documentación de cumplimiento hasta que el modelo lleve tres meses en producción, para disponer de datos de decisiones reales.' },
      { id: 'c', texto: 'Transferir la propiedad del cumplimiento por completo al equipo legal y retirarla del alcance de responsabilidad del director del proyecto.' },
      { id: 'd', texto: 'Reemplazar el modelo de IA por un sistema tradicional de puntuación basado en reglas, más fácil de explicar a los reguladores.' }
    ],
    correctas: ['a'],
    explicacion: 'Implementar mecanismos de monitoreo y reporte que documenten el proceso de decisión del modelo y generen los informes regulatorios cumple el lineamiento e integra el cumplimiento a la operación continua del modelo. (c) saca al director de una responsabilidad que exige coordinación entre las funciones técnicas y de gobernanza. (d) esquiva el desafío de cumplimiento cambiando el enfoque de solución de un modo que puede no satisfacer los requisitos de desempeño del negocio. (b) deja el periodo inicial completo operando sin la documentación exigida.'
  },
  {
    id: 'cpy-res-014', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica desarrolla un modelo de IA que asiste a los clínicos en priorizar derivaciones de pacientes. Los reguladores del mercado principal exigen que toda ayuda automatizada a la decisión clínica mantenga un registro completo y recuperable de cada decisión que toma el algoritmo, incluidas las entradas y la lógica aplicada. El director del proyecto evalúa qué mecanismos de gobernanza deben existir antes de la puesta en marcha. ¿Cuál es el más importante?',
    opciones: [
      { id: 'a', texto: 'Un sistema de rastro de auditoría que registre las entradas algorítmicas, las salidas y la lógica de decisión aplicada en cada recomendación de derivación.' },
      { id: 'b', texto: 'Un calendario de reentrenamiento que actualice automáticamente el algoritmo cada trimestre con registros de pacientes nuevos.' },
      { id: 'c', texto: 'Una encuesta de satisfacción distribuida tras cada derivación para recoger retroalimentación sobre los resultados clínicos.' },
      { id: 'd', texto: 'Un tablero de desempeño visible para los administradores del hospital que muestre volúmenes agregados de derivación y tasas de aprobación.' }
    ],
    correctas: ['a'],
    explicacion: 'Mantener un rastro de auditoría de los procesos algorítmicos de decisión es el mecanismo de gobernanza que satisface directamente el requisito regulatorio de un registro completo y recuperable de cada decisión, con entradas y lógica incluidas. (c) recoge retroalimentación sobre resultados, pero no crea el registro por decisión que el regulador exige. (b) atiende la vigencia del modelo, no la documentación de la lógica aplicada en cada caso. (d) muestra métricas agregadas para administradores y no el registro individual que los reguladores necesitan.'
  },
  {
    id: 'cpy-res-015', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una fabricante de componentes usa un modelo de IA para asignar créditos de reparación en garantía a clientes que reportan defectos. Tras varios meses en producción, una asociación de consumidores publica un informe que sostiene que los clientes de códigos postales de menores ingresos reciben, en promedio, montos de crédito menores que los de zonas de mayores ingresos ante defectos similares. Se pide al director del proyecto de IA investigar. ¿Qué debe priorizar primero?',
    opciones: [
      { id: 'a', texto: 'Pausar por completo las decisiones de crédito en garantía hasta que el modelo sea reemplazado por un proceso de revisión enteramente manual.' },
      { id: 'b', texto: 'Emitir un comunicado público que reconozca el informe y prometa investigar dentro del próximo trimestre.' },
      { id: 'c', texto: 'Reentrenar el modelo de inmediato con datos nuevos que excluyan el código postal como variable de entrada.' },
      { id: 'd', texto: 'Revisar las salidas del modelo en busca de patrones discriminatorios entre segmentos demográficos de clientes y evaluar si variables proxy correlacionadas con el ingreso están influyendo en las decisiones.' }
    ],
    correctas: ['d'],
    explicacion: 'Revisar las salidas en busca de patrones discriminatorios y evaluar si variables proxy correlacionadas con el ingreso están influyendo es el primer paso correcto, porque establece si la disparidad es real, qué tan severa es y cuál es su causa. (b) es una acción de comunicación, no investigativa, y debería seguir al análisis en vez de precederlo. (c) asume que el código postal es la fuente del sesgo sin confirmarlo: otras variables proxy pueden estar implicadas. (a) genera una disrupción operativa considerable y es desproporcionada como primer paso, antes de que la investigación determine la causa.'
  },
  {
    id: 'cpy-res-016', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una financiera usa un modelo de IA para fijar límites de crédito de titulares existentes. Tras una serie de reclamos de clientes, una revisión interna revela que la documentación del modelo no describe qué variables de entrada influyen con más fuerza en las decisiones de límite. El equipo de cumplimiento no puede determinar, a partir de la documentación existente, si el comportamiento del modelo se alinea con los principios de préstamo justo. ¿Qué paso debe tomar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Reescribir los términos de servicio de cara al cliente para informar a los titulares que los límites de crédito los fija un sistema automatizado.' },
      { id: 'b', texto: 'Reducir la cantidad de variables de entrada que usa el modelo, para que la relación entre entradas y salidas sea más simple de explicar.' },
      { id: 'c', texto: 'Implementar herramientas y técnicas de interpretabilidad que revelen qué variables impulsan las decisiones de límite de crédito, y actualizar la documentación del proyecto para reflejar esa información.' },
      { id: 'd', texto: 'Indicar al equipo de cumplimiento que realice su propio análisis independiente del código del modelo para identificar las variables influyentes.' }
    ],
    correctas: ['c'],
    explicacion: 'Implementar herramientas de interpretabilidad que expongan la importancia de cada variable, y actualizar la documentación con esa información, resuelve directamente el vacío documental y vuelve transparente el comportamiento del modelo ante los revisores de cumplimiento. (d) impone una carga técnica a un equipo no técnico y no es la respuesta que corresponde al director. (b) puede simplificar el modelo, pero cambia su comportamiento y puede degradar su desempeño sin arreglar el vacío documental. (a) informa a los clientes sobre la automatización, pero no produce la documentación interna de cumplimiento que el equipo necesita.'
  },

  // ── Necesidades y soluciones del negocio ──────────────────────────────────

  {
    id: 'cpy-neg-009', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una telecomunicaciones diseña una solución de IA que puntuará las cuentas de clientes por riesgo de abandono. Durante una revisión de diseño, los ingenieros discrepan sobre dónde se consumirán los puntajes y cómo llegarán al modelo los registros de cuentas desde la plataforma de facturación. Para resolver el desacuerdo, ¿qué debe indicar el director del proyecto de IA que se documente?',
    opciones: [
      { id: 'a', texto: 'El flujo de datos y los puntos de integración con los sistemas existentes.' },
      { id: 'b', texto: 'La cadencia de reentrenamiento del modelo en producción.' },
      { id: 'c', texto: 'El plan de comunicación para los usuarios finales de los puntajes.' },
      { id: 'd', texto: 'Los scripts de prueba de aceptación para el equipo de facturación.' }
    ],
    correctas: ['a'],
    explicacion: 'El desacuerdo trata de cómo se mueve la información hacia el modelo y dónde aterrizan las salidas, así que documentar el flujo de datos y los puntos de integración es la corrección directa durante la elaboración del diseño. (d) verifica comportamiento más adelante y no resuelve dónde se conecta el sistema. (b) es una preocupación operativa que presupone el diseño ya resuelto. (c) ayuda a la adopción, pero no zanja una disputa de ingeniería sobre los puntos de contacto entre sistemas.'
  },
  {
    id: 'cpy-neg-010', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Los ejecutivos de una desguazadora asignaron fondos para IA y encargaron al director del proyecto encontrar dónde aplicarla en las operaciones de desmantelamiento de vehículos. No se ha nominado ningún problema concreto y las opiniones alrededor de la mesa directiva difieren ampliamente. ¿Qué debe hacer para dar fundamento a la iniciativa?',
    opciones: [
      { id: 'a', texto: 'Seleccionar la aplicación de IA más comúnmente adoptada en la industria del desguace.' },
      { id: 'b', texto: 'Estudiar los flujos de trabajo de desmantelamiento para localizar los puntos de decisión donde la automatización cognitiva agregaría valor.' },
      { id: 'c', texto: 'Lanzar un proyecto pequeño sobre la idea que favorezca el ejecutivo de mayor jerarquía.' },
      { id: 'd', texto: 'Pedir al proveedor de tecnología financiado que proponga su caso de uso más adecuado.' }
    ],
    correctas: ['b'],
    explicacion: 'Cuando el financiamiento precede a un problema definido, corresponde analizar los procesos operativos existentes, localizar los puntos de decisión repetitivos y cargados de juicio donde una solución cognitiva ayudaría de forma medible, y dejar que esos hallazgos nominen el caso de uso. (a) copia el cuello de botella de otra empresa y asume que es el de esta. (d) invita a una solución moldeada por lo que el proveedor vende. (c) sustituye el análisis por jerarquía y arriesga automatizar un proceso que nunca fue la restricción.'
  },
  {
    id: 'cpy-neg-011', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El proyecto propuesto de optimización de hornos con IA de una cementera luce sólido sobre el papel: la demostración del proveedor impresionó a todos y existen años de datos de sensores. El director del programa de IA nota que los supervisores de planta no tienen experiencia analítica, que nadie es dueño de la calidad de los datos y que dos despliegues tecnológicos anteriores se estancaron cuando operaciones los ignoró. ¿Qué consideración debe pesar más en la evaluación de viabilidad?',
    opciones: [
      { id: 'a', texto: 'La preparación de la organización para adoptar y operar la solución.' },
      { id: 'b', texto: 'La sofisticación de los algoritmos de optimización propuestos.' },
      { id: 'c', texto: 'La reputación del proveedor de la plataforma en la industria.' },
      { id: 'd', texto: 'La capacidad disponible en el contrato de cómputo en la nube.' }
    ],
    correctas: ['a'],
    explicacion: 'La viabilidad no es solo técnica, y todas las señales de alarma del escenario apuntan a la preparación organizacional: supervisores sin experiencia analítica, nadie dueño de los datos y un historial de despliegues que operaciones ignoró. (b) ya es adecuada según el propio planteo y no dice nada sobre si alguien usará el sistema. (c) habla poco de la capacidad de esta planta para absorber el cambio. (d) es un detalle de aprovisionamiento ajustable, a diferencia de una organización que no está preparada para operar lo que compra.'
  },
  {
    id: 'cpy-neg-012', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de transportadores diseña un sistema de IA que ajustará automáticamente la velocidad de las cintas en un almacén donde los empleados trabajan junto a la maquinaria. Ingeniería quiere cerrar el diseño la semana próxima. ¿Qué debe asegurar el director del proyecto de IA que ocurra antes de bloquear el diseño?',
    opciones: [
      { id: 'a', texto: 'Una demostración del sistema al personal del almacén para recoger su opinión.' },
      { id: 'b', texto: 'Una comparación de algoritmos de velocidad de cinta tomados de la literatura académica.' },
      { id: 'c', texto: 'Una revisión estructurada de cómo el sistema podría fallar y dañar a las personas cercanas.' },
      { id: 'd', texto: 'Un plan de prensa que describa los beneficios de seguridad de la automatización.' }
    ],
    correctas: ['c'],
    explicacion: 'Una revisión estructurada de cómo el sistema podría fallar y dañar a quienes están cerca identifica modos de falla e implicaciones de seguridad mientras el diseño todavía puede cambiarse, que es el momento adecuado para ese análisis en un entorno donde la automatización mueve maquinaria alrededor de trabajadores. (a) recoge retroalimentación de usabilidad, pero no es un examen disciplinado del comportamiento peligroso ante fallas. (b) optimiza la técnica sin atender qué pasa cuando el sistema se comporta de forma inesperada. (d) promueve beneficios declarados y no contribuye en nada a que el sistema sea realmente seguro.'
  },
  {
    id: 'cpy-neg-013', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una imprenta está a mitad de la planificación de un asistente de cotización con IA cuando su proveedor de software propone empaquetar dos módulos de predicción adicionales con descuento. El director comercial está entusiasmado. ¿Qué debe hacer el director del proyecto de IA con la propuesta?',
    opciones: [
      { id: 'a', texto: 'Rechazarla, porque las propuestas de proveedores durante la planificación siempre son disruptivas.' },
      { id: 'b', texto: 'Remitirla al comité directivo sin una recomendación.' },
      { id: 'c', texto: 'Aceptarla, ya que una funcionalidad con descuento fortalece el valor del proyecto.' },
      { id: 'd', texto: 'Evaluarla contra los límites documentados y el objetivo aprobado antes de responder.' }
    ],
    correctas: ['d'],
    explicacion: 'Evaluar la propuesta contra los límites documentados y el objetivo aprobado usa la definición acordada del trabajo como vara de medida, que es como deben juzgarse los añadidos durante la planificación. (c) deja que el precio prevalezca sobre la alineación y expande el trabajo en silencio. (a) es una regla general que podría descartar opciones genuinamente valiosas. (b) renuncia al análisis que el director está en posición de aportar.'
  },
  {
    id: 'cpy-neg-014', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo técnico de un viñedo propone un sistema basado en aprendizaje que ingiera datos de sensores y satelitales para advertir sobre heladas nocturnas. Durante la revisión, el director del proyecto de IA nota que nadie examinó si un enfoque convencional con umbrales de temperatura pronosticada protegería las vides adecuadamente a una fracción del esfuerzo. ¿Qué debe exigir antes de aprobar?',
    opciones: [
      { id: 'a', texto: 'Una evaluación de la propuesta frente a métodos convencionales más simples que cubran la misma necesidad.' },
      { id: 'b', texto: 'Una segunda propuesta de aprendizaje automático elaborada por otro equipo interno.' },
      { id: 'c', texto: 'Un compromiso de que el sistema se expandirá luego a riego y plagas.' },
      { id: 'd', texto: 'Un cronograma de entrega más rápido, para que la protección contra heladas llegue antes del invierno.' }
    ],
    correctas: ['a'],
    explicacion: 'Una revisión de viabilidad inicial debe comparar el enfoque de IA propuesto contra las alternativas convencionales, porque si un umbral sobre la temperatura pronosticada protege las vides igual de bien, el costo y la complejidad adicionales del sistema de aprendizaje no se justifican. (b) varía el diseño sin responder si hace falta aprendizaje automático. (c) infla la visión sin atender si la necesidad de protección contra heladas justifica esta solución. (d) acelera la entrega de un enfoque que puede ser el equivocado.'
  },
  {
    id: 'cpy-neg-015', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una clínica pediátrica espera que su sistema de recordatorios con IA reduzca las citas perdidas, y la directora describe el beneficio como menos consultorios vacíos. El comité de finanzas responde que no puede sopesar el proyecto sin algo más firme. ¿Qué debe preparar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Un video testimonial del personal describiendo la frustración de los consultorios vacíos.' },
      { id: 'b', texto: 'Una lista de otras clínicas que compraron sistemas de recordatorio similares.' },
      { id: 'c', texto: 'Una estimación que traduzca las citas recuperadas en ingresos esperados y efectos de costo.' },
      { id: 'd', texto: 'Un documento técnico que explique cómo el modelo de recordatorios selecciona a los pacientes.' }
    ],
    correctas: ['c'],
    explicacion: 'Traducir las citas recuperadas en ingresos esperados y efectos de costo cuantifica el beneficio en términos financieros, que es la firmeza que el comité está pidiendo, y calcular los beneficios esperados es el punto de partida para determinar el retorno de la inversión. (a) transmite sentimiento pero no da nada que contrastar con el costo. (d) explica el mecanismo en lugar del valor monetario. (b) muestra actividad de mercado sin demostrar qué ganaría esta clínica.'
  },
  {
    id: 'cpy-neg-016', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una joyería quiere una función de IA que verifique la autenticidad de piedras preciosas mientras el cliente espera en el mostrador. La política de la tienda prohíbe que las imágenes de las gemas salgan del local, y cada tienda opera con hardware de cómputo modesto. Cuando el director del proyecto de IA evalúa si el concepto es viable, ¿qué pregunta importa más?',
    opciones: [
      { id: 'a', texto: 'Si un modelo más grande elevaría todavía más la exactitud de la verificación.' },
      { id: 'b', texto: 'Si el procesamiento necesario cabe dentro de las restricciones de cómputo de la tienda.' },
      { id: 'c', texto: 'Si al personal con más antigüedad le resulta atractiva la interfaz propuesta.' },
      { id: 'd', texto: 'Si la casa matriz podría procesar las imágenes por lotes durante la noche.' }
    ],
    correctas: ['b'],
    explicacion: 'Evaluar los requisitos de recursos computacionales contra las restricciones reales es central en la viabilidad inicial, y aquí la verificación debe correr sobre hardware modesto porque las imágenes no pueden salir del local y el cliente está esperando. (c) es una preocupación de diseño que solo cobra sentido si el concepto es viable. (a) empuja justo en la dirección que la restricción de hardware prohíbe. (d) viola tanto la política de transferencia de imágenes como el requisito de responder mientras el cliente espera.'
  },
  {
    id: 'cpy-neg-017', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa láctea aprobó una iniciativa de IA para predecir el deterioro en su cadena de frío. En cada reunión de planificación, los jefes de área proponen añadidos: puntuación de proveedores, planificación de rutas, optimización energética. El equipo está perdiendo de vista lo que acordó construir. ¿Qué debe producir el director del proyecto de IA para estabilizar la situación?',
    opciones: [
      { id: 'a', texto: 'Una definición escrita de los límites del proyecto y de los entregables comprometidos.' },
      { id: 'b', texto: 'Un proceso de votación que permita a los jefes de área ordenar los añadidos propuestos.' },
      { id: 'c', texto: 'Un cronograma revisado que acomode los añadidos más populares.' },
      { id: 'd', texto: 'Una matriz de habilidades que muestre que el equipo no puede asumir trabajo extra.' }
    ],
    correctas: ['a'],
    explicacion: 'Una definición escrita de los límites y los entregables comprometidos le da al equipo una referencia estable de qué está dentro y fuera del esfuerzo, que es exactamente lo que les falta a esas reuniones a la deriva, y definir límites y entregables es el fundamento del enunciado de alcance. (c) absorbe los añadidos populares y premia la deriva en vez de contenerla. (d) argumenta capacidad pero deja sin responder la cuestión del límite, e invita a la siguiente ronda de propuestas. (b) legitima la expansión por popularidad en lugar de por alineación con el objetivo aprobado.'
  },
  {
    id: 'cpy-neg-018', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una siderúrgica, los analistas de finanzas redactaron el caso de negocio de un sistema de IA que optimiza el uso energético de los hornos. El director del programa de IA nota que el modelo de beneficios supone que el sistema rendirá con exactitud plena desde el primer día y que jamás requerirá retrabajo ni reentrenamiento. ¿Cuál es su aporte más apropiado en este punto?',
    opciones: [
      { id: 'a', texto: 'Aprobar el borrador, porque los documentos financieros pertenecen a la función de finanzas.' },
      { id: 'b', texto: 'Eliminar la sección de supuestos para que los revisores no puedan cuestionarla.' },
      { id: 'c', texto: 'Sustituir el modelo de finanzas por la propia hoja de cálculo del equipo de datos.' },
      { id: 'd', texto: 'Corregir los supuestos técnicos poco realistas del borrador antes de que avance.' }
    ],
    correctas: ['d'],
    explicacion: 'Aportar la experiencia técnica que valida el caso de negocio es una responsabilidad central, así que el director debe señalar que los sistemas de IA suelen mejorar su exactitud con el tiempo y requieren reentrenamiento continuo, y hacer corregir el modelo de beneficios en consecuencia. (a) deja que una premisa técnicamente falsa llegue a los ejecutivos amparada en la propiedad funcional del documento. (c) descarta el rigor financiero que aporta el área de finanzas. (b) esconde la debilidad en lugar de arreglarla y erosiona la transparencia.'
  },
  {
    id: 'cpy-neg-019', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una transportista de carga aprobó una iniciativa de IA para predecir retrasos de embarque, y los equipos de ingeniería están ansiosos por empezar a construir de inmediato. El director del proyecto de IA nota que el equipo de datos, el de integración y el grupo de operaciones tienen cada uno una imagen mental distinta de cómo encajará el sistema. ¿Qué debe hacer que el equipo produzca primero?',
    opciones: [
      { id: 'a', texto: 'Un runbook de soporte en producción para el grupo de operaciones.' },
      { id: 'b', texto: 'Un acuerdo de compra para la infraestructura de cómputo.' },
      { id: 'c', texto: 'Un plan detallado de pruebas de validación para el futuro modelo.' },
      { id: 'd', texto: 'Una arquitectura de alto nivel que muestre los componentes y el flujo de datos.' }
    ],
    correctas: ['d'],
    explicacion: 'La elaboración de la solución empieza por una arquitectura de alto nivel que muestre componentes y flujo de datos, porque da a todos los equipos una imagen compartida del diseño antes de que arranque cualquier construcción. (c) importa más adelante, cuando el desarrollo esté en marcha y haya algo concreto que probar. (a) pertenece a la planificación operativa cerca del despliegue, no a alinear equipos sobre el diseño del sistema. (b) compromete gasto antes de que los equipos siquiera acuerden qué necesita el sistema.'
  },
  {
    id: 'cpy-neg-020', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una velería arma la justificación de inversión de una iniciativa de planificación de demanda con IA. La directora de finanzas cuestiona las cifras de costo que el equipo de proyecto produjo por su cuenta y las califica de conjeturas optimistas. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Inflar las cifras con un margen de seguridad para anticiparse a nuevos cuestionamientos.' },
      { id: 'b', texto: 'Defender las cifras originales, ya que el equipo de proyecto es quien mejor conoce la tecnología.' },
      { id: 'c', texto: 'Trabajar junto con el equipo de finanzas para reconstruir las estimaciones y proyecciones.' },
      { id: 'd', texto: 'Quitar las cifras detalladas y presentar la iniciativa solo por su mérito estratégico.' }
    ],
    correctas: ['c'],
    explicacion: 'Trabajar con finanzas para reconstruir las estimaciones incorpora la experiencia financiera a los números y produce proyecciones que finanzas respaldará cuando se decida la inversión: colaborar en estimaciones y proyecciones de costo es un elemento nombrado del apoyo al caso de negocio. (b) atrinchera una disputa de credibilidad que el equipo no puede ganar solo. (d) abandona la justificación financiera que una decisión de inversión requiere. (a) reemplaza optimismo por relleno arbitrario, que no es más creíble.'
  },
  {
    id: 'cpy-neg-021', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El patrocinador de una maderera vio en una conferencia una demostración de IA que clasifica madera a partir de imágenes de cámara, y quiere la misma capacidad en los aserraderos de la empresa. La demostración corría sobre imágenes limpias de estudio, mientras que los aserraderos son polvorientos, con poca luz y vibración. ¿Qué debe hacer el director del proyecto de IA antes de comprometerse con la iniciativa?',
    opciones: [
      { id: 'a', texto: 'Comprar la plataforma del proveedor de la demostración para replicar el resultado con exactitud.' },
      { id: 'b', texto: 'Comprometerse ahora, ya que la capacidad quedó probada públicamente en la conferencia.' },
      { id: 'c', texto: 'Evaluar si el enfoque demostrado se sostiene bajo las condiciones operativas reales de los aserraderos.' },
      { id: 'd', texto: 'Reacondicionar los aserraderos a condiciones de estudio para que la demostración transfiera.' }
    ],
    correctas: ['c'],
    explicacion: 'Una capacidad probada en un entorno no es automáticamente viable en otro, así que corresponde evaluar si el enfoque sobrevive al polvo, la poca luz y la vibración, típicamente probando con imágenes de los propios aserraderos. (b) toma las condiciones de escenario como prueba de adecuación para esta operación. (a) replica el software pero no las condiciones de estudio que hicieron funcionar la demostración. (d) invierte el proyecto: gasta capital para servir a la herramienta en lugar de probar que la herramienta sirve a los aserraderos.'
  },
  {
    id: 'cpy-neg-022', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cantera redacta una solución en la que un sistema de IA revisará los planes de voladura en busca de problemas de seguridad. Los revisores no pueden determinar, a partir del borrador, si el sistema aprueba planes por sí mismo o si los ingenieros siguen decidiendo. El diseñador líder dice que ese detalle puede resolverse durante el desarrollo. ¿Cómo debe responder el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Coincidir, porque las cuestiones de autoridad se resuelven naturalmente una vez conocida la exactitud del modelo.' },
      { id: 'b', texto: 'Quitar del borrador el flujo de aprobación por completo, para mantenerlo centrado en el modelo.' },
      { id: 'c', texto: 'Decidir la cuestión encuestando a los ingenieros sobre su nivel de automatización preferido.' },
      { id: 'd', texto: 'Hacer que el borrador declare qué pasos ejecuta el sistema y cuáles quedan en criterio del ingeniero.' }
    ],
    correctas: ['d'],
    explicacion: 'El borrador de solución debe dejar claro qué parte del proceso automatiza el sistema y qué parte queda en manos humanas, porque ese límite condiciona la arquitectura, el perfil de riesgo, la postura regulatoria y la forma de trabajar de los ingenieros: nada de eso puede esperar al desarrollo. (a) confunde el desempeño del modelo con una decisión deliberada de diseño sobre el control. (b) despoja al borrador justamente de la información que los revisores necesitan. (c) trata una decisión de diseño crítica para la seguridad como una cuestión de popularidad en lugar de una elección documentada y razonada.'
  },
  {
    id: 'cpy-neg-023', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un estudio jurídico necesita experiencia poco común en modelado de análisis documental durante aproximadamente una cuarta parte de su proyecto de revisión de contratos con IA, y ningún empleado actual la tiene. El estudio además quiere operar y extender el sistema por su cuenta durante años después. ¿Cómo debe obtener el director del proyecto esa capacidad?',
    opciones: [
      { id: 'a', texto: 'Crear un puesto senior permanente, aunque la experiencia profunda se necesite solo brevemente.' },
      { id: 'b', texto: 'Tercerizar el proyecto completo a una firma que ya emplee a esos especialistas.' },
      { id: 'c', texto: 'Pausar el proyecto mientras el personal existente completa una capacitación en la especialidad.' },
      { id: 'd', texto: 'Contratar a un especialista externo y emparejarlo con personal interno para que la capacidad quede en casa.' }
    ],
    correctas: ['d'],
    explicacion: 'Una brecha de experiencia profunda pero corta encaja con una contratación externa, y emparejar personal interno con el contratista asegura que el estudio pueda operar y extender el sistema cuando el contrato termine. (a) crea un costo de largo plazo sin carga de trabajo de largo plazo. (c) retrasa el proyecto todo lo que tarde el dominio de la especialidad, sin garantía de alcanzarlo. (b) entrega trabajo que el estudio sí puede hacer y lo deja dependiente de terceros para un sistema que pretende poseer.'
  },
  {
    id: 'cpy-neg-024', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El proyecto de inspección con IA de una herramentera requerirá una plataforma especializada de anotación de datos que debe superar la revisión de seguridad de la empresa —un proceso conocido por ser lento— antes de cualquier compra. El entrenamiento del modelo no puede empezar sin imágenes anotadas. ¿Cuándo debe involucrar el director del proyecto al equipo de compras?',
    opciones: [
      { id: 'a', texto: 'Después de que el entrenamiento del modelo comience, para que los requisitos estén del todo concretos.' },
      { id: 'b', texto: 'Ahora, para que la adquisición y la revisión de seguridad terminen antes de que deba comenzar la anotación.' },
      { id: 'c', texto: 'Una vez que el atraso de anotación se convierta en el problema crítico del proyecto.' },
      { id: 'd', texto: 'Después de que el equipo de seguridad descubra la plataforma por su cuenta.' }
    ],
    correctas: ['b'],
    explicacion: 'Involucrar a compras ahora deja que la adquisición y la lenta revisión de seguridad corran por delante de la necesidad, de modo que la plataforma esté lista cuando el entrenamiento dependa de ella; coordinar con compras las herramientas especializadas es parte de identificar los recursos del proyecto, y el momento de esa coordinación es responsabilidad del director. (a) pone un proceso lento y conocido directamente en la ruta crítica. (c) reacciona a un retraso que el director podía anticipar. (d) confunde quién inicia una compra.'
  },
  {
    id: 'cpy-neg-025', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora planea un modelo de IA que decida qué siniestros entrantes se derivan a pago acelerado y cuáles a revisión manual. El área legal confirmó que el diseño cumple las regulaciones de seguros aplicables, y el director del proyecto de IA está completando la evaluación de riesgos antes de que el proyecto avance. ¿Qué debe examinar a continuación?',
    opciones: [
      { id: 'a', texto: 'Verificar que los costos proyectados de alojamiento se mantengan dentro del presupuesto aprobado.' },
      { id: 'b', texto: 'Comprobar que la velocidad de procesamiento de siniestros mejore para la mayoría de los clientes.' },
      { id: 'c', texto: 'Examinar si la priorización automatizada podría tratar injustamente a determinados grupos de reclamantes, pese a ser lícita.' },
      { id: 'd', texto: 'Confirmar que el objetivo de exactitud del modelo se alcanzó durante las pruebas iniciales.' }
    ],
    correctas: ['c'],
    explicacion: 'El cumplimiento regulatorio no zanja la cuestión ética, así que la evaluación de riesgos debe examinar si las decisiones del modelo podrían perjudicar sistemáticamente a ciertos grupos de reclamantes aun cumpliendo todas las reglas. (d) es una verificación de desempeño técnico que no dice nada sobre quién soporta los errores. (a) es control financiero, no análisis del riesgo de decidir. (b) puede incluso ocultar el problema, porque un daño concentrado en un grupo pequeño se esconde con facilidad detrás de una mejora agregada.'
  },
  {
    id: 'cpy-neg-026', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'La oficina de innovación de una pavimentadora redactó un enunciado del problema que culpa a la inconsistencia de los presupuestadores por las licitaciones perdidas y propone un asistente de estimación con IA. Cuando los presupuestadores senior finalmente revisan el enunciado, demuestran que sus estimaciones son consistentes y que las pérdidas se explican por una lista de precios de materiales que se actualiza demasiado lento. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Pedir a un segundo grupo de presupuestadores que revise, hasta que surja una opinión favorable.' },
      { id: 'b', texto: 'Continuar según lo escrito, ya que la oficina de innovación patrocina la iniciativa.' },
      { id: 'c', texto: 'Reformular el enunciado del problema alrededor de la evidencia que aportaron los presupuestadores.' },
      { id: 'd', texto: 'Agregar seguimiento de consistencia de los presupuestadores a la solución, para cubrir ambas teorías.' }
    ],
    correctas: ['c'],
    explicacion: 'Validar el enunciado del problema con quienes hacen el trabajo existe precisamente para atrapar un diagnóstico equivocado, y los presupuestadores mostraron que el verdadero motor es una lista de precios desactualizada: el enunciado debe reformularse sobre esa evidencia antes de que avance ninguna solución. (b) financia una solución a un problema que no existe. (a) corrompe la validación convirtiéndola en búsqueda de confirmación. (d) gasta esfuerzo monitoreando una causa que la evidencia ya descartó.'
  },
  {
    id: 'cpy-neg-027', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una floristería planifica un proyecto de IA para optimizar rutas de reparto. Construir el modelo exigirá cómputo intensivo durante un tramo corto, mientras que operarlo día a día necesitará solo capacidad ligera. El director de TI pregunta al director del proyecto de IA para qué debe planificar. ¿Qué debe entregarle?',
    opciones: [
      { id: 'a', texto: 'Una propuesta para correr la construcción en las estaciones de trabajo de los empleados fuera de horario.' },
      { id: 'b', texto: 'Una recomendación de diferir todas las cuestiones de infraestructura hasta que el modelo esté terminado.' },
      { id: 'c', texto: 'Una solicitud de compra de servidores permanentes de alta capacidad dimensionados para la construcción.' },
      { id: 'd', texto: 'Una evaluación de las necesidades de infraestructura que cubra tanto la fase de construcción como la operación continua.' }
    ],
    correctas: ['d'],
    explicacion: 'Una evaluación que cubra ambas fases captura los dos perfiles de demanda muy distintos del proyecto y permite a TI planificar capacidad intensiva y breve para el desarrollo y capacidad ligera para el uso diario; evaluar las necesidades de hardware e infraestructura para desarrollo y despliegue es un elemento nombrado de identificar los recursos del proyecto. (c) deja hardware caro ocioso una vez que termina el tramo intensivo. (b) invita a un atasco cuando el entrenamiento no pueda arrancar. (a) improvisa alrededor de una necesidad que merece planificación deliberada.'
  },
  {
    id: 'cpy-neg-028', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cosmética confirmó que las verificaciones de datos y tecnología para una iniciativa de predicción de demanda lucen prometedoras. Sin embargo, el director del proyecto de IA se entera de que ningún área será dueña del sistema después del lanzamiento, y que la dirección espera una entrega única en lugar de una iteración continua. ¿Qué debe hacer antes de avanzar?',
    opciones: [
      { id: 'a', texto: 'Escalar para conseguir presupuesto adicional de ingeniería que cubra el vacío.' },
      { id: 'b', texto: 'Tercerizar toda la construcción para que las preguntas de propiedad desaparezcan.' },
      { id: 'c', texto: 'Evaluar la preparación de la organización para operar y sostener el sistema.' },
      { id: 'd', texto: 'Comenzar el desarrollo del modelo, ya que los datos y la tecnología pasaron las verificaciones.' }
    ],
    correctas: ['c'],
    explicacion: 'La viabilidad incluye revisar la preparación organizacional, y un sistema sin dueño y con una dirección que espera una entrega única se degradará por muy sólidos que sean los datos y la tecnología. (a) responde con dinero cuando la brecha es de propiedad y expectativas. (b) no elimina la necesidad de un hogar interno cuando el proveedor se va. (d) ignora que la preparación es en sí una dimensión de viabilidad capaz de hundir la inversión.'
  },
  {
    id: 'cpy-neg-029', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cooperativa agrícola quiere dejar de regar en exceso sus huertos. Durante la revisión temprana de la solución, el director del proyecto de IA descubre que los agrónomos de la cooperativa ya mantienen reglas de riego documentadas por tipo de suelo y lectura meteorológica, y que una implementación directa de esas reglas cumpliría el requisito declarado a una fracción de la complejidad de un sistema de aprendizaje. ¿Qué debe recomendar?',
    opciones: [
      { id: 'a', texto: 'Implementar el enfoque basado en reglas, ya que satisface el requisito con menos complejidad.' },
      { id: 'b', texto: 'Encargar el sistema de aprendizaje, pero restringirlo a los huertos más grandes.' },
      { id: 'c', texto: 'Correr el sistema de aprendizaje y las reglas en paralelo en producción de forma indefinida.' },
      { id: 'd', texto: 'Avanzar con el sistema de aprendizaje, porque el presupuesto se aprobó para una iniciativa de IA.' }
    ],
    correctas: ['a'],
    explicacion: 'Comparar el enfoque cognitivo contra las alternativas convencionales es el sentido de una revisión temprana de viabilidad, y cuando unas reglas documentadas ya satisfacen el requisito, la implementación más simple gana en costo, mantenibilidad y explicabilidad. (d) permite que la etiqueta del financiamiento se imponga al análisis. (c) duplica la carga operativa para evitar tomar la decisión que la revisión acaba de habilitar. (b) achica el error sin corregirlo, porque en los huertos grandes las reglas también cubren la necesidad.'
  },
  {
    id: 'cpy-neg-030', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una acuícola lanzó un proyecto de IA cuyo objetivo declarado es reducir el desperdicio de alimento para peces. Todos los interesados respaldan el objetivo, pero cuando el director del proyecto pregunta cómo se calculará el desperdicio y qué registros aportarán los números, cada área responde algo distinto. ¿Qué debe hacer a continuación?',
    opciones: [
      { id: 'a', texto: 'Dejar que cada área haga seguimiento del objetivo con los registros que prefiera.' },
      { id: 'b', texto: 'Abandonar el objetivo de desperdicio y sustituirlo por una medida que ya tenga registros limpios.' },
      { id: 'c', texto: 'Elegir el área cuyos registros muestren mayor desperdicio, para que la mejora sea más fácil de demostrar.' },
      { id: 'd', texto: 'Obtener acuerdo sobre el método de cálculo y la fuente de datos detrás de cada medida antes de que el trabajo continúe.' }
    ],
    correctas: ['d'],
    explicacion: 'Una medida de éxito solo es utilizable cuando todos coinciden en cómo se calcula exactamente y qué fuente la alimenta, así que esa definición debe cerrarse antes de que avance el desarrollo, o el proyecto terminará con cada área declarando un resultado distinto. (a) garantiza veredictos contradictorios sobre el mismo resultado. (c) amaña la medición para halagar al proyecto. (b) abandona el objetivo de negocio acordado porque sus registros son desprolijos, y deja que la conveniencia de datos se imponga al propósito que justificó el financiamiento.'
  },

  // ── Necesidades de datos ──────────────────────────────────────────────────

  {
    id: 'cpy-dat-011', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una alimentaria, un equipo de IA frustrado por las demoras de compras propone montar el espacio de trabajo del proyecto en una cuenta de nube personal, fuera del proceso aprobado por el área de TI. El espacio contendría datos de proveedores y de ventas para un modelo de demanda. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Permitir la cuenta temporalmente y migrar el espacio de trabajo una vez que el entorno oficial esté aprobado.' },
      { id: 'b', texto: 'Canalizar el armado del espacio de trabajo por los canales aprobados, de modo que cumpla los requisitos de seguridad y gobernanza de la organización.' },
      { id: 'c', texto: 'Dejar que el trabajo comience en la cuenta personal mientras se negocia una excepción acelerada con compras.' },
      { id: 'd', texto: 'Aceptar la cuenta, pero exigir al equipo borrar todos los datos del proyecto cuando llegue el entorno aprobado.' }
    ],
    correctas: ['b'],
    explicacion: 'Coordinar el espacio de trabajo por los canales aprobados es el único camino que mantiene los datos de proveedores y ventas bajo los controles de seguridad y gobernanza de la organización, y el director puede presionar por un aprovisionamiento acelerado dentro de ese proceso. (a) coloca datos de la empresa fuera de la supervisión organizacional mientras dure la promesa de migración. (c) crea la exposición antes de que exista aprobación alguna. (d) borrar después no deshace el periodo en que los datos estuvieron sin gestión ni protección.'
  },
  {
    id: 'cpy-dat-012', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una telecomunicaciones, un director de proyecto de IA identifica fuentes para un modelo de retención de clientes. Facturación, soporte y marketing mantienen cada uno sus propias tablas de clientes, y cada área insiste en que su copia es la autoritativa. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Dejar que los científicos de datos fusionen las tres copias y resuelvan los conflictos estadísticamente.' },
      { id: 'b', texto: 'Usar la copia de facturación, ya que los sistemas de ingresos suelen ser los más exactos.' },
      { id: 'c', texto: 'Mapear los sistemas internos que contienen datos de clientes y cómo se relacionan las copias, antes de elegir.' },
      { id: 'd', texto: 'Encargar una base de datos de clientes consolidada antes de cualquier trabajo de modelado.' }
    ],
    correctas: ['c'],
    explicacion: 'Mapear los sistemas internos que contienen datos de clientes y entender cómo se originan y relacionan las copias le da al proyecto una visión del paisaje de fuentes basada en evidencia antes de elegir ninguna. (b) es una suposición: los sistemas de ingresos son exactos sobre los cargos, pero suelen estar desactualizados en atributos de contacto y de relación. (d) es una iniciativa mayor que no debería bloquear al proyecto de retención. (a) resuelve los conflictos por aritmética en lugar de por entender qué sistema es autoritativo para cada atributo.'
  },
  {
    id: 'cpy-dat-013', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cosmética construye un modelo de fraude en devoluciones. El diccionario de datos describe la tabla de devoluciones, pero el equipo sigue malinterpretando columnas cuyos valores reflejan políticas de tienda que cambiaron con los años. El director del proyecto de IA quiere a alguien que pueda explicar qué significaban realmente los datos cuando se registraron. ¿A quién debe convocar?',
    opciones: [
      { id: 'a', texto: 'Al proveedor que implementó originalmente la base de datos del punto de venta.' },
      { id: 'b', texto: 'A un auditor externo que pueda certificar la exactitud de la tabla de devoluciones.' },
      { id: 'c', texto: 'A usuarios de negocio que trabajaron en el proceso de devoluciones y entienden el contexto y el significado de los datos.' },
      { id: 'd', texto: 'A un ingeniero de datos contratado con experiencia en construir pipelines de datos de devoluciones.' }
    ],
    correctas: ['c'],
    explicacion: 'Convocar a usuarios de negocio que entienden el contexto y el significado de los datos es la respuesta para columnas cuya interpretación depende de políticas cambiantes: quienes operaron el proceso de devoluciones pueden explicar qué significaba cada código en cada época. (d) puede mover y transformar los datos, pero no aporta memoria institucional sobre los cambios de política. (a) conoce la mecánica del esquema, no cómo las políticas de este comercio moldearon los valores registrados. (b) certifica exactitud contra definiciones declaradas y enfrentaría la misma brecha de interpretación que ya tiene el equipo.'
  },
  {
    id: 'cpy-dat-014', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una pesquera reunió datos de precios de mercado para un modelo de pronóstico hace dos meses. La preparación se ha alargado, los precios se movieron sustancialmente en un mercado volátil y la fotografía recolectada ya no refleja las condiciones actuales. Al proyecto todavía le quedan meses. ¿Qué debe establecer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Un cronograma de preparación comprimido para alcanzar a la fotografía original.' },
      { id: 'b', texto: 'La aceptación de la fotografía desactualizada, ya que el modelo se reentrenará después del lanzamiento.' },
      { id: 'c', texto: 'Procedimientos de refresco y actualización que mantengan vigentes los datos reunidos durante todo el proyecto.' },
      { id: 'd', texto: 'Un reinicio completo de la recolección cada vez que el equipo note desactualización.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer procedimientos de refresco y actualización es parte de reunir los datos, y un refresco permanente mantiene representativos los precios volátiles durante los meses que le quedan al proyecto. (d) es reactivo y desperdicia el pipeline ya construido. (a) persigue una fotografía que volverá a quedar obsoleta para cuando llegue el entrenamiento. (b) acepta datos rancios con el argumento de que el reentrenamiento vendrá después, lo que implica desarrollar y evaluar el modelo contra condiciones que el mercado ya dejó atrás.'
  },
  {
    id: 'cpy-dat-015', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una empresa de transporte ferroviario, un director de programa de IA supervisa un modelo que analiza imágenes de cámara de los cruces. Las corridas de entrenamiento se estancan una y otra vez porque el servidor de analítica compartido no puede con la carga de imágenes, y el líder de ciencia de datos pidió ayuda. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Pausar el entrenamiento hasta que terminen las tareas de preparación de datos y liberen capacidad del servidor compartido.' },
      { id: 'b', texto: 'Gestionar capacidad de cómputo escalada a la carga de imágenes, a través de los canales de infraestructura aprobados de la organización.' },
      { id: 'c', texto: 'Indicar al equipo que submuestree las imágenes hasta que el entrenamiento quepa en el servidor existente.' },
      { id: 'd', texto: 'Reprogramar los trabajos de entrenamiento a ventanas nocturnas, cuando el servidor compartido está inactivo.' }
    ],
    correctas: ['b'],
    explicacion: 'Aprovisionar recursos de cómputo acordes a la carga es la responsabilidad de coordinación del director, y encauzar el pedido por los canales aprobados mantiene la capacidad conforme y soportable. (c) degrada los datos de entrenamiento para acomodarse a un hardware inadecuado y sacrifica calidad del modelo para evitar una decisión de infraestructura. (d) atiende el momento de la contención, pero el servidor se estanca porque la carga excede su capacidad, no por cuándo corren los trabajos. (a) libera capacidad temporal en una máquina que igual no puede sostener la carga de imágenes.'
  },
  {
    id: 'cpy-dat-016', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una telecomunicaciones, los auditores internos piden a un proyecto de IA mostrar de dónde se originó cada atributo de los datos de entrenamiento del modelo de abandono y cómo se transformó a lo largo del camino. El equipo solo puede señalar código disperso en cuadernos escritos durante la preparación. ¿Qué debe hacer el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Entregar los cuadernos a los auditores, ya que el código contiene cada paso realizado.' },
      { id: 'b', texto: 'Preparar una lista con los nombres de los sistemas fuente y remitirla al equipo de auditoría.' },
      { id: 'c', texto: 'Indicar al equipo que documente el linaje y el uso de los datos, de modo que cada atributo se rastree desde el origen a través de sus transformaciones.' },
      { id: 'd', texto: 'Pedir que se posponga la auditoría hasta después del despliegue, cuando la documentación esté terminada.' }
    ],
    correctas: ['c'],
    explicacion: 'Documentar el linaje y el uso de los datos da a los auditores un registro durable y revisable que rastrea cada atributo desde su fuente a través de cada transformación, que es exactamente lo que el pedido de auditoría requiere. (a) entierra el rastro en código improvisado que los auditores no pueden leer de forma confiable y que quizá ya no coincida con lo que realmente se ejecutó. (b) identifica orígenes pero omite las transformaciones y el uso que se preguntó. (d) difiere una obligación de rendición de cuentas y señala que el proyecto no puede dar cuenta de su propio manejo de datos.'
  },
  {
    id: 'cpy-dat-017', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de transporte urbano quiere entrenar un modelo de demanda de pasajeros con conteos de viajeros, registros de pago de tarifas y datos de llegadas en tiempo real. Los sistemas internos tienen dos de los tres flujos; el tercero, el de llegadas en tiempo real, pertenece a la autoridad de transporte regional y no está disponible en ningún sistema interno. ¿Qué debe indicar el director del proyecto de IA que se explore?',
    opciones: [
      { id: 'a', texto: 'Eliminar por completo las llegadas en tiempo real del conjunto de variables, para evitar dependencia de terceros.' },
      { id: 'b', texto: 'Sustituir los tiempos promedio de llegada programada como sustituto de los datos en tiempo real.' },
      { id: 'c', texto: 'Explorar fuentes de datos externas y proveedores terceros para obtener el flujo de llegadas en tiempo real.' },
      { id: 'd', texto: 'Retrasar el proyecto hasta que la autoridad integre sus sistemas con el almacén de datos de la empresa.' }
    ],
    correctas: ['c'],
    explicacion: 'Explorar fuentes externas y proveedores terceros es la acción apropiada cuando un elemento de dato requerido no está en los sistemas internos, ya que el flujo de la autoridad puede obtenerse mediante un acuerdo de intercambio, un portal de datos abiertos o un intermediario licenciado. (b) cambia la naturaleza de la variable y puede minar el valor del modelo para escenarios de interrupción. (a) elimina un requisito definido sin averiguar si puede satisfacerse. (d) es un último recurso todavía injustificado.'
  },
  {
    id: 'cpy-dat-018', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una manufacturera planifica una capacidad de detección de defectos que combinará imágenes de cámara de la línea con registros escritos de inspección. Antes de acercarse a los dueños de los sistemas, el director del proyecto de IA pide al equipo precisar exactamente qué consumirá el esfuerzo de modelado. ¿Qué debe producir el equipo?',
    opciones: [
      { id: 'a', texto: 'Un plan para reunir ahora todos los conjuntos de datos de la planta y ordenar la relevancia durante la preparación.' },
      { id: 'b', texto: 'Una solicitud para que el grupo de infraestructura elija los formatos según eficiencia de almacenamiento.' },
      { id: 'c', texto: 'Una especificación de los tipos de dato y formatos que exige el enfoque de modelado elegido.' },
      { id: 'd', texto: 'Una directiva para convertir todos los datos de planta a formato de hoja de cálculo, por uniformidad.' }
    ],
    correctas: ['c'],
    explicacion: 'Especificar los tipos y formatos que el modelado requiere —imágenes etiquetadas a cierta resolución, texto estructurado de los registros de inspección— dice a los dueños de los sistemas exactamente qué proveer, y es el fundamento de definir los datos necesarios. (a) desperdicia esfuerzo de recolección e inunda el proyecto de material irrelevante. (d) destruye por completo el contenido de las imágenes y desfigura el texto no estructurado. (b) optimiza el objetivo equivocado: las necesidades del modelo deben guiar las decisiones de formato.'
  },
  {
    id: 'cpy-dat-019', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de indumentaria construye un modelo de predicción de devoluciones. La evaluación de datos revela que las medidas de calce de las prendas, un atributo que la lista de requisitos considera esencial, están ausentes en la mayoría de los pedidos históricos. El director del programa de IA debe responder antes de que el proyecto avance. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Detener el proyecto, ya que un atributo esencial no puede recuperarse por completo.' },
      { id: 'b', texto: 'Insertar valores estimados para las medidas faltantes y continuar hacia el entrenamiento.' },
      { id: 'c', texto: 'Quitar el atributo de calce de los requisitos, para que los datos disponibles los satisfagan.' },
      { id: 'd', texto: 'Identificar formalmente la brecha y desarrollar una estrategia, como obtener el atributo en otra fuente.' }
    ],
    correctas: ['d'],
    explicacion: 'Identificar formalmente la deficiencia y desarrollar una estrategia para atenderla —fuentes alternativas, datos de socios o una recolección revisada— es como se determina si los datos pueden satisfacer las necesidades de la solución. (c) redefine la solución en silencio para calzar con los datos, en lugar de con la necesidad de negocio que hizo esencial ese atributo. (b) fabrica la señal predictiva central en la mayoría de los registros y socavaría la confianza en las salidas. (a) es prematuro cuando aún no se han explorado estrategias para cerrar la brecha.'
  },
  {
    id: 'cpy-dat-020', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un director de proyecto de IA en una logística lanza una iniciativa de predicción de retrasos de embarque. Los ingenieros de datos están listos para solicitar extractos de varios sistemas de operaciones. Antes de que empiece cualquier recolección, el patrocinador pregunta cómo juzgará el equipo si los datos entrantes son realmente utilizables para entrenar. ¿Qué debe establecer primero el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Programar la selección del algoritmo, para que las verificaciones de datos puedan calzar con la técnica elegida.' },
      { id: 'b', texto: 'Acordar umbrales medibles de calidad que los datos recolectados deben satisfacer para ser aceptados.' },
      { id: 'c', texto: 'Comenzar la extracción de inmediato, para poder juzgar la usabilidad sobre muestras reales.' },
      { id: 'd', texto: 'Ampliar el enunciado de alcance del proyecto para listar todos los campos disponibles de operaciones.' }
    ],
    correctas: ['b'],
    explicacion: 'Definir los datos requeridos incluye fijar estándares de calidad y criterios de aceptación por adelantado, de modo que el equipo tenga una vara objetiva para juzgar los extractos antes de invertir esfuerzo en la recolección. (c) invierte la secuencia e invita al retrabajo cuando lleguen datos inutilizables sin un estándar contra el cual medirlos. (a) pertenece al desarrollo posterior del modelo y no dice al equipo qué es un dato aceptable. (d) infla el alcance en lugar de definir la vara de calidad que la solución necesita.'
  },
  {
    id: 'cpy-dat-021', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo de datos de una inmobiliaria terminó de evaluar los datos de publicaciones y transacciones para un modelo de estimación de precios. Los hallazgos llenan sesenta páginas de detalle estadístico. El director de operaciones pidió el resultado de la evaluación antes de una decisión de financiamiento la próxima semana. ¿Qué debe entregar el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'El informe estadístico completo de sesenta páginas, para que la decisión repose sobre información completa.' },
      { id: 'b', texto: 'Un recorrido en vivo de los cuadernos de los analistas durante la reunión de financiamiento.' },
      { id: 'c', texto: 'Un resumen ejecutivo de los hallazgos con la conclusión de preparación y sus implicaciones de negocio.' },
      { id: 'd', texto: 'Un memorando que solo indique que los datos pasaron la evaluación, con detalles disponibles a pedido.' }
    ],
    correctas: ['c'],
    explicacion: 'Preparar un resumen ejecutivo de los hallazgos es como un análisis estadístico de sesenta páginas se vuelve utilizable para una decisión de financiamiento: empareja la conclusión de preparación con lo que significa para el negocio. (a) traslada la carga de síntesis al director de operaciones y arriesga que la decisión se tome sobre las páginas que alcance a hojear. (b) ahoga a una audiencia ejecutiva en mecánica técnica durante una reunión destinada a decidir. (d) despoja al mensaje del matiz que la dirección necesita, como salvedades y brechas residuales que afectan el alcance del financiamiento.'
  },
  {
    id: 'cpy-dat-022', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una cadena hotelera desarrolla un predictor de cancelaciones de reserva. El historial etiquetado disponible para entrenar es mucho menor de lo que el equipo esperaba, aunque cada registro es rico y exacto. El director del proyecto de IA debe decidir qué sigue. ¿Cuál es el paso más apropiado?',
    opciones: [
      { id: 'a', texto: 'Duplicar los registros existentes hasta que el conjunto alcance un tamaño cómodo.' },
      { id: 'b', texto: 'Comenzar el entrenamiento de todos modos y juzgar la suficiencia por los resultados del primer modelo.' },
      { id: 'c', texto: 'Evaluar si el volumen disponible puede sostener un modelo robusto antes de comprometerse al desarrollo.' },
      { id: 'd', texto: 'Bajar los objetivos de exactitud del proyecto para que el conjunto pequeño pueda alcanzarlos.' }
    ],
    correctas: ['c'],
    explicacion: 'Evaluar si el volumen disponible sostiene un entrenamiento robusto es el juicio de suficiencia para el que existe este punto de decisión, y permite al equipo sopesar opciones como recolectar más antes de que se acumulen costos de desarrollo. (b) gasta esfuerzo de modelado para aprender lo que una evaluación estructurada revelaría antes y más barato. (a) infla el conteo de filas sin agregar información nueva, así que el modelo no aprende nada que no supiera. (d) redefine el éxito en silencio para enmascarar un problema de datos en lugar de atenderlo.'
  },
  {
    id: 'cpy-dat-023', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de defensa construye un modelo de cumplimiento contractual que se entrenará con registros de compras extraídos de tres sistemas internos, cada uno de un área distinta. Antes de cerrar la lista de fuentes, el director del proyecto de IA se entera de que el equipo aún no sabe qué áreas deben aprobar el acceso ni quién es responsable de cada sistema. ¿Qué debe confirmar antes de fijar la lista?',
    opciones: [
      { id: 'a', texto: 'El lenguaje de consulta preferido del equipo de modelado para cada sistema fuente.' },
      { id: 'b', texto: 'El diseño de la interfaz de usuario de los sistemas de compras que el equipo consultará.' },
      { id: 'c', texto: 'El formato de almacenamiento que cada área usa para archivar sus registros de compras.' },
      { id: 'd', texto: 'La propiedad de los datos y los permisos de acceso asociados a cada fuente identificada.' }
    ],
    correctas: ['d'],
    explicacion: 'Documentar la propiedad de los datos y los permisos de acceso es parte obligada de identificar fuentes y ubicaciones, porque saber que una fuente existe solo sirve si además se sabe quién es su dueño y si el acceso puede concederse. (a) es una comodidad técnica que no determina si el proyecto puede obtener los datos legal u organizacionalmente. (c) importa para planificar la ingesta, pero es secundario respecto de confirmar los derechos de acceso. (b) es irrelevante para una extracción programática de datos.'
  },
  {
    id: 'cpy-dat-024', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora cargó una década de datos de siniestros para un proyecto de puntuación de fraude. El director del proyecto de IA pide a los analistas dedicar un sprint a perfilar el conjunto con estadísticas resumen, vistas de correlación y gráficos de valores atípicos antes de que nadie proponga variables o algoritmos. Un interesado califica ese sprint de demora. ¿Cómo debe justificarlo?',
    opciones: [
      { id: 'a', texto: 'Da tiempo al equipo de infraestructura para terminar de aprovisionar el clúster de entrenamiento.' },
      { id: 'b', texto: 'Satisface el requisito del regulador de documentar los datos de seguros antes de modelar.' },
      { id: 'c', texto: 'Permite a los analistas ensayar las herramientas que usarán durante la evaluación del modelo.' },
      { id: 'd', texto: 'Revela las características reales de los datos, para que las decisiones posteriores de modelado se apoyen en evidencia y no en supuestos.' }
    ],
    correctas: ['d'],
    explicacion: 'Realizar análisis exploratorio para entender las características de los datos es el propósito del sprint de perfilado: las estadísticas resumen, las correlaciones y las vistas de atípicos exponen cómo se comportan realmente los siniestros y fundamentan en evidencia cada decisión posterior de variables y algoritmos. (b) puede beneficiarse de forma incidental, pero el sprint no lo mueve un requisito de presentación. (a) trata el análisis como relleno de cronograma en lugar de un entregable. (c) es a lo sumo un efecto secundario, ya que el valor del sprint está en lo que el equipo aprende sobre los datos.'
  },
  {
    id: 'cpy-dat-025', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una constructora define las necesidades de datos de un modelo de predicción de incidentes de seguridad. El director del proyecto de IA insiste en que, antes de que empiece la recolección, el equipo escriba umbrales medibles que deben cumplir los reportes de obra entrantes —niveles tolerables de campos faltantes, fiabilidad de las marcas de tiempo— y qué ocurre con los lotes que no los alcancen. ¿Qué está creando el equipo?',
    opciones: [
      { id: 'a', texto: 'Una política de retención que describe cuánto tiempo se almacenan los reportes de obra.' },
      { id: 'b', texto: 'Estándares de calidad de datos y criterios de aceptación para los datos entrantes.' },
      { id: 'c', texto: 'Un objetivo de desempeño para las eventuales predicciones de seguridad del modelo.' },
      { id: 'd', texto: 'Un plan de comunicaciones para compartir los hallazgos de incidentes con los jefes de obra.' }
    ],
    correctas: ['b'],
    explicacion: 'Definir estándares de calidad y criterios de aceptación es precisamente lo que constituyen unos umbrales medibles de campos faltantes y fiabilidad de marcas de tiempo, más una disposición para los lotes que fallan, y escribirlos antes de recolectar le da al equipo una vara objetiva para aceptar o rechazar los datos entrantes. (c) gobierna las predicciones del modelo entrenado, no los reportes que ingresan. (a) cubre la duración del almacenamiento, no la calidad de admisión. (d) distribuye hallazgos y nada tiene que ver con si un lote de datos es aceptable.'
  },
  {
    id: 'cpy-dat-026', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En una naviera, un director de programa de IA construye una solución de pronóstico de demanda. Los expertos del dominio insisten en que las condiciones meteorológicas y la congestión portuaria impulsan las reservas, pero ninguno de esos factores aparece en ningún sistema interno de la empresa. El historial interno de reservas está por lo demás limpio y completo. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Continuar ahora con los datos internos y planificar agregar los factores externos en una entrega posterior.' },
      { id: 'b', texto: 'Evaluar proveedores de datos terceros que puedan suministrar la información meteorológica y de congestión.' },
      { id: 'c', texto: 'Derivar variables proxy de los patrones de reserva para aproximar los efectos del clima y la congestión.' },
      { id: 'd', texto: 'Extender el extracto interno para cubrir más años de historial de reservas.' }
    ],
    correctas: ['b'],
    explicacion: 'Cuando los expertos identifican impulsores que la organización no captura, explorar fuentes externas y proveedores terceros es la vía directa para llenar el vacío, y evaluarlos informa además las decisiones de costo, licenciamiento y viabilidad. (c) produce sustitutos débiles cuando las mediciones directas de los impulsores reales están disponibles comercialmente. (d) agrega volumen de los mismos campos y sigue sin contener señal de clima ni de congestión. (a) entrena a sabiendas el primer modelo sin los factores que los expertos consideran decisivos, y socava su credibilidad en el lanzamiento.'
  },
  {
    id: 'cpy-dat-027', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una residencia para adultos mayores lleva varios meses reuniendo datos de cuidado de residentes para un modelo de riesgo de caídas. Los patrocinadores quedaron desconcertados el trimestre pasado por un reporte súbito de problemas en los registros de consentimiento y están ansiosos. El director del proyecto de IA quiere reconstruir su confianza durante el largo trabajo de datos. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Un canal de tickets donde los patrocinadores puedan enviar preguntas al equipo de datos.' },
      { id: 'b', texto: 'Un único informe integral entregado cuando la fase de datos concluya formalmente.' },
      { id: 'c', texto: 'Una cadencia regular de actualizaciones que cubra el avance de la preparación y las dificultades conforme surjan.' },
      { id: 'd', texto: 'Una política por excepción donde los patrocinadores solo sepan del equipo si un hito se atrasa.' }
    ],
    correctas: ['c'],
    explicacion: 'Una cadencia regular que reporte tanto avance como dificultades emergentes mantiene informados a los patrocinadores durante todo el esfuerzo y previene la dinámica de sorpresa que dañó su confianza. (b) recrea el largo silencio en el que crecen la ansiedad y las sorpresas. (d) implica que los patrocinadores solo reciben malas noticias, lo que refuerza el patrón que los desestabilizó. (a) obliga a los patrocinadores a ir a buscar la información y señala que el equipo no compartirá su estado de forma proactiva.'
  },

  // ── Desarrollo y evaluación de modelos ────────────────────────────────────

  {
    id: 'cpy-mod-008', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud desarrolla un asistente de triaje de síntomas. El director del proyecto de IA observa que cada desarrollador prueba informalmente solo sus propios cambios, que no existen casos de prueba compartidos y que nada define qué significa aprobar antes de que el código se integre al pipeline del modelo. ¿Qué debe establecer?',
    opciones: [
      { id: 'a', texto: 'Una regla que obligue al desarrollador más senior a revisar todas las integraciones.' },
      { id: 'b', texto: 'Una recompensa para el personal que encuentre errores de triaje.' },
      { id: 'c', texto: 'Un protocolo formal de pruebas con casos compartidos y chequeos de aceptación definidos.' },
      { id: 'd', texto: 'Un ambiente de preproducción donde los cambios reposen en observación antes de integrarse.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer protocolos de prueba y procedimientos de aseguramiento de calidad significa definir casos compartidos y chequeos de aceptación explícitos que todo cambio debe superar, sustituyendo la prueba individual informal por un estándar repetible. (a) agrega criterio pero sigue siendo subjetivo sin casos acordados ni criterios de aprobación contra los cuales revisar. (b) encuentra defectos después de que existen, en vez de prevenirlos sistemáticamente en el momento de la integración. (d) ofrece un lugar donde probar, pero por sí solo no aporta protocolo alguno sobre qué se prueba ni qué significa aprobar.'
  },
  {
    id: 'cpy-mod-009', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística preparó datos para un modelo que pronosticará volúmenes en tres líneas de servicio. La evaluación muestra que los datos son sólidos para dos líneas, pero la línea más nueva tiene un historial escaso y poco representativo. El negocio quiere valor de pronóstico cuanto antes. ¿Qué debe decidir el director del proyecto de IA en el punto de control de preparación de datos?',
    opciones: [
      { id: 'a', texto: 'Rellenar la línea más nueva con registros fabricados para que las tres avancen juntas.' },
      { id: 'b', texto: 'Aprobar el entrenamiento para las tres líneas, ya que dos están bien soportadas.' },
      { id: 'c', texto: 'Detener el esfuerzo completo hasta que maduren los datos de la línea más nueva.' },
      { id: 'd', texto: 'Aprobar el entrenamiento acotado a las líneas bien soportadas, con un plan de remediación documentado para la tercera.' }
    ],
    correctas: ['d'],
    explicacion: 'La decisión de preparación puede acotarse, y aprobar el entrenamiento de las dos líneas bien soportadas mientras se documenta un plan de remediación para la escasa entrega valor de negocio ahora sin entrenar un modelo sobre datos que se sabe no representativos. (b) despacha a sabiendas pronósticos poco confiables para la línea más nueva. (c) retiene el valor que los datos ya preparados pueden sostener. (a) fabrica registros que no fueron generados ni validados contra patrones reales, lo que crea falsa confianza y contamina el historial que esa línea acabará acumulando.'
  },
  {
    id: 'cpy-mod-010', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística entrena un modelo de enrutamiento de vehículos. El equipo de ciencia de datos propone una estrategia que reserva una porción de los datos para la evaluación final y usa el resto en subconjuntos rotativos durante el entrenamiento, para valorar la estabilidad del modelo en distintas porciones del conjunto. Se pide al director del proyecto de IA aprobar el enfoque. ¿Qué debe guiar la decisión?',
    opciones: [
      { id: 'a', texto: 'El enfoque debe rechazarse, porque usar subconjuntos rotativos durante el entrenamiento reduce el total de datos disponibles para aprender.' },
      { id: 'b', texto: 'El enfoque debe diferirse hasta que el equipo demuestre haberlo usado con éxito en un proyecto anterior.' },
      { id: 'c', texto: 'El enfoque debe modificarse para usar todos los datos disponibles en el entrenamiento, de modo que el modelo tenga máxima exposición al conjunto.' },
      { id: 'd', texto: 'El enfoque debe aprobarse, porque se alinea con las prácticas establecidas para evaluar la estabilidad del modelo y prevenir el sobreajuste.' }
    ],
    correctas: ['d'],
    explicacion: 'Supervisar los procesos de validación cruzada y selección de modelos es responsabilidad del director al gestionar el entrenamiento, y el enfoque descrito —subconjuntos rotativos más un conjunto reservado aparte para la evaluación final— es una técnica estándar para valorar estabilidad y evitar el sobreajuste. (a) malinterpreta el propósito de la técnica, que es producir un modelo que generalice más allá del conjunto de entrenamiento. (b) agrega una compuerta innecesaria a una metodología bien establecida. (c) elimina la posibilidad de hacer una evaluación final imparcial.'
  },
  {
    id: 'cpy-mod-011', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística construye un modelo automatizado de optimización de rutas. El director del proyecto de IA agenda una revisión de calidad tras completarse el primer candidato. Durante la revisión, dos integrantes reportan hallazgos contradictorios: uno sostiene que el modelo supera todos los umbrales de exactitud, mientras que otro reporta que falla en escenarios límite con cargas parciales. ¿Cuál es la acción más apropiada?',
    opciones: [
      { id: 'a', texto: 'Escalar al patrocinador del proyecto y pedirle que decida en qué informe confiar.' },
      { id: 'b', texto: 'Coordinar una revisión técnica estructurada por pares que examine tanto los resultados exitosos como las fallas en casos límite, antes de decidir el lanzamiento.' },
      { id: 'c', texto: 'Pedir a quien reportó las fallas que vuelva a probar usando solo escenarios estándar, para ver si la falla desaparece.' },
      { id: 'd', texto: 'Aceptar el informe positivo de exactitud y pasar el modelo a producción para cumplir la fecha comprometida.' }
    ],
    correctas: ['b'],
    explicacion: 'Coordinar una revisión por pares que examine ambos conjuntos de resultados es la acción de aseguramiento de calidad que corresponde: asegura que los hallazgos contradictorios se resuelvan mediante validación técnica documentada y no ignorando uno de los informes. (d) evade el proceso de calidad y arriesga liberar un modelo que falla en casos límite reales con cargas parciales. (c) no es una investigación neutral: elimina selectivamente la evidencia de falla. (a) trata un conflicto de validación técnica como una decisión de gestión, algo inapropiado antes de resolver la cuestión técnica.'
  },
  {
    id: 'cpy-mod-012', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una analítica construye un modelo de categorización de transacciones. El director del proyecto de IA nota que la práctica actual permite a los científicos de datos empujar código del modelo directamente al entorno compartido de entrenamiento sin ningún paso de revisión. Dos corridas recientes produjeron resultados inesperados que luego se rastrearon a cambios de código sin registrar. ¿Qué control de aseguramiento de calidad debe establecer?',
    opciones: [
      { id: 'a', texto: 'Mover todo el entrenamiento a un entorno de solo lectura, para que los científicos de datos no puedan modificar código durante las corridas.' },
      { id: 'b', texto: 'Asegurar la adherencia a estándares de codificación y buenas prácticas implementando un paso de revisión de código antes de que los cambios entren al entorno compartido de entrenamiento.' },
      { id: 'c', texto: 'Pedir a los científicos de datos que confirmen verbalmente en la reunión diaria que su código está listo antes de subirlo.' },
      { id: 'd', texto: 'Exigir que el equipo de ciencia de datos envíe un correo al director del proyecto antes de cada corrida, para aprobación manual.' }
    ],
    correctas: ['b'],
    explicacion: 'Asegurar la adherencia a estándares de codificación mediante una revisión antes de que los cambios lleguen al entorno compartido ataca la causa raíz: código sin revisar que llega al entorno común y produce resultados de entrenamiento impredecibles. (d) crea un cuello de botella con el director y no aporta la revisión técnica necesaria para detectar problemas de código. (a) impide modificaciones durante las corridas, pero también bloquea actualizaciones legítimas y no ofrece mecanismo de revisión antes de promover cambios. (c) es informal y no constituye un proceso de revisión verificable ni documentado.'
  },
  {
    id: 'cpy-mod-013', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de viajes valida datos de reservas preprocesados antes de entrenar un modelo de cancelaciones. Los controles por muestreo revelan que el paso de preprocesamiento interpretó mal muchos formatos internacionales de fecha, desplazando en silencio las fechas de salida. El equipo argumenta que la mayoría de los registros no está afectada. ¿Qué debe decidir el director del proyecto de IA?',
    opciones: [
      { id: 'a', texto: 'Continuar, porque la mayoría de los registros se interpretó correctamente.' },
      { id: 'b', texto: 'Retener la decisión de preparación y devolver los datos para corrección y reverificación.' },
      { id: 'c', texto: 'Escalar al patrocinador para que acepte el defecto como un riesgo conocido.' },
      { id: 'd', texto: 'Pedir al equipo de modelado que compense las fechas erróneas durante el entrenamiento.' }
    ],
    correctas: ['b'],
    explicacion: 'Validar los resultados de la transformación es el propósito de este punto de control, y un defecto sistemático y conocido de interpretación significa que los datos no están listos: corresponde arreglar la transformación y reverificar antes de entrenar. (a) sigue entrenando el modelo con fechas de salida silenciosamente corrompidas que distorsionarán los patrones temporales. (d) no es confiable —los equipos de modelado no pueden compensar entradas corruptas— y esconde un defecto de datos dentro de la lógica del modelo. (c) reserva la aceptación de riesgo del patrocinador para compensaciones genuinas de negocio, no para saltarse la corrección de un error de transformación reparable.'
  },
  {
    id: 'cpy-mod-014', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una fabricante de componentes despliega un modelo de mantenimiento predictivo para equipos de manufactura. Durante una revisión de calidad, el director del proyecto de IA encuentra que las métricas de desempeño solo se capturan al final de las corridas completas de entrenamiento, de modo que los problemas descubiertos tarde obligan a descartar días de cómputo. Un integrante sugiere agregar puntos de control intermedios durante el entrenamiento. ¿Qué debe hacer el director?',
    opciones: [
      { id: 'a', texto: 'Diferir la decisión al equipo de infraestructura, porque programar puntos de control es una cuestión de infraestructura.' },
      { id: 'b', texto: 'Rechazar la sugerencia, porque agregar puntos de control hará más lento el entrenamiento y alargará el cronograma.' },
      { id: 'c', texto: 'Aceptar la sugerencia solo si el equipo puede garantizar que los puntos de control no alterarán los pesos finales del modelo.' },
      { id: 'd', texto: 'Indicar al equipo que implemente monitoreo intermedio de las métricas de desempeño durante el desarrollo y las pruebas, y ajustar el protocolo de pruebas en consecuencia.' }
    ],
    correctas: ['d'],
    explicacion: 'Monitorear las métricas de desempeño durante el desarrollo y las pruebas es una responsabilidad de calidad del director, y los puntos de control intermedios permiten detectar problemas temprano y evitar descartar grandes volúmenes de cómputo, lo que mejora a la vez la calidad y la eficiencia de recursos. (b) prioriza la velocidad de entrenamiento sobre el control de calidad, un intercambio equivocado para un sistema de manufactura en producción. (c) confunde el registro de puntos de control con una interferencia en el entrenamiento, que no es la preocupación real. (a) saca al director de una decisión de calidad que está dentro de su ámbito de supervisión.'
  },
  {
    id: 'cpy-mod-015', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística prepara datos para un modelo de predicción de retrasos de embarque. El equipo de ciencia de datos propone derivar varias variables nuevas de los campos crudos de marca de tiempo, incluidos el día de la semana, un indicador de temporada alta y un índice de fiabilidad del transportista calculado a partir de registros históricos. El director del proyecto de IA debe coordinar y hacer seguimiento de ese trabajo. ¿Qué fase de preparación de datos representa?',
    opciones: [
      { id: 'a', texto: 'Normalización de datos, que ajusta la escala de los campos numéricos existentes.' },
      { id: 'b', texto: 'Generación de datos sintéticos, que crea registros artificiales para complementar los datos reales.' },
      { id: 'c', texto: 'Validación cruzada, que particiona los datos en subconjuntos de entrenamiento y evaluación.' },
      { id: 'd', texto: 'Ingeniería de variables, que deriva nuevas variables predictivas a partir de los datos crudos existentes.' }
    ],
    correctas: ['d'],
    explicacion: 'La ingeniería de variables deriva nuevas variables predictivas de los datos crudos existentes —calcular el día de la semana desde una marca de tiempo o un índice de fiabilidad desde el historial del transportista—, y el papel del director es coordinar y hacer seguimiento de que esa lógica de derivación quede documentada y sea reproducible. (a) ajusta la escala de campos numéricos existentes y no crea variables nuevas. (b) produce registros artificiales en vez de derivar columnas nuevas de datos reales. (c) particiona los datos para entrenar y evaluar, y es un paso de evaluación del modelo, no una actividad de transformación.'
  },
  {
    id: 'cpy-mod-016', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una red de salud evalúa un modelo de puntuación de riesgo pensado para marcar pacientes con riesgo de reingreso dentro de los treinta días. El modelo completó las pruebas y el director del proyecto realiza la revisión final antes de recomendar la operacionalización. La exactitud sobre el conjunto de prueba reservado cumple el umbral acordado, pero la documentación de requisitos de infraestructura de despliegue está incompleta y no se han redactado los manuales operativos. ¿Qué debe concluir?',
    opciones: [
      { id: 'a', texto: 'Aprobar el despliegue bajo una exención condicional y hacer que el equipo complete la documentación durante la primera semana en producción.' },
      { id: 'b', texto: 'Emitir una decisión de no avanzar y exigir documentación completa de infraestructura de despliegue y manuales operativos antes de aprobar.' },
      { id: 'c', texto: 'Aprobar de inmediato la operacionalización completa, porque la métrica de exactitud satisface el criterio de éxito acordado.' },
      { id: 'd', texto: 'Transferir la responsabilidad de la documentación al equipo de operaciones de TI y proceder con el cierre del proyecto.' }
    ],
    correctas: ['b'],
    explicacion: 'Verificar la preparación del modelo para la decisión de avance o detención exige evaluar la preparación del despliegue —incluidos los requisitos de infraestructura y la validación de los procedimientos operativos—, no solo las métricas de desempeño: una documentación de infraestructura incompleta y la ausencia de manuales significan que el modelo no está operativamente listo. (c) aprueba solo por exactitud e ignora la lista completa de verificación de preparación. (a) introduce riesgo operativo y anula el propósito de la compuerta previa al despliegue. (d) abandona la responsabilidad del director sobre la validación de preparación antes del traspaso.'
  },
  {
    id: 'cpy-mod-017', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una logística entrena un modelo de optimización de rutas. El ingeniero de calidad reporta que las construcciones recientes producen salidas inconsistentes aunque los datos de entrada parecen no haber cambiado. El director del proyecto de IA sospecha que el problema nace de cambios no controlados en los parámetros del modelo entre corridas. ¿Qué acción ataca la causa raíz?',
    opciones: [
      { id: 'a', texto: 'Pedir al ingeniero de calidad que inspeccione manualmente las salidas tras cada construcción para detectar futuras inconsistencias.' },
      { id: 'b', texto: 'Indicar al equipo de ciencia de datos que vuelva a ejecutar la última construcción tres veces y acepte el resultado si dos de las tres coinciden.' },
      { id: 'c', texto: 'Implementar protocolos de prueba del modelo que exijan registrar todas las configuraciones de parámetros y los identificadores de versión de cada corrida de entrenamiento.' },
      { id: 'd', texto: 'Revertir el modelo a la última construcción válida conocida y detener todo entrenamiento adicional hasta auditar el pipeline de datos.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer protocolos de prueba e implementar gestión de configuración de versiones y parámetros ataca directamente la causa raíz de las salidas inconsistentes provocadas por cambios de parámetros sin control: registrando cada configuración e identificador de versión, el equipo puede rastrear el origen de la variación y asegurar la reproducibilidad. (b) enmascara la inestabilidad de fondo seleccionando el resultado mayoritario en vez de corregirla. (d) es un parche de corto plazo que no previene la recurrencia. (a) identifica problemas después del hecho, pero no controla los parámetros que causan la inconsistencia.'
  },
  {
    id: 'cpy-mod-018', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El director de proyecto de IA de una aseguradora supervisa un modelo de detección de fraude. Tras la primera ronda de entrenamiento, los resultados de evaluación muestran un desempeño aceptable sobre el conjunto de prueba general, pero el equipo advierte que han estado entrenando con tres versiones distintas del mismo conjunto de datos, porque el pipeline se actualizó dos veces durante el sprint. El director necesita identificar qué corrida produjo el modelo evaluado. ¿Qué falla de proceso revela esto?',
    opciones: [
      { id: 'a', texto: 'Capacidad de cómputo insuficiente, que provocó que el pipeline produjera salidas inconsistentes.' },
      { id: 'b', texto: 'Ausencia de versionado de los datos de entrenamiento, que hace imposible rastrear los resultados evaluados hasta un estado de datos específico.' },
      { id: 'c', texto: 'Falta de un proceso de revisión por pares, que habría detectado las actualizaciones del pipeline antes de que comenzara el entrenamiento.' },
      { id: 'd', texto: 'Documentación faltante de hiperparámetros, que habría identificado qué corrida de entrenamiento se usó para la evaluación.' }
    ],
    correctas: ['b'],
    explicacion: 'La incapacidad de rastrear los resultados de evaluación hasta una versión específica del conjunto revela la ausencia de versionado de datos de entrenamiento: sin ese seguimiento, el director no puede determinar qué estado de datos produjo el modelo evaluado, lo que vuelve los resultados no auditables. (a) provoca fallas de desempeño o de ejecución, no ambigüedad en la procedencia del conjunto. (d) dificultaría reproducir la configuración de una corrida, pero la falla central de trazabilidad aquí está en el nivel de la versión de datos. (c) podría atrapar cambios de código, pero no sustituye un versionado automático que registre qué versión del conjunto se usó en cada experimento.'
  },

  // ── Operacionalizar la solución ───────────────────────────────────────────

  {
    id: 'cpy-ope-006', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una analítica provee inteligencia de mercado con IA a firmas financieras medianas. El director del programa define la cadencia de reporte del tablero de desempeño del modelo, desplegado hace cuatro meses. El equipo de ciencia de datos quiere informes internos semanales, mientras que los interesados del lado cliente quieren resúmenes ejecutivos mensuales. ¿Cuál es el enfoque más apropiado?',
    opciones: [
      { id: 'a', texto: 'Entregar los registros crudos de desempeño directamente a ambas audiencias y dejar que cada grupo extraiga la información que necesita.' },
      { id: 'b', texto: 'Limitar el reporte al equipo de ciencia de datos y pedirle que comunique a los clientes los hallazgos relevantes cuando corresponda.' },
      { id: 'c', texto: 'Establecer artefactos de reporte separados en cadencias distintas: informes técnicos detallados para el equipo interno y resúmenes ejecutivos traducidos para los interesados cliente.' },
      { id: 'd', texto: 'Estandarizar un único informe mensual compartido con todos los interesados, para reducir la carga de reporte.' }
    ],
    correctas: ['c'],
    explicacion: 'Establecer artefactos separados en la cadencia que cada audiencia necesita es la responsabilidad del director: generar informes regulares de desempeño para los interesados y, a la vez, sostener el monitoreo técnico interno. (d) satisface la cadencia del cliente pero deja al equipo interno sin la visibilidad semanal que necesita para detectar problemas temprano. (a) no cumple la función de traducción y comunicación que corresponde al director. (b) elimina la rendición de cuentas estructurada que el director debe mantener.'
  },
  {
    id: 'cpy-ope-007', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una clínica de imágenes desplegó con éxito un modelo de análisis de imágenes en su flujo de radiología. Durante la primera semana, los radiólogos reportan que las salidas del modelo son más lentas de lo esperado en las horas pico de la mañana. El director del proyecto de IA debe determinar si se trata de un problema transitorio o de una falla estructural del despliegue. ¿Cuál es el siguiente paso más apropiado?',
    opciones: [
      { id: 'a', texto: 'Revertir el modelo de inmediato y volver a la revisión manual de imágenes.' },
      { id: 'b', texto: 'Notificar a todos los radiólogos que el sistema no estará disponible hasta completar una actualización de hardware.' },
      { id: 'c', texto: 'Reentrenar el modelo sobre un conjunto reducido para disminuir el tiempo de inferencia.' },
      { id: 'd', texto: 'Monitorear las métricas de desempeño del sistema y analizar los patrones de carga antes de escalar al equipo técnico.' }
    ],
    correctas: ['d'],
    explicacion: 'Monitorear las métricas y analizar los patrones de carga es el primer paso correcto porque distingue un problema transitorio de carga pico de un problema estructural de infraestructura, y permite decidir con información antes de escalar o actuar. (a) retiraría una herramienta funcional sin diagnóstico y sin evidencia de que la causa raíz lo justifique. (b) anuncia indisponibilidad de forma preventiva y perturba la operación clínica sin justificación confirmada. (c) cambia el artefacto mismo y exigiría un ciclo completo de reevaluación, una respuesta inapropiada para lo que puede ser un asunto de escalamiento de infraestructura.'
  },
  {
    id: 'cpy-ope-008', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista de artículos para exteriores lanza un modelo de reposición de inventario con IA en su red de almacenes. El director del proyecto de IA está cerrando el plan de despliegue. El patrocinador pregunta si el plan incluye un paso de validación que confirme que el modelo se desempeña como se espera después de la puesta en marcha, antes de que se asuma plena confianza en producción. ¿Qué debe confirmar el director que está en el plan?',
    opciones: [
      { id: 'a', texto: 'Un paso de verificación posterior al despliegue con criterios de aceptación definidos, antes de que el modelo sea la base de las decisiones de reposición en producción.' },
      { id: 'b', texto: 'Un periodo de observación de seis meses durante el cual el modelo corre en paralelo pero todas las decisiones de reposición siguen siendo manuales.' },
      { id: 'c', texto: 'Un cálculo de retorno de la inversión presentado al patrocinador dentro de los treinta días posteriores al despliegue.' },
      { id: 'd', texto: 'Una encuesta a los gerentes de almacén distribuida un mes después de la puesta en marcha.' }
    ],
    correctas: ['a'],
    explicacion: 'Un paso de verificación posterior al despliegue con criterios de aceptación definidos es el elemento correcto, porque gestionar la elaboración del plan de despliegue exige establecer listas de verificación y criterios de validación, y confirmar el desempeño del modelo antes de asumir plena confianza en producción es justamente el propósito de esa verificación. (b) es excesivamente conservador y demora la realización de valor sin una razón de gobernanza. (d) es una métrica de adopción útil, pero no la validación técnica que el patrocinador pregunta. (c) es un entregable de reporte del proyecto, no una actividad de validación del despliegue.'
  },
  {
    id: 'cpy-ope-009', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica planifica el despliegue de un modelo de detección de eventos adversos. El oficial de cumplimiento pregunta al director del proyecto de IA si existe una lista de verificación de despliegue que permita al equipo confirmar cada compuerta antes de la puesta en marcha. El director encuentra que el plan actual solo tiene un cronograma de hitos. ¿Qué debe agregar al plan?',
    opciones: [
      { id: 'a', texto: 'Un anuncio de marketing que informe al personal clínico que llega una nueva herramienta de IA.' },
      { id: 'b', texto: 'Un resumen comparativo de proveedores que justifique el proveedor de nube elegido para el alojamiento.' },
      { id: 'c', texto: 'Una solicitud de extender el cronograma general del proyecto dos semanas para permitir más entrenamiento del modelo.' },
      { id: 'd', texto: 'Una lista de verificación de despliegue con criterios de validación que deben confirmarse antes de que avance cada etapa de la puesta en marcha.' }
    ],
    correctas: ['d'],
    explicacion: 'Una lista de verificación estructurada con criterios de validación explícitos convierte cada etapa de la puesta en marcha en una compuerta verificada en lugar de una finalización supuesta, que es lo que el oficial de cumplimiento necesita para confirmar la preparación en cada punto de decisión. (a) sirve al plan de comunicación, pero no crea el mecanismo de verificación solicitado. (b) es un artefacto de compras, irrelevante para confirmar la preparación etapa por etapa. (c) atiende la calidad del modelo, no la ausencia de un proceso de verificación del despliegue.'
  },
  {
    id: 'cpy-ope-010', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una minorista prepara la liberación de un modelo de recomendación de reposición de góndolas a sus tiendas. En lanzamientos tecnológicos anteriores, la decisión de puesta en marcha se tomaba en una reunión según el ánimo general de la sala, y dos lanzamientos debieron revertirse. El director del proyecto de IA quiere una forma más confiable de decidir la preparación. ¿Qué debe crear?',
    opciones: [
      { id: 'a', texto: 'Una regla que exija acuerdo unánime de todos los líderes de equipo para la puesta en marcha.' },
      { id: 'b', texto: 'Un formulario de firma que el patrocinador complete en la reunión de puesta en marcha.' },
      { id: 'c', texto: 'Un informe de exactitud del modelo generado la mañana de la liberación.' },
      { id: 'd', texto: 'Una lista de criterios verificables de preparación que la liberación debe satisfacer.' }
    ],
    correctas: ['d'],
    explicacion: 'Una lista de criterios verificables convierte la decisión de puesta en marcha en una evaluación objetiva de evidencia, que es la práctica de planificación del despliegue que previene lanzamientos guiados por el ánimo. (b) documenta la decisión, pero no mejora la base sobre la que se toma. (a) sigue descansando en opiniones y da a cualquier líder un veto sin explicación. (c) cubre una dimensión técnica e ignora la integración, la preparación del soporte y los controles operativos que también determinan si una liberación debe proceder.'
  },
  {
    id: 'cpy-ope-011', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una farmacéutica despliega un modelo de detección de eventos adversos que analiza datos de ensayos clínicos. El plan incluye un lanzamiento por fases que comienza con dos sitios de ensayo antes de expandirse a los doce. Tras la fase limitada en los dos primeros sitios, el director del proyecto de IA recibe datos de desempeño que muestran que el modelo funciona bien en un sitio pero rinde significativamente por debajo en el otro. ¿Cuál es el siguiente paso más apropiado?',
    opciones: [
      { id: 'a', texto: 'Revertir el modelo en el sitio de bajo desempeño y cancelar el despliegue más amplio.' },
      { id: 'b', texto: 'Reemplazar el sitio de bajo desempeño por otro sitio piloto distinto y reiniciar el lanzamiento por fases.' },
      { id: 'c', texto: 'Analizar las diferencias entre los dos sitios piloto para identificar causas raíz antes de expandir el lanzamiento.' },
      { id: 'd', texto: 'Proceder con el lanzamiento completo a los doce sitios para reunir más datos antes de sacar conclusiones.' }
    ],
    correctas: ['c'],
    explicacion: 'Analizar las diferencias entre ambos sitios para identificar causas raíz antes de expandir es lo correcto, porque el lanzamiento por fases está diseñado precisamente para detectar variabilidad de desempeño antes de un despliegue amplio, y expandir sin entender el bajo rendimiento escalaría el problema. (d) descarta el valor informativo del enfoque por fases. (a) es prematuro antes de completar el análisis de causa raíz. (b) esquiva el problema en lugar de resolverlo y dejaría la causa subyacente sin atender en todos los sitios que compartan esas condiciones.'
  },
  {
    id: 'cpy-ope-012', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una biotecnológica lanza un modelo de aprendizaje automático que predice la toxicidad de compuestos para apoyar su cadena de cribado de fármacos. Tres días antes de la puesta en marcha, el equipo de TI informa que el aprovisionamiento de accesos de usuario para el entorno de producción no se ha completado. El director del proyecto de IA debe actuar. ¿Cuál es la respuesta más apropiada?',
    opciones: [
      { id: 'a', texto: 'Coordinar de inmediato con TI para completar el aprovisionamiento de accesos y validar las configuraciones de seguridad antes de proceder.' },
      { id: 'b', texto: 'Hacer que el equipo de ciencia de datos despliegue el modelo con sus credenciales de desarrollo existentes.' },
      { id: 'c', texto: 'Otorgar acceso temporal de administrador a todos los investigadores para no bloquear la puesta en marcha.' },
      { id: 'd', texto: 'Postergar el aprovisionamiento de accesos hasta después de confirmar que el modelo es estable en producción.' }
    ],
    correctas: ['a'],
    explicacion: 'Coordinar con TI para completar el aprovisionamiento y validar las configuraciones de seguridad es la respuesta correcta, porque unos controles de acceso sin resolver son a la vez un bloqueador del despliegue y un riesgo de seguridad que debe cerrarse antes de la puesta en marcha. (c) viola los principios de mínimo privilegio y crea exposición de auditoría. (d) deja el sistema indebidamente asegurado durante su primer periodo operativo. (b) usar credenciales de desarrollo rompe el aislamiento entre entornos, lo que es una violación de gobernanza y de seguridad.'
  },
  {
    id: 'cpy-ope-013', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa de artículos deportivos lanzó a producción su modelo de predicción de inventario un lunes por la mañana. Para el martes por la tarde, el equipo de compras reportó que el modelo emitía cantidades de reposición negativas para varias líneas de producto, una condición que nunca apareció durante las pruebas. El director del proyecto de IA es responsable de coordinar la respuesta. ¿Qué debe hacer primero?',
    opciones: [
      { id: 'a', texto: 'Emitir un informe completo de incidente a la alta dirección antes de investigar la causa técnica.' },
      { id: 'b', texto: 'Detener el próximo sprint del equipo de despliegue y reasignarlo a otros proyectos.' },
      { id: 'c', texto: 'Pedir al equipo de compras que anule manualmente los valores negativos y siga usando el modelo.' },
      { id: 'd', texto: 'Activar el procedimiento documentado de reversión para restaurar el sistema de inventario anterior mientras se investiga el defecto.' }
    ],
    correctas: ['d'],
    explicacion: 'Cuando un modelo en producción genera salidas que podrían impulsar decisiones de compra dañinas, la primera prioridad es estabilizar la operación activando la reversión, que restaura un estado bueno conocido mientras el trabajo de causa raíz avanza con seguridad. (a) demora la acción protectora que la reversión está diseñada para brindar. (b) aparta a las personas mejor posicionadas para diagnosticar y corregir el defecto. (c) mantiene en producción un modelo poco confiable y traslada la carga de corrección a personas que no deberían compensar una falla técnica.'
  },
  {
    id: 'cpy-ope-014', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un grupo de medios redacta el plan de despliegue de un modelo de moderación de contenidos que filtrará envíos de usuarios en tres plataformas. El oficial de seguridad advierte que el plan no aborda cómo se configurarán y verificarán los permisos de acceso de usuario antes de que el modelo se active. El director del proyecto de IA lidera la revisión del plan. ¿Qué debe agregarse?',
    opciones: [
      { id: 'a', texto: 'Un paso de aprovisionamiento y verificación de accesos de usuario que debe completarse antes de que el modelo se active.' },
      { id: 'b', texto: 'Una encuesta posterior al despliegue para medir la satisfacción de los moderadores con la nueva herramienta.' },
      { id: 'c', texto: 'Una sección sobre la técnica de procesamiento de lenguaje natural usada para clasificar el contenido.' },
      { id: 'd', texto: 'Un análisis competitivo que compare el enfoque elegido con las alternativas del sector.' }
    ],
    correctas: ['a'],
    explicacion: 'Incluir un paso de aprovisionamiento y verificación en el plan de despliegue asegura que los usuarios correctos tengan los permisos apropiados confirmados antes de que el modelo se active, lo que atiende directamente la preocupación del oficial de seguridad. (c) documenta la técnica y pertenece a la documentación del modelo, no al plan de despliegue, cuyo foco es la preparación operativa. (b) es una herramienta de retroalimentación posterior y no previene una configuración errónea de permisos en la puesta en marcha. (d) corresponde a la fase de selección de la solución y es ajeno a la preparación de seguridad del despliegue.'
  },
  {
    id: 'cpy-ope-015', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aerolínea documentó un procedimiento de respaldo que conmuta la programación de tripulaciones desde su optimizador con IA a un proceso manual si el modelo falla. El procedimiento se escribió durante la planificación del despliegue y no se ha tocado desde entonces. El director del proyecto de IA debe dar a la dirección la garantía de que la aerolínea puede realmente ejecutarlo. ¿Qué debe hacer?',
    opciones: [
      { id: 'a', texto: 'Obtener confirmación escrita del proveedor de la plataforma de que la conmutación tendrá éxito.' },
      { id: 'b', texto: 'Esperar a una falla real del modelo para confirmar que el procedimiento funciona tal como está escrito.' },
      { id: 'c', texto: 'Correr un ejercicio programado que conmute al proceso manual en condiciones controladas.' },
      { id: 'd', texto: 'Circular el procedimiento escrito a todo el personal de programación de tripulaciones para su acuse de recibo.' }
    ],
    correctas: ['c'],
    explicacion: 'Probar el procedimiento mediante un ejercicio controlado es la única forma de demostrar que el personal, las herramientas y los pasos realmente funcionan, y la validación periódica de los procedimientos de recuperación es exactamente lo que los mantiene ejecutables. (d) confirma que la gente recibió el documento, no que pueda ejecutarlo bajo presión. (b) convierte la primera ejecución en una apuesta con operaciones de vuelo. (a) cubre el comportamiento de conmutación de la plataforma, pero no dice nada sobre si el proceso manual propio de la aerolínea funciona.'
  },
  {
    id: 'cpy-ope-016', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una aseguradora opera un modelo de detección de fraude que marca siniestros sospechosos para revisión humana. Una migración mayor de base de datos está planificada para el mes próximo y dejará temporalmente fuera de línea la base principal de siniestros. El director del proyecto de IA debe actualizar el plan de contingencia para esa interrupción planificada. ¿Qué elemento es más crítico agregar?',
    opciones: [
      { id: 'a', texto: 'Un calendario para dar de baja el modelo de detección de fraude hasta verificar que la migración se completó.' },
      { id: 'b', texto: 'Un procedimiento de continuidad del negocio que especifique cómo operará la revisión de fraude si el sistema de IA no puede acceder a la base de siniestros durante la migración.' },
      { id: 'c', texto: 'Una suspensión temporal de la emisión de nuevas pólizas durante la ventana de migración.' },
      { id: 'd', texto: 'Una solicitud al equipo de ciencia de datos para reentrenar el modelo sobre una instantánea de la base antes de la migración.' }
    ],
    correctas: ['b'],
    explicacion: 'Agregar un procedimiento de continuidad que especifique cómo operará la revisión de fraude durante la interrupción planificada es lo correcto, porque la planificación de contingencia incluye crear planes de continuidad para las interrupciones del servicio de IA, y una migración programada es una disrupción conocida y previsible que debe abordarse explícitamente. (c) es una respuesta desproporcionada de negocio ante un cambio operativo de sistema. (d) cambia el artefacto del modelo sin atender el vacío operativo durante la ventana. (a) elimina innecesariamente la detección de fraude en todo el periodo de migración, cuando un procedimiento de continuidad podría mantener el proceso de revisión.'
  },
  {
    id: 'cpy-ope-017', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un laboratorio terminó de desplegar un modelo de marcado de anomalías para equipos de laboratorio. Los integrantes del equipo de proyecto están por ser reasignados a otras iniciativas. El director del proyecto de IA quiere un registro fiel de qué funcionó bien durante el proyecto y qué debería mejorarse la próxima vez. ¿Qué enfoque debe adoptar?',
    opciones: [
      { id: 'a', texto: 'Recoger aportes solo de los científicos de datos, porque son quienes construyeron el modelo.' },
      { id: 'b', texto: 'Escribir la revisión personalmente y de memoria una vez que el equipo haya sido reasignado.' },
      { id: 'c', texto: 'Esperar a que arranque el próximo proyecto de IA y reconstruir entonces los hallazgos.' },
      { id: 'd', texto: 'Realizar una revisión estructurada con todo el equipo multifuncional antes de la reasignación.' }
    ],
    correctas: ['d'],
    explicacion: 'Hacer una revisión estructurada con todo el equipo mientras todos siguen disponibles captura las perspectivas de los roles de datos, ingeniería y negocio antes de que los recuerdos se desdibujen y las personas se dispersen. (a) escucha solo a los científicos de datos y pierde las lecciones de despliegue, obtención de datos y adopción que tienen otros roles. (b) limita el registro a un solo punto de vista y sacrifica detalle. (c) garantiza que las observaciones más frescas y exactas ya se hayan perdido.'
  },
  {
    id: 'cpy-ope-018', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una robótica discontinúa una línea de producto cuyo modelo de predicción de reclamos de garantía sigue corriendo en producción y conserva acceso a datos de clientes. Se pregunta al director del proyecto de IA qué debe pasar con el modelo ahora que su propósito de negocio termina. ¿Qué acción refleja una gestión sana del ciclo de vida?',
    opciones: [
      { id: 'a', texto: 'Retirar el modelo formalmente: archivar sus versiones, documentar la decisión y revocar su acceso a datos.' },
      { id: 'b', texto: 'Transferir el modelo a otro equipo de producto para que le encuentre un uso nuevo.' },
      { id: 'c', texto: 'Eliminar el modelo y sus registros de inmediato para reducir costos de almacenamiento.' },
      { id: 'd', texto: 'Dejar el modelo corriendo sin supervisión, por si la línea de producto regresa.' }
    ],
    correctas: ['a'],
    explicacion: 'Un retiro formal que archiva versiones, registra la decisión de baja y revoca el acceso a datos cierra el ciclo de vida de forma responsable: preserva la trazabilidad y elimina un sistema sin monitoreo que retiene datos de clientes. (d) crea un activo huérfano con acceso vivo a datos y sin dueño, una exposición de gobernanza y seguridad. (c) destruye el historial de auditoría que revisores o reguladores podrían necesitar después. (b) ignora que el modelo se construyó y validó para un uso específico, y una reutilización sin validar aumentaría el riesgo en lugar de reducirlo.'
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA2: PREGUNTAS_CPMAI_EXTRA2 };
