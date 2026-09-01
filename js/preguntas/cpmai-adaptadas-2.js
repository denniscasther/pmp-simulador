/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 2.
 *
 * ⚠️ MISMO ORIGEN Y MISMAS CONDICIONES que `cpmai-adaptadas.js`, pero de la segunda
 *    prueba de práctica. Son las preguntas 80 a 120 (falta la 110, que no se
 *    capturó): 40 en total. Escenarios y opciones son traducción adaptada del
 *    original; las explicaciones están reescritas.
 *
 *    Se publica por decisión explícita del autor del repositorio (2026-08-31).
 *    Borrar este archivo retira la prueba 2 sin tocar nada más: `cpmai.html` lo
 *    carga solo si existe.
 *
 * Etiquetado contra el ECO CPMAI 2025 de `js/cpmai-eco.js`, respetando el dominio
 * y la tarea que declaraba la fuente (Domain I→responsable, 2→negocio, 3→datos,
 * 4→modelos, 5→operacion; «Task N» → índice N-1).
 *
 * Reparto: responsable 10 · datos 10 · negocio 8 · modelos 7 · operacion 5.
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
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA2: PREGUNTAS_CPMAI_EXTRA2 };
