/**
 * Pruebas del módulo CPMAI. Sin dependencias: `node prueba-cpmai.js`.
 *
 * Van aparte de `prueba-motor.js` porque cada certificación define su propio ECO
 * global y no pueden convivir en el mismo proceso.
 */

const { ECO } = require('./js/cpmai-eco.js');
global.ECO = ECO;
const { CPMAI_NOTAS } = require('./js/cpmai-notas.js');
global.CPMAI_NOTAS = CPMAI_NOTAS;
global.CPMAI_CONCEPTOS = require('./js/cpmai-conceptos.js').CPMAI_CONCEPTOS;
const { TEMARIO } = require('./js/cpmai-temario.js');
const { PREGUNTAS_CPMAI } = require('./js/cpmai-preguntas.js');
const M = require('./js/motor.js');

// Bancos adaptados de material de terceros. Van aparte del propio, y mientras
// estén presentes se validan con el mismo rigor.
function cargarAdaptado(ruta, clave) {
  try { return require(ruta)[clave] || []; } catch (e) { return []; }
}
const PREGUNTAS_EXTRA = cargarAdaptado('./js/preguntas/cpmai-adaptadas.js', 'PREGUNTAS_CPMAI_EXTRA')
  .concat(cargarAdaptado('./js/preguntas/cpmai-adaptadas-2.js', 'PREGUNTAS_CPMAI_EXTRA2'))
  .concat(cargarAdaptado('./js/preguntas/cpmai-adaptadas-3.js', 'PREGUNTAS_CPMAI_EXTRA3'))
  .concat(cargarAdaptado('./js/preguntas/cpmai-adaptadas-4.js', 'PREGUNTAS_CPMAI_EXTRA4'))
  .concat(cargarAdaptado('./js/preguntas/cpmai-adaptadas-5.js', 'PREGUNTAS_CPMAI_EXTRA5'));
const TODAS = PREGUNTAS_CPMAI.concat(PREGUNTAS_EXTRA);

let ok = 0, fallos = [];
function comprobar(nombre, cond, detalle) {
  if (cond) { ok++; } else { fallos.push(nombre + (detalle ? ' → ' + detalle : '')); }
}
const igual = (n, a, b) => comprobar(n, a === b, 'esperado ' + b + ', obtenido ' + a);

// ── El ECO ──────────────────────────────────────────────────────────────────
igual('los pesos suman 100', ECO.dominios.reduce((a, d) => a + d.peso, 0), 100);
igual('hay cinco dominios', ECO.dominios.length, 5);
igual('37 tareas en total', ECO.dominios.reduce((a, d) => a + d.tareas.length, 0), 37);
igual('negocio y datos pesan 26 % cada uno',
  ECO.dominio('negocio').peso + ECO.dominio('datos').peso, 52);
igual('el reparto de 100 puntuadas cae en los pesos oficiales',
  JSON.stringify(ECO.repartir(100)),
  JSON.stringify({ responsable: 15, negocio: 26, datos: 26, modelos: 16, operacion: 17 }));

// ── Notas propias ───────────────────────────────────────────────────────────
let sinNota = [];
ECO.dominios.forEach(function (d) {
  d.tareas.forEach(function (t, i) {
    const nota = CPMAI_NOTAS[d.id + ':' + i];
    if (!nota) { sinNota.push(d.id + ':' + i); return; }
    comprobar(d.id + ':' + i + ' tiene idea propia', nota.idea.length > 70);
    comprobar(d.id + ':' + i + ' tiene ejemplo propio', nota.ejemplo.length > 60);
  });
});
igual('las 37 tareas tienen nota', sinNota.length, 0);
igual('no sobran notas huérfanas',
  Object.keys(CPMAI_NOTAS).filter(k => TEMARIO.tarea(k) === null).length, 0);

// ── El banco ────────────────────────────────────────────────────────────────
const vistos = {};
TODAS.forEach(function (p) {
  comprobar('id único: ' + p.id, !vistos[p.id]); vistos[p.id] = true;
  const d = ECO.dominio(p.dominio);
  comprobar(p.id + ' apunta a un dominio real', d !== null);
  comprobar(p.id + ' apunta a una tarea existente', d && p.tarea >= 0 && p.tarea < d.tareas.length);
  const ids = p.opciones.map(o => o.id);
  comprobar(p.id + ' toda correcta existe entre las opciones', p.correctas.every(c => ids.indexOf(c) !== -1));
  comprobar(p.id + ' el tipo coincide con el número de correctas',
    (p.tipo === 'opcion' && p.correctas.length === 1) || (p.tipo === 'multiple' && p.correctas.length > 1));
  comprobar(p.id + ' explica el porqué', p.explicacion.length > 80);
});
comprobar('el banco cubre los cinco dominios',
  new Set(PREGUNTAS_CPMAI.map(p => p.dominio)).size === 5);

// ── El formato del examen ───────────────────────────────────────────────────
// Lo que distingue a la CPMAI de la PMP: va de corrido y no hay descansos.
let t = 0;
const banco = [];
ECO.dominios.forEach(function (d) {
  const modelos = PREGUNTAS_CPMAI.filter(p => p.dominio === d.id);
  for (let i = 0; i < 60; i++) {
    banco.push(Object.assign({}, modelos[i % modelos.length], { id: d.id + '-s-' + i }));
  }
});

const ex = M.crearExamen(banco, { total: 120, minutos: 160, piloto: 20, secciones: 1, semilla: 3, ahora: () => t });
igual('el examen trae 120 preguntas', ex.total, 120);
igual('reserva 20 piloto', ex.items.filter(i => !i.puntua).length, 20);
igual('dura 160 minutos', ex.msLimite, 160 * 60000);
igual('es una sola sección', ex.secciones, 1);
comprobar('no hay descanso que tomar', M.tocaDescanso(ex) === false);
comprobar('se puede navegar por todo el examen', M.irA(ex, 119) === true);

const r = M.finalizar(ex);
igual('solo puntúan 100', r.total, 100);
igual('reporta los cinco dominios', Object.keys(r.porDominio).length, 5);

// El motor de la PMP no se rompió: sigue aceptando su propio formato.
const exPmp = M.crearExamen(banco, { total: 180, minutos: 240, semilla: 4, ahora: () => t });
igual('el formato por defecto sigue siendo el de la PMP', exPmp.secciones, 3);
igual('y sus 10 piloto', exPmp.piloto, 10);

// ── La pestaña de conceptos ─────────────────────────────────────────────────
// Es material propio, no derivado del ECO, así que se comprueba aparte.
const conc = TEMARIO.edicion('conceptos');
comprobar('existe la pestaña de conceptos', conc !== null);
igual('trae seis bloques', conc.grupos.length, 6);
const tc = TEMARIO.temas('conceptos');
comprobar('tiene al menos 30 temas', tc.length >= 30);
comprobar('todo tema explica la idea', tc.every(t => t.idea.length > 90));
comprobar('todo tema trae ejemplo', tc.every(t => t.ejemplo.indexOf('<p') === 0));
comprobar('todo tema cruza con el ECO', tc.every(t => t.eco.length > 0));
comprobar('ningún enlace al ECO está roto',
  tc.every(t => t.eco.every(r => TEMARIO.tarea(r) !== null)));

const conGrafico = tc.filter(t => t.grafico);
comprobar('hay diagramas donde ayudan', conGrafico.length >= 6);
conGrafico.forEach(function (t) {
  comprobar(t.id + ': el diagrama es un SVG completo',
    t.grafico.indexOf('<svg') === 0 && t.grafico.slice(-6) === '</svg>');
  comprobar(t.id + ': declara viewBox para escalar', t.grafico.indexOf('viewBox=') !== -1);
  comprobar(t.id + ': usa la paleta de la página, no colores fijos',
    t.grafico.indexOf('var(--') !== -1);
});

// ── Informe ─────────────────────────────────────────────────────────────────
console.log('\n  ' + ok + ' pruebas pasaron');
if (fallos.length) {
  console.log('  ' + fallos.length + ' FALLARON:\n');
  fallos.forEach(f => console.log('    ✗ ' + f));
  process.exit(1);
}
console.log('  CPMAI: ' + PREGUNTAS_CPMAI.length + ' preguntas propias'
  + (PREGUNTAS_EXTRA.length ? ' + ' + PREGUNTAS_EXTRA.length + ' adaptadas' : '') + ' · '
  + TEMARIO.temas('eco-cpmai').length + ' tareas del ECO · '
  + TEMARIO.temas('conceptos').length + ' conceptos con '
  + TEMARIO.temas('conceptos').filter(t => t.grafico).length + ' diagramas\n');
