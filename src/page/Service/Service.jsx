import React from 'react';
import './Service.css'; // Estilos para la página de servicios

// Íconos SVG simples para ilustración (puedes reemplazarlos con una librería como FontAwesome o Bootstrap Icons)
const UploadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Zm2 0a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Zm2 0a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5ZM1.5 6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5ZM12 4a2 2 0 0 1-2-2h- organizações.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1 1v1a1 1 0 0 0-1 1H4a1 1 0 0 0-1-1v-1a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 1-2 2v1.5a.5.5 0 0 1-1 0V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2 .5.5 0 0 0 0 1H3a2 2 0 0 1 2 2v2.5a.5.5 0 0 0 1 0V14a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V14a2 2 0 0 1-2-2h-1a1 1 0 0 0-1 1v1.5a.5.5 0 0 0 1 0V14a1 1 0 0 0-1-1h-1a1 1 0 0 0-1-1v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1H2a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 .5.5H14a.5.5 0 0 1 0-1h-1.5a.5.5 0 0 0-.5.5V10a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.5a.5.5 0 0 0 .5.5H3a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1.5a.5.5 0 0 0 .5.5H2a.5.5 0 0 1 0 1h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 .5.5H14a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 0-.5.5V10a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1a2 2 0 0 1-2-2V8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1H1.5a.5.5 0 0 1-.5-.5Zm-1-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"/></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>;


const Service = () => {
  return (
    <div className="service-page-container">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Entiende tu Salud, Simplifica tu Vida</h1>
          <p>
            Nuestra inteligencia artificial analiza tus recetas médicas para darte recomendaciones claras y personalizadas, 
            conectando la información con tu historial para cuidarte mejor.
          </p>
          <button className="cta-button">Sube tu primera receta</button>
        </div>
      </section>

      {/* Sección 'Cómo Funciona' */}
      <section className="how-it-works-section">
        <h2>¿Cómo Funciona?</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon"><UploadIcon /></div>
            <h3>1. Carga tu Receta</h3>
            <p>Toma una foto clara de tu receta médica y súbela a nuestra plataforma segura.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><BrainIcon /></div>
            <h3>2. Análisis con IA</h3>
            <p>Nuestra IA procesa la imagen, interpreta la caligrafía y extrae los medicamentos y dosis.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><HeartIcon /></div>
            <h3>3. Recibe Recomendaciones</h3>
            <p>Obtén un resumen fácil de entender y consejos de salud basados en tu historial médico.</p>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="benefits-section">
        <h2>Poder para el Paciente</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>Claridad Absoluta</h4>
            <p>No más dudas sobre la "letra de médico". Entiende cada indicación a la perfección.</p>
          </div>
          <div className="benefit-item">
            <h4>Cuidado Personalizado</h4>
            <p>Al conocer tu historial, la IA te ofrece recomendaciones que se alinean con tus padecimientos y objetivos de salud.</p>
          </div>
          <div className="benefit-item">
            <h4>Seguridad y Privacidad</h4>
            <p>Tus datos médicos son encriptados y gestionados con los más altos estándares de seguridad.</p>
          </div>
          <div className="benefit-item">
            <h4>Historial Centralizado</h4>
            <p>Todas tus recetas y recomendaciones se guardan en un solo lugar, accesibles cuando las necesites.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
