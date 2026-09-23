import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO.jsx';
import { services, WA_BASE, SITE_URL } from '../data/services.js';
import { loadProjects } from '../data/projects.js';

function buildSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${s.name} en Querétaro`,
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

function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FAQ({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' faq-open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open === i ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
            </svg>
          </button>
          {open === i && <div className="faq-a"><p>{f.a}</p></div>}
        </div>
      ))}
    </div>
  );
}

export default function ServicioPage() {
  const { slug } = useParams();
  const servicio = services.find(s => s.slug === slug);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    if (!servicio) return;
    const all = loadProjects();
    setProyectos(all.filter(p => p.servicios && p.servicios.includes(servicio.slug)));
  }, [slug, servicio]);

  if (!servicio) return <Navigate to="/" replace />;

  const waMsg = `Hola FCB, me interesa cotizar el servicio de ${servicio.name} en Querétaro. Vengo de su página web.`;
  const otrosServicios = services.filter(s => s.slug !== servicio.slug).slice(0, 6);

  const schemas = [buildSchema(servicio)];
  if (servicio.faqs?.length) schemas.push(buildFaqSchema(servicio.faqs));

  return (
    <>
      <SEO
        title={servicio.title}
        description={servicio.metaDesc}
        canonical={`/servicios/${servicio.slug}`}
        ogImage={servicio.img}
        schema={schemas}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link to="/">Inicio</Link>
        <span>›</span>
        <Link to="/#servicios">Servicios</Link>
        <span>›</span>
        <span>{servicio.name}</span>
      </nav>

      {/* ── Hero ── */}
      <section className="hero hero-serv" style={{ padding: 0 }}>
        <div className="hero-bg">
          <img src={servicio.img} alt={servicio.imgAlt} loading="eager" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Servicio · Querétaro</div>
          <h1>
            {servicio.hero}
          </h1>
          <p>{servicio.heroSub}</p>
          <div className="hero-cta">
            <a className="btn btn-wa" href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
              Cotizar sin compromiso
            </a>
            <Link className="btn btn-ghost" to="/#servicios">Todos los servicios</Link>
          </div>
          <p className="hero-nota">Querétaro y zona metropolitana · Respuesta el mismo día</p>
        </div>
      </section>

      {/* ── Descripción larga ── */}
      <section>
        <div className="wrap">
          <div className="porque rev">
            <div>
              <div className="eyebrow">Servicio profesional</div>
              <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: '20px' }}>
                {servicio.name} en Querétaro con FCB
              </h2>
              <p style={{ color: 'var(--gris)', fontSize: '16.5px', lineHeight: 1.75, marginBottom: '28px' }}>
                {servicio.longDesc}
              </p>
              <a className="btn btn-wa" href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
                Solicitar cotización gratis
              </a>
            </div>
            <div className="porque-img rev">
              <img src={servicio.img} alt={servicio.imgAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section className="serv-incluye">
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Alcance del servicio</div>
            <h2>¿Qué incluye el servicio de {servicio.name.toLowerCase()}?</h2>
            <p>Cada proyecto de {servicio.name.toLowerCase()} en Querétaro cubre los siguientes trabajos.</p>
          </div>
          <div className="incluye-grid rev">
            {servicio.incluye.map((item, i) => (
              <div key={i} className="incluye-item">
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ── */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Cómo lo hacemos</div>
            <h2>Proceso de {servicio.name.toLowerCase()} paso a paso</h2>
            <p>Así ejecutamos cada proyecto para que no haya sorpresas a media obra.</p>
          </div>
          <div className="pasos rev">
            {servicio.proceso.map(p => (
              <div key={p.n} className="paso">
                <div className="paso-n">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué FCB ── */}
      <section style={{ background: 'var(--negro-2)' }}>
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

      {/* ── Proyectos de este servicio ── */}
      {proyectos.length > 0 && (
        <section>
          <div className="wrap">
            <div className="sec-head rev">
              <div className="eyebrow">Trabajos realizados</div>
              <h2>Proyectos de {servicio.name.toLowerCase()} en Querétaro</h2>
              <p>Obra real entregada, no renders.</p>
            </div>
            <div className="drive-grid rev">
              {proyectos.map(p => (
                <figure key={p.id} className="drive-item">
                  <img src={p.img} alt={p.titulo} loading="lazy" />
                  <figcaption className="proy-cap">
                    <span>{p.categoria} · {p.ubicacion}</span>
                    <b>{p.titulo}</b>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p style={{ marginTop: '24px', textAlign: 'center' }}>
              <a className="btn btn-ghost" href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20ver%20m%C3%A1s%20fotos%20de%20proyectos%20de%20${encodeURIComponent(servicio.name)}.`} target="_blank" rel="noopener noreferrer">
                Ver más fotos de este servicio
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {servicio.faqs?.length > 0 && (
        <section style={{ background: 'var(--negro-2)' }}>
          <div className="wrap">
            <div className="sec-head rev">
              <div className="eyebrow">Preguntas frecuentes</div>
              <h2>Lo que más nos preguntan sobre {servicio.name.toLowerCase()}</h2>
            </div>
            <div className="rev">
              <FAQ faqs={servicio.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* ── CTA final ── */}
      <section className="sec-cta">
        <div className="wrap">
          <div style={{ maxWidth: '680px' }} className="rev">
            <div className="eyebrow" style={{ color: 'rgba(0,0,0,0.6)' }}>Cotización sin compromiso</div>
            <h2>¿Necesitas {servicio.name.toLowerCase()} en Querétaro?</h2>
            <p style={{ marginBottom: '28px', opacity: 0.82, fontSize: '17px' }}>
              Mándanos las medidas y ubicación de tu proyecto por WhatsApp. Te respondemos el mismo día.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                className="btn btn-ghost"
                style={{ borderColor: 'var(--negro)', color: 'var(--negro)' }}
                href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar {servicio.name.toLowerCase()}
              </a>
              <Link className="btn" style={{ background: 'var(--negro)', color: 'var(--blanco)' }} to="/contacto">
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Otros servicios ── */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">También ofrecemos</div>
            <h2>Otros servicios de FCB en Querétaro</h2>
          </div>
          <div className="serv-grid rev">
            {otrosServicios.map(s => (
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
