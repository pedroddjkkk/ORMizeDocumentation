import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar>
      <NavBar.Item>Home</NavBar.Item>
    </NavBar>
  </React.StrictMode>
);

