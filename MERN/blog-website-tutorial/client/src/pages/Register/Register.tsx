import React, { FC, useState } from "react";
import { register } from "../../api";

const Register: FC = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		// try {
		register({
			username,
			password,
		})
			.then((response) => console.log(response))
			.catch((error) => console.error(error));
	};

	return (
		<main>
			<form action="" onSubmit={handleSubmit}>
				<h1 className="font-bold text-3xl text-center mb-5">Register Please</h1>
				<input
					type="text"
					className="block w-full p-2 outline-none bg-gray-200 mb-3 rounded-md"
					placeholder="Username..."
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					autoFocus
					required
				/>
				<input
					type="password"
					className="block w-full p-2 outline-none bg-gray-200 mb-3 rounded-md"
					placeholder="Password..."
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					required
				/>
				<button
					type="submit"
					className="w-full bg-[#555] text-center text-white rounded-md py-2 px-3 transition ease-in-out duration-300 hover:bg-[#666]"
				>
					Register
				</button>
			</form>
		</main>
	);
};

export default Register;
