import React from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const RealEstateServices = () => {
  const realEstateImages = images.inmobiliarios; // [inmobiliario1, inmobiliario2, inmobiliario3]

  return (
    <section className="realestate-section">
      <h2>Servicios Inmobiliarios</h2>
      <div className="realestate-grid-escalera">
        
        {/* Servicio 1 - Imagen IZQUIERDA */}
        <div className="realestate-item">
          <div className="realestate-imagen">
            <img src={realEstateImages[0]} alt="Captación y Comercialización" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </div>
          <div className="realestate-content">
            <h3>Captación y Comercialización</h3>
            <p>Personal especializado en captación, asesoría y gestión de propiedades para venta o comercialización. Producción de material visual con fotos y videos profesionales para presentar los inmuebles de forma atractiva y efectiva</p>
          </div>
        </div>

        {/* Servicio 2 - Imagen DERECHA */}
        <div className="realestate-item realestate-reverse">
          <div className="realestate-imagen">
            <img src={realEstateImages[1]} alt="Publicidad Inmobiliaria" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </div>
          <div className="realestate-content">
            <h3>Publicidad Inmobiliaria</h3>
            <p>Publicación de inmuebles en páginas de alto reconocimiento con las que tenemos convenio. Los interesados podrán visualizar los inmuebles disponibles y asignar los de su mayor interés para posterior ampliación mediante visitas a los predios.</p>
          </div>
        </div>

        {/* Servicio 3 - Imagen IZQUIERDA */}
        <div className="realestate-item">
          <div className="realestate-imagen">
            <img src={realEstateImages[2]} alt="Programación de Citas" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </div>
          <div className="realestate-content">
            <h3>Programación de Citas</h3>
            <p>Agendamiento de visitas por parte de clientes potenciales coordinadas con anterioridad con el propietario del inmueble. Toda visita estará acompañada por uno de nuestros asesores designados para atender personalmente al cliente citado.</p>
          </div>
        </div>

        {/* Servicio 4 - Imagen DERECHA (reutiliza imagen 0) */}
        <div className="realestate-item realestate-reverse">
          <div className="realestate-imagen">
            <img src={realEstateImages[3]} alt="Atención Telefónica" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </div>
          <div className="realestate-content">
            <h3>Atención Telefónica</h3>
            <p>Las personas interesadas podrán contactarnos a los números telefónicos registrados de domingo a domingo. Con nuestro servicio, nuestros clientes no tienen que suministrar sus teléfonos privados para dar información sobre el inmueble.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealEstateServices;
