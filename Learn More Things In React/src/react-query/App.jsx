import { useState, createContext } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Navbar from "./pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

const App = () => {
	const [username, setUsername] = useState("Hans");
	const client = new QueryClient();

	return (
		<div>
			<AppContext.Provider value={{ username, setUsername }}>
				<QueryClientProvider client={client}>
					<Router>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/menu" element={<Menu />} />
							<Route path="*" element={<h1>404 Page Not Found</h1>} />
						</Routes>
					</Router>
				</QueryClientProvider>
			</AppContext.Provider>
		</div>
	);
};

export default App;
