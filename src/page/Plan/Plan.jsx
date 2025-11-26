import React, { useEffect, useRef } from 'react';
import './Plan.css';
import { images } from '../../assets/assets';

const Plan = () => {
  const carouselRef = useRef(null);
  const currentRef = useRef(0);
  const intervalRef = useRef(null);
  const numAliados = (images.aliados || []).length;
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

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numAliados]);

  const handlePrev = () => {
    slideTo(currentRef.current - 1);
    startAutoPlay();
  };

  const handleNext = () => {
    slideTo(currentRef.current + 1);
    startAutoPlay();
  };

  /* --- Clientes carousel (nuevo) --- */
  const clientesCarouselRef = useRef(null);
  const currentCliRef = useRef(0);
  const intervalCliRef = useRef(null);
  const numClientes = (images.clientes || []).length;

  const slideToClientes = (index) => {
    const i = ((index % numClientes) + numClientes) % numClientes;
    currentCliRef.current = i;
    if (clientesCarouselRef.current) {
      clientesCarouselRef.current.setAttribute('data-index', i);
      clientesCarouselRef.current.style.transform = `translateX(-${i * 100}%)`;
    }
  };

  const startAutoPlayClientes = () => {
    clearInterval(intervalCliRef.current);
    intervalCliRef.current = setInterval(() => {
      slideToClientes(currentCliRef.current + 1);
    }, AUTO_MS);
  };

  useEffect(() => {
    startAutoPlayClientes();
    return () => clearInterval(intervalCliRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numClientes]);

  const handlePrevClientes = () => {
    slideToClientes(currentCliRef.current - 1);
    startAutoPlayClientes();
  };

  const handleNextClientes = () => {
    slideToClientes(currentCliRef.current + 1);
    startAutoPlayClientes();
  };

  return (
    <div className="aliados-background">
      <div className="aliados-container">
        <div className="aliados-header">
          <h1>Nuestros aliados y experiencias</h1>
          <p>Conoce algunos de los principales aliados de Telemarketer BPO</p>
        </div>

        <div className="aliados-slider-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev} aria-label="Anterior Aliados">
            ‹
          </button>

          <div className="aliados-slider-viewport">
            <div className="aliados-slider" ref={carouselRef} data-index="0">
              {(images.aliados || []).map((img, i) => (
                <div className="aliado-slide" key={`aliado-${i}`}>
                  <img src={img} alt={`Aliado ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={handleNext} aria-label="Siguiente Aliados">
            ›
          </button>
        </div>

        {/* --- New: Clientes carousel (igual estilo y comportamiento) --- */}
        <div className="aliados-header" style={{ marginTop: '44px' }}>
          <h1>Nuestros clientes y sectores</h1>
          <p>Algunos de los clientes y sectores en los que hemos trabajado</p>
        </div>

        <div className="aliados-slider-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrevClientes} aria-label="Anterior Clientes">
            ‹
          </button>

          <div className="aliados-slider-viewport">
            <div className="aliados-slider" ref={clientesCarouselRef} data-index="0">
              {(images.clientes || []).map((img, i) => (
                <div className="aliado-slide" key={`cliente-${i}`}>
                  <img src={img} alt={`Cliente ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={handleNextClientes} aria-label="Siguiente Clientes">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;