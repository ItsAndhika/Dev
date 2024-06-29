import { FC, useState, useEffect } from "react";
import "../../App.css";

const App: FC = () => {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		const increment = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(increment);
	}, [counter]);

	return (
		<div>
			<h2>{counter}</h2>
			<h1>Use Effect</h1>
		</div>
	);
};

export default App;
