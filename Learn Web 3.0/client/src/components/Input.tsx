import { FC } from "react";

interface InputProps {
	placeholder: string;
	name: string;
	type: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: FC<InputProps> = ({
	placeholder,
	name,
	type,
	value,
	handleChange,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			step="0.0001"
			value={value}
			onChange={(e) => handleChange(e, name)}
			className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
		/>
	);
};

export default Input;
