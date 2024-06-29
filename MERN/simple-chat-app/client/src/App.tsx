import React, { FC, useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./App.css";

const socket = io("http://localhost:3000");

const App: FC = () => {
	const [username, setUsername] = useState<string>("");
	const [room, setRoom] = useState<string>("");
	const [showChat, setShowChat] = useState<boolean>(false);

	const joinRoom = () => {
		if (username !== "" && room !== "") {
			socket.emit("join_room", room);
		}
		setShowChat(true);
	};

	return (
		<div className="App">
			{!showChat ? (
				<div className="chatJoinContainer">
					<h3>Join a Chat</h3>
					<input
						type="text"
						placeholder="Your name..."
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
					/>
					<input
						type="text"
						placeholder="Room ID"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setRoom(e.target.value)
						}
					/>
					<button onClick={joinRoom}>Join a Room</button>
				</div>
			) : (
				<Chat socket={socket} username={username} room={room} />
			)}
		</div>
	);
};

export default App;
