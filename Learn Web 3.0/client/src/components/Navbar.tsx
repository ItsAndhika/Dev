import { FC, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/images/logo.png";
import NavbarItem from "./NavbarItem";
import { navbarItemTitles } from "../data/dummy";

const Navbar: FC = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	return (
		<nav className="w-full flex justify-between items-center p-4 md:justify-center">
			<div className="flex-initial justify-center items-center md:flex-[0.5]">
				<img src={logo} alt="logo" className="w-32 cursor-pointer" />
			</div>
			<ul className="hidden text-white list-none flex-row justify-between items-center flex-initial md:flex">
				{navbarItemTitles.map((title, index) => (
					<NavbarItem key={index} title={title} />
				))}
				<li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer transition hover:bg-[#2546bd]">
					Login
				</li>
			</ul>
			<div className="flex relative">
				{toggleMenu ? (
					<AiOutlineClose
						fontSize={28}
						className="text-white cursor-pointer md:hidden"
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<HiMenuAlt4
						fontSize={28}
						className="text-white cursor-pointer md:hidden"
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in md:hidden">
						<li className="text-xl w-full my-2">
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						{navbarItemTitles.map((title, index) => (
							<NavbarItem key={index} title={title} classProps="my-2 text-lg" />
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
