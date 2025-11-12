import React, { useState } from 'react';
import './MenuBar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 1. Importa los hooks

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual
  const navigate = useNavigate(); // Hook para navegar programáticamente

  // Función que decide qué hacer al hacer clic
  const handleNavigation = (sectionId) => {
    // Cierra el menú móvil en cualquier caso
    setMenuOpen(false);

    // 2. Comprueba si estamos en la página de inicio
    if (location.pathname === '/') {
      // Si estamos en la home, solo hacemos scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 3. Si NO estamos en la home, navegamos a la home y pasamos el 'id'
      // de la sección en el 'hash' de la URL.
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="medical-navbar">
      {/* --- AQUÍ ESTÁ LA CORRECCIÓN --- */}
      <div className="navbar-logo">
        {/* Reemplazamos el <Link> por una etiqueta <a> que llama a handleNavigation */}
        <a href="#inicio" onClick={() => handleNavigation('inicio')}>
          Clínica Bienestar
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-right-content ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          {/* 4. Los enlaces ahora son <a> que llaman a nuestra función inteligente */}
          <li><a href="#service" onClick={() => handleNavigation('service')}>Servicios</a></li>
          <li><a href="#about" onClick={() => handleNavigation('about')}>Sobre nosotros</a></li>
          <li><a href="#plan" onClick={() => handleNavigation('plan')}>Planes</a></li>
          <li><a href="#contact" onClick={() => handleNavigation('contact')}>Contacto</a></li>
          
        </ul>

        <div className="navbar-auth">
          {/* --- AQUÍ ESTÁ LA CORRECCIÓN --- */}
          {/* Añadimos el onClick para cerrar el menú al navegar */}
          <Link to="/login" className="login-button" onClick={() => setMenuOpen(false)}>Acceder</Link>
          <Link to="/register" className="register-button" onClick={() => setMenuOpen(false)}>Registrarte</Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;

