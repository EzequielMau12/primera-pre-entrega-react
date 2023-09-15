// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Brand</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">Categoría 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Categoría 2</a>
          </li>
          {/* Agrega más categorías si es necesario */}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
