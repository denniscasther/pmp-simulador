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
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_CPMAI: PREGUNTAS_CPMAI };
