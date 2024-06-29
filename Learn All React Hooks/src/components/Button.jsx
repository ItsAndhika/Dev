import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
	const [toggle, setToggle] = useState(false);

	useImperativeHandle(ref, () => ({
		alterToggle() {
			setToggle((prev) => !prev);
		},
	}));
	return (
		<div>
			<button>Button From Child</button>
			<br />
			<br />
			{toggle && <span>Toggle</span>}
		</div>
	);
});

export default Button;
