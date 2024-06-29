import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
	return (
		<header className="w-full flex justify-center items-center shadow-lg p-5 fixed top-0 z-10 backdrop-blur-sm">
			<div className="container max-w-sm flex justify-between items-center sm:max-w-lg md:max-w-2xl lg:max-w-none lg:px-20">
				<Link
					to={"/"}
					className="text-2xl font-bold bg-gradient-to-br from-purple-700 via-sky-700 to-blue-700 text-transparent bg-clip-text transition-primary hover:bg-gradient-to-tl"
				>
					Mensaje
				</Link>
				<div className="w-7 h-5 flex flex-col justify-between items-end cursor-pointer sm:hidden">
					<span className="w-4/6 bg-black h-[3px]"></span>
					<span className="w-full bg-black h-[3px]"></span>
					<span className="w-4/6 bg-black h-[3px]"></span>
				</div>
				<nav className="hidden sm:flex gap-4 lg:gap-10">
					<Link to={"/"}>Home</Link>
					<Link to={"https://primananda.vercel.app"} target="_blank">
						About Us
					</Link>
					<Link to={"/login"}>Sign In</Link>
					<Link to={"/register"}>Sign Up</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
