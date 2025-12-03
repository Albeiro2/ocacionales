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

  return (
    <section className="eventos-section">
      <h2>Eventos</h2>
      <div className="eventos-categorias">
        {eventosCategorias.map(cat => (
          <button
            key={cat.key}
            className={`evento-categoria-boton${catActual === cat.key ? ' active' : ''}`}
            onClick={() => { setCatActual(cat.key); setSlide(0); }}
          >
            {cat.nombre}
          </button>
        ))}
      </div>
      <div className="eventos-carrusel-wrap">
        <button
          className="evento-carrusel-btn prev"
          onClick={prevImg}
          disabled={slide === 0}
          style={{ visibility: slide === 0 ? 'hidden' : 'visible', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
        >‹</button>
        <div className="eventos-carrusel">
          {imgs.map((img, idx) => {
            let estado = 'evento-img-hidden';
            if (idx === slide) estado = 'evento-img-activa';
            else if (idx === slide - 1) estado = 'evento-img-anterior';
            else if (idx === slide + 1) estado = 'evento-img-siguiente';

            // Solo overlay si es la primera imagen y está activa
            const showOverlay = idx === 0 && estado === 'evento-img-activa' && hovering;

            return (
              <div
                key={img}
                className={`evento-img-wrapper ${estado}`}
                onMouseEnter={() => { if (idx === 0 && estado === 'evento-img-activa') setHovering(true); }}
                onMouseLeave={() => setHovering(false)}
                style={{ position: 'absolute' }}
              >
                <img
                  src={img}
                  alt=""
                  className={`evento-img`}
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
        <button
          className="evento-carrusel-btn next"
          onClick={nextImg}
          disabled={slide === imgs.length - 1}
          style={{ visibility: slide === imgs.length - 1 ? 'hidden' : 'visible', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
        >›</button>
      </div>
    </section>
  );
};

export default Events;
