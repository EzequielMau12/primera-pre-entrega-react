// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{greeting}</h2>
          {/* Agrega el contenido del contenedor aquí */}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
