/**
 * Examination Content Outline (ECO) del PMP — actualización de JULIO DE 2026.
 *
 * ESTE ARCHIVO ES LA COLUMNA VERTEBRAL DEL PROYECTO.
 *
 * El examen PMP NO se basa en la Guía del PMBOK: se basa en este esquema. Por eso
 * toda pregunta se etiqueta con dominio + tarea, y el resultado se reporta por
 * dominio. Una edición nueva del PMBOK no cambia nada aquí; solo un ECO nuevo lo
 * hace — como el de 2026, que reescribió los tres dominios.
 *
 * Transcrito del PDF oficial «Esquema del contenido del examen: julio del 2026»
 * (© 2025 Project Management Institute). Cambios grandes frente al ECO de 2021:
 *
 *   · Entorno de negocio salta de 8 % a 26 %. Ya no es el dominio pequeño.
 *   · RIESGO, CONTROL DE CAMBIOS e IMPEDIMENTOS se mudaron de Procesos y Personas
 *     a Entorno de negocio. Es el cambio que más reetiquetado exige.
 *   · Los enfoques pasan de ~50/50 a 40 % predictivo y 60 % adaptativo/ágil e híbrido.
 *   · Aparecen sostenibilidad e inteligencia artificial como temas transversales.
 *
 * `js/prueba-motor.js` comprueba que los pesos sumen 100 y que las tareas cuadren.
 */

const ECO = {
  version: '2026-07',
  vigenteDesde: 'julio de 2026',

  dominios: [
    {
      id: 'personas',
      nombre: 'Personas',
      nombreEn: 'People',
      peso: 33,
      descripcion: 'Visión común, conflicto, liderazgo del equipo e interesados.',
      tareas: [
        'Desarrollar una visión común',
        'Gestionar los conflictos',
        'Dirigir al equipo de proyecto',
        'Involucrar a los interesados',
        'Alinear las expectativas de los interesados',
        'Gestionar las expectativas de los interesados',
        // El PDF oficial escribe aquí «Ayudan a garantizar la transferencia de
        // conocimientos.» — en plural y con punto final, a diferencia del resto de
        // tareas, que van en infinitivo y sin punto. Es un defecto de la traducción
        // al español de PMI; se conserva la forma correcta por legibilidad.
        'Ayudar a garantizar la transferencia de conocimientos',
        'Planificar y gestionar la comunicación'
      ]
    },
    {
      id: 'procesos',
      nombre: 'Proceso',
      nombreEn: 'Process',
      peso: 41,
      descripcion: 'La gestión técnica: alcance, valor, recursos, finanzas, calidad, cronograma y cierre.',
      tareas: [
        'Desarrollar un plan para la dirección del proyecto integrado y planificar la entrega',
        'Desarrollar y gestionar el alcance del proyecto',
        'Ayudar a garantizar una entrega basada en el valor',
        'Planificar y gestionar los recursos',
        'Planificar y gestionar adquisiciones',
        'Planificar y gestionar las finanzas',
        'Planificar y optimizar la calidad de los productos/entregables',
        'Planificar y gestionar el cronograma',
        'Evaluar el estado del proyecto',
        'Gestionar el cierre del proyecto'
      ]
    },
    {
      id: 'negocio',
      nombre: 'Entorno de negocio',
      nombreEn: 'Business Environment',
      peso: 26,
      descripcion: 'Gobernanza, cumplimiento, cambios, impedimentos, riesgo y entorno externo.',
      tareas: [
        'Definir y establecer la gobernanza del proyecto',
        'Planificar y gestionar el cumplimiento de proyectos',
        'Gestionar y controlar los cambios',
        'Eliminar impedimentos y gestionar incidentes',
        'Planificar y gestionar el riesgo',
        'Mejora continua',
        'Apoyar el cambio organizacional',
        'Evaluar los cambios en el entorno empresarial externo'
      ]
    }
  ],

  /**
   * El otro eje del examen: los enfoques atraviesan los tres dominios y no se
   * limitan a ninguna tarea concreta. El ECO 2026 fija 40 % predictivo y el 60 %
   * restante repartido entre adaptativo/ágil e híbrido.
   */
  enfoques: [
    { id: 'predictivo', nombre: 'Predictivo', objetivo: 40 },
    { id: 'agil', nombre: 'Adaptativo/Ágil e Híbrido', objetivo: 60 }
  ]
};

/** Devuelve el dominio por id, o null. */
ECO.dominio = function (id) {
  return ECO.dominios.find(d => d.id === id) || null;
};

/**
 * Reparte un total de preguntas entre dominios según su peso, sin perder ninguna.
 *
 * `soloIds` limita el reparto a un subconjunto — lo usa el modo de práctica por
 * dominio. Los pesos se renormalizan sobre lo elegido, así que practicar solo
 * Personas y Proceso conserva la proporción 33:41 entre ambos.
 */
ECO.repartir = function (total, soloIds) {
  const usar = (soloIds && soloIds.length)
    ? ECO.dominios.filter(d => soloIds.indexOf(d.id) !== -1)
    : ECO.dominios;
  if (!usar.length) return {};

  const suma = usar.reduce((a, d) => a + d.peso, 0);
  const crudo = usar.map(d => ({ id: d.id, exacto: total * d.peso / suma }));
  const reparto = crudo.map(c => ({ id: c.id, n: Math.floor(c.exacto), resto: c.exacto % 1 }));
  let faltan = total - reparto.reduce((a, r) => a + r.n, 0);

  // Los que más perdieron al truncar recuperan primero.
  reparto.sort((a, b) => b.resto - a.resto);
  for (let i = 0; faltan > 0; i = (i + 1) % reparto.length, faltan--) reparto[i].n++;

  const salida = {};
  reparto.forEach(r => { salida[r.id] = r.n; });
  return salida;
};


if (typeof module !== 'undefined') module.exports = { ECO };
