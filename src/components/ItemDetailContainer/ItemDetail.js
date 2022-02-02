import React from 'react';
import ItemCounter from '../Counter/ItemCounter';
import "./ItemDetail.css"
import ItemSizeSelect from '../ItemSizeSelect/ItemSizeSelect';
const ItemDetail = ({Item}) => {
  return (
      <div className="ItemDetail">
          <div className="ItemDetail-image">
              
              <img src={Item.img} alt={Item.nombre} className="ImgDetail" />
          </div>
          <div className="ItemDetail-info">
              <p className="desciptionDetail">{Item.descripcion}</p>
              <p className="priceDetail">
                  {"$"}
                  {Item.precio}
              </p>
              <div className="sizeSelect">
                <p className='textSize'>Seleccionar Talla</p>
                  <ItemSizeSelect Item={Item} />
              </div>
              <ItemCounter Item={Item} />
          </div>
      </div>
  );

};

export default ItemDetail;
