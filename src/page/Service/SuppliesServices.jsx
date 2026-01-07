import React from 'react';
import './Service.css';
import { images } from '../../assets/assets';

const SuppliesServices = () => {
  const suppliesImages = [
    images.oficina,
    images.cafe,
    images.botiquin,
    images.impresora
  ];

  return (
    <section className="supplies-section-escalera">
      <h2>¿Qué servicios y suministros ofrecemos?</h2>
      <div className="supplies-grid-escalera">
        
        {/* Servicio 1 - Oficina y papelería - Imagen IZQUIERDA */}
        <div className="supplies-item">
          <div className="supplies-imagen">
            <img src={suppliesImages[0]} alt="Oficina y papelería" />
          </div>
          <div className="supplies-content">
            <h3>Oficina y papelería</h3>
            <p>Contamos con personal capacitado para apoyar la gestión de oficina, organización documental y atención administrativa. Proveemos materiales de papelería, insumos de impresión y artículos de oficina de alta calidad, garantizando disponibilidad continua.</p>
          </div>
        </div>

        {/* Servicio 2 - Aseo y cafetería - Imagen DERECHA */}
        <div className="supplies-item supplies-reverse">
          <div className="supplies-imagen">
            <img src={suppliesImages[1]} alt="Aseo y cafetería" />
          </div>
          <div className="supplies-content">
            <h3>Aseo y cafetería</h3>
            <p>Disponemos de personal de limpieza y apoyo en cafetería para mantener espacios limpios, ordenados y funcionales. Entregamos productos de aseo, higiene y cafetería, incluyendo detergentes, utensilios, café y complementos necesarios para el bienestar laboral.</p>
          </div>
        </div>

        {/* Servicio 3 - Botiquín y ferretería - Imagen IZQUIERDA */}
        <div className="supplies-item">
          <div className="supplies-imagen">
            <img src={suppliesImages[2]} alt="Botiquín y ferretería" />
          </div>
          <div className="supplies-content">
            <h3>Botiquín y ferretería</h3>
            <p>Ofrecemos personal encargado del mantenimiento básico, apoyo en seguridad ocupacional y control de elementos de primeros auxilios. Suministramos botiquines completos, repuestos, herramientas y equipos esenciales para emergencias y mantenimiento diario.</p>
          </div>
        </div>

        {/* Servicio 4 - Equipos de impresión - Imagen DERECHA */}
        <div className="supplies-item supplies-reverse">
          <div className="supplies-imagen">
            <img src={suppliesImages[3]} alt="Equipos de impresión" />
          </div>
          <div className="supplies-content">
            <h3>Venta y alquiler de equipos de impresión</h3>
            <p>Técnicos especializados encargados de instalación, configuración y soporte de equipos de impresión. Venta y renta de impresoras, fotocopiadoras y multifuncionales de última generación, con opciones flexibles y mantenimiento incluido.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuppliesServices;
