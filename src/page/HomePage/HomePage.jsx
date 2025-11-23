import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Plan from '../Plan/Plan';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
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
