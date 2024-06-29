import { FC } from "react";
import Contact from "./Contact";
import Messages from "./Messages";
import { useQuery } from "@tanstack/react-query";
import { getAllMessage } from "../../api";

const Chat: FC = () => {
	const {
		data: messagesData,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["users"],
		queryFn: getAllMessage,
	});
	if (messagesData === undefined) return <h1>Data is undefined</h1>;

	return (
		<main className="hidden h-screen overflow-hidden sm:flex">
			<Contact
				messagesData={messagesData}
				isLoading={isLoading}
				isError={isError}
			/>
			<Messages />
		</main>
	);
};

export default Chat;
