import React, { useState } from "react";

const UseState = () => {
	let [counter, setCounter] = useState(0);
	let [text, setText] = useState("");

	return (
		<div>
			<button onClick={() => setCounter((prev) => prev - 1)}>-</button>
			{counter}
			<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
			<br />
			<br />
			<input type="text" onChange={(e) => setText(e.target.value)} />
			<p>{text}</p>
		</div>
	);
};

export default UseState;
