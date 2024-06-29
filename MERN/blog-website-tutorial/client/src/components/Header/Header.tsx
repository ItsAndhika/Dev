import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../api";

const Header: FC = () => {
	useEffect(() => {
		profile()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<header className="px-10 py-5 max-w-[500px] mx-auto flex justify-between items-center">
			<Link to="/" className="font-bold">
				Blog
			</Link>
			<nav>
				<ul className="flex gap-[15px]">
					<li>
						<Link to={"/login"}>Login</Link>
					</li>
					<li>
						<Link to={"/register"}>Register</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
