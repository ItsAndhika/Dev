import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
	const { username } = useContext(AppContext);
	const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
		return axios.get(`https://catfact.ninja/fact`).then((res) => res.data);
	});

	if (isError) return <h1>There is an error</h1>;

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div>
			<h1>Servus {username}</h1>
			<p>Cat fact : {data?.fact}</p>
			<button onClick={refetch}>Generate Again</button>
		</div>
	);
};

export default Home;
