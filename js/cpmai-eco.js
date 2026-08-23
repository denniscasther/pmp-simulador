/**
 * Examination Content Outline del PMI-CPMAI — edición 2025.
 *
 * PMI Certified Professional in Managing AI. Nace de la adquisición de Cognilytica
 * por PMI en septiembre de 2024, sobre la Metodología CPMAI. El esquema salió de un
 * análisis DACUM con la Universidad Estatal de Ohio en mayo de 2025.
 *
 * Del ECO oficial se conservan DATOS: los cinco dominios, sus pesos y los títulos de
 * las 37 tareas. Las explicaciones de `CPMAI_NOTAS` son propias — los facilitadores
 * textuales de PMI no se reproducen, por la misma razón que en el ECO de la PMP.
 * El PDF es gratuito en pmi.org y es donde se consulta el detalle de la fuente.
 *
 * Mantiene la misma forma que `js/eco.js` para que el motor y la interfaz funcionen
 * sin saber de qué certificación se trata.
 */

const ECO = {
  version: '2025',
  certificacion: 'PMI-CPMAI',
  vigenteDesde: '2025',

  dominios: [
    {
      id: 'responsable',
      nombre: 'IA responsable y confiable',
      nombreEn: 'Support Responsible and Trustworthy AI',
      peso: 15,
      descripcion: 'Privacidad, transparencia, sesgos, cumplimiento y trazabilidad.',
      tareas: [
        'Supervisar el plan de privacidad y seguridad',
        'Gestionar la transparencia en IA y aprendizaje automático',
        'Realizar evaluaciones de sesgos',
        'Monitorear el cumplimiento de las regulaciones y políticas',
        'Gestionar la documentación de responsabilidad y la trazabilidad de auditoría'
      ]
    },
    {
      id: 'negocio',
      nombre: 'Necesidades y soluciones del negocio',
      nombreEn: 'Identify Business Needs and Solutions',
      peso: 26,
      descripcion: 'Qué problema se resuelve, si vale la pena y cómo se sabrá que funcionó.',
      tareas: [
        'Identificar el problema que se debe resolver',
        'Evaluar la viabilidad inicial de la solución de IA',
        'Realizar evaluación de riesgos',
        'Elaborar el enunciado del alcance del proyecto de IA',
        'Determinar el retorno de la inversión',
        'Gestionar los riesgos de adopción e integración',
        'Diseñar la solución de IA',
        'Definir los criterios de éxito',
        'Apoyar la elaboración del caso de negocio',
        'Identificar los recursos del proyecto'
      ]
    },
    {
      id: 'datos',
      nombre: 'Necesidades de datos',
      nombreEn: 'Identify Data Needs',
      peso: 26,
      descripcion: 'Qué datos hacen falta, de dónde salen, si se pueden usar y si alcanzan.',
      tareas: [
        'Definir los datos necesarios',
        'Identificar a los expertos en datos',
        'Identificar las fuentes y ubicaciones de los datos',
        'Coordinar el entorno y la infraestructura de la IA',
        'Recopilar los datos necesarios',
        'Verificar la privacidad, el cumplimiento y el acceso a los datos',
        'Supervisar la evaluación de los datos',
        'Determinar si los datos cumplen con los requisitos de la solución',
        'Comunicar a los roles de liderazgo la comprensión de los datos'
      ]
    },
    {
      id: 'modelos',
      nombre: 'Desarrollo y evaluación de modelos',
      nombreEn: 'Manage AI Model Development and Evaluation',
      peso: 16,
      descripcion: 'Modelado, entrenamiento, calidad y las dos decisiones de avance o detención.',
      tareas: [
        'Supervisar las técnicas de modelado de IA y aprendizaje automático',
        'Supervisar el control de calidad de los modelos',
        'Gestionar el entrenamiento de modelos',
        'Gestionar la transformación de datos para la fase de preparación',
        'Verificar la calidad de los datos para la decisión de avance o detención',
        'Verificar la preparación del modelo para su operacionalización'
      ]
    },
    {
      id: 'operacion',
      nombre: 'Operacionalizar la solución',
      nombreEn: 'Operationalize the AI Solution',
      peso: 17,
      descripcion: 'Despliegue, gobernanza del modelo, métricas, transición y contingencia.',
      tareas: [
        'Gestionar la elaboración del plan de despliegue',
        'Gestionar el despliegue de la solución de IA',
        'Supervisar la gobernanza del modelo',
        'Supervisar las métricas de la solución de IA',
        'Preparar el informe final y las lecciones aprendidas',
        'Gestionar el plan de transición de la solución de IA',
        'Supervisar el plan de contingencia de la solución de IA'
      ]
    }
  ],

  /**
   * El CPMAI no tiene el eje predictivo/ágil de la PMP. Su eje transversal es la
   * adaptación de enfoques para aportar valor, presente en los cinco dominios.
   */
  enfoques: [
    { id: 'predictivo', nombre: 'Estructurado', objetivo: 50 },
    { id: 'agil', nombre: 'Iterativo', objetivo: 50 }
  ]
};

ECO.dominio = function (id) {
  return ECO.dominios.find(d => d.id === id) || null;
};

ECO.repartir = function (total, soloIds) {
  const usar = (soloIds && soloIds.length)
    ? ECO.dominios.filter(d => soloIds.indexOf(d.id) !== -1)
    : ECO.dominios;
  if (!usar.length) return {};

  const suma = usar.reduce((a, d) => a + d.peso, 0);
  const crudo = usar.map(d => ({ id: d.id, exacto: total * d.peso / suma }));
  const reparto = crudo.map(c => ({ id: c.id, n: Math.floor(c.exacto), resto: c.exacto % 1 }));
  let faltan = total - reparto.reduce((a, r) => a + r.n, 0);

  reparto.sort((a, b) => b.resto - a.resto);
  for (let i = 0; faltan > 0; i = (i + 1) % reparto.length, faltan--) reparto[i].n++;

  const salida = {};
  reparto.forEach(r => { salida[r.id] = r.n; });
  return salida;
};

if (typeof module !== 'undefined') module.exports = { ECO };
