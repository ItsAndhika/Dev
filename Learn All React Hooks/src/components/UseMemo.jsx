import React, { useEffect, useState, useMemo, Suspense } from "react";
import axios from "axios";

const UseMemo = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				setData(response.data);
			});
	}, []);

	const findLongestName = (comments) => {
		if (!comments) return null;
		let longestName = "";

		comments.map((comment) => {
			let currentName = comment.body;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		});

		console.log("THIS WAS COMPUTED");

		return longestName;
	};

	const getLongestName = useMemo(() => findLongestName(data), [data]);

	return (
		<div>
			<Suspense fallback={<h1>Loading...</h1>}>
				<p>{getLongestName}</p>
				{/* <p>{findLongestName(data)}</p> */}
			</Suspense>
			<button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
			{toggle && <h1>toggle</h1>}
		</div>
	);
};

export default UseMemo;
