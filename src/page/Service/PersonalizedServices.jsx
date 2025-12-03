import React from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const PersonalizedServices = () => {
  return (
    <section className="bpo-section">
      <h2>Servicios personalizados</h2>
      <div className="bpo-grid">
        <div
          className="bpo-card bpo-televentas"
          style={{ backgroundImage: `url(${images.televenta})` }}
        >
          <div className="bpo-card-content">
            <h3>Televentas</h3>
            <p>Ventas de servicios y productos financieros por comunicación telefónica. Incluye desde la planificación hasta el análisis y control de resultados.</p>
          </div>
        </div>
        <div
          className="bpo-card bpo-cliente"
          style={{ backgroundImage: `url(${images.cliente})` }}
        >
          <div className="bpo-card-content">
            <h3>Servicio al cliente</h3>
            <p>Recepción y gestión de llamadas para solución de consultas/eventualidades, logrando la satisfacción de los usuarios.</p>
          </div>
        </div>
        <div
          className="bpo-card bpo-cobranza"
          style={{ backgroundImage: `url(${images.cobranza})` }}
        >
          <div className="bpo-card-content">
            <h3>Cobranzas</h3>
            <p>Recuperación de cartera en todas sus etapas: preventiva, administrativa, prejurídica y jurídica.</p>
          </div>
        </div>
        <div
          className="bpo-card bpo-mercadeo"
          style={{ backgroundImage: `url(${images.mercadeo})` }}
        >
          <div className="bpo-card-content">
            <h3>Mercadeo</h3>
            <p>Manejo de objeciones y expansión de canales para mayor cobertura y mejores resultados en ventas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedServices;
