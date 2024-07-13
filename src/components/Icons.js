// src/components/Icon.js
import React from 'react';
import './Icon.css';
import instagramIcon from '../assets/Instagram.svg';
import messengerIcon from '../assets/Messenger.svg'; // Corrigi o nome do ícone do Messenger

function Icon() {
  return (
    <div className="icons-wrapper">
      {/* Link para Instagram */}
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <div className="iconI-container">
          <img src={instagramIcon} alt="Instagram Icon" className="iconI-image" />
        </div>
      </a>
      
      {/* Link para Messenger ou Telegram */}
      <a href="https://m.me" target="_blank" rel="noopener noreferrer">
        <div className="iconT-container">
          <img src={messengerIcon} alt="Messenger Icon" className="iconT-image" />
        </div>
      </a>
    </div>
  );
}

export default Icon;
