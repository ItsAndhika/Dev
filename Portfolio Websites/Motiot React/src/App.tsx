import { FC } from "react";
import { io } from "socket.io-client";

interface SocketData {
	data: string;
}

const App: FC = () => {
	// const [data, setData] = useState("");
	// const [isAutomatic, setIsAutomatic] = useState<boolean>(true);

	const socket = io();
	socket.on("data", ({ data }: SocketData) => {
		// setData(data);
		console.log(data);
	});

	// console.log(data);
	const handleTurnOn = () => {
		const data = "1";
		fetch(`http://localhost:8000/api`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ data }),
		}).catch((error) => console.error(error));
	};

	const handleTurnOff = () => {
		const data = "2";
		fetch(`http://localhost:8000/api`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ data }),
		}).catch((error) => console.error(error));
	};

	return (
		<main>
			<h1>Lamp Control</h1>
			{/* <p id="status">Status &gt; {!data && "Off"}</p> */}
			<div>
				<button onClick={handleTurnOn}>On</button>
				<button onClick={handleTurnOff}>Off</button>
			</div>
		</main>
	);
};

export default App;
