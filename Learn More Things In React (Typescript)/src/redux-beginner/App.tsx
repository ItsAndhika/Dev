import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
	return (
		<Provider store={store}>
			{" "}
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="*" element={<PageNotFound />}></Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
