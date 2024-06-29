import axios from "axios";
import { IRegisterData } from "../interfaces";

export const register = (data: IRegisterData) =>
	axios.post("http://localhost:3000/register", data);
export const login = (data: IRegisterData) =>
	axios.post("http://localhost:3000/login", data, {
		withCredentials: true,
	});
export const profile = () =>
	axios.get("http://localhost:3000/profile", {
		withCredentials: true,
	});
