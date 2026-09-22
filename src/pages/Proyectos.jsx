import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import SEO from '../components/SEO.jsx';
import { WA_BASE, SITE_URL } from '../data/services.js';
import { DEFAULT_PROJECTS } from '../data/projects.js';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Proyectos de FCB Construcción en Querétaro',
  description: 'Galería de trabajos realizados por FCB Construcción y Servicios en Querétaro: obra nueva, bodegas, naves industriales, remodelaciones y acabados.',
  provider: {
    '@type': 'GeneralContractor',
    name: 'FCB Construcción y Servicios',
    url: SITE_URL,
  },
};

// Grupos de proyectos para separadores visuales
const GRUPOS = [
  {
    label: 'Ámsterdam Poniente — Espacio comercial',
    ids: ['p-ap-01', 'p-ap-02', 'p-ap-03'],
  },
  {
    label: 'Naves industriales y bodegas',
    ids: ['p-nave-01', 'p-nave-02'],
  },
  {
    label: 'Fachadas y obra nueva',
    ids: ['p-fach-01', 'p-fach-02', 'p-fach-03', 'p-fach-04'],
  },
  {
    label: 'Acabados — Baños',
    ids: ['p-acab-01', 'p-acab-02'],
  },
  {
    label: 'Pisos, terracerías y proceso de obra',
    ids: ['p-terr-01', 'p-proc-01'],
  },
];

// Índice global para el lightbox
const ALL = DEFAULT_PROJECTS;
const slides = ALL.map((p) => ({
  src: p.img,
  title: p.titulo,
  description: `${p.categoria} · ${p.ubicacion} · ${p.año}\n\n${p.descripcion}`,
}));

export default function Proyectos() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openProject = (id) => {
    const idx = ALL.findIndex((p) => p.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  return (
    <>
      <SEO
        title="Proyectos Realizados en Querétaro | FCB Construcción"
        description="Galería de proyectos reales de FCB Construcción en Querétaro: naves industriales, casas, locales comerciales, bodegas, baños, adoquín y más. Fotos de obra entregada."
        canonical="/proyectos"
        schema={SCHEMA}
      />

      {/* Hero */}
      <section className="hero hero-serv" style={{ padding: 0 }}>
        <div className="hero-bg">
          <img
            src="/img/proyectos/amsterdam-interior-1.webp"
            alt="Proyecto Ámsterdam Poniente — espacio comercial de doble altura en Querétaro"
            loading="eager"
          />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Trabajos realizados</div>
          <h1>Obra entregada,<span>no renders</span></h1>
          <p>Fotos reales de naves industriales, casas, bodegas y remodelaciones en Querétaro.</p>
          <div className="hero-cta">
            <a
              className="btn btn-wa"
              href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20ver%20m%C3%A1s%20fotos%20de%20proyectos.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir más fotos
            </a>
          </div>
        </div>
      </section>

      {/* Galería por grupos */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Galería de proyectos</div>
            <h2>Lo que hemos construido</h2>
            <p>
              Haz clic en cualquier foto para verla en detalle.{' '}
              <a
                href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20cotizar%20un%20proyecto%20similar%20a%20los%20que%20vi%20en%20su%20p%C3%A1gina.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--amarillo)' }}
              >
                ¿Tienes un proyecto similar? Cotiza sin compromiso.
              </a>
            </p>
          </div>

          {GRUPOS.map((grupo) => {
            const proyectos = grupo.ids.map((id) => ALL.find((p) => p.id === id)).filter(Boolean);
            return (
              <div key={grupo.label}>
                <p className="proj-section-label">{grupo.label}</p>
                <div className="proj-grid">
                  {proyectos.map((p) => (
                    <button
                      key={p.id}
                      className="proj-card"
                      onClick={() => openProject(p.id)}
                      aria-label={`Ver foto: ${p.titulo}`}
                    >
                      <div className="proj-thumb">
                        <img src={p.img} alt={p.titulo} loading="lazy" />
                      </div>
                      <div className="proj-info">
                        <span className="proj-cat">{p.categoria}</span>
                        <span className="proj-titulo">{p.titulo.replace(/^Ámsterdam Poniente — /, '')}</span>
                        <span className="proj-meta">{p.ubicacion} · {p.año}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="drive-empty rev" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ marginBottom: '16px' }}>
              Más proyectos se agregan conforme los vamos entregando.
            </p>
            <a
              className="btn btn-ghost"
              href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20ver%20el%20%C3%A1lbum%20completo%20de%20proyectos.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver álbum completo por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Captions]}
        captions={{ showToggle: false, descriptionMaxLines: 4 }}
        styles={{ root: { '--yarl__color_backdrop': 'rgba(10,10,10,0.95)' } }}
      />
    </>
  );
}
