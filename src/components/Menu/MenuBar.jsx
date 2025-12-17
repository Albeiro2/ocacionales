import React, { useState, useEffect } from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [serviciosSubmenuOpen, setServiciosSubmenuOpen] = useState(false);
  const [telemarketerSubmenuOpen, setTelemarketerSubmenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    setServiciosSubmenuOpen(false);
    setTelemarketerSubmenuOpen(false);
    window.location.hash = sectionId;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash || 'about');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="medical-navbar">
      <div className="navbar-logo" style={{cursor: 'pointer'}} onClick={() => handleNavigation('about')}>
        <div className="logo-link">
          <div className="logo-text-group">
            <div className="logo-title">
              TELEMARKETER <span>BPO</span>
            </div>
            <div className="logo-subtitle">
              & LOGISTICS SAS
            </div>
          </div>
        </div>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-right-content ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          
          {/* SUBMENÚ TELEMARKETER */}
          <li className="navbar-item-with-submenu">
            <a 
              href="#telemarketer"
              onClick={(e) => {
                e.preventDefault();
                setTelemarketerSubmenuOpen(!telemarketerSubmenuOpen);
              }}
              className={activeSection === 'about' || activeSection === 'certificate' ? 'active' : ''}
            >
              Telemarketer
              <span className={`submenu-arrow ${telemarketerSubmenuOpen ? 'open' : ''}`}>▼</span>
            </a>
            <ul className={`submenu ${telemarketerSubmenuOpen ? 'active' : ''}`}>
              <li>
                <a 
                  href="#about"
                  onClick={() => handleNavigation('about')}
                >
                  Quiénes somos
                </a>
              </li>
              <li>
                <a 
                  href="#certificate"
                  onClick={() => handleNavigation('certificate')}
                >
                  Certificado
                </a>
              </li>
            </ul>
          </li>

          {/* SUBMENÚ SERVICIOS */}
          <li className="navbar-item-with-submenu">
            <a 
              href="#service"
              onClick={(e) => {
                e.preventDefault();
                setServiciosSubmenuOpen(!serviciosSubmenuOpen);
              }}
              className={activeSection === 'service' || activeSection === 'supplies-services' || activeSection === 'personalized-services' || activeSection === 'realEstate-services' || activeSection === 'features-services' || activeSection === 'events' ? 'active' : ''}
            >
              Servicios
              <span className={`submenu-arrow ${serviciosSubmenuOpen ? 'open' : ''}`}>▼</span>
            </a>
            <ul className={`submenu ${serviciosSubmenuOpen ? 'active' : ''}`}>
              <li>
                <a 
                  href="#supplies-services"
                  onClick={() => handleNavigation('supplies-services')}
                >
                  Servicios y suministros
                </a>
              </li>

              <li>
                <a 
                  href="#personalized-services"
                  onClick={() => handleNavigation('personalized-services')}
                >
                  Servicios personalizados
                </a>
              </li>

              <li>
                <a 
                  href="#realEstate-services"
                  onClick={() => handleNavigation('realEstate-services')}
                >
                  Servicios inmobiliarios
                </a>
              </li>

              <li>
                <a 
                  href="#features-services"
                  onClick={() => handleNavigation('features-services')}
                >
                  Características de servicio
                </a>
              </li>

              <li>
                <a 
                  href="#events"
                  onClick={() => handleNavigation('events')}
                >
                  Eventos y Catering
                </a>
              </li>
            </ul>
          </li>
           
          <li>
            <a 
              href="#plan" 
              onClick={() => handleNavigation('plan')}
              className={activeSection === 'plan' ? 'active' : ''}
            >
              Aliados
            </a>
          </li>

          <li>
            <a 
              href="#vitreum" 
              onClick={() => handleNavigation('vitreum')}
              className={activeSection === 'vitreum' ? 'active' : ''}
            >
              Vitreum
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
