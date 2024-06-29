import React, { useContext } from "react";
import { AppContext } from "./UseContext";

const Login = () => {
	const { setUsername } = useContext(AppContext);

	return (
		<input
			type="text"
			onChange={(e) => setUsername((prev) => (prev = e.target.value))}
		/>
	);
};

export default Login;
