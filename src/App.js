import React, { useState } from 'react';
import './index.css'; // Importa o arquivo de estilos
import './components/Icon.css'; // Importa os estilos do ícone
import Icon from './components/Icons';

const App = () => {
  const [theme, setTheme] = useState('light'); // Estado inicial do tema

  const handleThemeChange = () => {
    // Lógica para mudar o tema
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Alternar entre light e dark
    setTheme(newTheme); // Atualiza o estado do tema
    console.log(`Mudar para tema ${newTheme}`);
  };

  return (
    <div className={`main-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="content">
        <div className="text-container">
          <strong>
            <p>Cross-App</p>
            <p>Messenger</p>
            <p>3D Icons</p>
          </strong>
          <div className="theme-switcher">
          <button className="theme-button" onClick={handleThemeChange}>
           {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
          </button>
        </div>
        </div>
        <div className="icon-container">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default App;
