import { FC } from "react";

interface Props {
	messagesData: Message[];
	isLoading: boolean;
	isError: boolean;
}

const Contact: FC<Props> = ({ messagesData, isLoading, isError }) => {
	if (isLoading) return <h1 className="w-2/6">Loading...</h1>;
	if (isError) return <h1 className="w-2/6">Sorry, there was an error</h1>;
	if (!messagesData.length) return <h1 className="w-2/6">Data is empty</h1>;

	return (
		<section className="w-2/6 h-screen overflow-y-scroll">
			{messagesData.map((data) => (
				<div
					className="flex items-center w-full h-24 p-5 border-b cursor-pointer transition-primary hover:bg-gray-100"
					key={data._id}
				>
					<img
						src="/images/coffee.jpeg"
						alt=""
						className="w-20 h-20 object-cover rounded-full mr-5 aspect-square"
					/>
					<div className="overflow-hidden">
						<h4 className="text-lg font-bold">{data.sender}</h4>
						<p className="max-w-[20ch] overflow-ellipsis overflow-hidden whitespace-nowrap">
							{data.text}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Contact;
