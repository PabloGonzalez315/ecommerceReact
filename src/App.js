import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductosPage from "./pages/ProductosPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Navbar />
				<div className="container">
					<Routes>
						<Route path="/">
							<Route index element={<HomePage />} />
							<Route path="about" element={<AboutPage />} />
						</Route>
						<Route path="productos">
							<Route index element={<ProductosPage />} />
							<Route path=":productId" element={<ProductDetailPage />} />
						</Route>
						<Route path="cart">
							<Route index element={<CartPage />} />
						</Route>
						<Route path="Checkout/:orderId" element={<CheckoutPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
