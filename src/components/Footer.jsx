import { Link } from 'react-router-dom';
import { WA_BASE, PHONE_DISPLAY, services } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="logo-mark" style={{ fontSize: '40px' }}>F<b className="am">C</b>B</div>
            <div className="logo-sub" style={{ marginBottom: '14px' }}>Construcción y Servicios</div>
            <p>Tu proyecto, nuestra experiencia. Construcción, remodelación y mantenimiento de obra en Querétaro y zona conurbada.</p>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              {services.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link to={`/servicios/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href={`${WA_BASE}?text=Hola%20FCB%2C%20vengo%20de%20su%20p%C3%A1gina%20web.`} target="_blank" rel="noopener noreferrer">
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li><a href={`tel:+52${PHONE_DISPLAY.replace(/\s/g, '')}`}>Llamar: {PHONE_DISPLAY}</a></li>
              <li>Querétaro, México</li>
              <li>Lunes a sábado</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} FCB Construcción y Servicios. Todos los derechos reservados.</span>
          <span>Construimos tus ideas en realidad.</span>
        </div>
      </div>
    </footer>
  );
}
