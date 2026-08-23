/**
 * Conceptos de IA para el PMI-CPMAI — material de estudio propio.
 *
 * POR QUÉ EXISTE ESTE ARCHIVO
 *
 * El ECO dice QUÉ se evalúa, pero no enseña. Y no hay un libro de CPMAI que
 * comprar: PMI vende el curso de 21 horas y el ECO es un índice. Esta pestaña
 * cubre ese hueco con los conceptos que hay que entender para responder bien.
 *
 * Todo el texto y todos los diagramas son propios. Los conceptos —matriz de
 * confusión, deriva de modelo, fuga de datos, sesgo por variable sustituta— son
 * conocimiento profesional general, no material de nadie.
 *
 * ⚠️ Los nombres de las seis fases de CPMAI se contrastaron con las tareas del
 *    ECO, que mencionan expresamente «la fase de preparación» y la decisión de
 *    avance o detención «para su operacionalización». Aun así, confirma la
 *    terminología exacta contra el curso oficial cuando lo tomes.
 */

/* Paleta compartida con el resto del sitio, para que los diagramas vivan en el tema. */
const _AC = 'var(--acento)', _TX = 'var(--texto)', _TN = 'var(--tenue)',
      _BD = 'var(--borde)', _OK = 'var(--bien)', _NO = 'var(--mal)', _AL = 'var(--alerta)';

function _svg(alto, cuerpo, ancho) {
  return '<svg viewBox="0 0 ' + (ancho || 620) + ' ' + alto + '" role="img" '
       + 'xmlns="http://www.w3.org/2000/svg">' + cuerpo + '</svg>';
}
function _t(x, y, txt, color, tam, anchor, peso) {
  return '<text x="' + x + '" y="' + y + '" fill="' + (color || _TX) + '" font-size="' + (tam || 12)
       + '" text-anchor="' + (anchor || 'start') + '" font-weight="' + (peso || '400')
       + '" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">' + txt + '</text>';
}
function _r(x, y, w, h, borde, relleno, rad, grosor, guion) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rad || 8)
       + '" fill="' + (relleno || 'none') + '" stroke="' + (borde || _BD) + '" stroke-width="' + (grosor || 1)
       + '"' + (guion ? ' stroke-dasharray="' + guion + '"' : '') + '/>';
}
function _l(x1, y1, x2, y2, color, grosor, guion) {
  return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (color || _BD)
       + '" stroke-width="' + (grosor || 1) + '"' + (guion ? ' stroke-dasharray="' + guion + '"' : '') + '/>';
}
const _FLECHA = '<defs><marker id="fc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" '
  + 'orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="' + _TN + '"/></marker></defs>';


/* ── Diagramas ───────────────────────────────────────────────────────────── */

const _G_FASES = _svg(300,
  _FLECHA +
  _t(310, 20, 'Seis fases, y se recorren en iteraciones cortas — no una sola vez', _TN, 12, 'middle') +
  _r(20, 40, 176, 54, _AC) + _t(108, 62, '1 · Comprensión', _AC, 12, 'middle', '600') + _t(108, 80, 'del negocio', _AC, 11, 'middle') +
  _r(222, 40, 176, 54, _AC) + _t(310, 62, '2 · Comprensión', _AC, 12, 'middle', '600') + _t(310, 80, 'de los datos', _AC, 11, 'middle') +
  _r(424, 40, 176, 54, _AC) + _t(512, 62, '3 · Preparación', _AC, 12, 'middle', '600') + _t(512, 80, 'de los datos', _AC, 11, 'middle') +
  _r(424, 130, 176, 54, _OK) + _t(512, 152, '4 · Modelado', _OK, 12, 'middle', '600') + _t(512, 170, 'de datos', _OK, 11, 'middle') +
  _r(222, 130, 176, 54, _OK) + _t(310, 152, '5 · Evaluación', _OK, 12, 'middle', '600') + _t(310, 170, 'del modelo', _OK, 11, 'middle') +
  _r(20, 130, 176, 54, _OK) + _t(108, 152, '6 · Operacionalizar', _OK, 12, 'middle', '600') + _t(108, 170, 'el modelo', _OK, 11, 'middle') +
  _l(200, 67, 216, 67, _TN, 1.4) + _l(402, 67, 418, 67, _TN, 1.4) +
  _l(512, 98, 512, 124, _TN, 1.4) +
  _l(420, 157, 404, 157, _TN, 1.4) + _l(218, 157, 202, 157, _TN, 1.4) +
  '<path d="M108,188 C108,222 310,232 512,214" fill="none" stroke="' + _AL + '" stroke-width="1.4" stroke-dasharray="5 4" marker-end="url(#fc)"/>' +
  _t(310, 250, 'Cada iteración vuelve a empezar con lo aprendido', _AL, 11, 'middle') +
  _r(20, 264, 580, 26, _NO, 'none', 6, 1, '4 3') +
  _t(310, 282, 'Dos puntos de avance o detención: tras la fase 3 y antes de la 6', _NO, 11, 'middle'));

const _G_MATRIZ = _svg(250,
  _t(310, 18, 'Matriz de confusión', _TN, 12, 'middle', '600') +
  _t(150, 44, 'Predijo: SÍ', _TN, 11, 'middle') + _t(330, 44, 'Predijo: NO', _TN, 11, 'middle') +
  '<text x="42" y="90" fill="' + _TN + '" font-size="11" text-anchor="middle" transform="rotate(-90 42 90)">Real: SÍ</text>' +
  '<text x="42" y="170" fill="' + _TN + '" font-size="11" text-anchor="middle" transform="rotate(-90 42 170)">Real: NO</text>' +
  _r(60, 56, 180, 66, _OK) + _t(150, 84, 'Verdadero positivo', _OK, 11.5, 'middle', '600') + _t(150, 104, 'acertaste el caso', _TN, 10.5, 'middle') +
  _r(250, 56, 180, 66, _NO) + _t(340, 84, 'Falso negativo', _NO, 11.5, 'middle', '600') + _t(340, 104, 'se te escapó', _TN, 10.5, 'middle') +
  _r(60, 132, 180, 66, _NO) + _t(150, 160, 'Falso positivo', _NO, 11.5, 'middle', '600') + _t(150, 180, 'falsa alarma', _TN, 10.5, 'middle') +
  _r(250, 132, 180, 66, _OK) + _t(340, 160, 'Verdadero negativo', _OK, 11.5, 'middle', '600') + _t(340, 180, 'acertaste el descarte', _TN, 10.5, 'middle') +
  _r(450, 56, 155, 142, _AC) +
  _t(462, 80, 'PRECISIÓN', _AC, 10.5, 'start', '600') + _t(462, 98, 'de lo que marqué,', _TN, 10.5) + _t(462, 112, '¿cuánto acerté?', _TN, 10.5) +
  _t(462, 140, 'EXHAUSTIVIDAD', _AC, 10.5, 'start', '600') + _t(462, 158, 'de lo que existía,', _TN, 10.5) + _t(462, 172, '¿cuánto encontré?', _TN, 10.5) +
  _t(310, 228, 'Los dos errores no cuestan lo mismo, y ahí está casi todo el juicio del examen', _TN, 11, 'middle'));

const _G_DESBALANCE = _svg(190,
  _t(310, 18, 'Por qué la exactitud engaña con clases desbalanceadas', _TN, 12, 'middle', '600') +
  _t(30, 48, 'De cada 100 transacciones:', _TN, 11) +
  _r(30, 58, 553, 34, _BD) +
  _r(30, 58, 17, 34, _NO, 'rgba(248,113,113,.28)', 0) +
  _t(38, 110, '3 fraude', _NO, 10.5) +
  _t(300, 79, '97 legítimas', _TN, 11, 'middle') +
  _r(30, 128, 270, 44, _NO) +
  _t(165, 148, 'Modelo que dice «nunca hay fraude»', _NO, 11, 'middle', '600') +
  _t(165, 165, '97 % de exactitud · 0 fraudes detectados', _TN, 10.5, 'middle') +
  _r(320, 128, 263, 44, _OK) +
  _t(451, 148, 'Modelo útil', _OK, 11, 'middle', '600') +
  _t(451, 165, 'menos exactitud, pero encuentra fraude', _TN, 10.5, 'middle'));

const _G_PARTICION = _svg(180,
  _FLECHA +
  _t(310, 18, 'Partición de los datos, y por qué son tres y no dos', _TN, 12, 'middle', '600') +
  _r(30, 40, 340, 40, _AC) + _t(200, 65, 'ENTRENAMIENTO · el modelo aprende aquí', _AC, 11.5, 'middle', '600') +
  _r(378, 40, 105, 40, _AL) + _t(430, 65, 'VALIDACIÓN', _AL, 11, 'middle', '600') +
  _r(491, 40, 99, 40, _OK) + _t(540, 65, 'PRUEBA', _OK, 11, 'middle', '600') +
  _t(430, 100, 'ajustas aquí', _TN, 10.5, 'middle') +
  _t(540, 100, 'no la tocas', _TN, 10.5, 'middle') +
  _r(30, 120, 560, 44, _NO, 'none', 6, 1, '4 3') +
  _t(310, 140, 'Si usas la partición de prueba para ajustar, deja de ser una prueba:', _NO, 11, 'middle') +
  _t(310, 156, 'el modelo ya la vio y su resultado se vuelve optimista y falso', _TN, 10.5, 'middle'));

const _G_DERIVA = _svg(240,
  _FLECHA +
  _l(52, 190, 590, 190, _TN, 1) + _l(52, 190, 52, 28, _TN, 1) +
  _t(320, 218, 'MESES EN PRODUCCIÓN  →', _TN, 11, 'middle') +
  '<text x="22" y="110" fill="' + _TN + '" font-size="11" text-anchor="middle" transform="rotate(-90 22 110)">Calidad</text>' +
  '<path d="M60,58 L200,62 C300,70 400,110 560,168" fill="none" stroke="' + _NO + '" stroke-width="2"/>' +
  _t(70, 46, 'El modelo no cambia. El mundo sí.', _TN, 11) +
  _l(200, 40, 200, 190, _AL, 1, '4 4') + _t(206, 54, 'la realidad empieza a moverse', _AL, 10.5) +
  _l(430, 40, 430, 190, _NO, 1, '4 4') + _t(436, 54, 'alguien lo nota', _NO, 10.5) +
  _r(52, 200, 538, 0, _BD) +
  _t(320, 234, 'Sin monitoreo, el sistema sigue respondiendo — cada vez peor — y nadie se entera', _TN, 11, 'middle'));

const _G_SESGO = _svg(210,
  _FLECHA +
  _t(310, 18, 'Por qué quitar la variable sensible no elimina el sesgo', _TN, 12, 'middle', '600') +
  _r(24, 42, 150, 44, _NO, 'none', 8, 1, '4 3') + _t(99, 62, 'Género', _NO, 11.5, 'middle', '600') + _t(99, 78, 'eliminado ✓', _TN, 10.5, 'middle') +
  _r(24, 108, 150, 76, _AL) + _t(99, 130, 'Pero quedan:', _AL, 11, 'middle', '600') +
  _t(99, 150, 'colegio · barrio', _TN, 10.5, 'middle') + _t(99, 166, 'años de licencia', _TN, 10.5, 'middle') +
  _l(178, 146, 236, 146, _TN, 1.4) +
  _t(207, 138, 'predicen', _TN, 10, 'middle') +
  _r(244, 108, 150, 76, _NO) + _t(319, 138, 'el género', _NO, 11.5, 'middle', '600') + _t(319, 158, 'sin nombrarlo', _TN, 10.5, 'middle') +
  _l(398, 146, 456, 146, _TN, 1.4) +
  _r(464, 108, 132, 76, _NO) + _t(530, 138, 'El sesgo', _NO, 11.5, 'middle', '600') + _t(530, 158, 'sigue ahí', _TN, 10.5, 'middle') +
  _t(310, 202, 'Y ahora no puedes medirlo, porque borraste la variable con la que se mide', _TN, 11, 'middle'));

const _G_APRENDIZAJE = _svg(200,
  _t(310, 18, 'Qué tipo de aprendizaje pide tu problema', _TN, 12, 'middle', '600') +
  _r(20, 36, 186, 140, _AC) +
  _t(113, 60, 'SUPERVISADO', _AC, 11.5, 'middle', '600') +
  _t(36, 84, 'Tienes ejemplos con', _TN, 10.5) + _t(36, 100, 'la respuesta correcta', _TN, 10.5) +
  _t(36, 126, '«estas 5 000 facturas', _TN, 10.5) + _t(36, 142, 'están marcadas como', _TN, 10.5) + _t(36, 158, 'fraude o no»', _TN, 10.5) +
  _r(217, 36, 186, 140, _AL) +
  _t(310, 60, 'NO SUPERVISADO', _AL, 11.5, 'middle', '600') +
  _t(233, 84, 'No hay respuesta:', _TN, 10.5) + _t(233, 100, 'buscas estructura', _TN, 10.5) +
  _t(233, 126, '«agrupa a los clientes', _TN, 10.5) + _t(233, 142, 'por comportamiento,', _TN, 10.5) + _t(233, 158, 'a ver qué sale»', _TN, 10.5) +
  _r(414, 36, 186, 140, _OK) +
  _t(507, 60, 'POR REFUERZO', _OK, 11.5, 'middle', '600') +
  _t(430, 84, 'Aprende probando', _TN, 10.5) + _t(430, 100, 'y recibiendo premio', _TN, 10.5) +
  _t(430, 126, '«ajusta la ruta de', _TN, 10.5) + _t(430, 142, 'reparto y mide si', _TN, 10.5) + _t(430, 158, 'bajó el costo»', _TN, 10.5));

const _G_UMBRAL = _svg(210,
  _t(310, 18, 'El umbral no es 0,5 por ley: depende de qué error duele más', _TN, 12, 'middle', '600') +
  _l(60, 150, 580, 150, _TN, 1) +
  _t(60, 172, '0,0', _TN, 10.5) + _t(320, 172, '0,5', _TN, 10.5, 'middle') + _t(580, 172, '1,0', _TN, 10.5, 'end') +
  _t(320, 192, 'probabilidad que devuelve el modelo', _TN, 10.5, 'middle') +
  _l(320, 44, 320, 158, _BD, 1, '4 4') +
  _l(200, 40, 200, 158, _OK, 1.6) + _t(200, 34, 'umbral bajo', _OK, 10.5, 'middle') +
  _t(120, 76, 'marcas mucho:', _TN, 10.5, 'middle') + _t(120, 92, 'pocas fugas,', _OK, 10.5, 'middle') + _t(120, 108, 'muchas falsas alarmas', _NO, 10.5, 'middle') +
  _l(450, 40, 450, 158, _AL, 1.6) + _t(450, 34, 'umbral alto', _AL, 10.5, 'middle') +
  _t(524, 76, 'marcas poco:', _TN, 10.5, 'middle') + _t(524, 92, 'pocas falsas alarmas,', _OK, 10.5, 'middle') + _t(524, 108, 'se te escapan casos', _NO, 10.5, 'middle'));


/* ── El temario de conceptos ─────────────────────────────────────────────── */

const CPMAI_CONCEPTOS = {
  id: 'conceptos',
  nombre: 'Conceptos de IA',
  subtitulo: 'Lo que hay que entender para responder bien · material propio',
  estado: 'disponible',
  resumen: 'El ECO dice qué se evalúa, pero no enseña, y no hay libro de CPMAI que comprar. ' +
    'Esta pestaña cubre ese hueco: los conceptos que sostienen las preguntas, con ejemplos y ' +
    'diagramas. Todo el contenido es propio.',

  grupos: [
    {
      id: 'metodologia',
      nombre: 'La metodología CPMAI',
      intro: 'La columna vertebral de la certificación. Seis fases que se recorren en iteraciones ' +
        'cortas, con dos puntos formales donde se decide si el proyecto continúa o se detiene.',
      temas: [
        {
          id: 'cn-met-01', nombre: 'Las seis fases y por qué son un ciclo',
          idea: 'Comprensión del negocio, comprensión de los datos, preparación de los datos, modelado, ' +
            'evaluación y operacionalización. No se recorren una vez de principio a fin: cada iteración ' +
            'vuelve a empezar con lo aprendido en la anterior.',
          grafico: _G_FASES,
          ejemplo: '<p>Un proyecto de IA que se planifica como una cascada de seis etapas fracasa por una razón ' +
            'estructural: <strong>no sabes si los datos alcanzan hasta que los miras</strong>, y no sabes qué ' +
            'datos necesitas hasta que intentas modelar.</p>' +
            '<p class="bien">Por eso la primera iteración debe ser deliberadamente pequeña: un caso de uso ' +
            'acotado, recorrido entero, para descubrir dónde está el problema real antes de comprometer meses.</p>',
          eco: ['negocio:0']
        },
        {
          id: 'cn-met-02', nombre: 'Los dos puntos de avance o detención',
          idea: 'CPMAI formaliza dos decisiones de go/no-go: una tras preparar los datos —¿alcanza su ' +
            'calidad?— y otra antes de operacionalizar —¿el modelo cumple los criterios acordados?—. Son ' +
            'puntos de control, no trámites.',
          ejemplo: '<p>Pasar el primero por presión de cronograma garantiza que el problema reaparezca en el ' +
            'segundo, mucho más caro: ahora hay un modelo entrenado, un equipo comprometido y expectativas ' +
            'creadas.</p>' +
            '<p class="mal">La frase que hay que poder decir a tiempo: «los datos no alcanzan». Cuesta una ' +
            'conversación incómoda hoy y el proyecto entero dentro de tres meses.</p>',
          eco: ['modelos:4', 'modelos:5']
        },
        {
          id: 'cn-met-03', nombre: 'Por qué un proyecto de IA no es un proyecto de software',
          idea: 'En software conoces la lógica y la escribes. En IA la lógica se induce de los datos, así que ' +
            'no puedes garantizar el resultado por adelantado — solo acotar la incertidumbre iterando.',
          ejemplo: '<p>Consecuencia práctica en la estimación: en software, «construir la pantalla de reportes» ' +
            'se estima con razonable confianza. En IA, «alcanzar 90 % de acierto» <strong>no se puede ' +
            'prometer</strong>, porque depende de si los datos contienen la señal, y eso no se sabe antes.</p>' +
            '<p>Lo que sí se puede comprometer es el proceso: iterar, medir y detenerse si no se llega.</p>',
          eco: ['negocio:1']
        },
        {
          id: 'cn-met-04', nombre: 'Comprensión del negocio: la fase que más se salta',
          idea: 'Definir qué problema se resuelve, cómo se medirá el éxito en resultados de negocio y contra ' +
            'qué línea base. Sin eso, cualquier resultado se puede declarar éxito o fracaso.',
          ejemplo: '<p>Es donde se juega el examen: más de la mitad de las preguntas atacan la confusión entre ' +
            '<strong>«el modelo funciona»</strong> y <strong>«el negocio mejoró»</strong>.</p>' +
            '<p class="bien">Un criterio válido lleva contrapeso incorporado: «sube la resolución en el primer ' +
            'contacto <em>sin</em> que aumente el tiempo de espera». Un criterio con una sola variable se puede ' +
            'optimizar hasta romper otra cosa.</p>',
          eco: ['negocio:7']
        },
        {
          id: 'cn-met-05', nombre: 'Comprensión y preparación de datos: donde se va el tiempo',
          idea: 'Comprender es mirar lo que hay y evaluar si sirve; preparar es limpiar, transformar y ' +
            'construir las variables que el modelo usará. Juntas consumen la mayor parte del esfuerzo real.',
          ejemplo: '<p>La regla que todo el mundo repite y casi nadie planifica: <strong>preparar los datos ocupa ' +
            'más que entrenar el modelo</strong>, muchas veces por goleada.</p>' +
            '<p>Si el cronograma dedica dos semanas a datos y dos meses a modelado, está invertido — y esa ' +
            'inversión es la causa más común de desvío en proyectos de IA.</p>',
          eco: ['datos:6', 'modelos:3']
        },
        {
          id: 'cn-met-06', nombre: 'Operacionalizar no es desplegar',
          idea: 'Desplegar es poner el modelo a correr. Operacionalizar es dejar montado todo lo que lo mantiene ' +
            'útil: monitoreo, gobernanza de versiones, criterio de reentrenamiento, plan de contingencia y ' +
            'transición al equipo que lo va a operar.',
          ejemplo: '<p>El proyecto que «terminó» al desplegar es el que seis meses después nadie sabe si sigue ' +
            'funcionando bien, con quién reclamar ni cómo volver atrás.</p>',
          eco: ['operacion:5', 'operacion:6']
        }
      ]
    },

    {
      id: 'problema',
      nombre: 'Qué tipo de problema tienes',
      intro: 'Antes de hablar de algoritmos, clasificar el problema. La mitad de los proyectos que fracasan ' +
        'eligieron mal aquí, y muchos ni siquiera necesitaban IA.',
      temas: [
        {
          id: 'cn-pro-01', nombre: 'Supervisado, no supervisado y por refuerzo',
          idea: 'Supervisado necesita ejemplos con la respuesta correcta ya marcada. No supervisado busca ' +
            'estructura sin respuestas. Por refuerzo aprende probando y recibiendo una señal de premio o castigo.',
          grafico: _G_APRENDIZAJE,
          ejemplo: '<p>La pregunta que resuelve la elección: <strong>¿tengo ejemplos etiquetados?</strong></p>' +
            '<p>Si tienes 5 000 facturas marcadas como fraude o no, es supervisado. Si solo tienes facturas y ' +
            'quieres ver qué grupos aparecen, es no supervisado. Y si no tienes ninguna de las dos cosas, tu ' +
            'primer proyecto no es de modelado: es de etiquetado.</p>',
          eco: ['modelos:0']
        },
        {
          id: 'cn-pro-02', nombre: 'Clasificación y regresión',
          idea: 'Clasificar es asignar a una categoría —fraude o no, qué tipo de residuo—. Regresión es predecir ' +
            'un número —cuánto pesa, cuánto se venderá—. Cambian las métricas con las que se evalúa.',
          ejemplo: '<p>Un mismo problema puede plantearse de las dos formas, y conviene elegir a conciencia. ' +
            '«¿Habrá desabastecimiento?» es clasificación. «¿Cuántas unidades faltarán?» es regresión.</p>' +
            '<p class="bien">La segunda da más información, pero exige más datos y es más difícil de acertar. ' +
            'Si con saber sí o no ya tomas la decisión, la clasificación es la respuesta correcta.</p>',
          eco: ['negocio:6']
        },
        {
          id: 'cn-pro-03', nombre: '¿De verdad necesitas IA?',
          idea: 'Muchos problemas se resuelven con una regla de negocio bien escrita, un reporte o un cambio de ' +
            'proceso, a una fracción del costo y sin nada que mantener.',
          ejemplo: '<p>Prueba rápida: <strong>si puedes escribir las reglas, escríbelas</strong>. La IA sirve ' +
            'cuando el patrón existe pero es demasiado complejo o cambiante para enunciarlo.</p>' +
            '<p class="mal">«Alertar cuando el stock baje del mínimo» no es IA, es una consulta. Montar un modelo ' +
            'ahí añade costo, riesgo y opacidad sin ganar nada.</p>',
          eco: ['negocio:0', 'negocio:1']
        },
        {
          id: 'cn-pro-04', nombre: 'Viabilidad: los tres muros',
          idea: 'Un caso de uso puede caer por datos —no existen o no se pueden usar—, por técnica —el patrón no ' +
            'está ahí— o por adopción —nadie va a usarlo—. Los tres se comprueban antes de comprometer presupuesto.',
          ejemplo: '<p>El más subestimado es el tercero. Un modelo cuya salida obliga al operario a abrir otra ' +
            'pantalla y copiar un dato a mano <strong>no se va a usar</strong>, por bueno que sea.</p>' +
            '<p>Y un modelo que no se usa tiene beneficio exactamente cero, igual que uno que nunca se construyó ' +
            '— con la diferencia de que este costó dinero.</p>',
          eco: ['negocio:1', 'negocio:5']
        },
        {
          id: 'cn-pro-05', nombre: 'Prueba de concepto contra piloto',
          idea: 'Una prueba de concepto responde «¿es posible?» con datos históricos y sin usuarios. Un piloto ' +
            'responde «¿aporta valor?» con usuarios reales y en condiciones reales. Confundirlos es caro.',
          ejemplo: '<p>El patrón que se repite: la prueba de concepto sale bien, se anuncia el éxito, y al llevarlo ' +
            'a producción se descubre que los datos en vivo llegan con retraso, incompletos y en otro formato.</p>' +
            '<p class="bien">Una prueba de concepto exitosa demuestra que <em>el patrón existe</em>. No demuestra ' +
            'que el sistema sea operable.</p>',
          eco: ['negocio:1']
        }
      ]
    },

    {
      id: 'datos',
      nombre: 'Los datos',
      intro: 'El 26 % del examen, y donde muere la mayoría de los proyectos. No por falta de datos, sino por ' +
        'datos que parecían servir y no servían.',
      temas: [
        {
          id: 'cn-dat-01', nombre: 'Las dimensiones de la calidad',
          idea: 'Exactitud, integridad —¿faltan valores?—, consistencia entre fuentes, vigencia y ' +
            'representatividad. Un conjunto puede ser enorme y aun así inservible por fallar en una sola.',
          ejemplo: '<p>La más traicionera es la <strong>representatividad</strong>: los datos son correctos pero ' +
            'no reflejan la realidad sobre la que el modelo va a decidir.</p>' +
            '<p>Un modelo entrenado solo con clientes que ya compraron no sabe nada de los que no compran, que ' +
            'es justo la población que te interesa predecir.</p>',
          eco: ['datos:6']
        },
        {
          id: 'cn-dat-02', nombre: 'Los huecos: aleatorios contra sistemáticos',
          idea: 'Antes de decidir qué hacer con los datos faltantes hay que saber por qué faltan. Si faltan al ' +
            'azar, descartarlos es razonable. Si faltan por una causa, descartarlos mete esa causa dentro del modelo.',
          ejemplo: '<p>Si el 40 % de los registros de falla no dice qué componente falló, la pregunta no es cómo ' +
            'rellenarlos: es <strong>quién dejó de registrar y por qué</strong>.</p>' +
            '<p class="mal">Si resulta que es el turno de noche el que no registra, descartar esos registros ' +
            'enseña al modelo que de noche no hay fallas.</p>',
          eco: ['datos:6']
        },
        {
          id: 'cn-dat-03', nombre: 'Entrenamiento, validación y prueba',
          idea: 'Los datos se parten en tres. Con el primero el modelo aprende, con el segundo se ajusta, y el ' +
            'tercero no se toca hasta el final: es la única medida honesta de cómo se comportará con datos nuevos.',
          grafico: _G_PARTICION,
          ejemplo: '<p>El error que invalida todo: usar la partición de prueba para decidir ajustes. En cuanto la ' +
            'usas para elegir, el modelo ya la conoce y su resultado se vuelve optimista.</p>' +
            '<p>Es como estudiar con el examen resuelto delante y luego sorprenderte de tu nota.</p>',
          eco: ['modelos:1']
        },
        {
          id: 'cn-dat-04', nombre: 'Fuga de datos: el fallo silencioso',
          idea: 'Ocurre cuando entra al entrenamiento información que no estará disponible en el momento real de ' +
            'la predicción. El modelo sale espectacular en pruebas y se desploma en producción.',
          ejemplo: '<p>Un modelo que predice si un cliente se dará de baja, entrenado con una variable ' +
            '«motivo_de_baja». Acierta el 99 %. Obviamente: <strong>esa variable solo existe después de que el ' +
            'cliente ya se fue</strong>.</p>' +
            '<p class="bien">La prueba mental: en el instante en que el modelo tiene que predecir, ¿este dato ya ' +
            'existe? Si la respuesta es no, es fuga.</p>',
          eco: ['modelos:3']
        },
        {
          id: 'cn-dat-05', nombre: 'Etiquetar cuesta, y casi nunca se presupuesta',
          idea: 'El aprendizaje supervisado necesita ejemplos con la respuesta correcta, y alguien tiene que ' +
            'ponerla. Es trabajo humano, lento y con su propio control de calidad.',
          ejemplo: '<p>Un proyecto de visión que necesita 10 000 imágenes etiquetadas y no tiene presupuesto de ' +
            'etiquetado <strong>tiene viabilidad cero</strong>, por bueno que sea el caso de negocio.</p>' +
            '<p>Y si dos personas etiquetan distinto el mismo caso, el modelo aprende esa inconsistencia. Por eso ' +
            'el etiquetado necesita criterios escritos y revisión cruzada.</p>',
          eco: ['datos:0', 'negocio:9']
        },
        {
          id: 'cn-dat-06', nombre: 'Poder acceder no es poder usar',
          idea: 'La capacidad técnica de leer unos datos y el derecho legal a usarlos para entrenar son cosas ' +
            'distintas. Se verifican antes de incorporarlos, no después.',
          ejemplo: '<p>Datos de un socio comercial pueden estar disponibles en el sistema y aun así prohibidos ' +
            'para entrenar un modelo, por contrato o por normativa de protección de datos.</p>' +
            '<p class="mal">Es el tipo de problema que se descubre en auditoría, con el sistema ya en producción y ' +
            'decisiones tomadas con él.</p>',
          eco: ['datos:5', 'responsable:0']
        }
      ]
    },

    {
      id: 'evaluacion',
      nombre: 'Evaluar el modelo',
      intro: 'El bloque más técnico del examen, y el que se resuelve con criterio más que con fórmulas. La idea ' +
        'de fondo: los dos tipos de error casi nunca cuestan lo mismo.',
      temas: [
        {
          id: 'cn-eva-01', nombre: 'La matriz de confusión',
          idea: 'Cruza lo que el modelo predijo con lo que realmente pasó. De sus cuatro casillas salen todas las ' +
            'métricas que importan.',
          grafico: _G_MATRIZ,
          ejemplo: '<p>Los dos errores tienen nombre y consecuencias distintas. En detección de fraude, un ' +
            '<strong>falso negativo</strong> es dinero perdido; un <strong>falso positivo</strong> es un cliente ' +
            'legítimo con la tarjeta bloqueada.</p>' +
            '<p>Cuál duele más es una decisión de negocio, no técnica — y es la que fija todo lo demás.</p>',
          eco: ['modelos:1']
        },
        {
          id: 'cn-eva-02', nombre: 'Precisión, exhaustividad y su tensión',
          idea: 'Precisión responde «de lo que marqué, ¿cuánto acerté?». Exhaustividad, «de lo que existía, ' +
            '¿cuánto encontré?». Subir una suele bajar la otra, y elegir el equilibrio es una decisión de negocio.',
          ejemplo: '<p>En detección de cáncer prefieres <strong>exhaustividad</strong>: mejor una falsa alarma que ' +
            'un caso que se escapa. En un filtro de correo prefieres <strong>precisión</strong>: mejor que pase ' +
            'algo de basura a que se pierda un correo importante.</p>' +
            '<p>La medida F combina ambas en un número, útil para comparar modelos cuando ningún error domina.</p>',
          eco: ['modelos:1']
        },
        {
          id: 'cn-eva-03', nombre: 'Por qué la exactitud engaña',
          idea: 'Cuando una clase es rara, la exactitud global premia al modelo que nunca la detecta. Es la trampa ' +
            'más repetida en el examen y en la vida real.',
          grafico: _G_DESBALANCE,
          ejemplo: '<p>Con 3 % de fraude, un modelo que responde siempre «no hay fraude» acierta el <strong>97 % ' +
            'de las veces</strong> y no detecta un solo caso.</p>' +
            '<p class="bien">Ante cualquier problema de detección —fraude, fallas, enfermedades— la primera ' +
            'pregunta es qué proporción representa la clase que buscas. Si es pequeña, la exactitud sobra.</p>',
          eco: ['modelos:1', 'modelos:5']
        },
        {
          id: 'cn-eva-04', nombre: 'El umbral de decisión',
          idea: 'El modelo devuelve una probabilidad; convertirla en decisión requiere fijar un corte. El 0,5 por ' +
            'defecto no tiene nada de sagrado: se ajusta según el costo de cada error.',
          grafico: _G_UMBRAL,
          ejemplo: '<p>Si aprobar un crédito malo cuesta mucho más que rechazar uno bueno, el umbral debe ' +
            '<strong>subir</strong>: marcas como riesgo con menos evidencia y aceptas más falsas alarmas.</p>' +
            '<p>Y algo que conviene retener: cambiar el umbral <strong>no requiere reentrenar</strong>. Es un ' +
            'ajuste de decisión, no de modelo.</p>',
          eco: ['modelos:5']
        },
        {
          id: 'cn-eva-05', nombre: 'Sobreajuste y línea base',
          idea: 'Un modelo sobreajustado memorizó el entrenamiento en vez de aprender el patrón: brilla ahí y ' +
            'falla con datos nuevos. Y todo resultado necesita compararse contra algo, aunque sea trivial.',
          ejemplo: '<p>La señal de sobreajuste: excelente en entrenamiento, mediocre en validación. La brecha entre ' +
            'ambos números es el diagnóstico.</p>' +
            '<p class="bien">Y la línea base: antes de celebrar un 82 % de acierto, comprueba qué acierta la regla ' +
            'más tonta posible —«mañana igual que hoy»—. Si esa da 80 %, tu modelo aporta dos puntos y una ' +
            'infraestructura que hay que mantener.</p>',
          eco: ['negocio:7', 'modelos:5']
        }
      ]
    },

    {
      id: 'responsable',
      nombre: 'IA responsable',
      intro: 'El 15 % del examen, y el dominio donde las respuestas correctas son menos intuitivas. La regla ' +
        'general: las soluciones que parecen limpias suelen esconder el problema en vez de resolverlo.',
      temas: [
        {
          id: 'cn-res-01', nombre: 'De dónde sale el sesgo',
          idea: 'Casi nunca del algoritmo. Sale de los datos históricos, que registran decisiones humanas ' +
            'pasadas, y de cómo se recogieron. El modelo lo reproduce y le añade apariencia de objetividad.',
          ejemplo: '<p>Un modelo entrenado con diez años de contrataciones aprende a quién contrataba la empresa, ' +
            'no a quién debería contratar.</p>' +
            '<p class="mal">Y lo devuelve revestido de neutralidad técnica, que es lo que lo hace más peligroso ' +
            'que el prejuicio humano: nadie discute con una cifra.</p>',
          eco: ['responsable:2']
        },
        {
          id: 'cn-res-02', nombre: 'Las variables sustitutas',
          idea: 'Eliminar la variable sensible no elimina el sesgo: otras variables la predicen. Y al quitarla ' +
            'pierdes además la capacidad de medir si el sesgo existe.',
          grafico: _G_SESGO,
          ejemplo: '<p>Quitas el género, pero quedan el colegio, el barrio y los años de licencia de conducir. ' +
            'Juntas predicen el género con bastante fiabilidad, y el modelo las usa.</p>' +
            '<p class="bien">El enfoque correcto es el contrario: <strong>conservar la variable para poder medir ' +
            'la disparidad</strong> entre grupos, y corregir con técnicas de mitigación.</p>',
          eco: ['responsable:2']
        },
        {
          id: 'cn-res-03', nombre: 'Explicabilidad: un requisito, no un extra',
          idea: 'Si el negocio tiene obligación de motivar la decisión ante el afectado, los modelos inexplicables ' +
            'quedan descartados desde el diseño. No es algo que se añada después.',
          ejemplo: '<p>Un cliente al que se le niega un crédito puede exigir saber por qué. Responder «es una red ' +
            'neuronal y no se puede explicar» no es una respuesta válida: es un requisito que nadie definió a tiempo.</p>' +
            '<p>Hay un intercambio real — los modelos más interpretables suelen ser algo menos precisos —, y ese ' +
            'intercambio se decide al inicio, no al final.</p>',
          eco: ['responsable:1']
        },
        {
          id: 'cn-res-04', nombre: 'Privacidad a lo largo del ciclo',
          idea: 'Los datos de entrenamiento suelen ser la copia peor protegida que existe de la base de ' +
            'producción. Salen del sistema con controles y acaban en entornos de desarrollo sin ellos.',
          ejemplo: '<p>Técnicas que reducen el riesgo: anonimizar o seudonimizar antes de extraer, trabajar con ' +
            'muestras en vez de la base completa, y entornos de desarrollo con los mismos controles de acceso que ' +
            'producción.</p>',
          eco: ['responsable:0']
        },
        {
          id: 'cn-res-05', nombre: 'Trazabilidad: poder reconstruir la decisión',
          idea: 'Registrar qué versión del modelo decidió, con qué datos se entrenó y con qué criterios. Es lo que ' +
            'permite responder meses después por qué el sistema hizo lo que hizo.',
          ejemplo: '<p>La pregunta que llega siempre, normalmente de auditoría o de un cliente molesto: ' +
            '<strong>«¿por qué el sistema rechazó este caso en marzo?»</strong></p>' +
            '<p>Sin control de versiones del modelo y registro de decisiones, la respuesta es un encogimiento de ' +
            'hombros — y eso, en un sector regulado, es un hallazgo.</p>',
          eco: ['responsable:4']
        }
      ]
    },

    {
      id: 'produccion',
      nombre: 'En producción',
      intro: 'Un modelo no es un entregable terminado: es un sistema que envejece. Este bloque es lo que separa ' +
        'un piloto exitoso de una solución que sigue aportando valor dos años después.',
      temas: [
        {
          id: 'cn-pdn-01', nombre: 'La deriva: el modelo no cambia, el mundo sí',
          idea: 'Con el tiempo la realidad se aleja de los datos con los que el modelo aprendió y su calidad cae. ' +
            'Puede cambiar la población de entrada o la relación que el modelo aprendió.',
          grafico: _G_DERIVA,
          ejemplo: '<p>Un modelo de demanda entrenado antes de una crisis económica sigue prediciendo con la ' +
            'confianza de siempre — y equivocándose cada vez más.</p>' +
            '<p class="mal">Lo grave no es que se degrade: es que <strong>lo hace en silencio</strong>. Sigue ' +
            'devolviendo números con la misma cara de seguridad.</p>',
          eco: ['operacion:3']
        },
        {
          id: 'cn-pdn-02', nombre: 'Qué monitorear, y en dos planos',
          idea: 'Métricas técnicas —calidad de las predicciones, distribución de las entradas— y métricas de ' +
            'negocio. Las dos, porque pueden divergir.',
          ejemplo: '<p>Métricas técnicas sanas y beneficio ausente es un síntoma con dos causas posibles: el ' +
            'modelo resuelve un problema que no era, o su salida no se está usando para decidir.</p>' +
            '<p class="bien">Ninguna de las dos se arregla reentrenando, que es lo primero que todo el mundo ' +
            'intenta.</p>',
          eco: ['operacion:3']
        },
        {
          id: 'cn-pdn-03', nombre: 'Cuándo reentrenar',
          idea: 'La decisión se define antes de desplegar: con qué frecuencia, con qué umbral de degradación y ' +
            'quién autoriza. Si se improvisa, se reentrena tarde o por pánico.',
          ejemplo: '<p>Un criterio escrito es concreto: «si la calidad cae por debajo de X durante dos semanas ' +
            'seguidas, se reentrena; si cae de golpe, se activa la contingencia y se revisa la causa».</p>' +
            '<p>Y ojo: reentrenar con datos recientes que ya venían sesgados por el propio modelo es una trampa ' +
            'conocida — el sistema se realimenta a sí mismo.</p>',
          eco: ['operacion:2']
        },
        {
          id: 'cn-pdn-04', nombre: 'El plan de contingencia',
          idea: 'Qué se hace cuando el modelo falla o devuelve resultados anómalos. La respuesta debe permitir que ' +
            'el negocio siga operando, normalmente volviendo al proceso manual de forma ordenada.',
          ejemplo: '<p>No basta con restaurar un servidor. Si el modelo aprueba solicitudes automáticamente y ' +
            'empieza a comportarse raro un viernes, alguien tiene que poder <strong>apagarlo y seguir aprobando a ' +
            'mano</strong> sin que se detenga la operación.</p>' +
            '<p>Eso se ensaya antes, no se improvisa el viernes.</p>',
          eco: ['operacion:6']
        },
        {
          id: 'cn-pdn-05', nombre: 'La transición al equipo que lo opera',
          idea: 'Transferir no es entregar documentación: es dejar a alguien capaz de reconocer que el modelo se ' +
            'degradó y de saber qué hacer entonces.',
          ejemplo: '<p>El patrón que hay que evitar: el equipo de proyecto se disuelve, operaciones hereda un ' +
            'sistema que no entiende, y durante meses nadie mira si sigue acertando.</p>' +
            '<p class="bien">La prueba de que la transferencia funcionó es que operaciones pueda responder qué ' +
            'harían si mañana la calidad cae — sin llamar a nadie.</p>',
          eco: ['operacion:5', 'operacion:4']
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CPMAI_CONCEPTOS: CPMAI_CONCEPTOS };
