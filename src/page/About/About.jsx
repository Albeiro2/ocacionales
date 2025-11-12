import React from 'react';
import './About.css'; // Estilos para la página

// Ícono simple para el descargo de responsabilidad
const AlertIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>;

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-content">
        {/* Sección de Misión */}
        <section className="mission-section">
          <h1>Nuestra Misión: Claridad y Empoderamiento para tu Salud</h1>
          <p>
            Nacimos de una simple idea: nadie debería sentirse confundido o inseguro sobre su propio tratamiento médico. En un mundo donde la "letra de médico" es una barrera común, nosotros usamos la tecnología para construir un puente. Nuestra misión es empoderar a las personas para que comprendan y sigan sus recetas médicas con total confianza.
          </p>
        </section>

        {/* Sección sobre el Rol de la IA */}
        <section className="role-of-ai-section">
          <h2>Tecnología como Aliada, no como Doctor</h2>
          <p>
            Es fundamental entender nuestro rol. <strong>No somos doctores ni profesionales de la salud.</strong> Somos tecnólogos y diseñadores apasionados por crear herramientas que faciliten la vida. Utilizamos inteligencia artificial (IA) avanzada para interpretar la información de las recetas y, basándonos en el historial que nos proporcionas, generar recomendaciones que buscan ser lo más saludables y coherentes posible.
          </p>
          <p>
            Nuestra IA está diseñada para ser una asistente inteligente que traduce, organiza y sugiere. Sin embargo, la supervisión humana y el juicio de un profesional médico son insustituibles[56].
          </p>
        </section>

        {/* Sección de Descargo de Responsabilidad */}
        <section className="disclaimer-section">
          <div className="disclaimer-header">
            <AlertIcon />
            <h2>Descargo de Responsabilidad Importante</h2>
          </div>
          <div className="disclaimer-text">
            <p>
              Las recomendaciones, resúmenes y cualquier información generada por nuestra plataforma <strong>no están aprobadas por médicos y no constituyen un consejo médico oficial.</strong> Son el resultado de una interpretación automatizada.
            </p>
            <p>
              No es obligación seguir nuestras sugerencias. Antes de realizar cualquier cambio en tu tratamiento, dieta o estilo de vida, <strong>siempre debes consultar a tu médico o a un profesional de la salud calificado.</strong> La responsabilidad final sobre tu salud recae en ti y en los profesionales que te atienden.
            </p>
            <p>
              Para una comprensión completa de nuestras limitaciones y responsabilidades, te invitamos a descargar y leer nuestro documento de Términos de Servicio y Responsabilidad.
            </p>
            <a href="/docs/terminos-y-responsabilidad.pdf" className="download-link" download>
              Descargar Documento de Responsabilidad
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
