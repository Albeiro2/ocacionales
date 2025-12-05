import React from 'react';
import './AboutV.css';
import { images } from '../../assets/assets';

// Íconos SVG representativos:
const EmpresaIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <rect x="7" y="19" width="34" height="18" rx="5" fill="#e3f2fd"/>
    <rect x="15" y="10" width="18" height="11" rx="4" fill="#38a9e0"/>
    <rect x="20" y="25" width="8" height="7" rx="2" fill="#90caf9"/>
    <rect x="13" y="33" width="5" height="4" rx="1" fill="#bddaf7"/>
    <rect x="30" y="33" width="5" height="4" rx="1" fill="#bddaf7"/>
  </svg>
);
const MisionIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#e8fced"/>
    <rect x="21" y="13" width="6" height="20" rx="2" fill="#34b97f"/>
    <rect x="17" y="30" width="14" height="4" rx="2" fill="#56d399"/>
    <circle cx="24" cy="19" r="3" fill="#34b97f"/>
  </svg>
);
const VisionIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <ellipse cx="24" cy="24" rx="18" ry="13" fill="#fffbe6"/>
    <ellipse cx="24" cy="24" rx="11" ry="6" fill="#ffe59f"/>
    <ellipse cx="24" cy="24" rx="4" ry="2" fill="#f7ce6f"/>
  </svg>
);
const CalidadIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#e3f6ff"/>
    <rect x="19" y="17" width="10" height="14" rx="2" fill="#4db9e9"/>
    <circle cx="24" cy="27" r="4" fill="#fff"/>
    <path d="M18 32l6 4 6-4" stroke="#4db9e9" strokeWidth="2" fill="none"/>
  </svg>
);

const PaperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#28a745" viewBox="0 0 16 16">
    <rect x="3" y="2" width="10" height="12" rx="1.6" fill="#eafbe8" stroke="#28a745" strokeWidth="1.3"/>
    <rect x="5" y="5" width="6" height="1" fill="#28a745"/>
    <rect x="5" y="7" width="6" height="1" fill="#28a745"/>
    <rect x="5" y="9" width="6" height="1" fill="#28a745"/>
  </svg>
);

const ComprasIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill="#e3f2fd" />
    <rect x="14" y="16" width="20" height="13" rx="4" fill="#1976d2"/>
    <rect x="20" y="29" width="8" height="8" rx="2" fill="#90caf9"/>
    <rect x="18.5" y="23" width="11" height="2.5" rx="1.2" fill="#fff"/>
  </svg>
);

const LogisticaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="6" y="22" width="36" height="18" rx="4" fill="#ede7f6"/>
    <rect x="14" y="14" width="20" height="14" rx="3" fill="#512da8"/>
    <rect x="19" y="29" width="10" height="8" rx="1.5" fill="#b39ddb"/>
    <circle cx="40" cy="38" r="5" fill="#512da8"/>
    <rect x="31" y="24" width="11" height="5" rx="2.5" fill="#9575cd"/>
  </svg>
);

const EstrategiaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="8" y="8" width="32" height="32" rx="8" fill="#fffde7"/>
    <path d="M18 30 L30 18" stroke="#fbc02d" strokeWidth="4"/>
    <circle cx="18" cy="30" r="4" fill="#fdd835"/>
    <circle cx="30" cy="18" r="4" fill="#fdd835"/>
  </svg>
);

const ProveedorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="10" y="16" width="28" height="21" rx="5" fill="#e0f2f1"/>
    <rect x="18" y="8" width="12" height="10" rx="4" fill="#26a69a"/>
    <rect x="15" y="29" width="18" height="5" rx="2.5" fill="#80cbc4"/>
  </svg>
);

const ConfianzaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill="#ffecb3"/>
    <path d="M36 18l-13 13-7-7" stroke="#ffb300" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="19" cy="32" r="3" fill="#fff176"/>
  </svg>
);

const About = () => (
  <div className="aboutv-page-container">
    {/* Título corporativo */}
    <img
      src={images.vitreum}
      alt="Corporación Vitreum"
      className="aboutv-corporativo-imagen"
    />

    <section className="aboutv-tarjetas-section">
      <div className="aboutv-tarjetas-grid">
        {/* Vitreum - sin icono */}
        <div className="aboutv-tarjeta aboutv-tarjeta-vitreum">
          <h3>Vitreum</h3>
          <p>
            Corporacion Vitreum Organización sin animo de lucro, trabajamos para transformar la vida de niñas, niños, adolescentes y jóvenes promoviendo sus derechos y brindando oportunidades de desarrollo. A través de programas educativos, de salud y protección, impactamos positivamente el futuro de miles de personas, fomentando un mundo más justo e inclusivo
          </p>
        </div>

        {/* Orientación laboral - sin icono */}
        <div className="aboutv-tarjeta aboutv-tarjeta-orientacion">
          <h3>Orientación laboral</h3>
          <p>
            La Corporación Vitreum, como organización sin ánimo de lucro, orienta su labor mediante cuatro ejes: articular esfuerzos, facilitar acceso a información como centro de conocimiento, fortalecer institucionalmente a sus asociadas y promover un entorno que favorezca su labor, contribuyendo al desarrollo y la inversión social en Colombia
          </p>
        </div>

        {/* Misión - sin icono */}
        <div className="aboutv-tarjeta aboutv-tarjeta-mision">
          <h3>Misión</h3>
          <p>
            La Corporación Vitreum es una entidad sin ánimo de lucro que desde 2012 impulsa el desarrollo integral de personas y comunidades, promoviendo educación para el trabajo, acceso a salud y bienestar, y apoyo a la niñez y el adulto mayor para mejorar su calidad de vida. Ejecuta programas sociales y educativos, propios y en alianza con el Estado y otras entidades, guiándose por la transparencia, la ética y el compromiso con el desarrollo humano sostenible.
          </p>
        </div>

        {/* Visión - sin icono */}
        <div className="aboutv-tarjeta aboutv-tarjeta-vision">
          <h3>Visión</h3>
          <p>
            Para 2035, la Corporación Vitreum será reconocida a nivel regional y nacional como líder en formación para el trabajo, promoción de la salud y protección de la niñez y el adulto mayor. Será una organización innovadora y confiable en la ejecución de proyectos sociales, destacada por su transparencia, calidad e impacto sostenible, consolidándose como referente en oportunidades, desarrollo humano e inclusión social.
          </p>
        </div>
      </div>
    </section>

    {/* Tarjeta declaración de servicio */}
    <div className="aboutv-servicio-declaracion">
      <h2>DECLARACIÓN DE SERVICIO</h2>
      <p>
        La Corporación Vitreum, como organización sin ánimo de lucro dedicada desde el año 2012 a la
        educación para el trabajo, la promoción de la salud y la atención integral de la niñez y del adulto mayor, desarrolla sus actividades con el objetivo de generar bienestar y oportunidades para las comunidades.
        <br />
        Con el fin de ampliar el impacto social de sus programas, la Corporación se encuentra habilitada y comprometida para celebrar contratos, convenios y alianzas con entidades del Estado, en todos los niveles territoriales, de acuerdo con la normatividad vigente en materia de contratación pública. A través de estos mecanismos, Vitreum busca:
      </p>
      <ul>
        <li>Ejecutar proyectos de formación, bienestar y asistencia social dirigidos a poblaciones vulnerables.</li>
        <li>Desarrollar procesos educativos orientados al trabajo y al fortalecimiento del talento humano.</li>
        <li>Implementar acciones de promoción, prevención y atención en salud en diversos entornos comunitarios.</li>
        <li>Realizar programas de protección integral y acompañamiento para la niñez y el adulto mayor.</li>
        <li>Contribuir al cumplimiento de los planes, políticas públicas y metas sociales definidas por las entidades estatales.</li>
      </ul>
      <p>
        La Corporación Vitreum garantiza transparencia, eficiencia, responsabilidad social y cumplimiento normativo en cada proceso contractual, velando por una gestión ética y orientada a resultados que transformen positivamente las comunidades.
      </p>
    </div>

    {/* Valores corporativos */}
    <section className="aboutv-distinciones-section">
      <h2>¿Por qué somos la mejor opción?</h2>
      <div className="aboutv-distinciones-grid">
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><LogisticaIcon /></div>
          <h3>Desarrollo</h3>
          <p>Desarrollo integral del saber</p>
        </div>
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><ConfianzaIcon /></div>
          <h3>Honestidad</h3>
          <p>Ser feliz con lo que haces</p>
        </div>
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><ProveedorIcon /></div>
          <h3>Profesionalidad</h3>
          <p>Avanza por el camino laboral, profesional</p>
        </div>
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><ComprasIcon /></div>
          <h3>Asesoramiento</h3>
          <p>La formación que necesitas para mejorar tus competencias</p>
        </div>
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><PaperIcon /></div>
          <h3>Calidad</h3>
          <p>Docentes con alta calidad profesional</p>
        </div>
        <div className="aboutv-distincion-card">
          <div className="aboutv-distincion-icon"><EstrategiaIcon /></div>
          <h3>Enseñar</h3>
          <p>Enseñar con el ejemplo, practicar haciendo</p>
        </div>
      </div>
    </section>

    {/* Temas de capacitaciones */}
    <section className="aboutv-temas-section">
      <h2>Temas de capacitaciones</h2>
      <div className="aboutv-temas-content">
        <img src={images.temas} alt="Temas de capacitaciones" className="aboutv-temas-image" />
      </div>
    </section>
  </div>
);

export default About;