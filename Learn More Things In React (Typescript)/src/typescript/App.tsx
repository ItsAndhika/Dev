import "./App.css";
import { Person, Country } from "./Person";

function App() {
	return (
		<div>
			<Person
				name={"Budi"}
				email={"budi@gmail.com"}
				age={20}
				isMarried={false}
				friends={["Jono", "Udin", "Ilham", "Lodon"]}
				country={Country.Mexico}
			/>
		</div>
	);
}

export default App;
