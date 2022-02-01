import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductosPage from "./pages/ProductosPage";
import ProductDetailPage from "./pages/ProductDetailPage";



/* const User_Data = {
    nombre: "pablo",
    email: "pablo.alejandro315@gmail.com",
    password: "123456",
    direccion: "calle falsa 123",
    telefono: "123456789",
}; */
function App() {
    return (
       
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
                    </Routes>
                </div>
            </BrowserRouter> 
    );
        
}

export default App;