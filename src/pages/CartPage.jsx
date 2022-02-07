import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
	const { cart, removeItem, totalPrice,} = useCart();
	return (
		<div>
			<h1>Carrito</h1>
			{cart.map((compra) => {
				return (
					<div key={compra.Item.id} className="BoxCart">
						<p>Articulo: {compra.Item.nombre}</p>
						<p>Cantidad: {compra.quantity}</p>
						<p>
							Precio: {"$"}
							{compra.Item.precio}
						</p>
						{/*como se hace el ItemSizeSelect?/*
						{/* <p>talle: <ItemSizeSelect /> </p> */}
						<img src={compra.Item.img} alt={compra.Item.nombre} className="ImgCart" />
						<br />
						{/* Eliminar productos del carrito */}
						<button onClick={() => removeItem(compra.Item.id)} className="pushButton">
							Eliminar Articulo
						</button>
						<h3>Total de la compra: $ {totalPrice().toFixed(2)}</h3>
						
					</div>
				);
			})}
		</div>
	);
};

export default CartPage;
