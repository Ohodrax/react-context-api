// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../componentes/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import "./Home.css";

export default function Home() {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({type: color});
    }

    return(
        <div className="home">
            <h1 style={{color: color}}>Inicio</h1>
            <p>Valor do contador: { counter }</p>
            {/* <button onClick={() => {setCounter(counter + 1)}}>Add</button> */}
            <ChangeCounter/>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
                <button onClick={() => setTitleColor("")}>Padrão</button>
            </div>
        </div>
    );
}