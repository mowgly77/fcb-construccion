import SEO from '../components/SEO.jsx';
import { WA_BASE, SITE_URL } from '../data/services.js';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Proyectos de FCB Construcción en Querétaro',
  description: 'Galería de trabajos realizados por FCB Construcción y Servicios en Querétaro.',
  provider: {
    '@type': 'GeneralContractor',
    name: 'FCB Construcción y Servicios',
    url: SITE_URL,
  },
};

const PROYECTOS_LOCALES = [
  { src: '/img/obra-fachada.webp', alt: 'Fachada minimalista con acentos en piedra', cat: 'Obra nueva', titulo: 'Fachada minimalista' },
  { src: '/img/obra-interior.webp', alt: 'Interior de doble altura con estructura metálica', cat: 'Obra nueva', titulo: 'Interior doble altura' },
  { src: '/img/d-cimentacion.webp', alt: 'Cimentación con castillos y armado de acero', cat: 'Estructura', titulo: 'Cimentación y armado' },
  { src: '/img/d-impermeabilizacion.webp', alt: 'Aplicación de impermeabilizante en losa', cat: 'Impermeabilización', titulo: 'Impermeabilización de losa' },
  { src: '/img/d-pisos.webp', alt: 'Colocación de loseta en piso', cat: 'Acabados', titulo: 'Colocación de pisos' },
  { src: '/img/d-pintura.webp', alt: 'Pintura de fachada exterior', cat: 'Pintura', titulo: 'Pintura exterior' },
  { src: '/img/d-albanileria.webp', alt: 'Trabajo de albañilería y muros', cat: 'Albañilería', titulo: 'Muros y aplanados' },
];

export default function Proyectos() {
  return (
    <>
      <SEO
        title="Proyectos Realizados en Querétaro | FCB Construcción"
        description="Galería de proyectos de construcción, remodelación, albañilería y acabados realizados por FCB Construcción en Querétaro. Obra entregada, no renders."
        canonical="/proyectos"
        schema={SCHEMA}
      />

      {/* Hero */}
      <section className="hero hero-serv" style={{ padding: 0 }}>
        <div className="hero-bg">
          <img src="/img/obra-fachada.webp" alt="Proyectos de construcción en Querétaro por FCB" loading="eager" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Trabajos realizados</div>
          <h1>Obra entregada,<span>no renders</span></h1>
          <p>Fotos reales de proyectos terminados en Querétaro. Lo que ves es lo que construimos.</p>
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

      {/* Galería */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Galería de proyectos</div>
            <h2>Lo que hemos construido</h2>
            <p>
              Próximamente más proyectos se agregarán aquí conforme los vamos terminando.
              ¿Quieres ver un proyecto similar al tuyo?{' '}
              <a href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20ver%20proyectos%20similares%20al%20m%C3%ADo.`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amarillo)' }}>
                Escríbenos por WhatsApp.
              </a>
            </p>
          </div>

          <div className="drive-grid rev">
            {PROYECTOS_LOCALES.map((p, i) => (
              <figure key={i} className="drive-item">
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption className="proy-cap">
                  <span>{p.cat}</span>
                  <b>{p.titulo}</b>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="drive-empty rev" style={{ marginTop: '24px' }}>
            <p style={{ marginBottom: '16px' }}>
              📁 Más proyectos próximamente · Las fotos se actualizan conforme entregamos obra
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
    </>
  );
}
