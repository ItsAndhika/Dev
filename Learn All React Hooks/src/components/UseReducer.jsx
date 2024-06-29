import React, { useState, useReducer } from "react";

const UseReducer = () => {
	// let [counter, setCounter] = useState(0);
	// let [showText, setShowText] = useState(true);

	const reducer = (state, action) => {
		switch (action.type) {
			case "increment":
				return { count: state.count + 1, showText: state.showText };
			case "toggleShowText":
				return { count: state.count, showText: !state.showText };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	return (
		<div>
			{/* Bottom code takes action of two states from only a button */}
			{/* {counter}
			<br />
			<br />
			<button
				onClick={(e) => {
					setCounter((prev) => prev + 1);
					setShowText((prev) => !prev);
				}}
			>
				Click Here
			</button>
			<br />
			<br />
			<p></p>
			<p>{showText ? "This is a text" : ""}</p> */}
			{/* Use useReducer state when try to execute more than one action or state like bottom code */}
			{state.count}
			<br />
			<br />
			<button
				onClick={(e) => {
					dispatch({ type: "increment" });
					dispatch({ type: "toggleShowText" });
				}}
			>
				Click Here
			</button>
			<br />
			<br />
			<p></p>
			<p>{state.showText && "This is a text"}</p>
		</div>
	);
};

export default UseReducer;
