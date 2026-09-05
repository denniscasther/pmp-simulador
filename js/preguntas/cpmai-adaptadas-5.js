/**
 * Banco CPMAI adaptado de material de terceros — prueba de práctica 5.
 * Las 120 preguntas provienen de las capturas aportadas por el autor del
 * repositorio el 2026-09-05 y se publican separadas del banco propio.
 */

const PREGUNTAS_CPMAI_EXTRA5 = [
  {
    id: 'cp5-001', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightwood Energy está lanzando un proyecto de mantenimiento predictivo de IA para la flota de turbinas eólicas. El director del proyecto IA está estableciendo el entorno de trabajo del equipo antes de que lleguen los datos. El equipo incluye ingenieros de datos, científicos de datos y un consultor de modelado de terceros. Los interesados han expresado su preocupación por la sensibilidad de los datos operacionales de la turbina. ¿Qué debería priorizar el director del proyecto IA al configurar el entorno de trabajo?",
    opciones: [
      { id: 'a', texto: "Instalar la biblioteca de modelos el consultor de terceros prefiere en todas las máquinas de equipo" },
      { id: 'b', texto: "Configuración de una unidad compartida pública para que todos los documentos de proyecto sean fácilmente accesibles por cada miembro del equipo" },
      { id: 'c', texto: "Establecer un entorno de desarrollo seguro que ejecute el acceso adecuado al papel de cada miembro del equipo" },
      { id: 'd', texto: "Adquisición de capacidad informática adicional para terminar los trabajos de formación antes del plazo del proyecto" }
    ],
    correctas: ['c'],
    explicacion: "El establecimiento de entornos de desarrollo seguros para los equipos de inteligencia artificial es una responsabilidad fundamental del espacio de trabajo y de la infraestructura, y cuando los datos de turbina operacional son sensibles, la configuración del medio ambiente con controles de acceso adecuados es la prioridad antes de que lleguen los datos. Instalar una biblioteca de modelado preferida es una preferencia de herramientas que no se ocupa de la preocupación de seguridad Comprar cálculos adicionales aborda la velocidad de entrenamiento, no la preocupación de los interesados sobre la sensibilidad de los datos. Un impulso público compartido amplía el acceso a los datos de manera indiscriminada y directa contradice la preocupación de seguridad declarada."
  },
  {
    id: 'cp5-002', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Vanguard Financial está evaluando un modelo de ajuste de crédito antes del despliegue. El director del proyecto lidera el examen final de la preparación El modelo consigue fuertes métricas de rendimiento agregado, pero el análisis de un subteam muestra que el modelo funciona significativamente peor en aplicaciones de un grupo demográfico regional específico. El director del proyecto debe hacer una recomendación de puesta en marcha ¿Cuál es la recomendación más apropiada?",
    opciones: [
      { id: 'a', texto: "Emitir una decisión condicional que permita el despliegue sólo a los grupos demográficos donde el rendimiento es fuerte" },
      { id: 'b', texto: "Ejecute una decisión de go porque las métricas de rendimiento global cumplen el umbral definido" },
      { id: 'c', texto: "Emitir una decisión de ir y planear volver a entrenar el modelo sobre más datos del grupo de infravaloración dentro de seis meses" },
      { id: 'd', texto: "Emitir una decisión ncFgo porque un desempeño desigual en grupos demográficos indica que el modelo no es suficientemente robusto y plantea preocupaciones de equidad que deben resolverse" }
    ],
    correctas: ['d'],
    explicacion: "Verificar la preparación modelo para una puesta en marcha, 'no-go requiere evaluar la robustez modelo y las capacidades de generalización. Un rendimiento notablemente desigual en todos los grupos demográficos es una falla de robustez que significa que el modelo no generaliza de manera fiable a su población total prevista También plantea la equidad de la metodología que requiere que el director del proyecto considere una decisión de no ir a resolver la brecha antes del despliegue es la llamada correcta. La aprobación de métricas agregadas ignora el fallo de rendimiento de distribución, que las puntuaciones agregadas pueden ocultar. Una medida condicional que restringe el despliegue por grupo demográfico crea un acceso discriminatorio e introduce riesgos legales y de reputación Aprobando y planificando un readiestramiento en seis meses despliega un modelo bien conocido en decisiones financieras consiguientes para un período prolongado."
  },
  {
    id: 'cp5-003', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El modelo de predicción de retornos de Ridgeline Apparel logra puntuaciones casi perfectas sobre los datos en los que se entrenó, pero actúa mucho peor en los registros que nunca ha visto. El equipo de ciencia de datos propone enviarlo de todos modos porque las puntuaciones de entrenamiento son tan fuertes. ¿Cómo debe responder el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Promedio los dos sets de puntuación para estimar el rendimiento del mundo real" },
      { id: 'b', texto: "Aceptar la propuesta ya que las puntuaciones de capacitación son las mejores pruebas disponibles" },
      { id: 'c', texto: "Tratar la brecha como overfitting y requerir validación en los datos retenidos para conducir modelo" },
      { id: 'd', texto: "Solicitar más pases de entrenamiento para que las puntuaciones no visibles se pongan al día" }
    ],
    correctas: ['c'],
    explicacion: "Una gran brecha entre el rendimiento de la capacitación y el rendimiento no visto-data es la firma de overfitting, donde el modelo memoriza sus registros de capacitación en lugar de aprender patrones generalizables, por lo que el gerente del proyecto debe requerir validación continua para guiar la revisión Eward un modelo que generaliza. Aceptar puntuaciones de entrenamiento como la mejor evidencia premia la memorización y no predice nada sobre el comportamiento de producción Pasos de entrenamiento adicionales en los mismos datos normalmente profundizan la memorización en lugar de cerrar la brecha. Averaging the two score sets manufactures a number with mo statistical meaning for real-world performance"
  },
  {
    id: 'cp5-004', dominio: 'modelos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestlake Medical está entrenando un modelo de riesgo de readmisión paciente El equipo de ciencias de datos ha estado realizando experimentos durante tres semanas, pero el gerente del proyecto nota que el equipo ha estado formando repetidamente en la misma división de datos sin probar el modelo de datos retenidos El patrocinador pregunta si la exactitud reportada del modelo refleja el rendimiento del mundo real. ¿Qué debe garantizar el director del proyecto que el equipo supervise antes de presentar los resultados al patrocinador?",
    opciones: [
      { id: 'a', texto: "Despliegue inmediato del modelo a la producción para reunir comentarios del mundo real" },
      { id: 'b', texto: "Procesos de validación cruzada y selección de modelos que prueban el rendimiento de los datos que el modelo no tiene" },
      { id: 'c', texto: "Un puntaje de precisión final presentado al patrocinador sin calificación" },
      { id: 'd', texto: "Una comparación de referencia pública para demostrar el modelo supera los promedios de la industria" }
    ],
    correctas: ['b'],
    explicacion: "Supervisar los procesos de validación cruzada y selección de modelos que evalúan el modelo de datos retenidos asegura que la precisión reportada refleja la generalización a casos no vistos, lo que es lo que el patrocinador necesita para confiar en el resultado Una comparación de parámetros públicos puede ser informativa, pero no aborda si este modelo generaliza más allá de la división de formación. Presentar un puntaje de precisión final sin cualificación oculta el riesgo que el patrocinador está preguntando. El despliegue a la producción antes de validar la generalización expone a los pacientes a un modelo poco fiable y es prematuro"
  },
  {
    id: 'cp5-005', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Hartfield Grocers está listo para sacar el historial de transacciones de sus sistemas de almacén en vivo para un modelo de optimización de marcado. El equipo de sistemas de la tienda advierte que las tiradas pesadas durante las horas comerciales podrían retrasar las carriles de salida a través de la cadena. El programa del proyecto tiene extracción a partir de esta semana. ¿Cómo debe proceder el director del proyecto A?",
    opciones: [
      { id: 'a', texto: "Arranque la solicitud de datos hasta que sea demasiado pequeña para afectar las tiendas" },
      { id: 'b', texto: "Construir una réplica completa de la plataforma de transacción antes de extraer cualquier cosa" },
      { id: 'c', texto: "Programar las extracciones con los propietarios de fuentes durante las ventanas de operación Iow-impact" },
      { id: 'd', texto: "Ejecute los extractos durante las horas de trabajo según lo previsto para proteger el cronograma" }
    ],
    correctas: ['c'],
    explicacion: "Ejecutar la extracción de los sistemas identificados es un trabajo de coordinación, y aceptar ventanas de Iow-impact con los propietarios de fuentes obtiene los datos sin dañar las operaciones de la tienda. Ejecutar tiradas pesadas durante las horas de trading protege el horario transfiriendo el costo a los clientes de checkout. La construcción de una réplica completa de la plataforma es un importante proyecto de infraestructura que retrasa la reunión más allá del conflicto que evita. Arrugando la solicitud hasta que sea sacrificios inofensivos el volumen de datos que el modelo necesita para una programación de problemas ya resuelve."
  },
  {
    id: 'cp5-006', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Helix Biffech está llevando a cabo un programa de desarrollo de modelos de predicción de riesgos genómicos que abarca tres años y múltiples versiones de modelos. El administrador del programa necesita asegurarse de que cualquier versión de modelo específica y su conjunto de datos de entrenamiento exacto pueden ser reconstruidos Reguladores o auditores en am, ' punto futuro durante el programa. ¿Qué debe mantener el director del programa?",
    opciones: [
      { id: 'a', texto: "Un sistema de versionado que vincula cada modelo implementado al conjunto de datos de entrenamiento exacto, versión de código y configuración utilizada para producirlo" },
      { id: 'b', texto: "instantáneas trimestrales de los pesos del modelo de producción guardados a un archivo a largo plazo" },
      { id: 'c', texto: "Un directorio compartido donde cada archivo modelo se llama con un número de versión y se guarda después de cada reentrenamiento" },
      { id: 'd', texto: "Un entorno de puesta en escena donde la versión modelo más reciente siempre se conserva antes de ser sobrescrito" }
    ],
    correctas: ['a'],
    explicacion: "Establecer el control de versiones para modelos, datos y procesos de capacitación requiere un sistema que vincule cada modelo implementado al conjunto de datos de entrenamiento exacto, versión de código y configuración, de modo que la versión de ary pueda reconstruirse completamente Un directorio compartido con nombres de archivo numerados de versiones proporciona mínima trazabilidad y no vincula modelos a conjuntos de datos o configuraciones* entorno de estadificación que preserva la versión más reciente antes de la sobreescritura no es una historia de versiones; t conserva solamente la versión anterior. Ouarterly snapshffs capturan el estado modelo a intervalos fijos pero no apoyan la reconstrucción de versiones arbitrarias entre esos intervalos"
  },
  {
    id: 'cp5-007', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Alder Creek Foods fletó un proyecto IA con un objetivo, reduciendo el despojo en sus centros de distribución El patrocinador ha fijado el presupuesto y el recuento. Revisando el proyecto de plan, el director del proyecto IA también encuentra t promete tarjetas de puntuación de proveedores y una capacidad de planificación de rutas que el pequeño equipo no puede entregar dentro de la financiación. ¿Qué debe hacer el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Mantener el plan completo y ampliar el calendario para compensar" },
      { id: 'b', texto: "Trim el trabajo planeado para adaptarse al objetivo de despilfarro y la capacidad fija" },
      { id: 'c', texto: "Solicitar a contratistas externos que proporcionen las capacidades adicionales" },
      { id: 'd', texto: "Reducir el esfuerzo de prueba de calidad para que todas las características puedan adaptarse" }
    ],
    correctas: ['b'],
    explicacion: "Alinear el trabajo a la capacidad objetiva y disponible de Susiness es la disciplina que esta situación exige, ya que la reducción del despilfarro es el objetivo caducado y las capacidades adicionales exceden lo que el equipo financiado puede ofrecer. Extender el cronograma sigue gastando el presupuesto fijo en el trabajo fuera del objetivo La prueba de calidad de corte sacrifica la confiabilidad del núcleo disponible para preservar las características nadie charla. Solicitar contratistas contradice el presupuesto fijo del patrocinador y crece el proyecto en lugar de reorientarlo sobre el goaL"
  },
  {
    id: 'cp5-008', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Green Valley Solar se acerca al final del desarrollo del modelo para un sistema de pronóstico de salida de energía. El director del proyecto A\" programa una reunión de revisión final antes de recomendar el despliegue. El equipo de ciencias de datos presenta métricas de precisión que exceden los criterios de éxito originales, pero el equipo no ha documentado cómo se supervisará el modelo después del despliegue o qué infraestructura es necesaria para servir predicciones. ¿Qué debe verificar el director del proyecto antes de hacer una recomendación de despliegue?",
    opciones: [
      { id: 'a', texto: "Que el patrocinador del proyecto ha expresado verbalmente satisfacción con los resultados de precisión" },
      { id: 'b', texto: "Que los registros de entrenamiento modelo se han archivado en una carpeta compartida para futuras referencias" },
      { id: 'c', texto: "Se ha confirmado la disponibilidad para el despliegue, incluidas las necesidades de infraestructura y los procedimientos operacionales y además de los criterios de rendimiento" },
      { id: 'd', texto: "Que las métricas de precisión se han compartido con todas las partes interesadas por correo electrónico antes de que termine la reunión" }
    ],
    correctas: ['c'],
    explicacion: "Verificar la preparación para el despliegue significa evaluar no sólo el rendimiento modelo frente a los criterios de éxito, sino también si se documentan los requisitos de infraestructura y los procedimientos operacionales, ya que un modelo que funciona bien, pero que cuenta con un plan de monitoreo o infraestructura no puede desplegarse de forma segura. Compartir métricas de precisión con los interesados es una actividad de comunicación, no una verificación de disponibilidad. Patrocinar la satisfacción verbal no sustituye a la infraestructura documentada y la preparación operacional"
  },
  {
    id: 'cp5-009', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Oakfield Agritech está analizando un modelo de predicción de rendimiento de cultivos. El equipo está debatiendo si el modelo necesita lecturas de sensores por minuto o resúmenes diarios, y cuántas temporadas crecientes de historia a o Pulain. ¿Cómo debe resolver el debate el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Definir la cobertura temporal y la granularidad que el caso de uso de la predicción realmente requiere" },
      { id: 'b', texto: "Coincide con cualquier nivel de detalle de las exportaciones de la plataforma sensorial heredada por defecto" },
      { id: 'c', texto: "Que el presupuesto de almacenamiento dicta tanto la granularidad como la profundidad histórica" },
      { id: 'd', texto: "Recopilación en la mayor granularidad disponible así que ninguna opción futura está cerrada" }
    ],
    correctas: ['a'],
    explicacion: "Definir la cobertura temporal y la granularidad del caso de uso de la predicción justifica el requisito en lo que debe aprender el modelo, que es cómo deben especificarse los requisitos de datos. Recopilar en los mejores defectos de granularidad disponibles a un coste máximo y carga de procesamiento sin evidencia el detalle añade valor predictivo. Dejar que el presupuesto de almacenamiento decida invertir la lógica dejando que las limitaciones de infraestructura definan la ciencia. Coincidiendo con la exportación predeterminada de la plataforma heredada confunde lo que un sistema emite con lo que la solución necesita"
  },
  {
    id: 'cp5-010', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestmoor Logistics está finalizando el plan de despliegue para un modelo de optimización de rutas. El equipo de planificación ha redactado requisitos de infraestructura y un cronograma de puesta en marcha, pero no ha convenido en qué hacer si el modelo produce recomendaciones erróneas de enrutamiento después de que va en directo. El director del proyecto IA está revisando el plan antes del inicio de sesión ¿Qué elemento crítico falta?",
    opciones: [
      { id: 'a', texto: "Un certificado de aceptación de usuario firmado de cada operador regional" },
      { id: 'b', texto: "Una lista de marcos de código abierto evaluados y rechazados durante la selección de modelos" },
      { id: 'c', texto: "Procedimientos de devolución documentados y medidas para imprevistos para fallos operacionales" },
      { id: 'd', texto: "Una explicación detallada de cómo el algoritmo de arranque de gradiente fue sintonizado" }
    ],
    correctas: ['c'],
    explicacion: "Los planes de despliegue deben incluir procedimientos definidos de retroceso y acciones de contingencia para fallos, de manera que el equipo pueda responder decisivamente si el modelo produce productos dañinos en la producción en lugar de improvisar bajo presión Documentar decisiones de ajuste de algoritmos es relevante para la gobernanza modelo pero no constituye el plan de respuesta para un fracaso en vivo. Los certificados de aceptación del usuario de cada operador son una actividad de adopción, no una red de seguridad que activa si los productos van mal. La inclusión de marcos rechazados es una documentación histórica útil pero no proporciona protección operacional después de que el modelo sea en directo"
  },
  {
    id: 'cp5-011', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Redwood Analytics está a mitad de camino a través de un proyecto A\" construyendo un modelo de predicción del cliente churn. El director del proyecto IA se da cuenta de que el equipo ha estado desarrollando y probando múltiples versiones de modelos sin mantener un registro estructurado de la cual la versión se entrenó en qué conjunto de datos, qué parámetros se utilizaron, o cuando se creó cada versión. Una auditoría reglamentaria podría desencadenar en cualquier momento. ¿Qué debe establecer el director del proyecto inmediatamente?",
    opciones: [
      { id: 'a', texto: "Una congelación modelo final que detiene nuevos cambios para que la versión actual pueda ser documentada en su estado actual antes de la auditoría" },
      { id: 'b', texto: "Una reunión semanal de equipo donde los desarrolladores resumieron verbalmente lo que cambió en el modelo desde la semana anterior" },
      { id: 'c', texto: "Control de versiones para modelos, datos y procesos de formación para que cada iteración sea rastreable y se pueda reconstruir el historial de desarrollo completo" },
      { id: 'd', texto: "Una norma de equipo que requiere que los desarrolladores añadan comentarios a su código explicando lo que cambió en cada nueva versión modelo" }
    ],
    correctas: ['c'],
    explicacion: "Establecer el control de versiones para modelos, datos y procesos de formación es la acción correcta porque crea registros trazables que pueden reconstruir el historial de desarrollo completo, lo que es esencial para la preparación de auditorías regulatorias Los comentarios del código mejoran la legibilidad de códigos pero son informales, inconsistentes y no están diseñados para capturar lineamiento de versión modelo a través de experimentos. Los resúmenes verbales semanales crean un registro muy duradero y no pueden producirse para una auditoría reglamentaria. Freezing el modelo documenta el estado actual pero ignora todas las versiones anteriores y no aborda la brecha sistémica en trazabilidad."
  },
  {
    id: 'cp5-012', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "NorthSay Fisheries está iniciando una iniciativa de prefabricación de capturas a partir de cuadernos de bitácora, alimentaciones de boya y registros de mercado El director del proyecto IA quiere que el equipo tenga una base objetiva para aceptar o rechazar datos entrantes más adelante en el proyecto. Qué debe establecerse ahora-7",
    opciones: [
      { id: 'a', texto: "Una decisión de establecer umbrales de aceptación después de los resultados del modelo temprano revela lo que importa" },
      { id: 'b', texto: "Un acuerdo para adoptar cualquier umbral de calidad que los sistemas fuente ya utilizan" },
      { id: 'c', texto: "Un plan para juzgar cada conjunto de datos sobre sus méritos una vez que llegue físicamente" },
      { id: 'd', texto: "Normas de calidad y criterios de aceptación redactados en los requisitos de datos" }
    ],
    correctas: ['d'],
    explicacion: "Escribir normas de calidad y criterios de aceptación en los requisitos de datos da al equipo un patrón objetivo acordado antes de que lleguen los datos, que es precisamente la forma en que deben definirse los datos necesarios. A juzgar por cada conjunto de datos sobre sus méritos a la llegada invita a llamadas inconsistentes y negociables hechas bajo presión de entrega Adoptar los propios umbrales de los sistemas fuente asume estándares construidos para el uso operativo adecuado de la formación modelo, que rara vez es cierto. El intento de obtener resultados de modelo temprano para establecer umbrales significa que los datos defectuosos ya han moldeado los modelos que se supone que justifican los criterios."
  },
  {
    id: 'cp5-013', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Beacon Health Systems ha construido un modelo de IA para detectar reclamaciones de seguros por posibles fraudes. Antes de que el modelo sea lanzado a la producción, el equipo de cumplimiento pide al director del proyecto IA que demuestre que los criterios de detección del modelo se basan en el razonamiento documentado y defensible en lugar de la coincidencia de patrón opaco. El director del proyecto debe seleccionar un enfoque para satisfacer este requisito ¿Qué enfoque es más adecuado?",
    opciones: [
      { id: 'a', texto: "Hacer que un analista de fraude revise manualmente una muestra aleatoria de reclamaciones insignias y confirme su exactitud" },
      { id: 'b', texto: "Presentar una matriz de confusión que compara las tasas de verdadero positivo y falso positivo del modelo en el conjunto de datos de prueba" },
      { id: 'c', texto: "Aumentar el umbral de precisión del modelo para reducir el número de reclamaciones marcadas antes de la liberación de producción" },
      { id: 'd', texto: "Elaborar la documentación de los criterios de selección de modelos y la lógica de decisión utilizada para elegir el enfoque de detección de fraude, junto con una descripción" }
    ],
    correctas: ['d'],
    explicacion: "La producción de documentación de criterios de selección modelo, racionalización de decisiones y descripciones de fuentes de datos demuestra directamente que el enfoque de detección del modelo se basa en un razonamiento defensible y transparente, lo que es lo que requiere el equipo de cumplimiento. Presentar una matriz de confusión aborda las métricas de rendimiento modelo pero no explica por qué se tomaron decisiones algorítmicas específicas. Aumentar el umbral de precisión cambia el comportamiento modelo pero no satisface el requisito de la documentación Engaging a un analista para la revisión manual evalúa la exactitud de la salida pero no documenta el razonamiento interno del modelo."
  },
  {
    id: 'cp5-014', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tindergrove Outdoor vio la conversión de su motor de recomendación gota métrica bruscamente en la semana después de que terminara una importante promoción de vacaciones. El líder de las operaciones quiere un esfuerzo de readiestramiento de emergencia iniciado inmediatamente, mientras que el científico de datos sospecha un patrón estacional ¿Qué debe hacer el director del proyecto IA primero?",
    opciones: [
      { id: 'a', texto: "Pregunte al equipo de marketing para relanzar la promoción y restaurar conversiones" },
      { id: 'b', texto: "Examine el comportamiento de la métrica en períodos comparables pasados para distinguir un patrón transitorio" },
      { id: 'c', texto: "Autorizar el esfuerzo de readiestramiento de emergencia para eliminar cualquier posibilidad de disminución" },
      { id: 'd', texto: "Cambiar el tráfico de producción de nuevo a la versión anterior modelo durante la noche" }
    ],
    correctas: ['b'],
    explicacion: "Analizar cómo se comporta la métrica en períodos comparables anteriores revela si la caída es un patrón recurrente de pospromoción o una degradación genuina, que es la evidencia necesaria antes de comprometerse a una intervención. Lanzamiento de la readaptación de emergencia sin ese análisis gasta recursos escasos en un problema que puede resolverse dentro de los días. Revertir a la versión modelo anterior es una respuesta disruptiva a lo que puede ser estacionalidad normal, y el modelo anterior se enfrentaría al mismo patrón de demanda post vacaciones. Relanzar la promoción manipula la condición de negocio para enmascarar la métrica en lugar de entender lo que la métrica está diciendo."
  },
  {
    id: 'cp5-015', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pyramid Construction está desarrollando un modelo de estimación de costos de materiales. Durante el desarrollo del modelo, el equipo de ciencias de datos se da cuenta de que el conjunto de datos brutos contiene columnas derivadas de mary que fueron calculadas entre sí, y las fórmulas de derivación difieren entre dos bases de datos regionales Se pregunta al director del proyecto IA si debe proceder la capacitación. ¿Qué debe verificar primero el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Que la arquitectura modelo puede tolerar características redundantes sin degradación del rendimiento" },
      { id: 'b', texto: "Que el flujo de trabajo de limpieza y preprocesamiento de datos ha resuelto o documentado formalmente la incoherencia en la lógica de derivación entre fuentes regionales" },
      { id: 'c', texto: "Que el comité directivo del proyecto ha sido informado sobre las diferencias de datos regionales" },
      { id: 'd', texto: "Que el paso de normalización de datos ya se ha aplicado a todas las columnas en el conjunto de datos combinados" }
    ],
    correctas: ['b'],
    explicacion: "Antes de autorizar la formación, el gerente del proyecto debe verificar que el flujo de trabajo preprocesador ha resuelto la lógica de derivación conflictiva o documentado formalmente tas a una limitación conocida, ya que la capacitación sobre características computadas de manera diferente en las regiones produciría un modelo que aprende patrones inconsistentes. Si la arquitectura modelo puede tolerar características redundantes es una consideración arquitectónica pero no aborda la inconsistencia subyacente en la derivación de características. Aplicar la normalización a columnas que se derivan incoherentemente no soluciona la causa raíz. Reunión informativa del comité directivo es un paso de comunicación de gobernanza que sigue, en lugar de sustituir, la resolución técnica"
  },
  {
    id: 'cp5-016', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Meridian Retail está construyendo un modelo de precios de productos utilizando datos históricos de ventas El gerente del proyecto aprende que el equipo de preprocesamiento ha añadido un gran Satch de registros sintéticos al conjunto de capacitación para compensar los escasos datos en ciertas categorías de productos. No existe documentación que explique por qué esas categorías fueron aumentadas, cuántos registros se agregaron o qué método de generación se utilizó. ¿Qué debe exigir el director del proyecto antes de continuar la formación?",
    opciones: [
      { id: 'a', texto: "Consultar la documentación de la racionalidad de aumento, los registros y el método de generación como parte del registro de transformación" },
      { id: 'b', texto: "Aceptar el aumento como un paso de preprocesamiento rutinario que no necesita documentación formal" },
      { id: 'c', texto: "Pida al equipo que simplemente marque los registros sintéticos con una etiqueta de columna en el archivo de entrenamiento" },
      { id: 'd', texto: "Requiere al equipo para eliminar todos los registros sintéticos porque los datos sintéticos no son aceptables en proyectos comerciales de IA" }
    ],
    correctas: ['a'],
    explicacion: "La gestión de la transformación de datos para la preparación de datos incluye supervisar el aumento de datos y la generación de datos sintéticos, así como garantizar la reproducibilidad y la documentación de la transformación de datos. La responsabilidad del director del proyecto es asegurar que se documenten las decisiones de aumento, incluyendo racionalidad, alcance y método, por lo que la transformación es reproducible y auditable. Prohibir los datos sintéticos va más allá del mandato del director del proyecto e ignora que el aumento puede ser una técnica válida cuando se gobierna adecuadamente Acce$.ing aumento indocumentado como rutinario el requisito de la documentación. Añadiendo una bandera de columna identifica los registros sintéticos, pero se mot captura racional, método de generación o toma de decisiones, que son los elementos faltantes"
  },
  {
    id: 'cp5-017', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sunsail Components está construyendo un modelo de detección de defectos de calidad para su línea de fabricación. El equipo de ciencias de datos ha estado trabajando durante varias semanas y ahora tiene tres enfoques modelo candidatos Cada candidato ha sido entrenado en un oleoducto de preprocesamiento diferente, haciendo difícil las comparaciones directas de rendimiento. El director del proyecto IA necesita guiar al equipo hacia una comparación justa. ¿Cuál es la acción más apropiada?",
    opciones: [
      { id: 'a', texto: "Elige al candidato que completó el entrenamiento más rápido porque será más fácil volver a entrenar como cambios de datos." },
      { id: 'b', texto: "Pida al patrocinador de negocios que seleccione al candidato preferido basado en las presentaciones del proveedor para cada enfoque." },
      { id: 'c', texto: "Seleccione al candidato con la máxima precisión reportada porque la precisión es la métrica más importante para la detección de defectos." },
      { id: 'd', texto: "Dirija al equipo para establecer un oleoducto de preprocesamiento común y evalúe a los tres candidatos contra el mismo conjunto de datos preparado antes de hacer una selección" }
    ],
    correctas: ['d'],
    explicacion: "Supervisar los procesos de validación cruzada y selección de modelos y coordinar con los científicos de datos sobre las decisiones de arquitectura modelo son responsabilidades de gestión de proyectos de IA en la gestión de la capacitación modelo. Cuando los candidatos han sido entrenados en diferentes oleoductos de preprocesamiento, las diferencias de rendimiento pueden reflejar las diferencias de preparación de datos en lugar de las diferencias de capacidad modelo Estableciendo un oleoducto de preprocesamiento común y evaluando a todos los candidatos contra los mismos datos produce una comparación justa. Seleccionando la precisión sola sin una comparación controlada introduce sesgo de selección. Elegir basado en la velocidad de entrenamiento optimiza para el criterio incorrecto y puede sacrificar la precisión de detección de defectos que requiere el negocio. Pedir al patrocinador de negocios que seleccione de proveedor"
  },
  {
    id: 'cp5-018', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "TechFinity Solutions está capacitando a un modelo de procesamiento de idiomas naturales para automatizar la revisión del contrato El equipo de ciencias de datos ha estado ajustando manualmente los parámetros de capacitación después de cada carrera basada en la intuición en lugar de un proceso sistemático. El director del proyecto IA nota que no se han documentado configuraciones prometedoras de carreras anteriores y que no pueden reproducirse. ¿Qué hizo el gerente del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Pida al equipo de ciencias de datos que reelabore todos los experimentos anteriores de memoria y reconstruya sus configuraciones." },
      { id: 'b', texto: "Exigir al equipo que congele todos los parámetros en sus valores actuales y complete la capacitación sin más ajustes." },
      { id: 'c', texto: "Dirige al equipo que implemente el seguimiento de experimentos para que todas las configuraciones de entrenamiento, ajustes y resultados sean registrados sistemáticamente." },
      { id: 'd', texto: "Assign one data scientific as the sole decision-maker for all parameter adjustments to ensure consistency." }
    ],
    correctas: ['c'],
    explicacion: "Gestionar la versión de los datos de capacitación y el seguimiento de los experimentos es una responsabilidad del director de proyectos de IA en la supervisión de la capacitación modelo. Implementar seguimiento de experimentos garantiza que cada configuración probada, cada ajuste realizado y cada resultado alcanzado se grabe para que el equipo pueda reproducir carreras prometedoras y construir sobre parámetros anteriores de Freezing detenga el proceso de optimización iterativa que es esencial para modelar la formación. Asignar a una persona como única toma de decisiones concentra autoridad, pero todavía no capta el seguimiento necesario para la reproducibilidad. Pedir al equipo que reconstruya experimentos de memoria no es fiable y no recuperará configuraciones perdidas"
  },
  {
    id: 'cp5-019', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Beacon Health es un sistema de salud de EE.UU. que expande su herramienta de riesgo al paciente a clínicas en Francia. El director del proyecto IA aprende que la herramienta procesará los datos de pacientes de residentes del ELI. ¿Qué obligación debería priorizar el director del proyecto para asegurar que el despliegue ampliado cumpla los requisitos legales aplicables?",
    opciones: [
      { id: 'a', texto: "Archive todos los datos de pacientes de la UE en almacenamiento en frío para reducir la exposición en tiempo real" },
      { id: 'b', texto: "Verificar que las actividades de procesamiento de datos cumplen con los requisitos de protección de datos personales de la UE ante los franceses" },
      { id: 'c', texto: "Obtener cláusulas de indemnización de proveedores para cualquier violación de datos que ocurra en las instalaciones de la UE" },
      { id: 'd', texto: "Limitar los productos modelo a estadísticas agregadas no identificables para los usuarios de clínicas francesas" }
    ],
    correctas: ['b'],
    explicacion: "Cuando un sistema IA procesa datos personales de individuos en El], el administrador del proyecto debe verificar el cumplimiento de la normativa aplicable de protección de datos ELI antes de proceder a la expansión. La indemnización de los proveedores es un mecanismo contractual de transferencia de riesgos, no una verificación de cumplimiento. El archivo de datos en almacenamiento en frío no elimina las obligaciones de procesamiento en virtud de la ley de protección de datos. La limitación de los productos a las estadísticas agregadas no aborda el procesamiento de datos subyacente que se produce durante la inferencia modelo."
  },
  {
    id: 'cp5-020', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Hollybrook Bakeries quiere automatizar las aprobaciones de reembolso, que hoy siguen una lista corta de umbrales fijos aplicados de la misma manera cada vez. Un vendedor está lanzando un servicio de aprendizaje automático para el trabajo. ¿Qué debe evaluar el director del proyecto IA antes de respaldar el enfoque del proveedor?",
    opciones: [
      { id: 'a', texto: "Si las panaderías competidoras han adoptado el aprendizaje automático para los reembolsos" },
      { id: 'b', texto: "Si las reglas deterministas por sí solas pueden satisfacer el requisito sin ningún componente de aprendizaje" },
      { id: 'c', texto: "Ya sea que el servicio del proveedor pueda ser entrenado en registros históricos de reembolso" },
      { id: 'd', texto: "Si el volumen de reembolso es lo suficientemente grande como para justificar un sistema de aprendizaje" }
    ],
    correctas: ['b'],
    explicacion: "Evaluar si las reglas deterministas por sí solas pueden satisfacer el requisito es la prueba esencial, ya que un proceso gobernado por los umbrales fijos aplicados idénticamente cada vez es fórmula y puede mot necesita el aprendizaje automático en absoluto. Comprobando si el servicio puede ser entrenado en registros de reembolso presume que el aprendizaje es necesario antes de que esa pregunta sea contestada. Reembolso volumen afecta a la economía de escala pero sí determina si el problema es de naturaleza cognitiva. La adopción del competidor es una observación de mercado que dice nada acerca de si este proceso específico justifica IA. Comparing A' approaches against traditional alternatives is a core part of the initial feasibility evaluation."
  },
  {
    id: 'cp5-021', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Juniper Valley Hospital está transfiriendo un modelo de riesgo de readmisión post-descarga del equipo del proyecto IA al grupo de informática clínica. El director del proyecto encuentra que el científico de datos clave que construyó el modelo dejará la organización una semana después de la fecha de entrega. ¿Cómo debe el director del proyecto dirigir esto?",
    opciones: [
      { id: 'a', texto: "Asignar al científico partidario un retenedor de consultoría para responder preguntas remotamente durante un año" },
      { id: 'b', texto: "Aplazar la entrega hasta que se contrate a un científico de datos de reemplazo y a bordo" },
      { id: 'c', texto: "Acelerar las sesiones de transferencia de conocimiento para que el equipo de informática capta experiencia crítica antes de que el científico salga" },
      { id: 'd', texto: "Avance con la fecha de entrega prevista sin cambios ya que la documentación de entrega debe ser suficiente" }
    ],
    correctas: ['c'],
    explicacion: "La programación de sesiones de transferencia de conocimientos intensivos antes de la fecha de salida capta la experiencia tácita que no se puede leer fácilmente de la documentación y reduce el riesgo de que el conocimiento institucional crítico deja con el científico Postponing la entrega completa para esperar un alquiler es incierto en el tiempo y deja el proyecto abierto cuando el equipo operativo se lee% El proceso con sólo la documentación supone la integridad de que la ventana de solapso de una semana está destinada a probar; los casos indocumentados y la transferencia de nulos. Retener al científico sobre una base de consultoría es un retroceso que puede no estar disponible y no sustituye la transferencia estructurada de conocimiento que puede suceder mientras ambas partes todavía están comprometidas."
  },
  {
    id: 'cp5-022', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Mistral Airlines está preparando su presentación de la junta ejecutiva buscando fondos para una iniciativa de programación de la tripulación de IA. El borrador actual es denso con la terminología modelo, y en la última revisión los ejecutivos disengados en cuestión de minutos ¿Qué debe hacer el director del proyecto IA para mejorar la próxima presentación?",
    opciones: [
      { id: 'a', texto: "Reframe el contenido como una narrativa sobre los resultados empresariales" },
      { id: 'b', texto: "Acortar la cubierta y circular el detalle técnico de antemano" },
      { id: 'c', texto: "Añadir un glosario para que los ejecutivos puedan decodificar la terminología" },
      { id: 'd', texto: "Invite the data science lead to field technical questions live" }
    ],
    correctas: ['a'],
    explicacion: "Apoyar la creación de casos empresariales significa desarrollar narrativas convincentes para los públicos ejecutivos, por lo que retransmitir el material alrededor de los resultados empresariales habla de lo que el consejo debe decidir. Un glosario aún obliga a los ejecutivos a traducir la jerga en lugar de escuchar la historia del valor. Acortar la cubierta y distribuir los detalles de antemano cambia el embalaje mientras deja la técnica de enmarcación Tener las preguntas de campo líder de la ciencia de datos ayuda una vez que existe el compromiso, pero no arregla una presentación que pierda la sala al principio"
  },
  {
    id: 'cp5-023', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Wintermoor Apparel está cerrando su proyecto con ayuda de IA, y el patrocinador ha pedido al director del proyecto IA para el informe de cierre Los miembros del equipo proponen varias maneras de organizarlo. ¿Qué debería servir como elemento central de organización del informe?",
    opciones: [
      { id: 'a', texto: "Un relato cronológico de cada lanzamiento y hito en el proyecto" },
      { id: 'b', texto: "Una hoja de ruta de las mejoras propuesta para una segunda fase potencial" },
      { id: 'c', texto: "Una colección de testimonios recogidos de entusiastas adoptantes tempranos" },
      { id: 'd', texto: "mcta Comparación de los resultados obtenidos con los objetivos definidos cuando se aprobó el proyecto" }
    ],
    correctas: ['d'],
    explicacion: "Anchoring the final report on achieved results versus the targets set at approval directly answers the question the sponsor funded the project to answer, whether the promised outcomes materialized. Un relato cronológico de la actividad de los documentos de liberaciones en lugar de logro y deja sin respuesta la cuestión de valor. Testimonios de los entusiastas adoptantes son anécdotas selectivas que no pueden sustituir los resultados medidos contra los compromisos Una hoja de ruta de las mejoras futuras pertenece en el informe como una sección orientada hacia el futuro, pero haciendo que el centro de la pieza convertiría un documento de rendición de cuentas de cierre en un escenario para la nueva financiación."
  },
  {
    id: 'cp5-024', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Oakhurst Property Management ha terminado de evaluar los datos de mantenimiento para un modelo de triage de encargo. El equipo de ciencias de datos le dice al director del proyecto IA que los datos se sienten suficientemente buenos para proceder, sobre la base de sus impresiones generales de la exploración. Una decisión de preparación se debe esta semana ¿Qué debe exigir el director del proyecto IA antes de esa decisión?",
    opciones: [
      { id: 'a', texto: "Una carrera de entrenamiento piloto para que los resultados modelo puedan resolver la pregunta" },
      { id: 'b', texto: "Aceptación del juicio del equipo ya que conocen los datos mejor" },
      { id: 'c', texto: "Comparación de los datos disponibles con los requisitos de datos documentados" },
      { id: 'd', texto: "Una encuesta rápida del patrocinador del proyecto sobre si proceder" }
    ],
    correctas: ['c'],
    explicacion: "Requiring a comparison against the documented requirements is correct because determining whether data meets solution needs is a structured check of what was gathered against what was specified, not a matter of impressions. Aceptar la sensación del equipo por los datos sustituye la opinión sobre los criterios que el proyecto define precisamente para este momento. Una carrera piloto de entrenamiento gasta esfuerzos de modelado para resolver una pregunta que la comparación de requisitos puede responder directa y barata. Votar al patrocinador invierte el flujo, ya que el patrocinador necesita la evidencia de preparación para decidir, no por el otro lado."
  },
  {
    id: 'cp5-025', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ridgeway Construction está desarrollando un modelo de estimación de costes de proyecto utilizando histórico Sid y resultados datæ El gerente de proyecto IA se le pide que revise el proceso de selección de algoritmos. El equipo de ciencias de los datos consideró una base de regresión lineal simple y un conjunto complejo de gradientes. los enfoques se han basado en un conjunto de validación. El equipo ncnv quiere elegir el conjunto porque oct.erforms la base sobre el conjunto de validación, sin discutir interpretación o complejidad de mantenimiento operacional. ¿Qué debería hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Requiere que el equipo utilice el modelo más simple en todos los casos porque los modelos más simples siempre son preferibles para uso de negocios" },
      { id: 'b', texto: "Asignar la selección final a un grupo de examen de proveedores externos" },
      { id: 'c', texto: "Facilitar una revisión estructurada de las compensaciones entre ambas opciones y contra los criterios de éxito declarados del proyecto antes de finalizar la selección" },
      { id: 'd', texto: "Aprobar la elección del conjunto inmediatamente ya que el rendimiento de validación superior es el criterio definitivo" }
    ],
    correctas: ['c'],
    explicacion: "Supervisar la selección de la técnica modelo IA requiere evaluar las compensaciones entre la complejidad del modelo, el rendimiento y la interpretabilidad, sin aceptar el rendimiento solo como criterio de selección. El director del proyecto debería facilitar una revisión estructurada que tenga en cuenta la complejidad y las consideraciones de mantenimiento junto con los resultados de validación antes de que el equipo se comprometa al conjunto Aprobando inmediatamente el rendimiento de validación ignora la interpretación y la complejidad operacional, que son criterios legítimos de selección especialmente para un modelo de estimación de costos utilizado en las decisiones contractuales. Mandar el modelo más simple en todos los casos es una sobregeneralización que ignora la posibilidad de que"
  },
  {
    id: 'cp5-026', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Riverton Financial Services completó un proyecto de decisión de crédito IA de dos años. El director del programa está presentando los resultados finales del proyecto a altos cargos. En parte a través de la presentación, un ejecutivo pregunta por qué el equipo no descubrió hasta el mes dieciocho que los datos de entrenamiento excluían un segmento significativo de Sorrower El director del programa debe responder de una manera que sirva a los proyectos futuros de la organización ¿Cuál es el enfoque más eficaz?",
    opciones: [
      { id: 'a', texto: "Atribuir la brecha a la supervisión del equipo de ciencia de datos y comprometerse a una mayor supervisión en futuros proyectos." },
      { id: 'b', texto: "Reconocer la brecha de manera transparente, describir cómo se identificó y resolvió y presentar la lección documentada que recomienda cheques de representatividad anteriores" },
      { id: 'c', texto: "Diferir la cuestión a un futuro taller de aprendizaje de lecciones en lugar de abordarla en la presentación ejecutiva." },
      { id: 'd', texto: "La dirección de seguridad de que el modelo final es preciso y la cuestión del segmento no afectó el rendimiento de la producción." }
    ],
    correctas: ['b'],
    explicacion: "Reconociendo la brecha de forma transparente y conectando t a una lección documentada para futuras fases de comprensión de datos cumple con la responsabilidad de la IA PM de presentar resultados finales y capturar lecciones de una manera que beneficie a la organización. Attributing the gap to team undermines the collaborative accountability the IA PM is expected to model Reassuring leadership without addressing the root cause does not close the learning loovx Aplazarse a un futuro taller fails to use the executive presentation as the appropriate venue for reporting project outcomes, including difficulties."
  },
  {
    id: 'cp5-027', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestlake Medical está revisando un sistema de análisis de imágenes con ayuda de Al que ha estado en producción durante dieciocho meses. Un oficial de cumplimiento jefe entrante pregunta quién autorizó el despliegue original y sobre qué base se completó la evaluación de seguridad clínica El director del programa IA debe responder a esta pregunta. ¿Qué tipo de registro debería producir el administrador del programa?",
    opciones: [
      { id: 'a', texto: "Documentación de las aprobaciones de los interesados y puntos de decisión de go/no-go clínicos realizados antes y durante el despliegue" },
      { id: 'b', texto: "Registros de rendimiento que muestran la precisión diagnóstica del modelo en casos procesados en los últimos seis meses" },
      { id: 'c', texto: "Un diagrama de arquitectura del sistema de análisis de imágenes como funciona actualmente" },
      { id: 'd', texto: "Estadísticas de adopción de usuarios que muestran tasas de aceptación clínica durante el primer año de despliegue" }
    ],
    correctas: ['a'],
    explicacion: "Documentación de las aprobaciones de los interesados y puntos de decisión de go/no-go es exactamente lo que el oficial de cumplimiento necesita para verificar quién autorizó el despliegue y sobre qué base de gobernanza se completó la evaluación de seguridad Las estadísticas de ado* sobre el usuario reflejan la aceptación, no la autorización. Un diagrama de arquitectura del sistema describe cómo funciona el sistema, no cómo fue aprobado."
  },
  {
    id: 'cp5-028', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "La Red de Salud de Beacon implementó un modelo de puntuación de riesgo de readmisión de IA que marca pacientes de alto riesgo para el seguimiento de coordinadores de atención. Dos meses después de la vida útil, los coordinadores de atención informan que el modelo está marcando significativamente más pacientes por día de lo que el equipo puede actuar. El director del programa debe responder. ¿Qué acción refleja el papel apropiado de la IA PM?",
    opciones: [
      { id: 'a', texto: "Advise care coordinators to prioritize the highest-scored flags on their own u ntil the volume issue resolves." },
      { id: 'b', texto: "Pausa el modelo y revertir el análisis manual de readmisión hasta que la capacidad del equipo aumenta." },
      { id: 'c', texto: "Convocar una revisión estructurada con actores clínicos y científicos de datos para evaluar si el umbral de alerta debe ajustarse" },
      { id: 'd', texto: "Instruir al equipo de ciencia de datos para reentrenar el modelo para producir menos banderas sin revisión clínica." }
    ],
    correctas: ['c'],
    explicacion: "Convocar una revisión estructurada de múltiples interesados para evaluar si el umbral de alerta está calibrado a la capacidad operacional es la función de coordinación y supervisión de la IA PM, y se alinea con el monitoreo de las tendencias de rendimiento y el análisis de patrones de degradación. Instruir la reeducación sin revisión clínica supervisa la gobernanza. Advising coordinators to self-prioritize without a structured protocol introduces clinic risk Pausing the model and reverting to manual screening is a major operational decision that requires stakeholder and leadership involvement, not a unilateral program manager action."
  },
  {
    id: 'cp5-029', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Ouillan Energy, un proyecto IA necesita una gran atracción histórica de órdenes de trabajo de un sistema que el equipo de operaciones utiliza alrededor del reloj. El propietario del sistema advierte que una extracción pesada podría degradar el rendimiento para las tripulaciones de campo. Los científicos de datos quieren los registros esta semana. ¿Cómo debe proceder el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Haga que los científicos de datos consultan el sistema en vivo directamente cada vez que necesitan registros" },
      { id: 'b', texto: "Proceda con la extracción completa inmediatamente desde que el plazo del proyecto toma prioridad" },
      { id: 'c', texto: "Eliminar los datos de gestión del trabajo del alcance del proyecto para evitar la carga del equipo de operaciones" },
      { id: 'd', texto: "Programar la extracción con el propietario del sistema para ventanas Iow-actividad utilizando un método acordado" }
    ],
    correctas: ['d'],
    explicacion: "Ejecutar la extracción en coordinación con el propietario del sistema, templado a ventanas de Iow-actividad y utilizando un método acordado, consigue el proyecto su historia sin perturbar a los usuarios operativos alrededor de la hora Forcing the pull privilegios inmediatos el programa del proyecto sobre operaciones de campo y dañar la cooperación posterior extractos necesitará Las consultas especiales directas contra el sistema en vivo repiten el riesgo de rendimiento continuamente en lugar de una vez Dejar los datos de orden de trabajo abandona una fuente necesaria enteramente cuando una conversación de programación resuelve el conflicto."
  },
  {
    id: 'cp5-030', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El equipo de innovación de Summit Ridge Healthcare propone formar un modelo para determinar la elegibilidad de los pacientes para un programa de bienestar. Revisando el proceso, el director del proyecto IA considera que la elegibilidad sigue una lista corta de criterios documentados que nunca varían y requieren juicio mo. ¿Qué debe recomendar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Entrenar el modelo sólo en casos que los criterios no pueden decidir" },
      { id: 'b', texto: "Procedido con el modelo para crecer la capacidad de IA del equipo" },
      { id: 'c', texto: "Implementar la lógica de elegibilidad como solución de reglas deterministas" },
      { id: 'd', texto: "Construya ambos enfoques y mantenga lo que realice mejor" }
    ],
    correctas: ['c'],
    explicacion: "La evaluación de la viabilidad incluye comparar la IA con las alternativas tradicionales y un proceso gobernado fija los criterios documentados se resuelven más barato y fiablemente codificando la lógica como reglas deterministas que con un modelo aprendido. Proceder con el modelo para crecer la capacidad gasta el presupuesto de aprendizaje en un problema que no necesita aprender. La construcción de enfoques bffh duplica el costo para resolver una pregunta la documentación del proceso ya responde La formación de un modelo sólo en casos indecibles falla porque el escenario establece que los criterios deciden cada caso sin juicio."
  },
  {
    id: 'cp5-031', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ashgrove Pediatrics está cerrando un proyecto de predicción sin presentación de citas. La clínica espera que el principal beneficio financiero, la reducción de las vacantes sin llenar, se construya gradualmente durante el próximo año a medida que cambian los hábitos de programación El patrocinador quiere el informe de cierre para indicar el valor del proyecto ncnv ¿Cómo debe el gerente del proyecto IA manejar beneficios en el informe?",
    opciones: [
      { id: 'a', texto: "Estado el beneficio anual total proyectado como se logra desde que el modelo es vivo" },
      { id: 'b', texto: "Excluir los beneficios financieros por completo e informar únicamente de los logros técnicos" },
      { id: 'c', texto: "Informe beneficios realizados hasta la fecha y definir cómo se medirán los beneficios restantes después del cierre" },
      { id: 'd', texto: "Retraso en la publicación del informe hasta el año completo de los datos sobre beneficios" }
    ],
    correctas: ['c'],
    explicacion: "Reportar lo que se ha realizado en realidad al establecer la propiedad y un método para medir los beneficios que maduran después del cierre mantiene el informe honesto y asegura que la historia de valor no se evapora cuando el equipo se disuelva. Reclamando el beneficio total proyectado tal como se ha logrado sobreestimar los resultados y socava la confianza cuando los números posteriores son cortos. La reducción de los beneficios financieros del informe oculta el mismo resultado que el patrocinador financiado. Mantener el informe durante un año deja el proyecto abierto administrativamente mucho después de que el trabajo terminó y retrasa la rendición de cuentas que el patrocinador está pidiendo por ahora."
  },
  {
    id: 'cp5-032', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics concluyó recientemente la prueba inicial de un modelo de predicción del rendimiento deportivo. El director del programa IA descubre que dos científicos de datos formaron de forma independiente modelos usando diferentes pasos de preprocesamiento y diferentes semillas aleatorias, lo que hace imposible reproducir cualquiera de los resultados. ¿Qué práctica debe requerir el director del programa para prevenir este problema?",
    opciones: [
      { id: 'a', texto: "Assign one data scientific as the sole model trainer to eliminate variation" },
      { id: 'b', texto: "Implementar un seguimiento normalizado de experimentos que registra pasos de preprocesamiento, parámetros y semillas aleatorias para cada carrera de entrenamiento" },
      { id: 'c', texto: "Requiere todo el entrenamiento modelo para funcionar en un solo portátil compartido para estandarizar el medio ambiente" },
      { id: 'd', texto: "Mandar que los científicos de datos presenten puntajes de precisión al director del proyecto antes de continuar" }
    ],
    correctas: ['b'],
    explicacion: "Seguimiento de experimentos estandarizado que captura pasos de preprocesamiento, opciones de parámetro y semillas aleatorias para cada carrera garantiza que cualquier resultado puede reproducirse y compararse, resolviendo directamente la brecha de reproducibilidad. Requiring training on a single laptop restricts parallelism and does not document the variation sources Submitting accuracy scores creates a reporting record but does not capture the configuración details needed for reproduction. Asignar un único entrenador reduce la capacidad del equipo y no impide la configuración de deriva si esa persona también varía su enfoque."
  },
  {
    id: 'cp5-033', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Lakeshore Energy ha construido un modelo de prevención de la demanda de IA para su equipo de operaciones de red. El director del programa está desarrollando el plan de despliegue y debe determinar los requisitos de infraestructura. Actualmente, el equipo de operaciones gestiona toda la vigilancia mediante un panel informático de uso general que no fue diseñado para cargas de trabajo de inteligencia artificial. ¿Qué debe incluir el administrador del programa en el plan de implementación para abordar esto?",
    opciones: [
      { id: 'a', texto: "Asignar la configuración de vigilancia enteramente al equipo de TI y eliminarla del alcance del plan de despliegue." },
      { id: 'b', texto: "Espere hasta que el modelo esté en producción y evalúe las necesidades de monitoreo basadas en la experiencia operacional real." },
      { id: 'c', texto: "Aceptar el dashboard de TI existente como suficiente y documentar la decisión de evitar costes de infraestructura adicionales." },
      { id: 'd', texto: "Especifique los requisitos para las capacidades de monitoreo específicas de Al, incluyendo métricas de rendimiento relevantes para el modelo de pronóstico y como parte del plan de infraestructura." }
    ],
    correctas: ['d'],
    explicacion: "La especificación de las necesidades de vigilancia específicas de Al en el plan de despliegue garantiza que la infraestructura suministrada apoye la supervisión modelo en curso desde el primer día, que es un elemento básico de la planificación del despliegue. Aceptar el dashboard existente sin evaluar su aptitud para las métricas IA aplaza un ga conocido. Esperar a que la producción evalúe las necesidades de monitoreo significa que el modelo va en vivo sin un observabilit% adecuado La eliminación de la vigilancia del alcance del plan transfiere la rendición de cuentas inapropiadamente y crea un punto ciego de gobernanza."
  },
  {
    id: 'cp5-034', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "TechFinity Solutions está desarrollando un clasificador de documentos de lenguaje natural para la revisión de contratos. El equipo de datos ha completado el preprocesamiento, pero durante una revisión final el gerente del proyecto IA descubre que una categoría de documento clave representa menos del dos por ciento de los registros de entrenamiento. Un científico de datos advierte que este desequilibrio podría llevar al modelo a predecir raramente esa categoría El gerente del proyecto debe decidir si los datos son ¿Qué debe impulsar esta decisión go/no-go?",
    opciones: [
      { id: 'a', texto: "Si el cronograma del proyecto permite tiempo de recogida de datos adicionales antes de la formación" },
      { id: 'b', texto: "Se ha evaluado y documentado si la representatividad actual de los datos y las posibles cuestiones de parcialidad se han reunido o no" },
      { id: 'c', texto: "Si el equipo de ciencia de datos acepta por consenso proceder a pesar del desequilibrio" },
      { id: 'd', texto: "Si el equipo puede volver a entrenar el modelo más adelante si el desequilibrio causa problemas de producción" }
    ],
    correctas: ['b'],
    explicacion: "La decisión sobre la preparación de los datos debe basarse en una evaluación de la representatividad de los datos y las posibles cuestiones de parcialidad evaluadas en relación con las normas de capacitación definidas, no en la conveniencia del calendario, la posibilidad de una futura readiestración o un consenso de equipo sin criterios documentados El grave desequilibrio de clase para la categoría de contrato raro es una cuestión de representatividad que el gerente del proyecto debe evaluar y documentar formalmente antes de autorizar decisiones basadas en Timeline desvía la puerta de calidad. La planificación para volver a entrenar más adelante no aborda la brecha actual y puede permitir un modelo sesgado para alcanzar el consenso del equipo de producción sin criterios de evaluación documentados es un registro de go/no-go defensible."
  },
  {
    id: 'cp5-035', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Panaderías Plumstone quiere parar los hornos de lotes de sobrecocción. La investigación del director del proyecto IA muestra que la fijación es totalmente determinista: cada vez que el horno corre por encima de su punto de partida para demasiado Zng, el calor debe reducir una cantidad conocida. El equipo de ingeniería sigue ansioso por formar un modelo de aprendizaje para ello. ¿Qué debe recomendar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Recomendar un control basado en reglas deterministas ya que la lógica ya se conoce" },
      { id: 'b', texto: "Recoger la extensa historia del sensor primero y luego entrenar el modelo" },
      { id: 'c', texto: "Procede con el modelo de aprendizaje porque podría ser más preciso" },
      { id: 'd', texto: "Construir ambas soluciones en paralelo y elegir después de comparar resultados" }
    ],
    correctas: ['a'],
    explicacion: "La evaluación de la viabilidad incluye comparar la IA con las alternativas tradicionales, y cuando la lógica necesaria es totalmente determinista y conocida, un control basado en reglas resuelve el problema a un costo y riesgo mucho menor que un sistema de aprendizaje. Proceeding with a learning model for possible accuracy gains adds training data needs, uncertainty, and maintenance burden to a problem that does not need them. Recopilar un extenso historial de sensores primero retrasa una solución cuya lógica no requiere comportamiento aprendido Construir bffh en paralelo duplica el gasto para resolver una pregunta el análisis ya ha resuelto"
  },
  {
    id: 'cp5-036', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Crestlake Municipal Services está implementando un modelo IA para optimizar el enrutamiento de autobuses públicos. El asesor jurídico de la ciudad aconseja al director del proyecto IA que cualquier reto legal futuro a las decisiones de enrutamiento requerirá que la ciudad demuestre una clara cadena de custodia para los datos utilizados para formar y probar el modelo, incluso cuando se recogió, de qué fuentes, y cómo se manejó. ¿Qué práctica debería implementar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Mantener registros de la cadena de custodia para datos de capacitación y pruebas y cualquier transformación aplicada" },
      { id: 'b', texto: "Publish the full training dataset on the city's open data portal so the public can independently verify data sources" },
      { id: 'c', texto: "Exigir a todos los proveedores de datos que presenten contratos firmados que confirmen que sus datos son exactos antes de ser utilizados en la capacitación" },
      { id: 'd', texto: "Almacene todos los datos de capacitación en un servidor conectado con aire sin conexiones de red externas para evitar el acceso no autorizado" }
    ],
    correctas: ['a'],
    explicacion: "Mantener registros de la cadena de custodia para los datos de capacitación y prueba, incluidos los orígenes de datos, las fechas de recogida y las transformaciones, es la práctica que satisface el requisito legal de demostrar dónde y cómo se obtuvieron y manejaron los datos. Publishing the dataset on an open data portal addresses transparency for citizens but is mot a chain of custody record and raises its own privacy concerns. Requiring signed contracts from data providers establishes data provenance agreements but does not create the ongoing chain of custody log for data handling throughout the project. El almacenamiento de datos en un servidor dotado de aire es un control de seguridad que protege los datos del acceso externo, pero no documenta la cadena de custodia necesaria para la rendición de cuentas legal."
  },
  {
    id: 'cp5-037', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los ejecutivos de Larkfield Telecom aprobaron una iniciativa IA para reducir el churn de clientes en su negocio de fibra. El equipo de datos redactó una larga lista de conjuntos de datos que sería interesante recoger, incluyendo registros de mantenimiento de torres y tráfico de pies al por menor El director del proyecto IA recorta la lista usando una prueba de organización. ¿Qué prueba debería conducir el borde?",
    opciones: [
      { id: 'a', texto: "Si cada conjunto de datos fue utilizado por el equipo en cualquier proyecto anterior de IA" },
      { id: 'b', texto: "Si cada conjunto de datos ya está almacenado en la plataforma cloud preferida de la compañía" },
      { id: 'c', texto: "Si cada conjunto de datos puede ser recogido sin involucrar al departamento legal" },
      { id: 'd', texto: "REp-ta O Si cada conjunto de datos rastrea el objetivo de reducción del churn y su caso de uso" }
    ],
    correctas: ['d'],
    explicacion: "Mapping data requirements to business objectives and use cases is the organizing test, so each candidate dataset must show a credible link to predicting or reducing fiber churn, which likely keep service quality and billing data while cut curiosidads like retail foot traffic Residence in the preferred cloud platform is a comfort that say nothing about relevance. El uso previo en otros proyectos refleja la familia en lugar de la aptitud para este objetivo. Evitar la implicación legal optimiza para facilitar la adquisición y descartaría señales de churn valiosas simplemente porque necesitan revisión."
  },
  {
    id: 'cp5-038', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Vantora Chemicals, el inicio de un proyecto de mantenimiento de IA reveló una división: la ingeniería cree que el proyecto ofrece una plataforma de monitoreo de equipos en toda la planta, mientras que las operaciones creen que predice fallos para dos tipos de compresores solamente. El director del proyecto IA debe resolver la divergencia antes de que se proceda al trabajo ¿Qué debe hacer el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Documentar los entregables y límites acordados y obtener la aprobación de ambos grupos" },
      { id: 'b', texto: "Prototipo ambas interpretaciones y dejar que los ejecutivos elijan después de ver resultados" },
      { id: 'c', texto: "Celebrar reuniones periódicas de alineación hasta que los dos grupos convergen naturalmente" },
      { id: 'd', texto: "Plan para la interpretación más amplia de la plataforma así que ninguno de los grupos es corto" }
    ],
    correctas: ['a'],
    explicacion: "Se resuelven interpretaciones conflictivas de lo que el proyecto ofrece escribiendo los entregables y límites y teniendo ambos grupos oficialmente aprobar ese registro, que convierte el entendimiento de pasillo en una definición compartida vinculante. Recurrir reuniones sin un artefacto escrito rara vez convergen y nadie Prototyping ambas interpretaciones gasta el doble de esfuerzo para posponer una decisión que la planificación debe tomar. El incumplimiento de la interpretación más amplia compromete recursos que nadie evaluó o aprobó."
  },
  {
    id: 'cp5-039', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Windrose Airlines está redactando el esquema de solución para un sistema A\" que predice las interrupciones del cambio de puerta. El líder de la ciencia de datos quiere que el \"hineto permanezca en silencio sobre la técnica de modelado, argumentando que el equipo debe mantener todas las opciones abiertas hasta que comience la experimentación. Los examinadores necesitan el esbozo para apoyar las aptitudes, la infraestructura y la planificación de la viabilidad. ¿Qué debe dirigir el director del proyecto A'\"",
    opciones: [
      { id: 'a', texto: "Deje que la planificación de la infraestructura proceda en suposiciones sobre un modelo típico" },
      { id: 'b', texto: "Deje la selección técnica fuera del esbozo hasta que los experimentos concluyan" },
      { id: 'c', texto: "Nombrar los tipos de modelo candidatos bajo consideración y la justificación para cada" },
      { id: 'd', texto: "Comprobar el esquema a la técnica que el plomo de la ciencia de datos usó recientemente" }
    ],
    correctas: ['c'],
    explicacion: "El esquema debe especificar los tipos de modelos candidatos y el razonamiento detrás de ellos, que conserva espacio para la experimentación al tiempo que da a los planificadores lo suficiente para evaluar las habilidades requeridas, las necesidades de cálculo y viabilidad. Mantener silencio sobre la técnica deja cada plan de abajo adivinando y empuja las decisiones fundamentales en la construcción. Cometiendo a lo que el æad usó último reemplaza el análisis de este problema con el hábito personal. Infraestructura de planificación alrededor de un modelo típico Sakes asunciones no examinadas en presupuestos que divergen fuertemente entre modelos estadísticos ligeros y enfoques de aprendizaje profundo."
  },
  {
    id: 'cp5-040', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Falconmoor Airfreight está estableciendo objetivos de rendimiento para un sistema IA que predice retrasos aduaneros de envío. El director de operaciones insiste en un objetivo de predicción casi perfecto porque cualquier cosa menos suena débil al consejo. Nadie ha medido lo bien que el proceso manual actual anticipa demoras. ¿Qué debe hacer el director del proyecto IA primero?",
    opciones: [
      { id: 'a', texto: "Seta deliberadamente Iow target por lo que el proyecto es seguro de superarlo" },
      { id: 'b', texto: "Pida al equipo de ciencia de datos que establezca el objetivo que considere factible" },
      { id: 'c', texto: "Adoptar el objetivo casi perfecto para mantener el apoyo del director de operaciones" },
      { id: 'd', texto: "Medir el rendimiento actual del proceso y establecer objetivos relativos a él y la necesidad del negocio" }
    ],
    correctas: ['d'],
    explicacion: "Los objetivos deben basarse en pruebas, lo que significa primero medir la eficacia del proceso manual existente y luego establecer un umbral que lo asienta lo suficiente para justificar la inversión, enmarcado lo que el negocio realmente necesita. Adoptando un número casi perfecto porque suena impresionante pone el proyecto a fracasar contra una barra arbitraria que puede exceder lo que los datos pueden soportar Una barra deliberadamente Iow protege el proyecto políticamente mientras que no le dice al negocio nada acerca de si el valor fue entregado Deja que el equipo de ciencia de datos solo elija el objetivo optimiza para lo técnicamente cómodo en lugar de lo que la operación requiere."
  },
  {
    id: 'cp5-041', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tinwhistle Toys ha aprobado un proyecto IA para prever la demanda estacional, y el director del proyecto IA está formando el equipo. El personal actual incluye ingenieros de software sólidos y desarrolladores de informes, pero nadie ha entrenado ni evaluado un modelo de aprendizaje. Antes de solicitar nuevos contratos o alquileres, ¿qué debe hacer el gerente del proyecto primero?",
    opciones: [
      { id: 'a', texto: "Compra una plataforma automatizada de modelado para eliminar el requisito de habilidad" },
      { id: 'b', texto: "Requisitos abiertos para ingenieros de aprendizaje automático de inmediato" },
      { id: 'c', texto: "Assign the reporting developers because they already know the data" },
      { id: 'd', texto: "Compare las habilidades que cada fase de proyecto necesita con la capacidad actual del personal" }
    ],
    correctas: ['d'],
    explicacion: "La planificación de recursos comienza con una evaluación de habilidades que mapea lo que cada fase del trabajo requiere contra lo que el personal existente puede cubrir, que luego revela las verdaderas lagunas para llenar los pedidos de apertura inmediatamente compromete el gasto de contratación antes de que nadie sepa qué roles están realmente desaparecidos. Assigning the reporting developers assumeds data familiarity equals modeling capacity, which the scenario states is absent. La compra de una plataforma automatizada de modelado cambia la herramienta, pero todavía requiere personas que pueden enmarcar problemas, juzgar productos y validar modelos"
  },
  {
    id: 'cp5-042', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pemberton El seguro está construyendo un modelo de triage de reclamaciones y necesita saber si las suscripciones existentes de almacenamiento en la nube del equipo pueden contener los archivos de imagen de reclamaciones y el snapshff de auditoría que el equipo de gobernanza requiere en todo el proyecto Antes de comprometerse a una línea de tiempo de recogida de datos, el director del proyecto A\" revisa el plan de infraestructura. ¿Qué debe confirmar la revisión?",
    opciones: [
      { id: 'a', texto: "Que los sistemas de almacenamiento y copia de seguridad de datos se configuran para apoyar las necesidades de plena capacidad del proyecto" },
      { id: 'b', texto: "Que el grupo de desarrollo tiene suficiente poder de procesamiento para formar el modelo dentro del horario de sprint" },
      { id: 'c', texto: "Que las imágenes de reclamaciones cumplen con la barra de calidad necesaria para los componentes de la visión informática del modelo" },
      { id: 'd', texto: "Que cada miembro del equipo tiene credenciales para entrar en la consola de la nube" }
    ],
    correctas: ['a'],
    explicacion: "La configuración de los sistemas de almacenamiento y copia de seguridad de datos para las necesidades de los proyectos es un espacio de trabajo de IA y la responsabilidad de la infraestructura, por lo que la revisión debe confirmar que las suscripciones existentes pueden contener tanto las imágenes de reclamaciones como las instantáneas de auditoría en curso antes de que se prometa una línea de información de colección. La calidad de imagen es una preocupación de evaluación de datos que viene después de la colección y almacenamiento exitosos. La potencia de procesamiento de la velocidad de entrenamiento es una cuestión de cálculo separada de la capacidad de almacenamiento de datos brutos y de auditoría. El suministro de credenciales es un paso de gestión de acceso que supone que el almacenamiento subyacente ya se ha determinado adecuado."
  },
  {
    id: 'cp5-043', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pelican Coast Hotels ha construido un modelo prefabricado de ocupación. Los científicos reportan una excelente precisión técnica y recomiendan el lanzamiento inmediato. El director del proyecto IA recuerda que la empresa acordó originalmente que el proyecto sólo tendría éxito si las previsiones reducen costosamente el exceso de personal en los días de ocupación insuficiente. ¿Qué debe evaluar el director del proyecto en la revisión de la preparación?",
    opciones: [
      { id: 'a', texto: "Si mejoró la precisión técnica en comparación con la anterior iteración" },
      { id: 'b', texto: "esco'ecta Si los resultados del modelo satisfacen los criterios de éxito definidos con el negocio" },
      { id: 'c', texto: "Si los interesados se sienten confiados en el modelo después de una demostración" },
      { id: 'd', texto: "Si los científicos de datos siguen las normas de desarrollo acordadas" }
    ],
    correctas: ['b'],
    explicacion: "La decisión de preparación para la puesta en marcha evalúa el rendimiento modelo frente a los criterios de éxito establecidos por la empresa al inicio del proyecto, aquí la reducción del exceso de personal, no en contra de cualquier métrica técnica que el equipo prefiera la mejora de la precisión de la iteración muestra progreso, pero no dice nada acerca de cumplir el umbral de negocio que define el éxito Adherencia a las normas de desarrollo es una preocupación de garantía de calidad comprobada durante el desarrollo, no la prueba de decisión en esta puerta. La confianza de los interesados después de una demostración es el confort subjetivo y no puede sustituir el rendimiento medido contra criterios acordados."
  },
  {
    id: 'cp5-044', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Avalon Pharmaceuticals está realizando un estudio post-mercado utilizando IA para analizar los informes de eventos adversos presentados por los pacientes. Se pregunta al director del proyecto si el marco de privacidad de datos existente de la empresa es suficiente o si se necesitan prffocol específicos para regir cómo se manejan informes de pacientes identificables individualmente dentro del entorno de desarrollo de IA. ¿Qué enfoque aborda mejor esta pregunta?",
    opciones: [
      { id: 'a', texto: "Evaluar si las políticas de privacidad de datos existentes abarcan el manejo específico de información personal identificable y diseñar procedimientos seguros de manejo de datos para el ciclo de vida IA si existen lagunas" },
      { id: 'b', texto: "Sustitúyase informes de pacientes identificables individualmente con resúmenes anónimos agregados antes de que los datos entren en el entorno de desarrollo de la IA" },
      { id: 'c', texto: "Supongamos que las políticas de privacidad de datos existentes son suficientes porque la empresa ya cumple con las normas de datos de la industria farmacéutica" },
      { id: 'd', texto: "Restrict access to patient records to the data science team only and have each team member sign a confidentiality agreement" }
    ],
    correctas: ['a'],
    explicacion: "Evaluar si las políticas existentes abarcan procedimientos de manejo y diseño de PII específicos de Al para cualquier deficiencia es el enfoque correcto porque aplica análisis deliberado en lugar de suposición y produce protocolos concretos adaptados a los requisitos de manejo de datos del proyecto IA Assuming existing policies are sufficient ignores the possibility that IA development introduce patrones de acceso a datos y riesgos no cubiertos por estándares de datos farmacéuticos estándar. Restricting access to the data science team and using confidentiality agreements pruides access control but is not the same as a comprehensive set of secure data handling procedures for the IA lifecycle Replacing patient reports"
  },
  {
    id: 'cp5-045', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Ouenby Foods, un equipo de IA quiere utilizar datos de control de calidad de fábrica para un modelo de prevención de defectos. El equipo necesita saber quién puede autorizar el uso de esos conjuntos de datos, qué ules de manejo se aplican, y qué versiones se consideran autorizadas ¿Con quién debe conectar el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Los administradores y el equipo de supervisión oficialmente accou ntable para esos conjuntos de datos" },
      { id: 'b', texto: "El patrocinador ejecutivo que aprobó el presupuesto del proyecto de prevención de defectos" },
      { id: 'c', texto: "Los analistas que más recientemente construyeron tableros de control de calidad" },
      { id: 'd', texto: "Los gerentes de plantas cuyas fábricas generan la mayor parte de los registros" }
    ],
    correctas: ['a'],
    explicacion: "Los administradores y el equipo de supervisión rinden cuentas formalmente de los conjuntos de datos mantienen la autoridad sobre la aprobación del uso, reglas de manejo y versiones autorizadas, así que conectarse con ellos responde a las tres preguntas a la vez que los administradores de plantas generan los registros pero normalmente no controlan las reglas de la empresa para cómo los datos pueden usar los analistas de Dashboard saben los datos como consumidores, que ayuda con la interpretación pero no lleva autoridad sobre el uso. El patrocinador ejecutivo aprobó la financiación del proyecto, pero la autoridad presupuestaria no es la misma que la rendición de cuentas por activos específicos de datos."
  },
  {
    id: 'cp5-046', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Briarcombe Hospital está recopilando tres años de registros de nombramientos de su sistema de programación para un proyecto de predicción de espectáculos a través de la extracción, el director del proyecto IA aprende el trabajo de exportación silenciosamente salta citas cuyos códigos de clínicas fueron retirados el año pasado. El equipo está ansioso por empezar a modelar con lo que llegó. ¿Qué debe hacer el director del proyecto IA primero?",
    opciones: [
      { id: 'a', texto: "Pida al equipo de modelado que impute las citas desaparecidas de los registros que llegaron" },
      { id: 'b', texto: "Deje que el modelado comience y trate las citas saltadas como una opción de muestreo aceptable" },
      { id: 'c', texto: "Validar la integridad de los registros extraídos contra la fuente antes de liberar los datos al equipo de modelado" },
      { id: 'd', texto: "Reinicie el proyecto en la etapa de caso empresarial para renegociar el alcance de los datos" }
    ],
    correctas: ['c'],
    explicacion: "Validar la integridad y exactitud de los datos durante la recogida es una responsabilidad fundamental al tiempo que se reúne la fecha y un silencioso patrón de los códigos de clínica retirados significa que el extracto más largo coincide con la fuente, por lo que la reconciliación contra el sistema de programación debe venir primero. Dotar el modelado y llamar a la brecha una opción de muestreo disfraza un defecto de extracción como una decisión de diseño y podría Sias el modelo contra clínicas que fueron reorganizadas. Imputing entire missing appointment records fabrica la historia que existe en la fuente y simplemente debe ser re-extractado correctamente. Regresar a la etapa de caso de negocio es innecesario porque el requisito no cambia, sólo el trabajo de extracción es defectuoso."
  },
  {
    id: 'cp5-047', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los científicos de datos de Veridian Agritech escogieron una arquitectura neural profunda para un modelo de rendimiento agrícola porque se considera estado del arte. El director del proyecto IA pregunta por qué y no recibe ninguna justificación escrita, ninguna comparación con candidatos más simples, y ningún registro de los criterios utilizados. ¿Qué necesita el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "El respaldo de un consultor externo a la elección de arquitectura" },
      { id: 'b', texto: "Sustitución de la arquitectura profunda con la técnica más simple disponible" },
      { id: 'c', texto: "Una demostración de la arquitectura al patrocinador del proyecto" },
      { id: 'd', texto: "Criterios de selección documentados con una comparación registrada de enfoques candidatos" }
    ],
    correctas: ['d'],
    explicacion: "Revisar los criterios de selección de algoritmos y la documentación de decisiones es un deber básico de supervisión, por lo que el gerente del proyecto debe requerir criterios escritos y una comparación registrada que muestre por qué esta arquitectura superó las alternativas para este caso de uso. Forcing a switch to the simplest technique prejudges the outcome just as blindly as choose the trendiest one. Un endoso externo añade una opinión sin crear la lógica interna trazable que las auditorías y los equipos futuros necesitan. Demostrar el modelo al comportamiento del patrocinador muestra el comportamiento pero no produce ningún registro del enfoque fue seleccionado."
  },
  {
    id: 'cp5-048', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los científicos de datos del Granite Peak Bank piden una copia de los datos de los clientes de producción en sus portátiles personales para que puedan iniciar una prueba de crédito de concepto rápidamente El director del proyecto A' debe habilitar el trabajo sin exponer registros sensibles. ¿Qué debería establecer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Un período de espera hasta que el endurecimiento de seguridad de producción esté completo" },
      { id: 'b', texto: "Un extracto enmascarado distribuido al equipo por correo electrónico seguro" },
      { id: 'c', texto: "Un entorno de desarrollo aislado con acceso controlado a los datos" },
      { id: 'd', texto: "Encriptación de disco Laptop con un acuerdo de uso aceptable firmado" }
    ],
    correctas: ['c'],
    explicacion: "Un entorno de desarrollo aislado con acceso controlado es correcto porque la coordinación del espacio de trabajo requiere entornos seguros donde los datos sensibles permanecen dentro de los límites gobernados mientras el equipo trabaja. Encriptación portátil con un acuerdo todavía dispersa los registros de clientes en puntos finales que se pueden perder o violar. Un extracto enmascarado enviado por correo electrónico crea copias desviadas y opciones de enmascaramiento que pueden despojar los campos que el modelo necesita. Un período de espera bloquea la prueba del concepto cuando un entorno compatible puede ser proporcionado en paralelo."
  },
  {
    id: 'cp5-049', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Bramblewood Publishing redactó la justificación de financiación de una herramienta de triage manuscrito de IA hace varios meses. Desde entonces, un pequeño ensayo produjo mediciones reales de tiempo de revisión ahorrado y tasas de error. El comité de inversiones se reúne pronto para decidir sobre la financiación completa. ¿Qué debe hacer el director del proyecto IA con el documento original?",
    opciones: [
      { id: 'a', texto: "Reemplazarlo con el informe del juicio ya que ahora existen datos reales" },
      { id: 'b', texto: "Diferir la decisión del comité hasta que un segundo juicio confirme los resultados" },
      { id: 'c', texto: "Refinarlo para que las proyecciones reflejen las pruebas del juicio" },
      { id: 'd', texto: "Dejarlo sin cambios para que el comité vea las suposiciones originales" }
    ],
    correctas: ['c'],
    explicacion: "Revisar y refinar la documentación de casos de negocios a medida que emergen nuevas pruebas mantiene la decisión de financiación basada en la información disponible de Sest, por lo que actualizar las proyecciones con mediciones de juicio es el derecho mue Presentar el documento sin cambios pide al comité decidir sobre supuestos que el equipo ya sabe que están \"Otdated. Sustituir el informe del juicio elimina por sí solo la estructura financiera y de justificación que el comité necesita aplazar un segundo juicio retrasa una decisión que las pruebas existentes ya pueden informar, y el comité puede pesar niveles de confianza."
  },
  {
    id: 'cp5-050', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El director del proyecto IA de Hazelmoor Distillery reunió un documento de financiación para una iniciativa de consistencia de mezcla que está llena de pruebas estadísticas densas y detalles de rendimiento modelo Durante la primera reunión informativa los ejecutivos perdieron interés rápidamente, y el comité directivo ha pedido una versión que la junta responda realmente a ¿Cómo debería el director del proyecto revisar el material?",
    opciones: [
      { id: 'a', texto: "Pregunte al científico de datos principal para entregar el material idéntico en su lugar" },
      { id: 'b', texto: "Cortar las secciones financieras para que la información sea más corta" },
      { id: 'c', texto: "Añadir evidencia técnica más profunda para que el análisis aparezca más riguroso" },
      { id: 'd', texto: "Rechazar el contenido como una historia empresarial que une la inversión a los valores de liderazgo de resultados" }
    ],
    correctas: ['d'],
    explicacion: "Las audiencias ejecutivas financian los resultados, por lo que el gerente del proyecto debe desarrollar una narrativa convincente que conecta la inversión de IA con los resultados empresariales que la junta se preocupa utilizando las pruebas técnicas como soporte en lugar del titular. La adición de pruebas técnicas más profundas repite el problema que causó que los ejecutivos se retiraran. Cambiar el presentador manteniendo el material idéntico no aborda por qué el mensaje falló. Cortar las secciones financieras elimina exactamente el contenido que un público de financiación necesita tomar una decisión."
  },
  {
    id: 'cp5-051', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Keystone Data Solutions está completando un proyecto de oleoducto de datos IA a gran escala para un cliente gubernamental A medida que el director del programa envuelve la iniciativa, el cliente pide una presentación formal sobre lo que el proyecto entregó, cuáles fueron los objetivos originales, y cómo los resultados obtenidos se comparan con esos objetivos El administrador del programa tiene registros minuciosos pero ninguna plantilla de resumen ejecutivo preconstruida ¿Cuál es la forma más eficaz de estructurar la presentación final del proyecto?",
    opciones: [
      { id: 'a', texto: "Enfóquese la presentación sobre métricas de rendimiento de modelos técnicos, ya que son la medida más objetiva del éxito del proyecto." },
      { id: 'b', texto: "Delegar la presentación final al líder del equipo de ciencia de datos, que tiene el conocimiento más profundo de los entregables técnicos." },
      { id: 'c', texto: "Organizar la presentación sobre los criterios de éxito originales, mostrando resultados medidos respecto de cada criterio y luego presentar lecciones aprendidas y recomendaciones." },
      { id: 'd', texto: "Presentar una línea cronológica de tiempo de proyecto destacando los hitos, luego dejar la comparación de resultados a un informe escrito." }
    ],
    correctas: ['c'],
    explicacion: "Organizar la presentación final sobre los criterios de éxito originales y comparar los resultados medidos en su contra cumple con la responsabilidad de la IA PM de documentar los resultados del proyecto y alcanzar los objetivos de una manera que sea directamente relevante a la solicitud expresada por el cliente del gobierno. Un cronograma cronológico no aborda directamente la comparación que el cliente pidió Focusing sólo en métricas técnicas omite el impacto empresarial y el logro objetivo, lo que es lo que el cliente quiere ver Delegando la presentación final al equipo técnico transfiere la responsabilidad del director del programa por presentar los resultados del proyecto al liderazgo."
  },
  {
    id: 'cp5-052', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El equipo de IA de Wexford Office Supply se basa en algunos expertos merchandising para explicar los datos de producto y demanda, pero las consultas suceden por conversación de pasillo Los expertos se quejan de interrupciones constantes, y varias respuestas ya se han perdido y se han reordenado. El proyecto tiene meses de trabajo de datos pendientes. ¿Qué debe establecer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "A tiempo completo de los expertos merchandising al equipo de IA" },
      { id: 'b', texto: "Una regla que todas las preguntas de expertos recorren el patrocinador del proyecto" },
      { id: 'c', texto: "Una única revisión final de fase donde todas las preguntas son respondidas inmediatamente" },
      { id: 'd', texto: "Un canal acordado y una cadencia para consultas de expertos con respuestas grabadas" }
    ],
    correctas: ['d'],
    explicacion: "Un canal y cadencia acordados con respuestas grabadas es correcto porque la participación de expertos en materias temáticas incluye establecer acuerdos de comunicación que respeten su tiempo y preserven lo que explican. Batir cada pregunta en una revisión de fin de fase deja que el equipo bloquee o adivine durante semanas entre sesiones. Asignar a los expertos a tiempo completo supera a las personas que cumplen funciones operacionales y excede lo que las consultas requieren preguntas de Routing a través del patrocinador inserta un relé con conocimiento de datos mo y ralentiza cada intercambio."
  },
  {
    id: 'cp5-053', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Vellumworks Printing's draft justification for an IA print defect detection initiative describes the expected benefits with frases like dramatic savings and major quality gains, with no evidence behind them. El director del proyecto IA sabe que el comité ejecutivo examina atentamente cada solicitud de financiación. ¿Qué debería hacer el director del proyecto con el proyecto?",
    opciones: [
      { id: 'a', texto: "Reclasificar las vagas declaraciones de beneficios como riesgos del proyecto" },
      { id: 'b', texto: "Presentar el proyecto ahora porque el detalle de apoyo puede seguir la financiación" },
      { id: 'c', texto: "Trace every claimed benefit to verifiable evidence before submission" },
      { id: 'd', texto: "Relocate las reclamaciones no apoyadas en un apéndice técnico" }
    ],
    correctas: ['c'],
    explicacion: "Examinar y refinar la documentación de casos de negocios significa basar cada beneficio reclamado en pruebas verificables, como los costos de defecto de referencia y las tasas de reelaboración medidas, antes de que la solicitud alcance el escrutinio. La presentación de mow y detalles prometedores más adelante invita el rechazo de un comité conocido como reclamos de sonda. Las declaraciones de los beneficios reclasificadores como riesgos confunden diferentes secciones del caso y siguen dejando los beneficios sin apoyo. Moving unsupported claims to an appendix resets the weakness without resolve it."
  },
  {
    id: 'cp5-054', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Fernwhistle Apparel lanzó recientemente un modelo de predicción de retorno de producto. Desde el lanzamiento, una alerta modelo no fue contestada durante días porque los grupos de ingeniería de datos, soporte de TI y análisis cada uno asumió que otro grupo lo poseía. El proyecto se cerrará a finales del mes. ¿Qué debe hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Que los tres grupos negocien la propiedad informalmente a medida que llegan nuevas alertas" },
      { id: 'b', texto: "Ruta todas las alertas de producción al desarrollador modelo original por defecto" },
      { id: 'c', texto: "Mantener el punto de decisión para las alertas de producción después de que el proyecto cierre" },
      { id: 'd', texto: "Definir y comunicar la propiedad operacional de cada actividad de apoyo antes del cierre" }
    ],
    correctas: ['d'],
    explicacion: "Definir funciones y responsabilidades para la fase operacional antes de que el proyecto cierre elimina la ambigüedad que deja que la alerta se sienta sin respuesta, que es un elemento central de la transición de una solución IA a operaciones negociación informal ya que las alertas llegan repite la misma confusión cada vez que ocurre algo nuevo. El director del proyecto sigue siendo el punto de decisión después del cierre contradice el carácter temporal del papel del proyecto y bloquea una transferencia limpia. Routing everything to the original developer creates a single point of failure and ignores that support spans data, infrastructure, and business questions."
  },
  {
    id: 'cp5-055', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El equipo financiero de Hollyfort Retail está construyendo la justificación de inversión para una iniciativa de planificación de la demanda de IA El analista financiero modela el costo como un software de una sola vez con un mantenimiento menor, y pide al gerente del proyecto IA que confirme El gerente del proyecto sabe que el modelo necesitará reentrenamiento, monitoreo y mantenimiento de tuberías de datos.¿Cómo debe responder el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Aumentar las proyecciones de beneficios suficientes para absorber cualquier coste subestado" },
      { id: 'b', texto: "Pida al analista que agregue un porcentaje general de contingencia para cubrir desconocidos" },
      { id: 'c', texto: "Confirme el modelo del analista ya que la estimación de costos es una responsabilidad financiera" },
      { id: 'd', texto: "Camina al analista a través de los conductores de costos técnicos recurrentes para que la estimación los refleje" }
    ],
    correctas: ['d'],
    explicacion: "Apoyar la justificación significa poner fin a los conocimientos técnicos en los que la financiación carece, por lo que el gerente del proyecto debe explicar los costos recurrentes de reentrenamiento, monitoreo y oleoductos que hacen que los sistemas de IA se comportan más como servicios continuos que los que construye una sola vez Confirmando un modelo conocido por estar equivocado abdica los mismos conocimientos especializados que las necesidades de colaboración. Inflating benefits to offset understated costs stacks one distortion on another and corrupts the analysis in both directions. Un buries genérico de contingencia conocido, costos de nombre dentro de un búfer no explicado en lugar de dejar que los responsables de tomar decisiones los vean."
  },
  {
    id: 'cp5-056', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los ingenieros de DriftSay Cruises proponen destacar el espacio de trabajo del proyecto IA en una cuenta de nube personal para evitar un lento proceso de adquisición Los datos de entrenamiento incluirán detalles de la reserva de pasajeros La presión temporal es real, y los ingenieros argumentan que la cuenta es sólo temporal. ¿Cómo debe responder el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Aprobar la cuenta temporalmente y migrar después de la presentación del modelo" },
      { id: 'b', texto: "Permitir la cuenta pero restringirla a extractos anónimos solamente" },
      { id: 'c', texto: "Proporcione el espacio de trabajo a través de canales que satisfagan los requisitos de seguridad y supervisión de la empresa" },
      { id: 'd', texto: "Pregunte a los ingenieros a eliminar los datos de los pasajeros después de cada sesión" }
    ],
    correctas: ['c'],
    explicacion: "Asegurar que el espacio de trabajo cumpla con los requisitos de seguridad y gobernanza no es negociable cuando se trata de detalles de pasajeros, por lo que el director del proyecto debe proveer a través de canales sancionados incluso bajo presión programada. Una aprobación temporal pone datos personales regulados fuera del control de comparación durante la fase más arriesgada, y los arreglos temporales tienden a persistir. Restricting the account to anonymized extracts still establishes an unsanctioned environment and assumeds anonymization is done flawlessly without oversight Eliminating data after each session is unverifiable and leaves exposure throughout every working day."
  },
  {
    id: 'cp5-057', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Granite Valley Credit Union está implementando un modelo IA que ayuda a los oficiales de préstamo a presentar solicitudes que requieren una revisión más cercana. El jefe de riesgo pregunta al director del proyecto IA si la operación del modelo cumple con los requisitos de préstamos justos del sector financiero Actualmente, el director del proyecto no dispone de un mecanismo oficial para demostrar el cumplimiento en curso. ¿Qué debe establecer el director del proyecto para satisfacer este requisito?",
    opciones: [
      { id: 'a', texto: "Un examen de rendimiento modelo programado anualmente con el equipo de ciencia de datos para evaluar si el modelo aún cumple con sus objetivos de precisión originales" },
      { id: 'b', texto: "Un proceso de asistencia a los oficiales de préstamo para informar de cualquier solicitud que creen que fue insignia incorrectamente por el modelo" },
      { id: 'c', texto: "Un mecanismo de monitoreo y reporte de cumplimiento que rastrea continuamente si las decisiones insignias del modelo se alinean con estándares de préstamos justos y produce documentación para revisión regulatoria" },
      { id: 'd', texto: "Un programa piloto donde un subconjunto de aplicaciones se procesa manualmente en paralelo con el modelo para comparar resultados" }
    ],
    correctas: ['c'],
    explicacion: "Un mecanismo de vigilancia y presentación de informes sobre el cumplimiento que realiza un seguimiento continuo de la armonización de las decisiones con las normas de préstamos justos y produce documentación para los reguladores es el mecanismo correcto porque proporciona pruebas de cumplimiento en curso y verificables. Un proceso de asistencia a un oficial de préstamos captura excepciones individuales pero no produce pruebas sistemáticas de cumplimiento que el oficial de riesgo necesita. Un piloto paralelo que compara los resultados del modelo y el manual es un método útil de ensayo durante el desarrollo, pero no es un mecanismo de cumplimiento permanente sostenible para un modelo desplegado. Un examen anual de precisión con el equipo de ciencia de datos aborda el rendimiento del modelo pero no está diseñado para evaluar las dimensiones de cumplimiento regulatorio como la justa"
  },
  {
    id: 'cp5-058', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Nettlebay Seafoods está presupuestando el hardware informático para un proyecto de clasificación de capturas de IA. La propuesta del proveedor de imágenes incluye un gran grupo de procesamiento tamaño de sus clientes más grandes, y el plomo de la compra quiere ordenar que se bloqueara en los precios. El director del proyecto IA aún no ha visto ningún análisis de las propias cargas de trabajo del proyecto. ¿Qué debe hacer el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Ordene la mitad del grupo propuesto como compromiso entre costo y capacidad" },
      { id: 'b', texto: "Aprobar el orden ya que el proveedor conoce las demandas de hardware de su propio producto" },
      { id: 'c', texto: "Postpone cada decisión de hardware hasta que termine el modelo" },
      { id: 'd', texto: "Evaluar las cargas reales de capacitación y producción del proyecto antes de comprometerse a cualquier hardware" }
    ],
    correctas: ['d'],
    explicacion: "• Las necesidades de infraestructura deben derivarse de las propias cargas de trabajo de desarrollo y producción de este proyecto, como volúmenes de imágenes, tamaño de modelo y tiempos de respuesta requeridos, y sólo entonces coincidieron con las propuestas de proveedores. Aprobando la cotización sobre la autoridad del proveedor tamaño la compra a las operaciones de las compañías de cnher y a los incentivos del vendedor. Ordenar la mitad del grupo sustituye un número sin formato por otro Postponing all hardware decisions until the model is finished leaves the team ncthing to train on and stalls development entirelyc"
  },
  {
    id: 'cp5-059', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Bramblewood Los juguetes planean un modelo de recomendación que combinará el comportamiento de navegación de los niños con historias de compra del hogar. Antes de recopilar cualquiera de estos datos, el director del proyecto IA quiere una visión disciplinada de lo que podría ir mal para la gente que los datos describen. ¿Qué debería hacer la comisión del director del proyecto?",
    opciones: [
      { id: 'a', texto: "Un rediseño del banner de consentimiento del sitio web" },
      { id: 'b', texto: "Una prueba de penetración del infrastructu de almacenamiento re" },
      { id: 'c', texto: "Un examen competitivo de los sistemas de recomendación rivales" },
      { id: 'd', texto: "Evaluación del impacto de la privacidad del uso previsto de datos" }
    ],
    correctas: ['d'],
    explicacion: "Una evaluación del impacto de la privacidad es el ejercicio estructurado para evaluar los riesgos a los sujetos de datos antes de que comience el uso sensible, y combinar el comportamiento de los niños con las compras en el hogar es precisamente el perfil de alto riesgo que existe para una prueba de penetración sonda de defensas técnicas pero dice nada acerca de si el uso en sí mismo perjudica a la gente descrita. Una revisión competitiva informa de la estrategia de productos en lugar de arriesgarse a las personas. El nuevo diseño del banner de consentimiento implementa un control antes de que la evaluación haya determinado qué controles requieren los riesgos."
  },
  {
    id: 'cp5-060', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Westhollow Energy, el director del proyecto IA ha identificado expertos en tres departamentos que pueden responder preguntas sobre medición, facturación y datos de salida. Semanas en el proyecto, las preguntas de datos se encuentran sin respuesta en bandejas personales y el trabajo de preparación sigue estancado mientras el equipo espera. ¿Qué debería hacer el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Batir las preguntas abiertas para una sola revisión al final de la fase" },
      { id: 'b', texto: "Incrustar a los tres expertos a tiempo completo en el equipo del proyecto IA" },
      { id: 'c', texto: "Ruta cada pregunta de datos a través del patrocinador de priorización" },
      { id: 'd', texto: "Establecer un canal acordado y cadencia de respuesta para enviar preguntas de datos a cada experto" }
    ],
    correctas: ['d'],
    explicacion: "Establecer canales de comunicación con expertos identificados es el seguimiento explícito después de localizarlos, y un canal acordado con una cadencia de respuesta convierte los correos electrónicos ad hoc en un flujo confiable Embedding three experts full time over-allocates people their departments still need and is rarely sustainable. Las preguntas de batido al final de la fase permiten que el trabajo de preparación bloqueado se apilen contra el cronograma. Las preguntas de embalse a través del patrocinador añaden un salto que ralentiza las respuestas y mal utiliza el papel del patrocinador."
  },
  {
    id: 'cp5-061', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Holloway Retail Group fue en vivo con un modelo de recomendación de productos y quiere confirmar el despliegue logrado antes de que el equipo del proyecto mueva om El director del proyecto IA programa una revisión posterior al despliegue. ¿Qué calzado que revisión verifica principalmente?",
    opciones: [
      { id: 'a', texto: "Si la funcionalidad del sistema en vivo, el rendimiento y el acceso del usuario coinciden con los criterios de éxito del despliegue" },
      { id: 'b', texto: "Si el equipo de ciencia de datos siguió la plantilla estándar de seguimiento de experimentos durante la capacitación" },
      { id: 'c', texto: "Si la arquitectura interna del modelo coincide con el documento de diseño original" },
      { id: 'd', texto: "Si el equipo de adquisiciones obtuvo el menor costo de alojamiento para el medio ambiente" }
    ],
    correctas: ['a'],
    explicacion: "La verificación posterior al despliegue confirma que el sistema de producción se comporta como el plan de despliegue definido: la funcionalidad funciona para usuarios reales, el rendimiento cumple con los objetivos establecidos antes de ir a vivir y el acceso se proporciona correctamente. Comprobar el costo de alojamiento es una preocupación de adquisición que no confirma la solución funciona según lo previsto. Comparar la arquitectura en vivo con el documento de diseño es una actividad de desarrollo-fase, por go-live, el enfoque pasa de la conformidad del diseño a la realidad operacional. Revisar el cumplimiento del seguimiento de experimentos es un control de proceso de desarrollo modelo, no evidencia de un despliegue exitoso."
  },
  {
    id: 'cp5-062', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Lumenfield Media está planeando personal para un programa IA que recomienda artículos a los lectores. El trabajo comienza con meses de etiquetado y exploración de datos pesados, cambios a la construcción de modelos, luego termina con ingeniería de integración Un jefe de departamento propone asignar al equipo completo de cada especialidad desde el inicio hasta el cierre. ¿Qué propone el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Diferir todas las decisiones de dotación de personal hasta que comience el trabajo de construcción modelo" },
      { id: 'b', texto: "Staff only the data specialist and extend their assignment to cover later phases" },
      { id: 'c', texto: "Aceptar personal de resistencia completa para que el equipo desarrolle cohesión desde el primer día" },
      { id: 'd', texto: "Asignar especialistas a las fases del proyecto donde se necesitan sus habilidades y rampar en consecuencia" }
    ],
    correctas: ['d'],
    explicacion: "Los proyectos de IA pasan por fases con necesidades de habilidad muy diferentes, por lo que el plan de recursos debe mapear cada especialidad a las fases que necesitan t, aportando soporte de etiquetado temprano, modeladores en el medio, e ingenieros de integración tardío Personal de resistencia completa para todos deja a los especialistas caros ocio durante meses e infla el presupuesto que el proyecto debe pagar. Los especialistas en la búsqueda de datos a través de la construcción de modelos y la integración asignan trabajo a personas sin las habilidades para ello.Deferir las decisiones de la plantilla hasta mediados del proyecto garantiza que la fase de etiquetado inicial comience sin recursos."
  },
  {
    id: 'cp5-063', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Sunsail Components' director de proyecto IA es responsable de una iniciativa de detección de defectos de calidad. El equipo de ingeniería de datos ha entregado un conjunto de datos brutos, pero antes de que pueda comenzar el entrenamiento modelo, el equipo debe limpiar los valores perdidos, codificar campos categóricos y escalar las características métricas nu. El gerente del proyecto quiere asegurar que estos pasos se apliquen constantemente cada vez que el eje del oleoducto ¿Qué debería priorizar el director del proyecto para apoyar esta consistencia?",
    opciones: [
      { id: 'a', texto: "Skip preprocessing and pass raw data directly to the model to save time" },
      { id: 'b', texto: "Pregunte a los ingenieros de datos para transformar los datos manualmente cada vez que se activa el entrenamiento" },
      { id: 'c', texto: "Oversee the design of a documented and reproducible data cleaning and preprocessing workflow that can be" },
      { id: 'd', texto: "Delegar todas las decisiones de transformación de datos enteramente al equipo de formación modelo sin documentación" }
    ],
    correctas: ['c'],
    explicacion: "Supervisar el diseño de un flujo de trabajo preprocesador documentado y reproducible garantiza que la limpieza, la codificación y el escalado se apliquen de la misma manera cada vez que se ejecuta el gasoducto, que es esencial para el comportamiento y auditabilidad modelo consistentes. Pedir a los ingenieros de datos que transformen los datos manualmente cada vez introduce la variación humana que socava la reproducibilidad. Pasar datos crudos directamente al modelo sin preprocesamiento normalmente produce un rendimiento de modelo deficiente y no es viable para la producción. Delegar decisiones de transformación sin documentación crea dependencias indocumentadas que no pueden ser reproducidas o revisadas."
  },
  {
    id: 'cp5-064', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Calderwell Appliances quiere reducir las visitas de servicio de campo repetidas, el patrocinador ejecutivo ya ha dicho al gerente del proyecto IA que la respuesta es una herramienta de programación de IA. Los despachadores de Frontline sugieren que el verdadero problema puede estar en otro lugar del proceso de reparación ¿Qué debe hacer el gerente del proyecto primero?",
    opciones: [
      { id: 'a', texto: "Pida al equipo de datos que invente los registros de programación disponibles para la capacitación" },
      { id: 'b', texto: "Construir un prototipo de la herramienta de programación para probar la idea del patrocinador rápidamente" },
      { id: 'c', texto: "Conoce a los despachadores y técnicos para entender los puntos de dolor subyacentes" },
      { id: 'd', texto: "Herramientas de programación de Benchmark de varios proveedores de tecnología contra la visión del patrocinador" }
    ],
    correctas: ['c'],
    explicacion: "Conocer con los despachadores y técnicos supera los puntos reales de dolor de negocio antes de que se conecte cualquier solución, que es el primer paso para identificar el problema a resolver Construyendo un prototipo compromete esfuerzos para una solución que pueda apuntar el problema equivocado por completo. Inventorying scheduling records assumeds scheduling is the confirmed problem, so it puts data work ahead of problem definition. Las herramientas de Benchmarking proveedor también aceptan el encuadre del patrocinador sin probarlo contra lo que están experimentando las personas más cercanas al trabajo."
  },
  {
    id: 'cp5-065', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tannerly Furniture ha montado su lago de datos del proyecto para un modelo de riesgo proveedor. Una revisión muestra a todos los asociados al programa más amplio, incluyendo contratistas sin responsabilidades de datos, puede leer todo, hasta el proveedor confidencial ¿Qué debe implementar el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Permissions scoped so each role reached only the data its work requires" },
      { id: 'b', texto: "Acceso abierto continuo para que el equipo extendido siga moviéndose rápidamente" },
      { id: 'c', texto: "Cifrado del lago con una contraseña compartida para el equipo del proyecto" },
      { id: 'd', texto: "Eliminación de cada cuenta de contratista del entorno del programa" }
    ],
    correctas: ['a'],
    explicacion: "Aplicar controles de acceso y permisos de los usuarios para los recursos de datos de proyectos significa analizar el acceso a las necesidades de función, lo que protege la fijación de precios confidenciales de los proveedores y deja a cada contribuyente capaz de trabajar. El acceso abierto intercambia una exposición de confidencialidad real para comodidad. Eliminar todas las cuentas de contratistas es incorrecto, ya que algunos contratistas pueden tener derechos legítimos de datos en el programa. Una sola contraseña compartida derrota la rendición de cuentas porque el medio ambiente ya no puede atribuir acciones a los individuos."
  },
  {
    id: 'cp5-066', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Un director de proyecto IA en Vexford Auto Pans ha confirmado que un modelo de previsión de demanda se basará en sistemas de inventario, ventas y proveedores en dos divisiones. Antes de comenzar la planificación de extracción, el gerente del proyecto quiere evitar que el equipo sea bloqueado a mitad de fase. ¿Qué debe documentarse ahora para cada fuente?",
    opciones: [
      { id: 'a', texto: "El valor monetario estimado de cada fuente contribuye a prever la exactitud" },
      { id: 'b', texto: "El programa de copia de seguridad de cada sistema fuente sigue en caso de que se pierdan los extractos" },
      { id: 'c', texto: "Quien posee cada fuente y qué permisos se requieren para acceder a ella" },
      { id: 'd', texto: "El formato de archivo preferido el equipo de modelado quiere cada extracto entregado en" }
    ],
    correctas: ['c'],
    explicacion: "Documentar quién posee cada fuente y qué permisos se requieren superficies las aprobaciones que debe obtener el equipo, que es el clásico bloqueador de fase media cuando múltiples divisiones controlan los sistemas. Estimar la contribución monetaria de cada fuente a la precisión es especulativa antes de que se haya evaluado cualquier dato y no desbloquee el acceso. Los formatos de archivo preferidos son un detalle de extracción útil, pero un desajuste causa retrabajo menor, no un proyecto estancado. Los horarios de respaldo pertenecen a los equipos de operaciones de los sistemas fuente y tienen poca relación con si el proyecto puede llegar a los datos en alL"
  },
  {
    id: 'cp5-067', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Meridian Property Group está implementando un modelo IA para estimar las valoraciones de propiedades para la subescritura hipotecaria. El CFO pide que el director del proyecto prepare un informe resumiendo cómo se construyó el modelo A, qué decisiones se tomaron y por quién, y qué supervisión se había establecido en todo el proyecto Este informe se compartirá con el consejo de administración y también se podrá proporcionar a los auditores externos. ¿Qué debe producir el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Un informe de rendición de cuentas para el examen ejecutivo y reglamentario que documenta las decisiones de desarrollo del modelo IA C, las aprobaciones de los interesados y los mecanismos de supervisión aplicados en todo el proyecto" },
      { id: 'b', texto: "Un documento de especificación de requisitos del sistema que enumera los requisitos funcionales y no funcionales que el modelo fue diseñado para satisfacer" },
      { id: 'c', texto: "Conciliación del presupuesto del proyecto comparando los costos previstos frente a los reales en cada fase del proyecto IA" },
      { id: 'd', texto: "Un informe de prueba de aceptación de los usuarios que muestra los resultados del uso final realizado antes de la aprobación del modelo para la producción" }
    ],
    correctas: ['a'],
    explicacion: "Un informe de rendición de cuentas preparado para el examen ejecutivo y reglamentario es el artefacto específico que el CFO está solicitando: documenta decisiones de desarrollo modelo IA, registros que los aprobaron y describe los mecanismos de supervisión existentes. Una especificación de requisitos del sistema documenta lo que se supone que debe hacer el modelo, pero no registra la gobernanza y el historial de decisiones que la junta y los auditores necesitan. Un informe de evaluación de aceptación del usuario aborda la validación del usuario final pero cubre sólo una fase y un público. Una reconciliación presupuestaria es un artefacto de gestión financiera, no un informe de rendición de cuentas sobre el desarrollo del modelo y el exceso de capacidad."
  },
  {
    id: 'cp5-068', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Grayhawk Rail está iniciando la fase de datos de un proyecto de predicción de mantenimiento locomotora El equipo de datos propone solicitar cada conjunto de datos las tiendas de división de ingeniería, argumentando que más datos siempre son más seguros. El objetivo declarado del proyecto es reducir las fallas no planificadas del motor en las rutas de largo recorrido. ¿Qué debe hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Pida a la división de ingeniería que decida cuál de sus conjuntos de datos son más útiles" },
      { id: 'b', texto: "Aprobar la amplia solicitud para que el equipo nunca tenga que volver para más datos" },
      { id: 'c', texto: "Diferir la solicitud de datos hasta que se haya seleccionado un algoritmo de modelado" },
      { id: 'd', texto: "Alcance la solicitud de datos a lo que el objetivo de la falla del motor y caso de uso realmente demanda" }
    ],
    correctas: ['d'],
    explicacion: "Esconder la solicitud a lo que el objetivo de la falla del motor exige mapas de los requisitos de datos para el objetivo del negocio y el caso de uso, lo que mantiene la recolección deliberada y aw•ids esfuerzo perdido. Aprobar una solicitud de todo carga el proyecto con datos irrelevantes, coste añadido y exposición de cumplimiento agregada sin un propósito definido Preguntar a la división de ingeniería para elegir invierte la responsabilidad, ya que los propietarios de datos conocen sus sistemas pero no los requisitos de la solución. El aplazamiento hasta que se elija un algoritmo invierte la lógica de la metodología de datos primero, ya que los requisitos fluyen del problema en lugar de una opción modelo"
  },
  {
    id: 'cp5-069', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northern Trail Outfitters está preparando un conjunto de datos para un modelo de predicción de retorno de productos. El equipo de preparación de datos ha limpiado los datos y creado un conjunto de características derivadas El director del proyecto IA está examinando ahora si el conjunto de datos preparado está listo para proceder a la formación modelo. El equipo informa de varias columnas con altas tasas de valores perdidos que fueron imputados mediante sustitución media en todo el conjunto de datos antes de que se aplicara cualquier división de pruebas de trenes. ¿Qué debería la bandera del director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Aprobar el conjunto de datos condicional en el equipo que documenta el método de imputación en la tarjeta modelo." },
      { id: 'b', texto: "Indique la tasa de valor que falta demasiado alta y requiera que el equipo recoja fuente adicional" },
      { id: 'c', texto: "Aprobar el conjunto de datos porque la sustitución media es una técnica de imputación estándar y aceptada." },
      { id: 'd', texto: "Marcar el proceso de imputación porque las estadísticas de imputación informática en el conjunto de datos completo antes de dividir pueden contaminar el conjunto de evaluación con información" }
    ],
    correctas: ['d'],
    explicacion: "La validación de los resultados de la preprocesación y transformación de datos es una responsabilidad del administrador de proyectos de IA en la supervisión de la calidad de los datos para la preparación de modelos. Imputing missing values using statistics computed from the full dataset before a train-test split is applied introduces data leakage: the evaluation set becomes influence Información sintética que debe tener lugar, haciendo resultados de evaluación engañosamente optimistas Este es un problema de calidad preprocesante que el gerente del proyecto debe marcar antes de la formación de los ingresos. La aprobación de la sustitución media sin examinar cuándo y cómo se aplicó se pierde el riesgo de fuga. Requiring additional source data addresses a data volume concern but not the leakage introduced by"
  },
  {
    id: 'cp5-070', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Vannora Health, un gestor de proyectos de IA está preparando datos de no presentación de pacientes para el modelado. Los científicos proponen redactar sus umbrales de calidad cnvn para el extracto de programación. El gerente del proyecto aprende que la organización ya tiene una función central que mantiene definiciones de datos empresariales y reglas de calidad para datos clínicos y de programación. ¿Qué debe hacer el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Adoptar las reglas de validación que envían como defectos con el software del proveedor del sistema de programación" },
      { id: 'b', texto: "Diferir criterios de calidad hasta superficies de entrenamiento modelo que importan los problemas de datos" },
      { id: 'c', texto: "Que el proyecto defina umbrales independientes para que el trabajo de modelado no sea retrasado por grupos externos" },
      { id: 'd', texto: "Ata Connect con los administradores de datos y el equipo de gobernanza para que los criterios de calidad de los proyectos se ajusten a las normas establecidas" }
    ],
    correctas: ['d'],
    explicacion: "Conectarse con la administración existente y la función gobernación.mce reutiliza definiciones examinadas y reglas de calidad, mantiene el proyecto coherente con las normas de la empresa, y evita el trabajo redundante. La definición de umbrales independientes duplica el esfuerzo y los riesgos que contravienen las normas que sigue el resto de la organización. Las reglas de validación predeterminada del vendedor reflejan supuestos genéricos en lugar de las propias definiciones de la organización para datæ clínica y de programación Esperar el entrenamiento modelo para exponer problemas empuja decisiones de calidad demasiado tarde, cuando la retrabajo es más caro."
  },
  {
    id: 'cp5-071', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Highline Grocers está mapeando donde vive el modelo de marcado-o$mization. El equipo asumió que todo el historial de ventas se encuentra en el almacén central, pero los gerentes de tiendas revelan que los detalles de promoción local se rastrean en hojas de cálculo departamentales que nunca se sincronizan en el río arriba. Las tendencias influyen fuertemente en el resultado que el modelo debe predecir. ¿Cómo debe responder el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Pedir a las tiendas que suspendan el seguimiento local para que el almacén se complete" },
      { id: 'b', texto: "Extender el mapa fuente para incluir los archivos departamentales antes de finalizarlo" },
      { id: 'c', texto: "Tratar las hojas de cálculo como fuera de alcance porque son archivos no gestionados" },
      { id: 'd', texto: "Modelo sin detalles de promoción y marcar la omisión como una suposición" }
    ],
    correctas: ['b'],
    explicacion: "Extender el mapa de la fuente es correcto porque la identificación de la fuente debe capturar cada ubicación que contiene datos que impulsa el resultado previsto, incluyendo archivos departamentales informales. Tratar las hojas de cálculo como fuera de alcance ignora a un conductor conocido y Sake un punto ciego en el modelo Descontinuar el seguimiento local cambia el comportamiento futuro pero no hace nada para recuperar los registros de promoción históricos que requiere el entrenamiento. Modelar sin detalles de promoción y registrar una suposición envía a sabiendas un modelo más débil cuando los datos son realmente accesibles."
  },
  {
    id: 'cp5-072', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics está lanzando un modelo IA que personaliza planes de entrenamiento para atletas recreativas. El equipo de productos planea utilizar los datos de rendimiento GPS de cada atleta, historial de frecuencia cardíaca y registros de lesiones autorespuestas Se pide al administrador del programa IA que confirme que el enfoque de manejo de datos es adecuado antes de que comience a bordo ¿Qué debe verificar primero el director del programa?",
    opciones: [
      { id: 'a', texto: "Que existen protocolos de gobernanza de datos para clasificar y controlar cómo se utiliza cada categoría de datos personales" },
      { id: 'b', texto: "Que el modelo produce recomendaciones precisas de formación personalizada sobre validación" },
      { id: 'c', texto: "Que el equipo de ingeniería de datos ha completado el sistema de características para los tres tipos de datos" },
      { id: 'd', texto: "Que la organización tiene la infraestructura para almacenar datos de atletas de forma segura durante el programa" }
    ],
    correctas: ['a'],
    explicacion: "Antes de a bordo de los atletas y recoger sus datos personales, el administrador del programa debe verificar que los protocolos de gobernanza de datos clasifican y controlan cómo se utiliza cada categoría de PII a lo largo del flujo de trabajo de IA El rendimiento preciso de los modelos en los datos de validación es un control de calidad, no una verificación de gobernanza de privacidad La terminación del oleoducto es un hito de desarrollo, no una condición previa de gobernanza La seguridad de la infraestructura es importante pero es un elemento dentro del protocolo de gobernanza más amplio."
  },
  {
    id: 'cp5-073', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harborline Outfitters completó un proyecto de reposición de inventarios de IA Durante la retrospectiva, el equipo identificó que los estándares de calidad de datos originales se definían demasiado flojamente, causando múltiples ciclos de retrabajo en la fase de preparación de datos. El director del proyecto IA está redactando el documento de experiencia adquirida. ¿Qué enfoque mejor sirve a proyectos futuros?",
    opciones: [
      { id: 'a', texto: "Atribuir los ciclos de trabajo al desempeño del equipo de ingeniería de datos y documentarlo como cuestión de personal" },
      { id: 'b', texto: "Document the specific data quality criteria that were insufficient and recommend tighter definition standards for future IA projects" },
      { id: 'c', texto: "Limitar las lecciones aprendidas a un resumen de las variaciones presupuestarias y de los cuadros" },
      { id: 'd', texto: "Observe que el proyecto se completó con éxito y que los problemas de datos son normales en los proyectos de IA" }
    ],
    correctas: ['b'],
    explicacion: "La documentación de los criterios específicos de calidad de los datos que eran insuficientes y la recomendación de normas más estrictas proporciona a los futuros equipos de proyectos una orientación práctica basada en la experiencia real del proyecto, que es el propósito de la documentación aprendida. NcRing that the project completed and that data challenges are normal provides mo improvement guidance and normalizes a preventable problem Attributing rework to personnel performance misidentifies a process gap as a people problem and does not improve future project outcomes. La limitación de la experiencia adquirida en el calendario y las diferencias presupuestarias omite los resultados técnicos y de procesos sustantivos más valiosos para los futuros equipos de proyectos de IA."
  },
  {
    id: 'cp5-074', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor está implementando un motor de recomendación al-powered que procesará el historial de compra de clientes, datos de ubicación y comportamiento de navegación El administrador del programa IA necesita para asegurar que PII se maneje adecuadamente antes de que el modelo vaya a la producción. ¿Qué acción debe tomar el director del programa primero para establecer una fundación de la gobernación.mce para PII a través del ciclo de vida IA?",
    opciones: [
      { id: 'a', texto: "Establecer niveles de clasificación para PII y mapear cada nivel para usos permisibles dentro del flujo de trabajo IA" },
      { id: 'b', texto: "Exigir a todos los miembros del equipo que firmen acuerdos individuales de manejo de datos antes de acceder a datos de capacitación" },
      { id: 'c', texto: "Definir los límites de retención de datos y los calendarios de eliminación de PII en bruto en el oleoducto de capacitación" },
      { id: 'd', texto: "Implementar cifrado a nivel de campo en todas las columnas de bases de datos que contengan identificadores de clientes" }
    ],
    correctas: ['a'],
    explicacion: "El establecimiento de niveles de clasificación para la PII y la asignación de cada nivel a usos permisibles crea la estructura de gobernanza fundamental en la que dependen todos los controles de la corriente baja. Sin saber qué tipos de PII existen y cómo se puede utilizar cada uno, el equipo no puede establecer racionalmente los límites de retención, aplicar encriptación selectivamente o definir acuerdos de acceso a nivel de equipo. Definir los límites de retención por sí solo aborda sólo una etapa vital:le. Cifrar todas las columnas puede sobrecarrear o submarinar sin un esquema de clasificación Los acuerdos individuales son un control de personal, no un protocolo de data governa.mce."
  },
  {
    id: 'cp5-075', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Whitlowfield Seeds está planeando entrenamiento modelo para su proyecto de predicción de germinación IA La empresa posee un grupo de computación de alto rendimiento compartido, y el director del proyecto IA aprende otra división lo ha reservado durante los mismos meses que está programado el entrenamiento. ¿Qué debe hacer el director del proyecto IA primero?",
    opciones: [
      { id: 'a', texto: "Coordinar la asignación de computación y ajustar el cronograma del proyecto alrededor de la capacidad confirmada" },
      { id: 'b', texto: "Cancelar el plan de entrenamiento y rediseñar la solución para evitar la computación pesada" },
      { id: 'c', texto: "Instruir al equipo para empezar a entrenar de todos modos y dejar que la cola de racimo ordene prioridades" },
      { id: 'd', texto: "Reportar la otra división a ejecutivos por monopolizar un activo compartido" }
    ],
    correctas: ['a'],
    explicacion: "La capacidad de computación es un recurso de proyecto que debe ser asegurado contra la disponibilidad real, por lo que el gerente del proyecto se coordina con la otra división y los propietarios de grupos, luego alinea el programa de capacitación o fuentes de capacidad alternativa basada en lo que se confirma. Comenzar la formación y dejar que la cola decida apostar el horario de una contención el proyecto ya sabe de rediseñar la solución para la computación de esquiva abandona el enfoque elegido antes de cualquier intento de resolver un conflicto de programación. El aumento de la otra división como malhechor convierte una negociación rutinaria de recursos compartidos en un conflicto, cuando la reserva era legítima."
  },
  {
    id: 'cp5-076', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northern Trail Outfitters está operando un modelo de predicción de churn al cliente que se alimenta en campañas automatizadas de extensión de retención. El director del programa sabe que ni la decisión de utilizar segmentos específicos de clientes para la capacitación ni la aprobación para automatizar la extensión se registró formalmente. Un auditor externo ha planteado esto como un riesgo. ¿Qué debe hacer el director del programa?",
    opciones: [
      { id: 'a', texto: "Retroactively obtain written approval from the current stakeholder group and file it with the project record" },
      { id: 'b', texto: "Publish a summary of model performance metrics to demonstrate the decision was beneficial" },
      { id: 'c', texto: "Instruir al equipo para desactivar la función de extensión automatizada hasta que se resuelva la brecha de aprobación" },
      { id: 'd', texto: "Crear un proceso continuo que documente las aprobaciones de los interesados y las decisiones de go/no-go para todos los cambios futuros modelo, y documente las aprobaciones" }
    ],
    correctas: ['d'],
    explicacion: "El administrador del programa debe documentar Soth las aprobaciones de los interesados y los puntos de decisión go/no-go que van hacia adelante y abordar la brecha retroactiva para el modelo actual. Establecer sólo un proceso de avance deja el despliegue existente sin el registro de rendición de cuentas requerido El desactivar la extensión automatizada es una respuesta desproporcionada que interrumpe las operaciones empresariales cuando se puede abordar la brecha Documentación La demostración de un rendimiento sólido modelo no sustituye a la documentación de gobernanza, que se trata de rendición de cuentas, no sólo resultados"
  },
  {
    id: 'cp5-077', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northpeak Athletics se prepara para lanzar un modelo IA que recomienda planes de entrenamiento para corredores aficionados basados en datos de fitness recogidos a través de dispositivos portátiles. Antes del lanzamiento, el director del proyecto quiere establecer un mecanismo en marcha para detectar f el modelo comienza a producir sistemáticamente diferentes recomendaciones para los corredores basadas en la edad o el género con el tiempo a medida que se incorporan nuevos datos. ¿Qué debe el director del proyecto dirigir al equipo para establecer?",
    opciones: [
      { id: 'a', texto: "Una política de reentrenamiento modelo que refresca el modelo con los últimos seis meses de datos de usuario cada trimestre" },
      { id: 'b', texto: "Un widget de retroalimentación del usuario integrado en la aplicación móvil donde los corredores pueden evaluar si su plan de entrenamiento se sintió apropiado" },
      { id: 'c', texto: "Sistemas de detección de prejuicios y vigilancia que hacen un seguimiento permanente de las distribuciones de recomendaciones entre grupos de edad y de género" },
      { id: 'd', texto: "Una auditoría trimestral manual en la que un entrenador de fitness revisa una muestra aleatoria de planes de entrenamiento generados" }
    ],
    correctas: ['c'],
    explicacion: "Establecer métricas y sistemas de vigilancia de la detección de prejuicios que rastreen constantemente las distribuciones de recomendaciones de los grupos demográficos es el enfoque correcto porque proporciona una visibilidad continua de si las disparidades a nivel de grupo surgen con el tiempo. Un widget de retroalimentación del usuario captura satisfacción individual, pero no es un mecanismo sistemático de detección de sias y está sujeto a la selección de uno mismo. Una auditoría trimestral manual realizada por un entrenador de fitness evalúa la calidad del plan desde una perspectiva de capacitación, pero no mide sistemáticamente las disparidades de resultados a nivel de grupo Una política de readiestramiento modelo aborda la frescura de los datos, pero no incluye un componente de vigilancia del prejuicio."
  },
  {
    id: 'cp5-078', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Thornbury Retail Group planea formar un modelo de canasta-análisis en su archivo de punta de venta. El archivo utiliza una estructura interna patentada, y el equipo de IA no puede determinar cómo se relacionan sus tablas. La plataforma sigue mantenida internamente para operaciones de almacenamiento. ¿Qué debe hacer el director del proyecto IA primero?",
    opciones: [
      { id: 'a', texto: "mcta O Localiza a los ingenieros internos que mantienen la plataforma y entienden su estructura" },
      { id: 'b', texto: "Restrict the training data to the modern systems the team already understands" },
      { id: 'c', texto: "Migrar el archivo en un almacén moderno antes de cualquier análisis" },
      { id: 'd', texto: "Contratar una consultoría externa para revertir la estructura de archivo" }
    ],
    correctas: ['a'],
    explicacion: "Identificar expertos técnicos familiarizados con los sistemas de datos es el movimiento de desbloqueo más rápido, y los ingenieros de la casa que todavía mantienen la plataforma ya tienen el conocimiento estructural que el equipo IA carece de ingeniería inversa a través de un consu externo Itancy compra lentamente y costoso lo que la organización ya emplea. Migrar el archivo primero compromete un gran esfuerzo antes de que alguien entienda la estructura siendo migrada. Restricting training to modern systems sacrifique la profundidad histórica que motivó el uso del archivo."
  },
  {
    id: 'cp5-079', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Summerfield Energy está desarrollando un modelo de predicción de carga inteligente. El director del proyecto IA aprende que el equipo de ciencia de datos eligió su enfoque de modelado predeterminando un método que un miembro del equipo utilizó con éxito en un proyecto anterior no relacionado, sin evaluar si se adapta al caso de uso actual. The project manager is concerned about this decision process. ¿Qué acción debe adoptar el director del proyecto para corregir esto?",
    opciones: [
      { id: 'a', texto: "Reemplazar el modelo con el enfoque más simple posible para minimizar el riesgo sin evaluar alternativas" },
      { id: 'b', texto: "Aceptar la selección porque el éxito previo en otro proyecto es suficiente evidencia de idoneidad" },
      { id: 'c', texto: "Requiere al equipo que investigue y evalúe algoritmos apropiados para las características y requisitos específicos de la predicción de carga inteligente" },
      { id: 'd', texto: "Pida al miembro del equipo que hizo la selección original para escribir una justificación de un solo párrafo para el registro" }
    ],
    correctas: ['c'],
    explicacion: "Investigación y evaluación de algoritmos para el caso de uso específico es la acción correcta de gestión de proyectos cuando se hizo la selección de algoritmos analogía a un proyecto no relacionado sin evaluación documentada; las características de la predicción de carga de red inteligente pueden requerir diferentes compensaciones que el proyecto anterior. Aceptar la selección debido al éxito previo en un problema diferente supera la responsabilidad de evaluación y puede producir un mal ajuste lejos el dominio actual. Replacing the model with the simplest approach without evaluation imposes a different unsupported choice Asking fora one- paragraph justification documents the current choice but does not require the evaluation of alternatives that a sound selection process demands"
  },
  {
    id: 'cp5-080', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northwind Logistics está implementando un sistema IA para el envío de mercancías automáticamente. El director de operaciones pregunta al director del proyecto IA cómo el sistema decide qué rutas asignar a qué transportistas. El director del proyecto reconoce que el director necesita más que un resumen de alto nivel y que las inspecciones reglamentarias futuras pueden requerir documentación formal de decisiones algorítmicas ¿Qué acción mejor aborda este requisito?",
    opciones: [
      { id: 'a', texto: "Comisión un proveedor de terceros para reconstruir el modelo usando un algoritmo más simple que el equipo de operaciones puede inspeccionar manualmente" },
      { id: 'b', texto: "Agregue un descargo a la interfaz del sistema indicando que las decisiones de enrutamiento son generadas por un sistema automatizado" },
      { id: 'c', texto: "Programar sesiones de capacitación recurrentes para el director de operaciones para que el equipo técnico no necesite producir documentación escrita" },
      { id: 'd', texto: "Establecer requisitos de explicabilidad para la comunicación de los interesados e implementar herramientas de interpretación modelo para que las decisiones puedan ser trazadas y explicadas" }
    ],
    correctas: ['d'],
    explicacion: "El establecimiento de requisitos de explicabilidad y la aplicación de herramientas de interpretación permite al director del proyecto rastrear y comunicar decisiones algorítmicas a los interesados y apoya la futura revisión reglamentaria. La Comisión de un modelo de reconstrucción cambia el alcance de la solución en lugar de abordar la transparencia dentro del proyecto actual. Las sesiones de capacitación recurrentes cambian de carga a los usuarios finales y producen mot la documentación formal necesaria para las auditorías Añadiendo un descargo a la interfaz notifica a los usuarios que la automatización está en uso pero no explica cómo se toman las decisiones."
  },
  {
    id: 'cp5-081', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "GreenSpark Energy está construyendo un modelo de mantenimiento predictivo para sensores industriales. El director del proyecto IA recibe un status 'Actualizar que el equipo de ciencia de datos está llevando a cabo una serie de carreras de capacitación para explorar qué versión del modelo debe avanzar, pero no existe ningún proceso para rastrear qué versión modelo corresponde a qué versión de conjunto de datos de capacitación y qué parámetros de configuración. El equipo confía en notas informales. ¿Qué riesgo crea esto y cómo debe responder el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Esto crea un riesgo de licencia, el gerente del proyecto debe consultar legalmente antes de cualquier otra carrera de capacitación" },
      { id: 'b', texto: "Esto no crea ningún riesgo significativo, las notas informales son suficientes para la exploración interna de estilo de investigación" },
      { id: 'c', texto: "Esto crea un riesgo de personal, el director del proyecto debe documentar qué miembro del equipo realizó cada carrera" },
      { id: 'd', texto: "Esto crea un riesgo de reproducibilidad, el administrador del proyecto debe establecer la gestión de configuración para versiones modelo y parámetros" }
    ],
    correctas: ['d'],
    explicacion: "Supervisar el modelo IA OA y OC incluye la gestión de configuración de implemen para versiones y parámetros modelo. Sin vincular versiones modelo a versiones de conjunto de datos y ajustes de parámetro, el equipo no puede reproducir un modelo seleccionado, no puede auditar opciones, y no puede avanzar de forma fiable la configuración correcta a la evaluación. Este es un riesgo de reproducibilidad, y establecer la gestión de configuración es la respuesta adecuada. Las notas oficiosas no sustituyen a la gestión estructurada de la configuración en un contexto de proyecto que requiere auditabilit% El entrenamiento interno funciona usando los datos de cnvn e infraestructura del equipo. Documentando a qué persona corría cada uno"
  },
  {
    id: 'cp5-082', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Lumenreach Telecom construyó su asistente de atención al cliente en un modelo comercial de idiomas grandes. El proveedor anuncia una versión mejorada del modelo subyacente, y el plomo de ingeniería quiere cambiar el asistente de producción a t la misma semana para capturar los beneficios de calidad ¿Cómo debe responder el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Declinar todas las actualizaciones de proveedores para que el sistema de producción permanezca estable indefinidamente" },
      { id: 'b', texto: "Deje que el equipo de operaciones de apoyo decida durante su próxima ventana de mantenimiento" },
      { id: 'c', texto: "Aplicar el interruptor inmediato ya que las mejoras del proveedor rara vez reducen la calidad" },
      { id: 'd', texto: "REp-ta Recorrir la actualización del proveedor a través del proceso establecido de revisión y evaluación del cambio antes de la adopción" }
    ],
    correctas: ['d'],
    explicacion: "Tratar el nuevo modelo del proveedor como cambio al sistema de producción y enrutarlo a través del proceso de revisión y evaluación establecido verifica el comportamiento contra los requisitos de la solución antes de que los clientes estén expuestos a él. Aprobando un interruptor inmediato supone que la actualización es libre de riesgos, pero un modelo subyacente diferente puede cambiar el tono, la precisión y los modos de falla en la forma en que el equipo nunca ha probado. Refusing every upgrade forfeits ægitimate improvements and lets the solution fall behind without any evaluation. Delegando el llamado al equipo de operaciones de apoyo coloca una decisión modelo de adopción con un grupo que carece del contexto de evaluación y la rendición de cuentas por el desempeño de la solución."
  },
  {
    id: 'cp5-083', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightford Insurance ha implementado un modelo de recomendación de subescritura de IA. Dos meses después de go-live, el equipo de ciencia de datos propone actualizar el conjunto de funciones del modelo para mejorar la precisión El director del proyecto IA debe decidir cómo manejar este cambio ¿Qué enfoque mejor refleja la práctica de la operación racional?",
    opciones: [
      { id: 'a', texto: "Permitir al equipo de ciencia de datos desplegar el modelo actualizado directamente a la producción utilizando su oleoducto de desarrollo" },
      { id: 'b', texto: "Aprobar la actualización de características inmediatamente ya que el modelo ya está en producción y las mejoras siempre son bienvenidos" },
      { id: 'c', texto: "Congelar todos los cambios de modelo durante un año para permitir que la versión actual acumule una base de rendimiento" },
      { id: 'd', texto: "Recorra el cambio propuesto a través de un proceso formal de control del cambio y un plan de despliegue para el modelo actualizado" }
    ],
    correctas: ['d'],
    explicacion: "Rotar el cambio a través de un proceso formal de control de cambios con la versión, pruebas y un plan de implementación actualizado es correcto porque el modelo governa.mce requiere que los cambios en los sistemas de producción IA validados, documentados y desplegados de manera controlada para prevenir regresiones o comportamientos no deseados. Aprobando inmediatamente sin un proceso estructurado prevea los controles de gobernanza que protegen la fiabilidad de la producción. Permitir el despliegue directo del oleoducto de desarrollo elimina la separación entre entornos y elimina el paso de validación. Una congelación de un año es arbitraria' e ignora oportunidades legítimas de mejora sin una justificación defensible."
  },
  {
    id: 'cp5-084', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tellsworth Logistics está construyendo un modelo para predecir las entregas tardías. El director del proyecto IA tiene la aprobación para llevar registros de envío del sistema de enrutamiento al entorno de desarrollo. El administrador de la base de datos propone una exportación única de Sulk, mientras que el modelo eventualmente necesitará nuevos registros de envío cada noche para mantenerse útil. ¿Qué debería hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Pídale al proveedor que le conceda a los científicos de datos acceso directo a la base de datos de producción" },
      { id: 'b', texto: "Re-colectar el conjunto de datos completo manualmente cada vez que el modelo necesita reentrenamiento" },
      { id: 'c', texto: "Aceptar la exportación de una sola vez ahora y aplazar cualquier diseño de alimentación recurrente hasta que el modelo alcance la producción" },
      { id: 'd', texto: "Preparar un proceso de extracción repetible con refrescos programados junto con la tira inicial" }
    ],
    correctas: ['d'],
    explicacion: "La recopilación de datos para un proyecto IA incluye el establecimiento de procedimientos de actualización y actualización, no sólo una extracción única, por lo que la construcción de un proceso de extracción programable repetible asegura que el alimento nocturno del modelo depende de que se diseñe y pruebe el auricular% Acce$.ing only a one-time export and deferring the feed creates rework and risks a model trained on a pipeline that production cannot reproduce. El acceso directo a la consulta contra la base de datos de la producción de enrutamiento permite la transferencia controlada al entorno de desarrollo y corre el riesgo de problemas de rendimiento y seguridad en una sístenía en vivo Recopilar manualmente el conjunto de datos completo para cada ciclo de reentrenamiento es propensa a errores e insostenible para una necesidad nocturna continua."
  },
  {
    id: 'cp5-085', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Elmgate Logistics está introduciendo una herramienta de ranurado IA que alterará sustancialmente cómo los recolectores de almacén planean su trabajo diario. Revisando el plan del proyecto, el director del proyecto IA ve hitos para el desarrollo, la prueba y la integración, pero nada abordando a las personas cuyas mutinas cambiarán ¿Qué debería iniciar el director del proyecto?",
    opciones: [
      { id: 'a', texto: "Un comienzo anterior para el hito de la integración del sistema" },
      { id: 'b', texto: "Una adición que describe los cambios en el flujo de trabajo en los documentos de planificación" },
      { id: 'c', texto: "Un piloto limitado a la tripulación más técnicamente segura del almacén" },
      { id: 'd', texto: "Evaluación de las necesidades de gestión del cambio de los equipos afectados" }
    ],
    correctas: ['d'],
    explicacion: "La gestión del riesgo de adopción comienza con la evaluación de los requisitos de gestión del cambio para las personas cuyas rutinas diarias cambiarán, que luego impulsa la comunicación, la capacitación y la planificación del apoyo. Iniciar las pruebas de integración antes mejora la trayectoria técnica, que el plan ya cubre. Pilotar con la tripulación más técnicamente segura produce resultados halagadores que ocultan cómo lucharán los recolectores típicos. Documentar los cambios de flujo de trabajo en los documentos de planificación registra la perturbación sin preparar a nadie para ello."
  },
  {
    id: 'cp5-086', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pinemont Credit Union ha llevado a cabo su modelo de routing de préstamos-inquiry en producción durante varias semanas con el equipo del proyecto manejando cada pregunta operacional. Está previsto que el proyecto se cierre pronto y los miembros del equipo pasarán a trabajar en el trabajo. ¿Qué debe hacer el director del proyecto IA para mantener la solución apoyada después del cierre?",
    opciones: [
      { id: 'a', texto: "Ejecución de una transferencia prevista de las funciones de apoyo al equipo operacional designado" },
      { id: 'b', texto: "Usuarios directos para iniciar sesión en un atraso para un proyecto futuro" },
      { id: 'c', texto: "Mantenga a un científico de datos asignado permanentemente para responder preguntas de producción" },
      { id: 'd', texto: "Extender la fecha final del proyecto hasta que la solución ya no necesite atención" }
    ],
    correctas: ['a'],
    explicacion: "Ejecutar una entrega planificada mueve la responsabilidad del equipo temporal del proyecto a un equipo operacional permanente, que es la forma en que un proyecto transfiere una solución de IA a operaciones sostenidas Mantener un solo científico de datos permanentemente unido crea una dependencia de una persona y nunca establece una verdadera propiedad operacional. Ampliar la fecha final del proyecto confunde el trabajo temporal del proyecto con las operaciones en curso, y un sistema de IA en producción siempre necesita atención. El estacionamiento de problemas de usuario en un atraso para algún proyecto futuro deja la solución en vivo sin soporte mientras tanto."
  },
  {
    id: 'cp5-087', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harborwick Marine está financiando un motor IA que recomienda perfiles de velocidad de ahorro de combustible para los capitanes de los buques El proyecto de cálculo de la devolución supone que el ahorro anual completo comienza el día en que el sistema va en vivo, aunque los capitanes adoptarán las recomendaciones gradualmente y el modelo mejora a medida que se acumulan los datos operativos. ¿Cómo debe ajustar la proyección financiera el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Reemplazar la proyección con los promedios de clientes publicados por el proveedor de tecnología" },
      { id: 'b', texto: "Mantener la suposición porque se espera que las proyecciones de inversión sean optimistas" },
      { id: 'c', texto: "Excluir todo el primer año de prestaciones como margen de seguridad uniforme" },
      { id: 'd', texto: "Fase de los beneficios previstos para reflejar la adopción gradual y mejorar el rendimiento modelo" }
    ],
    correctas: ['d'],
    explicacion: "Los beneficios de la IA rara vez llegan todo a la vez, porque el valor depende de los usuarios que actúan sobre las salidas y sobre el modelo de maduración con dat real4 por lo que la proyección debe rampar beneficios con el tiempo para que coincida con cómo se producirá la realización. Dejar un supuesto de beneficio completo de un día en su lugar exagera los retornos tempranos y establece el proyecto hasta perder su propio pronóstico Cortar todo el primer año es una corrección arbitraria que maldice la economía en la dirección. Los promedios del cliente del proveedor describen otras flotas en otras condiciones y datos de marketing sustitutorio para el análisis de esta empresa"
  },
  {
    id: 'cp5-088', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Dunmore Rail puede financiar sólo una de las dos iniciativas de IA que compiten este ciclo, un proyecto de inspección de pistas y un predictor de congestión de patio de carga Los ejecutivos piden al director del proyecto IA una base objetiva para elegir entre ellos ¿Qué debe preparar el administrador del proyecto?",
    opciones: [
      { id: 'a', texto: "Una recomendación para la iniciativa con el menor costo de ejecución" },
      { id: 'b', texto: "Un piloto de cada iniciativa para que los resultados puedan decidir la financiación" },
      { id: 'c', texto: "Una recomendación para la iniciativa con el patrocinador ejecutivo más fuerte" },
      { id: 'd', texto: "Un análisis que pesa los costos de cada iniciativa contra su valor esperado" }
    ],
    correctas: ['d'],
    explicacion: "Una comparación estructurada de los costos de cada iniciativa con su valor esperado da a los ejecutivos el aporte objetivo de decisión que pidieron, que es el propósito del análisis de costos y beneficios en la toma de decisiones de los interesados. Elegir el menor costo de implementación Lonores que el proyecto más barato también puede ofrecer mucho menos valor. La elección del patrocinador más fuerte sustituye la política organizativa para el análisis. Pilotos pilotos de ambos gastan tiempo y dinero significativos para resolver una pregunta los datos de planificación ya pueden informar dentro del ciclo de financiación"
  },
  {
    id: 'cp5-089', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Yarrowfield Farms ha aprobado un proyecto de rendimiento de cultivos IA, y el director de operaciones quiere dotarlo inmediatamente con cualquier analista libre el próximo mes El director del proyecto IA no está de acuerdo con la dotación de personal por disponibilidad•/ ¿Qué debe hacer el gerente del proyecto primero?",
    opciones: [
      { id: 'a', texto: "Determinar las habilidades específicas que las fases del proyecto requieren antes de seleccionar a alguien" },
      { id: 'b', texto: "Solicitar el presupuesto para contratar un equipo especialista completamente nuevo" },
      { id: 'c', texto: "Aceptar los analistas disponibles y organizar tutoriales complementarios más tarde" },
      { id: 'd', texto: "Plantilla postpone hasta el final de la temporada más activa" }
    ],
    correctas: ['a'],
    explicacion: "Determinando las habilidades específicas que requieren las fases del proyecto establece lo que el equipo realmente necesita antes de que se adjunten los nombres, que es el punto de partida disciplinado para componer un equipo de proyecto IA. Aceptar a quien sea libre y parchear lagunas con tutoriales más tarde trata la capacidad como un pensamiento posterior. La dotación de personal hasta que finalice la temporada retrasa el proyecto sin hacer la eventual selección más deliberada. Solicitar presupuesto para un equipo especialista completamente nuevo asume una brecha mo uno ha evaluado aún La evaluación de las necesidades de habilidad para la composición del equipo es el primer elemento nombrado para identificar los recursos del proyecto."
  },
  {
    id: 'cp5-090', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pemberton Rail está redactando una solución IA que predice fallos del equipo de señalización El proyecto asume el modelo que sirve en una plataforma de nube flexible: pero las predicciones deben correr dentro de la red de control aislada del ferrocarril, donde los reguladores prohíben conexiones externas y cambios de hardware ocurren raramente. ¿Qué debe hacer el director del proyecto IA con el proyecto?",
    opciones: [
      { id: 'a', texto: "Aprobar el proyecto y solicitar una excepción reglamentaria durante la fase de despliegue" },
      { id: 'b', texto: "Revise el proyecto para que el diseño se ajuste a las limitaciones del entorno objetivo aislado" },
      { id: 'c', texto: "Pedir al equipo de infraestructura que repita la plataforma de nube dentro de la red de control" },
      { id: 'd', texto: "Posponer las decisiones ambientales hasta que el modelo alcance su objetivo de precisión" }
    ],
    correctas: ['b'],
    explicacion: "Un borrador de solución debe reflejar donde el sistema realmente funcionará, por lo que el diseño debe ser reelaborado alrededor de las restricciones de la red aislada, lo que puede significar modelos más ligeros, hardware de servicio in situ, y procedimientos de actualización que funcionan sin conexiones externas. Contando con una excepción regulatoria apuesta todo el diseño en una renuncia que los reguladores de seguridad rara vez otorgan. Replicar una plataforma de nube flexible dentro de una red de control bloqueada es típicamente poco práctico y recrea el desajuste original a grandes gastos Las decisiones de entorno posponentes hasta que los objetivos de precisión se cumplan riesgos construyendo un modelo que nunca puede funcionar legalmente donde se necesita."
  },
  {
    id: 'cp5-091', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Maplewood Credit Union está redactando la justificación de financiación para un lector de documentos de préstamos IA. El director del proyecto A\" revisa la sección de costos y ve que cubre la licencia de software para el período de desarrollo, sin nada para infraestructura, trabajo de integración o mantenimiento continuo. ¿Qué debe hacer el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Aprobar la sección ya que los gastos posteriores pueden solicitarse anualmente" },
      { id: 'b', texto: "Socio con finanzas para construir estimaciones y proyecciones de costos completos" },
      { id: 'c', texto: "Añada un porcentaje de contingencia para absorber los artículos no incluidos en la lista" },
      { id: 'd', texto: "Marcar la brecha y dejar que las finanzas decidan si ampliar la sección" }
    ],
    correctas: ['b'],
    explicacion: "Apoyar la creación de casos empresariales implica colaborar con equipos financieros en estimaciones y proyecciones de costos, por lo que asociarse con ellos para capturar infraestructura, integración y mantenimiento produce una imagen defensible. Aprobando la sección y solicitando fondos anualmente esconde el verdadero compromiso de los encargados de adoptar decisiones en el momento de la aprobación Marcar la brecha sin involucrar deja financiación para adivinar a los conductores de costos técnicos que no pueden ver. El relleno con una asignación para imprevistos obsesiona costos conocidos y estimados detrás de un Sufre arbitrario."
  },
  {
    id: 'cp5-092', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northgate Healthcare opera un asistente de programación de IA que coincide con los pacientes con cita disponible slcne Cuando el modelo fue implementado por primera vez tenía un camino de escalada para fallas de alta perseverancia, pero ese camino nombró individuos que desde entonces se han trasladado a funciones de cther. Un incidente de producción del mes pasado fue retrasado treinta minutos porque el personal no pudo llegar a los contactos de escalada correctos. ¿Qué debería hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Eliminar el nivel de escalada y tener todos los incidentes tratados por el equipo de apoyo de primer nivel" },
      { id: 'b', texto: "Actualizar el procedimiento de escalada a las funciones de referencia y los calendarios de rotación en lugar de nombres individuales" },
      { id: 'c', texto: "Reemplazar el asistente de ling de schedu con un sistema basado en reglas más simple que requiere menos escalada" },
      { id: 'd', texto: "Lograr el incidente como anomalía única y mantener el procedimiento existente sin cambios" }
    ],
    correctas: ['b'],
    explicacion: "Definición de contactos de escalada La función en lugar de por persona hace que el procedimiento sea resiliente a la rotación del personal, asegurando que la función correcta sea alcanzada independientemente de quien actualmente desempeña el papel. La eliminación del nivel de escalada coloca todos los niveles de gravedad de incidentes en el equipo de primer nivel, que puede no tener la autoridad o la experiencia para resolver fallos críticos. Clasificar el retraso como una anomalía de una sola vez ignora un defecto estructural que se repetirá cada vez que un individuo cambia posiciones. Reemplazar el sistema para reducir la complejidad de la escalada conjuga el mantenimiento de procesos operativos con una decisión tecnológica."
  },
  {
    id: 'cp5-093', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Northwind Logistics tiene un mod de optimización de mute IA, listo para la producción. El director del proyecto IA está coordinando el suministro de infraestructura con la tecnología de la información, y el equipo de ingeniería de datos ha señalado que aún no se ha confirmado el grupo de cálculo necesario La fecha prevista de vida útil es en dos semanas ¿Qué debe hacer el director del proyecto para mantener el despliegue en marcha?",
    opciones: [
      { id: 'a', texto: "mcta Escalar la brecha de infraestructura con el liderazgo y revisar el calendario de despliegue si el grupo no puede ser confirmado" },
      { id: 'b', texto: "Diferir todas las decisiones de infraestructura hasta después de que el modelo esté en producción" },
      { id: 'c', texto: "Proceder con el despliegue utilizando hardware disponible y escalar después" },
      { id: 'd', texto: "Pedir al equipo de ingeniería de datos que vuelva a entrenar el modelo e en hardware más pequeño para reducir las necesidades de cálculo" }
    ],
    correctas: ['a'],
    explicacion: "La intensificación de la brecha de infraestructura y la revisión del cronograma si es necesario es la acción correcta porque el despliegue sin confirmar los riesgos de los recursos informáticos falla del sistema en la producción, lo que es más difícil y costoso de arreglar que un proceso previsto con un riesgo insuficiente de deterioro de los modelos de hardware o eliminaciones del sistema. Retraining on smaller hardware changes the model itself and introduces new validation requirements outside the current scope Deferring infrastructure decisions until after production is logistically impossible since the infrastructure must be in place before deployment"
  },
  {
    id: 'cp5-094', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Wexbury Grocers, un proyecto de optimización de la ganadería ha pasado seis semanas consolidando extractos de punto de venta, y el patrocinador ejecutivo se queja de que no ha oído nada desde el inicio y está cuestionando el impulso del proyecto ¿Qué debería poner en marcha el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Una actualización recurrente que resume el progreso de la preparación y los desafíos actuales en términos empresariales" },
      { id: 'b', texto: "Un reenvío semanal de los registros de procesamiento técnico del equipo de datos al patrocinador" },
      { id: 'c', texto: "Un arreglo para que los ingenieros de datos informen al patrocinador directamente bajo petición" },
      { id: 'd', texto: "Un compromiso de informar en la puerta de fase una vez que el trabajo de datos concluye" }
    ],
    correctas: ['a'],
    explicacion: "Una actualización recurrente del lenguaje empresarial sobre el progreso de la preparación y los desafíos mantiene al liderazgo informado durante todo el largo trabajo de datos, que es la práctica actualizada que esta situación requiere. Esperar a informar en la puerta de fase es exactamente el silencio que el patrocinador ya está objetando Los registros de procesamiento técnico de Forwarding entrega volumen sin significado y obliga al patrocinador a interpretar el detalle crudo Tener ingenieros de datos informar al patrocinador a petición hace la comunicación reactiva e inconsistente, y t tira a los ingenieros en un papel de traducción que el administrador del proyecto debe poseer."
  },
  {
    id: 'cp5-095', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Pinebrook Logistics está entusiasmado con un modelo propuesto que clasificaría automáticamente las excepciones de entrega, y el patrocinador quiere un compromiso esta semana. El director del proyecto IA se da cuenta de que nadie ha examinado qué registros históricos de excepción existen, cómo se almacenan, o si los casos anteriores se clasificaron constantemente. ¿Qué debe hacer el gerente del proyecto antes de comprometerse?",
    opciones: [
      { id: 'a', texto: "Elija la familia algoritmo para que las estimaciones puedan ser precisas" },
      { id: 'b', texto: "Asegure primero el presupuesto para que no se pierda el impulso" },
      { id: 'c', texto: "Analizar la disponibilidad y calidad de los registros históricos" },
      { id: 'd', texto: "Recuperar a los científicos de datos para que el trabajo pueda comenzar inmediatamente" }
    ],
    correctas: ['c'],
    explicacion: "La evaluación de viabilidad temprana requiere analizar si existen datos adecuados en calidad adecuada, porque un clasificador no puede entrenar de los registros que nadie ha localizado o evaluado. Asegurar el presupuesto primero compromete dinero a un esfuerzo que puede ser imposible con los registros a mano. Elegir la familia del algoritmo es prematuro cuando los insumos que alimentarían cualquier algoritmo permanecen desconocidos Reclutamiento de datos científicos personaliza un proyecto cuya viabilidad todavía no está demostrada, arriesgando costosos conocimientos ociosos."
  },
  {
    id: 'cp5-096', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightford Insurance está preparando un informe anual para su junta directiva que debe abordar cómo se gobierna la cartera de modelos IA de la empresa, que es responsable de las decisiones clave, y qué controles existen. Se pide al director del programa IA que contribuya a la sección de responsabilidad de IA. ¿Qué contenido debería priorizarse para esa sección?",
    opciones: [
      { id: 'a', texto: "Un resumen estructurado de las decisiones de gobernanza adoptadas durante el año, las partes responsables y los mecanismos de supervisión" },
      { id: 'b', texto: "Un pronóstico del impacto de los ingresos impulsados por Al proyectado para el próximo año fiscal" },
      { id: 'c', texto: "Comparación de las métricas de rendimiento modelo antes y después del último período de revisión reglamentaria" },
      { id: 'd', texto: "Un panorama técnico de la metodología de arquitectura y formación de cada modelo" }
    ],
    correctas: ['a'],
    explicacion: "Un informe de rendición de cuentas para el examen ejecutivo debe contener un resumen estructurado de las decisiones de gobernanza, las partes responsables y los mecanismos de supervisión. Esto da a la Junta la información de rendición de cuentas necesaria para cumplir sus responsabilidades de supervisión. Las comparaciones de rendimiento modelo muestran resultados empresariales, no cuenta de gobernanzaabilit% Las descripciones de arquitectura técnica describen lo que se construyó, no cómo se gobernó. Las previsiones de impacto de los ingresos son contenido de planificación financiera, no rendición de cuentas"
  },
  {
    id: 'cp5-097', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Farpoint Research Institute está desarrollando un modelo IA para clasificar las solicitudes de subvenciones de investigación. La junta del instituto requiere que se documente cada decisión de avanzar, revisar o rechazar una solicitud de subvención que fue influenciada por el sistema IA, incluyendo qué versión modelo estaba involucrada y qué revisor humano aprobó el resultado El director del proyecto está elaborando el marco de rendición de cuentas. ¿Qué mecanismo debería estar en el centro de este marco?",
    opciones: [
      { id: 'a', texto: "Un registro de aprobación de los interesados integrado con los registros de salida del modelo, documentando puntos de decisión go/no- go y el revisor que autorizó cada resultado" },
      { id: 'b', texto: "Un programa de capacitación de usuarios que garantiza a todos los evaluadores de subvenciones saber interpretar y anular las recomendaciones modelo" },
      { id: 'c', texto: "Una auditoría de muestra aleatorizada en la que la junta revisa diez por ciento de las decisiones cada trimestre sin referencia a qué versión modelo se utilizó" },
      { id: 'd', texto: "Un correo electrónico semanal enviado a la junta resumiendo el número de solicitudes procesadas y la puntuación media de confianza modelo" }
    ],
    correctas: ['a'],
    explicacion: "Un registro de aprobación de los interesados integrado con los registros de salida modelo, documentando las decisiones de go/no-go y el revisor que autorizó cada resultado, es el mecanismo que satisface el requisito de la junta para un registro de responsabilidad por decisión que vincule la participación de IA con la supervisión humana Un email semanal digerir informes estadísticas agregadas pero no crea la documentación por decisión que requiere la junta. Un programa de formación de revisores mejora la calidad de la decisión humana pero no crea un registro de responsabilidad de quién aprobó qué. Una auditoría aleatorizada de muestras sin referencia a la versión modelo no produce el registro completo de la decisión del tablero especificado y omite el modelo"
  },
  {
    id: 'cp5-098', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El comité ejecutivo de Beacon Health está solicitando un informe de rendición de cuentas sobre el modelo de triage de pacientes con ayuda de Al antes de renovar su presupuesto operativo. El informe debe abordar la forma en que se tomaron decisiones de guerrillería en todo el proyecto El director del programa IA se asigna para preparar el informe. ¿Qué debería contener el informe principalmente?",
    opciones: [
      { id: 'a', texto: "Una descripción técnica de la estructura de red neuronal y la configuración de entrenamiento" },
      { id: 'b', texto: "Un resumen de la degradación del rendimiento modelo observado durante los últimos seis meses" },
      { id: 'c', texto: "RespæstaO Cuenta estructurada de decisiones clave de desarrollo y sus partes responsables" },
      { id: 'd', texto: "Comparación de la precisión del modelo de triage contra soluciones comerciales competidoras" }
    ],
    correctas: ['c'],
    explicacion: "Un informe de rendición de cuentas para el examen ejecutivo y reglamentario debe contener una descripción estructurada de las decisiones fundamentales de desarrollo, las aprobaciones, las actividades de cumplimiento y las partes responsables de cada una. Esto demuestra que el programa fue gobernado adecuadamente. Una descripción técnica de la arquitectura describe lo que se construyó, no cómo se ejerció la gobernanza. Los datos sobre la degradación del rendimiento informan de las decisiones operacionales pero no constituyen un informe de rendición de cuentas con fines de gobernanza. Una comparación de precisión competitiva puede ser útil para la promoción de la renovación, pero no aborda la rendición de cuentas de la gobernanza que el comité ejecutivo está solicitando."
  },
  {
    id: 'cp5-099', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Marwick Foods ha perfilado datos de calidad de proveedor en doce regiones para un modelo de riesgo de ingrediente. La cobertura varía marcadamente por región, y el liderazgo debe comprender dónde están los puntos débiles durante una reunión de dirección corta. ¿Cómo debe el director del proyecto IA comunicar los resultados?",
    opciones: [
      { id: 'a', texto: "Lea verbalmente los resultados regionales en un memorando narrativo detallado" },
      { id: 'b', texto: "Presentar visualizaciones que hacen evidentes las brechas de cobertura regional de un vistazo" },
      { id: 'c', texto: "Conceder al equipo directivo acceso directo a la plataforma de datos para la exploración por autoservicio" },
      { id: 'd', texto: "Distribuir las tablas completas para que los líderes puedan examinar cada métrica regional" }
    ],
    correctas: ['b'],
    explicacion: "Las visualizaciones que exponen las lagunas de cobertura regional de un vistazo coinciden con la forma en que el liderazgo consume las conclusiones en una breve reunión y son exactamente el tipo de información que el director del proyecto debe preparar para comunicar información de datos. Las tablas completas de perfiles entierran el mensaje en detalle ninguna reunión de dirección tiene tiempo para analizar el acceso a la plataforma de autoservicio cambia el trabajo analítico a los ejecutivos que carecen del tiempo y la familiaridad de herramientas para hacerlo Una narrativa verbal larga hace que doce regiones de detalle comparativo casi imposible absorber o retener"
  },
  {
    id: 'cp5-100', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Summerfield Grocers está desarrollando un modelo de detección de reducción de inventario y necesita cinco años de registros de transacciones. El equipo de datos confirma los dos últimos años en vivo en el almacén de datos de la nube actual, pero los registros antiguos fueron migrados a un archivo de Iow-cost cuando la empresa cambió de sistemas. ¿Qué debe asegurarse el administrador del proyecto IA de que el inventario de fuentes incluye?",
    opciones: [
      { id: 'a', texto: "Una solicitud al proveedor de la nube para restaurar los registros archivados en el almacén activo antes de completar el inventario" },
      { id: 'b', texto: "Sólo los dos años de almacén activos, ya que es poco probable que los datos archivados más antiguos sean relevantes" },
      { id: 'c', texto: "respæsta es i @ Una recomendación para comprar datos históricos de reemplazo de un proveedor de análisis de mercado" },
      { id: 'd', texto: "El archivo legado como fuente documentada junto al almacén actual" }
    ],
    correctas: ['d'],
    explicacion: "Inventorying legacy systems and historical data archives is part of identifying data sources and ocations, so the older archive must be documented as a source along the current warehouse rather than treated as inaccessible or irrelevant Limiting inventory to the current two years discards half the needed history without assessing the archive's contents. La adquisición de datos de reemplazo de un proveedor es una decisión que debe esperar hasta que el archivo existente sea evaluado y encontrado insuficiente. Solicitar una restauración completa en el almacén activo es una importante acción de infraestructura que precede a entender lo que está realmente en el archivo."
  },
  {
    id: 'cp5-101', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Gildermere Insurance es el montaje de registros de pólizas europeos para un modelo de precios. Un analista banderas que se recogieron muchos registros para el servicio de reclamos y los clientes nunca acordaron analizar usos La recolección está programada para continuar esta semana ¿Qué debe hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Verificar una base legal para el uso previsto con especialistas en privacidad antes de proceder" },
      { id: 'b', texto: "Strip nombres de clientes de los registros y proceder con el resto" },
      { id: 'c', texto: "Continúe reuniéndose ya que la empresa ya legalmente tiene los registros" },
      { id: 'd', texto: "Excluir todos los registros europeos del proyecto permanentemente" }
    ],
    correctas: ['a'],
    explicacion: "Garantizar el cumplimiento de las normas de protección de datos, como el RGPD, significa confirmar el uso de análisis previsto tiene una base legal, ya que los datos recogidos para el servicio de reclamaciones no pueden ser reutilizados automáticamente. Tener registros legalmente para un propósito no authohze un propósito diferente Los nombres de stripping deja registros que todavía pueden identificar individuos a través de atributos restantes, por lo que no mismo crea cumplimiento. Al excluir permanentemente todos los registros europeos incorrectos antes de que los especialistas hayan evaluado si existe un camino compatible."
  },
  {
    id: 'cp5-102', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cascade Outdoor está desarrollando un sistema de alerta de condiciones de seguimiento utilizando datos de sensores El equipo de ingeniería de datos ofrece el conjunto de datos final transformado para la capacitación, pero la revisión del director del proyecto revela que una actualización reciente del oleoducto de datos cambió la lógica de normalización sin actualizar la documentación. El equipo de capacitación no está seguro de qué versión del código de preprocesamiento se aplicó. ¿Qué práctica debe requerir el director del proyecto inmediatamente para abordar esta situación?",
    opciones: [
      { id: 'a', texto: "Garantizar la reproducibilidad y documentación de la transformación de datos estableciendo el control de versiones para el código de preprocesamiento y regenerando el conjunto de datos con un documento" },
      { id: 'b', texto: "Pregunte al equipo de ingeniería de datos para recordar el conjunto de datos y re-entregarlo utilizando la vieja lógica de normalización" },
      { id: 'c', texto: "Proceder con capacitación y observar la incertidumbre de normalización en el informe final del proyecto" },
      { id: 'd', texto: "Pregúntele al equipo de entrenamiento modelo para probar ambos enfoques de normalización y elegir cualquier producto de mayor precisión" }
    ],
    correctas: ['a'],
    explicacion: "Asegurar la reproducibilidad y documentación de la transformación de datos mediante el control de versiones del código de preprocesamiento, siguió a regenerando el conjunto de datos con una versión de código documentada, aborda directamente el problema principal: un estado de preprocesamiento desconocido que no puede ser auditado o reproducido Recordando el conjunto de datos y revertiendo a la vieja lógica de normalización descarta la lógica de u.dated sin determinar cuál versión es correcta, y puede repetir el mismo fallo de la documentación. Proceeding with training under undocumented preprocessing conditions creates an untraceable artifact that will undermine future model audits and Testing bffh normalization approaches and selecting accuracy is an informal workaround that still leaves the preprocessing state undocumented."
  },
  {
    id: 'cp5-103', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Halverson Freight comparó sus datos reunidos sobre la fatiga del conductor contra los requisitos y encontró una fuerte cobertura de carreteras, pero casi nada de las rutas rurales. Las entregas rurales son centrales para el caso de negocios aprobado. Está previsto que el desarrollo comience pronto. ¿Qué debería hacer el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Simular las condiciones rurales promediando los registros de carreteras existentes" },
      { id: 'b', texto: "Eliminar las entregas rurales del uso previsto de la solución" },
      { id: 'c', texto: "Elaborar una estrategia para reducir la brecha de cobertura rural antes de que comience el desarrollo" },
      { id: 'd', texto: "Proceder según el calendario y basarse en el modelo generalizado de los patrones de carreteras" }
    ],
    correctas: ['c'],
    explicacion: "La identificación de las lagunas de datos y la elaboración de estrategias para abordarlas es la respuesta definida cuando la comparación revela una deficiencia, y la brecha rural choca en el corazón del caso comercial aprobado. Basarse en la generalización de los patrones de carreteras juega el caso de uso central en condiciones que el modelo nunca vio. La eliminación de las entregas rurales de las tripulaciones del caso del negocio fue aprobado para entregar. Averaging highway records manufacture data that resembles neither environment and would mislead"
  },
  {
    id: 'cp5-104', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Violet Sky Travel está dando forma a un asistente de nivelación IA descrito en documentos de planificación como servicio de viajeros en general. El director del proyecto IA observa que los agentes de reserva, los viajeros de ocio y los planificadores de viajes corporativos interactuarían con él de manera diferente y querían resultados diferentes. ¿Qué debe hacer el director del proyecto antes de que se terminen los requisitos?",
    opciones: [
      { id: 'a', texto: "Priorizar el grupo que genera los ingresos de reserva más" },
      { id: 'b', texto: "Diseñar una experiencia general que sirve a cada grupo por igual" },
      { id: 'c', texto: "Definir personas de usuarios diferentes con sus casos de uso específico" },
      { id: 'd', texto: "Ejecutivos de encuesta para elegir qué características importan más" }
    ],
    correctas: ['c'],
    explicacion: "Definir personas de usuario objetivo y sus casos de uso justifican los requisitos en quién utilizará realmente el asistente y para qué, exponer las diferentes necesidades que esconde el descri$.ion general. Priorizar por los ingresos de reserva es una decisión de secuenciación que aún requiere entender primero las necesidades de cada grupo. Diseñando un documento de experiencia general sobre las diferencias que el gerente del proyecto ya ha detectado, invitando a una herramienta que no sirve bien a nadie. Los ejecutivos que estudian sustituyen la opinión de liderazgo por evidencia sobre usuarios reales."
  },
  {
    id: 'cp5-105', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ursa Major Solar está implementando un modelo de IA que marca sitios residenciales de instalación solar como Iow, media o alta prioridad para ventas follow-uvi Leadership quiere gerentes de ventas no técnicos para entender por qué un sitio específico recibió una Iow-priority El director del proyecto IA necesita una solución que el equipo de ventas pueda utilizar. ¿Qué enfoque debería implementar el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Usar una técnica de interpretación modelo que supere los principales factores que contribuyen a cada predicción individual en lenguaje plano" },
      { id: 'b', texto: "Require los científicos de datos para estar disponibles para llamadas de explicación a pedido con los gerentes de ventas" },
      { id: 'c', texto: "Proporcionar a los gerentes de ventas acceso a la puntuación de probabilidad cruda del modelo para cada sitio" },
      { id: 'd', texto: "Reemplazar el modelo con una rúbrica de puntuación más simple que los gestores de ventas pueden calcular manualmente" }
    ],
    correctas: ['a'],
    explicacion: "La aplicación de una técnica de interpretación modelo que supere los principales factores que contribuyen a cada predicción en lenguaje claro da a los administradores de ventas explicaciones viables y comprensibles en el punto de necesidad. Proporcionar puntuaciones de probabilidad cruda no explica la razón detrás de la puntuación a usuarios no técnicos Requirir científicos de datos para el campo de llamadas a demanda no escalables y crea un cuello de botella. Replacing the model with a manual rubric a business decision that goes beyond the program manager's interpretability mandate and discards the model's analysis value"
  },
  {
    id: 'cp5-106', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "•ronside Aerospace está entregando su solución de predicción de la cadena de suministro al equipo de operaciones para la gestión a largo plazo. El director del proyecto IA nota que el plan de entrega contiene actualmente sólo diagramas de arquitectura y una lista de credenciales. El gerente de operaciones receptor dice que su equipo no puede decir cómo responder cuando el modelo comienza a producir productos inusuales. ¿Qué falta del plan de entrega?",
    opciones: [
      { id: 'a', texto: "Biografía detallada de los miembros del equipo de ciencia de datos que construyeron el modelo" },
      { id: 'b', texto: "Manuales operacionales en los que se describe cómo supervisar, responder a las alertas y aumentar las cuestiones" },
      { id: 'c', texto: "Una comparación de costes de hospedaje del modelo en casa contra el uso de un servicio de nube gestionado" },
      { id: 'd', texto: "Acceso a código fuente para el equipo de operaciones para que puedan volver a entrenar el modelo en sí" }
    ],
    correctas: ['b'],
    explicacion: "Operacional n lnSooks que describen cómo detectar anomalías, interpretar alertas y escalar los problemas le dan al equipo receptor el conocimiento procesal que necesitan para gestionar un sistema IA en vivo, que es exactamente lo que el gerente de operaciones dijo que falta. Las biografías del equipo Suild son irrelevantes para las operaciones en curso y no ayudan a los nuevos Niners a responder a los eventos de producción Una comparación de costos de hospedaje pertenece en el caso de negocio o fase de adquisición, no en el paquete de transferencia. Dar acceso al código fuente del equipo de operaciones para llevar a cabo su propio apoyo operacional de readiestramiento con el desarrollo de modelos, una responsabilidad que requiere experiencia en ciencia de datos y su propio proceso de gobernanza."
  },
  {
    id: 'cp5-107', dominio: 'datos', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Silverbirch Airlines completó su evaluación de datos de programación de equipo, que encontró varios problemas que se pueden arreglar con un esfuerzo añadido. El comité directivo se reúne esta semana para decidir sobre la financiación de la próxima fase. ¿Qué debe traer el director del proyecto IA a esa reunión?",
    opciones: [
      { id: 'a', texto: "Solicitud de posponer la información hasta que se haya resuelto toda cuestión identificada" },
      { id: 'b', texto: "Las conclusiones de la evaluación sin recomendación para que el comité permanezca imparcial" },
      { id: 'c', texto: "El estado de preparación junto con un camino recomendado hacia adelante con las implicaciones de cada opción" },
      { id: 'd', texto: "Sólo los resultados favorables para que se preserve la confianza del comité en el proyecto" }
    ],
    correctas: ['c'],
    explicacion: "La presentación del estado de preparación junto con una recomendación y las consecuencias de cada opción da al comité lo que necesita para tomar una decisión de financiación, que es el propósito de transmitir las conclusiones de los datos a los interesados. Compartir sólo resultados favorables borra al comité y establece el proyecto para problemas no explicados más adelante. La entrega de los hallazgos sin una recomendación abdica el papel asesor del director del proyecto y obliga a los ejecutivos a interpretar los detalles técnicos mismos. Postponing until every issue is fixed delays a decision the committee is ready to make and hides the very trade-offs it should heavy."
  },
  {
    id: 'cp5-108', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Brightford Insurance está construyendo un modelo de detección de fraudes de reclamaciones Mediante el desarrollo, el líder de OA descubre que diferentes miembros del equipo han sido modelos de capacitación utilizando diferentes versiones de los scripts de preprocesamiento, lo que hace imposible reproducir resultados anteriores. Se pide al director del proyecto IA que resuelva la situación. ¿Cuál es la acción más apropiada?",
    opciones: [
      { id: 'a', texto: "Requiere que el equipo vuelva a entrenar todos los modelos desde cero usando sólo la última versión de script de preprocesamiento." },
      { id: 'b', texto: "Assign the QA lead full ownership of all preprocessing decisions to prevent future inconsistency." },
      { id: 'c', texto: "Pregunte a cada miembro del equipo qué versión de script utilizaron y compilar un resumen combinado para los interesados." },
      { id: 'd', texto: "Establece un sistema de gestión de configuración que rastrea las versiones de modelos, preprocesando scripts y parámetros para que el trabajo futuro sea reproducible." }
    ],
    correctas: ['d'],
    explicacion: "La aplicación de la gestión de la configuración para las versiones y parámetros modelo es una responsabilidad explícita del administrador de proyectos IA bajo la supervisión modelo OA/OC. Un sistema de gestión de configuración aborda la causa raíz Seguimiento de que preprocesamiento versión, versión modelo y parámetros se utilizaron en cada experimento, asegurando la reproducibilidad. Reentrenamiento de los descartes de rasguños potencialmente válido trabajo anterior y no impide que el mismo problema vuelva a ocurrir. Pedir a los miembros del equipo que se autodocumenten depende de la memoria individual y no crea un control sistemático Asignar la propiedad de preprocesamiento a una persona reduce la flexibilidad de colaboración sin fijar la versión subyacente- seguimiento"
  },
  {
    id: 'cp5-109', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "El liderazgo de Oxbowlane Storage quiere que IA acelere el paso final de aprobación de su proceso de contrato de alquiler, lo que creen que causa la caída del cliente El gerente del proyecto IA mapea el proceso final a final y encuentra contratos sentados durante días en el paso anterior de la colección de documentos, mientras que la aprobación final toma minutos ¿Qué debe recomendar el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Refocus la iniciativa sobre el paso de recogida de documentos donde se produce realmente el retraso" },
      { id: 'b', texto: "Automatizar ambos pasos simultáneamente para cubrir todas las posibilidades" },
      { id: 'c', texto: "Automatizar la aprobación final como liderazgo solicitado ya que conocen el negocio" },
      { id: 'd', texto: "Buscar clientes sobre qué paso los frustra más" }
    ],
    correctas: ['a'],
    explicacion: "El análisis del proceso existe para localizar dónde se encuentra el dolor, y la evidencia muestra días perdidos en la colección de documentos contra minutos de aprobación, por lo que la iniciativa debe apuntar el paso que causa la aprobación final desplegable Automating honra la creencia original, pero gasta el presupuesto donde casi se pierde el tiempo. Automatizar ambos pasos duplica el alcance y el costo para evitar actuar en lo que el análisis ya muestra. Los clientes encuestados agregan datos de opinión cuando la evidencia de tiempo transcurrido es directa, objetiva y ya está en la mano."
  },
  {
    id: 'cp5-110', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Tidewater Ports Authority está evaluando una propuesta para n ln análisis de vídeo de aprendizaje profundo en las puertas terminales remotas donde la conectividad es débil y el hardware local es mínimo. El equipo ha validado el caso de uso y los datos de capacitación, pero no ha examinado lo que el análisis mismo demandará en esos sitios. ¿Qué debe evaluar el director del proyecto IA después?",
    opciones: [
      { id: 'a', texto: "Requisitos y limitaciones computacionales en los sitios terminales" },
      { id: 'b', texto: "El registro de riesgos necesario antes de proceder al desarrollo" },
      { id: 'c', texto: "Una clase más simple de capacidad de IA para las puertas" },
      { id: 'd', texto: "Las condiciones contractuales para mejorar el ancho de banda del transportista" }
    ],
    correctas: ['a'],
    explicacion: "La evaluación de la viabilidad incluye requisitos y limitaciones de recursos computacionales, y el análisis de vídeo de aprendizaje profundo en sitios de mínimo hardware con enlaces débiles es exactamente donde esas limitaciones pueden matar una propuesta El ancho de banda del transportista Negffiating salta a un posible remedio antes de cuantificar las demandas reales. Cambiar a una clase más simple de capacidad cambia la solución antes de saber si la actual es infeasible. Logging a risk register entry records the concern without doing the evaluation that determines if the project can proceed at alL"
  },
  {
    id: 'cp5-111', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "En Larkspur Media, los requisitos de redacción del equipo de datos para un modelo de creación de audiencias han producido una lista de deseos que nombra casi cada conjunto de datos que posee la empresa. El director del proyecto IA revisa el borrador antes de ir a los propietarios de datos. ¿Qué necesita el gerente del proyecto?",
    opciones: [
      { id: 'a', texto: "Que cada requisito de datos traza al objetivo de siness bu y el caso de uso que soporta" },
      { id: 'b', texto: "Que la lista sea reordenada para favorecer los conjuntos de datos que son más fáciles de extraer" },
      { id: 'c', texto: "Que la lista se mantenga amplia para que no se pierdan datos potencialmente útiles más tarde" },
      { id: 'd', texto: "That requirement decisions be aferred until the modeling team experiments with samples" }
    ],
    correctas: ['a'],
    explicacion: "Requirir cada elemento de datos para rastrear Sack al objetivo de negocio y utilizar el caso t soporta mantiene el requisito establecido intencional y defensible, que es la esencia de la asignación de los requisitos de datos a los objetivos de negocio. Mantener la lista ancha a aw•id faltando cualquier cosa convierte los requisitos en un inventario y cargas colección, cumplimiento y evaluación con datos nadie puede justif% Reordering extracción facilidad optimiza la comodidad sobre relevancia. Diferir las decisiones hasta que los experimentos de modelado pospongan la disciplina que debe dar forma a lo que se recoge en primer lugar"
  },
  {
    id: 'cp5-112', dominio: 'negocio', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Mintbrook Grocers desplegó una herramienta de auditoría de plataformas de inteligencia artificial que pide a las medias que escanean estantes para que pueda marcar objetos mal colocados Usage está muy por debajo del plan. Las entrevistas revelan que las medias son evaluadas y clasificadas en velocidad de estantería, y el paso de escaneo las ralentiza, por lo que saltan t. ¿Qué debe recomendar el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Ejecutar el entrenamiento de actualización para que las mediadoras entiendan cómo funciona la función de escaneado" },
      { id: 'b', texto: "Escalar las tiendas de uso más bajas a los gerentes regionales para el coaching correctivo" },
      { id: 'c', texto: "Trabajar con operaciones para alinear las medidas de rendimiento de las mediadoras con el uso de la herramienta" },
      { id: 'd', texto: "Añadir avisos de recordatorio al dispositivo para que las medias no puedan pasar por alto el escaneo" }
    ],
    correctas: ['c'],
    explicacion: "La barrera aquí es un conflicto de incentivos, las mediadoras son valoradas a la velocidad y la herramienta les cuesta velocidad, por lo que la adopción requiere realinear las medidas de rendimiento con el comportamiento que la empresa quiere ahora. Refresher training fijas a knowledge gap, but interviews show stockers understand the tool fully and are making a rational choice against it. Reminder pide añadir fricción sin cambiar la pena subyacente para cumplir. El aumento del uso de Iow para el entrenamiento castiga a los empleados por responder de manera sensata a las medidas que la propia empresa estableció."
  },
  {
    id: 'cp5-113', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Aldenbrook Music está finalizando el documento Soundary para un proyecto de predicción de la realeza IA tamaño para un pequeño equipo y seis meses Durante su revisión, la directora de marketing pide plegar en una función de generación de lista de reproducción IA que cree comparte los mismos datos. ¿Cómo debe el director del proyecto IA manejar la solicitud?",
    opciones: [
      { id: 'a', texto: "Rechazar la solicitud sin análisis para proteger el calendario" },
      { id: 'b', texto: "Prueba la solicitud contra el objetivo y los recursos del proyecto, y registra la decisión de límites resultante" },
      { id: 'c', texto: "Añadir la característica desde compartir datos hace que sea casi libre de incluir" },
      { id: 'd', texto: "Agregue la característica pero alarga silenciosamente el timel ineto absorberla" }
    ],
    correctas: ['b'],
    explicacion: "Una adición propuesta se evalúa contra el objetivo declarado del proyecto y su sobre de recursos, y el resultado, aquí más plausiblemente la generación de lista de reproducción como excluido o diferido, se documenta explícitamente por lo que el límite sostiene y la solicitud es visible para futuras fases. Assuming shared data makes a feature almost free ignores that modeling, evaluation, and delivery for a second capacity are substantial work Refusing without analysis denies a stakeholder a reasoned answer and reproduces end-runs. Ouiet\" estirar el cronograma oculta un cambio material del patrocinador que aprobó el compromiso original."
  },
  {
    id: 'cp5-114', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Oakhelm Construction está transfiriendo su modelo de predicción de mantenimiento de equipos a un grupo de soporte de producción. El plomo del soporte pregunta qué documentación recibirá el grupo. El archivo del proyecto tiene actualmente el caso de negocio y varios diagramas de arquitectura ¿Qué debe añadir el director del proyecto IA para el grupo de apoyo?",
    opciones: [
      { id: 'a', texto: "Diagramas de arquitectura adicionales que abarcan cada integración del sistema con más detalle" },
      { id: 'b', texto: "REp-ta Procedures for routine upkeep tasks and for handling common support requests" },
      { id: 'c', texto: "El conjunto completo de datos de formación para que el grupo pueda reconstruir el modelo si es necesario" },
      { id: 'd', texto: "Una copia del caso comercial aprobado con las proyecciones financieras refrescadas" }
    ],
    correctas: ['b'],
    explicacion: "La documentación de entrega debe indicar al grupo de soporte qué hacer día a día, por lo que los procedimientos de mantenimiento de rutina y las solicitudes de apoyo comunes son la pieza desaparecida. Un caso de negocios refrescado explica por qué el proyecto fue financiado pero no da orientación al operador durante el trabajo de apoyo. Más diagramas de arquitectura describen cómo se construye el sistema sin describir cómo mantenerlo Envío del conjunto de datos de entrenamiento completo plantea preocupaciones de gobernanza de datos y la reconstrucción del modelo es una actividad de desarrollo, no hay tarea de apoyo al grupo que se le pide realizar."
  },
  {
    id: 'cp5-115', dominio: 'operacion', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Textiles Umber-field desplegaron una solución de detección de defectos de tela al año agc Los patrocinadores ejecutivos recientemente se quejaron de que las únicas actualizaciones que reciben llegan cuando algo ya ha ido mal, dejándolos incapaz de juzgar si la inversión está pagando. ¿Qué debe establecer el director del programa IA?",
    opciones: [
      { id: 'a', texto: "Notificaciones de alerta que copian a los patrocinadores de cada advertencia operacional" },
      { id: 'b', texto: "Un resumen recurrente de la actuación profesional que informa sobre las medidas comerciales y técnicas acordadas para patrocinar s" },
      { id: 'c', texto: "Una presentación anual y profunda entregada en el sitio de liderazgo" },
      { id: 'd', texto: "Una invitación abierta para los patrocinadores a consultar los registros de monitoreo bruto del sistema" }
    ],
    correctas: ['b'],
    explicacion: "Un ritmo regular de presentación de informes basado en medidas que los patrocinadores acordaron dar visibilidad continua al liderazgo en la salud de la entrega de valor y de la solución, reemplazando la comunicación impulsada por el fracaso que se quejaron de los patrocinadores de Pointing en registros de monitoreo brutos cambia la carga de interpretación a los ejecutivos que se burlan del contexto para leer datos operacionales. Una sola presentación anual deja once meses de ceguera entre 'Updates, que es apenas mejor que el estado actual Copiar a los patrocinadores en cada advertencia operacional los inunda con ruido técnico y recrea el problema de escuchar sólo sobre problemas."
  },
  {
    id: 'cp5-116', dominio: 'negocio', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Los ejecutivos de Thornberry Veterinary Clinic abren la reunión de inicio anunciando el proyecto: construyen un asistente telefónico virtual, porque un miembro de la junta vio uno trabajando impresionantemente en otra clínica grouF Conf El director del proyecto IA nota que nadie ha afligido qué problema resolvería el asistente en Thornberry ¿Qué debe hacer el gerente del proyecto primero?",
    opciones: [
      { id: 'a', texto: "El personal de la clínica de entrevistas y las partes interesadas deben superar los puntos de dolor operacional detrás de la solicitud" },
      { id: 'b', texto: "Benchmark el asistente del otro grupo de clínicas para copiar sus características más fuertes" },
      { id: 'c', texto: "Comience los requisitos de reunión para el asistente telefónico los ejecutivos descritos" },
      { id: 'd', texto: "Desclina el proyecto porque se originó de la impresión de un miembro de la junta" }
    ],
    correctas: ['a'],
    explicacion: "Una solución prescrita que llega antes de cualquier declaración de problema es una configuración clásica de fracaso, por lo que el gerente del proyecto debe entrevistar primero a las personas que ejecutan las clínicas para cubrir los puntos de dolor reales, lo que puede confirmar al asistente o revelar que la programación, la dotación de personal o el seguimiento es el problema real Reunir requisitos para las cerraduras auxiliares en la solución no validada y simplemente detallar el despliegue del otro grupo estudia una solución potencialmente necesita una iniciativa."
  },
  {
    id: 'cp5-117', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Ridgeline Outdoor Co está construyendo una capacidad de triage de garantía que combinará fotos de clientes con notas de reclamación escritas. Varios equipos de fuentes suministrarán las entradas, y el director del proyecto IA desea que la próxima solicitud de datos sea inequívoca, por lo que ncnhing llega inutilizable. ¿Qué debe definir el director del proyecto antes de que salga la solicitud?",
    opciones: [
      { id: 'a', texto: "Las tuberías de ingestión los ingenieros construirán para cada fuente" },
      { id: 'b', texto: "La arquitectura modelo que procesará imágenes y texto juntos" },
      { id: 'c', texto: "Los formatos de archivo y la estructura de cada tipo de entrada deben llegar para el entrenamiento" },
      { id: 'd', texto: "El calendario de readiestramiento de la solución seguirá después del despliegue" }
    ],
    correctas: ['c'],
    explicacion: "Especificar los tipos y formatos que deben llegar los datos de entrenamiento es el núcleo de definir los datos requeridos, y es lo que hace que una solicitud de múltiples fuentes sea inequívoca para las entradas de imagen y texto por igual. Elegir una arquitectura modelo pertenece al desarrollo de modelos y no le dice a los equipos fuente qué enviar. Un calendario de readiestramiento es una preocupación operacional que viene mucho después de que se cumplan los requisitos de datos."
  },
  {
    id: 'cp5-118', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Harlowe Energy quiere entrenar un modelo de cliente churn usando transcripciones del centro de llamadas compradas en una empresa de análisis externa hace dos años para un estudio de marketing. Los científicos de datos confirman que las transcripciones están bien estructuradas y listas para usar. Antes de aprobar su inclusión, ¿qué debe verificar primero el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Si las transcripciones se almacenan en un formato, las herramientas de modelado pueden leer" },
      { id: 'b', texto: "Si el acuerdo de compra permite usilng las transcripciones para formar un modelo IA" },
      { id: 'c', texto: "Ya sea que la firma de análisis puede vender un nuevo lote de transcripciones a un precio similar" },
      { id: 'd', texto: "Si las transcripciones contienen suficientes ejemplos para equilibrar el conjunto de entrenamiento" }
    ],
    correctas: ['b'],
    explicacion: "Verificar los derechos de uso de datos y los acuerdos de licencia es la primera puerta antes de repurponer datos adquiridos externamente, ya que una licencia Sought para un estudio de marketing puede no extenderse a la formación de un modelo IA, y utilizarlo más allá de los términos crea la exposición legal Cuestiones de compatibilidad de formato, pero los científicos ya confirmados las transcripciones están bien estructuradas, y los problemas de formato se pueden solucionar mientras que una violación de licencias no. Comprar un lote más nuevo es una pregunta de adquisición que sólo surge después de que el equipo sepa lo que el acuerdo actual permite comprobar el equilibrio de ejemplo churn es una evaluación de suficiencia de datos que viene después del derecho a utilizar los datos en absoluto se establece."
  },
  {
    id: 'cp5-119', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Cumulus Cloud Services está desarrollando un modelo de clasificación de documentos Durante una revisión de la preparación de datos, el administrador del proyecto IA descubre que un miembro del equipo limpió los datos de entrenamiento usando un script que fue modificado posteriormente, y la versión original del script fue sobrescrito sin respaldo. El equipo no está seguro de si los datos de entrenamiento actuales reflejan la lógica de limpieza original o modificada. ¿Qué necesita el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Aprobar la capacitación y planificar una auditoría de datos después de que se haya evaluado la primera versión modelo." },
      { id: 'b', texto: "Requiere al equipo para reconstruir el conjunto de datos de la fuente utilizando el script actual, documentando la lógica de limpieza y almacenandolo bajo" },
      { id: 'c', texto: "Aceptar los datos de entrenamiento actuales y documentar la incertidumbre en la tarjeta modelo." },
      { id: 'd', texto: "Pida al miembro del equipo que reconstruya el script original de memoria y ejecute ambas versiones para comparar salidas." }
    ],
    correctas: ['b'],
    explicacion: "Asegurar la reproducibilidad y documentación de la transformación de datos, y supervisar los flujos de trabajo de limpieza y procesamiento de datos, son responsabilidades de gestión de proyectos de IA en la gestión de la preparación de datos. Cuando no se puede establecer la procedencia de un conjunto de datos de capacitación porque el script de transformación fue sobrescrito, no se pueden cumplir los requisitos de calidad y reproducibilidad de los datos Reconstruir el conjunto de datos de la fuente con el script documentado actual y almacenar ese script bajo control de versiones es la acción correctiva correcta. Aceptar el conjunto de datos y documentar la incertidumbre incorpora una diferencia de procedencia conocida en el modelo. Pedir al miembro del equipo que reconstruya de memoria no es confiable Aprobar capacitación y planificar una resolución de demoras de auditoría después de la evaluación y permite que un modelo con comprobación de datos incierta avance a través del oleoducto."
  },
  {
    id: 'cp5-120', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: "Veldmere Tractors redactó un esquema para un sistema IA que anticipa la demanda de piezas de distribuidor. El esquema describe los objetivos de negocio y las pantallas, pero nunca indica qué familia de enfoque de modelado podría ser utilizado. El equipo de datos dice que sin esa indicación no pueden decir qué registros históricos investigar a continuación. ¿Qué debe añadir el director del proyecto IA?",
    opciones: [
      { id: 'a', texto: "Una cláusula que delegue el enfoque de modelado por completo a un futuro proveedor" },
      { id: 'b', texto: "Una opción de algoritmo finalizada comprometida antes de que comience cualquier revisión de datos" },
      { id: 'c', texto: "Se espera que una declaración del modelo candidato utilice la solución" },
      { id: 'd', texto: "Una solicitud que el equipo de datos investigue cada almacén de registros que la empresa posee" }
    ],
    correctas: ['c'],
    explicacion: "El esquema de solución debe indicar los tipos de modelo candidatos y la dirección algorítmica, porque eso es lo que permite que la siguiente fase derive qué datos es necesario, en qué volumen, y en qué granularidad% Llegar a un algoritmo final antes de que se hayan revisado los datos invierte la metodología, ya que los resultados de los datos deben informar sobre la posible elección. Pedir al equipo de datos que investigue cada tienda de la empresa reemplaza la dirección con una búsqueda sin límites. Delegando el enfoque mayorista a un futuro proveedor deja a la empresa incapaz de razonar sobre las necesidades de datos, costos o viabilidad mientras tanto."
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI_EXTRA5: PREGUNTAS_CPMAI_EXTRA5 };


