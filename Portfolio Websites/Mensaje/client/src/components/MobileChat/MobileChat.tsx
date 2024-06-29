import { FC, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const MobileChat: FC = () => {
	useEffect(() => {
		socket.emit("message_send", { message: "Hello ma man!" });
	}, []);

	return (
		<main className="flex justify-center items-center sm:hidden">
			<div className="container">
				<section className="w-full">
					<div className="w-full h-[120px] flex p-5 bg-slate-100 border-t border-b gap-5 cursor-pointer transition-primary hover:bg-slate-200">
						<img
							src="/images/coffee.jpeg"
							alt="Coffee"
							className="w-20 h-full object-cover rounded-full"
						/>
						<div className="flex flex-col justify-center">
							<h2 className="text-xl font-semibold">Coffee Shop</h2>
							<p className="text-base font-light">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</div>
					<div className="w-full h-[120px] flex p-5 bg-slate-100 border-t border-b gap-5 cursor-pointer transition-primary hover:bg-slate-200">
						<img
							src="/images/coffee.jpeg"
							alt="Coffee"
							className="w-20 h-full object-cover rounded-full"
						/>
						<div className="flex flex-col justify-center">
							<h2 className="text-xl font-semibold">Coffee Shop</h2>
							<p className="text-base font-light">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MobileChat;
