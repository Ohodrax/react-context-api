// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import "./Products.css";

export default function Products() {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    return(
        <div className="products">
            <h1>Produtos</h1>
            <p>Valor do contador: { counter }</p>
        </div>
    );
}