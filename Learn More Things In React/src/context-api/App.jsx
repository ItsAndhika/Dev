import { useState, createContext } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Navbar from "./pages/Navbar";

export const AppContext = createContext();

const App = () => {
	const [username, setUsername] = useState("Hans");

	return (
		<div>
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="*" element={<h1>404 Page Not Found</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
};

export default App;
