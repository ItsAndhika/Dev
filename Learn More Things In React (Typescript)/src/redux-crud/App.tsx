import "../App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUsername, deleteUser } from "./features/users";
import { Dispatch } from "@reduxjs/toolkit";

interface UserStateData {
	id: number;
	name: string;
	username: string;
}

interface UserState {
	value: Array<UserStateData>;
}

interface User {
	users: UserState;
}

const App = () => {
	const [name, setName] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const dispatch: Dispatch = useDispatch();
	const userList: UserStateData[] = useSelector(
		(state: User) => state.users.value
	);
	let id: number = userList.length + 1;

	return (
		<>
			<section className="addUser">
				<form
					action=""
					method="post"
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
				>
					<input
						type="text"
						placeholder="Name..."
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
						autoFocus
						required
					/>
					<input
						type="text"
						placeholder="Username..."
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
						required
					/>
					<button
						onClick={() => {
							dispatch(addUser({ id: id++, name, username }));
						}}
					>
						Add User
					</button>
				</form>
			</section>
			<section className="displayUsers">
				{userList.map((user) => (
					<div key={user.id}>
						<h1>{user.name}</h1>
						<h1>{user.username}</h1>
						<input
							type="text"
							placeholder="New Username..."
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setUsername(e.target.value);
							}}
						/>
						<button
							onClick={() => {
								dispatch(
									updateUsername({ id: user.id, name: user.name, username })
								);
							}}
						>
							Update Username
						</button>
						<button
							onClick={() =>
								dispatch(
									deleteUser({
										id: user.id,
										name: user.name,
										username: user.username,
									})
								)
							}
						>
							Delete Username
						</button>
					</div>
				))}
			</section>
		</>
	);
};

export default App;
