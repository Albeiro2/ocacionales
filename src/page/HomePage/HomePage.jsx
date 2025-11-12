import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 1. Importa todas las páginas/secciones que has creado
import Service from '../Service/Service';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Plan from '../Plan/Plan'

// Opcional: Estilos para añadir un poco de espacio entre secciones si es necesario
// import './HomePage.css';

const HomePage = () => {

  const location = useLocation();

  // 1. Este useEffect se ejecuta cada vez que cambia la URL
  useEffect(() => {
    // 2. Comprueba si hay un 'hash' en la URL (ej: #service)
    if (location.hash) {
      // El hash viene con el '#', así que lo quitamos
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Hacemos scroll suave a ese elemento
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Se ejecuta de nuevo si 'location' cambia

  return (
    <div>
      {/* 2. Cada sección está envuelta en un <section> con un ID único */}
      {/* Este ID es el que usaremos para que el menú pueda "apuntar" aquí */}

      <section id="inicio">
        {/* Puedes poner aquí una sección de bienvenida si quieres */}
        {/* Por ahora la dejaremos vacía para que "Inicio" lleve al tope */}
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="plan">
        <Plan />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
