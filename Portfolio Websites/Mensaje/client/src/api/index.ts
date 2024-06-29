import axios from "axios";

export const getUsers = (): Promise<Users[]> =>
	axios.get<Users[]>("http://localhost:3000/api/user").then((res) => res.data);

export const getAllMessage = (): Promise<Message[]> =>
	axios
		.get<Message[]>("http://localhost:3000/api/message")
		.then((res) => res.data);
