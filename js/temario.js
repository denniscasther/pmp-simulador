/**
 * Temario de estudio, organizado por edición de la Guía del PMBOK.
 *
 * ⚠️ LEE ESTO ANTES DE AÑADIR CONTENIDO.
 *
 * El examen NO se rige por el PMBOK sino por el ECO (`js/eco.js`). El PMBOK es el
 * cuerpo de conocimiento del que salen los conceptos; el ECO dice qué se evalúa.
 * Por eso cada tema declara `eco: [...]` — el puente entre lo que estudias y lo
 * que te van a preguntar. Un tema sin ECO asociado es un tema que no sabes si
 * entra.
 *
 * Formato: 'dominio:índiceDeTarea', validado en `prueba-motor.js` contra el ECO
 * cargado. Si el ECO cambia otra vez, las pruebas avisan de los enlaces rotos.
 *
 * REGLA DE HONESTIDAD: aquí solo entra contenido que se pueda respaldar. Una
 * edición sin fuente verificada se declara con `estado: 'sin-fuente'` y grupos
 * vacíos — se muestra el hueco, no se rellena de memoria. Es la misma regla que
 * gobierna el banco de preguntas: el valor de esto es que no miente.
 */

const TEMARIO = {

  ediciones: [

    // ── PMBOK 7 ─────────────────────────────────────────────────────────────
    {
      id: 'pmbok7',
      nombre: 'PMBOK 7',
      subtitulo: 'Guía basada en principios · 2021',
      estado: 'disponible',
      resumen: 'La 7ª edición abandonó la lógica de procesos de entrada-herramienta-salida ' +
        'y se reorganizó en 12 principios y 8 dominios de desempeño. No dice qué hacer paso ' +
        'a paso: dice qué resultado buscar y deja que adaptes el cómo.',

      grupos: [
        {
          id: 'principios',
          nombre: 'Los 12 principios',
          intro: 'Son criterios de conducta, no procedimientos. En el examen aparecen ' +
            'disfrazados de situación: la opción correcta casi siempre es la que respeta ' +
            'el principio, aunque parezca la más lenta.',
          temas: [
            {
              id: 'p01', nombre: 'Ser un administrador diligente, respetuoso y cuidadoso',
              idea: 'Actuar con integridad y responsabilidad sobre lo que se te confía — dentro y fuera de la organización.',
              practica: 'Incluye cumplimiento normativo, sostenibilidad y el impacto del proyecto más allá de sus entregables.',
              examen: 'Cuando una opción implica ocultar información incómoda a un interesado, esa opción es incorrecta aunque sea la más cómoda.',
              eco: ['negocio:1']
            },
            {
              id: 'p02', nombre: 'Crear un entorno colaborativo con el equipo',
              idea: 'El equipo produce más cuando tiene acuerdos claros, autonomía y seguridad para discrepar.',
              practica: 'Reglas básicas acordadas por el equipo, roles definidos, y un espacio donde el error se reporta en vez de ocultarse.',
              examen: 'Ante fricción interna, prefiere facilitar que el equipo lo resuelva antes que decidir tú o escalar.',
              eco: ['personas:1', 'personas:2']
            },
            {
              id: 'p03', nombre: 'Involucrarse eficazmente con los interesados',
              idea: 'El involucramiento es continuo y proactivo, no un envío de informes.',
              practica: 'Identificar, analizar, priorizar y adaptar la comunicación a cada interesado, y revisarlo cuando el proyecto cambia.',
              examen: 'Si aparece un interesado no identificado, lo primero es analizarlo e involucrarlo — no asumir su postura.',
              eco: ['personas:3', 'personas:4', 'personas:5']
            },
            {
              id: 'p04', nombre: 'Enfocarse en el valor',
              idea: 'El proyecto existe para producir un resultado de negocio, no para completar entregables.',
              practica: 'Revisar continuamente que el caso de negocio siga en pie y priorizar por valor, no por orden de llegada.',
              examen: 'Entregar a tiempo algo que ya no aporta valor es fracaso. Si el caso de negocio se cae, se lleva al patrocinador.',
              eco: ['procesos:2', 'negocio:7']
            },
            {
              id: 'p05', nombre: 'Reconocer y responder a las interacciones del sistema',
              idea: 'Pensamiento sistémico: el proyecto es parte de un todo y cada decisión repercute fuera de su límite.',
              practica: 'Mirar dependencias con otros proyectos, con operaciones y con el entorno antes de optimizar una parte.',
              examen: 'Desconfía de opciones que resuelven el síntoma local y empeoran el conjunto.',
              eco: ['procesos:0', 'negocio:7']
            },
            {
              id: 'p06', nombre: 'Demostrar comportamientos de liderazgo',
              idea: 'El liderazgo no depende del cargo: cualquiera del equipo puede ejercerlo.',
              practica: 'Adaptar el estilo a la situación y a la madurez del equipo; el liderazgo de servicio es el registro dominante del examen.',
              examen: 'Ante un equipo bloqueado, la respuesta suele ser quitar el impedimento, no exigir más esfuerzo.',
              eco: ['personas:2', 'negocio:3']
            },
            {
              id: 'p07', nombre: 'Adaptar según el contexto (tailoring)',
              idea: 'No hay metodología correcta en abstracto: se elige según producto, equipo y organización.',
              practica: 'Se adapta el enfoque de desarrollo, la cadencia de entrega, los artefactos y hasta el nivel de gobernanza.',
              examen: 'Cuando el enunciado da restricciones organizacionales fijas y requisitos volátiles, la respuesta suele ser híbrido.',
              eco: ['procesos:0']
            },
            {
              id: 'p08', nombre: 'Incorporar la calidad en procesos y entregables',
              idea: 'La calidad se construye durante el trabajo, no se inspecciona al final.',
              practica: 'Criterios de aceptación desde el inicio, revisiones continuas y costo de la calidad como decisión consciente.',
              examen: 'Prevenir cuesta menos que corregir: desconfía de opciones que dejan toda la verificación para el cierre.',
              eco: ['procesos:6']
            },
            {
              id: 'p09', nombre: 'Navegar en la complejidad',
              idea: 'La complejidad nace de la interacción entre personas, sistemas y ambigüedad — no del tamaño.',
              practica: 'Descomponer, experimentar en pequeño y reevaluar; no se resuelve con más planificación por adelantado.',
              examen: 'Ante alta ambigüedad, prefiere aprender con incrementos antes que comprometerse con un plan detallado.',
              eco: ['procesos:0', 'negocio:4']
            },
            {
              id: 'p10', nombre: 'Optimizar las respuestas a los riesgos',
              idea: 'El riesgo incluye oportunidades, no solo amenazas, y la respuesta debe ser proporcional.',
              practica: 'Identificar, analizar, planificar respuesta y monitorear de forma continua, no una sola vez al inicio.',
              examen: 'Gastar más en mitigar que lo que costaría el impacto es respuesta incorrecta. La proporción importa.',
              eco: ['negocio:4']
            },
            {
              id: 'p11', nombre: 'Adoptar la adaptabilidad y la resiliencia',
              idea: 'Capacidad de absorber el golpe y de reorientarse cuando el contexto cambia.',
              practica: 'Márgenes deliberados, aprendizaje continuo y equipos con habilidades solapadas.',
              examen: 'Un cambio externo no se ignora ni se sufre: se evalúa su impacto y se reorienta.',
              eco: ['negocio:5', 'negocio:7']
            },
            {
              id: 'p12', nombre: 'Permitir el cambio para lograr el estado futuro',
              idea: 'Gestión del cambio organizacional: el producto solo genera valor si la gente lo adopta.',
              practica: 'Preparar a los usuarios, medir adopción y acompañar la transición, no solo entregar y cerrar.',
              examen: 'Si el entregable está listo pero nadie lo usa, el trabajo no terminó.',
              eco: ['negocio:6']
            }
          ]
        },

        {
          id: 'dominios',
          nombre: 'Los 8 dominios de desempeño',
          intro: 'Áreas de actividad que interactúan entre sí durante todo el proyecto. ' +
            'A diferencia de las áreas de conocimiento del PMBOK 6, no son secuenciales ' +
            'ni independientes: se trabajan a la vez.',
          temas: [
            {
              id: 'd1', nombre: 'Interesados',
              idea: 'Identificar, entender y mantener una relación productiva con quienes afectan o son afectados por el proyecto.',
              practica: 'Análisis de poder/interés, estrategias diferenciadas y revisión periódica: los interesados cambian.',
              examen: 'La mayoría de preguntas de conflicto con un interesado se resuelven entendiendo su necesidad real antes de responder.',
              eco: ['personas:3', 'personas:4', 'personas:5']
            },
            {
              id: 'd2', nombre: 'Equipo',
              idea: 'Construir y sostener un equipo capaz de entregar, con cultura y liderazgo compartido.',
              practica: 'Desarrollo del equipo, reglas básicas, motivación, inteligencia emocional y equipos distribuidos.',
              examen: 'Ante bajo desempeño, primero se busca la causa — falta de claridad, de capacitación o de impedimento — antes de sancionar.',
              eco: ['personas:1', 'personas:2']
            },
            {
              id: 'd3', nombre: 'Enfoque de desarrollo y ciclo de vida',
              idea: 'Elegir entre predictivo, iterativo, incremental, adaptativo o híbrido, y definir fases y cadencias.',
              practica: 'La decisión depende de volatilidad de requisitos, tipo de producto, riesgo y restricciones de la organización.',
              examen: 'Es el dominio que más se pregunta como «¿qué enfoque conviene?». Lee las restricciones antes de elegir.',
              eco: ['procesos:0']
            },
            {
              id: 'd4', nombre: 'Planificación',
              idea: 'Organizar y coordinar el trabajo con el detalle suficiente — ni más ni menos.',
              practica: 'Planificación por olas, estimación, cronograma, presupuesto y su revisión continua.',
              examen: 'Planificar de más en contexto volátil es error, igual que no planificar en contexto estable.',
              eco: ['procesos:0', 'procesos:3', 'procesos:5', 'procesos:7']
            },
            {
              id: 'd5', nombre: 'Trabajo del proyecto',
              idea: 'Ejecutar, gestionar recursos físicos, adquisiciones, comunicaciones y el aprendizaje del equipo.',
              practica: 'Mantener el flujo de trabajo, gestionar proveedores y sostener la transferencia de conocimiento.',
              examen: 'Aquí caen las preguntas de contratos, proveedores y logística del trabajo diario.',
              eco: ['procesos:4', 'personas:6', 'personas:7']
            },
            {
              id: 'd6', nombre: 'Entrega',
              idea: 'Producir el alcance y la calidad que dan el valor esperado.',
              practica: 'Requisitos, definición de terminado, criterios de aceptación y calidad incorporada.',
              examen: 'Alcance y calidad se preguntan juntos: entregar lo pedido sin cumplir criterios de aceptación no es entregar.',
              eco: ['procesos:1', 'procesos:2', 'procesos:6']
            },
            {
              id: 'd7', nombre: 'Medición',
              idea: 'Evaluar el desempeño con métricas útiles y tomar decisiones con ellas.',
              practica: 'Valor ganado, gráficos de trabajo pendiente, indicadores adelantados y umbrales de acción.',
              examen: 'Cuidado con métricas que se convierten en objetivo: el examen castiga medir por medir.',
              eco: ['procesos:8']
            },
            {
              id: 'd8', nombre: 'Incertidumbre',
              idea: 'Riesgo, ambigüedad, complejidad y volatilidad tratados como una sola familia.',
              practica: 'Reservas, opciones, experimentos y resiliencia; no todo se resuelve con un registro de riesgos.',
              examen: 'Distingue riesgo (aún no pasó, tiene probabilidad) de incidencia (ya pasó, se gestiona ahora).',
              eco: ['negocio:3', 'negocio:4']
            }
          ]
        },

        {
          id: 'adaptacion',
          nombre: 'Adaptación, modelos y artefactos',
          intro: 'La parte del PMBOK 7 que sustituye a los procesos del 6: no te dan un ' +
            'procedimiento, te dan un catálogo y el criterio para elegir.',
          temas: [
            {
              id: 'a1', nombre: 'Adaptación (tailoring)',
              idea: 'Ajustar deliberadamente enfoque, procesos, artefactos y gobernanza al contexto concreto.',
              practica: 'Se adapta al inicio y se revisa durante el proyecto; se documenta por qué se decidió así.',
              examen: 'Adoptar el marco de otro proyecto «porque funcionó» es respuesta incorrecta salvo que el contexto sea el mismo.',
              eco: ['procesos:0']
            },
            {
              id: 'a2', nombre: 'Modelos, métodos y artefactos',
              idea: 'Modelos explican comportamiento, métodos producen resultados, artefactos son los documentos y entregables.',
              practica: 'Se eligen los mínimos que aporten valor: cada artefacto que se crea hay que mantenerlo.',
              examen: 'Crear documentación que nadie va a usar es desperdicio, y el examen lo trata como tal.',
              eco: ['procesos:8']
            },
            {
              id: 'a3', nombre: 'Del PMBOK 6 al 7: lo que sigue vigente',
              idea: 'El 7 no borró el 6. Valor ganado, ruta crítica, tipos de contrato y análisis de reservas siguen apareciendo.',
              practica: 'El 6 aporta las técnicas; el 7 aporta el criterio para decidir cuándo usarlas.',
              examen: 'Preguntas de cálculo o de técnica concreta vienen del cuerpo del 6, aunque el marco sea el del 7.',
              eco: ['procesos:5', 'procesos:7', 'procesos:8']
            }
          ]
        }
      ]
    },

    // ── PMBOK 8 ───────────────────────────────────────────
    {
      id: 'pmbok8',
      nombre: 'PMBOK 8',
      subtitulo: 'Plan de estudios · ANSI/PMI 99-001-2025',
      estado: 'disponible',
      resumen: 'Los 13 módulos del plan de estudios, con orientación propia en cada tema y ' +
        'el cruce a las tareas del ECO. La 8ª edición es el estándar ANSI/PMI 99-001-2025.',

      /**
       * ORIGEN Y ALCANCE — leer antes de tocar esto.
       *
       * La ESTRUCTURA sale del plan de estudios público del curso «Project Management
       * PMBOK 8th» de EducacionIT: 13 módulos con sus temas. Un temario de curso es un
       * índice, no el contenido protegido de la guía.
       *
       * El TEXTO de cada tema es propio, no transcrito de la Guía del PMBOK: esa se
       * licencia solo para uso personal y prohibe reproducción y modificación.
       *
       * ⚠️ Observación importante: pese al título «8th», este temario reproduce la
       *    ARQUITECTURA DEL PMBOK 7 — 12 principios, 8 dominios de desempeño,
       *    adaptación, y modelos/métodos/artefactos. O la 8ª edición conserva esa
       *    estructura, o el curso está etiquetado por la edición vigente y no por su
       *    contenido. No se ha podido verificar cuál de las dos: contrástalo con una
       *    copia legítima de la guía antes de fiarte de la etiqueta.
       *
       * Y lo de siempre: el examen se rige por el ECO, no por el PMBOK. Este temario
       * es apoyo conceptual; el botón «ECO 2026» es la especificación.
       */
      grupos: [
        {
          id: 'm01',
          nombre: 'Conceptos básicos de gestión de proyectos',
          intro: 'El vocabulario mínimo. Si estos términos no están firmes, todo lo demás se lee mal.',
          temas: [
            {
              id: 'm01-01', nombre: 'Proyectos, programas y portafolios',
              idea: 'Un proyecto es temporal y crea un resultado único. Un programa agrupa proyectos relacionados para lograr un beneficio que por separado no se obtendría. Un portafolio agrupa todo lo que compite por los mismos recursos estratégicos, aunque no tenga nada que ver entre sí.',
              grafico: '<svg viewBox="0 0 620 210" role="img" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="580" height="170" rx="10" fill="none" stroke="var(--acento)" stroke-width="2"/><text x="36" y="44" fill="var(--acento)" font-size="12" text-anchor="start" font-weight="600">PORTAFOLIO — todo lo que compite por los mismos recursos</text><rect x="40" y="58" width="300" height="112" rx="8" fill="none" stroke="var(--tenue)" stroke-width="1"/><text x="56" y="80" fill="var(--tenue)" font-size="12" text-anchor="start" font-weight="600">PROGRAMA — beneficio conjunto</text><rect x="58" y="92" width="120" height="60" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="118" y="118" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Proyecto A</text><rect x="196" y="92" width="120" height="60" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="256" y="118" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Proyecto B</text><rect x="370" y="92" width="120" height="60" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="430" y="118" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Proyecto C</text><text x="370" y="80" fill="var(--tenue)" font-size="12" text-anchor="start" font-weight="400">suelto</text><rect x="506" y="92" width="74" height="60" rx="8" fill="none" stroke="var(--borde)" stroke-width="1" stroke-dasharray="4 3"/><text x="543" y="118" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Operación</text><text x="543" y="138" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">(continua)</text></svg>',
              ejemplo: '<p>Un banco quiere abrir <strong>30 agencias nuevas</strong>.</p><p><strong>Proyecto:</strong> abrir la agencia de Miraflores. Empieza, termina, y el resultado es único.</p><p><strong>Programa:</strong> las 30 aperturas juntas. El beneficio —cobertura nacional y una marca reconocible— <em>solo aparece cuando están todas</em>. Abrir una sola no lo da.</p><p><strong>Portafolio:</strong> las 30 agencias <em>más</em> el nuevo app móvil <em>más</em> la migración del core bancario. No se parecen en nada, pero compiten por el mismo presupuesto y la misma gente.</p><p class="mal">Lo que no es proyecto: atender clientes cada día en la agencia ya abierta. Eso es operación — no termina.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm01-02', nombre: 'Marcos, modelos y enfoques de desarrollo',
              idea: 'Un marco organiza el trabajo (Scrum, PRINCE2), un modelo explica un comportamiento (liderazgo situacional, Tuckman) y un enfoque de desarrollo decide cómo se construye el producto (predictivo, adaptativo, híbrido). Son tres capas distintas y confundirlas es la causa más común de discutir sin entenderse.',
              ejemplo: '<p>«Vamos a hacerlo ágil» no dice nada por sí solo. Puede significar tres cosas:</p><p><strong>Enfoque:</strong> entregar en incrementos cortos con retroalimentación. <strong>Marco:</strong> usar Scrum con sprints de dos semanas. <strong>Modelo:</strong> aplicar liderazgo de servicio para dirigir al equipo.</p><p>Puedes adoptar el enfoque adaptativo <em>sin</em> usar Scrum. Y puedes usar Scrum mal, con un enfoque mentalmente predictivo, que es lo que pasa casi siempre.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm01-03', nombre: 'Roles y responsabilidades en los proyectos',
              idea: 'Director de proyecto, patrocinador, dueño de producto, equipo y PMO. El examen distingue con dureza qué decide cada uno: escalar algo que te corresponde a ti es respuesta incorrecta, y decidir algo que le corresponde al patrocinador también.',
              ejemplo: '<p>El cliente pide una funcionalidad que suma tres semanas.</p><p class="mal">✗ El director la aprueba porque «el cliente manda».</p><p class="mal">✗ El director la rechaza porque «está fuera de la línea base».</p><p class="bien">✓ El director <strong>analiza el impacto</strong> y lo lleva a quien decide sobre el caso de negocio. Su trabajo es que la decisión se tome bien informada, no tomarla él.</p><p>Regla útil: si afecta al caso de negocio o a la línea base, <strong>no la decides tú</strong>. Si es cómo organizar el trabajo del equipo, <strong>no la escalas</strong>.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm01-04', nombre: 'Dimensiones y restricciones de un proyecto',
              idea: 'Alcance, cronograma, costo, calidad, recursos y riesgo se mueven juntos. Tocar uno mueve los demás, y por eso todo cambio pasa por un análisis de impacto antes de aprobarse.',
              grafico: '<svg viewBox="0 0 620 200" role="img" xmlns="http://www.w3.org/2000/svg"><text x="310" y="24" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="400">Tocar una mueve las demás</text><rect x="30" y="44" width="160" height="44" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="110" y="71" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="600">Alcance</text><rect x="230" y="44" width="160" height="44" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="310" y="71" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="400">Cronograma</text><rect x="430" y="44" width="160" height="44" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="510" y="71" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="400">Costo</text><rect x="30" y="112" width="160" height="44" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="110" y="139" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="400">Calidad</text><rect x="230" y="112" width="160" height="44" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="310" y="139" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="400">Recursos</text><rect x="430" y="112" width="160" height="44" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="510" y="139" fill="var(--texto)" font-size="13" text-anchor="middle" font-weight="400">Riesgo</text><text x="310" y="186" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Ampliar el alcance sin mover nada más solo desplaza el golpe a calidad o riesgo</text></svg>',
              ejemplo: '<p>«Necesitamos entregar un mes antes, sin quitar alcance ni gastar más.»</p><p>Esa frase pide mover el cronograma dejando fijas todas las demás. No se puede. Lo que va a ocurrir es que el ajuste salga por donde nadie está mirando: <strong>la calidad</strong> (menos pruebas) o <strong>el riesgo</strong> (solapar tareas que iban en orden).</p><p>La respuesta profesional no es «no se puede», es: <em>«se puede si aceptamos X. ¿Cuál de las tres prefieres mover?»</em></p>',
              eco: ['negocio:2']
            },
            {
              id: 'm01-05', nombre: 'Breve historia del PMI y el PMBOK',
              idea: 'PMI nace en 1969 y publica la primera Guía del PMBOK en 1996. La 6ª edición era un manual de 49 procesos; la 7ª rompió con eso y pasó a principios y dominios de desempeño. Entender ese giro explica por qué el examen actual pregunta por criterio y no por memoria.',
              ejemplo: '<p>En la época del PMBOK 6, una pregunta típica era: <em>«¿cuál es una salida del proceso Controlar el Cronograma?»</em> — memoria pura.</p><p>Hoy la misma materia se pregunta así: <em>«el cronograma se desvió un 15 %. ¿Qué haces primero?»</em> — criterio. Por eso memorizar tablas de procesos ya no aprueba el examen.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm01-06', nombre: 'Introducción a la Guía del PMBOK',
              idea: 'La Guía es un cuerpo de conocimiento: describe qué se sabe sobre dirigir proyectos. No es un manual de procedimiento que se siga paso a paso, ni es el temario del examen — eso es el ECO.',
              ejemplo: '<p>Confusión frecuente: alguien se lee el PMBOK entero y suspende. Otro estudia el ECO tarea por tarea, con el PMBOK como consulta, y aprueba.</p><p>El PMBOK te da <strong>el vocabulario y los conceptos</strong>. El ECO te dice <strong>qué se evalúa y con qué peso</strong>. Estudiar solo el primero es aprenderte el diccionario para un examen de redacción.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm01-07', nombre: 'Enfoque de procesos y enfoque de principios',
              idea: 'El PMBOK 6 decía qué hacer paso a paso: 49 procesos con entradas, herramientas y salidas. Del 7 en adelante dice qué resultado buscar y deja que adaptes el cómo. Las técnicas del 6 no desaparecieron: siguen vigentes dentro del marco del 7.',
              ejemplo: '<p><strong>Enfoque de procesos (PMBOK 6):</strong> «Para controlar costos, ejecuta el proceso 7.4 con estas entradas y obtén estas salidas.»</p><p><strong>Enfoque de principios (PMBOK 7):</strong> «Mantén el proyecto viable económicamente. Cómo lo midas depende de tu contexto.»</p><p>Consecuencia práctica para el examen: el <strong>valor ganado sigue cayendo</strong>, y la ruta crítica y los tipos de contrato también. Lo que cambió es que ya no te preguntan el nombre del proceso, sino cuándo aplicar la técnica.</p>',
              eco: ['procesos:0']
            },
          ]
        },
        {
          id: 'm02',
          nombre: 'Un sistema para la entrega de valor',
          intro: 'El proyecto no existe solo: es un engranaje dentro de una organización que busca valor.',
          temas: [
            {
              id: 'm02-01', nombre: 'Componentes de creación de valor',
              idea: 'El valor se produce cuando el resultado se usa y genera beneficio, no cuando se entrega. Es el eje del ECO 2026, que tiene una tarea dedicada a asegurar la entrega basada en valor.',
              ejemplo: '<p>Un equipo entrega a tiempo, en presupuesto y con cero defectos un sistema de reportes. Seis meses después nadie lo usa: el área sigue con su hoja de cálculo.</p><p class="mal">Por métricas tradicionales, ese proyecto fue un éxito rotundo.</p><p class="bien">Por valor, fue un fracaso completo: el beneficio esperado era cero. Esta es exactamente la distinción que el ECO 2026 vino a subrayar.</p>',
              eco: ['procesos:2']
            },
            {
              id: 'm02-02', nombre: 'Sistemas de gobernanza organizacional',
              idea: 'Estructura, reglas, umbrales de escalamiento y quién aprueba qué. Define hasta dónde puede decidir el director del proyecto sin pedir permiso. En el ECO 2026 es una tarea propia de Entorno de negocio.',
              ejemplo: '<p>Una gobernanza bien definida dice cosas así:</p><p>«Desviaciones de hasta <strong>5 %</strong> en costo las resuelve el director. De 5 a 15 %, el comité. Por encima de 15 %, el patrocinador y se revisa el caso de negocio.»</p><p>Sin esos umbrales escritos, cada desviación se convierte en una negociación política, y el director acaba escalando de más (parece inseguro) o de menos (parece que oculta).</p>',
              eco: ['negocio:0']
            },
            {
              id: 'm02-03', nombre: 'Funciones asociadas a los proyectos',
              idea: 'Quién aporta qué al proyecto desde fuera del equipo: patrocinio, gobernanza, operaciones, proveedores, áreas de soporte. Ninguna de esas funciones te reporta, pero todas pueden bloquearte.',
              ejemplo: '<p>El equipo de seguridad informática no está en tu proyecto ni en tu organigrama, pero tiene que aprobar el despliegue.</p><p>Si te enteras de eso en la semana 20, tienes un impedimento. Si lo identificaste en la planificación, tienes una dependencia gestionada, con su fecha y su responsable.</p>',
              eco: ['negocio:0']
            },
            {
              id: 'm02-04', nombre: 'El entorno de un proyecto',
              idea: 'Factores internos y externos que condicionan las decisiones: cultura, estructura, normativa, mercado, tecnología. No se controlan, pero se leen — y determinan qué prácticas van a funcionar y cuáles se van a rechazar.',
              ejemplo: '<p>Implantar reuniones diarias de pie en una empresa donde la jerarquía es fuerte y nadie contradice al jefe delante de otros produce un ritual vacío: quince minutos donde todos dicen «todo bien».</p><p>El entorno no invalida la práctica, pero obliga a prepararla: primero seguridad para discrepar, después la reunión.</p>',
              eco: ['negocio:7']
            },
            {
              id: 'm02-05', nombre: 'Observaciones sobre la gestión del producto',
              idea: 'Un proyecto es temporal y termina; un producto es continuo y evoluciona mientras exista. Cambia quién prioriza, con qué horizonte y cuándo se considera terminado el trabajo.',
              ejemplo: '<p><strong>Proyecto:</strong> «lanzar la app de pedidos». Tiene fin, presupuesto cerrado y un director de proyecto.</p><p><strong>Producto:</strong> «la app de pedidos». No termina nunca; tiene un dueño de producto que prioriza según el valor de cada mejora.</p><p>Lo que confunde: el proyecto cierra y el producto sigue. Si nadie planificó esa transición, el equipo se disuelve y la app se queda sin quien decida qué sigue.</p>',
              eco: ['procesos:2']
            },
            {
              id: 'm02-06', nombre: 'Los 12 principios de la gestión',
              idea: 'Los 12 criterios de conducta que rigen las decisiones. No son procedimientos: son la lógica con la que el examen decide cuál de cuatro opciones razonables es la correcta. Están desarrollados uno a uno en el botón de PMBOK 7.',
              ejemplo: '<p>Ante una situación ambigua, los principios funcionan como criterio de desempate. Tres que resuelven la mayoría de preguntas:</p><p><strong>Enfocarse en el valor</strong> — si una opción entrega algo que ya no sirve, es incorrecta.<br><strong>Entorno colaborativo</strong> — si una opción decide por el equipo lo que el equipo puede decidir, es incorrecta.<br><strong>Administración diligente</strong> — si una opción oculta información, es incorrecta aunque sea la más cómoda.</p>',
              eco: ['personas:2']
            },
          ]
        },
        {
          id: 'm03',
          nombre: 'Introducción a los 8 dominios',
          intro: 'Cómo encajan las piezas antes de entrar en cada dominio.',
          temas: [
            {
              id: 'm03-01', nombre: 'Relación entre la Guía del PMBOK y el estándar',
              idea: 'El estándar dice qué es correcto (es normativo, aprobado por ANSI); la guía explica cómo aplicarlo (es descriptiva). Se publican en el mismo volumen pero no son lo mismo ni tienen la misma autoridad.',
              ejemplo: '<p>Analogía: el <strong>estándar</strong> es el código de tránsito —«hay que ceder el paso»—; la <strong>guía</strong> es el manual de la autoescuela, que te explica cómo mirar el espejo y cuándo frenar.</p><p>Por eso el estándar es corto y la guía es larga: uno fija la regla, el otro enseña el oficio.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm03-02', nombre: 'El modelo ITTO',
              idea: 'Entradas, herramientas y técnicas, salidas: la lógica que estructuraba el PMBOK 6. Ya no organiza la guía, pero sigue siendo útil para entender de dónde sale cada artefacto y qué lo alimenta.',
              ejemplo: '<p>El registro de riesgos no aparece de la nada. Con lógica ITTO:</p><p><strong>Entradas:</strong> acta de constitución, plan del proyecto, lecciones aprendidas.<br><strong>Herramientas:</strong> lluvia de ideas, análisis FODA, juicio de expertos.<br><strong>Salida:</strong> el registro de riesgos.</p><p>Ya no te van a preguntar esa tabla de memoria, pero el encadenamiento sigue explicando por qué no puedes identificar riesgos antes de tener el alcance.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm03-03', nombre: 'Relación con PMIstandards+',
              idea: 'La biblioteca digital donde PMI mantiene prácticas, plantillas y guías actualizadas entre ediciones. Es lo que evita que la guía se congele durante los años que pasan entre una edición y la siguiente.',
              ejemplo: '<p>Entre el PMBOK 7 (2021) y el 8 (2025) pasaron cuatro años. La inteligencia artificial generativa apareció entera en ese hueco.</p><p>PMIstandards+ es el mecanismo con el que PMI publica orientación sobre esos temas sin esperar a la edición siguiente. Para el examen no se pregunta su contenido, pero sí conviene saber qué es y para qué sirve.</p>',
              eco: ['negocio:5']
            },
          ]
        },
        {
          id: 'm04',
          nombre: 'D1 · Dominio de desempeño de los interesados',
          intro: 'El dominio más rentable de estudiar: en el ECO 2026 lo cubren cuatro tareas de Personas.',
          temas: [
            {
              id: 'm04-01', nombre: 'Clasificación de los interesados',
              idea: 'Identificar y categorizar antes de decidir cómo tratar a cada uno. Un interesado no identificado no es una molestia: es un riesgo que aparecerá tarde, normalmente cuando ya no se puede cambiar nada barato.',
              ejemplo: '<p>Proyecto de nuevo sistema de facturación. Se identifican finanzas, TI y el cliente.</p><p>En la semana 18, aparece <strong>auditoría interna</strong> exigiendo trazabilidad de cada cambio de tarifa. Nadie la había identificado. El rediseño cuesta seis semanas.</p><p>El costo de haberla identificado en la semana 1: una reunión de cuarenta minutos.</p>',
              eco: ['personas:3']
            },
            {
              id: 'm04-02', nombre: 'Matriz de interesados e influencias',
              idea: 'Poder contra interés —o influencia contra impacto— es la herramienta que decide a quién informas, a quién consultas y con quién trabajas de cerca. Sin ella tratas a todos igual, que es la forma más segura de descuidar al que importa.',
              grafico: '<svg viewBox="0 0 620 280" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--tenue)"/></marker></defs><line x1="60" y1="240" x2="590" y2="240" stroke="var(--tenue)" stroke-width="1"/><line x1="60" y1="240" x2="60" y2="30" stroke="var(--tenue)" stroke-width="1"/><text x="325" y="268" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">INTERÉS  →</text><text x="24" y="135" fill="var(--tenue)" font-size="11" text-anchor="middle" transform="rotate(-90 24 135)">PODER  →</text><line x1="325" y1="30" x2="325" y2="240" stroke="var(--borde)" stroke-width="1" stroke-dasharray="4 4"/><line x1="60" y1="135" x2="590" y2="135" stroke="var(--borde)" stroke-width="1" stroke-dasharray="4 4"/><rect x="72" y="44" width="240" height="78" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="192" y="76" fill="var(--alerta)" font-size="12" text-anchor="middle" font-weight="600">MANTENER SATISFECHO</text><text x="192" y="98" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Mucho poder, poco interés</text><rect x="338" y="44" width="240" height="78" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="458" y="76" fill="var(--mal)" font-size="12" text-anchor="middle" font-weight="600">GESTIONAR DE CERCA</text><text x="458" y="98" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Prioridad máxima</text><rect x="72" y="148" width="240" height="78" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="192" y="180" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="600">MONITOREAR</text><text x="192" y="202" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Esfuerzo mínimo</text><rect x="338" y="148" width="240" height="78" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="458" y="180" fill="var(--bien)" font-size="12" text-anchor="middle" font-weight="600">MANTENER INFORMADO</text><text x="458" y="202" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Aliados útiles</text></svg>',
              ejemplo: '<p>Sistema de pesaje en una planta industrial:</p><p><strong>Gestionar de cerca</strong> — el gerente de operaciones: decide el presupuesto y usará el sistema a diario.<br><strong>Mantener satisfecho</strong> — el gerente legal: poco interés en el detalle, pero puede frenarlo todo si el peso no tiene validez legal.<br><strong>Mantener informado</strong> — los operarios de balanza: poco poder formal, mucho interés y mucho criterio práctico.<br><strong>Monitorear</strong> — el área de marketing: ni le afecta ni influye.</p><p>El error clásico es tratar al gerente legal como «monitorear» porque no viene a las reuniones. Hasta que llega la homologación.</p>',
              eco: ['personas:4']
            },
            {
              id: 'm04-03', nombre: 'Involucramiento eficaz de los interesados',
              idea: 'El involucramiento es continuo y proactivo, no un envío de informes. Se revisa cuando el proyecto cambia, porque los interesados también cambian de postura a lo largo del proyecto.',
              ejemplo: '<p class="mal">✗ «Le mandamos el informe semanal, está informado.» — eso es difundir, no involucrar.</p><p class="bien">✓ «Le enseñamos el prototipo, nos dijo que el flujo de aprobación no le sirve, y lo cambiamos antes de construirlo.» — eso es involucrar.</p><p>La diferencia se nota en el costo: la primera versión te trae el rechazo en la entrega final; la segunda, en la semana 3.</p>',
              eco: ['personas:3']
            },
            {
              id: 'm04-04', nombre: 'Tipos de comunicación',
              idea: 'Formal e informal, escrita y verbal, de empuje, de extracción e interactiva. Elegir mal el canal es un error frecuente en los enunciados del examen: la información importante y sensible casi nunca va por correo masivo.',
              ejemplo: '<p><strong>De empuje</strong> (tú envías): correo, informe. Sirve para constancia, no garantiza que lo lean.<br><strong>De extracción</strong> (ellos buscan): tablero, repositorio. Para información voluminosa que no todos necesitan.<br><strong>Interactiva</strong> (ida y vuelta): reunión, llamada. La única que sirve para resolver desacuerdos.</p><p>Regla del examen: si el enunciado dice que hay <strong>conflicto o malentendido</strong>, la respuesta correcta es casi siempre interactiva y cara a cara. Un correo más nunca lo arregla.</p>',
              eco: ['personas:7']
            },
            {
              id: 'm04-05', nombre: 'Estrategia y plan de comunicación',
              idea: 'Qué se comunica, a quién, con qué frecuencia y por qué medio. En el ECO 2026 dejó de ser un apartado dentro de otra cosa y es una tarea propia de Personas.',
              ejemplo: '<p>Un plan de comunicación mínimo cabe en una tabla:</p><p><strong>Patrocinador</strong> · estado y riesgos · quincenal · reunión de 30 min.<br><strong>Equipo</strong> · avance y bloqueos · diario · reunión de pie de 15 min.<br><strong>Cliente</strong> · demo del incremento · cada 2 semanas · sesión en vivo.<br><strong>Auditoría</strong> · registro de cambios · mensual · repositorio compartido.</p><p>Lo que hace que funcione no es el formato: es haber decidido antes de que empiece el ruido.</p>',
              eco: ['personas:7']
            },
            {
              id: 'm04-06', nombre: 'Relación con otros dominios de desempeño',
              idea: 'Los interesados atraviesan planificación, entrega y medición: casi ninguna decisión es solo técnica. Una decisión de arquitectura que nadie entendió acaba siendo una decisión de interesados mal gestionada.',
              ejemplo: '<p>El equipo elige una tecnología más moderna, mejor por criterio técnico. El área de soporte no la conoce y no puede mantenerla.</p><p>Fue una decisión de <em>enfoque de desarrollo</em>, pero el problema estalló en <em>interesados</em>. Por eso los dominios no se estudian aislados.</p>',
              eco: ['personas:4']
            },
            {
              id: 'm04-07', nombre: 'El rol del patrocinador',
              idea: 'Aporta financiamiento, remueve obstáculos de alto nivel y decide sobre el caso de negocio. No microgestiona el trabajo — y si lo hace, es una señal de que algo se rompió en la confianza.',
              ejemplo: '<p><strong>Lo que sí le corresponde:</strong> aprobar un cambio que altera la línea base, desbloquear un área que no coopera, cancelar el proyecto si el caso de negocio se cayó.</p><p><strong>Lo que no:</strong> aprobar tarea por tarea, elegir la herramienta del equipo, asignar personas.</p><p>Si un patrocinador pide aprobar cada entregable, la respuesta no es aceptar ni negarse: es <strong>entender qué le falta para confiar</strong> y darle esa visibilidad de otra forma.</p>',
              eco: ['negocio:0']
            },
            {
              id: 'm04-08', nombre: 'El rol de la PMO',
              idea: 'Da soporte, control o dirección según su tipo, y saber cuál es decide si su indicación es una sugerencia o una obligación. Es una distinción que el examen usa para tender trampas.',
              ejemplo: '<p><strong>De soporte:</strong> te ofrece plantillas y capacitación. Grado de control bajo — puedes no usarlas.<br><strong>De control:</strong> exige que uses su metodología y audita el cumplimiento. Grado medio — es obligatorio.<br><strong>Directiva:</strong> los directores de proyecto le reportan a ella. Grado alto — dirige el proyecto.</p><p>Trampa típica: «la PMO sugiere un formato distinto». Si es de soporte, lo valoras. Si es directiva, no era una sugerencia.</p>',
              eco: ['negocio:0']
            },
          ]
        },
        {
          id: 'm05',
          nombre: 'D2 · Dominio de desempeño del equipo',
          intro: 'Donde se juega buena parte de las preguntas de Personas.',
          temas: [
            {
              id: 'm05-01', nombre: 'Modelos de crecimiento de los equipos',
              idea: 'Formación, conflicto, normalización, desempeño y disolución. Sirve para leer en qué etapa está el equipo del enunciado y qué necesita: un equipo en conflicto no necesita más presión, necesita reglas acordadas.',
              grafico: '<svg viewBox="0 0 620 150" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--tenue)"/></marker></defs><rect x="14" y="40" width="104" height="50" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="66" y="62" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Formación</text><text x="66" y="78" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">cortesía</text><rect x="132" y="40" width="104" height="50" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="184" y="62" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Conflicto</text><text x="184" y="78" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">roces</text><rect x="250" y="40" width="104" height="50" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="302" y="62" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Normalización</text><text x="302" y="78" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">acuerdos</text><rect x="368" y="40" width="104" height="50" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="420" y="62" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Desempeño</text><text x="420" y="78" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">fluidez</text><rect x="486" y="40" width="104" height="50" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="538" y="62" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Disolución</text><text x="538" y="78" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">cierre</text><line x1="122" y1="65" x2="128" y2="65" stroke="var(--tenue)" stroke-width="1.5"/><line x1="240" y1="65" x2="246" y2="65" stroke="var(--tenue)" stroke-width="1.5"/><line x1="358" y1="65" x2="364" y2="65" stroke="var(--tenue)" stroke-width="1.5"/><line x1="476" y1="65" x2="482" y2="65" stroke="var(--tenue)" stroke-width="1.5"/><text x="302" y="122" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">El conflicto no es un fallo del equipo: es la etapa donde se negocian las reglas</text></svg>',
              ejemplo: '<p>Equipo nuevo, tercera semana. Dos personas discuten de mala manera sobre la arquitectura y el resto calla.</p><p class="mal">Lectura errónea: «este equipo no funciona, hay que cambiar gente».</p><p class="bien">Lectura correcta: está en la <strong>etapa de conflicto</strong>, que es obligatoria. Saltársela produce equipos educados que nunca dicen lo que piensan.</p><p>Lo que toca: facilitar que acuerden cómo se toman las decisiones técnicas. Eso es pasar a normalización.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm05-02', nombre: 'Plan de recursos humanos e incorporación',
              idea: 'Quién hace falta, cuándo, con qué dedicación, y cómo se integra a alguien nuevo sin frenar al resto. Añadir gente a un proyecto retrasado suele retrasarlo más, porque alguien tiene que dejar de producir para enseñar.',
              ejemplo: '<p>Proyecto retrasado. Se suman tres desarrolladores el lunes.</p><p>Las dos primeras semanas la velocidad <strong>baja</strong>: los tres nuevos no producen todavía y dos de los antiguos están explicando en vez de construir.</p><p>Por eso el examen premia decidir esto <em>antes</em>. Un plan de incorporación —documentación mínima, un acompañante asignado, primera tarea pequeña y real— acorta ese valle, pero no lo elimina.</p>',
              eco: ['procesos:3']
            },
            {
              id: 'm05-03', nombre: 'Equipos de alto rendimiento',
              idea: 'Confianza, objetivos compartidos, seguridad para discrepar y autonomía real. Se construyen; no se contratan. La seguridad psicológica es la que más predice el desempeño: sin ella, los problemas se ocultan hasta que explotan.',
              ejemplo: '<p>Señal de que <strong>no</strong> hay seguridad para discrepar: nadie reporta un retraso hasta que ya es imposible ocultarlo.</p><p>Si castigas al primero que avisa de un problema, el segundo no avisará. Y el tercero tampoco. El equipo no se volvió irresponsable: aprendió lo que le enseñaste.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm05-04', nombre: 'El triángulo del talento del PMI',
              idea: 'Formas de trabajar, habilidades de poder y visión de negocio. Es el mapa de competencias que PMI espera del director de proyecto: dominio técnico, trato con personas y entendimiento del negocio, los tres a la vez.',
              ejemplo: '<p>Un director fuerte solo en <strong>formas de trabajar</strong> tiene el cronograma impecable y un equipo desmotivado que no le cuenta nada.</p><p>Uno fuerte solo en <strong>habilidades de poder</strong> cae bien a todo el mundo y no detecta que el proyecto va a fallar.</p><p>Uno fuerte solo en <strong>visión de negocio</strong> sabe que el proyecto no aporta valor, pero no consigue que el equipo cambie de rumbo.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm05-05', nombre: 'Adaptaciones del liderazgo',
              idea: 'El estilo se ajusta a la situación y a la madurez del equipo: un equipo nuevo necesita dirección, uno maduro necesita que le quiten obstáculos. El liderazgo de servicio es el registro dominante del examen, pero no es la respuesta a todo.',
              ejemplo: '<p><strong>Equipo nuevo, tarea crítica, poco tiempo:</strong> corresponde dirigir. Decir «organícense» a quien no sabe por dónde empezar no es empoderar, es abandonar.</p><p><strong>Equipo experimentado y autónomo:</strong> corresponde servir. Preguntar «¿qué les está frenando?» y retirarlo.</p><p>La trampa del examen es la inversa: microgestionar a un equipo maduro. Ahí la respuesta correcta casi siempre es dar autonomía y ofrecer apoyo.</p>',
              eco: ['personas:2']
            },
          ]
        },
        {
          id: 'm06',
          nombre: 'D3 · Enfoque de desarrollo y ciclo de vida',
          intro: 'El dominio que más aparece como «¿qué enfoque conviene aquí?».',
          temas: [
            {
              id: 'm06-01', nombre: 'Rol de las entregas: entrega continua y DevOps',
              idea: 'La entrega continua y las prácticas DevOps acortan el ciclo entre construir y poner en producción. Eso cambia la planificación: cuando desplegar cuesta minutos en vez de semanas, entregar en incrementos pequeños deja de ser una aspiración y se vuelve viable.',
              ejemplo: '<p>Si cada despliegue exige una ventana nocturna y aprobación de tres áreas, <strong>vas a agrupar</strong> los cambios aunque quieras ser ágil. La fricción técnica te empuja al lote grande.</p><p>Automatizado el despliegue, el mismo equipo puede entregar cada semana sin heroísmo. La capacidad técnica habilita el enfoque, no al revés.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm06-02', nombre: 'Enfoque predictivo',
              idea: 'Requisitos estables y alcance definido por adelantado, con una entrega grande al final. Su fortaleza es la previsibilidad —sabes qué, cuándo y cuánto—; su debilidad es que el cambio sale caro porque llega cuando ya construiste.',
              ejemplo: '<p>Construir un puente. Los requisitos no van a cambiar a mitad de obra, la normativa es fija y no puedes «entregar medio puente» para recibir retroalimentación.</p><p>Aquí el predictivo no es conservadurismo: es la respuesta correcta. Aplicar sprints a la cimentación no mejora nada.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm06-03', nombre: 'Enfoque iterativo e incremental',
              idea: 'Iterar refina lo mismo varias veces hasta que está bien; incrementar entrega partes utilizables que se van sumando. No son sinónimos y el examen los distingue con precisión.',
              grafico: '<svg viewBox="0 0 620 268" role="img" xmlns="http://www.w3.org/2000/svg"><text x="14" y="20" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">PREDICTIVO — una entrega al final</text><rect x="14" y="30" width="500" height="26" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="264" y="47" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">analizar · diseñar · construir · probar</text><rect x="514" y="30" width="76" height="26" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="552" y="47" fill="var(--bien)" font-size="11" text-anchor="middle" font-weight="400">entrega</text><text x="14" y="88" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">ITERATIVO — se refina lo mismo varias veces</text><rect x="14" y="98" width="180" height="26" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="104" y="115" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">v1 tosca</text><rect x="200" y="98" width="180" height="26" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="290" y="115" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">v2 mejor</text><rect x="386" y="98" width="128" height="26" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="450" y="115" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">v3 buena</text><rect x="514" y="98" width="76" height="26" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="552" y="115" fill="var(--bien)" font-size="11" text-anchor="middle" font-weight="400">entrega</text><text x="14" y="156" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">INCREMENTAL — cada trozo ya sirve</text><rect x="14" y="166" width="180" height="26" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="104" y="183" fill="var(--bien)" font-size="11" text-anchor="middle" font-weight="400">parte A ✓</text><rect x="200" y="166" width="180" height="26" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="290" y="183" fill="var(--bien)" font-size="11" text-anchor="middle" font-weight="400">parte B ✓</text><rect x="386" y="166" width="204" height="26" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="488" y="183" fill="var(--bien)" font-size="11" text-anchor="middle" font-weight="400">parte C ✓</text><text x="14" y="224" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">ADAPTATIVO — incrementos cortos con retroalimentación</text><rect x="14" y="234" width="88" height="24" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="58" y="250" fill="var(--acento)" font-size="10" text-anchor="middle" font-weight="400">sprint</text><rect x="108" y="234" width="88" height="24" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="152" y="250" fill="var(--acento)" font-size="10" text-anchor="middle" font-weight="400">sprint</text><rect x="202" y="234" width="88" height="24" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="246" y="250" fill="var(--acento)" font-size="10" text-anchor="middle" font-weight="400">sprint</text><rect x="296" y="234" width="88" height="24" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="340" y="250" fill="var(--acento)" font-size="10" text-anchor="middle" font-weight="400">sprint</text><rect x="390" y="234" width="88" height="24" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="434" y="250" fill="var(--acento)" font-size="10" text-anchor="middle" font-weight="400">sprint</text><text x="496" y="250" fill="var(--tenue)" font-size="10" text-anchor="start" font-weight="400">… hasta que</text><text x="496" y="262" fill="var(--tenue)" font-size="10" text-anchor="start" font-weight="400">aporte valor</text></svg>',
              ejemplo: '<p><strong>Iterativo</strong> — el logo de una marca: bosquejo, versión 2, versión 3. Ninguna intermedia sirve para usarse; todas son el mismo entregable mejorando.</p><p><strong>Incremental</strong> — una tienda en línea: primero el catálogo (ya sirve), después el carrito (ya vende), después las devoluciones. Cada trozo funciona por sí solo.</p><p>En la práctica se combinan: entregas un incremento y además lo iteras según lo que digan los usuarios.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm06-04', nombre: 'Enfoque híbrido',
              idea: 'Combina tramos predictivos y adaptativos en el mismo proyecto. Es la respuesta correcta cuando conviven requisitos volátiles con restricciones de gobernanza que no están en discusión.',
              ejemplo: '<p>Sistema para una planta industrial. La <strong>integración con la balanza</strong> tiene especificación técnica fija y homologación de por medio: predictivo. La <strong>pantalla del operario</strong> nadie sabe todavía cómo debe verse: adaptativo, con prototipos y ajustes.</p><p>Un solo proyecto, dos enfoques según el tramo. Eso es híbrido — no es «ágil a medias».</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm06-05', nombre: 'Enfoque adaptativo',
              idea: 'Requisitos emergentes, cadencia corta y retroalimentación frecuente. Exige algo que se olvida al adoptarlo: alguien con autoridad para priorizar, disponible de verdad y no una vez al mes.',
              ejemplo: '<p>Fallo clásico de adopción: se montan sprints de dos semanas, pero el dueño de producto es un gerente que aparece una vez al mes.</p><p>Resultado: el equipo decide por su cuenta durante tres sprints, el gerente ve el resultado en el cuarto y pide rehacerlo. Se obtuvo toda la sobrecarga del marco y ninguna de sus ventajas.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm06-06', nombre: 'Selección del enfoque',
              idea: 'Se decide por volatilidad de requisitos, tipo de producto, riesgo y restricciones de la organización — no por preferencia ni por moda. Y no es definitiva: se revisa si el contexto cambia.',
              ejemplo: '<p>Cuatro preguntas que resuelven casi todos los enunciados del examen:</p><p><strong>1.</strong> ¿Los requisitos van a cambiar? Sí → adaptativo.<br><strong>2.</strong> ¿Se puede entregar por partes utilizables? No → predictivo.<br><strong>3.</strong> ¿Hay restricciones fijas de contrato o gobernanza? Sí → híbrido.<br><strong>4.</strong> ¿Hay alguien disponible para priorizar continuamente? No → el adaptativo puro va a fallar.</p>',
              eco: ['procesos:0']
            },
          ]
        },
        {
          id: 'm07',
          nombre: 'D4 · Dominio de desempeño de la planificación',
          intro: 'El módulo más extenso, y donde caen los cálculos.',
          temas: [
            {
              id: 'm07-01', nombre: 'Modelo general para la planificación',
              idea: 'Planificar lo suficiente y volver a planificar cuando cambie. Ni plan detallado en contexto volátil —se desactualiza antes de usarse— ni improvisación en contexto estable, donde la previsibilidad sí era alcanzable.',
              ejemplo: '<p>La <strong>planificación por olas</strong> resuelve la tensión: detalle fino para los próximos dos meses, grueso para el resto.</p><p>Así no gastas tres semanas detallando tareas del mes ocho que van a cambiar, ni entras a ciegas en las del mes que viene.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm07-02', nombre: 'Variables para la planificación',
              idea: 'Alcance, tiempo, costo, recursos, riesgo e incertidumbre condicionan cuánto detalle de planificación tiene sentido. A más incertidumbre, menos detalle por adelantado y más puntos de revisión.',
              ejemplo: '<p>Dos proyectos de seis meses y el mismo presupuesto:</p><p><strong>Migrar 40 servidores</strong> a un centro de datos nuevo — trabajo conocido, repetitivo. Se puede planificar al detalle desde el día uno.</p><p><strong>Lanzar un producto</strong> en un mercado donde no has vendido nunca — planificar los seis meses al detalle es escribir ficción.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm07-03', nombre: 'Entregas de producto',
              idea: 'Qué se entrega, en qué orden y con qué criterio de aceptación. Un entregable sin criterio de aceptación escrito no está definido: está pendiente de discusión, y esa discusión llegará en el peor momento.',
              ejemplo: '<p class="mal">✗ «Entregar el módulo de reportes.» — ¿cuántos reportes? ¿exportables? ¿en cuánto tiempo cargan?</p><p class="bien">✓ «Ocho reportes definidos en el anexo A, exportables a Excel y PDF, que cargan en menos de 5 segundos con 12 meses de datos, validados por el jefe de operaciones.»</p><p>El segundo se puede aceptar o rechazar sin discutir. El primero garantiza una reunión incómoda.</p>',
              eco: ['procesos:1']
            },
            {
              id: 'm07-04', nombre: 'Estimaciones',
              idea: 'Análoga, paramétrica, de tres puntos y ascendente. Cambian la precisión y el esfuerzo que cuesta obtenerla: la análoga es rápida y gruesa, la ascendente es cara y fina.',
              ejemplo: '<p>Instalar 200 puntos de red:</p><p><strong>Análoga:</strong> «el proyecto parecido del año pasado costó 80 000». Rápida, ±50 %.<br><strong>Paramétrica:</strong> «400 por punto × 200 = 80 000». Buena si el histórico es fiable.<br><strong>Tres puntos:</strong> optimista 60 000, probable 80 000, pesimista 140 000 → (60+4×80+140)/6 = <strong>86 667</strong>. Incorpora el riesgo de la cola.<br><strong>Ascendente:</strong> estimar punto por punto y sumar. La más precisa y la que más cuesta.</p><p>Fíjate en que las tres primeras dan cifras distintas para el mismo trabajo. La de tres puntos es más alta porque el escenario malo pesa.</p>',
              eco: ['procesos:7']
            },
            {
              id: 'm07-05', nombre: 'Contexto de la planificación',
              idea: 'La organización, el mercado y la normativa acotan lo planificable antes de que empieces. Planificar ignorando ese marco produce planes que no sobreviven al primer contacto con la realidad de la empresa.',
              ejemplo: '<p>Planificas las compras de equipos en tres semanas. El área de logística tarda seis en cualquier orden de compra, siempre, sin excepciones.</p><p>Ese dato no es un riesgo: es el contexto. Meterlo en el plan desde el principio evita una desviación anunciada.</p>',
              eco: ['negocio:7']
            },
            {
              id: 'm07-06', nombre: 'Cronogramas: modelos y procesos',
              idea: 'Del diagrama de red al tablero de flujo, según el enfoque elegido. En predictivo el cronograma es un compromiso de fechas; en adaptativo es una previsión de capacidad por iteración.',
              ejemplo: '<p><strong>Predictivo:</strong> «la migración termina el 14 de noviembre» — una fecha comprometida, sostenida por la ruta crítica.</p><p><strong>Adaptativo:</strong> «el equipo cierra unos 30 puntos por sprint; con 180 pendientes, hablamos de 6 sprints» — una proyección que se recalcula cada iteración.</p><p>Pedir la certeza del primero en un contexto que exige el segundo es la fuente de la mitad de los conflictos con la dirección.</p>',
              eco: ['procesos:7']
            },
            {
              id: 'm07-07', nombre: 'Secuencias y relaciones entre tareas',
              idea: 'Fin-inicio, inicio-inicio, fin-fin e inicio-fin, más adelantos y retrasos. Es la base para calcular la ruta crítica, y elegir mal la relación produce cronogramas que se ven bien y no se pueden ejecutar.',
              grafico: '<svg viewBox="0 0 620 250" role="img" xmlns="http://www.w3.org/2000/svg"><text x="14" y="18" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">FIN-INICIO (FS) — la más común</text><rect x="14" y="26" width="150" height="22" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="89" y="41" fill="var(--acento)" font-size="11" text-anchor="middle" font-weight="400">A</text><rect x="176" y="26" width="150" height="22" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="251" y="41" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">B</text><text x="340" y="41" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">B empieza cuando A termina</text><text x="14" y="78" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">INICIO-INICIO (SS)</text><rect x="14" y="86" width="150" height="22" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="89" y="101" fill="var(--acento)" font-size="11" text-anchor="middle" font-weight="400">A</text><rect x="14" y="112" width="150" height="22" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="89" y="127" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">B</text><text x="180" y="108" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">arrancan a la vez · ej. verter hormigón y nivelarlo</text><text x="14" y="164" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="600">FIN-FIN (FF)</text><rect x="14" y="172" width="150" height="22" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="89" y="187" fill="var(--acento)" font-size="11" text-anchor="middle" font-weight="400">A</text><rect x="60" y="198" width="104" height="22" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="112" y="213" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">B</text><text x="180" y="196" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">terminan a la vez · ej. codificar y documentar</text><text x="14" y="242" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">INICIO-FIN (SF) — rara: B no puede acabar hasta que A empiece. Ej. el turno saliente no se va hasta que llega el entrante.</text></svg>',
              ejemplo: '<p><strong>Adelanto (lead):</strong> la redacción del manual empieza cuando el desarrollo lleva un 80 %, sin esperar a que acabe. Comprime el cronograma.</p><p><strong>Retraso (lag):</strong> la pintura empieza <em>tres días después</em> de aplicar el revoque, porque tiene que secar. No es holgura, es una espera obligatoria.</p>',
              eco: ['procesos:7']
            },
            {
              id: 'm07-08', nombre: 'Optimizaciones y ajustes del cronograma',
              idea: 'La intensificación agrega recursos y sube el costo; la ejecución rápida solapa actividades que iban en secuencia y sube el riesgo de retrabajo. Distinguirlas es pregunta recurrente y la palabra clave del enunciado suele ser «presupuesto» o «riesgo».',
              grafico: '<svg viewBox="0 0 620 190" role="img" xmlns="http://www.w3.org/2000/svg"><text x="14" y="18" fill="var(--tenue)" font-size="12" text-anchor="start" font-weight="600">Situación: la ruta crítica se retrasó 5 días</text><text x="14" y="52" fill="var(--alerta)" font-size="11" text-anchor="start" font-weight="600">INTENSIFICAR (crashing) — más recursos</text><rect x="14" y="60" width="260" height="24" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="144" y="76" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">1 persona · 10 días</text><rect x="14" y="90" width="130" height="24" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="79" y="106" fill="var(--alerta)" font-size="11" text-anchor="middle" font-weight="400">2 personas · 5 días</text><text x="14" y="132" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Sube el COSTO. No sube el riesgo.</text><line x1="300" y1="40" x2="300" y2="170" stroke="var(--borde)" stroke-width="1" stroke-dasharray="4 4"/><text x="320" y="52" fill="var(--mal)" font-size="11" text-anchor="start" font-weight="600">EJECUCIÓN RÁPIDA (fast tracking) — solapar</text><rect x="320" y="60" width="130" height="24" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="385" y="76" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Diseño</text><rect x="456" y="60" width="130" height="24" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="521" y="76" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Construir</text><rect x="320" y="90" width="130" height="24" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="385" y="106" fill="var(--mal)" font-size="11" text-anchor="middle" font-weight="400">Diseño</text><rect x="400" y="118" width="130" height="24" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="465" y="134" fill="var(--mal)" font-size="11" text-anchor="middle" font-weight="400">Construir</text><text x="320" y="166" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">No sube el costo directo. Sube el RIESGO de retrabajo.</text></svg>',
              ejemplo: '<p>Enunciado tipo: <em>«el proyecto está retrasado, el patrocinador aprueba presupuesto adicional. ¿Qué técnica aplicas?»</em></p><p class="bien">→ <strong>Intensificar.</strong> Te dieron dinero, no te pidieron asumir riesgo.</p><p>Variante: <em>«…no hay presupuesto adicional pero el patrocinador acepta más riesgo»</em> → <strong>ejecución rápida</strong>.</p><p>Y ojo con la trampa: intensificar solo funciona en tareas <strong>de la ruta crítica</strong> y donde más gente realmente acorte el trabajo. Nueve mujeres no tienen un bebé en un mes.</p>',
              eco: ['procesos:7']
            },
            {
              id: 'm07-09', nombre: 'Costos, presupuesto y plan financiero',
              idea: 'Estimar costos, agregarlos en una línea base y reservar contingencia. En el ECO 2026 esto es la tarea de finanzas, que además incluye anticipar desafíos financieros y administrar las reservas.',
              ejemplo: '<p>Las dos reservas se confunden siempre:</p><p><strong>Reserva de contingencia</strong> — para riesgos <em>identificados</em>. La gestiona el director del proyecto y forma parte de la línea base de costos.<br><strong>Reserva de gestión</strong> — para lo <em>no identificado</em>. La controla la dirección, está fuera de la línea base y usarla requiere aprobación.</p><p>Si un riesgo del registro se materializa, tiras de contingencia sin pedir permiso. Si aparece algo que nadie previó, tienes que ir a pedirlo.</p>',
              eco: ['procesos:5']
            },
            {
              id: 'm07-10', nombre: 'Plan de recursos y asignaciones del equipo',
              idea: 'Qué perfil hace falta, cuándo y con qué disponibilidad real. La nivelación de recursos ajusta las asignaciones para no sobrecargar a nadie, y su efecto secundario casi siempre es alargar el cronograma.',
              ejemplo: '<p>El cronograma asigna a la misma analista a dos tareas paralelas al 100 % cada una. Sobre el papel, ambas terminan el viernes.</p><p>Al nivelar, una de las dos se corre a la semana siguiente. El cronograma se alarga — pero ahora es <strong>ejecutable</strong>. El anterior solo era optimista.</p>',
              eco: ['procesos:3']
            },
            {
              id: 'm07-11', nombre: 'Plan de comunicación',
              idea: 'La pieza de planificación que más se olvida y más incidentes causa. Se planifica antes de que empiece el ruido, no cuando alguien ya se quejó de que no se enteró.',
              ejemplo: '<p>Casi todos los conflictos que se reportan como «problemas de comunicación» son en realidad expectativas no acordadas: nadie decidió quién debía enterarse de qué.</p><p>Un plan de comunicación no evita las malas noticias. Evita que la mala noticia llegue por el pasillo a quien tenía que enterarse en una reunión.</p>',
              eco: ['personas:7']
            },
            {
              id: 'm07-12', nombre: 'Línea base de la planificación',
              idea: 'La referencia aprobada de alcance, cronograma y costo contra la que se mide la variación. Solo cambia por control de cambios aprobado — nunca porque la realidad se desvió.',
              ejemplo: '<p>Error frecuentísimo: el proyecto se retrasa dos semanas y alguien «actualiza el cronograma» moviendo la línea base.</p><p>Al hacerlo, la desviación desaparece del informe y el proyecto parece ir bien. Has borrado el instrumento de medición para que no marque.</p><p class="bien">Lo correcto: la línea base se queda donde está y se reporta la variación. Solo se cambia si hay una solicitud de cambio aprobada.</p>',
              eco: ['negocio:2']
            },
          ]
        },
        {
          id: 'm08',
          nombre: 'D5 · Dominio de desempeño del trabajo',
          intro: 'Ejecutar y sostener el flujo, no solo planificar.',
          temas: [
            {
              id: 'm08-01', nombre: 'Procesos del proyecto',
              idea: 'Establecer y mantener el ritmo de trabajo con la ceremonia mínima que aporte valor. Cada reunión y cada informe que añades hay que sostenerlo todas las semanas, así que la pregunta no es si es útil, sino si vale lo que cuesta.',
              ejemplo: '<p>Un equipo de seis personas con reunión diaria de 15 min, revisión semanal de 1 h y retrospectiva quincenal de 1 h gasta unas <strong>10 horas-persona por semana</strong> en ceremonia. Sobre 240 horas disponibles, es un 4 %: razonable.</p><p>Súmale un comité de seguimiento de 2 h con ocho asistentes y ya vas por el 10 %. Ahí la pregunta legítima es qué decisión sale de ese comité que no saliera antes.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm08-02', nombre: 'Gestión de los recursos y contrataciones',
              idea: 'Adquisiciones, tipos de contrato, selección y desempeño de proveedores. En el ECO 2026 es la tarea con más facilitadores de todas —diez—, señal de cuánto peso le da PMI.',
              grafico: '<svg viewBox="0 0 620 196" role="img" xmlns="http://www.w3.org/2000/svg"><text x="310" y="20" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="400">¿Quién asume el riesgo si el trabajo cuesta más de lo previsto?</text><rect x="14" y="40" width="186" height="116" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="107" y="62" fill="var(--bien)" font-size="12" text-anchor="middle" font-weight="600">PRECIO FIJO</text><text x="107" y="84" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">Riesgo: VENDEDOR</text><text x="107" y="108" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Alcance muy definido</text><text x="107" y="128" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Cambios: caros</text><rect x="217" y="40" width="186" height="116" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="310" y="62" fill="var(--alerta)" font-size="12" text-anchor="middle" font-weight="600">COSTO REEMBOLSABLE</text><text x="310" y="84" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">Riesgo: COMPRADOR</text><text x="310" y="108" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Alcance incierto</text><text x="310" y="128" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Exige vigilar el gasto</text><rect x="420" y="40" width="186" height="116" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="513" y="62" fill="var(--acento)" font-size="12" text-anchor="middle" font-weight="600">TIEMPO Y MATERIALES</text><text x="513" y="84" fill="var(--texto)" font-size="11" text-anchor="middle" font-weight="400">Riesgo: COMPARTIDO</text><text x="513" y="108" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Trabajo corto o urgente</text><text x="513" y="128" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Conviene poner tope</text><text x="310" y="182" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Cuanto menos definido el alcance, más se desplaza el riesgo hacia el comprador</text></svg>',
              ejemplo: '<p>Contratas el desarrollo de un módulo cuyo alcance <strong>no está cerrado</strong>.</p><p class="mal">✗ Precio fijo: el proveedor va a cotizar alto para cubrirse, y cada aclaración se convertirá en una orden de cambio con sobreprecio.</p><p class="bien">✓ Tiempo y materiales con tope, o costo reembolsable con incentivo. Asumes más riesgo, pero pagas por trabajo real.</p><p>Regla: <strong>a menos definición del alcance, menos precio fijo</strong>. Forzar precio fijo sobre alcance incierto no elimina el riesgo, lo encarece.</p>',
              eco: ['procesos:4']
            },
            {
              id: 'm08-03', nombre: 'Gestión de los cambios',
              idea: 'Toda solicitud se documenta y se evalúa en impacto integral antes de decidir, venga de quien venga. En 2026 esta tarea se mudó de Proceso a Entorno de negocio, junto con la gobernanza.',
              grafico: '<svg viewBox="0 0 620 180" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--tenue)"/></marker></defs><rect x="10" y="56" width="108" height="46" rx="8" fill="none" stroke="var(--borde)" stroke-width="1"/><text x="64" y="76" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Llega la</text><text x="64" y="92" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">solicitud</text><rect x="134" y="56" width="108" height="46" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="188" y="76" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Registrar</text><text x="188" y="92" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">por escrito</text><rect x="258" y="56" width="118" height="46" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="317" y="76" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Analizar</text><text x="317" y="92" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">impacto integral</text><rect x="392" y="56" width="108" height="46" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="446" y="76" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Decidir</text><text x="446" y="92" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">quien deba</text><rect x="516" y="56" width="94" height="46" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="563" y="76" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">Ejecutar</text><text x="563" y="92" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">y comunicar</text><line x1="120" y1="79" x2="130" y2="79" stroke="var(--tenue)" stroke-width="1.5"/><line x1="244" y1="79" x2="254" y2="79" stroke="var(--tenue)" stroke-width="1.5"/><line x1="378" y1="79" x2="388" y2="79" stroke="var(--tenue)" stroke-width="1.5"/><line x1="502" y1="79" x2="512" y2="79" stroke="var(--tenue)" stroke-width="1.5"/><text x="310" y="26" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="400">Ningún atajo salta un paso, ni aunque lo pida el patrocinador</text><text x="317" y="130" fill="var(--tenue)" font-size="10" text-anchor="middle" font-weight="400">alcance · cronograma · costo · calidad · riesgo</text><text x="310" y="162" fill="var(--mal)" font-size="11" text-anchor="middle" font-weight="400">Si se ejecuta antes de decidir, no hubo control de cambios: hubo un cambio no autorizado</text></svg>',
              ejemplo: '<p>El patrocinador escribe un sábado: «añadan el módulo de reportes, es sencillo».</p><p class="mal">✗ Empezar el lunes porque lo pidió él.</p><p class="mal">✗ Contestar que no cabe en la línea base.</p><p class="bien">✓ Registrar la solicitud, estimar el impacto en las seis dimensiones y devolverle: «son tres semanas y 18 000; podemos hacerlo moviendo la fecha o quitando X. ¿Qué prefieres?»</p><p>El director no aprueba ni rechaza: hace que la decisión se tome con información.</p>',
              eco: ['negocio:2']
            },
            {
              id: 'm08-04', nombre: 'Gestión del conocimiento',
              idea: 'Que lo aprendido sobreviva a las personas y al proyecto. El ECO 2026 lo eleva a tarea propia dentro de Personas, e incluye tanto el conocimiento explícito —documentos— como el tácito, que es el que se va cuando alguien renuncia.',
              ejemplo: '<p>El conocimiento <strong>explícito</strong> se transfiere con documentación: manuales, decisiones registradas, lecciones aprendidas.</p><p>El <strong>tácito</strong> no. «Cuando el sistema se cae los martes, casi siempre es el proceso batch de facturación» no está escrito en ningún lado y vive en la cabeza de una persona.</p><p>Ese se transfiere con programación en pareja, rotación y acompañamiento — no con un repositorio. Por eso la tarea habla de <em>fomentar un entorno</em>, no de escribir documentos.</p>',
              eco: ['personas:6']
            },
          ]
        },
        {
          id: 'm09',
          nombre: 'D6 · Dominio de desempeño de la entrega',
          intro: 'Alcance y calidad, que el examen pregunta juntos.',
          temas: [
            {
              id: 'm09-01', nombre: 'Gestión de requisitos: procesos y técnicas',
              idea: 'Recopilar, documentar, priorizar y trazar. Un requisito sin criterio de aceptación no es un requisito: es una intención, y las intenciones se interpretan distinto en la reunión de entrega.',
              ejemplo: '<p>La <strong>trazabilidad</strong> es lo que se olvida y lo que salva. Es poder responder: «este campo de la pantalla, ¿de dónde salió?»</p><p>Si la respuesta es «lo pidió alguien en una reunión», tienes alcance sin dueño. Si es «viene del requisito RF-014, que exige la norma de facturación electrónica», sabes que no se puede quitar aunque estorbe.</p>',
              eco: ['procesos:1']
            },
            {
              id: 'm09-02', nombre: 'Definición de alcance y resultados',
              idea: 'Qué entra, qué no entra, y cómo se sabe que está terminado. Escribir explícitamente lo que queda fuera es tan importante como lo que queda dentro, porque el desacuerdo siempre nace en la frontera.',
              ejemplo: '<p>Sistema de pesaje. El alcance dice: «captura del peso desde el indicador de balanza».</p><p>Lo que ahorra tres discusiones escribirlo en la sección de exclusiones: <em>«no incluye la integración con el ERP, ni la migración del histórico, ni el suministro del hardware de balanza»</em>.</p><p>Sin esas tres líneas, alguien asumirá que sí y lo descubrirás en la aceptación.</p>',
              eco: ['procesos:1']
            },
            {
              id: 'm09-03', nombre: 'Gestión de la calidad',
              idea: 'La calidad se construye durante el trabajo; la inspección final solo la comprueba. Distinguir el aseguramiento —que mira el proceso— del control —que mira el producto— es pregunta habitual.',
              ejemplo: '<p><strong>Aseguramiento</strong> (auditar el proceso): «¿estamos revisando el código antes de integrar?» Preventivo, mira cómo trabajamos.</p><p><strong>Control</strong> (inspeccionar el producto): «¿este entregable tiene defectos?» Correctivo, mira el resultado.</p><p>Si solo haces control, encuentras los defectos uno a uno para siempre. El aseguramiento es lo que hace que dejen de aparecer.</p>',
              eco: ['procesos:6']
            },
            {
              id: 'm09-04', nombre: 'Costos de la calidad y de los fallos',
              idea: 'Prevención y evaluación por un lado; fallos internos y externos por el otro. Prevenir siempre sale más barato que corregir, y el fallo detectado por el cliente es el más caro de los cuatro.',
              grafico: '<svg viewBox="0 0 620 200" role="img" xmlns="http://www.w3.org/2000/svg"><text x="310" y="20" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="600">Costo de la calidad</text><rect x="14" y="38" width="286" height="130" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="157" y="60" fill="var(--bien)" font-size="12" text-anchor="middle" font-weight="600">CONFORMIDAD — invertir</text><text x="30" y="86" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Prevención: capacitar, revisar diseño,</text><text x="30" y="102" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">automatizar pruebas</text><text x="30" y="128" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Evaluación: inspeccionar, auditar,</text><text x="30" y="144" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">probar antes de entregar</text><rect x="320" y="38" width="286" height="130" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="463" y="60" fill="var(--mal)" font-size="12" text-anchor="middle" font-weight="600">NO CONFORMIDAD — pagar</text><text x="336" y="86" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Fallo interno: retrabajo, desecho,</text><text x="336" y="102" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">detectado antes de entregar</text><text x="336" y="128" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Fallo externo: garantía, reclamos,</text><text x="336" y="144" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">prestigio, detectado por el cliente</text><text x="310" y="190" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">Cada peso a la izquierda ahorra varios a la derecha. El fallo externo es el más caro de todos.</text></svg>',
              ejemplo: '<p>El mismo defecto, según cuándo aparece:</p><p><strong>En la revisión de diseño</strong> — cuesta una hora de trabajo.<br><strong>En pruebas internas</strong> — cuesta un día: hay que rehacer y volver a probar.<br><strong>En producción, detectado por el cliente</strong> — cuesta el arreglo urgente, la comunicación, la confianza y a veces el contrato.</p><p>Por eso el examen castiga las opciones que recortan pruebas para recuperar cronograma: mueven el costo hacia la derecha y lo multiplican.</p>',
              eco: ['procesos:6']
            },
            {
              id: 'm09-05', nombre: 'Metodologías y estándares de calidad',
              idea: 'Mejora continua y marcos de calidad aplicados al proyecto y al producto. La idea de fondo, común a todos ellos, es que la mejora sostenida sale de corregir el proceso, no de exigir más esfuerzo a las personas.',
              ejemplo: '<p>Si el mismo tipo de defecto aparece en tres entregas seguidas, no es mala suerte ni descuido: es el proceso.</p><p>Pedir «más atención» produce una mejora que dura dos semanas. Cambiar el proceso —una lista de verificación, una prueba automática, un segundo par de ojos— lo elimina de raíz.</p>',
              eco: ['negocio:5']
            },
          ]
        },
        {
          id: 'm10',
          nombre: 'D7 · Dominio de desempeño de la medición',
          intro: 'Medir para decidir, no para reportar.',
          temas: [
            {
              id: 'm10-01', nombre: 'Medidas e indicadores',
              idea: 'Una medida es un dato; un indicador es un dato con umbral y significado. Si nadie definió a partir de qué valor hay que actuar, no estás midiendo: estás coleccionando números.',
              ejemplo: '<p class="mal">Medida: «llevamos 47 defectos abiertos». ¿Es bueno? ¿malo? No se puede saber.</p><p class="bien">Indicador: «47 defectos abiertos, umbral de alerta en 30, tendencia al alza tres semanas seguidas → se congela funcionalidad nueva hasta bajar de 30».</p><p>El indicador trae la acción incorporada. Por eso se puede usar para decidir sin discutir.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm10-02', nombre: 'KPI y OKR',
              idea: 'Los KPI vigilan el desempeño actual contra un estándar conocido; los OKR fijan una ambición y miden el avance hacia ella. Sirven a preguntas distintas y mezclarlos produce metas que nadie sabe si se cumplieron.',
              ejemplo: '<p><strong>KPI:</strong> «disponibilidad del servicio ≥ 99,5 % mensual». Tiene un valor esperado que ya se cumple y se vigila que no baje.</p><p><strong>OKR:</strong> <em>Objetivo</em> — que el pesaje deje de depender del papel. <em>Resultados clave</em> — 90 % de las boletas capturadas en digital, tiempo de registro por debajo de 2 min, cero re-digitación manual.</p><p>El KPI protege lo que ya funciona. El OKR mueve algo que hoy no existe.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm10-03', nombre: 'Pronósticos y predicciones',
              idea: 'Valor ganado y sus índices para proyectar dónde terminará el proyecto si nada cambia. Es la técnica que sobrevivió intacta del PMBOK 6 y sigue cayendo en el examen.',
              grafico: '<svg viewBox="0 0 620 250" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--tenue)"/></marker></defs><line x1="52" y1="210" x2="590" y2="210" stroke="var(--tenue)" stroke-width="1"/><line x1="52" y1="210" x2="52" y2="24" stroke="var(--tenue)" stroke-width="1"/><text x="320" y="238" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">TIEMPO  →</text><text x="20" y="118" fill="var(--tenue)" font-size="11" text-anchor="middle" transform="rotate(-90 20 118)">$</text><line x1="340" y1="30" x2="340" y2="210" stroke="var(--alerta)" stroke-width="1" stroke-dasharray="4 4"/><text x="344" y="44" fill="var(--alerta)" font-size="11" text-anchor="start" font-weight="400">hoy</text><path d="M52,200 C160,170 250,120 340,74 L470,36" fill="none" stroke="var(--tenue)" stroke-width="2"/><text x="478" y="34" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">PV · planificado</text><path d="M52,200 C150,180 250,150 340,124" fill="none" stroke="var(--bien)" stroke-width="2"/><text x="348" y="124" fill="var(--bien)" font-size="11" text-anchor="start" font-weight="400">EV · ganado</text><path d="M52,200 C150,172 245,135 340,96" fill="none" stroke="var(--mal)" stroke-width="2"/><text x="348" y="92" fill="var(--mal)" font-size="11" text-anchor="start" font-weight="400">AC · real</text><text x="66" y="44" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">EV < PV  →  vas retrasado (SPI < 1)</text><text x="66" y="62" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">AC > EV  →  vas caro (CPI < 1)</text></svg>',
              ejemplo: '<p>Proyecto de 100 000 a 10 meses. En el mes 5 deberías llevar 50 000 de trabajo hecho.</p><p><strong>PV</strong> (planificado) = 50 000 · <strong>EV</strong> (ganado, trabajo realmente completado) = 40 000 · <strong>AC</strong> (real gastado) = 55 000.</p><p><strong>SPI</strong> = EV/PV = 40/50 = <strong>0,80</strong> → vas al 80 % del ritmo previsto.<br><strong>CPI</strong> = EV/AC = 40/55 = <strong>0,73</strong> → por cada peso gastado obtienes 73 céntimos de trabajo.<br><strong>EAC</strong> = BAC/CPI = 100 000/0,73 ≈ <strong>137 000</strong>.</p><p>Lo importante no es la fórmula: es que <em>menos de 1 siempre es malo</em>, en ambos índices.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm10-04', nombre: 'Tableros de indicadores y radiadores de información',
              idea: 'Información visible y siempre disponible en lugar de informes que nadie abre. El radiador de información está donde el equipo trabaja y se actualiza solo o casi solo.',
              ejemplo: '<p>Un tablero en la pared de la sala, o una pantalla siempre encendida, tiene una propiedad que el informe no tiene: <strong>lo ves sin pedirlo</strong>.</p><p>El informe semanal informa a quien decide abrirlo. El radiador informa a quien pasa por delante, incluido el que no sabía que necesitaba mirar.</p>',
              eco: ['personas:7']
            },
            {
              id: 'm10-05', nombre: 'Gráficas específicas y formatos visuales',
              idea: 'Trabajo pendiente, trabajo completado, flujo acumulado: cada gráfica responde una pregunta distinta y usar la equivocada esconde justo lo que querías ver.',
              ejemplo: '<p><strong>Trabajo pendiente</strong> (burndown) — «¿llegamos al final del sprint?» Baja hacia cero.</p><p><strong>Trabajo completado</strong> (burnup) — igual de útil, pero además <em>muestra si el alcance creció</em>, porque dibuja la línea del total. El burndown plano puede ser equipo parado o alcance añadido, y no los distingues.</p><p><strong>Flujo acumulado</strong> — dónde se acumula el trabajo. Si la banda de «en pruebas» engorda, ahí está el cuello de botella.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm10-06', nombre: 'Sesgos de medición',
              idea: 'Cuando la métrica se vuelve objetivo, deja de medir. El examen castiga medir por medir, y castiga aún más las métricas que empujan al equipo a comportarse mal para que el número salga bien.',
              ejemplo: '<p>Se mide al equipo por <strong>número de defectos corregidos</strong>. Al mes, los defectos se reportan partidos en trozos pequeños para que la cifra suba.</p><p>Se mide por <strong>velocidad en puntos</strong>. Al mes, las estimaciones se inflan y la velocidad «mejora» sin que se entregue más.</p><p>Ninguno de los dos equipos hizo trampa: optimizaron lo que les pediste. La métrica era la equivocada.</p>',
              eco: ['procesos:8']
            },
          ]
        },
        {
          id: 'm11',
          nombre: 'D8 · Dominio de desempeño de la incertidumbre',
          intro: 'Riesgo y todo lo que no se deja planificar.',
          temas: [
            {
              id: 'm11-01', nombre: 'Entornos VUCA y BANI',
              idea: 'VUCA nombra volatilidad, incertidumbre, complejidad y ambigüedad; BANI describe entornos frágiles, ansiosos, no lineales e incomprensibles. Orientan cuánta planificación por adelantado tiene sentido antes de que sea ficción.',
              ejemplo: '<p>No es vocabulario decorativo: cambia la decisión. En un contexto estable, un plan a doce meses es un compromiso. En uno volátil, el mismo plan es una promesa que vas a incumplir.</p><p>Reconocer el entorno es lo que justifica ante la dirección por qué no vas a dar una fecha cerrada todavía — y por qué eso no es falta de rigor.</p>',
              eco: ['negocio:4']
            },
            {
              id: 'm11-02', nombre: 'Incertidumbre general',
              idea: 'No todo lo desconocido es un riesgo con probabilidad calculable. Confundir incertidumbre con riesgo lleva a registros de riesgos llenos de entradas inventadas con porcentajes que nadie puede sostener.',
              ejemplo: '<p><strong>Riesgo:</strong> «el proveedor puede retrasarse». Tiene precedentes, probabilidad estimable e impacto acotado. Va al registro con su respuesta.</p><p><strong>Incertidumbre:</strong> «no sabemos si esta tecnología servirá para nuestro caso». No tiene probabilidad: nadie lo ha hecho antes.</p><p>La segunda no se gestiona con un registro: se gestiona con una <strong>prueba de concepto</strong> que la convierta en conocimiento.</p>',
              eco: ['negocio:4']
            },
            {
              id: 'm11-03', nombre: 'Ambigüedad, complejidad y volatilidad',
              idea: 'Ambigüedad es no saber qué significa; complejidad es no poder prever cómo interactúan las partes; volatilidad es que cambie rápido. Cada una pide una respuesta distinta, y aplicar la de una a otra no funciona.',
              grafico: '<svg viewBox="0 0 620 214" role="img" xmlns="http://www.w3.org/2000/svg"><text x="310" y="20" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="400">Cada tipo de incertidumbre pide una respuesta distinta</text><rect x="14" y="36" width="286" height="74" rx="8" fill="none" stroke="var(--alerta)" stroke-width="1"/><text x="30" y="60" fill="var(--alerta)" font-size="12" text-anchor="start" font-weight="600">VOLATILIDAD — cambia rápido</text><text x="30" y="82" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Respuesta: márgenes, reservas, ciclos cortos</text><rect x="320" y="36" width="286" height="74" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="336" y="60" fill="var(--mal)" font-size="12" text-anchor="start" font-weight="600">AMBIGÜEDAD — no se sabe qué significa</text><text x="336" y="82" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Respuesta: prototipar, preguntar, experimentar</text><rect x="14" y="124" width="286" height="74" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="30" y="148" fill="var(--acento)" font-size="12" text-anchor="start" font-weight="600">COMPLEJIDAD — muchas interacciones</text><text x="30" y="170" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Respuesta: descomponer, probar en pequeño</text><rect x="320" y="124" width="286" height="74" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="336" y="148" fill="var(--bien)" font-size="12" text-anchor="start" font-weight="600">RIESGO — probabilidad e impacto</text><text x="336" y="170" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Respuesta: registro y plan de respuesta</text></svg>',
              ejemplo: '<p><strong>Ambigüedad</strong> — «queremos un sistema moderno». Nadie sabe qué significa. Se resuelve <em>prototipando</em> y enseñando algo concreto.</p><p><strong>Complejidad</strong> — 14 sistemas integrados donde tocar uno rompe otro. Se resuelve <em>descomponiendo</em> y probando en pequeño.</p><p><strong>Volatilidad</strong> — el precio del insumo cambia cada semana. Se resuelve con <em>márgenes y ciclos cortos</em>.</p><p>Prototipar no arregla la volatilidad, y las reservas no arreglan la ambigüedad.</p>',
              eco: ['negocio:4']
            },
            {
              id: 'm11-04', nombre: 'Riesgos: amenazas y oportunidades',
              idea: 'El riesgo tiene dos signos: amenaza y oportunidad. Las respuestas ante oportunidades —explotar, compartir, mejorar— caen en el examen y se olvidan al estudiar, porque casi todo el mundo asocia riesgo solo con lo malo.',
              grafico: '<svg viewBox="0 0 620 180" role="img" xmlns="http://www.w3.org/2000/svg"><text x="155" y="22" fill="var(--mal)" font-size="12" text-anchor="middle" font-weight="600">AMENAZAS</text><rect x="14" y="34" width="282" height="130" rx="8" fill="none" stroke="var(--mal)" stroke-width="1"/><text x="30" y="58" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Escalar — no es tu nivel</text><text x="30" y="82" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Evitar — eliminar la causa</text><text x="30" y="106" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Transferir — pasarla a un tercero</text><text x="30" y="130" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Mitigar — bajar probabilidad o impacto</text><text x="30" y="154" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Aceptar — asumirla, con o sin reserva</text><text x="465" y="22" fill="var(--bien)" font-size="12" text-anchor="middle" font-weight="600">OPORTUNIDADES</text><rect x="324" y="34" width="282" height="130" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="340" y="58" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Escalar — no es tu nivel</text><text x="340" y="82" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Explotar — asegurar que ocurra</text><text x="340" y="106" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Compartir — aliarse con quien la capture</text><text x="340" y="130" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Mejorar — subir probabilidad o impacto</text><text x="340" y="154" fill="var(--tenue)" font-size="11" text-anchor="start" font-weight="400">Aceptar — no hacer nada activo</text></svg>',
              ejemplo: '<p><strong>Amenaza:</strong> el proveedor único puede retrasarse. <em>Mitigar</em> contratando un segundo proveedor de respaldo.</p><p><strong>Oportunidad:</strong> si terminamos antes de fin de año, entra un incentivo fiscal. <em>Explotar</em> reasignando a las mejores personas para asegurar que ocurra.</p><p>Fíjate en el paralelismo: mitigar baja el impacto de lo malo, mejorar sube la probabilidad de lo bueno. Y <strong>escalar y aceptar existen en ambas columnas</strong>.</p>',
              eco: ['negocio:4']
            },
            {
              id: 'm11-05', nombre: 'Procesos de gestión de riesgos',
              idea: 'Identificar, analizar, planificar respuesta y monitorear. Es continuo, no una sesión al inicio del proyecto: los riesgos nuevos aparecen y los antiguos cambian de probabilidad.',
              ejemplo: '<p>El síntoma más claro de gestión de riesgos muerta: un registro creado en la semana 2, con 30 riesgos, y ninguna modificación desde entonces.</p><p>Un registro vivo se ve distinto: riesgos cerrados porque ya no aplican, otros nuevos añadidos en el mes cuatro, probabilidades reevaluadas después de cada hito.</p>',
              eco: ['negocio:4']
            },
            {
              id: 'm11-06', nombre: 'Análisis cualitativo y cuantitativo',
              idea: 'El análisis cualitativo prioriza por probabilidad e impacto y sirve para casi todo; el cuantitativo modela el efecto numérico sobre el proyecto y solo se justifica cuando hay mucho en juego.',
              ejemplo: '<p><strong>Cualitativo:</strong> matriz de probabilidad e impacto. «Probabilidad alta, impacto alto → atención inmediata.» Rápido, barato, suficiente en la mayoría de proyectos.</p><p><strong>Cuantitativo:</strong> simulación de Monte Carlo, valor monetario esperado, árbol de decisión. «Hay un 80 % de probabilidad de terminar antes del 15 de marzo con un costo por debajo de 1,2 millones.»</p><p>El cuantitativo cuesta tiempo y datos. Para un proyecto de 50 000 no se justifica; para una represa, sí.</p>',
              eco: ['negocio:4']
            },
          ]
        },
        {
          id: 'm12',
          nombre: 'Adaptación',
          intro: 'El puente entre la teoría y tu proyecto real.',
          temas: [
            {
              id: 'm12-01', nombre: 'Conceptos básicos de la adaptación',
              idea: 'Ajustar deliberadamente enfoque, procesos, artefactos y gobernanza al contexto concreto, y dejar registrado por qué. Lo que distingue la adaptación del desorden es precisamente que la decisión es consciente y está justificada.',
              ejemplo: '<p class="mal">✗ «No hacemos retrospectivas.» — eso es abandono.</p><p class="bien">✓ «No hacemos retrospectiva quincenal porque el equipo son tres personas que trabajan juntas a diario y la conversación ya ocurre. Revisamos al cierre de cada incremento.» — eso es adaptación.</p><p>Misma práctica ausente, decisión distinta. La diferencia está en si puedes explicar el porqué.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm12-02', nombre: 'Los cuatro pasos del proceso de adaptación',
              idea: 'Seleccionar el enfoque inicial, adaptar a la organización, adaptar al proyecto e implementar la mejora continua. Es un ciclo, no una lista que se recorre una vez al arrancar.',
              grafico: '<svg viewBox="0 0 620 150" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--tenue)"/></marker></defs><rect x="12" y="46" width="132" height="56" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="78" y="70" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">1 · Seleccionar</text><text x="78" y="88" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">enfoque inicial</text><rect x="160" y="46" width="132" height="56" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="226" y="70" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">2 · Adaptar a la</text><text x="226" y="88" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">organización</text><rect x="308" y="46" width="132" height="56" rx="8" fill="none" stroke="var(--acento)" stroke-width="1"/><text x="374" y="70" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">3 · Adaptar al</text><text x="374" y="88" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">proyecto</text><rect x="456" y="46" width="148" height="56" rx="8" fill="none" stroke="var(--bien)" stroke-width="1"/><text x="530" y="70" fill="var(--texto)" font-size="12" text-anchor="middle" font-weight="400">4 · Mejora</text><text x="530" y="88" fill="var(--tenue)" font-size="11" text-anchor="middle" font-weight="400">continua</text><line x1="146" y1="74" x2="156" y2="74" stroke="var(--tenue)" stroke-width="1.5"/><line x1="294" y1="74" x2="304" y2="74" stroke="var(--tenue)" stroke-width="1.5"/><line x1="442" y1="74" x2="452" y2="74" stroke="var(--tenue)" stroke-width="1.5"/><path d="M530,110 C530,132 300,138 78,124" fill="none" stroke="var(--tenue)" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#f)"/><text x="310" y="22" fill="var(--tenue)" font-size="12" text-anchor="middle" font-weight="400">La adaptación no se hace una vez: es un ciclo</text></svg>',
              ejemplo: '<p>El cuarto paso es el que casi nadie hace. Se adapta al inicio, y a los seis meses el equipo sigue con ceremonias que ya no sirven porque «así lo definimos».</p><p>La retrospectiva es justamente el mecanismo de ese cuarto paso: el sitio donde se revisa si lo que se decidió sigue teniendo sentido.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm12-03', nombre: 'Selección del enfoque inicial',
              idea: 'El punto de partida según producto, equipo y restricciones. No es una decisión definitiva ni irreversible: es la hipótesis inicial que se corrige con lo que vaya apareciendo.',
              ejemplo: '<p>Arrancas predictivo porque el cliente exige un cronograma cerrado. En el mes tres, el tercer cambio de requisitos demuestra que la hipótesis era falsa.</p><p>Lo correcto no es aguantar el plan por coherencia: es replantear el enfoque con evidencia y llevarlo a quien corresponda. Insistir en un enfoque que ya se demostró equivocado es lo que el examen penaliza.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm12-04', nombre: 'Adaptar para la organización',
              idea: 'Lo que la gobernanza permite acota lo que puedes adaptar. Antes de rediseñar el proceso conviene saber qué es negociable y qué es una obligación de la organización o del regulador.',
              ejemplo: '<p>Quieres eliminar el comité de aprobación de cambios porque frena al equipo.</p><p>Si es una costumbre interna, se puede negociar con datos. Si viene de una exigencia de auditoría o del regulador, no se toca — y lo que se adapta es <em>cómo</em> se prepara ese comité para que cueste menos.</p>',
              eco: ['negocio:0']
            },
            {
              id: 'm12-05', nombre: 'Adaptar para el proyecto',
              idea: 'Tamaño, criticidad, madurez del equipo y riesgo determinan cuánta ceremonia se justifica. La misma práctica puede ser imprescindible en un proyecto y puro desperdicio en otro.',
              ejemplo: '<p><strong>Tres personas, dos meses, riesgo bajo:</strong> un tablero y una conversación diaria bastan. Montar comité de cambios y plan de comunicación formal es burocracia.</p><p><strong>Cuarenta personas, dos años, sistema crítico:</strong> esa misma informalidad garantiza el caos.</p><p>No hay un nivel correcto de proceso: hay un nivel correcto <em>para este proyecto</em>.</p>',
              eco: ['procesos:0']
            },
            {
              id: 'm12-06', nombre: 'Producto y entregable',
              idea: 'La naturaleza de lo que se construye condiciona la cadencia de entrega y cuánto se puede iterar. Hay productos donde entregar por partes es natural y otros donde no existe media entrega.',
              ejemplo: '<p>Una aplicación web se puede entregar por funcionalidades, cada una utilizable.</p><p>Un avión certificado, no: no existe «medio avión que ya vuela». Ahí lo que se itera es el <em>diseño</em>, con simulaciones y prototipos, pero la entrega es única.</p>',
              eco: ['procesos:1']
            },
            {
              id: 'm12-07', nombre: 'Equipo del proyecto',
              idea: 'Experiencia, distribución geográfica y dedicación cambian qué prácticas funcionan. Un equipo repartido en tres husos horarios no puede sostener las mismas rutinas que uno en una sola sala.',
              ejemplo: '<p>La reunión diaria de pie funciona con gente en la misma franja horaria. Con Lima, Madrid y Manila, alguien va a estar dormido siempre.</p><p>La adaptación no es eliminarla: es convertirla en <strong>asíncrona</strong> —cada uno deja su actualización escrita— y reservar el tiempo en común para lo que de verdad necesita conversación.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm12-08', nombre: 'Cultura',
              idea: 'Adoptar prácticas que la cultura rechaza produce cumplimiento formal y ningún cambio real. La cultura no se cambia por decreto, y planificar como si no existiera es la vía rápida al teatro de proceso.',
              ejemplo: '<p>En una organización donde el error se castiga, la retrospectiva se convierte en una reunión donde todo el mundo dice que fue bien.</p><p>El formato es impecable y el aprendizaje es cero. Cambiar eso empieza por que alguien con autoridad reconozca un error propio sin consecuencias — no por mejorar la plantilla de la retrospectiva.</p>',
              eco: ['negocio:6']
            },
            {
              id: 'm12-09', nombre: 'Mejora continua',
              idea: 'La adaptación se revisa durante el proyecto, no solo al inicio. En el ECO 2026 la mejora continua es una tarea propia de Entorno de negocio, con las lecciones aprendidas y los activos de proceso dentro.',
              ejemplo: '<p>Lo que separa una lección aprendida útil de una inútil es si <strong>cambió algo</strong>.</p><p class="mal">✗ «Aprendimos que hay que comunicar mejor.» — no cambia nada.</p><p class="bien">✓ «El área de compras tarda seis semanas, no tres. Actualizamos la plantilla de planificación para que ese plazo venga por defecto.» — eso ya es un activo de proceso de la organización.</p>',
              eco: ['negocio:5']
            },
          ]
        },
        {
          id: 'm13',
          nombre: 'Modelos, métodos y artefactos',
          intro: 'El catálogo de herramientas y el criterio para elegir.',
          temas: [
            {
              id: 'm13-01', nombre: 'Modelos según los dominios de desempeño',
              idea: 'Los modelos explican comportamiento: liderazgo situacional, motivación, gestión del cambio, complejidad. No producen un entregable — producen una forma de entender lo que está pasando.',
              ejemplo: '<p>El equipo no sigue una directriz nueva. Según el modelo con el que lo mires, la acción cambia:</p><p><strong>Modelo de cambio</strong> → están en la fase de resistencia, hay que trabajar la razón del cambio.<br><strong>Liderazgo situacional</strong> → no es resistencia, es que no saben cómo; falta capacitación.<br><strong>Modelo de motivación</strong> → la directriz les quita autonomía y ahí está el rechazo.</p><p>El valor de conocer varios es no diagnosticar siempre con el mismo.</p>',
              eco: ['personas:2']
            },
            {
              id: 'm13-02', nombre: 'Métodos según los dominios de desempeño',
              idea: 'Los métodos producen un resultado: estimación, análisis de datos, reuniones, valor ganado. Es la caja de herramientas propiamente dicha, y la mayoría vienen del PMBOK 6.',
              ejemplo: '<p>Para estimar tienes varios métodos y ninguno es «el correcto»: análoga si necesitas una cifra hoy, paramétrica si tienes histórico fiable, de tres puntos si el riesgo es alto, ascendente si necesitas precisión y puedes pagarla.</p><p>Elegir el método es parte de la adaptación, igual que elegir el enfoque.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm13-03', nombre: 'Artefactos según los dominios de desempeño',
              idea: 'Los artefactos son los documentos y entregables: actas, registros, planes, informes. Cada uno que creas hay que mantenerlo, así que crear los que nadie usa no es rigor, es desperdicio.',
              ejemplo: '<p>Prueba sencilla antes de crear un artefacto: <strong>¿quién lo va a leer y qué decisión va a tomar con él?</strong></p><p>Si no hay respuesta a las dos, no lo crees. Un registro de interesados que nadie consulta consume el tiempo de mantenerlo y da la falsa sensación de que los interesados están gestionados.</p>',
              eco: ['procesos:8']
            },
            {
              id: 'm13-04', nombre: 'Kit metodológico para distintos escenarios',
              idea: 'Elegir el conjunto mínimo de modelos, métodos y artefactos que aporte valor en tu contexto, en vez de aplicarlo todo por defecto. Es donde converge todo lo anterior: la adaptación aplicada a las herramientas.',
              ejemplo: '<p>Kit para un proyecto pequeño y adaptativo: lista de trabajo pendiente priorizada, tablero visible, definición de terminado, retrospectiva. Cuatro artefactos.</p><p>Kit para un proyecto grande, crítico y regulado: acta, estructura de desglose, cronograma con línea base, registro de riesgos, matriz de trazabilidad, plan de comunicación, registro de cambios, informes de desempeño.</p><p>Aplicar el segundo al primero lo mata. Aplicar el primero al segundo también, solo que tarda más en notarse.</p>',
              eco: ['procesos:0']
            },
          ]
        },
      ]
    },
    // ── CURSO EN VIDEO ──────────────────────────────────────
    {
      id: 'curso-mc',
      nombre: 'Curso PMBOK 8',
      subtitulo: 'Las 22 clases de Marco Calle · apuntes y marcas de tiempo',
      estado: 'disponible',
      resumen: 'Apuntes propios de las 22 clases del curso «Gestión de Proyectos con el PMBOK 8» de Marco ' +
        'Calle, con enlace al minuto exacto de cada tema. Son notas de estudio, no la clase: para el ' +
        'contenido completo, ve el video — el crédito y el mérito son suyos.',

      /**
       * ORIGEN — importante.
       *
       * Los apuntes son PROPIOS, redactados a partir de la transcripción automática de
       * los videos públicos (bajada con yt-dlp y limpiada con scratchpad/limpiar_vtt.py).
       * No son transcripción ni sustituyen a la clase: resumen, ordenan y enlazan al
       * minuto correspondiente para que se vea el original.
       * Autor del curso: Marco Calle (marcocalle.com). Lista de reproducción pública.
       *
       * ⚠️ ESTAS CLASES CONTRADICEN EL TEMARIO DE 'pmbok8'. La estructura real de la 8ª
       *    edición según el curso: 6 principios en 3 dimensiones, 7 dominios de desempeño,
       *    5 áreas de foco y 40 procesos con ITTO. El plan de estudios de EducacionIT en el
       *    que se basó 'pmbok8' describe la arquitectura del PMBOK 7. Ver README.
       *
       * ⚠️ DISCREPANCIA INTERNA DEL CURSO: la clase 18 reparte los principios entre
       *    dimensiones de forma distinta a las clases 5, 8, 9, 10, 11 y 16. Se toma como
       *    buena la versión mayoritaria y queda anotado en ambas fichas.
       */
      grupos: [
        {
          id: 'mc-s1',
          nombre: 'Estándar · Fundamentos',
          intro: 'Qué cambió en la 8ª edición, cómo se crea el valor y quién influye en el proyecto. La clase 1 es la más rentable de ver primero: enumera de golpe todo lo que ya no aplica si vienes del PMBOK 7.',
          temas: [
            {
              id: 'mc-01', nombre: 'Clase 1 · Qué cambia en el PMBOK 8',
              video: 'MnyiPcr55so', duracion: '20 min',
              idea: 'La clase de apertura, y la más rentable de ver primero: enumera los cuatro cambios de la 8ª edición y redefine qué es un proyecto. Si vienes del PMBOK 7, aquí ves de golpe todo lo que ya no aplica.',
              apuntes: '<p><strong>Los cuatro cambios de la 8ª edición:</strong></p><p>· <strong>Conceptos actualizados</strong> — entregable, artefacto y el propio concepto de proyecto. Llevaban 20 o 30 años estables.<br>· <strong>Principios refinados</strong> — los del PMBOK 7 eran filosóficos y difíciles de aplicar; ahora se buscan <em>accionables</em>.<br>· <strong>Vuelven los grupos de procesos</strong>, rebautizados como <strong>áreas de foco</strong>.<br>· <strong>Dominios de desempeño actualizados</strong>, entre otras cosas por el impacto de la inteligencia artificial.</p><p><strong>La nueva definición de proyecto:</strong> una iniciativa temporal, en un contexto único, para generar valor. Tres piezas, y la tercera es la que cambia todo. Antes «temporal» solo quería decir que tiene inicio y fin; ahora subraya que <strong>los entregables persisten más allá de la entrega</strong> y que el valor aparece cuando se usan.</p><p><strong>El propósito del estándar</strong>, en tres objetivos: dar un lenguaje común aplicable a cualquier industria; asegurar que la gestión de proyectos cree valor y beneficio; y describir cómo los líderes aprovechan la disciplina para alcanzar el éxito.</p><p><strong>Por qué nacen los proyectos</strong> — cuatro razones: cumplir una regulación, satisfacer la necesidad de un cliente, responder a un cambio de negocio o tecnología, y crear o corregir productos y procesos.</p><p>Un proyecto es el medio que lleva a la organización de un <strong>estado actual a un estado futuro</strong> alineado con los objetivos estratégicos.</p>',
              ejemplo: '<p>La analogía que usa toda la clase es un <strong>barco</strong>. Zarpa de un puerto y llega a destino: eso es el proyecto, con su inicio y su fin. Antes medíamos el éxito solo por llegar a tiempo, en costo y con el alcance completo.</p><p>Pero el barco lleva oro, agua, vino y armas para entregar a los interesados. Si en la travesía los piratas roban el oro, la tormenta rompe el vino y una plaga daña el agua, el barco puede llegar puntual y dentro del presupuesto — y aun así el proyecto <strong>no sirvió para nada</strong>.</p><p class="bien">La naviera es la organización: aporta los recursos, y los beneficios del viaje vuelven a ella para que pueda comprar un tercer barco. Eso es el paso del estado actual al estado futuro.</p>',
              momentos: [{ t: 129, txt: 'Los cuatro cambios de la 8ª edición' }, { t: 191, txt: 'Vuelven los grupos de procesos como áreas de foco' }, { t: 285, txt: 'El propósito del estándar' }, { t: 432, txt: 'La nueva definición de proyecto' }, { t: 531, txt: 'La analogía del barco: por qué llegar no basta' }, { t: 777, txt: 'Contexto único' }, { t: 970, txt: 'Por qué nacen los proyectos: las cuatro razones' }],
              eco: ['procesos:0', 'procesos:2']
            },
            {
              id: 'mc-02', nombre: 'Clase 2 · Sistema de entrega de valor',
              video: 'yh_k24mlkmQ', duracion: '16 min',
              idea: 'Cómo se crea el valor y cómo se mide el éxito. Trae la pirámide que conecta la visión de la empresa con los proyectos concretos, y una definición de éxito en dos dimensiones que desmonta la idea de que basta con cumplir plazo y presupuesto.',
              apuntes: '<p><strong>Valor de negocio</strong> = beneficio neto y cuantificable. Puede ser <strong>tangible</strong> (ingresos, retorno de la inversión) o <strong>intangible</strong> (reputación, por ejemplo).</p><p><strong>La pirámide del sistema de entrega de valor</strong>, de arriba abajo:</p><p>· <strong>Visión y misión</strong> — el largo plazo y el cómo se persigue.<br>· <strong>Objetivos estratégicos y organizacionales</strong>.<br>· <strong>Estrategia</strong> — la da la gestión de portafolios, la planificación estratégica y la gestión de programas y productos.<br>· <strong>Ejecución</strong> — operaciones y proyectos autorizados.</p><p>Punto clave: <strong>no todos los proyectos de la estrategia se hacen</strong>. Se evalúan y se decide cuáles. Y la estrategia también decide qué recursos van a operaciones y cuáles a proyectos, porque son limitados y compiten.</p><p><strong>La cadena de valor:</strong> el proyecto genera un <em>entregable</em>; el entregable produce un <em>resultado</em>; el resultado genera <em>beneficios</em>. Sin los dos últimos eslabones no hay valor.</p><p><strong>El éxito tiene dos dimensiones:</strong> el resultado (¿generó valor?) y el proceso (¿se cumplieron alcance, tiempo y costo?). Medir solo la segunda es la trampa clásica.</p>',
              ejemplo: '<p>La <strong>Ópera de Sídney</strong>. Se planificó en 7 millones de dólares australianos y 4 años. Costó <strong>102 millones y tardó 14 años</strong>. Por la dimensión de proceso, un fracaso rotundo.</p><p class="bien">Por la dimensión de resultado: patrimonio de la humanidad, más de 10 millones de turistas al año y unos 775 millones de dólares anuales para el país. El sobrecosto se pagó hace décadas.</p><p>La lección no es que da igual pasarse: es que <em>ambas dimensiones cuentan</em>. Con el mismo resultado y sin los 10 años de retraso, habría sido aún más exitoso, porque los beneficios habrían llegado antes.</p>',
              momentos: [{ t: 0, txt: 'De la salida al valor: por qué entregar no basta' }, { t: 98, txt: 'Valor de negocio: tangible e intangible' }, { t: 242, txt: 'La pirámide del sistema de entrega de valor' }, { t: 338, txt: 'Estrategia: quién decide qué proyectos se hacen' }, { t: 578, txt: 'La cadena de valor: entregable, resultado, beneficio' }, { t: 676, txt: 'Las dos dimensiones del éxito' }, { t: 724, txt: 'La Ópera de Sídney' }],
              eco: ['procesos:2', 'negocio:0']
            },
            {
              id: 'mc-03', nombre: 'Clase 3 · Entorno del proyecto',
              video: '15SVO4kP0ik', duracion: '4 min',
              idea: 'La clase más corta del curso y una de las más rentables: distingue los factores ambientales de la empresa (EEF) de los activos de los procesos de la organización (OPA). Es una pareja que el examen usa constantemente en las entradas de los procesos.',
              apuntes: '<p><strong>Factores ambientales de la empresa (EEF)</strong> — condiciones que <em>afectan</em> al proyecto y que no controlas:</p><p>· <strong>Externos:</strong> condiciones de mercado, restricciones legales, nuevas regulaciones.<br>· <strong>Internos:</strong> cultura organizacional e infraestructura disponible.</p><p><strong>Activos de los procesos de la organización (OPA)</strong> — cosas que la organización <em>posee</em> y que puedes usar: políticas, procesos y procedimientos, plantillas, y el <strong>repositorio de conocimiento</strong> con las lecciones aprendidas de proyectos anteriores.</p><p>La distinción práctica: los EEF los sufres o los aprovechas, los OPA los reutilizas. Y la palabra <em>activo</em> es literal — tienen valor y por eso se guardan.</p>',
              ejemplo: '<p>No es igual trabajar en una organización donde el equipo tiene libertad para decidir que en una muy regulada: eso es un <strong>EEF interno</strong>, la cultura, y condiciona qué prácticas van a funcionar antes de que empieces.</p><p>En cambio, la plantilla de acta de constitución que usó el proyecto del año pasado, o sus lecciones aprendidas, son <strong>OPA</strong>: te ahorran trabajo si los buscas, y se desperdician si nadie los consulta.</p>',
              momentos: [{ t: 0, txt: 'Qué es el entorno del proyecto' }, { t: 47, txt: 'Factores ambientales: externos e internos' }, { t: 145, txt: 'Activos de los procesos de la organización' }, { t: 193, txt: 'El repositorio de conocimiento y las lecciones aprendidas' }],
              eco: ['negocio:7', 'negocio:5']
            },
            {
              id: 'mc-04', nombre: 'Clase 4 · Funciones asociadas y competencias',
              video: 'hUvo0B9Tnl4', duracion: '9 min',
              idea: 'Quién influye en el proyecto y desde qué distancia, y qué competencias se le exigen al director. Aquí aparece el triángulo del talento con una forma que no coincide con la versión clásica de tres lados.',
              apuntes: '<p><strong>Las áreas de influencia</strong>, del centro hacia afuera — cada anillo influye sobre los anteriores:</p><p>1. Director del proyecto y equipo · 2. Patrocinador · 3. Director de portafolio, de programa y PMO · 4. Gerentes funcionales · 5. Usuarios, clientes y proveedores · 6. <strong>Agencias reguladoras</strong>.</p><p>El último anillo lo afecta absolutamente todo: cuando cambia una regulación, se mueven clientes, proveedores, gerencias, estrategia, patrocinador y proyecto a la vez.</p><p><strong>El triángulo del talento, con cinco competencias:</strong></p><p>· <strong>Responsabilidad social</strong> — decisiones enfocadas en el bien común, ética, respeto a las comunidades.<br>· <strong>Power skills</strong> — lo que antes se llamaba habilidades blandas: influir, negociar, motivar.<br>· <strong>Business acumen</strong> — visión de negocio: caso de negocio, evaluación financiera.<br>· <strong>Formas de trabajar</strong> — métodos, enfoques y cuándo aplicar cada uno.<br>· <strong>Resultado</strong>, en el centro — la capacidad de convertir una idea en algo que entregue lo esperado.</p><p class="mal">Ojo: la versión clásica de PMI tiene tres lados. Esta trae cinco elementos. Contrástalo con la guía.</p>',
              ejemplo: '<p>Sobre coordinación del trabajo, la clase contrasta dos casos: un proyecto de software con enfoque ágil se beneficia de un <strong>equipo autoorganizado</strong>; la construcción de un edificio se beneficia de una <strong>coordinación centralizada</strong> en el director.</p><p>Identificar cuál de las dos necesita tu proyecto es en sí una de las funciones del director — no una preferencia personal.</p>',
              momentos: [{ t: 0, txt: 'Las personas como centro de la gestión' }, { t: 50, txt: 'Coordinación: equipo autoorganizado o centralizado' }, { t: 97, txt: 'Las áreas de influencia, anillo por anillo' }, { t: 240, txt: 'Agencias reguladoras: el anillo que lo afecta todo' }, { t: 291, txt: 'El triángulo del talento y sus cinco competencias' }, { t: 384, txt: 'Power skills' }, { t: 433, txt: 'Business acumen' }, { t: 494, txt: 'El resultado como centro' }],
              eco: ['personas:2', 'personas:3', 'negocio:0']
            },
          ]
        },
        {
          id: 'mc-s2',
          nombre: 'Estándar · Los seis principios',
          intro: 'La mentalidad y sus tres dimensiones, y después un principio por clase. Son SEIS, no los doce del PMBOK 7, y el de sostenibilidad no existía en ninguna edición anterior.',
          temas: [
            {
              id: 'mc-05', nombre: 'Clase 5 · La mentalidad y sus tres dimensiones',
              video: 'QkiZlP_8NDA', duracion: '8 min',
              idea: 'La clase que define la arquitectura de los principios del PMBOK 8: son SEIS, no doce, y se agrupan en tres dimensiones de una «mentalidad». Es la pieza que hay que entender antes de estudiar los principios uno a uno.',
              apuntes: '<p>Un principio es una norma fundamental, una verdad o un valor que guía el comportamiento del director <em>y del equipo</em>. La gestión de proyectos no es solo un conjunto de prácticas y herramientas: es una <strong>mentalidad</strong>, un conjunto de creencias y hábitos que ayudan a interpretar situaciones.</p><p><strong>Las tres dimensiones y sus seis principios:</strong></p><p>· <strong>Proactivo</strong> → adoptar una visión holística · integrar la calidad<br>· <strong>Propiedad</strong> → ser un líder que rinde cuentas · construir una cultura empoderada<br>· <strong>Orientado al valor</strong> → enfocarse en el valor · integrar la sostenibilidad</p><p class="mal"><strong>Discrepancia detectada.</strong> En la clase 18 el profesor asigna estas parejas de otra forma: sitúa al líder en «proactivo» y la calidad en «propiedad». Las clases 5, 8, 9, 10, 11 y 16 coinciden en el reparto de arriba, así que la 18 parece el desliz. Verifícalo contra la guía antes de memorizarlo.</p>',
              ejemplo: '<p>La analogía que usa para «principio» es sencilla: igual que en la vida tienes valores como el respeto, que guían tu conducta sin ser un procedimiento, en la gestión de proyectos los principios guían las decisiones sin decirte los pasos.</p><p>Por eso el examen no pregunta el nombre del principio: te pone una situación y espera que elijas la opción que lo respeta.</p>',
              momentos: [{ t: 0, txt: 'Qué es un principio en dirección de proyectos' }, { t: 95, txt: 'La gestión de proyectos como mentalidad' }, { t: 191, txt: 'Las tres dimensiones' }, { t: 242, txt: 'Proactivo: visión holística y calidad' }, { t: 289, txt: 'Propiedad: líder que rinde cuentas y cultura empoderada' }, { t: 337, txt: 'Orientado al valor: valor y sostenibilidad' }],
              eco: ['personas:2', 'procesos:2']
            },
            {
              id: 'mc-06', nombre: 'Clase 6 · Principio 1: visión holística',
              video: 'XeRgzqcT5jc', duracion: '9 min',
              idea: 'El primer principio, de la dimensión proactiva: el proyecto no es un engranaje aislado sino una pieza de un sistema mayor. También aclara la relación entre principios (que están en el estándar) y dominios de desempeño (que están en la guía).',
              apuntes: '<p><strong>Principios y dominios se relacionan así:</strong> los principios son los valores que guían el comportamiento y viven en el <em>estándar</em>; los dominios de desempeño son la forma de hacerlos realidad y viven en la <em>guía</em>. Uno dice qué creer, el otro qué hacer.</p><p><strong>Qué implica la visión holística</strong> — pensamiento sistémico: gestionar el proyecto considerando todos sus componentes y sus interdependencias como parte de algo más grande. Las decisiones no se toman por el bien del proyecto sino por el de la organización.</p><p><strong>Tres impactos concretos:</strong> decisiones que consideran las interdependencias; <strong>gestión proactiva de riesgos</strong>, porque los riesgos suelen venir de fuera del proyecto y solo se ven si miras el entorno; e <strong>involucramiento efectivo de interesados</strong>, porque entiendes a qué otras áreas afectas.</p><p>Y todo ello <em>a lo largo de todo el ciclo de vida</em>, no en una sesión inicial.</p>',
              ejemplo: '<p>La imagen que usa es un <strong>reloj</strong>: mover un engranaje mueve todos los demás, y solo si todos están alineados el reloj marca la hora correcta.</p><p>El caso práctico es una <strong>ONG</strong> que produce materiales educativos y eventos. Con visión estrecha, mide su éxito por los materiales entregados. Con visión holística, descubre que puede alinear esos materiales con iniciativas del gobierno y obtener subvenciones — el mismo trabajo, con un impacto mucho mayor y duradero.</p>',
              momentos: [{ t: 0, txt: 'Relación entre principios y dominios de desempeño' }, { t: 51, txt: 'Los principios están en el estándar, los dominios en la guía' }, { t: 101, txt: 'Qué significa holístico: la analogía del reloj' }, { t: 196, txt: 'Pensamiento sistémico' }, { t: 244, txt: 'Los tres impactos del principio' }, { t: 389, txt: 'El ejemplo de la ONG y las subvenciones' }],
              eco: ['procesos:0', 'negocio:7', 'personas:3']
            },
            {
              id: 'mc-07', nombre: 'Clase 7 · Principio 2: enfocarse en el valor',
              video: 'ALCKoSixm8g', duracion: '10 min',
              idea: 'El principio que el curso trata como el más central: el valor es el indicador definitivo del éxito. Y explica el papel del caso de negocio como la herramienta que traduce ese principio en decisiones del día a día.',
              apuntes: '<p>Si el proyecto no genera valor, no merece la pena hacerlo. <strong>El valor es el KPI definitivo</strong>: para saber si un proyecto fue exitoso, pregunta qué valor generó.</p><p><strong>El valor puede ser de tres tipos:</strong> financiero (ingresos, retorno), social (impacto en la sociedad donde opera) y desde la <strong>perspectiva de beneficio del cliente</strong> — si satisface su necesidad, hubo valor.</p><p><strong>El mecanismo: el caso de negocio.</strong> Lo genera el patrocinador y contiene la justificación del proyecto y su alineación con los objetivos estratégicos. El equipo lo usa <em>para tomar decisiones</em>: cuando dudas de si algo aporta valor, vuelves al caso de negocio.</p><p><strong>Tres impactos:</strong> maximiza el retorno de la inversión (cuanto antes se genere valor, antes se recupera); hace que el equipo busque <em>exceder</em> los objetivos y no solo cumplirlos; y alinea el proyecto con la misión y la visión.</p>',
              ejemplo: '<p>Un <strong>restaurante</strong>. Si el cocinero se centra solo en el entregable, sigue la receta al pie de la letra y produce un plato correcto: alcance, tiempo y costo cumplidos.</p><p class="bien">Pero el cliente no viene solo por la comida: viene por la <strong>experiencia</strong>. Que el chef cocine delante de él y le deje tomar una foto no está en la receta, y sin embargo es donde está buena parte del valor.</p><p>Con la receta sola, el valor es parcial. Y por eso este principio se apoya en el de visión holística: solo mirando el conjunto identificas qué es lo que de verdad valoran los interesados.</p>',
              momentos: [{ t: 0, txt: 'El valor como propósito fundamental' }, { t: 48, txt: 'El valor como indicador definitivo del éxito' }, { t: 96, txt: 'Los tres tipos de valor' }, { t: 143, txt: 'El caso de negocio y su papel en las decisiones' }, { t: 290, txt: 'Los tres impactos del principio' }, { t: 389, txt: 'El ejemplo del restaurante: receta contra experiencia' }],
              eco: ['procesos:2', 'negocio:1']
            },
            {
              id: 'mc-08', nombre: 'Clase 8 · Principio 3: integrar la calidad',
              video: 'uh0A8M2jrSs', duracion: '8 min',
              idea: 'La calidad deja de ser un área de conocimiento y pasa a ser un principio de la mentalidad. Y no solo la del entregable: también la de los procesos con los que trabajas.',
              apuntes: '<p><strong>Calidad</strong> = el grado en que un conjunto de características del entregable cumple o supera los objetivos del proyecto. Se integra <em>desde el inicio</em>, no se inspecciona al final.</p><p><strong>Dos calidades, no una:</strong></p><p>· <strong>Calidad del producto</strong> — evita retrabajo y reduce costos.<br>· <strong>Calidad del proceso</strong> — mejora la eficiencia. Un cronograma bien seguido, un control que evita retrabajo.</p><p>Para definirla hacen falta tres cosas concretas: la <strong>definición de terminado</strong>, los <strong>criterios de aceptación</strong> y el grado de eficiencia buscado.</p><p><strong>Por qué importa:</strong> satisface las expectativas de los interesados, cumple los criterios de aceptación y minimiza desperdicio, retrabajo y quejas.</p>',
              ejemplo: '<p>Un <strong>chef preparando un pastel</strong>, en tres momentos:</p><p>· <strong>Antes de empezar</strong> verifica herramientas, receta e insumos. Eso es aseguramiento de calidad: revisar el proceso antes de gastar tiempo.<br>· <strong>Durante</strong> va comprobando, igual que un proyecto revisa sus indicadores. Corregir aquí es barato.<br>· <strong>Solo al final</strong> — la peor opción. Si el pastel está mal, todo el trabajo vuelve atrás.</p><p class="mal">La frase que resume la clase: dejar la calidad para la inspección final es lo peor que se puede hacer.</p>',
              momentos: [{ t: 0, txt: 'La calidad como principio, no como proceso' }, { t: 47, txt: 'Qué es calidad' }, { t: 96, txt: 'Calidad de producto y calidad de proceso' }, { t: 146, txt: 'Definición de terminado y criterios de aceptación' }, { t: 244, txt: 'Por qué impacta al proyecto' }, { t: 291, txt: 'El ejemplo del pastel en tres momentos' }],
              eco: ['procesos:6']
            },
            {
              id: 'mc-09', nombre: 'Clase 9 · Principio 4: líder que rinde cuentas',
              video: 'YBb6J0Y59G8', duracion: '14 min',
              idea: 'De la dimensión de propiedad. El *accountable leader* se hace dueño del proyecto y responde por sus decisiones. Con una idea que cae mucho en examen: liderazgo no es lo mismo que autoridad.',
              apuntes: '<p>El líder que rinde cuentas <strong>toma propiedad</strong> del proyecto: no busca solo que se complete, sino que cumpla las metas de negocio. Y <strong>liderazgo no es autoridad</strong>: cualquier miembro del equipo puede ejercerlo, porque es una actitud, no un cargo. El liderazgo es compartido.</p><p><strong>Cinco características:</strong></p><p>· <strong>Guiar con el ejemplo</strong> — si quieres puntualidad, llega primero.<br>· <strong>Integridad y confianza</strong> — decisiones enfocadas en el bien común.<br>· <strong>Servicio y apoyo</strong> — escuchar y eliminar impedimentos, no solo dar órdenes.<br>· <strong>Liderazgo compartido</strong> — el director no es el único líder.<br>· <strong>Adaptabilidad</strong> — el estilo cambia según la audiencia y la situación.</p><p><strong>Tres impactos:</strong> influye, inspira y motiva; sube la moral y con ella el desempeño; y orienta al equipo a la entrega de valor, que es el indicador de éxito.</p>',
              ejemplo: '<p>Un <strong>arquitecto</strong> en la fase de fundición recibe materiales de baja calidad para los cimientos. Detiene la obra, aunque eso suba el costo y el plazo.</p><p class="bien">Eso es integridad y propiedad: el resultado final pesa más que cumplir presupuesto y cronograma con unos cimientos malos.</p><p>Sobre <strong>liderazgo adaptable</strong>, el contraste es claro. Ante un peligro inminente en obra, «salgan de ahí ahora» es liderazgo <em>directivo</em> y es lo correcto: no toca buscar consenso. En otro momento, «confío en tu experiencia, toma tú la decisión» es lo adecuado. El estilo directivo no es malo — es una herramienta para ciertas situaciones.</p>',
              momentos: [{ t: 0, txt: 'Qué es un líder que rinde cuentas' }, { t: 97, txt: 'Tomar propiedad del proyecto' }, { t: 146, txt: 'Liderazgo no es autoridad' }, { t: 194, txt: 'Las cinco características' }, { t: 194, txt: 'Guiar con el ejemplo' }, { t: 242, txt: 'Integridad, confianza y bien común' }, { t: 290, txt: 'Liderazgo de servicio' }, { t: 387, txt: 'Adaptar el estilo' }, { t: 434, txt: 'Los tres impactos' }, { t: 578, txt: 'El arquitecto que detiene la obra' }, { t: 720, txt: 'Liderazgo directivo: cuándo sí' }],
              eco: ['personas:2', 'negocio:3']
            },
            {
              id: 'mc-10', nombre: 'Clase 10 · Principio 5: integrar la sostenibilidad',
              video: 'SkCUz7bJKus', duracion: '8 min',
              idea: 'El principio que no existía en ninguna edición anterior. Obliga a considerar personas, planeta y sociedad en todo el proyecto, no solo el retorno para la organización.',
              apuntes: '<p>La idea central: un proyecto debe satisfacer las necesidades presentes <strong>sin comprometer la capacidad de las generaciones futuras</strong> de satisfacer las suyas. Es la definición clásica de desarrollo sostenible, elevada a principio.</p><p><strong>La pirámide de deseabilidad</strong>, de menos a más:</p><p><strong>1 · Compensar</strong> el daño — el mínimo. <strong>2 · Minimizar</strong> el impacto. <strong>3 · Restaurar</strong> lo afectado — plantar árboles, por ejemplo, aunque rara vez restaure del todo. <strong>4 · Evitar</strong> el resultado negativo — lo deseable.</p><p><strong>Tres consecuencias prácticas:</strong> extiende el horizonte temporal más allá del proyecto; amplía el alcance y sube el costo, porque entran más interesados; y cambia la métrica de éxito — el retorno de la inversión deja de bastar.</p>',
              ejemplo: '<p>Un proyecto minero de oro a 10 años en las fuentes hídricas de Cuenca, Ecuador. La objeción de la comunidad resumía el principio entero: <strong>no era una mina de oro, era una mina de agua</strong>.</p><p class="mal">Diez años de ingresos contra siglos sin agua potable. Por retorno de la inversión el proyecto podía ser excelente; por sostenibilidad, inaceptable.</p>',
              momentos: [{ t: 0, txt: 'Qué significa integrar la sostenibilidad' }, { t: 84, txt: 'No comprometer a las generaciones futuras' }, { t: 216, txt: 'La pirámide: compensar, minimizar, restaurar, evitar' }, { t: 288, txt: 'Extiende el horizonte del proyecto' }, { t: 385, txt: 'Amplía el alcance y sube el costo' }],
              eco: ['negocio:1', 'procesos:2']
            },
            {
              id: 'mc-11', nombre: 'Clase 11 · Principio 6: cultura empoderada',
              video: 'fae61eLA3Sg', duracion: '11 min',
              idea: 'El último principio, y el que cierra la sección del estándar. Empoderar no es solo dejar decidir al equipo: es construir un ambiente donde equipo e interesados colaboran y todos se sienten dueños del éxito.',
              apuntes: '<p><strong>Cuatro condiciones para que un proyecto funcione bien:</strong></p><p>· <strong>Confianza mutua</strong> entre equipo e interesados, en ambas direcciones.<br>· <strong>Claridad</strong> de roles y responsabilidades — los propios y los de los demás.<br>· <strong>Colaboración</strong> entre equipo, patrocinador e interesados, que reduce desperdicio.<br>· <strong>Maximizar el valor</strong> — cuando el equipo entiende <em>por qué</em> importa el proyecto, no solo qué entregar.</p><p><strong>Tres impactos:</strong> colaboración hacia objetivos compartidos; un equipo con propiedad y autosuficiente, que al decidir se siente parte del éxito <em>y del fracaso</em>; y aprovechamiento de la diversidad — equipos en varios países, culturas y perspectivas distintas, que enriquecen si se integran en vez de aislarse.</p><p><strong>Cierre de la sección:</strong> los seis principios son de importancia similar y se complementan. Ninguno pesa más que otro; la sostenibilidad tanto como el enfoque en el valor.</p>',
              ejemplo: '<p>Sobre por qué cuesta tanto: cuanto más grande es la organización, más difícil es lograr esa cultura en toda ella. La recomendación es concreta — <strong>constrúyela dentro de tu equipo de proyecto</strong> aunque la empresa no la tenga, dando oportunidades reales para que las personas participen y decidan.</p><p>Y sobre diversidad: si tu proyecto tiene usuarios en varios países, tener personas de esos países no es un gesto — es la única forma de entender lo que esos usuarios necesitan.</p>',
              momentos: [{ t: 0, txt: 'Qué es una cultura empoderada' }, { t: 95, txt: 'Crear el ambiente de trabajo' }, { t: 143, txt: 'Cuándo funcionan mejor los proyectos: las cuatro condiciones' }, { t: 190, txt: 'Claridad de roles' }, { t: 239, txt: 'Colaboración y reducción de desperdicio' }, { t: 288, txt: 'Maximizar el valor' }, { t: 385, txt: 'Propiedad compartida del éxito y del fracaso' }, { t: 432, txt: 'Aprovechar la diversidad' }, { t: 577, txt: 'Los seis principios se complementan' }],
              eco: ['personas:2', 'personas:0']
            },
          ]
        },
        {
          id: 'mc-s3',
          nombre: 'Estándar · Ciclo de vida y áreas de foco',
          intro: 'Fases, enfoques de desarrollo, cadencia de entrega y las cinco áreas de foco — el elemento nuevo que sustituye a los grupos de procesos del PMBOK 6.',
          temas: [
            {
              id: 'mc-12', nombre: 'Clase 12 · Ciclo de vida y enfoques de desarrollo',
              video: '6jUTIty4bUU', duracion: '17 min',
              idea: 'Fases, tipos de fase y los tres enfoques de desarrollo. Trae la distinción que ordena todo el resto: la fase dice DÓNDE estás en el proyecto, el enfoque dice CÓMO haces el trabajo.',
              apuntes: '<p><strong>Ciclo de vida</strong> = la serie de fases que el proyecto atraviesa del inicio al cierre. La analogía es un libro: el ciclo de vida es el libro, cada fase un capítulo. Se divide en fases porque facilita planificar y gestionar.</p><p><strong>Tres tipos de fase:</strong> <em>secuenciales</em> (hay que terminar una para empezar la siguiente), <em>superpuestas</em> (dos a la vez durante un tramo) y <em>transicionales</em> — una fase dedicada a que el entregable de la anterior pueda usarse en la siguiente, con las dos personas conversando y trabajando juntas.</p><p><strong>Fase contra enfoque:</strong> la fase te dice dónde estás (diseño, construcción, pruebas); el enfoque de desarrollo es el medio para crear el producto. <strong>Cada fase puede tener su propio enfoque.</strong></p><p><strong>Predictivo</strong> — alcance fijo desde el inicio, planificación detallada, entrega única o incremental. Útil con inversión muy alta, con proyectos regulatorios, y cuando el costo del cambio es elevado.</p><p><strong>Adaptativo</strong> — alcance que evoluciona, incertidumbre alta, ciclos cortos de una a cuatro semanas con entregable al final de cada uno para ponerlo a prueba y aprender.</p><p><strong>Híbrido</strong> — una parte predictiva y otra adaptativa en el mismo proyecto. Equilibra control con agilidad. Y una precisión importante: <strong>agilidad no es velocidad, es capacidad de adaptarse al cambio</strong>.</p>',
              ejemplo: '<p>El mismo proyecto farmacéutico sirve para los tres enfoques:</p><p>· <strong>Predictivo</strong> — cumplir los requisitos regulatorios para vender una vacuna. Vas a la entidad reguladora y te da la lista completa desde el día uno.<br>· <strong>Adaptativo</strong> — desarrollar la vacuna en sí. Es prueba y error: no sabes qué requisitos técnicos vas a necesitar hasta que ensayas.<br>· <strong>Híbrido</strong> — ambas cosas son el mismo proyecto.</p><p>Sobre el <strong>costo del cambio</strong>: al inicio es bajo, al final muy alto. Por eso el control de cambios es fundamental en predictivo — un requisito que cambia tarde mueve presupuesto y cronograma.</p>',
              momentos: [{ t: 0, txt: 'Qué es el ciclo de vida: la analogía del libro' }, { t: 144, txt: 'Fases secuenciales y superpuestas' }, { t: 240, txt: 'Fases transicionales' }, { t: 338, txt: 'Fase contra enfoque de desarrollo' }, { t: 435, txt: 'Enfoque predictivo' }, { t: 627, txt: 'El costo del cambio y por qué existe el control de cambios' }, { t: 722, txt: 'Enfoque adaptativo' }, { t: 867, txt: 'Enfoque híbrido' }, { t: 915, txt: 'Agilidad no es velocidad' }],
              eco: ['procesos:0']
            },
            {
              id: 'mc-13', nombre: 'Clase 13 · Seleccionar el enfoque de desarrollo',
              video: 'taPc8QWdpUQ', duracion: '8 min',
              idea: 'Los factores concretos que deciden el enfoque, agrupados en tres categorías. Es la clase que convierte «¿ágil o predictivo?» en una decisión con criterios, no en una preferencia.',
              apuntes: '<p>Lo decide el director junto con el equipo, evaluando <strong>tres categorías</strong>:</p><p><strong>1 · El entregable.</strong> ¿Requisitos claros desde el inicio y alcance estable? Predictivo. ¿Entregable físico, difícil y caro de modificar? Predictivo. ¿Intangible, con requisitos que emergen y cambios baratos? Adaptativo.</p><p><strong>2 · El proyecto.</strong> ¿Hay fecha límite dura? Predictivo. ¿Los interesados participan solo en momentos fijos? Predictivo. ¿Necesitas retroalimentación constante o entregar valor cada pocas semanas? Adaptativo.</p><p><strong>3 · La organización.</strong> ¿Estructura jerárquica, informes frecuentes a la alta gerencia, cultura de control y liderazgo centralizado? Predictivo. ¿Flexibilidad, empoderamiento, líder de apoyo? Adaptativo.</p><p>Y una frase que conviene retener: <strong>ninguna de las dos estructuras es mejor</strong>. Nos ajustamos a la realidad de nuestra organización.</p>',
              ejemplo: '<p>El contraste que usa: un <strong>banco</strong> tiene muchas regulaciones que cumplir y una estructura de control; un <strong>startup</strong> puede permitirse ser mucho más flexible.</p><p>Imponer un enfoque adaptativo puro en el banco no lo vuelve ágil: lo pone en conflicto con su propia gobernanza. Y aplicar predictivo estricto en el startup le quita justo la ventaja que tiene.</p>',
              momentos: [{ t: 0, txt: 'Quién decide y con qué criterios' }, { t: 47, txt: 'Categoría 1: el entregable' }, { t: 94, txt: 'Estabilidad del alcance y entregables físicos' }, { t: 190, txt: 'Entregables intangibles y cambios baratos' }, { t: 237, txt: 'Categoría 2: el proyecto' }, { t: 285, txt: 'Participación de los interesados' }, { t: 334, txt: 'Categoría 3: la organización' }, { t: 382, txt: 'Cultura de control contra flexibilidad' }, { t: 431, txt: 'Banco contra startup' }],
              eco: ['procesos:0']
            },
            {
              id: 'mc-14', nombre: 'Clase 14 · Cadencia de entrega',
              video: 'QBrXiZ3_4fQ', duracion: '5 min',
              idea: 'El ritmo con el que el proyecto entrega resultados. Es corta pero define cuatro cadencias que se confunden a menudo, y muestra que la cadencia se deriva del enfoque, no al revés.',
              apuntes: '<p><strong>Las cuatro cadencias:</strong></p><p>· <strong>Entrega única</strong> — todo al final del proyecto. Típica del predictivo.<br>· <strong>Entregas múltiples</strong> — una al terminar cada fase, secuenciales o en paralelo. También predictivo.<br>· <strong>Entregas periódicas</strong> — cada iteración de duración fija produce un incremento que el cliente revisa y comenta. Adaptativo.<br>· <strong>Entrega continua</strong> — el trabajo fluye y se entrega cuando está listo, sin fecha. Marcos de flujo continuo.</p><p>La cadencia <strong>se deriva del enfoque de desarrollo</strong> que ya elegiste y de las necesidades del cliente. No es una decisión independiente.</p>',
              ejemplo: '<p>La diferencia entre periódica y continua es sutil y cae en examen. En la <strong>periódica</strong> el ritmo lo marca el calendario: cada dos semanas hay entrega, tenga el tamaño que tenga.</p><p>En la <strong>continua</strong> el ritmo lo marca el trabajo: entra un requerimiento, se desarrolla, se prueba, se entrega. Se termina y se entrega, sin esperar a una fecha.</p>',
              momentos: [{ t: 0, txt: 'Qué es la cadencia de entrega' }, { t: 95, txt: 'Entrega única' }, { t: 143, txt: 'Entregas múltiples, secuenciales y en paralelo' }, { t: 190, txt: 'Entregas periódicas por iteración' }, { t: 238, txt: 'Entrega continua' }],
              eco: ['procesos:0', 'procesos:2']
            },
            {
              id: 'mc-15', nombre: 'Clase 15 · Áreas de foco',
              video: 'LSRV4mvrcso', duracion: '13 min',
              idea: 'Elemento NUEVO del PMBOK 8 y evolución de los grupos de procesos del PMBOK 6. Son cinco y agrupan todas las acciones del proyecto: procesos formales, prácticas informales, políticas y procedimientos.',
              apuntes: '<p>Las cinco: <strong>inicio, planificación, ejecución, monitoreo y control, y cierre</strong>. El inicio autoriza formalmente; la planificación define el curso de acción; la ejecución produce entregables; el monitoreo compara lo ejecutado con lo planificado; el cierre finaliza formalmente.</p><p><strong>Área de foco no es fase.</strong> Las áreas de foco son cinco siempre y están en todos los proyectos. Las fases las define cada proyecto. Es el error clásico.</p><p><strong>No son una secuencia.</strong> El monitoreo y control solapa todo el proyecto; planificación y ejecución trabajan en ciclo — un cambio en ejecución vuelve a planificación y de ahí otra vez a ejecución.</p><p><strong>Antes del inicio hay algo:</strong> el patrocinador identifica un problema, oportunidad, necesidad o regulación; se evalúan iniciativas y sale el <strong>caso de negocio</strong>, que es la entrada del inicio. Por eso el beneficio de iniciar formalmente es asegurar que el proyecto se hace por las razones correctas.</p><p><strong>Al cerrar salen dos cosas:</strong> los entregables y toda la información generada, que pasa a ser activo de los procesos de la organización.</p><p class="mal">Aquí se anuncia que la guía desarrolla <strong>40 procesos</strong> repartidos en estas cinco áreas.</p>',
              ejemplo: '<p><strong>Curvas de esfuerzo.</strong> En predictivo el esfuerzo es bajo al inicio, muy alto en planificación y ejecución, y bajo en el cierre — incluso menor que el inicio.</p><p class="bien">En adaptativo es <strong>constante</strong>: cada iteración lleva su planificación, ejecución y control con un esfuerzo parecido, de principio a fin.</p><p>Esa diferencia explica por qué en predictivo se concentra tanta gente en la fase de planificación y en adaptativo el equipo se mantiene estable durante todo el proyecto.</p>',
              momentos: [{ t: 0, txt: 'Qué son las áreas de foco y por qué son nuevas' }, { t: 47, txt: 'Las cinco, una por una' }, { t: 146, txt: 'De dónde viene el proyecto: patrocinador y caso de negocio' }, { t: 287, txt: 'El beneficio de iniciar formalmente' }, { t: 432, txt: 'Por qué no son una secuencia' }, { t: 480, txt: 'Área de foco no es fase' }, { t: 576, txt: 'Curva de esfuerzo en predictivo' }, { t: 663, txt: 'Curva de esfuerzo en adaptativo' }],
              eco: ['negocio:0', 'procesos:0', 'procesos:9']
            },
          ]
        },
        {
          id: 'mc-s4',
          nombre: 'Guía · Dominios y los 40 procesos',
          intro: 'La segunda mitad del libro. Los siete dominios de desempeño y el recorrido por los procesos, área de foco por área de foco. Aquí es donde se ve que los procesos volvieron.',
          temas: [
            {
              id: 'mc-16', nombre: 'Clase 16 · Del estándar a la guía',
              video: 'd4rj2E33Ato', duracion: '4 min',
              idea: 'La clase bisagra del curso: cierra el estándar y abre la guía. En cuatro minutos deja fijada toda la arquitectura del PMBOK 8, y sirve como repaso rápido si te pierdes.',
              apuntes: '<p>El PMBOK 8, como sus predecesores, son dos libros en uno: el <strong>estándar</strong> (principios y mentalidad) y la <strong>guía</strong> (buenas prácticas, técnicas y procesos). La guía toma los principios y los vuelve accionables.</p><p><strong>La cadena completa, que conviene memorizar así:</strong></p><p><strong>Mentalidad</strong> (propiedad · proactivo · impulsado por el valor)<br>→ se expresa en <strong>6 principios</strong> (visión holística · enfoque en el valor · incorporar la calidad · líder responsable · integrar la sostenibilidad · construir una cultura empoderada)<br>→ se hacen realidad en <strong>7 dominios de desempeño</strong> (gobernanza · alcance · cronograma · finanzas · interesados · recursos · riesgos).</p><p>Aquí el profesor enumera los seis principios de corrido y coincide con las clases 5 y 8 a 11 — lo que confirma que el reparto de la clase 18 fue un desliz.</p>',
              ejemplo: '<p>Sirve como prueba de memoria: si puedes recitar mentalidad → principios → dominios sin mirar, tienes el esqueleto del PMBOK 8 completo.</p><p>Y si solo recuerdas una relación, que sea esta: <strong>los principios dicen qué creer y los dominios qué hacer</strong>. El estándar es corto porque fija criterios; la guía es larga porque enseña el oficio.</p>',
              momentos: [{ t: 0, txt: 'Estándar y guía: dos libros en uno' }, { t: 49, txt: 'La guía hace accionables los principios' }, { t: 96, txt: 'La mentalidad y sus tres elementos' }, { t: 144, txt: 'Los seis principios enumerados' }, { t: 168, txt: 'Los siete dominios de desempeño' }],
              eco: ['procesos:0']
            },
            {
              id: 'mc-17', nombre: 'Clase 17 · Los siete dominios de desempeño',
              video: 'd-rgMPQqgzM', duracion: '11 min',
              idea: 'Los siete dominios uno a uno, con el objetivo de cada uno. Es la clase de referencia para saber en qué dominio vive cada proceso, y nada tiene que ver con los ocho dominios del PMBOK 7.',
              apuntes: '<p>· <strong>Gobernanza</strong> — parecido a lo que era el área de <em>integración</em> en el PMBOK 5 y 6. Establece los procesos para decidir. Es una guía adaptable: más estructura en predictivo, menos en adaptativo. Sirve para optimizar la entrega de valor, controlar cambios y alinear con los objetivos estratégicos.</p><p>· <strong>Alcance</strong> — define qué hace el proyecto y qué no. Y una frase muy del PMBOK 8: <strong>solo se hace lo que genera valor</strong>. Establece requisitos y criterios de aceptación.</p><p>· <strong>Cronograma</strong> — cuándo estará listo, cuándo se entrega valor. Sirve sobre todo para gestionar las expectativas de tiempo de los interesados.</p><p>· <strong>Finanzas</strong> — no solo costos: también la <strong>inversión</strong> y su rentabilidad. Busca mantener la viabilidad económica del proyecto.</p><p>· <strong>Interesados</strong> — identificar y planificar su involucramiento efectivo, y gestionar expectativas, para asegurar la aceptación final.</p><p>· <strong>Recursos</strong> — humanos y físicos. Incluye <strong>la gestión del equipo</strong> y la construcción de equipos de alto desempeño.</p><p>· <strong>Riesgos</strong> — gestionar la incertidumbre. Los riesgos positivos son oportunidades a maximizar; los negativos, amenazas cuyo impacto se reduce.</p>',
              ejemplo: '<p>El detalle que más ordena el estudio: <strong>la gestión del equipo vive en el dominio de recursos</strong>, no en uno propio de «equipo» como en el PMBOK 7.</p><p>Y el que más sorprende viniendo del 6: <strong>gobernanza ocupa el lugar de integración</strong>. Si buscas dónde cayó el control integrado de cambios, está ahí.</p>',
              momentos: [{ t: 0, txt: 'Qué son y para qué sirven los dominios' }, { t: 97, txt: 'Gobernanza: el heredero de integración' }, { t: 194, txt: 'Alcance: solo se hace lo que genera valor' }, { t: 242, txt: 'Cronograma y expectativas de tiempo' }, { t: 290, txt: 'Finanzas: costo e inversión' }, { t: 340, txt: 'Interesados y aceptación' }, { t: 483, txt: 'Recursos: humanos, físicos y el equipo' }, { t: 580, txt: 'Riesgos: amenazas y oportunidades' }],
              eco: ['negocio:0', 'procesos:1', 'procesos:7', 'procesos:5', 'personas:3', 'procesos:3', 'negocio:4']
            },
            {
              id: 'mc-18', nombre: 'Clase 18 · Introducción a los procesos e inicio',
              video: 'rumO8A3qqro', duracion: '20 min',
              idea: 'El cambio estructural más grande del PMBOK 8: los procesos vuelven. Son 40, con entradas, herramientas y salidas, organizados por dominio y repartidos entre las cinco áreas de foco. Además desarrolla los dos procesos del inicio.',
              apuntes: '<p><strong>El diagrama completo tiene tres capas:</strong> la mentalidad con sus tres dimensiones y seis principios, que rodea todo; los siete dominios de desempeño; y dentro de ellos, los procesos.</p><p class="mal">Aquí el profesor reparte los principios entre dimensiones de forma distinta a las clases 5, 8 a 11 y 16 — sitúa al líder en proactivo y la calidad en propiedad. Toma como buena la versión mayoritaria y verifica contra la guía.</p><p><strong>Cada dominio aporta procesos a las áreas de foco donde rinden mejor.</strong> Gobernanza tiene procesos en las cinco; alcance solo en planificación y en monitoreo y control.</p><p><strong>Vuelve el ITTO</strong> — entradas, herramientas y salidas. El área de <em>inicio</em> tiene solo dos procesos, y trabajan a la par alimentándose mutuamente:</p><p>· <strong>Iniciar el proyecto o fase</strong> (gobernanza) — entran el caso de negocio y el plan de gestión de beneficios; salen el <strong>acta de constitución</strong> y el <strong>registro de supuestos</strong>.<br>· <strong>Identificar a los interesados</strong> (interesados) — sale el <strong>registro de interesados</strong>.</p><p>Advertencia útil: <strong>identificar interesados no se hace solo al inicio</strong>, se repite durante todo el proyecto. Por eso entre sus entradas figuran planes que al principio aún no existen.</p>',
              ejemplo: '<p>Sobre el <strong>plan de gestión de beneficios</strong>: los beneficios de construir un hospital no aparecen cuando se termina el hospital, sino cuando empieza a atender a la comunidad.</p><p class="bien">Es decir, <strong>los beneficios arrancan después de que el proyecto cierra</strong>. Por eso el plan de beneficios es un documento distinto del caso de negocio y se necesita desde el inicio.</p><p>Sobre el <strong>registro de supuestos</strong>: en una construcción, un supuesto puede ser que las políticas del país no cambien. Si cambia, ese supuesto roto se convierte en riesgo.</p>',
              momentos: [{ t: 0, txt: 'El regreso de los procesos: son 40' }, { t: 145, txt: 'La mentalidad y sus tres dimensiones' }, { t: 389, txt: 'Los siete dominios de desempeño' }, { t: 486, txt: 'Finanzas: costo e inversión' }, { t: 681, txt: 'Cómo se reparten los procesos entre áreas de foco' }, { t: 729, txt: 'Proceso 1: iniciar el proyecto o fase' }, { t: 780, txt: 'Entradas, herramientas y salidas' }, { t: 813, txt: 'Caso de negocio y plan de gestión de beneficios' }, { t: 900, txt: 'Acta de constitución y registro de supuestos' }, { t: 996, txt: 'Proceso 2: identificar a los interesados' }, { t: 1069, txt: 'Por qué identificar interesados es continuo' }],
              eco: ['negocio:0', 'personas:3', 'procesos:0']
            },
            {
              id: 'mc-19', nombre: 'Clase 19 · Procesos de planificación: gobernanza y alcance',
              video: 'mq16sBN_99I', duracion: '15 min',
              idea: 'Arranca la planificación. Muestra que todo empieza por gobernanza y sigue por alcance, y desarrolla los cuatro procesos del alcance en el orden en que se encadenan.',
              apuntes: '<p><strong>Gobernanza primero</strong>, con dos procesos en planificación:</p><p>· <strong>Integrar y alinear los planes</strong> → produce el plan para la dirección del proyecto.<br>· <strong>Planificar la estrategia de abastecimiento</strong> → produce el plan estratégico de abastecimiento, que define qué se hace dentro y qué se contrata fuera. <strong>Cambio del PMBOK 8:</strong> las adquisiciones ya no son un área propia — pasan a gobernanza.</p><p><strong>Después el alcance, con cuatro procesos encadenados:</strong></p><p><strong>1 · Planificar el alcance</strong> → el <em>cómo</em>: plan de gestión del alcance y plan de gestión de requisitos.<br><strong>2 · Elicitar y analizar los requisitos</strong> → el <em>qué</em>. «Elicitar» viene del análisis de negocios y significa <em>descubrir</em> requisitos, incluso los que están escondidos. Sale la documentación de requisitos.<br><strong>3 · Definir el alcance</strong> → cuáles de esos requisitos se harán y cuáles no, porque los recursos son limitados. Sale el <strong>enunciado del alcance</strong>.<br><strong>4 · Definir la estructura del alcance</strong> → sale la <strong>línea base del alcance</strong>: enunciado + EDT + diccionario de la EDT; o historias de usuario en una lista de trabajo pendiente si es ágil.</p>',
              ejemplo: '<p>El <strong>enunciado del alcance</strong> se comporta distinto según el enfoque, y esto cae en examen:</p><p>· En <strong>predictivo</strong> está escrito en piedra: para cambiarlo hace falta pasar por control de cambios.<br>· En <strong>ágil</strong> recoge el acuerdo de las primeras iteraciones y el dueño de producto lo va refinando. <strong>No hacen falta solicitudes de cambio.</strong></p><p class="bien">Regla mnemotécnica de toda esta sección: <em>cuando veas la palabra «plan», se está definiendo el CÓMO</em>. El qué viene después.</p>',
              momentos: [{ t: 0, txt: 'Por qué la planificación empieza por gobernanza' }, { t: 60, txt: 'Integrar y alinear los planes del proyecto' }, { t: 190, txt: 'Planificar la estrategia de abastecimiento' }, { t: 239, txt: 'Las adquisiciones pasan a gobernanza' }, { t: 336, txt: 'Los cuatro procesos del alcance' }, { t: 386, txt: 'Planificar el alcance: el cómo' }, { t: 466, txt: 'Elicitar: descubrir los requisitos' }, { t: 622, txt: 'Definir el alcance: qué sí y qué no' }, { t: 716, txt: 'El enunciado del alcance' }, { t: 765, txt: 'Predictivo contra ágil' }, { t: 813, txt: 'Definir la estructura: EDT y línea base' }],
              eco: ['negocio:0', 'procesos:4', 'procesos:1']
            },
            {
              id: 'mc-20', nombre: 'Clase 20 · Procesos de cronograma, finanzas y recursos',
              video: 'Q_5sAVQLeJM', duracion: '22 min',
              idea: 'La clase más larga del curso. Desarrolla tres dominios a la vez, y esa es justamente la lección: cronograma, finanzas y recursos se planifican en paralelo porque se necesitan mutuamente.',
              apuntes: '<p><strong>Cronograma — dos procesos:</strong> planificar la gestión del cronograma (el cómo) y desarrollar el cronograma, que produce el cronograma y su <strong>línea base</strong>, más lista de actividades, atributos, hitos, diagrama de red, estimaciones de duración y requerimientos de recursos.</p><p><strong>Finanzas — tres procesos:</strong> planificar la gestión financiera (sale el plan y una <em>estrategia de financiación</em>); estimar los costos (salen las estimaciones y sus bases); y desarrollar el presupuesto, que produce la <strong>línea base de costos</strong> y los requisitos financieros.</p><p><strong>Recursos — dos procesos:</strong> desarrollar el plan de recursos, que además del plan produce el <strong>acta de constitución del equipo</strong> —las reglas básicas de convivencia, acordadas al formarse el equipo—; y estimar los recursos, que produce requerimientos, bases y estructura de desglose de recursos.</p><p><strong>Por qué van juntos:</strong> el cronograma dice cuánto dura cada actividad; los recursos dicen quién y con qué la hace; las finanzas dicen cuánto cuesta eso. Cambiar uno mueve los otros dos. Y los tres dependen del alcance, que se define primero.</p><p>Sobre las <strong>líneas base</strong>: alcance, cronograma y costos. Las tres nacen de un acuerdo y <strong>no las aprueba el director sino los patrocinadores</strong>.</p>',
              ejemplo: '<p>El encadenamiento concreto: si una actividad dura 10 días, necesitas recursos durante 10 días, y esos recursos cuestan dinero. Por eso el <strong>cronograma es entrada para estimar los costos</strong>.</p><p class="bien">No es igual hacer una actividad con 10 personas que con dos equipos de dos personas más maquinaria especializada: cambia el cronograma <em>y</em> cambia el costo.</p><p>Herramientas de estimación que menciona: análoga, paramétrica, ascendente y multipunto, más análisis de datos y <strong>votación</strong> para llegar a consenso sobre si una estimación es correcta.</p>',
              momentos: [{ t: 0, txt: 'La gobernanza se relaciona con todos los procesos' }, { t: 60, txt: 'Cronograma: plan y desarrollo' }, { t: 193, txt: 'La línea base del cronograma y quién la aprueba' }, { t: 291, txt: 'Lista de actividades y demás salidas' }, { t: 435, txt: 'Por qué cronograma, finanzas y recursos van a la par' }, { t: 492, txt: 'Finanzas: el plan y la estrategia de financiación' }, { t: 627, txt: 'Estimar los costos' }, { t: 676, txt: 'El cronograma como entrada de los costos' }, { t: 818, txt: 'Herramientas de estimación y votación' }, { t: 865, txt: 'Desarrollar el presupuesto y la línea base de costos' }, { t: 962, txt: 'Recursos: el plan y el acta de constitución del equipo' }, { t: 1153, txt: 'Estimar los recursos' }],
              eco: ['procesos:7', 'procesos:5', 'procesos:3']
            },
            {
              id: 'mc-21', nombre: 'Clase 21 · Procesos de riesgo e interesados',
              video: 'JJLSuE9HTN8', duracion: '18 min',
              idea: 'Cierra la planificación con los dos dominios que aparecen en todos los demás procesos. Cuatro procesos de riesgo y dos de interesados, con una relación entre involucramiento y comunicación que conviene tener clara.',
              apuntes: '<p><strong>Riesgos — cuatro procesos en planificación:</strong></p><p><strong>1 · Planificar la gestión de riesgos</strong> → el cómo: cómo identificar, analizar y responder.<br><strong>2 · Identificar los riesgos</strong> → salen el <strong>registro de riesgos</strong> y el <strong>informe de riesgos</strong>. Se alimenta de prácticamente todos los planes y documentos del proyecto.<br><strong>3 · Analizar los riesgos</strong> → prioriza por probabilidad e impacto; actualiza el registro con la prioridad.<br><strong>4 · Planificar la respuesta</strong> → un plan de acción por si el riesgo aparece. Puede generar solicitudes de cambio y actualizar casi cualquier plan.</p><p><strong>Interesados — dos procesos:</strong> planificar el involucramiento (sale el plan de involucramiento) y planificar las comunicaciones (sale el plan de gestión de las comunicaciones).</p><p><strong>La relación entre ambos:</strong> el involucramiento define <em>qué</em> participación buscas; la comunicación es <em>cómo</em> se hace realidad. Van siempre juntos — si cambia uno, cambia el otro.</p><p>Herramientas de identificación que menciona, además de las clásicas: listas rápidas por categoría, análisis PESTLE de factores externos y — novedad — <strong>inteligencia artificial</strong> para revisar cronograma, presupuesto, restricciones y supuestos y proponer riesgos.</p>',
              ejemplo: '<p>La frase más útil de la clase: <strong>cuando un supuesto no se cumple, eso es un riesgo</strong>. Por eso el registro de supuestos es entrada para identificar riesgos.</p><p>Y el orden que hay que respetar: los interesados se <em>identifican</em> al inicio (clase 18) y aquí se planifica <em>cómo trabajar</em> con ellos. Primero sabes quiénes son, después decides qué hacer con cada uno.</p>',
              momentos: [{ t: 0, txt: 'Riesgos e interesados: los dos que aparecen en todo' }, { t: 49, txt: 'Plan de la gestión de riesgos: el cómo' }, { t: 193, txt: 'Identificar los riesgos' }, { t: 240, txt: 'Un supuesto incumplido es un riesgo' }, { t: 288, txt: 'Registro e informe de riesgos' }, { t: 336, txt: 'Herramientas: PESTLE, listas rápidas e IA' }, { t: 432, txt: 'Analizar los riesgos y priorizar' }, { t: 481, txt: 'Las tres líneas base y quién las aprueba' }, { t: 627, txt: 'Planificar la respuesta a los riesgos' }, { t: 768, txt: 'Plan de involucramiento de interesados' }, { t: 912, txt: 'Involucramiento y comunicación van de la mano' }],
              eco: ['negocio:4', 'personas:3', 'personas:7']
            },
            {
              id: 'mc-22', nombre: 'Clase 22 · Procesos de ejecución',
              video: '9z6dOzUBogA', duracion: '22 min',
              idea: 'El área de foco donde se hace el trabajo. Ocho procesos repartidos en cuatro dominios, y uno de ellos es completamente nuevo: liderar el equipo pasa a ser un proceso formal.',
              apuntes: '<p><strong>Tres cosas definen la ejecución:</strong> liderar y motivar al equipo, sostener un alto desempeño, y recopilar el conocimiento que se genera para que no se pierda.</p><p><strong>Gobernanza — tres procesos:</strong></p><p>· <strong>Gestionar la ejecución</strong> — implementa los cambios aprobados. Salen los <strong>entregables</strong> y los <strong>datos de desempeño</strong>, que se analizarán en monitoreo y control.<br>· <strong>Aseguramiento de la calidad</strong> — la calidad aparece dentro de gobernanza, no como dominio propio.<br>· <strong>Gestionar el conocimiento</strong> — salen lecciones aprendidas y actualización de los activos de la organización.</p><p><strong>Recursos — dos procesos:</strong> adquirir los recursos (humanos, físicos y virtuales) y <strong>liderar el equipo</strong>. Este último es <strong>un proceso nuevo</strong>: liderar dejó de ser una habilidad implícita y pasó a ser un proceso con entradas y salidas, entre ellas las evaluaciones del equipo.</p><p><strong>Riesgos — un proceso:</strong> implementar la respuesta a los riesgos. En planificación hiciste planes; aquí los ejecutas.</p><p><strong>Interesados — dos procesos:</strong> gestionar el involucramiento y gestionar las comunicaciones. La distinción clave: <strong>planificar es definir, gestionar es hacer</strong>.</p>',
              ejemplo: '<p>La frase que más ordena esta clase: <strong>un riesgo que se hizo realidad ya no es un riesgo, es un incidente</strong>, y por eso pasa al registro de incidentes.</p><p>Sobre el <strong>acta de constitución del equipo</strong>: son las reglas de convivencia acordadas al formarse el equipo, y aquí puede actualizarse, porque mientras el equipo trabaja puede necesitar cambiar sus acuerdos iniciales.</p><p class="bien">Y sobre <strong>adquirir recursos</strong>, las habilidades que menciona no son técnicas: análisis multicriterio para seleccionar proveedores, negociación y resolución de problemas. Conseguir recursos es un trabajo de trato con personas.</p>',
              momentos: [{ t: 0, txt: 'Qué define la ejecución: liderazgo, desempeño y conocimiento' }, { t: 94, txt: 'Gestionar la ejecución del proyecto' }, { t: 241, txt: 'Los entregables y los datos de desempeño' }, { t: 289, txt: 'Aseguramiento de la calidad dentro de gobernanza' }, { t: 433, txt: 'Gestionar el conocimiento' }, { t: 527, txt: 'Adquirir los recursos' }, { t: 722, txt: 'Habilidades para conseguir recursos' }, { t: 770, txt: 'Liderar el equipo: un proceso nuevo' }, { t: 866, txt: 'El acta de constitución del equipo' }, { t: 914, txt: 'Implementar la respuesta a los riesgos' }, { t: 962, txt: 'Un riesgo que ocurre pasa a ser un incidente' }, { t: 1011, txt: 'Gestionar el involucramiento: planificar es definir, gestionar es hacer' }, { t: 1204, txt: 'Gestionar las comunicaciones' }],
              eco: ['negocio:2', 'procesos:6', 'personas:6', 'procesos:3', 'negocio:4', 'personas:3', 'personas:7']
            },
          ]
        },
      ]
    }
  ]
};


/**
 * Edición «ECO 2026», construida a partir de `js/eco.js` en tiempo de carga.
 *
 * No se escribe a mano: si el ECO cambia, este temario cambia con él y no puede
 * quedarse desfasado. Cada tema es una tarea del ECO y su contenido son los
 * facilitadores oficiales de PMI — no una interpretación.
 *
 * Es el temario que de verdad corresponde al examen. Las ediciones del PMBOK son
 * apoyo conceptual; esto es la especificación.
 */
(function construirEdicionEco() {
  if (typeof ECO === 'undefined') return;

  const INTROS = {
    personas: 'El lado humano: visión compartida, conflicto, liderazgo del equipo y ' +
      'relación con los interesados. En el examen se reconoce porque la respuesta correcta ' +
      'casi siempre pasa por hablar con alguien antes que por un documento.',
    procesos: 'La gestión técnica, de la planificación al cierre. Es el dominio más pesado ' +
      'y el que más se parece a lo que la gente espera de un examen de dirección de proyectos.',
    negocio: 'El dominio que más creció en 2026 — de 8 % a 26 %. Aquí viven ahora la ' +
      'gobernanza, el cumplimiento, el control de cambios, los impedimentos y el riesgo, ' +
      'que antes estaban repartidos entre los otros dos. Si estudias con material anterior, ' +
      'este es el hueco que traes.'
  };

  const edicion = {
    id: 'eco2026',
    nombre: 'ECO 2026',
    subtitulo: 'El esquema oficial del examen · julio de 2026',
    estado: 'disponible',
    oficial: true,
    resumen: 'Los tres dominios con sus 26 tareas, cada una explicada con un ejemplo. Los ' +
      'dominios, los pesos y los títulos de las tareas son del ECO oficial; la explicación es ' +
      'propia. Para el detalle textual de PMI, el PDF del ECO es gratuito en pmi.org.',
    grupos: ECO.dominios.map(function (d) {
      return {
        id: d.id,
        nombre: d.nombre + ' · ' + d.peso + ' % del examen',
        intro: INTROS[d.id] || '',
        temas: d.tareas.map(function (t, i) {
          const nota = (typeof ECO_NOTAS !== 'undefined') ? ECO_NOTAS[d.id + ':' + i] : null;
          return {
            id: 'eco-' + d.id + '-' + i,
            nombre: t,
            idea: nota ? nota.idea : '',
            ejemplo: nota ? '<p>' + nota.ejemplo + '</p>' : '',
            eco: [d.id + ':' + i]
          };
        })
      };
    })
  };

  TEMARIO.ediciones.unshift(edicion);
})();

/** Devuelve la edición por id, o null. */
TEMARIO.edicion = function (id) {
  return TEMARIO.ediciones.find(e => e.id === id) || null;
};

/** Todos los temas de una edición, aplanados. */
TEMARIO.temas = function (idEdicion) {
  const e = TEMARIO.edicion(idEdicion);
  if (!e) return [];
  return e.grupos.reduce((a, g) => a.concat(g.temas), []);
};

/**
 * Traduce 'dominio:índice' al nombre de la tarea del ECO cargado.
 * Devuelve null si el enlace está roto — cosa que las pruebas no perdonan.
 */
TEMARIO.tarea = function (ref) {
  const partes = String(ref).split(':');
  const d = ECO.dominio(partes[0]);
  const i = parseInt(partes[1], 10);
  if (!d || isNaN(i) || i < 0 || i >= d.tareas.length) return null;
  return { dominio: d.nombre, dominioId: d.id, tarea: d.tareas[i] };
};

if (typeof module !== 'undefined') module.exports = { TEMARIO: TEMARIO };
