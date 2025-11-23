// ...existing code...
import React from 'react';
import './About.css';
import { images } from '../../assets/assets';

// Íconos SVG representativos:
const EmpresaIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <rect x="7" y="19" width="34" height="18" rx="5" fill="#e3f2fd"/>
    <rect x="15" y="10" width="18" height="11" rx="4" fill="#38a9e0"/>
    <rect x="20" y="25" width="8" height="7" rx="2" fill="#90caf9"/>
    <rect x="13" y="33" width="5" height="4" rx="1" fill="#bddaf7"/>
    <rect x="30" y="33" width="5" height="4" rx="1" fill="#bddaf7"/>
  </svg>
);
const MisionIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#e8fced"/>
    <rect x="21" y="13" width="6" height="20" rx="2" fill="#34b97f"/>
    <rect x="17" y="30" width="14" height="4" rx="2" fill="#56d399"/>
    <circle cx="24" cy="19" r="3" fill="#34b97f"/>
  </svg>
);
const VisionIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <ellipse cx="24" cy="24" rx="18" ry="13" fill="#fffbe6"/>
    <ellipse cx="24" cy="24" rx="11" ry="6" fill="#ffe59f"/>
    <ellipse cx="24" cy="24" rx="4" ry="2" fill="#f7ce6f"/>
  </svg>
);
const CalidadIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#e3f6ff"/>
    <rect x="19" y="17" width="10" height="14" rx="2" fill="#4db9e9"/>
    <circle cx="24" cy="27" r="4" fill="#fff"/>
    <path d="M18 32l6 4 6-4" stroke="#4db9e9" strokeWidth="2" fill="none"/>
  </svg>
);

const About = () => (
  <div className="about-page-container">
    <section className="about-tarjetas-section">
      <div className="about-tarjetas-grid">
        <div className="about-tarjeta">
          <div className="about-tarjeta-icon"><EmpresaIcon /></div>
          <h3>Nuestra empresa</h3>
          <p>
            Ofrecemos soluciones de BPO y servicios en Administración de Propiedad Horizontal, Inmobiliarios, Call Center y Logística, garantizando atención al cliente de calidad y eficiencia operativa con personal capacitado.
          </p>
        </div>

        {/* Tarjeta Misión con imagen de fondo */}
        <div
          className="about-tarjeta about-tarjeta-mision"
          style={{ backgroundImage: `url(${images.mision})` }}
        >
          <div className="about-tarjeta-content">
            <h3>Misión</h3>
            <div className="about-tarjeta-icon"><MisionIcon /></div>
            <p>
              Ser aliado estratégico en call/contact center, asesorías jurídicas, contables y más, participando en el crecimiento del cliente con ética, objetividad e integridad.
            </p>
          </div>
        </div>

        <div className="about-tarjeta">
          <div className="about-tarjeta-icon"><VisionIcon /></div>
          <h3>Visión</h3>
          <p>
            Ser líderes nacionales en nuestros servicios, reconocidos como aliados estratégicos por calidad y cumplimiento, contribuyendo al crecimiento de nuestros clientes y la sociedad.
          </p>
        </div>
        <div className="about-tarjeta">
          <div className="about-tarjeta-icon"><CalidadIcon /></div>
          <h3>Calidad del servicio</h3>
          <p>
            Nuestra área de auditoría garantiza procesos efectivos y transparentes, cumpliendo cada requerimiento y asegurando resultados confiables.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
// ...existing code...