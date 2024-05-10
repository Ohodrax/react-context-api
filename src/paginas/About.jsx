// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import "./About.css";

export default function About() {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    return(
        <div className="about">
            <h1>Sobre</h1>
            <p>Valor do contador: { counter }</p>
        </div>
    );
}