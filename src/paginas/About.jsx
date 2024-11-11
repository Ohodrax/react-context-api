// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import "./About.css";

export default function About() {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color } = useTitleColorContext();

    return(
        <div className="about">
            <h1 style={{color: color}}>Sobre</h1>
            <p>Valor do contador: { counter }</p>
        </div>
    );
}