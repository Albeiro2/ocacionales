import React, { useState, useEffect } from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const PersonalizedServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bpoImages = [
    images.televenta,
    images.cliente,
    images.cobranza,
    images.mercadeo
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bpoImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bpo-section">
      <h2>Servicios personalizados</h2>
      <div className="bpo-grid">
        <div className="bpo-card bpo-televentas">
          <div className="bpo-card-content">
            <h3>Televentas</h3>
            <p>Ventas de servicios y productos financieros por comunicación telefónica. Incluye desde la planificación hasta el análisis y control de resultados.</p>
          </div>
        </div>

        <div className="bpo-card bpo-cliente">
          <div className="bpo-card-content">
            <h3>Servicio al cliente</h3>
            <p>Recepción y gestión de llamadas para solución de consultas/eventualidades, logrando la satisfacción de los usuarios.</p>
          </div>
        </div>

        <div className="bpo-card bpo-cobranza">
          <div className="bpo-card-content">
            <h3>Cobranzas</h3>
            <p>Recuperación de cartera en todas sus etapas: preventiva, administrativa, prejurídica y jurídica.</p>
          </div>
        </div>

        <div className="bpo-card bpo-mercadeo">
          <div className="bpo-card-content">
            <h3>Mercadeo</h3>
            <p>Manejo de objeciones y expansión de canales para mayor cobertura y mejores resultados en ventas.</p>
          </div>
        </div>

        {/* Carrusel de imágenes - ocupa 2 columnas */}
        <div className="bpo-carousel">
          {bpoImages.map((img, index) => (
            <div
              key={index}
              className={`bpo-carousel-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedServices;
