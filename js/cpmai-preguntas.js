/**
 * Banco semilla del PMI-CPMAI — preguntas ORIGINALES escritas contra el ECO 2025.
 *
 * REGLA DEL PROYECTO, igual que en el banco de la PMP: aquí no entra ninguna pregunta
 * copiada del examen real ni de un simulador comercial, ni traducida, ni reescrita a
 * partir de una ajena. Durante el desarrollo aparecieron diez preguntas de muestra de
 * un sitio comercial; se usaron SOLO para calibrar estilo y dificultad, y ninguna se
 * adaptó. Escenarios, opciones y explicaciones son propios.
 *
 * Reparto proporcional a los pesos oficiales del examen:
 *   negocio 26 % · datos 26 % · operacion 17 % · modelos 16 % · responsable 15 %
 */

const PREGUNTAS_CPMAI = [
  {
    id: 'cp-neg-001', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una EPS de residuos quiere un modelo que estime el peso de cada contenedor a partir de fotografías, para reducir el tiempo de balanza. Al preguntar cómo sabrán que funcionó, el patrocinador responde que sabrán que funcionó cuando el modelo esté prediciendo pesos. ¿Qué reformulación da un criterio de éxito válido?',
    opciones: [
      { id: 'a', texto: 'El modelo alcanza el menor error absoluto medio posible sobre el histórico de pesajes.' },
      { id: 'b', texto: 'El tiempo medio de registro por contenedor baja de 4 a 2 minutos sin que aumenten las diferencias con el pesaje de control.' },
      { id: 'c', texto: 'El modelo queda integrado con el indicador de la balanza y corriendo en producción.' },
      { id: 'd', texto: 'Todos los contenedores que entran a planta pasan por el modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'Un criterio de éxito válido se mide en el resultado del negocio y trae su contrapeso: baja el tiempo Y no se degrada la exactitud. (a) mide al modelo, no al negocio: puedes tener el mejor error del mundo y no ahorrar un minuto. (c) y (d) miden despliegue y adopción, que son medios, no resultados.'
  },
  {
    id: 'cp-neg-002', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un municipio quiere clasificar automáticamente las denuncias vecinales. El objetivo declarado es «responder más rápido», pero nadie ha registrado cuánto tarda hoy el proceso manual. ¿Qué falta para que ese objetivo signifique algo?',
    opciones: [
      { id: 'a', texto: 'Una línea base: cuánto tarda hoy el proceso actual, para poder medir la mejora contra algo.' },
      { id: 'b', texto: 'Más años de histórico de denuncias, para entrenar el modelo con la mayor cantidad de datos posible.' },
      { id: 'c', texto: 'Una arquitectura en la nube que permita escalar cuando aumente el volumen de denuncias.' },
      { id: 'd', texto: 'Un tablero en tiempo real que muestre las denuncias clasificadas conforme van llegando.' }
    ],
    correctas: ['a'],
    explicacion: 'Sin línea base, «más rápido» es indemostrable: cualquier resultado se puede declarar éxito o fracaso. Es el primer dato que hay que levantar, y suele estar disponible sin construir nada. (b), (c) y (d) son decisiones técnicas que no resuelven el problema de medición.'
  },
  {
    id: 'cp-neg-003', dominio: 'negocio', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'La gerencia pide «usar IA en atención al cliente». Al profundizar, unos entienden que se trata de bajar el tiempo de espera, otros de reducir la dotación del área y otros de mejorar la satisfacción. ¿Qué corresponde hacer antes de definir el alcance?',
    opciones: [
      { id: 'a', texto: 'Empezar por reducir el tiempo de espera, que fue lo primero que se mencionó en la reunión.' },
      { id: 'b', texto: 'Diseñar la solución para optimizar los tres objetivos a la vez y así satisfacer a todos.' },
      { id: 'c', texto: 'Conseguir que la gerencia acuerde cuál es el resultado principal que debe mejorar la iniciativa.' },
      { id: 'd', texto: 'Consultar a los proveedores cuál de los tres objetivos mejora más su producto y adoptarlo.' }
    ],
    correctas: ['c'],
    explicacion: 'Los tres objetivos entran en conflicto entre sí: bajar dotación empeora la espera, y priorizar satisfacción suele subir el costo. Sin un resultado principal acordado, el proyecto no tiene contra qué decidir. (b) es la trampa más tentadora: optimizar todo es no optimizar nada. (d) deja que el proveedor defina tu estrategia.'
  },
  {
    id: 'cp-neg-004', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una empresa puede financiar un solo piloto de IA. Los candidatos son: predecir la demanda de insumos para reducir mermas, con histórico de tres años ya disponible; un lector de placas por cámara, sin imágenes etiquetadas ni presupuesto para etiquetarlas; y un asistente conversacional interno con beneficio esperado poco claro. ¿Cómo se prioriza?',
    opciones: [
      { id: 'a', texto: 'El lector de placas, porque la visión por computadora desarrollaría capacidades para futuros proyectos.' },
      { id: 'b', texto: 'El asistente conversacional, porque es el más visible para la dirección y ayudaría a sostener el patrocinio.' },
      { id: 'c', texto: 'La predicción de demanda, porque combina un beneficio cuantificable con datos que ya existen.' },
      { id: 'd', texto: 'Los tres en paralelo pero más pequeños, para comparar resultados reales antes de decidir.' }
    ],
    correctas: ['c'],
    explicacion: 'Se prioriza por el cruce de valor y viabilidad, y solo un candidato tiene los dos: beneficio medible y datos disponibles. (a) tiene viabilidad nula sin datos etiquetados. (b) tiene valor indefinido. (d) contradice la restricción del enunciado: solo hay fondos para uno.'
  },
  {
    id: 'cp-dat-001', dominio: 'datos', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Al evaluar los datos disponibles para un modelo de mantenimiento predictivo, el equipo descubre que los registros de falla de los últimos dos años existen, pero el 40 % no indica qué componente falló. El patrocinador presiona para avanzar a la fase de modelado. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Avanzar al modelado y descartar los registros incompletos durante el entrenamiento.' },
      { id: 'b', texto: 'Avanzar y completar los registros faltantes con el componente que falla con más frecuencia.' },
      { id: 'c', texto: 'No avanzar: volver a las fases de datos y determinar si el 40 % faltante es aleatorio o sistemático.' },
      { id: 'd', texto: 'Avanzar con un modelo que prediga solo si habrá falla, sin identificar el componente.' }
    ],
    correctas: ['c'],
    explicacion: 'Antes de decidir cómo tratar el hueco hay que saber por qué existe. Si falta al azar, descartar es razonable; si falta de forma sistemática —por ejemplo, un turno que no registra— descartar introduce un sesgo que el modelo aprenderá. (b) fabrica datos. (d) puede ser válido, pero es una decisión de alcance que se toma después de entender el problema, no para esquivarlo.'
  },
  {
    id: 'cp-dat-002', dominio: 'datos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo identifica una base de datos de un socio comercial que mejoraría notablemente el modelo. El área técnica confirma que puede acceder a ella. ¿Qué debe verificarse antes de incorporarla?',
    opciones: [
      { id: 'a', texto: 'Que el volumen sea suficiente para el tamaño de muestra que requiere el algoritmo elegido.' },
      { id: 'b', texto: 'Los derechos de uso y el acuerdo de licencia: poder acceder no es lo mismo que poder usarla.' },
      { id: 'c', texto: 'Que el formato sea compatible con el entorno de desarrollo del equipo.' },
      { id: 'd', texto: 'Que la calidad de los datos supere la de las fuentes internas ya disponibles.' }
    ],
    correctas: ['b'],
    explicacion: 'La capacidad técnica de acceder y el derecho legal de usar son cosas distintas, y confundirlas es de los errores más caros: se descubre en auditoría, con el modelo ya en producción. (a), (c) y (d) son verificaciones legítimas, pero ninguna invalida el proyecto entero como sí lo hace un uso no autorizado.'
  },
  {
    id: 'cp-dat-003', dominio: 'datos', tarea: 8, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Tras analizar los datos, el equipo concluye que la calidad alcanza para un modelo útil pero no para el nivel de precisión que la dirección espera. ¿Cómo debe comunicarlo?',
    opciones: [
      { id: 'a', texto: 'Presentar el hallazgo con el nivel de precisión alcanzable y qué haría falta para llegar al esperado.' },
      { id: 'b', texto: 'Avanzar sin mencionarlo, para no frenar el proyecto, y ajustar las expectativas al presentar resultados.' },
      { id: 'c', texto: 'Detener la iniciativa, porque los datos no permiten cumplir lo que la dirección pidió.' },
      { id: 'd', texto: 'Trasladar el hallazgo al área de datos para que resuelva antes de informar a la dirección.' }
    ],
    correctas: ['a'],
    explicacion: 'Comunicar la comprensión de los datos al liderazgo es una tarea del dominio, y se hace con opciones, no solo con el problema. (b) oculta información que cambia la decisión — el peor camino. (c) decide por la dirección algo que le corresponde a ella. (d) retrasa una información que ya es accionable.'
  },
  {
    id: 'cp-dat-004', dominio: 'datos', tarea: 0, enfoque: 'predictivo', tipo: 'multiple',
    enunciado: 'El equipo va a definir qué datos necesita para un modelo de riesgo crediticio. ¿Qué dos acciones corresponden a esta etapa? (Elija 2)',
    opciones: [
      { id: 'a', texto: 'Especificar los tipos, formatos y volumen de datos que el modelo requerirá.' },
      { id: 'b', texto: 'Seleccionar el algoritmo de clasificación que se usará para el entrenamiento.' },
      { id: 'c', texto: 'Identificar a los expertos del dominio que conocen el contexto de esas fuentes.' },
      { id: 'd', texto: 'Definir el umbral de decisión que separará a los solicitantes aprobados de los rechazados.' }
    ],
    correctas: ['a', 'c'],
    explicacion: 'Definir los datos necesarios e identificar a los expertos que los entienden son tareas de este dominio. (b) pertenece al desarrollo de modelos, y (d) es una decisión de operacionalización que se toma con el modelo ya entrenado y en función del costo de cada tipo de error.'
  },
  {
    id: 'cp-ope-001', dominio: 'operacion', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El modelo de clasificación de residuos está desplegado y funcionando. El equipo de proyecto se disuelve en dos semanas y el área de operaciones asumirá el sistema. ¿Qué es lo más importante de asegurar?',
    opciones: [
      { id: 'a', texto: 'Que la documentación técnica del modelo quede depositada en el repositorio de la organización.' },
      { id: 'b', texto: 'Que operaciones sepa reconocer cuándo el modelo se degrada y qué hacer cuando ocurra.' },
      { id: 'c', texto: 'Que el código fuente quede versionado y accesible para futuras modificaciones.' },
      { id: 'd', texto: 'Que se realice una sesión de capacitación sobre el funcionamiento del algoritmo.' }
    ],
    correctas: ['b'],
    explicacion: 'Un modelo se degrada cuando la realidad cambia y sus datos de entrenamiento envejecen. Si quien lo opera no sabe detectarlo ni qué hacer, el sistema seguirá dando respuestas — cada vez peores — sin que nadie lo note. (a) y (c) son necesarios pero insuficientes: documentar no es transferir capacidad. (d) explica el algoritmo, no la operación.'
  },
  {
    id: 'cp-ope-002', dominio: 'operacion', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un modelo de aprobación automática de solicitudes entra en producción. ¿Qué debe existir antes del despliegue, según el plan de contingencia?',
    opciones: [
      { id: 'a', texto: 'Un procedimiento definido para operar sin el modelo si falla o entrega resultados anómalos.' },
      { id: 'b', texto: 'Un segundo modelo entrenado con otro algoritmo, listo para sustituir al primero.' },
      { id: 'c', texto: 'Un acuerdo de nivel de servicio con el proveedor de infraestructura en la nube.' },
      { id: 'd', texto: 'Una copia de respaldo diaria de los datos de entrenamiento del modelo.' }
    ],
    correctas: ['a'],
    explicacion: 'La contingencia responde a «¿qué hacemos si esto falla mañana?», y la respuesta debe permitir que el negocio siga operando — normalmente, volver al proceso manual de forma ordenada. (b) es caro y solo cubre una de las formas de fallar. (c) y (d) protegen infraestructura y datos, no la continuidad del proceso.'
  },
  {
    id: 'cp-ope-003', dominio: 'operacion', tarea: 3, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Seis meses después del despliegue, las métricas técnicas del modelo siguen dentro de lo esperado, pero el beneficio de negocio comprometido no aparece. ¿Qué indica esto?',
    opciones: [
      { id: 'a', texto: 'Que el modelo necesita reentrenarse con datos más recientes.' },
      { id: 'b', texto: 'Que hay que revisar si el modelo resuelve el problema correcto y si sus salidas se están usando.' },
      { id: 'c', texto: 'Que las métricas técnicas están mal definidas y deben recalcularse.' },
      { id: 'd', texto: 'Que el periodo de medición es insuficiente y conviene esperar otros seis meses.' }
    ],
    correctas: ['b'],
    explicacion: 'Métricas técnicas sanas y beneficio ausente es el síntoma clásico de dos cosas: o el modelo resuelve algo que no era el problema, o sus salidas no se están incorporando a la decisión real. (a) y (c) atacan el modelo, que es justo lo que sí funciona. (d) pospone sin hipótesis.'
  },
  {
    id: 'cp-mod-001', dominio: 'modelos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un modelo de detección de fraude alcanza 96 % de exactitud global. El fraude ocurre en el 3 % de las transacciones. El equipo propone avanzar a producción con ese resultado. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Avanzar: 96 % supera con holgura el umbral de aceptación habitual.' },
      { id: 'b', texto: 'No avanzar todavía: con esa proporción, un modelo que nunca detecte fraude alcanzaría 97 %.' },
      { id: 'c', texto: 'Avanzar, pero monitoreando la exactitud mensualmente para detectar degradación.' },
      { id: 'd', texto: 'Reentrenar con más datos hasta superar el 99 % de exactitud global.' }
    ],
    correctas: ['b'],
    explicacion: 'Con clases desbalanceadas la exactitud global engaña: predecir siempre «no hay fraude» da 97 % sin detectar un solo caso. Hay que mirar precisión y exhaustividad sobre la clase minoritaria. (d) persigue la métrica equivocada con más empeño.'
  },
  {
    id: 'cp-mod-002', dominio: 'modelos', tarea: 5, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El modelo cumple los criterios de éxito en la evaluación general, pero falla de forma consistente en el segmento que más le importa al patrocinador. La causa son registros escasos e inconsistentes de ese segmento. ¿Qué corresponde decidir?',
    opciones: [
      { id: 'a', texto: 'Avanzar: la debilidad puede corregirse reentrenando después del despliegue.' },
      { id: 'b', texto: 'Avanzar: acordar con el patrocinador dejar ese segmento fuera del alcance por ahora.' },
      { id: 'c', texto: 'No avanzar: volver a las fases de datos y reforzar la cobertura de ese segmento.' },
      { id: 'd', texto: 'Avanzar: ya cumple la mayoría de los criterios medidos sobre el conjunto completo.' }
    ],
    correctas: ['c'],
    explicacion: 'La decisión de avance o detención se toma contra los criterios de éxito acordados, y el segmento que falla es precisamente el que sostiene el caso de negocio. Es un problema de datos y se resuelve en las fases de datos. (b) parece razonable pero vacía el proyecto de su propósito.'
  },
  {
    id: 'cp-res-001', dominio: 'responsable', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un modelo de preselección de personal se entrena con las contrataciones de los últimos diez años. Una revisión detecta que recomienda a muy pocas mujeres para puestos técnicos. ¿Cuál es la lectura correcta?',
    opciones: [
      { id: 'a', texto: 'El modelo funciona bien: refleja fielmente el patrón presente en los datos históricos.' },
      { id: 'b', texto: 'El modelo aprendió un sesgo del histórico y hay que analizar los datos de entrenamiento y aplicar mitigación.' },
      { id: 'c', texto: 'Es un problema de umbral: basta con ajustarlo para equilibrar las recomendaciones por género.' },
      { id: 'd', texto: 'Debe eliminarse la variable género del conjunto de datos y volver a entrenar.' }
    ],
    correctas: ['b'],
    explicacion: 'Un modelo entrenado con decisiones históricas sesgadas reproduce ese sesgo y lo reviste de objetividad técnica. (a) confunde fidelidad con corrección. (c) maquilla la salida sin tocar la causa. (d) es la trampa más común: quitar la variable no elimina el sesgo, porque otras variables actúan como sustitutas y además pierdes la capacidad de medirlo.'
  },
  {
    id: 'cp-res-002', dominio: 'responsable', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un modelo niega automáticamente ciertas solicitudes de crédito. Un cliente exige saber por qué fue rechazado y el equipo responde que el modelo es una red neuronal y no es posible explicarlo. ¿Qué falló?',
    opciones: [
      { id: 'a', texto: 'No se establecieron requisitos de explicabilidad antes de elegir el tipo de modelo.' },
      { id: 'b', texto: 'No se documentó el rendimiento del modelo con suficiente detalle técnico.' },
      { id: 'c', texto: 'No se realizaron pruebas de equidad entre distintos grupos de solicitantes.' },
      { id: 'd', texto: 'No se implementó un registro de auditoría de las decisiones del modelo.' }
    ],
    correctas: ['a'],
    explicacion: 'La explicabilidad es un requisito que condiciona qué modelos puedes usar, y se define antes de elegirlo — no se añade después. En un caso con obligación de motivar la decisión, un modelo inexplicable estaba descartado desde el principio. (c) y (d) son controles necesarios, pero no son lo que falló aquí.'
  },
  {
    id: 'cp-neg-005', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo evalúa los riesgos de un modelo que decidirá qué solicitudes de subsidio se aprueban automáticamente. ¿Qué riesgo es específico de un proyecto de IA y no aparecería en uno de software tradicional?',
    opciones: [
      { id: 'a', texto: 'Que el proveedor de infraestructura tenga una caída y el servicio quede indisponible.' },
      { id: 'b', texto: 'Que el modelo se degrade con el tiempo porque la población de solicitantes cambia.' },
      { id: 'c', texto: 'Que el desarrollo se retrase respecto al cronograma comprometido.' },
      { id: 'd', texto: 'Que el presupuesto se agote antes de completar el alcance.' }
    ],
    correctas: ['b'],
    explicacion: 'La degradación silenciosa es propia de la IA: el sistema sigue funcionando y respondiendo, pero acierta cada vez menos porque la realidad se alejó de los datos con los que aprendió. (a), (c) y (d) son riesgos de cualquier proyecto.'
  },
  {
    id: 'cp-neg-006', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Al redactar el enunciado del alcance de un modelo de clasificación de residuos, ¿qué inclusión evita más discusiones al momento de la aceptación?',
    opciones: [
      { id: 'a', texto: 'El algoritmo concreto que se usará y su configuración.' },
      { id: 'b', texto: 'La lista explícita de lo que queda FUERA, como el reentrenamiento continuo o la integración con el ERP.' },
      { id: 'c', texto: 'El nombre de los integrantes del equipo y su dedicación.' },
      { id: 'd', texto: 'La marca del hardware sobre el que se ejecutará el modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'El desacuerdo nace siempre en la frontera del alcance, no en su centro. Escribir las exclusiones convierte un supuesto tácito en un acuerdo. (a) y (d) son decisiones técnicas que además pueden cambiar; fijarlas en el alcance ata las manos sin aportar claridad.'
  },
  {
    id: 'cp-neg-007', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Se calcula el retorno de un modelo de mantenimiento predictivo comparando el ahorro esperado con el costo de desarrollarlo. El patrocinador aprueba. ¿Qué falta en ese cálculo?',
    opciones: [
      { id: 'a', texto: 'El costo total de propiedad: infraestructura, monitoreo y reentrenamiento durante toda la vida del modelo.' },
      { id: 'b', texto: 'El costo de las licencias de las herramientas de visualización.' },
      { id: 'c', texto: 'El costo de la capacitación inicial del equipo de desarrollo.' },
      { id: 'd', texto: 'El costo de oportunidad de no haber elegido otro proveedor.' }
    ],
    correctas: ['a'],
    explicacion: 'Un modelo no se construye y se olvida: hay que mantenerlo vivo con datos frescos, vigilarlo y reentrenarlo. Calcular el retorno solo con el costo de construir es el error más común y el que hace que proyectos aprobados resulten deficitarios al segundo año.'
  },
  {
    id: 'cp-neg-008', dominio: 'negocio', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un modelo de recomendación de rutas está listo y su precisión supera lo comprometido. En la prueba piloto los conductores lo ignoran y siguen usando su criterio. ¿Qué corresponde investigar primero?',
    opciones: [
      { id: 'a', texto: 'Si el modelo necesita más datos de entrenamiento para mejorar su precisión.' },
      { id: 'b', texto: 'Por qué no lo usan: si no confían en él, si no entienden sus sugerencias o si no encaja en su flujo de trabajo.' },
      { id: 'c', texto: 'Si conviene hacer obligatorio el uso del sistema mediante una directiva.' },
      { id: 'd', texto: 'Si el algoritmo elegido es el más adecuado para este tipo de problema.' }
    ],
    correctas: ['b'],
    explicacion: 'Es un problema de adopción, no de modelo. (a) y (d) mejoran algo que ya cumple. (c) fuerza el uso sin resolver la causa: obtendrás cumplimiento formal y sabotaje silencioso. Un modelo que nadie usa tiene beneficio cero por bueno que sea.'
  },
  {
    id: 'cp-neg-009', dominio: 'negocio', tarea: 6, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Al diseñar la solución para detectar contenedores mal clasificados, el equipo debate entre un modelo de visión por computadora y un conjunto de reglas sobre el peso y el origen del contenedor. ¿Qué debe guiar la decisión?',
    opciones: [
      { id: 'a', texto: 'Elegir la visión por computadora, porque es la tecnología más avanzada disponible.' },
      { id: 'b', texto: 'Comprobar si las reglas resuelven una parte suficiente del problema, porque serían más baratas, explicables y fáciles de mantener.' },
      { id: 'c', texto: 'Elegir las reglas, porque los modelos de IA siempre son más difíciles de justificar ante auditoría.' },
      { id: 'd', texto: 'Implementar ambas y comparar sus resultados durante seis meses.' }
    ],
    correctas: ['b'],
    explicacion: 'Si el patrón se puede enunciar, enunciarlo sale más barato y deja un sistema explicable. La IA aporta cuando el patrón existe pero es demasiado complejo o cambiante para escribirlo. (a) elige por moda y (c) por prejuicio; ambas saltan el análisis.'
  },
  {
    id: 'cp-neg-010', dominio: 'negocio', tarea: 8, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El área financiera pide una cifra única de beneficio esperado para el caso de negocio de un proyecto de IA con alta incertidumbre técnica. ¿Cómo conviene responder?',
    opciones: [
      { id: 'a', texto: 'Dar la cifra más probable, porque el caso de negocio necesita un número concreto para aprobarse.' },
      { id: 'b', texto: 'Presentar un rango con los supuestos explícitos que lo sostienen y qué lo movería en cada dirección.' },
      { id: 'c', texto: 'Dar la cifra más conservadora, para no crear expectativas que luego no se cumplan.' },
      { id: 'd', texto: 'Posponer el caso de negocio hasta tener el modelo entrenado y poder medir el beneficio real.' }
    ],
    correctas: ['b'],
    explicacion: 'Una cifra única en un contexto incierto transmite una precisión que no existe, y cuando falla destruye la credibilidad del proyecto. (c) puede hacer que un buen proyecto no se apruebe. (d) invierte el orden: el caso de negocio es lo que justifica gastar en entrenar.'
  },
  {
    id: 'cp-neg-011', dominio: 'negocio', tarea: 9, enfoque: 'predictivo', tipo: 'multiple',
    enunciado: 'Se arma el equipo para un proyecto de IA en una planta industrial. Ya hay dos científicos de datos y un ingeniero de infraestructura. ¿Qué dos perfiles faltan y son críticos? (Elija 2)',
    opciones: [
      { id: 'a', texto: 'Alguien del área operativa que entienda el proceso y sepa qué significan los datos.' },
      { id: 'b', texto: 'Un diseñador gráfico que mejore la presentación de los tableros de resultados.' },
      { id: 'c', texto: 'Quien pueda decidir sobre el cumplimiento normativo y el uso permitido de los datos.' },
      { id: 'd', texto: 'Un tercer científico de datos, para acelerar el entrenamiento del modelo.' }
    ],
    correctas: ['a', 'c'],
    explicacion: 'Sin conocimiento del dominio, el equipo resuelve con elegancia el problema equivocado; sin criterio de cumplimiento, el proyecto puede quedar bloqueado en auditoría. (d) es el reflejo habitual y rara vez el cuello de botella: la limitación suele estar en los datos y en el negocio, no en el modelado.'
  },
  {
    id: 'cp-dat-005', dominio: 'datos', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo necesita entender una base de datos de producción con decenas de columnas y documentación escasa. ¿A quién conviene involucrar?',
    opciones: [
      { id: 'a', texto: 'Al administrador de la base de datos, que conoce su estructura y rendimiento.' },
      { id: 'b', texto: 'A quien trabaja a diario con ese proceso y sabe qué significa cada campo y por qué hay huecos.' },
      { id: 'c', texto: 'Al proveedor del sistema, que puede entregar el diccionario técnico de datos.' },
      { id: 'd', texto: 'Al gerente del área, que puede autorizar formalmente el acceso.' }
    ],
    correctas: ['b'],
    explicacion: 'El experto del dominio aporta lo que ninguna documentación tiene: por qué esa columna quedó vacía tres meses, qué código se usaba antes del cambio de proveedor, qué registros son de prueba. (a) y (c) dan la estructura, no el significado; (d) da el permiso, no el contexto.'
  },
  {
    id: 'cp-dat-006', dominio: 'datos', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El mismo indicador de producción existe en tres sistemas de la organización, con valores distintos para las mismas fechas. ¿Qué corresponde hacer antes de entrenar?',
    opciones: [
      { id: 'a', texto: 'Promediar los tres valores para obtener una estimación equilibrada.' },
      { id: 'b', texto: 'Usar el sistema más moderno, porque probablemente tenga los datos más confiables.' },
      { id: 'c', texto: 'Determinar con el negocio cuál es la fuente de verdad y por qué difieren las otras.' },
      { id: 'd', texto: 'Entrenar con los tres conjuntos, para que el modelo aprenda a manejar la variabilidad.' }
    ],
    correctas: ['c'],
    explicacion: 'La discrepancia es información: puede revelar un problema de proceso que el proyecto tendrá que considerar. Elegir la fuente de verdad es una decisión del negocio, no técnica. (a) inventa un dato que no corresponde a ninguna realidad y (d) enseña ruido como si fuera señal.'
  },
  {
    id: 'cp-dat-007', dominio: 'datos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo empieza a trabajar copiando la base de producción, que contiene datos personales de clientes, a las laptops personales de los analistas. ¿Cuál es el problema principal?',
    opciones: [
      { id: 'a', texto: 'Que el rendimiento del procesamiento será menor que en un servidor dedicado.' },
      { id: 'b', texto: 'Que los datos salieron del entorno con controles y ahora están en uno sin ellos.' },
      { id: 'c', texto: 'Que el tamaño de la base puede superar la capacidad de almacenamiento de las laptops.' },
      { id: 'd', texto: 'Que cada analista tendrá una copia distinta y podrían desincronizarse.' }
    ],
    correctas: ['b'],
    explicacion: 'Es un incidente de cumplimiento, no una molestia técnica. Los datos de entrenamiento suelen ser la copia peor protegida que existe de producción. Lo correcto es un entorno de desarrollo con los mismos controles de acceso, y trabajar con datos anonimizados o con muestras.'
  },
  {
    id: 'cp-dat-008', dominio: 'datos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'La extracción de datos depende de tres áreas distintas que no reportan al proyecto. El cronograma asignó dos semanas a esta actividad. ¿Qué es lo más prudente?',
    opciones: [
      { id: 'a', texto: 'Mantener las dos semanas y escalar si alguna de las áreas no cumple.' },
      { id: 'b', texto: 'Confirmar con cada área su capacidad y plazos reales, y ajustar el cronograma con ese dato.' },
      { id: 'c', texto: 'Solicitar acceso directo a los sistemas para no depender de esas áreas.' },
      { id: 'd', texto: 'Reducir el alcance de los datos a lo que se pueda extraer en dos semanas.' }
    ],
    correctas: ['b'],
    explicacion: 'La recopilación es la fase que más se subestima porque depende de terceros con sus propias prioridades. Confirmarlo antes convierte un desvío anunciado en un plan realista. (a) planifica sobre un supuesto no verificado; (d) recorta los datos antes de saber si hacían falta.'
  },
  {
    id: 'cp-dat-009', dominio: 'datos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Tras evaluar los datos, se concluye que cubren bien los últimos doce meses pero no incluyen ningún periodo con las condiciones excepcionales que el modelo deberá manejar. ¿Qué implica?',
    opciones: [
      { id: 'a', texto: 'Nada relevante: doce meses son suficientes para entrenar un modelo estable.' },
      { id: 'b', texto: 'Que los datos no representan la realidad sobre la que decidirá, y hay que acotar el alcance o conseguir esos casos.' },
      { id: 'c', texto: 'Que conviene generar datos sintéticos que simulen las condiciones excepcionales.' },
      { id: 'd', texto: 'Que se debe entrenar igual y vigilar el comportamiento cuando ocurran esas condiciones.' }
    ],
    correctas: ['b'],
    explicacion: 'Es un fallo de representatividad: el modelo no puede aprender un patrón del que no vio ejemplos, y ante esas condiciones responderá con confianza y sin fundamento. La decisión honesta es acotar el alcance o conseguir los casos. (c) puede ayudar pero no sustituye evidencia real, y (d) traslada el riesgo a producción.'
  },
  {
    id: 'cp-ope-004', dominio: 'operacion', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Se prepara el plan de despliegue de un modelo que reemplazará una decisión que hoy toma un equipo humano. ¿Qué estrategia reduce mejor el riesgo?',
    opciones: [
      { id: 'a', texto: 'Desplegar en paralelo al proceso actual y comparar ambas salidas antes de reemplazarlo.' },
      { id: 'b', texto: 'Reemplazar el proceso de una vez, para que el equipo no vuelva al método anterior por costumbre.' },
      { id: 'c', texto: 'Desplegar solo en el turno de menor volumen y esperar seis meses antes de ampliar.' },
      { id: 'd', texto: 'Desplegar completo pero con un responsable de guardia para atender incidencias.' }
    ],
    correctas: ['a'],
    explicacion: 'La ejecución en paralelo revela discrepancias que ninguna prueba encontró, sin arriesgar la operación: si el modelo se equivoca, el proceso humano sigue decidiendo. (b) apuesta todo a que las pruebas fueron exhaustivas, y nunca lo son.'
  },
  {
    id: 'cp-ope-005', dominio: 'operacion', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Durante el despliegue aparece un problema de integración con un sistema que no participó del proyecto y cuyo responsable no estaba identificado. ¿Qué falló antes?',
    opciones: [
      { id: 'a', texto: 'La evaluación de la calidad de los datos de entrenamiento.' },
      { id: 'b', texto: 'La identificación de interesados y de las dependencias técnicas del entorno.' },
      { id: 'c', texto: 'La selección del algoritmo, que resultó incompatible con la infraestructura.' },
      { id: 'd', texto: 'La definición de los criterios de éxito del modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'Un sistema del que dependes y cuyo responsable no conoces es un interesado no identificado. Cuando aparece en el despliegue ya es un impedimento; identificado en la planificación habría sido una dependencia gestionada con su fecha y su responsable.'
  },
  {
    id: 'cp-ope-006', dominio: 'operacion', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un año después del despliegue, nadie puede afirmar con certeza qué versión del modelo está decidiendo en producción ni con qué datos se entrenó. ¿Qué faltó establecer?',
    opciones: [
      { id: 'a', texto: 'La gobernanza del modelo: control de versiones y gestión de sus cambios.' },
      { id: 'b', texto: 'Un plan de comunicación con los interesados del proyecto.' },
      { id: 'c', texto: 'Un tablero de métricas de negocio visible para la dirección.' },
      { id: 'd', texto: 'Un acuerdo de nivel de servicio con el área de infraestructura.' }
    ],
    correctas: ['a'],
    explicacion: 'La pregunta «¿por qué el sistema decidió esto?» llega siempre, normalmente de auditoría o de un cliente. Sin versionado del modelo y registro de su linaje de datos, no hay respuesta posible — y en un sector regulado eso es un hallazgo.'
  },
  {
    id: 'cp-ope-007', dominio: 'operacion', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Al cerrar el proyecto, ¿qué lección aprendida resulta más valiosa para los siguientes proyectos de IA de la organización?',
    opciones: [
      { id: 'a', texto: 'Que hay que mejorar la comunicación entre las áreas involucradas.' },
      { id: 'b', texto: 'Que qué fuentes de datos resultaron inútiles, por qué, y cuánto tardó realmente cada área en entregarlas.' },
      { id: 'c', texto: 'Que el algoritmo elegido tuvo un rendimiento satisfactorio.' },
      { id: 'd', texto: 'Que el equipo trabajó de forma comprometida pese a las dificultades.' }
    ],
    correctas: ['b'],
    explicacion: 'Una lección útil cambia algo en el próximo proyecto. Saber qué datos no sirvieron y qué plazos son reales ahorra semanas y se puede incorporar a las plantillas de planificación. (a) y (d) son generalidades que no modifican ninguna decisión futura.'
  },
  {
    id: 'cp-mod-003', dominio: 'modelos', tarea: 0, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo técnico propone una arquitectura compleja que promete unos puntos más de acierto que un modelo simple. El sistema decidirá sobre solicitudes de crédito y la normativa obliga a motivar cada rechazo. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Aceptar la arquitectura compleja: a mayor acierto, mejor decisión para el cliente.' },
      { id: 'b', texto: 'Priorizar el modelo explicable, porque la obligación de motivar es un requisito, no una preferencia.' },
      { id: 'c', texto: 'Aceptar la compleja y documentar exhaustivamente su desempeño estadístico.' },
      { id: 'd', texto: 'Dejar la decisión al equipo técnico, que conoce mejor las capacidades de cada opción.' }
    ],
    correctas: ['b'],
    explicacion: 'La explicabilidad es un requisito que acota qué modelos son elegibles, y se define antes de elegir. El intercambio entre precisión e interpretabilidad es real, pero aquí no está en discusión: sin motivación no se puede operar. (c) confunde documentar el rendimiento con explicar una decisión individual.'
  },
  {
    id: 'cp-mod-004', dominio: 'modelos', tarea: 2, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'El cronograma asignó tres semanas fijas al entrenamiento del modelo, como si fuera una tarea de duración conocida. ¿Cuál es el riesgo de estimarlo así?',
    opciones: [
      { id: 'a', texto: 'Ninguno: con recursos de cómputo suficientes el entrenamiento es predecible.' },
      { id: 'b', texto: 'Que el entrenamiento es un ciclo de prueba y ajuste, no una tarea lineal, y estimarlo como fija provoca desvío.' },
      { id: 'c', texto: 'Que tres semanas es siempre insuficiente para cualquier modelo.' },
      { id: 'd', texto: 'Que impide usar técnicas de aprendizaje profundo, que requieren más tiempo.' }
    ],
    correctas: ['b'],
    explicacion: 'Entrenar implica probar configuraciones, evaluar, ajustar y repetir. Cuántas vueltas hacen falta no se sabe por adelantado. Por eso se planifica con iteraciones y puntos de revisión, no con una duración cerrada. (c) generaliza sin conocer el problema.'
  },
  {
    id: 'cp-mod-005', dominio: 'modelos', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un modelo que predice qué clientes cancelarán el servicio alcanza 99 % de acierto en pruebas. Entre sus variables de entrada figura «fecha de solicitud de baja». ¿Qué ocurre?',
    opciones: [
      { id: 'a', texto: 'El modelo es excelente y debe desplegarse cuanto antes.' },
      { id: 'b', texto: 'Hay fuga de datos: esa variable solo existe cuando el cliente ya decidió irse.' },
      { id: 'c', texto: 'El modelo está sobreajustado y hay que reducir su complejidad.' },
      { id: 'd', texto: 'Los datos están desbalanceados y hay que rebalancear las clases.' }
    ],
    correctas: ['b'],
    explicacion: 'Es fuga de datos: información que no existirá en el momento real de la predicción. Por eso el resultado es espectacular en pruebas y se desploma en producción. La comprobación mental: en el instante en que el modelo debe predecir, ¿este dato ya existe?'
  },
  {
    id: 'cp-mod-006', dominio: 'modelos', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'En el punto de avance o detención previo al entrenamiento, la calidad de los datos queda por debajo de lo acordado. El patrocinador pide continuar porque la fecha comprometida está cerca. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Continuar y dejar constancia del riesgo en el registro correspondiente.' },
      { id: 'b', texto: 'Presentar el impacto de continuar y las opciones, para que la decisión se tome informada.' },
      { id: 'c', texto: 'Continuar, porque la fecha comprometida con el cliente tiene prioridad.' },
      { id: 'd', texto: 'Detener el proyecto de forma definitiva por incumplir el criterio.' }
    ],
    correctas: ['b'],
    explicacion: 'El punto de control existe para que la decisión se tome con información, no para que la tome el director en solitario. (a) documenta el daño sin evitarlo. (c) acepta sin analizar. (d) decide algo que corresponde a quien responde por el caso de negocio.'
  },
  {
    id: 'cp-res-003', dominio: 'responsable', tarea: 0, enfoque: 'predictivo', tipo: 'multiple',
    enunciado: 'Un proyecto de IA usará historiales médicos para entrenar un modelo de apoyo al diagnóstico. ¿Qué dos medidas corresponden al plan de privacidad y seguridad? (Elija 2)',
    opciones: [
      { id: 'a', texto: 'Anonimizar o seudonimizar los datos antes de extraerlos al entorno de desarrollo.' },
      { id: 'b', texto: 'Elegir un algoritmo cuyo rendimiento sea el más alto posible sobre estos datos.' },
      { id: 'c', texto: 'Realizar una evaluación de impacto en la privacidad antes de desplegar el modelo.' },
      { id: 'd', texto: 'Aumentar el volumen de historiales para mejorar la capacidad de generalización.' }
    ],
    correctas: ['a', 'c'],
    explicacion: 'Ambas son medidas explícitas de esta tarea y se aplican a lo largo del ciclo, no al final. (b) y (d) son decisiones de modelado que no reducen el riesgo de privacidad — de hecho (d) lo aumenta.'
  },
  {
    id: 'cp-res-004', dominio: 'responsable', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'A mitad del proyecto entra en vigor una regulación de IA que impone requisitos nuevos a los sistemas de decisión automatizada. ¿Cómo debía haberse tratado esto?',
    opciones: [
      { id: 'a', texto: 'Como un imprevisto: las regulaciones no se pueden anticipar.' },
      { id: 'b', texto: 'Como un riesgo previsible que se vigila desde el inicio, coordinando con el área legal.' },
      { id: 'c', texto: 'Como un cambio de alcance que el cliente debe financiar por completo.' },
      { id: 'd', texto: 'Como una razón para detener el proyecto hasta que el marco normativo se estabilice.' }
    ],
    correctas: ['b'],
    explicacion: 'El monitoreo de la evolución regulatoria es una tarea del dominio, precisamente porque en IA la normativa se mueve rápido y es previsible que se mueva. (a) trata como sorpresa algo que estaba anunciado; (d) espera una estabilidad que no va a llegar.'
  },
  {
    id: 'cp-res-005', dominio: 'responsable', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Auditoría pregunta por qué el sistema rechazó una solicitud concreta hace ocho meses. ¿Qué se necesita para poder responder?',
    opciones: [
      { id: 'a', texto: 'El código fuente del modelo y su documentación técnica.' },
      { id: 'b', texto: 'El registro de la decisión, la versión del modelo que la tomó y los datos con los que se entrenó.' },
      { id: 'c', texto: 'Las métricas agregadas de desempeño del modelo durante ese mes.' },
      { id: 'd', texto: 'La aprobación del patrocinador para el despliegue de ese modelo.' }
    ],
    correctas: ['b'],
    explicacion: 'Reconstruir una decisión individual exige saber qué versión decidió y con qué aprendió. (a) no basta: el código no dice qué modelo estaba activo. (c) habla del conjunto, no del caso. Esa trazabilidad se monta antes, porque después no se puede fabricar.'
  },
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI: PREGUNTAS_CPMAI };
