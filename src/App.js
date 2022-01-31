import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />}/>
                        </Route> 
                    <Route path="products">
                    <Route index element={<ProductsPage />} />
                    <Route path=":Id" element={<ProductDetailPage />} />
                    </Route>
                </Routes>

                
            </div>
        </BrowserRouter>
    );
}

export default App;
