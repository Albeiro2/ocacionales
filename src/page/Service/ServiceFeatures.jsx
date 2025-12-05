import React from 'react';
import './Service.css';

const ServiceFeatures = () => {
  return (
    <section className="features-section">
      <h2>Características de nuestros servicios</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Interface de agente compatible</h3>
          <p>Compatible con Windows y Linux para máxima flexibilidad operativa</p>
        </div>

        <div className="feature-card">
          <h3>Auditorías de calidad</h3>
          <p>Auditorías constantes en el servicio para garantizar excelencia</p>
        </div>

        <div className="feature-card">
          <h3>Soporte técnico especializado</h3>
          <p>Mantenimiento por parte del grupo de ingenieros certificados</p>
        </div>

        <div className="feature-card">
          <h3>Planes de contingencia</h3>
          <p>Planes de contingencia operacional para continuidad del servicio</p>
        </div>

        <div className="feature-card">
          <h3>Grabación completa</h3>
          <p>Grabación de todas las extensiones en los puestos de trabajo</p>
        </div>

        <div className="feature-card">
          <h3>IVR transaccional</h3>
          <p>IVR transaccional personalizado por campaña</p>
        </div>

        <div className="feature-card">
          <h3>Norma COPC</h3>
          <p>Puestos de trabajo sujetos a la norma COPC internacional</p>
        </div>

        <div className="feature-card">
          <h3>Cableado certificado</h3>
          <p>Cableado estructurado certificado para máxima estabilidad</p>
        </div>

        <div className="feature-card">
          <h3>Tecnología vanguardista</h3>
          <p>Equipamiento de última generación y tecnología de punta</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
