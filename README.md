# simulador·pmp

**Publicado en https://pmp.wallpari.pe** — HTML estático servido por GitHub Pages.
Para desplegar un cambio basta con empujar a `main`; Pages reconstruye solo.

## Dos certificaciones

| | Página | Examen |
|---|---|---|
| **PMP** | `index.html` | 180 preguntas · 240 min · 3 tramos con 2 descansos |
| **PMI-CPMAI** | `cpmai.html` | 120 preguntas · 160 min · una sola sección, sin descansos |

Se cambia entre ambas con el selector de arriba. Comparten motor e interfaz: `motor.js`
recibe el formato de cada examen y lo respeta sin saber de qué certificación se trata,
y `app.js` se parametriza con `CONFIG_PAGINA`, que cada página declara.

**CPMAI** trae su propio ECO 2025 —5 dominios, 37 tareas, 275 preguntas: 38 propias que
cubren las 37 tareas, más 237 adaptadas de terceros (ver la excepción más abajo)—
y una pestaña de **32 conceptos de IA con 8 diagramas**, porque no hay libro que comprar:
PMI vende el curso y el ECO es un índice.

```powershell
node prueba-motor.js    # 1163 pruebas · PMP
node prueba-cpmai.js    # 1774 pruebas · CPMAI
```

Las dos suites van aparte porque cada certificación define su propio `ECO` global.

El repositorio vive en la cuenta personal **`denniscasther`**, no en la
organización, por el dominio propio — mismo motivo que `coach-idiomas`:
transferir un repo con dominio personalizado rompe la verificación y tumba el sitio.

## Sobre el contenido publicado

Todo el texto es **propio, con una excepción declarada** (`cpmai-adaptadas.js`, más
abajo). Del ECO se conservan solo datos — dominios, pesos y títulos de las 26
tareas —; la explicación de cada una y sus ejemplos están escritos aquí. **El PDF
oficial del ECO es gratuito en pmi.org** y es donde debe consultarse el detalle
textual de PMI.

Los apuntes del curso en video son notas de estudio propias, con crédito y enlace
al minuto exacto de cada clase: para el contenido completo, el video de
**Marco Calle** (marcocalle.com).

### La excepción: `js/preguntas/cpmai-adaptadas*.js`

Esos archivos **no son material propio** y por eso viven aparte del banco de
`js/cpmai-preguntas.js`:

| Archivo | Contenido |
|---|---|
| `cpmai-adaptadas.js` | 119 preguntas · prueba de práctica 1 (falta la 119 del original) |
| `cpmai-adaptadas-2.js` | 118 preguntas · prueba de práctica 2 (faltan la 73 y la 110) |

Están adaptadas al español desde las pruebas de práctica de un simulador comercial
de terceros: los escenarios y las opciones son traducción adaptada del original, y
solo las explicaciones se reescribieron. Se publican por **decisión explícita del
autor del repositorio** (2026-08-31), como excepción declarada y acotada a la regla
de arriba.

Cada prueba tiene además **su propio modo** en la pantalla de inicio, para poder
rendirla sola sin mezclarla con las preguntas propias — un modo puede declarar su
banco acotado con el campo `banco` de `CONFIG_PAGINA`.

La separación por archivos es deliberada: `cpmai.html` carga cada adaptado solo si
existe, así que **borrar esos archivos devuelve el sitio a material 100 % propio**
sin tocar ninguna otra cosa, y su modo desaparece solo. `prueba-cpmai.js` los valida
con el mismo rigor que el banco propio cuando los encuentra, y los ignora si no.

Simulador del examen **PMP** para prepararse rindiendo, no leyendo. Corre entero
en el navegador: sin cuentas, sin claves de API y sin costo de operación.

```powershell
cd C:\Plataformas\Proyectos\denniscasther\pmp-simulador
.\servir.ps1            # Python, PHP o Node — el primero que encuentre, en :8081
node prueba-motor.js    # 1163 pruebas, sin dependencias
```

**No se abre con doble clic.** Con `file://` el navegador trata cada archivo como
un origen distinto y las cosas dejan de comportarse como en producción.

---

## La decisión que gobierna el proyecto

**El examen PMP no se basa en la Guía del PMBOK.** Se rige por el
**Examination Content Outline (ECO)**, y el PMBOK es una referencia entre varias.
Por eso `js/eco.js` es la columna vertebral: toda pregunta se etiqueta con
dominio y tarea del ECO, y el resultado se reporta por dominio.

El proyecto sigue el **ECO de julio de 2026**, vigente desde esa fecha.

| Dominio | Peso | Tareas |
|---|---|---|
| Personas | 33 % | 8 |
| Proceso | 41 % | 10 |
| Entorno de negocio | 26 % | 8 |

Más un eje transversal que atraviesa los tres dominios: **40 % predictivo y 60 %
adaptativo/ágil e híbrido**.

### Qué cambió frente al ECO de 2021

Si vienes de material de estudio anterior, esto es lo que ya no aplica:

- **Entorno de negocio salta de 8 % a 26 %.** Dejó de ser el dominio pequeño que
  se podía descuidar: ahora es un cuarto del examen.
- **Riesgo, control de cambios e impedimentos se mudaron a Entorno de negocio**,
  desde Proceso y Personas. Es el cambio que más reetiquetado exige al migrar un
  banco de preguntas.
- Personas pasó de 14 tareas a 8, y Proceso de 17 a 10: se consolidaron.
- Los enfoques pasan de ~50/50 a **40/60 a favor de lo adaptativo**.
- Aparecen **sostenibilidad e inteligencia artificial** como temas transversales.

La consecuencia práctica es que **una edición nueva del PMBOK no obliga a tocar
nada aquí**. Solo un ECO nuevo lo hace — y este proyecto ya sobrevivió a uno.

> ⚠️ Los pesos y las tareas se transcribieron a mano del PDF oficial
> «Esquema del contenido del examen: julio del 2026» (© 2025 PMI). Verificar
> contra pmi.org antes de un examen real.

---

## Lo que replica del examen real

| Regla | Por qué importa |
|---|---|
| 180 preguntas · **240 minutos** | El ritmo real: ~1 min 20 s por pregunta. |
| Tres secciones | El ECO 2026 no publica el tamaño de cada tramo (ver abajo). |
| Dos descansos de 10 min | **No consumen tiempo de examen.** |
| **Una sección cerrada no se reabre** | La regla que más duele y que casi ningún simulador implementa. |
| Navegación libre dentro de la sección | Se puede ir y volver, y marcar para revisar. |
| **170 puntuadas + 10 piloto** | Las piloto se reparten al azar y jamás se señalan. |
| El tiempo agotado cierra el examen | Se corrige tal como esté. |

> **Sobre el tamaño de las secciones.** El ECO 2026 dice que el primer descanso va
> tras la *sección de estudio de casos* y el segundo «aproximadamente a mitad» de
> las preguntas independientes, pero **no publica cuántas preguntas tiene cada
> tramo**. Aquí se reparten en tercios iguales: es una aproximación deliberada y
> documentada en `js/motor.js`. Lo que sí se respeta literalmente es lo que
> importa — tres tramos, dos descansos, y sin retorno.

Los modos cortos conservan el ritmo proporcional en vez de dar tiempo de sobra:
entrenar sin la presión del reloj es justo lo que este simulador no quiere hacer.

---

## Estudiar el temario

Antes de rendir, la pantalla de inicio ofrece el **temario ordenado**, agrupado por
edición de la Guía del PMBOK. Cada tema trae tres cosas — *la idea*, *en la
práctica* y *cómo cae en el examen* — y, lo más importante, **el cruce con las
tareas del ECO que lo evalúan**. Un tema sin ECO asociado es un tema del que no
sabes si entra.

| Edición | Estado |
|---|---|
| **ECO 2026** · *oficial* | Las 26 tareas con sus **138 facilitadores** publicados por PMI. Es lo que se evalúa. |
| **PMBOK 7** | 23 temas: los 12 principios, los 8 dominios de desempeño, y adaptación/modelos/artefactos. |
| **PMBOK 8** | Los **13 módulos** del plan de estudios: 81 temas, **81 ejemplos y 14 diagramas**. ⚠️ Estructura a corregir, ver abajo. |
| **Curso PMBOK 8** | Apuntes propios de las clases en video de Marco Calle, con marcas de tiempo. |

### El botón del ECO es el que importa

Es el único temario que no es interpretación de nadie: cada tema es una tarea del
ECO y su contenido son los **facilitadores oficiales** — los ejemplos con los que
PMI define qué abarca cada tarea. Si algo no aparece ahí, no entra en el examen.

**No se escribe a mano: se genera desde `js/eco.js` al cargar la página.** Si el ECO
cambia, el temario cambia con él y no puede quedarse desfasado.

Cada tarea muestra además **cuántas preguntas del banco la entrenan**, y marca en
ámbar las que no tienen ninguna. Es el mapa de lo que falta escribir.

### De dónde sale cada edición

**ECO 2026** — transcrito del PDF oficial y gratuito de PMI, y **generado desde
`js/eco.js`**, no escrito a mano.

**PMBOK 7** — escrito desde conocimiento general de la 7ª edición. Es la edición
más desarrollada: cada tema trae idea, práctica y cómo cae en el examen.

**PMBOK 8** — la **estructura** viene del plan de estudios público del curso
«Project Management PMBOK 8th» de EducacionIT: 13 módulos con sus temas. Un
temario de curso es un índice, no el contenido protegido de la guía. **El texto de
cada tema es propio**, no transcrito de la Guía del PMBOK, que se licencia solo
para uso personal y prohíbe reproducción y modificación.

Es la edición más desarrollada del temario. Cada uno de los 81 temas trae:

- **La idea** — dos o tres frases, no una etiqueta.
- **Un ejemplo concreto** — una situación real con el desenlace, y en varios casos
  marcando qué respuesta es incorrecta y por qué.
- **Un diagrama** en los 14 temas donde una imagen explica mejor que un párrafo:
  portafolio/programa/proyecto, restricciones, matriz de interesados, etapas del
  equipo, los cuatro enfoques comparados, relaciones entre tareas, intensificar
  frente a ejecución rápida, tipos de contrato, control de cambios, costo de la
  calidad, valor ganado, tipos de incertidumbre, respuestas al riesgo y el ciclo
  de adaptación.

Los diagramas son **SVG en línea escritos a mano**, sin librerías, y usan las
variables de color de la página — si cambia la paleta, cambian con ella. Las
pruebas comprueban que cada uno sea un SVG completo, con `viewBox` y contenido.

> ⚠️ **Ojo con la etiqueta.** Pese al título «8th», ese plan de estudios reproduce
> la **arquitectura del PMBOK 7**: 12 principios, 8 dominios de desempeño,
> adaptación y modelos/métodos/artefactos. O la 8ª edición conserva esa estructura,
> o el curso está etiquetado por la edición vigente y no por su contenido. No se ha
> podido verificar cuál de las dos — contrástalo con una copia legítima.

Y lo de siempre: **el examen se rige por el ECO, no por el PMBOK**. Las dos
ediciones del PMBOK son apoyo conceptual; el botón «ECO 2026» es la especificación.


### ⚠️ La estructura real del PMBOK 8 — hallazgo del 2026-08-23

Las clases del curso de **Marco Calle** contradicen el plan de estudios de
EducacionIT sobre el que se construyó la pestaña `pmbok8`. Según ellas, la 8ª
edición **no conserva la arquitectura del PMBOK 7**:

| | PMBOK 7 | **PMBOK 8** |
|---|---|---|
| Principios | 12, sueltos | **6, agrupados en 3 dimensiones** (orientado al valor · proactivo · propiedad) |
| Dominios de desempeño | 8 (interesados, equipo, enfoque, planificación, trabajo, entrega, medición, incertidumbre) | **7** (gobernanza, alcance, cronograma, finanzas, interesados, recursos, riesgos) |
| Procesos | eliminados | **40, con entradas, herramientas y salidas** |
| Agrupación de procesos | — | **5 «áreas de foco»**: inicio, planificación, ejecución, monitoreo y control, cierre |

Las áreas de foco son la evolución de los *grupos de procesos* del PMBOK 6, y no
son fases: son cinco siempre, en todo proyecto, mientras que las fases las define
cada proyecto.

**Consecuencia:** los 13 módulos de la pestaña `pmbok8` describen el PMBOK 7. Hay
que reestructurarlos a 3 dimensiones + 6 principios + 7 dominios + 5 áreas de foco
+ 40 procesos. El contenido de los temas sigue siendo válido como material de
apoyo; lo que está mal es el andamiaje.

> Sigue sin verificarse contra una copia legítima de la guía. La fuente es un curso
> de terceros, no PMI.

---

## Las preguntas

**Regla del banco propio: aquí no entra material del examen real de PMI.** Sus
preguntas están bajo copyright y NDA. `js/preguntas/semilla.js` y
`js/cpmai-preguntas.js` se escriben de cero contra las tareas del ECO; si dudas
del origen de una pregunta, no la incluyas ahí.

El material adaptado de terceros va **en su propio archivo**, nunca mezclado con
el propio: hoy eso es `js/preguntas/cpmai-adaptadas.js` (ver la excepción descrita
arriba).

Cada pregunta lleva **explicación de por qué la correcta lo es y por qué las otras
no**. Eso es lo que convierte un simulador en material de estudio.

```js
{
  id: 'per-001',
  dominio: 'personas',        // personas | procesos | negocio
  tarea: 0,                   // índice en ECO.dominio(x).tareas
  enfoque: 'agil',            // predictivo | agil
  tipo: 'opcion',             // opcion (1 correcta) | multiple (varias)
  enunciado: '...',
  opciones: [{ id: 'a', texto: '...' }],
  correctas: ['c'],
  explicacion: '...'
}
```

`prueba-motor.js` valida cada pregunta del banco: id único, dominio y tarea
existentes, correctas presentes entre las opciones, tipo coherente con el número
de correctas y explicación no vacía.

---

## Estado del banco

**15 preguntas semilla.** Un examen completo necesita 180: **170 puntuadas
repartidas 56 / 70 / 44** según los pesos del ECO 2026, más 10 piloto.

Mientras no se llegue, los exámenes **salen más cortos y el simulador lo dice en
pantalla**, en vez de rellenar con repetidas y mentir sobre la composición. La
pantalla de inicio muestra la cobertura por dominio.

Escribir preguntas es el trabajo principal pendiente, y no es mecánico: hay que
cubrir las **26 tareas** del ECO 2026 en ambos enfoques.

---

## Estructura

```
pmp-simulador/
├── index.html            # las cuatro vistas: inicio, examen, descanso, resultado
├── servir.ps1            # servidor local (Python | PHP | Node)
├── prueba-motor.js       # 1163 pruebas, sin dependencias
├── css/estilos.css
└── js/
    ├── eco.js            # el ECO: dominios, pesos y las 26 tareas
    ├── eco-notas.js      # explicación propia de cada tarea, con ejemplo
    ├── temario.js        # el temario de estudio, cruzado con el ECO
    ├── motor.js          # armado, reloj, secciones, corrección · no toca el DOM
    ├── app.js            # interfaz
    └── preguntas/
        └── semilla.js    # el banco
```

`motor.js` no toca el DOM y se exporta como `M` tanto para el navegador como para
`require`. Esa separación es lo que permite probar el reloj y las secciones con un
reloj falso, sin abrir un navegador.

---

## Sobre el resultado

**PMI no publica su nota de corte ni su algoritmo.** El examen usa puntuación
psicométrica y el resultado real es una banda por dominio, no un porcentaje.

Las bandas de este simulador (*Above Target* ≥ 80, *Target* ≥ 65, *Below Target*
≥ 50) son una **heurística de estudio** documentada en `js/motor.js`. Sirven para
ver en qué dominio estás flojo. **No predicen si aprobarías** — ningún simulador
puede, y el que diga lo contrario te está mintiendo.

---

## Puntos frágiles

- **`confirm()` y `alert()` nativos.** El cierre de sección usa diálogos del
  navegador. Funcionan, pero bloquean la página, se ven mal en una sesión de 240
  minutos e **impiden probar la app por automatización**. Reemplazarlos por un
  modal propio es el pendiente de interfaz más valioso.
- **`beforeunload` bloquea el cierre programático** de la pestaña mientras hay un
  examen en curso. En producción es correcto — evita perder el examen por un clic
  accidental — pero hay que tenerlo presente al automatizar.
- **El navegador cachea los `.js` con fuerza.** Editar un archivo y recargar no
  basta: hay que recargar sin caché o no verás tu cambio. Ya costó un rato de
  depuración creyendo que un fallo seguía vivo cuando ya estaba corregido.
- **No hay persistencia.** Si se cierra la pestaña a mitad de examen, se pierde
  todo. El examen vive solo en memoria.
- **Solo hay opción única y respuesta múltiple.** El examen de 2026 incorporó
  además **caso o escenario** y **preguntas basadas en gráficos** (ambos nuevos),
  emparejamiento y emparejamiento mejorado, señalar y hacer clic, y lista
  desplegable. Los dos primeros son los que más cambian la experiencia: el caso de
  estudio agrupa varias preguntas sobre un mismo escenario y ocupa una sección
  entera del examen.

## Pendientes conocidos

- Llegar a 170 preguntas puntuadas cubriendo las **26 tareas del ECO 2026** en
  ambos enfoques, con el reparto 56 / 70 / 44. **Entorno de negocio es ahora el
  hueco más grande**: pasó a valer 26 % y el banco apenas lo cubre.
- Reemplazar `confirm()`/`alert()` por un modal propio.
- Guardar el examen en curso y el historial de resultados en `localStorage`.
- **Llenar PMBOK 8** con una copia legítima delante. La estructura ya está lista.
- Escribir preguntas para las **13 tareas del ECO que hoy no tienen ninguna** — la
  pantalla del temario las marca en ámbar.
- Enlazar cada pregunta con el tema del temario que la explica, para que al fallar
  te lleve directo a lo que hay que repasar.
- Modo repaso: repetir solo las falladas, o solo un dominio flojo.
- PWA (manifiesto y service worker) para instalarlo en el móvil, como coach-idiomas.
- Tipos de pregunta nuevos del ECO 2026, por orden de valor: **caso o escenario**
  (el que más pesa en la experiencia real), **basadas en gráficos**, emparejamiento,
  señalar y hacer clic, lista desplegable.
- Cubrir **sostenibilidad e inteligencia artificial**, que el ECO 2026 introduce
  como temas transversales y el banco actual ignora por completo.
