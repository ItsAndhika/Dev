import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
	return (
		<div>
			<h1 className="font-bold text-3xl text-center mt-10">404 NOT FOUND!</h1>
			<Link to={"/"} className="flex justify-center">
				Back to posts
			</Link>
		</div>
	);
};

export default NotFound;
