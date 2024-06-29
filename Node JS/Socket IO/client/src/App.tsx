import { FC, useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const App: FC = () => {
	const [message, setMessage] = useState<string>("");
	const [messageReceived, setMessageReceived] = useState<string>("");
	const [room, setRoom] = useState<string>("");

	useEffect(() => {
		socket.on("receive_message", (data: { message: string }) => {
			setMessageReceived(data.message);
		});
	}, []);

	const joinRoom = () => {
		socket.emit("join_room", room);
	};

	const sendMessage = () => {
		socket.emit("send_message", { message, room });
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Room number..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setRoom(e.target.value)
				}
			/>
			<button onClick={joinRoom}>Join</button>
			<input
				type="text"
				placeholder="Message..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setMessage(e.target.value)
				}
			/>
			<button onClick={sendMessage}>Send Message</button>
			<h1>Message:</h1>
			{messageReceived}
		</div>
	);
};

export default App;
