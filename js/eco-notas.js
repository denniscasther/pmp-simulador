/**
 * Notas propias sobre cada tarea del ECO 2026.
 *
 * ⚠️ POR QUÉ EXISTE ESTE ARCHIVO.
 *
 * Antes el temario del ECO mostraba los «facilitadores» transcritos textualmente
 * del PDF de PMI. Para uso personal daba igual; al publicar el sitio, no: son
 * texto con copyright y el documento restringe su reproducción.
 *
 * La solución NO fue reescribir esa lista con otras palabras — eso habría sido el
 * mismo listado disfrazado. Se eliminó, y en su lugar hay una explicación propia
 * de qué abarca cada tarea, con un ejemplo. Para el detalle oficial, la interfaz
 * enlaza al PDF gratuito de PMI, que es donde debe consultarse.
 *
 * Lo que sí se conserva del ECO son DATOS, no prosa: los tres dominios, sus pesos
 * y los títulos de las 26 tareas. Eso vive en `js/eco.js`.
 *
 * Clave del objeto: 'dominio:índiceDeTarea', igual que en el resto del temario.
 */

const ECO_NOTAS = {

  // ── PERSONAS · 33 % ───────────────────────────────────────────────────────
  'personas:0': {
    idea: 'Que todos entiendan lo mismo por «éxito» antes de empezar a construir. Incluye mantener esa visión viva cuando el proyecto cambia, y desmenuzar las situaciones para encontrar la raíz de un malentendido en vez de discutir el síntoma.',
    ejemplo: 'Si para el patrocinador el proyecto es «reducir costos» y para el equipo es «modernizar la plataforma», ambos trabajarán duro en direcciones distintas durante meses. La visión compartida no es un póster en la pared: es lo que evita esa divergencia.'
  },
  'personas:1': {
    idea: 'Identificar de dónde nace el conflicto, leer su contexto y aplicar una estrategia acordada — no la que prefiera el director. Incluye establecer reglas básicas comunes y actuar cuando alguien las incumple.',
    ejemplo: 'Dos personas discuten de forma agria en cada revisión. Atacar la conducta no sirve si la causa es que nunca se acordó quién decide en empates técnicos. Se arregla fijando esa regla, no pidiendo cordialidad.'
  },
  'personas:2': {
    idea: 'Fijar expectativas, empoderar, resolver problemas y representar la voz del equipo hacia afuera. También elegir el estilo de liderazgo adecuado y dejar claros roles y responsabilidades.',
    ejemplo: 'Representar la voz del equipo es concreto: cuando la dirección pide comprimir el plazo, el director lleva lo que el equipo sabe sobre por qué no cabe, en vez de aceptar y trasladar la presión hacia abajo.'
  },
  'personas:3': {
    idea: 'Identificar quién afecta o se ve afectado, analizarlo, adaptar la comunicación a lo que cada uno necesita y ejecutar el plan de involucramiento. Incluye generar confianza para poder influir.',
    ejemplo: 'Un interesado que aparece en la semana 18 exigiendo algo que nadie previó no es mala suerte: es una identificación incompleta. Media hora al inicio habría costado menos que seis semanas de rediseño.'
  },
  'personas:4': {
    idea: 'Categorizar a los interesados, entender qué espera cada uno y facilitar las conversaciones que alinean expectativas incompatibles antes de que choquen. Aquí entra también la mentoría.',
    ejemplo: 'Operaciones quiere estabilidad y comercial quiere funcionalidades nuevas cada mes. Ninguno está equivocado. Alinear no es elegir un bando: es que ambos oigan al otro y acuerden una cadencia que los dos puedan sostener.'
  },
  'personas:5': {
    idea: 'Identificar qué esperan los clientes internos y externos, mantener los resultados alineados con esas expectativas, y monitorear la satisfacción para responder cuando se desvía.',
    ejemplo: 'La diferencia con «alinear» es el tiempo: alinear se hace antes, gestionar es sostenerlo durante todo el proyecto. Una expectativa acordada en enero puede haber cambiado en junio sin que nadie lo diga.'
  },
  'personas:6': {
    idea: 'Identificar qué conocimiento es crítico para el proyecto, recopilarlo y — lo más difícil — crear un entorno donde se transfiera. Cubre tanto lo documentable como lo que solo vive en la cabeza de alguien.',
    ejemplo: '«Cuando el sistema falla los martes suele ser el proceso de facturación» no está escrito en ningún manual. Ese conocimiento se transfiere trabajando en pareja o rotando, no con un repositorio.'
  },
  'personas:7': {
    idea: 'Definir una estrategia de comunicación, promover transparencia y colaboración, establecer un ciclo de retroalimentación y producir informes alineados con lo que patrocinador e interesados necesitan.',
    ejemplo: 'Casi todo lo que se reporta como «problema de comunicación» es en realidad una expectativa que nadie acordó: quién debía enterarse de qué, cuándo y por qué medio.'
  },

  // ── PROCESO · 41 % ────────────────────────────────────────────────────────
  'procesos:0': {
    idea: 'Evaluar necesidades, complejidad y magnitud; recomendar el enfoque de desarrollo y la estrategia de ejecución; y construir y mantener un plan integrado. Incluye estimar esfuerzo y recursos y revisar los planes en busca de dependencias, huecos y valor de negocio que se haya caído.',
    ejemplo: 'Es la tarea donde se decide predictivo, adaptativo o híbrido — y donde se revisa esa decisión si el contexto cambia. Insistir en un enfoque que ya se demostró equivocado es lo que el examen penaliza.'
  },
  'procesos:1': {
    idea: 'Definir el alcance, conseguir que los interesados lo acuerden y desglosarlo en piezas manejables. Lo importante es el acuerdo: un alcance definido por el director en solitario no está definido.',
    ejemplo: 'Escribir lo que queda FUERA ahorra más discusiones que escribir lo que queda dentro. «No incluye la migración del histórico» son cinco palabras que evitan una reunión incómoda en la aceptación.'
  },
  'procesos:2': {
    idea: 'Identificar con los interesados qué componentes aportan valor, priorizar por valor y no por orden de llegada, buscar oportunidades de entregar de forma incremental y verificar que exista un sistema para medir los beneficios.',
    ejemplo: 'Entregar a tiempo un sistema que nadie usa es fracaso. Esta tarea es la que obliga a comprobar que el caso de negocio sigue en pie a mitad del proyecto, no solo al aprobarlo.'
  },
  'procesos:3': {
    idea: 'Definir qué recursos hacen falta según los requisitos, y después gestionar y optimizar su disponibilidad. Cubre personas, equipos y materiales.',
    ejemplo: 'Nivelar recursos casi siempre alarga el cronograma. Un plan que asigna a la misma persona a dos tareas al 100 % no es optimista: es inejecutable, y se descubre tarde.'
  },
  'procesos:4': {
    idea: 'Es la tarea más extensa del ECO. Cubre planificar y ejecutar las adquisiciones, elegir el tipo de contrato, definir la estrategia de negociación, seleccionar y evaluar proveedores, y comprobar que se cumplen los objetivos del acuerdo.',
    ejemplo: 'La regla que resume la mitad de sus preguntas: cuanto menos definido esté el alcance, menos conviene el precio fijo. Forzarlo sobre algo incierto no elimina el riesgo, lo encarece.'
  },
  'procesos:5': {
    idea: 'Analizar las necesidades financieras, cuantificar reservas de riesgo y contingencia, planificar el seguimiento del gasto y su reporte, anticipar problemas financieros futuros y administrar las reservas.',
    ejemplo: 'La distinción que más se confunde: la reserva de contingencia cubre riesgos identificados y la maneja el director; la de gestión cubre lo imprevisto, está fuera de la línea base y usarla requiere aprobación.'
  },
  'procesos:6': {
    idea: 'Recopilar los requisitos de calidad, planificar procesos y herramientas, ejecutar el plan, asegurar el cumplimiento normativo, gestionar el costo de la calidad y la sostenibilidad, y hacer revisiones continuas con mejora continua.',
    ejemplo: 'El mismo defecto cuesta una hora en la revisión de diseño, un día en pruebas internas y a veces el contrato si lo encuentra el cliente. Por eso recortar pruebas para recuperar plazo es una respuesta incorrecta.'
  },
  'procesos:7': {
    idea: 'Preparar el cronograma según el enfoque elegido, estimar tareas —hitos, dependencias, puntos de historia—, usar datos históricos y referencias, establecer la línea base, ejecutar el plan y analizar la variación. Incluye coordinar con otros proyectos y operaciones.',
    ejemplo: 'La línea base solo cambia por control de cambios aprobado. Moverla porque el proyecto se retrasó hace desaparecer la desviación del informe: has borrado el instrumento para que no marque.'
  },
  'procesos:8': {
    idea: 'Desarrollar métricas y conciliaciones, mantener los artefactos creados, revisados y accesibles, medir y comunicar el avance, y evaluar de forma continua si la gestión de esos artefactos sigue siendo eficaz.',
    ejemplo: 'La última parte es la que se olvida: cada artefacto que creas hay que mantenerlo. Un registro que nadie consulta consume tiempo y da la falsa sensación de que algo está bajo control.'
  },
  'procesos:9': {
    idea: 'Obtener la aprobación de los interesados para dar por terminado, definir los criterios de cierre, validar que la transición está lista —a operaciones o a la siguiente fase— y completar las actividades finales: lecciones aprendidas, retrospectivas, adquisiciones, finanzas y recursos.',
    ejemplo: 'Validar la preparación para la transición es lo que evita el patrón clásico: el proyecto cierra, el equipo se disuelve y el producto queda sin nadie que decida qué sigue.'
  },

  // ── ENTORNO DE NEGOCIO · 26 % ─────────────────────────────────────────────
  'negocio:0': {
    idea: 'Establecer estructura, reglas, procedimientos, informes, ética y políticas apoyándose en los activos de la organización. Definir las métricas de éxito y describir las vías y umbrales de escalamiento.',
    ejemplo: 'Sin umbrales escritos, cada desviación se vuelve una negociación política y el director acaba escalando de más —parece inseguro— o de menos —parece que oculta—.'
  },
  'negocio:1': {
    idea: 'Confirmar y clasificar los requisitos de cumplimiento —seguridad, salud, sostenibilidad, regulación—, determinar las amenazas al cumplimiento, analizar las consecuencias de incumplir, definir el enfoque para atenderlo y medir el grado de cumplimiento alcanzado.',
    ejemplo: 'El cumplimiento no se negocia, pero la vía sigue siendo evaluar impacto y pasar por control de cambios. Ni ignorar la norma ni ejecutar sin analizar qué cuesta.'
  },
  'negocio:2': {
    idea: 'Ejecutar el proceso de control de cambios, comunicar el estado de lo propuesto, implementar lo aprobado y actualizar la documentación para que refleje el cambio. En el ECO 2026 esta tarea se mudó aquí desde Proceso.',
    ejemplo: 'El último paso es el que más se salta: se aprueba el cambio, se implementa, y nadie actualiza los documentos. Seis meses después la documentación describe un proyecto que ya no existe.'
  },
  'negocio:3': {
    idea: 'Evaluar el impacto de los impedimentos, priorizarlos, aplicar una estrategia para eliminarlos o reducirlos y comprobar de forma continua que se están atendiendo. Incluye reconocer cuándo un riesgo dejó de serlo y ya es un incidente.',
    ejemplo: 'Un riesgo que ya ocurrió no se gestiona con el registro de riesgos: pasó a ser un incidente y se atiende ahora. Distinguirlos es pregunta frecuente.'
  },
  'negocio:4': {
    idea: 'Identificar, analizar, monitorear y controlar los riesgos; desarrollar y ejecutar el plan de gestión; mantener el registro; y comunicar el impacto de un riesgo sobre el proyecto. El ECO 2026 menciona expresamente la seguridad informática y la sostenibilidad como fuentes de riesgo.',
    ejemplo: 'Un registro creado en la semana 2 y sin tocar desde entonces no es gestión de riesgos: es un documento. Uno vivo tiene riesgos cerrados, otros nuevos y probabilidades reevaluadas tras cada hito.'
  },
  'negocio:5': {
    idea: 'Usar las lecciones aprendidas, mantener actualizados los procesos de mejora continua y devolver ese aprendizaje a los activos de la organización.',
    ejemplo: 'Una lección aprendida útil cambia algo. «Hay que comunicar mejor» no cambia nada; «compras tarda seis semanas, no tres — actualizamos la plantilla de planificación» ya es un activo de la organización.'
  },
  'negocio:6': {
    idea: 'Evaluar la cultura de la organización y el impacto que el cambio organizacional tiene sobre el proyecto, y determinar qué acciones hacen falta.',
    ejemplo: 'Adoptar prácticas que la cultura rechaza produce cumplimiento formal y ningún cambio real: retrospectivas donde todos dicen que fue bien. El formato es impecable y el aprendizaje, cero.'
  },
  'negocio:7': {
    idea: 'Vigilar los cambios del entorno externo —regulación, tecnología, geopolítica, mercado—, evaluar y priorizar su impacto sobre el alcance o el trabajo pendiente, y revisarlo de forma continua.',
    ejemplo: 'Si un competidor vuelve obsoleta una funcionalidad, el director no decide eliminarla ni la ignora: analiza el impacto sobre el caso de negocio y lleva opciones al patrocinador, que es quien decide.'
  }
};

if (typeof module !== 'undefined') module.exports = { ECO_NOTAS: ECO_NOTAS };
