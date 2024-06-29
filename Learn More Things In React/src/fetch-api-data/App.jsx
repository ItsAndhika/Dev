import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const App = () => {
	// const [catFact, setCatFact] = useState("");

	// const fetchCatFact = () => {
	// 	axios
	// 		.get("https://catfact.ninja/fact")
	// 		.then((res) => setCatFact(res.data.fact));
	// };

	// useEffect(() => {
	// 	fetchCatFact();
	// }, []);
	// const [name, setName] = useState("");
	// const [data, setData] = useState(null);

	// const fetchPersonData = () => {
	// 	axios
	// 		.get(`https://api.agify.io/?name=${name}`)
	// 		.then((res) => setData(res.data));
	// };
	// const [familyExcuse, setFamilyExcuse] = useState("");
	// const [partyExcuse, setPartyExcuse] = useState("");
	// const [officeExcuse, setOfficeExcuse] = useState("");
	const [generatedExcuse, setGeneratedExcuse] = useState("");

	const fetchExcuse = (type) => {
		axios
			.get(`https://excuser-three.vercel.app/v1/excuse/${type}`)
			.then((res) => setGeneratedExcuse(res.data[0].excuse));
	};

	return (
		<div>
			{/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
			<br />
			<p>{catFact}</p> */}
			{/* <input
				type="text"
				placeholder="Ex. Lodon"
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<button onClick={fetchPersonData}>Predict Age</button>
			<br />
			<h1>Name: {data?.name}</h1>
			<h1>Predicted age: {data?.age}</h1>
			<h1>Count: {data?.count}</h1> */}

			<h1>Generate An Excuse</h1>
			<button onClick={() => fetchExcuse("party")}>Party</button>
			<br />
			<button onClick={() => fetchExcuse("family")}>Family</button>
			<br />
			<button onClick={() => fetchExcuse("office")}>Office</button>
			<p>{generatedExcuse}</p>
		</div>
	);
};

export default App;
