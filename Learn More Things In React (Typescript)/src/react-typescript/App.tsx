import { FC, createContext, useState } from "react";
import Person from "./components/Person";
import { HairColor } from "./constants/HairColor";

export type AppContextType = {
	country: string;
	setCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | null>(null);

const App: FC = () => {
	const [country, setCountry] = useState<string>("");

	return (
		<AppContext.Provider value={{ country, setCountry }}>
			<div>
				<h1>You are from {country}</h1>
				<Person
					name="Lodon"
					age={20}
					email="lodon@gmail.com"
					hairColor={HairColor.brunette}
				/>
			</div>
		</AppContext.Provider>
	);
};

export default App;
