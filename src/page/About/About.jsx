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

const PaperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#28a745" viewBox="0 0 16 16">
    <rect x="3" y="2" width="10" height="12" rx="1.6" fill="#eafbe8" stroke="#28a745" strokeWidth="1.3"/>
    <rect x="5" y="5" width="6" height="1" fill="#28a745"/>
    <rect x="5" y="7" width="6" height="1" fill="#28a745"/>
    <rect x="5" y="9" width="6" height="1" fill="#28a745"/>
  </svg>
);

const ComprasIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill="#e3f2fd" />
    <rect x="14" y="16" width="20" height="13" rx="4" fill="#1976d2"/>
    <rect x="20" y="29" width="8" height="8" rx="2" fill="#90caf9"/>
    <rect x="18.5" y="23" width="11" height="2.5" rx="1.2" fill="#fff"/>
  </svg>
);

const LogisticaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="6" y="22" width="36" height="18" rx="4" fill="#ede7f6"/>
    <rect x="14" y="14" width="20" height="14" rx="3" fill="#512da8"/>
    <rect x="19" y="29" width="10" height="8" rx="1.5" fill="#b39ddb"/>
    <circle cx="40" cy="38" r="5" fill="#512da8"/>
    <rect x="31" y="24" width="11" height="5" rx="2.5" fill="#9575cd"/>
  </svg>
);

const EstrategiaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="8" y="8" width="32" height="32" rx="8" fill="#fffde7"/>
    <path d="M18 30 L30 18" stroke="#fbc02d" strokeWidth="4"/>
    <circle cx="18" cy="30" r="4" fill="#fdd835"/>
    <circle cx="30" cy="18" r="4" fill="#fdd835"/>
  </svg>
);

const ProveedorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="10" y="16" width="28" height="21" rx="5" fill="#e0f2f1"/>
    <rect x="18" y="8" width="12" height="10" rx="4" fill="#26a69a"/>
    <rect x="15" y="29" width="18" height="5" rx="2.5" fill="#80cbc4"/>
  </svg>
);

const ConfianzaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill="#ffecb3"/>
    <path d="M36 18l-13 13-7-7" stroke="#ffb300" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="19" cy="32" r="3" fill="#fff176"/>
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

          {/* Nos destacamos en */}
<section className="distinciones-section">
  <h2>Valores corporativos</h2>
  <div className="distinciones-grid">
    <div className="distincion-card">
      <div className="distincion-icon"><LogisticaIcon /></div>
      <h3>Gestión integral</h3>
      <p>Nos ocupamos de todas las fases de la licitación para lograr la adjudicación.</p>
    </div>
    <div className="distincion-card">
      <div className="distincion-icon"><ConfianzaIcon /></div>
      <h3>Honestidad</h3>
      <p>Más de 20 años de éxito gracias a nuestra transparencia y ética profesional.</p>
    </div>
    <div className="distincion-card">
      <div className="distincion-icon"><ProveedorIcon /></div>
      <h3>Profesionalidad</h3>
      <p>Equipo multidisciplinario experto en cada área clave del negocio.</p>
    </div>
    <div className="distincion-card">
      <div className="distincion-icon"><ComprasIcon /></div>
      <h3>Asesoramiento</h3>
      <p>Resolvemos todas tus dudas antes, durante y después del procedimiento.</p>
    </div>
    <div className="distincion-card">
      <div className="distincion-icon"><PaperIcon /></div>
      <h3>Gestión de concursos</h3>
      <p>Ayudamos a empresas a ganar concursos públicos y privados desde 1993.</p>
    </div>
    <div className="distincion-card">
      <div className="distincion-icon"><EstrategiaIcon /></div>
      <h3>Información actualizada</h3>
      <p>Estamos al tanto de las últimas novedades del sector para tu beneficio.</p>
    </div>
  </div>
</section>
  </div>
);

export default About;
// ...existing code...