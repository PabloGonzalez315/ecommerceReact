import React from 'react';

const ItemDetail = ({Item}) => {
  return (
  <div>
    <h2>{Item.nombre}</h2>
    <img src={Item.img} alt={Item.nombre} />
    <p>{Item.descripcion}</p>
    <p>{Item.precio}</p>
    </div> )

};

export default ItemDetail;
