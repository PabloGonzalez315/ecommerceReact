import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        

            <div className="container">
                <Navbar />
                <ItemListContainer />
                <Item />
           
                <Item />
            </div>
      
    );
}

export default App;





