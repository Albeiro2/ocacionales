import React from 'react';
import './Service.css';

const RealEstateServices = () => {
  return (
    <section className="realestate-section">
      <h2>Servicios Inmobiliarios</h2>
      <div className="realestate-grid">
        <div className="realestate-card inmobiliaria-card">
          <h3>Captación y Comercialización</h3>
          <p>Personal especializado en captación, asesoría y gestión de propiedades para venta o comercialización. Producción de material visual con fotos y videos profesionales para presentar los inmuebles de forma atractiva y efectiva</p>
        </div>

        <div className="realestate-card publicidad-card">
          <h3>Publicidad Inmobiliaria</h3>
          <p>Publicación de inmuebles en páginas de alto reconocimiento con las que tenemos convenio. Los interesados podrán visualizar los inmuebles disponibles y asignar los de su mayor interés para posterior ampliación mediante visitas a los predios.</p>
        </div>

        <div className="realestate-card citas-card">
          <h3>Programación de Citas</h3>
          <p>Agendamiento de visitas por parte de clientes potenciales coordinadas con anterioridad con el propietario del inmueble. Toda visita estará acompañada por uno de nuestros asesores designados para atender personalmente al cliente citado.</p>
        </div>

        <div className="realestate-card telefonica-card">
          <h3>Atención Telefónica</h3>
          <p>Las personas interesadas podrán contactarnos a los números telefónicos registrados de domingo a domingo. Con nuestro servicio, nuestros clientes no tienen que suministrar sus teléfonos privados para dar información sobre el inmueble.</p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
