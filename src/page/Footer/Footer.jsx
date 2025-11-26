// ...existing code...
import React from 'react';
import './Footer.css';

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-3.1h2V9.1c0-2 1.2-3.1 3-3.1.9 0 1.9.16 1.9.16v2.1h-1.1c-1.1 0-1.4.67-1.4 1.35v1.64h2.4L17 15.9h-2v7A10 10 0 0 0 22 12z" />
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.5-.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);
const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <rect width="48" height="48" rx="8" fill="#e3f2fd"/>
    <path fill="#2077bb" d="M33.6 13.1h4.5L29 22.4l9.5 12.5h-7.6l-6-7.6-6.9 7.6h-4.5l9.7-10.9-9.1-11.6h7.7l5.5 7.1 6.3-7.1zm-1.6 18.2h2.5l-6.5-8.6-6.9 7.8h2.7l4.4-5 3.8 5.8z"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.7v1.63h.05c.52-.99 1.8-2.03 3.7-2.03C20.7 8.6 22 10.86 22 14.28V21h-4v-6.02c0-1.44-.02-3.3-2.01-3.3-2 0-2.3 1.56-2.3 3.18V21H9z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">telemarketer</div>
          <div className="footer-tag">Todos los derechos reservados © 2026</div>
        </div>

        <div className="footer-contact">
          <p>
            Email: <a href="mailto:telemarketergerencia@gmail.com">telemarketergerencia@gmail.com</a>
          </p>
          <p>
            Bogotá D.C. Carrera 7 No. 64 50<br />
            Teléfono: <a href="tel:+573243869227">+57 3243869227</a>
          </p>
          <p>
            Barranquilla Carrera 57 No. 74 71<br />
            Teléfono: <a href="tel:+573103612721">+57 3103612721</a>
          </p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a className="social-link" href="#" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
              <span className="social-icon facebook"><IconFacebook /></span>
            </a>
            <a className="social-link" href="#" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
              <span className="social-icon instagram"><IconInstagram /></span>
            </a>
            <a className="social-link" href="#" aria-label="X / Twitter" rel="noopener noreferrer" target="_blank">
              <span className="social-icon x"><IconX /></span>
            </a>
            <a className="social-link" href="#" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
              <span className="social-icon linkedin"><IconLinkedIn /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>telemarketer • Todos los derechos reservados © 2026</small>
      </div>
    </footer>
  );
}
// ...existing code...