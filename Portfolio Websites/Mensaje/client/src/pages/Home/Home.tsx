import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
	return (
		<>
			<div className="main">
				<div className="gradient"></div>
			</div>
			<main className="flex justify-center items-center min-h-screen">
				<div className="container flex justify-center items-center flex-col gap-5 max-w-sm md:max-w-lg lg:max-w-none">
					<h1 className="text-4xl text-center mt-10 font-bold capitalize  lg:text-5xl">
						Chat with everyone <br />
						<span className="text-transparent bg-gradient-to-br from-purple-700 to-blue-700 bg-clip-text">
							You know easily
						</span>
					</h1>
					<p className="text-center font-semibold sm:max-w-md md:text-lg">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut
						accusantium iste molestiae possimus. Qui dicta facere autem maxime
						quos.
					</p>
					<div className="flex gap-5">
						<button>
							<Link
								to={"/register"}
								className="text-white px-3 py-2 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 transition-primary hover:saturate-150 2xl:px-4 md:py-3"
							>
								Get Started
							</Link>
						</button>
						<button>
							<Link
								to={"https://primananda.vercel.app"}
								target="_blank"
								className="text-white px-3 py-2 rounded-full bg-black transition-primary hover:bg-transparent border border-black hover:text-black 2xl:px-4 md:py-3"
							>
								About Us
							</Link>
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
