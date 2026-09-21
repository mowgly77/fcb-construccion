import { WA_BASE } from '../data/services.js';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`${WA_BASE}?text=Hola%20FCB%2C%20vengo%20de%20su%20p%C3%A1gina%20web.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-5.8c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  );
}
