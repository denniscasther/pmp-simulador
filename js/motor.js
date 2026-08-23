/**
 * Motor del simulador — lógica pura, no toca el DOM.
 *
 * Replica las reglas del examen PMP real que de verdad cambian cómo se rinde:
 *
 *   1. 180 preguntas · 240 minutos (ECO de julio de 2026).
 *   2. Tres secciones con dos descansos opcionales de 10 min entre ellas.
 *   3. El descanso NO consume tiempo de examen, pero al salir de una sección
 *      YA NO SE PUEDE VOLVER a ella. Esta es la regla que más duele y la que casi
 *      ningún simulador implementa.
 *   4. Dentro de una sección sí se navega libre y se puede marcar para revisar.
 *   5. 10 preguntas piloto, repartidas al azar y jamás señaladas.
 *
 * ⚠️ El ECO 2026 dice que el primer descanso va tras la SECCIÓN DE ESTUDIO DE CASOS
 *    y el segundo «aproximadamente a mitad» de las preguntas independientes, pero
 *    NO publica cuántas preguntas tiene cada tramo. Aquí se reparten en tercios
 *    iguales: es una aproximación deliberada y documentada. Lo que sí se respeta
 *    literalmente es lo que importa — tres tramos, dos descansos, y sin retorno.
 *
 * El reloj se inyecta (`ahora`) para que las pruebas no dependan del tiempo real.
 */

const CONFIG = {
  TOTAL: 180,
  PILOTO: 10,        // no puntúan; PMI las llama «preguntas piloto»
  SECCIONES: 3,
  MINUTOS: 240,
  DESCANSO_MIN: 10
};

/** PRNG con semilla (mulberry32): dos exámenes con la misma semilla son idénticos. */
function generador(semilla) {
  let a = semilla >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function barajar(lista, rnd) {
  const c = lista.slice();
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = c[i]; c[i] = c[j]; c[j] = tmp;
  }
  return c;
}

/**
 * Arma el examen respetando los pesos del ECO.
 *
 * Si el banco no alcanza para el reparto ideal de un dominio, se toma lo que hay
 * y se avisa en `avisos`. Preferimos un examen corto y honesto antes que rellenar
 * con preguntas de otro dominio y mentir sobre la composición.
 */
function armar(banco, opciones) {
  const o = Object.assign({ total: CONFIG.TOTAL, semilla: Date.now() }, opciones || {});
  const rnd = generador(o.semilla);
  const puntuadas = Math.max(0, o.total - CONFIG.PILOTO);
  const cuota = ECO.repartir(puntuadas, o.dominios);
  const avisos = [];
  let elegidas = [];

  const dominios = (o.dominios && o.dominios.length)
    ? ECO.dominios.filter(d => o.dominios.indexOf(d.id) !== -1)
    : ECO.dominios;

  dominios.forEach(function (d) {
    const disponibles = barajar(banco.filter(p => p.dominio === d.id), rnd);
    const quiere = cuota[d.id];
    if (disponibles.length < quiere) {
      avisos.push(d.nombre + ': se pidieron ' + quiere + ' y el banco tiene ' + disponibles.length + '.');
    }
    elegidas = elegidas.concat(disponibles.slice(0, quiere).map(p => ({ p: p, puntua: true })));
  });

  // Las piloto salen del sobrante. En un examen completo pueden ser de
  // cualquier dominio, como en el real. Pero si se pidió practicar dominios
  // concretos, tienen que respetarlo: sin este filtro la práctica de Personas
  // colaba preguntas de Procesos y Entorno de negocio.
  const idsDominio = dominios.map(d => d.id);
  const usadas = {};
  elegidas.forEach(e => { usadas[e.p.id] = true; });
  const sobrante = barajar(
    banco.filter(p => !usadas[p.id] && idsDominio.indexOf(p.dominio) !== -1), rnd);
  sobrante.slice(0, CONFIG.PILOTO).forEach(p => elegidas.push({ p: p, puntua: false }));

  return { preguntas: barajar(elegidas, rnd), avisos: avisos, semilla: o.semilla };
}

/** Crea un examen listo para rendir. `ahora` devuelve milisegundos. */
function crearExamen(banco, opciones) {
  const o = Object.assign({ ahora: () => Date.now() }, opciones || {});
  const armado = armar(banco, o);

  const ex = {
    semilla: armado.semilla,
    avisos: armado.avisos,
    items: armado.preguntas.map(function (e, i) {
      return { n: i + 1, pregunta: e.p, puntua: e.puntua, respuesta: null, marcada: false };
    }),
    actual: 0,
    seccion: 0,
    seccionesCerradas: [],
    estado: 'en-curso',          // en-curso · descanso · terminado
    msConsumidos: 0,
    _inicioTramo: o.ahora(),
    _ahora: o.ahora,
    _finDescanso: null
  };

  ex.total = ex.items.length;

  // Los modos cortos conservan el ritmo del examen real (240 min / 180 preguntas
  // ≈ 1 min 20 s por pregunta) en vez de dar tiempo de sobra: entrenar sin la
  // presión del reloj es justo lo que este simulador no quiere hacer.
  const minutos = o.minutos || Math.round(CONFIG.MINUTOS * ex.total / CONFIG.TOTAL);
  ex.minutos = minutos;
  ex.msLimite = minutos * 60000;
  return ex;
}

/** Milisegundos de examen ya gastados. Durante un descanso el reloj está parado. */
function consumido(ex) {
  if (ex.estado === 'en-curso') return ex.msConsumidos + (ex._ahora() - ex._inicioTramo);
  return ex.msConsumidos;
}

function restante(ex) {
  return Math.max(0, ex.msLimite - consumido(ex));
}

/**
 * Rango de índices de la sección indicada. Se calcula sobre el total real del
 * examen, no sobre una constante: así un simulacro corto sigue teniendo tramos
 * coherentes en vez de una sección llena y dos vacías.
 */
function rangoSeccion(ex, seccion) {
  const porSeccion = Math.ceil(ex.total / CONFIG.SECCIONES);
  const desde = seccion * porSeccion;
  return { desde: desde, hasta: Math.min(desde + porSeccion, ex.total) };
}

function enSeccionActual(ex, indice) {
  const r = rangoSeccion(ex, ex.seccion);
  return indice >= r.desde && indice < r.hasta;
}

/** Navega. Devuelve false si el índice cae fuera de la sección abierta. */
function irA(ex, indice) {
  if (ex.estado !== 'en-curso') return false;
  if (!enSeccionActual(ex, indice)) return false;
  ex.actual = indice;
  return true;
}

/**
 * Registra la respuesta del ítem actual. `valor` es un id de opción para las de
 * respuesta única, o un arreglo de ids para las de respuesta múltiple.
 */
function responder(ex, valor) {
  if (ex.estado !== 'en-curso') return false;
  ex.items[ex.actual].respuesta = valor;
  return true;
}

function marcar(ex, si) {
  const it = ex.items[ex.actual];
  it.marcada = (si === undefined) ? !it.marcada : !!si;
  return it.marcada;
}

/** Hay descanso al final de toda sección menos la última. */
function tocaDescansoDe(ex, seccion) {
  return rangoSeccion(ex, seccion).hasta < ex.total;
}

/** ¿Toca descanso al cerrar la sección actual? */
function tocaDescanso(ex) {
  return tocaDescansoDe(ex, ex.seccion);
}

/**
 * Cierra la sección actual. IRREVERSIBLE: sus preguntas quedan bloqueadas, se
 * respondieran o no. Es exactamente lo que pasa en el examen real al confirmar
 * el paso de sección, y por eso la interfaz debe pedir confirmación explícita.
 */
function cerrarSeccion(ex, tomarDescanso) {
  if (ex.estado !== 'en-curso') return false;

  ex.seccionesCerradas.push(ex.seccion);
  ex.msConsumidos = consumido(ex);

  const r = rangoSeccion(ex, ex.seccion);
  if (r.hasta >= ex.total) { ex.estado = 'terminado'; return true; }

  const habiaDescanso = tocaDescansoDe(ex, ex.seccion);
  ex.seccion++;
  ex.actual = rangoSeccion(ex, ex.seccion).desde;

  if (tomarDescanso && habiaDescanso) {
    ex.estado = 'descanso';
    ex._finDescanso = ex._ahora() + CONFIG.DESCANSO_MIN * 60000;
  } else {
    ex._inicioTramo = ex._ahora();
  }
  return true;
}

function msDescansoRestante(ex) {
  if (ex.estado !== 'descanso') return 0;
  return Math.max(0, ex._finDescanso - ex._ahora());
}

/** Vuelve del descanso. El reloj de examen arranca de nuevo. */
function reanudar(ex) {
  if (ex.estado !== 'descanso') return false;
  ex.estado = 'en-curso';
  ex._inicioTramo = ex._ahora();
  ex._finDescanso = null;
  return true;
}

/** ¿La respuesta dada es correcta? Compara sin importar el orden. */
function esCorrecta(pregunta, respuesta) {
  if (respuesta === null || respuesta === undefined) return false;
  const correctas = pregunta.correctas.slice().sort();
  const dadas = (Array.isArray(respuesta) ? respuesta.slice() : [respuesta]).sort();
  if (correctas.length !== dadas.length) return false;
  return correctas.every((c, i) => c === dadas[i]);
}

/**
 * Bandas de desempeño.
 *
 * ⚠️ PMI NO publica su nota de corte ni su algoritmo: el examen usa puntuación
 * psicométrica y el resultado real es una banda por dominio, no un porcentaje.
 * Estos cortes son una HEURÍSTICA DE ESTUDIO para orientarte, no una predicción
 * de si aprobarías. Se documentan aquí para que nadie los confunda con lo oficial.
 */
const BANDAS = [
  { id: 'sobre', nombre: 'Above Target', desde: 80 },
  { id: 'objetivo', nombre: 'Target', desde: 65 },
  { id: 'bajo', nombre: 'Below Target', desde: 50 },
  { id: 'deficiente', nombre: 'Needs Improvement', desde: 0 }
];

function banda(porcentaje) {
  return BANDAS.find(b => porcentaje >= b.desde);
}

/** Cierra el examen y calcula el resultado. Solo cuentan las preguntas puntuadas. */
function finalizar(ex) {
  if (ex.estado !== 'terminado') {
    ex.msConsumidos = consumido(ex);
    ex.estado = 'terminado';
  }

  const puntuadas = ex.items.filter(i => i.puntua);
  const porDominio = {};

  ECO.dominios.forEach(function (d) {
    const suyas = puntuadas.filter(i => i.pregunta.dominio === d.id);
    const bien = suyas.filter(i => esCorrecta(i.pregunta, i.respuesta)).length;
    const pct = suyas.length ? Math.round(bien * 100 / suyas.length) : 0;
    porDominio[d.id] = {
      nombre: d.nombre, peso: d.peso, total: suyas.length,
      correctas: bien, porcentaje: pct, banda: banda(pct)
    };
  });

  const bien = puntuadas.filter(i => esCorrecta(i.pregunta, i.respuesta)).length;
  const pct = puntuadas.length ? Math.round(bien * 100 / puntuadas.length) : 0;

  return {
    total: puntuadas.length,
    correctas: bien,
    porcentaje: pct,
    banda: banda(pct),
    sinResponder: puntuadas.filter(i => i.respuesta === null).length,
    minutos: Math.round(ex.msConsumidos / 60000),
    porDominio: porDominio
  };
}

/**
 * Espacio de nombres único para las dos cargas posibles: `<script>` en el
 * navegador (donde `app.js` usa `M.crearExamen`) y `require` en las pruebas.
 * Sin esto el navegador vería funciones sueltas y `app.js` fallaría con
 * "M is not defined".
 */
const M = {
  CONFIG: CONFIG, BANDAS: BANDAS, generador: generador, barajar: barajar,
  armar: armar, crearExamen: crearExamen, consumido: consumido, restante: restante,
  rangoSeccion: rangoSeccion, enSeccionActual: enSeccionActual, irA: irA,
  responder: responder, marcar: marcar, tocaDescanso: tocaDescanso,
  cerrarSeccion: cerrarSeccion, msDescansoRestante: msDescansoRestante,
  reanudar: reanudar, esCorrecta: esCorrecta, banda: banda, finalizar: finalizar
};

if (typeof module !== 'undefined') module.exports = M;
