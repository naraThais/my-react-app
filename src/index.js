import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Icon.css';
import Icon from './components/Icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-container">
    <div className="content">
      <div className="text-container">
        <strong><p>Cross-App</p>
        <p>Messenger</p>
        <p>3D Icons</p></strong>
      </div>
      <div className="icon-container">
        <Icon />
      </div>
    </div>
  </div>
);
