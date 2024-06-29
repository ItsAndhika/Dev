import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/menu">Menu</Link>
		</nav>
	);
};

export default Navbar;
