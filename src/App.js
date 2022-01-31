import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";

function App() {
    return (
        <div className="container">
            <Navbar />
            
                <ItemListContainer />
              
            
        </div>
    );
}

export default App;





