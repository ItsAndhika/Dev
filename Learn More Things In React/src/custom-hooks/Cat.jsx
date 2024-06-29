import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Cat = () => {
	const { data, isLoading, isError, error, refetch } = useQuery(
		["cat"],
		async () => {
			return axios.get("https://catfact.ninja/fact").then((res) => res.data);
		}
	);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>There is an error : {error}</h1>;
	}

	return <h1>{data}</h1>;
};

export default Cat;
