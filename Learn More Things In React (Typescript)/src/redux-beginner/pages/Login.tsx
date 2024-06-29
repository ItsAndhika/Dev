import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

interface UserStateValue {
	username: string;
}

interface UserState {
	value: UserStateValue;
}

interface User {
	user: UserState;
}

const Login = () => {
	const [newUsername, setNewUsername] = useState<string>("");
	const dispatch = useDispatch();
	const username = useSelector((state: User) => state.user.value.username);

	return (
		<div>
			<h1>Hello {username}</h1>
			<input
				type="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setNewUsername(e.target.value)
				}
			/>
			<button onClick={() => dispatch(login({ username: newUsername }))}>
				Login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export default Login;
