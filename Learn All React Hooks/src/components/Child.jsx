import React, { useEffect } from "react";

const Child = ({ sayHello }) => {
	useEffect(() => {
		console.log("FUNCTION WAS CALLED");
	}, [sayHello]);

	return <div>{sayHello("Lodon")}</div>;
};

export default Child;
