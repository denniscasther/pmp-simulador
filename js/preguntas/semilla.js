/**
 * Banco semilla — preguntas ORIGINALES escritas contra el ECO de julio de 2026.
 *
 * El archivo NO está ordenado por dominio: al migrar del ECO 2021 al de 2026,
 * riesgo, control de cambios e impedimentos se mudaron a Entorno de negocio y
 * varias preguntas cambiaron de casa sin moverse de sitio en el archivo.
 *
 * ⚠️ REGLA INNEGOCIABLE DEL PROYECTO: aquí nunca entra una pregunta copiada del
 *    examen real ni de un simulador comercial. Las preguntas de PMI están bajo
 *    copyright y NDA. Todo lo que hay aquí se escribe de cero contra las tareas
 *    del ECO. Si alguna vez dudas del origen de una pregunta, no la incluyas.
 *
 * Formato de cada pregunta:
 *   id          — único, prefijo por dominio (per / pro / neg)
 *   dominio     — 'personas' (33 %) | 'procesos' (41 %) | 'negocio' (26 %)
 *   tarea       — índice dentro de ECO.dominio(x).tareas
 *   enfoque     — 'predictivo' (40 % del examen) | 'agil' (60 %, adaptativo e híbrido)
 *   tipo        — 'opcion' (una correcta) | 'multiple' (varias)
 *   enunciado   — situacional: qué pasa y qué hace el director de proyecto
 *   opciones    — [{ id, texto }]
 *   correctas   — [ids]
 *   explicacion — POR QUÉ, y por qué las otras no. Es lo que hace que se aprenda.
 */

const PREGUNTAS_SEMILLA = [

  {
    id: 'per-001', dominio: 'personas', tarea: 1, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Durante la revisión de iteración, dos desarrolladores discuten a gritos sobre qué enfoque técnico seguir. El resto del equipo deja de hablar. ¿Qué hace primero el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Decidir él mismo el enfoque técnico para que la reunión avance.' },
      { id: 'b', texto: 'Escalar la situación al gerente funcional de ambos.' },
      { id: 'c', texto: 'Reunirse con los dos para entender la causa del desacuerdo y facilitar que lo resuelvan.' },
      { id: 'd', texto: 'Registrar la situación en el registro de incidencias y continuar la revisión.' }
    ],
    correctas: ['c'],
    explicacion: 'El conflicto se aborda de forma directa y colaborativa, buscando la causa: es el enfoque que produce soluciones duraderas. (a) impone y desperdicia el criterio técnico del equipo. (b) escala algo que el equipo puede resolver y erosiona su autonomía. (d) registra el síntoma sin atender el problema.'
  },
  {
    id: 'per-002', dominio: 'personas', tarea: 7, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un equipo repartido entre Lima, Madrid y Manila reporta que las decisiones se toman en reuniones donde media plantilla está dormida. ¿Cuál es la mejor respuesta?',
    opciones: [
      { id: 'a', texto: 'Fijar la reunión en el horario de la mayoría y publicar el acta para el resto.' },
      { id: 'b', texto: 'Rotar el horario de la reunión y trasladar parte de la decisión a canales asíncronos.' },
      { id: 'c', texto: 'Pedir a los de Manila que ajusten su jornada mientras dure el proyecto.' },
      { id: 'd', texto: 'Grabar las reuniones para que cada quien las vea cuando pueda.' }
    ],
    correctas: ['b'],
    explicacion: 'Rotar reparte la incomodidad y lo asíncrono permite participar de verdad, no solo enterarse. (a) y (d) convierten a una parte del equipo en espectadora: enterarse no es decidir. (c) carga el costo siempre sobre el mismo grupo.'
  },
  {
    id: 'per-003', dominio: 'personas', tarea: 1, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un equipo nuevo arranca su primera iteración. El director del proyecto quiere prevenir fricciones sobre horarios, revisiones de código y cómo se pide ayuda. ¿Qué corresponde hacer?',
    opciones: [
      { id: 'a', texto: 'Redactar un procedimiento y distribuirlo al equipo.' },
      { id: 'b', texto: 'Esperar a que surja el primer conflicto y resolverlo entonces.' },
      { id: 'c', texto: 'Facilitar que el equipo acuerde sus propias reglas básicas y dejarlas visibles.' },
      { id: 'd', texto: 'Adoptar las reglas del último proyecto, que funcionaron bien.' }
    ],
    correctas: ['c'],
    explicacion: 'Las reglas básicas las construye el equipo: lo que se acuerda se cumple, lo que se impone se negocia otra vez. (a) y (d) imponen. (b) es reactivo y deja que el daño ocurra primero.'
  },
  {
    id: 'neg-004', dominio: 'negocio', tarea: 3, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'El equipo lleva tres semanas sin poder probar en el ambiente de calidad porque otro proyecto lo tiene tomado. La velocidad cayó a la mitad. ¿Qué hace el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Ajustar el cronograma para reflejar la menor velocidad.' },
      { id: 'b', texto: 'Gestionar activamente con el dueño del ambiente y escalar si no se libera.' },
      { id: 'c', texto: 'Pedir al equipo que pruebe en su ambiente local mientras tanto.' },
      { id: 'd', texto: 'Registrar el riesgo y monitorearlo en la próxima revisión.' }
    ],
    correctas: ['b'],
    explicacion: 'Retirar impedimentos es responsabilidad directa del director del proyecto, y escalar es legítimo cuando el bloqueo está fuera del control del equipo. (a) y (d) documentan el daño sin evitarlo. (c) es un parche que además cambia las condiciones de prueba.'
  },
  {
    id: 'per-004', dominio: 'personas', tarea: 5, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Un interesado clave pide al director del proyecto que apruebe personalmente cada tarea antes de darla por terminada. El equipo ya tiene una definición de terminado acordada. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Aceptar, porque el interesado es clave para el proyecto.' },
      { id: 'b', texto: 'Explicar la definición de terminado y cómo le da visibilidad, manteniendo la autonomía del equipo.' },
      { id: 'c', texto: 'Rechazar la petición e informar que el equipo es autoorganizado.' },
      { id: 'd', texto: 'Trasladar la decisión al patrocinador.' }
    ],
    correctas: ['b'],
    explicacion: 'Se atiende la necesidad real detrás de la petición — visibilidad y confianza — sin desmontar el empoderamiento del equipo. (a) crea un cuello de botella y quita responsabilidad al equipo. (c) tiene razón de fondo pero cierra la conversación. (d) escala algo que el director puede resolver.'
  },
  {
    id: 'per-005', dominio: 'personas', tarea: 2, enfoque: 'predictivo', tipo: 'multiple',
    enunciado: 'El director del proyecto nota que un miembro del equipo responde con ironía en las reuniones desde que se rechazó su propuesta técnica. ¿Qué dos acciones son apropiadas? (Elija 2)',
    opciones: [
      { id: 'a', texto: 'Hablar en privado con la persona para entender cómo está viviendo la situación.' },
      { id: 'b', texto: 'Señalar la conducta en la siguiente reunión para que el equipo fije el límite.' },
      { id: 'c', texto: 'Explicar el razonamiento detrás de la decisión y qué parte de su propuesta sí se aprovechó.' },
      { id: 'd', texto: 'Solicitar su reemplazo antes de que afecte al resto del equipo.' }
    ],
    correctas: ['a', 'c'],
    explicacion: 'Reconocer la emisión emocional y atenderla en privado, y cerrar el vacío de información que la originó, son aplicaciones directas de la inteligencia emocional. (b) expone a la persona y agrava el problema. (d) es desproporcionado ante un conflicto no abordado todavía.'
  },

  {
    id: 'neg-005', dominio: 'negocio', tarea: 2, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Con el proyecto a mitad de ejecución, el patrocinador solicita por correo agregar un módulo de reportes. El director estima que añade tres semanas. ¿Qué hace primero?',
    opciones: [
      { id: 'a', texto: 'Incorporarlo al plan, dado que lo pide el patrocinador.' },
      { id: 'b', texto: 'Rechazarlo por estar fuera de la línea base del alcance.' },
      { id: 'c', texto: 'Registrar una solicitud de cambio y analizar su impacto integral.' },
      { id: 'd', texto: 'Consultar al equipo si puede absorberlo sin mover la fecha.' }
    ],
    correctas: ['c'],
    explicacion: 'Todo cambio pasa por el control integrado de cambios, sin importar quién lo pida: primero se documenta y se evalúa impacto en alcance, cronograma, costo, riesgo y calidad. (a) salta el control. (b) decide sin analizar. (d) presiona al equipo antes de conocer el impacto real.'
  },
  {
    id: 'neg-006', dominio: 'negocio', tarea: 4, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Durante la planificación de riesgos, el equipo identifica que el proveedor único de un componente podría retrasarse. La probabilidad es media y el impacto alto. El director contrata a un segundo proveedor como respaldo. ¿Qué estrategia aplicó?',
    opciones: [
      { id: 'a', texto: 'Evitar' },
      { id: 'b', texto: 'Mitigar' },
      { id: 'c', texto: 'Transferir' },
      { id: 'd', texto: 'Aceptar' }
    ],
    correctas: ['b'],
    explicacion: 'Mitigar reduce la probabilidad o el impacto sin eliminar el riesgo: sigue existiendo la posibilidad de retraso, pero su efecto es menor. Evitar sería rediseñar para no necesitar el componente. Transferir sería trasladar la consecuencia económica a un tercero, por ejemplo con una cláusula penal o un seguro. Aceptar sería no hacer nada y reservar contingencia.'
  },
  {
    id: 'pro-001', dominio: 'procesos', tarea: 0, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'Los requisitos del producto son inciertos y se espera que cambien, pero la organización exige hitos de facturación fijos ante el cliente. ¿Qué enfoque es más apropiado?',
    opciones: [
      { id: 'a', texto: 'Predictivo, porque los hitos de facturación son fijos.' },
      { id: 'b', texto: 'Ágil puro, porque los requisitos son inciertos.' },
      { id: 'c', texto: 'Híbrido: entregas iterativas dentro de una estructura de fases y hitos.' },
      { id: 'd', texto: 'Predictivo con una fase de descubrimiento inicial extendida.' }
    ],
    correctas: ['c'],
    explicacion: 'Cuando conviven incertidumbre en el producto y restricciones fijas de gobernanza, el híbrido resuelve ambos ejes: se itera el desarrollo y se conserva la estructura contractual. (a) y (d) ignoran la volatilidad de los requisitos. (b) choca con una restricción organizacional que no está en discusión.'
  },
  {
    id: 'pro-002', dominio: 'procesos', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Una actividad de la ruta crítica se retrasó cinco días. El director necesita recuperar la fecha y dispone de presupuesto. ¿Qué técnica aplica si decide agregar recursos a esa actividad?',
    opciones: [
      { id: 'a', texto: 'Ejecución rápida (fast tracking)' },
      { id: 'b', texto: 'Intensificación (crashing)' },
      { id: 'c', texto: 'Nivelación de recursos' },
      { id: 'd', texto: 'Reducción del alcance' }
    ],
    correctas: ['b'],
    explicacion: 'La intensificación agrega recursos para acortar la duración, a costa de mayor costo. La ejecución rápida solapa actividades que iban en secuencia y aumenta el riesgo de retrabajo, sin costo adicional directo. La nivelación ajusta la asignación y suele alargar el cronograma. Reducir alcance requiere control de cambios.'
  },
  {
    id: 'neg-007', dominio: 'negocio', tarea: 3, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'A mitad de una iteración, el equipo descubre que una dependencia externa no estará lista y no puede terminar dos historias comprometidas. ¿Qué hace el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Cancelar la iteración y replanificar desde cero.' },
      { id: 'b', texto: 'Registrar la incidencia, comunicarla al dueño de producto y reacomodar el trabajo restante.' },
      { id: 'c', texto: 'Pedir horas extra al equipo para compensar.' },
      { id: 'd', texto: 'Esperar a la retrospectiva para analizar lo ocurrido.' }
    ],
    correctas: ['b'],
    explicacion: 'Una incidencia es un hecho que ya ocurrió: se registra, se comunica a quien decide prioridades y se adapta el plan. (a) es desproporcionado. (c) traslada al equipo un problema que no causó. (d) retrasa una decisión que hay que tomar ahora.'
  },
  {
    id: 'pro-003', dominio: 'procesos', tarea: 9, enfoque: 'predictivo', tipo: 'multiple',
    enunciado: 'El proyecto termina y el director prepara el cierre. ¿Qué dos actividades corresponden a esta fase? (Elija 2)',
    opciones: [
      { id: 'a', texto: 'Obtener la aceptación formal de los entregables por parte del cliente.' },
      { id: 'b', texto: 'Liberar los recursos y documentar las lecciones aprendidas en el repositorio de la organización.' },
      { id: 'c', texto: 'Actualizar la línea base del cronograma con el avance real.' },
      { id: 'd', texto: 'Ejecutar las acciones correctivas pendientes del último informe de desempeño.' }
    ],
    correctas: ['a', 'b'],
    explicacion: 'El cierre exige aceptación formal y transferencia del conocimiento a los activos de la organización, para que el aprendizaje sobreviva al proyecto. (c) y (d) pertenecen a monitoreo y control, que ya debieron completarse antes de cerrar.'
  },

  {
    id: 'neg-001', dominio: 'negocio', tarea: 1, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'A mitad del proyecto entra en vigor una norma de protección de datos que obliga a cifrar información que hoy se almacena en claro. ¿Qué hace primero el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Evaluar el impacto del requisito de cumplimiento y tramitar el cambio correspondiente.' },
      { id: 'b', texto: 'Continuar según el plan, porque la norma es posterior a la línea base.' },
      { id: 'c', texto: 'Instruir al equipo que cifre de inmediato para no incumplir.' },
      { id: 'd', texto: 'Consultar al área legal si la norma aplica al proyecto.' }
    ],
    correctas: ['a'],
    explicacion: 'El cumplimiento no es negociable, pero la vía sigue siendo evaluar impacto y pasar por control de cambios. (b) ignora una obligación legal. (c) actúa sin analizar impacto en costo y cronograma. (d) es razonable pero secundario: la evaluación de impacto ya incluye esa consulta.'
  },
  {
    id: 'neg-002', dominio: 'negocio', tarea: 6, enfoque: 'agil', tipo: 'opcion',
    enunciado: 'El proyecto lleva cuatro iteraciones entregando funcionalidad, pero el beneficio de negocio esperado no se ha materializado porque el área usuaria no adoptó la herramienta. ¿Qué corresponde?',
    opciones: [
      { id: 'a', texto: 'Continuar entregando: la adopción es responsabilidad del área usuaria.' },
      { id: 'b', texto: 'Trabajar con el patrocinador y el área usuaria en la gestión del cambio organizacional y medir la adopción.' },
      { id: 'c', texto: 'Agregar más funcionalidad para hacer la herramienta más atractiva.' },
      { id: 'd', texto: 'Cerrar el proyecto y reportar los entregables completados.' }
    ],
    correctas: ['b'],
    explicacion: 'El valor se realiza con la adopción, no con la entrega: entregar sin que nadie use el producto es beneficio cero. (a) desentiende al proyecto de su propósito. (c) agrava el problema construyendo sobre algo que no se usa. (d) declara éxito sin beneficio.'
  },
  {
    id: 'neg-003', dominio: 'negocio', tarea: 7, enfoque: 'predictivo', tipo: 'opcion',
    enunciado: 'Un competidor lanza un producto que vuelve obsoleta una de las tres funcionalidades principales del proyecto en curso. ¿Qué hace el director del proyecto?',
    opciones: [
      { id: 'a', texto: 'Continuar: el alcance está aprobado y la línea base no cambia por movimientos del mercado.' },
      { id: 'b', texto: 'Suspender el proyecto hasta que la dirección defina una estrategia.' },
      { id: 'c', texto: 'Analizar el impacto sobre el caso de negocio y llevarlo al patrocinador con opciones.' },
      { id: 'd', texto: 'Eliminar esa funcionalidad del alcance y reasignar el esfuerzo.' }
    ],
    correctas: ['c'],
    explicacion: 'Los cambios del entorno externo se evalúan contra el caso de negocio, y quien decide sobre él es el patrocinador: el director aporta análisis y opciones. (a) ignora que el caso de negocio puede haber dejado de sostenerse. (b) y (d) toman decisiones que no le corresponden.'
  }
];

if (typeof module !== 'undefined') module.exports = { PREGUNTAS_SEMILLA: PREGUNTAS_SEMILLA };
