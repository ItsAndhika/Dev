import { FC } from "react";
import Header from "./components/Header/Header";
import Posts from "./pages/Posts/Posts";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Posts />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
};

export default App;
