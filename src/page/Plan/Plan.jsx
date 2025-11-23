import React, { useEffect, useRef } from 'react';
import './Plan.css';
import { images } from '../../assets/assets';

const Plan = () => {
  const carouselRef = useRef(null);
  const numAliados = images.aliados.length;

  // Animación automática responsive
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        current = (current + 1) % numAliados;
        carouselRef.current.setAttribute('data-index', current);
        carouselRef.current.style.transform = `translateX(-${current * 100}%)`;
      }
    }, 1900);
    return () => clearInterval(interval);
  }, [numAliados]);

  return (
    <div className="aliados-background">
      <div className="aliados-container">
        <div className="aliados-header">
          <h1>Nuestros aliados y experiencias</h1>
          <p>Conoce algunos de los principales aliados de Telemarketer BPO</p>
        </div>
        <div className="aliados-slider-wrapper">
          <div className="aliados-slider-viewport">
            <div className="aliados-slider" ref={carouselRef} data-index="0">
              {images.aliados.map((img, i) => (
                <div className="aliado-slide" key={i}>
                  <img src={img} alt={`Aliado ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
