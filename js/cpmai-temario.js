/**
 * Temario del PMI-CPMAI, generado desde `js/cpmai-eco.js` y `js/cpmai-notas.js`.
 *
 * Igual que el temario del ECO de la PMP: no se escribe a mano. Si el ECO cambia,
 * el temario cambia con él y no puede quedarse desfasado.
 */

const TEMARIO = { ediciones: [] };

(function construirTemarioCpmai() {
  if (typeof ECO === 'undefined') return;

  TEMARIO.ediciones.push({
    id: 'eco-cpmai',
    nombre: 'ECO CPMAI',
    subtitulo: 'El esquema oficial del examen · edición 2025',
    estado: 'disponible',
    oficial: true,
    resumen: 'Los cinco dominios con sus 37 tareas, cada una explicada con un ejemplo. Los ' +
      'dominios, los pesos y los títulos de las tareas son del ECO oficial; la explicación es ' +
      'propia. El PDF del ECO es gratuito en pmi.org y ahí está el detalle textual de PMI.',
    grupos: ECO.dominios.map(function (d) {
      return {
        id: d.id,
        nombre: d.nombre + ' · ' + d.peso + ' % del examen',
        intro: d.descripcion,
        temas: d.tareas.map(function (t, i) {
          const nota = (typeof CPMAI_NOTAS !== 'undefined') ? CPMAI_NOTAS[d.id + ':' + i] : null;
          return {
            id: 'cpmai-' + d.id + '-' + i,
            nombre: t,
            idea: nota ? nota.idea : '',
            ejemplo: nota ? '<p>' + nota.ejemplo + '</p>' : '',
            eco: [d.id + ':' + i]
          };
        })
      };
    })
  });
})();

/** Mismas utilidades que el temario de la PMP, para que `app.js` no note la diferencia. */
TEMARIO.edicion = function (id) {
  return TEMARIO.ediciones.find(e => e.id === id) || null;
};

TEMARIO.temas = function (idEdicion) {
  const e = TEMARIO.edicion(idEdicion);
  if (!e) return [];
  return e.grupos.reduce((a, g) => a.concat(g.temas), []);
};

TEMARIO.tarea = function (ref) {
  const partes = String(ref).split(':');
  const d = ECO.dominio(partes[0]);
  const i = parseInt(partes[1], 10);
  if (!d || isNaN(i) || i < 0 || i >= d.tareas.length) return null;
  return { dominio: d.nombre, dominioId: d.id, tarea: d.tareas[i] };
};

if (typeof module !== 'undefined') module.exports = { TEMARIO: TEMARIO };
