import SEO from '../components/SEO.jsx';
import { services, WA_BASE, PHONE_DISPLAY, SITE_URL } from '../data/services.js';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto FCB Construcción y Servicios',
  url: `${SITE_URL}/contacto`,
  mainEntity: {
    '@type': 'GeneralContractor',
    name: 'FCB Construcción y Servicios',
    telephone: '+52-442-493-5756',
    areaServed: { '@type': 'State', name: 'Querétaro, México' },
    address: { '@type': 'PostalAddress', addressRegion: 'Querétaro', addressCountry: 'MX' },
  },
};

export default function Contacto() {
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
        title="Contacto | FCB Construcción y Servicios Querétaro"
        description="Contacta a FCB Construcción en Querétaro. Llama, escribe por WhatsApp o envía tu proyecto. Respuesta el mismo día. Cotizaciones sin compromiso."
        canonical="/contacto"
        schema={SCHEMA}
      />

      <section className="sec-cta" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="wrap" style={{ width: '100%' }}>
          <div className="cta">
            <div className="rev">
              <div className="eyebrow" style={{ color: 'rgba(0,0,0,0.6)' }}>Hablemos de tu proyecto</div>
              <h2>Cotizaciones sin compromiso</h2>
              <p>
                Cuéntanos qué quieres hacer, dónde y con qué medidas aproximadas.
                Te contestamos el mismo día con los siguientes pasos.
              </p>

              <a className="tel-directo" href={`tel:+524424935756`}>
                <svg viewBox="0 0 24 24" fill="#0D0D0D" width="34" height="34">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
                Querétaro y zona conurbada · Lunes a sábado
              </p>

              <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(0,0,0,0.12)', borderRadius: '4px' }}>
                <p style={{ fontWeight: 700, marginBottom: '8px', opacity: 1 }}>También por WhatsApp</p>
                <p style={{ fontSize: '14px' }}>
                  Puedes mandar fotos, planos o medidas directamente. Revisamos y te respondemos el mismo día.
                </p>
              </div>
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
              <textarea
                id="detalle"
                name="detalle"
                placeholder="Ej. Quiero ampliar una recámara de 4x5 m en planta alta, en El Marqués."
              />

              <button className="btn btn-wa" type="submit">Enviar por WhatsApp</button>
              <p className="nota">Se abre WhatsApp con tu mensaje listo. No guardamos tus datos en el sitio.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
