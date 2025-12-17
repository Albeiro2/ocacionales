import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [selectedCompany, setSelectedCompany] = useState('telemarketer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const companyData = {
    telemarketer: {
      title: 'Telemarketer BPO',
      color: '#2E8BC0',
      email: 'telemarketergerencia@gmail.com',
      locations: [
        {
          city: 'Bogotá D.C.',
          address: 'Carrera 7 No. 64 50',
          phone: '+57 3243869227'
        },
        {
          city: 'Barranquilla',
          address: 'Carrera 57 No. 74 71',
          phone: '+57 3103612721'
        }
      ],
      schedule: 'Lunes a Viernes, 9:00 AM - 5:00 PM'
    },
    vitreum: {
      title: 'Corporación Vitreum',
      color: '#34b97f',
      email: 'contacto@vitreum.org',
      locations: [
        {
          city: 'Bogotá D.C.',
          address: 'Carrera 7 No. 64 50',
          phone: '+57 3243869227'
        }
      ],
      schedule: 'Lunes a Viernes, 8:00 AM - 6:00 PM'
    }
  };

  const currentCompany = companyData[selectedCompany];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body =
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Comentario:\n${formData.comment}`;

    const mailtoLink = `mailto:${currentCompany.email}?subject=Consulta%20desde%20sitio%20web%20${currentCompany.title}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', phone: '', comment: '' });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Selector de empresa */}
      <div className="company-selector">
        <button
          className={`company-button ${selectedCompany === 'telemarketer' ? 'active telemarketer' : ''}`}
          onClick={() => setSelectedCompany('telemarketer')}
        >
          Telemarketer BPO
        </button>
        <button
          className={`company-button ${selectedCompany === 'vitreum' ? 'active vitreum' : ''}`}
          onClick={() => setSelectedCompany('vitreum')}
        >
          Corporación Vitreum
        </button>
      </div>

      <div className="contact-container">
        {/* Columna de Información */}
        <div 
          className="contact-info"
          style={{ backgroundColor: currentCompany.color }}
        >
          <h2>Contáctanos</h2>
          <h3 className="company-name">{currentCompany.title}</h3>
          <p>
            ¿Tienes alguna pregunta o necesitas asistencia? Completa el formulario y nuestro equipo
            se pondrá en contacto contigo a la brevedad.
          </p>
          
          <div className="info-item">
            <strong>Email:</strong> 
            <a href={`mailto:${currentCompany.email}`}>{currentCompany.email}</a>
          </div>

          {currentCompany.locations.map((location, index) => (
            <div key={index} className="location-group">
              <div className="info-item">
                <strong>{location.city}:</strong> {location.address}
              </div>
              <div className="info-item">
                <strong>Teléfono:</strong> 
                <a href={`tel:${location.phone}`}>{location.phone}</a>
              </div>
            </div>
          ))}

          <div className="info-item">
            <strong>Horario:</strong> {currentCompany.schedule}
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
            <button 
              type="submit" 
              className="submit-button"
              style={{ backgroundColor: currentCompany.color }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
