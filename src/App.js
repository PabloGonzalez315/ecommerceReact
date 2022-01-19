import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import ItemCounter from "./components/Counter/ItemCounter";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Cards id={1} name={"Zapatillas Jordan"} price={15000} size={44} />
            <ItemCounter />
            <Cards id={2} name={"Zapatillas Nike"} price={11000} size={42} />
            <ItemCounter />
            <Cards id={3} name={"Zapatillas Lebron"} price={18000} size={43} />
            <ItemCounter />
            <Cards id={4} name={"Zapatillas Addidas"} price={8000} size={44} />
            <ItemCounter />
        </div>
    );
}

export default App;
