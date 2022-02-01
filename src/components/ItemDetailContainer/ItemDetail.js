import React from 'react';
import ItemCounter from '../Counter/ItemCounter';
import "./ItemDetail.css"
const ItemDetail = ({Item}) => {
  return (
      <div className='ItemDetail'>
        <div className='ItemDetail-image'>
          <h2>{Item.nombre}</h2>
          <img src={Item.img} alt={Item.nombre} className='ImgDetail'/>
        </div>
        <div className='ItemDetail-info'>
          <p className='desciptionDetail'>{Item.descripcion}</p>
          <p className='priceDetail'>{"$"}{Item.precio}</p>
          <ItemCounter Item={Item} />
          </div>
      </div>
  );

};

export default ItemDetail;
