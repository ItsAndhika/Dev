import { useState, useCallback, useMemo } from "react";
import Child from "./Child";

const UseCallback = () => {
	const [toggle, setToggle] = useState(false);

	const sayHello = useCallback((name) => {
		return `Hola senor ${name}`;
	}, []);

	// const getSayHello = useMemo(() => sayHello("Lodon"), []);

	return (
		<div>
			<Child sayHello={sayHello} />
			<br />
			<br />
			<button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
			{toggle && <h1>Toggle</h1>}
		</div>
	);
};

export default UseCallback;
