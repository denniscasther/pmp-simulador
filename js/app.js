/**
 * Interfaz del simulador. Toda la lógica de examen vive en `js/motor.js`;
 * aquí solo se pinta y se recogen eventos.
 */

(function () {
  'use strict';

  const $ = id => document.getElementById(id);
  const BANCO = PREGUNTAS_SEMILLA;
  const LETRAS = 'ABCDEFGH';

  let ex = null;
  let latido = null;

  // ── Utilidades ────────────────────────────────────────────────────────────

  const texto = (el, t) => { el.textContent = t; };

  function reloj(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const g = s % 60;
    const dd = n => String(n).padStart(2, '0');
    return h > 0 ? h + ':' + dd(m) + ':' + dd(g) : dd(m) + ':' + dd(g);
  }

  function mostrar(vista) {
    ['inicio', 'temario', 'examen', 'descanso', 'resultado'].forEach(function (v) {
      $('vista-' + v).classList.toggle('oculta', v !== vista);
    });
    window.scrollTo(0, 0);
  }

  /** Cuántas preguntas hay por dominio en el banco. */
  function cobertura() {
    const c = {};
    ECO.dominios.forEach(function (d) {
      c[d.id] = BANCO.filter(p => p.dominio === d.id).length;
    });
    return c;
  }

  // ── Inicio ────────────────────────────────────────────────────────────────

  const MODOS = [
    {
      id: 'completo', titulo: 'Examen completo',
      desc: '180 preguntas, 240 minutos, tres secciones con dos descansos. Idéntico al real.',
      total: 180, minutos: 240
    },
    {
      id: 'corto', titulo: 'Simulacro de una sección',
      desc: '60 preguntas al mismo ritmo del examen real. Una sola sección, sin descanso.',
      total: 60
    },
    {
      id: 'personas', titulo: 'Práctica · Personas',
      desc: 'Solo el dominio de Personas (33 % del examen), cronometrado igual.',
      total: 20, dominios: ['personas']
    },
    {
      id: 'procesos', titulo: 'Práctica · Proceso',
      desc: 'Solo el dominio de Proceso (41 % del examen), cronometrado igual.',
      total: 20, dominios: ['procesos']
    }
  ];

  function pintarInicio() {
    pintarEdiciones();
    const cob = cobertura();

    $('modos').innerHTML = '';
    MODOS.forEach(function (m) {
      const disponibles = m.dominios
        ? m.dominios.reduce((a, id) => a + cob[id], 0)
        : BANCO.length;

      const b = document.createElement('button');
      b.className = 'tarjeta';
      b.disabled = disponibles === 0;
      b.innerHTML =
        '<h3>' + m.titulo + '</h3><p>' + m.desc + '</p>' +
        '<p class="meta">' +
        (disponibles === 0
          ? 'Sin preguntas en el banco todavía.'
          : disponibles < m.total
            ? 'El banco tiene ' + disponibles + ' de las ' + m.total + ' que pide este modo: saldrá más corto.'
            : m.total + ' preguntas') +
        '</p>';
      b.addEventListener('click', () => iniciar(m));
      $('modos').appendChild(b);
    });

    const cont = $('cobertura');
    cont.innerHTML = '';
    ECO.dominios.forEach(function (d) {
      const ideal = ECO.repartir(170)[d.id];
      const hay = cob[d.id];
      const pct = Math.min(100, Math.round(hay * 100 / ideal));
      const fila = document.createElement('div');
      fila.className = 'fila';
      fila.innerHTML =
        '<div class="fila-nombre"><strong>' + d.nombre + '</strong>' +
        '<small>' + d.peso + ' % del examen · ' + d.tareas.length + ' tareas del ECO</small>' +
        '<div class="medidor"><i style="width:' + pct + '%"></i></div></div>' +
        '<div class="fila-dato">' + hay + ' / ' + ideal + '</div>';
      cont.appendChild(fila);
    });

    const total = BANCO.length;
    const nota = document.createElement('p');
    nota.className = 'nota';
    nota.style.marginTop = '16px';
    nota.textContent = 'El banco tiene ' + total + ' preguntas. Un examen completo necesita 180, ' +
      'repartidas 56 / 70 / 44 según los pesos del ECO de julio 2026. Mientras no se llegue ahí, ' +
      'los exámenes salen más cortos y el simulador lo dice en pantalla en vez de rellenar con repetidas.';
    cont.appendChild(nota);
  }

  // ── Temario ───────────────────────────────────────────────────────────────

  function pintarEdiciones() {
    const cont = $('ediciones');
    cont.innerHTML = '';

    TEMARIO.ediciones.forEach(function (ed) {
      const n = TEMARIO.temas(ed.id).length;
      const b = document.createElement('button');
      b.className = 'tarjeta' + (ed.oficial ? ' destacada' : '');
      b.innerHTML =
        '<h3>' + ed.nombre + (ed.oficial ? ' <span class="sello">oficial</span>' : '') + '</h3>' +
        '<p>' + ed.subtitulo + '</p>' +
        '<p class="meta">' +
        (ed.estado !== 'disponible'
          ? 'Sin contenido cargado — abre para ver por qué'
          : ed.oficial
            ? n + ' tareas con sus facilitadores · esto es lo que se evalúa'
            : n + ' temas, cruzados con el ECO') +
        '</p>';
      b.addEventListener('click', () => abrirTemario(ed.id));
      cont.appendChild(b);
    });
  }

  /** Pinta las referencias al ECO de un tema. Un enlace roto se dice, no se esconde. */
  function refsEco(tema) {
    if (!tema.eco || !tema.eco.length) return '';
    // En la edición generada desde el ECO, el tema YA es la tarea: repetirla sobra.
    if (tema.id.indexOf('eco-') === 0) return '';
    let html = '<div class="refs"><p>Dónde te lo evalúan</p>';
    tema.eco.forEach(function (ref) {
      const t = TEMARIO.tarea(ref);
      html += t
        ? '<span class="ref">' + t.dominio + ' · ' + t.tarea + '</span>'
        : '<span class="ref">⚠ enlace roto: ' + ref + '</span>';
    });
    return html + '</div>';
  }

  /** Cuántas preguntas del banco entrenan este tema. */
  function cuantasPreguntas(tema) {
    if (!tema.eco || !tema.eco.length) return 0;
    return BANCO.filter(function (p) {
      return tema.eco.indexOf(p.dominio + ':' + p.tarea) !== -1;
    }).length;
  }

  /** Marca en la cabecera los temas que el banco todavía no entrena. */
  function insignia(tema) {
    const n = cuantasPreguntas(tema);
    return n === 0
      ? '<span class="insignia vacia" title="Ninguna pregunta del banco entrena este tema">sin preguntas</span>'
      : '<span class="insignia" title="Preguntas del banco que entrenan este tema">' + n + '</span>';
  }

  /**
   * El cuerpo se arma con los campos que existan. Los temas del PMBOK llevan
   * idea/práctica/examen escritos a mano; los del ECO llevan los facilitadores
   * oficiales de PMI, que no se parafrasean: se citan como están.
   */
  function cuerpoTema(t) {
    let html = '';

    if (t.idea || t.practica || t.examen) {
      html += '<dl>';
      if (t.idea) html += '<dt>La idea</dt><dd>' + t.idea + '</dd>';
      if (t.practica) html += '<dt>En la práctica</dt><dd>' + t.practica + '</dd>';
      if (t.examen) html += '<dt>Cómo cae en el examen</dt><dd>' + t.examen + '</dd>';
      html += '</dl>';
    }

    if (t.apuntes) {
      html += '<dl><dt>Apuntes de la clase</dt></dl>' + t.apuntes;
    }

    // Marcas de tiempo: enlazan al minuto exacto del video, no al principio.
    if (t.momentos && t.momentos.length) {
      html += '<dl><dt>Momentos clave</dt></dl><ul class="momentos">';
      t.momentos.forEach(function (m) {
        const mm = Math.floor(m.t / 60) + ':' + String(m.t % 60).padStart(2, '0');
        html += '<li><a href="https://www.youtube.com/watch?v=' + t.video + '&t=' + m.t + 's"'
             + ' target="_blank" rel="noopener"><span class="min">' + mm + '</span>' + m.txt + '</a></li>';
      });
      html += '</ul>';
    }

    if (t.video) {
      html += '<p class="ver-clase"><a href="https://www.youtube.com/watch?v=' + t.video + '"'
           + ' target="_blank" rel="noopener">▶ Ver la clase de Marco Calle en YouTube'
           + (t.duracion ? ' · ' + t.duracion : '') + '</a></p>';
    }

    // Un diagrama va antes del ejemplo: primero se ve la forma, luego el caso.
    if (t.grafico) {
      html += '<div class="grafico">' + t.grafico + '</div>';
    }

    if (t.ejemplo) {
      html += '<div class="ejemplo"><p class="ejemplo-cab">Por ejemplo</p>' + t.ejemplo + '</div>';
    }

    if (t.facilitadores && t.facilitadores.length) {
      html += '<dl><dt>Qué abarca · facilitadores oficiales del ECO</dt></dl><ul class="facilitadores">';
      t.facilitadores.forEach(function (f) { html += '<li>' + f + '</li>'; });
      html += '</ul>';
    }

    return html + refsEco(t);
  }

  function abrirTemario(id) {
    const ed = TEMARIO.edicion(id);
    if (!ed) return;

    texto($('tem-sub'), ed.subtitulo);
    texto($('tem-titulo'), ed.nombre);
    texto($('tem-resumen'), ed.resumen);

    const cuerpo = $('tem-cuerpo');
    cuerpo.innerHTML = '';

    // Edición sin fuente: se muestra el hueco con su explicación, no contenido inventado.
    if (ed.estado !== 'disponible') {
      const caja = document.createElement('div');
      caja.className = 'hueco';
      caja.innerHTML = ed.aviso.map(function (t) {
        return '<p>' + t.replace('js/temario.js', '<code>js/temario.js</code>') + '</p>';
      }).join('');
      cuerpo.appendChild(caja);
      mostrar('temario');
      return;
    }

    ed.grupos.forEach(function (g) {
      const sec = document.createElement('section');
      sec.className = 'grupo';
      sec.innerHTML = '<h2>' + g.nombre + '</h2><p class="intro">' + g.intro + '</p>';

      g.temas.forEach(function (t, i) {
        const caja = document.createElement('div');
        caja.className = 'tema';
        caja.innerHTML =
          '<button class="tema-cab">' +
            '<span class="marca-num">' + (i + 1) + '</span>' +
            '<span>' + t.nombre + '</span>' +
            insignia(t) +
            '<span class="flecha">›</span>' +
          '</button>' +
          '<div class="tema-cuerpo">' + cuerpoTema(t) + '</div>';

        caja.querySelector('.tema-cab').addEventListener('click', function () {
          caja.classList.toggle('abierto');
        });
        sec.appendChild(caja);
      });

      cuerpo.appendChild(sec);
    });

    mostrar('temario');
  }

  // ── Examen ────────────────────────────────────────────────────────────────

  function iniciar(modo) {
    ex = M.crearExamen(BANCO, {
      total: modo.total,
      minutos: modo.minutos,
      dominios: modo.dominios,
      semilla: Date.now()
    });

    if (!ex.total) { alert('El banco no tiene preguntas para este modo todavía.'); return; }

    mostrar('examen');
    pintar();
    latido = setInterval(tic, 1000);
    tic();
  }

  function tic() {
    if (!ex) return;

    if (ex.estado === 'descanso') {
      const q = M.msDescansoRestante(ex);
      texto($('reloj-descanso'), reloj(q));
      if (q <= 0) reanudar();
      return;
    }

    const q = M.restante(ex);
    const el = $('reloj');
    texto(el, reloj(q));
    el.classList.toggle('apremio', q < 15 * 60000 && q >= 5 * 60000);
    el.classList.toggle('critico', q < 5 * 60000);

    // Se acabó el tiempo: se cierra tal como esté, igual que en el examen real.
    if (q <= 0) terminar();
  }

  function pintar() {
    const it = ex.items[ex.actual];
    const p = it.pregunta;
    const r = M.rangoSeccion(ex, ex.seccion);
    const secciones = M.CONFIG.SECCIONES;

    texto($('etiqueta-seccion'), 'Sección ' + (ex.seccion + 1) + ' de ' + secciones);
    texto($('etiqueta-progreso'), (ex.actual - r.desde + 1) + ' de ' + (r.hasta - r.desde));
    texto($('numero'), 'Pregunta ' + it.n + ' · ' + ECO.dominio(p.dominio).nombre);
    texto($('enunciado'), p.enunciado);

    const inst = $('instruccion');
    inst.classList.toggle('oculta', p.tipo !== 'multiple');
    if (p.tipo === 'multiple') texto(inst, 'Elija ' + p.correctas.length + ' respuestas.');

    const cont = $('opciones');
    cont.innerHTML = '';
    p.opciones.forEach(function (o, i) {
      const elegida = p.tipo === 'multiple'
        ? Array.isArray(it.respuesta) && it.respuesta.indexOf(o.id) !== -1
        : it.respuesta === o.id;

      const b = document.createElement('button');
      b.className = 'opcion' + (elegida ? ' elegida' : '');
      b.innerHTML = '<span class="letra">' + LETRAS[i] + '</span><span>' + o.texto + '</span>';
      b.addEventListener('click', () => elegir(o.id));
      cont.appendChild(b);
    });

    const bm = $('btn-marcar');
    bm.classList.toggle('activa', it.marcada);
    texto(bm, it.marcada ? 'Marcada para revisar' : 'Marcar para revisar');

    $('btn-anterior').disabled = ex.actual <= r.desde;
    texto($('btn-siguiente'), ex.actual >= r.hasta - 1 ? 'Terminar sección' : 'Siguiente');
  }

  function elegir(idOpcion) {
    const it = ex.items[ex.actual];
    if (it.pregunta.tipo === 'multiple') {
      const actual = Array.isArray(it.respuesta) ? it.respuesta.slice() : [];
      const i = actual.indexOf(idOpcion);
      if (i === -1) actual.push(idOpcion); else actual.splice(i, 1);
      M.responder(ex, actual.length ? actual : null);
    } else {
      M.responder(ex, idOpcion);
    }
    pintar();
  }

  /**
   * Confirmación explícita antes de cerrar sección. Es el único punto sin
   * vuelta atrás del simulador, así que se dice con todas sus letras.
   */
  function intentarCerrarSeccion() {
    const r = M.rangoSeccion(ex, ex.seccion);
    const sinResponder = ex.items.slice(r.desde, r.hasta).filter(i => i.respuesta === null).length;
    const marcadas = ex.items.slice(r.desde, r.hasta).filter(i => i.marcada).length;

    let aviso = 'Vas a cerrar esta sección.\n\nNo podrás volver a estas preguntas.';
    if (sinResponder) aviso += '\n\nQuedan ' + sinResponder + ' sin responder.';
    if (marcadas) aviso += '\nTienes ' + marcadas + ' marcadas para revisar.';
    aviso += '\n\n¿Continuar?';

    if (!confirm(aviso)) return;

    const habraDescanso = M.tocaDescanso(ex);
    const tomar = habraDescanso
      ? confirm('Puedes tomar 10 minutos de descanso.\n\nEl reloj del examen se detiene.\n\n¿Tomar el descanso?')
      : false;

    M.cerrarSeccion(ex, tomar);

    if (ex.estado === 'terminado') { terminar(); return; }
    if (ex.estado === 'descanso') { mostrar('descanso'); tic(); return; }
    pintar();
  }

  function reanudar() {
    M.reanudar(ex);
    mostrar('examen');
    pintar();
    tic();
  }

  // ── Mapa ──────────────────────────────────────────────────────────────────

  function abrirMapa() {
    const r = M.rangoSeccion(ex, ex.seccion);
    const rej = $('rejilla');
    rej.innerHTML = '';

    for (let i = r.desde; i < r.hasta; i++) {
      const it = ex.items[i];
      const b = document.createElement('button');
      b.className = 'celda' +
        (it.respuesta !== null ? ' respondida' : '') +
        (it.marcada ? ' marcada' : '') +
        (i === ex.actual ? ' actual' : '');
      texto(b, String(it.n));
      b.addEventListener('click', function () {
        M.irA(ex, i); cerrarMapa(); pintar();
      });
      rej.appendChild(b);
    }

    texto($('btn-terminar-seccion'),
      r.hasta >= ex.total ? 'Terminar el examen' : 'Cerrar sección y continuar');
    $('mapa').classList.remove('oculta');
  }

  const cerrarMapa = () => $('mapa').classList.add('oculta');

  // ── Resultado ─────────────────────────────────────────────────────────────

  function terminar() {
    clearInterval(latido);
    cerrarMapa();
    const r = M.finalizar(ex);

    texto($('res-titular'), r.correctas + ' de ' + r.total + ' · ' + r.porcentaje + ' %');
    texto($('res-resumen'),
      'Terminaste en ' + r.minutos + ' minutos. ' +
      (r.sinResponder ? r.sinResponder + ' preguntas quedaron sin responder. ' : '') +
      'Las 10 preguntas piloto no se contaron.');

    const cont = $('res-dominios');
    cont.innerHTML = '';
    ECO.dominios.forEach(function (d) {
      const x = r.porDominio[d.id];
      if (!x.total) return;
      const clase = x.porcentaje >= 65 ? 'bien' : x.porcentaje >= 50 ? '' : 'mal';
      const fila = document.createElement('div');
      fila.className = 'fila';
      fila.innerHTML =
        '<div class="fila-nombre"><strong>' + d.nombre + '</strong> ' +
        '<span class="banda ' + x.banda.id + '">' + x.banda.nombre + '</span>' +
        '<small>' + x.correctas + ' de ' + x.total + ' · pesa ' + d.peso + ' % del examen</small>' +
        '<div class="medidor"><i class="' + clase + '" style="width:' + x.porcentaje + '%"></i></div></div>' +
        '<div class="fila-dato">' + x.porcentaje + ' %</div>';
      cont.appendChild(fila);
    });

    const rev = $('res-revision');
    rev.innerHTML = '';
    ex.items.filter(i => i.puntua).forEach(function (it) {
      const p = it.pregunta;
      const bien = M.esCorrecta(p, it.respuesta);
      const dadas = Array.isArray(it.respuesta) ? it.respuesta : (it.respuesta ? [it.respuesta] : []);

      const caja = document.createElement('div');
      caja.className = 'revision ' + (bien ? 'bien' : 'mal');

      let html = '<p class="etiquetas">' + ECO.dominio(p.dominio).nombre + ' · ' +
        ECO.dominio(p.dominio).tareas[p.tarea] + ' · ' +
        (p.enfoque === 'agil' ? 'Ágil/Híbrido' : 'Predictivo') + '</p>' +
        '<p class="enunciado">' + it.n + '. ' + p.enunciado + '</p><div class="opciones">';

      p.opciones.forEach(function (o, i) {
        const esCorrectaOpc = p.correctas.indexOf(o.id) !== -1;
        const laElegi = dadas.indexOf(o.id) !== -1;
        const clase = esCorrectaOpc ? ' correcta' : (laElegi ? ' errada' : '');
        html += '<div class="opcion' + clase + '"><span class="letra">' + LETRAS[i] + '</span>' +
          '<span>' + o.texto + (laElegi ? ' <strong>← tu respuesta</strong>' : '') + '</span></div>';
      });

      html += '</div><p class="explicacion">' + p.explicacion + '</p>';
      caja.innerHTML = html;
      rev.appendChild(caja);
    });

    mostrar('resultado');
  }

  // ── Eventos ───────────────────────────────────────────────────────────────

  $('btn-siguiente').addEventListener('click', function () {
    const r = M.rangoSeccion(ex, ex.seccion);
    if (ex.actual >= r.hasta - 1) intentarCerrarSeccion();
    else { M.irA(ex, ex.actual + 1); pintar(); }
  });
  $('btn-anterior').addEventListener('click', function () {
    M.irA(ex, ex.actual - 1); pintar();
  });
  $('btn-marcar').addEventListener('click', function () { M.marcar(ex); pintar(); });
  $('btn-mapa').addEventListener('click', abrirMapa);
  $('btn-cerrar-mapa').addEventListener('click', cerrarMapa);
  $('btn-terminar-seccion').addEventListener('click', function () { cerrarMapa(); intentarCerrarSeccion(); });
  $('btn-reanudar').addEventListener('click', reanudar);
  $('btn-volver').addEventListener('click', function () { ex = null; pintarInicio(); mostrar('inicio'); });
  $('btn-volver-temario').addEventListener('click', function () { mostrar('inicio'); });

  // Cerrar la pestaña a mitad de examen se avisa: el reloj no se recupera.
  window.addEventListener('beforeunload', function (e) {
    if (ex && ex.estado !== 'terminado') { e.preventDefault(); e.returnValue = ''; }
  });

  pintarInicio();
})();
