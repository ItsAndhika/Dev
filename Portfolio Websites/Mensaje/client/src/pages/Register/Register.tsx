import { FC } from "react";
import { useNavigate, NavigateFunction, Link } from "react-router-dom";

const Register: FC = () => {
	const navigate: NavigateFunction = useNavigate();

	const handleSubmit = () => {
		navigate("/login");
	};
	return (
		<>
			<div className="main z-30">
				<div className="gradient"></div>
			</div>
			<main className="flex justify-center items-center min-h-screen">
				<form
					action=""
					className="mx-auto w-[60%] max-w-xl p-5 border-t-2 border-t-purple-700 border-2 border-sky-700 border-b-2 border-b-blue-700 rounded-md flex flex-col text-center gap-8 sm:p-10 md:border-none"
					onSubmit={handleSubmit}
				>
					<h2 className="text-2xl font-bold">Please Sign Up</h2>
					<div className="input-box w-full relative">
						<input
							type="text"
							className="w-full border border-black p-2 rounded-md bg-transparent font-semibold"
							autoFocus
							required
						/>
						<span className="absolute p-2 pointer-events-none left-0 transition duration-200 ease-out font-semibold">
							Name
						</span>
					</div>
					<div className="input-box w-full relative">
						<input
							type="number"
							className="w-full border border-black p-2 rounded-md bg-transparent font-semibold"
							required
						/>
						<span className="absolute p-2 pointer-events-none left-0 transition duration-200 ease-out font-semibold">
							Phone Number
						</span>
					</div>
					<div className="input-box w-full relative">
						<input
							type="password"
							className="w-full border border-black p-2 rounded-md bg-transparent font-semibold"
							required
						/>
						<span className="absolute p-2 pointer-events-none left-0 transition duration-200 ease-out font-semibold">
							Password
						</span>
					</div>
					<p className="text-left text-sm font-medium">
						Already have an account? <br />
						<Link
							to={"/login"}
							className="bg-gradient-to-br from-purple-700 via-sky-700 to-blue-700 bg-clip-text text-transparent"
						>
							Sign In
						</Link>
					</p>
					<button
						type="submit"
						className="w-full bg-black text-white p-2 rounded-md hover:bg-zinc-800"
					>
						Sign Up
					</button>
				</form>
			</main>
		</>
	);
};

export default Register;
