import { useState } from "react";

const Button = () => {
	const [showAnotherButton, setShowAnotherButton] = useState<boolean>(false);

	return (
		<div>
			<button
				data-testid="button"
				onClick={() => setShowAnotherButton((prev) => !prev)}
			>
				Click Me
			</button>
			{showAnotherButton && <button data-testid="button">Click Me</button>}
		</div>
	);
};

export default Button;
