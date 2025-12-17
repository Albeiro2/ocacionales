import React, { useState, useRef } from 'react';
import './Certificate.css';
import { images } from '../../assets/assets';

const Certificate = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / rect.width) * 60;
    const rotateX = -(mouseY / rect.height) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="certificate-section">
      <h2 className="certificate-title">Certificado mérito empresarial</h2>
      
      <div 
        className="certificate-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className={`certificate-wrapper ${isDragging ? 'dragging' : ''}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          <img 
            src={images.certificado} 
            alt="Certificado Telemarketer BPO" 
            className="certificate-image"
            draggable="false"
          />
        </div>
      </div>
      
      <p className="certificate-instruction">
        Haz clic y arrastra para girar el certificado
      </p>
    </div>
  );
};

export default Certificate;
