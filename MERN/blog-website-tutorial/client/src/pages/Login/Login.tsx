import { FC, useState } from "react";
import { login } from "../../api";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Login: FC = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate: NavigateFunction = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		login({
			username,
			password,
		})
			.then(() => {
				alert("Login Success");
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
				alert("Wrong credentials");
			});
	};

	return (
		<main>
			<form action="" onSubmit={handleSubmit}>
				<h1 className="font-bold text-3xl text-center mb-5">Login Here</h1>
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
				<button className="w-full bg-[#555] text-center text-white rounded-md py-2 px-3 transition ease-in-out duration-300 hover:bg-[#666]">
					Login
				</button>
			</form>
		</main>
	);
};

export default Login;
