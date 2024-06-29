import { FC, useState, useMemo } from "react";

const App: FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	// const [count, setCount] = useState<number>(0)

	const expensiveCalculation = (): number => {
		return Math.random() * 2000;
	};

	const getCounter = useMemo(() => expensiveCalculation(), []);

	return (
		<div>
			<h2>{getCounter}</h2>
			<button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
			{toggle && <h1>Toggle Showed</h1>}
		</div>
	);
};

export default App;
