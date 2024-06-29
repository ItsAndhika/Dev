import { FC, useState, useLayoutEffect } from "react";
import "../../App.css";

const App: FC = () => {
	const [counter, setCounter] = useState<number>(0);

	useLayoutEffect(() => {
		if (counter === 0) {
			setCounter(Math.random() * 300);
		}
	}, [counter]);

	return (
		<div>
			<h2>{counter}</h2>
			<h1 onClick={() => setCounter(0)}>Use Layout Effect</h1>
		</div>
	);
};

export default App;
