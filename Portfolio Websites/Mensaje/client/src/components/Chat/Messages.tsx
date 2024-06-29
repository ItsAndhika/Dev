import { FC } from "react";
import {
	IconChevronLeft,
	IconDotsVertical,
	IconSend,
} from "@tabler/icons-react";

const Messages: FC = () => {
	return (
		<section className="w-4/6 h-screen relative flex flex-col justify-between">
			<div className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 px-5 flex items-center py-2">
				<button>
					<IconChevronLeft color="white" size={30} />
				</button>
				<img
					src="/images/coffee.jpeg"
					alt="coffee"
					className="w-12 h-12 aspect-square rounded-full object-cover ml-3"
				/>
				<div className="flex flex-col ml-2">
					<h3 className="font-medium text-white">Lodon</h3>
				</div>
				<button className="ml-auto">
					<IconDotsVertical color="white" />
				</button>
			</div>
			<div className="w-full h-full flex flex-col gap-3 bg-slate-900 p-5 overflow-y-scroll">
				<div className="w-max p-1 rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-600">
					Lodon
				</div>
			</div>
			<div className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-500 flex justify-center items-center p-4">
				<input
					type="text"
					className="w-11/12 h-10 bg-slate-300 border backdrop-blur-md font-medium rounded-xl p-2 placeholder:text-slate-600 placeholder:font-medium"
					placeholder="Message"
				/>
				<button className="w-1/12 flex justify-center items-center">
					<IconSend color="white" />
				</button>
			</div>
		</section>
	);
};

export default Messages;
