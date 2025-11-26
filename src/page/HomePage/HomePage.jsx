import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Plan from '../Plan/Plan';
import AboutV from '../AboutV/AboutV';
import Footer from '../Footer/Footer';

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
      
      <section id="service">
        <Service />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="plan">
        <Plan />
      </section>

      <section id="aboutV">
        <AboutV />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
};
export default HomePage;
