import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item";


function App() {
    return (
        <div className="container">
            <Navbar />
            {/* <ItemListContainer id={1} name={"Zapatillas Jordan"} price={15000} size={44} />
            <ItemListContainer id={2} name={"Zapatillas Nike"} price={11000} size={42} />
            <ItemListContainer id={3} name={"Zapatillas Lebron"} price={18000} size={43} />
            <ItemListContainer id={4} name={"Zapatillas Addidas"} price={8000} size={44} /> */}
            <Item />

        </div>
    );
}

export default App;
