import Swal from "sweetalert2";
import React from "react";
import ItemCounter from "../Counter/ItemCounter";
import "./ItemDetail.css";
import ItemSizeSelect from "../ItemSizeSelect/ItemSizeSelect";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ Item }) => {
	const { cart, addItem } = useCart();
	const [goToCart, setGoToCart] = useState(false);

	const [count, setCount] = useState(1);

		const addToCart = () => {
		addItem(Item, count);
		Swal.fire({
			title: "Producto agregado!",
			text: `Agregaste ${Item.descripcion}. Cantidad: ${count}`,
			icon: "success",
			confirmButtonText: "Aceptar",
		});
		setGoToCart(true);

	};

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
				{!goToCart ? (
					<ItemCounter count={count} setCount={setCount} initial={1} onAdd={addToCart} />
				) : (
					<div className="d-flex justify-content-center">
						<Link to={`/cart`}>
							<button className="btn btn-warning bg-gradient me-3 mt-3">Ir al carrito</button>
						</Link>
						<Link to={`/productos`}>
							<button className="btn btn-warning bg-gradient ms-3 mt-3">Seguir comprando</button>
						</Link>
					</div>
				)}
				<button className="pushButton" onClick={addToCart}>
					Agregar al Carro {count} Producto
				</button>
			</div>
		</div>
	);
};

export default ItemDetail;