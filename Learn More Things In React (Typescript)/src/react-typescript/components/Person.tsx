import { FC, useContext } from "react";
import { AppContext, AppContextType } from "../App";
import { HairColor } from "../constants/HairColor";

interface Props {
	name: string;
	age: number;
	email: string;
	hairColor: HairColor;
}

const Person: FC<Props> = ({ name, age, email, hairColor }) => {
	// const [country, setCountry] = useState<string>("");

	// type NameType = "Lodon" | "Udin";
	// const nameForTYpe: NameType = "Lodon";
	const { setCountry } = useContext(AppContext) as AppContextType;

	return (
		<div>
			<h1>{name}</h1>
			<h1>{age}</h1>
			<h1>{email}</h1>
			<h1>{hairColor}</h1>
			<input
				type="text"
				name=""
				id=""
				placeholder="Write down your country..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setCountry(e.target.value)
				}
			/>
		</div>
	);
};

export default Person;
