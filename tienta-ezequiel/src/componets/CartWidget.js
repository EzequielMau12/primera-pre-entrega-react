// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado (fijo) para demostración

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge bg-secondary">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
