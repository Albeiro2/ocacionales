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

const SuppliesServices = () => {
  return (
    <section className="how-it-works-section">
      <h2>¿Qué servicios y suministros ofrecemos?</h2>
      <div className="steps-container">
        <div className="step-card oficina-card">
          <div className="step-icon"><OfficeIcon /></div>
          <h3>Oficina y papelería</h3>
          <p><strong>Servicio y suministro:</strong> Insumos para oficina y papelería de alta calidad, con atención personalizada.</p>
        </div>
        <div className="step-card cafe-card">
          <div className="step-icon"><CoffeeIcon /></div>
          <h3>Aseo y cafetería</h3>
          <p><strong>Servicio y suministro:</strong> Productos para limpieza, cafetería y confort laboral.</p>
        </div>
        <div className="step-card botiquin-card">
          <div className="step-icon"><MedkitIcon /></div>
          <h3>Botiquín y ferretería</h3>
          <p><strong>Servicio y suministro:</strong> Botiquines y herramientas para la oficina y salud ocupacional.</p>
        </div>
        <div className="step-card impresora-card">
          <div className="step-icon"><PrinterIcon /></div>
          <h3>Venta y alquiler de equipos de impresión</h3>
          <p><strong>Servicio y suministro:</strong> Venta y renta de fotocopiadoras y multifuncionales de última generación.</p>
        </div>
      </div>
    </section>
  );
};

export default SuppliesServices;
