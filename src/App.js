import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Cards id={1} name={"Zapatillas Jordan"} price={15000} size={44} />
            <Cards id={2} name={"Zapatillas Nike"} price={11000} size={42} />
            <Cards id={3} name={"Zapatillas Lebron"} price={18000} size={43} />
            <Cards id={4} name={"Zapatillas Addidas"} price={8000} size={44} />
        </div>
    );
}

export default App;
