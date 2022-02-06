import React from "react";
import ItemCounter from "../Counter/ItemCounter";
import "./ItemDetail.css";
import ItemSizeSelect from "../ItemSizeSelect/ItemSizeSelect";
import { useState } from "react";

const ItemDetail = ({ Item }) => {
    const [count, setCount] = useState(1);
    const addToCart = () => {
        
    }
    
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
					<p className="textSize">Seleccionar Talla</p>
					<ItemSizeSelect Item={Item} />
				</div>
				<ItemCounter count={count} setCount={setCount} />
				<button className="pushButton" onClick={addToCart} >Agregar al Carro {count} Producto </button>
			</div>
		</div>
	);
};

export default ItemDetail;
