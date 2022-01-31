import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({Item}) => {
  return 
  <div>
    <h2>{Item.nombre}</h2>
    <img src={Item.img} alt={Item.name} />
    <p>{Item.descripcion}</p>
    <p>{Item.precio}</p>
    </div>;
};

export default ItemDetail;
