import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
    return(
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Produtos</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    );
}