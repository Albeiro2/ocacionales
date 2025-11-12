import React, { useState, useEffect } from 'react';
import './MenuBar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const navigate = useNavigate();

  // Función que decide qué hacer al hacer clic
  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // useEffect para detectar qué sección está visible al hacer scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = ['inicio', 'service', 'about', 'plan', 'contact'];
      
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter(entry => entry.isIntersecting);
          
          if (visibleEntries.length > 0) {
            const mostVisible = visibleEntries.reduce((prev, current) => {
              return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
            });
            
            setActiveSection(mostVisible.target.id);
          }
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-80px 0px -60% 0px'
        }
      );

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // useEffect para manejar el hash inicial
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setActiveSection(id);
    } else {
      const sections = ['inicio', 'service', 'about', 'plan', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <nav className="medical-navbar">
      <div className="navbar-logo">
        <a href="#inicio" onClick={() => handleNavigation('inicio')}>
          Clínica Bienestar
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span> {/* TERCERA LÍNEA AGREGADA */}
      </div>

      <div className={`navbar-right-content ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li>
            <a 
              href="#service" 
              onClick={() => handleNavigation('service')}
              className={activeSection === 'service' ? 'active' : ''}
            >
              Servicios
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={() => handleNavigation('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a 
              href="#plan" 
              onClick={() => handleNavigation('plan')}
              className={activeSection === 'plan' ? 'active' : ''}
            >
              Planes
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={() => handleNavigation('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
