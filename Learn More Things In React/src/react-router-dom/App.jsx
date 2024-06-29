import { useState, useEffect } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Navbar from "./pages/Navbar";

const App = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="*" element={<h1>404 Page Not Found</h1>} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
