import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	
	const [cart, setCart] = useState([]);

	const [count, setCount] = useState(1);

	const addItem = (Item, quantity, count) => {
		const newItem = { Item, quantity };
		Swal.fire({
			title: "Producto agregado!",
			text: `Agregaste ${Item.descripcion}. Cantidad: ${count}`,
			icon: "success",
			confirmButtonText: "Aceptar",
		});
		console.log("se agrego al carrito", newItem);
		setCart((prevState) => [...prevState, newItem]);
	};

	
	const totalPrice = () => {
		return cart.reduce((acc, item) => {
			return acc + item.Item.precio * item.quantity;
		}, 0);
	};

	const sumQuantity = () => {
		let sum = 0;
		cart.forEach((item) => {
			sum += item.quantity;
		});
		return sum;
	};
const removeItem = (id) => {
	setCart((prevState) => prevState.filter((item) => item.Item.id !== id));
};
	const removeFromCart = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const subTotal = (price, quantity) => {
		return price * quantity;
	};

	const sumTotal = () => {
		let sum = 0;
		cart.forEach((item) => {
			sum += item.quantity * item?.Item.precio;
		});
		return sum;
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, totalPrice, sumQuantity, removeFromCart, subTotal, sumTotal, clearCart, removeItem, count, setCount}}
		>
			{children}
		</CartContext.Provider>
	);
};
export const useCart = () => useContext(CartContext);
