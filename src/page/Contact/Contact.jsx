import React, { useState } from 'react';
import './Contact.css'; // Estilos para la página de contacto

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Construye cuerpo
  const body =
    `Nombre: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Teléfono: ${formData.phone}\n` +
    `Comentario:\n${formData.comment}`;

  // Arma el mailto
  const mailtoLink = `mailto:telemarketergerencia@gmail.com?subject=Consulta%20desde%20sitio%20web&body=${encodeURIComponent(body)}`;

  // Abre el correo con los datos ya prellenados
  window.location.href = mailtoLink;

  // Opcional: limpiar formulario después de abrir el mail
  setFormData({ name: '', email: '', phone: '', comment: '' });
};

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        {/* Columna de Información */}
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>
            ¿Tienes alguna pregunta o necesitas asistencia? Completa el formulario y nuestro equipo
            se pondrá en contacto contigo a la brevedad.
          </p>
          <div className="info-item">
            <strong>Email:</strong> <a href="telemarketergerencia@gmail.com">telemarketergerencia@gmail.com</a>
          </div>
          <div className="info-item">
            <strong>Direccion:</strong> <a href="direccion:BogotáD.C.Carrera7No.6450">Bogotá D.C. Carrera 7 No. 64 50</a>
          </div>
          <div className="info-item">
            <strong>Teléfono:</strong> <a href="tel:+573243869227">+57 3243869227</a>
          </div>
          <div className="info-item">
            <strong>Direccion:</strong> <a href="direccion:BarranquillaCarrera57No.7471">Barranquilla Carrera 57 No. 74 71</a>
          </div>
          <div className="info-item">
            <strong>Teléfono:</strong> <a href="tel:+573103612721">+57 3103612721</a>
          </div>
          <div className="info-item">
            <strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 5:00 PM
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número de Teléfono (Opcional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comentario o Pregunta</label>
              <textarea
                id="comment"
                name="comment"
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
