/**
 * Pruebas del motor y del banco. Sin dependencias: `node prueba-motor.js`.
 *
 * Vigilan sobre todo las dos reglas que dan valor al simulador:
 *   · no se puede volver a una sección cerrada;
 *   · el reloj del examen se detiene durante el descanso.
 * Si alguna de esas cae, el simulador deja de parecerse al examen real.
 */

global.ECO = require('./js/eco.js').ECO;
const M = require('./js/motor.js');
const { PREGUNTAS_SEMILLA } = require('./js/preguntas/semilla.js');
global.ECO_NOTAS = require('./js/eco-notas.js').ECO_NOTAS;
const { TEMARIO } = require('./js/temario.js');

let ok = 0, fallos = [];
function comprobar(nombre, condicion, detalle) {
  if (condicion) { ok++; } else { fallos.push(nombre + (detalle ? ' → ' + detalle : '')); }
}
const igual = (nombre, a, b) => comprobar(nombre, a === b, 'esperado ' + b + ', obtenido ' + a);

// ── ECO ─────────────────────────────────────────────────────────────────────
igual('los pesos del ECO suman 100', ECO.dominios.reduce((a, d) => a + d.peso, 0), 100);
igual('Personas tiene 8 tareas (ECO 2026)', ECO.dominio('personas').tareas.length, 8);
igual('Proceso tiene 10 tareas (ECO 2026)', ECO.dominio('procesos').tareas.length, 10);
igual('Entorno de negocio tiene 8 tareas (ECO 2026)', ECO.dominio('negocio').tareas.length, 8);
comprobar('dominio() devuelve null si no existe', ECO.dominio('inventado') === null);

[1, 7, 60, 170, 180, 999].forEach(function (n) {
  const r = ECO.repartir(n);
  const suma = Object.keys(r).reduce((a, k) => a + r[k], 0);
  igual('repartir(' + n + ') no pierde preguntas', suma, n);
  comprobar('repartir(' + n + ') no da negativos', Object.keys(r).every(k => r[k] >= 0));
});
comprobar('repartir respeta el orden de pesos en 170 (41 > 33 > 26)',
  ECO.repartir(170).procesos > ECO.repartir(170).personas &&
  ECO.repartir(170).personas > ECO.repartir(170).negocio);
igual('el ECO cargado es el de julio de 2026', ECO.version, '2026-07');
igual('los enfoques suman 100', ECO.enfoques.reduce((a, e) => a + e.objetivo, 0), 100);
igual('el predictivo baja al 40 % en el ECO 2026',
  ECO.enfoques.find(e => e.id === 'predictivo').objetivo, 40);

// ── Integridad del banco ────────────────────────────────────────────────────
const vistos = {};
PREGUNTAS_SEMILLA.forEach(function (p) {
  comprobar('id único: ' + p.id, !vistos[p.id]); vistos[p.id] = true;
  comprobar(p.id + ' apunta a un dominio real', ECO.dominio(p.dominio) !== null);
  const d = ECO.dominio(p.dominio);
  comprobar(p.id + ' apunta a una tarea existente', d && p.tarea >= 0 && p.tarea < d.tareas.length);
  comprobar(p.id + ' tiene enfoque válido', ['predictivo', 'agil'].indexOf(p.enfoque) !== -1);
  comprobar(p.id + ' tiene al menos 3 opciones', p.opciones.length >= 3);
  const ids = p.opciones.map(o => o.id);
  comprobar(p.id + ' toda correcta existe entre las opciones', p.correctas.every(c => ids.indexOf(c) !== -1));
  comprobar(p.id + ' tiene al menos una correcta', p.correctas.length >= 1);
  comprobar(p.id + ' el tipo coincide con el número de correctas',
    (p.tipo === 'opcion' && p.correctas.length === 1) || (p.tipo === 'multiple' && p.correctas.length > 1));
  comprobar(p.id + ' tiene explicación', typeof p.explicacion === 'string' && p.explicacion.length > 40);
});

// ── Armado ──────────────────────────────────────────────────────────────────
const a1 = M.armar(PREGUNTAS_SEMILLA, { total: 30, semilla: 42 });
const a2 = M.armar(PREGUNTAS_SEMILLA, { total: 30, semilla: 42 });
comprobar('la misma semilla produce el mismo examen',
  a1.preguntas.map(e => e.p.id).join() === a2.preguntas.map(e => e.p.id).join());
comprobar('semillas distintas producen exámenes distintos',
  M.armar(PREGUNTAS_SEMILLA, { total: 30, semilla: 7 }).preguntas.map(e => e.p.id).join() !==
  a1.preguntas.map(e => e.p.id).join());
comprobar('avisa cuando el banco no alcanza',
  M.armar(PREGUNTAS_SEMILLA, { total: 180, semilla: 1 }).avisos.length > 0);
comprobar('ninguna pregunta se repite dentro de un examen',
  new Set(a1.preguntas.map(e => e.p.id)).size === a1.preguntas.length);
// Con un banco de 15 no caben 10 piloto: el motor toma las que hay en vez de
// inventarlas. El recuento exacto de 170/10 se comprueba abajo con banco holgado.
comprobar('nunca reserva más piloto de las que caben',
  a1.preguntas.filter(e => !e.puntua).length <= M.CONFIG.PILOTO);
igual('el examen dura 240 minutos', M.CONFIG.MINUTOS, 240);
igual('son 10 las piloto', M.CONFIG.PILOTO, 10);

// La práctica por dominio no puede colar preguntas de otro dominio, ni siquiera
// entre las no puntuadas. Este fallo solo apareció al correr la app en el navegador.
['personas', 'procesos', 'negocio'].forEach(function (id) {
  const a = M.armar(PREGUNTAS_SEMILLA, { total: 20, semilla: 11, dominios: [id] });
  comprobar('práctica de ' + id + ': ninguna pregunta de otro dominio',
    a.preguntas.every(e => e.p.dominio === id),
    a.preguntas.filter(e => e.p.dominio !== id).map(e => e.p.dominio).join());
});
comprobar('el examen completo sí mezcla dominios',
  new Set(M.armar(PREGUNTAS_SEMILLA, { total: 15, semilla: 4 }).preguntas.map(e => e.p.dominio)).size > 1);

// ── Reloj falso ─────────────────────────────────────────────────────────────
let t = 0;
const reloj = () => t;
// Banco sintético con holgura en los TRES dominios. Si se clona la semilla tal
// cual, Procesos queda corto (pesa 50 % del examen y solo aporta 6 modelos) y el
// examen sale incompleto — que es justo lo que el motor avisa en `avisos`.
const banco = [];
ECO.dominios.forEach(function (d) {
  const modelos = PREGUNTAS_SEMILLA.filter(p => p.dominio === d.id);
  for (let i = 0; i < 100; i++) {
    const base = modelos[i % modelos.length];
    banco.push(Object.assign({}, base, { id: d.id + '-sint-' + i }));
  }
});

// ── Secciones: la regla que no se puede romper ──────────────────────────────
t = 0;
const ex = M.crearExamen(banco, { total: 180, semilla: 5, ahora: reloj });
igual('el examen tiene 180 ítems', ex.total, 180);
igual('arranca en la sección 0', ex.seccion, 0);
comprobar('puede navegar dentro de su sección', M.irA(ex, 59) === true);
comprobar('NO puede saltar a una sección futura', M.irA(ex, 60) === false);

M.irA(ex, 0); M.responder(ex, 'a');
comprobar('la respuesta quedó registrada', ex.items[0].respuesta === 'a');
comprobar('toca descanso al cerrar la sección 1', M.tocaDescanso(ex) === true);

M.cerrarSeccion(ex, true);
igual('pasa a la sección 1', ex.seccion, 1);
igual('entra en descanso', ex.estado, 'descanso');
comprobar('NO puede volver a la sección cerrada', M.irA(ex, 10) === false);
comprobar('la respuesta anterior sigue guardada', ex.items[0].respuesta === 'a');

// ── El descanso no consume tiempo de examen ─────────────────────────────────
const antes = M.consumido(ex);
t += 10 * 60000;
igual('el reloj de examen está parado en el descanso', M.consumido(ex), antes);
igual('el descanso ya se agotó', M.msDescansoRestante(ex), 0);
M.reanudar(ex);
igual('al reanudar vuelve a en-curso', ex.estado, 'en-curso');
t += 60000;
igual('el reloj corre otra vez', Math.round((M.consumido(ex) - antes) / 60000), 1);

// ── Cierre y resultado ──────────────────────────────────────────────────────
t = 0;
const ex2 = M.crearExamen(banco, { total: 180, semilla: 9, ahora: reloj });
ex2.items.forEach(function (it, i) { M.irA(ex2, i) && M.responder(ex2, it.pregunta.correctas.length > 1 ? it.pregunta.correctas.slice() : it.pregunta.correctas[0]); if ((i + 1) % 60 === 0) M.cerrarSeccion(ex2, false); });
const r = M.finalizar(ex2);
igual('solo puntúan 170', r.total, 170);
igual('y 10 son piloto', ex2.items.filter(i => !i.puntua).length, M.CONFIG.PILOTO);
igual('todas correctas da 100', r.porcentaje, 100);
igual('la banda máxima es Above Target', r.banda.nombre, 'Above Target');
igual('no quedan sin responder', r.sinResponder, 0);
comprobar('reporta los tres dominios', Object.keys(r.porDominio).length === 3);
igual('los dominios suman las puntuadas',
  Object.keys(r.porDominio).reduce((a, k) => a + r.porDominio[k].total, 0), 170);

// ── Corrección de respuestas ────────────────────────────────────────────────
const pm = { correctas: ['a', 'c'] };
comprobar('múltiple: acepta otro orden', M.esCorrecta(pm, ['c', 'a']));
comprobar('múltiple: rechaza si falta una', !M.esCorrecta(pm, ['a']));
comprobar('múltiple: rechaza si sobra una', !M.esCorrecta(pm, ['a', 'b', 'c']));
comprobar('sin responder nunca es correcta', !M.esCorrecta(pm, null));
comprobar('opción única funciona con escalar', M.esCorrecta({ correctas: ['b'] }, 'b'));

// ── Bandas ──────────────────────────────────────────────────────────────────
igual('100 → Above Target', M.banda(100).nombre, 'Above Target');
igual('70 → Target', M.banda(70).nombre, 'Target');
igual('55 → Below Target', M.banda(55).nombre, 'Below Target');
igual('10 → Needs Improvement', M.banda(10).nombre, 'Needs Improvement');
comprobar('toda nota de 0 a 100 cae en alguna banda',
  Array.from({ length: 101 }, (_, i) => M.banda(i)).every(b => b !== undefined));

// ── Temario ─────────────────────────────────────────────────────────────────
// Lo que de verdad se vigila aquí: que ningún tema apunte a una tarea del ECO que
// no existe. Es el fallo silencioso más probable cuando PMI publique el próximo
// esquema y las tareas se renumeren.
const p7 = TEMARIO.edicion('pmbok7');
const p8 = TEMARIO.edicion('pmbok8');

comprobar('existe la edición PMBOK 7', p7 !== null);
comprobar('existe la edición PMBOK 8', p8 !== null);
igual('PMBOK 7 trae los 12 principios',
  p7.grupos.find(g => g.id === 'principios').temas.length, 12);
igual('PMBOK 7 trae los 8 dominios de desempeño',
  p7.grupos.find(g => g.id === 'dominios').temas.length, 8);

// PMBOK 8 ya tiene el plan de estudios cargado; sus comprobaciones están abajo,
// en su propio bloque. La regla de honestidad sigue viva en otra forma: el texto
// de cada tema es propio, y el origen de la estructura queda declarado en el código.
comprobar('PMBOK 8 declara de dónde sale su estructura', typeof p8.resumen === 'string' && p8.resumen.length > 40);

const idsTema = {};
TEMARIO.ediciones.forEach(function (ed) {
  TEMARIO.temas(ed.id).forEach(function (t) {
    comprobar('tema con id único: ' + t.id, !idsTema[t.id]); idsTema[t.id] = true;
    comprobar(t.id + ' tiene nombre', !!t.nombre);
    // Tres formas válidas de tema:
    //   completo — idea + práctica + examen (PMBOK 7)
    //   breve    — solo la idea, para un plan de estudios largo (PMBOK 8)
    //   oficial  — los facilitadores del ECO, que no se parafrasean
    const breve = typeof t.idea === 'string' && t.idea.length > 30;
    const completo = breve
      && typeof t.practica === 'string' && t.practica.length > 30
      && typeof t.examen === 'string' && t.examen.length > 30;
    const oficial = Array.isArray(t.facilitadores) && t.facilitadores.length > 0;
    comprobar(t.id + ' tiene contenido utilizable', breve || oficial);
    // PMBOK 7 es la edición desarrollada: ahí sí se exigen las tres partes.
    if (t.id.charAt(0) === 'p' && t.id.length === 3) {
      comprobar(t.id + ' (PMBOK 7) está desarrollado del todo', completo);
    }
    comprobar(t.id + ' está cruzado con el ECO', Array.isArray(t.eco) && t.eco.length > 0);
    (t.eco || []).forEach(function (ref) {
      comprobar(t.id + ' enlaza a una tarea real del ECO: ' + ref, TEMARIO.tarea(ref) !== null);
    });
  });
});

comprobar('tarea() rechaza un dominio inventado', TEMARIO.tarea('inventado:0') === null);
comprobar('tarea() rechaza un índice fuera de rango', TEMARIO.tarea('personas:99') === null);

// Cobertura: los tres dominios del ECO deben aparecer en el temario. Si uno no
// aparece, hay una parte del examen que no estás estudiando.
const dominiosCubiertos = new Set();
TEMARIO.temas('pmbok7').forEach(function (t) {
  t.eco.forEach(function (ref) {
    const x = TEMARIO.tarea(ref);
    if (x) dominiosCubiertos.add(x.dominioId);
  });
});
igual('el temario toca los tres dominios del ECO', dominiosCubiertos.size, 3);


// ── Notas propias del ECO ───────────────────────────────────────────────────
// El listado textual de facilitadores de PMI se eliminó al publicar el sitio: era
// texto con copyright. En su lugar hay explicación propia de cada tarea. Estas
// pruebas vigilan que no falte ninguna y que nadie vuelva a meter la lista.
comprobar('no queda rastro de ECO.FACILITADORES', typeof ECO.FACILITADORES === 'undefined');
comprobar('no queda la función facilitadores()', typeof ECO.facilitadores === 'undefined');

let notasFaltantes = [];
ECO.dominios.forEach(function (d) {
  d.tareas.forEach(function (t, i) {
    const clave = d.id + ':' + i;
    const nota = ECO_NOTAS[clave];
    if (!nota) { notasFaltantes.push(clave); return; }
    comprobar(clave + ' tiene idea propia', typeof nota.idea === 'string' && nota.idea.length > 80);
    comprobar(clave + ' tiene ejemplo propio', typeof nota.ejemplo === 'string' && nota.ejemplo.length > 60);
  });
});
igual('hay nota propia para las 26 tareas', notasFaltantes.length, 0);
igual('no sobran notas apuntando a tareas inexistentes',
  Object.keys(ECO_NOTAS).filter(k => TEMARIO.tarea(k) === null).length, 0);

// ── Edición generada desde el ECO ───────────────────────────────────────────
const eco26 = TEMARIO.edicion('eco2026');
comprobar('existe la edición ECO 2026', eco26 !== null);
comprobar('la edición del ECO está marcada como oficial', eco26.oficial === true);
igual('el ECO 2026 aporta 26 temas, uno por tarea', TEMARIO.temas('eco2026').length, 26);
igual('la edición del ECO tiene un grupo por dominio', eco26.grupos.length, ECO.dominios.length);
comprobar('cada tema del ECO trae su explicación y su ejemplo',
  TEMARIO.temas('eco2026').every(t => t.idea.length > 80 && t.ejemplo.indexOf('<p>') === 0));
comprobar('cada tema del ECO apunta a su propia tarea',
  TEMARIO.temas('eco2026').every(function (t) {
    const x = TEMARIO.tarea(t.eco[0]);
    return x !== null && x.tarea === t.nombre;
  }));
comprobar('la edición del ECO se genera, no se escribe a mano',
  eco26.grupos.every(g => g.temas.every(t => t.id.indexOf('eco-') === 0)));

// ── PMBOK 8 · plan de estudios ──────────────────────────────────────────────
const p8g = TEMARIO.edicion('pmbok8');
igual('PMBOK 8 ya tiene contenido', p8g.estado, 'disponible');
igual('PMBOK 8 trae los 13 módulos del plan de estudios', p8g.grupos.length, 13);
igual('PMBOK 8 trae 81 temas', TEMARIO.temas('pmbok8').length, 81);
comprobar('todo módulo de PMBOK 8 tiene al menos un tema',
  p8g.grupos.every(g => g.temas.length > 0));
comprobar('todo módulo de PMBOK 8 tiene introducción',
  p8g.grupos.every(g => typeof g.intro === 'string' && g.intro.length > 20));

// Ejemplos y diagramas: lo que convierte una lista de temas en material de estudio.
const t8 = TEMARIO.temas('pmbok8');
igual('los 81 temas traen ejemplo', t8.filter(t => t.ejemplo).length, 81);
comprobar('ningún ejemplo es un relleno corto',
  t8.every(t => t.ejemplo.length > 120));
comprobar('los ejemplos son HTML de párrafos',
  t8.every(t => t.ejemplo.indexOf('<p') === 0 && t.ejemplo.indexOf('</p>') !== -1));
comprobar('la idea quedó ampliada, no de una línea',
  t8.every(t => t.idea.length > 120));

const conGrafico = t8.filter(t => t.grafico);
comprobar('hay diagramas donde ayudan', conGrafico.length >= 10);
conGrafico.forEach(function (t) {
  comprobar(t.id + ': el diagrama es un SVG completo',
    t.grafico.indexOf('<svg') === 0 && t.grafico.slice(-6) === '</svg>');
  comprobar(t.id + ': el SVG declara viewBox para escalar',
    t.grafico.indexOf('viewBox=') !== -1);
  // Los colores salen de las variables del tema: un SVG con colores fijos se
  // vería mal si algún día la paleta cambia.
  comprobar(t.id + ': el SVG usa la paleta de la página',
    t.grafico.indexOf('var(--') !== -1);
  const abre = (t.grafico.match(/<rect|<text|<line|<path/g) || []).length;
  comprobar(t.id + ': el SVG tiene contenido dibujado', abre > 0);
});


// ── Informe ─────────────────────────────────────────────────────────────────
console.log('\n  ' + ok + ' pruebas pasaron');
if (fallos.length) {
  console.log('  ' + fallos.length + ' FALLARON:\n');
  fallos.forEach(f => console.log('    ✗ ' + f));
  process.exit(1);
}
console.log('  banco semilla: ' + PREGUNTAS_SEMILLA.length + ' preguntas');
console.log('  temario: ' + TEMARIO.ediciones.map(function (e) {
  return e.nombre + ' ' + TEMARIO.temas(e.id).length;
}).join(' · ') + '\n');
