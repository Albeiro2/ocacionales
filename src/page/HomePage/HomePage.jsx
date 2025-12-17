import React, { useEffect } from 'react';

import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Plan from '../Plan/Plan';
import Footer from '../Footer/Footer';
import Certificate from '../Certificado/Certificate';

const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>

      <section id="about">
        <About />
      </section>

      <section id="certificate">
      <Certificate/>
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

      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
};
export default HomePage;
