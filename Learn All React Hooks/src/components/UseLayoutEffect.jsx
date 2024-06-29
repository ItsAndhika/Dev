import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
	const inputRef = useRef(null);

	// useLayoutEffect is called earlier than the useEffect hook

	useLayoutEffect(() => {
		console.log(inputRef.current.value);
	}, []);

	useEffect(() => {
		inputRef.current.value = "Budi";
	}, []);

	return (
		<div>
			<input
				type="text"
				ref={inputRef}
				value={"Lodon"}
				style={{ width: 400, height: 100, fontSize: 30 }}
			/>
		</div>
	);
};

export default UseLayoutEffect;
