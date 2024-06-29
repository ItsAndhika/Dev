import { useState } from "react";

interface InputProps {
	showDiv: boolean;
}

const Input = ({ showDiv }: InputProps) => {
	const [text, setText] = useState<string>("");
	return (
		<>
			<input
				data-testid="searchBar"
				type="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setText(e.target.value)
				}
			/>
			<h1 data-testid="displaySearch">{text}</h1>
			{showDiv && (
				<p data-searchid="paragraphWeWantToShow">I dunno what i wanna do.</p>
			)}
		</>
	);
};

export default Input;
