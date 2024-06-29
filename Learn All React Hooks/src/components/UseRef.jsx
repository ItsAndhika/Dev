import React, { useRef } from "react";

const UseRef = () => {
	const inputRef = useRef(null);

	const onClick = () => {
		inputRef.current.value = "";
		inputRef.current.focus();
	};
	return (
		<div>
			<h2>Lodon</h2>
			<input type="text" placeholder="The name..." ref={inputRef} />
			<button onClick={onClick}>Change Name</button>
		</div>
	);
};

export default UseRef;
