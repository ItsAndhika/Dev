import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div>
			<h1>404 Page Not Found!</h1>
			<Link to={"/"}>Back to home page</Link>
		</div>
	);
};

export default PageNotFound;
