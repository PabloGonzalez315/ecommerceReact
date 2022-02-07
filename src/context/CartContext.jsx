import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (Item, quantity) => {
		const newItem = { Item, quantity };
        console.log("se agrego al carrito", newItem);
		setCart((prevState) => [...prevState, newItem]);
	};

    const removeItem = (id) => {
		setCart((prevState) => prevState.filter((item) => item.Item.id !== id));
	};
				
	const totalPrice = () => {
		return cart.reduce((acc, item) => {
		return acc + item.Item.precio * item.quantity;
		}, 0);
	};
	
	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, totalPrice,}}>
			{children}
		</CartContext.Provider>
	);

};
export const useCart = () => useContext(CartContext);
