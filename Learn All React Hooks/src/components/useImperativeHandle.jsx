import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
	// This hook is fuckin' complicated
	const buttonRef = useRef(null);

	return (
		<div>
			<button onClick={() => buttonRef.current.alterToggle()}>
				Button From Parent
			</button>
			<br />
			<br />
			<Button ref={buttonRef} />
		</div>
	);
};

export default UseImperativeHandle;
