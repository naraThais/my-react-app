// src/components/Icon.js
import React from 'react';
import './Icon.css';
import instagramIcon from '../assets/Instagram.svg';
import menssengerIcon from '../assets/Messenger.svg'; // Adicione o ícone do Telegram

function Icon() {
  return (
    <div className="icons-wrapper">
      <div className="iconI-container">
        <img src={instagramIcon} alt="Instagram Icon" className="iconI-image" />
      </div>
      <div className="iconT-container">
        <img src={menssengerIcon} alt="Menssenger Icon" className="iconT-image" />
      </div>
    </div>
  );
}

export default Icon;
