// Proyectos semilla que vienen con el sitio.
// El admin puede agregar/editar proyectos via localStorage (clave: fcb_projects_v2).
// Al agregar desde el admin, los nuevos se SUMAN a estos.

export const DEFAULT_PROJECTS = [
  // ── Ámsterdam Poniente ──────────────────────────────────────────────────────
  {
    id: 'p-ap-01',
    titulo: 'Ámsterdam Poniente — Espacio comercial de doble altura',
    descripcion: 'Construcción de local comercial con doble altura, vigas metálicas vistas color rojo, mezzanine habilitado para oficinas y cocina integral en planta baja. Obra nueva entregada llave en mano.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'construcciones', 'albanileria'],
    img: '/img/proyectos/amsterdam-interior-1.webp',
    ubicacion: 'Ámsterdam Poniente, Querétaro',
    año: 2025,
  },
  {
    id: 'p-ap-02',
    titulo: 'Ámsterdam Poniente — Planta baja y escalera al mezzanine',
    descripcion: 'Vista general de planta baja con altura libre de más de 6 m, escalera de concreto armado, estructura metálica expuesta y acabados en muros aplanados. Iluminación empotrada en techo inclinado.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'albanileria', 'pintura'],
    img: '/img/proyectos/amsterdam-interior-2.webp',
    ubicacion: 'Ámsterdam Poniente, Querétaro',
    año: 2025,
  },
  {
    id: 'p-ap-03',
    titulo: 'Ámsterdam Poniente — Oficinas en mezzanine',
    descripcion: 'Acondicionamiento de mezzanine para uso de oficinas: escritorios tipo coworking en madera aglomerada, libreros modulares y silla ergonómica. Piso pulido y muros blancos para máxima iluminación natural.',
    categoria: 'Remodelaciones',
    servicios: ['remodelaciones', 'albanileria', 'pisos'],
    img: '/img/proyectos/amsterdam-oficinas.webp',
    ubicacion: 'Ámsterdam Poniente, Querétaro',
    año: 2025,
  },
  // ── Nave industrial / Bodega ────────────────────────────────────────────────
  {
    id: 'p-nave-01',
    titulo: 'Nave industrial con cubierta metálica y portón automatizable',
    descripcion: 'Construcción de nave industrial de ~300 m² con cubierta de estructura metálica negra, mezzanine interior, piso de concreto pulido, muro divisorio y portón de lámina enrollable. Lista para operación logística o taller.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'construcciones', 'albanileria'],
    img: '/img/proyectos/nave-industrial-interior.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
  {
    id: 'p-nave-02',
    titulo: 'Bodega con mezzanine y escalera de mármol gris',
    descripcion: 'Bodega de dos niveles: planta baja de piso de concreto para carga y descarga, y mezzanine con escalera revestida en mármol gris. Estructura metálica azul vista, iluminación led y muros en aplanado fino.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'albanileria', 'pisos'],
    img: '/img/proyectos/bodega-mezzanine.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
  // ── Fachadas ────────────────────────────────────────────────────────────────
  {
    id: 'p-fach-01',
    titulo: 'Fachada minimalista con ventanal de piso a techo — No. 449',
    descripcion: 'Inmueble mixto de dos niveles con fachada en aplanado blanco, ventanal negro de piso a techo en segundo piso, portón de herrería tipo lama, acceso peatonal con puerta negra y patio de maniobras pavimentado.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'albanileria', 'pintura'],
    img: '/img/proyectos/fachada-449-frente.webp',
    ubicacion: 'Querétaro',
    año: 2024,
  },
  {
    id: 'p-fach-02',
    titulo: 'Vista lateral — Inmueble comercial No. 449',
    descripcion: 'Vista lateral del mismo inmueble: acceso vehicular con cajón de estacionamiento techado, iluminación de seguridad y fachada lateral en aplanado liso. Proyecto de obra nueva con diseño funcional y acabado ejecutivo.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'albanileria', 'pintura'],
    img: '/img/proyectos/fachada-449-lateral.webp',
    ubicacion: 'Querétaro',
    año: 2024,
  },
  {
    id: 'p-fach-03',
    titulo: 'Nave industrial con acabado naranja — Fachada principal',
    descripcion: 'Fachada de nave industrial con columnas en color naranja como elemento de identidad, muros en concreto aparente, ventanas altas de aluminio y portón metálico de gran formato. Diseño robusto para uso industrial o comercial.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'construcciones', 'albanileria'],
    img: '/img/proyectos/nave-naranja-fachada.webp',
    ubicacion: 'Querétaro',
    año: 2024,
  },
  {
    id: 'p-fach-04',
    titulo: 'Casa habitación con portón negro estriado',
    descripcion: 'Casa de obra nueva con fachada en aplanado blanco rugoso, portón de herrería estriado negro, ventana abatible con reja y puerta de acceso con moldura en cantera. Jardín frontal con planta ornamental en macetón.',
    categoria: 'Obra nueva',
    servicios: ['obra-nueva', 'albanileria', 'pintura'],
    img: '/img/proyectos/casa-blanca-porton.webp',
    ubicacion: 'Querétaro',
    año: 2024,
  },
  // ── Acabados ────────────────────────────────────────────────────────────────
  {
    id: 'p-acab-01',
    titulo: 'Baño completo con azulejo efecto madera y triple lavabo',
    descripcion: 'Remodelación de baño con recubrimiento tipo madera en paredes y piso, triple lavabo empotrado en cubierta de mosaico, espejo de cuerpo entero con marco biselado y cabina de regadera en estructura de aluminio y vidrio esmerilado.',
    categoria: 'Remodelaciones',
    servicios: ['remodelaciones', 'pisos', 'albanileria'],
    img: '/img/proyectos/bano-madera-triple.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
  {
    id: 'p-acab-02',
    titulo: 'Baño contemporáneo con azulejo negro y lavabos redondos',
    descripcion: 'Baño de uso comercial con azulejo de gran formato en negro mate como pared de acento, dos lavabos de bowl en blanco brillante sobre cubierta de mármol veteado y puertas de sanitarios en estructura gris.',
    categoria: 'Remodelaciones',
    servicios: ['remodelaciones', 'pisos', 'albanileria'],
    img: '/img/proyectos/bano-negro-moderno.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
  // ── Pisos y terracerías ─────────────────────────────────────────────────────
  {
    id: 'p-terr-01',
    titulo: 'Adoquinado exterior con concreto hidráulico',
    descripcion: 'Colocación de adoquín de concreto en área exterior: base de tezontle compactado, plantilla de concreto, asentado de adoquín rectangular y junteado con arena fina. Trabajo limpio con bordes bien definidos y drenaje integrado.',
    categoria: 'Terracerías',
    servicios: ['terrecerias', 'pisos', 'albanileria'],
    img: '/img/proyectos/terraceria-adoquin.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
  // ── Proceso de obra ─────────────────────────────────────────────────────────
  {
    id: 'p-proc-01',
    titulo: 'Albañilería en proceso — Levantado y aplanado de muros',
    descripcion: 'Proceso de construcción en local comercial: equipo FCB ejecutando levantado de muros de block, mezcla de mortero y primera capa de aplanado. Trabajo limpio, cuadrillas especializadas y avance documentado al cliente.',
    categoria: 'Albañilería',
    servicios: ['albanileria', 'construcciones', 'obra-nueva'],
    img: '/img/proyectos/obra-proceso-albanileria.webp',
    ubicacion: 'Querétaro',
    año: 2025,
  },
];

// Convierte URL de Google Drive share a URL de imagen directa
export function driveUrlToImg(url) {
  if (!url) return url;
  // https://drive.google.com/file/d/FILE_ID/view → directo
  const fileMatch = url.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
  if (fileMatch) return `https://drive.google.com/uc?export=view&id=${fileMatch[1]}`;
  // https://drive.google.com/open?id=FILE_ID
  const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]{20,})/);
  if (openMatch) return `https://drive.google.com/uc?export=view&id=${openMatch[1]}`;
  return url;
}

// Carga proyectos combinados: semilla + localStorage
export function loadProjects() {
  try {
    const stored = localStorage.getItem('fcb_projects_v2');
    const extra = stored ? JSON.parse(stored) : [];
    return [...DEFAULT_PROJECTS, ...extra];
  } catch {
    return [...DEFAULT_PROJECTS];
  }
}

// Guarda proyectos extras (NO sobreescribe los semilla)
export function saveExtraProjects(extras) {
  localStorage.setItem('fcb_projects_v2', JSON.stringify(extras));
}

// Carga solo los extras del localStorage
export function loadExtraProjects() {
  try {
    const stored = localStorage.getItem('fcb_projects_v2');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
