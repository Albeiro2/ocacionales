// ...existing code...
import React, { useEffect, useRef } from 'react';
import './Plan.css';
import { images } from '../../assets/assets';

const Plan = () => {
  const carouselRef = useRef(null);
  const currentRef = useRef(0);
  const intervalRef = useRef(null);
  const numAliados = images.aliados.length;
  const AUTO_MS = 1900;

  const slideTo = (index) => {
    const i = ((index % numAliados) + numAliados) % numAliados; // normaliza
    currentRef.current = i;
    if (carouselRef.current) {
      carouselRef.current.setAttribute('data-index', i);
      carouselRef.current.style.transform = `translateX(-${i * 100}%)`;
    }
  };

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      slideTo(currentRef.current + 1);
    }, AUTO_MS);
  };

  // inicia autoplay al montar y limpia al desmontar
  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numAliados]);

  const handlePrev = () => {
    slideTo(currentRef.current - 1);
    startAutoPlay(); // reinicia timer para que siga avanzando
  };

  const handleNext = () => {
    slideTo(currentRef.current + 1);
    startAutoPlay();
  };

  return (
    <div className="aliados-background">
      <div className="aliados-container">
        <div className="aliados-header">
          <h1>Nuestros aliados y experiencias</h1>
          <p>Conoce algunos de los principales aliados de Telemarketer BPO</p>
        </div>
        <div className="aliados-slider-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev} aria-label="Anterior">‹</button>
          <div className="aliados-slider-viewport">
            <div className="aliados-slider" ref={carouselRef} data-index="0">
              {images.aliados.map((img, i) => (
                <div className="aliado-slide" key={i}>
                  <img src={img} alt={`Aliado ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={handleNext} aria-label="Siguiente">›</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
// ...existing code...