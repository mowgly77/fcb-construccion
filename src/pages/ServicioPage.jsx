import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { services, WA_BASE, SITE_URL } from '../data/services.js';

function buildSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.metaDesc,
    provider: {
      '@type': 'GeneralContractor',
      name: 'FCB Construcción y Servicios',
      telephone: '+52-442-493-5756',
      url: SITE_URL,
      areaServed: { '@type': 'State', name: 'Querétaro, México' },
    },
    areaServed: { '@type': 'State', name: 'Querétaro, México' },
    serviceType: s.schema,
    url: `${SITE_URL}/servicios/${s.slug}`,
  };
}

export default function ServicioPage() {
  const { slug } = useParams();
  const servicio = services.find(s => s.slug === slug);

  if (!servicio) return <Navigate to="/" replace />;

  const waMsg = `Hola FCB, me interesa cotizar: ${servicio.name}. Vengo de su página web.`;

  return (
    <>
      <SEO
        title={servicio.title}
        description={servicio.metaDesc}
        canonical={`/servicios/${servicio.slug}`}
        ogImage={servicio.img}
        schema={buildSchema(servicio)}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link to="/">Inicio</Link>
        <span>›</span>
        <Link to="/#servicios">Servicios</Link>
        <span>›</span>
        <span>{servicio.name}</span>
      </nav>

      {/* Hero */}
      <section className="hero hero-serv" style={{ padding: 0 }}>
        <div className="hero-bg">
          <img src={servicio.img} alt={servicio.imgAlt} loading="eager" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Servicio · Querétaro</div>
          <h1>{servicio.hero}</h1>
          <p>{servicio.heroSub}</p>
          <div className="hero-cta">
            <a
              className="btn btn-wa"
              href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar sin compromiso
            </a>
            <Link className="btn btn-ghost" to="/#servicios">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="serv-incluye">
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Qué incluye</div>
            <h2>Lo que hacemos por tu proyecto</h2>
            <p>Cada servicio de {servicio.name.toLowerCase()} en Querétaro cubre los siguientes trabajos.</p>
          </div>
          <div className="incluye-grid rev">
            {servicio.incluye.map((item, i) => (
              <div key={i} className="incluye-item">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué contratarnos */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Por qué elegirnos</div>
            <h2>FCB para tu {servicio.name.toLowerCase()} en Querétaro</h2>
          </div>
          <div className="porq-cards rev">
            {servicio.porQue.map((item, i) => (
              <div key={i} className="porq-card">
                <b>{item.t}</b>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-cta">
        <div className="wrap">
          <div style={{ maxWidth: '640px' }} className="rev">
            <div className="eyebrow" style={{ color: 'rgba(0,0,0,0.6)' }}>Cotización sin compromiso</div>
            <h2>¿Necesitas {servicio.name.toLowerCase()} en Querétaro?</h2>
            <p style={{ marginBottom: '28px', opacity: 0.82 }}>
              Mándanos las medidas y ubicación de tu proyecto por WhatsApp. Te contestamos el mismo día.
            </p>
            <a
              className="btn btn-ghost"
              style={{ borderColor: 'var(--negro)', color: 'var(--negro)' }}
              href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar {servicio.name.toLowerCase()}
            </a>
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section style={{ background: 'var(--negro-2)' }}>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">También ofrecemos</div>
            <h2>Otros servicios de FCB</h2>
          </div>
          <div className="serv-grid rev">
            {services
              .filter(s => s.slug !== servicio.slug)
              .slice(0, 6)
              .map(s => (
                <Link to={`/servicios/${s.slug}`} key={s.slug} className="serv" style={{ display: 'block' }}>
                  <h3>{s.name}</h3>
                  <p>{s.shortDesc}</p>
                  <span className="serv-link">Ver servicio →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
