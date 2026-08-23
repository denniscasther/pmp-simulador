/**
 * Notas propias sobre cada tarea del ECO PMI-CPMAI 2025.
 *
 * Texto original, no transcrito del PDF de PMI. Del ECO se conservan los títulos de
 * las tareas y los pesos —que son datos— en `js/cpmai-eco.js`; la explicación y los
 * ejemplos se escriben aquí. Misma regla que en `js/eco-notas.js`.
 *
 * Clave: 'dominio:índiceDeTarea'.
 */

const CPMAI_NOTAS = {

  // ── IA responsable y confiable · 15 % ─────────────────────────────────────
  'responsable:0': {
    idea: 'Gobernar los datos personales a lo largo de todo el ciclo de vida del modelo: quién accede, cómo se cifran, qué evaluación de impacto se hace antes de desplegar.',
    ejemplo: 'Los datos de entrenamiento suelen ser la copia más desprotegida que existe de la base de producción: salen del sistema con controles y acaban en la laptop de alguien.'
  },
  'responsable:1': {
    idea: 'Dejar rastro de por qué se eligió ese modelo, con qué datos se entrenó y qué se le hizo antes. La explicabilidad se define como requisito, no se descubre al final.',
    ejemplo: 'Si el negocio tiene obligación de motivar una decisión ante el cliente, un modelo inexplicable estaba descartado desde el diseño — no es algo que se parchee después.'
  },
  'responsable:2': {
    idea: 'Revisar datos, algoritmo y salidas buscando desequilibrios y trato dispar entre grupos, y aplicar mitigación durante el desarrollo.',
    ejemplo: 'Quitar la variable sensible no elimina el sesgo: otras actúan como sustitutas —el barrio, el colegio— y encima pierdes la capacidad de medir si existe.'
  },
  'responsable:3': {
    idea: 'Seguir la regulación de IA, que se mueve rápido, y coordinar con legal lo que afecta al proyecto. Incluye mantener la documentación que pedirá una auditoría.',
    ejemplo: 'Una norma que entra en vigor a mitad del proyecto no es un imprevisto: es un riesgo previsible que se vigila desde el inicio.'
  },
  'responsable:4': {
    idea: 'Que quede escrito quién respondió por cada decisión y por qué. Es lo que permite reconstruir el razonamiento meses después, cuando ya nadie recuerda.',
    ejemplo: 'La pregunta que hay que poder contestar: «¿por qué el sistema rechazó este caso en marzo?». Sin trazabilidad, la respuesta es un encogimiento de hombros.'
  },

  // ── Necesidades y soluciones del negocio · 26 % ───────────────────────────
  'negocio:0': {
    idea: 'Entender el problema real antes de proponer nada. Casi siempre lo que llega es una solución disfrazada de necesidad.',
    ejemplo: '«Queremos un chatbot» no es un problema. «Tardamos 40 minutos en responder una consulta y perdemos clientes» sí — y puede que no se resuelva con un chatbot.'
  },
  'negocio:1': {
    idea: 'Evaluar pronto si la solución es técnicamente posible y si existen datos con la calidad suficiente. Es la comprobación que evita meses de trabajo condenado.',
    ejemplo: 'Sin datos etiquetados y sin presupuesto para etiquetarlos, un proyecto de visión por computadora tiene viabilidad cero por mucho que el caso de negocio sea bueno.'
  },
  'negocio:2': {
    idea: 'Identificar cómo puede fallar el sistema y qué pasa cuando falla: modos de falla, implicaciones de seguridad y vulnerabilidades propias de la IA.',
    ejemplo: 'Los proyectos de IA traen riesgos que el software tradicional no tiene: envenenamiento de datos de entrenamiento, o un modelo que se degrada solo cuando la realidad cambia.'
  },
  'negocio:3': {
    idea: 'Fijar los límites: qué entra, qué no entra y qué se entrega. En IA el alcance se desdibuja más rápido que en cualquier otro proyecto.',
    ejemplo: 'Escribir lo que queda fuera importa más aquí: «no incluye reentrenamiento continuo» son cuatro palabras que definen si el proyecto termina o no termina nunca.'
  },
  'negocio:4': {
    idea: 'Cuantificar el beneficio esperado contra el costo total de propiedad, que en IA incluye infraestructura, reentrenamiento y mantenimiento — no solo el desarrollo.',
    ejemplo: 'El error habitual es calcular el retorno con el costo de construir el modelo y olvidar que hay que mantenerlo vivo, con datos frescos, todos los meses.'
  },
  'negocio:5': {
    idea: 'Anticipar la resistencia de los usuarios y la integración con lo que ya existe. Un modelo que nadie usa tiene beneficio cero, por bueno que sea.',
    ejemplo: 'Si la salida del modelo obliga al operario a abrir otra pantalla y copiar un dato a mano, no se va a usar. La integración decide la adopción.'
  },
  'negocio:6': {
    idea: 'Definir la arquitectura de alto nivel: flujo de datos, requisitos de procesamiento y qué tipo de modelo o enfoque algorítmico corresponde.',
    ejemplo: 'Aquí se decide si hace falta un modelo o si una regla de negocio bien escrita resuelve el 80 % del caso a una fracción del costo. Preguntarlo es parte del trabajo.'
  },
  'negocio:7': {
    idea: 'Establecer indicadores medibles y umbrales de éxito, tanto técnicos como de negocio. Es la tarea que más se falla en el examen y en la vida real.',
    ejemplo: 'Un criterio válido tiene contrapeso: «sube la resolución en el primer contacto sin que aumente el tiempo de espera». Uno solo se puede optimizar hasta romper algo.'
  },
  'negocio:8': {
    idea: 'Reunir los datos financieros y las proyecciones que sostienen el caso de negocio, junto al área de finanzas.',
    ejemplo: 'El caso de negocio de IA es más incierto que el de un proyecto tradicional: conviene presentar rangos y supuestos explícitos, no una cifra única con falsa precisión.'
  },
  'negocio:9': {
    idea: 'Determinar qué perfiles, hardware y proveedores hacen falta. Los proyectos de IA necesitan combinaciones de habilidades poco frecuentes.',
    ejemplo: 'Hace falta alguien que entienda el dominio del negocio, no solo quien entrene modelos. Sin ese perfil, el modelo resuelve con elegancia el problema equivocado.'
  },

  // ── Necesidades de datos · 26 % ───────────────────────────────────────────
  'datos:0': {
    idea: 'Especificar qué datos, en qué formato y en qué volumen necesita el modelo, antes de salir a buscarlos.',
    ejemplo: 'Definirlo primero evita el patrón más común: recopilar todo lo que hay «por si acaso» y descubrir tarde que falta justo la variable que importaba.'
  },
  'datos:1': {
    idea: 'Localizar a quien entiende esos datos. No al que administra la base: al que sabe qué significa cada campo y por qué hay huecos.',
    ejemplo: 'Solo la persona del área sabe que la columna quedó vacía tres meses porque cambiaron de proveedor. Sin ella, el modelo aprende ese hueco como si fuera información.'
  },
  'datos:2': {
    idea: 'Rastrear dónde viven los datos: bases internas, almacenes, y también proveedores externos si hace falta.',
    ejemplo: 'En una organización con el stack fragmentado, el mismo dato existe en tres sitios con tres valores distintos. Elegir cuál es la fuente de verdad es parte de esta tarea.'
  },
  'datos:3': {
    idea: 'Preparar el entorno donde se va a trabajar: capacidad de cómputo para procesar y entrenar, y que sea un entorno seguro.',
    ejemplo: 'Es la tarea que se salta cuando el equipo empieza a trabajar en laptops personales con una copia de la base de producción. Ahí ya hay un problema de cumplimiento.'
  },
  'datos:4': {
    idea: 'Ejecutar la extracción y coordinar las transferencias hacia el entorno de desarrollo.',
    ejemplo: 'Suele ser la fase que más tarda y la que peor se estima, porque depende de áreas que no te reportan y tienen sus propias prioridades.'
  },
  'datos:5': {
    idea: 'Comprobar derechos de uso, licencias y cumplimiento. Poder acceder técnicamente y tener derecho a usar son cosas distintas.',
    ejemplo: 'Los datos de un socio comercial pueden estar disponibles y aun así prohibidos para entrenar modelos. Se descubre en auditoría, con el sistema ya en producción.'
  },
  'datos:6': {
    idea: 'Evaluar exactitud, integridad y consistencia, y analizar las distribuciones buscando sesgos o brechas.',
    ejemplo: 'Antes de tratar un hueco hay que saber por qué existe: si falta al azar, descartar es razonable; si falta de forma sistemática, descartar introduce el sesgo en el modelo.'
  },
  'datos:7': {
    idea: 'Contrastar los datos que hay contra los que se especificaron. Es la primera decisión real de avance o detención del proyecto.',
    ejemplo: 'Decir «los datos no alcanzan» a tiempo cuesta una conversación incómoda. Decirlo tres meses después cuesta el proyecto entero y la credibilidad.'
  },
  'datos:8': {
    idea: 'Traducir lo que se encontró en los datos a un lenguaje que la dirección pueda usar para decidir, con visualizaciones y resúmenes.',
    ejemplo: 'Y se comunica con opciones, no solo con el problema: qué nivel es alcanzable hoy y qué haría falta para llegar al que esperaban.'
  },

  // ── Desarrollo y evaluación de modelos · 16 % ─────────────────────────────
  'modelos:0': {
    idea: 'Guiar la elección de algoritmo y de enfoque —supervisado, no supervisado y demás— según el caso de uso. Guiar, no programar.',
    ejemplo: 'El rol es asegurar que la elección se justifique contra el problema y las restricciones, incluida la de explicabilidad, no elegir el algoritmo personalmente.'
  },
  'modelos:1': {
    idea: 'Establecer los protocolos de prueba y el aseguramiento de calidad del modelo, incluida la gestión de configuración y versiones.',
    ejemplo: 'Sin control de versiones del modelo, un día nadie puede responder cuál está en producción ni con qué datos se entrenó. Y esa pregunta llega siempre.'
  },
  'modelos:2': {
    idea: 'Planificar los tiempos y los recursos del entrenamiento, que en IA pueden ser una parte grande del costo.',
    ejemplo: 'El entrenamiento no es una tarea de duración fija: es un ciclo de prueba y ajuste. Estimarlo como si fuera lineal es una de las causas típicas de desvío.'
  },
  'modelos:3': {
    idea: 'Supervisar la limpieza, el preprocesamiento y la creación de características. Es donde se va la mayor parte del esfuerzo real.',
    ejemplo: 'La regla que todo el mundo repite y casi nadie planifica: preparar los datos ocupa más tiempo que entrenar el modelo, muchas veces por goleada.'
  },
  'modelos:4': {
    idea: 'La decisión de avance o detención antes de entrenar: ¿la calidad de los datos alcanza? Si no, se vuelve a las fases de datos.',
    ejemplo: 'Es un punto de control formal, no un trámite. Pasarlo por presión de cronograma garantiza que el problema reaparezca más caro en la evaluación del modelo.'
  },
  'modelos:5': {
    idea: 'La segunda decisión de avance o detención: ¿el modelo cumple los criterios de éxito acordados? Se mide contra ellos, no contra su exactitud general.',
    ejemplo: 'Cumplir la media y fallar justo en el segmento que sostiene el caso de negocio es no cumplir. Ahí toca volver a datos, no negociar el alcance.'
  },

  // ── Operacionalizar la solución · 17 % ────────────────────────────────────
  'operacion:0': {
    idea: 'Elaborar la estrategia y el cronograma de despliegue, con los requisitos de infraestructura y la coordinación con TI.',
    ejemplo: 'El despliegue de un modelo toca sistemas que llevan años funcionando y áreas que no participaron del proyecto. Se planifica con ellas, no para ellas.'
  },
  'operacion:1': {
    idea: 'Ejecutar el despliegue coordinando a los equipos técnicos y resolviendo lo que aparezca durante la implementación.',
    ejemplo: 'Conviene desplegar en paralelo al proceso actual antes de reemplazarlo: comparar ambas salidas unas semanas revela problemas que ninguna prueba encontró.'
  },
  'operacion:2': {
    idea: 'Establecer cómo se gestiona el modelo a lo largo de su vida: versiones, cambios y quién autoriza reemplazarlo.',
    ejemplo: 'Un modelo no es un entregable terminado: envejece. La gobernanza define quién decide cuándo se reentrena y con qué criterio, antes de que haga falta.'
  },
  'operacion:3': {
    idea: 'Monitorear las métricas técnicas y las de negocio a la vez, con tableros que hagan visible la diferencia entre ambas.',
    ejemplo: 'Métricas técnicas sanas y beneficio ausente es el síntoma de dos cosas: el modelo resuelve el problema equivocado, o su salida no se está usando para decidir.'
  },
  'operacion:4': {
    idea: 'Documentar los resultados frente a los objetivos y registrar las lecciones aprendidas para los proyectos siguientes.',
    ejemplo: 'En IA la lección más valiosa suele ser qué datos resultaron inútiles y por qué. Eso le ahorra semanas al siguiente equipo, y casi nunca se escribe.'
  },
  'operacion:5': {
    idea: 'Planificar la entrega del sistema al equipo que lo va a operar, con la transferencia de conocimiento que eso exige.',
    ejemplo: 'Quien opere el modelo tiene que saber reconocer cuándo se degrada y qué hacer. Sin eso, el sistema sigue respondiendo — cada vez peor — y nadie lo nota.'
  },
  'operacion:6': {
    idea: 'Definir qué se hace cuando el sistema falla o entrega resultados anómalos, incluida la vuelta ordenada al proceso manual.',
    ejemplo: 'La contingencia responde a «¿qué hacemos si esto falla mañana?», y la respuesta debe permitir que el negocio siga operando, no solo restaurar un servidor.'
  }
};

if (typeof module !== 'undefined') module.exports = { CPMAI_NOTAS: CPMAI_NOTAS };
