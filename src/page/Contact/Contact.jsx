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
    // Aquí iría la lógica para enviar el formulario (ej: usando EmailJS, o a un backend)
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    // Limpiar el formulario
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
            <strong>Email:</strong> <a href="mailto:soporte@clinicabienestar.com">soporte@telemarket.com</a>
          </div>
          <div className="info-item">
            <strong>Teléfono:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
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
