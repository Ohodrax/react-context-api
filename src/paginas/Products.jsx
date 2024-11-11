// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import "./Products.css";

export default function Products() {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color } = useTitleColorContext();

    return(
        <div className="products">
            <h1 style={{color: color}}>Produtos</h1>
            <p>Valor do contador: { counter }</p>
        </div>
    );
}