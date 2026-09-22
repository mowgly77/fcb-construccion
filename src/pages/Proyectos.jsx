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

const CATEGORIAS = ['Todos', 'Obra nueva', 'Remodelaciones', 'Albañilería', 'Terracerías'];

export default function Proyectos() {
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
          <img src="/img/proyectos/amsterdam-interior-1.webp" alt="Proyecto Ámsterdam Poniente — espacio comercial de doble altura en Querétaro" loading="eager" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Trabajos realizados</div>
          <h1>Obra entregada,<span>no renders</span></h1>
          <p>Fotos reales de naves industriales, casas, bodegas y remodelaciones en Querétaro. Lo que ves es lo que construimos.</p>
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
              Obra nueva, naves industriales, bodegas, casas habitación, remodelaciones y acabados en Querétaro.
              ¿Tienes un proyecto similar?{' '}
              <a
                href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20cotizar%20un%20proyecto%20similar%20a%20los%20que%20vi%20en%20su%20p%C3%A1gina.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--amarillo)' }}
              >
                Pide tu cotización sin compromiso.
              </a>
            </p>
          </div>

          <div className="drive-grid rev">
            {DEFAULT_PROJECTS.map((p) => (
              <figure key={p.id} className="drive-item">
                <img src={p.img} alt={p.titulo} loading="lazy" />
                <figcaption className="proy-cap">
                  <span>{p.categoria} · {p.ubicacion}</span>
                  <b>{p.titulo}</b>
                  <p style={{ fontSize: '0.82rem', marginTop: '4px', opacity: 0.85, fontWeight: 300 }}>
                    {p.descripcion}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="drive-empty rev" style={{ marginTop: '32px', textAlign: 'center' }}>
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
    </>
  );
}
