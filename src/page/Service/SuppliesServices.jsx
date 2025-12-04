import React from 'react';
import './Service.css';

const SuppliesServices = () => {
  return (
    <section className="how-it-works-section">
      <h2>¿Qué servicios y suministros ofrecemos?</h2>
      <div className="steps-container">
        <div className="step-card oficina-card">
          <h3>Oficina y papelería</h3>
          <p> Contamos con personal capacitado para apoyar la gestión de oficina, organización documental y atención administrativa.
              Proveemos materiales de papelería, insumos de impresión y artículos de oficina de alta calidad, garantizando disponibilidad continua.</p>
        </div>

        <div className="step-card cafe-card">
          <h3>Aseo y cafetería</h3>
          <p>Disponemos de personal de limpieza y apoyo en cafetería para mantener espacios limpios, ordenados y funcionales.
            Entregamos productos de aseo, higiene y cafetería, incluyendo detergentes, utensilios, café y complementos necesarios para el bienestar laboral</p>
        </div>

        <div className="step-card botiquin-card">
          <h3>Botiquín y ferretería</h3>
          <p>Ofrecemos personal encargado del mantenimiento básico, apoyo en seguridad ocupacional y control de elementos de primeros auxilios.
            Suministramos botiquines completos, repuestos, herramientas y equipos esenciales para emergencias y mantenimiento diario</p>
        </div>

        <div className="step-card impresora-card">
          <h3>Venta y alquiler de equipos de impresión</h3>
          <p>Técnicos especializados encargados de instalación, configuración y soporte de equipos de impresión.
            Venta y renta de impresoras, fotocopiadoras y multifuncionales de última generación, con opciones flexibles y mantenimiento incluido</p>
        </div>

        <div className="step-card inmobiliaria-card">
          <h3>Servicios Inmobiliarios</h3>
          <p>Personal especializado en captación, asesoría y gestión de propiedades para venta o comercialización.
             Producción de material visual con fotos y videos profesionales para presentar los inmuebles de forma atractiva y efectiva</p>
        </div>

        <div className="step-card publicidad-card">
          <h3>Publicidad Inmobiliaria</h3>
          <p>Publicación de inmuebles en páginas de alto reconocimiento con las que tenemos convenio. Los interesados podrán visualizar los inmuebles disponibles y asignar los de su mayor interés para posterior ampliación mediante visitas a los predios.</p>
        </div>

        <div className="step-card citas-card">
          <h3>Programación de Citas</h3>
          <p>Agendamiento de visitas por parte de clientes potenciales coordinadas con anterioridad con el propietario del inmueble. Toda visita estará acompañada por uno de nuestros asesores designados para atender personalmente al cliente citado.</p>
        </div>

        <div className="step-card telefonica-card">
          <h3>Atención Telefónica</h3>
          <p>Las personas interesadas podrán contactarnos a los números telefónicos registrados de domingo a domingo. Con nuestro servicio, nuestros clientes no tienen que suministrar sus teléfonos privados para dar información sobre el inmueble.</p>
        </div>
      </div>
    </section>
  );
};

export default SuppliesServices;
