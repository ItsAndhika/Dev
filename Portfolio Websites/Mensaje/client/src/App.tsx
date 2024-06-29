import { FC, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const MobileChat = lazy(() => import("./components/MobileChat/MobileChat"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Chat = lazy(() => import("./components/Chat/ChatPage"));

const App: FC = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);

	if (isUserLoggedIn) {
		document.title = "Mensaje | Chat";
	}

	return (
		<>
			{isUserLoggedIn ? (
				<Suspense
					fallback={<h1 className="absolute left-1/2 top-1/2">Loading...</h1>}
				>
					<MobileChat />
					<Chat />
				</Suspense>
			) : (
				<>
					<Navbar />
					<Suspense
						fallback={<h1 className="absolute left-1/2 top-1/2">Loading...</h1>}
					>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</Suspense>
				</>
			)}
		</>
	);
};

export default App;
