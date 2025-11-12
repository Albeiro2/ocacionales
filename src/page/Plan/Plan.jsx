import React from 'react';
import './Plan.css'; // Estilos para la página de planes

const Plan = () => {
  return (
    <div className="plans-background">
      <div className="plans-container">
        <div className="plans-header">
          <h1>Elige el Plan Perfecto para Ti</h1>
          <p>Comienza gratis o accede a beneficios ilimitados con nuestro plan Premium.</p>
        </div>

        <div className="plan-cards-wrapper">
          {/* Tarjeta del Plan Básico */}
          <div className="plan-card">
            <div className="plan-title">
              <h2>Básico</h2>
            </div>
            <div className="plan-price">
              Gratis
              <span>/ para siempre</span>
            </div>
            <ul className="plan-features">
              <li><span className="check-icon">✓</span>5 preguntas médicas a la semana</li>
              <li><span className="check-icon">✓</span>Historial de respuestas</li>
              <li><span className="check-icon">✓</span>Anuncios para seguir preguntando</li>
            </ul>
            <button className="btn btn-outline">Empezar ahora</button>
          </div>

          {/* Tarjeta del Plan Premium */}
          <div className="plan-card premium-card">
            <div className="popular-badge">Más Popular</div>
            <div className="plan-title">
              <h2>Premium</h2>
            </div>
            <div className="plan-price">
              $2
              <span>/ al mes</span>
            </div>
            <ul className="plan-features">
              <li><span className="check-icon">✓</span>Preguntas ilimitadas</li>
              <li><span className="check-icon">✓</span>Sin anuncios</li>
              <li><span className="check-icon">✓</span>Vuelve a conversaciones anteriores</li>
            </ul>
            <button className="btn btn-primary">Actualizar a Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
