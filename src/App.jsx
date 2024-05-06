import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Home from "./paginas/Home";
import Products from "./paginas/Products";
import About from "./paginas/About";

import Navbar from "./componentes/Navbar";

function App() {
	return (
		<div className="App">
			<h1>Context</h1>
			<BrowserRouter>
				<Navbar/>
				
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/products" element={<Products/>} />
					<Route path="/about" element={<About/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;