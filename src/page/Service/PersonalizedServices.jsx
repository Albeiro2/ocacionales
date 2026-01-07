import React from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const PersonalizedServices = () => {
  const bpoImages = [
    images.televenta,
    images.cliente,
    images.cobranza,
    images.mercadeo
  ];

  return (
    <section className="bpo-section-escalera">
      <h2>Servicios personalizados</h2>
      <div className="bpo-grid-escalera">
        
        {/* Servicio 1 - Televentas - Imagen IZQUIERDA */}
        <div className="bpo-item">
          <div className="bpo-imagen">
            <img src={bpoImages[0]} alt="Televentas" />
          </div>
          <div className="bpo-content">
            <h3>Televentas</h3>
            <p>Ventas de servicios y productos financieros por comunicación telefónica. Incluye desde la planificación hasta el análisis y control de resultados.</p>
          </div>
        </div>

        {/* Servicio 2 - Servicio al cliente - Imagen DERECHA */}
        <div className="bpo-item bpo-reverse">
          <div className="bpo-imagen">
            <img src={bpoImages[1]} alt="Servicio al Cliente" />
          </div>
          <div className="bpo-content">
            <h3>Servicio al cliente</h3>
            <p>Recepción y gestión de llamadas para solución de consultas/eventualidades, logrando la satisfacción de los usuarios.</p>
          </div>
        </div>

        {/* Servicio 3 - Cobranzas - Imagen IZQUIERDA */}
        <div className="bpo-item">
          <div className="bpo-imagen">
            <img src={bpoImages[2]} alt="Cobranzas" />
          </div>
          <div className="bpo-content">
            <h3>Cobranzas</h3>
            <p>Recuperación de cartera en todas sus etapas: preventiva, administrativa, prejurídica y jurídica.</p>
          </div>
        </div>

        {/* Servicio 4 - Mercadeo - Imagen DERECHA */}
        <div className="bpo-item bpo-reverse">
          <div className="bpo-imagen">
            <img src={bpoImages[3]} alt="Mercadeo" />
          </div>
          <div className="bpo-content">
            <h3>Mercadeo</h3>
            <p>Manejo de objeciones y expansión de canales para mayor cobertura y mejores resultados en ventas.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalizedServices;
