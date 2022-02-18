import React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";


const CartPage = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, phone);
	};
	const { cart, removeItem, totalPrice } = useCart();
	const newOrder = {
		buyer: {
			name: "",
			phone: "",
		},
		items : cart.map(item => {
			return {
				id: item.id,
				quantity: item.quantity
			}
		}
		),
		total: {totalPrice}
		

	}
	console.log(newOrder);

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
					</div>
				);
			})}
			{/* <CartForm /> */}

			
		<div>
			<h2>Introduzca sus datos:</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Escriba su nombre"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="phone">Teléfono:</label>
				<input
					type="number"
					id="phone"
					name="phone"
					placeholder="Escriba su nombre"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input type="submit" value="Finalizar Compra" />
			</form>
						
		</div>
		</div>
	);
};


export default CartPage;
