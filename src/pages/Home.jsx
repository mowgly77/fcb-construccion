import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { services, WA_BASE, PHONE_DISPLAY, SITE_URL } from '../data/services.js';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'FCB Construcción y Servicios',
  slogan: 'Tu proyecto, nuestra experiencia',
  description: 'Constructora en Querétaro: diseño, obra nueva, remodelaciones, ampliaciones, albañilería, impermeabilización, colocación de pisos, pintura y terracerías.',
  telephone: '+52-442-493-5756',
  url: SITE_URL,
  areaServed: { '@type': 'State', name: 'Querétaro, México' },
  address: { '@type': 'PostalAddress', addressRegion: 'Querétaro', addressCountry: 'MX' },
  priceRange: '$$',
};

const ICONS = {
  diseno: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 9v12"/><path d="m14 14 3 3"/></svg>,
  'obra-nueva': <svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  construcciones: <svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V8h6v13M13 21V3h6v18"/><path d="M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2"/></svg>,
  remodelaciones: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a5 5 0 0 0 6 6L15 18l-3 3-3-3 3-3-3-3 3-3 3 3z"/><path d="m3 21 4-4"/></svg>,
  ampliaciones: <svg viewBox="0 0 24 24"><path d="m3 11 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 18v-6M9 15h6"/></svg>,
  albanileria: <svg viewBox="0 0 24 24"><path d="M3 7h18v4H3zM3 13h18v4H3z"/><path d="M8 7v4M13 7v4M10 13v4M16 13v4"/></svg>,
  impermeabilizacion: <svg viewBox="0 0 24 24"><path d="M12 2.7S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11.3-6-11.3z"/></svg>,
  pisos: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M3 12h18M12 3v18"/></svg>,
  pintura: <svg viewBox="0 0 24 24"><path d="M4 5h11v5H4z"/><path d="M15 7h4v4h-6"/><path d="M11 13h2v3h-2zM10 16h4v6h-4z"/></svg>,
  'terracerías': <svg viewBox="0 0 24 24"><path d="M3 19h18"/><path d="M5 19v-5l4-2 3 3 4-6 3 3v7"/><circle cx="6" cy="8" r="2"/></svg>,
  'construccion-general': <svg viewBox="0 0 24 24"><path d="M3 17a9 9 0 0 1 18 0"/><path d="M2 17h20"/><path d="M12 8V4M9 5l1.5 3M15 5l-1.5 3"/></svg>,
};

export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();
    const n = e.target.nombre.value.trim();
    const s = e.target.servicio.value;
    const d = e.target.detalle.value.trim();
    const msg = `Hola FCB, soy ${n}. Me interesa: ${s}.${d ? ' Detalle: ' + d : ''} Vengo de su página web.`;
    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  return (
    <>
      <SEO
        title="FCB Construcción y Servicios | Constructora en Querétaro"
        description="FCB Construcción en Querétaro: obra nueva, remodelaciones, albañilería, impermeabilización, pisos, pintura y terracerías. Cotizaciones sin compromiso por WhatsApp."
        canonical="/"
        schema={SCHEMA}
      />

      {/* HERO */}
      <section className="hero" id="inicio" style={{ padding: 0 }}>
        <div className="hero-bg">
          <img src="/img/obra-fachada.webp" alt="Obra terminada por FCB Construcción en Querétaro" loading="eager" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow">Constructora en Querétaro</div>
          <h1>Tu proyecto,<span>nuestra experiencia</span></h1>
          <p>Construimos, remodelamos y ampliamos con trabajo bien hecho, materiales que aguantan y tiempos que sí se cumplen.</p>
          <div className="hero-cta">
            <a className="btn btn-wa" href={`${WA_BASE}?text=Hola%20FCB%2C%20quiero%20una%20cotizaci%C3%B3n%20sin%20compromiso.`} target="_blank" rel="noopener noreferrer">Cotizar sin compromiso</a>
            <Link className="btn btn-ghost" to="/proyectos">Ver proyectos</Link>
          </div>
          <p className="hero-nota">Atendemos Querétaro y zona conurbada · Respuesta el mismo día</p>
        </div>
      </section>

      {/* VALORES */}
      <div className="valores">
        <div className="valores-grid">
          <div className="valor"><b>Calidad</b><span>en cada detalle</span></div>
          <div className="valor"><b>Seguridad</b><span>en cada proyecto</span></div>
          <div className="valor"><b>Compromiso</b><span>con nuestros clientes</span></div>
          <div className="valor"><b>Puntualidad</b><span>en los tiempos</span></div>
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="sec-servicios">
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Nuestros servicios</div>
            <h2>Todo lo que tu obra necesita, con un solo responsable</h2>
            <p>No tienes que coordinar cinco contratistas distintos. Nos hacemos cargo desde el trazo hasta la última mano de pintura.</p>
          </div>
          <div className="serv-grid rev">
            {services.map(s => (
              <Link to={`/servicios/${s.slug}`} key={s.slug} className="serv" style={{ display: 'block' }}>
                {ICONS[s.slug]}
                <h3>{s.name}</h3>
                <p>{s.shortDesc}</p>
                <span className="serv-link">Ver servicio →</span>
              </Link>
            ))}
            <div className="serv serv-cta">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <h3>Cotizaciones sin compromiso</h3>
              <p>Mándanos fotos y medidas por WhatsApp y te damos número.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos">
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Trabajos realizados</div>
            <h2>Obra entregada, no renders</h2>
            <p>Una muestra de lo que hemos construido. Pídenos el álbum completo por WhatsApp.</p>
          </div>
          <div className="proy-grid rev">
            <figure className="proy p-lg">
              <img src="/img/obra-interior.webp" alt="Interior de doble altura con estructura metálica" loading="lazy" />
              <figcaption className="proy-cap"><span>Obra nueva · Querétaro</span><b>Interior de doble altura con estructura metálica</b></figcaption>
            </figure>
            <figure className="proy p-md">
              <img src="/img/obra-fachada.webp" alt="Fachada minimalista con acentos en piedra" loading="lazy" />
              <figcaption className="proy-cap"><span>Obra nueva · Fachada</span><b>Fachada minimalista con acentos en piedra</b></figcaption>
            </figure>
            <figure className="proy p-sm">
              <img src="/img/d-cimentacion.webp" alt="Cimentación con castillos y armado de acero" loading="lazy" />
              <figcaption className="proy-cap"><span>Estructura</span><b>Cimentación y armado</b></figcaption>
            </figure>
            <figure className="proy p-sm">
              <img src="/img/d-impermeabilizacion.webp" alt="Aplicación de impermeabilizante en losa" loading="lazy" />
              <figcaption className="proy-cap"><span>Mantenimiento</span><b>Impermeabilización de losa</b></figcaption>
            </figure>
            <figure className="proy p-sm">
              <img src="/img/d-pisos.webp" alt="Colocación de loseta en piso" loading="lazy" />
              <figcaption className="proy-cap"><span>Acabados</span><b>Colocación de pisos</b></figcaption>
            </figure>
          </div>
          <p style={{ marginTop: '26px', textAlign: 'center' }}>
            <Link className="btn btn-ghost" to="/proyectos">Ver todos los proyectos</Link>
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="sec-proceso">
        <div className="wrap">
          <div className="sec-head rev">
            <div className="eyebrow">Cómo trabajamos</div>
            <h2>Sin sorpresas a medio camino</h2>
            <p>Cuatro pasos claros para que sepas en qué va tu dinero y tu obra en todo momento.</p>
          </div>
          <div className="pasos rev">
            {[
              { n: '01', t: 'Visita y levantamiento', d: 'Vamos al lugar, tomamos medidas y entendemos qué quieres lograr. Sin costo.' },
              { n: '02', t: 'Cotización desglosada', d: 'Recibes precio por partidas: materiales, mano de obra y tiempo estimado.' },
              { n: '03', t: 'Ejecución con avances', d: 'Trabajamos con cuadrilla propia y te mandamos fotos del avance cada semana.' },
              { n: '04', t: 'Entrega y garantía', d: 'Revisamos contigo detalle por detalle. Lo que quede pendiente, lo corregimos.' },
            ].map(p => (
              <div key={p.n} className="paso">
                <div className="paso-n">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section id="porque">
        <div className="wrap">
          <div className="porque">
            <div className="rev">
              <div className="eyebrow">Por qué FCB</div>
              <h2 style={{ fontSize: 'clamp(32px,5vw,50px)', marginBottom: '26px' }}>Construimos tus ideas en realidad</h2>
              <ul className="porque-lista">
                {[
                  { t: 'Un solo responsable', d: 'Coordinamos albañiles, plomería, eléctrico y acabados. Tú tratas con nosotros.' },
                  { t: 'Precio claro desde el inicio', d: 'Cotización por partidas. Si algo cambia, se avisa y se autoriza antes de hacerlo.' },
                  { t: 'Experiencia en el ramo', d: 'Obra residencial, comercial e industrial. Sabemos qué se rompe y cómo evitarlo.' },
                  { t: 'Tu confianza es nuestra prioridad', d: 'Obra limpia, personal identificado y la casa entregada como te gustaría recibirla.' },
                ].map(item => (
                  <li key={item.t}>
                    <span className="check">✓</span>
                    <div><b>{item.t}</b><p>{item.d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="porque-img rev">
              <img src="/img/obra-interior.webp" alt="Acabados interiores entregados por FCB Construcción" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="sec-cta">
        <div className="wrap">
          <div className="cta">
            <div className="rev">
              <div className="eyebrow" style={{ color: 'rgba(0,0,0,0.6)' }}>Cotizaciones sin compromiso</div>
              <h2>Cuéntanos tu proyecto</h2>
              <p>Mándanos qué quieres hacer, dónde y con qué medidas. Te contestamos el mismo día.</p>
              <a className="tel-directo" href={`tel:+52${PHONE_DISPLAY.replace(/\s/g,'')}`}>
                <svg viewBox="0 0 24 24" fill="#0D0D0D" width="34" height="34"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-5.8c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
                {PHONE_DISPLAY}
              </a>
              <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>Querétaro y zona conurbada · Lunes a sábado</p>
            </div>
            <form className="cta-box rev" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Tu nombre</label>
              <input id="nombre" name="nombre" type="text" placeholder="Ej. Juan Pérez" required />
              <label htmlFor="servicio">¿Qué necesitas?</label>
              <select id="servicio" name="servicio">
                {services.map(s => <option key={s.slug}>{s.name}</option>)}
                <option>Otro / no estoy seguro</option>
              </select>
              <label htmlFor="detalle">Cuéntanos un poco más</label>
              <textarea id="detalle" name="detalle" placeholder="Ej. Quiero ampliar una recámara de 4x5 m en planta alta, en El Marqués." />
              <button className="btn btn-wa" type="submit">Enviar por WhatsApp</button>
              <p className="nota">Se abre WhatsApp con tu mensaje listo. No guardamos tus datos en el sitio.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
