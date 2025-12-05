import React from 'react';
import './Service.css';
import { images } from '../../assets/assets';
import SuppliesServices from './SuppliesServices';
import PersonalizedServices from './PersonalizedServices';
import Events from './Events';
import RealEstateServices from './RealEstateServices';
import ServiceFeatures from './ServiceFeatures';

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

      {/* Servicios y suministros */}
      <div id="supplies-services">
        <SuppliesServices />
      </div>

      {/* Servicios personalizados */}
      <div id="personalized-services">
        <PersonalizedServices />
      </div>

       {/* Servicios inmobiliarios */}
      <div id="realEstate-services">
        <RealEstateServices />
      </div>

      {/* Caracteristicas de servicio */}
      <div id="features-services">
        <ServiceFeatures />
      </div>

      {/* Eventos */}
      <div id="events">
        <Events />
      </div>

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
