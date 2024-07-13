import React from 'react';
import './index.css';
import './components/Icon.css';
import Icon from './components/Icons';


const App = () => {
  const handleThemeChange = () => {
    // Lógica para mudar o tema aqui
    console.log('Mudar para tema escuro');
  };

  return (
    <div className="main-container">
      <div className="content">
        <div className="text-container">
          <strong>
            <p>Cross-App</p>
            <p>Messenger</p>
            <p>3D Icons</p>
          </strong>
          <div className="theme-switcher">
          <button className="theme-button" onClick={handleThemeChange}>Mudar Tema</button>
        </div>
        </div>
        <div className="icon-container">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default App; // Exporta o componente App como padrão
