import React, { useState } from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const eventosCategorias = [
  { nombre: 'Niños', key: 'ninos' },
  { nombre: 'Regalos', key: 'regalos' },
  { nombre: 'Sonidos', key: 'sonidos' },
  { nombre: 'Alimentos', key: 'alimentos' },
  { nombre: 'Animación', key: 'animacion' }
];

const eventosExplicacion = {
  ninos: 'Garantizamos el entretenimiento de los niños, ofreciendo un espectáculo sano.',
  regalos: 'Sorprende a tus invitados con detalles y regalos únicos para cada ocasión.',
  sonidos: 'Potenciamos tu evento con sonido profesional y ambiente musical perfecto.',
  alimentos: 'Deliciosos alimentos y snacks para disfrutar en cada momento especial.',
  animacion: 'Animamos tu evento con talento creativo y diversión para todos.'
};

const Events = () => {
  const [catActual, setCatActual] = useState('ninos');
  const [slide, setSlide] = useState(0);
  const [hovering, setHovering] = useState(false);

  const imgs = images[catActual] || [];

  const nextImg = () => setSlide(s => (s < imgs.length - 1 ? s + 1 : s));
  const prevImg = () => setSlide(s => (s > 0 ? s - 1 : s));

  const handleCategoryChange = (key) => {
    setCatActual(key);
    setSlide(0);
    setHovering(false);
  };

  return (
    <section className="eventos-section">
      <h2>Eventos</h2>
      
      {/* Categorías */}
      <div className="eventos-categorias">
        {eventosCategorias.map(cat => (
          <button
            key={cat.key}
            className={`evento-categoria-boton ${catActual === cat.key ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.key)}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      {/* Carrusel */}
      <div className="eventos-carrusel-wrap">
        {/* Botón Anterior */}
        <button
          className={`evento-carrusel-btn prev ${slide === 0 ? 'disabled' : ''}`}
          onClick={prevImg}
          disabled={slide === 0}
        >
          ‹
        </button>

        {/* Contenedor de imágenes */}
        <div className="eventos-carrusel">
          {imgs.map((img, idx) => {
            let estado = 'evento-img-hidden';
            if (idx === slide) estado = 'evento-img-activa';
            else if (idx === slide - 1) estado = 'evento-img-anterior';
            else if (idx === slide + 1) estado = 'evento-img-siguiente';

            const isFirstImage = idx === 0;
            const isActive = estado === 'evento-img-activa';
            const showOverlay = isFirstImage && isActive && hovering;

            return (
              <div
                key={idx}
                className={`evento-img-wrapper ${estado}`}
                onMouseEnter={() => { if (isFirstImage && isActive) setHovering(true); }}
                onMouseLeave={() => setHovering(false)}
              >
                <img
                  src={img}
                  alt={`Evento ${catActual} ${idx + 1}`}
                  className="evento-img"
                />
                {showOverlay && (
                  <div className="evento-explicacion-overlay show">
                    <span>{eventosExplicacion[catActual]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botón Siguiente */}
        <button
          className={`evento-carrusel-btn next ${slide === imgs.length - 1 ? 'disabled' : ''}`}
          onClick={nextImg}
          disabled={slide === imgs.length - 1}
        >
          ›
        </button>
      </div>

      {/* Indicador de posición */}
      <div className="eventos-indicador">
        {slide + 1} / {imgs.length}
      </div>
    </section>
  );
};

export default Events;
