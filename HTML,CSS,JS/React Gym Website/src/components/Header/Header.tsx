import { FC } from "react";
import "./Header.css";
import Logo from "/images/logo.png";

const Header: FC = () => {
	return (
		<header className="header">
			<img src={Logo} alt="" className="logo" />
			<ul className="header-menu">
				<li>Home</li>
				<li>Programs</li>
				<li>Why Us</li>
				<li>Plans</li>
				<li>Testimonials</li>
			</ul>
		</header>
	);
};

export default Header;
