import React from 'react';
import './Service.css';

// Íconos SVG simples para servicios
const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#007bff" viewBox="0 0 16 16">
    <rect x="2" y="5" width="12" height="7" rx="1.8" fill="#dbe9f7" stroke="#007bff" strokeWidth="1.3"/>
    <rect x="4" y="7" width="2" height="2.7" fill="#007bff"/>
    <rect x="7" y="7" width="2" height="2.7" fill="#007bff"/>
    <rect x="10" y="7" width="2" height="2.7" fill="#007bff"/>
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
const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#795548" viewBox="0 0 16 16">
    <ellipse cx="8" cy="8" rx="6" ry="4" fill="#fbeee0"/>
    <rect x="4" y="9" width="8" height="2" rx="1" fill="#795548"/>
    <rect x="2" y="11" width="12" height="2" rx="1" fill="#c7b299"/>
  </svg>
);
const MedkitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f44336" viewBox="0 0 16 16">
    <rect x="3" y="5" width="10" height="7" rx="1.5" fill="#ffdede" stroke="#f44336" strokeWidth="1"/>
    <rect x="7" y="8" width="2" height="6" rx="0.8" fill="#f44336"/>
    <rect x="5" y="9" width="6" height="2" rx="0.8" fill="#f44336"/>
  </svg>
);
const PrinterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#494eea" viewBox="0 0 16 16">
    <rect x="3" y="7" width="10" height="5" rx="1" fill="#e5e4fa" stroke="#494eea" strokeWidth="1"/>
    <rect x="5" y="3" width="6" height="4" rx="1" fill="#494eea"/>
    <rect x="6" y="10" width="4" height="2" rx="0.5" fill="#494eea"/>
  </svg>
);

// Íconos para "Poder para tu empresa"
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

const Service = () => {
  return (
    <div className="service-page-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Soluciones integrales para licitaciones y sector público</h1>
          <p>
            En TELEMARKETER BPO & LOGISTICS SAS llevamos desde 2016 ayudando a las <a href="https://www.gesylic.com/" target="_blank" rel="noopener noreferrer">empresas de licitaciones</a> a conseguir contratos de administración pública, así como contratos con el sector público.
            Nuestro equipo es especialista en licitaciones y trabaja con el único fin de conseguir la adjudicación.
            <br /><br />
            <strong>Nuestros servicios y suministros abarcan:</strong> productos para oficina, papelería, aseo, cafetería, ferretería, botiquín, venta y alquiler de equipos de fotocopiado de las mejores y más reconocidas marcas de alta tecnología y calidad.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="how-it-works-section">
        <h2>¿Qué servicios y suministros ofrecemos?</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon"><OfficeIcon /></div>
            <h3>Oficina y papelería</h3>
            <p><strong>Servicio y suministro:</strong> Insumos para oficina y papelería de alta calidad, con atención personalizada.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><CoffeeIcon /></div>
            <h3>Aseo y cafetería</h3>
            <p><strong>Servicio y suministro:</strong> Productos para limpieza, cafetería y confort laboral.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><MedkitIcon /></div>
            <h3>Botiquín y ferretería</h3>
            <p><strong>Servicio y suministro:</strong> Botiquines y herramientas para la oficina y salud ocupacional.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><PrinterIcon /></div>
            <h3>Venta y alquiler de equipos de impresión</h3>
            <p><strong>Servicio y suministro:</strong> Venta y renta de fotocopiadoras y multifuncionales de última generación.</p>
          </div>
        </div>
      </section>

      {/* Beneficios - ahora resumidos y con igual tamaño */}
      <section className="benefits-section">
        <h2>Poder para tu empresa</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon"><ComprasIcon /></div>
            <p>Optimiza tus compras y gestiona insumos y servicios eficientemente en tu empresa.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon"><LogisticaIcon /></div>
            <p>Integra la logística y la cadena de suministros para respaldar tu producción.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon"><EstrategiaIcon /></div>
            <p>Aplicamos estrategias en compras con análisis, planeación y mejora continua.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon"><ProveedorIcon /></div>
            <p>Abastecimiento con proveedores de calidad bajo criterios de economía y servicio.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon"><ConfianzaIcon /></div>
            <p>Confianza, calidad, y atención total. Soluciones integrales en un solo lugar.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
