import { FC, useState, useEffect } from "react";

interface IMessageData {
	author: string;
	room: string;
	message: string;
	time: string;
}

interface IProps {
	socket: any;
	username: string;
	room: string;
}

const Chat: FC<IProps> = ({ socket, username, room }) => {
	const [currentMessage, setCurrentMessage] = useState<string>("");
	const [messageList, setMessageList] = useState<Array<IMessageData>>([]);

	useEffect(() => {
		socket.on("received_message", (data: IMessageData) => {
			setMessageList((prev) => [...prev, data]);
		});
	}, [socket]);

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData: IMessageData = {
				author: username,
				room,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours().toString() +
					":" +
					new Date(Date.now()).getMinutes().toString(),
			};

			await socket.emit("send_message", messageData);
			setMessageList((prev) => [...prev, messageData]);
		}
	};

	return (
		<section className="chat-window">
			<div className="chat-header">
				<p>Live Chat</p>
			</div>
			<div className="chat-body">
				{messageList.map((messageData) => {
					return (
						<div
							className="message-content"
							id={username === messageData.author ? "me" : "other"}
						>
							<p className="message">{messageData.message}</p>
							<span>
								<p className="time">{messageData.time}</p>
								<p className="author">{messageData.author}</p>
							</span>
						</div>
					);
				})}
			</div>
			<div className="chat-footer">
				<input
					type="text"
					placeholder="Type here..."
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setCurrentMessage(e.target.value)
					}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>
		</section>
	);
};

export default Chat;
