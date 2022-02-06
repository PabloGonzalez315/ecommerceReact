import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartPage = () => {
    const carrito = useContext(CartContext);
	return (
		<div>
			<h1>prueba</h1>
			<CartContext.Consumer>
                        </CartContext.Consumer>
		</div>
	);
};

export default CartPage;
