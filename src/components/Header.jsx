import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { WA_BASE } from '../data/services.js';

const WA_ICON = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
    <path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="logo" aria-label="FCB Construcción y Servicios - Inicio">
          <div>
            <div className="logo-mark">F<b>C</b>B</div>
            <div className="logo-sub">Construcción y Servicios</div>
          </div>
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <NavLink to="/#servicios" onClick={() => setOpen(false)}>Servicios</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/#proceso" onClick={() => setOpen(false)}>Cómo trabajamos</NavLink>
          <NavLink to="/#porque" onClick={() => setOpen(false)}>Por qué FCB</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            className="btn btn-wa"
            href={`${WA_BASE}?text=Hola%20FCB%2C%20me%20interesa%20cotizar%20un%20proyecto.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {WA_ICON}
            WhatsApp
          </a>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}
